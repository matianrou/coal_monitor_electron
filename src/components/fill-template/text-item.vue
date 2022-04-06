<!-- 填写组件 简单input框 -->
<template>
  <div style="width: 100%;">
    <el-input
      v-model="dataForm.tempValue"
      :placeholder="placeholder"
      @change="changeValue">
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
    },
    options: {
      type: Object,
      default: () => {}
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
  watch: {
    value(val) {
      this.dataForm.tempValue = val || ''
    }
  },
  methods: {
    changeValue(val) {
      // this.$parent.handleSave(true)
    }
  },
};
</script>

<style lang="scss" scoped>
</style>