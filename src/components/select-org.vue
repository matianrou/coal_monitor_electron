<!-- 弹窗选择单位 -->
<template>
  <el-dialog
    :title="title ? title : '选择单位'"
    :close-on-click-modal="false"
    append-to-body
    :visible="visible"
    width="300px"
    @close="close"
  >
    <div>
      <el-select 
        v-model="orgData.id" 
        filterable 
        placeholder="请选择单位"
        size="small"
        @change="selectedOrg">
        <el-option
          v-for="item in orgList"
          :key="item.no"
          :label="item.name"
          :value="item.no">
        </el-option>
      </el-select>
      <el-input
        v-if="orgData.id === '1'"
        v-model="orgData.name"
        placeholder="请输入地方部门名称"
        size="small"
        style="width: 250px; margin-top: 10px;"
      ></el-input>
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
  name: "SelectPaperDialog",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    title: {
      // 弹窗标题
      type: String,
      default: null,
    },
    paperList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      orgData: {
        id: '',
        name: ''
      }, // 选择的单位
      orgList: [], // 复查单位列表
    };
  },
  created() {
    this.getOrgList()
  },
  methods: {
    async getOrgList () {
      // 获取复查单位列表
      let db = new GoDB(this.$store.state.DBName);
      let orgInfo = db.table('orgInfo')
      this.orgList = await orgInfo.findAll(item => item.delFlag !== '1')
      this.orgList.push({
        name: '其他部门名称',
        no: '1'
      })
    },
    selectedOrg(val) {
      this.orgList.map(item => {
        if (item.no === val && val !== '1') {
          this.orgData.name = item.name
        }
      })
    },
    close(refresh) {
      this.$emit("close", { page: "selectOrg", refresh });
    },
    confirm() {
      // 关闭弹窗，并赋值
      this.$emit("confirm-org", this.orgData);
    },
  },
};
</script>

<style lang="scss" scoped>
/deep/ .el-dialog__body {
  padding: 10px 20px;
}
</style>