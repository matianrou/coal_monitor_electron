<!-- 现场检查 复查 复查意见书 13 -->
<template>
  <div style="width: 100%; height: 100%;">
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
            <div class="textAlignCenter formHeader1">复查意见书</div>
            <div class="docTextLine paper-number-div">
              <div>
                <span
                  @click="commandFill('cellIdx0', '文书号', 'TextItem')"
                >{{ letData.cellIdx0 ? letData.cellIdx0 : '（编辑）' }}</span>
                <label>（</label>
                <span
                  @click="commandFill('cellIdx1', '文书号', 'TextItem')"
                >{{ letData.cellIdx1 ? letData.cellIdx1 : '（编辑）' }}</span>
                <label>）煤安复〔</label>
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
            <table class="docBody">
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_4"
                  style="width:62%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx4', '', 'TextItem')"
                >{{ letData.cellIdx4 }}</td>
                <td class="textAlignLeft">:</td>
              </tr>
            </table>
            <div class="docTextarea">
              <label style="width:5%"></label>
              <span
                @click="commandFill('cellIdx5', '', 'TextItem')"
              >{{ letData.cellIdx5 ? letData.cellIdx5 : '（点击编辑）'}}</span>
              于
              <span
                @click="commandFill('cellIdx6', '年', 'TextItem')"
              >{{ letData.cellIdx6 ? letData.cellIdx6 : 'XX'}}</span>
              年
              <span
                @click="commandFill('cellIdx7', '月', 'TextItem')"
              >{{ letData.cellIdx7 ? letData.cellIdx7 : 'XX' }}</span>
              月
              <span
                @click="commandFill('cellIdx8', '日', 'TextItem')"
              >{{ letData.cellIdx8 ? letData.cellIdx8 : 'XX'}}</span>
              日发现
              <span
                @dblclick="commandFill('cellIdx9', '违法违规行为', corpData.caseType === '0' ? 'DangerTable' : 'TextareaItem')"
                @click="commandFill('cellIdx9', '违法违规行为', corpData.caseType === '0' ? 'DangerTextareaItem' : 'TextareaItem')"
              >{{ letData.cellIdx9 ? letData.cellIdx9 : '（点击编辑）' }}</span>
              的违法违规行为，下达了《现场处理决定书》（
              <span style="borderBottom:none"
                @click="commandFill('cellIdx10', '现场处理决定书文书号', 'TextItem')"
              >{{ letData.cellIdx10 ? letData.cellIdx10 : '（点击编辑）' }}</span>
              （
              <span style="borderBottom:none"
                @click="commandFill('cellIdx11', '现场处理决定书文书号', 'TextItem')"
              >{{ letData.cellIdx11 ? letData.cellIdx11 : '（点击编辑）' }}</span>
              )  煤安处〔
              <span style="borderBottom:none"
                @click="commandFill('cellIdx12', '现场处理决定书文书号', 'TextItem')"
              >{{ letData.cellIdx12 ? letData.cellIdx12 : '（点击编辑）' }}</span>
              〕
              <span style="borderBottom:none"
                @click="commandFill('cellIdx13', '现场处理决定书文书号', 'TextItem')"
              >{{ letData.cellIdx13 ? letData.cellIdx13 : '（点击编辑）' }}</span>
              号），依法作出了
              <span
                @dblclick="commandFill('cellIdx14', '现场处理决定', corpData.caseType === '0' ? 'DangerTable' : 'TextareaItem')"
                @click="commandFill('cellIdx14', '现场处理决定', corpData.caseType === '0' ? 'DangerTextareaItem' : 'TextareaItem')"
              >{{ letData.cellIdx14 ? letData.cellIdx14 : '（点击编辑）' }}</span>
              的决定。
            </div>
             <div class="docTextarea ">
              <label style="width: 2em;"></label>
              <span
                class="no-underline"
                @click="commandFill('cellIdx25', '', 'SelectItem')"
              >{{ letData.cellIdx25 ? letData.cellIdx25 : '（点击编辑）'}}</span>
              <span class="no-line">，经复查，意见如下：</span>
              <span @click="commandFill('cellIdx16', '意见', 'TextareaItem')">{{
                letData.cellIdx16 ? letData.cellIdx16 : "（点击编辑）"
              }}</span>
            </div>
            <!-- <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              @click="commandFill('cellIdx15', '意见', 'TextareaItem')">
              <p
                style="width:100%; height:auto; word-wrap:break-word;word-wrap: break-all; overflow: hidden;"
              >{{ letData.cellIdx15 ? letData.cellIdx15 : '（点击编辑）' }}</p>
              <cell-line></cell-line>
            </div> -->
            <div class="docTextarea">
              <span class="no-line" style="width:28%">现场执法人员（签名):</span>
              <span style="display:inline-block;min-width:30%;line-height: normal;max-width:30%" @click="commandFill('cellIdx16', '现场执法人员（签名', 'TextItem')"
                >{{ letData.cellIdx16 ? letData.cellIdx16 : "（点击编辑）" }}
              </span>
              <span class="no-line" style="width: 14%">执法证号：</span>
              <span style="display:inline-block;min-width:23%;line-height: normal;max-width:23%" @click="commandFill('cellIdx17', '执法证号', 'TextItem')">{{
                letData.cellIdx17 ? letData.cellIdx17 : "（点击编辑）"
              }}</span>
            </div>
            <div class="docTextarea">
              <span class="no-line" style="width:28%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span style="display:inline-block;min-width:30%;line-height: normal;max-width:30%" @click="commandFill('cellIdx18', '现场执法人员（签名', 'TextItem')"
                >{{ letData.cellIdx18 ? letData.cellIdx18 : "（点击编辑）" }}
              </span>
              <span class="no-line" style="width: 14%">执法证号：</span>
              <span style="display:inline-block;min-width:23%;line-height: normal;max-width:23%" @click="commandFill('cellIdx19', '执法证号', 'TextItem')">{{
                letData.cellIdx19 ? letData.cellIdx19 : "（点击编辑）"
              }}</span>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:41%">
                <span class="no-line">被复查单位意见:</span>
                <span @click="commandFill('cellIdx20', '被复查单位意见', 'TextItem')"
                  >{{ letData.cellIdx20 ? letData.cellIdx20 : "（编辑）" }}
                </span>
              </div>
                <span class="no-line">单位负责人(签名):</span>
                <span @click="commandFill('cellIdx21', '单位负责人(签名)', 'TextItem')">{{
                  letData.cellIdx21 ? letData.cellIdx21 : "（编辑）"
                }}</span>
                <span class="no-line">日期：</span>
                <span @click="commandFill('cellIdx22', '日期', 'DateItem')">{{
                  letData.cellIdx22 ? letData.cellIdx22 : "（编辑）"
                }}</span>
                <div class="line"></div>
                <div class="line1"></div>
            </div>
            <table class="docBody" style="margin-top: 30px;">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_23"
                  align="right"
                  style="width:95%"
                  @click="commandFill('cellIdx23', '', 'TextItem')"
                >{{letData.cellIdx23 ? letData.cellIdx23 : '（点击编辑）'}}</td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_24"
                  align="right"
                  style="width:95%"
                  data-title
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx24', '日期', 'DateItem')"
                >{{letData.cellIdx24 ? letData.cellIdx24 : '（点击编辑）'}}</td>
              </tr>
            </table>
            <div class="docTextarea" style="border-top: 2px solid #000;">
              备注：本文书一式两份，一份交被复查单位，一份存档。
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
import { setNewDanger, getDocNumber } from '@/utils/setInitPaperData'
import associationSelectPaper from '@/components/association-select-paper'
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
        cellIdx4: null, // corpName
        cellIdx5: null, // 单位
        cellIdx6: null, // 年
        cellIdx7: null, // 月
        cellIdx8: null, // 日
        cellIdx9: null, // 违法违规行为：隐患描述
        cellIdx10: null, // 现场处理决定书 文书号
        cellIdx11: null, // 现场处理决定书 文书号
        cellIdx12: null, // 现场处理决定书 文书号
        cellIdx13: null, // 现场处理决定书 文书号
        cellIdx14: null, // 现场处理决定
        cellIdx15: null, // 意见
        cellIdx16: null, // 现场执法人员（签名)
        cellIdx17: null, // 执法证号
        cellIdx18: null, // 现场执法人员（签名)
        cellIdx19: null, // 执法证号
        cellIdx20: null, // 被检查单位意见
        cellIdx21: null, // 单位负责人（签名)
        cellIdx22: null, //日期
        cellIdx23: null, // 
        cellIdx24: null, // 日期
        DangerTable: null,
        associationPaperId: {}
      },
      options: {
        cellIdx25: [
          {
            value: '应你单位申请',
            name: '应你单位申请',
          },
          {
            value: '现整改、治理期限届满',
            name: '现整改、治理期限届满',
          },
        ]
      },
      associationPaper: ['1']
    };
  },
  methods: {
    async initLetData (selectedPaper) {
      let db = new GoDB(this.$store.state.DBName);
      let corpBase = db.table("corpBase");
      let corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      // 1.生成文书编号
      let { num0, num1, num3, num4 } = await getDocNumber(db, this.docData.docTypeNo, this.corpData.caseId)
      let let1DataPaperContent = JSON.parse(
        selectedPaper.let1Data.paperContent
      );
      let cellIdx9String =this.corpData.caseType === '0' ? setDangerTable(
        let1DataPaperContent.DangerTable,
        {},
        {
          page: "13",
          key: "cellIdx9",
        }
      ):'';
      let cellIdx10String = this.corpData.caseType === '0' ?setDangerTable(
        let1DataPaperContent.DangerTable,
        {},
        {
          page: "13",
          key: "cellIdx14",
        }
      ):'';
      let date2 = selectedPaper.let1Data ? selectedPaper.let1Data.createDate.split(' ')[0].replace('年', '-').replace('月', '-').replace('日', '-').split('-') : ['', '', '']
      let DangerTable = null
      if (this.corpData.caseType === '0') {
        DangerTable = let1DataPaperContent.DangerTable ? 
          setNewDanger(selectedPaper.let1Data, let1DataPaperContent.DangerTable)
          : {} 
      }
      await db.close();
      this.letData = Object.assign({}, this.letData, {
        cellIdx0: num0, // 文书号
        cellIdx1: num1, // 文书号
        cellIdx2: num3, // 文书号
        cellIdx3: num4, // 文书号
        cellIdx4: corp.corpName ? corp.corpName : null, //
        cellIdx9: cellIdx9String, // 违法违规行为：隐患描述
        cellIdx10: let2DataPaperContent.cellIdx0, // 现场处理决定书 文书号
        cellIdx11: let2DataPaperContent.cellIdx1, // 现场处理决定书 文书号
        cellIdx12: let2DataPaperContent.cellIdx2, // 现场处理决定书 文书号
        cellIdx13: let2DataPaperContent.cellIdx3, // 现场处理决定书 文书号
        cellIdx14: cellIdx10String, // 现场处理决定
        cellIdx25: '应你单位申请', //
        cellIdx23: this.$store.state.curCase.provinceGroupName, //
        cellIdx24: this.todayDate, //日期
        DangerTable: DangerTable,
        associationPaperId: { // 关联的paperId
          paper22Id: let1DataPaperContent.associationPaperId.paper22Id,
          paper1Id: selectedPaper.let1Data.paperId,
        }
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
        if (key === "cellIdx9" || key === "cellIdx14") {
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