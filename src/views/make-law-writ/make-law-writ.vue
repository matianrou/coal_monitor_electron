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
              v-if="corpData && corpData.corpId && corpData.caseId"
              :corp-data="corpData"
            ></org-information>
          </div>
          <div class="detail-writ-flow">
            <!-- 文书流程 -->
            <writ-flow
              :corp-data="corpData"
              :flow-status="flowStatus"
              :show-jczf-report="showJczfReport"
              :danger-status="dangerStatus"
              @change-page="changePage"
            ></writ-flow>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showPage.writFill" class="make-law-writ-fill">
      <!-- 填写文书 -->
      <component
        :is="showTemp"
        :corp-data="corpData"
        :doc-data="docData"
        :paper-data="paperData"
        @go-back="changePage">
      </component>
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
import GoDB from '@/utils/godb.min.js'
import caseList from "@/components/case-list"; // 选择企业
import { writFlow } from '@/utils/writFlow' // 文书流程目录
import orgInformation from '@/components/org-information' // 企业信息
import writInformation from '@/components/writ-information' // 创建活动弹窗
import { writList } from '@/utils/writList'
import selectPaper from '@/components/select-paper'
import { sortbyAsc } from "@/utils/index";
import checkCorpInfo from '@/components/check-corp-info'

export default {
  name: "MakeLawWrit",
  components: {
    caseList,
    orgInformation,
    writInformation,
    ...writFlow,
    ...writList,
    selectPaper,
    checkCorpInfo
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
      dangerStatus: {}, // 各文书隐患情况
      DBName: this.$store.state.DBName,
      isCreated: false, // 是否新增文书
      paperData: {}, // 多个文书时选择的文书数据
      selectPaperVisible: false, // 选择文书弹窗
      templatePaperData: {},  // 当选择文书时，临时保存的文书数据，用来选择后指定文书跳转及展示
      paperList: [], // 选择的文书列表
      showJczfReport: false, // 是否展示监察执法报告环节
      checkCorpInfoVisible: false, // 回传煤矿信息
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
          if (data.docData.docTypeNo === '22') {
            let db = new GoDB(this.$store.state.DBName);
            let wkPaper = db.table("wkPaper");
            let paper22List = await wkPaper.findAll(item => item.caseId === this.corpData.caseId && item.paperType === '22')
            await db.close()
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
          let db = new GoDB(this.$store.state.DBName);
          let wkPaper = db.table("wkPaper");
          let checkPaper = await wkPaper.findAll(item => item.caseId === this.corpData.caseId && item.paperType === data.docData.docTypeNo && item.delFlag !== '1');
          // console.log('checkPaper', checkPaper)
          // await wkPaper.delete(checkPaper[0].id) // 删除文书
          if (checkPaper.length === 0) {
            // 如果未查询到相关数据，则进入文书编辑页面，进行初始化
            // 如果是检查方案则弹窗确认返回煤矿信息
            if (data.docData.docTypeNo === '22') {
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
      let db = new GoDB(this.DBName);
      let corpBase = db.table("corpBase");
      let wkPaper = db.table("wkPaper");
      //查询符合条件的记录
      let corp = await corpBase.find((item) => {
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
        }
        // 查询当前检查流程中已保存或归档的所有文书，即wkPaper中已有文书
        let checkLetList = await wkPaper.findAll((item) => {
          return item.caseId === this.caseData.caseId && item.delFlag !== '1'
        });
        checkLetList.sort(sortbyAsc('updateDate'))
        this.flowStatus = {}
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
              if (paperContent.DangerTable && paperContent.DangerTable.selectedDangerList) {
                for (let i = 0; i < paperContent.DangerTable.selectedDangerList.length; i++) {
                  let dangerInfo = Object.assign({}, paperContent.DangerTable.selectedDangerList[i], {
                    selectedType: paperContent.selectedType
                  })
                  this.dangerStatus[`danger${item.paperType}`].push(dangerInfo)
                }
              }
            }
            this.$set(this.flowStatus, `paper${item.paperType}`, status)
            // 判断是否需要展示监察执法报告环节
            if (item.paperType === '22') {
              let paperContent = JSON.parse(item.paperContent) 
              if (paperContent.cellIdx1 && paperContent.cellIdx1.includes('全系统各环节监察')) {
                this.showJczfReport = true
              }
            }
          })
          // 监察执法报告时，当有上传的文件时即为保存
          let jczfReport = db.table('jczfReport');
          let fileList = await jczfReport.findAll(item => item.caseId === this.caseData.caseId && item.delFlag !== '1')
          if (fileList.length > 0) {
            this.$set(this.flowStatus, `paper45`, 'save')
          }
        }
      } else {
        this.$message.error('无此企业信息，请核实数据')
        this.changePage({page: 'empty'})
      }
      await db.close();
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
      overflow-y: auto;
      overflow-x: hidden;
      .detail-main {
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        min-width: 800px;
        // overflow: auto;
        // .detail-org-information {
          // height: 180px;
        // }
        .detail-writ-flow {
          overflow: auto;
          // flex: 1;
          margin-top: 10px;
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
