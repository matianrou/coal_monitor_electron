<!-- 行政处罚 一般程序 立案决定书 4 -->
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
            <div class="textAlignCenter formHeader2">
              国 家 矿 山 安 全 监 察
              <br />
            </div>
            <div class="textAlignCenter formHeader4">立 案 决 定 书</div>
            <div class="formHeader5 paper-number-div">
              <div>
                <span @click="commandFill('cellIdx0', '文书号', 'TextItem')">{{
                  letData.cellIdx0 ? letData.cellIdx0 : "（编辑）"
                }}</span>
                <label>矿安监</label>
                <span @click="commandFill('cellIdx1', '文书号', 'TextItem')">{{
                  letData.cellIdx1 ? letData.cellIdx1 : "（编辑）"
                }}</span>
                <label>立〔</label>
                <span @click="commandFill('cellIdx2', '文书号', 'TextItem')">{{
                  letData.cellIdx2 ? letData.cellIdx2 : "（编辑）"
                }}</span>
                <label>〕</label>
                <span @click="commandFill('cellIdx3', '文书号', 'TextItem')">{{
                  letData.cellIdx3 ? letData.cellIdx3 : "（编辑）"
                }}</span>
                <label>号</label>
              </div>
            </div>
            <div class="docTextarea">
              案&nbsp;&nbsp;&nbsp; 由：
              <span
                @click="commandFill('cellIdx4', '案由', 'DangerTableItem')"
                >{{
                  letData.cellIdx4 ? letData.cellIdx4 : "（点击编辑）"
                }}</span
              >
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              案情摘要：
              <span
                @click="commandFill('cellIdx5', '案情摘要', 'DangerTableItem')"
                >{{
                  letData.cellIdx5 ? letData.cellIdx5 : "（点击编辑）"
                }}</span
              >
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <label style="width: 5%"></label>
              根据以上案由案情，决定自
              <span @click="commandFill('cellIdx6', '年', 'TextItem')">{{
                letData.cellIdx6 ? letData.cellIdx6 : "（XX）"
              }}</span>
              年
              <span @click="commandFill('cellIdx7', '月', 'TextItem')">{{
                letData.cellIdx7 ? letData.cellIdx7 : "（XX）"
              }}</span>
              月
              <span @click="commandFill('cellIdx8', '日', 'TextItem')">{{
                letData.cellIdx8 ? letData.cellIdx8 : "（XX）"
              }}</span>
              日起立案调查处理，并指定
              <span @click="commandFill('cellIdx9', '', 'TextItem')">{{
                letData.cellIdx9 ? letData.cellIdx9 : "（点击编辑）"
              }}</span>
              为本案承办人。
            </div>
            <table height="30"></table>
            <div class="docTextLine">
              <div style="flex: 2; display: flex">
                <label>审批人意见：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx10', '审批人意见', 'TextItem')"
                >
                  {{ letData.cellIdx10 ? letData.cellIdx10 : "（编辑）" }}
                </div>
              </div>
              <div style="flex: 2; display: flex">
                <label>审批人（签名）:</label>
                <div
                  class="line-div"
                  @click="
                    commandFill('cellIdx11', '审批人（签名）:', 'TextItem')
                  "
                >
                  {{ letData.cellIdx11 ? letData.cellIdx11 : "（编辑）" }}
                </div>
              </div>
              <label>日期：</label>
              <div
                class="line-div"
                @click="commandFill('cellIdx12', '日期:', 'DateItem')"
              >
                {{ letData.cellIdx12 ? letData.cellIdx12 : "（编辑）" }}
              </div>
            </div>
            <table height="60"></table>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_13"
                  align="right"
                  style="width: 95%"
                  @click="commandFill('cellIdx13', '', 'TextItem')"
                >
                  {{ letData.cellIdx13 ? letData.cellIdx13 : "（点击编辑）" }}
                </td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_14"
                  align="right"
                  style="width: 95%"
                  data-title
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx14', '日期', 'DateItem')"
                >
                  {{ letData.cellIdx14 ? letData.cellIdx14 : "（点击编辑）" }}
                </td>
              </tr>
            </table>
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
import { handleDate } from "@/utils/date";
import { getDangerObject, getDocNumber } from "@/utils/setInitPaperData";
import associationSelectPaper from "@/components/association-select-paper";
export default {
  name: "Let201",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {},
      options: {
        cellIdx4: {
          page: "4",
          key: "cellIdx4", // 用来区分一个页面多个地方调用隐患大表，最后返回值
        },
        cellIdx5: {
          page: "4",
          key: "cellIdx5",
        },
      },
      associationPaper: ["1"],
    };
  },
  methods: {
    async initLetData(selectedPaper) {
      const db = new GoDB(this.$store.state.DBName);
      const corpBase = db.table("corpBase");
      const corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      // 创建初始版本
      // 获取检查时间
      let let1DataPapaerContent = JSON.parse(
        selectedPaper.let1Data.paperContent
      );
      // 检查时间日期：
      let dateString = let1DataPapaerContent.cellIdx1
        ? let1DataPapaerContent.cellIdx1
        : "X年X月X日-X年X月X日";
      // 1.案由内容初始化：煤矿名称+隐患描述+“案”组成
      let dangerObject = getDangerObject(
        let1DataPapaerContent.dangerItemObject.tableData
      );
      let cellIdx4String = `${corp.corpName}${dangerObject.dangerString}案。`;
      // 2.案情摘要：检查时间+当前机构名称+“对”+煤矿名称+“进行现场检查时发现”+隐患描述+"以上行为分别涉嫌违反了"+违法认定法条+“依据《安全生产违法行为行政处罚办法》第二十三条的规定申请立案。”
      dangerObject = getDangerObject(
        let1DataPapaerContent.dangerItemObject.tableData,
        { danger: true }
      );
      let cellIdx5String = `${dateString}，${this.$store.state.user.userGroupName}对${corp.corpName}进行现场检查时发现：${dangerObject.dangerString}以上行为分别涉嫌违反了${dangerObject.illegalString}的规定。依据《安全生产违法行为行政处罚办法》第二十三条的规定申请立案。`;
      let paperNumber = await getDocNumber(
        db,
        this.docData.docTypeNo,
        this.corpData.caseId,
        this.$store.state.user
      );
      await db.close();
      this.letData = {
        cellIdx0: paperNumber.num0, // 文书号
        cellIdx0TypeTextItem: paperNumber.num0, // 文书号
        cellIdx1: paperNumber.num1, // 文书号
        cellIdx1TypeTextItem: paperNumber.num1, // 文书号
        cellIdx2: paperNumber.num3, // 文书号
        cellIdx2TypeTextItem: paperNumber.num3, // 文书号
        cellIdx3: paperNumber.num4, // 文书号
        cellIdx3TypeTextItem: paperNumber.num4, // 文书号
        cellIdx4: cellIdx4String, // 案由
        cellIdx5: cellIdx5String, // 案情摘要
        cellIdx6: null, // 年
        cellIdx7: null, // 月
        cellIdx8: null, // 日
        cellIdx9: null, // 本案承办人
        cellIdx10: null, // 审批人意见
        cellIdx11: null, // 审批人（签名）
        cellIdx12: null, // 日期
        cellIdx13: this.$store.state.curCase.groupName, //
        cellIdx14: this.todayDate, // 日期
        /* cellIdx14: null, // 年
          cellIdx15: null, // 月
          cellIdx16: null, // 日   暂不用*/
        dangerItemObject: let1DataPapaerContent.dangerItemObject,
        extraData: {
          // 保存额外拼写的数据内容，用于修改隐患项时回显使用
          corpName: corp.corpName,
          dateString,
          userGroupName: this.$store.state.user.userGroupName,
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
        let spellString = {};
        if (key === "cellIdx4" || key === "cellIdx5") {
          if (key === "cellIdx4") {
            spellString = {
              corpName: this.letData.extraData.corpName,
            };
          } else if (key === "cellIdx5") {
            spellString = this.letData.extraData;
          }
          this.options[key] = {
            page: "4",
            key: key,
            spellString,
          };
          dataKey = "dangerItemObject";
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
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/let";
</style>