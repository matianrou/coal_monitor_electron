<!-- 企业信息 组件 -->
<template>
  <div class="enterprisedata">
    <div class="enterprisedata-title">
      <img
        src="@/components/assets/image/letTitle.png"
        style="width:32px;"
      />企业信息
      <div v-if="caseData.planDate" class="plan-date">
        <i class="el-icon-time"></i>
        <span>{{caseData.planDate}}</span>
      </div>
      <div v-if="caseData.groupName" class="group-name">
        <i class="el-icon-s-flag"></i>
        <span>{{`${userType === 'supervision' ? '监管' : '监察'}归档至${caseData.affiliateName}`}}</span>
      </div>
      <div class="enterprisedata-title-function">
        <!-- 监管没有企业画像 -->
        <div 
          v-if="$store.state.user.userType !== 'supervision' && corpData && corpData.corpId"
          class="enterprisedata-title-function-content" 
          style="margin-right: 7px;"
          @click="gotoCompanyPaintings">
          <i class="el-icon-office-building"></i>
          <span>企业画像</span>
        </div>
        <div 
          class="enterprisedata-title-function-content"
          @click="showCompanyInfoDetail">
          <i class="el-icon-s-order"></i>
          <span>更多详情</span>
        </div>
      </div>
    </div>
    <div class="enterprisedata-content-main">
      <div class="enterprisedata-content-left">
        <!-- 企业信息 -->
        <div class="enterprisedata-content">
          <span>企业名称：</span>
          <span>{{corpData.corpName}}</span>
        </div>
        <div class="enterprisedata-content">
          <span>所在区域：</span>
          <span>{{corpData.corpCountryName}}</span>
        </div>
        <div class="enterprisedata-content">
          <span>负&nbsp;&nbsp;责&nbsp;&nbsp;人：</span>
          <span>{{corpData.legalName}}</span>
        </div>
      </div>
      <div class="enterprisedata-content-left">
        <!-- 企业信息 -->
        <div class="enterprisedata-content">
          <span>企业类型：</span>
          <span>{{corpData.corpTypeName}}</span>
        </div>
        <div class="enterprisedata-content">
          <span>经营地址：</span>
          <span>{{corpData.address}}</span>
        </div>
        <div class="enterprisedata-content">
          <span>联系电话：</span>
          <span>{{corpData.tel}}</span>
        </div>
      </div>
    </div>
    <org-info-detail
      v-if="visible.orgInfoDetail"
      :visible="visible.orgInfoDetail"
      :corp-data="corpData"
      @close="closeDialog"
    ></org-info-detail>
  </div>
</template>

<script>
import GoDB from '@/utils/godb.min.js'
import { getOrgTreeList } from '@/utils/setInitPaperData'
import { getAffiliateOrgName } from '@/utils/setInitPaperData'
import { electronRequest } from '@/utils/electronRequest'
import orgInfoDetail from '@/components/org-info-detail'
export default {
  name: "OrgInformation",
  components: {
    orgInfoDetail
  },
  props: {
    corpData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      DBName: this.$store.state.DBName,
      userType: this.$store.state.user.userType,
      caseData: {},
      visible: {
        orgInfoDetail: false,
      }
    };
  },
  watch: {
    async corpData(val) {
      await this.init()
    }
  },
  async created() {
    await this.init()
  },
  methods: {
    async init () {
      // 获取检查活动相关信息
      if (this.corpData.caseId) {
        let db = new GoDB(this.DBName)
        let wkCase = db.table('wkCase')
        let caseData = await wkCase.find(item => item.caseId === this.corpData.caseId)
        let orgInfo = db.table('orgInfo')
        let org = await getOrgTreeList()
        let allOrgList = org.orgList
        // 获取落款省级局信息
        let selGovUnit = this.$store.state.selectedCaseOption.selGovUnit
        let selGovUnitOrg = {}
        if (this.$store.state.user.userType === 'supervision') {
          // 监管不过滤type
          selGovUnitOrg = await orgInfo.find(item => item.no === selGovUnit
            && item.delFlag !== "1")
        } else {
          // 监察过滤type
          selGovUnitOrg = await orgInfo.find(item => item.no === selGovUnit
            // && (item.type === '3' || item.type === '4' || item.type === '11') 
            && item.delFlag !== "1")
        }
        // 获取当前归档机构的省局名称
        let provinceGroupName = `${selGovUnitOrg.name}`
        if (this.$store.state.user.userType === 'supervision') { 
          // 监管为四级机构， 不过滤type类型
          if (selGovUnitOrg.grade === '3') {
            // 市级时
            let provinceOrg = await orgInfo.find(item => item.no === selGovUnitOrg.parentId
              && item.delFlag !== "1")
            provinceGroupName = provinceOrg.name
          } else if (selGovUnitOrg.grade === '4') {
            // 县级时，现查询市级，再查询省级
            let upOrg = await orgInfo.find(item => item.no === selGovUnitOrg.parentId
              && item.delFlag !== "1")
            let provinceOrg = await orgInfo.find(item => item.no === upOrg.parentId
              && item.delFlag !== "1")
            provinceGroupName = provinceOrg.name
          }
        } else {
          // 监察为三级机构，过滤type类型
          if (selGovUnitOrg.grade === '3') {
            let provinceOrg = await orgInfo.find(item => item.no === selGovUnitOrg.parentId
              // && (item.type === '3' || item.type === '4' || item.type === '11') 
              && item.delFlag !== "1")
            provinceGroupName = provinceOrg.name
          }
        }
        // 获取归档机构信息
        let affiliateOrg = {}
        if (this.$store.state.user.userType === 'supervision') {
          // 监管不过滤type
          affiliateOrg = await orgInfo.find(item => item.no === caseData.affiliate
            && item.delFlag !== "1")
        } else {
          // 监察过滤type
          affiliateOrg = await orgInfo.find(item => item.no === caseData.affiliate
            // && (item.type === '3' || item.type === '4' || item.type === '11') 
            && item.delFlag !== "1")
        }
        // 执法活动分类为4异地执法时：获取及省局名称，其他则直接展示归档机构名称
        let affiliateName = caseData.caseClassify === '4' ? getAffiliateOrgName(affiliateOrg, allOrgList) : affiliateOrg.name
        await db.close()
        if (caseData) {
          let planDate = ''
          if (caseData.planBeginDate && caseData.planEndDate) {
            // 处理检查时间
            let beginList = caseData.planBeginDate.split(' ')[0].split('-')
            let endList = caseData.planEndDate.split(' ')[0].split('-')
            planDate = `${beginList[1]}月${beginList[2]}日-${endList[1]}月${endList[2]}日`
          }
          caseData = Object.assign({}, caseData, { planDate, provinceGroupName, affiliateName })
          this.caseData = caseData
          this.$store.commit('changeState', {
            key: 'curCase',
            val: caseData
          })
        }
      }
    },
    gotoCompanyPaintings () {
      // 打开企业画像
      let url = `https://zhxx.chinamine-safety.gov.cn/analystrunner/project/82a6a3ad-dd4f-4480-8eed-02b2f0124d48/#/b1897637-9b62-46e3-99bf-d83ec31df322?cropid=${this.corpData.corpId}`
      electronRequest({msgName: 'open-url', message: url});
    },
    async showCompanyInfoDetail () {
      // 弹窗展示企业全部信息
      console.log('corpData', this.corpData)
      this.visible.orgInfoDetail = true
    },
    closeDialog ({page}) {
      this.visible[page] = false
    }
  },
};
</script>

<style lang="scss" scoped>
.enterprisedata {
  width: 100%;
  height: 180px;
  border-collapse: collapse;
  background: #fff;
  color: #000;
  border-radius: 10px;
  margin: 0px;
  padding: 0px;
  .enterprisedata-title {
    height: 35px;
    line-height: 35px;
    color: #fff;
    font-size: 18px;
    margin: 0px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background: rgba(#4f83e9, 1);
    display: flex;
    padding: 0 20px;
    align-items: center;
    .plan-date {
      margin-left: 20px;
      padding: 0 10px;
      background: rgba(#DDFAE6, 0.9);
      color: #303133;
      height: 25px;
      font-size: 14px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      span {
        display: inline-block;
        margin-left: 5px;
      }
    }
    .group-name {
      margin-left: 20px;
      padding: 0 10px;
      background: rgba(#FAF8DD, 0.9);
      color: #303133;
      height: 25px;
      font-size: 14px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      span {
        display: inline-block;
        margin-left: 5px;
      }
    }
    .enterprisedata-title-function {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      cursor: pointer;
      .enterprisedata-title-function-content {
        height: 23px;
        border: 1px solid rgba(#ffffe0, 0.9);
        border-radius: 5px;
        background: rgba(#ffffe0, 0.9);
        display: flex;
        align-items: center;
        padding: 0 7px;
        i {
          color: #606266;
        }
        span {
          color: #606266;
          font-size: 16px;
        }
        &:hover {
          i {
            color: #409EFF;
          }
          span {
            color: #409EFF;
          }
        }
      }
    }
  }
  span {
    color: #303133;
  }
  .enterprisedata-content-main { 
    display: flex;
    flex-direction: row;
    .enterprisedata-content-left {
      flex: 1;
      display: flex;
      flex-direction: column;
      .enterprisedata-content {
        height: 45px;
        line-height: 45px;
        display: flex;
        border-bottom: 1px solid #ccc;
        text-indent: 30px;
        font-size: 18px;
      }
    }
    .enterprisedata-content-right {
      flex: 1;
    }
  }
}
</style>
