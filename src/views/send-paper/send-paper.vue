<!-- tab: 发送文书 -->
<template>
  <div class="send-paper">
    <el-tabs 
      v-if="showStatus === 'sendPaperMain'"
      v-model="activeTab" 
      tab-position="left" 
      class="send-paper-tab">
      <el-tab-pane 
        v-for="(item, index) in tabList"
        :key="index"
        :label="item.label" 
        :name="item.name">
        <send-paper-main
          :active-tab="activeTab"
          @change-page="changePage"
        ></send-paper-main>
      </el-tab-pane>
    </el-tabs>
    <send-paper-paper
      v-else
      :doc-data="docData"
      :corp-data="corpData"
      :send-data="sendData"
      :paper-data="paperData"
      @change-page="changePage"
    ></send-paper-paper>
  </div>
</template>

<script>
import sendPaperMain from '@/views/send-paper/components/send-paper-main'
import sendPaperPaper from '@/views/send-paper/components/send-paper-paper'
export default {
  name: "SendPaper",
  components: {
    sendPaperMain,
    sendPaperPaper,
  },
  data() {
    return {
      showStatus: 'sendPaperMain',
      docData: {}, // 文书数据
      corpData: {}, // 煤矿数据
      paperData: {}, // 文书数据
      sendData: {}, // 接收人数据
      activeTab: 'sendPaper',
      tabList: [
        {
          label: '调查笔录发送',
          name: 'sendPaper'
        },
        {
          label: '历史记录',
          name: 'sendHistory'
        }
      ]
    };
  },
  async created() {
    await this.init()
  },
  methods: {
    async init () {
    },
    changePage (data) {
      // 切换展示或制作
      this.showStatus = data.status
      this.docData = data.docData
      this.corpData = data.corpData
      this.sendData = data.sendData
      this.paperData = data.paperData
    }
  },
};
</script>

<style lang="scss" scoped>
.send-paper {
  height: calc(100vh - 80px);
  width: 100%;
  background: rgba(255, 255, 255, 0.8);
  overflow: auto;
  .send-paper-tab {
    padding: 20px;
    height: calc(100% - 40px); 
    width: calc(100% - 80px);
    margin: auto;
  }
}
</style>