<!-- 其他 其他 移送案件呈报书 -->
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
              国 家 煤 矿 安 全 监 察
              <br />
            </div>
            <div class="textAlignCenter formHeader3">移 送 案 件 呈 报 书</div>
            <div class="stdRowH"></div>
            <table class="docBody">
              <tr>
                <td class="cellInput" id="cell_idx_0" align="right" style="width:70%">{{letData.cellIdx0}}</td>
                <td class="textAlignLeft">编号：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_1"
                  contenteditable="true"
                  align="center"
                  style="width:20%"
                  data-title="编号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx1', '编号', 'TextItem')"
                >{{letData.cellIdx1}}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">案&nbsp;&nbsp;由：</td>
              </tr>
            </table>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              id="cell_idx_2"
              data-title="案由"
              data-type="textarea"
              data-src
              @click="commandFill('cellIdx2', '案由', 'TextareaItem')">
              <p class="show-area-item-p">
                <span style="padding: 7px;">{{ letData.cellIdx2 }}</span>
              </p>
            </div>
            <table style="border:solid 0px #000;" class="docBody">
              <tr>
                <td class="textAlignLeft">移送案件的理由和依据：</td>
              </tr>
            </table>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              id="cell_idx_3"
              data-title="理由和依据"
              data-type="textarea"
              data-src
              @click="commandFill('cellIdx3', '理由和依据', 'TextareaItem')">
              <p class="show-area-item-p">
                <span style="padding: 7px;">{{ letData.cellIdx3 }}</span>
              </p>
            </div>
            <table style="border:solid 0px #000;" class="docBody">
              <tr>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;根据《中华人民共和国安全生产法》第六十六条规定，建议将该案件移送</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_4"
                  contenteditable="true"
                  style="width:24%"
                  data-title="人民法院"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx4', '人民法院', 'TextItem')"
                >{{letData.cellIdx4}}</td>
              </tr>
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_5"
                  style="width:50%"
                  @click="commandFill('cellIdx5', '', 'TextItem')"
                >{{letData.cellIdx5}}</td>
                <td class="textAlignCenter">依法处理。</td>
              </tr>
            </table>
            <table height="60"></table>
            <table class="docBody">
              <tr>
                <td class="textAlignLeft">承办人（签名）：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_6"
                  contenteditable="true"
                  align="center"
                  style="width:46.5%"
                  data-title="承办人（签名）"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx6', '承办人（签名）', 'TextItem')"
                >{{letData.cellIdx6}}</td>
                <td class="textAlignCenter">&nbsp;&nbsp;&nbsp;&nbsp;日期：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_7"
                  contenteditable="true"
                  align="center"
                  style="width:20%"
                  data-title="日期"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx7', '日期', 'DateItem')"
                >{{letData.cellIdx7}}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">分管负责人意见：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_8"
                  contenteditable="true"
                  align="center"
                  style="width:20%"
                  data-title="分管负责人意见"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx8', '分管负责人意见', 'TextItem')"
                >{{letData.cellIdx8}}</td>
                <td class="textAlignCenter">&nbsp;签名：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_9"
                  contenteditable="true"
                  align="center"
                  style="width:20%"
                  data-title="签名"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx9', '签名', 'TextItem')"
                >{{letData.cellIdx9}}</td>
                <td class="textAlignCenter">&nbsp;&nbsp;&nbsp;&nbsp;日期：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_10"
                  contenteditable="true"
                  align="center"
                  style="width:20%"
                  data-title="日期"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx10', '日期', 'DateItem')"
                >{{letData.cellIdx10}}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">主要负责人意见：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_11"
                  contenteditable="true"
                  align="center"
                  style="width:20%"
                  data-title="主要负责人意见"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx11', '主要负责人意见', 'TextItem')"
                >{{letData.cellIdx11}}</td>
                <td class="textAlignCenter">&nbsp;签名：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_12"
                  contenteditable="true"
                  align="center"
                  style="width:20%"
                  data-title="签名"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx12', '签名', 'TextItem')"
                >{{letData.cellIdx12}}</td>
                <td class="textAlignCenter">&nbsp;&nbsp;&nbsp;&nbsp;日期：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_13"
                  contenteditable="true"
                  align="center"
                  style="width:20%"
                  data-title="日期"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx13', '日期', 'DateItem')"
                >{{letData.cellIdx13}}</td>
              </tr>
            </table>
            <table height="30"></table>
          </div>
        </div>
      </div>
    </let-main>
  </div>
</template>

<script>
import letMain from "./components/let-main";
import GoDB from "@/utils/godb.min.js";
import { getDangerObject, getDocNumber } from '@/utils/monitor/setInitPaperData'
export default {
  name: "Let400",
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
        // 1.案由：煤矿名称+隐患描述+“案”组成
        const let101Data = await wkPaper.find((item) => {
          return item.caseId === caseId && item.paperType === '1';
        });
        let let101DataPapaerContent = JSON.parse(let101Data.paperContent)
        let dangerObject = getDangerObject(let101DataPapaerContent.dangerItemObject.tableData)
        let cellIdx2String = `${corp.corpName}涉嫌${dangerObject.dangerString}案。`
        // 2.理由和依据
        // 1，移送案件的理由和依据：立案时间+“我分局对”+煤矿名称+“进行安全监察时，发现该矿”+隐患描述+“经分局执法人员初步调查取证，认定该行为涉嫌违反了《矿产资源法》第十七条规定。”
        // 立案时间：
        const let201Data = await wkPaper.find((item) => {
          return item.caseId === caseId && item.paperType === '4';
        });
        let let201DataPapaerContent = JSON.parse(let201Data.paperContent)
        let dangerObjectIndex = getDangerObject(let101DataPapaerContent.dangerItemObject.tableData, {danger: true})
        let cellIdx3String = `${let201DataPapaerContent.cellIdx6}年${let201DataPapaerContent.cellIdx7}月${let201DataPapaerContent.cellIdx8}日我分局对${corp.corpName}进行安全监察时，发现该矿${dangerObjectIndex.dangerString}。经分局执法人员初步调查取证，认定该行为涉嫌违反了《矿产资源法》第十七条规定。`
        // XXX国土资源局
        let cellIdx4String = 'XXX国土资源局'
        this.letData = {
          cellIdx0: null, //
          cellIdx1: null, // 编号
          cellIdx2: cellIdx2String, // 案由
          cellIdx2TypeTextareaItem: cellIdx2String, // 案由
          cellIdx3: cellIdx3String, // 理由和依据
          cellIdx3TypeTextareaItem: cellIdx3String, // 案由
          cellIdx4: cellIdx4String, // 人民法院
          cellIdx4TypeTextItem: cellIdx4String, // 人民法院
          cellIdx5: null, //
          cellIdx6: null, // 承办人（签名）
          cellIdx7: null, // 日期
          cellIdx8: null, // 分管负责人意见
          cellIdx9: null, // 签名
          cellIdx10: null, // 日期
          cellIdx11: null, // 主要负责人意见
          cellIdx12: null, // 签名
          cellIdx13: null, // 日期
        };
      }
      await db.close();
    },
    goBack({ page }) {
      // 返回选择企业
      this.$emit("go-back", { page });
    },
    commandFill (key, title, type) {
      // 判断是否可编辑
      if (this.$refs.letMain.canEdit) {
        // 文书各个字段点击打开左侧弹出编辑窗口
        let dataKey = `${key}Type${type}`
        this.$refs.letMain.commandFill(key, dataKey, title, type, this.letData[dataKey], this.options[key])
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/let";
</style>