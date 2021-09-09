<template>
  <div class="main-page">
    <div class="main-header">
      <main-top
        ref="mainTop"
        @change-tab="changeTab"
      ></main-top>
    </div>
    <div class="main-content">
      <router-view/>
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
    }
  },
  created (){
    console.log(`已进入${this.$store.state.user.userType === 'supervision' ? '监管' : '监察'}系统`)
  },
  methods: {
    changeTab (tab) {
      this.$router.replace({
        name: `${tab}`
      })
    }
  },
}
</script>
<style lang="scss" scoped>
	html{
		background-color: #000;
	}
  .main-page {
    height: 100%;
    width: 100%;
    .main-header {
      height: 80px;
      overflow: hidden;
    }
    .main-content {
      height: calc(100% - 80px);
    }
  }
</style>

