<!-- 现场检查 一般检查 询问通知书 -->
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
            <div class="textAlignCenter formHeader2">询问通知书</div>
            <table style="width:390px;" class="docTop">
              <tr>
                <td class="textAlignCenter" id="cell_idx_0">（[SHORTNAME]）应急询〔[YEAR]〕[DOCNUMBER]号</td>
              </tr>
            </table>
            <div class="stdRowH"></div>
            <table class="docBody">
              <tr>
                <td class="cellInput cellBottomLine" style="width:320px" id="cell_idx_3">{corp_name}</td>
                <td>：</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td style="width:15mm;text-align:right;">因</td>
                <td style="width:95mm;" class="cellInput cellBottomLine" id="cell_idx_4"></td>
                <td style="width:80mm;">
                  ，请你（单位）于
                  <span
                    style="display:inline-block;width:170px;"
                    class="cellInput textAlignCenter cellBottomLine"
                    id="cell_idx_5"
                    onclick="host.commandFill(this.id,'datetime','日期时间','yyyy年MM月dd日HH时')"
                  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;月&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;日&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;时</span>
                </td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td style="width:20px;">到</td>
                <td style="width:320px;" class="cellInput cellBottomLine" id="cell_idx_6"></td>
                <td style="width:420px;">接受询问调查，来时请携带下列证件材料（见打√处）：</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td
                  style="width:20px;"
                  class="cellInput"
                  id="cell_idx_7"
                  onclick="host.commandFill(this.id,'toggle','身份证')"
                >□</td>
                <td>身份证</td>
              </tr>
              <tr>
                <td
                  id="cell_idx_8"
                  class="cellInput"
                  onclick="host.commandFill(this.id,'toggle','营业执照')"
                >□</td>
                <td>营业执照</td>
              </tr>
              <tr>
                <td
                  id="cell_idx_9"
                  class="cellInput"
                  onclick="host.commandFill(this.id,'toggle','法定代表人身份证明或者委托书')"
                >□</td>
                <td>法定代表人身份证明或者委托书</td>
              </tr>
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_10"
                  onclick="host.commandFill(this.id,'toggle','其它')"
                >□</td>
                <td id="cell_idx_11" class="cellInput cellBottomLine"></td>
              </tr>
              <tr>
                <td colspan="2">如无法按时前来，请及时联系。</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td style="width:40mm;">应急管理部门地址：</td>
                <td
                  style="width:150mm;"
                  class="cellInput cellBottomLine textAlignCenter"
                  id="cell_idx_12"
                ></td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td style="width:70px;">联系人：</td>
                <td
                  style="width:290px;"
                  class="cellInput cellBottomLine textAlignCenter"
                  id="cell_idx_13"
                ></td>
                <td style="width:90px;text-align:right;">联系电话：</td>
                <td
                  style="width:310px;"
                  class="cellInput cellBottomLine textAlignCenter"
                  id="cell_idx_14"
                ></td>
              </tr>
            </table>
            <div style="height:300px;"></div>
            <table class="docBody">
              <tr>
                <td style="width:410px;">&nbsp;</td>
                <td style="width:250px;" class="cellInput textAlignRight" id="cell_idx_15">[OrgName]</td>
                <td style="width:100px;padding-right:16px;" class="textAlignCenter">（印章）</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td style="width:594px;">&nbsp;</td>
                <td
                  style="padding-right:16px;width:170px;"
                  class="cellInput textAlignCenter"
                  id="cell_idx_16"
                  onclick="host.commandFill(this.id,'date','日期')"
                >选择日期...</td>
                <td style="width:16px;">&nbsp;</td>
              </tr>
            </table>
            <div class="docFooter">
              <div
                style="margin-top:4px;width:98%;height: 24px; line-height:30px; padding-left: 16px;"
              >本文书一式两份：一份由应急管理部门备案，一份交被询问人。</div>
            </div>
          </div>
        </div>
      </div>
    </let-main>
  </div>
</template>

<script>
import letMain from "../let-main";
import GoDB from "@/utils/godb.min.js";
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
          item.caseId === caseId && item.paperType === this.docData.docTypeNo
        );
      });
      // 已做文书则展示文书内容，否则创建初始版本
      if (checkPaper.length > 0) {
        // 回显
        this.letData = JSON.parse(checkPaper[0].paperContent);
        this.editData = checkPaper[0];
      } else {
        // 创建初始版本
        this.letData = {
          cellIdx0: corp.corpName ? corp.corpName : null, // 被检查单位
          cellIdx0TypeTextItem: corp.corpName ? corp.corpName : null,
          cellIdx1: null, // 监察类型或方式
          cellIdx2: null, // 检查时间
          cellIdx3: sSummary ? sSummary : null, // 煤矿概况
          cellIdx3TypeTextareaItem: sSummary ? sSummary : null, // 煤矿概况
          cellIdx4: null, // 检查地点
          cellIdx5: [], // 检查分工明细表
          cellIdx5TypeCheckTableItem: {}, // 检查分工明细表
          cellIdx6: corpOther, // 其他事项
          cellIdx6TypeTextItem: corpOther, // 其他事项
          cellIdx8: null, // 编制人
          cellIdx9: null, // 编制日期
          cellIdx10: null, // 审批人
          cellIdx11: null, // 审批日期
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
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/let";
</style>