<!-- 行政强制  行政强制执行  行政执法有关事项审批报告 55 -->
<template>
  <div style="width: 100%; height: 100%;">
    <let-main
      ref="letMain"
      :corp-data="corpData"
      :doc-data="docData"
      :let-data="letData"
      :paper-data="paperData"
      @go-back="goBack"
    >
      <div slot="left">
        <div class="page page-sizeA4">
          <div>
            <div class="stdRowH"></div>
            <div class="textAlignCenter formHeader2">
              国 家 矿 山 安 全 监 察
              <br />
            </div>
            <div class="textAlignCenter formHeader4">行政执法有关事项审批报告</div>
            <div class="docTextLine paper-number-div">
              <div>
                <label>编号：</label>
                <span
                  class="line"
                  @click="commandFill('cellIdx1', '编号', 'TextItem')"
                >{{ letData.cellIdx1 ? letData.cellIdx1 : '（点击编辑）' }}</span>
              </div>
            </div>
            <div class="docTextarea">
              <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;案&nbsp;&nbsp;&nbsp;由：</span>
              <span
                @click="commandFill('cellIdx2', '案由', 'TextareaItem')"
              >{{ letData.cellIdx2 ? letData.cellIdx2 : '（点击编辑）' }}</span>
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;审批事项：</span>
              <span
                @click="commandFill('cellIdx3', '审批事项', 'TextareaItem')"
              >{{ letData.cellIdx3 ? letData.cellIdx3 : '（点击编辑）' }}</span>
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;行政相对人基本情况：</span>
              <span
                @click="commandFill('cellIdx4', '行政相对人基本情况', 'TextareaItem')"
              >{{ letData.cellIdx4 ? letData.cellIdx4 : '（点击编辑）' }}</span>
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;案情摘要：</span>
              <span
                @click="commandFill('cellIdx5', '案情摘要', 'TextareaItem')"
              >{{ letData.cellIdx5 ? letData.cellIdx5 : '（点击编辑）' }}</span>
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;提请审批的理由及依据：</span>
              <span
                @click="commandFill('cellIdx6', '提请审批的理由及依据', 'TextareaItem')"
              >{{ letData.cellIdx6 ? letData.cellIdx6 : '（点击编辑）' }}</span>
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;承办人意见：</span>
              <span
                @click="commandFill('cellIdx7', '承办人意见', 'TextareaItem')"
              >{{ letData.cellIdx7 ? letData.cellIdx7 : '（点击编辑）' }}</span>
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line" style="width:28%">&nbsp;&nbsp;&nbsp;&nbsp;承办人（签名）：</span>
              <span style="display:inline-block;min-width:35%;line-height: normal;max-width:35%" @click="commandFill('cellIdx8', '承办人（签名）', 'TextItem')"
                >{{ letData.cellIdx8 ? letData.cellIdx8 : "（点击编辑）" }}
              </span>
              <span class="no-line" style="width:12%">日&nbsp;&nbsp;&nbsp;&nbsp;期:</span>
              <span style="display:inline-block;min-width:20%;line-height: normal;max-width:20%" @click="commandFill('cellIdx9', '日期', 'DateItem')">{{
                letData.cellIdx9 ? letData.cellIdx9 : "（点击编辑）"
              }}</span>
            </div>
            <div class="docTextarea">
              <span class="no-line" style="width:28%">&nbsp;</span>
              <span style="display:inline-block;min-width:35%;line-height: normal;max-width:35%" @click="commandFill('cellIdx10', '承办人（签名）', 'TextItem')"
                >{{ letData.cellIdx10 ? letData.cellIdx10 : "（点击编辑）" }}
              </span>
              <span class="no-line" style="width:12%">日&nbsp;&nbsp;&nbsp;&nbsp;期:</span>
              <span style="display:inline-block;min-width:20%;line-height: normal;max-width:20%" @click="commandFill('cellIdx11', '日期', 'DateItem')">{{
                letData.cellIdx11 ? letData.cellIdx11 : "（点击编辑）"
              }}</span>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:43%">
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;分管负责人意见：</span>
                <span @click="commandFill('cellIdx12', '分管负责人意见', 'TextItem')"
                  >{{ letData.cellIdx12 ? letData.cellIdx12 : "（编辑）" }}
                </span>
              </div>
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;签名：</span>
                <span @click="commandFill('cellIdx13', '签名', 'TextItem')">{{
                  letData.cellIdx13 ? letData.cellIdx13 : "（编辑）"
                }}</span>
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;日期：</span>
                <span @click="commandFill('cellIdx14', '日期', 'DateItem')">{{
                  letData.cellIdx14 ? letData.cellIdx14 : "（编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:43%">
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;主要负责人意见：</span>
                <span @click="commandFill('cellIdx15', '主要负责人意见', 'TextItem')"
                  >{{ letData.cellIdx15 ? letData.cellIdx15 : "（编辑）" }}
                </span>
              </div>
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;签名：</span>
                <span @click="commandFill('cellIdx16', '签名', 'TextItem')">{{
                  letData.cellIdx16 ? letData.cellIdx16 : "（编辑）"
                }}</span>
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;日期：</span>
                <span @click="commandFill('cellIdx17', '日期', 'DateItem')">{{
                  letData.cellIdx17 ? letData.cellIdx17 : "（编辑）"
                }}</span>
                <div class="line"></div>
                <div class="line1"></div>
            </div>
            <!-- <table class="docBody" style="margin-top: 30px;">
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
            </table> -->
          </div>
        </div>
      </div>
    </let-main>
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
import GoDB from "@/utils/godb.min.js";
import { getDangerObject, getDocNumber } from "@/utils/setInitPaperData";
import associationSelectPaper from '@/components/association-select-paper'

export default {
  name: "Let408",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {
        cellIdx0: null, // 暂不用
        cellIdx1: null, // 编号
        cellIdx2: null, // 案由
        cellIdx3: null, // 审批事项
        cellIdx4: null, // 行政相对人基本情况
        cellIdx5: null, // 案情摘要
        cellIdx6: null, // 提请审批的理由及依据
        cellIdx7: null, // 承办人意见
        cellIdx8: null, // 承办人（签名)
        cellIdx9: null, // 日期
        cellIdx10: null, // 承办人（签名）)
        cellIdx11: null, // 日期
        cellIdx12: null, // 被检查单位意见
        cellIdx13: null, // 单位负责人（签名)
        cellIdx14: null, // 日期
        cellIdx15: null, // 被检查单位意见
        cellIdx16: null, // 单位负责人（签名)
        cellIdx17: null, // 日期
        cellIdx18: null, //
        cellIdx19: null, // 日期
        DangerTable: null,
        associationPaperId: {},
      },
      options: {},
      associationPaper: ['4']
    };
  },
  methods: {
    async initLetData (selectedPaper) {
      let db = new GoDB(this.$store.state.DBName);
      let corpBase = db.table("corpBase");
      let corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      // 1.生成文书编号
      let { num0, num1, num3, num4 } = await getDocNumber(
        db,
        this.docData.docTypeNo,
        this.corpData.caseId
      );
      // 2.发现你矿存在：隐患描述
      // 获取笔录文书中的隐患数据 调整为立案决定书中的案由字段cellIdx4
      // let let1DataPaperContent = JSON.parse(selectedPaper.let1Data.paperContent);
      // let dangerObject = getDangerObject(
      //   let1DataPaperContent.DangerTable.tableData,
      //   { danger: true }
      // );
      // let cellIdx2String = `${corp.corpName}涉嫌${dangerObject.dangerString}案。`;
      // let cellIdx10String = dangerObject.onsiteDescString;
      let let4DataPaperContent = JSON.parse(selectedPaper.let4Data.paperContent);

      await db.close();
      this.letData = Object.assign({}, this.letData, {
        cellIdx2: let4DataPaperContent.cellIdx4, // 案由
        cellIdx18: this.$store.state.curCase.provinceGroupName, //
        cellIdx19: this.todayDate, // 日期
      })
    },
    goBack({ page, data }) {
      // 返回选择企业
      this.$emit("go-back", { page, data });
    },
    commandFill(key, title, type) {
      // 判断是否可编辑
      if (this.$refs.letMain.canEdit) {
        // 文书各个字段点击打开左侧弹出编辑窗口
        let dataKey = `${key}`;
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