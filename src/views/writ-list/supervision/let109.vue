<!-- 现场检查 实施检查 先行登记保存证据处理决定书 27 -->
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
              煤矿安全监管行政执法文书
              <br />
            </div>
            <div class="textAlignCenter formHeader1">
              先行登记保存证据处理决定书
            </div>
            <div class="docTextLine paper-number-div">
              <div>
                <span
                  @click="commandFill('cellIdx0', '文书号', 'TextItem')"
                >{{ letData.cellIdx0 ? letData.cellIdx0 : '（编辑）' }}</span>
                <label>（</label>
                <span
                  @click="commandFill('cellIdx1', '文书号', 'TextItem')"
                >{{ letData.cellIdx1 ? letData.cellIdx1 : '（编辑）' }}</span>
                <label>）煤安保处〔</label>
                <span
                  @click="commandFill('cellIdx2', '文书号', 'TextItem')"
                >{{ letData.cellIdx2 ? letData.cellIdx2 : '（编辑）' }}</span>
                <label>〕</label>
                <span
                  @click="commandFill('cellIdx3', '文书号', 'TextItem')"
                >{{ letData.cellIdx3 ? letData.cellIdx3 : '（编辑）' }}</span>
                <label>号</label>
              </div>
            </div>
            <div class="docTextarea">
              <label style="width: 5%"></label>
              本机关于
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
              等证据进行了先行登记保存（
              <span
                class="no-underline"
                @click="commandFill('cellIdx10', '', 'TextItem')"
                >{{ letData.cellIdx10 ? letData.cellIdx10 : "点击编辑" }}</span
              >
              （
              <span
                class="no-underline"
                @click="commandFill('cellIdx11', '', 'TextItem')"
                >{{ letData.cellIdx11 ? letData.cellIdx11 : "点击编辑" }}</span
              >
              )&nbsp;&nbsp;煤安保〔
              <span
                class="no-underline"
                @click="commandFill('cellIdx12', '', 'TextItem')"
                >{{ letData.cellIdx12 ? letData.cellIdx12 : "点击编辑" }}</span
              >
              〕
              <span
                class="no-underline"
                @click="commandFill('cellIdx13', '', 'TextItem')"
                >{{ letData.cellIdx13 ? letData.cellIdx13 : "点击编辑" }}</span
              >
              号）。现根据《中华人民共和国行政处罚法》第五十六条规定，对上述证据作出如下处理决定:
            </div>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              @click="commandFill('cellIdx14', '处理决定', 'TextareaItem')">
              <p
                style="width:100%; height:auto; word-wrap:break-word;word-wrap: break-all; overflow: hidden;"
              >{{ letData.cellIdx14 ? letData.cellIdx14 : '（点击编辑）' }}</p>
              <cell-line></cell-line>
            </div>
            <div class="docTextarea">
              <label style="width:5%"></label>
              如果不服本决定，可在接到本决定书之日起60日内向
              <span
                @click="commandFill('cellIdx15', '', 'TextItem')"
              >{{ letData.cellIdx15 ? letData.cellIdx15 : '（点击编辑）'}}</span>
              人民政府或者
              <span
                @click="commandFill('cellIdx16', '人民法院', 'TextItem')"
              >{{ letData.cellIdx16 ? letData.cellIdx16 : '（点击编辑）' }}</span>
              申请行政复议,或者在6个月内依法向
              <span
                @click="commandFill('cellIdx17', '人民法院', 'TextItem')"
              >{{ letData.cellIdx17 ? letData.cellIdx17 : '（点击编辑）'}}</span>
              人民法院提起行政诉讼；复议、诉讼期间，不停止执行本决定。
            </div>
            <table class="docBody" style="margin-top: 60px;">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_18"
                  align="right"
                  style="width: 95%"
                  @click="commandFill('cellIdx18', '', 'TextItem')"
                >
                  {{ letData.cellIdx18 ? letData.cellIdx18 : "（点击编辑）" }}
                </td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_19"
                  align="right"
                  style="width: 95%"
                  data-title
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx19', '日期', 'DateItem')"
                >
                  {{ letData.cellIdx19 ? letData.cellIdx19 : "（点击编辑）" }}
                </td>
              </tr>
            </table>
            <div class="docTextarea" style="border-top: 2px solid #000; margin-top: 60px;">
              备注：本文书一式两份，一份交被取证单位，一份存档。
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
import { getDocNumber } from "@/utils/setInitPaperData";
import associationSelectPaper from "@/components/association-select-paper";
export default {
  name: "Let109",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {},
      options: {},
      associationPaper: ["25"],
    };
  },
  methods: {
    async initLetData(selectedPaper) {
      const db = new GoDB(this.$store.state.DBName);
      const corpBase = db.table("corpBase");
      const corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      // 1.生成文书编号
      let { num0, num1, num3, num4 } = await getDocNumber(
        db,
        this.docData.docTypeNo,
        this.corpData.caseId,
        this.$store.state.user
      );
      let let25DataPapaerContent = JSON.parse(selectedPaper.let25Data.paperContent);
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
      // 3.sysOfficeInfo实体中 goverPrefix organName、人民法院：courtPrefix
      const orgInfo = db.table("orgInfo");
      const orgData = await orgInfo.find(
        (item) => item.no === this.$store.state.user.userGroupId
      );
      let orgSysOfficeInfo = orgData && orgData.sysOfficeInfo
        ? JSON.parse(orgData.sysOfficeInfo)
        : { goverPrefix: "", organName: "", courtPrefix: "" };
      let cellIdx15String = orgSysOfficeInfo.goverPrefix;
      let cellIdx16String = orgSysOfficeInfo.organName;
      let cellIdx17String = orgSysOfficeInfo.courtPrefix;
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
        cellIdx4: corp.corpName ? corp.corpName : null, // corpname
        cellIdx4TypeTextItem: corp.corpName ? corp.corpName : null, // corpname
        cellIdx5: null, // 单位
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
        cellIdx16: cellIdx16String, // organName
        cellIdx16TypeTextItem: cellIdx16String, // organName
        cellIdx17: cellIdx17String, // 人民法院
        cellIdx17TypeTextItem: cellIdx17String, // 人民法院
        cellIdx18: this.$store.state.curCase.groupName, //
        cellIdx18TypeTextItem: this.$store.state.curCase.groupName, //
        cellIdx19: this.todayDate, // 日期
        cellIdx19TypeDateItem: this.todayDate, // 日期
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