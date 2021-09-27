<!-- 行政处罚 案件结案 延期（分期）缴纳罚款决定书-->
<template>
  <div style="width: 100%; height: 100%;">
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
            <div class="textAlignCenter formHeader0">煤矿安全监管行政执法文书</div>
            <div class="textAlignCenter formHeader1">
              <table class="docBody">
                <tr>
                  <td
                    class="cellInput"
                    id="cell_idx_0"
                    data-title="延期(分期)"
                    data-type="text"
                    data-src
                    @click="commandFill('cellIdx0', '延期(分期)', 'TextItem')"
                  >{{ letData.cellIdx0 }}</td>
                  <td class="textAlignLeft">缴纳罚款决定书</td>
                </tr>
              </table>
            </div>
            <div class="docTextLine paper-number-div">
              <div>
                <span
                  @click="commandFill('cellIdx1', '文书号', 'TextItem')"
                >{{ letData.cellIdx1 ? letData.cellIdx1 : '（编辑）' }}</span>
                <label>(</label>
                <span
                  @click="commandFill('cellIdx2', '文书号', 'TextItem')"
                >{{ letData.cellIdx2 ? letData.cellIdx2 : '（编辑）' }}</span>
                <label>） 煤安缴决〔</label>
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
                  style="width:60%"
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
              本机关于
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
              日向
              <span
                class="no-underline"
                @click="commandFill('cellIdx9', '单位/个人', 'SelectItem')"
              >{{ letData.cellIdx9 ? letData.cellIdx9 : '（点击编辑）'}}</span>
              作出《行政处罚决定书》（
              <span
                class="no-underline"
                @click="commandFill('cellIdx10', '行政处罚决定书文书号', 'TextItem')"
              >{{ letData.cellIdx10 ? letData.cellIdx10 : '（点击编辑）'}}</span>
              （
              <span
                class="no-underline"
                @click="commandFill('cellIdx11', '行政处罚决定文书号', 'TextItem')"
              >{{ letData.cellIdx11 ? letData.cellIdx11 : '（点击编辑）'}}</span>
              ）煤安罚〔
              <span
                class="no-underline"
                @click="commandFill('cellIdx12', '行政处罚决定文书号', 'TextItem')"
              >{{ letData.cellIdx12 ? letData.cellIdx12 : '（点击编辑）'}}</span>
              〕
              <span
                class="no-underline"
                @click="commandFill('cellIdx13', '行政处罚决定文书号', 'TextItem')"
              >{{ letData.cellIdx13 ? letData.cellIdx13 : '（点击编辑）'}}</span>
              号），对
              <span
                class="no-underline"
                @click="commandFill('cellIdx14', '单位/个人', 'SelectItem')"
              >{{ letData.cellIdx14 ? letData.cellIdx14 : '（点击编辑）'}}</span>
              作出罚款
              <span
                @click="commandFill('cellIdx15', '罚款', 'TextItem')"
              >{{ letData.cellIdx15 ? letData.cellIdx15 : '（点击编辑）'}}</span>
              的行政处罚决定。现根据你
              <span
                class="no-underline"
                @click="commandFill('cellIdx16', '单位/个人', 'SelectItem')"
              >{{ letData.cellIdx16 ? letData.cellIdx16 : '（点击编辑）'}}</span>
              的申请，本机关依据《中华人民共和国行政处罚法》第六十六条第二款规定，经研究，作出如下决定:
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
                  @click="commandFill('cellIdx18', '', 'TextItem')"
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
                class="no-line"
                @click="editInstallment('fineChinese', '罚款（大写）', 'TextItem', index)"
              >{{ item.fineChinese ? item.fineChinese : `&nbsp;&nbsp;&nbsp;&nbsp;`}}</span>
              ）
              <span
                class="no-line no-print"
                style="cursor: pointer; color:#409EFF;"
                @click="deletInstallment(index, item)"
              >删除</span>
            </div>
            <div class="docTextarea no-print" style="text-align: center; cursor: pointer; color:#409EFF;" @click="addInstallment">
              （点击添加分期）
            </div>
            <!-- <table class="docBody">
              <td style="width:5%"></td>
              <td class="textAlignLeft">第</td>
              <td
                class="cellInput cellBottomLine"
                id="cell_idx_25"
                align="center"
                style="width:7%"
                data-title="月"
                data-type="text"
                data-src
                @click="commandFill('cellIdx25', '第几期', 'TextItem')"
              >{{letData.cellIdx25}}</td>
              <td class="textAlignLeft">期：</td>
              <td
                class="cellInput cellBottomLine"
                id="cell_idx_26"
                align="center"
                style="width:8%"
                data-title="年"
                data-type="text"
                data-src
                @click="commandFill('cellIdx26', '年', 'TextItem')"
              >{{letData.cellIdx26}}</td>
              <td class="textAlignLeft">年</td>
              <td
                class="cellInput cellBottomLine"
                id="cell_idx_27"
                align="center"
                style="width:8%"
                data-title="月"
                data-type="text"
                data-src
                @click="commandFill('cellIdx27', '月', 'TextItem')"
              >{{letData.cellIdx27}}</td>
              <td class="textAlignLeft">月</td>
              <td
                class="cellInput cellBottomLine"
                id="cell_idx_28"
                align="center"
                style="width:8%"
                data-title="日"
                data-type="text"
                data-src
                @click="commandFill('cellIdx28', '日', 'TextItem')"
              >{{letData.cellIdx28}}</td>
              <td class="textAlignLeft">日前，缴纳罚款</td>
              <td
                class="cellInput cellBottomLine"
                id="cell_idx_29"
                align="center"
                style="width:9%"
                data-title="缴纳罚款"
                data-type="text"
                data-src
                @click="commandFill('cellIdx29', '缴纳罚款', 'TextItem')"
              >{{letData.cellIdx29}}</td>
              <td class="textAlignLeft">(￥</td>
              <td
                class="cellInput"
                id="cell_idx_30"
                align="center"
                style="width:10%"
                data-title="￥"
                data-type="text"
                data-src
                @click="commandFill('cellIdx30', '￥', 'TextItem')"
              >{{letData.cellIdx30}}</td>
              <td class="textAlignLeft">)</td>
            </table>
            <table class="docBody">
              <td style="width:5%"></td>
              <td class="textAlignLeft">第</td>
              <td
                class="cellInput cellBottomLine"
                id="cell_idx_31"
                align="center"
                style="width:7%"
                data-title="月"
                data-type="text"
                data-src
                @click="commandFill('cellIdx31', '第几期', 'TextItem')"
              >{{letData.cellIdx31}}</td>
              <td class="textAlignLeft">期：</td>
              <td
                class="cellInput cellBottomLine"
                id="cell_idx_32"
                align="center"
                style="width:8%"
                data-title="年"
                data-type="text"
                data-src
                @click="commandFill('cellIdx32', '年', 'TextItem')"
              >{{letData.cellIdx32}}</td>
              <td class="textAlignLeft">年</td>
              <td
                class="cellInput cellBottomLine"
                id="cell_idx_33"
                align="center"
                style="width:8%"
                data-title="月"
                data-type="text"
                data-src
                @click="commandFill('cellIdx33', '月', 'TextItem')"
              >{{letData.cellIdx33}}</td>
              <td class="textAlignLeft">月</td>
              <td
                class="cellInput cellBottomLine"
                id="cell_idx_34"
                align="center"
                style="width:8%"
                data-title="日"
                data-type="text"
                data-src
                @click="commandFill('cellIdx34', '日', 'TextItem')"
              >{{letData.cellIdx34}}</td>
              <td class="textAlignLeft">日前，缴纳罚款</td>
              <td
                class="cellInput cellBottomLine"
                id="cell_idx_35"
                align="center"
                style="width:9%"
                data-title="缴纳罚款"
                data-type="text"
                data-src
                @click="commandFill('cellIdx35', '缴纳罚款', 'TextItem')"
              >{{letData.cellIdx36}}</td>
              <td class="textAlignLeft">(￥</td>
              <td
                class="cellInput"
                id="cell_idx_36"
                align="center"
                style="width:10%"
                data-title="￥"
                data-type="text"
                data-src
                @click="commandFill('cellIdx36', '￥', 'TextItem')"
              >{{letData.cellIdx36}}</td>
              <td class="textAlignLeft">)</td>
            </table> -->
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
            备注：本文书一式三份，一份交银行，一份交被处
            <span
              style="borderBottom:none"
              @click="commandFill('cellIdx39', '单位/个人', 'TextItem')"
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
import { getDocNumber } from "@/utils/setInitPaperData";
import associationSelectPaper from '@/components/association-select-paper'
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
const companyYou = [
  {
    value: "单位",
    name: "单位",
  },
  {
    value: "你",
    name: "你",
  },
];
export default {
  name: "Let105",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {},
      options: {
        cellIdx9: companyYou,
        cellIdx14: companyYou,
        cellIdx16: companyYou,
        cellIdx17: toggleDictionary,
        cellIdx19: toggleDictionary,
        cellIdx23: toggleDictionary,
        cellIdx39: [
          {
            value: "单位",
            name: "单位",
          },
          {
            value: "个人",
            name: "个人",
          },
        ]
      },
      visibleSelectDialog: false,
      selectedType: "延期",
      associationPaper: ['8']
    };
  },
  methods: {
    async initLetData (selectedPaper) {
      const db = new GoDB(this.$store.state.DBName);
      const corpBase = db.table("corpBase");
      const corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      let paperNumber = await getDocNumber(
        db,
        this.docData.docTypeNo,
        this.corpData.caseId,
        this.$store.state.user
      );
      // 2.行政处罚决定书 日期、编号、
      let let8DataPapaerContent = JSON.parse(selectedPaper.let8Data.paperContent);
      let date206 = let8DataPapaerContent.cellIdx20
        ? let8DataPapaerContent.cellIdx20
            .replace("年", "-")
            .replace("月", "-")
            .replace("日", "-")
            .split("-")
        : ["", "", ""];
      let selectedType = let8DataPapaerContent.selectedType
      let selectedString = selectedType === '单位' ? '单位' : '你'
      await db.close();
      this.visibleSelectDialog = true;
      this.letData = {
        cellIdx0: null, // 延期/分期
        cellIdx1: paperNumber.num0, // 文书号
        cellIdx1TypeTextItem: paperNumber.num0, // 文书号
        cellIdx2: paperNumber.num1, // 文书号
        cellIdx2TypeTextItem: paperNumber.num1, // 文书号
        cellIdx3: paperNumber.num3, // 文书号
        cellIdx3TypeTextItem: paperNumber.num3, // 文书号
        cellIdx4: paperNumber.num4, // 文书号
        cellIdx5TypeTextItem: paperNumber.num4, // 文书号
        cellIdx5: corp.corpName, // 煤矿名称
        cellIdx5TypeTextItem: corp.corpName, // 煤矿名称
        cellIdx6: date206[0], // 年
        cellIdx6TypeTextItem: date206[0], // 年
        cellIdx7: date206[1], // 月
        cellIdx7TypeTextItem: date206[1], // 月
        cellIdx8: date206[2], // 日
        cellIdx8TypeTextItem: date206[2], // 日
        cellIdx9: selectedString, // 单位/个人
        cellIdx9TypeSelectItem: selectedString, // 单位/个人
        cellIdx10: let8DataPapaerContent.cellIdx0, // 行政处罚决定书 文书号
        cellIdx10TypeTextItem: let8DataPapaerContent.cellIdx0, // 行政处罚决定书 文书号
        cellIdx11: let8DataPapaerContent.cellIdx1, // 行政处罚决定书 文书号
        cellIdx11TypeTextItem: let8DataPapaerContent.cellIdx1, // 行政处罚决定书 文书号
        cellIdx12: let8DataPapaerContent.cellIdx2, // 行政处罚决定书 文书号
        cellIdx12TypeTextItem: let8DataPapaerContent.cellIdx2, // 行政处罚决定书 文书号
        cellIdx13: let8DataPapaerContent.cellIdx3, // 行政处罚决定书 文书号
        cellIdx13TypeTextItem: let8DataPapaerContent.cellIdx3, // 行政处罚决定书 文书号
        cellIdx14: selectedString, // 单位/个人
        cellIdx14TypeSelectItem: selectedString, // 单位/个人
        cellIdx15: null, // 罚款
        cellIdx16: selectedString, // 单位/个人
        cellIdx16TypeSelectItem: selectedString, // 单位/个人
        cellIdx17: "□", // 不予批准
        cellIdx18: null, // 延期/分期
        cellIdx19: "□", // 延期缴纳罚款
        cellIdx20: null, // 年
        cellIdx21: null, // 月
        cellIdx22: null, // 日
        cellIdx23: "□", // 不予批准
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
        // cellIdx25: null, // 第几期
        // cellIdx26: null, // 年
        // cellIdx27: null, // 月
        // cellIdx28: null, // 日
        // cellIdx29: null, // 缴纳罚款
        // cellIdx30: null, // 缴纳罚款大写
        // cellIdx31: null, // 第几期
        // cellIdx32: null, // 年
        // cellIdx33: null, // 月
        // cellIdx34: null, // 日
        // cellIdx35: null, // 缴纳罚款
        // cellIdx36: null, // 缴纳罚款大写
        cellIdx37: null, //
        cellIdx38: null, // 日期
        cellIdx39: selectedType, // 单位/个人
        cellIdx39TypeSelectItem: selectedType, // 单位/个人
        selectedType: selectedType
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