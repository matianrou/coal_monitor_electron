<!-- 行政处罚 案件结案 案件结案报告 14 -->
<template>
  <div style="width: 100%; height: 100%;">
    <let-main
      ref="letMain"
      :corp-data="corpData"
      :doc-data="docData"
      :let-data="letData"
      :paper-data="paperData"
      :from-page="fromPage"
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
                <p class="show-area-item-p">&nbsp;</p>
                <cell-line></cell-line>
              </div>
              <div v-else>
                <p
                  v-for="(item, index) in 8"
                  :key="index"
                  class="show-area-item-p">&nbsp;</p>
              </div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:43%">
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;承办人意见：:</span>
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
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;审批人意见：:</span>
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
      v-if="visible.selectPaper"
      :visible="visible.selectPaper"
      :paper-list="paperList"
      @close="closeDialog"
      @confirm-paper="confirmPaper"
    ></select-paper>
  </div>
</template>

<script>
import { setNewDanger, getCurPaperDocNumber, corpInformation } from "@/utils/setInitPaperData";
import associationSelectPaper from '@/components/association-select-paper'
import { setDangerTable } from '@/utils/handlePaperData'
export default {
  name: "Let213",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {
        cellIdx0: null, // 案由
        cellIdx1: null, // 承办人意见
        cellIdx2: null, // 签名
        cellIdx3: null, // 日期
        cellIdx4: null, // 审批人意见
        cellIdx5: null, // 签名
        cellIdx6: null, // 日期
        DangerTable: null,
        associationPaperId: null,
        associationPaperOrder: []
      },
      options: {},
      associationPaper: ["4"],
    };
  },
  methods: {
    async initLetData (selectedPaper) {
      if (this.corpData.caseType === '0') {
        let corpBase = await this.getDatabase('baseInfo');
        let corp = corpBase.find((item) => {
          return item.corpId == this.corpData.corpId;
        });
        let wkPaper = await this.getPaperDatabase(this.corpData.caseId)
        let let4DataPaperContent = JSON.parse(
          selectedPaper.let4Data.paperContent
        );
        // 1.案由：带入形成处罚决定书中案由
        let string1 = `    一、案由：${let4DataPaperContent.cellIdx4}\r\n`;
        // 2.行政相对人基本情况:带入检查方案煤矿基本信息
        // 获取检查方案Paper
        let paper22 = wkPaper.find(paper => {
          if (paper.paperId === let4DataPaperContent.associationPaperId.paper22Id) {
          }
          return paper.delFlag !== '1'
          && paper.paperId === let4DataPaperContent.associationPaperId.paper22Id
        })
        let string2 = "    二、行政相对人基本情况：";
        let p22CorpInfo = paper22 ? JSON.parse(paper22.paperContent).cellIdx3 : ''
        string2 += p22CorpInfo + "\r\n";
        // 3，	案发时间：立案决定书中立案时间
        let string3 = `    三、案发时间：${let4DataPaperContent.cellIdx6 || 'XX'}年${let4DataPaperContent.cellIdx7 || 'XX'}月${let4DataPaperContent.cellIdx8 || 'XX'}日。\r\n`;
        // 4，案发地点：
        let string4 = `    四、案发地点：${corp.corpName || 'XX公司XX煤矿'}。\r\n`;
        // 5，	主要违法事实：20XX年XX月XX日至XX月XX日，XX煤矿安全监管局XX监管分局监管员XXX、XXX、XXX……，按照监管执法计划，对XX公司XX煤矿进行现场检查时，发现该矿XX采煤工作面回风巷风流中瓦斯浓度达1.2%，未停止作业，涉嫌违法违规。
        // 获取监管员姓名
        let p22check = paper22 ? JSON.parse(paper22.paperContent).CheckTable : {}
        let p22checkTable = p22check.tableData || []
        let p22checkName = ''
        for (let i = 0; i < p22checkTable.length; i++) {
          if (p22checkTable[i].personNames) {
            let nameList = p22checkTable[i].personNames.split(',')
            for (let j = 0; j < nameList.length; j++) {
              if (!p22checkName.includes(nameList[j])) {
                p22checkName += nameList[j] + '，'
              }
            }
          }
          
        }
        if (p22checkName) p22checkName = p22checkName.substring(0, p22checkName.length - 1)
        let paper1 = wkPaper.find(paper => {
          return paper.delFlag !== '1'
          && paper.paperId === let4DataPaperContent.associationPaperId.paper1Id
        })
        let paper1PaperContent = paper1 ? JSON.parse(paper1.paperContent) : {}
        // 违法违规行为
        let newDangerTable = this.handleSelectedDangerList(let4DataPaperContent.DangerTable)
        let cellIdx5String = setDangerTable(newDangerTable, {}, {
            page: "14",
            key: "cellIdx5",
          }
        );
        let string5 = `    五、主要违法事实：${paper1PaperContent.cellIdx1 || '20XX年XX月XX日至XX月XX日'}，${this.$store.state.curCase.groupName || 'XX局'}监管员${p22checkName || 'XXX、XXX、XXX……'}等监管员按照监管执法计划，依法对${corp.corpName || 'XX公司XX煤矿'}进行现场检查时,发现该矿${cellIdx5String || 'XX采煤工作面回风巷风流中瓦斯浓度达1.2%，未停止作业'}，该行为涉嫌违法。\r\n`;
        // 6，	立案调查及审理情况：
        // 立案时间+“经”+机构名称+“负责人批准，决定对该涉嫌违法行为进行立案调查，并指定由、两名执法人员承办。案件承办人对进行调查取证，制作了调查取证笔录，收集了该矿违法违规行为的其他证据材料。
        // 经调查取证，案件承办人认定违法事实清楚，分别违反了”+违法认定法条+“建议分别依据”+行政处罚依据+“拟分别给予”+行政处罚决定+呈报书制作时间+“，经法制审核，认为案件事实清楚、证据确凿充分、定性准确、处罚适当、程序合法，同意处罚意见。案件承办人将处罚建议呈报给分管副局长XXX、局长张晓彤审批，经分局局长办公会集体研究，同意案件承办人处罚意见。”
        // +告知书制作时间+“案件承办人分别向”+煤矿名称+“及其负责人XXX下达了《行政处罚告知书》”+行政处罚告知书文书号+“。该矿负责人签收文书后，未进行陈述、申辩，未要求举行听证。”+决定书制作时间+“案件承办人员向”+ 煤矿名称+“及其负责人XXX分别送达了《行政处罚决定书》”+ 行政处罚决定书文书编号+“。”
        // 立案决定书4中获取立案时间
        let p4DateString = `${let4DataPaperContent.cellIdx6 || 'XX'}年${let4DataPaperContent.cellIdx7 || 'XX'}月${let4DataPaperContent.cellIdx8 || 'XX'}日`
        // 获取调查笔录中的被调查人
        let paper5List = JSON.parse(JSON.stringify(wkPaper.filter(paper => {
          return paper.delFlag !== '1'
          && paper.paperType === '5'
          && JSON.parse(paper.paperContent).associationPaperId
          && JSON.parse(paper.paperContent).associationPaperId.paper4Id === selectedPaper.let4Data.paperId
        }) || []))
        let paper5CheckName = ''
        if (paper5List.length > 0) {
          for (let i = 0; i < paper5List.length; i++) {
            if (JSON.parse(paper5List[i].paperContent).cellIdx9) {
              paper5CheckName += JSON.parse(paper5List[i].paperContent).cellIdx9 + '、'
            }
          }
        }
        if (paper5CheckName) paper5CheckName = paper5CheckName.substring(0, paper5CheckName.length - 1)
        let string6 = `    六、立案调查及审理情况：${p4DateString}，经${this.$store.state.curCase.groupName || 'XX局'}负责人批准，决定对该涉嫌违法行为进行立案调查，并指定由${let4DataPaperContent.cellIdx9 || 'XXX、XXX'}两名执法人员承办。案件承办人对${paper5CheckName || 'XXX、XXX……'}进行调查取证，制作了调查取证笔录，收集了该矿违法违规行为的其他证据材料。\r\n`;
        // 获取案件处理呈报书的违法事实及处理依据
        // 规定
        let cellIdx6String = setDangerTable(newDangerTable, {}, {
            page: "14",
            key: "cellIdx6",
          }
        ); 
        let cellIdx7String = setDangerTable(newDangerTable, {}, {
            page: "14",
            key: "cellIdx7",
          }
        );
        let cellIdx8String = setDangerTable(newDangerTable, {}, {
            page: "14",
            key: "cellIdx8",
          }
        );  
        string6 += `    经调查取证，案件承办人认定违法事实清楚，${cellIdx6String || 'XXX'}的规定。建议${cellIdx7String || 'XX'}的规定，拟${cellIdx8String}的行政处罚。`;
        string6 += `XX月XX日经法制审核，认为案件事实清楚、证据确凿充分、定性准确、处罚适当、程序合法，同意处罚意见。案件承办人将处罚建议呈报给分管副局长XXX、局长XXX审批，经分局局长办公会集体研究，同意案件承办人处罚意见。`
        // 行政处罚告知书6制作时间、文书编号
        let paper6Data = await wkPaper.find(paper => {
          return paper.delFlag !== '1'
          && paper.paperType === '6'
          && JSON.parse(paper.paperContent).associationPaperId
          && JSON.parse(paper.paperContent).associationPaperId.paper1Id === let4DataPaperContent.associationPaperId.paper1Id
        })
        let let6Date = paper6Data ? paper6Data.createTime.split(' ')[0].split('-') : []
        let paper6Date = `${let6Date[0] || '20XX'}年${let6Date[1] || 'XX'}月${let6Date[2] || 'XX'}日`
        let paper6PaperNumber = ''
        if (paper6Data) {
          paper6PaperNumber = getCurPaperDocNumber(paper6Data)
        }
        let hasPaper30 = false
        // （1）判断陈述、申辩笔录，没有的话，按照模板写；有的话写出“XXXX年XX月XX日，下达了陈述、申辩笔录；（2）判断听证通知书，没有的话，按照模板写；有的话，XXXX年XX月XX日，下达了《听证通知书》（A（B）煤安听〔20XX〕XXXX号）
        let paper30String = ''
        if (hasPaper30) {
          paper30String = `XXXX年XX月XX日，下达了陈述、申辩笔录，`
        } else {
          paper30String = `未进行陈述、申辩，`
        }
        let hasPaper28 = false
        if (hasPaper28) {
          paper30String += `XXXX年XX月XX日，下达了《听证通知书》（A（B）煤安听〔20XX〕XXXX号）`
        } else {
          paper30String += `未要求举行听证`
        }
        string6 += `${paper6Date || '20XX年XX月XX日'}，案件承办人向${corp.corpName}及其负责人XXX分别下达了《行政处罚告知书》（${paper6PaperNumber}）。该矿负责人签收文书后，${paper30String}。`;
        // 行政处罚决定书8制作时间、文书编号
        let paper8Data = await wkPaper.find(paper => {
          return paper.delFlag !== '1'
          && paper.paperType === '8'
          && JSON.parse(paper.paperContent).associationPaperId
          && paper6Data
          && JSON.parse(paper.paperContent).associationPaperId.paper6Id === paper6Data.paperId
        })
        let let8PaperNum = ''
        if (paper8Data) {
          let8PaperNum = getCurPaperDocNumber(paper8Data)
        }
        let let8Date = paper8Data ? paper8Data.createTime.split(' ')[0].split('-') : []
        string6 += `${let8Date[0] || '20XX'}年${let8Date[1] || 'XX'}月${let8Date[2] || 'XX'}日案件承办人员向${corp.corpName}及其负责人XXX分别送达了《行政处罚决定书》（${let8PaperNum}）。\r\n`;
        // 6，	行政处罚执行情况：固定模板
        // ”行政处罚执行情况：“+煤矿名称+ “接到我分局送达的行政处罚决定书后，该矿及其负责人XXX未申请行政复议和提起行政诉讼。将罚款已划转至指定罚款账户。”
        let xingzhengchufa = ''
        let isxingzhengfuyi = false
        let xingzhengfuyi = ''
        if (isxingzhengfuyi) {
          xingzhengfuyi = ``
        } else {
          xingzhengfuyi = '未申请行政复议和提起行政诉讼'
        }
        let string7 = `    七、行政处罚执行情况：${let8Date[0] || '20XX'}年${let8Date[1] || 'XX'}月${let8Date[2] || 'XX'}日，我分局在XX日报上公告，对${corp.corpName}${xingzhengchufa}。接到我分局送达的行政处罚决定书后，该矿及其负责人XXX${xingzhengfuyi}。因未能按期缴纳罚款，20XX年XX月XX日，我分局向XX公司XX煤矿及其负责人XXX下达了《行政决定履行催告书》（A（B）煤安催 〔20XX〕XXXX号）和（A（B）煤安催〔20XX〕XXXX号）。XX公司XX煤矿及其负责人XXX仍未履行行政处罚决定，20XX年XX月XX日，我分局向XX市XX区人民法院提交了强制执行申请书（A（B）煤安执〔20XX〕XXXX号）和（A（B）煤安执〔20XX〕XXXX号），经XX市XX区人民法院强制执行，于20XX年XX月XX日将罚款已划转至指定罚款账户。\r\n`;
        // 7，	结案理由：固定模板
        // 煤矿名称+ “及其负责人XXX已执行对其作出的行政处罚决定，承办人员申请结案。”
        let string8 = `    八、结案理由：${corp.corpName}及其负责人XXX已执行对其作出的行政处罚决定，承办人员申请结案。`;
        let cellIdx10String =
          string1 + string2 + string3 + string4 + string5 + string6 + string7 + string8;
        let DangerTable = setNewDanger(selectedPaper.let4Data, newDangerTable, this.paperId)
        let associationPaperId = Object.assign({}, this.setAssociationPaperId(let4DataPaperContent.associationPaperId), {
          paper4Id: selectedPaper.let4Data.paperId
        }) 
        let associationPaperOrder = this.setAssociationPaperOrder(let4DataPaperContent.associationPaperOrder)
        associationPaperOrder.push('4')
        this.letData = Object.assign({}, this.letData, {
          cellIdx0: cellIdx10String ? cellIdx10String : "", // 案由 22.3.3恢复
          DangerTable: DangerTable,
          associationPaperId,
          associationPaperOrder
        })
      } else {
        // 生成事故文书：
        let corpBase = await this.getDatabase('baseInfo');
        let corp = corpBase.find((item) => {
          return item.corpId == this.corpData.corpId;
        });
        let let4DataPaperContent = JSON.parse(
          selectedPaper.let4Data.paperContent
        );
        let string1 = `    一、案由：${let4DataPaperContent.cellIdx4}案。\r\n`;
        let string2 = `    二、行政相对人基本情况：${await corpInformation(corp)}\r\n`;
        let string3 = `    三、案发时间：${let4DataPaperContent.cellIdx6 || 'XX'}年${let4DataPaperContent.cellIdx7 || 'XX'}月${let4DataPaperContent.cellIdx8 || 'XX'}日。\r\n`;
        let string4 = `    四、案发地点：${corp.corpName || 'XX公司XX煤矿'}。\r\n`;
        let string5 = `    五、主要违法事实：${'20XX年XX月XX日至XX月XX日'}，${this.$store.state.curCase.groupName || 'XX局'}监管员${'XXX、XXX、XXX……'}按照监管执法计划，依法对${corp.corpName || 'XX公司XX煤矿'}进行现场检查时,发现该矿${'XX采煤工作面回风巷风流中瓦斯浓度达1.2%，未停止作业'}，该行为涉嫌违法违规。\r\n`;
        let p4DateString = `${let4DataPaperContent.cellIdx6 || 'XX'}年${let4DataPaperContent.cellIdx7 || 'XX'}月${let4DataPaperContent.cellIdx8 || 'XX'}日`
        let string6 = `    六、立案调查及审理情况：${p4DateString}，经${this.$store.state.curCase.groupName || 'XX局'}负责人批准，决定对该涉嫌违法行为进行立案调查，并指定由${let4DataPaperContent.cellIdx9 || 'XXX、XXX'}两名执法人员承办。案件承办人对${'XXX、XXX……'}进行调查取证，制作了调查取证笔录，收集了该矿违法违规行为的其他证据材料。`;
        string6 += `${'XX'}经调查取证，案件承办人认定违法事实清楚，违反了${'XX'}的规定。建议依据${'XX'}的规定，拟给予${'XX'}的行政处罚。`;
        string6 += `XX月XX日经法制审核，认为案件事实清楚、证据确凿充分、定性准确、处罚适当、程序合法，同意处罚意见。案件承办人将处罚建议呈报给分管副局长XXX、局长XXX审批，经分局局长办公会集体研究，同意案件承办人处罚意见。`
        string6 += `${'20XX年XX月XX日'}，案件承办人向${corp.corpName}及其负责人XXX分别下达了《行政处罚告知书》（${'XXX'}）。该矿负责人签收文书后，${'未进行陈述、申辩，未要求举行听证'}。`;
        string6 += `${'20XX'}年${'XX'}月${'XX'}日案件承办人员向${corp.corpName}及其负责人XXX分别送达了《行政处罚决定书》（XXX）。\r\n`;
        let string7 = `    七、行政处罚执行情况：${'20XX'}年${'XX'}月${'XX'}日，我分局在XX日报上公告，对${corp.corpName}。接到我分局送达的行政处罚决定书后，该矿及其负责人XXX未申请行政复议和提起行政诉讼。因未能按期缴纳罚款，20XX年XX月XX日，我分局向XX公司XX煤矿及其负责人XXX下达了《行政决定履行催告书》（A（B）煤安催 〔20XX〕XXXX号）和（A（B）煤安催〔20XX〕XXXX号）。XX公司XX煤矿及其负责人XXX仍未履行行政处罚决定，20XX年XX月XX日，我分局向XX市XX区人民法院提交了强制执行申请书（A（B）煤安执〔20XX〕XXXX号）和（A（B）煤安B执〔20XX〕XXXX号），经XX市XX区人民法院强制执行，于20XX年XX月XX日将罚款已划转至指定罚款账户。\r\n`;
        let string8 = `    八、结案理由：${corp.corpName}及其负责人XXX已执行对其作出的行政处罚决定，承办人员申请结案。`;
        let cellIdx10String = string1 + string2 + string3 + string4 + string5 + string6 + string7 + string8;
        let associationPaperId = Object.assign({}, this.setAssociationPaperId(let4DataPaperContent.associationPaperId), {
          paper4Id: selectedPaper.let4Data.paperId
        }) 
        let associationPaperOrder = this.setAssociationPaperOrder(let4DataPaperContent.associationPaperOrder)
        associationPaperOrder.push('4')
        this.letData = Object.assign({}, this.letData, {
          cellIdx0: cellIdx10String ? cellIdx10String : "", // 案由 22.33恢复
          associationPaperId,
          associationPaperOrder
        })
      }
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