<!-- 现场检查 复查 复查意见书 -->
<template>
  <div style="width: 100%; height: 100%">
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
              国 家 矿 山 安 全 监 察
              <br />
            </div>
            <div class="textAlignCenter formHeader3">复 查 意 见 书</div>
            <div class="docTextLine paper-number-div">
              <div>
                <span @click="commandFill('cellIdx0', '', 'TextItem')">{{
                  letData.cellIdx0 ? letData.cellIdx0 : "（编辑）"
                }}</span>
                <label>矿安监</label>
                <span @click="commandFill('cellIdx1', '', 'TextItem')">{{
                  letData.cellIdx1 ? letData.cellIdx1 : "（编辑）"
                }}</span>
                <label>复〔</label>
                <span @click="commandFill('cellIdx2', '', 'TextItem')">{{
                  letData.cellIdx2 ? letData.cellIdx2 : "（编辑）"
                }}</span>
                <label>〕</label>
                <span @click="commandFill('cellIdx3', '', 'TextItem')">{{
                  letData.cellIdx3 ? letData.cellIdx3 : "（编辑）"
                }}</span>
                <label>号</label>
              </div>
            </div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_4"
                  style="width: 74%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx4', '', 'TextItem')"
                >
                  {{ letData.cellIdx4 }}
                </td>
                <td class="textAlignLeft">:</td>
              </tr>
            </table>
            <div class="docTextarea">
              <label style="width: 5%"></label>
              我
              <span
                class="no-underline"
                @click="commandFill('cellIdx5', '局', 'TextItem')"
                >{{
                  letData.cellIdx5 ? letData.cellIdx5 : ""
                }}</span
              >
              于
              <span @click="commandFill('cellIdx6', '年', 'TextItem')">{{
                letData.cellIdx6 ? letData.cellIdx6 : "（XX）"
              }}</span>
              年
              <span @click="commandFill('cellIdx7', '月', 'TextItem')">{{
                letData.cellIdx7 ? letData.cellIdx7 : "（XX）"
              }}</span>
              月
              <span @click="commandFill('cellIdx8', '日', 'TextItem')">{{
                letData.cellIdx8 ? letData.cellIdx8 : "（XX）"
              }}</span>
              日发现
              <span
                @click="commandFill('cellIdx9', '违法行为', 'DangerTableItem')"
                >{{
                  letData.cellIdx9 ? letData.cellIdx9 : "（点击编辑）"
                }}</span
              >
              的违法违规行为，依法作出了
              <span
                style="borderbottom: none"
                @click="
                  commandFill('cellIdx10', '现场处理决定', 'DangerTableItem')
                "
                >{{
                  letData.cellIdx10 ? letData.cellIdx10 : "（点击编辑）"
                }}</span
              >
              的决定 （
              <span
                class="no-underline"
                style="borderbottom: none"
                @click="
                  commandFill('cellIdx11', '现场处理决定书文书号', 'TextItem')
                "
                >{{
                  letData.cellIdx11 ? letData.cellIdx11 : "（点击编辑）"
                }}</span
              >
              矿安监
              <span
                class="no-underline"
                style="borderbottom: none"
                @click="
                  commandFill('cellIdx12', '现场处理决定书文书号', 'TextItem')
                "
                >{{
                  letData.cellIdx12 ? letData.cellIdx12 : "（点击编辑）"
                }}</span
              >
              处〔
              <span
                class="no-underline"
                style="borderbottom: none"
                @click="
                  commandFill('cellIdx13', '现场处理决定书文书号', 'TextItem')
                "
                >{{
                  letData.cellIdx13 ? letData.cellIdx13 : "（点击编辑）"
                }}</span
              >

              〕
              <span
                class="no-underline"
                @click="
                  commandFill('cellIdx14', '现场处理决定书文书号', 'TextItem')
                "
                >{{
                  letData.cellIdx14 ? letData.cellIdx14 : "（点击编辑）"
                }}</span
              >
              号） 。
            </div>
            <div class="docTextarea">
              <label style="width: 5%"></label>
              <span @click="commandFill('cellIdx15', '', 'SelectItem')">{{
                letData.cellIdx15 ? letData.cellIdx15 : "（点击编辑）"
              }}</span>
              ，经复查，意见如下：
              <span @click="commandFill('cellIdx16', '意见', 'TextareaItem')">{{
                letData.cellIdx16 ? letData.cellIdx16 : "（点击编辑）"
              }}</span>
              <div class="line"></div>
            </div>
            <table height="30"></table>
            <div class="docTextLine">
              <div style="flex: 2; display: flex">
                <label>被检查单位意见：</label>
                <div
                  class="line-div"
                  @click="
                    commandFill('cellIdx17', '被检查单位意见', 'TextItem')
                  "
                >
                  {{ letData.cellIdx17 ? letData.cellIdx17 : "（编辑）" }}
                </div>
              </div>
              <div style="flex: 2; display: flex">
                <label >单位负责人（签名）:</label>
                <div
                  class="line-div"
                  @click="
                    commandFill('cellIdx18', '单位负责人（签名）:', 'TextItem')
                  "
                >
                  {{ letData.cellIdx18 ? letData.cellIdx18 : "（编辑）" }}
                </div>
              </div>
              <label>日期：</label>
              <div
                class="line-div"
                @click="commandFill('cellIdx19', '日期:', 'DateItem')"
              >
                {{ letData.cellIdx19 ? letData.cellIdx19 : "（编辑）" }}
              </div>
            </div>
            <div class="docTextLine">
              <div style="flex: 2.5; display: flex">
                <label>复查人员（签名）：</label>
                <div
                  class="line-div"
                  @click="
                    commandFill('cellIdx20', '复查人员（签名）', 'TextItem')
                  "
                >
                  {{ letData.cellIdx20 ? letData.cellIdx20 : "（点击编辑）" }}
                </div>
                <label>日期：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx21', '日期', 'DateItem')"
                >
                  {{ letData.cellIdx21 ? letData.cellIdx21 : "（点击编辑）" }}
                </div>
              </div>
            </div>
            <table height="30"></table>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_14"
                  align="right"
                  style="width: 95%"
                  @click="commandFill('cellIdx22', '', 'TextItem')"
                >
                  {{ letData.cellIdx22 ? letData.cellIdx22 : "（点击编辑）" }}
                </td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_15"
                  align="right"
                  style="width: 95%"
                  data-title
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx23', '日期', 'DateItem')"
                >
                  {{ letData.cellIdx23 ? letData.cellIdx23 : "（点击编辑）" }}
                </td>
              </tr>
            </table>
            <table class="cellLine">
              <td class="textAlignLeft">
                &nbsp;&nbsp;&nbsp;&nbsp;备注：本文书一式两份，一份交被复查单位，一份存档。
              </td>
            </table>
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
// import letMain from "@/views/make-law-writ/components/let-main.vue";
import GoDB from "@/utils/godb.min.js";
import { getDangerObject, getDocNumber } from "@/utils/setInitPaperData";
import associationSelectPaper from "@/components/association-select-paper";
export default {
  name: "Let104",
  mixins: [associationSelectPaper],
  /*   props: {
    corpData: {
      type: Object,
      default: () => {},
    },
    docData: {
      type: Object,
      default: () => {
        return {
          docTypeNo: null,
          docTypeName: null,
        };
      },
    },
    paperData: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    letMain,
  }, */
  data() {
    return {
      letData: {},
      options: {
        cellIdx9: {
          page: "13",
          key: "cellIdx9",
        },
        cellIdx10: {
          page: "13",
          key: "cellIdx10",
        },
        cellIdx15: [
          {
            value: "应你单位申请",
            name: "应你单位申请",
          },
          {
            value: "现整改期届满",
            name: "现整改期届满",
          },
        ],
      },
      associationPaper: ["1", "2"],
    };
  },
  /*   created() {
    this.initData();
  },
  watch: {
    "corpData.corpId"(val) {
      if (val) {
        this.initData();
      }
    },
    "paperData.paperId"(val) {
      this.initData();
    },
  }, */
  methods: {
    async initLetData(selectedPaper) {
      const db = new GoDB(this.$store.state.DBName);
      const corpBase = db.table("corpBase");
      const corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      /* const wkPaper = db.table("wkPaper");
      const caseId = this.corpData.caseId;
      const checkPaper = await wkPaper.findAll((item) => {
        return (
          item.caseId === caseId &&
          item.paperType === this.docData.docTypeNo &&
          item.delFlag !== "1"
        );
      });
      if (checkPaper.length > 0) {
        // 回显
        this.letData = JSON.parse(checkPaper[0].paperContent);
        this.editData = checkPaper[0];
      } else {
        // 创建初始版本 
        // 1.生成文书编号
        let { num0, num1, num3, num4 } = await getDocNumber(
          db,
          this.docData.docTypeNo,
          this.corpData.caseId,
          this.$store.state.user
        );
        // // 2.发现你矿存在：隐患描述
        // // 获取笔录文书中的隐患数据
        const let101Data = await wkPaper.find((item) => {
          return item.caseId === caseId && item.paperType === "1";
        });
        let let101DataPapaerContent = JSON.parse(let101Data.paperContent);
        let dangerObject = getDangerObject(
          let101DataPapaerContent.dangerItemObject.tableData,
          { danger: true }
        );
        let cellIdx9String = dangerObject.dangerString;
        let cellIdx10String = dangerObject.onsiteDescString;
        // // 3.现场处理决定2的文书号：11-14
        let paperNum2 = await getDocNumber(
          db,
          "2",
          caseId,
          this.$store.state.user
        );*/
      let { num0, num1, num3, num4 } = await getDocNumber(
        db,
        this.docData.docTypeNo,
        this.corpData.caseId,
        this.$store.state.user
      );
      let let1DataPapaerContent = JSON.parse(
        selectedPaper.let1Data.paperContent
      );
      let dangerObject = getDangerObject(
        let1DataPapaerContent.dangerItemObject.tableData,
        { danger: true }
      );
      let cellIdx9String = dangerObject.dangerString;
      let cellIdx10String = dangerObject.onsiteDescString;
      let let2DataPapaerContent = JSON.parse(
        selectedPaper.let2Data.paperContent
      );
      await db.close();
      this.letData = {
        cellIdx0: num0, // 文书号
        cellIdx0TypeTextItem: num0, // 文书号
        cellIdx1: num1, // 文书号
        cellIdx1TypeTextItem: num1, // 文书号
        cellIdx2: num3, // 文书号
        cellIdx2TypeTextItem: num3, // 文书号
        cellIdx3: num4, // 文书号
        cellIdx3TypeTextItem: num4, // 文书号
        cellIdx4: corp.corpName ? corp.corpName : null, //
        cellIdx4TypeTextItem: corp.corpName ? corp.corpName : null, //
        cellIdx5: null, // 局
        cellIdx6: null, // 年
        cellIdx7: null, // 月
        cellIdx8: null, // 日
        cellIdx9: cellIdx9String, // 违法违规行为：隐患描述
        cellIdx10: cellIdx10String, // 现场处理决定
        cellIdx11: let2DataPapaerContent.cellIdx0, // 现场处理决定书 文书号
        cellIdx11TypeTextItem: let2DataPapaerContent.cellIdx0, // 现场处理决定书 文书号
        cellIdx12: let2DataPapaerContent.cellIdx1, // 现场处理决定书 文书号
        cellIdx12TypeTextItem: let2DataPapaerContent.cellIdx1, // 现场处理决定书 文书号
        cellIdx13: let2DataPapaerContent.cellIdx2, // 现场处理决定书 文书号
        cellIdx13TypeTextItem: let2DataPapaerContent.cellIdx2, // 现场处理决定书 文书号
        cellIdx14: let2DataPapaerContent.cellIdx3, // 现场处理决定书 文书号
        cellIdx14TypeTextItem: let2DataPapaerContent.cellIdx3, // 现场处理决定书 文书号
        cellIdx15: null, //
        cellIdx16: null, // 意见
        cellIdx17: null, // 被复查单位意见
        cellIdx18: null, // 单位负责人（签名）
        cellIdx19: null, // 日期
        cellIdx20: null, // 复查人员（签名）
        cellIdx21: null, // 日期
        cellIdx22: null, //
        cellIdx23: null, // 日期
        dangerItemObject: let1DataPapaerContent.dangerItemObject,
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
        if (key === "cellIdx9" || key === "cellIdx10") {
          this.options[key] = {
            page: "13",
            key: key,
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
      } else {
        if (key === "cellIdx5") {
          let dataKey = "checkTable";
          this.options[key] = {
            canEdit: false,
          };
          this.$refs.letMain.commandFill(
            key,
            dataKey,
            title,
            type,
            this.letData[dataKey],
            this.options[key]
          );
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/let";
</style>