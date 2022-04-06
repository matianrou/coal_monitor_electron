<!-- 现场检查 复查 复查意见书 13 -->
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
            <div class="textAlignCenter formHeader4">复 查 意 见 书</div>
            <div class="formHeader5 paper-number-div">
              <div>
                <span @click="commandFill('cellIdx0', '', 'TextItem')">{{
                  letData.cellIdx0 ? letData.cellIdx0 : "（编辑）"
                }}</span>
                <label>煤安监</label>
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
                >{{
                  letData.cellIdx5 ? letData.cellIdx5 : "(编辑)"
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
                @dblclick="commandFill('cellIdx9', '违法违规行为', corpData.caseType === '0' ? 'DangerTable' : 'TextareaItem')"
                @click="commandFill('cellIdx9', '违法违规行为', corpData.caseType === '0' ? 'DangerTextareaItem' : 'TextareaItem')"
                >{{
                  letData.cellIdx9 ? letData.cellIdx9 : "（点击编辑）"
                }}</span
              >
              的违法违规行为，依法作出了
              <span
                style="borderbottom: none"
                @dblclick="commandFill('cellIdx10', '现场处理决定', corpData.caseType === '0' ? 'DangerTable' : 'TextareaItem')"
                @click="
                  commandFill('cellIdx10', '现场处理决定', corpData.caseType === '0' ? 'DangerTextareaItem' : 'TextareaItem')
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
              煤安监
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
              <label class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;</label><span
                class="no-line no-underline"
                style="cursor: pointer;"
                @click="commandFill('cellIdx15', '', 'SelectItem')">{{
                letData.cellIdx15 ? letData.cellIdx15 : "（点击编辑）"
              }}</span><span class="no-line">，经复查，意见如下：</span>
              <span @click="commandFill('cellIdx16', '意见', 'TextareaItem')">{{
                letData.cellIdx16 ? letData.cellIdx16 : "（点击编辑）"
              }}</span>
            </div>
            <!-- <div class="docTextarea">
              <span class="no-line">被检查单位负责人意见：</span>
              <span
                @click="commandFill('cellIdx17', '被检查单位负责人意见', 'TextItem')">
                  {{letData.cellIdx17 ? letData.cellIdx17 : "（点击编辑）"}}</span>
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:60%">
                <span class="no-line">单位负责人（签名）：</span>
                <span @click="commandFill('cellIdx18', '单位负责人（签名）', 'TextItem')">{{
                  letData.cellIdx18 ? letData.cellIdx18 : "（点击编辑）"
                }}</span>
              </div>
                <span class="no-line">日期：</span>
                <span @click="commandFill('cellIdx19', '日期', 'DateItem')">{{
                  letData.cellIdx19 ? letData.cellIdx19 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
                <div class="line1"></div>
            </div> -->
            <table height="30"></table>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:36%">
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;被复查单位意见：</span>
                <span @click="commandFill('cellIdx17', '被复查单位意见', 'TextItem')"
                  >{{ letData.cellIdx17 ? letData.cellIdx17 : "（编辑）" }}
                </span>
              </div>
              <span class="no-line">单位负责人签名：</span>
              <span @click="commandFill('cellIdx18', '单位负责人签名', 'TextItem')">{{
                letData.cellIdx18 ? letData.cellIdx18 : "（编辑）"
              }}</span>
              <span class="no-line">日期：</span>
              <span @click="commandFill('cellIdx19', '日期', 'DateItem')">{{
                letData.cellIdx19 ? letData.cellIdx19 : "（编辑）"
              }}</span>
              <div class="line"></div>
              <div class="line1"></div>
            </div>
              <div class="docTextarea">
              <div style="display:inline-block;min-width:75%">
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;复查人员（签名）：</span>
                <span @click="commandFill('cellIdx20', '复查人员（签名）', 'TextItem')">{{
                  letData.cellIdx20 ? letData.cellIdx20 : "（编辑）"
                }}</span>
              </div>
                <span class="no-line">日期：</span>
                <span @click="commandFill('cellIdx21', '日期', 'DateItem')">{{
                  letData.cellIdx21 ? letData.cellIdx21 : "（编辑）"
                }}</span>
                <div class="line"></div>
                <div class="line1"></div>
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
            <table height="30"></table>
            <div class="docTextarea" style="border-top: 2px solid #000;">
              备注：本文书一式两份，一份交被复查单位，一份存档。
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
import { getDocNumber, setNewDanger } from "@/utils/setInitPaperData";
import associationSelectPaper from "@/components/association-select-paper";
import { setDangerTable } from '@/utils/handlePaperData'
export default {
  name: "Let104",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {
        cellIdx0: null, // 文书号
        cellIdx1: null, // 文书号
        cellIdx2: null, // 文书号
        cellIdx3: null, // 文书号
        cellIdx4: null, //
        cellIdx5: null, // 局
        cellIdx6: null, // 年
        cellIdx7: null, // 月
        cellIdx8: null, // 日
        cellIdx9: null, // 违法违规行为：隐患描述
        cellIdx10: null, // 现场处理决定
        cellIdx11: null, // 现场处理决定书 文书号
        cellIdx12: null, // 现场处理决定书 文书号
        cellIdx13: null, // 现场处理决定书 文书号
        cellIdx14: null, // 现场处理决定书 文书号
        cellIdx15: null, //
        cellIdx16: null, // 意见
        cellIdx17: null, // 被复查单位意见
        cellIdx18: null, // 单位负责人（签名）
        cellIdx19: null, // 日期
        cellIdx20: null, // 复查人员（签名）
        cellIdx21: null, // 日期
        cellIdx22: null, //
        cellIdx23: null, // 日期
        DangerTable: null,
        associationPaperId: {},
        associationPaperOrder: []
      },
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
      associationPaper: ["2"],
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
      let let2DataPaperContent = JSON.parse(
        selectedPaper.let2Data.paperContent
      );
      let cellIdx9String =this.corpData.caseType === '0' ? setDangerTable(
        let2DataPaperContent.DangerTable,
        {},
        {
          page: "13",
          key: "cellIdx9",
        }
      ):'';
      let cellIdx10String = this.corpData.caseType === '0' ?setDangerTable(
        let2DataPaperContent.DangerTable,
        {},
        {
          page: "13",
          key: "cellIdx10",
        }
      ):'';
      let date2 = selectedPaper.let2Data ? selectedPaper.let2Data.createTime.split(' ')[0].replace('年', '-').replace('月', '-').replace('日', '-').split('-') : ['', '', '']
      let DangerTable = null
      if (this.corpData.caseType === '0') {
        DangerTable = let2DataPaperContent.DangerTable ? 
          setNewDanger(selectedPaper.let2Data, let2DataPaperContent.DangerTable, this.paperId)
          : {} 
      }
      let associationPaperId = Object.assign({}, this.setAssociationPaperId(let2DataPaperContent.associationPaperId), {
        paper2Id: selectedPaper.let2Data.paperId,
      }) 
      let associationPaperOrder = this.setAssociationPaperOrder(let2DataPaperContent.associationPaperOrder)
      associationPaperOrder.push('2')
      this.letData = Object.assign({}, this.letData, {
        cellIdx0: num0, // 文书号
        cellIdx1: num1, // 文书号
        cellIdx2: num3, // 文书号
        cellIdx3: num4, // 文书号
        cellIdx4: corp.corpName ? corp.corpName : null, //
        cellIdx5: '局', // 局
        cellIdx6: date2[0], // 年
        cellIdx7: date2[1], // 月
        cellIdx8: date2[2], // 日
        cellIdx9: cellIdx9String, // 违法违规行为：隐患描述
        cellIdx10: cellIdx10String, // 现场处理决定
        cellIdx11: let2DataPaperContent.cellIdx0, // 现场处理决定书 文书号
        cellIdx12: let2DataPaperContent.cellIdx1, // 现场处理决定书 文书号
        cellIdx13: let2DataPaperContent.cellIdx2, // 现场处理决定书 文书号
        cellIdx14: let2DataPaperContent.cellIdx3, // 现场处理决定书 文书号
        cellIdx15: '应你单位申请', //
        cellIdx22: this.$store.state.curCase.provinceGroupName, //
        cellIdx23: this.todayDate, // 日期
        DangerTable: DangerTable,
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
        if (key === "cellIdx9" || key === "cellIdx10") {
          if (type === 'DangerTable') {
            this.options[key] = {
              page: "13",
              key: key,
              // showSelectDangerBtn: true, // 用于区分是否可以选择隐患项
            };
            dataKey = "DangerTable";
          } else {
            this.options[key] = {
              disabled: false
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