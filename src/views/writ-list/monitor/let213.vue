<!-- 行政处罚 案件结案 案件结案报告 -->
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
            <div class="textAlignCenter formHeader1">案 件 结 案 报 告</div>
            <div class="stdRowH"></div>
            <table style="border:solid 0px #000;" class="docBody">
              <tr>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;主要内容：案由；行政相对人基本情况；案发时间及地点；主要违法事实、立案调查及审理</td>
              </tr>
              <tr>
                <td class="textAlignLeft">情况；行政处罚执行情况；结案理由。</td>
              </tr>
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;承办人意见：</td>
                <!-- <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_0"
                  align="center"
                  style="width:18%"
                  data-title="承办人意见"
                  data-type="textarea"
                  data-src
                  @click="commandFill('cellIdx0', '承办人意见', 'TextItem')"
                >{{letData.cellIdx0}}</td> -->
                <div
                  style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
                  class="cellInput mutiLineArea"
                  id="cell_idx_0"
                  data-title="承办人意见"
                  data-type="textarea"
                  data-src
                  @click="commandFill('cellIdx0', '承办人意见', 'TextareaItem')">
                  <p class="show-area-item-p">
                    <span style="padding: 7px;">{{ letData.cellIdx0 }}</span>
                  </p>
                </div>
                <td class="textAlignLeft">签名：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_1"
                  align="center"
                  style="width:18%"
                  data-title="签名"
                  data-type="textarea"
                  data-src
                  @click="commandFill('cellIdx1', '签名', 'TextItem')"
                >{{letData.cellIdx1}}</td>
                <td class="textAlignLeft">日期：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_2"
                  align="center"
                  style="width:10%"
                  data-title="年"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx2', '年', 'TextItem')"
                >{{letData.cellIdx2}}</td>
                <td class="textAlignLeft">年</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_3"
                  align="center"
                  style="width:10%"
                  data-title="月"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx3', '月', 'TextItem')"
                >{{letData.cellIdx3}}</td>
                <td class="textAlignLeft">月</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_4"
                  align="center"
                  style="width:10%"
                  data-title="日"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx4', '日', 'TextItem')"
                >{{letData.cellIdx4}}</td>
                <td class="textAlignLeft">日</td>
              </tr>
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;审批人意见：</td>
                <!-- <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_5"
                  align="center"
                  style="width:18%"
                  data-title="审批人意见"
                  data-type="textarea"
                  data-src
                  @click="commandFill('cellIdx5', '审批人意见', 'TextItem')"
                >{{letData.cellIdx5}}</td> -->
                <div
                  style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
                  class="cellInput mutiLineArea"
                  id="cell_idx_5"
                  data-title="审批人意见"
                  data-type="textarea"
                  data-src
                  @click="commandFill('cellIdx5', '审批人意见', 'TextareaItem')">
                  <p class="show-area-item-p">
                    <span style="padding: 7px;">{{ letData.cellIdx5 }}</span>
                  </p>
                </div>
                <td class="textAlignLeft">签名：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_6"
                  align="center"
                  style="width:18%"
                  data-title="签名"
                  data-type="textarea"
                  data-src
                  @click="commandFill('cellIdx6', '签名', 'TextItem')"
                >{{letData.cellIdx6}}</td>
                <td class="textAlignLeft">日期：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_7"
                  align="center"
                  style="width:10%"
                  data-title="年"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx7', '年', 'TextItem')"
                >{{letData.cellIdx7}}</td>
                <td class="textAlignLeft">年</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_8"
                  align="center"
                  style="width:10%"
                  data-title="月"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx8', '月', 'TextItem')"
                >{{letData.cellIdx8}}</td>
                <td class="textAlignLeft">月</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_9"
                  align="center"
                  style="width:10%"
                  data-title="日"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx9', '日', 'TextItem')"
                >{{letData.cellIdx9}}</td>
                <td class="textAlignLeft">日</td>
              </tr>
            </table>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              id="cell_idx_10"
              data-title="案由"
              data-type="textarea"
              data-src
              @click="commandFill('cellIdx10', '案由', 'TextareaItem')">
              <p class="show-area-item-p">
                <span style="padding: 7px; white-space: pre-wrap;">{{ letData.cellIdx10 }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </let-main>
  </div>
</template>

<script>
import letMain from "@/views/make-law-writ/components/let-main.vue";
import GoDB from "@/utils/godb.min.js";
import { getDangerObject, corpInformation } from '@/utils/setInitPaperData'
export default {
  name: "Let213",
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
        cellIdx10: {
          page: '14',
          key: 'cellIdx10'
        },
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
      const db = new GoDB(this.$store.state.DBName);
      const corpBase = db.table("corpBase");
      //查询符合条件的记录
      const corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      const wkPaper = db.table("wkPaper");
      const caseId = this.corpData.caseId;
      const checkPaper = await wkPaper.findAll((item) => {
        return (
          item.caseId === caseId && item.paperType === this.docData.docTypeNo && item.delFlag !== '1'
        );
      });
      if (checkPaper.length > 0) {
        // 回显
        this.letData = JSON.parse(checkPaper[0].paperContent);
        this.editData = checkPaper[0];
      } else {
        // 创建初始版本
        const let101Data = await wkPaper.find((item) => {
          return item.caseId === caseId && item.paperType === '1';
        });
        let let101DataPapaerContent = JSON.parse(let101Data.paperContent)
        let dangerObject = getDangerObject(let101DataPapaerContent.dangerItemObject.tableData)
        // 1.案由
        let string1 = `一、案由：${corp.corpName}${dangerObject.dangerString}案。\r\n`
        // 2.行政相对人基本情况
        let string2 = "    二、行政相对人基本情况："
        string2 += await corpInformation(db, corp) + '。\r\n'
        // 3，	案发时间：检查笔录中时间
        let string3 = `    三、案发时间：${let101DataPapaerContent.cellIdx1}。\r\n`
        // 4，	主要违法事实：检查笔录中时间+机构名称+登录人员名称+“等监察员按照监察执法计划，依法对”+煤矿名称+“进行现场检查时,发现该矿”+隐患描述
        let string4 = `    四、主要违法事实：${let101DataPapaerContent.cellIdx1}${this.$store.state.user.userGroupName}${this.$store.state.user.userName}等监察员按照监察执法计划，依法对${corp.corpName}进行现场检查时,发现该矿${dangerObject.dangerString}。\r\n`
        // 5，	立案调查及审理情况：
        // 立案时间+“经”+机构名称+“负责人批准，决定对该涉嫌违法行为进行立案调查，并指定由、两名执法人员承办。案件承办人对进行调查取证，制作了调查取证笔录，收集了该矿违法违规行为的其他证据材料。
        // 经调查取证，案件承办人认定违法事实清楚，分别违反了”+违法认定法条+“建议分别依据”+行政处罚依据+“拟分别给予”+行政处罚决定+呈报书制作时间+“，经法制审核，认为案件事实清楚、证据确凿充分、定性准确、处罚适当、程序合法，同意处罚意见。案件承办人将处罚建议呈报给分管副局长XXX、局长张晓彤审批，经分局局长办公会集体研究，同意案件承办人处罚意见。”
        // +告知书制作时间+“案件承办人分别向”+煤矿名称+“及其负责人XXX下达了《行政处罚告知书》”+行政处罚告知书文书号+“。该矿负责人签收文书后，未进行陈述、申辩，未要求举行听证。”+决定书制作时间+“案件承办人员向”+ 煤矿名称+“及其负责人XXX分别送达了《行政处罚决定书》”+ 行政处罚决定书文书编号+“。”
        // 立案决定书4中获取立案时间
        let let201Data = await wkPaper.find((item) => {
          return item.caseId === caseId && item.paperType === '4';
        });
        let let201DataPapaerContent = JSON.parse(let201Data.paperContent)
        let string5 = `    五、	立案调查及审理情况：${let201DataPapaerContent.cellIdx6}年${let201DataPapaerContent.cellIdx7}月${let201DataPapaerContent.cellIdx8}日经${this.$store.state.user.userGroupName}负责人批准，决定对该涉嫌违法行为进行立案调查，并指定由、两名执法人员承办。案件承办人对进行调查取证，制作了调查取证笔录，收集了该矿违法违规行为的其他证据材料。`
        string5 += `经调查取证，案件承办人认定违法事实清楚，分别违反了${dangerObject.illegalString}。建议分别依据${dangerObject.penaltyBasisString}拟分别给予${dangerObject.penaltyDesc}。`
        // 案件处理呈报书36制作时间
        let let203Data = await wkPaper.find((item) => {
          return item.caseId === caseId && item.paperType === '36';
        });
        let let203Date = let203Data.createTime.split(' ')
        let203Date = let203Date[0].split('-')
        string5 += `${let203Date[1]}月${let203Date[2]}日，经法制审核，认为案件事实清楚、证据确凿充分、定性准确、处罚适当、程序合法，同意处罚意见。案件承办人将处罚建议呈报给分管副局长XXX、局长张晓彤审批，经分局局长办公会集体研究，同意案件承办人处罚意见。`
        // 行政处罚告知书6制作时间、文书编号
        let let204Data = await wkPaper.find((item) => {
          return item.caseId === caseId && item.paperType === '6';
        });
        let let204Date = let204Data.createTime.split(' ')
        let204Date = let204Date[0].split('-')
        let let204DataPapaerContent = JSON.parse(let204Data.paperContent)
        string5 += `${let204Date[0]}年${let204Date[1]}月${let204Date[2]}日案件承办人分别向${corp.corpName}及其负责人XXX下达了《行政处罚告知书》（${let204DataPapaerContent.cellIdx0}煤安监${let204DataPapaerContent.cellIdx1}告〔${let204DataPapaerContent.cellIdx2}〕${let204DataPapaerContent.cellIdx3}号）。该矿负责人签收文书后，未进行陈述、申辩，未要求举行听证。`
        // 行政处罚决定书8制作时间、文书编号
        let let206Data = await wkPaper.find((item) => {
          return item.caseId === caseId && item.paperType === '8';
        });
        let let206Date = let206Data.createTime.split(' ')
        let206Date = let206Date[0].split('-')
        let let206DataPapaerContent = JSON.parse(let206Data.paperContent)
        let let206PaperNum = `${let206DataPapaerContent.cellIdx0}煤安监${let206DataPapaerContent.cellIdx1}罚〔${let206DataPapaerContent.cellIdx2}〕${let206DataPapaerContent.cellIdx3}号`
        string5 += `${let206Date[0]}年${let206Date[1]}月${let206Date[2]}日案件承办人员向${corp.corpName}及其负责人XXX分别送达了《行政处罚决定书》${let206PaperNum}。\r\n`
        // 6，	行政处罚执行情况：固定模板
        // ”行政处罚执行情况：“+煤矿名称+ “接到我分局送达的行政处罚决定书后，该矿及其负责人XXX未申请行政复议和提起行政诉讼。将罚款已划转至指定罚款账户。”
        let string6 = `    六、行政处罚执行情况：${corp.corpName}接到我分局送达的行政处罚决定书后，该矿及其负责人XXX未申请行政复议和提起行政诉讼。将罚款已划转至指定罚款账户。\r\n`
        // 7，	结案理由：固定模板
        // 煤矿名称+ “及其负责人XXX已执行对其作出的行政处罚决定，承办人员申请结案。”
        let string7 = `    七、${corp.corpName}及其负责人XXX已执行对其作出的行政处罚决定，承办人员申请结案。`
        let cellIdx10String = string1 + string2 + string3 + string4 + string5 + string6 + string7
        this.letData = {
          cellIdx0: null, // 承办人意见
          cellIdx1: null, // 签名
          cellIdx2: null, // 年
          cellIdx3: null, // 月
          cellIdx4: null, // 日
          cellIdx5: null, // 审批人意见
          cellIdx6: null, // 签名
          cellIdx7: null, // 年
          cellIdx8: null, // 月
          cellIdx9: null, // 日
          cellIdx10: cellIdx10String, // 案由
          cellIdx10TypeTextareaItem: cellIdx10String, // 案由
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
@import "@/assets/scss/let";
</style>