<!-- 现场检查 复查 复查意见书 13 -->
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
            <div class="textAlignCenter formHeader1">复查意见书</div>
            <div class="docTextLine paper-number-div">
              <div>
                <span
                  @click="commandFill('cellIdx0', '文书号', 'TextItem')"
                >{{ letData.cellIdx0 ? letData.cellIdx0 : '（编辑）' }}</span>
                <label>（</label>
                <span
                  @click="commandFill('cellIdx1', '文书号', 'TextItem')"
                >{{ letData.cellIdx1 ? letData.cellIdx1 : '（编辑）' }}</span>
                <label>）煤安复〔</label>
                <span
                  @click="commandFill('cellIdx2', '文书号', 'TextItem')"
                >{{ letData.cellIdx2 ? letData.cellIdx2 : '（编辑）' }}</span>
                <label>〕</label>
                <span
                  @click="commandFill('cellIdx3', '文书号', 'TextItem')"
                >{{ letData.cellIdx3 ? letData.cellIdx3 : '（编辑）' }}</span>
                <label>号</label>
              </div>
            </div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_4"
                  style="width:62%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx4', '', 'TextItem')"
                >{{ letData.cellIdx4 }}</td>
                <td class="textAlignLeft">:</td>
              </tr>
            </table>
            <div class="docTextarea">
              <label style="width:5%"></label>
              <span
                @click="commandFill('cellIdx5', '', 'TextItem')"
              >{{ letData.cellIdx5 ? letData.cellIdx5 : '（点击编辑）'}}</span>
              于
              <span
                @click="commandFill('cellIdx6', '年', 'TextItem')"
              >{{ letData.cellIdx6 ? letData.cellIdx6 : 'XX'}}</span>
              年
              <span
                @click="commandFill('cellIdx7', '月', 'TextItem')"
              >{{ letData.cellIdx7 ? letData.cellIdx7 : 'XX' }}</span>
              月
              <span
                @click="commandFill('cellIdx8', '日', 'TextItem')"
              >{{ letData.cellIdx8 ? letData.cellIdx8 : 'XX'}}</span>
              日发现
              <span
                @click="commandFill('cellIdx9', '违法行为', 'DangerTableItem')"
              >{{ letData.cellIdx9 ? letData.cellIdx9 : '（点击编辑）' }}</span>
              的违法违规行为，下达了《现场处理决定书》（
              <span style="borderBottom:none"
                @click="commandFill('cellIdx10', '现场处理决定书文书号', 'TextItem')"
              >{{ letData.cellIdx10 ? letData.cellIdx10 : '（点击编辑）' }}</span>
              （
              <span style="borderBottom:none"
                @click="commandFill('cellIdx11', '现场处理决定书文书号', 'TextItem')"
              >{{ letData.cellIdx11 ? letData.cellIdx11 : '（点击编辑）' }}</span>
              )  煤安处〔
              <span style="borderBottom:none"
                @click="commandFill('cellIdx12', '现场处理决定书文书号', 'TextItem')"
              >{{ letData.cellIdx12 ? letData.cellIdx12 : '（点击编辑）' }}</span>
              〕
              <span style="borderBottom:none"
                @click="commandFill('cellIdx13', '现场处理决定书文书号', 'TextItem')"
              >{{ letData.cellIdx13 ? letData.cellIdx13 : '（点击编辑）' }}</span>

              号），依法作出了
              <span
                @click="commandFill('cellIdx14', '现场处理决定', 'DangerTableItem')"
              >{{ letData.cellIdx14 ? letData.cellIdx14 : '（点击编辑）' }}</span>
              的决定。
            </div>
             <div class="docTextarea ">
              <label style="width: 2em;"></label>
              <span
                class="no-underline"
                @click="commandFill('cellIdx25', '', 'SelectItem')"
              >{{ letData.cellIdx25 ? letData.cellIdx25 : '（点击编辑）'}}</span>
              ，经复查，意见如下：
            </div>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              @click="commandFill('cellIdx15', '意见', 'TextareaItem')">
              <p
                style="width:100%; height:auto; word-wrap:break-word;word-wrap: break-all; overflow: hidden;"
              >{{ letData.cellIdx15 ? letData.cellIdx15 : '（点击编辑）' }}</p>
              <cell-line></cell-line>
            </div>
            <div class="docTextLine">
              <div style="flex: 1; display: flex;">
                <label>现场执法人员（签名):</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx16', '现场执法人员（签名)', 'TextItem')"
                >{{ letData.cellIdx16 ? letData.cellIdx16 : '（点击编辑）' }}</div>
              </div>
              <div style="flex: 1; display: flex;">
                <label>执法证号：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx17', '执法证号', 'TextItem')"
                >{{ letData.cellIdx17 ? letData.cellIdx17 : '（点击编辑）' }}</div>
              </div>
            </div>
            <div class="docTextLine">
              <div style="flex: 1; display: flex;">
                <label style="width: 54%"></label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx18', '现场执法人员（签名)', 'TextItem')"
                >{{ letData.cellIdx18 ? letData.cellIdx18 : '（点击编辑）' }}</div>
              </div>
              <div style="flex: 1; display: flex;">
                <label>执法证号：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx19', '执法证号', 'TextItem')"
                >{{ letData.cellIdx19 ? letData.cellIdx19 : '（点击编辑）' }}</div>
              </div>
            </div>
            <div class="docTextLine">
              <div style="flex: 3; display: flex;">
                <label>被复查单位意见:</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx20', '被复查单位意见', 'TextItem')"
                >{{ letData.cellIdx20 ? letData.cellIdx20 : '（编辑）' }}</div>
              </div>
              <div style="flex: 3; display: flex;">
                <label>单位负责人(签名):</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx21', '单位负责人（签名)', 'TextItem')"
                >{{ letData.cellIdx21 ? letData.cellIdx21 : '（编辑）' }}</div>
              </div>
              <div style="flex: 2; display: flex;">
                <label>日期:</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx22', '日期', 'DateItem')"
                >{{ letData.cellIdx22 ? letData.cellIdx22 : '（编辑）' }}</div>
              </div>
            </div>
            <table class="docBody" style="margin-top: 30px;">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_23"
                  align="right"
                  style="width:95%"
                  @click="commandFill('cellIdx23', '', 'TextItem')"
                >{{letData.cellIdx23 ? letData.cellIdx23 : '（点击编辑）'}}</td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_24"
                  align="right"
                  style="width:95%"
                  data-title
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx24', '日期', 'DateItem')"
                >{{letData.cellIdx24 ? letData.cellIdx24 : '（点击编辑）'}}</td>
              </tr>
            </table>
            <div class="docTextarea" style="border-top: 2px solid #000;">
              备注：本文书一式两份，一份交被复查单位，一份存档。
            </div>
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
import { getDangerObject, getDocNumber } from '@/utils/setInitPaperData'
import associationSelectPaper from '@/components/association-select-paper'
export default {
  name: "Let104",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {},
      options: {
        cellIdx9: {
          page: '13',
          key: 'cellIdx9'
        },
        cellIdx14: {
          page: '13',
          key: 'cellIdx14'
        },
        cellIdx25: [
          {
            value: '应你单位申请',
            name: '应你单位申请',
          },
          {
            value: '现整改、治理期限届满',
            name: '现整改、治理期限届满',
          },
        ]
      },
      associationPaper: ['1', '2']
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
      let { num0, num1, num3, num4 } = await getDocNumber(db, this.docData.docTypeNo, this.corpData.caseId, this.$store.state.user)
      await db.close();
      let let1DataPapaerContent = JSON.parse(selectedPaper.let1Data.paperContent)
      let dangerObject = getDangerObject(let1DataPapaerContent.dangerItemObject.tableData, {danger: true})
      let cellIdx9String = dangerObject.dangerString
      let cellIdx10String = dangerObject.onsiteDescString
      let let2DataPapaerContent = JSON.parse(selectedPaper.let2Data.paperContent)
      this.letData = {
        cellIdx0: num0, // 文书号
        cellIdx0TypeTextItem: num0, // 文书号
        cellIdx1: num1, // 文书号
        cellIdx1TypeTextItem: num1, // 文书号
        cellIdx2: num3, // 文书号
        cellIdx2TypeTextItem: num3, // 文书号
        cellIdx3: num4, // 文书号
        cellIdx3TypeTextItem: num4, // 文书号
        cellIdx4: corp.corpName ? corp.corpName : null, //
        cellIdx4TypeTextItem: corp.corpName ? corp.corpName : null, //
        cellIdx5: null, // 单位
        cellIdx6: null, // 年
        cellIdx7: null, // 月
        cellIdx8: null, // 日
        cellIdx9: cellIdx9String, // 违法违规行为：隐患描述
        cellIdx10: let2DataPapaerContent.cellIdx0, // 现场处理决定书 文书号
        cellIdx10TypeTextItem: let2DataPapaerContent.cellIdx0, // 现场处理决定书 文书号
        cellIdx11: let2DataPapaerContent.cellIdx1, // 现场处理决定书 文书号
        cellIdx11TypeTextItem: let2DataPapaerContent.cellIdx1, // 现场处理决定书 文书号
        cellIdx12: let2DataPapaerContent.cellIdx2, // 现场处理决定书 文书号
        cellIdx12TypeTextItem: let2DataPapaerContent.cellIdx2, // 现场处理决定书 文书号
        cellIdx13: let2DataPapaerContent.cellIdx3, // 现场处理决定书 文书号
        cellIdx13TypeTextItem: let2DataPapaerContent.cellIdx3, // 现场处理决定书 文书号
        cellIdx14: cellIdx10String, // 现场处理决定
        cellIdx25: '应你单位申请', //
        cellIdx15: null, // 意见
        cellIdx16: null, // 现场执法人员（签名)
        cellIdx17: null, // 执法证号
        cellIdx18: null, // 现场执法人员（签名)
        cellIdx19: null, // 执法证号
        cellIdx20: null, // 被检查单位意见
        cellIdx21: null, // 单位负责人（签名)
        cellIdx22: null, // 日期
        cellIdx23: this.$store.state.curCase.groupName, //
        cellIdx23TypeTextItem: this.$store.state.curCase.groupName, //
        cellIdx24: this.todayDate, //日期
        cellIdx24TypeDateItem: this.todayDate, // 日期
        dangerItemObject: let1DataPapaerContent.dangerItemObject
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
        if (key === 'cellIdx9' || key === 'cellIdx14') {
          this.options[key] = {
            page: '13',
            key: key,
          }
          dataKey = 'dangerItemObject'
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