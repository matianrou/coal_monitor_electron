<!-- 填写组件 简单复选框 -->
<template>
  <div style="width: 100%;">
    <el-checkbox-group v-model="dataForm.tempValue">
      <el-checkbox
        v-for="(item, index) in options"
        :key="index"
        :label="item.value">
        {{ item.name }}
      </el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script>
export default {
  name: "CheckItem",
  props: {
    value: {
      type: Array,
      default: () => []
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