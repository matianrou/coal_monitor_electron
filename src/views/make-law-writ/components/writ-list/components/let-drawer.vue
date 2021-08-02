<!-- 弹窗检查项修改组件 -->
<template>
  <el-drawer
    :title="selectedData.title"
    :visible.sync="visible"
    direction="rtl"
    :before-close="handleClose">
    <div style="height: 100%;">
      <div style="">
        <component
          :is="selectedData.type"
          :ref="selectedData.type"
        ></component>
      </div>
      <div>

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
  },
};
</script>

<style lang="scss" scoped>
@import "@/views/make-law-writ/assets/scss/let";
</style>