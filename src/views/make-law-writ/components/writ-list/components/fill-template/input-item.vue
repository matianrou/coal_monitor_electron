<!-- 填写组件 简单input框 -->
<template>
  <div style="width: 100%;">
    <el-input
      v-model="tempValue"
      :placeholder="placeholder">
    </el-input>
  </div>
</template>

<script>
export default {
  name: "InputItem",
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
      tempValue: null
    };
  },
  created() {
    this.tempValue = this.value
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
</style>