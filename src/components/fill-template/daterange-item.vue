<!-- 填写组件 日期范围选择 -->
<template>
  <div style="width: 100%;">
    <!-- <el-form ref="dataForm" v-model="dataForm" :rules="dataRules"> -->
      <!-- <el-form-item label=" " prop="tempValue"> -->
        <el-date-picker
          v-model="dataForm.tempValue"
          type="daterange"
          format="yyyy年M月d日"
          value-format="yyyy年M月d日"
          range-separator="至"
          :start-placeholder="options && options.startPlaceholder ? options.startPlaceholder  : ''"
          :end-placeholder="options && options.endPlaceholder ? options.endPlaceholder  : ''"
          :unlink-panels="true"
        ></el-date-picker>
      <!-- </el-form-item> -->
    <!-- </el-form> -->
  </div>
</template>

<script>
export default {
  name: "DaterangeItem",
  props: {
    value: {
      type: String,
      default: null
    },
    rules: {
      type: Object,
      default: () => {}
    },
    options: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    var validateDate = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请选择起始日期"));
      } else {
        if (value.length === 0 && !value[0]) {
          callback(new Error("请选择起始日期"));
        } else if (value && value.length === 1 && !value[1]) {
          callback(new Error("请选择结束日期"));
        } else {
          callback();
        }
      }
    };
    return {
      dataForm: {
        tempValue: [],
      },
      dataRules: {
        'tempValue': [
          // { message: '请选择日期范围', trigger: 'change'},
          { required: true, validator: validateDate, trigger: "change" },
        ]
      }
    };
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      // 初始化数据
      if (this.value) {
        // 判断是否有'至'判断当前第一第二日期是否相同
        if (this.value.indexOf('至') !== -1) {
          let stringList = this.value.split('至')
          // 获取第一个年月日中的详细数据
          let stringList0 = stringList[0].replace('年', '-').replace('月', '-').replace('日', '-').split('-')
          // 临时赋值进第二个日期中
          let year1 = stringList0[0]
          let month1 = stringList0[1]
          let date1 = stringList0[2]
          // 判断是否有'年'，判断第一第二年是否相同
          if (stringList[1].indexOf('年') !== -1) {
            year1 = stringList[1].split('年')[0]
            // 如果有年则去掉年份然后继续判断月
            stringList[1] = stringList[1].split('年')[1]
          }
          // 判断是否有'月'，判断第一第二月是否相同
          if (stringList[1].indexOf('月') !== -1) {
            month1 = stringList[1].split('月')[0]
            // 如果有年则去掉月份然后继续判断日
            stringList[1] = stringList[1].split('月')[1]
          }
          // 判断是否有'日'，判断第一第二日是否相同
          if (stringList[1].indexOf('日') !== -1) {
            date1 = stringList[1].split('日')[0]
          }
          this.$set(this.dataForm, 'tempValue', [stringList[0], `${year1}年${month1}月${date1}日`])
        } else {
          this.$set(this.dataForm, 'tempValue', [this.value, this.value])
        }
      } else {
        this.dataForm.tempValue = []
      }
    }
  },
};
</script>

<style lang="scss" scoped>
</style>