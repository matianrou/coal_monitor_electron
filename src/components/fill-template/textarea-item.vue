<!-- 填写组件 大文本框textarea -->
<template>
  <div style="width: 100%;">
    <el-input
      v-model="dataForm.tempValue"
      type="textarea"
      :placeholder="placeholder"
      :rows="33"
      @change="changeValue">
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
  watch: {
    value (val) {
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