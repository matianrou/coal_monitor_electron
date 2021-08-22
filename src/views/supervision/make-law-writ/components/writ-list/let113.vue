<!-- 现场检查 一般检查 解除停供电(停供民用爆炸物品)通知书 -->
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
            <div class="textAlignCenter formHeader0">煤矿安全监管行政执法文书</div>
            <div class="textAlignLeft formHeader3">
              <table class="docBody">
                <tr>
                  <td class="textAlignCenter">解除</td>
                  <td
                    class="cellInput"
                    id="cell_idx_0"
                    align="right"
                    style="width:55%"
                    data-title="停供电(停供民用爆炸物品)"
                    data-type="text"
                    data-src
                    onclick="commandFill(this.id)"
                  ></td>
                  <td class="textAlignLeft">&nbsp;通知书</td>
                </tr>
              </table>
            </div>
            <div class="stdRowH"></div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_1"
                  align="right"
                  style="width:50%"
                  data-title
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignLeft cellBottomLine">煤安监</td>
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
                <td class="textAlignLeft cellBottomLine">解停〔</td>
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
                <td class="textAlignLeft cellBottomLine">〕</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_4"
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
                  id="cell_idx_5"
                  style="width:50%"
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
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_6"
                  align="center"
                  style="width:30%"
                  data-title
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignLeft">已依法履行行政决定，采取相应措施消除了安全隐患，</td>
              </tr>
              <tr>
                <td class="textAlignLeft">发生生产安全事故的现实危险已不存在，根据《中华人民共和国安全生产法》第六十七</td>
              </tr>
              <tr>
                <td class="textAlignLeft">条第二款规定，请贵单位解除对其采取的</td>
                <td
                  class="cellInput"
                  id="cell_idx_9"
                  align="center"
                  style="width:20%"
                  data-title="解除停供电(停供民用爆炸物品)"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignLeft">措施。</td>
              </tr>
            </table>
            <table height="30"></table>
            <!-- <table class="docBody">
    <tr>
        <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;附件：</td>
        <td class="cellInput" id="cell_idx_10"  style="width:80%"></td>
    </tr>
            </table>-->
            <table class="docBody">
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;受送达人（签名）：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_11"
                  style="width:24%"
                  data-title="受送达人（签名）"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignLeft">&nbsp;&nbsp;日&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;期：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_12"
                  style="width:24.6%"
                  data-title="日期"
                  data-type="date"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
              </tr>
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我</td>
                <td
                  class="cellInput"
                  id="cell_idx_13"
                  align="center"
                  style="width:8%"
                  data-title
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignLeft">地址：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_14"
                  style="width:27.1%"
                  data-title="地址"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignLeft">&nbsp;&nbsp;邮政编码：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_15"
                  style="width:24.8%"
                  data-title="邮政编码"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
              </tr>
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我</td>
                <td
                  class="cellInput"
                  id="cell_idx_16"
                  align="center"
                  style="width:8%"
                  data-title
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignLeft">联系人：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_17"
                  style="width:24.9%"
                  data-title="联系人"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignLeft">&nbsp;&nbsp;联系电话：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_18"
                  style="width:24.8%"
                  data-title="联系电话"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
              </tr>
            </table>
            <table height="90"></table>

            <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_19"
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
                id="cell_idx_20"
                align="center"
                style="width:45%"
                data-title="日期"
                data-type="date"
                data-src
                onclick="commandFill(this.id)"
              ></td>
            </table>
            <table height="60"></table>

            <table>
              <hr />
              <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;备注：本文书一式三份，一份交</td>
              <td
                class="cellInput"
                id="cell_idx_21"
                align="center"
                style="width:15%"
                data-title
                data-type="text"
                data-src
                onclick="commandFill(this.id)"
              ></td>
              <td class="textAlignLeft">，一份交煤矿，一份存档。</td>
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
  name: "Let113",
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