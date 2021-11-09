<!-- 发送文书 新建、修改、查看文书 -->
<template>
  <div class="send-paper-main">
    <component
      :is="showTemp"
      from-page="send-paper"
      :doc-data="docData"
      :corp-data="corpData"
      :send-data="sendData"
      :paper-data="paperData"
      @go-back="changePage">
    </component>
  </div>
</template>

<script>
import { writList } from '@/utils/writList'
export default {
  name: "SendPaperPapaer",
  props: {
    corpData: {
      type: Object,
      default: () => {}
    },
    docData: {
      type: Object,
      default: () => {}
    },
    paperData: {
      type: Object,
      default: () => {}
    },
    sendData: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    ...writList,
  },
  data() {
    return {
      loading: {
      },
      DBName: this.$store.state.DBName,
      showTemp: ''
    };
  },
  async created() {
    this.init()
  },
  watch: {
    'docData.page'(val) {
      if (val) {
        this.init()
      }
    }
  },
  methods: {
    init () {
      if (this.docData.page) {
        this.showTemp = this.docData.page
      }
    },
    changePage () {
      this.$emit('change-page', {
        status: 'sendPaperMain',
      })
    }
  },
};
</script>

<style lang="scss" scoped>
.send-paper-main {
  height: calc(100% - 40px);
  width: calc(100% - 40px);
  margin: 10px auto;
  .send-paper-operation {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    justify-content: space-evenly;
    border-bottom: 1px solid #DCDFE6;
  }
}
</style>