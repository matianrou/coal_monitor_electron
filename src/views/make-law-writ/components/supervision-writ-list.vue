<!-- tab: 执法工作台 -->
<template>
  <!-- 填写文书 -->
  <component
    :is="showTemp"
    :corp-data="corpData"
    :doc-data="docData"
    :paper-data="paperData"
    :from-page="fromPage"
    @go-back="changePage">
  </component>
</template>

<script>
import { supervisionWritList } from '@/utils/writList'

export default {
  name: "SupervisionWritList",
  components: {
    ...supervisionWritList
  },
  props: {
    showTemp: {
      type: String,
      default: null
    },
    corpData: {
      type: Object,
      default: () => {}
    },
    docData: {
      type: Object,
      default: () => {}
    },
    paperData: {
      type: Object,
      default: () => {}
    },
    fromPage: {
      type: String,
      default: null
    }
  },
  data() {
    return {
    }
  },
  computed: {
  },
  created() {
  },
  methods: {
    changePage({page, data}) {
      this.$emit('go-back', {page, data})
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
