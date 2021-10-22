<!-- 文书拉取 弹窗 -->
<template>
  <el-dialog
    title="文书拉取"
    :close-on-click-modal="false"
    append-to-body
    :visible="visible"
    width="800px"
    top="5vh"
    @close="close">
    <div class="user-tree" v-loading="loading">
      <div class="selected-all-users">
        <!-- 是否显示全省用户 -->
        <el-checkbox v-model="allUser" @change="handleChangeUser">是否显示全省用户</el-checkbox>
      </div>
      <div class="content-div-main">
        <div class="content-div-left" :style="{ width: divWidth + 'px' }">
          <!-- 左侧 用户列表 -->
          <div
            v-for="(item, index) in userList"
            :key="index"
            class="user-list-row-main">
            <div @click="handleSelectUser(item)" :class="item.active ? 'active-item' : ''">
              <img src="@/components/assets/image/customer_list_fill.png" />
              <span>{{ `[${item.officeName}] ` }}</span>
              <span style="color: #303133;">{{ item.name }}</span>
              <span>{{ item.userNumber ? '（号：' + item.userNumber + '）' : '' }}</span>
            </div>
          </div>
        </div>
        <adjustable-div
          @width-change="widthChange">
        </adjustable-div>
        <div class="content-div-right">
          <!-- 右侧 用户的检查列表 -->
        </div>
      </div>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="close">取消</el-button>
      <el-button type="primary" @click="confirm">拉取</el-button>
    </span>
  </el-dialog>
</template>

<script>
  import GoDB from "@/utils/godb.min.js";
  import adjustableDiv from '@/components/adjustable-div'
  export default {
    name: 'PaperPull',
    props: {
      visible: {
        type: Boolean,
        default: false
      },
    },
    components: {
      adjustableDiv
    },
    data () {
      return {
        loading: false,
        DBName: this.$store.state.DBName,
        allUser: false, // 是否显示全省用户
        divWidth: 300, // 用户部分div基础宽度
        userList: [],
        selectedUser: {}, // 点击用户列表选择的用户
      }
    },
    created () {
      this.init()
    },
    methods: {
      async init () {
        // 获取用户列表
        await this.getUsers()
      },
      async getUsers () {
        this.loading = true
        const db = new GoDB(this.DBName)
        const person = db.table("person") // 用户
        let personList = []
        let userId = this.$store.state.user.userId
        let userGroupId = this.$store.state.user.userGroupId
        if (this.allUser) {
          // 查询全省用户，排除自己
          personList = await person.findAll((item) => {
            return item.delFlag == "0" && item.no !== userId;
          });
        } else {
          // 查询当前用户当前机构的所有用户，排除自己
          personList = await person.findAll((item) => {
            return item.delFlag == "0" && item.officeId === userGroupId && item.no !== userId;
          });
        }
        console.log('personList', personList)
        personList.forEach(item => {
          // 默认为都不选中
          item.active = false
        })
        this.userList = personList
        await db.close();
        this.loading = false
      },
      widthChange (width) {
        this.divWidth -= width;
        if (this.divWidth < 50) {
          this.divWidth = 50;
        }
        if (this.divWidth > 800) {
          this.divWidth = 800;
        }
      },
      handleChangeUser () {
        this.getUsers()
      },
      handleSelectUser (item) {
        // 点击选择用户
        console.log('item', item)
        item.active = true
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
.user-tree {
  border: 1px solid #DCDFE6;
  padding: 10px 20px;
  .selected-all-users {
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: right;
  }
  .content-div-main {
    height: calc(100vh - 5vh - 5vh - 140px - 30px);
    display: flex;
    border: 1px solid #DCDFE6;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    margin-bottom: 10px;
    .content-div-left {
      height: 100%;
      padding: 10px 10px;
      overflow: auto;
      white-space: nowrap;
      .user-list-row-main {
        height: 30px;
        display: flex;
        align-items: center;
        cursor: pointer;
        img {
          height: 20px;
          width: 20px;
          vertical-align: bottom;
        }
        span {
          color: #909399;
          font-size: 16px;
        }
      }
      .user-list-row-main:hover {
        background: rgba(83, 168, 255, 0.7);
        span {
          color: #fff !important;
        }
      }
    }
    .content-div-right {
      height: 100%;
      overflow: auto;
      white-space: nowrap;
    }
    .active-item {
      background: rgb(83, 168, 255);
      span {
        color: #fff !important;
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