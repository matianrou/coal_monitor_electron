<!-- 弹窗检查项修改组件 -->
<template>
  <el-drawer
    :title="selectedData.title"
    :visible.sync="visible"
    direction="rtl"
    :before-close="handleClose"
    :wrapperClosable="false"
    :size="selectedData.type === 'CheckTableItem' ? '80%' : '400px'">
    <div class="let-drawer-main">
      <div class="let-drawer-component">
        <component
          :is="selectedData.type"
          :ref="selectedData.type"
          :value="selectedData.value"
          :options="selectedData.options"
          :corp-data="selectedData.corpData"
        ></component>
      </div>
      <div class="let-drawer-operation">
        <el-button @click="handleClose">返回</el-button>
        <el-button type="primary" @click="handleSave">确定</el-button>
      </div>
    </div>
  </el-drawer>
</template>

<script>
export default {
  name: "LetDrawer",
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    selectedData: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    TextItem: resolve => { require(["@/views/make-law-writ/components/writ-list/components/fill-template/text-item"], function(TextItem) { resolve(TextItem);});},
    CheckItem: resolve => { require(["@/views/make-law-writ/components/writ-list/components/fill-template/check-item"], function(CheckItem) { resolve(CheckItem);});},
    DaterangeItem: resolve => { require(["@/views/make-law-writ/components/writ-list/components/fill-template/daterange-item"], function(DaterangeItem) { resolve(DaterangeItem);});},
    TextareaItem: resolve => { require(["@/views/make-law-writ/components/writ-list/components/fill-template/textarea-item"], function(TextareaItem) { resolve(TextareaItem);});},
    DateItem: resolve => { require(["@/views/make-law-writ/components/writ-list/components/fill-template/date-item"], function(DateItem) { resolve(DateItem);});},
    CheckPositionItem: resolve => { require(["@/views/make-law-writ/components/writ-list/components/fill-template/check-position-item"], function(CheckPositionItem) { resolve(CheckPositionItem);});},
    CheckTableItem: resolve => { require(["@/views/make-law-writ/components/writ-list/components/fill-template/check-table-item"], function(CheckTableItem) { resolve(CheckTableItem);});},

  },
  data() {
    return {
    };
  },
  created() {
  },
  methods: {
    handleClose () {
      // 关闭编辑
      this.$emit('handle-close')
    },
    handleSave () {
      // 保存数据
      // this.$refs[this.selectedData.type].$refs.dataForm.validate(validate => {
        // if (validate) {
          this.$emit('handle-save', {value: this.$refs[this.selectedData.type].dataForm.tempValue})
        // }
      // })
    }
  },
};
</script>

<style lang="scss" scoped>
/deep/ .el-drawer__header {
  margin: 0px;
}
/deep/ .el-drawer__body {
  overflow: hidden;
}
.let-drawer-main {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  .let-drawer-component {
    flex: 1;
    overflow: auto;
  }
  .let-drawer-operation {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}
</style>