<template>
  <div class="main-page">
    <div class="main-header">
      <main-top
        ref="mainTop"
        @change-tab="changeTab"
      ></main-top>
    </div>
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import mainTop from '@/components/main-top'
export default {
  name: 'CalmineElectronMain',
  components: {
    mainTop
  },
  data () {
    return {
      timer: null,
    }
  },
  async created (){
    console.log(`已进入${this.$store.state.user.userType === 'supervision' ? '监管' : '监察'}系统`)
    if (this.$store.state.user.userType !== 'supervision') {
      await this.getSendPaperData()
    }
  },
  async mounted() {
    if (this.$store.state.user.userType !== 'supervision') {
      // 监察环境时获取未下载的文书数据，同时设置定时更新未下载的文书数据
      this.timer = setInterval(() => {
        setTimeout(async () => {
          ///调取接口 十分钟600000
          // 获取是否有未接收的发送文书信息
          await this.getSendPaperData()
          }, 0)
        }, 600000)
    }
  },
  beforeDestroy(){
    clearInterval(this.timer)
  },
  methods: {
    changeTab (tab) {
      if (this.$route.name !== tab) {
        this.$router.replace({
          name: `${tab}`
        })
      }
    },
    async getSendPaperData () {
      if (!this.$store.state.onLine) {
        return
      }
      let {userId, userSessId} = this.$store.state.user
      await this.$http.get(`${this.$store.state.user.userType === 'supervision' ? '/sv' : ''}/local/api-postPaper/findAllByUserId?userId=${userId}&__sid=${userSessId}`)
        .then(async ({ data }) => {
          if (data.status === "200") {
            this.$store.commit('changeState', {
              key: 'unreceivedPaper',
              val: data.data || []
            })
          }
        })
        .catch((err) => {
          console.log('获取未接收的文书失败！', err)
        });
    },
  },
}
</script>
<style lang="scss" scoped>
	html{
		background-color: #000;
	}
  .main-page {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    .main-header {
      height: 80px;
      overflow: hidden;
    }
    .main-content {
      // height: calc(100% - 80px);
      flex: 1;
    }
  }
</style>

