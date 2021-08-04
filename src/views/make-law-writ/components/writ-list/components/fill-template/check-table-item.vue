<!-- 填写组件 检查分工明细表 -->
<template>
  <div style="width: 100%;">
    <div>
      <el-button type="primary" @click="handleDialog('checkSelect')">选择检查内容</el-button>
    </div>
    <div>
      <div class="title">
        <span>已选检查内容：</span>
      </div>
      <el-table
        :data="dataForm.tempValue"
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
              v-if="scope.row.isEdit"
              v-model="scope.row.itemContent"
              type="textarea"
              :autosize="{ minRows: 4, maxRows: 6}">
            </el-input>
            <span v-else>{{ scope.row.itemContent }}</span>
          </template>
        </el-table-column>
        <el-table-column
          header-align="center"
          align="left"
          label="检查主要资料及方法">
          <template slot-scope="scope">
            <el-input
              v-if="scope.row.isEdit"
              v-model="scope.row.basis"
              type="textarea"
              :autosize="{ minRows: 4, maxRows: 6}">
            </el-input>
            <span v-else>{{ scope.row.basis }}</span>
          </template>
        </el-table-column>
        <el-table-column
          header-align="center"
          align="left"
          label="操作"
          width="80">
          <template slot-scope="scope">
            <el-button v-if="scope.row.isEdit" type="text" @click="editContent(scope)">保存</el-button>
            <el-button v-else type="text" @click="editContent(scope)">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <select-check-content
      :visible="visible.checkSelect"
      :corp-data="corpData"
      @save="handleSave"
      @close="handleClose"
    ></select-check-content>
  </div>
</template>

<script>
import selectCheckContent from '@/views/make-law-writ/components/writ-list/components/select-check-content'
export default {
  name: "CheckTableItem",
  components: {
    selectCheckContent,
  },
  props: {
    value: {
      type: Array,
      default: () => []
    },
    corpData: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      dataForm: {
        tempValue: []
      },
      visible: {
        checkSelect: false,
      },
      checkListTreeProps: {
        label: 'treeName',
        children: 'children',
      },
      dataForm: {
        checkContent: null
      },
      editText: null, // 编辑内容
    };
  },
  created() {
    this.dataForm.tempValue = this.value
  },
  methods: {
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
      this.handleData(params.data, tableData)
      this.dataForm.tempValue = tableData
    },
    handleData (data, tableData) {
      // 递归遍历获取最底层数据
      if (data.length > 0) {
        data.map(item => {
          if (item.children && item.children.length > 0) {
            this.handleData(item.children, tableData)
          } else {
            tableData.push(Object.assign(item, {isEdit: false}))
          }
        })
      } else {
        tableData.push(Object.assign(item, {isEdit: false}))
      }
    },
    editContent (scope, field) {
      let isEdit = scope.row.isEdit
      let data = Object.assign({}, this.dataForm.tempValue[scope.$index], {isEdit: !isEdit})
      this.$set(this.dataForm.tempValue, scope.$index, data)
    }
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