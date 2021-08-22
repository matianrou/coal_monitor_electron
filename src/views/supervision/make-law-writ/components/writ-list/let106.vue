<!-- 现场检查 一般检查 责令撤出作业人员命令书 -->
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
            <div class="textAlignCenter formHeader0">
              煤矿安全监管行政执法文书
              <br />
            </div>
            <div class="textAlignCenter formHeader3">撤出作业人员命令书</div>
            <div class="stdRowH"></div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_0"
                  align="right"
                  style="width:60%"
                  data-title
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignLeft cellBottomLine">煤安监</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_1"
                  align="center"
                  style="width:7%"
                  data-title
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignLeft cellBottomLine">撤〔</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_2"
                  align="center"
                  style="width:7%"
                  data-title
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignLeft cellBottomLine">〕</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_3"
                  align="center"
                  style="width:7%"
                  data-title
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignLeft cellBottomLine">号&nbsp;&nbsp;</td>
              </tr>
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_4"
                  style="width:62%"
                  data-title
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                >{corp_name}</td>
                <td class="textAlignLeft">:</td>
              </tr>
            </table>
            <table style="border:solid 0px #000;" class="docBody">
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我</td>
                <td
                  class="cellInput"
                  id="cell_idx_5"
                  align="center"
                  style="width:8%"
                  data-title
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignLeft">于</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_6"
                  align="center"
                  style="width:8%"
                  data-title="年"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignLeft">年</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_7"
                  align="center"
                  style="width:8%"
                  data-title="月"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignLeft">月</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_8"
                  align="center"
                  style="width:8%"
                  data-title="日"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignLeft">日</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_9"
                  align="center"
                  style="width:8%"
                  data-title="时"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignLeft">时</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_10"
                  align="center"
                  style="width:8%"
                  data-title="分"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignLeft">分，在对你单位安全监察</td>
              </tr>
              <tr>
                <td class="textAlignLeft">时，发现在</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_11"
                  style="width:87%"
                  data-title
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
              </tr>
              <tr>
                <td class="textAlignLeft">有</td>
                <td
                  style="width:95%"
                  class="cellInput cellBottomLine"
                  id="cell_idx_12"
                  data-title
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
              </tr>
              <tr>
                <td class="textAlignLeft">等威胁职工生命安全的紧急情况，现命令立即从</td>
                <td
                  style="width:55%"
                  class="cellInput cellBottomLine"
                  id="cell_idx_13"
                  data-title
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
              </tr>
              <tr>
                <td class="textAlignLeft">危险区内撤出作业人员。</td>
              </tr>
              <tr>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此命令</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_14"
                  align="center"
                  style="width:10%"
                  data-title="年"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignLeft">年</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_15"
                  align="center"
                  style="width:10%"
                  data-title="月"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignLeft">月</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_16"
                  align="center"
                  style="width:10%"
                  data-title="日"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignLeft">日</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_17"
                  align="center"
                  style="width:10%"
                  data-title="时"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignLeft">时</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_18"
                  align="center"
                  style="width:10%"
                  data-title="分"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignLeft">分现场已作出。</td>
              </tr>
              <tr></tr>
              <tr>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如对本命令不服，可在接到本命令书之日起60日内向</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_19"
                  style="width:41%"
                  data-title
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
              </tr>
              <tr>
                <td class="textAlignLeft">申请行政复议或6个月内向</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_20"
                  style="width:20%"
                  data-title
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignLeft">人民法院提起行政诉讼，但不停止执行本命令。</td>
              </tr>
            </table>
            <table height="60"></table>
            <table class="docBody">
              <tr>
                <td class="textAlignLeft">被检查单位负责人意见：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_21"
                  style="width:23%"
                  data-title="被检查单位负责人意见"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignLeft">签名：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_22"
                  style="width:17.4%"
                  data-title="签名"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignLeft">日期：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_23"
                  style="width:20%"
                  data-title="日期"
                  data-type="date"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
              </tr>
              <tr>
                <td class="textAlignLeft">执法人员（签名)：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_24"
                  style="width:52%"
                  data-title="执法人员（签名)"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignLeft">日期：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_25"
                  style="width:20%"
                  data-title="日期"
                  data-type="date"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
              </tr>
            </table>
            <table height="30"></table>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_26"
                  align="right"
                  style="width:95%"
                  data-title
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
              </tr>
            </table>
            <table class="docBody">
              <td class="cellInput" style="width:55%"></td>
              <td
                class="cellInput"
                id="cell_idx_27"
                align="center"
                style="width:45%"
                data-title="日期"
                data-type="date"
                data-src
                onclick="commandFill(this.id)"
              ></td>
            </table>
            <table>
              <hr />
              <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;备注：本文书一式两份，一份交被检查单位，一份存档。</td>
            </table>
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
  name: "Let106",
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