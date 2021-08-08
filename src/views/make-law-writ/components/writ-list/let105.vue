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
            <div class="textAlignCenter formHeader1">安全生产行政执法文书</div>
            <div class="textAlignCenter formHeader2">询问通知书</div>
            <table style="width:390px;" class="docTop">
              <tr>
                <td class="textAlignCenter" id="cell_idx_0">
                  （{{ letData.celIdx0 }}）应急询〔{{ letData.cellIdx1 }}〕{{ letData.cellIdx2 }}号
                </td>
              </tr>
            </table>
            <div class="stdRowH"></div>
            <table class="docBody">
              <tr>
                <td class="cellInput cellBottomLine" style="width:320px" id="cell_idx_3">
                  {{letData.cellIdx3}}
                </td>
                <td>：</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td style="width:15mm;text-align:right;">因</td>
                <td style="width:95mm;" class="cellInput cellBottomLine" id="cell_idx_4">
                  {{letData.cellIdx4}}
                </td>
                <td style="width:80mm;">
                  ，请你（单位）于
                  <span
                    style="display:inline-block;width:168px;"
                    class="cellInput textAlignCenter cellBottomLine"
                    id="cell_idx_5"
                    @click="commandFill('cellIdx5', '', 'DatetimeItem')"
                  >{{letData.cellIdx5 ? letData.cellIdx5 : '&nbsp;'}}</span>
                </td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td style="width:20px;">到</td>
                <td style="width:320px;" class="cellInput cellBottomLine" id="cell_idx_6">
                  {{letData.cellIdx6}}
                </td>
                <td style="width:420px;">接受询问调查，来时请携带下列证件材料（见打√处）：</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td
                  style="width:20px;"
                  class="cellInput"
                  id="cell_idx_7"
                  @click="commandFill('cellIdx7', '身份证', 'TextItem')"
                >□{{letData.cellIdx7}}</td>
                <td>身份证</td>
              </tr>
              <tr>
                <td
                  id="cell_idx_8"
                  class="cellInput"
                  @click="commandFill('cellIdx8', '营业执照', 'TextItem')"
                >□{{letData.cellIdx8}}</td>
                <td>营业执照</td>
              </tr>
              <tr>
                <td
                  id="cell_idx_9"
                  class="cellInput"
                  @click="commandFill('cellIdx9', '法定代表人身份证明或者委托书', 'TextItem')"
                >□{{letData.cellIdx9}}</td>
                <td>法定代表人身份证明或者委托书</td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_10"
                  @click="commandFill('cellIdx10', '其它', 'TextItem')"
                >□{{letData.cellIdx10}}</td>
                <td id="cell_idx_11" class="cellInput cellBottomLine">
                  {{letData.cellIdx11}}
                </td>
              </tr>
              <tr>
                <td colspan="2">如无法按时前来，请及时联系。</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td style="width:40mm;">应急管理部门地址：</td>
                <td
                  style="width:150mm;"
                  class="cellInput cellBottomLine textAlignCenter"
                  id="cell_idx_12"
                >{{letData.cellIdx12}}</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td style="width:70px;">联系人：</td>
                <td
                  style="width:279px;"
                  class="cellInput cellBottomLine textAlignCenter"
                  id="cell_idx_13"
                >{{letData.cellIdx13}}</td>
                <td style="width:90px;text-align:right;">联系电话：</td>
                <td
                  style="width:279px;"
                  class="cellInput cellBottomLine textAlignCenter"
                  id="cell_idx_14"
                >{{letData.cellIdx14}}</td>
              </tr>
            </table>
            <div style="height:300px;"></div>
            <table class="docBody">
              <tr>
                <td style="width:410px;">&nbsp;</td>
                <td style="width:250px;" class="cellInput textAlignRight" id="cell_idx_15">
                  {{letData.cellIdx15}}
                </td>
                <td style="width:100px;padding-right:16px;" class="textAlignCenter">（印章）</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td style="width:524px;">&nbsp;</td>
                <td
                  style="padding-right:16px;width:170px; display: inline-block;"
                  class="cellInput textAlignCenter"
                  id="cell_idx_16"
                  @click="commandFill('cellIdx16', '日期', 'DateItem')"
                >{{letData.cellIdx16 ? letData.cellIdx16 : '选择日期...'}}</td>
              </tr>
            </table>
            <div class="docFooter">
              <div
                style="margin-top:4px;width:98%;height: 24px; line-height:30px; padding-left: 16px;"
              >本文书一式两份：一份由应急管理部门备案，一份交被询问人。</div>
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
  setDatetimeItem,
} from "@/utils/handlePaperData";
export default {
  name: "Let102",
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
        setDatetimeItem,
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
      //查询当前计划是否已做现场检查笔录
      const checkPaper = await wkPaper.findAll((item) => {
        return item.caseId === caseId && item.name === "现场检查笔录";
      });
      if (checkPaper.length > 0) {
        // 回显
        this.letData = JSON.parse(checkPaper[0].paperContent);
        this.editData = checkPaper[0];
      } else {
        // 创建初始版本
        this.letData = {
          cellIdx0: null, // shortName
          cellIdx1: null, // year
          cellIdx2: null, // DOCNUMBER
          cellIdx3: corp.corpName ? corp.corpName : null, // corpname
          cellIdx4: null, //
          cellIdx5: null, //
          cellIdx6: null, //
          cellIdx7: null, // 身份证
          cellIdx8: null, // 营业执照
          cellIdx9: null, // 法定代表人身份证明或者委托书
          cellIdx10: null, // 其它
          cellIdx11: null, //
          cellIdx12: null, // 应急管理部门地址
          cellIdx13: null, // 联系人
          cellIdx14: null, // 联系电话
          cellIdx15: null, // orgName 机构名称
          cellIdx16: null, // 日期
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