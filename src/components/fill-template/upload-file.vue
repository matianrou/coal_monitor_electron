<!-- 填写组件 上传文件 -->
<template>
  <div class="menu-main">
    <!-- 标题 -->
    <div class="menu-title">
      <span>附件上传</span>
    </div>
    <div v-if="options.canEdit" style="margin-bottom: 10px; text-align: right;">
      <el-upload
        ref="upload"
        action=""
        :headers="{'content-type': 'application/x-www-form-urlencoded;charset=UTF-8'}"
        :auto-upload="true"
        :show-file-list="false"
        :on-success="handleSuccess"
        :http-request="addFile">
        <el-button 
          :disabled="!$store.state.onLine"
          type="primary"
          size="small" 
          :loading="loading.btn"
        >上传附件</el-button>
      </el-upload>
    </div>
    <!-- 表格 -->
    <div class="menu-table-main">
      <el-table
        :data="dataForm.tempValue.tableData"
        ref="table"
        border
        stripe
        height="60vh"
        style="width: 100%">
        <el-table-column
          header-align="center"
          align="center"
          width="80"
          label="序号">
          <template slot-scope="scope">
            <span>{{ scope.$index + 1 }}</span>
          </template>
        </el-table-column>
        <el-table-column
          v-for="(colItem, colIndex) in colList"
          :key="colIndex"
          :label="colItem.label"
          :header-align="colItem.headerAlign ? colItem.headerAlign : 'center'"
          :align="colItem.align ? colItem.align : 'center'"
          :width="colItem.width ? colItem.width : 'auto'"
          :min-width="colItem.minWidth ? colItem.minWidth : '300'"
          :fixed="colItem.fixed">
          <template slot-scope="scope">
            <span>{{scope.row[colItem.prop]}}</span>
          </template>
        </el-table-column>
        <el-table-column
          fixed="right"
          header-align="center"
          align="center"
          width="100"
          label="操作">
          <template slot-scope="scope">
            <el-button
              :disabled="!$store.state.onLine"
              :loading="loading.btn"
              type="text"
              @click="downloadFile(scope.$index, scope.row)"
            >下载</el-button>
            <el-button 
              v-if="options.canEdit"
              :disabled="!$store.state.onLine"
              :loading="loading.btn"
              type="text" 
              size="small" 
              @click="deleteFile(scope.$index, scope.row)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { getNowFormatTime, getNowTime } from '@/utils/date'
import { randomString } from "@/utils/index";
import { saveAs } from 'file-saver'
export default {
  name: "UploadFile",
  props: {
    value: {
      type: Object,
      default: () => {
        return {
          tableData: [],
        }
      }
    },
    options: {
      type: Object,
      default: () => {
        return {
          canEdit: false,
          paperId: null
        }
      }
    }
  },
  data() {
    return {
      dataForm: {
        tempValue: {
          tableData: [],
        }
      },
      loading: {
        main: false,
        btn: false
      }
    };
  },
  computed: {
    colList () {
      let colList = [
        {
          label: '文件名',
          prop: 'fileName',
        },
        {
          label: '添加日期',
          prop: 'createDate',
          width: '180'
        },
      ]
      return colList
    }
  },
  created() {
    this.init()
  },
  methods: {
    init () {
      // this.dataForm.tempValue = this.value
      this.getFileList()
      if (!this.$store.state.onLine) {
        this.$message.error('当前为离线登录，请联网后才能上传、下载或删除文件！')
        return
      }
    },
    async getFileList () {
      // 获取文件列表
	    let paperAttachment = await this.getDatabase('paperAttachment');
      let list = JSON.parse(JSON.stringify(paperAttachment.filter(item => item.delFlag !== '1') || []))
      this.dataForm.tempValue.tableData = JSON.parse(JSON.stringify(paperAttachment.filter(item => item.paperId === this.options.paperId && item.delFlag !== '1') || []))
    },
    async updateFileList () {
      // 上传文件或删除文件时更新本地库
      let {userId, userSessId} = this.$store.state.user
      let newFileList = []
      // 通过接口获取最新数据
      await this.$http.get(
          `/local/api-attachment/getPaperAttachment?userId=${userId}&__sid=${userSessId}`)
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
          "attachmentId": obj.attachmentId,
          "paperId": obj.paperId,
          "fileSize": obj.fileSize,
          "fileType": obj.fileType,
          "fileHash": obj.fileHash,
          "fileName": obj.fileName,
          "filePath": obj.filePath,
          "groupId": obj.groupId,
          "groupName": obj.groupName,
          "createBy": obj.createBy.id,
          "createDate": obj.createDate,
          "updateBy": obj.updateBy ? obj.updateBy.id : '',
          "updateDate": obj.updateDate,
          "remark": obj.remark,
          "delFlag": obj.delFlag,
        });
      }
      await this.updateDatabase('paperAttachment', addFileList)
    },
    addFile (param) {
      // 上传文件
      if (!this.$store.state.onLine) {
        this.$message.error('当前为离线登录，请联网后再上传文件！')
        return
      }
      this.loading.btn = true
      let formData = new FormData()
      let submitData = {
        attachmentId: getNowTime() + randomString(28),
        paperId: this.options.paperId,
        fileName: param.file.name,
        fileSize: param.file.size,
        createDate: getNowFormatTime(),
        groupId: this.$store.state.user.userGroupId,
        groupName: this.$store.state.user.userGroupName,
      }
      formData.append('file', param.file)
      formData.append('paperAttach', JSON.stringify(submitData))
      return this.$http.post(
          `/local/api-attachment/uploadAttachment?__sid=${this.$store.state.user.userSessId}`,
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
        }).catch((err) => {
          this.$message.error('文件上传失败，请重新尝试！')
          console.log("上传至服务器请求失败：", err);
          this.loading.btn = false
        });
    },
    deleteFile (index, row) {
      // 删除文件
      if (!this.$store.state.onLine) {
        this.$message.error('当前为离线登录，请联网后再删除！')
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
              `/local/api-attachment/deleteByAttachmentId?attachmentId=${row.attachmentId}&__sid=${userSessId}`)
            .then(async ({ data }) => {
              if (data.status === "200") {
                this.$message.success('文件删除成功')
                // 因后台数据库不再传输删除的文件，所以本地库也要相应删除
                await this.deleteDatabasePhysics('paperAttachment', [row])
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
        this.$message.error('当前为离线登录，请联网后再下载！')
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
.menu-main {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  .menu-title {
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    text-align: center;
    color: #303133;
  }
  .menu-table-main {
    flex: 1;
  }
}
</style>