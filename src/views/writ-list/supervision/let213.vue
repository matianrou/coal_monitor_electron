<!-- 行政处罚 案件结案 案件结案报告 14 -->
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
            <div class="textAlignCenter formHeader0">
              煤矿安全监管行政执法文书
              <br />
            </div>
            <div class="textAlignCenter formHeader1">案件结案报告</div>
            <div class="docTextarea">
              <label style="width: 2em;"></label>
              主要内容：案由；行政相对人基本情况；案发时间及地点；主要违法事实、立案调查及审理情况；行政处罚执行情况；结案理由。
            </div>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden; margin-top: 30px;"
              class="cellInput mutiLineArea"
              id="cell_idx_0"
              data-title="案由"
              data-type="textarea"
              data-src
              @click="commandFill('cellIdx0', '案由', 'TextareaItem')"
            >
              <div v-if="letData.cellIdx0 && letData.cellIdx0.length > 0">
                <p class="show-area-item-p">
                  <span style="padding: 7px;">{{ letData.cellIdx0? letData.cellIdx0 : '（点击编辑）' }}</span>
                </p>
                <cell-line></cell-line>
              </div>
              <div v-else>
                <p class="show-area-item-p">&nbsp;</p>
                <p class="show-area-item-p">&nbsp;</p>
              </div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:43%">
                <span class="no-line">承办人意见：:</span>
                <span @click="commandFill('cellIdx1', '承办人意见', 'TextItem')"
                  >{{ letData.cellIdx1 ? letData.cellIdx1 : "（编辑）" }}
                </span>
              </div>
                <span class="no-line">签名：</span>
                <span @click="commandFill('cellIdx2', '签名', 'TextItem')">{{
                  letData.cellIdx2 ? letData.cellIdx2 : "（编辑）"
                }}</span>
                <span class="no-line">日期：</span>
                <span @click="commandFill('cellIdx3', '日期', 'DateItem')">{{
                  letData.cellIdx3 ? letData.cellIdx3 : "（编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:43%">
                <span class="no-line">审批人意见：:</span>
                <span @click="commandFill('cellIdx4', '审批人意见', 'TextItem')"
                  >{{ letData.cellIdx4 ? letData.cellIdx4 : "（编辑）" }}
                </span>
              </div>
                <span class="no-line">签名：</span>
                <span @click="commandFill('cellIdx5', '签名', 'TextItem')">{{
                  letData.cellIdx5 ? letData.cellIdx5 : "（编辑）"
                }}</span>
                <span class="no-line">日期：</span>
                <span @click="commandFill('cellIdx6', '日期', 'DateItem')">{{
                  letData.cellIdx6 ? letData.cellIdx6 : "（编辑）"
                }}</span>
                <div class="line"></div>
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
import { getDangerObject, corpInformation } from "@/utils/setInitPaperData";
import associationSelectPaper from '@/components/association-select-paper'
export default {
  name: "Let213",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {},
      options: {},
      associationPaper: ['1', '4', '47', '6', '8']
    };
  },
  methods: {
    async initLetData (selectedPaper) {
      let db = new GoDB(this.$store.state.DBName);
      let corpBase = db.table("corpBase");
      let corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      let let1DataPaperContent = JSON.parse(selectedPaper.let1Data.paperContent);
      let dangerObject = getDangerObject(
        let1DataPaperContent.DangerTable.tableData
      );
      // 1.案由
      let string1 = `一、案由：${corp.corpName}${dangerObject.dangerString}案。\r\n`;
      // 2.行政相对人基本情况
      let string2 = "    二、行政相对人基本情况：";
      string2 += (await corpInformation(db, corp)) + "。\r\n";
      // 3，	案发时间：检查笔录中时间
      let string3 = `    三、案发时间：${let1DataPaperContent.cellIdx1}。\r\n`;
      // 4，	主要违法事实：检查笔录中时间+机构名称+登录人员名称+“等监管员按照监管执法计划，依法对”+煤矿名称+“进行现场检查时,发现该矿”+隐患描述
      let string4 = `    四、主要违法事实：${let1DataPaperContent.cellIdx1}${this.$store.state.curCase.provinceGroupName}${this.$store.state.user.userName}等监管员按照监管执法计划，依法对${corp.corpName}进行现场检查时,发现该矿${dangerObject.dangerString}。\r\n`;
      // 5，	立案调查及审理情况：
      // 立案时间+“经”+机构名称+“负责人批准，决定对该涉嫌违法行为进行立案调查，并指定由、两名执法人员承办。案件承办人对进行调查取证，制作了调查取证笔录，收集了该矿违法违规行为的其他证据材料。
      // 经调查取证，案件承办人认定违法事实清楚，分别违反了”+违法认定法条+“建议分别依据”+行政处罚依据+“拟分别给予”+行政处罚决定+呈报书制作时间+“，经法制审核，认为案件事实清楚、证据确凿充分、定性准确、处罚适当、程序合法，同意处罚意见。案件承办人将处罚建议呈报给分管副局长XXX、局长张晓彤审批，经分局局长办公会集体研究，同意案件承办人处罚意见。”
      // +告知书制作时间+“案件承办人分别向”+煤矿名称+“及其负责人XXX下达了《行政处罚告知书》”+行政处罚告知书文书号+“。该矿负责人签收文书后，未进行陈述、申辩，未要求举行听证。”+决定书制作时间+“案件承办人员向”+ 煤矿名称+“及其负责人XXX分别送达了《行政处罚决定书》”+ 行政处罚决定书文书编号+“。”
      // 立案决定书4中获取立案时间
      let let4DataPaperContent = JSON.parse(selectedPaper.let4Data.paperContent);
      let string5 = `    五、立案调查及审理情况：${let4DataPaperContent.cellIdx6 ? let4DataPaperContent.cellIdx6 : 'XX'}年${let4DataPaperContent.cellIdx7 ? let4DataPaperContent.cellIdx7 : 'XX'}月${let4DataPaperContent.cellIdx8 ? let4DataPaperContent.cellIdx8 : 'XX'}日经${this.$store.state.curCase.provinceGroupName}负责人批准，决定对该涉嫌违法行为进行立案调查，并指定由、两名执法人员承办。案件承办人对进行调查取证，制作了调查取证笔录，收集了该矿违法违规行为的其他证据材料。`;
      string5 += `经调查取证，案件承办人认定违法事实清楚，分别违反了${dangerObject.illegalString}。建议分别依据${dangerObject.penaltyBasisString}拟分别给予${dangerObject.penaltyDesc}。`;
      // 行政执法决定法制审核意见书47制作时间
      let let47Date = selectedPaper.let47Data.createTime.split(" ");
      let47Date = let47Date[0].split("-");
      string5 += `${let47Date[1]}月${let47Date[2]}日，经法制审核，认为案件事实清楚、证据确凿充分、定性准确、处罚适当、程序合法，同意处罚意见。案件承办人将处罚建议呈报给分管副局长XXX、局长张晓彤审批，经分局局长办公会集体研究，同意案件承办人处罚意见。`;
      // 行政处罚告知书6制作时间、文书编号
      let let6Date = selectedPaper.let6Data.createTime.split(" ");
      let6Date = let6Date[0].split("-");
      let let6DataPaperContent = JSON.parse(selectedPaper.let6Data.paperContent);
      string5 += `${let6Date[0]}年${let6Date[1]}月${let6Date[2]}日案件承办人分别向${corp.corpName}及其负责人XXX下达了《行政处罚告知书》（${let6DataPaperContent.cellIdx0}煤安监${let6DataPaperContent.cellIdx1}告〔${let6DataPaperContent.cellIdx2}〕${let6DataPaperContent.cellIdx3}号）。该矿负责人签收文书后，未进行陈述、申辩，未要求举行听证。`;
      // 行政处罚决定书8制作时间、文书编号
      let let8Date = selectedPaper.let8Data.createTime.split(" ");
      let8Date = let8Date[0].split("-");
      let let8DataPaperContent = JSON.parse(selectedPaper.let8Data.paperContent);
      let let206PaperNum = `${let8DataPaperContent.cellIdx0}煤安监${let8DataPaperContent.cellIdx1}罚〔${let8DataPaperContent.cellIdx2}〕${let8DataPaperContent.cellIdx3}号`;
      string5 += `${let8Date[0]}年${let8Date[1]}月${let8Date[2]}日案件承办人员向${corp.corpName}及其负责人XXX分别送达了《行政处罚决定书》${let206PaperNum}。\r\n`;
      // 6，	行政处罚执行情况：固定模板
      // ”行政处罚执行情况：“+煤矿名称+ “接到我分局送达的行政处罚决定书后，该矿及其负责人XXX未申请行政复议和提起行政诉讼。将罚款已划转至指定罚款账户。”
      let string6 = `    六、行政处罚执行情况：${corp.corpName}接到我分局送达的行政处罚决定书后，该矿及其负责人XXX未申请行政复议和提起行政诉讼。将罚款已划转至指定罚款账户。\r\n`;
      // 7，	结案理由：固定模板
      // 煤矿名称+ “及其负责人XXX已执行对其作出的行政处罚决定，承办人员申请结案。”
      let string7 = `    七、${corp.corpName}及其负责人XXX已执行对其作出的行政处罚决定，承办人员申请结案。`;
      let cellIdx0String =
        string1 + string2 + string3 + string4 + string5 + string6 + string7;
      await db.close();
      this.letData = {
        cellIdx0: cellIdx0String ? cellIdx0String : '', // 案由
        cellIdx0TypeTextareaItem: cellIdx0String ? cellIdx0String : '', // 案由
        cellIdx1: null, // 承办人意见
        cellIdx2: null, // 签名
        cellIdx3: null, // 日期
        cellIdx4: null, // 审批人意见
        cellIdx5: null, // 签名
        cellIdx6: null, // 日期
      };
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