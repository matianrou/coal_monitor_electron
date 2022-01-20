<!-- 选择要删除的文书 -->
<template>
  <div style="width: 100%; height: 100%">
    <el-dialog
      title="可删除的文书"
      :close-on-click-modal="false"
      append-to-body
      :visible="visible"
      :show-close="false"
    > 
      <div style="margin-bottom: 10px;">
        <span>请选择删除文书：</span>
      </div>
      <el-table
        ref="table"
        :data="paperList"
        style="width: 100%;"
        height="500px"
        row-key="order"
        border
        :header-cell-style="{background: '#f5f7fa'}"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="name"
          label="文书"
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop="personName"
          label="制作人"
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop="createDate"
          header-align="center"
          align="center"
          label="制作日期"
          width="180">
        </el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button @click="close">取消</el-button>
        <el-button type="primary" @click="confirm">删除</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "SelectDeletePaper",
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    paperList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      selectedList: []
    };
  },
  methods: {
    close(refresh = false) {
      this.$emit('close', {page: 'selectDelPaper', refresh})
    },
    confirm() {
      if (this.selectedList.length > 0) {
        this.$confirm(`是否确认删除已选中的文书?`, '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            dangerouslyUseHTMLString: true,
            type: 'warning'
          }).then(() => {
            this.$emit('confirm', this.selectedList)
          }).catch(() => {
          })
      } else {
        this.$message.error('请选择需要删除的文书！')
      }
    },
    handleSelectionChange (val) {
      this.selectedList = val
    }
  },
};
</script>

<style lang="scss" scoped>
</style>