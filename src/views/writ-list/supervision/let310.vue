<!-- 行政强制  行政强制执行  行政执法有关事项审批报告 54 -->
<template>
  <div style="width: 100%; height: 100%;">
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
              煤矿安全监管行政执法文书
              <br />
            </div>
            <div class="textAlignCenter formHeader1">行政执法有关事项审批报告</div>
            <div class="docTextLine paper-number-div">
              <div>
                <!-- <span
                  @click="commandFill('cellIdx0', '', 'TextItem')"
                >{{ letData.cellIdx0 ? letData.cellIdx0 : '（编辑）' }}</span> -->
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
            <div class="docTextLine">
              <label style="width: 2em;"></label>
              <div style="flex: 1; display: flex;">
                <label>承办人（签名）：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx8', '承办人（签名)', 'TextItem')"
                >{{ letData.cellIdx8 ? letData.cellIdx8 : '（点击编辑）' }}</div>
              </div>
              <div style="flex: 1; display: flex;">
                <label>日期：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx9', '日期', 'DateItem')"
                >{{ letData.cellIdx9 ? letData.cellIdx9 : '（点击编辑）' }}</div>
              </div>
            </div>
            <div class="docTextLine">
              <label style="width: 5%"></label>
              <div style="flex: 1; display: flex;">
              <label style="width: 45%"></label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx10', '承办人（签名)', 'TextItem')"
                >{{ letData.cellIdx10 ? letData.cellIdx10 : '（点击编辑）' }}</div>
              </div>
              <div style="flex: 1; display: flex;">
                <label>日期：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx11', '日期', 'DateItem')"
                >{{ letData.cellIdx11 ? letData.cellIdx11 : '（点击编辑）' }}</div>
              </div>
            </div>
            <div class="docTextLine">
              <label style="width: 2em;"></label>
              <div style="flex: 3; display: flex;">
                <label>分管负责人意见：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx12', '分管负责人意见', 'TextItem')"
                >{{ letData.cellIdx12 ? letData.cellIdx12 : '（点击编辑）' }}</div>
              </div>
              <div style="flex: 2; display: flex;">
                <label>签名：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx13', '分管负责人（签名）', 'TextItem')"
                >{{ letData.cellIdx13 ? letData.cellIdx13 : '（点击编辑）' }}</div>
              </div>
              <div style="flex: 2; display: flex;">
                <label>日期：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx14', '日期', 'DateItem')"
                >{{ letData.cellIdx14 ? letData.cellIdx14 : '（点击编辑）' }}</div>
              </div>
            </div>
            <div class="docTextLine">
              <label style="width: 2em;"></label>
              <div style="flex: 3; display: flex;">
                <label>主要负责人意见：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx15', '主要负责人意见', 'TextItem')"
                >{{ letData.cellIdx15 ? letData.cellIdx15 : '（点击编辑）' }}</div>
              </div>
              <div style="flex: 2; display: flex;">
                <label>签名：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx16', '主要负责人（签名）', 'TextItem')"
                >{{ letData.cellIdx16 ? letData.cellIdx16 : '（点击编辑）' }}</div>
              </div>
              <div style="flex: 2; display: flex;">
                <label>日期：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx17', '日期', 'DateItem')"
                >{{ letData.cellIdx17 ? letData.cellIdx17 : '（点击编辑）' }}</div>
              </div>
            </div>
            <table class="docBody" style="margin-top: 30px;">
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
  name: "Let104",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {},
      options: {},
      associationPaper: ['4']
    };
  },
  methods: {
    async initLetData (selectedPaper) {
      const db = new GoDB(this.$store.state.DBName);
      const corpBase = db.table("corpBase");
      const corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      // 1.生成文书编号
      let { num0, num1, num3, num4 } = await getDocNumber(
        db,
        this.docData.docTypeNo,
        this.corpData.caseId,
        this.$store.state.user
      );
      // 2.发现你矿存在：隐患描述
      // 获取笔录文书中的隐患数据 调整为立案决定书中的案由字段cellIdx4
      // let let1DataPapaerContent = JSON.parse(selectedPaper.let1Data.paperContent);
      // let dangerObject = getDangerObject(
      //   let1DataPapaerContent.dangerItemObject.tableData,
      //   { danger: true }
      // );
      // let cellIdx2String = `${corp.corpName}涉嫌${dangerObject.dangerString}案。`;
      // let cellIdx10String = dangerObject.onsiteDescString;
      let let4DataPapaerContent = JSON.parse(selectedPaper.let4Data.paperContent);

      await db.close();
      this.letData = {
        cellIdx0: null, //
        cellIdx1: null, // 编号
        cellIdx2: let4DataPapaerContent.cellIdx4, // 案由
        cellIdx2TypeTextareaItem: let4DataPapaerContent.cellIdx4, // 案由
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
        cellIdx18: this.$store.state.curCase.groupName, //
        cellIdx19: this.todayDate, // 日期
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