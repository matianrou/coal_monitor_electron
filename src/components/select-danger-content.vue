<!-- 选择隐患内容 树状组件 -->
<template>
  <el-dialog
    title="选择隐患内容"
    :close-on-click-modal="false"
    append-to-body
    :visible="visible"
    top="5vh"
    width="70%"
    @close="close"
  >
    <div
      v-loading="loading"
      class="select-danger"
    >
      <div class="select-danger-filter">
        <div>
          <el-input
            v-model="filter.name"
            placeholder="请输入隐患关键字"
            style="width: 200px;"
            clearable
          ></el-input>
          <el-button
            type="primary"
            @click="selectFilter(false)"
          >精准搜索</el-button>
          <el-button
            type="primary"
            style="margin-left:0;"
            @click="selectFilter(true)"
          >模糊搜索</el-button>
          <el-tooltip
            class="item"
            effect="dark"
            content="可进行多关键词的搜索，每个关键词之间用空格键隔开"
            placement="top"
          >
            <i
              class="el-icon-warning-outline"
              style="color: #E6A23C;"
            ></i>
          </el-tooltip>
        </div>
        <div>
          <el-select
            v-model="filter.qdId"
            placeholder="请选择自定义列表"
            clearable
            @change="changeQdList"
          >
            <el-option
              v-for="item in qdList"
              :key="item.qdId"
              :label="item.qdName"
              :value="item.qdId"
            >
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="select-danger-col">
        <div class="select-danger-col-title">
          <span>选择隐患内容</span>
        </div>
        <div
          v-if="selectedQdList.length === 0"
          class="select-danger-col-tree"
        >
          <el-tree
            ref="dangerListTree"
            :data="dangerList"
            :props="dangerListTreeProps"
            node-key="treeId"
            show-checkbox
            :default-checked-keys="defaultCheckedKeys"
            :filter-node-method="filterNode"
            :check-on-click-node="true"
            @check="checkFunctionAuthorization"
          >
            <span
              class="span-ellipsis"
              slot-scope="{ node }"
            >
              <span :title="node.label">{{ node.label }}</span>
            </span>
          </el-tree>
        </div>
        <div
          v-else
          class="select-danger-col-tree"
        >
          <el-tree
            ref="dangerListTree"
            :data="selectedQdList"
            :props="dangerListTreeProps"
            node-key="treeId"
            show-checkbox
            :filter-node-method="filterNode"
            @check="checkQdList"
          >
            <span
              class="span-ellipsis"
              slot-scope="{ node }"
            >
              <span :title="node.label">{{ node.label }}</span>
            </span>
          </el-tree>
        </div>
      </div>
      <!-- <div class="select-danger-col" style="margin-left: 5px;">
        <div class="select-danger-col-title">
          <span>已选择隐患内容</span>
        </div>
        <div class="select-danger-col-tree">
          <el-tree
            :data="selecteddangerList"
            :props="selecteddangerListProps"
            node-key="treeId"
            ref="selecteddangerList"
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
      <el-button
        type="primary"
        @click="save"
      >确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { treeDataTranslate } from '@/utils'
import GoDB from '@/utils/godb.min.js'
export default {
  name: 'SelectDangerContent',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    value: {
      type: Object,
      default: () => { }
    },
    corpData: {
      type: Object,
      default: () => { }
    }
  },
  data() {
    return {
      isDim: false,
      loading: false,
      dangerListOriginal: [], // 全部功能原始数据
      dangerList: [], // 转换为树形结构的全部功能数组，用于选择
      dangerListTreeProps: {
        label: 'treeName',
        children: 'children',
      },
      selecteddangerList: [], // 已选择的功能，树形结构
      selecteddangerListProps: {
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
      qdList: [], // 隐患项自定义列表
      selectedQdList: [], // 选中的自定义列表
    }
  },
  created() {
    this.getDangerList()
  },
  methods: {
    async getDangerList() {
      this.loading = true
      let db = new GoDB(this.DBName);
      let dangerCate = db.table('dangerCate');
      let dangerList = db.table('dangerList');
      let corpBase = db.table('corpBase');
      // 获取隐患类别和内容
      let dangerCateData = await dangerCate.findAll((item) => item.delFlag !== '1');
      let dangerListData = await dangerList.findAll((item) => item.delFlag !== '1' && !item.qdId);
      // 获取所有隐患列表内容
      let qdListAllItem = await dangerList.findAll(item => item.delFlag !== '1' && item.qdId)
      let corpBaseData = this.corpData && this.corpData.corpId ? await corpBase.find((item) => {
        return item.corpId === this.corpData.corpId
      }) : { mineMinetypeName: null };
      await db.close()
      // 操作隐患类别及隐患内容为树形结构展示
      // 设置为树状结构
      this.dangerListOriginal = [...dangerCateData, ...dangerListData]
      let list = treeDataTranslate([...dangerCateData, ...dangerListData] || [], 'treeId', 'treeParentId')
      let corpTypeIndex = null
      if (corpBaseData.mineMinetypeName === '井工') {
        // 井工检查内容
        corpTypeIndex = list.findIndex(item => item.categoryCode === '000001')
      } else if (corpBaseData.mineMinetypeName === '露天') {
        // 露天检查内容
        corpTypeIndex = list.findIndex(item => item.categoryCode === '000002')
      }
      // 回显已选中状态逻辑，其实暂时无用
      // if (this.value.selectedIdList && this.value.selectedIdList.length > 0) {
      //   this.defaultCheckedKeys = this.value.selectedIdList
      //   let selectedList = this.removeTreeTempKeyHandle(this.value.selectedIdList)
      //   this.$nextTick(() => {
      //     // this.$refs.dangerListTree.setChecked(selectedList, true, false);
      //     this.$refs.dangerListTree.setCheckedKeys(selectedList)
      //     let selectedIdList = [
      //       ...this.$refs.dangerListTree.getCheckedKeys(),
      //       ...this.$refs.dangerListTree.getHalfCheckedKeys()
      //     ]
      //     this.getSelecteddangerList(selectedIdList)
      //   })
      // }
      this.dangerList = corpTypeIndex === null ? list : [list[corpTypeIndex]]
      // 操作隐患自定义列表选择
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
    removeTreeTempKeyHandle(list) {
      let idx = list.indexOf(this.tempKey)
      if (idx !== -1) {
        list.splice(idx, list.length - idx)
      }
      return list
    },
    // 功能授权树点击节点复选框调用方法
    checkFunctionAuthorization(objectItem, selectedObjectItem) {
      // 选择权限同时增加至已选择权限列表中
      let selectedList = [
        ...selectedObjectItem.checkedKeys,
        ...selectedObjectItem.halfCheckedKeys
      ]
      this.getSelecteddangerList(selectedList)
    },
    getSelecteddangerList(selecteddangerIdList) {
      // 遍历checkListOriginal,获取selectedList完整信息再转变为树形结构
      let dangerList = []
      this.dangerListOriginal.map((item, itemIndex) => {
        selecteddangerIdList.map(itemSelected => {
          if (item.treeId === itemSelected) {
            Object.assign(item, { children: [] })
            dangerList.push(item)
          }
        })
      })
      let list = treeDataTranslate(dangerList || [], 'treeId', 'treeParentId')
      this.selecteddangerList = list
    },
    checkQdList(objectItem, selectedObjectItem) {
      this.selecteddangerList = selectedObjectItem.checkedNodes
    },
    close() {
      this.$emit('close', 'dangerSelect')
    },
    save() {
      this.$emit('save', {
        data: {
          selecteddangerList: this.selecteddangerList,
        }
      })
      this.close()
    },
    selectFilter(isDim) {
      this.isDim = isDim
      this.$refs.dangerListTree.filter(this.filter.name)
    },
    filterNode(value, data, node) {
      if (!value) return true;
      let flag = null
      // 是否模糊查询
      if (this.isDim) {
        return value.replace(/[^\u4e00-\u9fa5]/gi, "").split('').some(s => data.treeName.includes(s))
      } else {
        const isMulti = value.includes(' ')
        // 是否包含空格
        isMulti ?
          flag = value.split(' ').some(s => data.treeName.includes(s))
          :
          flag = data.treeName.includes(value)
        return flag
      }
    },
    changeQdList(val) {
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
.select-danger {
  display: flex;
  height: 70vh;
  flex-direction: column;
  .select-danger-filter {
    display: flex;
    margin-bottom: 10px;
    justify-content: space-between;
  }
  .select-danger-col {
    flex: 1;
    display: flex;
    flex-direction: column;
    border: 1px solid #e8e8e8;
    border-radius: 5px;
    overflow-y: hidden;
    .select-danger-col-title {
      height: 40px;
      line-height: 40px;
      text-align: center;
      background: #e4eafa;
      font-size: 14px;
      font-weight: 500;
    }
    .select-danger-col-tree {
      flex: 1;
      overflow: auto;
      .span-ellipsis {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 16px;
      }
    }
  }
}
</style>