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
        tempValue: []
      }
    };
  },
  created() {
    this.init()
  },
  methods: {
    init () {
      if (this.value) {
        // 获取name的选项
        let stringList = this.value.split(',')
        // 通过options换取value数组
        stringList.map(string => {
          this.options.map(option => {
            if (option.name === string) {
              this.dataForm.tempValue.push(option.value)
            }
          })
        })
      } else {
        this.dataForm.tempValue = []
      }
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