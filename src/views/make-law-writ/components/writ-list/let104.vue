<!-- 现场检查 复查 复查意见书 -->
<template>
  <div style="width: 100%; height: 100%;">
    <let-main
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
              国 家 煤 矿 安 全 监 察
              <br />
            </div>
            <div class="textAlignCenter formHeader3">复 查 意 见 书</div>
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
                  @click="commandFill('cellIdx9', '', 'TextItem')"
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
                  @click="commandFill('cellIdx15', '', 'TextItem')"
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
              <p class="show-area-item-p">
                <span style="padding: 7px;">{{ letData.cellIdx16 }}</span>
              </p>
            </div>
            <table style="border:solid 0px #000;" class="docBody">
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
    <let-drawer
      :visible="visible"
      :selectedData="selectedData"
      @handle-close="handleClose"
      @handle-save="handleSave"
    ></let-drawer>
  </div>
</template>

<script>
import letMain from "@/views/make-law-writ/components/writ-list/components/let-main";
import letDrawer from "@/views/make-law-writ/components/writ-list/components/let-drawer";
import GoDB from "@/utils/godb.min.js";
import {
  setTextItem,
  setTextareaItem,
  setDateItem,
} from "@/utils/handlePaperData";
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
    letDrawer,
  },
  data() {
    return {
      letData: {},
      visible: false, // 展示填写组件
      selectedData: {
        key: null, // 修改的内容key
        type: null, // 填写组件类型
        title: null, // 标题
        value: null, // 值
        options: null, // 选项
      },
      options: {},
      functions: {
        setTextItem,
        setTextareaItem,
        setDateItem,
      },
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
        return item.caseId === caseId && item.paperType === this.docData.docTypeNo;
      });
      if (checkPaper.length > 0) {
        // 回显
        this.letData = JSON.parse(checkPaper[0].paperContent);
        this.editData = checkPaper[0];
      } else {
        // 创建初始版本
        this.letData = {
          cellIdx0: null, //
          cellIdx1: null, //
          cellIdx2: null, //
          cellIdx3: null, //
          cellIdx4: corp.corpName ? corp.corpName : null, //
          cellIdx4TypeTextItem: corp.corpName ? corp.corpName : null, //
          cellIdx5: null, //
          cellIdx6: null, // 年
          cellIdx7: null, // 月
          cellIdx8: null, // 日
          cellIdx9: null, //
          cellIdx10: null, //
          cellIdx11: null, //
          cellIdx12: null, //
          cellIdx13: null, //
          cellIdx14: null, //
          cellIdx15: null, //
          cellIdx16: null, // 意见
          cellIdx17: null, // 被复查单位意见
          cellIdx18: null, // 单位负责人（签名）
          cellIdx19: null, // 日期
          cellIdx20: null, // 复查人员（签名）
          cellIdx21: null, // 日期
          cellIdx22: null, //
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
      // 打开编辑
      this.visible = true;
      let valueKey = `${key}Type${type}`;
      this.selectedData = {
        type,
        key,
        title,
        value: this.letData[valueKey],
        corpData: this.corpData,
        options: this.options[key],
      };
    },
    handleClose() {
      // 关闭编辑
      this.selectedData = {
        key: null,
        type: null,
        title: null,
        value: null,
        options: null,
      };
      this.visible = false;
    },
    handleSave(params) {
      let { key, type } = this.selectedData;
      // 保存反显数据
      this.letData[`${key}Type${type}`] = params.value;
      // 处理反显数据，保存一份paperContent通用文本数据
      this.letData[key] = this.functions[`set${type}`](
        this.letData[`${key}Type${type}`],
        this.selectedData,
        this.options
      );
      this.handleClose();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/views/make-law-writ/assets/scss/let";
</style>