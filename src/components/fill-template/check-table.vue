<!-- 填写组件 检查分工明细表 -->
<template>
  <div style="width: 100%;">
    <div>
      <el-button v-if="options.canEdit" type="primary" @click="handleDialog('checkSelect')">新增检查项</el-button>
      <el-button v-if="options.canEdit" type="primary" @click="batchOperation('delete')">删除检查项</el-button>
      <el-button v-if="options.canEdit" type="primary" @click="batchOperation('selectPerson')">设置检查人员</el-button>
      <el-button v-if="options.canEdit" type="primary" @click="batchOperation('selectCheckPosition')">设置检查地点</el-button>
      <el-button v-if="options.canEdit" type="primary" @click="batchOperation('send')">发送检查任务</el-button>
      <el-button v-if="options.canEdit" type="primary" @click="handleDialog('exportCheck')">导入</el-button>
    </div>
    <div>
      <div class="title">
        <span>已选检查内容：</span>
      </div>
      <el-table
        v-if="dataForm.tempValue.tableData"
        ref="checkTable"
        :data="dataForm.tempValue.tableData"
        style="width: 100%"
        height="65vh"
        row-key="checkId"
        border
        :header-cell-style="{background: '#f5f7fa'}"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          header-align="center"
          align="center"
          width="55">
        </el-table-column>
        <el-table-column
          prop="categoryName"
          label="检查事项"
          header-align="center"
          align="left"
          width="130">
          <template slot-scope="scope">
            <el-input
              v-if="options.canEdit"
              v-model="scope.row.categoryName"
              type="textarea"
              :autosize="{ minRows: 4, maxRows: 6}">
            </el-input>
            <span v-else>{{ scope.row.categoryName }}</span>
          </template>
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
            <div>
              <span>{{ scope.row.positions }}</span>
            </div>
            <div>
              <el-button 
                v-if="options.canEdit && scope.row.positions" 
                type="text"
                @click="clearField('positions', scope.row, scope.$index)">
                清空
              </el-button>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          header-align="center"
          align="left"
          label="检查分工">
          <template slot-scope="scope">
            <div>
              <span>{{ scope.row.personNames }}</span>
            </div>
            <div>
              <el-button 
                v-if="options.canEdit && scope.row.personNames" 
                type="text"
                @click="clearField('person', scope.row, scope.$index)">
                清空
              </el-button>
            </div>
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
            <el-button type="text" size="small" @click="operation(scope, 'selectPerson')" style="margin-left: 0px;">检查人员</el-button>
            <!-- <el-button type="text" size="small" @click="copyItem(scope)" style="margin-left: 0px;">复制此项</el-button> -->
            <el-button type="text" size="small" @click="deleteItem(scope)" style="margin-left: 0px;">删除</el-button>
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
      v-if="visible.selectPerson"
      :visible="visible.selectPerson"
      :multi-select="true"
      :selected-data-list="selectedRowPersonList"
      :has-add="true"
      :corp-data="corpData"
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
    <export-check-items
      :visible="visible.exportCheck"
      @close="handleClose"
      @save="confirmExportItems"
    ></export-check-items>
  </div>
</template>

<script>
import selectCheckContent from '../select-check-content'
import selectPerson from '@/components/select-person'
import selectCheckPosition from '@/components/select-check-position'
import { setCheckPositionItem } from '@/utils/handlePaperData'
import exportCheckItems from '@/components/export-check-items'
import { randomString } from '@/utils'
import { getNowTime, getNowFormatTime } from "@/utils/date";
import Sortable from 'sortablejs'
export default {
  name: "CheckTable",
  components: {
    selectCheckContent,
    selectPerson,
    selectCheckPosition,
    exportCheckItems
  },
  props: {
    value: {
      type: Object,
      default: () => {
        return {
          tableData: [],
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
    },
    paperData: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      dataForm: {
        tempValue: {
          tableData: [],
        }
      },
      visible: {
        checkSelect: false,
        selectPerson: false,
        selectCheckPosition: false,
        exportCheck: false, // 导入检查项
      },
      checkListTreeProps: {
        label: 'treeName',
        children: 'children',
      },
      editText: null, // 编辑内容
      selectedIndex: null, // 选择的检查人员及选择地点的检查项index
      selectedRowPersonList: [], // 选择的检查人员列表，用于回显
      selectedCheckPosition: null, // 选择的检查检查人员数据，用于回显
      multiSelectedIndexs: [], // 多选的检查项
      multiOperationTag: false, // 是否为多选操作，区分多选或单个设置人员或地点时使用
      sortableItem: null, // 拖拽实例
    };
  },
  created() {
    this.showAlert()
    this.initData()
  },
  mounted() {
    this.rowDrop()
  },
  watch: {
    'dataForm.tempValue.tableData.length'(val) {
      // 列表中有两个以上的值时才能排序
      if (val > 1) {
        this.sortableItem.options.disabled = false
      } else {
        this.sortableItem.options.disabled = true
      }
    }
  },
  methods: {
    showAlert () {
      // 展示提示框
      this.$alert('工作提示：为规范下矿下井等执法检查情况统计工作，国家煤监局对执法系统中的《检查方案》作了调整，现提醒所有执法人员，在制作《检查方案》时，务必将所有参与检查人员（包括参与检查的省局、分局领导班子成员）的检查分工情况，在《检查分工明细表》中载明。')
    },
    initData () {
      this.dataForm.tempValue = JSON.parse(JSON.stringify(this.value)) 
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
      if (tableData.length > 0) {
        tableData.map(item => {
          item.checkId = getNowTime() + randomString(28)
          item.order = this.dataForm.tempValue.tableData.length
          this.dataForm.tempValue.tableData.push(item)
        })
      }
    },
    handleData (data, tableData) {
      // 递归遍历获取最底层数据
      if (data.length > 0) {
        data.map(item => {
          if (item.children && item.children.length > 0) {
            this.handleData(item.children, tableData)
          } else {
            let itemObject = Object.assign({}, item, {
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
      // 单选选择人员或者地点的弹窗
      this.selectedIndex = scope.$index
      if (type === 'selectPerson') {
        this.selectedRowPersonList = scope.row.personList
      } else if (type === 'selectCheckPosition') {
        this.selectedCheckPosition = scope.row.positionData
      }
      this.visible[type] = true
      this.multiOperationTag = false
    },
    batchOperation (type) {
      // 判断是否选中检查项，如果没有选中则提示
      if (this.multiSelectedIndexs.length > 0) {
        if (type === 'delete') {
          // 删除检查项
          this.deleteItems()
        } else if (type === 'selectPerson') {
          // 设置检查人员
          this.selectedRowPersonList = this.multiSelectedIndexs[0].personList
          this.visible[type] = true
          this.multiOperationTag = true
        } else if (type === 'selectCheckPosition') {
          // 设置检查地点
          this.selectedCheckPosition = this.multiSelectedIndexs[0].positionData
          this.visible[type] = true
          this.multiOperationTag = true
        } else if (type === 'send') {
          if (!this.$store.state.onLine) {
            this.$message.error('当前为离线状态，请联网后发送！')
            return
          }
          // 发送检查任务
          this.sendCheckItems()
        }
      } else {
        this.$message.error('请先选择检查项！')
      }
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
      // 判断是多个操作还是单项操作
      let personNames = ''
      if (personList.length > 0) {
        personList.map(item => {
          personNames += item.name + '，'
        })
        personNames = personNames.substring(0, personNames.length - 1)
      }
      if (this.multiOperationTag) {
        this.multiSelectedIndexs.map(selectedItem => {
          let selectedIndex = this.dataForm.tempValue.tableData.findIndex(tableItem => tableItem.checkId === selectedItem.checkId)
          let saveData = Object.assign({}, this.dataForm.tempValue.tableData[selectedIndex], {personNames, personList})
          this.$set(this.dataForm.tempValue.tableData, selectedIndex, saveData)
        })
        // 操作完成后重新再选中
        let selected = JSON.parse(JSON.stringify(this.multiSelectedIndexs)) 
        // 先清空
        this.$refs.checkTable.clearSelection()
        // 再选中
        selected.forEach(row => {
          this.$refs.checkTable.toggleRowSelection(this.dataForm.tempValue.tableData.find(item => {
            return row.checkId === item.checkId
          }));
        })
      } else {
        let saveData = Object.assign({}, this.dataForm.tempValue.tableData[this.selectedIndex], {personNames, personList})
        this.$set(this.dataForm.tempValue.tableData, this.selectedIndex, saveData)
        // 清空选中
        this.$refs.checkTable.clearSelection()
      }
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
      if (this.multiOperationTag) {
        // 多选设置时
        this.multiSelectedIndexs.map(selectedItem => {
          let selectedIndex = this.dataForm.tempValue.tableData.findIndex(tableItem => tableItem.checkId === selectedItem.checkId)
          let saveData = Object.assign({}, this.dataForm.tempValue.tableData[selectedIndex], {positions, positionData, addressType})
          this.$set(this.dataForm.tempValue.tableData, selectedIndex, saveData)
        })
        // 操作完成后重新再选中
        let selected = JSON.parse(JSON.stringify(this.multiSelectedIndexs)) 
        // 先清空
        this.$refs.checkTable.clearSelection()
        // 再选中
        selected.forEach(row => {
          this.$refs.checkTable.toggleRowSelection(this.dataForm.tempValue.tableData.find(item => {
            return row.checkId === item.checkId
          }));
        })
      } else {
        // 单个设置时
        let saveData = Object.assign({}, this.dataForm.tempValue.tableData[this.selectedIndex], {positions, positionData, addressType})
        this.$set(this.dataForm.tempValue.tableData, this.selectedIndex, saveData)
        // 清空选中
        this.$refs.checkTable.clearSelection()
      }
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
          // 清空选中
          this.orderTable(this.dataForm.tempValue.tableData)
          this.$refs.checkTable.clearSelection()
        }).catch(() => {
        })
    },
    handleSelectionChange (val) {
      this.multiSelectedIndexs = val
    },
    deleteItems () {
      // 多选删除
      // let mesName = ''
      // this.multiSelectedIndexs.map(item => {
      //   mesName += item.categoryName + ','
      // })
      // mesName = mesName.substring(0, mesName.length - 1)
      this.$confirm(`是否确定删除所有已选的检查事项？`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          dangerouslyUseHTMLString: true,
          type: 'warning'
        }).then(() => {
          this.multiSelectedIndexs.map(selectedItem => {
            // 删除检查项列表tableData中数据
            let index = this.dataForm.tempValue.tableData.findIndex(tableItem => tableItem.checkId === selectedItem.checkId)
            this.dataForm.tempValue.tableData.splice(index, 1)
            // 清空选择
            this.$refs.checkTable.clearSelection()
          })
          this.orderTable(this.dataForm.tempValue.tableData)
        }).catch(() => {
        })
    },
    sendCheckItems () {
      // 发送检查任务
      // 调用接口发送检查任务
      let sendDataList = []
      if (this.multiSelectedIndexs.length > 0) {
        let isSend = true
        // 判断是否可以发送
        // 判断当前是否有PaperId， 如果有则继续保存，没有则提示先保存文书 ?
        // 判断当前选择的数据中是否已经选择检查人员,又未选择的弹窗提示
        for (let i = 0; i < this.multiSelectedIndexs.length; i++) {
          if (this.multiSelectedIndexs[i].personList.length === 0) {
            isSend = false
            break
          }
        }
        if (!isSend) {
          this.$message.error('请选择检查人员!')
          return
        }
        this.$confirm('是否确定发送检查任务？', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            dangerouslyUseHTMLString: true,
            type: 'warning'
          }).then(() => {
            for (let i = 0; i < this.multiSelectedIndexs.length; i++) {
              let obj = this.multiSelectedIndexs[i]
              for (let j = 0; j < obj.personList.length; j++) {
                let person = obj.personList[j]
                sendDataList.push({
                  id: getNowTime() + randomString(28),
                  postId: this.$store.state.user.userId,
                  postName: this.$store.state.user.userName,
                  receiveId: person.no,
                  receiveName: person.name,
                  corpId: this.corpData.corpId,
                  corpName: this.corpData.corpName,
                  caseId: this.corpData.caseId,
                  paperId: this.paperData.paperId,
                  sameId: "",
                  audutingId: "",
                  audutingName: "",
                  name: obj.name,
                  itemCode: obj.itemCode,
                  itemContent: obj.itemContent,
                  method: obj.method,
                  basis: obj.method,
                  categoryCode: obj.categoryCode,
                  categoryName: obj.categoryName,
                  groupId: obj.groupId,
                  address: obj.positions,
                  taskTime: getNowFormatTime(),
                  remarks: "",
                  createDate: getNowFormatTime(),
                  updateDate: getNowFormatTime(),
                  delFlag: "0",
                  createBy: {
                    id: this.$store.state.user.userId,
                  },
                  updateBy: {
                    id: this.$store.state.user.userId,
                  }
                })
              }
            }
            this.$http.post(`${this.userType === 'supervision' ? '/sv' : ''}/local/api-checkwarn/savetask?__sid=${this.$store.state.user.userSessId}`, {sendJson: true, data: sendDataList})
              .then(async ({ data }) => {
                if (data.status === "200") {
                  this.$message.success('发送检查任务成功！')
                } else {
                  this.$message.error('发送检查任务失败，请再次尝试')
                }
              })
              .catch((err) => {
                this.$message.error('发送检查任务失败，请再次尝试')
                console.log('发送检查任务失败:', err)
              });
          }).catch(() => {})
      }
    },
    confirmExportItems ({data}) {
      // 确定导入检查项
      data.map(item => {
        let addItem = Object.assign({}, item, {
          checkId: getNowTime() + randomString(28),
          order: this.dataForm.tempValue.tableData.length
        })
        this.dataForm.tempValue.tableData.push(addItem)
      })
      this.visible.exportCheck = false
    },
    // 行拖拽
    rowDrop () {
      // 此时找到的元素是要拖拽元素的父容器
      const tbody = this.$refs.checkTable.$el.querySelectorAll(
        '.el-table__body-wrapper > table > tbody'
      )[0]
      const that = this;
      this.sortableItem = new Sortable(tbody, {
        //  指定父元素下可被拖拽的子元素
        draggable: ".el-table__row",
        disabled: that.dataForm.tempValue.tableData.length < 2,
        onEnd ({ newIndex, oldIndex }) {
          let value = JSON.parse(JSON.stringify(that.dataForm.tempValue.tableData))
          let currRow = value.splice(oldIndex, 1)[0];
          value.splice(newIndex, 0, currRow);
          // 重新设置排序
          that.orderTable(value)
          that.dataForm.tempValue.tableData = value
          // 清空选择
          that.$refs.checkTable.clearSelection()
        }
      });
    },
    orderTable (val) {
      if (val.length > 0) {
        val.forEach((item, index) => {
          item.order = index
        })
      }
    },
    clearField (field, data, index) {
      // 清空字段：检查地点或检查分工
      if (field === 'positions') {
        data.positionData = {}
        data.positions = null
      } else if (field === 'person') {
        data.personList = []
        data.personNames = null
      }
    },
    copyItem (scope) {
      // 复制粘贴一条同样的
      let data = scope.row
      let index = scope.$index
      let checkId = getNowTime() + randomString(28)
      let addItem = Object.assign({}, data, {
        checkId
      })
      this.dataForm.tempValue.tableData.splice(index, 0, addItem)
      // 重新排序
      this.orderTable(this.dataForm.tempValue.tableData)
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