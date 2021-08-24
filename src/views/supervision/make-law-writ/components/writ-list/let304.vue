<!--行政强制 行政复议调查笔录 -->
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
            <div class="textAlignCenter formHeader1">行 政 复 议 调 查 笔 录</div>
            <div class="stdRowH"></div>
            <table style="border:solid 0px #000;" class="docBody">
              <tr>
                <td class="textAlignLeft">时&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;间：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_0"
                  align="center"
                  style="width:10%"
                  data-title="年"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx0', '年', 'TextItem')"
                >{{letData.cellIdx0}}</td>
                <td class="textAlignLeft">年</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_1"
                  align="center"
                  style="width:10%"
                  data-title="月"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx1', '月', 'TextItem')"
                >{{letData.cellIdx1}}</td>
                <td class="textAlignLeft">月</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_2"
                  align="center"
                  style="width:10%"
                  data-title="日"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx2', '日', 'TextItem')"
                >{{letData.cellIdx2}}</td>
                <td class="textAlignLeft">日</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_3"
                  align="center"
                  style="width:10%"
                  data-title="时"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx3', '时', 'TextItem')"
                >{{letData.cellIdx3}}</td>
                <td class="textAlignLeft">时</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_4"
                  align="center"
                  style="width:10%"
                  data-title="分"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx4', '分', 'TextItem')"
                >{{letData.cellIdx4}}</td>
                <td class="textAlignLeft">分至</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_5"
                  align="center"
                  style="width:10%"
                  data-title="时"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx5', '时', 'TextItem')"
                >{{letData.cellIdx5}}</td>
                <td class="textAlignLeft">时</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_6"
                  align="center"
                  style="width:10%"
                  data-title="分"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx6', '分', 'TextItem')"
                >{{letData.cellIdx6}}</td>
                <td class="textAlignLeft">分</td>
              </tr>
              <tr>
                <td class="textAlignLeft">地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;点：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_7"
                  contenteditable="true"
                  align="center"
                  style="width:85%"
                  data-title="地点"
                  data-type="texta"
                  data-src
                  @click="commandFill('cellIdx7', '地点', 'TextItem')"
                >{{letData.cellIdx7}}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">调查人（签名）：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_8"
                  contenteditable="true"
                  align="center"
                  style="width:36%"
                  data-title="调查人（签名）"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx8', '调查人（签名）', 'TextItem')"
                >{{letData.cellIdx8}}</td>
                <td class="textAlignCenter">记录人（签名）：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_9"
                  contenteditable="true"
                  align="center"
                  style="width:28%"
                  data-title="记录人（签名）"
                  data-type="text"
                  data-src
                 @click="commandFill('cellIdx9', '记录人（签名）', 'TextItem')"
                >{{letData.cellIdx9}}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">被调查人：</td>
                <td class="textAlignLeft">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_10"
                  contenteditable="true"
                  align="center"
                  style="width:20%"
                  data-title="被调查人"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx10', '被调查人', 'TextItem')"
                >{{letData.cellIdx10}}</td>
                <td class="textAlignLeft">性别</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_11"
                  contenteditable="true"
                  align="center"
                  style="width:7%"
                  data-title="性别"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx11', '性别', 'TextItem')"
                >{{letData.cellIdx11}}</td>
                <td class="textAlignLeft">年龄</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_12"
                  contenteditable="true"
                  align="center"
                  style="width:7%"
                  data-title="年龄"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx12', '年龄', 'TextItem')"
                >{{letData.cellIdx12}}</td>
                <td class="textAlignLeft">身份证号</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_13"
                  contenteditable="true"
                  align="center"
                  style="width:28%"
                  data-title="身份证号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx13', '身份证号', 'TextItem')"
                >{{letData.cellIdx13}}</td>
              </tr>
              <tr>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;单&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;位</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_14"
                  contenteditable="true"
                  align="center"
                  style="width:20%"
                  data-title="单位"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx14', '单位', 'TextItem')"
                >{{letData.cellIdx14}}</td>
                <td class="textAlignLeft">职务（职业）</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_15"
                  contenteditable="true"
                  align="center"
                  style="width:20%"
                  data-title="职务（职业）"
                  data-type="text"
                  data-src
                 @click="commandFill('cellIdx15', '职务（职业）', 'TextItem')"
                >{{letData.cellIdx15}}</td>
                <td class="textAlignLeft">电&nbsp;&nbsp;&nbsp;&nbsp;话</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_16"
                  contenteditable="true"
                  align="center"
                  style="width:20%"
                  data-title="电话"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx16', '电话', 'TextItem')"
                >{{letData.cellIdx16}}</td>
              </tr>
              <tr>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;住&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_17"
                  contenteditable="true"
                  align="center"
                  style="width:78%"
                  data-title="住址"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx17', '住址', 'TextItem')"
                >{{letData.cellIdx17}}</td>
              </tr>
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_18"
                  contenteditable="true"
                  style="width:95%"
                @click="commandFill('cellIdx18', '', 'TextItem')"
                >{{letData.cellIdx18}}</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_19"
                  contenteditable="true"
                  style="width:95%"
                @click="commandFill('cellIdx19', '', 'TextItem')"
                >{{letData.cellIdx19}}</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_20"
                  contenteditable="true"
                  style="width:95%"
                @click="commandFill('cellIdx20', '', 'TextItem')"
                >{{letData.cellIdx20}}</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_21"
                  contenteditable="true"
                  style="width:95%"
                @click="commandFill('cellIdx21', '', 'TextItem')"
                >{{letData.cellIdx21}}</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_22"
                  contenteditable="true"
                  style="width:95%"
                @click="commandFill('cellIdx22', '', 'TextItem')"
                >{{letData.cellIdx22}}</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_23"
                  contenteditable="true"
                  style="width:95%"
                @click="commandFill('cellIdx23', '', 'TextItem')"
                >{{letData.cellIdx23}}</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_24"
                  contenteditable="true"
                  style="width:95%"
                @click="commandFill('cellIdx24', '', 'TextItem')"
                >{{letData.cellIdx24}}</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_25"
                  contenteditable="true"
                  style="width:95%"
                @click="commandFill('cellIdx25', '', 'TextItem')"
                >{{letData.cellIdx25}}</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_26"
                  contenteditable="true"
                  style="width:95%"
                @click="commandFill('cellIdx26', '', 'TextItem')"
                >{{letData.cellIdx26}}</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_27"
                  contenteditable="true"
                  style="width:95%"
                @click="commandFill('cellIdx27', '', 'TextItem')"
                >{{letData.cellIdx27}}</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_28"
                  contenteditable="true"
                  style="width:95%"
                @click="commandFill('cellIdx28', '', 'TextItem')"
                >{{letData.cellIdx28}}</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_29"
                  contenteditable="true"
                  style="width:95%"
                @click="commandFill('cellIdx29', '', 'TextItem')"
                >{{letData.cellIdx29}}</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_30"
                  contenteditable="true"
                  style="width:95%"
                @click="commandFill('cellIdx30', '', 'TextItem')"
                >{{letData.cellIdx30}}</td>
              </tr>
              <tr>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;备注：被调查人员应在过目笔录后，签署意见，并签名押印。</td>
              </tr>
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
  name: "Let304",
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
          cellIdx0: null,//年
          cellIdx1: null, //月
          cellIdx2: null, //日
          cellIdx3: null, //时
          cellIdx4: null,//分
          cellIdx5: null,//时
          cellIdx6: null, // 分
          cellIdx7: null, // 地点
          cellIdx8: null, // 调查人（签名）
          cellIdx9: null, //记录人（签名）
          cellIdx10: null, //被调查人
          cellIdx11: null,//性别
          cellIdx12: null, // 年龄
          cellIdx13: null, //身份证号
          cellIdx14: null, // 单位
          cellIdx15: null, //职务（职业）
          cellIdx16: null, // 电话
          cellIdx17: null, // 住址
          cellIdx18: null, //
          cellIdx19: null, // 
          cellIdx20: null, //
          cellIdx21: null, //
          cellIdx22: null, //
          cellIdx23: null, // 
          cellIdx24: null, // 
          cellIdx25: null, // 
          cellIdx26: null, // 
          cellIdx27: null, //
          cellIdx28: null, // 
          cellIdx29: null, //
          cellIdx30: null, //
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