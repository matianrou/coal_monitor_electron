<!-- 现场检查 实施检查 先行登记保存证据处理决定书 -->
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
            <div class="textAlignCenter formHeader3">
              先行登记保存证据处理决定书
            </div>
            <div class="docTextLine paper-number-div">
              <div>
                <span @click="commandFill('cellIdx0', '', 'TextItem')">{{
                  letData.cellIdx0 ? letData.cellIdx0 : "（编辑）"
                }}</span>
                <label>矿安监</label>
                <span @click="commandFill('cellIdx1', '', 'TextItem')">{{
                  letData.cellIdx1 ? letData.cellIdx1 : "（编辑）"
                }}</span>
                <label>先保处〔</label>
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
                  style="width: 62%"
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
              日对你单位的
              <span @click="commandFill('cellIdx9', '', 'TextItem')">{{
                letData.cellIdx9 ? letData.cellIdx9 : "（点击编辑）"
              }}</span>
              等物品进行了先行登记保存（
              <span @click="commandFill('cellIdx10', '', 'TextItem')">{{
                letData.cellIdx10 ? letData.cellIdx10 : "（编辑）"
              }}</span>
              矿安监
              <span @click="commandFill('cellIdx11', '', 'TextItem')">{{
                letData.cellIdx11 ? letData.cellIdx11 : "（编辑）"
              }}</span>
              先保〔
              <span @click="commandFill('cellIdx12', '', 'TextItem')">{{
                letData.cellIdx12 ? letData.cellIdx12 : "（编辑）"
              }}</span>
              〕
              <span @click="commandFill('cellIdx13', '', 'TextItem')">{{
                letData.cellIdx13 ? letData.cellIdx13 : "（编辑）"
              }}</span>
              号）。现根据《中华人民共和国行政处罚法》第三十七条第二款规定，对上述物品作出以下处理决定：
              <span @click="commandFill('cellIdx14', '处理决定', 'TextItem')">{{
                letData.cellIdx14 ? letData.cellIdx14 : "（点击编辑）"
              }}</span>
            </div>
            <div class="docTextarea">
              <label style="width: 5%"></label>
              如对本处理决定不服，可在接到本决定书之日起60日内向
              <span @click="commandFill('cellIdx15', '', 'TextItem')">{{
                letData.cellIdx15 ? letData.cellIdx15 : "（点击编辑）"
              }}</span>
              申请行政复议或6个月内向
              <span @click="commandFill('cellIdx16', '人民法院', 'TextItem')">{{
                letData.cellIdx16 ? letData.cellIdx16 : "（点击编辑）"
              }}</span>
              人民法院提起行政诉讼，但不停止执行本决定。
            </div>
            <table height="60"></table>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_17"
                  align="right"
                  style="width: 95%"
                  @click="commandFill('cellIdx17', '', 'TextItem')"
                >
                  {{ letData.cellIdx17 ? letData.cellIdx17 : "（点击编辑）" }}
                </td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_18"
                  align="right"
                  style="width: 95%"
                  data-title
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx18', '日期', 'DateItem')"
                >
                  {{ letData.cellIdx18 ? letData.cellIdx18 : "（点击编辑）" }}
                </td>
              </tr>
            </table>
            <table class="cellLine">
              <td class="textAlignLeft">
                &nbsp;&nbsp;&nbsp;&nbsp;备注：本文书一式两份，一份交被检查单位，一份存档。
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
import { getDocNumber } from "@/utils/setInitPaperData";
import associationSelectPaper from "@/components/association-select-paper";
export default {
  name: "Let109",
  mixins: [associationSelectPaper],
  /*  props: {
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
  },
  components: {
    letMain,
  }, */
  data() {
    return {
      letData: {},
      options: {},
      associationPaper: ["25"],
      // editData: {}, // 回显数据
    };
  },
  /*  created() {
    this.initData();
  },
  watch: {
    "corpData.corpId"(val) {
      if (val) {
        this.initData();
      }
    },
  }, */
  methods: {
    async initLetData(selectedPaper) {
      const db = new GoDB(this.$store.state.DBName);
      const corpBase = db.table("corpBase");
      const corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      /*  const wkPaper = db.table("wkPaper");
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
        // 创建初始版本 */
      // 1.生成文书编号
      let { num0, num1, num3, num4 } = await getDocNumber(
        db,
        this.docData.docTypeNo,
        this.corpData.caseId,
        this.$store.state.user
      );
      /* // 2.获取先行登记保存证据通知书中的日期、物品清单和编号字段
        const let108Data = await wkPaper.find((item) => {
          return item.caseId === caseId && item.paperType === "25";
        });
        let let108DataPapaerContent = JSON.parse(let108Data.paperContent);
        // 日期
        let let108Date = let108DataPapaerContent.cellIdx14;
        let108Date = let108Date
          .replace("年", "-")
          .replace("月", "-")
          .replace("日", "-");
        let dateList = let108Date.split("-");
        let cellIdx6String = dateList[0];
        let cellIdx7String = dateList[0];
        let cellIdx8String = dateList[0];
        // 物品名称：
        let let108Article =
          let108DataPapaerContent.SamplingForensicsTable.tableData;
        let articleName = "";
        if (let108Article.length > 0) {
          let108Article.map((item) => {
            articleName += item.name + "、";
          });
          articleName = articleName.substring(0, articleName.length - 1);
        }
        let cellIdx9String = articleName;
        // 文书号：
        let num1080 = let108DataPapaerContent.cellIdx0;
        let num1081 = let108DataPapaerContent.cellIdx1;
        let num1083 = let108DataPapaerContent.cellIdx2;
        let num1084 = let108DataPapaerContent.cellIdx3; */
      let let25DataPapaerContent = JSON.parse(
        selectedPaper.let25Data.paperContent
      );
      // 日期
      let let25Date = let25DataPapaerContent.cellIdx14;
      let25Date = let25Date
        ? let25Date.replace("年", "-").replace("月", "-").replace("日", "-")
        : " - - ";
      let dateList = let25Date.split("-");
      let cellIdx6String = dateList[0];
      let cellIdx7String = dateList[1];
      let cellIdx8String = dateList[2];
      // 物品名称：
      let let25Article = let25DataPapaerContent.SamplingForensicsTable
        ? let25DataPapaerContent.SamplingForensicsTable.tableData
        : [];
      let articleName = "";
      if (let25Article.length > 0) {
        let25Article.map((item) => {
          articleName += item.name + "、";
        });
        articleName = articleName.substring(0, articleName.length - 1);
      }
      let cellIdx9String = articleName;
      // 文书号：
      let num250 = let25DataPapaerContent.cellIdx0;
      let num251 = let25DataPapaerContent.cellIdx1;
      let num253 = let25DataPapaerContent.cellIdx2;
      let num254 = let25DataPapaerContent.cellIdx3;
      // 3.sysOfficeInfo实体中 organName、人民法院：courtPrefix
      const orgInfo = db.table("orgInfo");
      const orgData = await orgInfo.find(
        (item) => item.no === this.$store.state.user.userGroupId
      );
      let orgSysOfficeInfo =
        orgData && orgData.sysOfficeInfo
          ? JSON.parse(orgData.sysOfficeInfo)
          : { organName: "", courtPrefix: "" };
      let cellIdx15String = orgSysOfficeInfo.organName;
      let cellIdx16String = orgSysOfficeInfo.courtPrefix;
      this.letData = {
        cellIdx0: num0, // 文书号
        cellIdx0TypeTextItem: num0, // 文书号
        cellIdx1: num1, // 文书号
        cellIdx1TypeTextItem: num1, // 文书号
        cellIdx2: num3, // 文书号
        cellIdx2TypeTextItem: num3, // 文书号
        cellIdx3: num4, // 文书号
        cellIdx3TypeTextItem: num4, // 文书号
        cellIdx4: corp.corpName ? corp.corpName : null, // corpname
        cellIdx4TypeTextItem: corp.corpName ? corp.corpName : null, // corpname
        cellIdx5: null, // 局
        cellIdx6: cellIdx6String, // 年
        cellIdx6TypeTextItem: cellIdx6String, // 年
        cellIdx7: cellIdx7String, // 月
        cellIdx7TypeTextItem: cellIdx7String, // 月
        cellIdx8: cellIdx8String, // 日
        cellIdx8TypeTextItem: cellIdx8String, // 日
        cellIdx9: cellIdx9String, // 物品名称
        cellIdx9TypeTextItem: cellIdx9String, // 物品名称
        cellIdx10: num250, // 文书号
        cellIdx10TypeTextItem: num250, // 文书号
        cellIdx11: num251, // 文书号
        cellIdx11TypeTextItem: num251, // 文书号
        cellIdx12: num253, // 文书号
        cellIdx12TypeTextItem: num253, // 文书号
        cellIdx13: num254, // 文书号
        cellIdx13TypeTextItem: num254, // 文书号
        cellIdx14: null, // 处理决定
        cellIdx15: cellIdx15String, // 可在接到本决定书之日起60日内向。。。申请行政复议或6个月内向
        cellIdx15TypeTextItem: cellIdx15String, // 可在接到本决定书之日起60日内向。。。申请行政复议或6个月内向
        cellIdx16: cellIdx16String, // 人民法院
        cellIdx16TypeTextItem: cellIdx16String, // 人民法院
        cellIdx17: null, //
        cellIdx18: null, // 日期
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