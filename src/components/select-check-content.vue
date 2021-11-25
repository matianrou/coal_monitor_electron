<!-- 选择检查内容 树状组件 -->
<template>
	<el-dialog
    title="选择检查内容"
    :close-on-click-modal="false"
    append-to-body
    :visible="visible"
    @close="close">
    <div v-loading="loading" class="select-check">
      <div class="select-check-filter">
        <div>
          <el-input 
            v-model="filter.name" 
            placeholder="请输入检查内容关键字" 
            style="width: 200px;" 
            size="small"
            clearable
          ></el-input>
          <el-button type="primary" size="small" @click="selectFilter">搜索</el-button>
        </div>
        <div>
          <el-select 
            v-model="filter.qdId"
            placeholder="请选择自定义列表"
            size="small"
            clearable
            @change="changeQdList">
            <el-option
              v-for="item in qdList"
              :key="item.qdId"
              :label="item.qdName"
              :value="item.qdId">
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="select-check-col">
        <div class="select-check-col-title">
          <span>选择检查内容</span>
        </div>
        <div v-if="selectedQdList.length === 0" class="select-check-col-tree">
          <el-tree
            ref="checkListTree"
            :data="checkList"
            :props="checkListTreeProps"
            node-key="treeId"
            show-checkbox
            :filter-node-method="filterNode"
            :default-checked-keys="defaultCheckedKeys"
            @check="checkFunctionAuthorization">
            <span class="span-ellipsis" slot-scope="{ node }">
              <span :title="node.label">{{ node.label }}</span>
            </span>
          </el-tree>
        </div>
        <div v-else class="select-danger-col-tree">
          <el-tree
            ref="checkListTree"
            :data="selectedQdList"
            :props="checkListTreeProps"
            node-key="treeId"
            show-checkbox
            :filter-node-method="filterNode"
            @check="checkQdList">
            <span class="span-ellipsis" slot-scope="{ node }">
              <span :title="node.label">{{ node.label }}</span>
            </span>
          </el-tree>
        </div>
      </div>
      <!-- <div class="select-check-col" style="margin-left: 5px;">
        <div class="select-check-col-title">
          <span>已选择检查内容</span>
        </div>
        <div class="select-check-col-tree">
          <el-tree
            :data="selectedcheckList"
            :props="selectedcheckListProps"
            node-key="treeId"
            ref="selectedcheckList"
            default-expand-all>
            <span class="span-ellipsis" slot-scope="{ node }">
              <span :title="node.label">{{ node.label }}</span>
            </span>
          </el-tree>
        </div>
      </div> -->
    </div>
    <span slot="footer">
      <el-button @click="close">取消</el-button>
      <el-button type="primary" @click="save">确定</el-button>
    </span>
	</el-dialog>
</template>

<script>
	import { treeDataTranslate } from '@/utils'
  import GoDB from '@/utils/godb.min.js'
  export default {
    name: 'SelectCheckContent',
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      value: {
        type: Object,
        default: () => {
          return {
            // selectedIdList: []
          }
        }
      },
      corpData: {
        type: Object,
        default: () => {}
      }
    },
    data () {
      return {
        loading: false,
        checkListOriginal: [], // 全部功能原始数据
        checkList: [], // 转换为树形结构的全部功能数组，用于选择
        checkListTreeProps: {
          label: 'treeName',
          children: 'children',
        },
        selectedcheckList: [], // 已选择的功能，树形结构
        selectedcheckListProps: {
          label: 'treeName',
          children: 'children',
        },
        tempKey: -666666, // 临时key, 用于解决tree半选中状态项不能传给后台接口问题.
        defaultCheckedKeys: null,
        DBName: this.$store.state.DBName,
        filter: {
          name: '',
          qdId: null,
          qdName: null,
        },
        qdList: [], // 检查项自定义列表
        selectedQdList: [], // 选中的自定义列表
      }
    },
    created() {
      this.getCheckList()
    },
    methods: {
      async getCheckList () {
        this.loading = true
        let db = new GoDB(this.DBName);
        let checkCate = db.table('checkCate');
        let checkList = db.table('checkList');
        let corpBase = db.table('corpBase');
        // 获取检查项类别和内容
        let checkCateData = await checkCate.findAll((item) => item.delFlag !== '1');
        let checkListData = await checkList.findAll((item) => item.delFlag !== '1' && !item.qdId);
        let corpBaseData = await corpBase.findAll((item) => {
          return item.corpId === this.corpData.corpId
        });
        // 获取所有检查项列表内容
        let qdListAllItem = await checkList.findAll(item => item.delFlag !== '1' && item.qdId)
        await db.close()
        // 操作检查项类别及隐患内容为树形结构展示
        // 设置为树状结构
        this.checkListOriginal = [...checkCateData, ...checkListData]
        let list = treeDataTranslate([...checkCateData, ...checkListData] || [], 'treeId', 'treeParentId')
        let corpTypeIndex = null
        if (corpBaseData[0].mineMinetypeName === '井工') {
          // 井工检查内容
          corpTypeIndex = list.findIndex(item => item.categoryCode === '000001')
        } else if (corpBaseData[0].mineMinetypeName === '露天') {
          // 露天检查内容
          corpTypeIndex = list.findIndex(item => item.categoryCode === '000002')
        }
        // if (this.value.selectedIdList && this.value.selectedIdList.length > 0) {
        //   this.defaultCheckedKeys = this.value.selectedIdList
        //   this.$refs.checkListTree.setCheckedKeys(this.defaultCheckedKeys);
        //   let selectedList = this.removeTreeTempKeyHandle(this.value.selectedIdList)
        //   this.$nextTick(() => {
        //     this.$refs.checkListTree.setCheckedKeys(selectedList)
        //     let selectedIdList = [
        //       ...this.$refs.checkListTree.getCheckedKeys(),
        //       ...this.$refs.checkListTree.getHalfCheckedKeys()
        //     ]
        //     this.getSelectedcheckList(selectedIdList)
        //   })
        // }
        this.checkList = corpTypeIndex === null ? list : [list[corpTypeIndex]]
        // 操作检查项自定义列表选择
        let qdList = [] // 列表选项，其中包括qdId,qdName,及列表list
        if (qdListAllItem && qdListAllItem.length > 0) {
          // 如果有列表则先将第一个赋值
          qdList.push({
            qdId: qdListAllItem[0].qdId,
            qdName: qdListAllItem[0].name,
            list: [qdListAllItem[0]]
          })
          // 开始遍历循环全部列表qdListAllItem，对比已存入的qdList，如果有则赋值进入list，如果没有则创建新的列表
          for (let i = 1; i < qdListAllItem.length; i++) {
            let isNewQd = true
            for (let j = 0; j < qdList.length; j++) {
              if (qdListAllItem[i].qdId === qdList[j].qdId) {
                isNewQd = false
                qdList[j].list.push(qdListAllItem[i])
                break
              }
            }
            if (isNewQd) {
              qdList.push({
                qdId: qdListAllItem[i].qdId,
                qdName: qdListAllItem[i].name,
                list: [qdListAllItem[i]]
              })
            }
          }
        }
        this.qdList = qdList
        this.loading = false
      },
      // 移除tree临时key和半选中状态项
      removeTreeTempKeyHandle (list) {
        let idx = list.indexOf(this.tempKey)
        if (idx !== -1) {
          list.splice(idx, list.length - idx)
        }
        return list
      },
      // 功能授权树点击节点复选框调用方法
      checkFunctionAuthorization (objectItem, selectedObjectItem) {
        // 选择权限同时增加至已选择权限列表中
        let selectedList = [
          ...selectedObjectItem.checkedKeys,
          ...selectedObjectItem.halfCheckedKeys
        ]
        this.getSelectedcheckList(selectedList)
      },
      getSelectedcheckList (selectedcheckIdList) {
        // 遍历checkListOriginal,获取selectedList完整信息再转变为树形结构
        let checkList = []
        this.checkListOriginal.map((item, itemIndex) => {
          selectedcheckIdList.map(itemSelected => {
            if (item.treeId === itemSelected) {
              Object.assign(item, {children: []})
              checkList.push(item)
            }
          })
        })
        let list = treeDataTranslate(checkList || [], 'treeId', 'treeParentId')
        this.selectedcheckList = list
      },
      checkQdList (objectItem, selectedObjectItem) {
        this.selectedcheckList = selectedObjectItem.checkedNodes
      },
      close () {
        this.$emit('close', 'checkSelect')
      },
      save () {
        this.$emit('save', {data: {
            selectedcheckList: this.selectedcheckList,
          }
        })
        this.close()
      },
      selectFilter () {
        this.$refs.checkListTree.filter(this.filter.name)
      },
      filterNode (value, data) {
        if (!value) return true;
        return data.treeName.indexOf(value) !== -1;
      },
      changeQdList (val) {
        // 切换自定义列表
        if (val) {
          let qd = this.qdList.filter(item => item.qdId === val)
          this.selectedQdList = qd[0].list
        } else {
          this.selectedQdList = []
        }
      }
    }
  }
;
</script>

<style lang="scss" scoped>
.select-check {
  display: flex;
  height: 300px;
  flex-direction: column;
  .select-check-filter {
    display: flex;
    margin-bottom: 10px;
    justify-content: space-between;
  }
  .select-check-col {
    flex: 1;
    display: flex;
    flex-direction: column;
    border: 1px solid #E8E8E8;
    border-radius: 5px;
    overflow-y: hidden;
    .select-check-col-title {
      height: 40px;
      line-height: 40px;
      text-align: center;
      background: #E4EAFA;
      font-size: 14px;
      font-weight: 500;
    }
    .select-check-col-tree {
      flex: 1;
      overflow: auto;
      .span-ellipsis {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
/deep/ .el-dialog__header {
  border-bottom: 1px solid #DCDFE6;
}
/deep/ .el-dialog__body {
  padding: 10px 30px;
}
</style>