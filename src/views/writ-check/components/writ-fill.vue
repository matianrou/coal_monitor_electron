<!-- tab: 文书查看-文书详情展示 -->
<template>
  <div class="writ-fill-main">
    <!-- 文书详情 -->
    <component
      v-if="$store.state.user.userType"
      :is="`${$store.state.user.userType}-writ-list`"
      :show-temp="showTemp"
      :corp-data="corpData"
      :doc-data="docData"
      :paper-data="paperData"
      from-page="writ-case"
      @go-back="changePage">
    </component>
  </div>
</template>

<script>
import GoDB from '@/utils/godb.min.js'
import monitorWritList from '@/views/make-law-writ/components/monitor-writ-list' // 监察文书组件表
import supervisionWritList from '@/views/make-law-writ/components/supervision-writ-list' // 监管文书组件表
export default {
  name: "WritFill",
  components: {
    monitorWritList,
    supervisionWritList,
  },
  props: {
    caseData: {
      type: Object,
      default: () => {}
    },
    paperData: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      DBName: this.$store.state.DBName,
      showTemp: null, // 展示的文书详情模板号，比如let100
      corpData: {}, // 选择的企业信息
      docData: {}, // 选择显示的文书基本信息编号及名称
    };
  },
  async activated() {
    await this.init()
  },
  watch: {
    async paperData(val) {
      await this.init()
    }
  },
  methods: {
    async init () {
      let corpBase = await this.getDatabase('corpBase')
      let corp = corpBase.find(item => item.corpId === this.caseData.corpId)
      this.corpData = {
        corpName: corp.corpName,
        corpTypeName: corp.corpTypeName,
        corpCountryName: corp.provinceName + " " + corp.cityName + " " + corp.countryName,
        address: corp.address,
        legalName: corp.legalName,
        tel: corp.tel,
        corpId: corp.corpId,
        planId: this.caseData.planId || '',
        caseId: this.caseData.caseId,
        caseType: this.caseData.checkStatus,
        constructType: corp.constructType
      }
      let docData = this.$store.state.dictionary[`${this.$store.state.user.userType}PaperType`].find(item => item.id === this.paperData.paperType)
      this.docData = Object.assign({}, docData, {
        docTypeNo: docData.id,
        docTypeName: docData.name
      })
      this.showTemp = this.docData.page
    },
    changePage ({page, data}) {
      this.$emit('go-back', {page: 'writPaper', data: {}})
    },
  },
};
</script>

<style lang="scss" scoped>
.writ-fill-main {
  height: calc(100vh - 193px);
  overflow: auto;
}
</style>