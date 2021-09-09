<!-- 案卷（首页） -->
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
            <div
              class="textAlignCenter formHeader3 cellInput"
              style="font-size:30px"
              id="cell_idx_12"
              contenteditable="true"
            >[OrgName]</div>
            <div class="textAlignCenter formHeader3" style="font-size:30px">安全生产违法案件</div>
            <div class="textAlignCenter formHeader3" style="font-size:30px">案卷（首页）</div>
            <table style="width:370px;" class="docTop">
              <tr>
                <td
                  class="textAlignCenter"
                  id="cell_idx_0"
                >（[SHORTNAME]）应急案〔[YEAR]〕[DOCNUMBER]号</td>
              </tr>
            </table>
            <div class="halfRowH"></div>
            <table class="docBody">
              <tr>
                <td style="width:30mm;" class="textAlignCenter">案件名称：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_3"
                  colspan="5"
                ></td>
              </tr>
            </table>
            <div class="halfRowH"></div>
            <table class="docBody" style="border:solid 1px #000;">
              <tr style="height:6cm;">
                <td style="width:20mm;" class="textAlignCenter cellBottomLine cellRightLine">案由</td>
                <td
                  style="width:170mm;"
                  class="cellInput cellBottomLine textPaddingLeft"
                  id="cell_idx_4"
                ></td>
              </tr>
              <tr style="height:6cm;">
                <td class="textAlignCenter cellBottomLine cellRightLine">
                  处理
                  <br />结果
                </td>
                <td
                  class="cellInput cellBottomLine textPaddingLeft"
                  id="cell_idx_5"
                ></td>
              </tr>
            </table>
            <div class="stdRowH"></div>
            <table class="docBody">
              <tr>
                <td style="width:20mm;" class="textPaddingLeft">立案：</td>
                <td
                  style="width:50mm;"
                  class="cellInput cellBottomLine textPaddingLeft"
                  id="cell_idx_6"
                  onclick="host.commandFill(this.id,'date','立案日期')"
                >年&nbsp;&nbsp;&nbsp;&nbsp;月&nbsp;&nbsp;&nbsp;&nbsp;日</td>
                <td style="width:125mm;">&nbsp;</td>
              </tr>
              <tr>
                <td class="textPaddingLeft">结案：</td>
                <td
                  class="cellInput cellBottomLine textPaddingLeft"
                  id="cell_idx_7"
                  onclick="host.commandFill(this.id,'date','结案日期')"
                >年&nbsp;&nbsp;&nbsp;&nbsp;月&nbsp;&nbsp;&nbsp;&nbsp;日</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td class="textPaddingLeft">承办人：</td>
                <td
                  class="cellInput cellBottomLine textPaddingLeft"
                  id="cell_idx_8"
                ></td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td class="textPaddingLeft">归档号：</td>
                <td
                  class="cellInput cellBottomLine textPaddingLeft"
                  id="cell_idx_9"
                ></td>
                <td>&nbsp;</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td style="width:25mm;" class="textPaddingLeft">归档日期：</td>
                <td
                  style="width:45mm;"
                  class="cellInput cellBottomLine textPaddingLeft"
                  id="cell_idx_10"
                  onclick="host.commandFill(this.id,'date','归档日期')"
                >年&nbsp;&nbsp;&nbsp;&nbsp;月&nbsp;&nbsp;&nbsp;&nbsp;日</td>
                <td style="width:125mm;">&nbsp;</td>
              </tr>
              <tr>
                <td class="textPaddingLeft">保存期限：</td>
                <td
                  class="cellInput cellBottomLine textPaddingLeft"
                  id="cell_idx_11"
                ></td>
                <td>&nbsp;</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </let-main>
  </div>
</template>

<script>
import letMain from "@/views/make-law-writ/components/let-main.vue";
import GoDB from "@/utils/godb.min.js";
export default {
  name: "Let404",
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
      const db = new GoDB(this.$store.state.DBName);
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
          item.caseId === caseId && item.paperType === this.docData.docTypeNo && item.delFlag !== '1'
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