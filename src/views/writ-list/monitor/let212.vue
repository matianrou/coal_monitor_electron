<!--行政处罚 案件结案 罚款收缴 43-->
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
            <!-- 罚款收缴表 -->
            <div class="paper-title">
              <span>罚款收缴</span>
              <span>（请填写罚款收缴金额）</span>
            </div>
            <div class="table-main">
              <el-table
                :data="tableData"
                stripe
                border
                style="width: 100%;"
                height="100%"
                :header-cell-style="{background: '#f5f7fa'}">
                <el-table-column
                  prop="noItemContent"
                  label="文书名称"
                  header-align="center"
                  align="center">
                </el-table-column>
                <el-table-column
                  prop="noItemContent"
                  header-align="center"
                  align="center"
                  label="文书编号"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="noItemContent"
                  header-align="center"
                  align="center"
                  label="罚款类别"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="noItemContent"
                  header-align="center"
                  align="center"
                  label="罚款金额(万元)"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="noItemContent"
                  header-align="center"
                  align="center"
                  label="收缴金额(万元)"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="noItemContent"
                  header-align="center"
                  align="center"
                  label="加处罚款(万元)"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="noItemContent"
                  header-align="center"
                  align="center"
                  label="收缴日期"
                  width="180">
                </el-table-column>
                <el-table-column
                  header-align="center"
                  align="center"
                  label="操作"
                  width="80">
                  <template slot-scope="scope">
                    <el-button
                      :loading="loading.btn"
                      type="text"
                      @click="handleOperation(scope.$index, scope.row)"
                    >操作</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
          <div class="file-table-main">
            <!-- 文件上传 -->
            <div class="paper-title" style="display: flex; padding: 0 20px; align-items: center; justify-content: flex-end;">
              <div>
                <span>回执单</span>
              </div>
              <div style="flex: 1; display: flex; align-items: center; justify-content: flex-end; line-height: 0px;">
                <el-upload
                  action=""
                  :headers="{'content-type': 'application/x-www-form-urlencoded;charset=UTF-8'}"
                  :auto-upload="true"
                  :show-file-list="false"
                  :http-request="addFile">
                  <el-button size="small" :loading="loading.btn">上传回执单</el-button>
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
                  prop="noItemContent"
                  label="文书编号"
                  header-align="center"
                  align="center">
                </el-table-column>
                <el-table-column
                  prop="noItemContent"
                  label="文件名称"
                  header-align="center"
                  align="center">
                </el-table-column>
                <el-table-column
                  prop="onsiteBasis"
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
  </div>
</template>

<script>
import associationSelectPaper from "@/components/association-select-paper";
import { getNowFormatTime, getNowTime } from '@/utils/date'
import { randomString } from "@/utils/index";
export default {
  name: "Let212",
  mixins: [associationSelectPaper],
  components: {
  },
  data() {
    return {
      letData: {},
      options: {},
      associationPaper: [],
      tableData: [], // 罚款收缴表
      fileList: [], // 上传文件表
      loading: {
        main: false,
        btn: false
      },
      selectedP8PaperId: ''
    };
  },
  methods: {
    async initLetData(selectedPaper) {
      // 创建初始版本
      // 通过用户id获取罚款收缴
      // let let8DataPapaerContent = JSON.parse(selectedPaper.let8Data.paperContent)
      // this.letData = let8DataPapaerContent;
      // this.p8PaperId = selectedPaper.let8Data.paperId
      let {userSessId, userId} = this.$store.state.user
      let path = this.$store.state.user.userType === 'supervision' ? '/sv' : ''
      await this.$http.get(
          `${path}/local/api-fine/getFineCollection?userId=${userId}&__sid=${userSessId}`)
        .then(({ data }) => {
          if (data.status === "200") {
            console.log('data', data)
          } else {
          }
        })
        .catch((err) => {
          console.log("上传至服务器请求失败：", err);
        });
      // 创建初始版本
      this.letData = {
      };
    },
    goBack({ page, data }) {
      // 返回选择企业
      this.$emit("go-back", { page, data });
    },
    handleOperation() {

    },
    async getFileList () {
      // 获取文件列表
      let {userId, userSessId} = this.$store.state.user
      await this.$http.get(
          `/local/api-fine/getSingleReceipt?userId=${userId}&__sid=${userSessId}`)
        .then(({ data }) => {
          if (data.status === "200") {
            this.fileList = data.data.filter(item => item.paperId === this.paperData.paperId && item.delFlag !== '1')
            console.log('fileList', this.fileList)
          } else {
            this.fileList = []
          }
        })
        .catch((err) => {
          console.log("获取文件列表失败：", err);
        });
    },
    addFile (param) {
      // 上传文件
      let formData = new FormData()
      let submitData = {
        paperId: this.paperData.paperId,
        caseId: this.corpData.caseId,
        fileName: param.file.name,
        fileSize: param.file.size,
        createTime: getNowFormatTime(),
        singleId: getNowTime() + randomString(18),
        p8Id: this.p8PaperId,
        createBy: JSON.stringify({
          id: this.$store.state.user.userId
        }) ,
        updateBy: JSON.stringify({
          id: this.$store.state.user.userId
        }),
      }
      console.log('submitData', submitData)
      formData.append('file', param.file)
      formData.append('singleRece', JSON.stringify(submitData))
      console.log('formData', formData)
      return this.$http.post(
          `/local/api-fine/uploadSingle?__sid=${this.$store.state.user.userSessId}`,
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
      this.$confirm(`是否确定删除文件“${row.fileName}”？`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          dangerouslyUseHTMLString: true,
          type: 'warning'
        }).then(async () => {
          let {userSessId} = this.$store.state.user
          this.loading.btn = true
          await this.$http.get(
              `/local/api-fine/deleteById?singleId=${row.id}&__sid=${userSessId}`)
            .then(({ data }) => {
              if (data.status === "200") {
                this.$message.success('文件删除成功')
                console.log('fileList', this.fileList)
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