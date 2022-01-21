<!-- 现场检查 实施检查  延长查封（扣押）期限决定书 45 -->
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
            <div class="textAlignCenter formHeader0">
              煤矿安全监管行政执法文书
              <br />
            </div>
            <div class="textAlignCenter formHeader1">
              <table class="docBody">
                <tr>
                  <td class="textAlignLeft">延长</td>
                  <td
                    class="cellInput"
                    id="cell_idx_0"
                    data-title="查封(扣押)"
                    data-type="text"
                    data-src
                  >
                    {{ letData.cellIdx0 }}
                  </td>
                  <td class="textAlignLeft">期限决定书</td>
                </tr>
              </table>
            </div>
            <div class="docTextLine paper-number-div">
              <div>
                <span
                  @click="commandFill('cellIdx1', '文书号', 'TextItem')"
                >{{ letData.cellIdx1 ? letData.cellIdx1 : '（编辑）' }}</span>
                <label>（</label>
                <span
                  @click="commandFill('cellIdx2', '文书号', 'TextItem')"
                >{{ letData.cellIdx2 ? letData.cellIdx2 : '（编辑）' }}</span>
                <label>）煤安延</label><span
                >{{ letData.cellIdx3 ? letData.cellIdx3 : '（编辑）' }}</span>
                <label>〔</label>
                <span
                  @click="commandFill('cellIdx4', '文书号', 'TextItem')"
                >{{ letData.cellIdx4 ? letData.cellIdx4 : '（编辑）' }}</span>
                <label>〕</label>
                <span
                  @click="commandFill('cellIdx5', '文书号', 'TextItem')"
                >{{ letData.cellIdx5 ? letData.cellIdx5 : '（编辑）' }}</span>
                <label>号</label>
              </div>
            </div>
            <table class="docBody">
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
              日对你单位涉案
              <span
                class="no-underline"
                @click="commandFill('cellIdx10', '', 'SelectItem')"
                >{{
                  letData.cellIdx10 ? letData.cellIdx10 : "（点击编辑）"
                }}</span
              >
              予以
              <span
                class="no-underline"
                >{{
                  letData.cellIdx11 ? letData.cellIdx11 : "（点击编辑）"
                }}</span
              >
              （
              <span
                class="no-underline"
                @click="commandFill('cellIdx12', '', 'TextItem')"
                >{{
                  letData.cellIdx12 ? letData.cellIdx12 : "（点击编辑）"
                }}</span
              >
              （
              <span
                class="no-underline"
                @click="commandFill('cellIdx13', '', 'TextItem')"
                >{{
                  letData.cellIdx13 ? letData.cellIdx13 : "（点击编辑）"
                }}</span
              >
              ）煤安
              <span
                class="no-underline"
                @click="commandFill('cellIdx14', '', 'TextItem')"
                >{{
                  letData.cellIdx14 ? letData.cellIdx14 : "（点击编辑）"
                }}</span
              >
              〔
              <span
                class="no-underline"
                @click="commandFill('cellIdx15', '', 'TextItem')"
                >{{
                  letData.cellIdx15 ? letData.cellIdx15 : "（点击编辑）"
                }}</span
              >
              〕
              <span
                class="no-underline"
                @click="commandFill('cellIdx16', '', 'TextItem')"
                >{{
                  letData.cellIdx16 ? letData.cellIdx16 : "（点击编辑）"
                }}</span
              >
              号）。因
              <span 
                @dblclick="commandFill('cellIdx17', '', `${corpData.caseType === '0' ? 'DangerTable' : 'TextareaItem'}`)"
                @click="commandFill('cellIdx17', '', corpData.caseType === '0' ? 'DangerTextareaItem' : 'TextareaItem')">{{
                letData.cellIdx17 ? letData.cellIdx17 : "（点击编辑）"
              }}</span>
              ，依据《中华人民共和国行政强制法》第<span class="text-decoration">二十五</span>条规定，决定将以上
              <span class="no-underline">{{
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
            <div class="docTextarea">
              <label style="width:5%"></label>
                如果不服本决定，可在接到本决定书之日起60日内向
              <span
                @click="commandFill('cellIdx22', '人民政府', 'TextItem')"
              >{{ letData.cellIdx22 ? letData.cellIdx22 : '（点击编辑）'}}</span>
              人民政府或者
              <span
                @click="commandFill('cellIdx23', '', 'TextItem')"
              >{{ letData.cellIdx23 ? letData.cellIdx23 : '（点击编辑）' }}</span>
              申请行政复议，或者在6个月内依法向
              <span
                @click="commandFill('cellIdx24', '法院', 'TextItem')"
              >{{ letData.cellIdx24 ? letData.cellIdx24 : '（点击编辑）'}}</span>
              法院提起行政诉讼；复议、诉讼期间，不停止执行本决定。
            </div>
            <table class="docBody" style="margin-top: 30px;">
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
            <div class="docTextarea" style="border-top: 2px solid #000;">
              备注：本文书一式两份，一份交被
              <span
                style="borderBottom:none"
              >{{ letData.cellIdx27 ? letData.cellIdx27 : '（点击编辑）'}}</span>
              单位，一份存档。 
            </div>
          </div>
        </div>
      </div>
    </let-main>
    <!-- 关联文书选择 -->
    <select-paper
      v-if="visible.selectPaper"
      :visible="visible.selectPaper"
      :paper-list="paperList"
      @close="closeDialog"
      @confirm-paper="confirmPaper"
    ></select-paper>
  </div>
</template>

<script>
import GoDB from "@/utils/godb.min.js";
import { getDocNumber, setNewDanger, getOrgData } from "@/utils/setInitPaperData";
import associationSelectPaper from "@/components/association-select-paper";
import { setDangerTable } from "@/utils/handlePaperData";
const dictionary = [
  {
    value: "场所",
    name: "场所",
  },
  {
    value: "设施",
    name: "设施",
  },
  {
    value: "物品",
    name: "物品",
  },
  {
    value: "场所、设施",
    name: "场所、设施",
  },
  {
    value: "场所、物品",
    name: "场所、物品",
  },
  {
    value: "设施、物品",
    name: "设施、物品",
  },
  {
    value: "场所、设施、物品",
    name: "场所、设施、物品",
  },
];
export default {
  name: "let114",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {
        cellIdx0: null, // 查封(扣押)
        cellIdx1: null, // 文书号
        cellIdx2: null, // 文书号
        cellIdx3: null, // 查/扣
        cellIdx4: null, // 文书号
        cellIdx5: null, // 文书号
        cellIdx6: null, // corpname
        cellIdx7: null, // 年
        cellIdx8: null, // 月
        cellIdx9: null, // 日
        cellIdx10: null, // 涉案场所XX
        cellIdx11: null, // 查封(扣押)
        cellIdx12: null, // 查封/扣押文书号
        cellIdx13: null, // 查封/扣押文书号
        cellIdx14: null, // 查封/扣押文书号
        cellIdx15: null, // 查封/扣押文书号
        cellIdx16: null, // 查封/扣押文书号
        cellIdx17: null, // 隐患描述
        cellIdx18: null, // 查封(扣押)
        cellIdx19: null, // 年
        cellIdx20: null, // 月
        cellIdx21: null, // 日
        cellIdx22: null, // 人民政府
        cellIdx23: null, // organName
        cellIdx24: null, // 人民法院
        cellIdx25: null, // 执法单位
        cellIdx26: null, // 日期
        cellIdx27: null, // 查封(扣押)
        selectedType: null,
        DangerTable: null,
        SamplingForensicsTable: {
          tableData: [],
          signature: null,
          signDate: "",
        },
        associationPaperId: null,
        associationPaperOrder: []
      },
      options: {
        cellIdx10: dictionary,
      },
      associationPaper: ["32"],
    };
  },
  methods: {
    async initLetData(selectedPaper) {
      let db = new GoDB(this.$store.state.DBName);
      let corpBase = db.table("corpBase");
      let corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      // 1.生成文书编号
      let { num0, num1, num3, num4 } = await getDocNumber(
        db,
        this.docData.docTypeNo,
        this.corpData.caseId
      );
      // 2.获取查封扣押决定书创建日期
      let let32Date = selectedPaper.let32Data.createDate.split(' ')[0].split('-')
      // 3.查封扣押文书号
      let let32DataPaperContent = JSON.parse(selectedPaper.let32Data.paperContent);
      // 4.隐患描述，多个以分号隔开
      let cellIdx17String =
        this.corpData.caseType === "0"
          ? setDangerTable(
              let32DataPaperContent.DangerTable,
              {},
              {
                page: "45",
                key: "cellIdx17",
              }
            )
          : "";
      // 5.地点：sysOfficeInfo实体中goverPrefix字段 organName字段+ courtPrefix字段
      let orgSysOfficeInfo = await getOrgData(db, this.$store.state.curCase.affiliate)
      // 查封扣押决定书文书中是查封/扣押
      let selectedType = let32DataPaperContent.selectedType
      let DangerTable = null;
      if (this.corpData.caseType === "0") {
        DangerTable = let32DataPaperContent.DangerTable
          ? setNewDanger(
              selectedPaper.let32Data,
              let32DataPaperContent.DangerTable
            )
          : {};
      }
      await db.close();
      let associationPaperId = Object.assign({}, this.setAssociationPaperId(let32DataPaperContent.associationPaperId), {
        paper32Id: selectedPaper.let32Data.paperId,
      }) 
      let associationPaperOrder = this.setAssociationPaperOrder(let32DataPaperContent.associationPaperOrder)
      associationPaperOrder.push('32')
      this.letData = Object.assign({}, this.letData, {
        cellIdx0: selectedType, // 查封(扣押)
        cellIdx1: num0, // 文书号
        cellIdx2: num1, // 文书号
        cellIdx3: selectedType ? selectedType.substring(0, 1) : '', // 查/扣
        cellIdx4: num3, // 文书号
        cellIdx5: num4, // 文书号
        cellIdx6: corp.corpName ? corp.corpName : null, // corpname
        cellIdx7: let32Date[0], // 年
        cellIdx8: let32Date[1], // 月
        cellIdx9: let32Date[2], // 日
        cellIdx10: let32DataPaperContent.cellIdx9, // 对你单位涉案场所XX
        cellIdx11: selectedType, // 予以XX 查封、扣押
        cellIdx12: let32DataPaperContent.cellIdx1, // 查封扣押文书号
        cellIdx13: let32DataPaperContent.cellIdx2, // 查封扣押文书号
        cellIdx14: let32DataPaperContent.cellIdx3, // 查封扣押文书号 查、扣
        cellIdx15: let32DataPaperContent.cellIdx4, // 查封扣押文书号
        cellIdx16: let32DataPaperContent.cellIdx5, // 查封扣押文书号
        cellIdx17: cellIdx17String, // 隐患描述
        cellIdx18: selectedType, // 将以上XX的期限延长
        cellIdx22: orgSysOfficeInfo.goverPrefix, // 可在接到本决定书之日起60日内向XX人民政府
        cellIdx23: orgSysOfficeInfo.organName, // organName
        cellIdx24: orgSysOfficeInfo.courtPrefix, // courtPrefix人民法院
        cellIdx25: this.$store.state.curCase.provinceGroupName, //
        cellIdx26: this.todayDate, // 日期
        cellIdx27: selectedType, // 查封/扣押
        selectedType: selectedType, // 查封/扣押
        DangerTable: DangerTable,
        SamplingForensicsTable: let32DataPaperContent.SamplingForensicsTable,
        associationPaperId,
        associationPaperOrder
      })
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
        if (key === "cellIdx17" && type === "DangerTable") {
          this.options[key] = {
            page: "45",
            key: key,
          };
          dataKey = "DangerTable";
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