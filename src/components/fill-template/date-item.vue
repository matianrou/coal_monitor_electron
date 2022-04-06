<!-- 填写组件 日期选择 -->
<template>
  <div style="width: 100%;">
    <el-date-picker
      v-model="dataForm.tempValue"
      type="date"
      format="yyyy年M月d日"
      value-format="yyyy年M月d日"
      :placeholder="placeholder"
      @change="changeValue">
    </el-date-picker>
  </div>
</template>

<script>
export default {
  name: "DateItem",
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
    value(val) {
      this.dataForm.tempValue = val
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