<!-- 意见建议书 新建、修改、查看文书 -->
<template>
  <div class="opinion-suggestion-main">
    <component
      :is="showTemp"
      from-page="opinion-suggestion"
      :doc-data="docData"
      :paper-data="paperData"
      @go-back="changePage">
    </component>
  </div>
</template>

<script>
import GoDB from "@/utils/godb.min.js";
import { monitorWritList } from '@/utils/writList' // 当前只有监察有意见建议书，所以写死引入监察文书，如果需要动态加载参照执法工作台
export default {
  name: "OpinionSuggestion",
  props: {
    docData: {
      type: Object,
      default: () => {}
    },
    paperData: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    ...monitorWritList,
  },
  data() {
    return {
      loading: {
      },
      DBName: this.$store.state.DBName,
      showTemp: ''
    };
  },
  created() {
    this.init()
  },
  watch: {
    'docData.page'(val) {
      if (val) {
        this.init()
      }
    }
  },
  methods: {
    init () {
      if (this.docData.page) {
        this.showTemp = this.docData.page
      }
    },
    changePage () {
      this.$emit('change-page', {
        status: 'opinionSuggestionMain',
      })
    }
  },
};
</script>

<style lang="scss" scoped>
.opinion-suggestion-main {
  height: calc(100% - 40px);
  width: calc(100% - 40px);
  margin: 10px auto;
  .opinion-suggestion-operation {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    justify-content: space-evenly;
    border-bottom: 1px solid #DCDFE6;
  }
}
</style>