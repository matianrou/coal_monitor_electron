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
      <div style="flex: 1; height: calc(100vh - 180px)">
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
          label="序号"
          width="80">
          <template slot-scope="scope">
            <span>{{ scope.$index + 1 }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="orgName"
          header-align="center"
          align="center"
          label="检查企业名称">
        </el-table-column>
        <el-table-column
          prop="name"
          header-align="center"
          align="center"
          width="220"
          label="文书类型">
        </el-table-column>
        <el-table-column
          prop="createTime"
          header-align="center"
          align="center"
          width="180"
          label="制作时间">
        </el-table-column>
        <el-table-column
          prop="personName"
          header-align="center"
          align="center"
          width="120"
          label="制作人">
        </el-table-column>
        <!-- <el-table-column
          prop="synchronization"
          header-align="center"
          align="center"
          width="200"
          label="云同步">
        </el-table-column> -->
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
import { sortbyDes } from '@/utils/index'
import { saveToUpload } from '@/utils/savePaperData'
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
      const wkPaper = db.table('wkPaper')
      let paperList = await wkPaper.findAll(item => (item.paperType === '15' || item.paperType === '16' || item.paperType === '17') && item.delFlag !== '1')
      // 按创建时间排序
      paperList.length > 0 && paperList.sort(sortbyDes('createTime'))
      // 遍历设置归档时间：如果delFlag='0'则代表已归档，将updateTiem设置为归档时间，其他则为未归档
      paperList.length > 0 && paperList.map(item => {
        item.fileTime = item.delFlag === '0' ? item.updateDate : '未归档'
        let orgName = JSON.parse(JSON.stringify(item.paperContent)).cellIdx4 
        item.orgName = orgName ? orgName : ''
      })
      this.paperList = paperList
      await db.close()
      this.loading.list = false
    },
    async handleEdit (row) {
      // 编辑，打开编辑页面
      // 根据paperType打开相应页面
      let page = ''
      let dictName = this.$store.state.user.userType === 'supervision' ? 'supervisionPaperType' : 'monitorPaperType'
      this.$store.state.dictionary[dictName].map(item => {
        if (item.id === row.paperType) page = item.page
      })
      let docData={
            docTypeNo: row.paperType,
            docTypeName: row.name,
            page
      }
      this.changePage(docData)
    },
    async handleDelete (row) {
      // 删除文书 判断是否已归档，如果已归档则不可删除
      this.loading.btn = true
      this.$confirm(`是否确认删除${row.name}?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          dangerouslyUseHTMLString: true,
          type: 'warning'
        }).then(async () => {
          await this.$http.get(`/sv/local/jczf/delPaperByPaperId?__sid=${this.$store.state.user.userSessId}&paperId=${row.paperId}`)
            .then(async ({ data }) => {
              if (data.status === "200") {
                // 删除成功后，从本地数据库中删除
                const db = new GoDB(this.$store.state.DBName)
                // 删除文书
                const wkPaper = db.table('wkPaper')
                let paperData = await wkPaper.find(item => item.paperId === row.paperId)
                let data = paperData
                data.delFlag = '1'
                await wkPaper.put(data)
                // 删除对应隐患
                const wkDanger = db.table('wkDanger')
                let dangerList = await wkDanger.findAll(item => item.paperId === row.paperId)
                if (dangerList && dangerList.length > 0) {
                  dangerList.map(async (danger) => {
                    let dangerData = danger
                    dangerData.delFlag = '1'
                    await wkDanger.put(dangerData)
                  })
                }
                await db.close()
                this.$message.success('文书删除成功！')
                this.getData()
              } else {
                this.$message.error('删除文书失败，请再次尝试')
              }
            })
            .catch((err) => {
              this.$message.error('删除文书失败，请再次尝试')
              console.log('删除文书失败:', err)
            });
          this.loading.btn = false
        }).catch(() => {
          this.loading.btn = false
        })
    },
    async handleFile (row) {
      // 归档: 更新delFlag = '0'字段（本地及上传）
      // 拉取已经保存的文书，修改delFlag = '0',调用saveToUpload上传
      this.$confirm(`是否确认归档${row.name}?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          dangerouslyUseHTMLString: true,
          type: 'warning'
        }).then(async () => {
          const db = new GoDB(this.$store.state.DBName)
          const wkPaper = db.table('wkPaper')
          let curPaper = await wkPaper.find(item => item.paperId === row.paperId && item.delFlag !== '1')
          let paperData = curPaper
          paperData.delFlag = '0'
          await wkPaper.put(paperData)
          await db.close()
          this.$message.success(`${row.name}归档成功！`)
          await saveToUpload(row.paperId, this.$store.state.user.userSessId)
          this.loading.btn = false
          this.getData()
        }).catch(() => {
          this.loading.btn = false
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
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  .opinion-suggestion-operation {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    justify-content: space-evenly;
    border-bottom: 1px solid #DCDFE6;
  }
}
</style>