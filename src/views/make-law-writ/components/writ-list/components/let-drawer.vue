<!-- 弹窗检查项修改组件 -->
<template>
  <el-drawer
    :title="selectedData.title"
    :visible.sync="visible"
    direction="rtl"
    :before-close="handleClose"
    :wrapperClosable="false">
    <div class="let-drawer-main">
      <div class="let-drawer-component">
        <component
          :is="selectedData.type"
          :ref="selectedData.type"
          :value="selectedData.value"
          :options="selectedData.options"
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
    InputItem: resolve => { require(["@/views/make-law-writ/components/writ-list/components/fill-template/input-item"], function(InputItem) { resolve(InputItem);});},
    CheckItem: resolve => { require(["@/views/make-law-writ/components/writ-list/components/fill-template/check-item"], function(CheckItem) { resolve(CheckItem);});},
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
      this.$emit('handle-save', {value: this.$refs[this.selectedData.type].tempValue})
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