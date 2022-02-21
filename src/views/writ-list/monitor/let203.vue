<!-- 行政处罚 一般程序 案件处理呈报书 36 -->
<template>
  <div style="width: 100%; height: 100%">
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
            <div class="textAlignCenter formHeader2">
              国 家 矿 山 安 全 监 察
              <br />
            </div>
            <div class="textAlignCenter formHeader4">案 件 处 理 呈 报 书</div>
            <div class="docTextLine paper-number-div">
              <div>
                <!-- <span
                  @click="commandFill('cellIdx0', '', 'TextItem')"
                >{{ letData.cellIdx0 ? letData.cellIdx0 : '（编辑）' }}</span> -->
                <label>编号：</label>
                <span
                  class="line"
                  @click="commandFill('cellIdx1', '编号', 'TextItem')"
                  >{{
                    letData.cellIdx1 ? letData.cellIdx1 : "（点击编辑）"
                  }}</span
                >
              </div>
            </div>
            <div class="docTextarea">
              <span class="no-line">案&nbsp;&nbsp;由：</span>
              <span
                @dblclick="commandFill('cellIdx2', '案由', `${corpData.caseType === '0' ? 'DangerTable' : 'TextareaItem'}`)"
                @click="commandFill('cellIdx2', '案由', corpData.caseType === '0' ? 'DangerTextareaItem' : 'TextareaItem')"
                >{{
                  letData.cellIdx2 ? letData.cellIdx2 : "（点击编辑）"
                }}</span
              >
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:50%">
                <span class="no-line">立案决定书编号：</span>
                <span @click="commandFill('cellIdx3', '立案决定书编号', 'TextItem')"
                  >{{ letData.cellIdx3 ? letData.cellIdx3 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">立案时间：</span>
                <span @click="commandFill('cellIdx4', '立案时间', 'DateItem')">{{
                  letData.cellIdx4 ? letData.cellIdx4 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line">承办人：</span>
              <span @click="commandFill('cellIdx5', '承办人', 'TextItem')">{{
                letData.cellIdx5 ? letData.cellIdx5 : "（点击编辑）"
              }}</span>
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line">违法事实及依据：</span>
              <span
                @dblclick="commandFill('cellIdx6', '违法事实及依据', `${corpData.caseType === '0' ? 'DangerTable' : 'TextareaItem'}`)"
                @click="
                  commandFill(
                    'cellIdx6',
                    '违法事实及处理依据',
                    corpData.caseType === '0' ? 'DangerTextareaItem' : 'TextareaItem'
                  )
                "
                >{{
                  letData.cellIdx6 ? letData.cellIdx6 : "（点击编辑）"
                }}</span
              >
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line">法制审核意见：</span>
              <span
                @click="
                  commandFill('cellIdx8', '法制审核意见', 'SelectInputItem')
                "
                >{{
                  letData.cellIdx8 ? letData.cellIdx8 : "（点击编辑）"
                }}</span
              >
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line">建议案件处理意见：</span>
              <span
                @dblclick="commandFill('cellIdx7', '建议案件处理意见', `${corpData.caseType === '0' ? 'DangerTable' : 'TextareaItem'}`)"
                @click="
                  commandFill('cellIdx7', '建议案件处理意见', corpData.caseType === '0' ? 'DangerTextareaItem' : 'TextareaItem')
                "
                >{{
                  letData.cellIdx7 ? letData.cellIdx7 : "（点击编辑）"
                }}</span
              >
              <div class="line"></div>
            </div>
            <table height="60"></table>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:45%">
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;分管负责人意见：</span>
                <span @click="commandFill('cellIdx9', '分管负责人意见', 'TextItem')"
                  >{{ letData.cellIdx9 ? letData.cellIdx9 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">签名：</span>
                <span @click="commandFill('cellIdx10', '签名', 'TextItem')">{{
                  letData.cellIdx10 ? letData.cellIdx10 : "（点击编辑）"
                }}</span>
                <span class="no-line">日期：</span>
                <span @click="commandFill('cellIdx11', '日期', 'DateItem')">{{
                  letData.cellIdx11 ? letData.cellIdx11 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:45%">
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;主要负责人意见：</span>
                <span @click="commandFill('cellIdx12', '主要负责人意见', 'TextItem')"
                  >{{ letData.cellIdx12 ? letData.cellIdx12 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">签名：</span>
                <span @click="commandFill('cellIdx13', '签名', 'TextItem')">{{
                  letData.cellIdx13 ? letData.cellIdx13 : "（点击编辑）"
                }}</span>
                <span class="no-line">日期：</span>
                <span @click="commandFill('cellIdx14', '日期', 'DateItem')">{{
                  letData.cellIdx14 ? letData.cellIdx14 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <table height="30"></table>
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
import GoDB from "@/utils/godb.min.js";
import { setDangerTable } from '@/utils/handlePaperData'
import associationSelectPaper from "@/components/association-select-paper";
import { setNewDanger, getDocNumber2 } from '@/utils/setInitPaperData'

export default {
  name: "Let203",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {
        cellIdx0: null, //
        cellIdx1: null, // 编号
        cellIdx2: null, // 案由
        cellIdx3: null, // 立案决定书编号
        cellIdx4: null, // 立案时间
        cellIdx5: null, // 承办人
        cellIdx6: null, // 违法事实及依据
        cellIdx7: null, // 建议案件处理意见
        cellIdx8: null, // 法制审核意见
        cellIdx9: null, // 分管负责人意见
        cellIdx10: null, // 签名
        cellIdx11: null, // 日期
        cellIdx12: null, // 主要负责人意见
        cellIdx13: null, // 签名
        cellIdx14: null, // 日期
        DangerTable: null,
        extraData: null,
        associationPaperId: null,
        associationPaperOrder: []
      },
      options: {
        cellIdx8: []
      },
      associationPaper: this.corpData.caseType === '0' ? ["49"] : ["4"],// 关联行政法制审核意见书或者立案决定书
    };
  },
  methods: {
    async initLetData(selectedPaper) {
      if (this.corpData.caseType === '0') {
        let db = new GoDB(this.$store.state.DBName);
        let corpBase = db.table("corpBase");
        let corp = await corpBase.find((item) => {
          return item.corpId == this.corpData.corpId;
        });
        // 4.编号：
        let paperNumber = await getDocNumber2(db, this.docData.docTypeNo, this.corpData.caseId)
        // 5.获取立案决定书编号及立案日期,承办人
        let let49DataPaperContent = JSON.parse(
          selectedPaper.let49Data.paperContent
        );
        // 1.案由内容初始化：煤矿名称+隐患描述+“案”组成
        // 获取笔录文书中的隐患数据
        let cellIdx2String = setDangerTable(let49DataPaperContent.DangerTable, {}, { 
          page: '36', 
          key: 'cellIdx2',
          spellString: {
            corpName: corp.corpName,
            groupName: this.$store.state.curCase.provinceGroupName,
          },
        })
        // 2.违法事实及依据：隐患描述+“经调查取证以上违法违规行为属实，分别违反了”+违法认定发条
        let cellIdx6String = setDangerTable(let49DataPaperContent.DangerTable, {}, { 
          page: '36', 
          key: 'cellIdx6',
          spellString: {
            corpName: corp.corpName,
            groupName: this.$store.state.curCase.provinceGroupName,
          },
        })
        // 3.建议案件处理意见：行政处罚依据+行政处罚决定（分条）
        let cellIdx7String = setDangerTable(let49DataPaperContent.DangerTable, {}, { 
          page: '36', 
          key: 'cellIdx7',
          spellString: {
            corpName: corp.corpName,
            groupName: this.$store.state.curCase.provinceGroupName,
          },
        })
        let wkPaper = db.table('wkPaper')
        let let4Paper = await wkPaper.find(item => item.paperId === let49DataPaperContent.associationPaperId.paper4Id && item.delFlag !== '1')
        let let4DataPaperContent = JSON.parse(let4Paper.paperContent)
        let {
          cellIdx0,
          cellIdx1,
          cellIdx2,
          cellIdx3,
          cellIdx6,
          cellIdx7,
          cellIdx8,
          cellIdx9
        } = let4DataPaperContent;
        let let4PaperNumber = `${cellIdx0 || ''}煤安监${cellIdx1 || ''}立〔${cellIdx2 || ''}〕${cellIdx3 || ''}号`;
        let let4Date = `${cellIdx6 ? cellIdx6 : "XX"}年${
          cellIdx7 ? cellIdx7 : "XX"
        }月${cellIdx8 ? cellIdx8 : "XX"}日`;
        let let4Person = cellIdx9 ? cellIdx9 : 'XX'
        let DangerTable = let49DataPaperContent.DangerTable ? 
          setNewDanger(selectedPaper.let49Data, let49DataPaperContent.DangerTable)
          : {}
        let associationPaperId = Object.assign({}, this.setAssociationPaperId(let49DataPaperContent.associationPaperId), {
          paper49Id: selectedPaper.let49Data.paperId,
        }) 
        let associationPaperOrder = this.setAssociationPaperOrder(let49DataPaperContent.associationPaperOrder)
        associationPaperOrder.push('49')
        await db.close();
        this.letData = Object.assign({}, this.letData, {
          cellIdx1: paperNumber, // 编号
          cellIdx2: cellIdx2String, // 案由
          cellIdx3: let4PaperNumber, // 立案决定书编号
          cellIdx4: let4Date, // 立案时间
          cellIdx5: let4Person, // 承办人
          cellIdx6: cellIdx6String, // 违法事实及依据
          cellIdx7: cellIdx7String, // 建议案件处理意见
          DangerTable: DangerTable,
          extraData: {
            // 保存额外拼写的数据内容，用于修改隐患项时回显使用
            corpName: corp.corpName,
            groupName: this.$store.state.curCase.provinceGroupName,
          },
          associationPaperId: associationPaperId,
          associationPaperOrder,
          selectedType: let49DataPaperContent.selectedType
        })
      } else {
        let db = new GoDB(this.$store.state.DBName);
        let paperNumber = await getDocNumber2(db, this.docData.docTypeNo, this.corpData.caseId)
        await db.close();
        let let4DataPaperContent = JSON.parse(
          selectedPaper.let4Data.paperContent
        );
        let {
          cellIdx0,
          cellIdx1,
          cellIdx2,
          cellIdx3,
          cellIdx6,
          cellIdx7,
          cellIdx8,
          cellIdx9
        } = let4DataPaperContent;
        let let4PaperNumber = `${cellIdx0 || ''}煤安监${cellIdx1 || ''}立〔${cellIdx2 || ''}〕${cellIdx3 || ''}号`;
        let let4Date = `${cellIdx6 ? cellIdx6 : "XX"}年${
          cellIdx7 ? cellIdx7 : "XX"
        }月${cellIdx8 ? cellIdx8 : "XX"}日`;
        let let4Person = cellIdx9 ? cellIdx9 : 'XX'
        let associationPaperId = Object.assign({}, this.setAssociationPaperId(let4DataPaperContent.associationPaperId), {
          paper4Id: selectedPaper.let4Data.paperId,
        }) 
        let associationPaperOrder = this.setAssociationPaperOrder(let4DataPaperContent.associationPaperOrder)
        associationPaperOrder.push('4')
        this.letData = Object.assign({}, this.letData, {
          cellIdx1: paperNumber, // 编号
          cellIdx3: let4PaperNumber, // 立案决定书编号
          cellIdx4: let4Date, // 立案时间
          cellIdx5: let4Person, // 承办人
          associationPaperId: associationPaperId,
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
        let spellString = {};
        if (key === "cellIdx2" || key === "cellIdx6" || key === "cellIdx7") {
          if (type === 'DangerTable') {
            spellString = this.letData.extraData;
            this.options[key] = {
              page: "36",
              key: key,
              spellString,
              showMergeBtn: true,
              showPunishmentInfor: true
            };
            dataKey = "DangerTable";
          } else {
            this.options[key] = {
              disabled: false
            };
          }
        } else if (key === 'cellIdx8') {
          dataKey = `${key}Type${type}`;
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