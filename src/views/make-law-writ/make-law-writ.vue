<!-- tab: 执法工作台 -->
<template>
  <div id="pageWork" class="make-law-writ">
    <div v-show="!showPage.writFill" class="make-law-writ-show">
      <div class="make-law-writ-show-select">
        <!-- 选择企业 -->
        <org-select
          ref="orgSelect"
          :select-plan-data="selectPlanData"
          @change-page="changePage"
          @create-case="createCase"
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
              :flow-text="flowText"
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
      :visible="visible.createCase"
      :corp-data="corpData"
      :select-plan-data="selectPlanData"
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
  name: "MakeLawWrit",
  components: {
    orgSelect,
    writFlow,
    orgInformation,
    writInformation,
    let100: resolve => { require(["@/views/make-law-writ/components/writ-list/let100.vue"], function(let100) { resolve(let100);});},
    let101: resolve => { require(["@/views/make-law-writ/components/writ-list/let101.vue"], function(let101) { resolve(let101);});},
    let102: resolve => { require(["@/views/make-law-writ/components/writ-list/let102.vue"], function(let102) { resolve(let102);});},
    let103: resolve => { require(["@/views/make-law-writ/components/writ-list/let103.vue"], function(let103) { resolve(let103);});},
    let104: resolve => { require(["@/views/make-law-writ/components/writ-list/let104.vue"], function(let104) { resolve(let104);});},
    let105: resolve => { require(["@/views/make-law-writ/components/writ-list/let105.vue"], function(let105) { resolve(let105);});},
    let106: resolve => { require(["@/views/make-law-writ/components/writ-list/let106.vue"], function(let106) { resolve(let106);});},
    let107: resolve => { require(["@/views/make-law-writ/components/writ-list/let107.vue"], function(let107) { resolve(let107);});},
    let108: resolve => { require(["@/views/make-law-writ/components/writ-list/let108.vue"], function(let108) { resolve(let108);});},
    let109: resolve => { require(["@/views/make-law-writ/components/writ-list/let109.vue"], function(let109) { resolve(let109);});},
    let110: resolve => { require(["@/views/make-law-writ/components/writ-list/let110.vue"], function(let110) { resolve(let110);});},
    let111: resolve => { require(["@/views/make-law-writ/components/writ-list/let111.vue"], function(let111) { resolve(let111);});},
    let112: resolve => { require(["@/views/make-law-writ/components/writ-list/let112.vue"], function(let112) { resolve(let112);});},
    let113: resolve => { require(["@/views/make-law-writ/components/writ-list/let113.vue"], function(let113) { resolve(let113);});},
    let200: resolve => { require(["@/views/make-law-writ/components/writ-list/let200.vue"], function(let200) { resolve(let200);});},
    let201: resolve => { require(["@/views/make-law-writ/components/writ-list/let201.vue"], function(let201) { resolve(let201);});},
    let202: resolve => { require(["@/views/make-law-writ/components/writ-list/let202.vue"], function(let202) { resolve(let202);});},
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
        createCase: false, // 创建检查活动弹窗
      },
      showTemp: null, // 展示的文书详情模板号，比如let100
      docData: {}, // 选择显示的文书基本信息编号及名称
      caseData: {}, // 选择的活动信息
      flowText: {
        let100: ''
      }
    }
  },
  computed: {
  },
  created() {
    // 初始化选择企业组件
  },
  methods: {
    createCase (data) {
      // 创建已有计划的煤矿的检查活动
      this.corpData = data.corpData
      this.selectPlanData = data.selectPlanData
      // 弹窗创建计划
      this.visible.createCase = true
    },
    async closeDialog (params) {
      if (params.refresh) {
        await this.$refs.orgSelect.getData()
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
      //读取计划数据
      const db = new GoDB("CoalDB");
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
        //查询当前计划是否已做检查方案
        const checkLet100 = await wkPaper.findAll((item) => {
          return item.caseId === this.caseData.caseId && item.name === '检查方案';
        });
        // 检查方案文本设置
        if (checkLet100.length > 0) {
          let txt = checkLet100[0].delFlag === '0' ? '（已归档）' : (checkLet100[0].delFlag === '2' ? '（已保存）' : '')
          this.$set(this.flowText, 'let100', txt)
        } else {
          this.flowText.let100 = ''
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
  padding: 10px 7px;
  flex-direction: column;
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
    overflow: hidden;
  }
}
</style>
