<!-- 隐患发送 -->
<template>
  <div>
    <el-dialog
      title="隐患发送"
      :close-on-click-modal="false"
      append-to-body
      :visible="visible"
      width="1200px"
      top="5vh"
      @close="close">
      <div v-loading="loading">
        <!-- 标签：切换发送隐患及历史记录 -->
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane
            v-for="item in tabs"
            :key="item.name"
            :label="item.label" 
            :name="item.name">
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
                  <el-form-item v-if="item.name === 'sendDanger'" label="编写隐患：">
                    <el-button type="primary" @click="selectData('dangerSelect')">添加违法违规行为</el-button>
                    <el-button @click="deleteDanger('multi')">删除违法违规行为</el-button>
                    <el-button type="primary" @click="selectData('addDanger')">新建违法违规行为</el-button>
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
                    label="违法违规行为"
                    header-align="center"
                    align="center">
                    <template slot-scope="scope">
                      <span v-if="!scope.row.isEdit">{{ scope.row.itemContent }}</span>
                      <el-input
                        v-else
                        v-model.trim="scope.row.itemContent"
                        placeholder="请填写违法违规行为"
                        type="textarea"
                        :autosize="{ minRows: 2, maxRows: 4}"
                        :maxlength="1000">
                      </el-input>
                    </template>
                  </el-table-column>
                  <el-table-column
                    label="违法认定法条"
                    header-align="center"
                    align="center">
                    <template slot-scope="scope">
                      <span v-if="!scope.row.isEdit">{{ scope.row.confirmBasis }}</span>
                      <el-input
                        v-else
                        v-model.trim="scope.row.confirmBasis"
                        placeholder="请填写违法认定法条"
                        type="textarea"
                        :autosize="{ minRows: 2, maxRows: 4}"
                        :maxlength="1000">
                      </el-input>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="onsiteBasis"
                    header-align="center"
                    align="center"
                    label="现场处理依据">
                    <template slot-scope="scope">
                      <span v-if="!scope.row.isEdit">{{ scope.row.onsiteBasis }}</span>
                      <el-input
                        v-else
                        v-model.trim="scope.row.onsiteBasis"
                        placeholder="请填写现场处理依据"
                        type="textarea"
                        :autosize="{ minRows: 2, maxRows: 4}"
                        :maxlength="1000">
                      </el-input>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="onsiteDesc"
                    header-align="center"
                    align="center"
                    label="现场处理措施">
                    <template slot-scope="scope">
                      <span v-if="!scope.row.isEdit">{{ scope.row.onsiteDesc }}</span>
                      <el-input
                        v-else
                        v-model.trim="scope.row.onsiteDesc"
                        placeholder="请填写现场处理措施"
                        type="textarea"
                        :autosize="{ minRows: 2, maxRows: 4}"
                        :maxlength="1000">
                      </el-input>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="penaltyBasis"
                    header-align="center"
                    align="center"
                    label="行政处罚依据">
                    <template slot-scope="scope">
                      <span v-if="!scope.row.isEdit">{{ scope.row.penaltyBasis }}</span>
                      <el-input
                        v-else
                        v-model.trim="scope.row.penaltyBasis"
                        placeholder="请填写行政处罚依据"
                        type="textarea"
                        :autosize="{ minRows: 2, maxRows: 4}"
                        :maxlength="1000">
                      </el-input>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="penaltyDesc"
                    header-align="center"
                    align="center"
                    label="行政处罚决定">
                    <template slot-scope="scope">
                      <span v-if="!scope.row.isEdit">{{ scope.row.penaltyDesc }}</span>
                      <el-input
                        v-else
                        v-model.trim="scope.row.penaltyDesc"
                        placeholder="请填写行政处罚决定"
                        type="textarea"
                        :autosize="{ minRows: 2, maxRows: 4}"
                        :maxlength="1000">
                      </el-input>
                    </template>
                  </el-table-column>
                  <el-table-column
                    v-if="item.name === 'sendDanger'"
                    header-align="center"
                    align="center"
                    label="操作"
                    width="100">
                    <template slot-scope="scope">
                      <div>
                        <el-button v-if="!scope.row.isEdit" type="text" @click="changeStatus(scope, 'edit')">编辑</el-button>
                        <el-button v-else type="text" @click="changeStatus(scope, 'save')">保存</el-button>
                        <el-button type="text" @click="deleteDanger('single', scope)">删除</el-button>
                      </div>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
        <select-person
          v-if="showDialog.selectPerson"
          :visible="showDialog.selectPerson"
          :selected-data="{no: dataForm.receiveId}"
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
          @save="confirmDangerContent"
          @close="closeDangerDialog"
        ></select-danger-content>
        <add-danger
          :visible="showDialog.addDanger"
          @close="closeDialog"
          @confirm="confirmAddDanger"
        ></add-danger>
      </div>
      <span slot="footer">
        <el-button :loading="loading" @click="close">取消</el-button>
        <el-button :loading="loading" type="primary" @click="save">{{activeName === 'sendDanger' ? '发送' : '再次发送'}}</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import selectPerson from '@/components/select-person'
import selectCompany from '@/components/select-company'
import selectDangerContent from '@/components/select-danger-content'
import addDanger from '@/components/add-danger'
import {getNowFormatTime, getNowTime} from '@/utils/date'
import {getUUID, randomString, sortbyAsc} from '@/utils/index'
export default {
  name: "SendDanger",
  components: {
    selectPerson,
    selectCompany,
    selectDangerContent,
    addDanger
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      loading: false,
      activeName: 'sendDanger',
      tabs: [
        {
          label: '隐患发送',
          name: 'sendDanger'
        },
        {
          label: '历史记录',
          name: 'historyList'
        },
      ],
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
        dangerSelect: false, // 展示选择隐患项弹窗
        addDanger: false, // 新建违法违规行为
      },
      selectedDangerList: [], // 选中的需要删除的隐患项列表
      userType: this.$store.state.user.userType,
    };
  },
  async created () {
    await this.getDangerList()
  },
  methods: {
    close (refresh) {
      this.$emit('close', refresh)
    },
    async getDangerList () {
      let isSend = this.activeName === 'sendDanger' ? '0' : '1'
      this.loading = true
      let sendDanger = await this.getDatabase('sendDanger')
      let dangerList = JSON.parse(JSON.stringify(sendDanger.filter(item => item.delFlag !== '1' && item.isSend === isSend) || []))
      dangerList.sort(sortbyAsc('createDate'))
      this.dataForm.dangerContent.tableData = dangerList
      this.loading = false
    },
    async confirmDangerContent ({data}) {
      // 选定隐患项
      // 保存选择的检查项
      this.loading = true
      let tableData = []
      // 抽取选择的检查项最底一层，作为table展示
      this.handleData(data.selecteddangerList, tableData)
      if (tableData.length > 0) {
        // 添加入隐患发送列表中
        let addDangerList = []
        for(let i = 0; i < tableData.length; i++) {
          let obj = {
            personIds: this.$store.state.user.userId, // 隐患发现人
            personNames: this.$store.state.user.userName, // 隐患发现人
            HistoryId: getNowTime() + randomString(28),
            categoryCode: tableData[i].categoryCode,
            no: tableData[i].no,
            confirmBasis: tableData[i].confirmBasis,
            createDate: getNowFormatTime(),
            detectTime: getNowFormatTime(),
            itemId: tableData[i].id,
            isNewRecord: false,
            isOther: false,
            isSelected: false,
            itemCode: tableData[i].itemCode,
            itemContent: tableData[i].itemContent,
            onsiteBasis: tableData[i].onsiteBasis,
            onsiteDesc: tableData[i].onsiteDesc,
            penaltyBasis: tableData[i].penaltyBasis,
            penaltyDesc: tableData[i].penaltyDesc,
            updateDate: getNowFormatTime(),
            delFlag: '0',
            isSend: '0',
            isCommon: null
          }
          addDangerList.push(obj)
        }
        await this.updateDatabase('sendDanger', addDangerList, 'HistoryId')
        this.loading = false
        this.getDangerList()
      }
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
    async deleteDanger(type, scope = {}) {
      // 首先遍历保存当前正在编辑项
      this.loading = true
      await this.saveEditItem()
      if (type === 'single') {
        // 单个删除隐患项
        this.$confirm(`是否确定删除违法违规行为：${scope.row.itemContent}?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          dangerouslyUseHTMLString: true,
          type: 'warning'
        }).then(async () => {
          await this.deleteDatabasePhysics('sendDanger', [scope.row], 'HistoryId')
          this.getDangerList()
        }).catch(() => {})
      } else if (type === 'multi') {
        // 多选删除已选中的隐患
        if (this.selectedDangerList.length === 0) {
          this.$message.error('请先从下表中选择需要删除的违法违规行为！')
          return
        }
        // let itemContents = ''
        // this.selectedDangerList.map(item => {
        //   itemContents += item.itemContent + '；'
        // })
        // itemContents = itemContents.substring(0, itemContents.length - 1)
        await this.$confirm(`是否确定删除已选择的${this.selectedDangerList.length}条违法违规行为?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          dangerouslyUseHTMLString: true,
          type: 'warning'
        }).then(async () => {
          await this.deleteDatabasePhysics('sendDanger', this.selectedDangerList, 'HistoryId')
          this.getDangerList()
        }).catch(() => {})
        
      }
      this.loading = false
    },
    async changeStatus (scope, operation) {
      // 切换编辑或保存
      // 保存当前编辑的数据，并刷新页面
      await this.saveEditItem()
      await this.getDangerList()
      if (operation === 'edit') {
        // 需要编辑的单条设置为编辑状态
        let newData = Object.assign({}, scope.row, {
          isEdit: !scope.row.isEdit
        })
        this.$set(this.dataForm.dangerContent.tableData, scope.$index, newData)
      }
    },
    async saveEditItem () {
      this.loading = true
      // 遍历当前为编辑状态的数据，设置为非编辑状态并且保存此条数据
      for (let i = 0; i < this.dataForm.dangerContent.tableData.length; i++) {
        if (this.dataForm.dangerContent.tableData[i].isEdit) {
          this.dataForm.dangerContent.tableData[i].isEdit = false
        }
      }
      await this.updateDatabase('sendDanger', this.dataForm.dangerContent.tableData, 'HistoryId')
      this.loading = false
    },
    async save () {
      if (!this.$store.state.onLine) {
        this.$message.error('当前为离线状态，请联网后发送！')
        return
      }
      // 确定：发送隐患
      // 先保存当前正在编辑内容
      this.loading = true
      await this.saveEditItem()
      if (this.dataForm.receiveId && this.dataForm.companyId) {
        let dangerContent = []
        if (this.selectedDangerList.length > 0) {
          this.selectedDangerList.map(item => {
            // 如果为历史记录再次发送，则创建新的HistoryId，以防止接收问题
            let isSend = this.activeName === 'sendDanger'
            let danger = {
              HistoryId: isSend ? item.HistoryId : getNowTime() + randomString(28),
              categoryCode: item.categoryCode,
              no: item.no,
              confirmBasis: item.confirmBasis,
              createDate: item.createDate,
              detectTime: item.detectTime,
              createBy: this.$store.state.user.userId,
              id: item.itemId,
              isNewRecord: item.isNewRecord,
              isOther: item.isOther,
              isSelected: item.isSelected,
              itemCode: item.itemCode,
              itemContent: item.itemContent,
              onsiteBasis: item.onsiteBasis,
              onsiteDesc: item.onsiteDesc,
              penaltyBasis: item.penaltyBasis,
              penaltyDesc: item.penaltyDesc,
              updateDate: item.updateDate,
              delFlag: '0',
              isSend: '1',
              isCommon: item.isCommon
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
              // 发送成功后更新本地数据库
              if (this.activeName === 'sendDanger') {
                // 如果为隐患发送，第一次发送时更新发送记录信息
                let updateDataList = []
                for (let i = 0; i < this.selectedDangerList.length; i++) {
                  let updateData = Object.assign({}, this.selectedDangerList[i], {
                    isSend: '1',
                    postId: this.$store.state.user.userId,		// 发送人id
                    receiveId: this.dataForm.receiveId,		// 接收人id
                    name: this.dataForm.receiveName,		// name
                    companyId: this.dataForm.companyId,		// 企业id
                    companyName: this.dataForm.companyName,		// 企业名称
                    sendTime: getNowFormatTime(),
                  })
                  updateDataList.push(updateData)
                }
                await this.updateDatabase('sendDanger', updateDataList, 'HistoryId')
              }
              await this.getDangerList()
              // this.close()
            } else {
              this.$message.error('发送隐患失败，请再次尝试')
            }
          })
          .catch((err) => {
            this.$message.error('发送隐患失败，请再次尝试')
            console.log('发送隐患失败:', err)
          });
      } else {
        this.$message.error('请先选择接收人和煤矿后发送隐患！')
      }
      this.loading = false
    },
    handleClick () {
      // 切换tab
      this.getDangerList()
    },
    selectData (type) {
      // 打开选择用户、选择企业或选择隐患项弹窗
      this.showDialog[type] = true
    },
    closeDialog ({page, refresh}) {
      // 关闭选择用户、选择企业弹窗
      this.showDialog[page] = false
      if (refresh) {
        this.getDangerList()
      }
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
    async confirmAddDanger (data) {
      // 确定新建隐患项
      this.loading = true
      let danger = {
        HistoryId: getNowTime() + randomString(28),
        categoryCode: data.categoryCode,
        no: data.categoryCode,
        confirmBasis: data.confirmBasis,
        createDate: getNowFormatTime(),
        detectTime: getNowFormatTime(),
        itemId: data.id,
        isNewRecord: false,
        isOther: false,
        isSelected: false,
        itemCode: data.itemCode,
        itemContent: data.itemContent,
        onsiteBasis: data.onsiteBasis,
        onsiteDesc: data.onsiteDesc,
        penaltyBasis: data.penaltyBasis,
        penaltyDesc: data.penaltyDesc,
        updateDate: getNowFormatTime(),
        delFlag: '0',
        isSend: '0',
        isCommon: '1'
      }
      // 添加至数据库
      await this.updateDatabase('sendDanger', [danger], 'HistoryId')
      // 刷新表格
      await this.getDangerList()
      this.loading = false
    }
  },
};
</script>

<style lang="scss" scoped>
.send-danger-main {
  display: flex;
  flex-direction: column;
  height: 65vh;
}
</style>