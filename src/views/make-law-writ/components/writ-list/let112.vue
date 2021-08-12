<!-- 现场检查 实施检查 停供电(停供民用爆炸物品)通知书 -->
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
            <div class="textAlignCenter formHeader0">国 家 煤 矿 安 全 监 察</div>
            <div class="textAlignLeft formHeader3">
              <table class="docBody">
                <tr>
                  <td
                    class="cellInput"
                    id="cell_idx_0"
                    align="right"
                    style="width:55%"
                    data-title="停供电(停供民用爆炸物品)"
                    data-type="text"
                    data-src
                    @click="commandFill('cellIdx0', '停供电(停供民用爆炸物品)', 'TextItem')"
                  >{{ letData.cellIdx0 }}</td>
                  <td class="textAlignLeft">&nbsp;通知书</td>
                </tr>
              </table>
            </div>
            <div class="stdRowH"></div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_1"
                  align="right"
                  style="width:50%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx1', '', 'TextItem')"
                >{{ letData.cellIdx1 }}</td>
                <td class="textAlignLeft cellBottomLine">煤安监</td>
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
                <td class="textAlignLeft cellBottomLine">停〔</td>
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
                <td class="textAlignLeft cellBottomLine">〕</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_4"
                  align="center"
                  style="width:7%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx4', '', 'TextItem')"
                >{{ letData.cellIdx4 }}</td>
                <td class="textAlignLeft cellBottomLine">号&nbsp;&nbsp;</td>
              </tr>
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_5"
                  style="width:50%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx5', '', 'TextItem')"
                >{{ letData.cellIdx5 }}</td>
                <td class="textAlignLeft">:</td>
              </tr>
            </table>
            <table style="border:solid 0px #000;" class="docBody">
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我</td>
                <td
                  class="cellInput"
                  id="cell_idx_6"
                  align="center"
                  style="width:8%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx6', '', 'TextItem')"
                >{{ letData.cellIdx6 }}</td>
                <td class="textAlignLeft">在对</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_7"
                  align="center"
                  style="width:30%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx7', '', 'TextItem')"
                >{{ letData.cellIdx7 }}</td>
                <td class="textAlignLeft">进行安全监察中发现存在重大</td>
              </tr>
              <tr>
                <td class="textAlignLeft">安全隐患，依法作出</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_8"
                  align="center"
                  style="width:30%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx8', '', 'TextItem')"
                >{{ letData.cellIdx8 }}</td>
                <td class="textAlignLeft">的决定，但该单位拒不执行该</td>
              </tr>
              <tr>
                <td class="textAlignLeft">决定，未及时消除安全隐患，现有发生生产安全事故的危险。根据《中华人民共和国</td>
              </tr>
              <tr>
                <td class="textAlignLeft">安全生产法》第六十七条第一款规定，请贵单位对其采取</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_9"
                  align="center"
                  style="width:30%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx9', '', 'TextItem')"
                >{{ letData.cellIdx9 }}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">的措施。</td>
              </tr>
            </table>
            <table height="30"></table>
            <!-- <table class="docBody">
    <tr>
        <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;附件：</td>
        <td class="cellInput" id="cell_idx_10"  style="width:80%"></td>
    </tr>
            </table>-->
            <table height="30"></table>
            <table class="docBody">
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;受送达人（签名）：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_11"
                  style="width:24%"
                  data-title="受送达人（签名）"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx11', '受送达人（签名）', 'TextItem')"
                >{{ letData.cellIdx11 }}</td>
                <td class="textAlignLeft">&nbsp;&nbsp;日&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;期：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_12"
                  style="width:24.6%"
                  data-title="日期"
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx12', '日期', 'DateItem')"
                >{{ letData.cellIdx12 }}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我</td>
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
                <td class="textAlignLeft">地址：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_14"
                  style="width:27.1%"
                  data-title="地址"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx14', '地址', 'TextItem')"
                >{{ letData.cellIdx14 }}</td>
                <td class="textAlignLeft">&nbsp;&nbsp;邮政编码：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_15"
                  style="width:24.8%"
                  data-title="邮政编码"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx15', '邮政编码', 'TextItem')"
                >{{ letData.cellIdx15 }}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我</td>
                <td
                  class="cellInput"
                  id="cell_idx_16"
                  align="center"
                  style="width:8%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx16', '', 'TextItem')"
                >{{ letData.cellIdx16 }}</td>
                <td class="textAlignLeft">联系人：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_17"
                  style="width:24.9%"
                  data-title="联系人"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx17', '联系人', 'TextItem')"
                >{{ letData.cellIdx17 }}</td>
                <td class="textAlignLeft">&nbsp;&nbsp;联系电话：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_18"
                  style="width:24.8%"
                  data-title="联系电话"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx18', '联系电话', 'TextItem')"
                >{{ letData.cellIdx18 }}</td>
              </tr>
            </table>
            <table height="60"></table>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_19"
                  align="right"
                  style="width:95%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx19', '', 'TextItem')"
                >{{ letData.cellIdx19 }}</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td class="cellInput" style="width:55%"></td>
                <td
                  class="cellInput"
                  id="cell_idx_20"
                  align="center"
                  style="width:45%"
                  data-title="日期"
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx20', '日期', 'DateItem')"
                >{{ letData.cellIdx20 }}</td>
              </tr>
            </table>
            <table height="60"></table>
            <table>
              <hr />
              <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;备注：本文书一式三份，一份交</td>
              <td
                class="cellInput"
                id="cell_idx_21"
                align="center"
                style="width:15%"
                data-title
                data-type="text"
                data-src
                @click="commandFill('cellIdx21', '', 'TextItem')"
                >{{ letData.cellIdx21 }}</td>
              <td class="textAlignLeft">，一份交煤矿，一份存档。</td>
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
  name: "Let112",
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
          cellIdx0: null, // 停供电(停供民用爆炸物品)
          cellIdx1: null, //
          cellIdx2: null, //
          cellIdx3: null, //
          cellIdx4: null, //
          cellIdx5: corp.corpName ? corp.corpName : null, // corpname
          cellIdx5TypeTextItem: corp.corpName ? corp.corpName : null, // corpname
          cellIdx6: null, //
          cellIdx7: null, //
          cellIdx8: null, //
          cellIdx9: null, //
          cellIdx10: null, //
          cellIdx11: null, // 受送达人（签名）
          cellIdx12: null, // 日期
          cellIdx13: null, //
          cellIdx14: null, // 地址
          cellIdx15: null, // 邮政编码
          cellIdx16: null, //
          cellIdx17: null, // 联系人
          cellIdx18: null, // 联系电话
          cellIdx19: null, //
          cellIdx20: null, // 日期
          cellIdx21: null, //
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