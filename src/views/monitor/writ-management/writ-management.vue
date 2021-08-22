<!-- tab: 文书管理 -->
<template>
  <div id="pageWork" class="writ-management">
    <div v-if="true" class="writ-management-show">
      <div class="writ-management-show-select">
        <!-- 选择检查活动 -->
        <case-list
          ref="caseList"
          use-page="WritManagement"
          :select-plan-data="selectPlanData"
          @change-page="changePage"
        ></case-list>
      </div>
      <div class="detail-main">
        <div class="detail-org-information">
          <!-- 企业信息 -->
          <!-- <org-information
            :corp-data="corpData"
          ></org-information> -->
        </div>
        <div class="detail-writ-flow">
          <!-- 文书列表 -->
        </div>
      </div>
    </div>
    <div v-if="false" class="make-law-writ-fill">
      <!-- 文书 -->
    </div>
  </div>
</template>

<script>
import caseList from "@/components/case-list";
import orgInformation from '@/components/org-information' // 企业信息
export default {
  name: "MonitorWritManagement",
  components: {
    caseList,
    orgInformation
  },
  data() {
    return {
      corpData: {}, // 选择的企业信息
      selectPlanData: {}, // 选择的计划日期和归档机构
    };
  },
  created() {
  },
  methods: {
    changePage () {
      // 展示文书管理 showDocManage
    }
  },
};
</script>

<style lang="scss" scoped>
.writ-management {
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  padding: 0 7px;
  .writ-management-show {
    height: calc(100vh - 102px);
    width: 100%;
    display: flex;
    .writ-management-show-select {
      width: 330px;
      background-color: #ffffff;
      border-radius: 10px;
      height: 100%;
    }
    .writ-management-show-detail {
      flex: 1;
      height: 100%;
      overflow-y:auto;
      overflow-x:hidden;
    }
  }
}
</style>