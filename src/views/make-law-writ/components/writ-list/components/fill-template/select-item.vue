<!-- 填写组件 简单单选框 -->
<template>
  <div style="width: 100%;">
    <el-select v-model="dataForm.tempValue">
      <el-option
        v-for="(item, index) in options"
        :key="index"
        :label="item.name"
        :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: "SelectItem",
  props: {
    value: {
      type: String,
      default: null
    },
    options: {
      type: Array,
      default: () => []
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
.el-checkbox {
  display: block;
  height: 30px;
}
/deep/ .el-checkbox__label {
  font-size: 16px;
  color: #606266;
  font-weight: 400;
}
</style>