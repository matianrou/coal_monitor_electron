<!-- 行政强制  行政强制执行  行政执法有关事项审批报告 -->
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
            <div class="textAlignCenter formHeader3">行政执法有关事项审批报告</div>
            <div class="stdRowH"></div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_0"
                  align="right"
                  style="width:62%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx0', '', 'TextItem')"
                >{{ letData.cellIdx0 }}</td>
                <td>编号：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_1"
                  align="center"
                  style="width:30%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx1', '编号', 'TextItem')"
                >{{ letData.cellIdx1 }}</td>
              </tr>
              <div class="docTextarea">
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;案&nbsp;&nbsp;&nbsp;由：</span>
                <span
                  @click="commandFill('cellIdx2', '案由', 'TextareaItem')"
                >{{ letData.cellIdx2 ? letData.cellIdx2 : '（点击编辑）' }}</span>
                <div class="line"></div>
              </div>
              <div class="docTextarea">
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;审批事项：</span>
                <span
                  @click="commandFill('cellIdx3', '审批事项', 'TextareaItem')"
                >{{ letData.cellIdx3 ? letData.cellIdx3 : '（点击编辑）' }}</span>
                <div class="line"></div>
              </div>
              <div class="docTextarea">
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;行政相对人基本情况：</span>
                <span
                  @click="commandFill('cellIdx4', '行政相对人基本情况', 'TextareaItem')"
                >{{ letData.cellIdx4 ? letData.cellIdx4 : '（点击编辑）' }}</span>
                <div class="line"></div>
              </div>
              <div class="docTextarea">
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;案情摘要：</span>
                <span
                  @click="commandFill('cellIdx5', '案情摘要', 'TextareaItem')"
                >{{ letData.cellIdx5 ? letData.cellIdx5 : '（点击编辑）' }}</span>
                <div class="line"></div>
              </div>
              <div class="docTextarea">
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;提请审批的理由及依据：</span>
                <span
                  @click="commandFill('cellIdx6', '提请审批的理由及依据', 'TextareaItem')"
                >{{ letData.cellIdx6 ? letData.cellIdx6 : '（点击编辑）' }}</span>
                <div class="line"></div>
              </div>
              <div class="docTextarea">
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;承办人意见：</span>
                <span
                  @click="commandFill('cellIdx7', '承办人意见', 'TextareaItem')"
                >{{ letData.cellIdx7 ? letData.cellIdx7 : '（点击编辑）' }}</span>
                <div class="line"></div>
              </div>
            </table>
            <table height="60"></table>
            <table class="docBody">
              <tr>
                <td style="width:5%"></td>
                <td class="textAlignLeft" style="width:17%">承办人（签名):</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_8"
                  align="center"
                  style="width:51.5%"
                  data-title="承办人（签名)"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx8', '承办人（签名)', 'TextItem')"
                >{{ letData.cellIdx8 }}</td>
                <td class="textAlignCenter" style="width:7%">日期：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_9"
                  align="center"
                  style="width:19%"
                  data-title="日期"
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx9', '日期', 'DateItem')"
                >{{ letData.cellIdx9 }}</td>
                <td style="width:22%"></td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_10"
                  align="center"
                  style="width:51.5%"
                  data-title="现场执法人员（签名)"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx10', '现场执法人员（签名)', 'TextItem')"
                >{{ letData.cellIdx10 }}</td>
                <td class="textAlignCenter" style="width:7%">日期：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_11"
                  align="center"
                  style="width:19%"
                  data-title="日期"
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx11', '日期', 'DateItem')"
                >{{ letData.cellIdx11 }}</td>
              </tr>
              <tr>
                <td style="width:5%"></td>
                <td class="textAlignLeft" style="width:18%">分管负责人意见：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_12"
                  align="center"
                  style="width:23%"
                  data-title="被检查单位意见"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx12', '被检查单位意见', 'TextItem')"
                >{{ letData.cellIdx12 }}</td>

                <td class="textAlignLeft" style="width:7%">签名：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_13"
                  align="center"
                  style="width:20%"
                  data-title="单位负责人（签名)"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx13', '单位负责人（签名)', 'TextItem')"
                >{{ letData.cellIdx13 }}</td>
                <td class="textAlignCenter" style="width:7%">日期：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_14"
                  align="center"
                  style="width:19%"
                  data-title="日期"
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx14', '日期', 'DateItem')"
                >{{ letData.cellIdx14 }}</td>
              </tr>
              <tr>
                <td style="width:5%"></td>
                <td class="textAlignLeft" style="width:18%">主要负责人意见：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_15"
                  align="center"
                  style="width:23%"
                  data-title="被检查单位意见"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx15', '被检查单位意见', 'TextItem')"
                >{{ letData.cellIdx15 }}</td>

                <td class="textAlignLeft" style="width:7%">签名：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_16"
                  align="center"
                  style="width:20%"
                  data-title="单位负责人（签名)"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx16', '单位负责人（签名)', 'TextItem')"
                >{{ letData.cellIdx16 }}</td>
                <td class="textAlignCenter" style="width:7%">日期：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_17"
                  align="center"
                  style="width:19%"
                  data-title="日期"
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx17', '日期', 'DateItem')"
                >{{ letData.cellIdx17 }}</td>
              </tr>
            </table>
            <table height="60"></table>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_18"
                  align="right"
                  style="width:95%"
                  @click="commandFill('cellIdx18', '', 'TextItem')"
                >{{ letData.cellIdx18 ? letData.cellIdx18 : '（点击编辑）' }}</td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_19"
                  align="right"
                  style="width:95%"
                  data-title
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx19', '日期', 'DateItem')"
                >{{ letData.cellIdx19 ? letData.cellIdx19 : '（点击编辑）' }}</td>
              </tr>
            </table>
            <!-- <table>
              <hr />
              <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;备注：本文书一式两份，一份交被复查单位，一份存档。</td>
            </table>-->
          </div>
        </div>
      </div>
    </let-main>
  </div>
</template>

<script>
import letMain from "@/views/make-law-writ/components/let-main.vue";
import GoDB from "@/utils/godb.min.js";
import { getDangerObject, getDocNumber } from "@/utils/setInitPaperData";

export default {
  name: "Let104",
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
          item.caseId === caseId && item.paperType === this.docData.docTypeNo && item.delFlag !== '1'
        );
      });
      // await wkPaper.delete(checkPaper[0].id)
      // 已做文书则展示文书内容，否则创建初始版本
      if (checkPaper.length > 0) {
        // 回显
        this.letData = JSON.parse(checkPaper[0].paperContent);
        this.editData = checkPaper[0];
      } else {
        // 创建初始版本
        // 1.生成文书编号
        let { num0, num1, num3, num4 } = await getDocNumber(
          db,
          this.docData.docTypeNo,
          caseId,
          this.$store.state.user
        );
        // 2.发现你矿存在：隐患描述
        // 获取笔录文书中的隐患数据
        const let101Data = await wkPaper.find((item) => {
          return item.caseId === caseId && item.paperType === "1";
        });
        let let101DataPapaerContent = JSON.parse(let101Data.paperContent);
        let dangerObject = getDangerObject(
          let101DataPapaerContent.dangerItemObject.tableData,
          { danger: true }
        );
        let cellIdx9String = dangerObject.dangerString;
        let cellIdx10String = dangerObject.onsiteDescString;
        this.letData = {
          cellIdx0: null, //
          cellIdx1: null, // 编号
          cellIdx2: null, // 案由
          cellIdx2TypeTextareaItem: null, // 案由
          cellIdx3: null, // 审批事项
          cellIdx4: null, // 行政相对人基本情况
          cellIdx5: null, // 案情摘要
          cellIdx6: null, // 提请审批的理由及依据
          cellIdx7: null, // 承办人意见
          cellIdx8: null, // 承办人（签名)
          cellIdx9: null, // 日期
          cellIdx10: null, // 现场执法人员（签名)
          cellIdx11: null, // 日期
          cellIdx12: null, // 被检查单位意见
          cellIdx13: null, // 单位负责人（签名)
          cellIdx14: null, // 日期
          cellIdx15: null, // 被检查单位意见
          cellIdx16: null, // 单位负责人（签名)
          cellIdx17: null, // 日期
          cellIdx18: null, //
          cellIdx19: null, // 日期
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