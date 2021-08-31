<!-- 恢复供电（供应民用爆炸物品）通知书 -->
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
            <div class="textAlignCenter formHeader2">恢复供电（供应民用爆炸物品）通知书</div>
            <table style="width:400px;" class="docTop">
              <tr>
                <td
                  class="textAlignCenter"
                  id="cell_idx_0"
                >（[SHORTNAME]）应急恢复通〔[YEAR]〕[DOCNUMBER]号</td>
              </tr>
            </table>
            <div class="stdRowH"></div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  style="width:320px"
                  id="cell_idx_3"
                ></td>
                <td>：</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td style="width:35mm">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本机关于</td>
                <td
                  style="width:50mm;"
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_4"
                  onclick="host.commandFill(this.id,'date','日期')"
                >&nbsp;&nbsp;&nbsp;&nbsp;年&nbsp;&nbsp;&nbsp;&nbsp;月&nbsp;&nbsp;&nbsp;&nbsp;日</td>
                <td style="width:15mm" class="textAlignRight">依法对</td>
                <td
                  style="width:90mm"
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_5"
                >{ent_name}</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td style="width:23mm">作出了停止</td>
                <td
                  style="width:32mm;"
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_6"
                ></td>
                <td style="width:40mm" class="textAlignCenter">的措施，该单位已于</td>
                <td
                  style="width:40mm;"
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_7"
                  onclick="host.commandFill(this.id,'date','日期')"
                >&nbsp;&nbsp;&nbsp;&nbsp;年&nbsp;&nbsp;&nbsp;&nbsp;月&nbsp;&nbsp;&nbsp;&nbsp;日</td>
                <td style="width:50mm">依法履行了相关行政决定、</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td>采取相应措施消除事故隐患，依据《中华人民共和国安全生产法》第六十七条第二款规定，本机关决</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td style="width:35mm;">定对该单位解除</td>
                <td
                  style="width:35mm;"
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_8"
                >停止供电</td>
                <td style="width:40mm;" class="textAlignRight">措施。请你单位于</td>
                <td
                  style="width:60mm;"
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_9"
                  onclick="host.commandFill(this.id,'datetime','日期','yyyy年MM月dd日HH时mm分')"
                >&nbsp;&nbsp;&nbsp;&nbsp;年&nbsp;&nbsp;&nbsp;&nbsp;月&nbsp;&nbsp;&nbsp;&nbsp;日&nbsp;&nbsp;&nbsp;&nbsp;时&nbsp;&nbsp;&nbsp;&nbsp;分</td>
                <td style="width:20mm;">对该单位</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td style="width:20mm;">给予恢复</td>
                <td
                  style="width:50mm;"
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_10"
                >供应生产用电</td>
                <td style="width:120mm;">，请给予配合。</td>
              </tr>
            </table>
            <div class="stdRowH"></div>
            <div class="stdRowH"></div>
            <div class="stdRowH"></div>
            <div class="stdRowH"></div>
            <div class="stdRowH"></div>
            <div class="stdRowH"></div>
            <div class="stdRowH"></div>
            <div class="stdRowH"></div>
            <div class="stdRowH"></div>
            <div class="stdRowH"></div>
            <div class="stdRowH"></div>
            <div class="stdRowH"></div>
            <div class="stdRowH"></div>
            <table class="docBody">
              <tr>
                <td style="width:410px;">&nbsp;</td>
                <td
                  style="width:250px;"
                  class="cellInput textAlignRight"
                  id="cell_idx_14"
                >[OrgName]</td>
                <td style="width:100px;" class="textAlignCenter">（印章）</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td style="width:594px;">&nbsp;</td>
                <td
                  style="width:150px;"
                  class="cellInput textAlignCenter"
                  id="cell_idx_11"
                >年&nbsp;&nbsp;&nbsp;&nbsp;月&nbsp;&nbsp;&nbsp;&nbsp;日</td>
                <td style="width:16px;">&nbsp;</td>
              </tr>
            </table>
            <div class="docFooter">
              <div
                style="margin-top:4px;width:98%;height: 24px; line-height:30px;padding-left:16px;"
              >本文书一式两份：一份由应急管理部门备案，一份交当事人。</div>
            </div>
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
  name: "Let308",
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