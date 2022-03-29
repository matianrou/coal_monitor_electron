<!-- 其他 报告上传 监察执法报告 45 -->
<template>
  <div style="width: 100%; height: 100%">
    <let-main
      ref="letMain"
      :corp-data="corpData"
      :doc-data="docData"
      :let-data="letData"
      :paper-data="paperData"
      :from-page="fromPage"
      @go-back="goBack"
    >
      <div slot="left">
        <div class="page page-sizeA4 danger-rectification">
          <div class="file-table-main">
            <!-- 文件上传 -->
            <div class="paper-title" style="display: flex; padding: 0 20px; align-items: center; justify-content: flex-end;">
              <div>
                <span>监察执法报告</span>
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
                  :on-success="handleSuccess"
                  :http-request="addFile">
                  <el-button :disabled="!$store.state.onLine" size="small" :loading="loading.btn">添加报告</el-button>
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
                  prop="createTime"
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
                      :disabled="!$store.state.onLine"
                      :loading="loading.btn"
                      type="text"
                      @click="downloadFile(scope.$index, scope.row)"
                    >下载</el-button>
                    <el-button
                      :disabled="!$store.state.onLine"
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
import associationSelectPaper from "@/components/association-select-paper";
import { getNowFormatTime, getNowTime } from '@/utils/date'
import { randomString } from "@/utils/index";
import { saveAs } from 'file-saver'
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
    },
    goBack({ page, data }) {
      // 返回选择企业
      this.$emit("go-back", { page, data });
    },
    async getFileList () {
      if (!this.$store.state.onLine) {
        this.$message.warning('当前为离线状态，请联网后才能上传、下载或删除文件！')
        return
      }
      // 获取文件列表
	    let jczfReport = await this.getDatabase('jczfReport');
      this.fileList = JSON.parse(JSON.stringify(jczfReport.filter(item => item.caseId === this.corpData.caseId && item.delFlag !== '1') || []))
    },
    async updateFileList () {
      // 上传文件或删除文件时更新本地库
      let {userId, userSessId} = this.$store.state.user
      let newFileList = []
      // 通过接口获取最新数据
      await this.$http.get(
          `/local/jczf/getReportByUserId?userId=${userId}&__sid=${userSessId}`)
        .then(({ data }) => {
          if (data.status === "200") {
            newFileList = data.data || []
          }
        })
        .catch((err) => {
          console.log("获取文件列表失败：", err);
        });
      // 更新本地库
      let addFileList = []
      for (let i = 0; i < newFileList.length; i++) {
        let obj = newFileList[i];
        addFileList.push({
          "id": obj.id,
          "evidenceId": obj.evidenceId,
          "fileName": obj.fileName,
          "filePath": obj.filePath,
          "fileSize": obj.fileSize,
          "hashCode": obj.hashCode,
          "caseId": obj.caseId,
          "caseNo": obj.caseNo,
          "groupId": obj.groupId,
          "groupName": obj.groupName,
          "corpId": obj.corpId,
          "corpName": obj.corpName,
          "createTime": obj.createTime,
          "createDate": obj.createDate,
          "createBy": obj.createBy.id,
          "updateDate": obj.updateDate,
          "updateBy": obj.updateBy ? obj.updateBy.id : '',
          "delFlag": obj.delFlag,
          "remark": obj.remark,
          "paperId": obj.paperId, 
        });
      }
      await this.updateFileList('jczfReport', addFileList)
    },
    addFile (param) {
      // 上传文件
       if (!this.$store.state.onLine) {
        this.$message.error('当前为离线状态，请联网后再上传文件！')
        return
      }
      this.loading.btn = true
      let formData = new FormData()
      let submitData = {
        id: getNowTime() + randomString(28),
        evidenceId: getNowTime() + randomString(28),
        fileName: param.file.name,
        fileSize: param.file.size,
        caseId: this.corpData.caseId,
        caseNo: this.corpData.caseNo,
        groupId: this.$store.state.curCase.groupId,
        groupName: this.$store.state.curCase.groupName,
        corpId: this.corpData.corpId,
        corpName: this.corpData.corpName,
        createTime: getNowFormatTime(),
        createDate: getNowFormatTime(),
        createBy: JSON.stringify({
          id: this.$store.state.user.userId
        }),
			  updateDate: getNowFormatTime(),
        updateBy: JSON.stringify({
          id: this.$store.state.user.userId
        }),
        paperId: this.paperId,
      }
      formData.append('file', param.file)
      formData.append('jczfReportjson', JSON.stringify(submitData))
      return this.$http.post(
          `/local/jczf/reportUpload?__sid=${this.$store.state.user.userSessId}`,
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
            this.$message.error('文件上传失败，请重新尝试！')
          }
          this.loading.btn = false
        })
        .catch((err) => {
          console.log("上传至服务器请求失败：", err);
          this.loading.btn = false
        });
    },
    deleteFile (index, row) {
      // 删除文件
      if (!this.$store.state.onLine) {
        this.$message.error('当前为离线状态，请联网后再删除！')
        return
      }
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
              `/local/jczf/deleteReportById?id=${row.id}&__sid=${userSessId}`)
            .then(async ({ data }) => {
              if (data.status === "200") {
                this.$message.success('文件删除成功')
                // 因后台数据库不再传输删除的文件，所以本地库也要相应删除
                await this.deleteDatabasePhysics('jczfReport', [row])
                await this.updateFileList()
                await this.getFileList()
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
    async downloadFile (index, row) {
      if (!this.$store.state.onLine) {
        this.$message.error('当前为离线状态，请联网后再下载！')
        return
      }
      this.loading.btn = true
      let {userSessId} = this.$store.state.user
      let url = `${process.env.BASE_URL}/local/download/getfile?filePath=${row.filePath}&__sid=${userSessId}`
      await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
        },
        credentials: "include",
        mode: "cors"
      }).then(async response => {
        if (response.status === 200) {
          const blob = await response.blob();
          saveAs(
            blob,
            row.fileName
          );
          // this.$message.success('文件下载成功！')
        } else {
          this.$message.error('文件下载失败，请重新下载！')
        }
      }).catch((err) => {
        this.$message.error('文件下载失败，请重新下载！')
        console.log('err', err)
      })
      this.loading.btn = false
    },
    async handleSuccess(res, file, fileList) {
      await this.updateFileList()
      await this.getFileList()
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