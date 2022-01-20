<!-- 弹窗选择单位 -->
<template>
  <el-dialog
    :title="title ? title : '选择单位'"
    :close-on-click-modal="false"
    append-to-body
    :visible="visible"
    width="400px"
    @close="close"
  >
    <div style="height: 200px;">
      <el-select 
        v-model="orgData.id" 
        filterable 
        placeholder="（可输入关键字筛选）"
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
        style="width: 250px; margin-top: 10px;"
      ></el-input>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="close">取消</el-button>
      <el-button type="primary" @click="confirm">确定</el-button>
      <el-button type="primary" @click="batchConfirm">批量设置</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { getAllProvinceOrg } from '@/utils/index'
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
      let orgList = await getAllProvinceOrg(this.$store.state.user.userGroupId)
      orgList.push({
        name: '其他部门名称',
        no: '1'
      })
      this.orgList = orgList
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
      if (this.orgData.id === '1' && !this.orgData.name) {
        this.$message.error('请输入地方部门名称')
      } else {
        this.$emit("confirm-org", this.orgData);
      }
    },
    batchConfirm() {
      // 批量设置
      console.log('orgData', this.orgData)
      this.$confirm(`是否确认将隐患整改列表中所有复查单位均设置为${this.orgData.name}？`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          dangerouslyUseHTMLString: true,
          type: 'warning'
        }).then(() => {
          this.$emit('batch-confirm-org', this.orgData)
        }).catch(() => {})
    }
  },
};
</script>

<style lang="scss" scoped>
</style>