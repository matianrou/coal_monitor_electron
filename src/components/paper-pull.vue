<!-- 文书拉取 弹窗 -->
<template>
  <el-dialog
    title="文书拉取"
    :close-on-click-modal="false"
    append-to-body
    :visible="visible"
    width="800px"
    top="10vh"
    @close="close">
    <div class="user-tree" v-loading="loading">
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="close">取消</el-button>
      <el-button type="primary" @click="confirm">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import GoDB from "@/utils/godb.min.js";
  export default {
    name: 'PaperPull',
    props: {
      visible: {
        type: Boolean,
        default: false
      },
    },
    data () {
      return {
        loading: false,
        userList: [],
        selectedUser: null, // 选择的用户
        DBName: this.$store.state.DBName
      }
    },
    created () {
      this.init()
    },
    methods: {
      async init () {
        this.loading = true
        // 获取企业列表
        this.loading = false
      },
      close (refresh) {
        // 关闭选择弹窗
        this.selectedUser = null
        this.$emit('close', {page: 'paperPull', refresh})
      },
      selectCompany (user, index) {
        // 选中用户
        // 清空其他企业选中状态
        this.userList.forEach(item => {
          item.active = false
        })
        // 设置选中样式
        let Obj = Object.assign({}, user, {
          active: true
        })
        this.$set(this.userList, index, Obj)
        this.selectedUser = companyObj
      },
      confirm() {
        // 关闭弹窗，并赋值
        // 将临时保存数据结果赋值到数据中
        this.$emit('confirm', this.selectedUser)
        this.close()
      },
    }
  }
</script>

<style lang="scss" scoped>
.el-form-item {
  margin-bottom: 0px;
}
.company-tree {
  border: 1px solid #DCDFE6;
  padding: 10px 20px;
  .select-company-main {
    display: flex;
    height: 400px;
    border: 1px solid #DCDFE6;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    margin-top: 10px;
    .select-company-tree {
      flex: 2;
      border-right: 1px solid #DCDFE6;
    }
    .select-company-list {
      flex: 3;
      height: 100%;
      overflow: auto;
      white-space: nowrap;
      .select-company-list-item {
        display: flex;
        height: 30px;
        align-items: center;
        cursor: pointer;
        padding: 0 10px;
        &:hover {
          background: rgba(83, 168, 255, 0.7);
          color: #fff;
        }
      }
      .active-item {
        background: rgb(83, 168, 255);
        color: #fff;
      }
    }
  }
}
/deep/ .el-dialog__body {
  padding: 0px;
  color: #606266;
  font-size: 14px;
}
/deep/ .el-tree {
  overflow: auto；
}
/deep/ .el-tree-node__content {
  display: block!important;
}
/deep/ .el-tree-node__children {
  overflow: visible!important;
}
/deep/ .el-tree-node__content:hover {
  background: rgba(83, 168, 255, 0.7);
  color: #fff;
}
/deep/ .el-tree-node:focus>.el-tree-node__content {
  background: rgb(83, 168, 255);
  color: #fff;
}
/deep/ .el-tree--highlight-current .el-tree-node.is-current>.el-tree-node__content {
  background: rgb(83, 168, 255);
  color: #fff;
}
</style>