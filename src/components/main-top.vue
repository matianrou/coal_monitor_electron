<template>
  <div>
    <div class="main-top-main">
      <div style="margin-left: 10px;">
        <!-- 系统名称图 -->
        <img v-if="userType === 'supervision'" src="@/components/assets/image/supervision-logo.png" draggable="false" />
        <img v-else src="@/components/assets/image/coal-logo.png" draggable="false" />
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
        <div
          v-if="userType !== 'supervision'"
          class="navTd"
          :style="activeTab === 'opinionSuggestion' ? 'background: #224f7d;' : ''"
          @click="changeTab('opinionSuggestion')">
          <span>意见建议书</span>
        </div>
        <div
          v-if="userType !== 'supervision'"
          class="navTd"
          :style="activeTab === 'sendPaper' ? 'background: #224f7d;' : ''"
          @click="changeTab('sendPaper')">
          <span>调查互动</span>
        </div>
        <div class="main-top-operation" style="margin-left: 20px;">
          <i class="el-icon-s-promotion btn-icon" title="隐患发送" @click="sendDanger"></i>
          <!-- 消息提醒 -->
          <el-dropdown :hide-on-click="false" @command="handleCommand">
            <span class="el-dropdown-link">
              <img src="@/components/assets/image/message.png" class="btn-icon img-btn" title="消息通知"/>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="checkList">您有{{notice.checkList.length || '0'}}条检查项任务待接收</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <div class="main-top-operation-right">
        <div style="flex: 1;display: flex; align-items: flex-end;">
          <!-- 操作 -->
          <img src="@/components/assets/image/minus.png" class="btn-icon" id="minbt"  title="最小化" @click="handleWindow('window-min')" />&nbsp;
          <img src="@/components/assets/image/maximize.png" v-show="maxSrc" class="btn-icon" title="最大化" id="maxbt" @click="handleWindow('window-max')" />&nbsp;
          <img src="@/components/assets/image/minimize.png" v-show="!maxSrc" class="btn-icon" id="minbt" title="还原" @click="handleWindow('window-max')" />&nbsp;
          <img src="@/components/assets/image/close.png" id="closebt" class="btn-icon" title="关闭" @click="handleWindow('window-quit')" />
        </div>
        <div style="display: flex; flex: 1; align-items: center;">
          <!-- 个人和更多 -->
          <el-dropdown :hide-on-click="false" @command="handleCommand" style="min-width: 120px; cursor: pointer;">
            <span class="el-dropdown-link">
              <span style="color: #fff;">欢迎您：{{$store.state.user.userName}}</span><i class="el-icon-caret-bottom" style="color: #f19716;"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="clearLogin">注销登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
    <send-danger
      v-if="visible.sendDanger"
      :visible="visible.sendDanger"
      @close="visible.sendDanger = false"
    ></send-danger>
    <check-list-show
      :visible="visible.checkList"
      :check-list="notice.checkList"
      @close="visible.checkList = false"
    ></check-list-show>
  </div>
</template>

<script>
import { electronRequest } from '@/utils/electronRequest'
import { clearLoginInfo } from '@/utils'
import sendDanger from '@/components/send-danger'
import checkListShow from '@/components/notice-show/check-list-show'
export default {
  name: "MainTop",
  components: {
    sendDanger,
    checkListShow
  },
  data() {
    return {
      activeTab: null,
      electronRequest: electronRequest,
      maxSrc: false, // 最大化和标准窗口中间切换图标
      visible: {
        sendDanger: false,
        checkList: false
      },
      userType: this.$store.state.user.userType,
      notice: {
        checkList: []
      }
    };
  },
  created() {
    this.getTab();
    this.getNotice()
  },
  methods: {
    getTab () {
      // 初始化页签
      // 判断数据仓库存储的activeTab，如果有值则跳转，如果无默认为执法工作台
      if (this.$store.state.activeTab) {
        this.changeTab(this.$store.state.activeTab)
      } else {
        this.changeTab('MakeLawWrit')
      }
    },
    changeTab (tab, go) {
      this.activeTab = this.activeTab ? this.activeTab : this.$store.state.activeTab
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
      } else {
        this.$emit('change-tab', tab)
      }
    },
    handleWindow (message) {
      if (message === 'window-quit') {
        // 如果为关闭则确认是否关闭系统
        this.$confirm('是否确认关闭系统？', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            dangerouslyUseHTMLString: true,
            type: 'warning'
          }).then(() => {
            electronRequest({msgName: message})
          }).catch(() => {

          })
      } else {
        if (message === 'window-max') {
          this.maxSrc = !this.maxSrc
        }
        electronRequest({msgName: message})
      }
    },
    sendDanger () {
      // 隐患发送
      this.visible.sendDanger = true
    },
    handleCommand (command) {
      if (command === 'clearLogin') {
        // 注销登录
        this.$confirm(`是否确定注销登录?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.logoutHandle()
        }).catch(() => {})
        return
      }
      this.visible[command] = true
    },
    logoutHandle () {
      clearLoginInfo()
      this.handleWindow('window-max')
      this.$router.replace({ name: 'Login', params: {
        autoLogin: false
      }})
    },
    async getNotice () {
      if (this.$store.state.onLine) {
        await Promise.all([
          this.getCheckList(),
        ]).then(() => {
        }).catch()
      }
    },
    async getCheckList () {
      // 获取检查任务
      let {userId, userSessId} = this.$store.state.user
      await this.$http.get(
          `${this.$store.state.user.userType === 'supervision' ? '/sv' : ''}/local/api-checkwarn/getTaskAll?userId=${userId}&__sid=${userSessId}`)
        .then(({ data }) => {
          if (data.status === "200") {
            // 根据企业归总数据,形成层级展示,左侧展示企业名称,右侧展示检查项
            // 开始遍历循环全部列表data.data，对比已存入的corpId，如果有则赋值进入list，如果没有则创建新企业
            let checkList = []
            if (data.data && data.data.length > 0) {
              // 如果有列表则先将第一个赋值
              checkList.push({
                corpId: data.data[0].corpId,
                corpName: data.data[0].corpName,
                active: false,
                postName: data.data[0].postName,
                list: [data.data[0]]
              })
              // 开始遍历循环全部列表qdListAllItem，对比已存入的qdList，如果有则赋值进入list，如果没有则创建新的列表
              for (let i = 1; i < data.data.length; i++) {
                let isNew = true
                for (let j = 0; j < checkList.length; j++) {
                  if (data.data[i].corpId === checkList[j].corpId) {
                    isNew = false
                    checkList[j].list.push(data.data[i])
                    break
                  }
                }
                if (isNew) {
                  checkList.push({
                    corpId: data.data[i].corpId,
                    corpName: data.data[i].corpName,
                    active: false,
                    postName: data.data[i].postName,
                    list: [data.data[i]]
                  })
                }
              }
            }
            this.notice.checkList = checkList
          }
        })
        .catch((err) => {
          console.log("获取检查任务列表失败：", err);
        });
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
      cursor: pointer;
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
    .img-btn {
      height: 35px;
      vertical-align: middle;
    }
    .btn-icon {
      font-size: 35px;
      color: #ECECEC;
      margin: 0px 5px;
      cursor: pointer;
      // &:hover {
      //   color: rgba(#f19716, 0.9);
      // }
    }
  }
  .main-top-operation-right {
    flex: 1;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    padding-right: 10px;
    .img-btn {
      height: 35px;
      vertical-align: middle;
      justify-content: center;
    }
    .btn-icon {
      font-size: 35px;
      color: #ECECEC;
      margin: 0px 5px;
      vertical-align: middle;
      cursor: pointer;
      // &:hover {
      //   color: rgba(#f19716, 0.9);
      // }
    }
  }
}
.topNav {
  color: #f7f7f7;
  text-decoration: none;
  font-size: 18px;
  cursor: pointer;
}
</style>