<!-- 行政处罚 一般程序 行政决定履行催告书 39 -->
<template>
  <div style="width: 100%; height: 100%">
    <let-main
      ref="letMain"
      :corp-data="corpData"
      :doc-data="docData"
      :let-data="letData"
      :paper-data="paperData"
      :from-page="fromPage"
      @go-back="goBack"
    >
      <div slot="left">
        <div class="page page-sizeA4">
          <div>
            <div class="stdRowH"></div>
            <div class="textAlignCenter formHeader2">
              国 家 矿 山 安 全 监 察
            </div>
            <div class="textAlignCenter formHeader4">
              行 政 决 定 履 行 催 告 书
            </div>
            <div class="formHeader5 paper-number-div">
              <div>
                <span @click="commandFill('cellIdx0', '文书号', 'TextItem')">{{
                  letData.cellIdx0 ? letData.cellIdx0 : "（编辑）"
                }}</span>
                <label>煤安监</label>
                <span @click="commandFill('cellIdx1', '文书号', 'TextItem')">{{
                  letData.cellIdx1 ? letData.cellIdx1 : "（编辑）"
                }}</span>
                <label>催〔</label>
                <span @click="commandFill('cellIdx2', '文书号', 'TextItem')">{{
                  letData.cellIdx2 ? letData.cellIdx2 : "（编辑）"
                }}</span>
                <label>〕</label>
                <span @click="commandFill('cellIdx3', '文书号', 'TextItem')">{{
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
                  style="width: 50%"
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
                >{{ letData.cellIdx5 ? letData.cellIdx5 : "" }}</span
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
              日向你
              <span class="no-underline">{{
                letData.cellIdx9 ? letData.cellIdx9 : "（点击编辑）"
              }}</span>
              送达行政处罚决定书 （
              <span
                class="no-underline"
                @click="commandFill('cellIdx10', '文书号', 'TextItem')"
                >{{
                  letData.cellIdx10 ? letData.cellIdx10 : "（点击编辑）"
                }}</span
              >
              煤安监
              <span
                class="no-underline"
                @click="commandFill('cellIdx11', '文书号', 'TextItem')"
                >{{
                  letData.cellIdx11 ? letData.cellIdx11 : "（点击编辑）"
                }}</span
              >
              罚〔
              <span
                class="no-underline"
                @click="commandFill('cellIdx12', '文书号', 'TextItem')"
                >{{
                  letData.cellIdx12 ? letData.cellIdx12 : "（点击编辑）"
                }}</span
              >
              〕
              <span
                class="no-underline"
                @click="commandFill('cellIdx13', '文书号', 'TextItem')"
                >{{
                  letData.cellIdx13 ? letData.cellIdx13 : "（点击编辑）"
                }}</span
              >
              号），你
              <span class="no-underline">{{
                letData.cellIdx14 ? letData.cellIdx14 : "（点击编辑）"
              }}</span>
              在法定期限内对该行政决定未申请行政复议或者提起行政诉讼，也未履行该行政决定。根据《中华人民共和国行政强制法》第五十四条规定，现催告你
              <span class="no-underline">{{
                letData.cellIdx15 ? letData.cellIdx15 : "（点击编辑）"
              }}</span>
              自收到本催告书之日起十日内，
              <span @click="commandFill('cellIdx16', '', 'TextItem')">{{
                letData.cellIdx16 ? letData.cellIdx16 : "（点击编辑）"
              }}</span
              >。
            </div>
            <div class="docTextarea">
              <label style="width: 5%"></label>
              收到本催告书后，你
              <span class="no-underline">{{
                letData.cellIdx17 ? letData.cellIdx17 : "（点击编辑）"
              }}</span>
              有权进行陈述、申辩。无正当理由逾期仍不履行行政决定的，我
              <span
                class="no-underline"
                @click="commandFill('cellIdx18', '局', 'TextItem')"
                >{{ letData.cellIdx18 ? letData.cellIdx18 : "" }}</span
              >
              将依法申请人民法院强制执行。
            </div>
            <table height="60"></table>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:60%">
                <span class="no-line">
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;受送达</span><span class="no-line">{{ letData.cellIdx19 ? letData.cellIdx19 : "(编辑)" }}</span>（签名）:</span>
                <span @click="commandFill('cellIdx20', '（签名）', 'TextItem')"
                  >{{ letData.cellIdx20 ? letData.cellIdx20 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;日期:</span>
                <span @click="commandFill('cellIdx21', '日期', 'DateItem')">{{
                  letData.cellIdx21 ? letData.cellIdx21 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:60%">
                <span class="no-line">
                  <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;我</span>
                  <span class="no-line" @click="commandFill('cellIdx22', '局/个人', 'TextItem')"
                  >{{ letData.cellIdx22 ? letData.cellIdx22 : "(编辑)" }}</span>
                地址：</span>
                <span @click="commandFill('cellIdx23', '地址', 'TextItem')"
                  >{{ letData.cellIdx23 ? letData.cellIdx23 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;邮政编码：</span>
                <span @click="commandFill('cellIdx24', '邮政编码', 'TextItem')">{{
                  letData.cellIdx24 ? letData.cellIdx24 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:60%">
                <span class="no-line">
                  <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;我</span>
                  <span class="no-line" @click="commandFill('cellIdx25', '局', 'TextItem')"
                  >{{ letData.cellIdx25 ? letData.cellIdx25 : "(编辑)" }}</span>
                联系人：</span>
                <span @click="commandFill('cellIdx26', '联系人', 'TextItem')"
                  >{{ letData.cellIdx26 ? letData.cellIdx26 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;联系电话：</span>
                <span @click="commandFill('cellIdx27', '联系电话', 'TextItem')">{{
                  letData.cellIdx27 ? letData.cellIdx27 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <table height="30"></table>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_28"
                  align="right"
                  style="width: 95%"
                  @click="commandFill('cellIdx28', '', 'TextItem')"
                >
                  {{ letData.cellIdx28 ? letData.cellIdx28 : "（点击编辑）" }}
                </td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_29"
                  align="right"
                  style="width: 95%"
                  data-title
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx29', '日期', 'DateItem')"
                >
                  {{ letData.cellIdx29 ? letData.cellIdx29 : "（点击编辑）" }}
                </td>
              </tr>
            </table>
            <div
              class="docTextarea"
              style="
                border-top: 2px solid #000;
                margin-top: 30px;
                line-height: normal;
              "
            >
              备注：本文书一式两份，一份送被催告
              <span
                style="border-bottom: none"
                >{{
                  letData.cellIdx30 ? letData.cellIdx30 : "（点击编辑）"
                }}</span
              >
              ，一份存档。
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
import {
  transformNumToChinese,
} from "@/utils";
import { getDocNumber, setNewDanger, getOrgData } from "@/utils/setInitPaperData";
import associationSelectPaper from "@/components/association-select-paper";
export default {
  name: "Let208",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {
        cellIdx0: null, // 文书号
        cellIdx1: null, // 文书号
        cellIdx2: null, // 文书号
        cellIdx3: null, // 文书号
        cellIdx4: null, // 煤矿单位
        cellIdx5: null, // 局
        cellIdx6: null, // 年
        cellIdx7: null, // 月
        cellIdx8: null, // 日
        cellIdx9: null, // 单位
        cellIdx10: null, // 文书号
        cellIdx11: null, // 文书号
        cellIdx12: null, // 文书号
        cellIdx13: null, // 文书号
        cellIdx14: null, // 单位/个人
        cellIdx15: null, // 单位/个人
        cellIdx16: null, // 缴纳罚款
        cellIdx17: null, //  单位/个人
        cellIdx18: null, // 局
        cellIdx19: null, // 单位/个人
        cellIdx20: null, // 签名
        cellIdx21: null, // 日期
        cellIdx22: null, // 局
        cellIdx23: null, // 地址
        cellIdx24: null, // 邮政编码
        cellIdx25: null, // 局
        cellIdx26: null, // 联系人
        cellIdx27: null, // 联系电话
        cellIdx28: null, //
        cellIdx29: null, // 日期
        cellIdx30: null, // 单位/个人
        selectedType: null,
        p8PaperId: null,
        DangerTable: null,
        associationPaperId: null,
        associationPaperOrder: []
      },
      options: {},
      associationPaper: ["8"],
    };
  },
  methods: {
    async initLetData(selectedPaper) {
      let corpBase = await this.getDatabase("baseInfo");
      let corp = corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      let { num0, num1, num3, num4 } = await getDocNumber(
        this.docData.docTypeNo,
        this.corpData.caseId
      );
      let let8DataPaperContent = JSON.parse(
        selectedPaper.let8Data.paperContent
      );
      let dateList = let8DataPaperContent.cellIdx20
        .replace("年", "-")
        .replace("月", "-")
        .replace("日", "-")
        .split("-");
      // 9.机构接口中获取sysOfficeInfo实体中
      let orgSysOfficeInfo = await getOrgData(this.$store.state.curCase.groupId)
      // depAddress：我局地址、
      // depPost：邮政编码、
      // master：我局联系人、
      // phone：联系电话
      // 1.计算缴纳罚款：
      let totleFine = 0
      if (this.corpData.caseType === '0') {
        let dangerList = let8DataPaperContent.DangerTable.selectedDangerList || []
        if (dangerList.length > 0) {
          dangerList.map(danger => {
            if (danger.penaltyDescFine) {
              totleFine += Number(danger.penaltyDescFine) 
            }
          })
        }
      }
      let cellIdx16String = `缴纳罚款${transformNumToChinese(totleFine)}`
      let DangerTable = this.corpData.caseType === '0' ? 
        setNewDanger(selectedPaper.let8Data, let8DataPaperContent.DangerTable)
        : null
      let associationPaperId = Object.assign({}, this.setAssociationPaperId(let8DataPaperContent.associationPaperId), {
        paper8Id: selectedPaper.let8Data.paperId,
      }) 
      let associationPaperOrder = this.setAssociationPaperOrder(let8DataPaperContent.associationPaperOrder)
      associationPaperOrder.push('8')
      this.letData = Object.assign({}, this.letData, {
        cellIdx0: num0, // 文书号
        cellIdx1: num1, // 文书号
        cellIdx2: num3, // 文书号
        cellIdx3: num4, // 文书号
        cellIdx4:
          let8DataPaperContent.selectedType === "单位" ? corp.corpName : "", // 煤矿单位
        cellIdx5: "局", // 局
        cellIdx6: dateList[0], // 年
        cellIdx7: dateList[1], // 月
        cellIdx8: dateList[2], // 日
        cellIdx9: let8DataPaperContent.selectedType, // 单位
        cellIdx10: let8DataPaperContent.cellIdx0, // 文书号
        cellIdx11: let8DataPaperContent.cellIdx1, // 文书号
        cellIdx12: let8DataPaperContent.cellIdx2, // 文书号
        cellIdx13: let8DataPaperContent.cellIdx3, // 文书号
        cellIdx14: let8DataPaperContent.selectedType, // 单位/个人
        cellIdx15: let8DataPaperContent.selectedType, // 单位/个人
        cellIdx16: cellIdx16String, // 缴纳罚款
        cellIdx17: let8DataPaperContent.selectedType, //  单位/个人
        cellIdx18: "局", // 局
        cellIdx19: let8DataPaperContent.selectedType, // 单位/个人
        cellIdx22: "局", // 局
        cellIdx23: orgSysOfficeInfo.depAddress, // 地址
        cellIdx24: orgSysOfficeInfo.depPost, // 邮政编码
        cellIdx25: "局", // 局
        cellIdx26: orgSysOfficeInfo.master, // 联系人
        cellIdx27: orgSysOfficeInfo.phone, // 联系电话
        cellIdx28: this.$store.state.curCase.provinceGroupName, //
        cellIdx29: this.todayDate, // 日期
        cellIdx30: let8DataPaperContent.selectedType, // 单位/个人
        selectedType: let8DataPaperContent.selectedType,
        p8PaperId: selectedPaper.let8Data.paperId,
        DangerTable,
        associationPaperId,
        associationPaperOrder,
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