<template>
  <div>
    <div class="main-top-main">
      <div style="margin-left: 10px;">
        <!-- 系统名称图 -->
        <img src="@/components/assets/image/coal-logo.png" />
      </div>
      <div class="main-top-nav">
        <!-- 页签 -->
        <div
          class="navTd"
          :style="activeTab === 'SourceDownload' ? 'background: #224f7d;' : ''"
          @click="changeTab('SourceDownload')">
          <span>资源下载</span>
        </div>
        <div
          class="navTd"
          :style="activeTab === 'MakeLawWrit' ? 'background: #224f7d;' : ''"
          @click="changeTab('MakeLawWrit')">
          <span>执法工作台</span>
        </div>
        <div
          class="navTd"
          :style="activeTab === 'WritManagement' ? 'background: #224f7d;' : ''"
          @click="changeTab('WritManagement')">
          <span>文书管理</span>
        </div>
      </div>
      <div class="main-top-operation">
        <!-- 操作 -->
        <!-- <el-button type="text" @click="logoutHandle">退出</el-button> -->
        <img src="@/components/assets/image/min.png" id="minbt" @click="handleWindow('minWindow')" />&nbsp;
        <img src="@/components/assets/image/maxed.png" id="maxbt" @click="handleWindow('maxWindow')" />&nbsp;
        <img src="@/components/assets/image/close.png" id="closebt" @click="handleWindow('closeWindow')" />&nbsp;&nbsp;
      </div>
    </div>
  </div>
</template>

<script>
import electronRequest from '@/utils/electronRequest'
import { clearLoginInfo } from '@/utils'
export default {
  name: "MainTop",
  data() {
    return {
      activeTab: null,
      electronRequest: electronRequest,
      maxSrc: false, // 最大化和标准窗口中间切换图标
    };
  },
  created() {
    this.getTab();
  },
  methods: {
    getTab () {
      // 初始化页签
      // 判断数据仓库存储的activeTab，如果有值则跳转，如果无默认为执法工作台
      if (this.$store.state.activeTab) {
        this.activeTab = this.$store.state.activeTab
        this.changeTab(this.$store.state.activeTab)
      } else {
        this.changeTab('MakeLawWrit')
      }
    },
    changeTab (tab, go) {
      if (this.activeTab !== tab) {
        if (this.activeTab === 'SourceDownload') {
          if (go) {
            // 从source-download的路由跳出守卫回传值，继续进行路由跳转操作
            this.activeTab = tab
            this.$store.commit('changeState', {
              key: 'activeTab',
              val: tab
            })
          } else {
            // 当从资源下载中跳出时，判断是否正在下载，如果正在下载则提示
            this.$emit('change-tab', tab)
          }
        } else {
          this.$emit('change-tab', tab)
          this.activeTab = tab
          this.$store.commit('changeState', {
            key: 'activeTab',
            val: tab
          })
        }
      }
    },
    handleWindow (message) {
      if (message === 'maxWindow') {
        this.maxSrc = !this.maxSrc
      }
      electronRequest(message)
    },
    logoutHandle () {
      clearLoginInfo()
      this.$router.replace({ name: 'Login' })
    }
  },
};
</script>

<style lang="scss" scoped>
.main-top-main {
  width: 100%;
  height: 80px;
  background: url('~@/assets/img/top_bg.png');
  background-position: center center;
  border-spacing: 0px;
  // padding: 0 20px;
  display: flex;
  .main-top-nav {
    margin-left: 40px;
    display: flex;
    .navTd {
      width: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 18px;
      font-weight: 500;
      &:hover {
        background: rgba(#224f7d, 0.6);
      }
    }
  }
  .main-top-operation {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}

.topNav {
  color: #f7f7f7;
  text-decoration: none;
  font-size: 18px;
  cursor: pointer;
}
</style>