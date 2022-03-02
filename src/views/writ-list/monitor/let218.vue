<!--行政处罚 案件结案 加处罚款决定书 52 -->
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
            <div class="textAlignCenter formHeader2">
              国 家 矿 山 安 全 监 察
              <br />
            </div>
            <div class="textAlignCenter formHeader4">加处罚款决定书</div>
            <div class="formHeader5 paper-number-div">
              <div>
                <span
                  @click="commandFill('cellIdx0', '文书号', 'TextItem')"
                >{{ letData.cellIdx0 ? letData.cellIdx0 : '（编辑）' }}</span>
                <label>煤安监</label>
                <span
                  @click="commandFill('cellIdx1', '文书号', 'TextItem')"
                >{{ letData.cellIdx1 ? letData.cellIdx1 : '（编辑）' }}</span>
                <label>加罚〔</label>
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
                  style="min-width:50%"
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
              我局于
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
              日向你
              <span
                class="no-underline"
              >{{ letData.cellIdx8 ? letData.cellIdx8 : '（点击编辑）'}}</span>
              送达 《行政处罚决定书》（
              <span
                class="no-underline"
                @click="commandFill('cellIdx9', '行政处罚决定书文书号', 'TextItem')"
              >{{ letData.cellIdx9 ? letData.cellIdx9 : '（点击编辑）'}}</span>
              煤安监
              <span
                class="no-underline"
                @click="commandFill('cellIdx10', '行政处罚决定书文书号', 'TextItem')"
              >{{ letData.cellIdx10 ? letData.cellIdx10 : '（点击编辑）'}}</span>
              罚〔
              <span
                class="no-underline"
                @click="commandFill('cellIdx11', '行政处罚决定文书号', 'TextItem')"
              >{{ letData.cellIdx11 ? letData.cellIdx11 : '（点击编辑）'}}</span>
              〕
              <span
                class="no-underline"
                @click="commandFill('cellIdx12', '行政处罚决定文书号', 'TextItem')"
              >{{ letData.cellIdx12 ? letData.cellIdx12 : '（点击编辑）'}}</span>
              号），对你
              <span
                class="no-underline"
              >{{ letData.cellIdx13 ? letData.cellIdx13 : '（点击编辑）'}}</span>
              罚款
              <span
                @click="commandFill('cellIdx14', '罚款', 'TextItem')"
              >{{ letData.cellIdx14 ? letData.cellIdx14 : '（点击编辑）'}}</span>
              ，要求于
              <span
                @click="commandFill('cellIdx15', '年', 'TextItem')"
              >{{ letData.cellIdx15 ? letData.cellIdx15 : '（XX）'}}</span>
              年
              <span
                @click="commandFill('cellIdx16', '月', 'TextItem')"
              >{{ letData.cellIdx16 ? letData.cellIdx16 : '（XX）'}}</span>
              月
              <span
                @click="commandFill('cellIdx17', '日', 'TextItem')"
              >{{ letData.cellIdx17 ? letData.cellIdx17 : '（XX）'}}</span>
              日前履行。 截至
              <span
                @click="commandFill('cellIdx18', '年', 'TextItem')"
              >{{ letData.cellIdx18 ? letData.cellIdx18 : '（XX）'}}</span>
              年
              <span
                @click="commandFill('cellIdx19', '月', 'TextItem')"
              >{{ letData.cellIdx19 ? letData.cellIdx19 : '（XX）'}}</span>
              月
              <span
                @click="commandFill('cellIdx20', '日', 'TextItem')"
              >{{ letData.cellIdx20 ? letData.cellIdx20 : '（XX）'}}</span>
              日你
              <span
                class="no-underline"
              >{{ letData.cellIdx21 ? letData.cellIdx21 : '（点击编辑）'}}</span>
              仍未履行该行政处罚决定，依据《中华人民共和国行政处罚法》第<span class="text-decoration">七十二</span>条第<span class="text-decoration">一</span>款第<span class="text-decoration">一</span>项规定，本机关决定对你
              <span
                class="no-underline"
              >{{ letData.cellIdx21 ? letData.cellIdx21 : '（点击编辑）'}}</span>
              加处罚款
              <span
                @click="commandFill('cellIdx22', '加处罚款', 'TextItem')"
              >{{ letData.cellIdx22 ? letData.cellIdx22 : '（点击编辑）'}}</span>
              ，并于
              <span
                @click="commandFill('cellIdx23', '年', 'TextItem')"
              >{{ letData.cellIdx23 ? letData.cellIdx23 : '（XX）'}}</span>
              年
              <span
                @click="commandFill('cellIdx24', '月', 'TextItem')"
              >{{ letData.cellIdx24 ? letData.cellIdx24 : '（XX）'}}</span>
              月
              <span
                @click="commandFill('cellIdx25', '日', 'TextItem')"
              >{{ letData.cellIdx25 ? letData.cellIdx25 : '（XX）'}}</span>
              日前将加处的罚款缴至
              <span
                @click="commandFill('cellIdx26', '银行', 'TextItem')"
              >{{ letData.cellIdx26 ? letData.cellIdx26 : '（点击编辑）'}}</span>
              银行
              <span
                @click="commandFill('cellIdx27', '支行（分理处）', 'TextItem')"
              >{{ letData.cellIdx27 ? letData.cellIdx27 : '（点击编辑）'}}</span>
              支行（分理处），账户名称：
              <span
                @click="commandFill('cellIdx28', '账户名称', 'TextItem')"
              >{{ letData.cellIdx28 ? letData.cellIdx28 : '（点击编辑）'}}</span>
              账号：
              <span
                @click="commandFill('cellIdx29', '账号', 'TextItem')"
              >{{ letData.cellIdx29 ? letData.cellIdx29 : '（点击编辑）'}}</span>
              地址：
              <span
                @click="commandFill('cellIdx30', '地址', 'TextItem')"
              >{{ letData.cellIdx30 ? letData.cellIdx30 : '（点击编辑）'}}</span>
              。
            </div>
            <div class="docTextarea">
              <label style="width:5%"></label>
              如对本处罚决定不服，可在接到本决定书之日起60日内向
              <span
                @click="commandFill('cellIdx31', '人民政府', 'TextItem')"
              >{{ letData.cellIdx31 ? letData.cellIdx31 : '（点击编辑）'}}</span>
              申请行政复议或6个月内向
              <span
                @click="commandFill('cellIdx33', '', 'TextItem')"
              >{{ letData.cellIdx33 ? letData.cellIdx33 : '（点击编辑）'}}</span>
              法院提起行政诉讼，但不停止执行本决定。
            </div>
            <table class="docBody" style="margin-top: 60px; margin-bottom: 30px;">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_34"
                  align="right"
                  style="width:95%"
                  @click="commandFill('cellIdx34', '', 'TextItem')"
                >{{letData.cellIdx34 ? letData.cellIdx34 : '（点击编辑）'}}</td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_35"
                  align="right"
                  style="width:95%"
                  data-title
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx35', '日期', 'DateItem')"
                >{{letData.cellIdx35 ? letData.cellIdx35: '（点击编辑）'}}</td>
              </tr>
            </table>
            <div class="docTextarea" style="border-top: 2px solid #000;">
              备注：本文书一式三份；一份交银行，一份交被处罚
              <span
                style="borderBottom:none"
              >{{ letData.cellIdx36 ? letData.cellIdx36 : '（点击编辑）'}}</span>
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
import { getOrgData, getDocNumber, setNewDanger } from "@/utils/setInitPaperData";
import associationSelectPaper from '@/components/association-select-paper'
import { transformNumToChinese, thousands } from '@/utils/index'
export default {
  name: "Let218",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {
        cellIdx0: null, // 文书号
        cellIdx1: null, // 文书号
        cellIdx2: null, // 文书号
        cellIdx3: null, // 文书号
        cellIdx4: null, // corpname
        cellIdx5: null, // 年
        cellIdx6: null, // 月
        cellIdx7: null, // 日
        cellIdx8: null, // 单位
        cellIdx9: null, // 行政处罚决定书 文书号
        cellIdx10: null, // 行政处罚决定书 文书号
        cellIdx11: null, // 行政处罚决定书 文书号
        cellIdx12: null, // 行政处罚决定书 文书号
        cellIdx13: null, // 单位
        cellIdx14: null, // 罚款
        cellIdx15: null, // 年
        cellIdx16: null, // 月
        cellIdx17: null, // 日
        cellIdx18: null, // 年
        cellIdx19: null, // 月
        cellIdx20: null, // 日
        cellIdx21: null, // 单位
        cellIdx22: null, // 加处罚款
        cellIdx23: null, // 年
        cellIdx24: null, // 月
        cellIdx25: null, // 日
        cellIdx26: null, // 银行
        cellIdx27: null, // 支行（分理处）
        cellIdx28: null, // 账户名称
        cellIdx29: null, // 账号
        cellIdx30: null, // 地址
        cellIdx31: null, // 人民政府
        cellIdx32: null, // 暂不用
        cellIdx33: null, // 人民法院
        cellIdx34: null, //
        cellIdx35: null, // 日期
        cellIdx36: null, // 单位
        DangerTable: null,
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
      let { num0, num1, num3, num4 } = await getDocNumber(
        this.docData.docTypeNo,
        this.corpData.caseId
      );
      // 2.时间
      let now = new Date();
      let cellIdx6Year = now.getFullYear().toString();
      let cellIdx7Month = (now.getMonth() + 1).toString();
      let cellIdx8Date = now.getDate().toString();
      // 3.行政处罚决定书 日期、编号、
      let let8DataPaperContent = JSON.parse(selectedPaper.let8Data.paperContent);
      let date206 = selectedPaper.let8Data.createDate.split(' ')[0].split('-')
      // 4.sysOfficeInfo中 goverPrefix和organName和courtPrefix
      let orgSysOfficeInfo = await getOrgData(this.$store.state.curCase.groupId)
      // 5.被处罚单位个人
      let cellIdx4String = let8DataPaperContent.cellIdx5 || ''
      // 6.获取行政处罚中的罚款金额
      // 带入行政处罚决定书的处罚金额 .罚款数额的填写应当使用中文大写填写，后面用括号标明“¥+阿拉伯数字”，如“人民币贰万元整（¥20,000.00）
      let moneyChinese = ''
      let moneyThousands = ''
      if (selectedPaper.let8Data.p8Penalty) {
        moneyChinese = transformNumToChinese(selectedPaper.let8Data.p8Penalty)
        moneyThousands = thousands(selectedPaper.let8Data.p8Penalty, 2)
      }
      let cellIdx14String = selectedPaper.let8Data.p8Penalty ?`${moneyChinese}（¥${moneyThousands}）` : ''
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
        cellIdx4: cellIdx4String, // 被处罚单位个人
        cellIdx5: date206[0], // 年
        cellIdx6: date206[1], // 月
        cellIdx7: date206[2], // 日
        cellIdx8: let8DataPaperContent.selectedType, // 单位
        cellIdx9: let8DataPaperContent.cellIdx0, // 行政处罚决定书 文书号
        cellIdx10: let8DataPaperContent.cellIdx1, // 行政处罚决定书 文书号
        cellIdx11: let8DataPaperContent.cellIdx2, // 行政处罚决定书 文书号
        cellIdx12: let8DataPaperContent.cellIdx3, // 行政处罚决定书 文书号
        cellIdx13: let8DataPaperContent.selectedType, // 单位
        cellIdx14: cellIdx14String, // 罚款
        cellIdx21: let8DataPaperContent.selectedType, // 单位
        cellIdx26: orgSysOfficeInfo.accountName, // 银行
        cellIdx27: orgSysOfficeInfo.accountBank, // 支行（分理处）
        cellIdx28: orgSysOfficeInfo.billName, // 账户名称
        cellIdx29: orgSysOfficeInfo.account, // 账号
        cellIdx30: orgSysOfficeInfo.accountAddress, // 地址
        cellIdx31: '国家矿山安全监察局', // 人民政府
        cellIdx33: orgSysOfficeInfo.courtPrefix, // 人民法院
        cellIdx34: this.$store.state.curCase.provinceGroupName, //
        cellIdx35: this.todayDate, // 日期
        cellIdx36: let8DataPaperContent.selectedType, // 单位
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