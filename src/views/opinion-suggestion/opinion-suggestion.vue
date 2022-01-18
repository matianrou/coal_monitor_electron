<!-- tab: 意见建议书 -->
<template>
  <div class="opinion-suggestion">
    <!-- 切换展示意见建议书制作及列表opinionSuggestionMain或意见建议书文书制作opinionSuggestionPaper -->
    <component
      :is="showStatus"
      :doc-data="docData"
      :paper-data="paperData"
      @change-page="changePage"
    ></component>
  </div>
</template>

<script>
import opinionSuggestionMain from '@/views/opinion-suggestion/components/opinion-suggestion-main'
import opinionSuggestionPaper from '@/views/opinion-suggestion/components/opinion-suggestion-paper'
export default {
  name: "OpinionSuggestion",
  components: {
    opinionSuggestionMain,
    opinionSuggestionPaper
  },
  data() {
    return {
      showStatus: 'opinionSuggestionMain',
      docData: {},
      paperData: {}
    };
  },
  async created() {
    await this.init()
  },
  methods: {
    async init () {
    },
    changePage (data) {
      // 切换展示或制作
      this.showStatus = data.status
      this.docData = data.docData
      this.paperData = data.paperData
    }
  },
};
</script>

<style lang="scss" scoped>
.opinion-suggestion {
  height: calc(100vh - 80px);
  width: 100%;
  overflow: auto;
}
</style>