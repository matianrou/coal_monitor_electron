<!-- 选择隐患内容 树状组件 -->
<template>
	<el-dialog
    title="选择隐患内容"
    :close-on-click-modal="false"
    append-to-body
    :visible="visible"
    @close="close">
    <div v-loading="loading" class="select-danger">
      <div class="select-danger-col">
        <div class="select-danger-col-title">
          <span>选择隐患内容</span>
        </div>
        <div class="select-danger-col-tree">
          <el-tree
            ref="dangerListTree"
            :data="dangerList"
            :props="dangerListTreeProps"
            node-key="treeId"
            show-checkbox
            :default-checked-keys="defaultCheckedKeys"
            @check="checkFunctionAuthorization">
            <span class="span-ellipsis" slot-scope="{ node }">
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
      <el-button type="primary" @click="save">确定</el-button>
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
        default: () => {}
      },
      corpData: {
        type: Object,
        default: () => {}
      }
    },
    data () {
      return {
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
        defaultCheckedKeys: null
      }
    },
    created() {
      this.getDangerList()
    },
    mounted() {
      this.init()
    },
    methods: {
      async getDangerList () {
        this.loading = true
        const db = new GoDB('CoalDB');
        const dangerCate = db.table('dangerCate');
        const dangerList = db.table('dangerList');
        const corpBase = db.table('corpBase');
        let dangerCateData = await dangerCate.findAll((item) => item);
        let dangerListData = await dangerList.findAll((item) => item);
        let corpBaseData = await corpBase.findAll((item) => {
          return item.corpId === this.corpData.corpId
        });
        await db.close()
        // 设置为树状结构
        this.dangerListOriginal = [...dangerCateData, ...dangerListData]
        let list = treeDataTranslate([...dangerCateData, ...dangerListData] || [], 'treeId', 'treeParentId')
        let corpTypeIndex = null
        if (corpBaseData[0].mineMinetypeName === '井工') {
          // 井工检查内容
          corpTypeIndex = list.findIndex(item => item.categoryCode === '000001')
        } else {
          // 露天检查内容
          corpTypeIndex = list.findIndex(item => item.categoryCode === '000002')
        }
        if (this.value.selectedIdList && this.value.selectedIdList.length > 0) {
          this.defaultCheckedKeys = this.value.selectedIdList
          let selectedList = this.removeTreeTempKeyHandle(this.value.selectedIdList)
          // this.$refs.dangerListTree.setCheckedKeys(selectedList)
          let selectedIdList = [
            ...this.$refs.dangerListTree.getCheckedKeys(),
            ...this.$refs.dangerListTree.getHalfCheckedKeys()
          ]
          this.getSelecteddangerList(selectedIdList)
        }
        this.dangerList = list[corpTypeIndex].children
        this.loading = false
      },
      init() {

      },
      // 移除tree临时key和半选中状态项
      removeTreeTempKeyHandle (list) {
        var idx = list.indexOf(this.tempKey)
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
        this.getSelecteddangerList(selectedList)
      },
      getSelecteddangerList (selecteddangerIdList) {
        // 遍历checkListOriginal,获取selectedList完整信息再转变为树形结构
        let dangerList = []
        this.dangerListOriginal.map((item, itemIndex) => {
          selecteddangerIdList.map(itemSelected => {
            if (item.treeId === itemSelected) {
              Object.assign(item, {children: []})
              dangerList.push(item)
            }
          })
        })
        let list = treeDataTranslate(dangerList || [], 'treeId', 'treeParentId')
        this.selecteddangerList = list
      },
      close () {
        this.$emit('close', 'dangerSelect')
      },
      save () {
        this.$emit('save', {data: {
            selecteddangerList: this.selecteddangerList,
          }
        })
        this.close()
      },
    }
  }
;
</script>

<style lang="scss" scoped>
.select-danger {
  display: flex;
  height: 300px;
  .select-danger-col {
    flex: 1;
    display: flex;
    flex-direction: column;
    border: 1px solid #E8E8E8;
    border-radius: 5px;
    overflow-y: hidden;
    .select-danger-col-title {
      height: 40px;
      line-height: 40px;
      text-align: center;
      background: #E4EAFA;
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
      }
    }
  }
}
</style>