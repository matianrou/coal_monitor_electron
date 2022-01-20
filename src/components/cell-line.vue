<!-- 多行文本下划线 -->
<template>
  <div>
    <div
      v-for="(item, index) in lineNum"
      :key="index"
      class="cellLine"
      :style="`top: ${(index + 1) * 2.25}rem;`"
    >
    </div>
  </div>
</template>

<script>
export default {
  name: "CellLine",
  props: {
    lineNum: { // 画线的行数，默认50行
      type: Number,
      default: 50
    },
    lineHeight: { // 画线的行高
      type: Number,
      default: 9.54
    }
  },
  data() {
    return {
    };
  },
  created() {
  },
  watch: {
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/let";
</style>