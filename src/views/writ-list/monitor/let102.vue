<!-- 现场检查 一般检查 现场处理决定书 2 -->
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
              <br />
            </div>
            <div class="textAlignCenter formHeader4">现 场 处 理 决 定 书</div>
            <div class="paper-number-div formHeader5">
              <div>
                <span @click="commandFill('cellIdx0', '', 'TextItem')">{{
                  letData.cellIdx0 ? letData.cellIdx0 : "（编辑）"
                }}</span>
                <label>煤安监</label>
                <span @click="commandFill('cellIdx1', '', 'TextItem')">{{
                  letData.cellIdx1 ? letData.cellIdx1 : "（编辑）"
                }}</span>
                <label>处〔</label>
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
                  style="min-width: 50%"
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
                >{{ letData.cellIdx5 ? letData.cellIdx5 : "(编辑)" }}</span
              >
              于
              <span @click="commandFill('cellIdx6', '', 'DaterangeItem')">{{
                letData.cellIdx6 ? letData.cellIdx6 : "（点击编辑）"
              }}</span>
              现场检查时，发现你单位有下列违法违规行为，现作出以下现场处理决定：
            </div>
            <div
              style="
                word-wrap: break-word;
                word-break: break-all;
                overflow: hidden;
              "
              class="cellInput mutiLineArea"
              @dblclick="
                commandFill(
                  'cellIdx7',
                  '违法违规行为',
                  corpData.caseType === '0'
                    ? 'DangerTable'
                    : 'TextareaItem'
                )
              "
              @click="
                commandFill('cellIdx7', '违法违规行为', corpData.caseType === '0' ? 'DangerTextareaItem' : 'TextareaItem')
              "
            >
              <div>
                <p class="show-area-item-p">
                  <span style="padding: 7px">{{ letData.cellIdx7 }}</span>
                </p>
                <cell-line :line-num="300"></cell-line>
              </div>
            </div>
            <div class="docTextarea">
              <label style="width: 5%"></label>
              如对本处理决定不服，可在接到本决定书之日起60日内向
              <span @click="commandFill('cellIdx8', '', 'TextItem')">{{
                letData.cellIdx8 ? letData.cellIdx8 : "（点击编辑）"
              }}</span>
              申请行政复议或6个月内向
              <span @click="commandFill('cellIdx9', '', 'TextItem')">{{
                letData.cellIdx9 ? letData.cellIdx9 : "（点击编辑）"
              }}</span>
              法院提起行政诉讼，但不停止执行本决定。
            </div>
            <table height="30"></table>
            <div class="docTextarea">
              <div style="display: inline-block; min-width: 60%">
                <span class="no-line">现场执法人员（签名):</span>
                <span
                  @click="
                    commandFill('cellIdx10', '现场执法人员（签名)', 'TextItem')
                  "
                  >{{ letData.cellIdx10 ? letData.cellIdx10 : "（点击编辑）" }}
                </span>
              </div>
              <span class="no-line">日期</span>
              <span @click="commandFill('cellIdx11', '日期', 'DateItem')">{{
                letData.cellIdx11 ? letData.cellIdx11 : "（点击编辑）"
              }}</span>
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display: inline-block; min-width: 60%">
                <span class="no-line">被检查单位负责人（签名):</span>
                <span
                  @click="
                    commandFill(
                      'cellIdx12',
                      '被检查单位负责人（签名)',
                      'TextItem'
                    )
                  "
                  >{{ letData.cellIdx12 ? letData.cellIdx12 : "（点击编辑）" }}
                </span>
              </div>
              <span class="no-line">日期</span>
              <span @click="commandFill('cellIdx13', '日期', 'DateItem')">{{
                letData.cellIdx13 ? letData.cellIdx13 : "（点击编辑）"
              }}</span>
              <div class="line"></div>
            </div>
            <table height="30"></table>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_14"
                  align="right"
                  style="width: 95%"
                  @click="commandFill('cellIdx14', '', 'TextItem')"
                >
                  {{ letData.cellIdx14 ? letData.cellIdx14 : "（点击编辑）" }}
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
                  @click="commandFill('cellIdx15', '日期', 'DateItem')"
                >
                  {{ letData.cellIdx15 ? letData.cellIdx15 : "（点击编辑）" }}
                </td>
              </tr>
            </table>
            <div class="docTextarea" style="border-top: 2px solid #000">
              备注：本文书一式两份，一份交被检查单位，一份存档。
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
export default {
  name: "Let102",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {
        cellIdx0: null, // 文书号
        cellIdx1: null, // 文书号
        cellIdx2: null, // 文书号
        cellIdx3: null, // 文书号
        cellIdx4: null, // 被检查单位
        cellIdx5: null, //局
        cellIdx6: null, //
        cellIdx7: null, // 现场处理决定
        cellIdx8: null, //
        cellIdx9: null, //
        cellIdx10: null, // 现场执法人员（签名)
        cellIdx11: null, // 日期
        cellIdx12: null, // 被检查单位负责人（签名)
        cellIdx13: null, // 日期
        cellIdx14: null, //
        cellIdx15: null, //
        DangerTable: null, // 隐患项大表
        associationPaperId: {}, // 关联的paperId
        associationPaperOrder: []
      },
      options: {},
      associationPaper: ["1"],
    };
  },
  methods: {
    async initLetData(selectedPaper) {
      let corpBase = await this.getDatabase("baseInfo");
      let corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      let let1DataPaperContent = JSON.parse(
        selectedPaper.let1Data.paperContent
      );
      let cellIdx7String =
        this.corpData.caseType === "0"
          ? setDangerTable(
              let1DataPaperContent.DangerTable,
              {},
              {
                page: "2",
                key: "cellIdx7",
              }
            )
          : "";
      // 通过机构接口中的sysOfficeInfo中获取的organName和courtPrefix字段分别填充cellIdx8和cellIdx9字段
      let orgSysOfficeInfo = await getOrgData(this.$store.state.curCase.groupId)
      let paperNumber = await getDocNumber(
        this.docData.docTypeNo,
        this.corpData.caseId
      );
      let DangerTable = let1DataPaperContent.DangerTable
        ? setNewDanger(selectedPaper.let1Data, let1DataPaperContent.DangerTable)
        : {};
      let associationPaperId = Object.assign({}, this.setAssociationPaperId(let1DataPaperContent.associationPaperId), {
        paper1Id: selectedPaper.let1Data.paperId,
      }) 
      let associationPaperOrder = this.setAssociationPaperOrder(let1DataPaperContent.associationPaperOrder)
      associationPaperOrder.push('1')
      this.letData = Object.assign({}, this.letData, {
        cellIdx0: paperNumber.num0, // 文书号
        cellIdx1: paperNumber.num1, // 文书号
        cellIdx2: paperNumber.num3, // 文书号
        cellIdx3: paperNumber.num4, // 文书号
        cellIdx4: corp.corpName ? corp.corpName : null, // 被检查单位
        cellIdx5: "局", //局
        cellIdx6: let1DataPaperContent.cellIdx1, //
        cellIdx7: cellIdx7String, // 现场处理决定
        cellIdx8: '国家矿山安全监察局', //
        cellIdx9: orgSysOfficeInfo.courtPrefix, //
        cellIdx14: this.$store.state.curCase.provinceGroupName, //
        cellIdx15: this.todayDate, //
        DangerTable, // 隐患项大表
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
        // 打开编辑
        let dataKey = `${key}`;
        if (key === "cellIdx7") {
          if (type === "DangerTable") {
            // 隐患项时对应letData中的dangerItemObject
            dataKey = "DangerTable";
            this.options.cellIdx7 = {
              page: "2", // 用于在隐患项保存，做数据处理时，判断是否增加现场处理决定字段描述
              showBaseInfor: false, // 用于区分是否展示基本情况大文本输入
              showSelectDangerBtn: false, // 用于区分是否可以选择隐患项
            };
          } else {
            this.options.cellIdx7 = {
              disabled: false,
            };
          }
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