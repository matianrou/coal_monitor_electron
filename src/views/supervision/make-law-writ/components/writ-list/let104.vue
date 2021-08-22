<!-- 现场检查 一般检查 整改复查意见书 -->
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
            <div class="textAlignCenter formHeader2">整改复查意见书</div>
            <table style="width:390px;" class="docTop">
              <tr>
                <td
                  class="cellInput textAlignCenter"
                  id="cell_idx_0"
                  contenteditable="true"
                >（甘）应急复查〔2021〕00001号</td>
              </tr>
            </table>
            <div class="stdRowH"></div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  style="width:320px"
                  id="cell_idx_3"
                  data-title="被检查单位"
                  data-type="text"
                  data-src
                  data-size="30"
                  onclick="commandFill(this.id)"
                >宁县米桥红军花炮销售店</td>
                <td>：</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td style="width:10mm;">&nbsp;</td>
                <td style="width:20mm;">本机关于</td>
                <td
                  style="width:50mm;"
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_4"
                  data-title="日期"
                  data-type="date"
                  data-src
                  onclick="commandFill(this.id)"
                >
                  <span class="cellYear"></span>年
                  <span class="cellMonth"></span>月
                  <span class="cellDay"></span>日
                </td>
                <td style="width:15mm;">作出了</td>
                <td
                  style="width:80mm;"
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_5"
                  data-title="文书名称"
                  data-type="text"
                  data-src
                  data-size="20"
                  onclick="commandFill(this.id)"
                ></td>
                <td style="width:15mm;">的决定</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td style="width:5mm;">〔</td>
                <td
                  style="width:85mm;"
                  class="cellInput textAlignCenter"
                  id="cell_idx_6"
                  data-title="文书编号"
                  data-type="text"
                  data-src
                  data-size="20"
                  onclick="commandFill(this.id)"
                ></td>
                <td style="width:100mm;">〕，经对你单位整改情况进行复查，提出如下意见：</td>
              </tr>
            </table>
            <div
              class="cellInput mutiLineArea"
              id="cell_idx_7"
              data-title="整改意见"
              data-type="list"
              data-src
              data-size="20"
              onclick="commandFill(this.id)"
            >
              <p
                style="width: 100%; height: auto; word-wrap: break-word; word-wrap: break-all; overflow: hidden;"
              >&nbsp;</p>
              <p
                style="width: 100%; height: auto; word-wrap: break-word; word-wrap: break-all; overflow: hidden;"
              >&nbsp;</p>
              <p
                style="width: 100%; height: auto; word-wrap: break-word; word-wrap: break-all; overflow: hidden;"
              >&nbsp;</p>
              <p
                style="width: 100%; height: auto; word-wrap: break-word; word-wrap: break-all; overflow: hidden;"
              >&nbsp;</p>
              <p
                style="width: 100%; height: auto; word-wrap: break-word; word-wrap: break-all; overflow: hidden;"
              >&nbsp;</p>
            </div>
            <div class="halfRowH"></div>
            <table class="docBody">
              <tr>
                <td style="width:260px;">被复查单位负责人（签名）：</td>
                <td
                  style="width:170px;"
                  class="cellInput cellBottomLine textAlignCenter cellNoPrint"
                  id="cell_idx_8"
                  data-title="被检查单位负责人"
                  data-type="text"
                  data-src
                  data-size="20"
                  onclick="commandFill(this.id)"
                >赵红军</td>
                <td colspan="2">&nbsp;</td>
              </tr>
              <tr>
                <td style="width:260px;">安全生产行政执法人员（签名)：</td>
                <td
                  style="width:170px;"
                  class="cellInput cellBottomLine textAlignCenter cellNoPrint"
                  id="cell_idx_9"
                  data-title="执法人员"
                  data-type="text"
                  data-src
                  data-size="20"
                  onclick="commandFill(this.id)"
                >孙健洁</td>
                <td style="width:90px; text-align: center;">证号：</td>
                <td
                  style="width:240px;"
                  class="cellInput cellBottomLine textAlignCenter"
                  id="cell_idx_10"
                  data-title="执法证号"
                  data-type="text"
                  data-src
                  data-size="20"
                  onclick="commandFill(this.id)"
                >006200011</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td
                  class="cellInput cellBottomLine textAlignCenter cellNoPrint"
                  id="cell_idx_11"
                  data-title="执法人员"
                  data-type="text"
                  data-src
                  data-size="20"
                  onclick="commandFill(this.id)"
                >张聪</td>
                <td style="text-align:center;">证号：</td>
                <td
                  class="cellInput cellBottomLine textAlignCenter"
                  id="cell_idx_12"
                  data-title="执法证号"
                  data-type="text"
                  data-src
                  data-size="20"
                  onclick="commandFill(this.id)"
                >006200033</td>
              </tr>
            </table>
            <div class="halfRowH"></div>
            <table class="docBody">
              <tr>
                <td style="width:410px;">&nbsp;</td>
                <td
                  style="width:250px;"
                  class="cellInput textAlignRight"
                  id="cell_idx_13"
                  data-title="应急管理单位"
                  data-type="text"
                  data-src
                  data-size="20"
                  onclick="commandFill(this.id)"
                >甘肃省应急管理厅</td>
                <td style="width:100px;padding-right:16px;" class="textAlignCenter">（印章）</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td style="width:594px;">&nbsp;</td>
                <td
                  style="padding-right:16px;width:170px;"
                  class="cellInput textAlignCenter cellDateNoPrint"
                  id="cell_idx_14"
                  data-title="日期"
                  data-type="date"
                  data-src
                  onclick="commandFill(this.id)"
                >
                  <span class="cellYear"></span>年
                  <span class="cellMonth"></span>月
                  <span class="cellDay"></span>日
                </td>
                <td style="width:16px;">&nbsp;</td>
              </tr>
            </table>
            <div class="docFooter">
              <div
                style="margin-top:4px;width:98%;height: 24px; line-height:30px;padding-left: 16px;"
              >本文书一式两份：一份由应急管理部门备案，一份交被复查单位。</div>
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
  name: "Let100",
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