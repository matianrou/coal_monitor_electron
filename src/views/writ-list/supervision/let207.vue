<!--行政处罚 一般程序  送达收执 9 -->
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
          <div class="stdRowH"></div>
          <div class="textAlignCenter formHeader0">
            煤矿安全监管行政执法文书
            <br />
          </div>
          <div class="textAlignCenter formHeader1">送达收执</div>
          <div class="docTextLine paper-number-div">
            <div>
              <span
                @click="commandFill('cellIdx0', '文书号', 'TextItem')"
              >{{ letData.cellIdx0 ? letData.cellIdx0 : '（编辑）' }}</span>
              <label>（</label>
              <span
                @click="commandFill('cellIdx1', '文书号', 'TextItem')"
              >{{ letData.cellIdx1 ? letData.cellIdx1 : '（编辑）' }}</span>
              <label>）煤安送〔</label>
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
          <div class="docTextarea">
              <span class="no-line">送达文书：</span>
              <span
                @click="commandFill('cellIdx4', '送达文书', 'TextItem')"
                >{{
                  letData.cellIdx4 ? letData.cellIdx4 : "（点击编辑）"
                }}</span
              >
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line">文书编号：</span>
              <span
                @click="commandFill('cellIdx5', '文书编号', 'TextItem')"
                >{{
                  letData.cellIdx5 ? letData.cellIdx5 : "（点击编辑）"
                }}</span
              >
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line">送达地点：</span>
              <span
                @click="commandFill('cellIdx6', '送达地点', 'TextItem')"
                >{{
                  letData.cellIdx6 ? letData.cellIdx6 : "（点击编辑）"
                }}</span
              >
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line">送达方式：</span>
              <span
                @click="commandFill('cellIdx7', '送达方式', 'SelectItem')"
                >{{
                  letData.cellIdx7 ? letData.cellIdx7 : "（点击编辑）"
                }}</span>
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:55%">
                <span class="no-line">
                  <span class="no-line">受送达</span>
                  <span class="no-line" @click="commandFill('cellIdx14', '（编辑）', 'TextItem')"
                  >{{ letData.cellIdx14 ? letData.cellIdx14 : "(编辑)" }}</span>
                （签名）：</span>
                <span @click="commandFill('cellIdx8', '（签名）', 'TextItem')"
                  >{{ letData.cellIdx8 ? letData.cellIdx8 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">日&nbsp;期：</span>
                <span @click="commandFill('cellIdx9', '日期', 'DateItem')">{{
                  letData.cellIdx9 ? letData.cellIdx9 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:55%">
                <span class="no-line">送达人（签名）：</span>
                <span @click="commandFill('cellIdx17', '送达人（签名）', 'TextItem')"
                  >{{ letData.cellIdx17 ? letData.cellIdx17 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">日&nbsp;期：</span>
                <span @click="commandFill('cellIdx11', '日期', 'DateItem')">{{
                  letData.cellIdx11 ? letData.cellIdx11 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
          <table class="docBody" style="margin-top: 60px; margin-bottom: 30px;">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_12"
                  align="right"
                  style="width:95%"
                  @click="commandFill('cellIdx12', '', 'TextItem')"
                >{{letData.cellIdx12 ? letData.cellIdx12 : '（点击编辑）'}}</td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_13"
                  align="right"
                  style="width:95%"
                  data-title
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx13', '日期', 'DateItem')"
                >{{letData.cellIdx13 ? letData.cellIdx13 : '（点击编辑）'}}</td>
              </tr>
            </table>
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
import { getDocNumber, setNewDanger } from '@/utils/setInitPaperData'
import associationSelectPaper from '@/components/association-select-paper'
export default {
  name: "Let207",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {
        cellIdx0: null, // 文书号
        cellIdx1: null, // 文书号
        cellIdx2: null, // 文书号
        cellIdx3: null, // 文书号
        cellIdx4: null, // 送达文书
        cellIdx5: null, // 文书字号
        cellIdx6: null, // 送达地点
        cellIdx7: null, // 送达方式
        cellIdx14: null, // 单位负责人/个人
        cellIdx8: null, // 受送达单位负责人（个人）（签名）
        cellIdx9: null, // 日期
        cellIdx10: null, // 送达人（签名）
        cellIdx11: null, // 日期
        cellIdx12: null, //
        cellIdx13: null, // 日期
        selectedType: null,
        DangerTable: null,
        associationPaperId: null,
        associationPaperOrder: []
      },
      options: {
        cellIdx7: [ // 送达方式码表
          {
            value: '直接送达',
            name: '直接送达'
          },
          {
            value: '留置送达',
            name: '留置送达'
          },
          {
            value: '委托送达',
            name: '委托送达'
          },
          {
            value: '邮寄送达',
            name: '邮寄送达'
          },
          {
            value: '公告送达',
            name: '公告送达'
          },
        ],
        cellIdx14: [
          {
            value: '单位负责人',
            name: '单位负责人',
          },
          {
            value: '个人',
            name: '个人',
          },
        ]
      },
      associationPaper: ['8']
    };
  },
  methods: {
    async initLetData (selectedPaper) {
      let corpBase = await this.getDatabase('baseInfo');
      let corp = corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      // 1.送达文书：国家煤矿安全监管行政处罚决定书
      let cellIdx4String = '国家煤矿安全监管行政处罚决定书'
      // 2.文书字号：使用行政处罚决定书的文书编号
      let let8DataPaperContent = JSON.parse(selectedPaper.let8Data.paperContent);
      let cellIdx5String = `${let8DataPaperContent.cellIdx0}（${let8DataPaperContent.cellIdx1}）煤安罚〔${let8DataPaperContent.cellIdx2}〕${let8DataPaperContent.cellIdx3}号`
      // 3.送达地点：煤矿名称
      let cellIdx6String = corp.corpName
      let paperNumber = await getDocNumber(this.docData.docTypeNo, this.corpData.caseId)
      // 获取行政处罚决定书中选择的单位/个人
      let selectedType = let8DataPaperContent.selectedType
      let selectedString = selectedType === '单位' ? '单位负责人' : '个人'
      let DangerTable = null
      if (this.corpData.caseType === '0') {
        DangerTable = let8DataPaperContent.DangerTable ? 
          setNewDanger(selectedPaper.let8Data, let8DataPaperContent.DangerTable)
          : {}
      }
      let associationPaperId = Object.assign({}, this.setAssociationPaperId(let8DataPaperContent.associationPaperId), {
        paper8Id: selectedPaper.let8Data.paperId
      }) 
      let associationPaperOrder = this.setAssociationPaperOrder(let8DataPaperContent.associationPaperOrder)
      associationPaperOrder.push('8')
      this.letData = Object.assign({}, this.letData, {
        cellIdx0: paperNumber.num0, // 文书号
        cellIdx1: paperNumber.num1, // 文书号
        cellIdx2: paperNumber.num3, // 文书号
        cellIdx3: paperNumber.num4, // 文书号
        cellIdx4: cellIdx4String, // 送达文书
        cellIdx5: cellIdx5String, // 文书字号
        cellIdx6: cellIdx6String, // 送达地点
        cellIdx7: null, // 送达方式
        cellIdx14: selectedString, // 单位负责人/个人
        cellIdx8: null, // 受送达单位负责人（个人）（签名）
        cellIdx9: null, // 日期
        cellIdx10: null, // 送达人（签名）
        cellIdx11: null, // 日期
        cellIdx12: this.$store.state.curCase.groupName, //
        cellIdx13: this.todayDate, // 日期
        selectedType: selectedType,
        DangerTable,
        associationPaperId,
        associationPaperOrder
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