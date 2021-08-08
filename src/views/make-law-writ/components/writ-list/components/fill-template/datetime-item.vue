<!-- 填写组件 日期时间选择 -->
<template>
  <div style="width: 100%;">
    <el-date-picker
      v-model="dataForm.tempValue"
      type="datetime"
      format="yyyy年MM月dd日HH时mm分ss秒"
      value-format="yyyy年MM月dd日HH时mm分ss秒"
      :placeholder="placeholder">
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
  methods: {
  },
};
</script>

<style lang="scss" scoped>
</style>