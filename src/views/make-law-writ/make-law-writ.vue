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
              :corp-data="corpData"
            ></org-information>
          </div>
          <div class="detail-writ-flow">
            <!-- 文书流程 -->
            <writ-flow
              :corp-data="corpData"
              :flow-status="flowStatus"
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
        @go-back="changePage">
      </component>
    </div>
    <writ-information
      :visible="visible.newCase"
      :corp-data="corpData"
      :select-plan-data="selectPlanData"
      @close="closeDialog"
    ></writ-information>
  </div>
</template>

<script>
import GoDB from '@/utils/godb.min.js'
import caseList from "@/components/case-list"; // 选择企业
import { writFlow } from '@/utils/writFlow' // 文书流程目录
import orgInformation from '@/components/org-information' // 企业信息
import writInformation from '@/components/writ-information' // 创建活动弹窗
import { writList } from '@/utils/writList'

export default {
  name: "MakeLawWrit",
  components: {
    caseList,
    orgInformation,
    writInformation,
    ...writFlow,
    ...writList
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
      DBName: this.$store.state.DBName
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
    changePage ({page, data}) {
      this.showPage = {
        empty: false,
        writFlow: false,
        writFill: false
      }
      if (page === 'writFill') {
        // 进入填写页面时，data为展示模板page
        this.showTemp = data.page
        this.docData = data.docData
      } else if (page === 'empty') {
        // 进入空页面时，清空已选择的煤矿数据
        this.corpData = {}
      } else if (page === 'writFlow') {
        // 展示当前case流程模板showDocTemplate
        if (data) {
          this.caseData = data
        }
        this.showDocTemplet()
      }
      this.showPage[page] = true
    },
    async showDocTemplet() {
      //读取当前点击的计划或检查活动的数据
      const db = new GoDB(this.DBName);
      const corpBase = db.table("corpBase");
      const wkPaper = db.table("wkPaper");
      //查询符合条件的记录
      const corp = await corpBase.find((item) => {
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
        const checkLetList = await wkPaper.findAll((item) => {
          return item.caseId === this.caseData.caseId
        });
        this.flowStatus = {}
        if (checkLetList.length > 0) {
          // 遍历所有保存的文书，设置paperType的文书文本为已保存或已归档
          checkLetList.map(item => {
            let status = ''
            if (item.delFlag === '0') {
              status = 'file'
            } else if (item.delFlag === '2') {
              status = 'save'
            } else {
            }
            this.$set(this.flowStatus, `paper${item.paperType}`, status)
          })
        }
      } else {
        this.$message.error('无此企业信息，请核实数据')
        this.changePage({page: 'empty'})
      }
      await db.close();
    },
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
        // .detail-org-information {
          // height: 180px;
        // }
        .detail-writ-flow {
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
