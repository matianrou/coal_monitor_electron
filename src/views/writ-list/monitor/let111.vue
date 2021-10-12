<!-- 现场检查 实施检查 解除查封(扣押决定书) -->
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
            <div class="textAlignCenter formHeader0">
              国 家 煤 矿 安 全 监 察
            </div>
            <div class="textAlignCenter formHeader3">
              <table class="docBody">
                <tr>
                  <td class="textAlignLeft">解除</td>
                  <td
                    class="cellInput"
                    id="cell_idx_0"
                    style="width: 15%"
                    data-title="查封(扣押)"
                    data-type="text"
                    data-src
                    @click="commandFill('cellIdx0', '查封(扣押)', 'TextItem')"
                  >
                    {{ letData.cellIdx0 }}
                  </td>
                  <td class="textAlignLeft">决定书</td>
                </tr>
              </table>
            </div>
            <div class="docTextLine paper-number-div">
              <div>
                <span @click="commandFill('cellIdx1', '', 'TextItem')">{{
                  letData.cellIdx1 ? letData.cellIdx1 : "（编辑）"
                }}</span>
                <label>煤安监</label>
                <span @click="commandFill('cellIdx2', '', 'TextItem')">{{
                  letData.cellIdx2 ? letData.cellIdx2 : "（编辑）"
                }}</span>
                <label>解</label>
                <span @click="commandFill('cellIdx3', '', 'TextItem')">{{
                  letData.cellIdx3 ? letData.cellIdx3 : "（编辑）"
                }}</span>
                <label>〔</label>
                <span @click="commandFill('cellIdx4', '', 'TextItem')">{{
                  letData.cellIdx4 ? letData.cellIdx4 : "（编辑）"
                }}</span>
                <label>〕</label>
                <span @click="commandFill('cellIdx5', '', 'TextItem')">{{
                  letData.cellIdx5 ? letData.cellIdx5 : "（编辑）"
                }}</span>
                <label>号</label>
              </div>
            </div>

            <table class="docBody">
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_6"
                  style="width: 62%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx6', '', 'TextItem')"
                >
                  {{ letData.cellIdx6 }}
                </td>
                <td class="textAlignLeft">:</td>
              </tr>
            </table>
            <div class="docTextarea">
              <label style="width: 5%"></label>
              我
              <span
                class="no-underline"
                @click="commandFill('cellIdx7', '', 'TextItem')"
                >{{
                  letData.cellIdx7 ? letData.cellIdx7 : "（点击编辑）"
                }}</span
              >
              于
              <span @click="commandFill('cellIdx8', '年', 'TextItem')">{{
                letData.cellIdx8 ? letData.cellIdx8 : "（XX）"
              }}</span>
              年
              <span @click="commandFill('cellIdx9', '月', 'TextItem')">{{
                letData.cellIdx9 ? letData.cellIdx9 : "（XX）"
              }}</span>
              月
              <span @click="commandFill('cellIdx10', '日', 'TextItem')">{{
                letData.cellIdx10 ? letData.cellIdx10 : "（XX）"
              }}</span>
              日向你
              <span
                class="no-underline"
                @click="commandFill('cellIdx11', '', 'TextItem')"
                >{{
                  letData.cellIdx11 ? letData.cellIdx11 : "（点击编辑）"
                }}</span
              >
              作出《
              <span
                class="no-underline"
                @click="commandFill('cellIdx12', '', 'TextItem')"
                >{{ letData.cellIdx12 ? letData.cellIdx12 : "（编辑）" }}</span
              >
              决定书》（
              <span
                class="no-underline"
                @click="commandFill('cellIdx13', '', 'TextItem')"
                >{{ letData.cellIdx13 ? letData.cellIdx13 : "（编辑）" }}</span
              >
              煤安监
              <span
                class="no-underline"
                @click="commandFill('cellIdx14', '', 'TextItem')"
                >{{ letData.cellIdx14 ? letData.cellIdx14 : "（编辑）" }}</span
              >
              <span
                class="no-underline"
                @click="commandFill('cellIdx15', '', 'TextItem')"
                >{{ letData.cellIdx15 ? letData.cellIdx15 : "（编辑）" }}</span
              >
              〔
              <span
                class="no-underline"
                @click="commandFill('cellIdx16', '', 'TextItem')"
                >{{
                  letData.cellIdx16 ? letData.cellIdx16 : "（点击编辑）"
                }}</span
              >
              〕
              <span
                class="no-underline"
                @click="commandFill('cellIdx17', '', 'TextItem')"
                >{{
                  letData.cellIdx17 ? letData.cellIdx17 : "（点击编辑）"
                }}</span
              >
              号），对所附《物品清单》所列物品予以
              <span
                class="no-underline"
                @click="commandFill('cellIdx18', '', 'TextItem')"
                >{{
                  letData.cellIdx18 ? letData.cellIdx18 : "（点击编辑）"
                }}</span
              >
              ，现根据《中华人民共和国行政强制法》第二十八条第一款第
              <span @click="commandFill('cellIdx19', '', 'TextItem')">{{
                letData.cellIdx19 ? letData.cellIdx19 : "（点击编辑）"
              }}</span>
              项的规定，予以
              <span
                class="no-underline"
                @click="commandFill('cellIdx20', '', 'TextItem')"
                >{{
                  letData.cellIdx20 ? letData.cellIdx20 : "（点击编辑）"
                }}</span
              >
              解除
              <span
                class="no-underline"
                @click="commandFill('cellIdx21', '', 'TextItem')"
                >{{
                  letData.cellIdx21 ? letData.cellIdx21 : "（点击编辑）"
                }}</span
              >
              （详见《物品清单》）。
            </div>
            <table height="30"></table>
            <div class="docTextLine">
              <label style="width: 7%"></label>
              <label>附件：</label>
              <div
                class="no-line-div"
                @click="
                  commandFill(
                    'cellIdx22',
                    '先行登记保存证据清单',
                    'SamplingForensicsTable'
                  )
                "
              >
                物品清单
              </div>
            </div>
            <table height="30"></table>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_23"
                  align="right"
                  style="width: 95%"
                  @click="commandFill('cellIdx23', '', 'TextItem')"
                >
                  {{ letData.cellIdx23 ? letData.cellIdx23 : "（点击编辑）" }}
                </td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_24"
                  align="right"
                  style="width: 95%"
                  data-title
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx24', '日期', 'DateItem')"
                >
                  {{ letData.cellIdx24 ? letData.cellIdx24 : "（点击编辑）" }}
                </td>
              </tr>
            </table>
            <table height="60"></table>
            <div class="docTextarea cellLine">
              <label style="width: 5%"></label>
              &nbsp;&nbsp;&nbsp;&nbsp;备注：本文书一式两份，一份交被解除
              <span
                style="border-bottom: none"
                @click="commandFill('cellIdx25', '', 'TextItem')"
                >{{
                  letData.cellIdx25 ? letData.cellIdx25 : "（点击编辑）"
                }}</span
              >
              单位，一份存档。
            </div>
          </div>
        </div>
      </div>
    </let-main>
    <el-dialog
      title="文书信息选择"
      :close-on-click-modal="false"
      append-to-body
      :visible="visibleSelectDialog"
      width="400px"
      :show-close="false"
    >
      <span>请选择：</span>
      <el-radio-group v-model="selectedType">
        <el-radio label="查封">查封</el-radio>
        <el-radio label="扣押">扣押</el-radio>
      </el-radio-group>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="confirm">确定</el-button>
      </span>
    </el-dialog>
    <!-- 关联文书选择 -->
    <select-paper
      :visible="visible.selectPaper"
      title="关联文书选择"
      :paper-list="paperList"
      @close="closeDialog"
      @confirm-paper="confirmPaper"
    ></select-paper>
  </div>
</template>

<script>
// import letMain from "@/views/make-law-writ/components/let-main.vue";
import GoDB from "@/utils/godb.min.js";
import { getDangerObject, getDocNumber } from "@/utils/setInitPaperData";
import associationSelectPaper from "@/components/association-select-paper";
export default {
  name: "Let111",
  mixins: [associationSelectPaper],
  /*   props: {
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
  }, */
  data() {
    return {
      letData: {},
      options: {
        cellIdx20: [
          {
            value: "全部",
            name: "全部",
          },
          {
            value: "部分",
            name: "部分",
          },
        ],
      },
      // editData: {}, // 回显数据
      visibleSelectDialog: false,
      selectedType: "查封",
      associationPaper: ["1"],
    };
  },
  /*   created() {
    this.initData();
  },
  watch: {
    "corpData.corpId"(val) {
      if (val) {
        this.initData();
      }
    },
  }, */
  methods: {
    async initLetData(selectedPaper) {
      const db = new GoDB(this.$store.state.DBName);
      const corpBase = db.table("corpBase");
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
      } else {
        // 创建初始版本 */
      // 1.弹出提示框，选择查封或扣押
      this.visibleSelectDialog = true;
      // 2.生成文书编号
      let { num0, num1, num3, num4 } = await getDocNumber(
        db,
        this.docData.docTypeNo,
        this.corpData.caseId,
        this.$store.state.user
      );
      // 3.获取查封（扣押）决定书的日期和编号
      /*   const let110Data = await wkPaper.find((item) => {
          return item.caseId === caseId && item.paperType === "32";
        });
        let let110DataPapaerContent = JSON.parse(let110Data.paperContent);
        let date = let110DataPapaerContent.cellIdx20;
        date = date.replace("年", "-").replace("月", "-").replace("日", "-");
        let dateList = date.split("-"); */
             let let1DataPapaerContent = JSON.parse(selectedPaper.let1Data.paperContent)
      // 2.时间
        let now = new Date();
        let cellIdx8Year = now.getFullYear();
        let cellIdx9Month = now.getMonth() + 1;
        let cellIdx10Date = now.getDate();
      // 文书编号：
      let cellIdx13String = let1DataPapaerContent.cellIdx1;
      let cellIdx14String = let1DataPapaerContent.cellIdx2;
      let cellIdx16String = let1DataPapaerContent.cellIdx3;
      let cellIdx17String = let1DataPapaerContent.cellIdx4;
      await db.close();
      this.letData = {
        cellIdx0: null, // 查封(扣押)
        cellIdx1: num0, // 文书号
        cellIdx1TypeTextItem: num0, // 文书号
        cellIdx2: num1, // 文书号
        cellIdx2TypeTextItem: num1, // 文书号
        cellIdx3: null, // 查/扣
        cellIdx3TypeTextItem: null, // 查/扣
        cellIdx4: num3, // 文书号
        cellIdx4TypeTextItem: num3, // 文书号
        cellIdx5: num4, // 文书号
        cellIdx5TypeTextItem: num4, // 文书号
        cellIdx6: corp.corpName ? corp.corpName : null, // corpname
        cellIdx6TypeTextItem: corp.corpName ? corp.corpName : null, // corpname
        cellIdx7: null, // 单位
        cellIdx8: cellIdx8Year, // 年
        cellIdx8TypeTextItem: cellIdx8Year, // 年
        cellIdx9: cellIdx9Month, // 月
        cellIdx9TypeTextItem: cellIdx9Month, // 月
        cellIdx10: cellIdx10Date, // 日
        cellIdx10TypeTextItem: cellIdx10Date, // 日
        cellIdx11: null, // 单位/个人
        cellIdx12: null, // 查封(扣押)
        cellIdx13: cellIdx13String, // 文书号
        cellIdx13TypeTextItem: cellIdx13String, // 文书号
        cellIdx14: cellIdx14String, // 文书号
        cellIdx14TypeTextItem: cellIdx14String, // 文书号
        cellIdx15: null, // 查/扣
        cellIdx16: cellIdx16String, // 文书号
        cellIdx16TypeTextItem: cellIdx16String, // 文书号
        cellIdx17: cellIdx17String, // 文书号
        cellIdx17TypeTextItem: cellIdx17String, // 文书号
        cellIdx18: null, // 查封(扣押)
        cellIdx19: null, // 第X项的规定
        cellIdx20: null, // 全部/部分
        cellIdx21: null, // 查封(扣押)
        cellIdx22: null, // 附件
        cellIdx23: null, //
        cellIdx24: null, // 日期
        cellIdx25: null, //
        dangerItemObject: let1DataPapaerContent.dangerItemObject,
        SamplingForensicsTable: {
          tableData: [],
          signature: null,
          signDate: "",
        },
      };
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
        if (key === "cellIdx22") {
          this.options[key] = {
            canEdit: true,
            page: "34", // 物品清单
            name: this.letData.selectedType,
          };
          dataKey = "SamplingForensicsTable";
        }
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
    confirm() {
      // 选择单位或个人
      this.visibleSelectDialog = false;
      this.letData.cellIdx0 = this.selectedType;
      this.letData.cellIdx0TypeTextItem = this.selectedType;
      this.letData.cellIdx3 = this.selectedType.substring(0, 1);
      this.letData.cellIdx3TypeTextItem = this.selectedType.substring(0, 1);
      this.letData.cellIdx12 = this.selectedType;
      this.letData.cellIdx12TypeTextItem = this.selectedType;
      this.letData.cellIdx15 = this.selectedType.substring(0, 1);
      this.letData.cellIdx15TypeTextItem = this.selectedType.substring(0, 1);
      this.letData.cellIdx18 = this.selectedType;
      this.letData.cellIdx18TypeTextItem = this.selectedType;
      this.letData.cellIdx21 = this.selectedType;
      this.letData.cellIdx21TypeTextItem = this.selectedType;
      this.letData.selectedType = this.selectedType;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/let";
</style>