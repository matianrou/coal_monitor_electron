<!-- 现场检查 一般检查 复查意见书 -->
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
            <div class="textAlignCenter formHeader3">复查意见书</div>
            <div class="stdRowH"></div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_0"
                  align="right"
                  style="width:60%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx0', '', 'TextItem')"
                >{{ letData.cellIdx0 }}</td>
                <td class="textAlignLeft cellBottomLine">煤安监</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_1"
                  align="center"
                  style="width:7%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx1', '', 'TextItem')"
                >{{ letData.cellIdx1 }}</td>
                <td class="textAlignLeft cellBottomLine">复〔</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_2"
                  align="center"
                  style="width:7%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx2', '', 'TextItem')"
                >{{ letData.cellIdx2 }}</td>
                <td class="textAlignLeft cellBottomLine">〕</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_3"
                  align="center"
                  style="width:7%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx3', '', 'TextItem')"
                >{{ letData.cellIdx3 }}</td>
                <td class="textAlignLeft cellBottomLine">号&nbsp;&nbsp;</td>
              </tr>
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_4"
                  style="width:74%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx4', '', 'TextItem')"
                >{{ letData.cellIdx4 }}</td>
                <td class="textAlignLeft">:</td>
              </tr>
            </table>
            <table style="border:solid 0px #000;" class="docBody">
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我</td>
                <td
                  class="cellInput"
                  id="cell_idx_5"
                  align="center"
                  style="width:8%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx5', '', 'TextItem')"
                >{{ letData.cellIdx5 }}</td>
                <td class="textAlignLeft">于</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_6"
                  align="center"
                  style="width:8%"
                  data-title="年"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx6', '年', 'TextItem')"
                >{{ letData.cellIdx6 }}</td>
                <td class="textAlignLeft">年</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_7"
                  align="center"
                  style="width:8%"
                  data-title="月"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx7', '月', 'TextItem')"
                >{{ letData.cellIdx7 }}</td>
                <td class="textAlignLeft">月</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_8"
                  align="center"
                  style="width:8%"
                  data-title="日"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx8', '日', 'TextItem')"
                >{{ letData.cellIdx8 }}</td>
                <td class="textAlignLeft">日发现你矿存在:</td>
                <td
                  style="width:36.5%"
                  class="cellInput cellBottomLine"
                  id="cell_idx_9"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx9', '违法违规行为', 'TextItem')"
                >{{ letData.cellIdx9 }}</td>
                <td class="textAlignLeft">的违法违规行为，依法作出了</td>
                <td
                  style="width:69.2%"
                  class="cellInput cellBottomLine"
                  id="cell_idx_10"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx10', '', 'TextItem')"
                >{{ letData.cellIdx10 }}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">的决定 （</td>
                <td
                  class="cellInput"
                  id="cell_idx_11"
                  align="center"
                  style="width:8%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx11', '', 'TextItem')"
                >{{ letData.cellIdx11 }}</td>
                <td class="textAlignLeft">煤安监</td>
                <td
                  class="cellInput"
                  id="cell_idx_12"
                  align="center"
                  style="width:8%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx12', '', 'TextItem')"
                >{{ letData.cellIdx12 }}</td>
                <td class="textAlignLeft">处〔</td>
                <td
                  class="cellInput"
                  id="cell_idx_13"
                  align="center"
                  style="width:8%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx13', '', 'TextItem')"
                >{{ letData.cellIdx13 }}</td>
                <td class="textAlignLeft">〕</td>
                <td
                  class="cellInput"
                  id="cell_idx_14"
                  align="center"
                  style="width:8%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx14', '', 'TextItem')"
                >{{ letData.cellIdx14 }}</td>
                <td class="textAlignLeft">号） 。</td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_15"
                  align="left"
                  style="width:20%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx15', '', 'SelectItem')"
                >{{ letData.cellIdx15 }}</td>
                <td class="textAlignLeft">，经复查，意见如下：</td>
              </tr>
              <tr></tr>
            </table>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              id="cell_idx_16"
              data-title="意见"
              data-type="textarea"
              data-src
              @click="commandFill('cellIdx16', '意见', 'TextareaItem')"
            >
              <p
                style="width:100%; height:auto; word-wrap:break-word;word-wrap: break-all; overflow: hidden;"
              >&nbsp;{{ letData.cellIdx16 }}</p>
            </div>
            <table style="border:solid 0 #000;" class="docBody">
              <tr>
                <td class="textAlignLeft">被复查单位意见：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_17"
                  style="width:20%"
                  data-title="被复查单位意见"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx17', '被复查单位意见', 'TextItem')"
                >{{ letData.cellIdx17 }}</td>
                <td class="textAlignLeft">单位负责人（签名）:</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_18"
                  style="width:14.4%"
                  data-title="单位负责人（签名）"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx18', '单位负责人（签名）', 'TextItem')"
                >{{ letData.cellIdx18 }}</td>
                <td class="textAlignLeft">日期：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_19"
                  style="width:20%"
                  data-title="日期"
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx19', '日期', 'DateItem')"
                >{{ letData.cellIdx19 }}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">复查人员（签名）:</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_20"
                  style="width:54.4%"
                  data-title="复查人员（签名）"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx20', '复查人员（签名）', 'TextItem')"
                >{{ letData.cellIdx20 }}</td>
                <td class="textAlignLeft">日期：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_21"
                  style="width:20%"
                  data-title="日期"
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx21', '日期', 'DateItem')"
                >{{ letData.cellIdx21 }}</td>
              </tr>
            </table>
            <table height="60"></table>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_22"
                  align="right"
                  style="width:95%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx22', '', 'TextItem')"
                >{{ letData.cellIdx22 }}</td>
              </tr>
            </table>
            <table class="docBody">
              <td class="cellInput" style="width:55%"></td>
              <td
                class="cellInput"
                id="cell_idx_23"
                align="center"
                style="width:45%"
                data-title="日期"
                data-type="date"
                data-src
                @click="commandFill('cellIdx23', '日期', 'DateItem')"
              >{{ letData.cellIdx23 }}</td>
            </table>
            <table>
              <hr />
              <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;备注：本文书一式两份，一份交被复查单位，一份存档。</td>
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
  name: "Let104",
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
          cellIdx0: null,
          cellIdx1: null, 
          cellIdx2: null, 
          cellIdx3: null, 
          cellIdx4: null,
          cellIdx5: null,
          cellIdx6: null, // 年
          cellIdx7: null, // 月
          cellIdx8: null, // 日
          cellIdx9: null, // 违法违规行为
          cellIdx10: null, 
          cellIdx11: null, 
          cellIdx12: null, 
          cellIdx13: null, 
          cellIdx14: null, 
          cellIdx15: null, 
          cellIdx16: null, // 意见
          cellIdx17: null, // 被复查单位意见
          cellIdx18: null, // 单位负责人（签名）
          cellIdx19: null, // 日期
          cellIdx20: null, // 复查人员（签名）
          cellIdx21: null, // 日期
          cellIdx22: null, 
          cellIdx23: null, // 日期
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