<!-- tab: 文书管理 -->
<template>
  <div id="pageWork" class="writ-management">
    <div v-if="true" class="writ-management-show">
      <div class="writ-management-show-select">
        <!-- 选择检查活动 -->
        <case-list
          @show-doc="showDoc"
        ></case-list>
      </div>
      <div class="writ-management-show-detail">
      </div>
    </div>
    <div v-if="false" class="make-law-writ-fill">
      <!-- 文书 -->
    </div>
  </div>
</template>

<script>
import caseList from "@/views/make-law-writ/components/case-list";
export default {
  name: "WritManagement",
  components: {
    caseList
  },
  data() {
    return {
    };
  },
  created() {
  },
  methods: {
    showDoc () {
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