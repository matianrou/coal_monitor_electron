<template>
  <transition name="el-fade-in-linear">
    <router-view></router-view>
  </transition>
</template>

<script>
  import { electronRequest } from '@/utils/electronRequest'
  export default {
    data () {
      return {
        request: null
      }
    },
    created() {
      this.checkUpdate()
      this.initStore()
    },
    watch: {
      request(val) {
        console.log('request', val)
      }
    },
    mounted() {
      window.addEventListener('unload', this.saveState)
    },
    methods: {
      checkUpdate () {
        const NODE_ENV = process.env.NODE_ENV
        if (NODE_ENV === 'production') {
          const { ipcRenderer } = window.require('electron')
          // 设置发送消息监听
          let that = this
          ipcRenderer.on('check-update-reply', (event, arg) => {
            console.log('arg2', arg)
            that.request = arg
          })
          // 检查是否需要更新
          electronRequest({msgName: 'check-update', type: 'sendSync'}) // 向主进程发送同步消息，判断是否需要更新
        }
      },
      initStore() {
        // 返回仓库数据
        if (sessionStorage.getItem('state')) {
          this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem("state"))))
          this.$router.replace({
            name: this.$store.state.activeTab
          })
          sessionStorage.removeItem('state')
        }
      },
      saveState() {
        // 刷新页面时存储仓库
        sessionStorage.setItem('state', JSON.stringify(this.$store.state))
      },
    }
  }
</script>

<style>
</style>
