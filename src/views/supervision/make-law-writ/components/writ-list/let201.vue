<!-- 现场检查 一般检查 立案决定书 -->
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
            <div class="textAlignCenter formHeader3">立案决定书</div>
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
                <td class="textAlignLeft cellBottomLine">立〔</td>
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
            </table>
            <table style="border:solid 0px #000;" class="docBody">
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
              onclick="commandFill(this.id)"
            >
              <p
                style="width:100%; height:auto; word-wrap:break-word;word-wrap: break-all; overflow: hidden;"
              >&nbsp;</p>
              <p
                style="width: 100%; height: auto; word-wrap: break-word; word-wrap: break-all; overflow: hidden;"
              >&nbsp;</p>
              <p
                style="width: 100%; height: auto; word-wrap: break-word; word-wrap: break-all; overflow: hidden;"
              >&nbsp;</p>
            </div>
            <table style="border:solid 0px #000;" class="docBody">
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
              onclick="commandFill(this.id)"
            >
              <p
                style="width:100%; height:auto; word-wrap:break-word;word-wrap: break-all; overflow: hidden;"
              >&nbsp;</p>
              <p
                style="width: 100%; height: auto; word-wrap: break-word; word-wrap: break-all; overflow: hidden;"
              >&nbsp;</p>
              <p
                style="width: 100%; height: auto; word-wrap: break-word; word-wrap: break-all; overflow: hidden;"
              >&nbsp;</p>
            </div>
            <table>
              <tr>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;根据以上案由案情，决定自</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_6"
                  contenteditable="true"
                  align="center"
                  style="width:12%"
                  data-title="年"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignLeft">年</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_7"
                  contenteditable="true"
                  align="center"
                  style="width:12%"
                  data-title="月"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignLeft">月</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_8"
                  contenteditable="true"
                  align="center"
                  style="width:13%"
                  data-title="日"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignLeft">日起立案调查处理，并指定</td>
              </tr>
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_9"
                  align="left"
                  style="width:30%"
                  data-title="本案承办人"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignLeft">为本案承办人。</td>
              </tr>
            </table>

            <table height="30"></table>

            <table class="docBody">
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;审批人意见：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_10"
                  style="width:20%"
                  data-title="审批人意见"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignLeft">审批人（签名）：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_11"
                  style="width:18%"
                  data-title="审批人（签名）"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignCenter">日期:</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_12"
                  style="width:18%"
                  data-title="日期"
                  data-type="date"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
              </tr>
            </table>
            <table height="60"></table>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_13"
                  contenteditable="true"
                  align="right"
                  style="width:95%"
                ></td>
              </tr>
            </table>
            <table class="docBody">
              <td class="cellInput" style="width:55%"></td>
              <td
                class="cellInput"
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
                class="cellInput"
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
                class="cellInput"
                id="cell_idx_16"
                align="center"
                style="width:10%"
                data-title="日"
                data-type="text"
                data-src
                onclick="commandFill(this.id)"
              ></td>
              <td class="textAlignLeft">日</td>
            </table>
            <!-- <table>
		<hr />
		<td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;备注：本文书一式两份，一份交被复查单位，一份存档。</td>
            </table>-->
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
  name: "Let201",
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