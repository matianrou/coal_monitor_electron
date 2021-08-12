<!-- 其他 安全生产违法案件 案卷（首页） -->
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
            <div
              class="textAlignCenter formHeader3 cellInput"
              style="font-size:30px"
              id="cell_idx_12"
              @click="commandFill('cellIdx12', '', 'TextItem')"
            >{{letData.cellIdx12}}</div>
            <div class="textAlignCenter formHeader3" style="font-size:30px">安全生产违法案件</div>
            <div class="textAlignCenter formHeader3" style="font-size:30px">案卷（首页）</div>
            <table style="width:370px;" class="docTop">
              <tr>
                <td
                  class="textAlignCenter"
                  id="cell_idx_0"
                  contenteditable="true"
                >（{{letData.cellIdx0}}）应急案〔{{letData.cellIdx1}}〕{{letData.cellIdx2}}号</td>
              </tr>
            </table>
            <div class="halfRowH"></div>
            <table class="docBody">
              <tr>
                <td style="width:30mm;" class="textAlignCenter">案件名称：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_3"
                  contenteditable="true"
                  colspan="5"
                  @click="commandFill('cellIdx3', '', 'TextItem')"
                >{{letData.cellIdx3}}</td>
              </tr>
            </table>
            <div class="halfRowH"></div>
            <table class="docBody" style="border:solid 1px #000;">
              <tr style="height:6cm;">
                <td style="width:20mm;" class="textAlignCenter cellBottomLine cellRightLine">案由</td>
                <td
                  style="width:170mm;"
                  class="cellInput cellBottomLine textPaddingLeft"
                  id="cell_idx_4"
                  @click="commandFill('cellIdx4', '', 'TextItem')"
                >{{letData.cellIdx4}}</td>
              </tr>
              <tr style="height:6cm;">
                <td class="textAlignCenter cellBottomLine cellRightLine">
                  处理
                  <br />结果
                </td>
                <td
                  class="cellInput cellBottomLine textPaddingLeft"
                  id="cell_idx_5"
                  @click="commandFill('cellIdx5', '', 'TextItem')"
                >{{letData.cellIdx5}}</td>
              </tr>
            </table>
            <div class="stdRowH"></div>
            <table class="docBody">
              <tr>
                <td style="width:20mm;" class="textPaddingLeft">立案：</td>
                <td
                  style="width:50mm;"
                  class="cellInput cellBottomLine textPaddingLeft"
                  id="cell_idx_6"
                  @click="commandFill('cellIdx6', '立案日期', 'DateItem')"
                >{{letData.cellIdx6 ? letData.cellIdx6 : '年&nbsp;&nbsp;&nbsp;&nbsp;月&nbsp;&nbsp;&nbsp;&nbsp;日'}}</td>
                <td style="width:125mm;">&nbsp;</td>
              </tr>
              <tr>
                <td class="textPaddingLeft">结案：</td>
                <td
                  class="cellInput cellBottomLine textPaddingLeft"
                  id="cell_idx_7"
                  @click="commandFill('cellIdx7', '结案日期', 'DateItem')"
                >{{letData.cellIdx7 ? letData.cellIdx7 : '年&nbsp;&nbsp;&nbsp;&nbsp;月&nbsp;&nbsp;&nbsp;&nbsp;日'}}</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td class="textPaddingLeft">承办人：</td>
                <td
                  class="cellInput cellBottomLine textPaddingLeft"
                  id="cell_idx_8"
                  @click="commandFill('cellIdx8', '承办人', 'TextItem')"
                >{{letData.cellIdx8}}</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td class="textPaddingLeft">归档号：</td>
                <td
                  class="cellInput cellBottomLine textPaddingLeft"
                  id="cell_idx_9"
                  @click="commandFill('cellIdx9', '归档号', 'TextItem')"
                >{{letData.cellIdx9}}</td>
                <td>&nbsp;</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td style="width:25mm;" class="textPaddingLeft">归档日期：</td>
                <td
                  style="width:45mm;"
                  class="cellInput cellBottomLine textPaddingLeft"
                  id="cell_idx_10"
                  @click="commandFill('cellIdx10', '归档日期', 'DateItem')"
                >{{letData.cellIdx10 ? letData.cellIdx10 : '年&nbsp;&nbsp;&nbsp;&nbsp;月&nbsp;&nbsp;&nbsp;&nbsp;日'}}</td>
                <td style="width:125mm;">&nbsp;</td>
              </tr>
              <tr>
                <td class="textPaddingLeft">保存期限：</td>
                <td
                  class="cellInput cellBottomLine textPaddingLeft"
                  contenteditable="true"
                  id="cell_idx_11"
                  @click="commandFill('cellIdx11', '保存期限', 'TextItem')"
                >{{letData.cellIdx11}}</td>
                <td>&nbsp;</td>
              </tr>
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
  name: "Let404",
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
          cellIdx0: null, // SHORTNAME
          cellIdx1: null, // YEAR
          cellIdx2: null, // DOCNUMBER
          cellIdx3: null, //
          cellIdx4: null, //
          cellIdx5: null, //
          cellIdx6: null, // 立案日期
          cellIdx7: null, // 结案日期
          cellIdx8: null, // 承办人
          cellIdx9: null, // 归档号
          cellIdx10: null, // 归档日期
          cellIdx11: null, // 保存期限
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