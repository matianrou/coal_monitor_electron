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
                class="cellInput "
                id="cell_idx_0"
                align="right"
                style="width:40%"
                data-title="文书号"
                data-type="text"
                data-src
                @click="commandFill('cellIdx0', '文书号', 'TextItem')"
                >{{letData.cellIdx0}}</td>
              <td class="textAlignLeft ">（</td>
                <td
                class="cellInput "
                id="cell_idx_1"
                align="center"
                style="width:15%"
                data-title="文书号"
                data-type="text"
                data-src
                @click="commandFill('cellIdx1', '文书号', 'TextItem')"
                >{{letData.cellIdx1}}</td>
              <td class="textAlignLeft ">）煤安送〔</td>
              <td
                class="cellInput "
                id="cell_idx_2"
                align="center"
                style="width:9%"
                data-title="文书号"
                data-type="text"
                data-src
                @click="commandFill('cellIdx2', '文书号', 'TextItem')"
                >{{letData.cellIdx2}}</td>
              <td class="textAlignLeft ">〕</td>
              <td
                class="cellInput "
                id="cell_idx_3"
                align="center"
                style="width:12%"
                data-title="文书号"
                data-type="text"
                data-src
                @click="commandFill('cellIdx3', '文书号', 'TextItem')"
                >{{letData.cellIdx3}}</td>
              <td class="textAlignLeft ">号&nbsp;&nbsp;</td>
            </tr>
          </table>
          <table height="60"></table>
          <table style="border:solid 0px #000;" class="docBody">
            <tr>
              <td
                class="textAlignLeft"
                style="width:12%"
              >送达文书：</td>
              <td
                class="cellInput cellBottomLine"
                id="cell_idx_4"
                align="center"
                style="width:88%"
                data-title="送达文书"
                data-type="text"
                data-src
                @click="commandFill('cellIdx4', '送达文书', 'TextItem')"
                >{{letData.cellIdx4}}</td>
            </tr>
            <tr>
              <td
                class="textAlignLeft"
                style="width:12%"
              >文书编号：</td>
              <td
                class="cellInput cellBottomLine"
                id="cell_idx_5"
                align="center"
                style="width:88%"
                data-title="文书字号"
                data-type="text"
                data-src
                @click="commandFill('cellIdx5', '文书字号', 'TextItem')"
                >{{letData.cellIdx5}}</td>
            </tr>
            <tr>
              <td
                class="textAlignLeft"
                style="width:12%"
              >送达地点：</td>
              <td
                class="cellInput cellBottomLine"
                id="cell_idx_6"
                align="center"
                style="width:88%"
                data-title="送达地点"
                data-type="text"
                data-src
                @click="commandFill('cellIdx6', '送达地点', 'TextItem')"
                >{{letData.cellIdx6}}</td>
            </tr>
            <tr>
              <td
                class="textAlignLeft"
                style="width:12%"
              >送达方式：</td>
              <td
                class="cellInput cellBottomLine"
                id="cell_idx_7"
                align="center"
                style="width:88%"
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
                style="width:38%"
              >受送达单位负责人（个人）（签名）：</td>
              <td
                class="cellInput cellBottomLine"
                id="cell_idx_8"
                align="center"
                style="width:26%"
                data-title="签名"
                data-type="text"
                data-src
                @click="commandFill('cellIdx8', '受送达单位负责人（个人）（签名）', 'TextItem')"
                >{{letData.cellIdx8}}</td>
              <td class="textAlignLeft"   style="width:10%">&nbsp;&nbsp;日&nbsp;期：</td>
              <td
                class="cellInput cellBottomLine"
                id="cell_idx_9"
                align="center"
                style="width:26%"
                data-title="日期"
                data-type="text"
                data-src
                @click="commandFill('cellIdx9', '日期', 'DateItem')"
                >{{letData.cellIdx9}}</td>
            </tr>
            <tr>
              <td
                class="textAlignLeft"
                style="width:18%"
              >送达人（签名）：</td>
              <td
                class="cellInput cellBottomLine"
                id="cell_idx_10"
                align="center"
                style="width:46%"
                data-title="送达人（签名）"
                data-type="text"
                data-src
                 @click="commandFill('cellIdx10', '送达人（签名）', 'TextItem')"
                >{{letData.cellIdx10}}</td>
              <td class="textAlignLeft"  style="width:10%">&nbsp;&nbsp;日&nbsp;期：</td>
              <td
                class="cellInput cellBottomLine"
                id="cell_idx_11"
                align="center"
                style="width:26%"
                data-title="日期"
                data-type="text"
                data-src
                @click="commandFill('cellIdx11', '日期', 'DateItem')"
                >{{letData.cellIdx11}}</td>
            </tr>
          </table>
         <table height="90"></table>
          <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_12"
                  align="right"
                  style="width:95%"
                  @click="commandFill('cellIdx12', '', 'TextItem')"
                >{{letData.cellIdx12 ? letData.cellIdx12 : '（点击编辑）'}}</td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_13"
                  align="right"
                  style="width:95%"
                  data-title
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx13', '日期', 'DateItem')"
                >{{letData.cellIdx13 ? letData.cellIdx13 : '（点击编辑）'}}</td>
              </tr>
            </table>
        </div>
      </div>
    </let-main>
  </div>
</template>

<script>
import letMain from "@/views/make-law-writ/components/let-main.vue";
import GoDB from "@/utils/godb.min.js";
import { getDocNumber } from '@/utils/setInitPaperData'
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
      const db = new GoDB(this.$store.state.DBName);
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
          item.caseId === caseId && item.paperType === this.docData.docTypeNo && item.delFlag !== '1'
        );
      });
      // 已做文书则展示文书内容，否则创建初始版本
      if (checkPaper.length > 0) {
        // 回显
        this.letData = JSON.parse(checkPaper[0].paperContent);
        this.editData = checkPaper[0];
      } else {
        // 创建初始版本
        // 1.送达文书：国家煤矿安全监管行政处罚决定书
        let cellIdx4String = '国家煤矿安全监管行政处罚决定书'
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
          cellIdx8: null, // 受送达单位负责人（个人）（签名）
          cellIdx9: null, // 日期
          cellIdx10: null, // 送达人（签名）
          cellIdx11: null, // 日期
          cellIdx12: null, //
          cellIdx13: null, // 日期
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