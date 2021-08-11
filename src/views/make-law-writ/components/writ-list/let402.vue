<!-- 现场检查 一般检查 现场检查笔录 -->
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
            <div class="textAlignCenter formHeader3">涉 嫌 犯 罪 案 件 移 送 书</div>
            <div class="stdRowH"></div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_0"
                  contenteditable="true"
                  align="center"
                  style="width:7%"
                  data-title="文书号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx0', '文书号', 'TextItem')"
                >{{letData.cellIdx0}}</td>
                <td class="textAlignLeft cellBottomLine">煤安监</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_1"
                  contenteditable="true"
                  align="center"
                  style="width:7%"
                  data-title="文书号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx1', '文书号', 'TextItem')"
                >{{letData.cellIdx1}}</td>
                <td class="textAlignLeft cellBottomLine">涉〔</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_2"
                  contenteditable="true"
                  align="center"
                  style="width:7%"
                  data-title="文书号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx2', '文书号', 'TextItem')"
                >{{letData.cellIdx2}}</td>
                <td class="textAlignLeft cellBottomLine">〕</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_3"
                  contenteditable="true"
                  align="center"
                  style="width:7%"
                  data-title="文书号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx3', '文书号', 'TextItem')"
                >{{letData.cellIdx3}}</td>
                <td class="textAlignLeft cellBottomLine">
                  号&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </td>
                <td class="textAlignLeft cellBottomLine">签发人：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_4"
                  contenteditable="true"
                  align="center"
                  style="width:15%"
                  data-title="签发人"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx4', '签发人', 'TextItem')"
                >{{letData.cellIdx4}}</td>
              </tr>
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_5"
                  contenteditable="true"
                  style="width:50%"
                  data-title="调查事由"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx5', '调查事由', 'TextItem')"
                >{{letData.cellIdx5}}</td>
                <td class="textAlignLeft">：</td>
              </tr>
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我</td>
                <td
                  class="cellInput"
                  id="cell_idx_6"
                  contenteditable="true"
                  align="center"
                  style="width:10%"
                  data-title="单位"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx6', '单位', 'TextItem')"
                >{{letData.cellIdx6}}</td>
                <td class="textAlignLeft">于</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_7"
                  align="center"
                  style="width:10%"
                  data-title="年"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx7', '年', 'TextItem')"
                >{{letData.cellIdx7}}</td>
                <td class="textAlignLeft">年</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_8"
                  align="center"
                  style="width:10%"
                  data-title="月"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx8', '月', 'TextItem')"
                >{{letData.cellIdx8}}</td>
                <td class="textAlignLeft">月</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_9"
                  align="center"
                  style="width:10%"
                  data-title="日"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx9', '日', 'TextItem')"
                >{{letData.cellIdx9}}</td>
                <td class="textAlignLeft">日对</td>
              </tr>
            </table>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              id="cell_idx_10"
              data-title="违法行为"
              data-type="textarea"
              data-src
              @click="commandFill('cellIdx10', '违法行为', 'TextareaItem')">
              <p class="show-area-item-p">
                <span style="padding: 7px;">{{ letData.cellIdx10 }}</span>
              </p>
            </div>
            <table class="docBody">
              <tr>
                <td class="textAlignLeft">立案调查，在调查中发现其违法事实涉嫌构成犯罪，根据《行政执法机关移送涉嫌犯罪案件</td>
              </tr>
              <tr>
                <td class="textAlignLeft">的规定》第三条以及</td>
              </tr>
            </table>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              id="cell_idx_11"
              data-title="法律规定"
              data-type="textarea"
              data-src
              @click="commandFill('cellIdx11', '法律规定', 'TextareaItem')">
              <p class="show-area-item-p">
                <span style="padding: 7px;">{{ letData.cellIdx11 }}</span>
              </p>
            </div>
            <table class="docBody">
              <tr>
                <td class="textAlignLeft">规定，现移送贵单位，请审查决定是否予以立案侦查。</td>
              </tr>
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;附：本案有关材料</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_12"
                  contenteditable="true"
                  align="center"
                  style="width:10%"
                  data-title="份数"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx12', '份数', 'TextItem')"
                >{{letData.cellIdx12}}</td>
                <td class="textAlignLeft">份</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_13"
                  contenteditable="true"
                  align="center"
                  style="width:10%"
                  data-title="页数"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx13', '页数', 'TextItem')"
                >{{letData.cellIdx13}}</td>
                <td class="textAlignLeft">页</td>
              </tr>
            </table>
            <table height="60"></table>
            <table class="docBody">
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我</td>
                <td
                  class="cellInput"
                  id="cell_idx_14"
                  contenteditable="true"
                  align="center"
                  style="width:10%"
                  data-title="签发人"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx14', '签发人', 'TextItem')"
                >{{letData.cellIdx14}}</td>
                <td class="textAlignLeft">地址：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_15"
                  contenteditable="true"
                  align="center"
                  style="width:27%"
                  data-title="地址"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx15', '地址', 'TextItem')"
                >{{letData.cellIdx15}}</td>
                <td class="textAlignLeft">&nbsp;&nbsp;邮政编码：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_16"
                  contenteditable="true"
                  align="center"
                  style="width:20%"
                  data-title="邮政编码"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx16', '邮政编码', 'TextItem')"
                >{{letData.cellIdx16}}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我</td>
                <td
                  class="cellInput"
                  id="cell_idx_17"
                  contenteditable="true"
                  align="center"
                  style="width:10%"
                  data-title="单位"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx17', '单位', 'TextItem')"
                >{{letData.cellIdx17}}</td>
                <td class="textAlignLeft">联系人：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_18"
                  contenteditable="true"
                  align="center"
                  style="width:25%"
                  data-title="联系人"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx18', '联系人', 'TextItem')"
                >{{letData.cellIdx18}}</td>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;话：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_19"
                  contenteditable="true"
                  align="center"
                  style="width:20%"
                  data-title="电话"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx19', '电话', 'TextItem')"
                >{{letData.cellIdx19}}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;送件人（签名）：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_20"
                  contenteditable="true"
                  align="center"
                  style="width:29%"
                  data-title="签发人"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx20', '签发人', 'TextItem')"
                >{{letData.cellIdx20}}</td>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;日&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;期：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_21"
                  contenteditable="true"
                  align="center"
                  style="width:20%"
                  data-title="签发人"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx21', '签发人', 'TextItem')"
                >{{letData.cellIdx21}}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;收件人（签名）：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_22"
                  contenteditable="true"
                  align="center"
                  style="width:29%"
                  data-title="送件人（签名）"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx22', '送件人（签名）', 'TextItem')"
                >{{letData.cellIdx22}}</td>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;日&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;期：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_23"
                  contenteditable="true"
                  align="center"
                  style="width:20%"
                  data-title="日期"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx23', '日期', 'DateItem')"
                >{{letData.cellIdx23}}</td>
              </tr>
            </table>
            <table height="60"></table>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_24"
                  contenteditable="true"
                  align="right"
                  style="width:95%"
                  @click="commandFill('cellIdx24', '', 'TextItem')"
                >{{letData.cellIdx24}}</td>
              </tr>
            </table>
            <table class="docBody">
              <td class="cellInput" style="width:55%"></td>
              <td
                class="cellInput"
                id="cell_idx_25"
                contenteditable="true"
                align="center"
                style="width:10%"
                @click="commandFill('cellIdx25', '年', 'TextItem')"
              >{{letData.cellIdx25}}</td>
              <td class="textAlignLeft">年</td>
              <td
                class="cellInput"
                id="cell_idx_26"
                contenteditable="true"
                align="center"
                style="width:10%"
                @click="commandFill('cellIdx26', '月', 'TextItem')"
              >{{letData.cellIdx26}}</td>
              <td class="textAlignLeft">月</td>
              <td
                class="cellInput"
                id="cell_idx_27"
                contenteditable="true"
                align="center"
                style="width:10%"
                @click="commandFill('cellIdx27', '日', 'TextItem')"
              >{{letData.cellIdx27}}</td>
              <td class="textAlignLeft">日</td>
            </table>
            <table class="docBody">
              <hr />
              <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;备注：本文书一式两份，一份交移送公安机关，一份存档。</td>
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
          cellIdx0: null, // 文书号
          cellIdx1: null, // 文书号
          cellIdx2: null, // 文书号
          cellIdx3: null, // 文书号
          cellIdx4: null, // 签发人
          cellIdx5: null, // 调查事由
          cellIdx6: null, // 单位
          cellIdx7: null, // 年
          cellIdx8: null, // 月
          cellIdx9: null, // 日
          cellIdx10: null, // 违法行为
          cellIdx11: null, // 法律规定
          cellIdx12: null, // 份数
          cellIdx13: null, // 页数
          cellIdx14: null, // 签发人
          cellIdx15: null, // 地址
          cellIdx16: null, // 邮政编码
          cellIdx17: null, // 单位
          cellIdx18: null, // 联系人
          cellIdx19: null, // 电话
          cellIdx20: null, // 签发人
          cellIdx21: null, // 签发人
          cellIdx22: null, // 送件人（签名）
          cellIdx23: null, // 日期
          cellIdx24: null, //
          cellIdx25: null, // 年
          cellIdx26: null, // 月
          cellIdx27: null, // 日
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