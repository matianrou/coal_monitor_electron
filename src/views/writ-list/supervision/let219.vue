<!-- 行政处罚 案件结案 延期（分期）缴纳罚款决定书-->
<template>
  <div style="width: 100%; height: 100%;">
    <let-main
      ref="letMain"
      :corp-data="corpData"
      :doc-data="docData"
      :let-data="letData"
      :edit-data="editData"
      @go-back="goBack"
    >
      <div slot="left">
        <div class="page page-sizeA4">
          <div>
            <div class="stdRowH"></div>
            <div class="textAlignCenter formHeader1">煤矿安全监管行政执法文书</div>
            <div class="textAlignCenter formHeader3">
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
            <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_1"
                  align="right"
                  style="width:40%"
                  data-title="文书号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx1', '文书号', 'TextItem')"
                >{{letData.cellIdx1}}</td>
                <td class="textAlignLeft">（</td>
                <td
                  class="cellInput"
                  id="cell_idx_2"
                  align="center"
                  style="width:15%"
                  data-title="文书号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx2', '文书号', 'TextItem')"
                >{{letData.cellIdx2}}</td>
                <td class="textAlignLeft">）煤安缴决〔</td>
                <td
                  class="cellInput"
                  id="cell_idx_3"
                  align="center"
                  style="width:8%"
                  data-title="文书号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx3', '文书号', 'TextItem')"
                >{{letData.cellIdx3}}</td>
                <td class="textAlignLeft">〕</td>
                <td
                  class="cellInput"
                  id="cell_idx_4"
                  align="center"
                  style="width:10%"
                  data-title="文书号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx4', '文书号', 'TextItem')"
                >{{letData.cellIdx4}}</td>
                <td class="textAlignLeft">号&nbsp;&nbsp;</td>
              </tr>
            </table>
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
              日向你
              <span
                @click="commandFill('cellIdx9', '单位', 'TextItem')"
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
              号），对你
              <span
                class="no-underline"
                @click="commandFill('cellIdx14', '单位', 'TextItem')"
              >{{ letData.cellIdx14 ? letData.cellIdx14 : '（点击编辑）'}}</span>
              作出罚款
              <span
                @click="commandFill('cellIdx15', '罚款', 'TextItem')"
              >{{ letData.cellIdx15 ? letData.cellIdx15 : '（点击编辑）'}}</span>
              的行政处罚决定。现根据你
              <span
                @click="commandFill('cellIdx16', '单位', 'TextItem')"
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
                >{{letData.cellIdx17}}</td>
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
                >{{letData.cellIdx19}}</td>
                <td class="textAlignLeft">延期缴纳罚款。延长至</td>
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
                  @click="commandFill('cellIdx23', '', 'SelectItem')"
                >{{letData.cellIdx23}}</td>
                <td class="textAlignLeft">分期缴纳罚款。分</td>
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
            <table class="docBody">
              <td style="width:5%"></td>
              <td class="textAlignLeft">第</td>
              <td
                class="cellInput cellBottomLine"
                id="cell_idx_25"
                contenteditable="true"
                align="center"
                style="width:8%"
                data-title="月"
                data-type="text"
                data-src
                @click="commandFill('cellIdx25', '第几期', 'TextItem')"
              >{{letData.cellIdx25}}</td>
              <td class="textAlignLeft">期至</td>
              <td
                class="cellInput cellBottomLine"
                id="cell_idx_26"
                contenteditable="true"
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
                contenteditable="true"
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
                contenteditable="true"
                align="center"
                style="width:8%"
                data-title="日"
                data-type="text"
                data-src
                @click="commandFill('cellIdx28', '日', 'TextItem')"
              >{{letData.cellIdx28}}</td>
              <td class="textAlignLeft">日 &nbsp;&nbsp;&nbsp;&nbsp;前，缴纳罚款</td>
              <td
                class="cellInput cellBottomLine"
                id="cell_idx_29"
                contenteditable="true"
                align="center"
                style="width:12%"
                data-title="缴纳罚款"
                data-type="text"
                data-src
                @click="commandFill('cellIdx29', '缴纳罚款', 'TextItem')"
              >{{letData.cellIdx29}}</td>
              <td class="textAlignLeft">(￥</td>
              <td
                class="cellInput"
                id="cell_idx_30"
                contenteditable="true"
                align="center"
                style="width:12%"
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
                contenteditable="true"
                align="center"
                style="width:8%"
                data-title="月"
                data-type="text"
                data-src
                @click="commandFill('cellIdx31', '第几期', 'TextItem')"
              >{{letData.cellIdx31}}</td>
              <td class="textAlignLeft">期至</td>
              <td
                class="cellInput cellBottomLine"
                id="cell_idx_32"
                contenteditable="true"
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
                contenteditable="true"
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
                contenteditable="true"
                align="center"
                style="width:8%"
                data-title="日"
                data-type="text"
                data-src
                @click="commandFill('cellIdx34', '日', 'TextItem')"
              >{{letData.cellIdx34}}</td>
              <td class="textAlignLeft">日 &nbsp;&nbsp;&nbsp;&nbsp;前，缴纳罚款</td>
              <td
                class="cellInput cellBottomLine"
                id="cell_idx_35"
                contenteditable="true"
                align="center"
                style="width:12%"
                data-title="缴纳罚款"
                data-type="text"
                data-src
                @click="commandFill('cellIdx35', '缴纳罚款', 'TextItem')"
              >{{letData.cellIdx36}}</td>
              <td class="textAlignLeft">(￥</td>
              <td
                class="cellInput"
                id="cell_idx_36"
                contenteditable="true"
                align="center"
                style="width:12%"
                data-title="￥"
                data-type="text"
                data-src
                @click="commandFill('cellIdx36', '￥', 'TextItem')"
              >{{letData.cellIdx36}}</td>
              <td class="textAlignLeft">)</td>
            </table>
            <table height="30"></table>
            <table class="docBody">
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
          <table class="docBody">
            <hr />
            <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;备注：本文书一式三份，一份交银行，一份交被处单位，一份存档。</td>
          </table>
        </div>
      </div>
    </let-main>
    <el-dialog
      title="文书信息选择"
      :close-on-click-modal="false"
      append-to-body
      :visible="visible"
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
  </div>
</template>

<script>
import letMain from "@/views/make-law-writ/components/let-main.vue";
import GoDB from "@/utils/godb.min.js";
import { getDocNumber } from "@/utils/setInitPaperData";
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
  name: "Let105",
  props: {
    corpData: {
      type: Object,
      default: () => {},
    },
    docData: {
      type: Object,
      default: () => {
        return {
          docTypeNo: null,
          docTypeName: null,
        };
      },
    },
  },
  components: {
    letMain,
  },
  data() {
    return {
      letData: {},
      options: {
        cellIdx8: toggleDictionary,
        cellIdx9: toggleDictionary,
        cellIdx10: toggleDictionary,
        cellIdx11: toggleDictionary,
      },
      editData: {}, // 回显数据
      visible: false,
      selectedType: "延期",
    };
  },
  created() {
    this.initData();
  },
  watch: {
    "corpData.corpId"(val) {
      if (val) {
        this.initData();
      }
    },
  },
  methods: {
    async initData() {
      // 初始化文书内容
      const db = new GoDB("CoalSupervisionDB");
      const corpBase = db.table("corpBase");
      //查询符合条件的记录
      const corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      const wkPaper = db.table("wkPaper");
      const caseId = this.corpData.caseId;
      //查询当前计划是否已做文书
      const checkPaper = await wkPaper.findAll((item) => {
        return (
          item.caseId === caseId && item.paperType === this.docData.docTypeNo && item.delFlag !== '1'
        );
      });
      // 已做文书则展示文书内容，否则创建初始版本
      if (checkPaper.length > 0) {
        // 回显
        this.letData = JSON.parse(checkPaper[0].paperContent);
        this.editData = checkPaper[0];
      } else {
        // 创建初始版本
        let paperNumber = await getDocNumber(
          db,
          this.docData.docTypeNo,
          caseId,
          this.$store.state.user
        );
        // 2.行政处罚决定书 日期、编号、
        const let206Data = await wkPaper.find(
          (item) => item.caseId === caseId && item.paperType === "8"
        );
        if (!let206Data) {
          this.$message.error("请先填写并保存行政处罚决定书中内容！");
          return;
        }
        let let206DataPapaerContent = JSON.parse(let206Data.paperContent);
        let date206 = let206DataPapaerContent.cellIdx20
          ? let206DataPapaerContent.cellIdx20
              .replace("年", "-")
              .replace("月", "-")
              .replace("日", "-")
              .split("-")
          : ["", "", ""];
        this.visible = true;
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
          cellIdx9: null, // 单位
          cellIdx10: let206DataPapaerContent.cellIdx0, // 行政处罚决定书 文书号
          cellIdx10TypeTextItem: let206DataPapaerContent.cellIdx0, // 行政处罚决定书 文书号
          cellIdx11: let206DataPapaerContent.cellIdx1, // 行政处罚决定书 文书号
          cellIdx11TypeTextItem: let206DataPapaerContent.cellIdx1, // 行政处罚决定书 文书号
          cellIdx12: let206DataPapaerContent.cellIdx2, // 行政处罚决定书 文书号
          cellIdx12TypeTextItem: let206DataPapaerContent.cellIdx2, // 行政处罚决定书 文书号
          cellIdx13: let206DataPapaerContent.cellIdx3, // 行政处罚决定书 文书号
          cellIdx13TypeTextItem: let206DataPapaerContent.cellIdx3, // 行政处罚决定书 文书号
          cellIdx14: null, // 单位
          cellIdx15: null, // 罚款
          cellIdx16: null, // 单位
          cellIdx17: "□", // 不予批准
          cellIdx18: null, // 延期/分期
          cellIdx19: "□", // 延期缴纳罚款
          cellIdx20: null, // 年
          cellIdx21: null, // 月
          cellIdx22: null, // 日
          cellIdx23: "□", // 不予批准
          cellIdx24: null, // 分几期
          cellIdx25: null, // 第几期
          cellIdx26: null, // 年
          cellIdx27: null, // 月
          cellIdx28: null, // 日
          cellIdx29: null, // 缴纳罚款
          cellIdx30: null, // 缴纳罚款大写
          cellIdx31: null, // 第几期
          cellIdx32: null, // 年
          cellIdx33: null, // 月
          cellIdx34: null, // 日
          cellIdx35: null, // 缴纳罚款
          cellIdx36: null, // 缴纳罚款大写
          cellIdx37: null, //
          cellIdx38: null, // 日期
        };
      }
      await db.close();
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
      this.visible = false;
      this.letData.cellIdx0 = this.selectedType;
      this.letData.cellIdx0TypetextItem = this.selectedType;
      this.letData.cellIdx18 = this.selectedType;
      this.letData.cellIdx18TypetextItem = this.selectedType;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/let";
</style>