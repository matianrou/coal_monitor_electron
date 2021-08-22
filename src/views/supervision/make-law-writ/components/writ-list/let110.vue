<!-- 现场检查 一般检查 查封(扣押)决定书、延长查封（扣押）期限决定书、查封(扣押)处理决定书 -->
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
            <div class="textAlignCenter formHeader3">
              <table class="docBody">
                <tr>
                  <td
                    class="cellInput"
                    id="cell_idx_0"
                    style="width:15%"
                    data-title="查封(扣押)"
                    data-type="text"
                    data-src
                    onclick="commandFill(this.id)"
                  ></td>
                  <td class="textAlignLeft">决定书</td>
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
                  style="width:55%"
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
                <td class="textAlignLeft cellBottomLine">查〔</td>
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
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;经查，你</td>
                <td
                  class="cellInput"
                  id="cell_idx_6"
                  align="center"
                  style="width:10%"
                  data-title
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td
                  style="width:70%"
                  class="cellInput cellBottomLine"
                  id="cell_idx_7"
                  data-title
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
              </tr>
              <tr>
                <td class="textAlignLeft">行为涉嫌违反</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_8"
                  style="width:80%"
                  data-title
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
              </tr>
              <tr>
                <td class="textAlignLeft">根据《中华人民共和国安全生产法》第六十二条第一款第四项规定，我</td>
                <td
                  class="cellInput"
                  id="cell_idx_9"
                  align="center"
                  style="width:10%"
                  data-title
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignLeft">决定对你</td>
              </tr>
              <tr>
                <td class="textAlignLeft">单位涉案</td>
                <td
                  class="cellInput"
                  id="cell_idx_10"
                  style="width:30%"
                  data-title
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignLeft">予以</td>
                <td
                  class="cellInput"
                  id="cell_idx_11"
                  style="width:15%"
                  data-title
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignLeft">（详见《物品清单》）。</td>
              </tr>
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我</td>
                <td
                  class="cellInput"
                  id="cell_idx_12"
                  align="center"
                  style="width:10%"
                  data-title
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignLeft">将于三十日内（不包括检测、检验或者技术鉴定期限）对上述被</td>
                <td
                  class="cellInput"
                  id="cell_idx_13"
                  style="width:15%"
                  data-title
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignLeft">的</td>
              </tr>
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td
                  class="cellInput"
                  id="cell_idx_14"
                  align="center"
                  style="width:20%"
                  data-title
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignLeft">作出处理决定。此前，你单位不得使用、销毁或转移上述</td>
              </tr>
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td
                  class="cellInput"
                  id="cell_idx_15"
                  align="center"
                  style="width:20%"
                  data-title
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignLeft">，并负有安全保障责任。</td>
              </tr>
              <tr>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如不服本决定，可在接到本决定书之日起60日内向</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_16"
                  align="center"
                  style="width:30%"
                  data-title
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignLeft">申</td>
              </tr>
              <tr>
                <td class="textAlignLeft">请行政复议或6个月内向</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_17"
                  align="center"
                  style="width:15%"
                  data-title
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignLeft">人民法院提起行政诉讼，但不停止本决定的执行。</td>
              </tr>
            </table>
            <table height="30"></table>
            <table class="docBody">
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;附件：</td>
                <td
                  class="cellInput"
                  id="cell_idx_18"
                  style="width:80%"
                  data-title="附件"
                  data-type="text"
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
              <tr>
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
              </tr>
            </table>
            <table height="60"></table>

            <table>
              <hr />
              <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;备注：本文书一式两份，一份交被</td>
              <td
                class="cellInput"
                id="cell_idx_21"
                align="center"
                style="width:10%"
                data-title
                data-type="text"
                data-src
                onclick="commandFill(this.id)"
              ></td>
              <td class="textAlignLeft">单位，一份存档。</td>
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
  name: "Let110",
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