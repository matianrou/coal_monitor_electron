<!-- 意见建议书 展示子组件 -->
<template>
  <div class="opinion-suggestion-main">
    <!-- 意见建议书展示 -->
      <div class="opinion-suggestion-operation">
        <!-- 文书制作 -->
        <div>
          <el-radio-group v-model="selectPaperType">
            <el-radio label="16">加强和改善安全监管建议书</el-radio>
            <el-radio label="17">加强和改善安全管理意见书</el-radio>
            <el-radio label="15">执法案卷（首页）及目录</el-radio>
          </el-radio-group>
        </div>
        <div>
          <el-button
            type="primary"
            @click="createPaper"
          >
            制作文书
          </el-button>
        </div>
      </div>
      <div>
        <!-- 文书列表 -->
      </div>
  </div>
</template>

<script>
import GoDB from "@/utils/godb.min.js";
export default {
  name: "OpinionSuggestion",
  data() {
    return {
      loading: {
      },
      DBName: this.$store.state.DBName,
      selectPaperType: '16'
    };
  },
  async created() {
    await this.init()
  },
  methods: {
    async init () {
    },
    createPaper () {
      // 添加文书
      let docData = {}
      if (this.selectPaperType === '16') {
        docData = {
          docTypeNo: '16',
          docTypeName: '加强和改善安全监管建议书',
          page: 'let501'
        }
      } else if (this.selectPaperType === '17') {
        docData = {
          docTypeNo: '17',
          docTypeName: '加强和改善安全管理意见书',
          page: 'let502'
        }
      }
       else if (this.selectPaperType === '15') {
        docData = {
          docTypeNo: '15',
          docTypeName: '执法案卷（首页）及目录',
          page: 'let214'
        }
      }
      this.changePage(docData)
    },
    changePage (docData = null, paperData = null) {
      this.$emit('change-page', {
        status: 'opinionSuggestionPaper',
        docData,
        paperData
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