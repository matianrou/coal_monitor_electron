<!-- 弹窗选择企业 -->
<template>
  <el-dialog
    title="选择企业"
    :close-on-click-modal="false"
    append-to-body
    :visible="visible"
    width="500px"
    @close="close">
    <div class="company-tree" v-loading="loading">
      <el-tree
        ref="companyTree"
        node-key="fid"
        :data="companyList"
        :props="{
          children: 'children',
          label: 'jgqc'
        }"
        accordion
        :expand-on-click-node="true"
        :highlight-current="true"
        style="height: 300px; padding: 0px 10px;"
        :default-expanded-keys="defaultExpandedKey"
        @node-click="selectCompany">
      </el-tree>
    </div>
    <el-row class="select-depart-row">
      <span>已选择：{{ selectedDepartTem.jgqc }}
        <i
          v-if="selectedDepartTem.jgqc"
          class="el-icon-close"
          title="清空已选企业"
          @click="clearSelect">
        </i>
      </span>
    </el-row>
    <span slot="footer" class="dialog-footer">
      <el-button @click="close">取消</el-button>
      <el-button type="primary" @click="confirm">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import GoDB from "@/utils/godb.min.js";
  export default {
    name: 'selectCompanyDialog',
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      companyId: { // 已选中的机构
        type: String,
        default: null
      },
    },
    data () {
      return {
        loading: false,
        selectedDepartTem: {}, // 临时选择的机构
        defaultExpandedKey: [],
        companyList: [],
      }
    },
    created () {
      this.init()
    },
    methods: {
      async init () {
        this.loading = true
        // 获取企业列表
        await this.getCompanyList()
        // 回显
        this.setSearchDepart()
        // 高亮及展开
        this.setTreeKey()
        this.loading = false
      },
      // 获取企业列表
      async getCompanyList() {
        // 获取企业数据
        const db = new GoDB("CoalDB");
        const corpInfo = db.table("orgInfo"); // 机构
        console.log('userAreaId', this.$store.state.user.userAreaId)
        let corpList = await corpInfo.findAll(item => item.groupId === this.$store.state.user.userGroupId && item.delFlag === '0')
        console.log('corpList', corpList)
        await db.close();

      },
      setTreeKey () {
        // 设置高亮及展开
        if (this.companyId) {
          // 如果有选中的单位，回显，则高亮选中并展开
          this.$refs.companyTree.setCurrentKey(this.companyId)
          this.$set(this.defaultExpandedKey, '0', this.companyId)
        } else {
          if (this.companyList.length > 0) {
            // 如果没有选中单位，则默认展开第一个机构，但不高亮显示
            // this.$refs.companyTree.setCurrentKey(this.companyList[0].fid)
            this.$set(this.defaultExpandedKey, '0', this.companyList[0].fid)
          }
        }
      },
      setSearchDepart () {
        // 设置回显
        if (this.companyId) {
          this.searchDepart(this.companyList, this.companyId)
        } else {
          this.selectedDepartTem = {
            fid: '',
            jgqc: '',
            level: null
          }
        }
      },
      searchDepart(list, depart) {
        // 用于回显departOption和departSelect
        for (let i = 0; i < list.length; i++ ) {
          if (list[i].fid === depart) {
            this.selectedDepartTem = list[i]
          } else {
            this.searchDepart(list[i].children, depart)
          }
        }
      },
      selectCompany(data, node, ele) {
        // 临时保存数据
        this.selectedDepartTem = JSON.parse(JSON.stringify(data))
        this.$nextTick(() => {
          // 使树筛选时选中的节点高亮显示
          this.$refs.companyTree.setCurrentKey(data.fid)
        })
      },
      close () {
        // 关闭选择弹窗
        this.selectedDepartTem = {}
        this.$emit('close')
      },
      confirm() {
        // 关闭机构弹窗，并赋值
        // 将临时保存数据结果赋值到数据中
        this.$emit('confirm', this.selectedDepartTem)
      },
      clearSelect () {
        // 清空选择
        this.$set(this, 'selectedDepartTem', {})
        this.$nextTick(() => {
          this.$refs.companyTree.setCurrentKey(null)
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
.company-tree {
  border: 1px solid #DCDFE6;
}
.select-depart-row {
  padding: 0px 30px;
  margin-top: 30px;
  font-size: 16px;
  color: #303133;
  i {
    color: #409EFF;
    cursor: pointer;
    &:hover {
      color: rgb(140, 197, 255);
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
/deep/ .el-tree--highlight-current .el-tree-node.is-current>.el-tree-node__content {
  background-color: #0060a6;
  color: #fff;
}
</style>