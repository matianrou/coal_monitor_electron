<!-- 填写组件 模板中选择一条 后在input框中编辑 返回Input框中数据 -->
<template>
  <div style="width: 100%;">
    <el-select v-model="selectedItem" @change="changeSelect">
      <el-option
        v-for="(item, index) in options"
        :key="index"
        :label="item.name"
        :value="item.value">
      </el-option>
    </el-select>
    <el-input
      v-model="dataForm.tempValue"
      type="textarea"
      :autosize="{ minRows: 6, maxRows: 20}"
      :placeholder="placeholder"
      style="margin-top: 20px;"
      @change="changeValue">
    </el-input>
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
    placeholder: {
      type: String,
      default: '请输入'
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
      },
      selectedItem: null
    };
  },
  created() {
    this.dataForm.tempValue = this.value
  },
  watch: {
    value(val) {
      this.dataForm.tempValue = this.value
    }
  },
  methods: {
    changeSelect(val) {
      this.options.map(item => {
        if (item.value === val) {
          this.dataForm.tempValue = item.name
          this.changeValue()
        }
      })
    },
    changeValue(val) {
      this.$parent.handleSave(true)
    }
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