<template>
  <div>
    <table
      style="width:100%;height:80px;background:#4F83E9 url('static/image/top_bg.png');background-position:center center;background-repeat:no-repeat; border-spacing: 0px;"
      id="navTable"
    >
      <tr>
        <td style="width:420px;text-align:center;-webkit-app-region:drag;-webkit-user-select:none;">
          <img src="@/components/assets/image/coal-logo.png" />
        </td>
        <td style="width:30px;-webkit-app-region:drag;-webkit-user-select:none;">&nbsp;</td>
        <td
          class="navTd"
          :style="activeTab === 'SourceDownload' ? 'background: #224f7d;' : ''"
          @click="changeTab('SourceDownload')">
          <!-- <a class="topNav title" href="javascript:navDownload()">资源下载</a> -->
          <a class="topNav title">资源下载</a>
        </td>
        <td
          class="navTd"
          :style="activeTab === 'MakeLawWrit' ? 'background: #224f7d;' : ''"
          @click="changeTab('MakeLawWrit')">
          <!-- <a class="topNav title" href="javascript:navWork()">执法工作台</a> -->
          <a class="topNav title">执法工作台</a>
        </td>
        <!--<td style="width:100px;text-align:center;"><a class="topNav" href="javascript:navSurvey()">调查互动</a></td>-->
        <td
          class="navTd"
          :style="activeTab === 'WritManagement' ? 'background: #224f7d;' : ''"
          @click="changeTab('WritManagement')">
          <!-- <a class="topNav title" href="javascript:navDoc()">文书管理</a> -->
          <a class="topNav title">文书管理</a>
        </td>
        <td style="width:auto;-webkit-app-region:drag;-webkit-user-select:none;"></td>
        <td style="width:150px;text-align:right;-webkit-app-region:no-drag;">
          <img src="@/components/assets/image/min.png" id="minbt" @click="electronRequest('minWindow')" />&nbsp;
          <img src="@/components/assets/image/maxed.png" id="maxbt" @click="electronRequest('maxWindow')" />&nbsp;
          <img src="@/components/assets/image/close.png" id="closebt" @click="electronRequest('closeWindow')" />&nbsp;&nbsp;
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import electronRequest from '@/utils/electronRequest'
export default {
  name: "MainTop",
  data() {
    return {
      activeTab: null,
      electronRequest: electronRequest
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
    changeTab (tab) {
      if (this.activeTab !== tab) {
        this.activeTab = tab
        this.$emit('change-tab', tab)
        this.$store.commit('changeState', {
          key: 'activeTab',
          val: tab
        })
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.navTd {
  width:100px;
  text-align:center;
  &:hover {
    background: rgba(#224f7d, 0.6);
  }
}
.topNav {
  color: #f7f7f7;
  text-decoration: none;
  font-size: 18px;
  cursor: pointer;
}
</style>