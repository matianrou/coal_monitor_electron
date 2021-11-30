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
          style="width: 300px;"
          @change="changeValue"
        ></el-date-picker>
      <!-- </el-form-item> -->
    <!-- </el-form> -->
  </div>
</template>

<script>
import { handleDateRetrun } from '@/utils/date'
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
  watch: {
    value (val) {
      let value = handleDateRetrun(val)
      this.$set(this.dataForm, 'tempValue', value)
    }
  },
  methods: {
    init() {
      // 初始化数据
      let value = handleDateRetrun(this.value)
      this.$set(this.dataForm, 'tempValue', value)
    },
    changeValue(val) {
      this.$parent.handleSave(true)
    }
  },
};
</script>

<style lang="scss" scoped>
</style>