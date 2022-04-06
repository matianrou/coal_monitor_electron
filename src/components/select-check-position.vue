<!-- 弹窗选择检查地点 -->
<template>
  <el-dialog
    :title="title ? title : '选择检查地点'"
    :close-on-click-modal="false"
    append-to-body
    :visible="visible"
    width="600px"
    top="10vh"
    @close="close"
  >
    <div v-loading="loading" class="dialog-max">
      <check-position-item
        ref="checkPositionItem"
        :corp-data="corpData"
        :value="selectedCheckPosition"
      ></check-position-item>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="close">取消</el-button>
      <el-button type="primary" @click="confirm">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import checkPositionItem from '@/components/fill-template/check-position-item'
export default {
  name: "selectCheckPositionDialog",
  components: {
    checkPositionItem
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: null
    },
    corpData: {
      type: Object,
      default: () => {}
    },
    selectedCheckPosition: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      loading: false,
    };
  },
  created() {
  },
  methods: {
    close(refresh) {
      // 关闭选择检查地点弹窗
      this.$emit('close', {page: 'selectCheckPosition', refresh})
    },
    confirm() {
      // 确定选择
      this.$emit('confirm-check-position', this.$refs.checkPositionItem.dataForm.tempValue)
      this.close()
    }
  },
};
</script>

<style lang="scss" scoped>
.dialog-max {
  height: calc(100vh - 10vh - 200px);
  overflow: auto;
}
</style>