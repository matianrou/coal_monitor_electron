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
        <el-button type="primary" @click="createPaper">制作文书</el-button>
        <el-button type="primary" @click="batchFile">批量归档</el-button>
        <el-button type="primary" @click="batchDelete">批量删除</el-button>
      </div>
    </div>
    <!-- 文书列表 -->
    <div style="flex: 1; height: calc(100vh - 200px); padding: 10px 20px;">
      <el-table
        :data="paperList"
        ref="table"
        v-loading="loading.list"
        style="width: 100%"
        height="100%"
        stripe
        border
        :header-cell-style="{ background: '#f5f7fa' }"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          header-align="center"
          align="center"
          width="55">
        </el-table-column>
        <el-table-column
          header-align="center"
          align="center"
          label="序号"
          width="80"
        >
          <template slot-scope="scope">
            <span>{{ scope.$index + 1 }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="orgName"
          header-align="center"
          align="left"
          label="检查企业名称"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          header-align="center"
          align="center"
          width="220"
          label="文书类型"
        >
        </el-table-column>
        <el-table-column
          prop="createTime"
          header-align="center"
          align="center"
          width="180"
          label="制作时间"
        >
        </el-table-column>
        <el-table-column
          prop="personName"
          header-align="center"
          align="center"
          width="120"
          label="制作人"
        >
        </el-table-column>
        <el-table-column
          prop="fileTime"
          header-align="center"
          align="center"
          width="200"
          label="归档时间"
        >
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
          label="操作"
        >
          <template slot-scope="scope">
            <div>
              <el-button
                :loading="loading.btn"
                type="text"
                size="small"
                @click="handleEdit(scope.row)"
              >
                {{ scope.row.delFlag === "0" ? "查看" : "编辑" }}
              </el-button>
              <el-button
                :loading="loading.btn"
                :disabled="scope.row.delFlag === '0'"
                type="text"
                size="small"
                @click="singleDelete(scope.row)"
              >
                删除
              </el-button>
              <el-button
                :loading="loading.btn"
                :disabled="scope.row.delFlag === '0'"
                type="text"
                size="small"
                @click="singleFile(scope.row, 'file')"
              >
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
import { sortbyDes } from "@/utils/index";
import { saveToUpload } from "@/utils/savePaperData";
export default {
  name: "OpinionSuggestion",
  data() {
    return {
      loading: {},
      selectPaperType: "16",
      loading: {
        list: false,
        btn: false,
      },
      paperList: [], // 文书列表
      selectedList: [], // 选中的文书列表
    };
  },
  async created() {
    await this.init();
    await this.getData();
  },
  methods: {
    async init() {},
    createPaper() {
      // 添加文书
      let docData = {};
      if (this.selectPaperType === "16") {
        docData = {
          docTypeNo: "16",
          docTypeName: "加强和改善安全监管建议书",
          page: "let501",
        };
      } else if (this.selectPaperType === "17") {
        docData = {
          docTypeNo: "17",
          docTypeName: "加强和改善安全管理意见书",
          page: "let502",
        };
      } else if (this.selectPaperType === "15") {
        docData = {
          docTypeNo: "15",
          docTypeName: "执法案卷（首页）及目录",
          page: "let214",
        };
      }
      this.changePage(docData);
    },
    changePage(docData = null, paperData = null) {
      this.$emit("change-page", {
        status: "opinionSuggestionPaper",
        docData,
        paperData,
      });
    },
    async getData() {
      this.loading.list = true;
      // 获取文书列表: 获取建议书16，意见书17，和没有caseId的执法案卷（首页）及目录15
      let wkPaper = await this.getPaperDatabase('opinion-suggestion');
      let paperList = JSON.parse(JSON.stringify(wkPaper.filter(
        (item) =>
          ((item.paperType === "15" && !item.caseId) ||
            item.paperType === "16" ||
            item.paperType === "17") &&
          item.delFlag !== "1"
      ) || []))
      // 按创建时间排序
      paperList.length > 0 && paperList.sort(sortbyDes("createTime"));
      paperList.length > 0 &&
        paperList.map((item) => {
          item.fileTime = item.delFlag === "0" ? item.updateDate : "未归档";
          let orgName = "";
          if (item.paperType === "15") {
            // 执法案卷获取检查企业名称为cellIdx0字段
            orgName = JSON.parse(item.paperContent).cellIdx0;
          } else {
            // 意见建议书获取检查企业名称为cellIdx0字段
            orgName = JSON.parse(item.paperContent).cellIdx5;
          }
          item.orgName = orgName ? orgName : "";
          // 设置归档时间：如果delFlag='0'则代表已归档，将updateTiem设置为归档时间，其他则为未归档
          item.fileTime = item.delFlag === '0' ? item.updateDate : '未归档'
        });
      this.paperList = paperList;
      this.loading.list = false;
      this.$nextTick(() => {
        this.$refs.table.doLayout();
      });
    },
    async handleEdit(row) {
      // 编辑，打开编辑页面
      // 根据paperType打开相应页面
      let page = "";
      this.$store.state.dictionary['opinionSuggestionPaperType'].map((item) => {
        if (item.id === row.paperType) page = item.page;
      });
      let docData = {
        docTypeNo: row.paperType,
        docTypeName: row.name,
        page,
      };
      this.changePage(docData, row);
    },
    handleSelectionChange (val) {
      this.selectedList = val
    },
    singleFile (row) {
      // 单个文书归档
      // 如果没有网络则不能归档
      if (!this.$store.state.onLine) {
        this.$message.error('当前为离线登录，请联网后再归档！')
        return
      }
      this.$confirm(`是否确认归档${row.orgName || ''} ${row.name}?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        dangerouslyUseHTMLString: true,
        type: "warning",
      })
        .then(async () => {
          this.loading.btn = true;
          await this.handleFile(row)
          this.getData();
          this.loading.btn = false;
        })
        .catch(() => {
        });
    },
    async handleFile(paper) {
      // 归档: 更新delFlag = '0'字段（本地及上传）
      // 拉取已经保存的文书，修改delFlag = '0',调用saveToUpload上传
      let paperData = JSON.parse(JSON.stringify(paper));
      paperData.delFlag = "0";
      await this.updatePaperDatabase('opinion-suggestion', [paperData])
      await saveToUpload(paper.paperId, true, 'opinion-suggestion');
    },
    async batchFile  () {
      // 批量归档
      if (!this.$store.state.onLine) {
        this.$message.error('当前为离线登录，请联网后再归档！')
        return
      }
      if (this.selectedList.length > 0) {
        this.$confirm(`是否确认归档已选择的文书?`, "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          dangerouslyUseHTMLString: true,
          type: "warning",
        })
          .then(async () => {
            this.loading.btn = true;
            for (let i = 0; i < this.selectedList.length; i++) {
              let item = this.selectedList[i]
              if (item.delFlag === "2") {
                // 保存的则归档
                await this.handleFile(item)
              }
            }
            this.getData();
            this.loading.btn = false;
          })
          .catch(() => {
          });
      } else {
        this.$message.error('请选择需要归档的文书！')
      }
    },
    singleDelete (row) {
      if (!this.$store.state.onLine) {
        this.$message.error('当前为离线登录，请联网后删除！')
        return
      }
      this.$confirm(`是否确认删除${row.orgName || ''} ${row.name}?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        dangerouslyUseHTMLString: true,
        type: "warning",
      })
        .then(async () => {
          this.loading.btn = true;
          await this.handleDelete(row)
          this.getData();
          this.loading.btn = false;
        })
        .catch(() => {
        });
    },
    async handleDelete(paper) {
      // 删除文书 判断是否已归档，如果已归档则不可删除
      await this.$http
        .get(
          `${this.$store.state.user.userType === 'supervision' ? '/sv' : ''}/local/jczf/delPaperByPaperId?__sid=${this.$store.state.user.userSessId}&paperId=${paper.paperId}`
        )
        .then(async ({ data }) => {
          if (data.status === "200") {
            // 删除成功后，从本地数据库中删除
            // 删除文书
            let paperData = JSON.parse(JSON.stringify(paper));
            paperData.delFlag = "1"
            await this.updatePaperDatabase('opinion-suggestion', [paperData])
            // 删除对应隐患
            let wkDanger = await this.getDatabase("wkDanger");
            let dangerList = JSON.parse(JSON.stringify(wkDanger.filter(
              (item) => item.paperId === paper.paperId
            ) || []))
            for (let i = 0; i < dangerList.length; i++) {
              dangerList[i].delFlag = "1"
            }
            await this.updateDatabase('wkDanger', dangerList, 'dangerId')
            this.$message.success("文书删除成功！");
          } else {
            this.$message.error("删除文书失败，请再次尝试");
          }
        })
        .catch((err) => {
          this.$message.error("删除文书失败，请再次尝试");
          console.log("删除文书失败:", err);
        });
    },
    batchDelete () {
      // 批量删除
      if (!this.$store.state.onLine) {
        this.$message.error('当前为离线登录，请联网后删除！')
        return
      }
      if (this.selectedList.length > 0) {
        this.$confirm(`是否确认删除已选择的文书?`, "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          dangerouslyUseHTMLString: true,
          type: "warning",
        })
          .then(async () => {
            this.loading.btn = true;
            for (let i = 0; i < this.selectedList.length; i++) {
              let item = this.selectedList[i]
              if (item.delFlag === '2') {
                await this.handleDelete(item)
              } else {
                this.$message.error(`${item.name}文书已归档无法删除！`)
              }
            }
            this.getData();
            this.loading.btn = false;
          })
          .catch(() => {
            this.loading.btn = false;
          });
      } else {
        this.$message.error('请选择需要删除的文书！')
      }
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
    border-bottom: 1px solid #dcdfe6;
  }
}
</style>