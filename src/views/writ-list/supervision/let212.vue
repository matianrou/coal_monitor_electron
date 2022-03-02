<!--行政处罚 案件结案 罚款缴纳催告书 50 -->
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
            <div class="textAlignCenter formHeader1">罚款缴纳催告书</div>
            <div class="docTextLine paper-number-div">
              <div>
                <span
                  @click="commandFill('cellIdx0', '文书号', 'TextItem')"
                >{{ letData.cellIdx0 ? letData.cellIdx0 : '（编辑）' }}</span>
                <label>（</label>
                <span
                  @click="commandFill('cellIdx1', '文书号', 'TextItem')"
                >{{ letData.cellIdx1 ? letData.cellIdx1 : '（编辑）' }}</span>
                <label>）煤安催缴〔</label>
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
              本机关于
              <span
                @click="commandFill('cellIdx5', '年', 'TextItem')"
              >{{ letData.cellIdx5 ? letData.cellIdx5 : '（XX）'}}</span>
              年
              <span
                @click="commandFill('cellIdx6', '月', 'TextItem')"
              >{{ letData.cellIdx6 ? letData.cellIdx6 : '（XX）'}}</span>
              月
              <span
                @click="commandFill('cellIdx7', '日', 'TextItem')"
              >{{ letData.cellIdx7 ? letData.cellIdx7 : '（XX）'}}</span>
              日作出 《行政处罚决定书》（
              <span
                class="no-underline"
                @click="commandFill('cellIdx8', '行政处罚决定书文书号', 'TextItem')"
              >{{ letData.cellIdx8 ? letData.cellIdx8 : '（点击编辑）'}}</span>
              （
              <span
                class="no-underline"
                @click="commandFill('cellIdx9', '行政处罚决定书文书号', 'TextItem')"
              >{{ letData.cellIdx9 ? letData.cellIdx9 : '（点击编辑）'}}</span>
              ）煤安罚〔
              <span
                class="no-underline"
                @click="commandFill('cellIdx10', '行政处罚决定文书号', 'TextItem')"
              >{{ letData.cellIdx10 ? letData.cellIdx10 : '（点击编辑）'}}</span>
              〕
              <span
                class="no-underline"
                @click="commandFill('cellIdx11', '行政处罚决定文书号', 'TextItem')"
              >{{ letData.cellIdx11 ? letData.cellIdx11 : '（点击编辑）'}}</span>
              号），要求你
              <span
                class="no-underline"
              >{{ letData.cellIdx12 ? letData.cellIdx12 : '（点击编辑）'}}</span>
              于
              <span
                @click="commandFill('cellIdx13', '年', 'TextItem')"
              >{{ letData.cellIdx13 ? letData.cellIdx13 : '（XX）'}}</span>
              年
              <span
                @click="commandFill('cellIdx14', '月', 'TextItem')"
              >{{ letData.cellIdx14 ? letData.cellIdx14 : '（XX）'}}</span>
              月
              <span
                @click="commandFill('cellIdx15', '日', 'TextItem')"
              >{{ letData.cellIdx15 ? letData.cellIdx15 : '（XX）'}}</span>
              日前将罚款缴至
              <span
                @click="commandFill('cellIdx16', '罚款缴至', 'TextItem')"
              >{{ letData.cellIdx16 ? letData.cellIdx16 : '（点击编辑）'}}</span>
              。因你
              <span
                class="no-underline"
              >{{ letData.cellIdx17 ? letData.cellIdx17 : '（点击编辑）'}}</span>
              逾期未履行该处罚决定，依据《中华人民共和国行政强制法》第<span class="text-decoration">三十五</span>条规定，现催告你
              <span
                class="no-underline"
              >{{ letData.cellIdx17 ? letData.cellIdx17 : '（点击编辑）'}}</span>
              履行以上决定，本机关将依据《中华人民共和国行政处罚法》第<span class="text-decoration">七十二</span>条第<span class="text-decoration">一</span>款第<span class="text-decoration">一</span>项规定，每日按罚款数额的3%加处罚款。
            </div>
            <div class="docTextarea">
              <label style="width:5%"></label>
              如有异议，依据《中华人民共和国行政强制法》第<span class="text-decoration">三十六</span>条的规定，你
              <span
                class="no-underline"
              >{{ letData.cellIdx18 ? letData.cellIdx18 : '（点击编辑）'}}</span>
              有权向本机关提出陈述和申辩。
            </div>
             <div class="docTextarea" style="margin-top: 60px;">
              <div style="display:inline-block;min-width:55%">
                <span class="no-line">受送达人（签名）：</span>
                <span @click="commandFill('cellIdx19', '受送达人（签名）：', 'TextItem')"
                  >{{ letData.cellIdx19 ? letData.cellIdx19 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">日&nbsp;&nbsp;&nbsp;&nbsp;期：</span>
                <span @click="commandFill('cellIdx20', '日期', 'DateItem')">{{
                  letData.cellIdx20 ? letData.cellIdx20 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:55%">
                <span class="no-line">执法机关地址：</span>
                <span @click="commandFill('cellIdx21', '执法机关地址', 'TextItem')"
                  >{{ letData.cellIdx21 ? letData.cellIdx21 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">邮政编码：</span>
                <span @click="commandFill('cellIdx22', '邮政编码', 'TextItem')">{{
                  letData.cellIdx22 ? letData.cellIdx22 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:55%">
                <span class="no-line">执法机关联系人：</span>
                <span @click="commandFill('cellIdx23', '执法机关联系人', 'TextItem')"
                  >{{ letData.cellIdx23 ? letData.cellIdx23 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">联系电话：</span>
                <span @click="commandFill('cellIdx24', '联系电话', 'TextItem')">{{
                  letData.cellIdx24 ? letData.cellIdx24 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <table class="docBody" style="margin-top: 60px;">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_25"
                  align="right"
                  style="width:95%"
                  @click="commandFill('cellIdx25', '', 'TextItem')"
                >{{letData.cellIdx25 ? letData.cellIdx25 : '（点击编辑）'}}</td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_26"
                  align="right"
                  style="width:95%"
                  data-title
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx26', '日期', 'DateItem')"
                >{{letData.cellIdx26 ? letData.cellIdx26: '（点击编辑）'}}</td>
              </tr>
            </table>
            <div class="docTextarea" style="border-top: 2px solid #000;">
              备注：本文书一式两份：一份交被处罚
              <span
                style="borderBottom:none"
              >{{ letData.cellIdx27 ? letData.cellIdx27 : '（点击编辑）'}}</span>
              ，一份存档。 
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
import GoDB from "@/utils/godb.min.js";
import { getDocNumber, setNewDanger, getOrgData } from '@/utils/setInitPaperData'
import associationSelectPaper from '@/components/association-select-paper'
export default {
  name: "Let212",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {
        cellIdx0: null, // 文书号
        cellIdx1: null, // 文书号
        cellIdx2: null, // 文书号
        cellIdx3: null, // 文书号
        cellIdx4: null, // corpName
        cellIdx5: null, // 年
        cellIdx6: null, // 月
        cellIdx7: null, // 日
        cellIdx8: null, // 行政处罚决定书 文书号
        cellIdx9: null, // 行政处罚决定书 文书号
        cellIdx10: null, // 行政处罚决定书 文书号
        cellIdx11: null, // 行政处罚决定书 文书号
        cellIdx12: null, // 单位/个人
        cellIdx13: null, // 年
        cellIdx14: null, // 月
        cellIdx15: null, // 日
        cellIdx16: null, // 罚款缴至
        cellIdx17: null, // 单位/个人
        cellIdx18: null, // 暂不用
        cellIdx19: null, // 受送达人（签名）
        cellIdx20: null, // 日期
        cellIdx21: null, // 执法机关地址
        cellIdx22: null, // 邮政编码
        cellIdx23: null, // 执法机关联系人
        cellIdx24: null, // 联系电话
        cellIdx25: null, // 
        cellIdx26: null, // 日期
        cellIdx27: null, // 单位/个人
        DangerTable: null,
        extraData: {},
        associationPaperId: {},
        associationPaperOrder: []
      },
      options: {},
      associationPaper: ['8']
    };
  },
  methods: {
    async initLetData (selectedPaper) {
      // 1.生成文书编号
      let {num0, num1, num3, num4} = await getDocNumber(this.docData.docTypeNo, this.corpData.caseId)
      let let8DataPaperContent = JSON.parse(selectedPaper.let8Data.paperContent)
      // 2.被处罚单位个人
      let cellIdx4String = let8DataPaperContent.cellIdx5 || ''
      // 3.行政处罚决定书 日期、编号
      let date206 = selectedPaper.let8Data.createDate.split(' ')[0].split('-')
      let orgSysOfficeInfo = await getOrgData(this.$store.state.curCase.groupId)
      let DangerTable = null;
      if (this.corpData.caseType === "0") {
        DangerTable = let8DataPaperContent.DangerTable
          ? setNewDanger(
              selectedPaper.let8Data,
              let8DataPaperContent.DangerTable
            )
          : {};
      }
      let associationPaperId = Object.assign({}, this.setAssociationPaperId(let8DataPaperContent.associationPaperId), {
        paper8Id: selectedPaper.let8Data.paperId,
      }) 
      let associationPaperOrder = this.setAssociationPaperOrder(let8DataPaperContent.associationPaperOrder)
      associationPaperOrder.push('8')
      this.letData = Object.assign({}, this.letData, {
        cellIdx0: num0, // 文书号
        cellIdx1: num1, // 文书号
        cellIdx2: num3, // 文书号
        cellIdx3: num4, // 文书号
        cellIdx4: cellIdx4String, // 被处罚单位、个人
        cellIdx5: date206[0], // 年
        cellIdx6: date206[1], // 月
        cellIdx7: date206[2], // 日
        cellIdx8: let8DataPaperContent.cellIdx0, // 行政处罚决定书 文书号
        cellIdx9: let8DataPaperContent.cellIdx1, // 行政处罚决定书 文书号
        cellIdx10: let8DataPaperContent.cellIdx2, // 行政处罚决定书 文书号
        cellIdx11: let8DataPaperContent.cellIdx3, // 行政处罚决定书 文书号
        cellIdx12: let8DataPaperContent.selectedType, // 单位
        cellIdx16: orgSysOfficeInfo.accountName || '', // 银行
        cellIdx17: let8DataPaperContent.selectedType, // 单位
        cellIdx18: let8DataPaperContent.selectedType, // 单位
        cellIdx21: orgSysOfficeInfo.depAddress, // 执法机关地址
        cellIdx22: orgSysOfficeInfo.depPost, // 邮政编码
        cellIdx23: orgSysOfficeInfo.master, // 执法机关联系人
        cellIdx24: orgSysOfficeInfo.phone, // 联系电话
        cellIdx25: this.$store.state.curCase.groupName, //
        cellIdx26: this.todayDate, //日期
        cellIdx27: let8DataPaperContent.selectedType, //单位
        selectedType: let8DataPaperContent.selectedType, // 单位
        DangerTable: DangerTable,
        associationPaperId,
        associationPaperOrder,
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