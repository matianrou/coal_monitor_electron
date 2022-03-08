<!-- 云同步 -->
<template>
  <el-dialog
    title="云同步"
    :close-on-click-modal="false"
    :show-close="false"
    append-to-body
    :visible="visible"
    top="5vh"
    width="850px">
    <div class="cloud-upload-main">
      <div class="title-description">
        <span>请选择需要同步至服务器的文书：</span>
      </div>
      <div v-loading="loading" class="upload-paper-list">
        <el-table
          ref="tableData"
          :data="tableData"
          style="width: 100%;"
          height="100%"
          row-key="order"
          border
          :header-cell-style="{background: '#f5f7fa'}"
          @selection-change="handleSelectionChange">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            prop="corpName"
            label="煤矿名称"
            header-align="center"
            align="center">
          </el-table-column>
          <el-table-column
            prop="name"
            header-align="center"
            align="center"
            label="文书类型"
            width="180">
          </el-table-column>
          <el-table-column
            prop="personName"
            header-align="center"
            align="center"
            label="制作人"
            width="150">
          </el-table-column>
          <el-table-column
            prop="createDate"
            header-align="center"
            align="center"
            label="制作时间"
            width="180">
          </el-table-column>
        </el-table>
      </div>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="close">关闭</el-button>
      <el-button type="primary" @click="confirm">同步</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { saveToUpload } from '@/utils/savePaperData'
export default {
  name: "CloudUpload",
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      tableData: [],
      selectedList: [],
      loading: false,
    };
  },
  created() {
    this.getData()
  },
  watch: {
  },
  methods: {
    close () {
      this.$emit('close', {page: 'cloudUpload'})
    },
    async getData () {
      // 获取要上传的文书
      this.loading = true
      let tableData = await this.getDatabase('prepareUpload')
      this.tableData = tableData
      this.loading = false
    },
    handleSelectionChange (val) {
      this.selectedList = val
    },
    confirm () {
      // 上传文书
      this.$confirm('是否确认上传所选文书至服务器？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          dangerouslyUseHTMLString: true,
          type: 'warning'
        }).then(async () => {
          this.loading = true
          for (let i = 0; i < this.selectedList.length; i++) {
            let item = this.selectedList[i]
            await saveToUpload(item.paperId, false, item.caseId)
          }
          this.$message.success('完成云同步')
          await this.getData()
          this.loading = false
        }).catch(() => {})
    }
  },
};
</script>

<style lang="scss" scoped>
.cloud-upload-main {
  margin-top: 10px;
  .title-description {
    font-size: 18px;
    color: #303133;
    height: 30px;
    line-height: 30px;
  }
  .upload-paper-list {
    height: 70vh;
  }
}
</style>