<!-- '执法案卷（首页）及目录 -->
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
            <div class="textAlignCenter formHeader0" style="font-size:30px">煤矿安全监管行政执法文书</div>
            <div class="textAlignCenter formHeader3" style="font-size:30px">执 法 案 卷 首 页</div>
            <div class="halfRowH"></div>
            <table class="docBody" style="border:solid 1.5px #000;">
              <tr style="height:3cm;">
                <td
                  style="width:30mm;height:30mm"
                  class="textAlignCenter cellBottomLine cellRightLine"
                >
                  <br />执法单位
                </td>
                <td
                  style="width:159mm;height:30mm"
                  class="cellInput cellBottomLine textPaddingLeft"
                  id="cell_idx_0"
                  align="center"
                  data-title="执法单位"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
              </tr>
              <tr style="height:5cm;">
                <td
                  style="width:30mm;height:50mm"
                  class="textAlignCenter cellBottomLine cellRightLine"
                >
                  <br />
                  <br />案卷类别
                </td>
                <td
                  style="width:159mm;height:50mm"
                  class="cellInput cellBottomLine textPaddingLeft"
                  id="cell_idx_1"
                  align="center"
                  data-title="案卷类别"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
              </tr>
              <tr style="height:6cm;">
                <td style="width:30mm;height:120mm" class="textAlignCenter cellRightLine">
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />案卷题名
                </td>
                <td
                  style="width:159mm;height:120mm"
                  class="cellInput textPaddingLeft"
                  id="cell_idx_2"
                  align="center"
                  data-title="案卷题名"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td class="textPaddingLeft">起止日期：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_3"
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
                  id="cell_idx_4"
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
                  id="cell_idx_5"
                  align="center"
                  style="width:10%"
                  data-title="日"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;日至&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_6"
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
                  id="cell_idx_7"
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
                  id="cell_idx_8"
                  align="center"
                  style="width:10%"
                  data-title="日"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignLeft">日</td>
              </tr>
              <tr>
                <td class="textPaddingLeft">&nbsp;&nbsp;本卷共：&nbsp;&nbsp;</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_9"
                  align="center"
                  style="width:8%"
                  data-title="案由"
                  data-type="textarea"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignLeft">件</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_10"
                  align="center"
                  style="width:8%"
                  data-title="案由"
                  data-type="textarea"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignLeft">页</td>
                <td
                  class="textPaddingLeft"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;归档日期：&nbsp;&nbsp;</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_11"
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
                  id="cell_idx_12"
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
                  id="cell_idx_13"
                  align="center"
                  style="width:10%"
                  data-title="日"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignLeft">日</td>
              </tr>
              <tr>
                <td class="textPaddingLeft">承办人（签名）：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_14"
                  align="center"
                  style="width:80%"
                  data-title="承办人（签名）"
                  data-type="textarea"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
              </tr>
              <tr>
                <td class="textPaddingLeft">&nbsp;&nbsp;&nbsp;档号：&nbsp;&nbsp;&nbsp;</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_15"
                  align="center"
                  style="width:40%"
                  data-title="档号"
                  data-type="textarea"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textPaddingLeft">&nbsp;&nbsp;保管期限：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_16"
                  align="center"
                  style="width:36%"
                  data-title="保管期限"
                  data-type="textarea"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td class="cellInput" id="cell_idx_17" align="center" style="width:100%"></td>
                <td class="cellInput" id="cell_idx_18" align="center" style="width:100%"></td>
                <td class="cellInput" id="cell_idx_19" align="center" style="width:100%"></td>
                <td class="cellInput" id="cell_idx_20" align="center" style="width:100%"></td>
                <td class="cellInput" id="cell_idx_21" align="center" style="width:100%"></td>
                <td class="cellInput" id="cell_idx_22" align="center" style="width:100%"></td>
                <td class="cellInput" id="cell_idx_23" align="center" style="width:100%"></td>
                <td class="cellInput" id="cell_idx_24" align="center" style="width:100%"></td>
                <td class="cellInput" id="cell_idx_25" align="center" style="width:100%"></td>
                <td class="cellInput" id="cell_idx_26" align="center" style="width:100%"></td>
              </tr>
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
  name: "Let214",
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
@import "@/assets/scss/let";
</style>