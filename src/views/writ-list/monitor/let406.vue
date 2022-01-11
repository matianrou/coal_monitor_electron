<!-- 其他 证据上传 影音证据 21 -->
<template>
  <div style="width: 100%; height: 100%">
    <let-main
      ref="letMain"
      :corp-data="corpData"
      :doc-data="docData"
      :let-data="letData"
      :paper-data="paperData"
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
                  :on-success="handleSuccess"
                  :http-request="addFile">
                  <el-button :disabled="!navigator.onLine" size="small" :loading="loading.btn">上传证据</el-button>
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
                      :disabled="!navigator.onLine"
                      :loading="loading.btn"
                      type="text"
                      @click="downloadFile(scope.$index, scope.row)"
                    >下载</el-button>
                    <el-button
                      :disabled="!navigator.onLine"
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
import { saveAs } from 'file-saver'
export default {
  name: "Let406",
  mixins: [associationSelectPaper],
  components: {
  },
  data() {
    return {
      navigator: navigator,
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
      if (!navigator.onLine) {
        this.$message.warning('当前无网络，请联网后才能上传、下载或删除文件！')
        return
      }
      // 获取文件列表
      let db = new GoDB(this.$store.state.DBName);
	    let imageEvidence = db.table('imageEvidence');
      this.fileList = await imageEvidence.findAll(item => item.paperId === this.paperId && item.delFlag !== '1')
      await db.close()
    },
    async updateFileList () {
      // 上传文件或删除文件时更新本地库
      let {userId, userSessId} = this.$store.state.user
      let newFileList = []
      // 通过接口获取最新数据
      await this.$http.get(
          `/local/jczf/getImageEvidencePC?userId=${userId}&__sid=${userSessId}`)
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
      let db = new GoDB(this.$store.state.DBName);
	    let imageEvidence = db.table('imageEvidence');
      for (let i = 0; i < newFileList.length; i++) {
        let obj = newFileList[i];
        let item = await imageEvidence.get({ id: obj.id });
        if (item) await imageEvidence.delete({ id: obj.id }); //删除
        addFileList.push({
          "id": obj.id,
          "evidenceId": obj.evidenceId,
          "name": obj.name,
          "createBy": obj.createBy.id,
          "createDate": obj.createDate,
          "updateBy":obj.updateBy ? obj.updateBy.id : '',
          "updateDate": obj.updateDate,
          "delFlag": obj.delFlag,
          "remark": obj.remark,
          "filePath": obj.filePath,
          "caseId": obj.caseId,
          "caseNo": obj.caseNo,
          "evidenceType": obj.evidenceType,
          "groupId": obj.groupId,
          "groupName": obj.groupName,
          "corpId": obj.corpId,
          "corpName": obj.corpName,
          "paperId": obj.paperId,
          "evidenceDesc": obj.evidenceDesc,
          "createTime": obj.createTime,
          "fileName": obj.fileName,
          "fileSize": obj.fileSize,
          "hashCode": obj.hashCode,
        });
      }
	    await imageEvidence.addMany(addFileList);
	    await db.close();
    },
    addFile (param) {
      // 上传文件
      this.loading.btn = true
      let formData = new FormData()
      let submitData = {
        paperId: this.paperId,
        caseId: this.corpData.caseId,
        fileName: param.file.name,
        fileSize: param.file.size,
        groupId: this.$store.state.curCase.groupId,
        groupName: this.$store.state.curCase.groupName,
        corpId: this.corpData.corpId,
        corpName: this.corpData.corpName,
        createTime: getNowFormatTime(),
        createDate: getNowFormatTime(),
        evidenceId: getNowTime() + randomString(28),
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
            .then(async ({ data }) => {
              if (data.status === "200") {
                this.$message.success('文件删除成功')
                // 因后台数据库不再传输删除的文件，所以本地库也要相应删除
                let db = new GoDB(this.$store.state.DBName);
	              let imageEvidence = db.table('imageEvidence');
                await imageEvidence.delete({ id: row.id }); //删除
	              await db.close();
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
          this.$message.success('文件下载成功！')
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