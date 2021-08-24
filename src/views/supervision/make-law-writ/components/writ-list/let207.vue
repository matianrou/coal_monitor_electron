<!--行政处罚 一般程序  送达收执 -->
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
          <div class="stdRowH"></div>
          <div class="textAlignCenter formHeader0">
            煤矿安全监管行政执法文书
            <br />
          </div>
          <div class="textAlignCenter formHeader3">送 达 收 执</div>
          <div class="stdRowH"></div>
          <table class="docBody">
            <tr>
              <td
                class="cellInput cellBottomLine"
                id="cell_idx_0"
                align="right"
                style="width:55%"
                data-title="文书号"
                data-type="text"
                data-src
                @click="commandFill('cellIdx0', '文书号', 'TextItem')"
                >{{letData.cellIdx0}}</td>
              <td class="textAlignLeft cellBottomLine">煤安监</td>
              <td
                class="cellInput cellBottomLine"
                id="cell_idx_1"
                align="center"
                style="width:7%"
                data-title="文书号"
                data-type="text"
                data-src
                @click="commandFill('cellIdx1', '文书号', 'TextItem')"
                >{{letData.cellIdx1}}</td>
              <td class="textAlignLeft cellBottomLine">送〔</td>
              <td
                class="cellInput cellBottomLine"
                id="cell_idx_2"
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
                align="center"
                style="width:7%"
                data-title="文书号"
                data-type="text"
                data-src
                @click="commandFill('cellIdx3', '文书号', 'TextItem')"
                >{{letData.cellIdx3}}</td>
              <td class="textAlignLeft cellBottomLine">号&nbsp;&nbsp;</td>
            </tr>
          </table>
          <table height="60"></table>
          <table style="border:solid 0px #000;" class="docBody">
            <tr>
              <td
                class="textAlignLeft"
              >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;送达文书：</td>
              <td
                class="cellInput cellBottomLine"
                id="cell_idx_4"
                align="center"
                style="width:70%"
                data-title="送达文书"
                data-type="text"
                data-src
                @click="commandFill('cellIdx4', '送达文书', 'TextItem')"
                >{{letData.cellIdx4}}</td>
            </tr>
            <tr>
              <td
                class="textAlignLeft"
              >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;文书字号：</td>
              <td
                class="cellInput cellBottomLine"
                id="cell_idx_5"
                align="center"
                style="width:70%"
                data-title="文书字号"
                data-type="text"
                data-src
                @click="commandFill('cellIdx5', '文书字号', 'TextItem')"
                >{{letData.cellIdx5}}</td>
            </tr>
            <tr>
              <td
                class="textAlignLeft"
              >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;送达地点：</td>
              <td
                class="cellInput cellBottomLine"
                id="cell_idx_6"
                align="center"
                style="width:70%"
                data-title="送达地点"
                data-type="text"
                data-src
                @click="commandFill('cellIdx6', '送达地点', 'TextItem')"
                >{{letData.cellIdx6}}</td>
            </tr>
            <tr>
              <td
                class="textAlignLeft"
              >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;送达方式：</td>
              <td
                class="cellInput cellBottomLine"
                id="cell_idx_7"
                align="center"
                style="width:70%"
                data-title="送达方式"
                data-type="text"
                data-src
                @click="commandFill('cellIdx7', '送达方式', 'SelectItem')"
                >{{letData.cellIdx7}}</td>
            </tr>
          </table>
          <!-- <table height="30"></table> -->
          <table class="docBody">
            <tr>
              <td
                class="textAlignLeft"
              >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;受送达</td>
              <td
                class="cellInput"
                id="cell_idx_8"
                align="center"
                style="width:10%"
                data-title="送达人"
                data-type="text"
                data-src
                @click="commandFill('cellIdx8', '送达人', 'TextItem')"
                >{{letData.cellIdx8}}</td>
              <td class="textAlignLeft">（签名）：</td>
              <td
                class="cellInput cellBottomLine"
                id="cell_idx_9"
                align="center"
                style="width:24%"
                data-title="签名"
                data-type="text"
                data-src
                @click="commandFill('cellIdx9', '签名', 'TextItem')"
                >{{letData.cellIdx9}}</td>
              <td class="textAlignLeft">&nbsp;&nbsp;日&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;期：</td>
              <td
                class="cellInput cellBottomLine"
                id="cell_idx_10"
                align="center"
                style="width:22%"
                data-title="日期"
                data-type="text"
                data-src
                @click="commandFill('cellIdx10', '日期', 'DateItem')"
                >{{letData.cellIdx10}}</td>
            </tr>
            <tr>
              <td
                class="textAlignLeft"
              >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;送达人（签名）：</td>
              <td
                class="cellInput cellBottomLine"
                id="cell_idx_11"
                align="center"
                style="width:34%"
                data-title="送达人（签名）"
                data-type="text"
                data-src
                 @click="commandFill('cellIdx11', '送达人（签名）', 'TextItem')"
                >{{letData.cellIdx11}}</td>
              <td class="textAlignLeft">&nbsp;&nbsp;日&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;期：</td>
              <td
                class="cellInput cellBottomLine"
                id="cell_idx_12"
                align="center"
                style="width:22%"
                data-title="日期"
                data-type="text"
                data-src
                @click="commandFill('cellIdx12', '日期', 'DateItem')"
                >{{letData.cellIdx12}}</td>
            </tr>
          </table>
          <table height="90"></table>
          <table class="docBody">
            <tr>
              <td class="cellInput" id="cell_idx_13" align="right" style="width:95%"
              @click="commandFill('cellIdx13', '', 'TextItem')"
              >{{letData.cellIdx13}}</td>
            </tr>
          </table>
          <table class="docBody">
            <td class="cellInput" style="width:55%"></td>
            <td
              class="cellInput"
              id="cell_idx_14"
              align="center"
              style="width:10%"
              data-title="年"
              data-type="text"
              data-src
              @click="commandFill('cellIdx14', '年', 'TextItem')"
              >{{letData.cellIdx14}}</td>
            <td class="textAlignLeft">年</td>
            <td
              class="cellInput"
              id="cell_idx_15"
              align="center"
              style="width:10%"
              data-title="月"
              data-type="text"
              data-src
              @click="commandFill('cellIdx15', '月', 'TextItem')"
              >{{letData.cellIdx15}}</td>
            <td class="textAlignLeft">月</td>
            <td
              class="cellInput"
              id="cell_idx_16"
              align="center"
              style="width:10%"
              data-title="日"
              data-type="text"
              data-src
              @click="commandFill('cellIdx16', '日', 'TextItem')"
              >{{letData.cellIdx16}}</td>
            <td class="textAlignLeft">日</td>
          </table>
        </div>
      </div>
    </let-main>
  </div>
</template>

<script>
import letMain from "../let-main";
import GoDB from "@/utils/godb.min.js";
import { getDocNumber } from '@/utils/monitor/setInitPaperData'
export default {
  name: "Let207",
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
      options: {
        cellIdx7: [ // 送达方式码表
          {
            value: '直接送达',
            name: '直接送达'
          },
          {
            value: '留置送达',
            name: '留置送达'
          },
          {
            value: '委托送达',
            name: '委托送达'
          },
          {
            value: '邮寄送达',
            name: '邮寄送达'
          },
          {
            value: '公告送达',
            name: '公告送达'
          },
        ],
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
        // 1.送达文书：国家煤矿安全监察行政处罚决定书
        let cellIdx4String = '国家煤矿安全监察行政处罚决定书'
        // 2.文书字号：使用行政处罚决定书的文书编号
        let { numString } = await getDocNumber(db, '8', caseId, this.$store.state.user)
        let cellIdx5String = numString
        // 3.送达地点：煤矿名称
        let cellIdx6String = corp.corpName
        let paperNumber = await getDocNumber(db, this.docData.docTypeNo, caseId, this.$store.state.user)
        this.letData = {
          cellIdx0: paperNumber.num0, // 文书号
          cellIdx0TypeTextItem: paperNumber.num0, // 文书号
          cellIdx1: paperNumber.num1, // 文书号
          cellIdx1TypeTextItem: paperNumber.num1, // 文书号
          cellIdx2: paperNumber.num3, // 文书号
          cellIdx2TypeTextItem: paperNumber.num3, // 文书号
          cellIdx3: paperNumber.num4, // 文书号
          cellIdx3TypeTextItem: paperNumber.num4, // 文书号
          cellIdx4: cellIdx4String, // 送达文书
          cellIdx4TypeTextItem: cellIdx4String, // 送达文书
          cellIdx5: cellIdx5String, // 文书字号
          cellIdx5TypeTextItem: cellIdx5String, // 文书字号
          cellIdx6: cellIdx6String, // 送达地点
          cellIdx6TypeTextItem: cellIdx6String, // 送达地点
          cellIdx7: null, // 送达方式
          cellIdx8: null, // 送达人
          cellIdx9: null, // 签名
          cellIdx10: null, // 日期
          cellIdx11: null, // 送达人（签名）
          cellIdx12: null, // 日期
          cellIdx13: null, //
          cellIdx14: null, // 年
          cellIdx15: null, // 月
          cellIdx16: null, // 日
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