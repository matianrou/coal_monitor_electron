<!-- 行政强制 安全生产行政执法文书 停止供电（供应民用爆炸物品）通知书 -->
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
            <div class="textAlignCenter formHeader2">停止供电（供应民用爆炸物品）通知书</div>
            <table style="width:400px;" class="docTop">
              <tr>
                <td
                  class="textAlignCenter"
                  id="cell_idx_0"
                >（{{letData.cellIdx0}}）应急停供通〔{{letData.cellIdx1}}〕{{letData.cellIdx2}}号</td>
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
                <td style="width:20mm">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因</td>
                <td
                  style="width:90mm"
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_4"
                  @click="commandFill('cellIdx4', '', 'TextItem')"
                >{{letData.cellIdx4}}</td>
                <td style="width:80mm" class="textAlignRight">存在重大生产安全事故隐患，本机关于</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td
                  style="width:50mm;"
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_5"
                  @click="commandFill('cellIdx5', '日期', 'DateItem')"
                  >{{letData.cellIdx5 ? letData.cellIdx5 : `&nbsp;&nbsp;&nbsp;&nbsp;年&nbsp;&nbsp;&nbsp;&nbsp;月&nbsp;&nbsp;&nbsp;&nbsp;日`}}</td>
                <td style="width:40mm">依法对该单位作出了</td>
                <td
                  style="width:35mm"
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_6"
                  @click="commandFill('cellIdx6', '', 'TextItem')"
                >{{letData.cellIdx6 ? letData.cellIdx6 : '暂时停产停业'}}</td>
                <td style="width:65mm" class="textAlignRight">的决定，该单位未执行以上决定，</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td colspan="3">没有及时消除事故隐患，存在发生生产安全事故现实危险。为保障安全生产，依据《中华人民共和国</td>
              </tr>
              <tr>
                <td style="width:105mm;">安全生产法》第六十七条第一款的规定，本机关决定对该单位采取</td>
                <td
                  style="width:25mm;"
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_7"
                  @click="commandFill('cellIdx7', '', 'TextItem')"
                >{{letData.cellIdx7 ? letData.cellIdx7 : '停止供电'}}</td>
                <td style="width:30mm;" class="textAlignRight">措施，强制其履行</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td style="width:35mm;">决定。请你单位于</td>
                <td
                  style="width:54mm"
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_8"
                  @click="commandFill('cellIdx8', '日期', 'DatetimeItem')"
                >{{letData.cellIdx8 ? letData.cellIdx8 : '&nbsp;&nbsp;&nbsp;&nbsp;年&nbsp;&nbsp;&nbsp;&nbsp;月&nbsp;&nbsp;&nbsp;&nbsp;日&nbsp;&nbsp;&nbsp;&nbsp;时&nbsp;&nbsp;&nbsp;&nbsp;分'}}</td>
                <td style="width:20mm;" class="textAlignCenter">对该单位</td>
                <td
                  style="width:36mm;"
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_9"
                  @click="commandFill('cellIdx9', '', 'TextItem')"
                >{{letData.cellIdx9 ? letData.cellIdx9 : '停止供应生产用电'}}</td>
                <td style="width:30mm;" class="textAlignRight">，请给予配合。</td>
              </tr>
            </table>
            <table class="docBody">
              <tbody>
                <tr>
                  <td
                    style="width:100%"
                  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;该单位依法履行相关行政决定、采取相应措施消除事故隐患的，本机关将及时通知你单位解除有关措施。</td>
                </tr>
              </tbody>
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
import letMain from "@/views/make-law-writ/components/let-main.vue";
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
      let corpBase = await this.getDatabase("baseInfo");
      //查询符合条件的记录
      let corp = corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      let wkPaper = await this.getPaperDatabase(this.corpData.caseId)
      let caseId = this.corpData.caseId;
      let checkPaper = JSON.parse(JSON.stringify(wkPaper.filter((item) => {
        return item.caseId === caseId && item.paperType === this.docData.docTypeNo && item.delFlag !== '1'
      }) || []))
      if (checkPaper.length > 0) {
        // 回显
        this.letData = JSON.parse(checkPaper[0].paperContent);
        this.paperData = checkPaper[0];
      } else {
        // 创建初始版本
        this.letData = {
          cellIdx0: null, // SHORTNAME
          cellIdx1: null, // YEAR
          cellIdx2: null, // DOCNUMBER
          cellIdx3: null, //
          cellIdx4: null, // ent_name
          cellIdx5: null, // 日期
          cellIdx6: null, // 日期
          cellIdx7: null, //
          cellIdx8: null, // 日期
          cellIdx9: null, //
          cellIdx10: null, // OrgName
          cellIdx11: null, // 日期
        };
      }
    },
    goBack({ page, data }) {
      // 返回选择企业
      this.$emit("go-back", { page, data });
    },
    commandFill (key, title, type) {
      // 判断是否可编辑
      if (this.$refs.letMain.canEdit) {
        // 文书各个字段点击打开左侧弹出编辑窗口
        let dataKey = `${key}`
        this.$refs.letMain.commandFill(key, dataKey, title, type, this.letData[dataKey], this.options[key])
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/let";
</style>