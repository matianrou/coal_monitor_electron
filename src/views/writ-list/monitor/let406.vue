<!-- 其他 证据上传 影音证据 21 -->
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
          <div class="file-table-main">
            <!-- 文件上传 -->
            <div class="paper-title" style="display: flex; padding: 0 20px; align-items: center; justify-content: flex-end;">
              <div>
                <span>影音证据</span>
              </div>
              <div style="flex: 1; display: flex; align-items: center; justify-content: flex-end; line-height: 0px;">
                <!-- <span>摘要：</span>
                <el-input 
                  v-model="summary"
                  style="width: 200px; margin-right: 10px;"
                  size="small"
                ></el-input> -->
                <el-upload
                  ref="upload"
                  action=""
                  :headers="{'content-type': 'application/x-www-form-urlencoded;charset=UTF-8'}"
                  :auto-upload="true"
                  :show-file-list="false"
                  :http-request="addFile">
                  <el-button size="small" :loading="loading.btn">上传证据</el-button>
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
                <!-- <el-table-column
                  prop="fileSize"
                  header-align="center"
                  align="center"
                  label="大小"
                  width="120">
                </el-table-column> -->
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
  </div>
</template>

<script>
import GoDB from "@/utils/godb.min.js";
import associationSelectPaper from "@/components/association-select-paper";
import { getNowFormatTime, getNowTime } from '@/utils/date'
import { randomString } from "@/utils/index";
export default {
  name: "Let406",
  mixins: [associationSelectPaper],
  components: {
  },
  data() {
    return {
      letData: {},
      options: {},
      fileList: [], // 上传文件表
      associationPaper: [],
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
    },
    goBack({ page, data }) {
      // 返回选择企业
      this.$emit("go-back", { page, data });
    },
    async getFileList () {
      // 获取文件列表
      let {userId, userSessId} = this.$store.state.user
      if (this.paperData.paperId) {
        await this.$http.get(
            `/local/jczf/getImageEvidencePC?userId=${userId}&__sid=${userSessId}`)
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
    addFile (param) {
      // 上传文件
      let formData = new FormData()
      let submitData = {
        paperId: this.paperData.paperId,
        caseId: this.corpData.caseId,
        fileName: param.file.name,
        fileSize: param.file.size,
        groupId: this.$store.state.user.userGroupId,
        groupName: this.$store.state.user.userGroupName,
        corpId: this.corpData.corpId,
        corpName: this.corpData.corpName,
        createTime: getNowFormatTime(),
        createDate: getNowFormatTime(),
        evidenceId: getNowTime() + randomString(18),
        createBy: JSON.stringify({
          id: this.$store.state.user.userId
        }) ,
        updateBy: JSON.stringify({
          id: this.$store.state.user.userId
        }),
      }
      formData.append('file', param.file)
      formData.append('imageEv', JSON.stringify(submitData))
      return this.$http.post(
          `/local/jczf/imageUploadPC?__sid=${this.$store.state.user.userSessId}`,
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
      this.loading.btn = true
      this.$confirm(`是否确定删除文件“${row.fileName}”？`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          dangerouslyUseHTMLString: true,
          type: 'warning'
        }).then(async () => {
          let {userSessId} = this.$store.state.user
          this.loading.btn = true
          await this.$http.get(
              `/local/jczf/deleteByEvidenceId?evidenceId=${row.evidenceId}&__sid=${userSessId}`)
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
    height: calc(100vh - 150px);
  }
}
</style>