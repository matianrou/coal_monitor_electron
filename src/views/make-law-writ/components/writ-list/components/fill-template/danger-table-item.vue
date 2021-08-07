<!-- 填写组件 隐患 -->
<template>
  <div style="width: 100%;">
    <div>
      <div class="title">
        <span>基本信息：</span>
      </div>
      <el-input
        v-model="dataForm.tempValue.baseInfor"
        type="textarea"
        :autosize="{ minRows: 3, maxRows: 6}"
        placeholder="请填写基本信息">
      </el-input>
    </div>
    <div>
      <div class="title">
        <span>隐患情况：</span>
      </div>
      <div style="margin-top: 10px;">
        <el-button type="primary" @click="handleDialog('dangerSelect')">选择隐患内容</el-button>
      </div>
      <div class="danger-table-main">
        <!-- 隐患项展示，选择 -->
        <div class="danger-table-main-table">
          <!-- 展示已选隐患 -->
          <el-table
            v-if="dataForm.tempValue.tableData"
            :data="dataForm.tempValue.tableData"
            style="width: 100%;"
            row-key="treeId"
            border
            :default-sort = "{prop: 'order', order: 'descending'}">
            <el-table-column
              label="隐患项"
              header-align="center"
              align="left">
              <template slot-scope="scope">
                <span
                  style="cursor: pointer;"
                  :class="scope.row.active ? 'active' : ''"
                  @click="selectedItem(scope)">
                  {{ scope.row.itemContent }}
                </span>
              </template>
            </el-table-column>
          </el-table>
          <!-- 修改隐患信息 -->
        </div>
        <!-- 修改隐患项 -->
        <div class="danger-table-main-content">
        </div>
      </div>
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
          baseInfor: null,
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
          baseInfor: null,
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
      selectedDangerData: {}, // 选择需要编辑的隐患项
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
      this.handleData(params.data.selecteddangerList, tableData, 0)
      this.dataForm.tempValue.tableData = tableData
      // 遍历table获取treeId作为后续回显
      let selectedId = []
      tableData.length > 0 && tableData.map(item => {
        selectedId.push(item.treeId)
      })
      this.dataForm.tempValue.selectedIdList = selectedId
      this.dataForm.tempValue.selectedAllIdList = params.data.selectedAllIdList
    },
    handleData (data, tableData, index) {
      // 递归遍历获取最底层数据
      if (data.length > 0) {
        data.map(item => {
          if (item.children && item.children.length > 0) {
            this.handleData(item.children, tableData, index)
          } else {
            tableData.push(Object.assign(item, {
              order: index,
              active: false,
            }))
            index ++
          }
        })
      } else {
        tableData.push(item)
      }
    },
    selectedItem(scope) {
      // 选择隐患
      // 设置选中状态
      this.dataForm.tempValue.tableData.forEach(item => {
        item.active = false
      })
      scope.row.active = true
      this.selectedDangerData = scope.row
      this.$set(this.dataForm.tempValue.tableData, scope.$index, selectedDangerData)
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
.danger-table-main {
  display: flex;
  margin-top: 10px;
  .danger-table-main-table {
    flex: 1;
    .active {
      color: #409EFF;
    }
  }
  .danger-table-main-content {
    flex: 2;
    border: 1px solid #EBEEF5;
    border-left: 0px;
  }
}
</style>