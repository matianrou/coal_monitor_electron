<!-- 行政处罚 听证程序  听证会报告书 49 -->
<template>
  <div style="width: 100%; height: 100%;">
    <let-main
      ref="letMain"
      :corp-data="corpData"
      :doc-data="docData"
      :let-data="letData"
      :paper-data="paperData"
      @go-back="goBack"
    >
      <div slot="left">
        <div class="page page-sizeA4">
          <div>
            <div class="stdRowH"></div>
            <div class="textAlignCenter formHeader0">
              煤矿安全监管行政执法文书
              <br />
            </div>
            <div class="textAlignCenter formHeader1">听证会报告书</div>
            <div class="docTextLine paper-number-div">
              <div>
                <!-- <span
                  @click="commandFill('cellIdx0', '', 'TextItem')"
                >{{ letData.cellIdx0 ? letData.cellIdx0 : '（编辑）' }}</span> -->
                <label>编号：</label>
                <span
                  class="line"
                  @click="commandFill('cellIdx1', '编号', 'TextItem')"
                >{{ letData.cellIdx1 ? letData.cellIdx1 : '（点击编辑）' }}</span>
              </div>
            </div>
            <div class="docTextarea">
              <span class="no-line">案由：</span>
              <span
                @click="commandFill('cellIdx2', '案由', 'TextareaItem')"
              >{{ letData.cellIdx2 ? letData.cellIdx2 : '（点击编辑）' }}</span>
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:55%">
                <span class="no-line">听证主持人：</span>
                <span @click="commandFill('cellIdx3', '听证主持人', 'TextItem')"
                  >{{ letData.cellIdx3 ? letData.cellIdx3 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">记录人：</span>
                <span @click="commandFill('cellIdx5', '记录人：', 'TextItem')">{{
                  letData.cellIdx5 ? letData.cellIdx5 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line">听证会基本情况摘要：</span>
              <span
                @click="commandFill('cellIdx6', '听证会基本情况摘要', 'TextareaItem')"
              >{{ letData.cellIdx6 ? letData.cellIdx6 : '（点击编辑）' }}</span>
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line">听证主持人意见：</span>
              <span
                @click="commandFill('cellIdx7', '听证主持人意见', 'SelectItem')"
              >{{ letData.cellIdx7 ? letData.cellIdx7 : '（点击编辑）' }}</span>
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:55%">
                <span class="no-line">听证主持人（签名）：</span>
                <span @click="commandFill('cellIdx8', '听证主持人（签名）：', 'TextItem')"
                  >{{ letData.cellIdx8 ? letData.cellIdx8 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">日期：</span>
                <span @click="commandFill('cellIdx9', '日期', 'DateItem')">{{
                  letData.cellIdx9 ? letData.cellIdx9 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
             <div class="docTextarea">
              <div style="display:inline-block;min-width:43%">
                <span class="no-line">负责人审核意见：</span>
                <span @click="commandFill('cellIdx10', '负责人审核意见', 'TextItem')"
                  >{{ letData.cellIdx10 ? letData.cellIdx10 : "（编辑）" }}
                </span>
              </div>
                <span class="no-line">负责人（签名）：</span>
                <span @click="commandFill('cellIdx11', '负责人（签名）', 'TextItem')">{{
                  letData.cellIdx11 ? letData.cellIdx11 : "（编辑）"
                }}</span>
                <span class="no-line">日期：</span>
                <span @click="commandFill('cellIdx12', '日期', 'DateItem')">{{
                  letData.cellIdx12 ? letData.cellIdx12 : "（编辑）"
                }}</span>
                <div class="line"></div>
                <div class="line1"></div>
            </div>
          </div>
        </div>
      </div>
    </let-main>
    <!-- 关联文书选择 -->
    <select-paper
      :visible="visible.selectPaper"
      title="关联文书选择"
      :paper-list="paperList"
      @close="closeDialog"
      @confirm-paper="confirmPaper"
    ></select-paper>
  </div>
</template>

<script>
import GoDB from "@/utils/godb.min.js";
import { getDangerObject } from "@/utils/setInitPaperData";
import associationSelectPaper from '@/components/association-select-paper'
export default {
  name: "Let205",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {},
      options: {
        cellIdx2: {
          page: "30",
          key: "cellIdx2", // 用来区分一个页面多个地方调用隐患大表，最后返回值
        },
        cellIdx7: [
          {
            value:
              "(1)经过听证，认定违法事实清楚，拟行政处罚意见适用法律正确，证据确凿，程序合法，处罚适当的，提出维持意见;",
            name: "(1)经过听证，认定违法事实清楚，拟行政处罚意见适用法律正确，证据确凿，程序合法，处罚适当的，提出维持意见;",
          },
          {
            value:
              "(2）经过听证，认定违法事实清楚，但拟行政处罚意见适用法律错误或者处罚裁量不当的，提出纠正意见;",
            name: "(2）经过听证，认定违法事实清楚，但拟行政处罚意见适用法律错误或者处罚裁量不当的，提出纠正意见;",
          },
          {
            value: "(3)经过听证,认定违法行为轻微，提出免予行政处罚意见;",
            name: "(3)经过听证,认定违法行为轻微，提出免予行政处罚意见;",
          },
          {
            value: "(4)经过听证，认定违法事实不能成立，提出不予行政处罚意见;",
            name: "(4)经过听证，认定违法事实不能成立，提出不予行政处罚意见;",
          },
          {
            value:
              "(5）经过听证，认定违法事实不清、证据不足的,提出继续调查意见;",
            name: "(5）经过听证，认定违法事实不清、证据不足的,提出继续调查意见;",
          },
          {
            value:
              "(6）经过听证，认定违法行为涉嫌犯罪的，提出移送司法机关处理建议;",
            name: "(6）经过听证，认定违法行为涉嫌犯罪的，提出移送司法机关处理建议;",
          },
        ],
      },
      associationPaper: ['1']
    };
  },
  methods: {
    async initLetData (selectedPaper) {
      let db = new GoDB(this.$store.state.DBName);
      let corpBase = db.table("corpBase");
      let corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      // 获取笔录文书中的隐患数据
      let let1DataPaperContent = JSON.parse(selectedPaper.let1Data.paperContent);
      let dangerObject = getDangerObject(
        let1DataPaperContent.DangerTable.tableData
      );
      // 案由：煤矿名称 + '涉嫌' + 隐患描述 + '案。'
      let cellIdx2String = `${corp.corpName}涉嫌${dangerObject.dangerString}案。`;
      // 获取听证笔录中的听证主持人和记录人
      let wkPaper = db.table('wkPaper');
      let let211Data = await wkPaper.find((item) => {
        return item.caseId === this.corpData.caseId && item.paperType === "7" && item.delFlag !== '1';
      });
      let let211DataPapaerContent = let211Data ? JSON.parse(let211Data.paperContent) : {cellIdx8: '', cellIdx9: ''};
      await db.close();
      this.letData = {
        cellIdx0: null, //
        cellIdx1: null, // 编号
        cellIdx2: cellIdx2String, // 案由
        cellIdx2TypeTextareaItem: cellIdx2String, // 案由
        cellIdx3: let211DataPapaerContent.cellIdx8, // 听证主持人
        cellIdx3TypeTextItem: let211DataPapaerContent.cellIdx8, // 听证主持人
        // cellIdx4: null, // 听证主持人
        cellIdx5: let211DataPapaerContent.cellIdx9, // 记录人
        cellIdx5TypeTextItem: let211DataPapaerContent.cellIdx9, // 记录人
        cellIdx6: null, // 听证会基本情况摘要
        cellIdx7: null, // 听证主持人意见
        cellIdx8: null, // 听证主持人（签名）
        cellIdx9: null, // 日期
        cellIdx10: null, // 负责人审核意见
        cellIdx11: null, // 负责人（签名）
        cellIdx12: null, // 日期
        DangerTable: let1DataPaperContent.DangerTable,
        extraData: { // 保存额外拼写的数据内容，用于修改隐患项时回显使用
          corpName: corp.corpName,
          groupName: this.$store.state.curCase.provinceGroupName,
        }
      };
    },
    goBack({ page, data }) {
      // 返回选择企业
      this.$emit("go-back", { page, data });
    },
    commandFill(key, title, type) {
      // 判断是否可编辑
      if (this.$refs.letMain.canEdit) {
        // 文书各个字段点击打开左侧弹出编辑窗口
        let dataKey = `${key}`;
        this.$refs.letMain.commandFill(
          key,
          dataKey,
          title,
          type,
          this.letData[dataKey],
          this.options[key]
        );
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/let";
</style>