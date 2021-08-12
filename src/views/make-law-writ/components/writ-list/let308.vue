<!-- 行政强制 安全生产行政执法文书 恢复供电（供应民用爆炸物品）通知书 -->
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
            <div class="textAlignCenter formHeader1">安全生产行政执法文书</div>
            <div class="textAlignCenter formHeader2">恢复供电（供应民用爆炸物品）通知书</div>
            <table style="width:400px;" class="docTop">
              <tr>
                <td
                  class="textAlignCenter"
                  id="cell_idx_0"
                  contenteditable="true"
                >（{{letData.cellIdx0}}）应急恢复通〔{{letData.cellIdx1}}〕{{letData.cellIdx2}}号</td>
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
                <td style="width:35mm">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本机关于</td>
                <td
                  style="width:50mm;"
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_4"
                  @click="commandFill('cellIdx4', '日期', 'DateItem')"
                >{{letData.cellIdx4 ? letData.cellIdx4: `&nbsp;&nbsp;&nbsp;&nbsp;年&nbsp;&nbsp;&nbsp;&nbsp;月&nbsp;&nbsp;&nbsp;&nbsp;日`}}</td>
                <td style="width:15mm" class="textAlignRight">依法对</td>
                <td
                  style="width:90mm"
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_5"
                  @click="commandFill('cellIdx5', '', 'TextItem')"
                >{{letData.cellIdx5}}</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td style="width:23mm">作出了停止</td>
                <td
                  style="width:32mm;"
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_6"
                  @click="commandFill('cellIdx6', '', 'TextItem')"
                >{{letData.cellIdx6}}</td>
                <td style="width:40mm" class="textAlignCenter">的措施，该单位已于</td>
                <td
                  style="width:40mm;"
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_7"
                  @click="commandFill('cellIdx7', '日期', 'DateItem')"
                >{{letData.cellIdx7 ? letData.cellIdx7: `&nbsp;&nbsp;&nbsp;&nbsp;年&nbsp;&nbsp;&nbsp;&nbsp;月&nbsp;&nbsp;&nbsp;&nbsp;日`}}</td>
                <td style="width:50mm">依法履行了相关行政决定、</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td>采取相应措施消除事故隐患，依据《中华人民共和国安全生产法》第六十七条第二款规定，本机关决</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td style="width:35mm;">定对该单位解除</td>
                <td
                  style="width:35mm;"
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_8"
                  @click="commandFill('cellIdx8', '', 'TextItem')"
                >{{letData.cellIdx8 ? letData.cellIdx8 : '停止供电'}}</td>
                <td style="width:40mm;" class="textAlignRight">措施。请你单位于</td>
                <td
                  style="width:60mm;"
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_9"
                  @click="commandFill('cellIdx9', '', 'DatetimeItem')"
                >{{letData.cellIdx9 ? letData.cellIdx9 : '&nbsp;&nbsp;&nbsp;&nbsp;年&nbsp;&nbsp;&nbsp;&nbsp;月&nbsp;&nbsp;&nbsp;&nbsp;日&nbsp;&nbsp;&nbsp;&nbsp;时&nbsp;&nbsp;&nbsp;&nbsp;分'}}</td>
                <td style="width:20mm;">对该单位</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td style="width:20mm;">给予恢复</td>
                <td
                  style="width:50mm;"
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_10"
                  @click="commandFill('cellIdx10', '', 'TextItem')"
                >{{letData.cellIdx10 ? letData.cellIdx10 : '供应生产用电'}}</td>
                <td style="width:120mm;">，请给予配合。</td>
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
            <div class="stdRowH"></div>
            <div class="stdRowH"></div>
            <div class="stdRowH"></div>
            <table class="docBody">
              <tr>
                <td style="width:410px;">&nbsp;</td>
                <td
                  style="width:250px;"
                  class="cellInput textAlignRight"
                  id="cell_idx_11"
                  @click="commandFill('cellIdx11', '', 'TextItem')"
                >{{letData.cellIdx11}}</td>
                <td style="width:100px;" class="textAlignCenter">（印章）</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td style="width:594px;">&nbsp;</td>
                <td
                  style="width:150px;"
                  class="cellInput textAlignCenter"
                  id="cell_idx_12"
                  @click="commandFill('cellIdx12', '日期', 'DateItem')"
                >{{letData.cellIdx12 ? letData.cellIdx12: `&nbsp;&nbsp;&nbsp;&nbsp;年&nbsp;&nbsp;&nbsp;&nbsp;月&nbsp;&nbsp;&nbsp;&nbsp;日`}}</td>
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
          cellIdx0: null, // SHORTNAME
          cellIdx1: null, // YEAR
          cellIdx2: null, // DOCNUMBER
          cellIdx3: null, //
          cellIdx4: null, // 日期
          cellIdx5: null, // ent_name
          cellIdx6: null, //
          cellIdx7: null, // 日期
          cellIdx8: null, //
          cellIdx9: null, //
          cellIdx10: null, //
          cellIdx11: null, // OrgName
          cellIdx12: null, // 日期
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