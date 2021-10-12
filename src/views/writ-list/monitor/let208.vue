<!-- 行政处罚 一般程序 行政决定履行催告书 -->
<template>
  <div style="width: 100%; height: 100%">
    <let-main
      ref="letMain"
      :corp-data="corpData"
      :doc-data="docData"
      :let-data="letData"
      :edit-data="paperData"
      @go-back="goBack"
    >
      <div slot="left">
        <div class="page page-sizeA4">
          <div>
            <div class="stdRowH"></div>
            <div class="textAlignCenter formHeader0">
              国 家 煤 矿 安 全 监 察
            </div>
            <div class="textAlignCenter formHeader3">
              行 政 决 定 履 行 催 告 书
            </div>
            <div class="docTextLine paper-number-div">
              <div>
                <span @click="commandFill('cellIdx0', '文书号', 'TextItem')">{{
                  letData.cellIdx0 ? letData.cellIdx0 : "（编辑）"
                }}</span>
                <label>煤安监</label>
                <span @click="commandFill('cellIdx1', '文书号', 'TextItem')">{{
                  letData.cellIdx1 ? letData.cellIdx1 : "（编辑）"
                }}</span>
                <label>催〔</label>
                <span @click="commandFill('cellIdx2', '文书号', 'TextItem')">{{
                  letData.cellIdx2 ? letData.cellIdx2 : "（编辑）"
                }}</span>
                <label>〕</label>
                <span @click="commandFill('cellIdx3', '文书号', 'TextItem')">{{
                  letData.cellIdx3 ? letData.cellIdx3 : "（编辑）"
                }}</span>
                <label>号</label>
              </div>
            </div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_4"
                  style="width: 50%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx4', '', 'TextItem')"
                >
                  {{ letData.cellIdx4 }}
                </td>
                <td class="textAlignLeft">:</td>
              </tr>
            </table>
            <div class="docTextarea">
              <label style="width: 5%"></label>
              我
              <span
                class="no-underline"
                @click="commandFill('cellIdx5', '单位/个人', 'TextItem')"
                >{{
                  letData.cellIdx5 ? letData.cellIdx5 : "（点击编辑）"
                }}</span
              >
              于
              <span @click="commandFill('cellIdx6', '年', 'TextItem')">{{
                letData.cellIdx6 ? letData.cellIdx6 : "（XX）"
              }}</span>
              年
              <span @click="commandFill('cellIdx7', '月', 'TextItem')">{{
                letData.cellIdx7 ? letData.cellIdx7 : "（XX）"
              }}</span>
              月
              <span @click="commandFill('cellIdx8', '日', 'TextItem')">{{
                letData.cellIdx8 ? letData.cellIdx8 : "（XX）"
              }}</span>
              日向你
              <span
                class="no-underline"
                @click="commandFill('cellIdx9', '单位', 'TextItem')"
                >{{
                  letData.cellIdx9 ? letData.cellIdx9 : "（点击编辑）"
                }}</span
              >
              送达行政处罚决定书 （
              <span
                class="no-underline"
                @click="commandFill('cellIdx10', '文书号', 'TextItem')"
                >{{
                  letData.cellIdx10 ? letData.cellIdx10 : "（点击编辑）"
                }}</span
              >
              煤安监
              <span
                class="no-underline"
                @click="commandFill('cellIdx11', '文书号', 'TextItem')"
                >{{
                  letData.cellIdx11 ? letData.cellIdx11 : "（点击编辑）"
                }}</span
              >
              罚〔
              <span
                class="no-underline"
                @click="commandFill('cellIdx12', '文书号', 'TextItem')"
                >{{
                  letData.cellIdx12 ? letData.cellIdx12 : "（点击编辑）"
                }}</span
              >
              〕
              <span
                class="no-underline"
                @click="commandFill('cellIdx13', '文书号', 'TextItem')"
                >{{
                  letData.cellIdx13 ? letData.cellIdx13 : "（点击编辑）"
                }}</span
              >
              号），你
              <span
                class="no-underline"
                @click="commandFill('cellIdx14', '', 'TextItem')"
                >{{
                  letData.cellIdx14 ? letData.cellIdx14 : "（点击编辑）"
                }}</span
              >
              在法定期限内对该行政决定未申请行政复议或者提起行政诉讼，也未履行该行政决定。根据《中华人民共和国行政强制法》第五十四条规定，现催告你
              <span
                class="no-underline"
                @click="commandFill('cellIdx15', '', 'TextItem')"
                >{{
                  letData.cellIdx15 ? letData.cellIdx15 : "（点击编辑）"
                }}</span
              >
              自收到本催告书之日起十日内，
              <span @click="commandFill('cellIdx16', '', 'TextItem')">{{
                letData.cellIdx16 ? letData.cellIdx16 : "（点击编辑）"
              }}</span
              >。
            </div>
            <div class="docTextarea">
              <label style="width: 5%"></label>
              收到本催告书后，你
              <span
                class="no-underline"
                @click="commandFill('cellIdx17', '', 'TextItem')"
                >{{
                  letData.cellIdx17 ? letData.cellIdx17 : "（点击编辑）"
                }}</span
              >
              有权进行陈述、申辩。无正当理由逾期仍不履行行政决定的，我
              <span
                class="no-underline"
                @click="commandFill('cellIdx18', '', 'TextItem')"
                >{{
                  letData.cellIdx18 ? letData.cellIdx18 : "（点击编辑）"
                }}</span
              >
              将依法申请人民法院强制执行。
            </div>
            <table height="60"></table>
            <div class="docTextLine">
              <label style="width: 5%"></label>
              <div style="flex: 1.5; display: flex">
                <label>受送达</label>
                <span @click="commandFill('cellIdx19', '签名', 'TextItem')">{{
                  letData.cellIdx19 ? letData.cellIdx19 : "（点击编辑）"
                }}</span>
                <label>（签名）：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx20', '签名', 'TextItem')"
                >
                  {{ letData.cellIdx20 ? letData.cellIdx20 : "（点击编辑）" }}
                </div>
              </div>
              <div style="flex: 1; display: flex">
                <label>日&nbsp;&nbsp;&nbsp;期：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx21', '日期', 'DateItem')"
                >
                  {{ letData.cellIdx21 ? letData.cellIdx21 : "（点击编辑）" }}
                </div>
              </div>
            </div>
            <div class="docTextLine">
              <label style="width: 5%"></label>
              <div style="flex: 2; display: flex">
                <label>我</label>
                <span @click="commandFill('cellIdx22', '', 'TextItem')">{{
                  letData.cellIdx22 ? letData.cellIdx22 : "（点击编辑）"
                }}</span>
                <label>地址：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx23', '地址', 'TextItem')"
                >
                  {{ letData.cellIdx23 ? letData.cellIdx23 : "（点击编辑）" }}
                </div>
              </div>
              <div style="flex: 2; display: flex">
                <label>邮政编码：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx24', '邮政编码', 'TextItem')"
                >
                  {{ letData.cellIdx24 ? letData.cellIdx24 : "（点击编辑）" }}
                </div>
              </div>
            </div>
            <div class="docTextLine">
              <label style="width: 5%"></label>
              <div style="flex: 2; display: flex">
                <label>我</label>
                <span @click="commandFill('cellIdx25', '', 'TextItem')">{{
                  letData.cellIdx25 ? letData.cellIdx25 : "（点击编辑）"
                }}</span>
                <label>联系人：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx26', '联系人', 'TextItem')"
                >
                  {{ letData.cellIdx26 ? letData.cellIdx26 : "（点击编辑）" }}
                </div>
              </div>
              <div style="flex: 2; display: flex">
                <label>联系电话：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx27', '联系电话', 'TextItem')"
                >
                  {{ letData.cellIdx27 ? letData.cellIdx27 : "（点击编辑）" }}
                </div>
              </div>
            </div>
            <table height="30"></table>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_28"
                  align="right"
                  style="width: 95%"
                  @click="commandFill('cellIdx28', '', 'TextItem')"
                >
                  {{ letData.cellIdx28 ? letData.cellIdx28 : "（点击编辑）" }}
                </td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_29"
                  align="right"
                  style="width: 95%"
                  data-title
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx29', '日期', 'DateItem')"
                >
                  {{ letData.cellIdx29 ? letData.cellIdx29 : "（点击编辑）" }}
                </td>
              </tr>
            </table>
            <table height="60"></table>
            <div class="docTextarea cellLine">
              <label style="width: 5%"></label>
              备注：本文书一式两份，一份送被催告
              <span
                style="border-bottom: none"
                @click="commandFill('cellIdx30', '单位/个人', 'SelectItem')"
                >{{
                  letData.cellIdx30 ? letData.cellIdx30 : "（点击编辑）"
                }}</span
              >
              ，一份存档。
            </div>
            <table height="50"></table>
          </div>
        </div>
      </div>
    </let-main>
    <!-- 关联文书选择 -->
    <select-paper
      :visible="visible.selectPaper"
      title="关联文书选择"
      :paper-list="paperList"
      @close="closeDialog"
      @confirm-paper="confirmPaper"
    ></select-paper>
  </div>
</template>

<script>
// import letMain from "@/views/make-law-writ/components/let-main.vue";
import GoDB from "@/utils/godb.min.js";
import { getDocNumber } from "@/utils/setInitPaperData";
import associationSelectPaper from '@/components/association-select-paper'
export default {
  name: "Let208",
  mixins: [associationSelectPaper],
/*   props: {
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
  }, */
  data() {
    return {
      letData: {},
      options: {},
      // editData: {}, // 回显数据
      associationPaper: []

    };
  },
/*   created() {
    this.initData();
  },
  watch: {
    "corpData.corpId"(val) {
      if (val) {
        this.initData();
      }
    },
  }, */
  methods: {
    async initLetData (selectedPaper) {
      const db = new GoDB(this.$store.state.DBName);
      const corpBase = db.table("corpBase");
      const corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      /* const wkPaper = db.table("wkPaper");
      const caseId = this.corpData.caseId;
      const checkPaper = await wkPaper.findAll((item) => {
        return (
          item.caseId === caseId &&
          item.paperType === this.docData.docTypeNo &&
          item.delFlag !== "1"
        );
      });
      if (checkPaper.length > 0) {
        // 回显
        this.letData = JSON.parse(checkPaper[0].paperContent);
        this.editData = checkPaper[0];
      } else {
        // 创建初始版本 */
        let { num0, num1, num3, num4 } = await getDocNumber(
        db,
        this.docData.docTypeNo,
        this.corpData.caseId,
        this.$store.state.user
      );
        await db.close();
        this.letData = {
          cellIdx0: num0, // 文书号
          cellIdx0TypeTextItem: num0, // 文书号
          cellIdx1: num1, // 文书号
          cellIdx1TypeTextItem: num1, // 文书号
          cellIdx2: num2, // 文书号
          cellIdx2TypeTextItem: num2, // 文书号
          cellIdx3: num3, // 文书号
          cellIdx3TypeTextItem: num3, // 文书号
          cellIdx4: null, // 煤矿单位
          cellIdx5: null, // 单位
          cellIdx6: null, // 年
          cellIdx7: null, // 月
          cellIdx8: null, // 日
          cellIdx9: null, // 单位
          cellIdx10: null, // 文书号
          cellIdx11: null, // 文书号
          cellIdx12: null, // 文书号
          cellIdx13: null, // 文书号
          cellIdx14: null, // 单位/个人
          cellIdx15: null, // 单位/个人
          cellIdx16: null, // 缴纳罚款
          cellIdx17: null, //  单位/个人
          cellIdx18: null, // 单位
          cellIdx19: null, // 单位/个人
          cellIdx20: null, // 签名
          cellIdx21: null, // 日期
          cellIdx22: null, // 单位
          cellIdx23: null, // 地址
          cellIdx24: null, // 邮政编码
          cellIdx25: null, // 单位
          cellIdx26: null, // 联系人
          cellIdx27: null, // 联系电话
          cellIdx28: null, //
          cellIdx29: null, // 年
          cellIdx30: null, // 月
          cellIdx31: null, // 日
          cellIdx32: null, // 单位/个人
        };
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