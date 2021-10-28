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
import { writList } from '@/utils/writList'
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
    ...writList,
  },
  data() {
    return {
      loading: {
      },
      DBName: this.$store.state.DBName,
      showTemp: ''
    };
  },
  async created() {
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
  margin: 20px auto;
  background: rgba(255, 255, 255, 0.7);
  .opinion-suggestion-operation {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    justify-content: space-evenly;
    border-bottom: 1px solid #DCDFE6;
  }
}
</style>