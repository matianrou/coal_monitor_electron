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
        <span>{{`${userType === 'supervision' ? '监管' : '监察'}归档至${caseData.groupName}`}}</span>
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
        <!-- 其他功能 -->
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
  </div>
</template>

<script>
import GoDB from '@/utils/godb.min.js'
export default {
  name: "OrgInformation",
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
        // 归档机构信息
        let affiliate = this.$store.state.selectedCaseOption.selGovUnit
        let affiliateOrg = await orgInfo.find(item => item.no === affiliate
          && (item.type === '3' || item.type === '4' || item.type === '11') 
          && item.delFlag !== "1")
        // 获取当前归档机构的省局名称
        let provinceGroupName = `${caseData.groupName}`
        if (affiliateOrg.grade === '3') {
          let provinceOrg = await orgInfo.find(item => item.no === affiliateOrg.parentId
            && (item.type === '3' || item.type === '4' || item.type === '11') 
            && item.delFlag !== "1")
          provinceGroupName = provinceOrg.name
        }
        await db.close()
        if (caseData) {
          let planDate = ''
          if (caseData.planBeginDate && caseData.planEndDate) {
            // 处理检查时间
            let beginList = caseData.planBeginDate.split(' ')[0].split('-')
            let endList = caseData.planEndDate.split(' ')[0].split('-')
            planDate = `${beginList[1]}月${beginList[2]}日-${endList[1]}月${endList[2]}日`
          }
          caseData = Object.assign({}, caseData, { planDate, provinceGroupName })
          this.caseData = caseData
          this.$store.commit('changeState', {
            key: 'curCase',
            val: caseData
          })
        }
      }
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
