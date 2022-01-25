<!-- 填写组件 检查类型或方式复选框 -->
<template>
  <div style="width: 100%; height: 70vh; overflow: auto;">
    <el-checkbox-group v-model="dataForm.tempValue.checkList" @change="changeValue">
      <el-checkbox
        v-for="(item, index) in options"
        :key="index"
        :label="item.value">
        {{ item.label }}
        <el-input
          v-if="item.value === '26' && showDetail"
          v-model="dataForm.tempValue.detailValue"
          size="small"
          style="width: 150px; margin-left: 3px;"
          placeholder="请输入详情"
        ></el-input>
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
        tempValue: {
          checkList: [],
          detailValue: null
        }
      },
      showDetail: false
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
            // 判断当前字符串中是否有：符号，如果有则再次分解
            if (string.includes('：')) {
              let strings = string.split('：')
              if (option.label === strings[0]) {
                this.dataForm.tempValue.checkList.push(option.value)
                // 回显其他专项监察
                this.showDetail = true
                this.dataForm.tempValue.detailValue = strings[1]
              }
            } else {
              if (option.label === string) {
                this.dataForm.tempValue.checkList.push(option.value)
              }
            }
          })
        })
      } else {
        this.dataForm.tempValue = {
          checkList: [],
          detailValue: null
        }
      }
    },
    changeValue () {
      let has26 = this.dataForm.tempValue.checkList.filter(item => item === '26')
      if (has26.length > 0) {
        this.showDetail = true
      } else {
        this.showDetail = false
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.el-checkbox {
  display: block;
  height: 30px;
  line-height: 30px;
}
/deep/ .el-checkbox__label {
  font-size: 16px;
  color: #606266;
  font-weight: 400;
}
</style>