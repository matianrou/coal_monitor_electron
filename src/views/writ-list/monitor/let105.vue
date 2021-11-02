<!-- 现场检查 复查 隐患整改 44 -->
<template>
  <div style="width: 100%; height: 100%">
    <let-main
      ref="letMain"
      :corp-data="corpData"
      :doc-data="docData"
      :let-data="letData"
      :edit-data="paperData"
      @go-back="goBack"
    >
      <div slot="left">
        <div class="page page-sizeA4 danger-rectification">
          <div class="danger-table-main">
            <!-- 隐患整改表 -->
            <div class="paper-title">
              <span>隐患整改</span>
            </div>
            <div class="table-main">
              <el-table
                :data="letData.DangerTable && letData.DangerTable.tableData"
                stripe
                border
                style="width: 100%;"
                height="100%"
                :header-cell-style="{background: '#f5f7fa'}">
                <el-table-column
                  type="index"
                  header-align="center"
                  align="center"
                  label="序号"
                  width="80">
                </el-table-column>
                <el-table-column
                  prop="noItemContent"
                  label="违法行为描述"
                  header-align="center"
                  align="center">
                </el-table-column>
                <el-table-column
                  header-align="center"
                  align="center"
                  label="是否完成"
                  width="100">
                  <template slot-scope="scope">
                    <el-checkbox v-model="scope.row.dangerCorrected" true-label="1" false-label="0">{{scope.row.dangerCorrected ? '已完成' : '未完成' }}</el-checkbox>
                  </template>
                </el-table-column>
                <el-table-column
                  header-align="center"
                  align="center"
                  label="复查单位"
                  width="180">
                  <template slot-scope="scope">
                    <el-button
                      size="small"
                      type="text"
                      title="点击选择复查单位"
                      @click="selectOrg(scope.$index)"
                    >{{ scope.row.reviewUnitName ? scope.row.reviewUnitName : '(点击选择)' }}</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
          <div class="file-table-main">
            <!-- 文件上传 -->
            <div class="paper-title" style="display: flex; padding: 0 20px; align-items: center; justify-content: flex-end;">
              <div>
                <span>委托地方复查文书上传</span>
              </div>
              <div style="flex: 1; display: flex; align-items: center; justify-content: flex-end; line-height: 0px;">
                <el-upload
                  action=""
                  :headers="{'content-type': 'application/x-www-form-urlencoded;charset=UTF-8'}"
                  :auto-upload="true"
                  :show-file-list="false"
                  :before-upload="beforeUpload"
                  :http-request="addFile">
                  <el-button size="small" :loading="loading.btn">上传文件</el-button>
                </el-upload>
              </div>
            </div>
            <div class="table-main">
              <el-table
                :data="fileList"
                stripe
                border
                style="width: 100%;"
                height="100%"
                :header-cell-style="{background: '#f5f7fa'}">
                <el-table-column
                  prop="fileName"
                  label="文件名称"
                  header-align="center"
                  align="center">
                </el-table-column>
                <el-table-column
                  prop="createDate"
                  header-align="center"
                  align="center"
                  label="添加日期"
                  width="180">
                </el-table-column>
                <el-table-column
                  header-align="center"
                  align="center"
                  label="操作"
                  width="120">
                  <template slot-scope="scope">
                    <el-button
                      :loading="loading.btn"
                      type="text"
                      @click="downloadFile(scope.$index, scope.row)"
                    >下载</el-button>
                    <el-button
                      :loading="loading.btn"
                      type="text"
                      @click="deleteFile(scope.$index, scope.row)"
                    >删除</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
        </div>
      </div>
    </let-main>
    <!-- 关联文书选择 -->
    <select-paper
      :visible="visible.selectPaper"
      title="关联文书选择"
      :paper-list="paperList"
      @close="closeDialog"
      @confirm-paper="confirmPaper"
    ></select-paper>
    <select-org
      :visible="selectOrgVisible"
      @confirm-org="confirmOrg"
      @close="closeSelectOrg"
    ></select-org>
  </div>
</template>

<script>
import GoDB from "@/utils/godb.min.js";
import associationSelectPaper from "@/components/association-select-paper";
import selectOrg from '@/components/select-org'
import { getNowFormatTime, getNowTime } from '@/utils/date'
import { randomString } from "@/utils/index";
export default {
  name: "Let105",
  mixins: [associationSelectPaper],
  components: {
    selectOrg
  },
  data() {
    return {
      letData: {},
      options: {},
      fileList: [], // 上传文件表
      associationPaper: ['1'],
      selectOrgVisible: false, // 选择复查单位
      selectedRowIndex: null, // 选中的复查单位的行索引
      loading: {
        main: false,
        btn: false
      }
    };
  },
  methods: {
    async initLetData(selectedPaper) {
      // 创建初始版本
      let db = new GoDB(this.$store.state.DBName);
      this.paperData.paperId = getNowTime() + randomString(18)
      await db.close();
      let let1DataPapaerContent = JSON.parse(selectedPaper.let1Data.paperContent)
      this.letData = let1DataPapaerContent;
    },
    goBack({ page, data }) {
      // 返回选择企业
      this.$emit("go-back", { page, data });
    },
    selectOrg (index) {
      // 选择复查单位
      this.selectedRowIndex = index
      this.selectOrgVisible = true
    },
    closeSelectOrg () {
      this.selectOrgVisible = false
    },
    confirmOrg (data) {
      let reviewUnitName = data.name
      let reviewUnitId = data.id
      this.$set(this.letData.DangerTable.tableData, this.selectedRowIndex, Object.assign(this.letData.DangerTable.tableData[this.selectedRowIndex], {
        reviewUnitName,
        reviewUnitId
      }))
      this.selectOrgVisible = false
    },
    async getFileList () {
      // 获取文件列表
      let {userId, userSessId} = this.$store.state.user
      if (this.paperData.paperId) {
        await this.$http.get(
            `/local/api-review/getLocalReview?userId=${userId}&__sid=${userSessId}`)
          .then(({ data }) => {
            if (data.status === "200") {
              this.fileList = data.data.filter(item => item.paperId === this.paperData.paperId && item.delFlag !== '1')
            } else {
              this.fileList = []
            }
          })
          .catch((err) => {
            console.log("获取文件列表失败：", err);
          });
      }
    },
    beforeUpload () {
      let upload = true
      if (!this.paperData.paperId) {
        this.$message.error('上传失败，请先保存隐患整改内容后再上传文件！')
        upload = false
      }
      return upload
    },
    addFile (param) {
      // 添加文件
      let formData = new FormData()
      let submitData = {
        paperId: this.paperData.paperId,
        caseId: this.corpData.caseId,
        fileName: param.file.name,
        fileSize: param.file.size,
        createTime: getNowFormatTime(),
        reviewId: getNowTime() + randomString(18),
        createBy: JSON.stringify({
          id: this.$store.state.user.userId
        }) ,
        updateBy: JSON.stringify({
          id: this.$store.state.user.userId
        }),
      }
      formData.append('file', param.file)
      formData.append('localReview', JSON.stringify(submitData))
      return this.$http.post(
          `/local/api-review/uploadReview?__sid=${this.$store.state.user.userSessId}`,
          {
            sendJson: true,
            data: formData
          }
        )
        .then(({ data }) => {
          if (data.status === "200") {
            this.$message.success('文件上传成功！')
            this.getFileList()
          } else {
          }
        })
        .catch((err) => {
          console.log("上传至服务器请求失败：", err);
        });
    },
    deleteFile (index, row) {
      // 删除文件
      this.$confirm(`是否确定删除文件${row.fileName ? row.fileName : ''}？`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          dangerouslyUseHTMLString: true,
          type: 'warning'
        }).then(async () => {
          let {userSessId} = this.$store.state.user
          this.loading.btn = true
          await this.$http.get(
              `/local/api-review/deleteById?reviewId=${row.reviewId}&__sid=${userSessId}`)
            .then(({ data }) => {
              if (data.status === "200") {
                this.$message.success('文件删除成功')
                this.getFileList()
              } else {
                this.$message.error('文件删除失败！')
              }
            })
            .catch((err) => {
              this.$message.error('文件删除失败')
              console.log("获取文件列表失败：", err);
            });
          this.loading.btn = false
        }).catch(() => {
          this.loading.btn = false
        })
    },
    downloadFile (index, row) {
      const link = document.createElement('a')
      link.style.display = 'none'
      link.href = `${process.env.FILE_URL}${row.filePath}`
      document.body.appendChild(link)
      link.click()
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/let";
.danger-rectification {
  display: flex;
  flex-direction: column;
  .danger-table-main {
    flex-direction: column;
  }
  .file-table-main {
    flex: 1;
  }
  .paper-title {
    height: 35px;
    background: rgb(33, 150, 243);
    line-height: 35px;
    padding: 0px 30px;
    color: #fff;
    font-family: '宋体';
    font-weight: bold;
  }
  .table-main {
    height: calc(50vh - 90px);
  }
}
</style>