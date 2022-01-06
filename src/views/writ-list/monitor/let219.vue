<!-- 行政处罚 案件结案 延期（分期）缴纳罚款决定书 53 -->
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
            <div class="textAlignCenter formHeader2">
              国 家 矿 山 安 全 监 察
              <br />
            </div>
            <div class="textAlignCenter formHeader4">
              <table class="docBody">
                <tr>
                  <td
                    class="cellInput"
                    id="cell_idx_0"
                    data-title="延期(分期)"
                    data-type="text"
                    data-src
                  >{{ letData.cellIdx0 }}</td>
                  <td class="textAlignLeft">缴纳罚款决定书</td>
                </tr>
              </table>
            </div>
            <div class="formHeader5 paper-number-div">
              <div>
                <span
                  @click="commandFill('cellIdx1', '文书号', 'TextItem')"
                >{{ letData.cellIdx1 ? letData.cellIdx1 : '（编辑）' }}</span>
                <label>煤安监</label>
                <span
                  @click="commandFill('cellIdx2', '文书号', 'TextItem')"
                >{{ letData.cellIdx2 ? letData.cellIdx2 : '（编辑）' }}</span>
                <label>缴决〔</label>
                <span
                  @click="commandFill('cellIdx3', '文书号', 'TextItem')"
                >{{ letData.cellIdx3 ? letData.cellIdx3 : '（编辑）' }}</span>
                <label>〕</label>
                <span
                  @click="commandFill('cellIdx4', '文书号', 'TextItem')"
                >{{ letData.cellIdx4 ? letData.cellIdx4 : '（编辑）' }}</span>
                <label>号</label>
              </div>
            </div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_5"
                  align="center"
                  style="min-width:50%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx5', '', 'TextItem')"
                >{{letData.cellIdx5}}</td>
                <td>：</td>
              </tr>
            </table>
            <div class="docTextarea">
              <label style="width:5%"></label>
              我局于
              <span
                @click="commandFill('cellIdx6', '年', 'TextItem')"
              >{{ letData.cellIdx6 ? letData.cellIdx6 : '（XX）'}}</span>
              年
              <span
                @click="commandFill('cellIdx7', '月', 'TextItem')"
              >{{ letData.cellIdx7 ? letData.cellIdx7 : '（XX）'}}</span>
              月
              <span
                @click="commandFill('cellIdx8', '日', 'TextItem')"
              >{{ letData.cellIdx8 ? letData.cellIdx8 : '（XX）'}}</span>
              日向你
              <span
                class="no-underline"
              >{{ letData.cellIdx9 ? letData.cellIdx9 : '（点击编辑）'}}</span>
              作出《行政处罚决定书》（
              <span
                class="no-underline"
                @click="commandFill('cellIdx10', '行政处罚决定书文书号', 'TextItem')"
              >{{ letData.cellIdx10 ? letData.cellIdx10 : '（点击编辑）'}}</span>
              煤安监
              <span
                class="no-underline"
                @click="commandFill('cellIdx11', '行政处罚决定文书号', 'TextItem')"
              >{{ letData.cellIdx11 ? letData.cellIdx11 : '（点击编辑）'}}</span>
              罚〔
              <span
                class="no-underline"
                @click="commandFill('cellIdx12', '行政处罚决定文书号', 'TextItem')"
              >{{ letData.cellIdx12 ? letData.cellIdx12 : '（点击编辑）'}}</span>
              〕
              <span
                class="no-underline"
                @click="commandFill('cellIdx13', '行政处罚决定文书号', 'TextItem')"
              >{{ letData.cellIdx13 ? letData.cellIdx13 : '（点击编辑）'}}</span>
              号），对你
              <span
                class="no-underline"
              >{{ letData.cellIdx14 ? letData.cellIdx14 : '（点击编辑）'}}</span>
              作出罚款
              <span
                @click="commandFill('cellIdx15', '罚款', 'TextItem')"
              >{{ letData.cellIdx15 ? letData.cellIdx15 : '（点击编辑）'}}</span>
              的行政处罚决定。现根据你
              <span
                class="no-underline"
              >{{ letData.cellIdx16 ? letData.cellIdx16 : '（点击编辑）'}}</span>
              的申请，本机关依据《中华人民共和国行政处罚法》第<span class="text-decoration">六十六</span>条第<span class="text-decoration">二</span>款规定，经研究，作出如下决定:
            </div>
            <table class="docBody">
              <tr>
                <td style="width:5%"></td>
                <td
                  style="width:3%;"
                  class="cellInput"
                  id="cell_idx_17"
                  @click="commandFill('cellIdx17', '不予批准', 'SelectItem')"
                >{{letData.cellIdx17 ? letData.cellIdx17 : '□'}}</td>
                <td class="textAlignLeft">不予批准</td>
                <td
                  class="cellInput"
                  id="cell_idx_18"
                  align="center"
                  style="width:8%"
                  data-title
                  data-type="text"
                  data-src
                >{{ letData.cellIdx18 }}</td>
                <td class="textAlignLeft">缴纳罚款。</td>
              </tr>
              <tr>
                <td style="width:5%"></td>
                <td
                  id="cell_idx_19"
                  style="width:3%;"
                  class="cellInput"
                  @click="commandFill('cellIdx19', '延期缴纳罚款', 'SelectItem')"
                >{{letData.cellIdx19 ? letData.cellIdx19 : '□'}}</td>
                <td class="textAlignLeft">同意延期缴纳罚款。延长至</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_20"
                  align="center"
                  style="width:8%"
                  data-title="年"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx20', '年', 'TextItem')"
                >{{letData.cellIdx20}}</td>
                <td class="textAlignLeft">年</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_21"
                  align="center"
                  style="width:8%"
                  data-title="月"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx21', '月', 'TextItem')"
                >{{letData.cellIdx21}}</td>
                <td class="textAlignLeft">月</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_22"
                  align="center"
                  style="width:8%"
                  data-title="日"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx22', '日', 'TextItem')"
                >{{letData.cellIdx22}}</td>
                <td class="textAlignLeft">日止。</td>
              </tr>
              <tr>
                <td style="width:5%"></td>
                <td
                  id="cell_idx_23"
                  style="width:3%;"
                  class="cellInput"
                  @click="commandFill('cellIdx23', '分期缴纳罚款', 'SelectItem')"
                >{{letData.cellIdx23 ? letData.cellIdx23 : '□'}}</td>
                <td class="textAlignLeft">同意分期缴纳罚款。分</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_24"
                  align="center"
                  style="width:8%"
                  data-title="分几期"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx24', '分几期', 'TextItem')"
                >{{letData.cellIdx24}}</td>
                <td class="textAlignLeft">期：</td>
              </tr>
            </table>
            <div class="docTextarea"
              v-for="(item, index) in letData.cellIdx40"
              :key="index">
              <label style="width:3%"></label>
              第
              <span
                @click="editInstallment('no', '第几期', 'TextItem', index)"
              >{{ item.no ? item.no : `&nbsp;&nbsp;`}}</span>
              期：
              <span
                @click="editInstallment('year', '年', 'TextItem', index)"
              >{{ item.year ? item.year : `&nbsp;&nbsp;&nbsp;&nbsp;`}}</span>
              年
              <span
                @click="editInstallment('month', '月', 'TextItem', index)"
              >{{ item.month ? item.month : `&nbsp;&nbsp;`}}</span>
              月
              <span
                @click="editInstallment('date', '日', 'TextItem', index)"
              >{{ item.date ? item.date : `&nbsp;&nbsp;`}}</span>
              日前，缴纳罚款
              <span
                @click="editInstallment('fine', '罚款', 'TextItem', index)"
              >{{ item.fine ? item.fine : `&nbsp;&nbsp;&nbsp;&nbsp;`}}</span>
              （￥
              <span
                class="no-underline"
                @click="editInstallment('fineChinese', '罚款（大写）', 'TextItem', index)"
              >{{ item.fineChinese ? item.fineChinese : `&nbsp;&nbsp;&nbsp;&nbsp;`}}</span>
              ）
              <span
                v-if="paperData && paperData.delFlag !== '0'"
                class="no-line no-print"
                style="cursor: pointer; color:#409EFF;"
                @click="deletInstallment(index, item)"
              >删除</span>
            </div>
            <div 
              v-if="paperData && paperData.delFlag !== '0'"
              class="docTextarea no-print" 
              style="text-align: center; cursor: pointer; color:#409EFF;" 
              @click="addInstallment">
              （点击添加分期）
            </div>
            <table class="docBody" style="margin-top: 30px;">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_37"
                  align="right"
                  style="width:95%"
                  @click="commandFill('cellIdx37', '', 'TextItem')"
                >{{letData.cellIdx37 ? letData.cellIdx37 : '（点击编辑）'}}</td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_38"
                  align="right"
                  style="width:95%"
                  data-title
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx38', '日期', 'DateItem')"
                >{{letData.cellIdx38 ? letData.cellIdx38 : '（点击编辑）'}}</td>
              </tr>
            </table>
          </div>
          <div class="docTextarea" style="border-top: 2px solid #000;">
            备注：本文书一式三份，一份交银行，一份交被处罚
            <span
              style="borderBottom:none"
            >{{ letData.cellIdx39 ? letData.cellIdx39 : '（点击编辑）'}}</span>
            ，一份存档。 
          </div>
        </div>
      </div>
    </let-main>
    <el-dialog
      title="文书信息选择"
      :close-on-click-modal="false"
      append-to-body
      :visible="visibleSelectDialog"
      width="400px"
      :show-close="false"
    >
      <span>请选择：</span>
      <el-radio-group v-model="selectedType">
        <el-radio label="延期">延期</el-radio>
        <el-radio label="分期">分期</el-radio>
      </el-radio-group>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="confirm">确定</el-button>
      </span>
    </el-dialog>
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
import { getDocNumber, setNewDanger } from "@/utils/setInitPaperData";
import associationSelectPaper from '@/components/association-select-paper'
import { transformNumToChinese, thousands } from '@/utils/index'
const toggleDictionary = [
  {
    value: "□",
    name: "□",
  },
  {
    value: "√",
    name: "√",
  },
];
export default {
  name: "Let219",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {
        cellIdx0: null, // 延期/分期
        cellIdx1: null, // 文书号
        cellIdx2: null, // 文书号
        cellIdx3: null, // 文书号
        cellIdx4: null, // 文书号
        cellIdx5: null, // 煤矿名称
        cellIdx6: null, // 年
        cellIdx7: null, // 月
        cellIdx8: null, // 日
        cellIdx9: null, // 单位/个人
        cellIdx10: null, // 行政处罚决定书 文书号
        cellIdx11: null, // 行政处罚决定书 文书号
        cellIdx12: null, // 行政处罚决定书 文书号
        cellIdx13: null, // 行政处罚决定书 文书号
        cellIdx14: null, // 单位/个人
        cellIdx15: null, // 罚款
        cellIdx16: null, // 单位/个人
        cellIdx17: null, // 不予批准
        cellIdx18: null, // 延期/分期
        cellIdx19: null, // 延期缴纳罚款
        cellIdx20: null, // 年
        cellIdx21: null, // 月
        cellIdx22: null, // 日
        cellIdx23: null, // 不予批准
        cellIdx24: null, // 分几期
        cellIdx40: [
          {
            no: '', // 第几期
            year: '', // 年
            month: '', // 月
            date: '', // 月
            fine: '', // 缴纳罚款
            fineChinese: '', // 缴纳罚款大写
          },
          {
            no: '', // 第几期
            year: '', // 年
            month: '', // 月
            date: '', // 月
            fine: '', // 缴纳罚款
            fineChinese: '', // 缴纳罚款大写
          },
        ], // 分期内容
        cellIdx37: null, //
        cellIdx38: null, // 日期
        cellIdx39: null, // 单位/个人
        DangerTable: null,
        associationPaperId: {},
      },
      options: {
        cellIdx17: toggleDictionary,
        cellIdx19: toggleDictionary,
        cellIdx23: toggleDictionary,
      },
      visibleSelectDialog: false,
      selectedType: "延期",
      associationPaper: ['8']
    };
  },
  methods: {
    async initLetData (selectedPaper) {
      let db = new GoDB(this.$store.state.DBName);
      let corpBase = db.table("corpBase");
      let corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      // 1.文书号
      let paperNumber = await getDocNumber(
        db,
        this.docData.docTypeNo,
        this.corpData.caseId
      );
      // 2.被处罚单位个人
      let let8DataPaperContent = JSON.parse(selectedPaper.let8Data.paperContent);
      let cellIdx5String = let8DataPaperContent.cellIdx5 || ''
      // 3.行政处罚决定书 日期、编号、
      let date206 = selectedPaper.let8Data.createDate.split(' ')[0].split('-')
      let selectedTypeExtra = let8DataPaperContent.selectedType
      // 4.获取行政处罚中的罚款金额
      // 带入行政处罚决定书的处罚金额 .罚款数额的填写应当使用中文大写填写，后面用括号标明“¥+阿拉伯数字”，如“人民币贰万元整（¥20,000.00）
      let moneyChinese = ''
      let moneyThousands = ''
      if (selectedPaper.let8Data.p8Penalty) {
        moneyChinese = transformNumToChinese(selectedPaper.let8Data.p8Penalty)
        moneyThousands = thousands(selectedPaper.let8Data.p8Penalty, 2)
      }
      let cellIdx15String = selectedPaper.let8Data.p8Penalty ?`${moneyChinese}（¥${moneyThousands}）` : ''
      let DangerTable = null;
      if (this.corpData.caseType === "0") {
        DangerTable = let8DataPaperContent.DangerTable
          ? setNewDanger(
              selectedPaper.let8Data,
              let8DataPaperContent.DangerTable
            )
          : {};
      }
      await db.close();
      this.visibleSelectDialog = true;
      this.letData = Object.assign({}, this.letData, {
        cellIdx1: paperNumber.num0, // 文书号
        cellIdx2: paperNumber.num1, // 文书号
        cellIdx3: paperNumber.num3, // 文书号
        cellIdx4: paperNumber.num4, // 文书号
        cellIdx5: cellIdx5String, // 被处罚单位/个人
        cellIdx6: date206[0], // 年
        cellIdx7: date206[1], // 月
        cellIdx8: date206[2], // 日
        cellIdx9: selectedTypeExtra, // 单位/个人
        cellIdx10: let8DataPaperContent.cellIdx0, // 行政处罚决定书 文书号
        cellIdx11: let8DataPaperContent.cellIdx1, // 行政处罚决定书 文书号
        cellIdx12: let8DataPaperContent.cellIdx2, // 行政处罚决定书 文书号
        cellIdx13: let8DataPaperContent.cellIdx3, // 行政处罚决定书 文书号
        cellIdx14: selectedTypeExtra, // 单位/个人
        cellIdx15: cellIdx15String,
        cellIdx16: selectedTypeExtra, // 单位/个人
        cellIdx17: "□", // 不予批准
        cellIdx19: "□", // 延期缴纳罚款
        cellIdx23: "□", // 不予批准
        cellIdx37: this.$store.state.curCase.provinceGroupName, //
        cellIdx38: this.todayDate, // 日期
        cellIdx39: selectedTypeExtra, // 单位/个人
        selectedType1: let8DataPaperContent.selectedType, // 单位或个人的存储
        DangerTable: DangerTable,
        associationPaperId:
          this.corpData.caseType === "0"
            ? {
                // 关联的paperId
                paper22Id: let8DataPaperContent.associationPaperId.paper22Id,
                paper1Id: let8DataPaperContent.associationPaperId.paper1Id,
                paper6Id: let8DataPaperContent.associationPaperId.paper6Id,
                paper8Id: selectedPaper.let8Data.paperId,
              }
            : {
              paper6Id: let8DataPaperContent.associationPaperId.paper6Id,
              paper8Id: selectedPaper.let8Data.paperId,
            },
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
    confirm() {
      this.visibleSelectDialog = false;
      this.letData.cellIdx0 = this.selectedType;
      this.letData.cellIdx0TypetextItem = this.selectedType;
      this.letData.cellIdx18 = this.selectedType;
      this.letData.cellIdx18TypetextItem = this.selectedType;
      this.letData.selectedType = this.selectedType;
    },
    editInstallment(key, title, type, index) {
      // 编辑分期内容
      // 判断是否可编辑
      if (this.$refs.letMain.canEdit) {
        // 文书各个字段点击打开左侧弹出编辑窗口
        this.options.cellIdx40 = {
          saveDataKey: 'cellIdx40',
          saveDataIndex: index
        }
        this.$refs.letMain.commandFill(
          key,
          key,
          title,
          type,
          this.letData.cellIdx40[index][key],
          this.options.cellIdx40
        );
      }
    },
    addInstallment () {
      // 添加分期
      this.letData.cellIdx40.push({
        no: '', // 第几期
        year: '', // 年
        month: '', // 月
        date: '', // 月
        fine: '', // 缴纳罚款
        fineChinese: '', // 缴纳罚款大写
      },)
    },
    deletInstallment (index, item) {
      // 删除分期
      let msg = `是否确定删除${item.no ? '第' + item.no + '期' : '本条'}分期？`
      this.$confirm(msg, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          dangerouslyUseHTMLString: true,
          type: 'warning'
        }).then(() => {
          this.letData.cellIdx40.splice(index, 1)
        }).catch(() => {})
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/let";
</style>