<!-- 填写组件 日期时间选择 -->
<template>
  <div style="width: 100%;">
    <el-date-picker
      v-model="dataForm.tempValue"
      type="datetime"
      format="yyyy年M月d日H时m分s秒"
      value-format="yyyy年M月d日H时m分s秒"
      :placeholder="placeholder"
      @change="changeValue">
    </el-date-picker>
  </div>
</template>

<script>
export default {
  name: "DatetimeItem",
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