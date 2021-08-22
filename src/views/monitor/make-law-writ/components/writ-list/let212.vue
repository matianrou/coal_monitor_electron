<!-- 行政处罚 案件结案 罚款收缴 有问题-->
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
            <div class="textAlignCenter formHeader1">安全生产行政执法文书</div>
            <div class="textAlignCenter formHeader2">延期（分期）缴纳罚款批准书</div>
            <table style="width:390px;" class="docTop">
              <tr>
                <td
                  class="textAlignCenter"
                  id="cell_idx_0"
                  contenteditable="true"
                >（{{letData.cellIdx0}}）应急缴批〔{{letData.cellIdx1}}〕{{letData.cellIdx2}}号</td>
              </tr>
            </table>
            <div class="stdRowH"></div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  style="width:320px"
                  id="cell_idx_3"
                  contenteditable="true"
                >{{letData.cellIdx3}}</td>
                <td>：</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td style="width:76mm">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span
                    style="display:inline-block;width:140px;"
                    class="cellInput textAlignCenter cellBottomLine"
                    id="cell_idx_4"
                    @click="commandFill('cellIdx4', '日期', 'DateItem')"
                  >{{letData.cellIdx4 ? letData.cellIdx4 : '&nbsp;&nbsp;&nbsp;&nbsp;年&nbsp;&nbsp;&nbsp;&nbsp;月&nbsp;&nbsp;&nbsp;&nbsp;日'}}</span>，本机关对你
                </td>
                <td style="width:30mm">（单位）发出</td>
                <td
                  style="width:84mm"
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_5"
                  @click="commandFill('cellIdx5', '', 'TextItem')"
                >{{letData.cellIdx5}}</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td style="width:90mm">《行政处罚决定书》，作出了对你（单位）罚款</td>
                <td
                  style="width:45mm"
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_6"
                  @click="commandFill('cellIdx6', '', 'TextItem')"
                >{{letData.cellIdx6}}</td>
                <td style="width:55mm">万元（大写）的决定，现根据</td>
              </tr>
              <tr>
                <td colspan="3">你（单位）的申请，本机关依据《中华人民共和国行政处罚法》第五十二条的规定，同意你（单位）</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td
                  style="width:20mm;"
                  class="cellInput textAlignCenter"
                  id="cell_idx_7"
                  @click="commandFill('cellIdx7', '延期缴纳罚款', 'toggle')"
                >□{{letData.cellIdx7}}</td>
                <td style="width:45mm;">延期缴纳罚款。延长至</td>
                <td
                  style="width:70mm;"
                  class="cellInput cellBottomLine"
                  id="cell_idx_8"
                  @click="commandFill('cellIdx8', '', 'TextItem')"
                >{{letData.cellIdx8}}</td>
                <td style="width:55mm;">止。</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td
                  style="width:20mm;"
                  class="cellInput textAlignCenter"
                  id="cell_idx_9"
                  @click="commandFill('cellIdx9', '', 'toggle')"
                >□{{letData.cellIdx9}}</td>
                <td style="width:35mm;">分期缴纳罚款。第</td>
                <td
                  style="width:20mm;"
                  class="cellInput cellBottomLine textAlignCenter"
                  id="cell_idx_10"
                  @click="commandFill('cellIdx10', '', 'TextItem')"
                >{{letData.cellIdx10}}</td>
                <td style="width:10mm;" class="textAlignCenter">期至</td>
                <td
                  style="width:75mm;"
                  class="cellInput cellBottomLine textAlignCenter"
                  id="cell_idx_11"
                  @click="commandFill('cellIdx11', '日期', 'DateItem')"
                >{{letData.cellIdx11 ? letData.cellIdx11 : '&nbsp;&nbsp;&nbsp;&nbsp;年&nbsp;&nbsp;&nbsp;&nbsp;月&nbsp;&nbsp;&nbsp;&nbsp;日'}}</td>
                <td style="width:30mm;">前，缴纳罚款</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td
                  style="width:50mm"
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_12"
                  @click="commandFill('cellIdx12', '', 'TextItem')"
                >{{letData.cellIdx12}}</td>
                <td style="width:140mm">万元（大写）（每期均应当单独开具本文书）。此外，尚有未缴纳的罚款</td>
              </tr>
              <tr>
                <td
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_13"
                  @click="commandFill('cellIdx13', '', 'TextItem')"
                >{{letData.cellIdx13}}</td>
                <td>元（大写）。</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;代收机构以本批准书为据，办理收款手续。</td>
              </tr>
            </table>
            <div class="stdRowH"></div>
            <div class="stdRowH"></div>
            <div class="stdRowH"></div>
            <div class="stdRowH"></div>
            <div class="stdRowH"></div>
            <div class="stdRowH"></div>
            <div class="stdRowH"></div>
            <div class="stdRowH"></div>
            <div class="stdRowH"></div>
            <div class="stdRowH"></div>
            <div class="halfRowH"></div>
            <table class="docBody">
              <tr>
                <td style="width:410px;">&nbsp;</td>
                <td
                  style="width:250px;"
                  class="cellInput textAlignRight"
                  id="cell_idx_14"
                  contenteditable="true"
                >{{letData.cellIdx14}}</td>
                <td style="width:100px;" class="textAlignCenter">（印章）</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td style="width:544px;">&nbsp;</td>
                <td
                  style="width:150px; z-index: 1;"
                  class="cellInput textAlignCenter"
                  id="cell_idx_15"
                  @click="commandFill('cellIdx15', '日期', 'DateItem')"
                >{{letData.cellIdx15 ? letData.cellIdx15 : '&nbsp;&nbsp;&nbsp;&nbsp;年&nbsp;&nbsp;&nbsp;&nbsp;月&nbsp;&nbsp;&nbsp;&nbsp;日'}}</td>
                <td style="width:16px;">&nbsp;</td>
              </tr>
            </table>
            <div class="docFooter">
              <div
                style="margin-top:4px;width:98%;height: 24px; line-height:30px;padding-left: 16px;"
              >本文书一式两份：一份由应急管理部门备案，一份交被通知当事人。</div>
            </div>
          </div>
        </div>
      </div>
    </let-main>
  </div>
</template>

<script>
import letMain from "./components/let-main";
import GoDB from "@/utils/godb.min.js";
export default {
  name: "Let212",
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
      options: {},
      editData: {}, // 回显数据
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
      const db = new GoDB("CoalDB");
      const corpBase = db.table("corpBase");
      //查询符合条件的记录
      const corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      const wkPaper = db.table("wkPaper");
      const caseId = this.corpData.caseId;
      const checkPaper = await wkPaper.findAll((item) => {
        return (
          item.caseId === caseId && item.paperType === this.docData.docTypeNo
        );
      });
      if (checkPaper.length > 0) {
        // 回显
        this.letData = JSON.parse(checkPaper[0].paperContent);
        this.editData = checkPaper[0];
      } else {
        // 创建初始版本
        this.letData = {
          cellIdx0: null, // SHORTNAME
          cellIdx1: null, // YEAR
          cellIdx2: null, // DOCNUMBER
          cellIdx3: null, // ent_name
          cellIdx4: null, // 日期
          cellIdx5: null, //
          cellIdx6: null, //
          cellIdx7: null, // 延期缴纳罚款
          cellIdx8: null, //
          cellIdx9: null, //
          cellIdx10: null, //
          cellIdx11: null, // 日期
          cellIdx12: null, //
          cellIdx13: null, //
          cellIdx14: null, // OrgName
          cellIdx15: null, // 日期
        };
      }
      await db.close();
    },
    goBack({ page }) {
      // 返回选择企业
      this.$emit("go-back", { page });
    },
    commandFill (key, title, type) {
      // 判断是否可编辑
      if (this.$refs.letMain.canEdit) {
        // 文书各个字段点击打开左侧弹出编辑窗口
        let dataKey = `${key}Type${type}`
        this.$refs.letMain.commandFill(key, dataKey, title, type, this.letData[dataKey], this.options[key])
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/let";
</style>