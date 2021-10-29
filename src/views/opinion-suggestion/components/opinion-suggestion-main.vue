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
      <!-- 文书列表 -->
      <div style="flex: 1;">
        <el-table
          :data="paperList"
          ref="table"
          v-loading="loading.list"
          style="width: 100%;"
          height="100%"
          stripe
          :header-cell-style="{background: '#f5f7fa'}">
          <el-table-column
          header-align="center"
          align="center"
          width="80">
          <template slot-scope="scope">
            <span>{{ scope.$index + 1 }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="name"
          header-align="center"
          align="center"
          label="检查企业名称">
        </el-table-column>
        <el-table-column
          prop="paperType"
          header-align="center"
          align="center"
          width="170"
          label="文书类型">
        </el-table-column>
        <el-table-column
          prop="createTime"
          header-align="center"
          align="center"
          width="200"
          label="制作时间">
        </el-table-column>
        <el-table-column
          prop="personName"
          header-align="center"
          align="center"
          width="200"
          label="制作人">
        </el-table-column>
        <el-table-column
          prop="synchronization"
          header-align="center"
          align="center"
          width="200"
          label="云同步">
        </el-table-column>
        <el-table-column
          fixed="right"
          header-align="center"
          align="center"
          width="200"
          label="操作">
          <template slot-scope="scope">
            <div>
              <el-button
                :loading="loading.btn"
                type="text"
                size="small"
                @click="handleEdit(scope.row)">
                {{scope.row.delFlag === '0' ? '查看' : '编辑'}}
              </el-button>
              <el-button
                :loading="loading.btn"
                :disabled="scope.row.delFlag === '0'"
                type="text"
                size="small"
                @click="handleDelete(scope.row)">
                删除
              </el-button>
              <el-button
                :loading="loading.btn"
                :disabled="scope.row.delFlag === '0'"
                type="text"
                size="small"
                @click="handleFile(scope.row, 'file')">
                归档
              </el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
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
      selectPaperType: '16',
      loading: {
        list: false,
        btn: false
      },
      paperList: [], // 文书列表
    };
  },
  async created() {
    await this.init()
    await this.getData()
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
      this.getData()
    },
    async getData () {
      this.loading.list = true
      const db = new GoDB(this.DBName)
      // 获取文书列表
      // if (this.caseData.caseId) {
        const wkPaper = db.table('wkPaper')
        let paperList = await wkPaper.findAll(item => item.paperType ===15||item.paperType ===16||item.paperType ===17&&item.delFlag !== '1')
        // 按创建时间排序
        paperList.length > 0 && paperList.sort(sortbyDes('createTiem'))
        // 遍历设置归档时间：如果delFlag='0'则代表已归档，将updateTiem设置为归档时间，其他则为未归档
        paperList.length > 0 && paperList.map(item => {
          item.fileTime = item.delFlag === '0' ? item.updateDate : '未归档'
        })
        this.paperList = paperList
      // }
      await db.close()
      this.loading.list = false
    },
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