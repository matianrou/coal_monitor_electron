<!-- tab: 执法工作台 -->
<template>
  <div id="pageWork" class="make-law-writ">
    <div v-if="!showPage.writFill" class="make-law-writ-show">
      <div class="make-law-writ-show-select">
        <!-- 选择企业 -->
        <org-select
          ref="orgSelect"
          @show-doc="showDoc"
          @create-plan="createPlan"
        ></org-select>
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
        @go-back="changePage('writFlow')">
      </component>
    </div>
    <writ-information
      :visible="visible.createPlan"
      :corp-data="corpData"
      @close="closeDialog"
    ></writ-information>
  </div>
</template>

<script>
import GoDB from '@/utils/godb.min.js'
import orgSelect from "@/views/make-law-writ/components/org-select"; // 选择企业
import writFlow from "@/views/make-law-writ/components/writ-flow"; // 文书流程目录
import orgInformation from '@/views/make-law-writ/components/org-information' // 企业信息
import writInformation from '@/views/make-law-writ/components/writ-information' // 创建活动弹窗

export default {
  name: "WritFlow",
  components: {
    orgSelect,
    writFlow,
    orgInformation,
    writInformation,
    let100: resolve => { require(["@/views/make-law-writ/components/writ-list/let100.vue"], function(let100) { resolve(let100);});},
  },
  data() {
    return {
      showPage: {
        empty: true,
        writFlow: false,
        writFill: false
      },
      corpData: {},
      visible: {
        createPlan: false, // 创建检查活动弹窗
      },
      showTemp: null
    }
  },
  computed: {
  },
  created() {
  },
  methods: {
    showDoc(data) {
      // 展示流程模板showDocTemplate
      this.changePage({page: 'writFlow'})
      this.showDocTemplet(data)
    },
    changePage ({page, temp}) {
      this.showPage = {
        empty: false,
        writFlow: false,
        writFill: false
      }
      if (page === 'writFill') {
        this.showTemp = temp
      }
      this.showPage[page] = true
    },
    createPlan (corp) {
      // 创建检查活动
      const corpName = corp.corpName;
      const corpId = corp.corpId;
      const checkId = corp.dbplanId;
		  this.$setStorage('dbcheckId', checkId);
      // 弹窗创建计划
      this.visible.createPlan = true
    },
    async closeDialog (params) {
      if (params.refresh) {
        await this.$refs.orgSelect.getData()
        await this.$refs.orgSelect.showDocHome(this.corpData.planId, this.corpData.corpId)
      }
      this.visible[params.name] = false
    },
    async showDocTemplet(data) {
      //读取计划数据
      const db = new GoDB("CoalDB");
      const corpBase = db.table("corpBase");
      const wkPaper = db.table("wkPaper");
      //查询符合条件的记录
      const corp = await corpBase.find((item) => {
        return item.corpId == data.corpId;
      });
      this.corpData = {
        corpName: corp.corpName,
        corpTypeName: corp.corpTypeName,
        corpCountryName: corp.provinceName + " " + corp.cityName + " " + corp.countryName,
        address: corp.address,
        legalName: corp.legalName,
        tel: corp.tel,
        corpId: corp.corpId,
        planId: data.planId,
        caseId: data.caseId,
        caseType: data.caseType,
      }
      //查询当前计划是否已做检查方案
      const checkPaper = await wkPaper.findAll((item) => {
        return (item.caseId = caseId);
      });
      // if (checkPaper[0]) {
      //   $(".checkPlan").html("检查方案（已保存）");
      // }
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
  padding: 0 7px;
  .make-law-writ-show {
    height: calc(100vh - 102px);
    width: 100%;
    display: flex;
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
        .detail-org-information {
          // height: 180px;
        }
        .detail-writ-flow {
          // flex: 1;
          margin-top: 10px;
        }
      }
    }
  }
  .make-law-writ-fill {
    width: 100%;
  }
}
</style>
