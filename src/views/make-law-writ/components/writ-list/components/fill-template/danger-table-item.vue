<!-- 填写组件 隐患 -->
<template>
  <div style="width: 100%;">
    <div>
      <el-button type="primary" @click="handleDialog('dangerSelect')">选择隐患内容</el-button>
    </div>
    <div>
      <div class="title">
        <span>已选隐患内容：</span>
      </div>
      <el-table
        v-if="dataForm.tempValue.tableData"
        :data="dataForm.tempValue.tableData"
        style="width: 100%"
        row-key="treeId"
        border>
        <el-table-column
          prop="categoryName"
          label="检查事项"
          header-align="center"
          align="left"
          width="110">
        </el-table-column>
        <el-table-column
          header-align="center"
          align="left"
          label="检查内容">
          <template slot-scope="scope">
            <el-input
              v-model="scope.row.itemContent"
              type="textarea"
              :autosize="{ minRows: 4, maxRows: 6}">
            </el-input>
          </template>
        </el-table-column>
        <el-table-column
          header-align="center"
          align="left"
          label="检查主要资料及方法">
          <template slot-scope="scope">
            <el-input
              v-model="scope.row.basis"
              type="textarea"
              :autosize="{ minRows: 4, maxRows: 6}">
            </el-input>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <select-danger-content
      v-if="visible.dangerSelect"
      :visible="visible.dangerSelect"
      :value="dataForm.tempValue"
      :corp-data="corpData"
      @save="handleSave"
      @close="handleClose"
    ></select-danger-content>
  </div>
</template>

<script>
import selectDangerContent from '@/views/make-law-writ/components/writ-list/components/select-danger-content'
export default {
  name: "DangerTableItem",
  components: {
    selectDangerContent,
  },
  props: {
    value: {
      type: Object,
      default: () => {
        return {
          tableData: [],
          selectedIdList: []
        }
      }
    },
    corpData: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      dataForm: {
        tempValue: {
          tableData: [],
          selectedIdList: []
        }
      },
      visible: {
        dangerSelect: false,
      },
      dangerListTreeProps: {
        label: 'treeName',
        children: 'children',
      },
      dataForm: {
        dangerContent: null
      },
      editText: null, // 编辑内容
    };
  },
  created() {
    this.initData()
  },
  methods: {
    initData () {
      this.dataForm.tempValue = this.value
    },
    handleDialog (key) {
      // 展示选择检查内容弹窗
      this.visible[key] = true
    },
    handleClose (key) {
      this.visible[key] = false
    },
    handleSave (params) {
      // 保存选择的检查项
      let tableData = []
      // 抽取选择的检查项最底一层，作为table展示
      this.handleData(params.data.selectedDangerList, tableData)
      this.dataForm.tempValue.tableData = tableData
      // 遍历table获取treeId作为后续回显
      let selectedId = []
      tableData.length > 0 && tableData.map(item => {
        selectedId.push(item.treeId)
      })
      this.dataForm.tempValue.selectedIdList = selectedId
      this.dataForm.tempValue.selectedAllIdList = params.data.selectedAllIdList
    },
    handleData (data, tableData) {
      // 递归遍历获取最底层数据
      if (data.length > 0) {
        data.map(item => {
          if (item.children && item.children.length > 0) {
            this.handleData(item.children, tableData)
          } else {
            tableData.push(item)
          }
        })
      } else {
        tableData.push(item)
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  margin-top: 20px;
  height: 30px;
  background: #4F83E9;
  color: #fff;
  padding: 2px 10px;
  display: flex;
  align-items: center;
}
.span-node-main {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  width: 100%;
  overflow: hidden;
  .span-ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-right: 10px;
  }
}
</style>