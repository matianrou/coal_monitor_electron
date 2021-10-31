<!-- 行政处罚 一般程序 行政处罚决定书 8 -->
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
            <div class="textAlignCenter formHeader1">行政处罚决定书</div>
            <div class="docTextLine paper-number-div">
              <div>
                <span
                  @click="commandFill('cellIdx0', '文书号', 'TextItem')"
                >{{ letData.cellIdx0 ? letData.cellIdx0 : '（编辑）' }}</span>
                <label>（</label>
                <span
                  @click="commandFill('cellIdx1', '文书号', 'TextItem')"
                >{{ letData.cellIdx1 ? letData.cellIdx1 : '（编辑）' }}</span>
                <label>）煤安罚〔</label>
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
              <label>被处罚</label>
              <span
                class="no-underline"
              >{{ letData.cellIdx4 ? letData.cellIdx4 : '（点击编辑）'}}</span>
              <span
                @click="commandFill('cellIdx5', `被处罚${letData.cellIdx4}`, 'TextItem')"
              >{{ letData.cellIdx5 ? letData.cellIdx5 : '（点击编辑）'}}</span>
              地址：
              <span
                @click="commandFill('cellIdx6', '地址', 'TextItem')"
              >{{ letData.cellIdx6 ? letData.cellIdx6 : '（点击编辑）' }}</span>
            </div>
            <div class="docTextarea">
              违法事实：
              <span
                @click="commandFill('cellIdx7', '违法事实', 'DangerTable')"
              >{{ letData.cellIdx7 ? letData.cellIdx7 : '（点击编辑）'}}</span>
              以上事实违反了
              <span
                @click="commandFill('cellIdx8', '法律规定', 'DangerTable')"
              >{{ letData.cellIdx8 ? letData.cellIdx8 : '（点击编辑）'}}</span>
              的规定，依据
              <span
                @click="commandFill('cellIdx9', '法律依据', 'DangerTable')"
              >{{ letData.cellIdx9 ? letData.cellIdx9 : '（点击编辑）'}}</span>
              的规定，决定给予以下行政处罚：
              <span
                @click="commandFill('cellIdx10', '行政处罚', 'DangerTable')"
              >{{ letData.cellIdx10 ? letData.cellIdx10 : '（点击编辑）'}}</span>
              。
            </div>
            <!-- <div class="docTextarea">
              
              <div class="line"></div>
            </div> -->
            <div class="docTextarea">
              <label style="width: 2em;"></label>
              接到本处罚决定书之日起15日内将罚款缴至
              <span
                @click="commandFill('cellIdx11', '银行', 'TextItem')"
              >{{ letData.cellIdx11 ? letData.cellIdx11 : '（点击编辑）'}}</span>
              银行
              <span
                @click="commandFill('cellIdx12', '支行（分理处）', 'TextItem')"
              >{{ letData.cellIdx12 ? letData.cellIdx12 : '（点击编辑）'}}</span>
              支行（分理处），账户名称：
              <span
                @click="commandFill('cellIdx13', '账户名称', 'TextItem')"
              >{{ letData.cellIdx13 ? letData.cellIdx13 : '（点击编辑）' }}</span>
              账号：
              <span
                @click="commandFill('cellIdx14', '账号', 'TextItem')"
              >{{ letData.cellIdx14 ? letData.cellIdx14 : '（点击编辑）' }}</span>
              地址：
              <span
                @click="commandFill('cellIdx15', '地址', 'TextItem')"
              >{{ letData.cellIdx15 ? letData.cellIdx15 : '（点击编辑）' }}</span>
              。到期不缴纳罚款的，每日按罚款数额的百分之三加处罚款。
            </div>
            <div class="docTextarea">
              <label style="width: 2em;"></label>
              如果不服本决定，可在接到本决定书之日起60日内向
              <span
                @click="commandFill('cellIdx16', '人民政府', 'TextItem')"
              >{{ letData.cellIdx16 ? letData.cellIdx16 : '（点击编辑）'}}</span>
              人民政府或者
              <span
                @click="commandFill('cellIdx17', '', 'TextItem')"
              >{{ letData.cellIdx17 ? letData.cellIdx17 : '（点击编辑）'}}</span>
              申请行政复议，或者在6个月内依法向
              <span
                @click="commandFill('cellIdx18', '人民法院', 'TextItem')"
              >{{ letData.cellIdx18 ? letData.cellIdx18 : '（点击编辑）' }}</span>
              人民法院提起行政诉讼，复议、诉讼期间，不停止执行本决定。
            </div>
            <table class="docBody" style="margin-top: 60px;">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_19"
                  align="right"
                  style="width:95%"
                  @click="commandFill('cellIdx19', '', 'TextItem')"
                >{{letData.cellIdx19 ? letData.cellIdx19 : '（点击编辑）'}}</td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_20"
                  align="right"
                  style="width:95%"
                  data-title
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx20', '日期', 'DateItem')"
                >{{letData.cellIdx20 ? letData.cellIdx20 : '（点击编辑）'}}</td>
              </tr>
            </table>
            <div class="docTextarea" style="border-top: 2px solid #000;">
              备注：本文书一式三份，一份交银行，一份交被罚处
              <span
                style="borderBottom:none"
                @click="commandFill('cellIdx21', '单位/个人', 'TextItem')"
              >{{ letData.cellIdx21 ? letData.cellIdx21 : '（点击编辑）'}}</span>
              ，一份存档。 
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
import { getDangerObject, transformNumToChinese, getDocNumber } from '@/utils/setInitPaperData'
import associationSelectPaper from '@/components/association-select-paper'
export default {
  name: "Let206",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {},
      options: {
        cellIdx4: [
          {
            value: '单位',
            name: '单位'
          },
          {
            value: '个人',
            name: '个人'
          },
        ],
        cellIdx7: {
          page: '8',
          key: 'cellIdx7'
        },
        cellIdx8: {
          page: '8',
          key: 'cellIdx8'
        },
        cellIdx9: {
          page: '8',
          key: 'cellIdx9'
        },
        cellIdx10: {
          page: '8',
          key: 'cellIdx10'
        },
      },
      associationPaper: ['6']
    };
  },
  methods: {
    async initLetData (selectedPaper) {
      const db = new GoDB(this.$store.state.DBName);
      const corpBase = db.table("corpBase");
      const corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      // 1.关联行政处罚告知书
      // 2.单位/个人：行政处罚告知书中的单位/个人cellIdx5
      let let6DataPaperContent = JSON.parse(selectedPaper.let6Data.paperContent)
      let cellIdx4String = let6DataPaperContent.selectedType
      // 3.被处罚：如果为单位时赋值煤矿名称coprName
      // 4.地址：如果为单位时赋值煤矿地址address
      // 5.违法事实：行政处罚告知书中的cellIdx6
      let dangerObject = getDangerObject(let6DataPaperContent.DangerTable.tableData, {danger: true})
      // 6.法律规定 :行政处罚告知书中的cellIdx7
      // 7.法律依据 :行政处罚告知书中的cellIdx8
      // 8.行政处罚 :行政处罚告知书中的cellIdx9
      // 9.机构接口中sysOfficeInfo实体中对应：
      // accountName；银行：accountBank；账户名称：billName；账号：account；
      // 地址：accountAddress；组织机构名：organName；法院：courtPrefix
      const orgInfo = db.table("orgInfo");
      const orgData = await orgInfo.find(item => item.no === this.$store.state.user.userGroupId)
      let orgSysOfficeInfo = orgData && orgData.sysOfficeInfo ? JSON.parse(orgData.sysOfficeInfo) : {accountName: '', accountBank: '', billName: '', account: '', accountAddress: '', organName: '', courtPrefix: ''}
      let paperNumber = await getDocNumber(db, this.docData.docTypeNo, this.corpData.caseId, this.$store.state.user)
      await db.close();
      this.letData = {
        cellIdx0: paperNumber.num0, // 文书号
        cellIdx0TypeTextItem: paperNumber.num0, // 文书号
        cellIdx1: paperNumber.num1, // 文书号
        cellIdx1TypeTextItem: paperNumber.num1, // 文书号
        cellIdx2: paperNumber.num3, // 文书号
        cellIdx2TypeTextItem: paperNumber.num3, // 文书号
        cellIdx3: paperNumber.num4, // 文书号
        cellIdx3TypeTextItem: paperNumber.num4, // 文书号
        cellIdx4: cellIdx4String, // 单位/个人
        cellIdx4TypeTextItem: cellIdx4String, // 单位/个人
        cellIdx5: cellIdx4String === '单位' ? corp.corpName : '', // 被处罚
        cellIdx5TextItem: cellIdx4String === '单位' ? corp.corpName : '', // 被处罚
        cellIdx6: cellIdx4String === '单位' ? corp.address : '', // 地址
        cellIdx6TextItem: cellIdx4String === '单位' ? corp.address : '', // 地址
        cellIdx7: dangerObject.dangerString, // 违法事实
        cellIdx8: `${dangerObject.illegalString}`, // 法律规定
        cellIdx9: dangerObject.penaltyBasisString, // 法律依据
        cellIdx10: `分别${dangerObject.penaltyDesc}。合并罚款人民币${transformNumToChinese(dangerObject.penaltyDescFineTotle)}（￥${dangerObject.penaltyDescFineTotle.toLocaleString()}）罚款。`, // 行政处罚
        cellIdx11: orgSysOfficeInfo.accountName, //
        cellIdx11TypeTextItem: orgSysOfficeInfo.accountName, //
        cellIdx12: orgSysOfficeInfo.accountBank, // 银行
        cellIdx12TypeTextItem: orgSysOfficeInfo.accountBank, // 银行
        cellIdx13: orgSysOfficeInfo.billName, // 支行（分理处），账户名称
        cellIdx13TypeTextItem: orgSysOfficeInfo.billName, // 支行（分理处），账户名称
        cellIdx14: orgSysOfficeInfo.account, // 账号
        cellIdx14TypeTextItem: orgSysOfficeInfo.account, // 账号
        cellIdx15: orgSysOfficeInfo.accountAddress, // 地址
        cellIdx15TypeTextItem: orgSysOfficeInfo.accountAddress, // 地址
        cellIdx16: orgSysOfficeInfo.goverPrefix, //人民政府
        cellIdx16TypeTextIte: orgSysOfficeInfo.goverPrefix, //人民政府
        cellIdx17: orgSysOfficeInfo.organName, // organName
        cellIdx17TypeTextItem: orgSysOfficeInfo.organName, // 煤监机构
        cellIdx18: orgSysOfficeInfo.courtPrefix, // 人民法院
        cellIdx18TypeTextItem: orgSysOfficeInfo.courtPrefix, // 人民法院
        cellIdx19: this.$store.state.curCase.groupName, //
        cellIdx19TypeTextItem: this.$store.state.curCase.groupName, //
        cellIdx20: this.todayDate, // 日期
        cellIdx20TypeDateItem: this.todayDate, // 日期
        cellIdx21: cellIdx4String, // 单位/个人
        cellIdx21TypeTextItem: cellIdx4String, // 单位/个人
        DangerTable: let6DataPaperContent.DangerTable,
        selectedType: let6DataPaperContent.selectedType
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
        let dataKey = `${key}`;
        if (key === 'cellIdx7' || key === 'cellIdx8' || key === 'cellIdx9' || key === 'cellIdx10') {
           this.options[key] = {
            page: '8',
            key: key,
          }
          dataKey = 'DangerTable'
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