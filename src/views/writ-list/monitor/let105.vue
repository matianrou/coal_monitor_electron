<!-- 现场检查 复查 隐患整改 询问通知书 有问题-->
<template>
  <div style="width: 100%; height: 100%">
    <let-main
      ref="letMain"
      :corp-data="corpData"
      :doc-data="docData"
      :let-data="letData"
      :edit-data="paperData"
      @go-back="goBack"
    >
      <div slot="left">
        <div class="page page-sizeA4">
          <div>
            <div class="stdRowH"></div>
            <div class="textAlignCenter formHeader1">安全生产行政执法文书</div>
            <div class="textAlignCenter formHeader2">询问通知书</div>
            <div class="docTextLine paper-number-div">
              <div>
                <span @click="commandFill('cellIdx0', '', 'TextItem')">{{
                  letData.cellIdx0 ? letData.cellIdx0 : "（编辑）"
                }}</span>
                <label>应急询〔</label>
                <span @click="commandFill('cellIdx1', '', 'TextItem')">{{
                  letData.cellIdx1 ? letData.cellIdx1 : "（编辑）"
                }}</span>
                <label>〕</label>
                <span @click="commandFill('cellIdx2', '', 'TextItem')">{{
                  letData.cellIdx2 ? letData.cellIdx2 : "（编辑）"
                }}</span>
                <label>号</label>
              </div>
            </div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  style="width: 320px"
                  id="cell_idx_3"
                >
                  {{ letData.cellIdx3 }}
                </td>
                <td>：</td>
              </tr>
            </table>
            <div class="docTextarea">
              <label style="width: 5%"></label>
              因
              <span @click="commandFill('cellIdx4', '', 'TextItem')">{{
                letData.cellIdx4 ? letData.cellIdx4 : "（点击编辑）"
              }}</span>
              ，请你（单位）于
              <span @click="commandFill('cellIdx5', '', 'DatetimeItem')">{{
                letData.cellIdx5 ? letData.cellIdx5 : "（点击编辑）"
              }}</span>
              到
              <span @click="commandFill('cellIdx6', '', 'TextItem')">{{
                letData.cellIdx6 ? letData.cellIdx6 : "（点击编辑）"
              }}</span>
              接受询问调查，来时请携带下列证件材料（见打√处）：
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div
                class="cellInput"
                id="cell_idx_7"
                @click="commandFill('cellIdx7', '身份证', 'SelectItem')"
              >
                {{ letData.cellIdx7 ? letData.cellIdx7 : "□" }}身份证
              </div>
              <div
                class="cellInput"
                id="cell_idx_8"
                @click="commandFill('cellIdx8', '营业执照', 'SelectItem')"
              >
                {{ letData.cellIdx8 ? letData.cellIdx8 : "□" }}营业执照
              </div>
              <div
                class="cellInput"
                id="cell_idx_9"
                @click="
                  commandFill(
                    'cellIdx9',
                    '法定代表人身份证明或者委托书',
                    'SelectItem'
                  )
                "
              >
                {{
                  letData.cellIdx9 ? letData.cellIdx9 : "□"
                }}法定代表人身份证明或者委托书
              </div>
              <div
                class="cellInput"
                id="cell_idx_10"
                @click="commandFill('cellIdx10', '其它', 'SelectItem')"
              >
                {{ letData.cellIdx10 ? letData.cellIdx10 : "□" }}其它
              </div>
              如无法按时前来，请及时联系。
            </div>
            <div class="docTextarea">
              <span class="no-line">应急管理部门地址：</span>
              <span
                @click="commandFill('cellIdx11', '应急管理部门地址', 'TextItem')">{{
                  letData.cellIdx11 ? letData.cellIdx11 : "（点击编辑）"}}</span>
              <div class="line"></div>
            </div>
            <div class="docTextLine">
              <div style="flex: 1; display: flex">
                <label>联系人：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx12', '联系人', 'TextItem')"
                >
                  {{ letData.cellIdx12 ? letData.cellIdx12 : "（点击编辑）" }}
                </div>
              </div>
              <div style="flex: 1; display: flex">
                <label>联系电话：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx13', '联系电话', 'TextItem')"
                >
                  {{ letData.cellIdx13 ? letData.cellIdx13 : "（点击编辑）" }}
                </div>
              </div>
            </div>
            <table height="30"></table>
            <table class="docBody">
              <tr>
                <td style="width: 410px">&nbsp;</td>
                <td
                  style="width: 250px"
                  class="cellInput textAlignRight"
                  id="cell_idx_14"
                >
                  {{ letData.cellIdx14 }}
                </td>
                <td
                  style="width: 100px; padding-right: 16px"
                  class="textAlignCenter"
                >
                  （印章）
                </td>
              </tr>
            </table>
            <table height="30"></table>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_15"
                  align="right"
                  style="width: 95%"
                  data-title
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx15', '日期', 'DateItem')"
                >
                  {{ letData.cellIdx15 ? letData.cellIdx15 : "（点击编辑）" }}
                </td>
              </tr>
            </table>
            <table height="60"></table>
            <div class="docFooter">
              <div
                style="
                  margin-top: 4px;
                  width: 98%;
                  height: 24px;
                  line-height: 30px;
                  padding-left: 16px;
                "
              >
                本文书一式两份：一份由应急管理部门备案，一份交被询问人。
              </div>
            </div>
          </div>
        </div>
      </div>
    </let-main>
  </div>
</template>

<script>
import letMain from "@/views/make-law-writ/components/let-main.vue";
import { getDocNumber } from "@/utils/setInitPaperData";
import GoDB from "@/utils/godb.min.js";
const toggleDictionary = [
  {
    value: "□",
    name: "□",
  },
  {
    value: "√",
    name: "√",
  },
];
export default {
  name: "Let105",
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
          toggleDictionary: {},
        };
      },
    },
    paperData: {
      type: Object,
      default: () => {},
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
      options: {
        cellIdx7: toggleDictionary, // 身份证
        cellIdx8: toggleDictionary, // 营业执照
        cellIdx9: toggleDictionary, // 法定代表人身份证明或者委托书
        cellIdx10: toggleDictionary, // 其它
      },
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
    "paperData.paperId"(val) {
      this.initData();
    },
  },
  methods: {
    async initData() {
      // 初始化文书内容
      if (this.paperData && this.paperData.paperId) {
        this.letData = JSON.parse(this.paperData.paperContent);
      } else {
        // 创建初始版本
        const db = new GoDB(this.$store.state.DBName);
        const corpBase = db.table("corpBase");
        //查询符合条件的记录
        const corp = await corpBase.find((item) => {
          return item.corpId == this.corpData.corpId;
        });
      /* const wkPaper = db.table("wkPaper");
      const caseId = this.corpData.caseId;
      const checkPaper = await wkPaper.findAll((item) => {
        return (
          item.caseId === caseId &&
          item.paperType === this.docData.docTypeNo &&
          item.delFlag !== "1"
        );
      });
      if (checkPaper.length > 0) {
        // 回显
        this.letData = JSON.parse(checkPaper[0].paperContent);
        this.editData = checkPaper[0];
      } else { */
        // 创建初始版本
        await db.close();
        this.letData = {
          cellIdx0: null, // shortName
          cellIdx1: null, // year
          cellIdx2: null, // DOCNUMBER
          cellIdx3: corp.corpName ? corp.corpName : null, // corpname
          cellIdx4: null, //
          cellIdx5: null, //
          cellIdx6: null, //
          cellIdx7: "□", // 身份证
          cellIdx8: "□", // 营业执照
          cellIdx9: "□", // 法定代表人身份证明或者委托书
          cellIdx10: "□", // 其它
          cellIdx11: null, //
          cellIdx12: null, // 应急管理部门地址
          cellIdx13: null, // 联系人
          cellIdx14: null, // 联系电话
          cellIdx15: null, // orgName 机构名称
          cellIdx16: null, // 日期
        };
      }
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