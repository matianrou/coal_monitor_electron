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
            header-align="center"
            align="center"
            width="50">
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
            width="100">
          </el-table-column>
          <el-table-column
            prop="createTime"
            header-align="center"
            align="center"
            label="制作时间"
            width="160">
          </el-table-column>
          <el-table-column
            prop="operation"
            header-align="center"
            align="center"
            label="执行操作"
            width="80">
            <template slot-scope="scope">
              <span>{{ scope.row.operation === 'save' ? '保存' : '删除'}}</span>
            </template>
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
import { sortbyAsc } from "@/utils/index";
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
      tableData.sort(sortbyAsc('createTime'))
      this.tableData = tableData
      this.loading = false
    },
    handleSelectionChange (val) {
      this.selectedList = val
    },
    confirm () {
      // 上传文书
      if (!this.selectedList || this.selectedList.length === 0) {
        this.$message.error('请选择需要同步的文书！')
        return
      }
      this.$confirm('是否确认上传所选文书至服务器？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          dangerouslyUseHTMLString: true,
          type: 'warning'
        }).then(async () => {
          this.loading = true
          this.selectedList.sort(sortbyAsc('createTime'))
          for (let i = 0; i < this.selectedList.length; i++) {
            let item = this.selectedList[i]
            if (item.operation === 'save') {
              // 执行上传保存操作
              await saveToUpload(item.paperId, false, (item.caseId ? item.caseId : 'opinion-suggestion'))
            } else if (item.operation === 'delete') {
              // 执行上传删除操作
              await this.paperDelete(item.paperId, (item.caseId ? item.caseId : 'opinion-suggestion'))
            }
          }
          this.$message.success('完成云同步')
          await this.getData()
          this.loading = false
        }).catch((err) => {
          console.log('err', err)
        })
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