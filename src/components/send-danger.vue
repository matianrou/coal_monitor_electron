<!-- 隐患发送 -->
<template>
  <div>
    <el-dialog
      title="隐患发送"
      :close-on-click-modal="false"
      append-to-body
      :visible="visible"
      width="1000px"
      top="5vh"
      @close="close">
      <div>
        <!-- 标签：切换发送隐患及历史记录 -->
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="隐患发送" name="sendDanger">
            <div class="send-danger-main">
              <div>
                <el-form
                  ref="dataForm"
                  label-position="right"
                  label-width="120px"
                  :model="dataForm"
                  :rules="rules"
                  size="small">
                  <el-form-item label="发送给：" prop="receiveId">
                    <el-input v-model="dataForm.receiveName" placeholder="请选择接收人" style="width: 200px;" @focus="selectData('selectPerson')"></el-input>
                  </el-form-item>
                  <el-form-item label="煤  矿：" prop="companyId">
                    <el-input v-model="dataForm.companyName" placeholder="请选择煤矿" style="width: 200px;" @focus="selectData('selectCompany')"></el-input>
                  </el-form-item>
                  <el-form-item label="编写隐患：" prop="dangerContent">
                    <el-button type="primary" @click="selectData('dangerSelect')">添加违法违规行为</el-button>
                    <el-button @click="deleteDanger">删除违法违规行为</el-button>
                  </el-form-item>
                </el-form>
              </div>
              <div style="flex: 1; height: calc(100% - 200px);">
                <el-table
                  :data="dataForm.dangerContent.tableData"
                  stripe
                  border
                  style="width: 100%;"
                  height="100%"
                  :header-cell-style="{background: '#f5f7fa'}"
                  @selection-change="handleSelectionChange">
                  <el-table-column
                    type="selection"
                    width="55">
                  </el-table-column>
                  <el-table-column
                    prop="itemContent"
                    label="违法违规行为"
                    header-align="center"
                    align="center">
                  </el-table-column>
                  <el-table-column
                    prop="confirmClause"
                    label="违法认定法条"
                    header-align="center"
                    align="center">
                  </el-table-column>
                  <el-table-column
                    prop="onsiteBasis"
                    header-align="center"
                    align="center"
                    label="现场处理依据">
                  </el-table-column>
                  <el-table-column
                    prop="onsiteDesc"
                    header-align="center"
                    align="center"
                    label="现场处理措施">
                  </el-table-column>
                  <el-table-column
                    prop="penaltyBasis"
                    header-align="center"
                    align="center"
                    label="行政处罚依据">
                  </el-table-column>
                  <el-table-column
                    prop="penaltyDesc"
                    header-align="center"
                    align="center"
                    label="行政处罚决定">
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="历史记录" name="historyList">
            <el-table
              :data="sendDangerListHistory"
              stripe
              border
              style="width: 100%"
              :header-row-style="{fontSize: '16px', fontWeight: 600, color: '#303133'}">
              <el-table-column
                prop="receiveName"
                label="接收人"
                header-align="center"
                align="center">
              </el-table-column>
              <el-table-column
                prop="companyName"
                label="煤矿"
                header-align="center"
                align="center">
              </el-table-column>
              <el-table-column
                prop="sendTime"
                header-align="center"
                align="center"
                label="发送时间">
              </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
        <select-person
          :visible="showDialog.selectPerson"
          title="选择接收人"
          @confirm-person="confirmPerson"
          @close="closeDialog"
        ></select-person>
        <select-company
          :visible="showDialog.selectCompany"
          @confirm-company="confirmCompany"
          @close="closeDialog"
        ></select-company>
        <select-danger-content
          v-if="showDialog.dangerSelect"
          :visible="showDialog.dangerSelect"
          :value="dataForm.dangerContent"
          :corp-data="{corpId: dataForm.companyId}"
          @save="confirmDangerContent"
          @close="closeDangerDialog"
        ></select-danger-content>
      </div>
      <span slot="footer">
        <el-button @click="close">取消</el-button>
        <el-button type="primary" @click="save">发送</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import selectPerson from '@/components/select-person'
import selectCompany from '@/components/select-company'
import selectDangerContent from '@/components/select-danger-content'
import {getNowFormatTime} from '@/utils/date'
import {getUUID} from '@/utils/index'
export default {
  name: "SendDanger",
  components: {
    selectPerson,
    selectCompany,
    selectDangerContent
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      activeName: 'sendDanger',
      dataForm: { // 隐患发送Form
        receiveId: null, // 接收人
        receiveName: null, // 接收人
        companyId: null, // 企业
        companyName: null, // 企业
        dangerContent: {
          tableData: [],
          selectedIdList: [], // 回显发送隐患的idList
        }, // 隐患项选择的内容列表
      },
      rules: {},
      sendDangerListHistory: [], // 历史发送隐患记录
      showDialog: {
        selectPerson: false, // 展示选择用户弹窗
        selectCompany: false, // 展示选择企业弹窗
        dangerSelect: false // 展示选择隐患项弹窗
      },
      selectedDangerList: [], // 选中的需要删除的隐患项列表
      userType: this.$store.state.user.userType,
    };
  },
  created () {
  },
  methods: {
    close (refresh) {
      this.$emit('close', refresh)
    },
    save () {
      // 确定：发送隐患
      let dangerContent = []
      if (this.selectedDangerList.length > 0) {
        this.selectedDangerList.map(item => {
          let danger = {
            HistoryId: getUUID(),
            categoryCode: item.categoryCode,
            confirmClause: item.confirmClause,
            createDate: getNowFormatTime(),
            id: item.id,
            isNewRecord: false,
            isOther: false,
            isSelected: false,
            itemCode: item.itemCode,
            noItemContent: item.noItemContent,
            onsiteBasis: item.onsiteBasis,
            onsiteDesc: item.onsiteDesc,
            penaltyBasis: item.penaltyBasis,
            penaltyDesc: item.penaltyDesc,
            updateDate: getNowFormatTime()
          }
          dangerContent.push(danger)
        })
      } else {
        this.$message.error('请选择需要发送的隐患项！')
        return
      }
      let params = {
        id: getUUID(),
        postId: this.$store.state.user.userId,		// 发送人id
        receiveId: this.dataForm.receiveId,		// 接收人id
        name: this.dataForm.receiveName,		// name
        companyId: this.dataForm.companyId,		// 企业id
        companyName: this.dataForm.companyName,		// 企业名称
        isReceive: '0',		// 0为未接收，1为已接收
        dangerContent: JSON.stringify(dangerContent)		// 隐患内容
      }
      this.$http.post(`${this.userType === 'supervision' ? '/sv' : ''}/local/postdanger/save?__sid=${this.$store.state.user.userSessId}`, {sendJson: true, data: params})
        .then(async ({ data }) => {
          if (data.status === "200") {
            this.$message.success('发送隐患成功！')
            this.close()
          } else {
            this.$message.error('发送隐患失败，请再次尝试')
          }
        })
        .catch((err) => {
          this.$message.error('发送隐患失败，请再次尝试')
          console.log('发送隐患失败:', err)
        });
    },
    handleClick () {
      // 切换tab
    },
    selectData (type) {
      // 打开选择用户、选择企业或选择隐患项弹窗
      if (type === 'dangerSelect') {
        // 当选择隐患项的时候判断是否已经选择企业，如果没有则提示先选择企业
        if (!this.dataForm.companyId) {
          this.$message.error('请先选择煤矿再选择违法违规行为！')
          return
        }
      }
      this.showDialog[type] = true
    },
    closeDialog ({page, refresh}) {
      // 关闭选择用户、选择企业弹窗
      this.showDialog[page] = false
    },
    closeDangerDialog (page) {
      // 关闭选择隐患项弹窗
      this.showDialog[page] = false
    },
    confirmPerson (selectedPerson) {
      // 选择接收人
      if (selectedPerson) {
        this.dataForm.receiveId = selectedPerson.no
        this.dataForm.receiveName = selectedPerson.name
      }
    },
    confirmCompany (selectedCompany) {
      // 选定企业
      if (selectedCompany) {
        this.dataForm.companyId = selectedCompany.corpId
        this.dataForm.companyName = selectedCompany.corpName
      }
    },
    confirmDangerContent ({data}) {
      // 选定隐患项
      // 保存选择的检查项
      let tableData = []
      // 抽取选择的检查项最底一层，作为table展示
      this.handleData(data.selecteddangerList, tableData)
      this.dataForm.dangerContent.tableData = tableData
      // 遍历table获取treeId作为后续回显
      let selectedId = []
      tableData.length > 0 && tableData.map(item => {
        selectedId.push(item.treeId)
      })
      console.log('table', tableData)
      this.dataForm.dangerContent.selectedIdList = selectedId
    },
    handleData (data, tableData) {
      // 递归遍历获取最底层数据
      if (data.length > 0) {
        data.map((item) => {
          if (item.children && item.children.length > 0) {
            this.handleData(item.children, tableData)
          } else {
            tableData.push(item)
          }
        })
      }
    },
    handleSelectionChange (val) {
      this.selectedDangerList = val
    },
    deleteDanger() {
      // 删除已选中的隐患项
      if (this.selectedDangerList.length === 0) {
        this.$message.error('请先从下表中选择需要删除的违法违规行为！')
        return
      }
      this.selectedDangerList.map(select => {
        let index = this.dataForm.dangerContent.tableData.findIndex(danger => danger.itemCode === select.itemCode)
        this.dataForm.dangerContent.tableData.splice(index, 1)
      })
    }
  },
};
</script>

<style lang="scss" scoped>
/deep/ .el-dialog__body {
  padding: 0 20px;
}
.send-danger-main {
  display: flex;
  flex-direction: column;
  height: 65vh;
}
</style>