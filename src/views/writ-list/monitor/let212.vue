<!--行政处罚 案件结案 罚款收缴 43-->
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
          <div class="danger-table-main">
            <!-- 罚款收缴表 -->
            <div class="paper-title">
              <span>罚款收缴</span>
              <span>（请填写罚款收缴金额）</span>
            </div>
            <div class="table-main">
              <el-table
                ref="table"
                :data="letData.tableData"
                stripe
                border
                style="width: 100%;"
                height="100%"
                :header-cell-style="{background: '#f5f7fa'}"
                highlight-current-row
                @current-change="handleCurrentChange">
                <el-table-column
                  prop="name"
                  label="文书名称"
                  header-align="center"
                  align="center"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="paperNo"
                  header-align="center"
                  align="center"
                  label="文书编号"
                  width="270">
                </el-table-column>
                <el-table-column
                  prop="punishTypeName"
                  header-align="center"
                  align="center"
                  label="罚款类别"
                  width="80">
                </el-table-column>
                <el-table-column
                  prop="p8Penalty"
                  header-align="center"
                  align="center"
                  label="罚款金额(万元)"
                  width="140">
                </el-table-column>
                <el-table-column
                  header-align="center"
                  align="center"
                  label="收缴金额(万元)"
                  width="140">
                  <template slot-scope="scope">
                    <el-input-number 
                      v-if="scope.row.collectionFineMax > 0"
                      v-model="scope.row.collectionFine"
                      :controls="false" 
                      :min="0" 
                      size="small"
                      :max="scope.row.collectionFineMax"
                      :title="`最多不超过${scope.row.collectionFineMax}(万元)`"
                      style="width: 100px;">
                    </el-input-number>
                    <span v-else>已完成收缴</span>
                  </template>
                </el-table-column>
                <el-table-column
                  header-align="center"
                  align="center"
                  label="加处罚款(万元)"
                  width="140">
                  <template slot-scope="scope">
                    <div :title="lateFeeTitle">
                      <el-input-number 
                        :disabled="lateFeeTitle ? true : false"
                        v-model="scope.row.lateFee"
                        :controls="false" 
                        :min="0" 
                        size="small"
                        style="width: 100px;">
                      </el-input-number>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column
                  header-align="center"
                  align="center"
                  label="收缴日期"
                  width="200">
                  <template slot-scope="scope">
                    <el-date-picker
                      v-model="scope.row.collectionDate"
                      type="date"
                      format="yyyy年MM月dd日"
                      value-format="yyyy年MM月dd日"
                      size="small"
                      style="width: 170px;">
                    </el-date-picker>
                  </template>
                </el-table-column>
                <el-table-column
                  header-align="center"
                  align="center"
                  label="操作"
                  width="120">
                  <template slot-scope="scope">
                    <el-upload
                      action=""
                      :headers="{'content-type': 'application/x-www-form-urlencoded;charset=UTF-8'}"
                      :auto-upload="true"
                      :show-file-list="false"
                      :on-success="handleSuccess"
                      :http-request="(param) => addFile(param, scope)">
                      <el-button 
                        size="small" 
                        :loading="loading.btn"
                        type="primary"
                      >上传回执单</el-button>
                    </el-upload>
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
                  prop="paperNo"
                  label="文书编号"
                  header-align="center"
                  align="center">
                </el-table-column>
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
  </div>
</template>

<script>
import GoDB from "@/utils/godb.min.js";
import associationSelectPaper from "@/components/association-select-paper";
import { getNowFormatTime, getNowTime, getNowDate } from '@/utils/date'
import { randomString, toDecimal2 } from "@/utils/index";
export default {
  name: "Let212",
  mixins: [associationSelectPaper],
  components: {
  },
  data() {
    return {
      letData: {
        tableData: [], // 罚款收缴表
      },
      options: {},
      associationPaper: [],
      fileList: [], // 上传文件表
      loading: {
        main: false,
        btn: false
      },
      selectedP8Paper: {},
      lateFeeTitle: '', // 加处罚款title展示：如果没有制作行政处罚催告书则需要先制作
    };
  },
  methods: {
    async initLetData(selectedPaper) {
      // 创建初始版本
      // 初始创建时拉取行政处罚决定书，列表展示
      let db = new GoDB(this.$store.state.DBName);
	    let wkPaper = db.table('wkPaper');
      let p8PaperList = await wkPaper.findAll(item => item.caseId === this.corpData.caseId && item.paperType === '8' && item.delFlag !== '1') || []
      // 拉取行政决定履行催告书，如果未制作则不能填写加处罚款
      let p39PaperList = await wkPaper.findAll(item => item.caseId === this.corpData.caseId && item.paperType === '39' && item.delFlag !== '1') || []
      if (p39PaperList < 1) {
        this.lateFeeTitle = '请先制作行政决定履行催告书'
      } else {
        this.lateFeeTitle = ''
      }
      // 拉取以往制作的罚款收缴信息，已经完成罚款收缴的行政处罚决定书不能再修改金额，直接展示已完成缴纳，同时未完成的则减去以往已完成罚款收缴的金额
      let p43PaperList = await wkPaper.findAll(item => item.caseId === this.corpData.caseId && item.paperType === '43' && item.delFlag !== '1') || []
      let alreadyFine = {} // 已缴金额对象表示，其中数值按照p8paperId：已缴纳金额合计
      if (p43PaperList.length > 0) {
        // 遍历以往填写的罚款收缴
        p43PaperList.map(item => {
          let paperContent = JSON.parse(item.paperContent)
          if (paperContent.tableData.length > 0) {
            // 遍历罚款收缴内容
            paperContent.tableData.map(p8 => {
              if (alreadyFine[p8.p8Id]) {
                alreadyFine[p8.p8Id] += p8.collectionFine
              } else {
                alreadyFine[p8.p8Id] = p8.collectionFine
              }
            })
          }
        })
      }
      // 处理数据：
      await db.close()
      if (p8PaperList.length > 0) {
        p8PaperList.map(item => {
          let paperContent = JSON.parse(item.paperContent)
          let {cellIdx0, cellIdx1, cellIdx2, cellIdx3, selectedType} = paperContent
          item.paperNo = `${cellIdx0}煤安监${cellIdx1}罚〔${cellIdx2}〕${cellIdx3}号`
          item.punishType = selectedType === '单位' ? '0' : '1'
          item.punishTypeName = selectedType
          // 整理罚款金额
          let p8Penalty = 0
          if (paperContent.DangerTable) {
            let dangerList = paperContent.DangerTable.selectedDangerList || []
            if (dangerList.length > 0) {
              dangerList.map(danger => {
                if (danger.penaltyDescFine) {
                  p8Penalty += Number(danger.penaltyDescFine) 
                }
              })
            }
          }
          item.p8Penalty = p8Penalty / 10000
          item.collectionDate = getNowDate()
          item.collectionFine = 0
          // 收缴金额最大值：罚款金额 - 以往收缴的总和
          item.collectionFineMax = Number(item.p8Penalty) - ((alreadyFine[item.paperId]) || 0)
          item.p8Id = item.paperId,
          item.fineId = getNowTime() + randomString(28)
        })
      }
      this.letData.tableData = p8PaperList
    },
    goBack({ page, data }) {
      // 返回选择企业
      this.$emit("go-back", { page, data });
    },
    async getFileList () {
      // 获取文件列表
      let db = new GoDB(this.$store.state.DBName);
	    let singleReceipt = db.table('singleReceipt');
      let fileList = await singleReceipt.findAll(item => 
        item.paperId === this.paperId 
        && item.p8Id === this.selectedP8Paper.paperId
        && item.delFlag !== '1') || []
      await db.close()
      // 整理数据，添加文书编号
      if (fileList.length > 0) {
        fileList.forEach(item => {
          item.paperNo = this.selectedP8Paper.paperNo
        })
      }
      this.fileList = fileList
    },
    async updateFileList () {
      // 上传文件或删除文件时更新本地库
      let {userId, userSessId} = this.$store.state.user
      let newFileList = []
      // 通过接口获取最新数据
      await this.$http.get(
          `/local/api-fine/getSingleReceipt?userId=${userId}&__sid=${userSessId}`)
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
	    let singleReceipt = db.table('singleReceipt');
      for (let i = 0; i < newFileList.length; i++) {
        let obj = newFileList[i];
        let item = await singleReceipt.get({ id: obj.id });
        if (item) await singleReceipt.delete({ id: obj.id }); //删除
        addFileList.push({
          "id": obj.id,
          "singleId": obj.singleId,
          "name": obj.name,
          "createBy": obj.createBy.id,
          "createDate": obj.createDate,
          "updateBy": obj.updateBy.id,
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
          "p8Id": obj.p8Id,
        });
      }
	    await singleReceipt.addMany(addFileList);
	    await db.close();
    },
    handleCurrentChange (row) {
      this.selectedP8Paper = row
      this.getFileList()
    },
    addFile (param, scope) {
      // // 判断如果当前选中的不是点击行，则切换至当前行
      if (scope.row.id !== this.selectedP8Paper.id) {
        this.$refs.table.setCurrentRow(row);
      }
      // 上传文件
      let formData = new FormData()
      let submitData = {
        fileName: param.file.name,
        singleId: getNowTime() + randomString(28),
        paperId: this.paperId,
        p8Id: this.selectedP8Paper.paperId,
        fileSize: param.file.size,
        caseId: this.corpData.caseId,
        createTime: getNowFormatTime(),
        createBy: JSON.stringify({
          id: this.$store.state.user.userId
        }) ,
        updateBy: JSON.stringify({
          id: this.$store.state.user.userId
        }),
      }
      formData.append('file', param.file)
      formData.append('singleRece', JSON.stringify(submitData))
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
          } else {
            this.$message.error('文件上传失败，请重新尝试！')
            console.log("上传至服务器请求失败：", err);
          }
        })
        .catch((err) => {
          console.log("上传至服务器请求失败：", err);
        });
    },
    async handleSuccess(res, file, fileList) {
      await this.updateFileList()
      await this.getFileList()
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
              `/local/api-fine/deleteById?singleId=${row.singleId}&__sid=${userSessId}`)
            .then(async ({ data }) => {
              if (data.status === "200") {
                this.$message.success('文件删除成功')
                // 因后台数据库不再传输删除的文件，所以本地库也要相应删除
                let db = new GoDB(this.$store.state.DBName);
	              let singleReceipt = db.table('singleReceipt');
                await singleReceipt.delete({ id: row.id }); //删除
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
    downloadFile (index, row) {
      let link = document.createElement('a')
      link.style.display = 'none'
      link.href = `${process.env.FILE_URL}${row.filePath}`
      document.body.appendChild(link)
      link.click()
    },
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
    /deep/ .current-row td  {
      background: rgba(83, 168, 255, 0.8) !important;
      color: #fff;
    }
  }
}
</style>