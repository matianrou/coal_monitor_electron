<!-- 停止供电（供应民用爆炸物品）决定书 -->
<template>
  <div style="width: 100%; height: 100%;">
    <let-main
      ref="letMain"
      :corp-data="corpData"
      :doc-data="docData"
      :let-data="letData"
      :paper-data="paperData"
      :from-page="fromPage"
      @go-back="goBack"
    >
      <div slot="left">
        <div class="page page-sizeA4">
          <div>
            <div class="stdRowH"></div>
            <div class="textAlignCenter formHeader1">安全生产行政执法文书</div>
            <div class="textAlignCenter formHeader2">停止供电（供应民用爆炸物品）决定书</div>
            <table style="width:400px;" class="docTop">
              <tr>
                <td
                  class="textAlignCenter"
                  id="cell_idx_0"
                >（[SHORTNAME]）应急停供决〔[YEAR]〕[DOCNUMBER]号</td>
              </tr>
            </table>
            <div class="stdRowH"></div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  style="width:320px"
                  id="cell_idx_3"
                >{ent_name}</td>
                <td>：</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td style="width:100%">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因你单位存在重大生产安全事故隐患，本机关于
                  <span
                    style="display:inline-block;width:194px;"
                    class="cellInput textAlignCenter cellBottomLine"
                    id="cell_idx_4"
                    onclick="host.commandFill(this.id,'date','日期')"
                  >&nbsp;&nbsp;&nbsp;&nbsp;年&nbsp;&nbsp;&nbsp;&nbsp;月&nbsp;&nbsp;&nbsp;&nbsp;日</span>依法对该单位作出了
                </td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td
                  style="width:70mm"
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_5"
                ></td>
                <td style="width:120mm">的决定，你单位未执行以上决定，没有及时消除事故隐患，存在</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td>发生生产安全事故现实危险。为保障安全生产，依据《中华人民共和国安全生产法》第六十七条第一</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td style="width:50mm;">款的规定，本机关决定自</td>
                <td
                  style="width:70mm"
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_6"
                  onclick="host.commandFill(this.id,'datetime','日期','yyyy年MM月dd日HH时mm分')"
                >&nbsp;&nbsp;&nbsp;&nbsp;年&nbsp;&nbsp;&nbsp;&nbsp;月&nbsp;&nbsp;&nbsp;&nbsp;日&nbsp;&nbsp;&nbsp;&nbsp;时&nbsp;&nbsp;&nbsp;&nbsp;分</td>
                <td style="width:70mm;" class="textAlignRight">起，对你单位采取停止供电措施，</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td>强制你单位履行决定。</td>
              </tr>
            </table>
            <table class="docBody">
              <tbody>
                <tr>
                  <td
                    style="width:97mm;"
                  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果不服本决定，你单位可以依法在60日内向</td>
                  <td
                    style="width:65mm;"
                    class="cellInput textAlignCenter cellBottomLine"
                    id="cell_idx_7"
                  >[RefReconsiderOrgan]</td>
                  <td style="width:30mm;" class="textAlignCenter">人民政府或者</td>
                </tr>
              </tbody>
            </table>
            <table class="docBody">
              <tr>
                <td
                  style="width:59mm"
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_8"
                >[RefDeptName]</td>
                <td style="width:72mm" class="textAlignCenter">申请行政复议，或者在6个月内依法向</td>
                <td
                  style="width:59mm"
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_9"
                >[RefLitigationOrgan]</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td>人民法院提起行政诉讼，但本决定不停止执行，法律另有规定的除外。</td>
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
                  id="cell_idx_10"
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
  name: "Let306",
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
      paperData: {}, // 回显数据
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
      let corpBase = await this.getDatabase('baseInfo');
      //查询符合条件的记录
      let corp = corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      let wkPaper = await this.getDatabase("wkPaper");
      let caseId = this.corpData.caseId;
      //查询当前计划是否已做文书
      let checkPaper = JSON.parse(JSON.stringify(wkPaper.filter((item) => {
        return item.caseId === caseId && item.paperType === this.docData.docTypeNo && item.delFlag !== '1'
      }) || []))
      // 已做文书则展示文书内容，否则创建初始版本
      if (checkPaper.length > 0) {
        // 回显
        this.letData = JSON.parse(checkPaper[0].paperContent);
        this.paperData = checkPaper[0];
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
    },
    goBack({ page, data }) {
      // 返回选择企业
      this.$emit("go-back", { page, data });
    },
    commandFill(key, title, type) {
      // 判断是否可编辑
      if (this.$refs.letMain.canEdit) {
        // 文书各个字段点击打开左侧弹出编辑窗口
        let dataKey = `${key}`;
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