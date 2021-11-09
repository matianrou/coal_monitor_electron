<!-- 发送文书 历史记录 页面暂不需要，已合并如调查笔录发送页面send-paper-main -->
<template>
  <div class="send-paper-history">
    <div class="send-paper-history-title">
      <span>查看文书：</span>
    </div>
    <div class="send-paper-history-table">
      <el-table
        ref="table"
        :data="paperList"
        stripe
        border
        style="width: 100%;"
        height="100%"
        :header-cell-style="{ background: '#f5f7fa' }"
      >
        <el-table-column
          header-align="center"
          align="center"
          label="序号"
          width="80"
        >
          <template slot-scope="scope">
            <span>{{ scope.$index + 1 }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="companyName"
          header-align="center"
          align="left"
          label="煤矿"
        >
        </el-table-column>
        <el-table-column
          prop="receiveName"
          header-align="center"
          align="center"
          label="接收人"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="paperContent.name"
          header-align="center"
          align="center"
          width="150"
          label="文书类型"
        >
        </el-table-column>
        <el-table-column
          prop="paperContent.createTime"
          header-align="center"
          align="center"
          width="180"
          label="制作时间"
        >
        </el-table-column>
        <el-table-column
          fixed="right"
          header-align="center"
          align="center"
          width="80"
          label="操作"
        >
          <template slot-scope="scope">
            <el-button
              :loading="loading.btn"
              :disabled="scope.row.delFlag === '0'"
              type="text"
              size="small"
              @click="showPaper(scope.row)"
            >
              查看
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import GoDB from "@/utils/godb.min.js";
export default {
  name: "SendPaperHistory",
  components: {},
  props: {},
  data() {
    return {
      loading: {
        list: false
      },
      paperList: []
    };
  },
  created() {
    this.getData()
  },
  methods: {
    async getData() {
      this.loading.list = true;
      // 从本地库中获取当前已发送文书
      let db = new GoDB(this.$store.state.DBName);
      let sendPaper = db.table('sendPaper')
      let paperList = await sendPaper.findAll(item => item.delFlag !== '1' && item.isReceive === '1')
      await db.close()
      if (paperList.length > 0) {
        paperList.forEach(item => {
          item.paperContent = JSON.parse(item.paperContent)
        })
      }
      this.paperList = paperList
      this.loading.list = false;
      this.$nextTick(() => {
        this.$refs.table.doLayout();
      });
    },
    async showPaper(row) {
      // 根据paperType打开相应页面
      let page = '';
      let dictName =
        this.$store.state.user.userType === "supervision"
          ? "supervisionPaperType"
          : "monitorPaperType";
      this.$store.state.dictionary[dictName].map((item) => {
        if (item.id === row.paperContent.paperType) page = item.page;
      });
      let docData = {
        docTypeNo: row.paperContent.paperType,
        docTypeName: row.paperContent.name,
        page,
      };
      let db = new GoDB(this.$store.state.DBName);
      let corpBase = db.table("corpBase");
      let corpData = await corpBase.find((item) => {
        return item.corpId == row.companyId;
      });
      await db.close()
      let sendData = {
        receiveId: row.receiveId,
        receiveName: row.receiveName,
        isReceive: row.isReceive
      }
      this.changePage({docData, corpData, sendData, paperData: row.paperContent});
    },
    changePage({docData = null, corpData = null, sendData = null, paperData = null}) {
      this.$emit("change-page", {
        status: "sendPaperPaper",
        docData,
        corpData,
        sendData,
        paperData,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.send-paper-history {
  padding: 20px;
  display: flex;
  flex-direction: column;
  .send-paper-history-title {
    height: 30px;
    line-height: 30px;
    margin-bottom: 10px;
  }
  .send-paper-history-table {
    height: calc(100vh - 200px);
  }
}
</style>