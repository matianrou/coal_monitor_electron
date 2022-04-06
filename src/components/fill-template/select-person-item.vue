<!-- 选择人员组件 -->
<template>
  <div style="width: 100%;">
    <el-input
      v-model="dataForm.tempValue.personNamesString"
      :placeholder="placeholder"
      readonly
      type="textarea"
      :rows="13"
      @focus="showDialog('selectPerson')">
    </el-input>
    <select-person
      v-if="visible.selectPerson"
      :visible="visible.selectPerson"
      title="选择执法人员"
      :multi-select="true"
      :selected-data-list="dataForm.tempValue.personList"
      :has-add="true"
      :corp-data="corpData"
      @confirm-person="confirmPerson"
      @close="closeDialog"
    ></select-person>
  </div>
</template>

<script>
import selectPerson from '@/components/select-person'
export default {
  name: "SelectPersonItem",
  components: {
    selectPerson
  },
  props: {
    value: {
      type: Object,
      default: () => {
        return {
          personList: [],
          personNamesString: ''
        }
      }
    },
    placeholder: {
      type: String,
      default: ''
    },
    options: {
      type: Object,
      default: () => {}
    },
    corpData: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      dataForm: {
        tempValue: {
          personList: [],
          personNamesString: ''
        }
      },
      visible: {
        selectPerson: false
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
    showDialog (page) {
      this.visible[page] = true
    },
    closeDialog ({page, refresh}) {
      // 关闭选择人员弹窗
      this.visible[page] = false
    },
    confirmPerson (personList) {
      // 选择执法人员
      let personNamesString = ''
      if (personList.length > 0) {
        personList.map(item => {
          personNamesString += item.name + '，'
        })
        personNamesString = personNamesString.substring(0, personNamesString.length - 1)
      }
      this.$set(this.dataForm, 'tempValue', {personList, personNamesString})
      // 22.2.10修改为所有均弹窗，所以注释掉此处，以防再变化故保留此段代码
      // this.$parent.handleSave(true)
    },
  },
};
</script>

<style lang="scss" scoped>
</style>