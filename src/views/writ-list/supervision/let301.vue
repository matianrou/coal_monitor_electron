<!--行政强制 行政强制执行 强制执行申请书 -->
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
            <div class="textAlignCenter formHeader1">强制执行申请书</div>
            <div class="docTextLine paper-number-div">
              <div>
                <span
                  @click="commandFill('cellIdx0', '文书号', 'TextItem')"
                >{{ letData.cellIdx0 ? letData.cellIdx0 : '（编辑）' }}</span>
                <label>（</label>
                <span
                  @click="commandFill('cellIdx1', '文书号', 'TextItem')"
                >{{ letData.cellIdx1 ? letData.cellIdx1 : '（编辑）' }}</span>
                <label>）煤安执〔</label>
                <span
                  @click="commandFill('cellIdx2', '文书号', 'TextItem')"
                >{{ letData.cellIdx2 ? letData.cellIdx2 : '（编辑）' }}</span>
                <label>〕</label>
                <span
                  @click="commandFill('cellIdx3', '文书号', 'TextItem')"
                >{{ letData.cellIdx3 ? letData.cellIdx3 : '（编辑）' }}</span>
                <label>号</label>
                <label>签发人：</label>
                <span
                  @click="commandFill('cellIdx4', '签发人', 'TextItem')"
                >{{ letData.cellIdx4 ? letData.cellIdx4 : '（编辑）' }}</span>
              </div>
            </div>
            <table class="docBody">
              <tr>
                 <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_5"
                  align="center"
                  style="width:60%"
                  data-title="人民法院"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx5', '人民法院', 'TextItem')"
                >{{letData.cellIdx5}}</td>
                <td class="textAlignLeft ">人民法院：</td>
              </tr>
            </table>
            <div class="docTextarea">
              <label style="width:5%"></label>
              本机关于
              <span
                @click="commandFill('cellIdx6', '年', 'TextItem')"
              >{{ letData.cellIdx6 ? letData.cellIdx6 : '（XX）'}}</span>
              年
              <span
                @click="commandFill('cellIdx7', '月', 'TextItem')"
              >{{ letData.cellIdx7 ? letData.cellIdx7 : '（XX）'}}</span>
              月
              <span
                @click="commandFill('cellIdx8', '日', 'TextItem')"
              >{{ letData.cellIdx8 ? letData.cellIdx8 : '（XX）'}}</span>
              日对被申请执行人
              <span
                @click="commandFill('cellIdx9', '现场处理决定', 'TextareaItem')"
              >{{ letData.cellIdx9 ? letData.cellIdx9 : '（点击编辑）'}}</span>
              作出了
              <span
                @click="commandFill('cellIdx10', '行政处罚决定', 'TextareaItem')"
              >{{ letData.cellIdx10 ? letData.cellIdx10 : '（点击编辑）'}}</span>
              的行政处罚决定（
              <span
                class="no-underline"
                @click="commandFill('cellIdx11', '行政处罚决定文书号', 'TextItem')"
              >{{ letData.cellIdx11 ? letData.cellIdx11 : '（编辑）'}}</span>
              （
              <span
                class="no-underline"
                @click="commandFill('cellIdx12', '行政处罚决定文书号', 'TextItem')"
              >{{ letData.cellIdx12 ? letData.cellIdx12 : '（编辑）'}}</span>
              ）煤安罚〔
              <span
                class="no-underline"
                @click="commandFill('cellIdx13', '行政处罚决定文书号', 'TextItem')"
              >{{ letData.cellIdx13 ? letData.cellIdx13 : '（编辑）'}}</span>
              〕
              <span
                class="no-underline"
                @click="commandFill('cellIdx14', '行政处罚决定文书号', 'TextItem')"
              >{{ letData.cellIdx14 ? letData.cellIdx14 : '（编辑）'}}</span>
              号），并于
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
              日送达了催告书（
              <span
                class="no-underline"
                @click="commandFill('cellIdx18', '催告书文书号', 'TextItem')"
              >{{ letData.cellIdx18 ? letData.cellIdx18 : '（编辑）'}}</span>
              （
              <span
                class="no-underline"
                @click="commandFill('cellIdx19', '催告书文书号', 'TextItem')"
              >{{ letData.cellIdx19 ? letData.cellIdx19 : '（编辑）'}}</span>
              ）煤安催告〔
              <span
                class="no-underline"
                @click="commandFill('cellIdx20', '催告书文书号', 'TextItem')"
              >{{ letData.cellIdx20 ? letData.cellIdx20 : '（编辑）'}}</span>
              〕
              <span
                class="no-underline"
                @click="commandFill('cellIdx21', '催告书文书号', 'TextItem')"
              >{{ letData.cellIdx21 ? letData.cellIdx21 : '（编辑）'}}</span>
              号）。被申请执行人在法定的期限内未履行上述行政处罚决定。根据《中华人民共和国行政处罚法》第七十二条第一款第四项、《中华人民共和国行政强制法》第五十三条、第五十四条规定，特申请贵院强制执行。
            </div>
            <table class="docBody">
              <tr>
                 <td style="width:5%"></td>
                 <td class="textAlignLeft">附有关材料:</td>
              </tr>
              <tr>
                 <td style="width:5%"></td>
                 <td class="textAlignLeft">1.</td>
                 <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_22"
                  align="center"
                  style="width:85%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx22', '材料1', 'TextItem')"
                >{{ letData.cellIdx22 }}</td>
              </tr>
              <tr>
                 <td style="width:5%"></td>
                 <td class="textAlignLeft">2.</td>
                 <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_23"
                  align="center"
                  style="width:85%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx23', '材料2', 'TextItem')"
                >{{ letData.cellIdx23 }}</td>
              </tr>
              <tr>
                 <td style="width:5%"></td>
                 <td class="textAlignLeft">3.</td>
                 <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_24"
                  align="center"
                  style="width:85%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx24', '材料3', 'TextItem')"
                >{{ letData.cellIdx24 }}</td>
              </tr>
            </table>
            <div class="docTextLine">
              <label style="width: 5%"></label>
              <div style="flex: 1; display: flex;">
                <label>收件人（签名）：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx25', '收件人（签名）', 'TextItem')"
                >{{ letData.cellIdx25 ? letData.cellIdx25 : '（点击编辑）' }}</div>
              </div>
              <div style="flex: 1; display: flex;">
                <label>&nbsp;&nbsp;日&nbsp;&nbsp;&nbsp;&nbsp;期：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx26', '日期', 'DateItem')"
                >{{ letData.cellIdx26 ? letData.cellIdx26 : '（点击编辑）' }}</div>
              </div>
            </div>
            <div class="docTextLine">
              <label style="width: 5%"></label>
              <div style="flex: 1; display: flex;">
                <label>申请单位联系人：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx27', '联系人', 'TextItem')"
                >{{ letData.cellIdx27 ? letData.cellIdx27 : '（点击编辑）' }}</div>
              </div>
              <div style="flex: 1; display: flex;">
                <label>&nbsp;&nbsp;联系电话：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx28', '联系电话', 'TextItem')"
                >{{ letData.cellIdx28 ? letData.cellIdx28 : '（点击编辑）' }}</div>
              </div>
            </div>
             <table class="docBody" style="margin-top: 30px;">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_29"
                  align="right"
                  style="width:95%"
                  @click="commandFill('cellIdx29', '', 'TextItem')"
                >{{letData.cellIdx29 ? letData.cellIdx29 : '（点击编辑）'}}</td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_30"
                  align="right"
                  style="width:95%"
                  data-title
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx30', '日期', 'DateItem')"
                >{{letData.cellIdx30 ? letData.cellIdx30 : '（点击编辑）'}}</td>
              </tr>
            </table>
            <div class="docTextarea" style="border-top: 2px solid #000;">
              备注：本文书一式两份，一份送人民法院，一份存档。
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
import { getDocNumber, getDangerObject } from '@/utils/setInitPaperData'
import associationSelectPaper from '@/components/association-select-paper'
export default {
  name: "Let301",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {},
      options: {},
      associationPaper: ['1', '8', '53']
    };
  },
  methods: {
    async initLetData (selectedPaper) {
      const db = new GoDB(this.$store.state.DBName);
      const corpBase = db.table("corpBase");
      const corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      let caseId = this.corpData.caseId
      // 1.文书编号：送达收执文书编号
      let paperNumber = await getDocNumber(db, '9', caseId, this.$store.state.user)
      // 2.申请人：机构名称
      let cellIdx5String = this.$store.state.user.userGroupName
      // 3.被申请人：企业煤矿名称
      let cellIdx11String = corp.corpName
      // 4.对被申请人：企业名称+'涉嫌'+隐患描述+'案'
      // 获取笔录文书中的隐患数据
      let let1DataPapaerContent = JSON.parse(selectedPaper.let1Data.paperContent)
      let dangerObject = getDangerObject(let1DataPapaerContent.dangerItemObject.tableData)
      let cellIdx9String = `${corp.corpName}涉嫌${dangerObject.dangerString}案`
      // 从sysOfficeInfo中获取：
      const orgInfo = db.table("orgInfo");
      const orgData = await orgInfo.find(item => item.no === this.$store.state.user.userGroupId)
      let orgSysOfficeInfo = orgData && orgData.sysOfficeInfo ? JSON.parse(orgData.sysOfficeInfo) : {accountName: '', accountBank: '', billName: '', account: ''}
      // 6.强制执行下列项目：‘划转罚款至’accountName+accountBank‘账户名称：’+billName+‘待结算财政款项账号：’+account
      let cellIdx25String = `划转罚款至${orgSysOfficeInfo.accountName}${orgSysOfficeInfo.accountBank}。账户名称：${orgSysOfficeInfo.billName}。待结算财政款项账号：${orgSysOfficeInfo.account}`
      // 7.人民法院：courtPrefix 联系人：master 联系电话：phone
      // 8.申请人的法定代表人legalPerson和职务post
      // 行政处罚文书编号：
      let let8DataPapaerContent = JSON.parse(selectedPaper.let8Data.paperContent)
      let paperDate206 = let8DataPapaerContent.cellIdx20 ? let8DataPapaerContent.cellIdx20.replace('年', '-').replace('月', '-').replace('日', '-').split('-') : ['', '', '']
      // 行政强制执行事先催告书编号
      let let53DataPapaerContent = JSON.parse(selectedPaper.let53Data.paperContent)
      let paperDate309 = let53DataPapaerContent.cellIdx28 ? let53DataPapaerContent.cellIdx28.replace('年', '-').replace('月', '-').replace('日', '-').split('-') : ['', '', '']
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
        cellIdx4: null, // 签发人
        cellIdx5: orgSysOfficeInfo.courtPrefix, // 人民法院
        cellIdx5TypeTextItem: orgSysOfficeInfo.courtPrefix, // 人民法院
        cellIdx6: paperDate206[0], // 年
        cellIdx6TypeTextItem: paperDate206[0], // 年
        cellIdx7: paperDate206[1], // 月
        cellIdx7TypeTextItem: paperDate206[1], // 月
        cellIdx8: paperDate206[2], // 日
        cellIdx8TypeTextItem: paperDate206[2], // 日
        cellIdx9: cellIdx9String, // 对被申请执行人
        cellIdx9TypeTextareaItem: cellIdx9String, // 对被申请执行人
        cellIdx10: dangerObject.penaltyDesc, // 行政处罚决定
        cellIdx10TypeTextareaItem: dangerObject.penaltyDesc, // 行政处罚决定
        cellIdx11: let8DataPapaerContent.cellIdx0, // 行政处罚决定 文书号
        cellIdx11TypeTextItem: let8DataPapaerContent.cellIdx0, // 行政处罚决定 文书号
        cellIdx12: let8DataPapaerContent.cellIdx1, // 行政处罚决定 文书号
        cellIdx12TypeTextItem: let8DataPapaerContent.cellIdx1, // 行政处罚决定 文书号
        cellIdx13: let8DataPapaerContent.cellIdx2, // 行政处罚决定 文书号
        cellIdx13TypeTextItem: let8DataPapaerContent.cellIdx2, // 行政处罚决定 文书号
        cellIdx14: let8DataPapaerContent.cellIdx3, // 行政处罚决定 文书号
        cellIdx14TypeTextItem: let8DataPapaerContent.cellIdx3, // 行政处罚决定 文书号
        cellIdx15: paperDate309[0], // 年
        cellIdx15TypeTextItem: paperDate309[0], // 年
        cellIdx16: paperDate309[1], // 月
        cellIdx16TypeTextItem: paperDate309[1], // 月
        cellIdx17: paperDate309[2], // 日
        cellIdx17TypeTextItem: paperDate309[2], // 日
        cellIdx18: let53DataPapaerContent.cellIdx0, // 催告书 文书号
        cellIdx18TypeTextItem: let53DataPapaerContent.cellIdx0, // 催告书 文书号
        cellIdx19: let53DataPapaerContent.cellIdx1, // 催告书 文书号
        cellIdx19TypeTextItem: let53DataPapaerContent.cellIdx1, // 催告书 文书号
        cellIdx20: let53DataPapaerContent.cellIdx2, // 催告书 文书号
        cellIdx20TypeTextItem: let53DataPapaerContent.cellIdx2, // 催告书 文书号
        cellIdx21: let53DataPapaerContent.cellIdx3, // 催告书 文书号
        cellIdx21TypeTextItem: let53DataPapaerContent.cellIdx3, // 催告书 文书号
        cellIdx22: null, // 材料1
        cellIdx23: null, // 材料2
        cellIdx24: null, // 材料3
        cellIdx25: null, // 收件人（签名）
        cellIdx26: null, // 日期
        cellIdx27: null, // 联系人
        cellIdx28: null, // 联系电话
        cellIdx29: null, //
        cellIdx30: null, // 日期
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
        let dataKey = `${key}Type${type}`;
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