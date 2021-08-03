<!-- 填写组件 大文本框textarea -->
<template>
  <div style="width: 100%;">
    <el-input
      v-model="dataForm.tempValue"
      type="textarea"
      :autosize="{ minRows: 6, maxRows: 20}"
      :placeholder="placeholder">
    </el-input>
  </div>
</template>

<script>
export default {
  name: "TextareaItem",
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