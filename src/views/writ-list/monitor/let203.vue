<!-- 行政处罚 一般程序 案件处理呈报书 36 -->
<template>
  <div style="width: 100%; height: 100%">
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
            <div class="textAlignCenter formHeader2">
              国 家 矿 山 安 全 监 察
              <br />
            </div>
            <div class="textAlignCenter formHeader3">案 件 处 理 呈 报 书</div>
            <div class="docTextLine paper-number-div">
              <div>
                <!-- <span
                  @click="commandFill('cellIdx0', '', 'TextItem')"
                >{{ letData.cellIdx0 ? letData.cellIdx0 : '（编辑）' }}</span> -->
                <label>编号：</label>
                <span
                  class="line"
                  @click="commandFill('cellIdx1', '编号', 'TextItem')"
                  >{{
                    letData.cellIdx1 ? letData.cellIdx1 : "（点击编辑）"
                  }}</span
                >
              </div>
            </div>
            <div class="docTextarea">
              <span class="no-line">案&nbsp;&nbsp;由：</span>
              <span
                @dblclick="commandFill('cellIdx2', '案由', 'DangerTable')"
                @click="commandFill('cellIdx2', '案由', 'TextareaItem')"
                >{{
                  letData.cellIdx2 ? letData.cellIdx2 : "（点击编辑）"
                }}</span
              >
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:50%">
                <span class="no-line">立案决定书编号：</span>
                <span @click="commandFill('cellIdx3', '立案决定书编号', 'TextItem')"
                  >{{ letData.cellIdx3 ? letData.cellIdx3 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">立案时间：</span>
                <span @click="commandFill('cellIdx4', '立案时间', 'DateItem')">{{
                  letData.cellIdx4 ? letData.cellIdx4 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line">承办人：</span>
              <span @click="commandFill('cellIdx5', '承办人', 'TextItem')">{{
                letData.cellIdx5 ? letData.cellIdx5 : "（点击编辑）"
              }}</span>
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line">违法事实及处理依据：</span>
              <span
                @dblclick="commandFill('cellIdx6', '违法事实及处理依据', 'DangerTable')"
                @click="
                  commandFill(
                    'cellIdx6',
                    '违法事实及处理依据',
                    'TextareaItem'
                  )
                "
                >{{
                  letData.cellIdx6 ? letData.cellIdx6 : "（点击编辑）"
                }}</span
              >
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line">建议案件处理意见：</span>
              <span
                @dblclick="commandFill('cellIdx7', '建议案件处理意见', 'DangerTable')"
                @click="
                  commandFill('cellIdx7', '建议案件处理意见', 'TextareaItem')
                "
                >{{
                  letData.cellIdx7 ? letData.cellIdx7 : "（点击编辑）"
                }}</span
              >
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line">法制审核意见：</span>
              <span
                @click="
                  commandFill('cellIdx8', '法制审核意见', 'SelectInputItem')
                "
                >{{
                  letData.cellIdx8 ? letData.cellIdx8 : "（点击编辑）"
                }}</span
              >
              <div class="line"></div>
            </div>
            <table height="60"></table>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:45%">
                <span class="no-line">分管负责人意见：</span>
                <span @click="commandFill('cellIdx9', '分管负责人意见', 'TextItem')"
                  >{{ letData.cellIdx9 ? letData.cellIdx9 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">签名：</span>
                <span @click="commandFill('cellIdx10', '签名', 'TextItem')">{{
                  letData.cellIdx10 ? letData.cellIdx10 : "（点击编辑）"
                }}</span>
                <span class="no-line">日期：</span>
                <span @click="commandFill('cellIdx11', '日期', 'DateItem')">{{
                  letData.cellIdx11 ? letData.cellIdx11 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:45%">
                <span class="no-line">主要负责人意见：</span>
                <span @click="commandFill('cellIdx12', '主要负责人意见', 'TextItem')"
                  >{{ letData.cellIdx12 ? letData.cellIdx12 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">签名：</span>
                <span @click="commandFill('cellIdx13', '签名', 'TextItem')">{{
                  letData.cellIdx13 ? letData.cellIdx13 : "（点击编辑）"
                }}</span>
                <span class="no-line">日期：</span>
                <span @click="commandFill('cellIdx14', '日期', 'DateItem')">{{
                  letData.cellIdx14 ? letData.cellIdx14 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
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
import GoDB from "@/utils/godb.min.js";
import { getNowDate } from "@/utils/date";
import associationSelectPaper from "@/components/association-select-paper";
import {
  getDangerObject,
} from "@/utils/setInitPaperData";
import {
  transformNumToChinese,
} from "@/utils";
export default {
  name: "Let203",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {},
      options: {
        cellIdx2: {
          page: "36", // 用于在隐患项保存，做数据处理时，判断是否增加现场处理决定字段描述
          key: "cellIdx2", // 用来区分一个页面多个地方调用隐患大表，最后返回值
        },
        cellIdx6: {
          page: "36",
          key: "cellIdx6",
        },
        cellIdx7: {
          page: "36",
          key: "cellIdx7",
        },
        cellIdx8: [],
      },
      associationPaper: ["1", "4"],
      extraData: {}, // 用于拼写隐患内容的字符集合 */
    };
  },
  methods: {
    async initLetData(selectedPaper) {
      let db = new GoDB(this.$store.state.DBName);
      let corpBase = db.table("corpBase");
      let corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      let let1DataPapaerContent = JSON.parse(
        selectedPaper.let1Data.paperContent
      );
      let dangerObject = let1DataPapaerContent.DangerTable ? getDangerObject(
        let1DataPapaerContent.DangerTable.tableData
      ): {dangerString: ''};
      // 1.案由内容初始化：煤矿名称+隐患描述+“案”组成
      // 获取笔录文书中的隐患数据
      let cellIdx2String = `${corp.corpName}涉嫌${dangerObject.dangerString}案。`;
      // 2.违法事实及依据：隐患描述+“经调查取证以上违法违规行为属实，分别违反了”+违法认定发条
      dangerObject = let1DataPapaerContent.DangerTable ? getDangerObject(
        let1DataPapaerContent.DangerTable.tableData,
        { danger: true }
      ) : {dangerString: '', illegalString: '', treatmentSuggestion: '', penaltyDescFineTotle: '', penaltyDescFineTotle: 0};
      let cellIdx6String = `${dangerObject.dangerString}经调查取证以上违法违规行为属实，分别违反了${dangerObject.illegalString}的规定。`;
      // 3.建议案件处理意见：行政处罚依据+行政处罚决定（分条）
      let cellIdx7String = `分别依据${
        dangerObject.treatmentSuggestion
      }。合并罚款人民币${transformNumToChinese(
        dangerObject.penaltyDescFineTotle
      )}（￥${dangerObject.penaltyDescFineTotle.toLocaleString()}）罚款。`;
      // 5.获取立案决定书编号及立案日期,承办人
      let let4DataPapaerContent = JSON.parse(
        selectedPaper.let4Data.paperContent
      );
      let {
        cellIdx0,
        cellIdx1,
        cellIdx2,
        cellIdx3,
        cellIdx6,
        cellIdx7,
        cellIdx8,
        cellIdx9
      } = let4DataPapaerContent;
      let let4PaperNumber = `${cellIdx0}（${cellIdx1}）矿安立〔${cellIdx2}〕${cellIdx3}号`;
      let let4Date = `${cellIdx6 ? cellIdx6 : "XX"}年${
        cellIdx7 ? cellIdx7 : "XX"
      }月${cellIdx8 ? cellIdx8 : "XX"}日`;
      let let4Person = cellIdx9 ? cellIdx9 : 'XX'
      await db.close();
      this.letData = {
        cellIdx0: null, //
        cellIdx1: null, // 编号
        cellIdx2: cellIdx2String, // 案由
        cellIdx3: let4PaperNumber, // 立案决定书编号
        cellIdx3TypeTextItem: let4PaperNumber, // 立案决定书编号
        cellIdx4: let4Date, // 立案时间
        cellIdx4TypeTextItem: let4Date, // 立案时间
        cellIdx5: let4Person, // 承办人
        cellIdx5TypeTextItem: let4Person, // 承办人
        cellIdx6: cellIdx6String, // 违法事实及依据
        cellIdx7: cellIdx7String, // 建议案件处理意见
        cellIdx8: null, // 法制审核意见
        cellIdx9: null, // 分管负责人意见
        cellIdx10: null, // 签名
        cellIdx11: null, // 日期
        cellIdx12: null, // 主要负责人意见
        cellIdx13: null, // 签名
        cellIdx14: null, // 日期
        DangerTable: let1DataPapaerContent.DangerTable,
        extraData: {
          // 保存额外拼写的数据内容，用于修改隐患项时回显使用
          corpName: corp.corpName,
          userGroupName: this.$store.state.user.userGroupName,
        },
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
        let spellString = {};
        if ((key === "cellIdx2" || key === "cellIdx6" || key === "cellIdx7") && type === 'DangerTable') {
          if (key === "cellIdx2") {
            spellString = {
              corpName: this.letData.extraData.corpName,
            };
          } else if (key === "cellIdx6" || key === "cellIdx7") {
            spellString = this.letData.extraData;
          }
          this.options[key] = {
            page: "36",
            key: key,
            spellString,
            showMergeBtn: true,
            showPunishmentInfor: true
          };
          dataKey = "DangerTable";
        } else if (key === 'cellIdx8') {
          dataKey = `${key}Type${type}`;
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