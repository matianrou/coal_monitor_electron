<!-- 行政执法决定法制审核意见书/案件处理呈报书 -->
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
            <div class="textAlignCenter formHeader3">案 件 处 理 呈 报 书</div>
            <div class="stdRowH"></div>
            <table class="docBody">
              <tr>
                <td class="cellInput" id="cell_idx_0" align="right" style="width:70%"></td>
                <td class="textAlignLeft">编号：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_1"
                  align="center"
                  style="width:24%"
                  data-title="编号"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td class="textAlignLeft">案&nbsp;&nbsp;由：</td>
              </tr>
            </table>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              id="cell_idx_2"
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
            </div>
            <table style="border:solid 0px #000;" class="docBody">
              <tr>
                <td class="textAlignLeft">立案决定书编号：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_3"
                  align="center"
                  style="width:36%"
                  data-title="立案决定书编号"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignLeft">立案时间：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_4"
                  align="center"
                  style="width:35%"
                  data-title="立案时间"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
              </tr>
              <tr>
                <td class="textAlignLeft">承办人：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_5"
                  align="center"
                  style="width:88.5%"
                  data-title="承办人"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
              </tr>
            </table>
            <table style="border:solid 0px #000;" class="docBody">
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;违法事实及依据：</td>
              </tr>
            </table>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              id="cell_idx_6"
              data-title="违法事实及依据"
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
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;建议案件处理意见：</td>
              </tr>
            </table>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              id="cell_idx_7"
              data-title="建议案件处理意见"
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
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;法制审核意见：</td>
              </tr>
            </table>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              id="cell_idx_8"
              data-title="法制审核意见"
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
            <table height="60"></table>
            <table class="docBody">
              <tr>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;分管负责人意见：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_9"
                  align="center"
                  style="width:20%"
                  data-title="分管负责人意见"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignCenter">&nbsp;签名：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_10"
                  align="center"
                  style="width:20%"
                  data-title="签名"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignCenter">&nbsp;日期：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_11"
                  align="center"
                  style="width:20%"
                  data-title="日期"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
              </tr>
              <tr>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;主要负责人意见：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_12"
                  align="center"
                  style="width:20%"
                  data-title="主要负责人意见"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignCenter">&nbsp;签名：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_13"
                  align="center"
                  style="width:20%"
                  data-title="签名"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignCenter">&nbsp;日期：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_14"
                  align="center"
                  style="width:20%"
                  data-title="日期"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
              </tr>
            </table>
            <table height="30"></table>
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
  name: "Let203",
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