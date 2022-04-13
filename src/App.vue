<template>
  <transition name="el-fade-in-linear">
    <router-view></router-view>
  </transition>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
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
            name: this.$store.state.activeTab
          })
          sessionStorage.removeItem('state')
        }
      },
      saveState() {
        // 刷新页面时存储仓库，不存储数据库仓库，因数据量过大无法保存
        let saveState = this.$store.state
        delete saveState.database
        sessionStorage.setItem('state', JSON.stringify(saveState))
      },
    }
  }
</script>

<style>
</style>
