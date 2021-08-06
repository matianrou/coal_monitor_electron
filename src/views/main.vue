<template>
  <div class="main-page">
    <div class="main-header">
      <main-top
        @change-tab="changeTab"
      ></main-top>
    </div>
    <div class="main-content">
      <!-- <keep-alive> -->
        <router-view/>
      <!-- </keep-alive> -->
    </div>
  </div>
</template>

<script>
import mainTop from '@/components/main-top'
export default {
  name: 'CalmineMonitorElectronMain',
  components: {
    mainTop
  },
  data () {
    return {
    }
  },
  created (){
  },
  methods: {
    changeTab (tab) {
      this.$router.replace({
        name: tab
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

