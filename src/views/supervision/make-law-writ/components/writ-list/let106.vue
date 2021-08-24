<!-- 现场检查 一般检查 责令撤出作业人员命令书 -->
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
            <div class="textAlignCenter formHeader3">撤出作业人员命令书</div>
            <div class="stdRowH"></div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_0"
                  align="right"
                  style="width:50%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx0', '文书号', 'TextItem')"
                >{{ letData.cellIdx0 }}</td>
                
                <td class="textAlignLeft ">煤安</td>
                
                <td class="textAlignLeft">撤〔</td>
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
                <td class="textAlignLeft ">〕</td>
                <td
                  class="cellInput "
                  id="cell_idx_3"
                  align="center"
                  style="width:17%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx3', '', 'TextItem')"
                >{{ letData.cellIdx3 }}</td>
                <td class="textAlignLeft ">号&nbsp;&nbsp;</td>
              </tr>
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_4"
                  style="width:62%"
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
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本机关于</td>
                <!-- <td
                  class="cellInput"
                  id="cell_idx_5"
                  align="center"
                  style="width:8%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx5', '', 'TextItem')"
                >{{ letData.cellIdx5 }}</td>
                <td class="textAlignLeft">于</td> -->
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_6"
                  align="center"
                  style="width:8.5%"
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
                  style="width:8.5%"
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
                  style="width:8.5%"
                  data-title="日"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx8', '日', 'TextItem')"
                >{{ letData.cellIdx8 }}</td>
                <td class="textAlignLeft">日</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_9"
                  align="center"
                  style="width:8.5%"
                  data-title="时"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx9', '时', 'TextItem')"
                >{{ letData.cellIdx9 }}</td>
                <td class="textAlignLeft">时</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_10"
                  align="center"
                  style="width:8.5%"
                  data-title="分"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx10', '分', 'TextItem')"
                >{{ letData.cellIdx10 }}</td>
                <td class="textAlignLeft">分，在对你单位检查时，发现在</td>
              </tr>
              <tr>
                <!-- <td class="textAlignLeft">时，发现在</td> -->
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_11"
                  style="width:48%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx11', '', 'TextItem')"
                >{{ letData.cellIdx11 }}</td>
                <td class="textAlignLeft">有</td>
                <td
                  style="width:47%"
                  class="cellInput cellBottomLine"
                  id="cell_idx_12"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx12', '', 'TextItem')"
                >{{ letData.cellIdx12 }}</td>
              </tr>
              
              <tr>
                <td class="textAlignLeft">等威胁作业人员生命安全的紧急情况，根据《中华人民共和国安全生产法》第六十五条第一款第三项</td>
                <td>规定，现责令立即从</td>
                <td
                  style="width:55%"
                  class="cellInput cellBottomLine"
                  id="cell_idx_13"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx13', '', 'TextItem')"
                >{{ letData.cellIdx13 }}</td>
                <td class="textAlignLeft">危险区内撤出作业人员。</td>

              </tr>
              <tr>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此命令</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_14"
                  align="center"
                  style="width:10%"
                  data-title="年"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx14', '年', 'TextItem')"
                >{{ letData.cellIdx14 }}</td>
                <td class="textAlignLeft">年</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_15"
                  align="center"
                  style="width:10%"
                  data-title="月"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx15', '月', 'TextItem')"
                >{{ letData.cellIdx15 }}</td>
                <td class="textAlignLeft">月</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_16"
                  align="center"
                  style="width:10%"
                  data-title="日"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx16', '日', 'TextItem')"
                >{{ letData.cellIdx16 }}</td>
                <td class="textAlignLeft">日</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_17"
                  align="center"
                  style="width:10%"
                  data-title="时"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx17', '时', 'TextItem')"
                >{{ letData.cellIdx17 }}</td>
                <td class="textAlignLeft">时</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_18"
                  align="center"
                  style="width:10%"
                  data-title="分"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx18', '分', 'TextItem')"
                >{{ letData.cellIdx18 }}</td>
                <td class="textAlignLeft">分现场已作出。</td>
              </tr>
              <tr></tr>
              <tr>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果不服本指令，可在接到本指令书之日起60日内向</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_19"
                  style="width:29%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx19', '', 'TextItem')"
                >{{ letData.cellIdx19 }}</td>
                <td>人民政府或者</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_20"
                  style="width:31%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx20', '', 'TextItem')"
                >{{ letData.cellIdx20 }}</td>
                <td class="textAlignLeft">申请行政复议，或者在6个月内依法向</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_21"
                  style="width:31%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx21', '', 'TextItem')"
                >{{ letData.cellIdx21 }}</td>
                <td class="textAlignLeft">人民法院提起行政诉讼；复议、诉讼期间不停止执行本指令。</td>
              </tr>
              
            </table>
            <table height="60"></table>
            <table class="docBody">
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现场执法人员（签名）：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_22"
                  style="width:23%"
                  data-title="现场执法人员（签名）"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx22', '现场执法人员（签名）', 'TextItem')"
                >{{ letData.cellIdx22 }}</td>
                <td class="textAlignLeft">执法证号：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_23"
                  style="width:20%"
                  data-title="执法证号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx23', '执法证号', 'TextItem')"
                >{{ letData.cellIdx23 }}</td>
                <td style="width:30%"></td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_24"
                  style="width:23%"
                  data-title="现场执法人员（签名）"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx24', '现场执法人员（签名）', 'TextItem')"
                >{{ letData.cellIdx24 }}</td>
                <td class="textAlignLeft">执法证号：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_25"
                  style="width:20%"
                  data-title="日期"
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx25', '执法证号', 'TextItem')"
                >{{ letData.cellIdx25 }}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;被检查单位负责人意见</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_26"
                  style="width:35%"
                  data-title="被检查单位负责人意见"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx26', '被检查单位负责人意见', 'TextItem')"
                >{{ letData.cellIdx26 }}</td>
                <td class="textAlignLeft">签名：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_27"
                  style="width:25%"
                  data-title="签名"
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx27', '签名', 'TextItem')"
                >{{ letData.cellIdx27}}</td>
                <td class="textAlignLeft">日期：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_28"
                  style="width:20%"
                  data-title="日期"
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx28', '日期', 'DateItem')"
                >{{ letData.cellIdx28}}</td>
              </tr>
            </table>
            <table height="30"></table>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_29"
                  align="right"
                  style="width:95%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx29', '', 'TextItem')"
                >{{ letData.cellIdx29 }}</td>
              </tr>
            </table>
            <table class="docBody">
              <td class="cellInput" style="width:55%"></td>
              <td
                class="cellInput "
                id="cell_idx_30"
                align="center"
                style="width:10%"
                data-title="年"
                data-type="text"
                data-src
                @click="commandFill('cellIdx30', '年', 'TextItem')"
              >{{letData.cellIdx27}}</td>
              <td class="textAlignLeft">年</td>
              <td
                class="cellInput"
                id="cell_idx_31"
                align="center"
                style="width:10%"
                data-title="月"
                data-type="text"
                data-src
                @click="commandFill('cellIdx31', '月', 'TextItem')"
              >{{letData.cellIdx31}}</td>
              <td class="textAlignLeft">月</td>
              <td
                class="cellInput "
                id="cell_idx_32"
                align="center"
                style="width:10%"
                data-title="日"
                data-type="text"
                data-src
                @click="commandFill('cellIdx32', '日', 'TextItem')"
              >{{letData.cellIdx32}}</td>
              <td class="textAlignLeft">日</td>
            </table>
            <table>
              <hr />
              <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;备注：本文书一式两份，一份交被检查单位，一份存档。</td>
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
  name: "Let106",
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
          cellIdx0: null,//
          // cellIdx1: null, 
          cellIdx2: null, 
          cellIdx3: null, 
          cellIdx4: null,
          
          cellIdx6: null, // 年
          cellIdx7: null, // 月
          cellIdx8: null, // 日
          cellIdx9: null, // 时
          cellIdx10: null, // 分
          cellIdx11: null, 
          cellIdx12: null, // 
          cellIdx13: null, 
          cellIdx14: null, // 年
          cellIdx15: null, // 月
          cellIdx16: null, // 日
          cellIdx17: null, // 时
          cellIdx18: null, // 分
          cellIdx19: null, 
          cellIdx20: null, 
          cellIdx21: null, // 
          cellIdx22: null, // 现场执法人员（签名）
          cellIdx23: null, // 执法证号
          cellIdx24: null, // 现场执法人员（签名）
          cellIdx25: null, // 执法证号
          cellIdx26: null, //被检查单位负责人意见
          cellIdx27: null, // 签名
          cellIdx28: null, // 日期
          cellIdx29: null, // 
          cellIdx30: null, // 年
          cellIdx31: null, //月
          cellIdx32: null, //日
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