<!-- 其他 其他 移送案件呈报书 35 -->
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
            <div class="textAlignCenter formHeader4">移 送 案 件 呈 报 书</div>
            <div class="docTextLine paper-number-div">
              <div>
                <!-- <span
                  @click="commandFill('cellIdx0', '', 'TextItem')"
                >{{ letData.cellIdx0 ? letData.cellIdx0 : '（编辑）' }}</span> -->
                <label>编号：</label>
                <span
                  class="line"
                  @click="commandFill('cellIdx1', '编号',  'TextItem')"
                  >{{
                    letData.cellIdx1 ? letData.cellIdx1 : "（点击编辑）"
                  }}</span
                >
              </div>
            </div>
            <div class="docTextarea">
              <span class="no-line">案&nbsp;&nbsp;由：</span>
              <span @click="commandFill('cellIdx2', '案由', 'TextareaItem')">{{
                letData.cellIdx2 ? letData.cellIdx2 : "（点击编辑）"
              }}</span>
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line">移送案件的理由和依据：</span>
              <span
                @click="commandFill('cellIdx3', '理由和依据', 'TextareaItem')"
              >
                {{ letData.cellIdx3 ? letData.cellIdx3 : "（点击编辑）" }}
              </span>
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line">&nbsp;&nbsp;&nbsp;</span>
              根据《中华人民共和国安全生产法》第六十九条规定，建议将该案件移送
              <span
                @click="commandFill('cellIdx4', '', 'TextItem')"
                >{{
                  letData.cellIdx4 ? letData.cellIdx4 : "（点击编辑）"
                }}</span>
                <!-- <span
                @click="commandFill('cellIdx5', '', 'TextItem')"
                >{{
                  letData.cellIdx5 ? letData.cellIdx5 : "（点击编辑）"
                }}</span> -->
              依法处理。
            </div>
            <table height="30"></table>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:60%">
                <span class="no-line">承办人（签名）：</span>
                <span @click="commandFill('cellIdx6', '承办人（签名）', 'TextItem')"
                  >{{ letData.cellIdx6 ? letData.cellIdx6 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">日期</span>
                <span @click="commandFill('cellIdx7', '日期', 'DateItem')">{{
                  letData.cellIdx7 ? letData.cellIdx7 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:45%">
                <span class="no-line">分管负责人意见：</span>
                <span @click="commandFill('cellIdx8', '分管负责人意见', 'TextItem')"
                  >{{ letData.cellIdx8 ? letData.cellIdx8 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">签名：</span>
                <span @click="commandFill('cellIdx9', '签名', 'TextItem')">{{
                  letData.cellIdx9 ? letData.cellIdx9 : "（点击编辑）"
                }}</span>
                <span class="no-line">日期：</span>
                <span @click="commandFill('cellIdx10', '日期', 'DateItem')">{{
                  letData.cellIdx10 ? letData.cellIdx10 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
                <div class="line1"></div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:45%">
                <span class="no-line">主要负责人意见：</span>
                <span @click="commandFill('cellIdx11', '主要负责人意见', 'TextItem')"
                  >{{ letData.cellIdx11 ? letData.cellIdx11 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">签名：</span>
                <span @click="commandFill('cellIdx12', '签名', 'TextItem')">{{
                  letData.cellIdx12 ? letData.cellIdx12 : "（点击编辑）"
                }}</span>
                <span class="no-line">日期：</span>
                <span @click="commandFill('cellIdx13', '日期', 'DateItem')">{{
                  letData.cellIdx13 ? letData.cellIdx13 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
                <div class="line1"></div>
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
import { getDangerObject, setNewDanger } from "@/utils/setInitPaperData";
import associationSelectPaper from '@/components/association-select-paper'
import { setDangerTable } from '@/utils/handlePaperData'
export default {
  name: "Let400",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {
        cellIdx0: null, //
        cellIdx1: null, // 编号
        cellIdx2: null, // 案由
        cellIdx3: null, // 理由和依据
        cellIdx4: null, // 人民法院
        cellIdx5: null, //
        cellIdx6: null, // 承办人（签名）
        cellIdx7: null, // 日期
        cellIdx8: null, // 分管负责人意见
        cellIdx9: null, // 签名
        cellIdx10: null, // 日期
        cellIdx11: null, // 主要负责人意见
        cellIdx12: null, // 签名
        cellIdx13: null, // 日期
        DangerTable: null,
        associationPaperId: null,
        associationPaperOrder: []
      },
      options: {},
      associationPaper: ['1']
    };
  },
  methods: {
    async initLetData (selectedPaper) {
      if (this.corpData.caseType === '0') {
        let corpBase = await this.getDatabase("baseInfo");
        let corp = corpBase.find((item) => {
          return item.corpId == this.corpData.corpId;
        });
        // 获取检查时间
        let let1DataPaperContent = JSON.parse(selectedPaper.let1Data.paperContent)
        // 检查时间日期：
        let dateString = let1DataPaperContent.cellIdx1 ? let1DataPaperContent.cellIdx1 : 'X年X月X日-X年X月X日'
        // 1.案由内容初始化：煤矿名称+隐患描述+“案”组成
        let dangerObject = getDangerObject(let1DataPaperContent.DangerTable.selectedDangerList)
        let cellIdx2String = this.corpData.caseType === '0' ? setDangerTable(
          let1DataPaperContent.DangerTable,
          {}, 
          {
            page: "35",
            key: "cellIdx2",
            spellString: {
              corpName: corp.corpName,
            },
          }
        ):'';
         // 2.理由和依据
          // 1，移送案件的理由和依据：立案时间+“我分局对”+煤矿名称+“进行安全监察时，发现该矿”+隐患描述+“经分局执法人员初步调查取证，认定该行为涉嫌违反了《矿产资源法》第十七条规定。” 
        let cellIdx3String = this.corpData.caseType === '0' ? setDangerTable(
          let1DataPaperContent.DangerTable,
          {}, 
          {
            page: "35",
            key: "cellIdx3",
            spellString: {
              corpName: corp.corpName,
              dateString: dateString
            },
          }
        ):'';
        let DangerTable = let1DataPaperContent.DangerTable ? 
          setNewDanger(selectedPaper.let1Data, let1DataPaperContent.DangerTable)
          : {}
        let associationPaperId = Object.assign({}, this.setAssociationPaperId(let1DataPaperContent.associationPaperId), {
          paper1Id: selectedPaper.let1Data.paperId,
        }) 
        let associationPaperOrder = this.setAssociationPaperOrder(let1DataPaperContent.associationPaperOrder)
        associationPaperOrder.push('1')
        // XXX国土资源局
        let cellIdx4String = "XXX国土资源局";
        this.letData = Object.assign({}, this.letData, {
          cellIdx2: cellIdx2String, // 案由
          cellIdx3: cellIdx3String, // 理由和依据
          cellIdx4: cellIdx4String, // 人民法院
          DangerTable: DangerTable,
          associationPaperId,
          associationPaperOrder
        })
      } else {
        let cellIdx2String = `${this.corpData.corpName}XXX案。`
        let cellIdx3String = `20XX年XX月XX日我分局对${this.corpData.corpName}进行安全监察时，发现该矿XXX。经分局执法人员初步调查取证，认定该行为涉嫌违反了《矿产资源法》第十七条规定。`
        let cellIdx4String = "XXX国土资源局";
        let associationPaperId = Object.assign({}, this.setAssociationPaperId(let1DataPaperContent.associationPaperId), {
          paper1Id: selectedPaper.let1Data.paperId,
        }) 
        let associationPaperOrder = this.setAssociationPaperOrder(let1DataPaperContent.associationPaperOrder)
        associationPaperOrder.push('1')
        this.letData = Object.assign({}, this.letData, {
          cellIdx2: cellIdx2String, // 案由
          cellIdx3: cellIdx3String, // 理由和依据
          cellIdx4: cellIdx4String, // 人民法院
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