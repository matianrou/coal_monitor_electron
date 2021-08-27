<!-- 现场检查 实施检查 停供电(停供民用爆炸物品)决定书 -->
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
                    @click="commandFill('cellIdx0', '查封(扣押)', 'TextItem')"
                  >{{ letData.cellIdx0 }}</td>
                  <td class="textAlignLeft">决定书</td>
                </tr>
              </table>
            </div>
            <div class="stdRowH"></div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput "
                  id="cell_idx_1"
                  align="right"
                  style="width:40%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx1', '', 'TextItem')"
                  >{{ letData.cellIdx1 }}</td>
                   <td class="textAlignLeft">（</td>
                  <td
                  class="cellInput "
                  id="cell_idx_2"
                  align="center"
                  style="width:7%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx2', '', 'TextItem')"
                  >{{ letData.cellIdx2 }}</td>
                  <td class="textAlignLeft">）</td>
                <td class="textAlignLeft ">煤安停</td>
                <td
                  class="cellInput "
                  id="cell_idx_3"
                  align="center"
                  style="width:8%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx3', '', 'TextItem')"
                  >{{ letData.cellIdx3 }}</td>
                <td class="textAlignLeft ">决</td>

                <td class="textAlignLeft ">〔</td>
                <td
                  class="cellInput "
                  id="cell_idx_4"
                  align="center"
                  style="width:8%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx4', '', 'TextItem')"
                  >{{ letData.cellIdx4 }}</td>
                <td class="textAlignLeft ">〕</td>
                <td
                  class="cellInput "
                  id="cell_idx_5"
                  align="center"
                  style="width:8%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx5', '', 'TextItem')"
                  >{{ letData.cellIdx5 }}</td>
                <td class="textAlignLeft ">号&nbsp;&nbsp;</td>
              </tr>
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_6"
                  style="width:62%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx6', '', 'TextItem')"
                  >{{ letData.cellIdx6 }}</td>
                <td class="textAlignLeft">:</td>
              </tr>
            </table>
            <table style="border:solid 0px #000;" class="docBody">
              <tr>
                <td style="width:5%"></td>
                <td class="textAlignLeft">因你单位存在重大事故隐患，本机关于</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_7"
                  align="center"
                  style="width:8%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx7', '年', 'TextItem')"
                >{{ letData.cellIdx7 }}</td>
               
                <td class="textAlignLeft">年</td>
                <td
                  class="cellInput cellBottomLine "
                  id="cell_idx_8"
                  align="center"
                  style="width:8%"
                  data-title="月"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx8', '月', 'TextItem')"
                >{{ letData.cellIdx8 }}</td>
                <td class="textAlignLeft">月</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_9"
                  align="center"
                  style="width:8%"
                  data-title="日"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx9', '日', 'TextItem')"
                >{{ letData.cellIdx9 }}</td>
                <td class="textAlignLeft">依法对你单位作出</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_10"
                  align="center"
                  style="width:26%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx10', '', 'TextItem')"
                >{{ letData.cellIdx10}}</td>
                <td class="textAlignLeft">的决定，但你单位未执行以上决定，未及时消除事故隐患，存在发生生产安</td>
                <td class="textAlignLeft">全事故的危险。根据《中华人民共和国安全生产法》第六十七条第一款规定，本机关决定自</td>
                 <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_11"
                  align="center"
                  style="width:8%"
                  data-title="年"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx11', '年', 'TextItem')"
                >{{ letData.cellIdx11}}</td>
                <td class="textAlignLeft">年</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_12"
                  align="center"
                  style="width:8%"
                  data-title="月"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx12', '月', 'TextItem')"
                >{{ letData.cellIdx12 }}</td>
                <td class="textAlignLeft">月</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_13"
                  align="center"
                  style="width:8%"
                  data-title="日"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx13', '日', 'TextItem')"
                >{{ letData.cellIdx13}}</td>
                <td class="textAlignLeft">日</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_14"
                  align="center"
                  style="width:8%"
                  data-title="时"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx14', '时', 'TextItem')"
                >{{ letData.cellIdx14 }}</td>
                <td class="textAlignLeft">时</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_15"
                  align="center"
                  style="width:8%"
                  data-title="分"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx15', '分', 'TextItem')"
                >{{ letData.cellIdx15 }}</td>
                <td class="textAlignLeft">分起，对你单位采取</td>
                <td
                  class="cellInput"
                  id="cell_idx_16"
                  align="right"
                  style="width:38%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx16', '', 'TextItem')"
                >{{ letData.cellIdx16 }}</td>
                <td class="textAlignLeft">的措施，强制你单位履行决定。</td>


              </tr>
              <tr>
                 <td style="width:5%"></td>
                  <td class="textAlignLeft">你单位依法履行行政决定、采取相应措施消除事故隐患，本机关将及时通知有关单位解除上述
                  </td>
                  <td class="textAlignLeft">有关措施。</td>
              </tr>
              <tr>
                <td style="width:5%"></td>
                <td
                  class="textAlignLeft"
                >如果不服本决定，可在接到本决定书之日起60日内向</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_17"
                  align="center"
                  style="width:43%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx17', '', 'TextItem')"
                >{{ letData.cellIdx17 }}</td>

              </tr>
              <tr>
                 <td class="textAlignLeft">人民政府或者</td>
                 <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_18"
                  align="center"
                  style="width:49%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx18', '', 'TextItem')"
                >{{ letData.cellIdx18 }}</td>
                <td class="textAlignLeft">申请行政复议，或者在6个月内依法向</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_19"
                  align="center"
                  style="width:37%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx19', '', 'TextItem')"
                >{{ letData.cellIdx19 }}</td>
                <td class="textAlignLeft">人民法院提起行政诉讼；复议、诉讼期间，不停止执行本决定。</td>
              </tr>

            </table>

            <table height="30"></table>
             <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_20"
                  align="right"
                  style="width:95%"
                  @click="commandFill('cellIdx20', '', 'TextItem')"
                >{{letData.cellIdx20 ? letData.cellIdx20 : '（点击编辑）'}}</td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_21"
                  align="right"
                  style="width:95%"
                  data-title
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx21', '日期', 'DateItem')"
                >{{letData.cellIdx21 ? letData.cellIdx21 : '（点击编辑）'}}</td>
              </tr>
            </table>
            <table height="60"></table>

            <table>
              <hr />
              <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;备注：本文书一式两份，一份交煤矿，一份存档。</td>

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
  name: "Let111",
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
          cellIdx0: null,//查封(扣押)
          cellIdx1: null,
          cellIdx2: null,
          cellIdx3: null,
          cellIdx4: null,
          cellIdx5: null,
          cellIdx6: null, //
          cellIdx7: null, //
          cellIdx8: null, //年
          cellIdx9: null, //月
          cellIdx10: null, //日
          cellIdx11: null,
          cellIdx12: null, //
          cellIdx13: null, //
          cellIdx14: null, //
          cellIdx15: null,
          cellIdx16: null, //
          cellIdx17: null, //
          cellIdx18: null, //
          cellIdx19: null, //
          cellIdx20: null, //
          cellIdx21: null, //
          cellIdx22: null, // 附件
          cellIdx23: null, //
          cellIdx24: null, // 日期
          cellIdx25: null, //
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