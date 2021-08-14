<!-- 行政强制 安全生产行政执法文书 停止供电（供应民用爆炸物品）决定书 -->
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
            <div class="textAlignCenter formHeader2">停止供电（供应民用爆炸物品）决定书</div>
            <table style="width:400px;" class="docTop">
              <tr>
                <td
                  class="textAlignCenter"
                  id="cell_idx_0"
                  contenteditable="true"
                >（{{letData.cellIdx0}}）应急停供决〔{{letData.cellIdx1}}〕{{letData.cellIdx2}}号</td>
              </tr>
            </table>
            <div class="stdRowH"></div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  style="width:320px"
                  id="cell_idx_3"
                  @click="commandFill('cellIdx3', '', 'TextItem')"
                >{{letData.cellIdx3}}</td>
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
                    @click="commandFill('cellIdx4', '日期', 'DateItem')"
                  >{{letData.cellIdx4 ? letData.cellIdx4 : `&nbsp;&nbsp;&nbsp;&nbsp;年&nbsp;&nbsp;&nbsp;&nbsp;月&nbsp;&nbsp;&nbsp;&nbsp;日`}}</span>依法对该单位作出了
                </td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td
                  style="width:70mm"
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_5"
                  @click="commandFill('cellIdx5', '', 'TextItem')"
                >{{letData.cellIdx5}}</td>
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
                  @click="commandFill('cellIdx6', '日期', 'DateItem')"
                >{{letData.cellIdx6 ? letData.cellIdx6 : `&nbsp;&nbsp;&nbsp;&nbsp;年&nbsp;&nbsp;&nbsp;&nbsp;月&nbsp;&nbsp;&nbsp;&nbsp;日`}}</td>
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
                    @click="commandFill('cellIdx7', '', 'TextItem')"
                  >{{letData.cellIdx7}}</td>
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
                  @click="commandFill('cellIdx8', '', 'TextItem')"
                >{{letData.cellIdx8}}</td>
                <td style="width:72mm" class="textAlignCenter">申请行政复议，或者在6个月内依法向</td>
                <td
                  style="width:59mm"
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_9"
                  @click="commandFill('cellIdx9', '', 'TextItem')"
                >{{letData.cellIdx9}}</td>
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
                  id="cell_idx_10"
                  @click="commandFill('cellIdx10', '', 'TextItem')"
                >{{letData.cellIdx10}}</td>
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
                  @click="commandFill('cellIdx11', '日期', 'DateItem')"
                >{{letData.cellIdx11 ? letData.cellIdx11 : `&nbsp;&nbsp;&nbsp;&nbsp;年&nbsp;&nbsp;&nbsp;&nbsp;月&nbsp;&nbsp;&nbsp;&nbsp;日`}}</td>
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
import letMain from "@/views/make-law-writ/components/writ-list/components/let-main";
import GoDB from "@/utils/godb.min.js";
export default {
  name: "Let108",
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
      const db = new GoDB("CoalDB");
      const corpBase = db.table("corpBase");
      //查询符合条件的记录
      const corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      const wkPaper = db.table("wkPaper");
      const caseId = this.corpData.caseId;
      const checkPaper = await wkPaper.findAll((item) => {
        return (
          item.caseId === caseId && item.paperType === this.docData.docTypeNo
        );
      });
      if (checkPaper.length > 0) {
        // 回显
        this.letData = JSON.parse(checkPaper[0].paperContent);
        this.editData = checkPaper[0];
      } else {
        // 创建初始版本
        this.letData = {
          cellIdx0: null, // SHORTNAME
          cellIdx1: null, // YEAR
          cellIdx2: null, // DOCNUMBER
          cellIdx3: null, // ent_name
          cellIdx4: null, // 日期
          cellIdx5: null, //
          cellIdx6: null, // 日期
          cellIdx7: null, // RefReconsiderOrgan
          cellIdx8: null, // RefDeptName
          cellIdx9: null, // RefLitigationOrgan
          cellIdx10: null, // OrgName
          cellIdx11: null, // 日期
        };
      }
      await db.close();
    },
    goBack({ page }) {
      // 返回选择企业
      this.$emit("go-back", { page });
    },
    commandFill(key, title, type) {
      // 打开编辑
      this.$refs.letMain.commandFill(key, title, type, this.letData[`${key}Type${type}`], this.options[key])
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/views/make-law-writ/assets/scss/let";
</style>