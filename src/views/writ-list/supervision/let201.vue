<!-- 行政处罚 一般程序 立案决定书 4 -->
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
            <div class="textAlignCenter formHeader1">立案决定书</div>
            <div class="docTextLine paper-number-div">
              <div>
                <span
                  @click="commandFill('cellIdx0', '文书号', 'TextItem')"
                >{{ letData.cellIdx0 ? letData.cellIdx0 : '（编辑）' }}</span>
                <label>（</label>
                <span
                  @click="commandFill('cellIdx1', '文书号', 'TextItem')"
                >{{ letData.cellIdx1 ? letData.cellIdx1 : '（编辑）' }}</span>
                <label>）煤安立〔</label>
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
              <span class="no-line">案&nbsp;&nbsp;&nbsp;&nbsp;由：</span>
              <span
                @dblclick="commandFill('cellIdx4', '案由', `${corpData.caseType === '0' ? 'DangerTable' : 'TextareaItem'}`)"
                @click="commandFill('cellIdx4', '案由', corpData.caseType === '0' ? 'DangerTextareaItem' : 'TextareaItem')"
              >{{ letData.cellIdx4 ? letData.cellIdx4 : '（点击编辑）'}}</span>
              <div class="line"></div>
            </div>
            <!-- <table style="border:solid 0 #000;" class="docBody">
              <tr>
                <td class="textAlignLeft">案&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由：</td>
              </tr>
            </table>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              id="cell_idx_4"
              data-title="案由"
              data-type="textarea"
              data-src
              @click="commandFill('cellIdx4', '案由', 'DangerTable')">
              <div v-if="letData.cellIdx4 && letData.cellIdx4.length > 0">
                <p class="show-area-item-p">
                  <span style="padding: 7px;">{{ letData.cellIdx4? letData.cellIdx4 : '（点击编辑）' }}</span>
                </p>
                <cell-line></cell-line>
              </div>
              <div v-else>
                <p class="show-area-item-p">
                  &nbsp;
                </p>
                <p class="show-area-item-p">
                  &nbsp;
                </p>
              </div>
            </div> -->
             <div class="docTextarea">
              <span class="no-line">案情摘要：</span>
              <span
                @dblclick="commandFill('cellIdx5', '案情摘要', `${corpData.caseType === '0' ? 'DangerTable' : 'TextareaItem'}`)"
                @click="commandFill('cellIdx5', '案情摘要', corpData.caseType === '0' ? 'DangerTextareaItem' : 'TextareaItem')"
              >{{ letData.cellIdx5 ? letData.cellIdx5 : '（点击编辑）'}}</span>
              <div class="line"></div>
            </div>
            <!-- <table style="border:solid 0 #000;" class="docBody">
              <tr>
                <td class="textAlignLeft">案情摘要：</td>
              </tr>
            </table>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              id="cell_idx_5"
              data-title="案情摘要"
              data-type="textarea"
              data-src
              @click="commandFill('cellIdx5', '案情摘要', 'DangerTable')">
              <div v-if="letData.cellIdx5 && letData.cellIdx5.length > 0">
                <p class="show-area-item-p">
                  <span style="padding: 7px;">{{ letData.cellIdx5 ? letData.cellIdx5 : '（点击编辑）'}}</span>
                </p>
                <cell-line></cell-line>
              </div>
              <div v-else>
                <p class="show-area-item-p">
                  &nbsp;
                </p>
                <p class="show-area-item-p">
                  &nbsp;
                </p>
              </div>
            </div> -->
            <div class="docTextarea">
              <label style="width:5%"></label>
              根据以上案情，决定自
              <span
                @click="commandFill('cellIdx6', '年', 'TextItem')"
              >{{ letData.cellIdx6 ? letData.cellIdx6 : 'XX'}}</span>
              年
              <span
                @click="commandFill('cellIdx7', '月', 'TextItem')"
              >{{ letData.cellIdx7 ? letData.cellIdx7 : 'XX'}}</span>
              月
              <span
                @click="commandFill('cellIdx8', '日', 'TextItem')"
              >{{ letData.cellIdx8 ? letData.cellIdx8 : 'XX' }}</span>
              日起立案调查处理，并指定
              <span
                @click="commandFill('cellIdx9', '本案承办人', 'TextItem')"
              >{{ letData.cellIdx9 ? letData.cellIdx9 : '（点击编辑）' }}</span>
              为本案承办人。
            </div>
            <div class="docTextarea" style="margin-top: 60px; margin-bottom: 60px;">
              <div style="display:inline-block;min-width:43%">
                <span class="no-line">审批人意见:</span>
                <span @click="commandFill('cellIdx10', '审批人意见', 'TextItem')"
                  >{{ letData.cellIdx10 ? letData.cellIdx10 : "（编辑）" }}
                </span>
              </div>
                <span class="no-line">审批人(签名):</span>
                <span @click="commandFill('cellIdx11', '审批人(签名)', 'TextItem')">{{
                  letData.cellIdx11 ? letData.cellIdx11 : "（编辑）"
                }}</span>
                <span class="no-line">日期：</span>
                <span @click="commandFill('cellIdx12', '日期', 'DateItem')">{{
                  letData.cellIdx12 ? letData.cellIdx12 : "（编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <!-- <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_13"
                  align="right"
                  style="width:95%"
                  @click="commandFill('cellIdx13', '', 'DateItem')"
                >{{letData.cellIdx13}}</td>
              </tr>
            </table> -->
            <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_14"
                  align="right"
                  style="width:95%"
                  @click="commandFill('cellIdx14', '', 'TextItem')"
                >{{letData.cellIdx14 ? letData.cellIdx14 : '（点击编辑）'}}</td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_15"
                  align="right"
                  style="width:95%"
                  data-title
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx15', '日期', 'DateItem')"
                >{{letData.cellIdx15 ? letData.cellIdx15 : '（点击编辑）'}}</td>
              </tr>
            </table>
            <!-- <table>
		<hr />
		<td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;备注：本文书一式两份，一份交被复查单位，一份存档。</td>
            </table>-->
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
import { setDangerTable } from '@/utils/handlePaperData'
import associationSelectPaper from '@/components/association-select-paper'
export default {
  name: "Let201",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {
        cellIdx0: null, // 文书号
        cellIdx1: null, // 文书号
        cellIdx2: null, // 文书号
        cellIdx3: null, // 文书号
        cellIdx4: null, // 案由
        cellIdx5: null, // 案情摘要
        cellIdx6: null, // 年
        cellIdx7: null, // 月
        cellIdx8: null, // 日
        cellIdx9: null, // 本案承办人
        cellIdx10: null, // 审批人意见
        cellIdx11: null, // 审批人（签名）
        cellIdx12: null, // 日期
        cellIdx13: null, // 暂不用
        cellIdx14: null, // 
        cellIdx15: null, // 日期
        DangerTable: null,
        extraData: {},
        associationPaperId: {},
        SelectedPerson: {
          personList: [],
          personNamesString: ''
        }
      },
      options: {},
      associationPaper: this.corpData.caseType === '0' ? ["2"] : [],
    };
  },
  methods: {
    async initLetData (selectedPaper) {
      if (this.corpData.caseType === '0') {
        let db = new GoDB(this.$store.state.DBName);
        let corpBase = db.table("corpBase");
        let corp = await corpBase.find((item) => {
          return item.corpId == this.corpData.corpId;
        });
        // 获取检查时间
        let let2DataPaperContent = JSON.parse(
          selectedPaper.let2Data.paperContent
        );
        // 检查时间日期：
        let dateString = let2DataPaperContent.cellIdx6
          ? let2DataPaperContent.cellIdx6
          : "X年X月X日-X年X月X日";
        // 1.案由内容初始化：煤矿名称+隐患描述+“案”组成
        let cellIdx4String = setDangerTable(
          let2DataPaperContent.DangerTable,
          {},
          {
            page: "4",
            key: "cellIdx4",
            spellString: {
              corpName: corp.corpName,
              dateString,
              groupName: this.$store.state.curCase.provinceGroupName,
            },
          }
        );
        // 2.案情摘要：检查时间+当前机构名称+“对”+煤矿名称+“进行现场检查时发现”+隐患描述+"以上行为分别涉嫌违反了"+违法认定法条+“依据《安全生产违法行为行政处罚办法》第二十三条的规定申请立案。”
        let cellIdx5String = setDangerTable(
          let2DataPaperContent.DangerTable,
          {},
          {
            page: "4",
            key: "cellIdx5",
            spellString: {
              corpName: corp.corpName,
              dateString,
              groupName: this.$store.state.curCase.provinceGroupName,
            },
          }
        );
        let paperNumber = await getDocNumber(db, this.docData.docTypeNo, this.corpData.caseId)
        let DangerTable = let2DataPaperContent.DangerTable ? 
          setNewDanger(selectedPaper.let2Data, let2DataPaperContent.DangerTable)
          : {}
        await db.close();
        let associationPaperId = Object.assign({}, this.setAssociationPaperId(let2DataPaperContent.associationPaperId), {
          paper2Id: selectedPaper.let2Data.paperId,
        }) 
        let associationPaperOrder = this.setAssociationPaperOrder(let2DataPaperContent.associationPaperOrder)
        associationPaperOrder.push('2')
        let date = this.todayDate.replace('年', '-').replace('月', '-').replace('日', '-').split('-')
        this.letData = Object.assign({}, this.letData, {
          cellIdx0: paperNumber.num0, // 文书号
          cellIdx1: paperNumber.num1, // 文书号
          cellIdx2: paperNumber.num3, // 文书号
          cellIdx3: paperNumber.num4, // 文书号
          cellIdx4: cellIdx4String, // 案由
          cellIdx5: cellIdx5String, // 案情摘要
          cellIdx6: date[0], // 年
          cellIdx7: date[1], // 月
          cellIdx8: date[2], // 日
          cellIdx14: this.$store.state.curCase.provinceGroupName, //
          cellIdx15: this.todayDate, // 日期
          DangerTable: DangerTable,
          extraData: { // 保存额外拼写的数据内容，用于修改隐患项时回显使用
            corpName: corp.corpName,
            dateString,
            groupName: this.$store.state.curCase.provinceGroupName,
          },
          associationPaperId,
          associationPaperOrder,
          SelectedPerson: {
            personList: [],
            personNamesString: ''
          }
        })
      } else {
        let db = new GoDB(this.$store.state.DBName);
        let paperNumber = await getDocNumber(
          db,
          this.docData.docTypeNo,
          this.corpData.caseId
        );
        let date = this.todayDate.replace('年', '-').replace('月', '-').replace('日', '-').split('-')
        await db.close();
        this.letData = Object.assign({}, this.letData, {
          cellIdx0: paperNumber.num0, // 文书号
          cellIdx1: paperNumber.num1, // 文书号
          cellIdx2: paperNumber.num3, // 文书号
          cellIdx3: paperNumber.num4, // 文书号
          cellIdx6: date[0], // 年
          cellIdx7: date[1], // 月
          cellIdx8: date[2], // 日
          cellIdx14: this.$store.state.curCase.provinceGroupName, //
          cellIdx15: this.todayDate, // 日期
        })
      }
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
        if (
          (key === "cellIdx4" || key === "cellIdx5") &&
          type === "DangerTable"
        ) {
          spellString = this.letData.extraData;
          this.options[key] = {
            page: "4",
            key: key,
            spellString,
            showMergeBtn: true,
          };
          dataKey = "DangerTable";
        } else if (key === 'cellIdx9') {
          dataKey = "SelectedPerson";
          this.options[key] = {
            page: "4",
            key: key
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