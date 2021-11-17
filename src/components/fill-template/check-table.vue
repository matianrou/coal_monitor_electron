<!-- 填写组件 检查分工明细表 -->
<template>
  <div style="width: 100%;">
    <div>
      <el-button v-if="options.canEdit" type="primary" @click="handleDialog('checkSelect')">选择检查内容</el-button>
    </div>
    <div>
      <div class="title">
        <span>已选检查内容：</span>
      </div>
      <el-table
        v-if="dataForm.tempValue.tableData"
        :data="dataForm.tempValue.tableData"
        style="width: 100%"
        row-key="treeId"
        border
        :header-cell-style="{background: '#f5f7fa'}">
        <el-table-column
          prop="categoryName"
          label="检查事项"
          header-align="center"
          align="left"
          width="100">
        </el-table-column>
        <el-table-column
          header-align="center"
          align="left"
          label="检查内容"
          width="300">
          <template slot-scope="scope">
            <el-input
              v-if="options.canEdit"
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
          label="检查主要资料及方法"
          width="180">
          <template slot-scope="scope">
            <el-input
              v-if="options.canEdit"
              v-model="scope.row.method"
              type="textarea"
              :autosize="{ minRows: 4, maxRows: 6}">
            </el-input>
            <span v-else>{{ scope.row.method }}</span>
          </template>
        </el-table-column>
        <el-table-column
          header-align="center"
          align="left"
          label="检查地点">
          <template slot-scope="scope">
            <span>{{ scope.row.positions }}</span>
          </template>
        </el-table-column>
        <el-table-column
          header-align="center"
          align="left"
          label="检查人员">
          <template slot-scope="scope">
            <span>{{ scope.row.personNames }}</span>
          </template>
        </el-table-column>
        <el-table-column
          header-align="center"
          align="left"
          label="调整情况">
          <template slot-scope="scope">
            <el-input
              v-if="options.canEdit"
              v-model="scope.row.situation"
              type="textarea"
              :autosize="{ minRows: 4, maxRows: 6}">
            </el-input>
            <span v-else>{{ scope.row.situation }}</span>
          </template>
        </el-table-column>
        <el-table-column
          v-if="options.canEdit"
          header-align="center"
          align="center"
          width="100"
          label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="operation(scope, 'selectCheckPosition')">检查地点</el-button>
            <el-button type="text" size="small" @click="operation(scope, 'selectPerson')">检查人员</el-button>
            <el-button type="text" size="small" @click="deleteItem(scope)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <select-check-content
      v-if="visible.checkSelect"
      :visible="visible.checkSelect"
      :value="dataForm.tempValue"
      :corp-data="corpData"
      @save="handleSave"
      @close="handleClose"
    ></select-check-content>
    <select-person
      :visible="visible.selectPerson"
      :multi-select="true"
      :selected-data-list="selectedRowPersonList"
      @confirm-person="confirmPerson"
      @close="closeSelect"
    ></select-person>
    <select-check-position
      v-if="visible.selectCheckPosition"
      :visible="visible.selectCheckPosition"
      :corp-data="corpData"
      :selected-check-position="selectedCheckPosition"
      @confirm-check-position="confirmCheckPosition"
      @close="closeSelect"
    ></select-check-position>
  </div>
</template>

<script>
import selectCheckContent from '../select-check-content'
import selectPerson from '@/components/select-person'
import selectCheckPosition from '@/components/select-check-position'
import { setCheckPositionItem } from '@/utils/handlePaperData'
export default {
  name: "CheckTable",
  components: {
    selectCheckContent,
    selectPerson,
    selectCheckPosition
  },
  props: {
    value: {
      type: Object,
      default: () => {
        return {
          tableData: [],
          selectedIdList: [],
        }
      }
    },
    corpData: {
      type: Object,
      default: () => {}
    },
    options: {
      type: Object,
      default: () => {
        return {
          canEdit: true
        }
      }
    }
  },
  data() {
    return {
      dataForm: {
        tempValue: {
          tableData: [],
          selectedIdList: [],
        }
      },
      visible: {
        checkSelect: false,
        selectPerson: false,
        selectCheckPosition: false
      },
      checkListTreeProps: {
        label: 'treeName',
        children: 'children',
      },
      dataForm: {
        checkContent: null
      },
      editText: null, // 编辑内容
      selectedIndex: null, // 选择的检查人员及选择地点的检查项index
      selectedRowPersonList: [], // 选择的检查人员列表，用于回显
      selectedCheckPosition: null, // 选择的检查检查人员数据，用于回显
    };
  },
  created() {
    this.initData()
  },
  methods: {
    initData () {
      console.log('value', this.value)
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
      this.handleData(params.data.selectedcheckList, tableData)
      // 设置saveTableData保存数据，过滤已有数据不做处理，新增的数据相应增加
      let saveTableData = []
      if (tableData.length > 0) {
        tableData.map(item => {
          let add = true
          this.dataForm.tempValue.tableData.map(oldItem => {
            if (oldItem.treeId === item.treeId) {
              add = false
              saveTableData.push(oldItem)
            }
          })
          if (add) {
            saveTableData.push(item)
          }
        })
      }
      this.dataForm.tempValue.tableData = saveTableData
      // 遍历table获取treeId作为后续回显
      let selectedId = []
      tableData.length > 0 && tableData.map(item => {
        selectedId.push(item.treeId)
      })
      console.log('tableData', tableData)
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
            let itemObject = Object.assign({}, item, {
              order: this.dangerIndex,
              personNames: null, // 检查人员文字
              personList: [], // 检查人员所有数据
              positions: null, // 检查地点文字描述
              positionData: {}, // 检查地点所有数据
              situation: null, // 调整情况
            })
            tableData.push(itemObject)
          }
        })
      }
    },
    operation (scope, type) {
      // 打开选择人员或者地点的弹窗
      this.selectedIndex = scope.$index
      if (type === 'selectPerson') {
        this.selectedRowPersonList = scope.row.personList
      } else if (type === 'selectCheckPosition') {
        this.selectedCheckPosition = scope.row.positionData
      }
      this.visible[type] = true
    },
    closeSelect ({page, refresh}) {
      // 关闭选择人员或者检查地点弹窗
      this.selectedIndex = null
      if (page === 'selectPerson') {
        this.selectedRowPersonList = []
      } else if (page === 'selectCheckPosition') {
        this.selectedCheckPosition = {}
      }
      this.handleClose(page)
    },
    confirmPerson (personList) {
      // 保存人员
      let personNames = ''
      if (personList.length > 0) {
        personList.map(item => {
          personNames += item.name + '，'
        })
        personNames = personNames.substring(0, personNames.length - 1)
      }
      let saveData = Object.assign({}, this.dataForm.tempValue.tableData[this.selectedIndex], {personNames, personList})
      this.$set(this.dataForm.tempValue.tableData, this.selectedIndex, saveData)
    },
    confirmCheckPosition (positionData) {
      // 保存检查地点数据
      let positions = setCheckPositionItem(positionData)
      // 检查项增加addressType数据传输保存
      // 逻辑为按地面1、井下2、其他3回传多个逗号分割
      let {isAddress, isUnder, isOther} = positionData
      let addressType = ''
      if (isAddress) {
        addressType += '1,'
      }
      if (isUnder) {
        addressType += '2,'
      }
      if (isOther) {
        addressType += '3,'
      }
      addressType = addressType.substring(0, addressType.length - 1) 
      let saveData = Object.assign({}, this.dataForm.tempValue.tableData[this.selectedIndex], {positions, positionData, addressType})
      this.$set(this.dataForm.tempValue.tableData, this.selectedIndex, saveData)
    },
    deleteItem (scope) {
      // 删除检查项
      this.$confirm(`是否确定删除‘${scope.row.categoryName}’的检查事项？`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          dangerouslyUseHTMLString: true,
          type: 'warning'
        }).then(() => {
          // 删除检查项列表tableData中数据
          this.dataForm.tempValue.tableData.splice(scope.$index, 1)
          // 删除选择检查项中的idList中数据
          let delIndex = this.dataForm.tempValue.selectedIdList.findIndex(item => item === scope.row.treeId)
          this.dataForm.tempValue.selectedIdList.splice(delIndex, 1)
        }).catch(() => {
        })
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