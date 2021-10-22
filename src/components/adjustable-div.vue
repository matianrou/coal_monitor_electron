<!--可调节div宽度的线 -->
<template>
  <div class="adjustable-div" @mousedown="mouseDown"></div>
</template>

<script>
export default {
  name: "adjustableDiv",
  data() {
    return {
      point: {
        x: ''
      }
    };
  },
  created() {
    document.addEventListener("mouseup", this.mouseUp);
  },
  destroyed() {
    document.removeEventListener("mouseup", this.mouseUp);
  },
  methods: {
    mouseDown(event) {
      document.addEventListener("mousemove", this.mouseMove);
      this.point.x = event.screenX;
    },
    mouseMove(event) {
      this.$emit("width-change", (this.point.x - event.screenX));
      this.point.x = event.screenX;
    },
    mouseUp() {
      this.point.x = "";
      document.removeEventListener("mousemove", this.mouseMove);
    }
  }
};
</script>

<style lang="scss" scoped>
.adjustable-div {
  width: 2px;
  cursor: ew-resize;
  z-index: 10;
  background: #ccc;
  height: 100%;
}
</style>