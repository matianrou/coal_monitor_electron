<template>
  <transition name="el-fade-in-linear">
    <router-view></router-view>
  </transition>
</template>

<script>
  export default {
    created() {
      this.initStore()
    },
    mounted() {
      window.addEventListener('unload', this.saveState)
    },
    methods: {
      initStore() {
        // 返回仓库数据
        if (sessionStorage.getItem('state')) {
          this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem("state"))))
          this.$router.replace({
            name: 'CalmineElectronMain'
          })
          sessionStorage.removeItem('state')
        }
        console.log('state', this.$store.state)
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
