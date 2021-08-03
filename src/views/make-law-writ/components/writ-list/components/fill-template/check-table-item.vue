<!-- 填写组件 检查分工明细表 -->
<template>
  <div style="width: 100%;">
    123
  </div>
</template>

<script>
export default {
  name: "CheckTableItem",
  props: {
    value: {
      type: Array,
      default: () => []
    },
  },
  data() {
    return {
      dataForm: {
        tempValue: null
      }
    };
  },
  created() {
    this.dataForm.tempValue = this.value
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.el-input {
}
</style>