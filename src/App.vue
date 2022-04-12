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
/*修改滚动条样式*/
div::-webkit-scrollbar {
  height: 8px;
  width: 8px;
} 
div::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: rgba(144,147,153,.3);
  /* background-color: #f19716; */
  filter:Alpha(opacity=50);
  background-image: -webkit-linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.2) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.2) 75%,
      transparent 75%,
      transparent
  );
}
div::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #ededed;
  border-radius: 10px;
}

</style>
