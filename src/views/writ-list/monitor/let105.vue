<!-- 现场检查 复查 隐患整改 44 -->
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
          <div class="danger-table-main">
            <!-- 隐患整改表 -->
            <div class="paper-title">
              <span>隐患整改</span>
            </div>
            <div class="table-main">
              <el-table
                :data="letData.DangerTable && letData.DangerTable.selectedDangerList"
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
                  prop="itemContent"
                  label="违法行为描述"
                  header-align="center"
                  align="center">
                </el-table-column>
                <el-table-column
                  header-align="center"
                  align="center"
                  label="是否完成"
                  width="120">
                  <template slot="header">
                    <el-checkbox 
                      v-model="isCorrected" 
                      true-label="1" 
                      false-label="0" 
                      title="点击可批量设置是否完成"
                      @change="batchCorrected">
                      是否完成
                    </el-checkbox>
                  </template>
                  <template slot-scope="scope">
                    <el-checkbox v-model="scope.row.dangerCorrected" true-label="1" false-label="0">{{scope.row.dangerCorrected === '1' ? '已完成' : '未完成' }}</el-checkbox>
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
                  :on-success="handleSuccess"
                  :http-request="addFile">
                  <el-button :disabled="!$store.state.onLine" size="small" :loading="loading.btn">上传文件</el-button>
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
    <!-- 关联文书选择 -->
    <select-paper
      v-if="visible.selectPaper"
      :visible="visible.selectPaper"
      :paper-list="paperList"
      @close="closeDialog"
      @confirm-paper="confirmPaper"
    ></select-paper>
    <select-org
      :visible="selectOrgVisible"
      @confirm-org="confirmOrg"
      @batch-confirm-org="batchConfirmOrg"
      @close="closeSelectOrg"
    ></select-org>
  </div>
</template>

<script>
import associationSelectPaper from "@/components/association-select-paper";
import selectOrg from '@/components/select-org'
import { getNowFormatTime, getNowTime} from '@/utils/date'
import { randomString } from "@/utils/index";
import { setNewDanger } from '@/utils/setInitPaperData'
import { saveAs } from 'file-saver'

export default {
  name: "Let105",
  mixins: [associationSelectPaper],
  components: {
    selectOrg
  },
  data() {
    return {
      letData: {
        DangerTable: {},
        associationPaperId: {},
        associationPaperOrder: []
      },
      options: {},
      fileList: [], // 上传文件表
      associationPaper: ['1'],
      selectOrgVisible: false, // 选择复查单位
      selectedRowIndex: null, // 选中的复查单位的行索引
      loading: {
        main: false,
        btn: false
      },
      isCorrected: '0'
    };
  },
  methods: {
    async initLetData(selectedPaper) {
      // 创建初始版本
      let let1DataPaperContent = JSON.parse(selectedPaper.let1Data.paperContent)
      let DangerTable = let1DataPaperContent.DangerTable ? 
        setNewDanger(selectedPaper.let1Data, let1DataPaperContent.DangerTable)
        : {}  
      let associationPaperId = Object.assign({}, this.setAssociationPaperId(let1DataPaperContent.associationPaperId), {
        paper1Id: selectedPaper.let1Data.paperId,
      }) 
      let associationPaperOrder = this.setAssociationPaperOrder(let1DataPaperContent.associationPaperOrder)
      associationPaperOrder.push('1')
      this.letData = Object.assign({}, let1DataPaperContent, {
        DangerTable,
        associationPaperId,
        associationPaperOrder
      })
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
      this.$set(this.letData.DangerTable.selectedDangerList, this.selectedRowIndex, Object.assign(this.letData.DangerTable.selectedDangerList[this.selectedRowIndex], {
        reviewUnitName,
        reviewUnitId
      }))
      this.selectOrgVisible = false
    },
    batchConfirmOrg (data) {
      let reviewUnitName = data.name
      let reviewUnitId = data.id
      let selectedDangerList = this.letData.DangerTable.selectedDangerList
      for (let i = 0; i < selectedDangerList.length; i++) {
        selectedDangerList[i].reviewUnitName = reviewUnitName
        selectedDangerList[i].reviewUnitId = reviewUnitId
      }
      this.$set(this.letData.DangerTable, 'selectedDangerList', selectedDangerList)
      this.selectOrgVisible = false
    },
    async getFileList () {
      if (!this.$store.state.onLine) {
        this.$message.warning('当前为离线登录，请联网后才能上传、下载或删除文件！')
        return
      }
      // 获取文件列表
	    let localReview = await this.getDatabase('localReview');
      this.fileList = JSON.parse(JSON.stringify(localReview.filter(item => item.paperId === this.paperId && item.delFlag !== '1') || []))
    },
    async updateFileList () {
      // 上传文件或删除文件时更新本地库
      let {userId, userSessId} = this.$store.state.user
      let newFileList = []
      // 通过接口获取最新数据
      await this.$http.get(
          `/local/api-review/getLocalReview?userId=${userId}&__sid=${userSessId}`)
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
          "reviewId": obj.reviewId,
          "name": obj.name,
          "createBy": obj.createBy.id,
          "createDate": obj.createDate,
          "updateBy": obj.updateBy ? obj.updateBy.id : '',
          "updateDate": obj.updateDate,
          "delFlag": obj.delFlag,
          "remark": obj.remark,
          "caseId": obj.caseId,
          "fileName": obj.fileName,
          "filePath": obj.filePath,
          "createTime": obj.createTime,
          "fileSize": obj.fileSize,
          "hashCode": obj.hashCode,
          "paperId": obj.paperId,
        });
      }
      await this.updateDatabase('localReview', addFileList)
    },
    addFile (param) {
      // 添加文件
      if (!this.$store.state.onLine) {
        this.$message.error('当前为离线登录，请联网后再上传文件！')
        return
      }
      this.loading.btn = true
      let formData = new FormData()
      let submitData = {
        paperId: this.paperId,
        caseId: this.corpData.caseId,
        fileName: param.file.name,
        fileSize: param.file.size,
        createTime: getNowFormatTime(),
        reviewId: getNowTime() + randomString(28),
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
      if (!this.$store.state.onLine) {
        this.$message.error('当前为离线登录，请联网后再删除！')
        return
      }
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
            .then(async ({ data }) => {
              if (data.status === "200") {
                this.$message.success('文件删除成功')
                // 因后台数据库不再传输删除的文件，所以本地库也要相应删除
                await this.deleteDatabasePhysics('localReview', [row])
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
    },
    batchCorrected () {
      // 批量设置是否完成
      let selectedDangerList = this.letData.DangerTable.selectedDangerList
      for (let i = 0; i < selectedDangerList.length; i++) {
        selectedDangerList[i].dangerCorrected = this.isCorrected
      }
      this.$set(this.letData.DangerTable, 'selectedDangerList', selectedDangerList)
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