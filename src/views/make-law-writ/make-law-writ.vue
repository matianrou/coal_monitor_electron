<!-- tab: 执法工作台 -->
<template>
  <div id="pageWork" class="make-law-writ">
    <div v-show="!showPage.writFill" class="make-law-writ-show">
      <div class="make-law-writ-show-select">
        <!-- 选择检查活动 -->
        <case-list
          ref="caseList"
          use-page="MakeLawWrit"
          :select-plan-data="selectPlanData"
          @change-page="changePage"
          @create-case="createCase"
        ></case-list>
      </div>
      <div class="make-law-writ-show-detail">
        <!-- 制作执法文书 空 -->
        <div v-if="showPage.empty" id="workContainer">
          <br />
          <br />
          <br />
          <br />
          <div style="width:100%;font-size:16px;text-align:center;">请从左边选择企业，开始制作执法文书……</div>
        </div>
        <!-- 制作执法文书 主流程 -->
        <div v-else id="pageDocument" class="detail-main">
          <div class="detail-org-information">
            <!-- 企业信息 -->
            <org-information
              v-if="corpData && corpData.corpId"
              :corp-data="corpData"
            ></org-information>
          </div>
          <div class="detail-writ-flow">
            <!-- 文书流程 -->
            <component
              :is="writFlow"
              :corp-data="corpData"
              :flow-status="flowStatus"
              :paper-count="paperCount"
              :show-jczf-report="showJczfReport"
              :danger-status="dangerStatus"
              :change-danger-status="changeDangerStatus"
              @change-page="changePage"
              @refresh-writ="showDocTemplet"
            ></component>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showPage.writFill" class="make-law-writ-fill">
      <!-- 填写文书 -->
      <component
        v-if="$store.state.user.userType"
        :is="`${$store.state.user.userType}-writ-list`"
        :show-temp="showTemp"
        :corp-data="corpData"
        :doc-data="docData"
        :paper-data="paperData"
        @go-back="changePage"
      ></component>
    </div>
    <writ-information
      :visible="visible.newCase"
      :corp-data="corpData"
      :select-plan-data="selectPlanData"
      @close="closeDialog"
    ></writ-information>
    <!-- 文书选择 -->
    <select-paper
      :visible="selectPaperVisible"
      :paper-list="paperList"
      @close="closeSelectDialog"
      @confirm-paper="confirmPaper"
    ></select-paper>
    <check-corp-info
      v-if="checkCorpInfoVisible"
      :visible="checkCorpInfoVisible"
      :corp-data="corpData"
      @close="closeCheckCorpInfo"
      @confirm="confirmCheckCorpInfo"
    ></check-corp-info>
  </div>
</template>

<script>
import caseList from "@/components/case-list"; // 选择企业
import orgInformation from '@/components/org-information' // 企业信息
import writInformation from '@/components/writ-information' // 创建活动弹窗
import selectPaper from '@/components/select-paper'
import { sortbyAsc } from "@/utils/index";
import checkCorpInfo from '@/components/check-corp-info'
import monitorWritFlow from '@/views/writ-flow/monitor/writ-flow' // 监察流程组件
import supervisionWritFlow from '@/views/writ-flow/supervision/writ-flow' // 监管流程组件
import monitorWritList from '@/views/make-law-writ/components/monitor-writ-list' // 监察文书组件表
import supervisionWritList from '@/views/make-law-writ/components/supervision-writ-list' // 监管文书组件表

export default {
  name: "MakeLawWrit",
  components: {
    monitorWritFlow,
    supervisionWritFlow,
    monitorWritList,
    supervisionWritList,
    caseList,
    orgInformation,
    writInformation,
    selectPaper,
    checkCorpInfo,
  },
  data() {
    return {
      showPage: {
        empty: true,
        writFlow: false,
        writFill: false
      },
      corpData: {}, // 选择的煤矿
      selectPlanData: {}, // 选择的计划日期和归档机构
      visible: {
        newCase: false, // 创建检查活动弹窗
      },
      showTemp: null, // 展示的文书详情模板号，比如let100
      docData: {}, // 选择显示的文书基本信息编号及名称
      caseData: {}, // 选择的活动信息
      flowStatus: {}, // 检查活动流程各文书状态，'save'为保存，'file'为存档
      paperCount: {}, // 文书个数，用来在文书流程中展示多个文书数量
      dangerStatus: {}, // 各文书隐患情况
      changeDangerStatus: {}, // 关联文书隐患修改情况
      isCreated: false, // 是否新增文书
      paperData: {}, // 多个文书时选择的文书数据
      selectPaperVisible: false, // 选择文书弹窗
      templatePaperData: {},  // 当选择文书时，临时保存的文书数据，用来选择后指定文书跳转及展示
      paperList: [], // 选择的文书列表
      showJczfReport: false, // 是否展示监察执法报告环节
      checkCorpInfoVisible: false, // 回传煤矿信息
    }
  },
  computed: {
    writFlow() {
      // 动态组件，动态调用监察或监管文书流程
      return this.$store.state.user.userType === 'supervision' ? supervisionWritFlow : monitorWritFlow
    }
  },
  created() {
  },
  methods: {
    createCase (data) {
      // 创建已有计划的煤矿的检查活动
      this.corpData = data.corpData
      this.selectPlanData = data.selectPlanData
      // 弹窗创建计划
      this.visible.newCase = true
    },
    async closeDialog (params) {
      if (params.refresh) {
        await this.$refs.caseList.getData()
      }
      this.visible[params.name] = false
    },
    async changePage ({page, data}) {
      this.showPage = {
        empty: false,
        writFlow: false,
        writFill: false
      }
      if (page === 'writFill') {
        this.paperData = {}
        this.paperList = []
        this.templatePaperData = {}
        // 进入填写页面前，根据新增或修改调取数据，
        // 如果新增则直接进入编辑页面并进行初始化，
        if (data.isCreated) {
          // 新增时进入填写页面时，data为展示模板page
          // 新增时增加判断：如果是首次添加检查方案时，增加煤矿信息确认回传窗口
          // 且监察时才需要回传
          if (this.$store.state.onLine && data.docData.docTypeNo === '22' && this.corpData.constructType === '11' 
            && this.caseData.caseType === '0' && this.$store.state.user.userType !== 'supervision') {
            let wkPaper = await this.getPaperDatabase(this.corpData.caseId);
            let paper22List = JSON.parse(JSON.stringify(wkPaper.filter(item => item.caseId === this.corpData.caseId && item.paperType === '22') || []))
            if (paper22List.length === 0) {
              // 弹窗
              this.checkCorpInfoVisible = true
              this.templatePaperData = data
            } else {
              this.gotoWritFill(data)
            }
          } else {
            this.gotoWritFill(data)
          }
        } else if (data.isCurPaper && data.isCurPaper.paperId) {
          // 判断当指定进入某个文书时，当前用于接收文书后直接进入展示文书内容
          this.paperData = data.isCurPaper
          this.gotoWritFill(data)
        } else {
          // 如果为编辑则调取wkPaper文书表，如果为多条则弹窗选择文书，选择后的文书id传入组件中以拉取历史数据做为回显
          let wkPaper = await this.getPaperDatabase(this.corpData.caseId)
          let checkPaper = JSON.parse(JSON.stringify(wkPaper.filter(item => item.caseId === this.corpData.caseId && item.paperType === data.docData.docTypeNo && item.delFlag !== '1') || []))
          // console.log('checkPaper', checkPaper)
          // await wkPaper.delete(checkPaper[0].id) // 删除文书
          if (checkPaper.length === 0) {
            // 如果未查询到相关数据，则进入文书编辑页面，进行初始化
            // 如果是检查方案则弹窗确认返回煤矿信息, 且监察时才需要回传
            if (this.$store.state.onLine && data.docData.docTypeNo === '22' && this.corpData.constructType === '11' 
              && this.caseData.caseType === '0' && this.$store.state.user.userType !== 'supervision') {
              // 弹窗
              this.checkCorpInfoVisible = true
              this.templatePaperData = data
            } else {
              this.gotoWritFill(data)
            }
          } else if (checkPaper.length === 1) {
            // 如果有一条数据，则赋值paperId进入页面, 回显
            this.paperData = checkPaper[0]
            this.gotoWritFill(data)
          } else {
            // 如果查询的文书大于1个，则弹窗选择
            checkPaper.sort(sortbyAsc('createDate'))
            this.paperList = checkPaper
            this.templatePaperData = data
            this.selectPaperVisible = true
          }
        }
      } else if (page === 'empty') {
        // 进入空页面时，清空已选择的煤矿数据
        this.corpData = {}
        this.showPage[page] = true
      } else if (page === 'writFlow') {
        // 展示当前case流程模板showDocTemplate
        if (data) {
          this.caseData = data
        }
        this.showDocTemplet()
        // 在线时判断当前case检查活动是否属于登录用户，如果不是则为拉取数据，对比拉取数据内容
        console.log('personId', this.caseData.personId)
        console.log('userId', this.$store.state.user.userId)
        if (this.$store.state.onLine && this.caseData.personId && this.caseData.personId !== this.$store.state.user.userId) {
          this.comparePullCase()
        }
        this.showPage[page] = true
      }
    },
    gotoWritFill (data) {
      this.showPage.writFill = true
      this.showTemp = data.page
      this.docData = data.docData
      this.isCreated = data.isCreated
    },
    async showDocTemplet() {
      //读取当前点击的计划或检查活动的数据
      let corpBase = await this.getDatabase("baseInfo");
      let wkPaper = await this.getPaperDatabase(this.caseData.caseId);
      //查询符合条件的记录
      let corp = corpBase.find((item) => {
        return item.corpId === this.caseData.corpId;
      });
      // 如果本地库如果没有此数据则提示
      if (corp) {
        this.corpData = {
          corpName: corp.corpName,
          corpTypeName: corp.corpTypeName,
          corpCountryName: corp.provinceName + " " + corp.cityName + " " + corp.countryName,
          address: corp.address,
          legalName: corp.legalName,
          tel: corp.tel,
          corpId: corp.corpId,
          planId: this.caseData.planId,
          caseId: this.caseData.caseId,
          caseType: this.caseData.caseType,
          constructType: corp.constructType
        }
        // 查询当前检查流程中已保存或归档的所有文书，即wkPaper中已有文书
        let checkLetList = JSON.parse(JSON.stringify(wkPaper.filter((item) => {
          return item.caseId === this.caseData.caseId && item.delFlag !== '1'
        }) || []))
        checkLetList.sort(sortbyAsc('updateDate'))
        let flowStatus = {}
        let paperCount = {}
        this.showJczfReport = false
        this.dangerStatus = {
          danger1: [],
          danger2: [],
          danger13: [],
          danger4: [],
          danger36: [],
          danger6: [],
          danger8: [],
        }
        this.changeDangerStatus = {
          danger1: [],
          danger2: [],
          danger13: [],
          danger4: [],
          danger36: [],
          danger6: [],
          danger8: [],
        }
        if (checkLetList.length > 0) {
          // 遍历所有保存的文书，设置paperType的文书文本为已保存或已归档
          checkLetList.map(item => {
            let status = ''
            if (item.delFlag === '0') {
              status = 'file'
            } else if (item.delFlag === '2') {
              status = 'save'
            }
            // 当文书为现场检查笔录1，现场处理决定书2，复查意见书13，立案决定书4，
            // 案件处理呈报书36，行政处罚告知书6，行政处罚决定书8时，累计所有隐患
            if (item.paperType === '1' || item.paperType === '2' || item.paperType === '13'
              || item.paperType === '4' || item.paperType === '36' || item.paperType === '6'
              || item.paperType === '8') {
              let paperContent = JSON.parse(item.paperContent)
              // 获取所有已选隐患信息
              if (paperContent.DangerTable && paperContent.DangerTable.selectedDangerList) {
                for (let i = 0; i < paperContent.DangerTable.selectedDangerList.length; i++) {
                  let dangerInfo = Object.assign({}, paperContent.DangerTable.selectedDangerList[i], {
                    selectedType: paperContent.selectedType
                  })
                  this.dangerStatus[`danger${item.paperType}`].push(dangerInfo)
                }
              }
              // 获取被关联修改的隐患信息
              if (paperContent.DangerTable && paperContent.DangerTable.tableData) {
                for (let i = 0; i < paperContent.DangerTable.tableData.length; i++) {
                  let dangerInfo = paperContent.DangerTable.tableData[i]
                  if (dangerInfo.verNo === '1') {
                    this.changeDangerStatus[`danger${item.paperType}`].push(dangerInfo)
                  }
                }
              }
            }
            flowStatus[`paper${item.paperType}`] = status
            paperCount[`count${item.paperType}`] = paperCount[`count${item.paperType}`] ? paperCount[`count${item.paperType}`] + 1 : 1
            // 判断是否需要展示监察执法报告环节
            if (item.paperType === '22') {
              let paperContent = JSON.parse(item.paperContent) 
              if (paperContent.cellIdx1 && paperContent.cellIdx1.includes('全系统各环节监察')) {
                this.showJczfReport = true
              }
            }
          })
          // 监察执法报告时，当有上传的文件时即为保存
          let jczfReport = await this.getDatabase('jczfReport') || []
          let fileList = JSON.parse(JSON.stringify(jczfReport.filter(item => item.caseId === this.caseData.caseId && item.delFlag !== '1') || []))
          if (fileList.length > 0) {
            flowStatus[`paper45`] = 'save'
          }
        }
        this.$set(this, 'flowStatus', flowStatus)
        this.$set(this, 'paperCount', paperCount)
      } else {
        this.$message.error('无此企业信息，请核实数据')
        this.changePage({page: 'empty'})
      }
    },
    async comparePullCase () {
      // 接口请求拉取检查活动当前全部文书，对比本地数据库中检查活动中所有文书
      // 首先判断检查活动是否已被删除，如果检查活动已被删除则提示
      let {userSessId, userId} = this.$store.state.user
      let hasCase = true
      await this.$http.get(`${this.$store.state.user.userType === 'supervision' ? '/sv' : ''}/local/jczf/getPageJczfByOfficeId?__sid=${userSessId}&userId=${this.caseData.personId}&flag=true`)
        .then(async (response) => {
          if (response.status === 200) {
            if (response.data.data) {
              let caseList = response.data.data.jczfCase
              for (let i = 0; i < caseList.length; i++) {
                if (caseList[i].caseId === this.caseData.caseId && caseList[i].delFlag === '1') {
                  hasCase = false
                  this.$alert(`当前检查活动已被制作人删除，请勿继续制作文书！`, '提示', {
                    confirmButtonText: '确定',
                    callback: action => {}
                  })
                }
              }
            }
          }
          }).catch(err => {
            console.log("获取拉取的文书信息失败：", err);
          })
      // 如果检查活动未被删除，则判断检查活动中的文书，除自己制作以外的所有文书，如果有被删除的则提示
      if (hasCase) {
        let localPaperList = await this.getPaperDatabase(this.corpData.caseId)
        await this.$http.get(`${this.$store.state.user.userType === 'supervision' ? '/sv' : ''}/local/jczf/getPageJczfByOfficeId?__sid=${userSessId}&userId=${this.caseData.personId}&flag=false&caseId=${this.caseData.caseId}&pageNo=0&pageSize=5000`)
        .then(async (response) => {
          if (response.status === 200) {
            if (response.data.data && response.data.data.paper) {
              let hasPaperChange = false
              for (let i = 0; i < response.data.data.paper.length; i++) {
                let responseItem = response.data.data.paper[i]
                if (responseItem.personId !== userId && responseItem.delFlag === '1') {
                  let curItem = localPaperList.find(localPaper => localPaper.paperId === responseItem.paperId)
                  if (curItem && curItem.delFlag !== '1') {
                    hasPaperChange = true
                  }
                }
                if (hasPaperChange) {
                  break
                }
              }
              if (hasPaperChange) {
                this.$alert(`当前检查活动中部分文书已被制作人删除，请重新拉取检查活动！`, '提示', {
                  confirmButtonText: '确定',
                  callback: action => {}
                })
              }
            }
          }}).catch(err => {
            console.log("获取检查活动的文书列表失败：", err);
          })
      }
    },
    closeSelectDialog () {
      // 关闭选择文书弹窗
      this.selectPaperVisible = false
    },
    confirmPaper (currentRow) {
      // 保存选择文书
      if (currentRow) {
        this.paperData = currentRow
        this.gotoWritFill(this.templatePaperData)
        this.selectPaperVisible = false
      } else {
        this.$message.error('请选择文书')
      }
    },
    closeCheckCorpInfo () {
      // 关闭确认返回煤矿信息弹窗
      this.checkCorpInfoVisible = false
    },
    confirmCheckCorpInfo () {
      // 确认返回煤矿信息弹窗
      this.checkCorpInfoVisible = false
      this.$nextTick(() => {
        // 使用nextTick以防止弹窗未关闭时切换至填报页面，报错
        this.gotoWritFill(this.templatePaperData)
      })
    }
  },
};
</script>

<style lang="scss" scoped>
.make-law-writ {
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  .make-law-writ-show {
    height: calc(100vh - 102px);
    width: calc(100vw - 20px);
    display: flex;
    margin: auto;
    .make-law-writ-show-select {
      width: 330px;
      background-color: #ffffff;
      border-radius: 10px;
      height: 100%;
    }
    .make-law-writ-show-detail {
      flex: 1;
      height: 100%;
      overflow: auto;
      .detail-main {
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        .detail-org-information {
          height: 180px;
          min-width: 1100px;
        }
        .detail-writ-flow {
          overflow: auto;
          // flex: 1;
          margin-top: 10px;
          min-width: 1100px;
        }
      }
    }
  }
  .make-law-writ-fill {
    width: 100%;
    overflow: hidden;
  }
}
</style>
