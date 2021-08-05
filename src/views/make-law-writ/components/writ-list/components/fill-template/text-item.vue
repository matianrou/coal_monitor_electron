<!-- 填写组件 简单input框 -->
<template>
  <div style="width: 100%;">
    <el-input
      v-model="dataForm.tempValue"
      :placeholder="placeholder">
    </el-input>
  </div>
</template>

<script>
export default {
  name: "TextItem",
  props: {
    value: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: ''
    }
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