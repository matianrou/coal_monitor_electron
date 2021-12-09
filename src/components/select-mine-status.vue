<!-- 选择 矿井状况 树状组件 -->
<template>
	<el-dialog
    title="选择矿井状况"
    :close-on-click-modal="false"
    append-to-body
    :visible="visible"
    width="500px"
    @close="close">
    <div v-loading="loading" class="select-mine-status">
      <!-- <div class="select-mine-status-col-title">
        <span>选择矿井状况</span>
      </div> -->
      <el-tree
        ref="checkListTree"
        :data="mineStatusList"
        :props="{
          label: 'label',
          children: 'children',
        }"
        node-key="value"
        :default-expanded-keys="[selectedMineStatus]"
        :current-node-key="selectedMineStatus"
        highlight-current
        check-on-click-node>
      </el-tree>
    </div>
    <span slot="footer">
      <el-button @click="close">取消</el-button>
      <el-button type="primary" @click="save">确定</el-button>
    </span>
	</el-dialog>
</template>

<script>
  import GoDB from '@/utils/godb.min.js'
  import { sortbyAsc, treeDataTranslate } from "@/utils/index";
  export default {
    name: 'SelectMineStatus',
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      selectedMineStatus: {
        type: String,
        default: null
      }
    },
    data () {
      return {
        DBName: this.$store.state.DBName,
        loading: false,
        mineStatusList: [],
        dictionaryMineStatus: []
      }
    },
    created() {
      this.getDictionary()
    },
    methods: {
      async getDictionary () {
        let db = new GoDB(this.DBName)
        let dictionary = db.table('dictionary')
        let mineStatus = await dictionary.find(item => item.type === 'baseMineStatusZs') 
        await db.close()
        let mineStatusList = JSON.parse(mineStatus.list)
        // 保留一份原始值，用来遍历获取最后矿井状况说明
        this.dictionaryMineStatus = mineStatusList
        // 遍历设置parentId
        mineStatusList.sort((sortbyAsc('id')))
        let list = treeDataTranslate(mineStatusList)
        this.mineStatusList = list
      },
      close () {
        this.$emit('close', { page: 'mineStatus' })
      },
      save () {
        let selectedStatus = this.$refs.checkListTree.getCurrentNode()
        if (selectedStatus.children && selectedStatus.children.length > 0) {
          this.$message.error('当前选中的是状态分类，请选择矿井状态')
          return
        }
        // 拼组煤矿状态值
        let statusData = {
          statusName: selectedStatus.label
        }
        this.getStatusName(selectedStatus, statusData)
        this.$emit('save', { data: {
          mineStatus: selectedStatus.value,
          mineStatusContent: statusData.statusName
        } })
      },
      getStatusName (val, data) {
        // 遍历递归获取状态名称
        if (val.parentId === '0') {
          return
        } else {
          let parentList = val.parentIds.split(',')
          let parentId = parentList[parentList.length - 2]
          let status = null
          for (let i = 0; i < this.dictionaryMineStatus.length - 1; i++) {
            let item = this.dictionaryMineStatus[i]
            if (item.id === parentId) {
              status = item
              data.statusName = `${item.label}->${data.statusName}`
            }
          }
          this.getStatusName(status, data)
        }
      }
    }
  }
;
</script>

<style lang="scss" scoped>
/deep/ .el-tree-node__content {
  height: auto;
}
/deep/ .el-tree--highlight-current .el-tree-node.is-current>.el-tree-node__content {
  background: rgb(102, 177, 255);
  color: #fff;
}
// /deep/ .el-tree-node {
//   .is-leaf + .el-checkbox .el-checkbox__inner {
//     display: inline-block;
//   }
//   .el-checkbox .el-checkbox__inner {
//     display: none;
//   }
// }
.select-mine-status {
  height: calc(100vh - 500px);
  overflow: auto;
  .select-mine-status-col-title {
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: #E4EAFA;
    font-size: 14px;
    font-weight: 500;
  }
  .select-mine-status-col-tree {
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
</style>