<!-- 现场检查 实施检查  延长查封（扣押）期限决定书 -->
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
              <table class="docBody">
                <tr>
                  <td
                    class="cellInput"
                    id="cell_idx_0"
                    data-title="查封(扣押)"
                    data-type="text"
                    data-src
                    @click="commandFill('cellIdx0', '查封(扣押)', 'TextItem')"
                  >
                    {{ letData.cellIdx0 }}
                  </td>
                  <td class="textAlignLeft">决定书</td>
                </tr>
              </table>
            </div>
            <div class="stdRowH"></div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_1"
                  align="right"
                  style="width: 35%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx1', '文书号', 'TextItem')"
                >
                  {{ letData.cellIdx1 }}
                </td>
                <td class="textAlignLeft">（</td>
                <td
                  class="cellInput"
                  id="cell_idx_2"
                  align="center"
                  style="width: 12%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx2', '', 'TextItem')"
                >
                  {{ letData.cellIdx2 }}
                </td>
                <td class="textAlignLeft">）</td>
                <td class="textAlignLeft">煤安延</td>
                <td
                  class="cellInput"
                  id="cell_idx_3"
                  align="center"
                  style="width: 8%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx3', '', 'TextItem')"
                >
                  {{ letData.cellIdx3 }}
                </td>
                <td class="textAlignLeft">〔</td>
                <td
                  class="cellInput"
                  id="cell_idx_4"
                  align="center"
                  style="width: 8%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx4', '', 'TextItem')"
                >
                  {{ letData.cellIdx4 }}
                </td>
                <td class="textAlignLeft">〕</td>
                <td
                  class="cellInput"
                  id="cell_idx_5"
                  align="center"
                  style="width: 10%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx5', '', 'TextItem')"
                >
                  {{ letData.cellIdx5 }}
                </td>
                <td class="textAlignLeft">号&nbsp;&nbsp;</td>
              </tr>

              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_6"
                  style="width: 62%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx6', '', 'TextItem')"
                >
                  {{ letData.cellIdx6 }}
                </td>
                <td class="textAlignLeft">:</td>
              </tr>
            </table>
            <div class="docTextarea">
              <label style="width: 5%"></label>
              本机关于
              <span @click="commandFill('cellIdx7', '年', 'TextItem')">{{
                letData.cellIdx7 ? letData.cellIdx7 : "（XX）"
              }}</span>
              年
              <span @click="commandFill('cellIdx8', '月', 'TextItem')">{{
                letData.cellIdx8 ? letData.cellIdx8 : "（XX）"
              }}</span>
              月
              <span @click="commandFill('cellIdx9', '', 'TextItem')">{{
                letData.cellIdx9 ? letData.cellIdx9 : "（XX）"
              }}</span>
              日对你单位涉案场所
              <span
                style="borderbottom: none"
                @click="commandFill('cellIdx10', '', 'TextItem')"
                >{{
                  letData.cellIdx10 ? letData.cellIdx10 : "（点击编辑）"
                }}</span
              >
              予以
              <span
                style="borderbottom: none"
                @click="commandFill('cellIdx11', '', 'TextItem')"
                >{{
                  letData.cellIdx11 ? letData.cellIdx11 : "（点击编辑）"
                }}</span
              >
              （
              <span
                style="borderbottom: none"
                @click="commandFill('cellIdx12', '', 'TextItem')"
                >{{
                  letData.cellIdx12 ? letData.cellIdx12 : "（点击编辑）"
                }}</span
              >
              (
              <span
                style="borderbottom: none"
                @click="commandFill('cellIdx13', '', 'TextItem')"
                >{{
                  letData.cellIdx13 ? letData.cellIdx13 : "（点击编辑）"
                }}</span
              >
              ) 煤安
              <span
                style="borderbottom: none"
                @click="commandFill('cellIdx14', '', 'TextItem')"
                >{{
                  letData.cellIdx14 ? letData.cellIdx14 : "（点击编辑）"
                }}</span
              >
              〔
              <span
                style="borderbottom: none"
                @click="commandFill('cellIdx15', '', 'TextItem')"
                >{{
                  letData.cellIdx15 ? letData.cellIdx15 : "（点击编辑）"
                }}</span
              >
              〕
              <span
                style="borderbottom: none"
                @click="commandFill('cellIdx16', '', 'TextItem')"
                >{{
                  letData.cellIdx16 ? letData.cellIdx16 : "（点击编辑）"
                }}</span
              >
              号&nbsp;&nbsp;)&nbsp;&nbsp;因
              <span @click="commandFill('cellIdx17', '', 'TextareaItem')">{{
                letData.cellIdx17 ? letData.cellIdx17 : "（点击编辑）"
              }}</span>
              依据《中华人民共和国行政强制法》第二十五条规定，第一、二款规定，将以上
              <span @click="commandFill('cellIdx18', '', 'TextItem')">{{
                letData.cellIdx18 ? letData.cellIdx18 : "（点击编辑）"
              }}</span>
              的期限延长至
              <span @click="commandFill('cellIdx19', '年', 'TextItem')">{{
                letData.cellIdx19 ? letData.cellIdx19 : "（XX）"
              }}</span>
              年
              <span @click="commandFill('cellIdx20', '月', 'TextItem')">{{
                letData.cellIdx20 ? letData.cellIdx20 : "（XX）"
              }}</span>
              月
              <span @click="commandFill('cellIdx21', '', 'TextItem')">{{
                letData.cellIdx21 ? letData.cellIdx21 : "（XX）"
              }}</span>
              日。
            </div>

            <table style="border: solid 0 #000" class="docBody">
              <tr>
                <td style="width: 5%"></td>
                <td class="textAlignLeft">
                  如果不服本决定，可在接到本决定书之日起60日内向
                </td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_22"
                  align="center"
                  style="width: 43%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx22', '', 'TextItem')"
                >
                  {{ letData.cellIdx22 }}
                </td>
              </tr>
              <tr>
                <td class="textAlignLeft">人民政府或者</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_23"
                  align="center"
                  style="width: 49%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx23', '', 'TextItem')"
                >
                  {{ letData.cellIdx23 }}
                </td>
                <td class="textAlignLeft">申请行政复议，或者在6个月内依法向</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_24"
                  align="center"
                  style="width: 35%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx24', '', 'TextItem')"
                >
                  {{ letData.cellIdx24 }}
                </td>
                <td class="textAlignLeft">
                  人民法院提起行政诉讼；复议、诉讼期间，不停止执行本决定。
                </td>
              </tr>
            </table>
            <table height="30"></table>
            <table height="30"></table>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_25"
                  align="right"
                  style="width: 95%"
                  @click="commandFill('cellIdx25', '', 'TextItem')"
                >
                  {{ letData.cellIdx25 ? letData.cellIdx25 : "（点击编辑）" }}
                </td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_26"
                  align="right"
                  style="width: 95%"
                  data-title
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx26', '日期', 'DateItem')"
                >
                  {{ letData.cellIdx26 ? letData.cellIdx26 : "（点击编辑）" }}
                </td>
              </tr>
            </table>
            <table height="60"></table>

            <table>
              <hr />
              <td class="textAlignLeft">
                &nbsp;&nbsp;&nbsp;&nbsp;备注：本文书一式两份，一份交被
              </td>
              <td
                class="cellInput"
                id="cell_idx_27"
                align="center"
                style="width: 15%"
                data-title
                data-type="text"
                data-src
                @click="commandFill('cellIdx27', '', 'TextItem')"
              >
                {{ letData.cellIdx27 }}
              </td>
              <td class="textAlignLeft">单位，一份存档。</td>
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
import GoDB from "@/utils/godb.min.js";
import { getDangerObject, getDocNumber } from "@/utils/setInitPaperData";
import associationSelectPaper from "@/components/association-select-paper";

export default {
  name: "Let1100",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {},
      options: {},
      associationPaper: ["32"],
    };
  },
  methods: {
    async initLetData(selectedPaper) {
      const db = new GoDB(this.$store.state.DBName);
      const corpBase = db.table("corpBase");
      const corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      // 2.生成文书编号
      let { num0, num1, num3, num4 } = await getDocNumber(
        db,
        this.docData.docTypeNo,
        this.corpData.caseId,
        this.$store.state.user
      );
      // 4.地点：sysOfficeInfo实体中goverPrefix字段 organName字段+ courtPrefix字段
      const orgInfo = db.table("orgInfo");
      const orgData = await orgInfo.find(
        (item) => item.no === this.$store.state.user.userGroupId
      );
      let orgSysOfficeInfo = orgData
        ? JSON.parse(orgData.sysOfficeInfo)
        : { organName: "", depAddress: "" };
      // 5.查封扣押文书号
      let let32DataPapaerContent = JSON.parse(selectedPaper.let32Data.paperContent);
      console.log('let32DataPapaerContent', let32DataPapaerContent)
      let let32Date = let32DataPapaerContent.cellIdx20
        ? let32DataPapaerContent.cellIdx20
            .replace("年", "-")
            .replace("月", "-")
            .replace("日", "-")
            .split("-")
        : ["", "", ""];
      // 查封扣押决定书文书中是查封/扣押
      let selectedType = let32DataPapaerContent.cellIdx0
      await db.close();
      this.letData = {
        cellIdx0: `延长${selectedType}期限`, // 查封(扣押)
        cellIdx0TypeTextItem: `延长${selectedType}期限`,
        cellIdx1: num0, // 文书号
        cellIdx1TypeTextItem: num0, // 文书号
        cellIdx2: num1, // 文书号
        cellIdx2TypeTextItem: num1, // 文书号
        cellIdx3: null, // 查/扣
        cellIdx4: num3, // 文书号
        cellIdx4TypeTextItem: num3, // 文书号
        cellIdx5: num4, // 文书号
        cellIdx5ypeTextItem: num4, // 文书号
        cellIdx6: corp.corpName ? corp.corpName : null, // corpname
        cellIdx6TypeTextItem: corp.corpName ? corp.corpName : null, // corpname
        cellIdx7: let32Date[0], // 年
        cellIdx8: let32Date[1], // 月
        cellIdx9: let32Date[2], // 日
        cellIdx10: null, // 对你单位涉案场所XX
        cellIdx11: selectedType, // 予以XX 查封、扣押
        cellIdx11TypeTextItem: selectedType,
        cellIdx12: let32DataPapaerContent.cellIdx1, // 查封扣押文书号
        cellIdx12TypeTextItem: let32DataPapaerContent.cellIdx1, // 查封扣押文书号
        cellIdx13: let32DataPapaerContent.cellIdx2, // 查封扣押文书号
        cellIdx13TypeTextItem: let32DataPapaerContent.cellIdx2, // 查封扣押文书号
        cellIdx14: let32DataPapaerContent.cellIdx3, // 查封扣押文书号 查、扣
        cellIdx14TypeTextItem: let32DataPapaerContent.cellIdx3, // 查封扣押文书号 查、扣
        cellIdx15: let32DataPapaerContent.cellIdx4, // 查封扣押文书号
        cellIdx15TypeTextItem: let32DataPapaerContent.cellIdx4, // 查封扣押文书号
        cellIdx16: let32DataPapaerContent.cellIdx5, // 查封扣押文书号
        cellIdx16TypeTextItem: let32DataPapaerContent.cellIdx5, // 查封扣押文书号
        cellIdx17: let32DataPapaerContent.cellIdx7, // 隐患描述
        cellIdx17TypeTextareaItem: let32DataPapaerContent.cellIdx7, // 隐患描述
        cellIdx18: selectedType, // 将以上XX的期限延长
        cellIdx18TypeTextItem: selectedType, // 将以上XX的期限延长
        cellIdx19: null, // 年
        cellIdx20: null, // 月
        cellIdx21: null, // 日
        cellIdx22: orgSysOfficeInfo.goverPrefix, // 可在接到本决定书之日起60日内向XX人民政府
        cellIdx22TypeTextItem: orgSysOfficeInfo.goverPrefix, // 可在接到本决定书之日起60日内向XX人民政府
        cellIdx23: orgSysOfficeInfo.organName, // organName
        cellIdx23TypeTextItem: orgSysOfficeInfo.organName, // organName
        cellIdx24: orgSysOfficeInfo.depAddress, // courtPrefix人民法院
        cellIdx24TypeTextItem: orgSysOfficeInfo.depAddress, // courtPrefix人民法院
        cellIdx25: null, //
        cellIdx26: null, // 日期
        cellIdx27: selectedType, // 查封/扣押
        cellIdx27TypeTextItem: selectedType, // 查封/扣押
        SamplingForensicsTable: {
          tableData: [],
          signature: null,
          signDate: "",
        },
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