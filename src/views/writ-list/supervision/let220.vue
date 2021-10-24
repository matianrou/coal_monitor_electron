<!--行政处罚 案件结案 加处罚款决定书 51 -->
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
            <div class="textAlignCenter formHeader1">加处罚款决定书</div>
            <div class="docTextLine paper-number-div">
              <div>
                <span
                  @click="commandFill('cellIdx0', '文书号', 'TextItem')"
                >{{ letData.cellIdx0 ? letData.cellIdx0 : '（编辑）' }}</span>
                <label>（</label>
                <span
                  @click="commandFill('cellIdx1', '文书号', 'TextItem')"
                >{{ letData.cellIdx1 ? letData.cellIdx1 : '（编辑）' }}</span>
                <label>）煤安加罚〔</label>
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
              日向你
              <span
                class="no-underline"
                @click="commandFill('cellIdx8', '单位', 'TextItem')"
              >{{ letData.cellIdx8 ? letData.cellIdx8 : '（点击编辑）'}}</span>
              送达 《行政处罚决定书》 (
              <span
                class="no-underline"
                @click="commandFill('cellIdx9', '行政处罚决定书文书号', 'TextItem')"
              >{{ letData.cellIdx9 ? letData.cellIdx9 : '（点击编辑）'}}</span>
              （
              <span
                class="no-underline"
                @click="commandFill('cellIdx10', '行政处罚决定书文书号', 'TextItem')"
              >{{ letData.cellIdx10 ? letData.cellIdx10 : '（点击编辑）'}}</span>
              ）煤安罚〔
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
                @click="commandFill('cellIdx13', '单位', 'TextItem')"
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
              日你单位未履行该处罚决定，依据《中华人民共和国行政处罚法》第七十二条第一款第一项规定，本机关决定对你
              <span
                class="no-underline"
                @click="commandFill('cellIdx21', '单位', 'TextItem')"
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
                @click="commandFill('cellIdx26', '罚款缴至', 'TextItem')"
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
              如不服本决定，可在接到本决定书之日起60日内向
              <span
                @click="commandFill('cellIdx31', '人民政府', 'TextItem')"
              >{{ letData.cellIdx31 ? letData.cellIdx31 : '（点击编辑）'}}</span>
              人民政府或者
              <span
                @click="commandFill('cellIdx32', '', 'TextItem')"
              >{{ letData.cellIdx32 ? letData.cellIdx32 : '（点击编辑）'}}</span>
              申请行政复议，或者在6个月内依法向
              <span
                @click="commandFill('cellIdx33', '', 'TextItem')"
              >{{ letData.cellIdx33 ? letData.cellIdx33 : '（点击编辑）'}}</span>
              人民法院提起行政诉讼；复议、诉讼期间，不停止执行本决定。
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
                @click="commandFill('cellIdx36', '单位/个人', 'SelectItem')"
              >{{ letData.cellIdx36 ? letData.cellIdx36 : '（点击编辑）'}}</span>
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
import { getDangerObject, getDocNumber } from "@/utils/setInitPaperData";
import associationSelectPaper from '@/components/association-select-paper'
export default {
  name: "Let106",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {},
      options: {
        cellIdx36: [
          {
            value: '单位',
            name: '单位',
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
      const db = new GoDB(this.$store.state.DBName);
      const corpBase = db.table("corpBase");
      const corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      // 1.生成文书编号
      let { num0, num1, num3, num4 } = await getDocNumber(
        db,
        this.docData.docTypeNo,
        this.corpData.caseId,
        this.$store.state.user
      );
      // 2.时间
      let now = new Date();
      let cellIdx6Year = now.getFullYear();
      let cellIdx7Month = now.getMonth() + 1;
      let cellIdx8Date = now.getDate();
      // 3.行政处罚决定书 日期、编号、
      let let8DataPapaerContent = JSON.parse(selectedPaper.let8Data.paperContent);
      let date206 = let8DataPapaerContent.cellIdx20
        ? let8DataPapaerContent.cellIdx20
            .replace("年", "-")
            .replace("月", "-")
            .replace("日", "-")
            .split("-")
        : ["", "", ""];
      // 4.sysOfficeInfo中 goverPrefix和organName和courtPrefix
      const orgInfo = db.table("orgInfo");
      const orgData = await orgInfo.find(
        (item) => item.no === this.$store.state.user.userGroupId
      );
      let orgSysOfficeInfo = orgData && orgData.sysOfficeInfo
        ? JSON.parse(orgData.sysOfficeInfo)
        : {
            accountName: "",
            accountBank: "",
            billName: "",
            account: "",
            accountAddress: "",
            organName: "",
            courtPrefix: "",
          };
      await db.close();
      this.letData = {
        cellIdx0: num0, // 文书号
        cellIdx0TypeTextItem: num0, // 文书号
        cellIdx1: num1, // 文书号
        cellIdx1TypeTextItem: num1, // 文书号
        cellIdx2: num3, // 文书号
        cellIdx2TypeTextItem: num3, // 文书号
        cellIdx3: num4, // 文书号
        cellIdx3TypeTextItem: num4, // 文书号
        cellIdx4: corp.corpName ? corp.corpName : null, // corpname
        cellIdx4TypeTextItem: corp.corpName ? corp.corpName : null, // corpname
        cellIdx5: date206[0], // 年
        cellIdx5TypeTextItem: date206[0], // 年
        cellIdx6: date206[1], // 月
        cellIdx6TypeTextItem: date206[1], // 月
        cellIdx7: date206[2], // 日
        cellIdx7TypeTextItem: date206[2], // 日
        cellIdx8: null, // 单位
        cellIdx9: let8DataPapaerContent.cellIdx0, // 行政处罚决定书 文书号
        cellIdx9TypeTextItem: let8DataPapaerContent.cellIdx0, // 行政处罚决定书 文书号
        cellIdx10: let8DataPapaerContent.cellIdx1, // 行政处罚决定书 文书号
        cellIdx10TypeTextItem: let8DataPapaerContent.cellIdx1, // 行政处罚决定书 文书号
        cellIdx11: let8DataPapaerContent.cellIdx2, // 行政处罚决定书 文书号
        cellIdx11TypeTextItem: let8DataPapaerContent.cellIdx2, // 行政处罚决定书 文书号
        cellIdx12: let8DataPapaerContent.cellIdx3, // 行政处罚决定书 文书号
        cellIdx12TypeTextItem: let8DataPapaerContent.cellIdx3, // 行政处罚决定书 文书号
        cellIdx13: null, // 单位
        cellIdx14: null, // 罚款
        cellIdx15: null, // 年
        cellIdx16: null, // 月
        cellIdx17: null, // 日
        cellIdx18: cellIdx6Year, // 年
        cellIdx18TypeTextItem: cellIdx6Year, // 年
        cellIdx19: cellIdx7Month, // 月
        cellIdx19TypeTextItem: cellIdx7Month, // 月
        cellIdx20: cellIdx8Date, // 日
        cellIdx20TypeTextItem: cellIdx8Date, // 日
        cellIdx21: null, // 单位
        cellIdx22: null, // 加处罚款
        cellIdx23: null, // 年
        cellIdx24: null, // 月
        cellIdx25: null, // 日
        cellIdx26: orgSysOfficeInfo.accountName, // 银行
        cellIdx26TypeTextItem: orgSysOfficeInfo.accountName, // 银行
        cellIdx27: orgSysOfficeInfo.accountBank, // 支行（分理处）
        cellIdx27TypeTextItem: orgSysOfficeInfo.accountBank, // 支行（分理处）
        cellIdx28: orgSysOfficeInfo.billName, // 账户名称
        cellIdx28TypeTextItem: orgSysOfficeInfo.billName, // 账户名称
        cellIdx29: orgSysOfficeInfo.account, // 账号
        cellIdx29TypeTextItem: orgSysOfficeInfo.account, // 账号
        cellIdx30: orgSysOfficeInfo.accountAddress, // 地址
        cellIdx30TypeTextItem: orgSysOfficeInfo.accountAddress, // 地址
        cellIdx31: orgSysOfficeInfo.goverPrefix, // 人民政府
        cellIdx31TypeTextItem: orgSysOfficeInfo.goverPrefix, // 人民政府
        cellIdx32: orgSysOfficeInfo.organName, //
        cellIdx32TypeTextItem: orgSysOfficeInfo.organName, //
        cellIdx33: orgSysOfficeInfo.courtPrefix, // 人民法院
        cellIdx33TypeTextItem: orgSysOfficeInfo.courtPrefix, // 人民法院
        cellIdx34: this.$store.state.curCase.groupName, //
        cellIdx35: this.todayDate, // 日期
        cellIdx36: let8DataPapaerContent.selectedType, // 单位
        selectedType: let8DataPapaerContent.selectedType, // 单位
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