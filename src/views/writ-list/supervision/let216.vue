<!-- 行政处罚 一般程序 案件处理呈报书 -->
<template>
  <div style="width: 100%; height: 100%;">
    <let-main
      ref="letMain"
      :corp-data="corpData"
      :doc-data="docData"
      :let-data="letData"
      :edit-data="paperData"
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
            <div class="textAlignCenter formHeader1">案件处理呈报书</div>
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
            <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_2"
                  style="width:70%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx2', '', 'TextItem')"
                >{{ letData.cellIdx2 }}</td>
              </tr>
            </table>
             <div class="docTextarea">
              <span class="no-line">案&nbsp;&nbsp;由：</span>
              <span
                @click="commandFill('cellIdx3', '案由', 'DangerTableItem')"
              >{{ letData.cellIdx3 ? letData.cellIdx3 : '（点击编辑）'}}</span>
              <div class="line"></div>
            </div>
            <div class="docTextLine">
              <div style="flex: 1; display: flex;">
                <label>立案决定书编号：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx4', '立案决定书编号', 'TextItem')"
                >{{ letData.cellIdx4 ? letData.cellIdx4 : '（编辑）' }}</div>
              </div>
              <div style="flex: 1; display: flex;">
                <label>立案时间：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx5', '立案时间', 'DateItem')"
                >{{ letData.cellIdx5 ? letData.cellIdx5 : '（编辑）' }}</div>
              </div>
            </div>
            <div class="docTextLine">
              <div style="flex: 1; display: flex;">
                <label>承办人：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx6', '承办人', 'TextItem')"
                >{{ letData.cellIdx6 ? letData.cellIdx6 : '（编辑）' }}</div>
              </div>
            </div>
             <div class="docTextarea">
              <span class="no-line">违法事实及依据：</span>
              <span
                @click="commandFill('cellIdx7', '违法事实及依据', 'DangerTableItem')"
              >{{ letData.cellIdx7 ? letData.cellIdx7 : '（点击编辑）'}}</span>
              <div class="line"></div>
            </div>
             <div class="docTextarea">
             <span class="no-line">法制审核意见：</span>
              <span
                @click="commandFill('cellIdx8', '法制审核意见', 'TextareaItem')"
              >{{ letData.cellIdx8 ? letData.cellIdx8 : '（点击编辑）'}}</span>
              <div class="line"></div>
            </div>
             <div class="docTextarea">
               <span class="no-line">建议案件处理意见：</span>
              <span
                @click="commandFill('cellIdx9', '建议案件处理意见', 'TextareaItem')"
              >{{ letData.cellIdx9 ? letData.cellIdx9 : '（点击编辑）'}}</span>
              <div class="line"></div>
            </div>
            <table height="60"></table>
            <div class="docTextLine">
              <div style="flex: 5; display: flex;">
                <label>执法机关负责人意见：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx10', '执法机关负责人意见', 'TextItem')"
                >{{ letData.cellIdx10 ? letData.cellIdx10 : '（编辑）' }}</div>
              </div>
              <div style="flex: 3; display: flex;">
                <label>签名：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx11', '签名', 'TextItem')"
                >{{ letData.cellIdx11 ? letData.cellIdx11 : '（编辑）' }}</div>
              </div>
              <div style="flex: 3; display: flex;">
                <label>&nbsp;日期：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx12', '日期', 'DateItem')"
                >{{ letData.cellIdx12 ? letData.cellIdx12 : '（编辑）' }}</div>
              </div>
            </div>
            <table height="30"></table>
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
import letMain from "@/views/make-law-writ/components/let-main.vue";
import GoDB from "@/utils/godb.min.js";
import { getNowDate } from "@/utils/date";
import associationSelectPaper from '@/components/association-select-paper'
import {
  getDangerObject,
  transformNumToChinese,
} from "@/utils/setInitPaperData";

export default {
  name: "Let203",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {},
      options: {},
      associationPaper: ['1', '4', '47']
    };
  },
  methods: {
    async initLetData (selectedPaper) {
      const db = new GoDB(this.$store.state.DBName);
      const corpBase = db.table("corpBase");
      const corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      // 获取笔录文书中的隐患数据
      let let1DataPapaerContent = JSON.parse(selectedPaper.let1Data.paperContent);
      let dangerObject = getDangerObject(
        let1DataPapaerContent.dangerItemObject.tableData
      );
      // 1.案由内容初始化：煤矿名称+隐患描述+“案”组成
      // 获取笔录文书中的隐患数据
      let cellIdx2String = `${corp.corpName}涉嫌${dangerObject.dangerString}案。`;
      // 2.违法事实及依据：隐患描述+“经调查取证以上违法违规行为属实，分别违反了”+违法认定发条
      dangerObject = getDangerObject(
        let1DataPapaerContent.dangerItemObject.tableData,
        { danger: true }
      );
      let cellIdx6String = `${dangerObject.dangerString}经调查取证以上违法违规行为属实，分别违反了${dangerObject.illegalString}的规定。`;
      // 3.建议案件处理意见：行政处罚依据+行政处罚决定（分条）
      let cellIdx7String = `分别依据${
        dangerObject.treatmentSuggestion
      }。合并罚款人民币${transformNumToChinese(
        dangerObject.penaltyDescFineTotle
      )}（￥${dangerObject.penaltyDescFineTotle.toLocaleString()}）罚款。`;
      // 5.获取立案决定书编号及立案日期
      let let4DataPapaerContent = JSON.parse(selectedPaper.let4Data.paperContent);
      let { cellIdx0, cellIdx1, cellIdx2, cellIdx3, cellIdx6, cellIdx7, cellIdx8} = let4DataPapaerContent
      let let4PaperNumber = `${cellIdx0}（${cellIdx1}）煤安立〔${cellIdx2}〕${cellIdx3}号`
      let let4Date = `${cellIdx6 ? cellIdx6 : 'XX'}年${cellIdx7 ? cellIdx7 : 'XX'}月${cellIdx8 ? cellIdx8 : 'XX'}日`
      // 6.法制审核意见：带入行政执法决定法制审核意见书中的
      let let47DataPapaerContent = JSON.parse(selectedPaper.let47Data.paperContent);
      await db.close();
      this.letData = {
        cellIdx0: null, //
        cellIdx1: null, // 编号
        cellIdx2: null, //
        cellIdx3: cellIdx2String, // 案由
        cellIdx4: let4PaperNumber, // 立案决定书编号
        cellIdx4TypeTextItem: let4PaperNumber, // 立案决定书编号
        cellIdx5: let4Date, // 立案时间
        cellIdx5TypeTextItem: let4Date, // 立案时间
        cellIdx6: null, // 承办人
        cellIdx7: cellIdx6String, // 违法事实及依据
        cellIdx8: let47DataPapaerContent.cellIdx8, // 法制审核意见
        cellIdx8TypeTextareaItem: let47DataPapaerContent.cellIdx8, // 法制审核意见
        cellIdx9: null, // 建议案件处理意见
        cellIdx10: null, // 执法机关负责人意见
        cellIdx11: null, // 签名
        cellIdx12: null, // 日期
        dangerItemObject: let1DataPapaerContent.dangerItemObject,
        extraData: { // 保存额外拼写的数据内容，用于修改隐患项时回显使用
          corpName: corp.corpName,
          userGroupName: this.$store.state.user.userGroupName,
        }
      };
    },
    goBack({ page }) {
      // 返回选择企业
      this.$emit("go-back", { page });
    },
    commandFill(key, title, type) {
      // 判断是否可编辑
      if (this.$refs.letMain.canEdit) {
        // 文书各个字段点击打开左侧弹出编辑窗口
        let dataKey = `${key}Type${type}`;
        let spellString = {};
        if (key === "cellIdx3" || key === "cellIdx7") {
          if (key === "cellIdx3") {
            spellString = {
              corpName: this.letData.extraData.corpName,
            };
          }
          this.options[key] = {
            page: "36",
            key: key,
            spellString,
          };
          dataKey = "dangerItemObject";
        }
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