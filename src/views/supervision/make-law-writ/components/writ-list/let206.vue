<!-- 行政处罚决定书 -->
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
            <div class="textAlignCenter formHeader3">行 政 处 罚 决 定 书</div>
            <div class="stdRowH"></div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_0"
                  align="right"
                  style="width:60%"
                  data-title="文书号"
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
                  data-title="文书号"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignLeft cellBottomLine">罚〔</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_2"
                  align="center"
                  style="width:7%"
                  data-title="文书号"
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
                  data-title="文书号"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignLeft cellBottomLine">号&nbsp;&nbsp;</td>
              </tr>
              <tr>
                <td class="textAlignLeft">被处罚</td>
                <td class="cellInput" id="cell_idx_4" align="center" style="width:10%"></td>
                <td class="textAlignLeft">:</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_5"
                  align="center"
                  style="width:40%"
                  data-title="被处罚"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignLeft">地址：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_6"
                  align="center"
                  style="width:33%"
                  data-title="地址"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
              </tr>
            </table>
            <table style="border:solid 0px #000;" class="docBody">
              <tr>
                <td class="textAlignLeft">违法事实：</td>
              </tr>
            </table>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              id="cell_idx_7"
              data-title="违法事实"
              data-type="textarea"
              data-src
              onclick="commandFill(this.id)"
            >
              <p
                style="width:100%; height:auto; word-wrap:break-word;word-wrap: break-all; overflow: hidden;"
              >&nbsp;</p>
              <p
                style="width: 100%; height: auto; word-wrap: break-word; word-wrap: break-all; overflow: hidden;"
              >&nbsp;</p>
            </div>
            <table style="border:solid 0px #000;" class="docBody">
              <tr>
                <td class="textAlignLeft">以上事实</td>
              </tr>
            </table>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              id="cell_idx_8"
              data-title="法律规定"
              data-type="textarea"
              data-src
              onclick="commandFill(this.id)"
            >
              <p
                style="width:100%; height:auto; word-wrap:break-word;word-wrap: break-all; overflow: hidden;"
              >&nbsp;</p>
              <p
                style="width: 100%; height: auto; word-wrap: break-word; word-wrap: break-all; overflow: hidden;"
              >&nbsp;</p>
            </div>
            <table style="border:solid 0px #000;" class="docBody">
              <tr>
                <td class="textAlignLeft">的规定，依据</td>
              </tr>
            </table>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              id="cell_idx_9"
              data-title="法律依据"
              data-type="textarea"
              data-src
              onclick="commandFill(this.id)"
            >
              <p
                style="width:100%; height:auto; word-wrap:break-word;word-wrap: break-all; overflow: hidden;"
              >&nbsp;</p>
              <p
                style="width: 100%; height: auto; word-wrap: break-word; word-wrap: break-all; overflow: hidden;"
              >&nbsp;</p>
            </div>
            <table style="border:solid 0px #000;" class="docBody">
              <tr>
                <td class="textAlignLeft">的规定，决定给予以下行政处罚：</td>
              </tr>
            </table>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              id="cell_idx_10"
              data-title="行政处罚"
              data-type="textarea"
              data-src
              onclick="commandFill(this.id)"
            >
              <p
                style="width:100%; height:auto; word-wrap:break-word;word-wrap: break-all; overflow: hidden;"
              >&nbsp;</p>
              <p
                style="width: 100%; height: auto; word-wrap: break-word; word-wrap: break-all; overflow: hidden;"
              >&nbsp;</p>
            </div>
            <table style="border:solid 0px #000;" class="docBody">
              <tr>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;接到本处罚决定书之日起15日内将罚款缴至</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_12"
                  align="center"
                  style="width:55%"
                  data-title="煤监机构"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
              </tr>
              <tr>
                <td class="textAlignLeft">银行：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_13"
                  align="center"
                  style="width:35%"
                  data-title="银行"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignLeft">支行（分理处），账户名称：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_14"
                  align="center"
                  style="width:30%"
                  data-title="支行（分理处），账户名称"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
              </tr>
              <tr>
                <td class="textAlignLeft">账号：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_15"
                  align="center"
                  style="width:42%"
                  data-title="账号"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignLeft">地址：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_16"
                  align="center"
                  style="width:41%"
                  data-title="地址"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignLeft">。</td>
              </tr>
              <tr>
                <td class="textAlignLeft">到期不缴纳罚款的，每日按罚款数额的百分之三加处罚款。</td>
              </tr>
              <tr>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如对本处罚决定不服，可在接到本决定书之日起60日内向</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_17"
                  align="center"
                  style="width:43%"
                  data-title="煤监机构"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
              </tr>
              <tr>
                <td class="textAlignLeft">申请行政复议或6个月内向</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_18"
                  align="center"
                  style="width:20%"
                  data-title="人民法院"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignLeft">人民法院提起行政诉讼，但不停止执行本决定。</td>
              </tr>
            </table>
            <table height="30"></table>
            <table height="30"></table>
            <table class="docBody">
              <tr>
                <td class="cellInput" id="cell_idx_19" align="right" style="width:95%"></td>
              </tr>
            </table>
            <table class="docBody">
              <td class="cellInput" style="width:55%"></td>
              <td
                class="cellInput"
                id="cell_idx_20"
                align="center"
                style="width:10%"
                data-title="年"
                data-type="text"
                data-src
                onclick="commandFill(this.id)"
              ></td>
              <td class="textAlignLeft">年</td>
              <td
                class="cellInput"
                id="cell_idx_21"
                align="center"
                style="width:10%"
                data-title="月"
                data-type="text"
                data-src
                onclick="commandFill(this.id)"
              ></td>
              <td class="textAlignLeft">月</td>
              <td
                class="cellInput"
                id="cell_idx_22"
                align="center"
                style="width:10%"
                data-title="日"
                data-type="text"
                data-src
                onclick="commandFill(this.id)"
              ></td>
              <td class="textAlignLeft">日</td>
            </table>
            <table class="docBody">
              <hr />
              <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;备注：本文书一式三份，一份交被处罚</td>
              <td class="cellInput" align="center" style="width:10%"></td>
              <td class="textAlignLeft">，一份交银行，一份存档。</td>
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
  name: "Let206",
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