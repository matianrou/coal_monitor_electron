<!-- 行政处罚 一般程序 行政处罚决定书 8 -->
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
            <div class="textAlignCenter formHeader4">行政处罚决定书</div>
            <div class="formHeader5 paper-number-div">
              <div>
                <span @click="commandFill('cellIdx0', '文书号', 'TextItem')">{{
                  letData.cellIdx0 ? letData.cellIdx0 : "（编辑）"
                }}</span>
                <label>煤安监</label>
                <span @click="commandFill('cellIdx1', '文书号', 'TextItem')">{{
                  letData.cellIdx1 ? letData.cellIdx1 : "（编辑）"
                }}</span>
                <label>罚〔</label>
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
              <span class="no-line" style="width:9%">被处罚</span>
              <span class="no-line" @click="commandFill('cellIdx4', '', 'SelectItem')">{{letData.cellIdx4}}</span>
              <span style="display:inline-block;min-width:36%;line-height: normal;max-width:36%" @click="commandFill('cellIdx5', '被处罚单位', 'TextItem')"
                >{{ letData.cellIdx5 ? letData.cellIdx5 : "（点击编辑）" }}
              </span>
              <span class="no-line" style="width:9%">地址：</span>
              <span style="display:inline-block;min-width:35%;line-height: normal;max-width:35%" @click="commandFill('cellIdx6', '地址', 'TextItem')">{{
                letData.cellIdx6 ? letData.cellIdx6 : "（点击编辑）"
              }}</span>
            </div>
            <div class="docTextarea">
              违法事实：
              <span
                @dblclick="commandFill('cellIdx7', '违法事实', `${corpData.caseType === '0' ? 'DangerTable' : 'TextareaItem'}`)"
                @click="commandFill('cellIdx7', '违法事实', corpData.caseType === '0' ? 'DangerTextareaItem' : 'TextareaItem')"
                >{{
                  letData.cellIdx7 ? letData.cellIdx7 : "（点击编辑）"
                }}</span
              >
              以上事实<span
                class="no-underline"
                @click="commandFill('cellIdx22', '', 'TextItem')"
                >{{letData.cellIdx22}}</span
              >违反了
              <span
                @dblclick="commandFill('cellIdx8', '法律规定', `${corpData.caseType === '0' ? 'DangerTable' : 'TextareaItem'}`)"
                @click="commandFill('cellIdx8', '法律规定', corpData.caseType === '0' ? 'DangerTextareaItem' : 'TextareaItem')"
                >{{
                  letData.cellIdx8 ? letData.cellIdx8 : "（点击编辑）"
                }}</span
              >
              的规定，依据
              <span
                @dblclick="commandFill('cellIdx9', '法律依据', `${corpData.caseType === '0' ? 'DangerTable' : 'TextareaItem'}`)"
                @click="commandFill('cellIdx9', '法律依据', corpData.caseType === '0' ? 'DangerTextareaItem' : 'TextareaItem')"
                >{{
                  letData.cellIdx9 ? letData.cellIdx9 : "（点击编辑）"
                }}</span
              >
              的规定，决定给予以下行政处罚：
              <span
                @dblclick="commandFill('cellIdx10', '行政处罚', `${corpData.caseType === '0' ? 'DangerTable' : 'TextareaItem'}`)"
                @click="commandFill('cellIdx10', '行政处罚', corpData.caseType === '0' ? 'DangerTextareaItem' : 'TextareaItem')"
                >{{
                  letData.cellIdx10 ? letData.cellIdx10 : "（点击编辑）"
                }}</span
              >
            </div>
            <div class="docTextarea">
              <label style="width: 5%"></label>
              接到本处罚决定书之日起15日内将罚款缴至
              <span @click="commandFill('cellIdx11', '银行', 'TextItem')">{{
                letData.cellIdx11 ? letData.cellIdx11 : "（点击编辑）"
              }}</span>
              银行
              <span
                @click="commandFill('cellIdx12', '支行（分理处）', 'TextItem')"
                >{{
                  letData.cellIdx12 ? letData.cellIdx12 : "（点击编辑）"
                }}</span
              >
              支行（分理处），账户名称：
              <span @click="commandFill('cellIdx13', '账户名称', 'TextItem')">{{
                letData.cellIdx13 ? letData.cellIdx13 : "（点击编辑）"
              }}</span>
              账号：
              <span @click="commandFill('cellIdx14', '账号', 'TextItem')">{{
                letData.cellIdx14 ? letData.cellIdx14 : "（点击编辑）"
              }}</span>
              地址：
              <span @click="commandFill('cellIdx15', '地址', 'TextItem')">{{
                letData.cellIdx15 ? letData.cellIdx15 : "（点击编辑）"
              }}</span>
              。到期不缴纳罚款的，每日按罚款数额的百分之三加处罚款。
            </div>
            <div class="docTextarea">
              <label style="width: 5%"></label>
              如对本处罚决定不服，可在接到本决定书之日起60日内向
              <span @click="commandFill('cellIdx16', '煤监机构', 'TextItem')">{{
                letData.cellIdx16 ? letData.cellIdx16 : "（点击编辑）"
              }}</span>
              申请行政复议或6个月内向
              <span @click="commandFill('cellIdx17', '法院', 'TextItem')">{{
                letData.cellIdx17 ? letData.cellIdx17 : "（点击编辑）"
              }}</span>
              法院提起行政诉讼，但不停止执行本决定。
            </div>
            <table height="30"></table>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_19"
                  align="right"
                  style="width: 95%"
                  @click="commandFill('cellIdx19', '', 'TextItem')"
                >
                  {{ letData.cellIdx19 ? letData.cellIdx19 : "（点击编辑）" }}
                </td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_20"
                  align="right"
                  style="width: 95%"
                  data-title
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx20', '日期', 'DateItem')"
                >
                  {{ letData.cellIdx20 ? letData.cellIdx20 : "（点击编辑）" }}
                </td>
              </tr>
            </table>
            <div class="docTextarea" style="border-top: 2px solid #000;">
              备注：本文书一式三份，一份交被处罚
              <span
                style="borderBottom:none"
              >{{ letData.cellIdx21 ? letData.cellIdx21 : '（点击编辑）'}}</span>
              ，一份交银行，一份存档。
            </div>
          </div>
        </div>
      </div>
    </let-main>
    <el-dialog
      title="文书信息选择"
      :close-on-click-modal="false"
      append-to-body
      :visible="visibleSelectDialog"
      width="400px"
      :show-close="false"
    >
      <span>请选择：</span>
      <el-radio-group v-model="selectedType">
        <el-radio label="单位">单位</el-radio>
        <el-radio label="个人">个人</el-radio>
      </el-radio-group>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="confirm">确定</el-button>
      </span>
    </el-dialog>
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
import {
  getDocNumber,
  setNewDanger,
  getOrgData,
} from "@/utils/setInitPaperData";
import associationSelectPaper from "@/components/association-select-paper";
import { setDangerTable } from '@/utils/handlePaperData'
export default {
  name: "Let206",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {
        cellIdx0: null, // 文书号
        cellIdx1: null, // 文书号
        cellIdx2: null, // 文书号
        cellIdx3: null, // 文书号
        cellIdx4: null, // 单位/个人
        cellIdx5: null, // 被处罚
        cellIdx6: null, // 地址
        cellIdx7: null, // 违法事实
        cellIdx22: null, // 分别 || ''
        cellIdx8: null, // 法律规定
        cellIdx9: null, // 法律依据
        cellIdx10: null, // 行政处罚
        cellIdx11: null, //
        cellIdx12: null, // 银行
        cellIdx13: null, // 支行（分理处），账户名称
        cellIdx14: null, // 账号
        cellIdx15: null, // 地址
        cellIdx16: null, // 煤监机构
        cellIdx17: null, // 人民法院
        cellIdx18: null, // 暂不用
        cellIdx19: null, // 
        cellIdx20: null, // 日期
        cellIdx21: null, // 单位/个人
        cellIdx22: null, // 
        DangerTable: null,
        selectedType: null,
        associationPaperId: null,
        associationPaperOrder: []
      },
      options: {
        cellIdx4: [
          {
            value: "单位",
            name: "单位",
          },
          {
            value: "个人",
            name: "个人",
          },
        ],
      },
      selectAssociationPaper: this.corpData.caseType === '0' ? ['6', '1'] : ['6'],
      visibleSelectDialog: false,
      selectedType: "单位", // 初始化时选择的单位或个人
    };
  },
  methods: {
    async initLetData(selectedPaper) {
      let corpBase = await this.getDatabase("baseInfo");
      // 3.被处罚：如果为单位时赋值煤矿名称coprName
      // 4.地址：如果为单位时赋值煤矿地址address
      let corp = corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      let cellIdx4String = '';
      let selectletData = {}
      let letDataPaperContent = {}
      let associationPaperId = {}
      let associationPaperOrder = []
      if (selectedPaper.let6Data) {
        // 如果是关联告知书则直接获取告知书的单位或个人
        letDataPaperContent = JSON.parse(
          selectedPaper.let6Data.paperContent
        );
        cellIdx4String = letDataPaperContent.selectedType;
        selectletData = selectedPaper.let6Data
        associationPaperId = Object.assign({}, this.setAssociationPaperId(letDataPaperContent.associationPaperId), {
          paper6Id: selectedPaper.let6Data.paperId,
        }) 
        associationPaperOrder = this.setAssociationPaperOrder(letDataPaperContent.associationPaperOrder)
        associationPaperOrder.push('6')
      } else {
        // 1.如果没关联告知书则弹出提示框，选择单位或个人
        this.visibleSelectDialog = true
        letDataPaperContent = JSON.parse(
          selectedPaper.let1Data.paperContent
        );
        selectletData = selectedPaper.let1Data
        associationPaperId = Object.assign({}, this.setAssociationPaperId(letDataPaperContent.associationPaperId), {
          paper1Id: selectedPaper.let1Data.paperId,
        }) 
        associationPaperOrder = this.setAssociationPaperOrder(letDataPaperContent.associationPaperOrder)
        associationPaperOrder.push('1')
      }
      // 1.关联行政处罚告知书
      // 2.单位/个人：行政处罚告知书中的单位/个人selectedType
      let cellIdx7String = ''
      let cellIdx22String = ''
      let cellIdx8String = ''
      let cellIdx9String = ''
      let cellIdx10String = ''
      if (this.corpData.caseType === '0') {
        // 一般监察类文书
        // 5.违法事实：行政处罚告知书中的cellIdx6
        cellIdx7String = setDangerTable(letDataPaperContent.DangerTable, {}, {
            page: "8",
            key: "cellIdx7",
          }
        );
        // 是否多条显示分别
        cellIdx22String = setDangerTable(letDataPaperContent.DangerTable, {}, {
            page: "8",
            key: "cellIdx22",
          }
        );
        // 6.法律规定 :行政处罚告知书中的cellIdx7
        cellIdx8String = setDangerTable(letDataPaperContent.DangerTable, {}, {
            page: "8",
            key: "cellIdx8",
          }
        );
        // 7.法律依据 :行政处罚告知书中的cellIdx8
        cellIdx9String = setDangerTable(letDataPaperContent.DangerTable, {}, {
            page: "8",
            key: "cellIdx9",
          }
        );
        // 8.行政处罚 :行政处罚告知书中的cellIdx9
        cellIdx10String = setDangerTable(letDataPaperContent.DangerTable, {}, {
            page: "8",
            key: "cellIdx10",
          }
        );
      } else if (this.corpData.caseType === '1' && selectedPaper.let6Data) {
        // 当为事故，且关联的行政处罚告知书时，带回行政处罚告知书中内容
        cellIdx7String = letDataPaperContent.cellIdx6
        cellIdx8String = letDataPaperContent.cellIdx7
        cellIdx9String = letDataPaperContent.cellIdx8
        cellIdx10String = letDataPaperContent.cellIdx10
      }
      // 9.机构接口中sysOfficeInfo实体中对应：
      // accountName；银行：accountBank；账户名称：billName；账号：account；
      // 地址：accountAddress；组织机构名：organName；法院：courtPrefix
      let orgSysOfficeInfo = await getOrgData(this.$store.state.curCase.groupId)
      let paperNumber = await getDocNumber(
        this.docData.docTypeNo,
        this.corpData.caseId
      );
      let DangerTable = this.corpData.caseType === '0' ? 
        setNewDanger(selectletData, letDataPaperContent.DangerTable)
        : null
      this.letData = Object.assign({}, this.letData, {
        cellIdx0: paperNumber.num0, // 文书号
        cellIdx1: paperNumber.num1, // 文书号
        cellIdx2: paperNumber.num3, // 文书号
        cellIdx3: paperNumber.num4, // 文书号
        cellIdx4: cellIdx4String, // 单位/个人
        cellIdx5: cellIdx4String === "单位" ? corp.corpName : "", // 被处罚
        cellIdx6: cellIdx4String === "单位" ? corp.address : "", // 地址
        cellIdx7: cellIdx7String, // 违法事实
        cellIdx22: cellIdx22String, // 分别
        cellIdx8: cellIdx8String, // 法律规定
        cellIdx9: cellIdx9String, // 法律依据
        cellIdx10: cellIdx10String, // 行政处罚
        cellIdx11: orgSysOfficeInfo.accountName, // 银行
        cellIdx12: orgSysOfficeInfo.accountBank, // 支行（分理处）
        cellIdx13: orgSysOfficeInfo.billName, // ，账户名称
        cellIdx14: orgSysOfficeInfo.account, // 账号
        cellIdx15: orgSysOfficeInfo.accountAddress, // 地址
        cellIdx16: '国家矿山安全监察局', // 煤监机构
        cellIdx17: orgSysOfficeInfo.courtPrefix, // 人民法院
        cellIdx19: this.$store.state.curCase.provinceGroupName, // 
        cellIdx20: this.todayDate, // 日期
        cellIdx21: cellIdx4String, // 单位/个人
        DangerTable: DangerTable || null,
        selectedType: letDataPaperContent.selectedType,
        associationPaperId: associationPaperId,
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
        if (key === "cellIdx7" ||
          key === "cellIdx8" ||
          key === "cellIdx9" ||
          key === "cellIdx10") {
          if (type === 'DangerTable') {
            this.options[key] = {
              page: "8",
              key: key,
              selectedType: this.letData.selectedType,
              showMergeBtn: true,
              showPunishmentInfor: true
            };
            dataKey = "DangerTable";
          } else {
            if (this.corpData.caseType === '0' && (key === "cellIdx10")) {
              this.options[key] = {
                disabled: true
              };
            } else {
              this.options[key] = {
                disabled: false
              };
            }
          }
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
    async confirm() {
      // 选择单位或个人
      this.visibleSelectDialog = false;
      this.letData.cellIdx4 = this.selectedType;
      this.letData.cellIdx21 = this.selectedType;
      this.letData.selectedType = this.selectedType;
      if (this.selectedType === "单位") {
        let corpBase = await this.getDatabase("baseInfo");
        let corp = corpBase.find((item) => {
          return item.corpId == this.corpData.corpId;
        });
        // 按单位初始化信息
        // 1.单位名称
        this.letData.cellIdx5 = corp.corpName;
        this.letData.cellIdx6 = corp.address;
      } else {
        // 按个人初始化信息
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/let";
</style>