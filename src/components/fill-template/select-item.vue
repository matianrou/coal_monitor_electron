<!-- 填写组件 简单单选框 -->
<template>
  <div style="width: 100%;">
    <el-select v-model="dataForm.tempValue" @change="changeValue">
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
    this.init()
  },
  watch: {
    value(val) {
      this.init()
    }
  },
  methods: {
    init () {
      // 根据options将name比对value赋值
      if (this.value) {
        this.options.map(item => {
          if (item.name === this.value) {
            this.dataForm.tempValue = item.value
          }
        })
      } else {
        this.dataForm.tempValue = null
      }
    },
    changeValue(val) {
      // this.$parent.handleSave(true)
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