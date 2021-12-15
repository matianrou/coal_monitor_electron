<!-- 现场检查 实施检查 撤出作业人员命令书 3 -->
<template>
  <div style="width: 100%; height: 100%">
    <let-main
      ref="letMain"
      :corp-data="corpData"
      :doc-data="docData"
      :let-data="letData"
      :paper-data="paperData"
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
            <div class="textAlignCenter formHeader4">
              撤 出 作 业 人 员 命 令 书
            </div>
            <div class="formHeader5 paper-number-div">
              <div>
                <span @click="commandFill('cellIdx0', '', 'TextItem')">{{
                  letData.cellIdx0 ? letData.cellIdx0 : "（编辑）"
                }}</span>
                <label>矿安监</label>
                <span @click="commandFill('cellIdx1', '', 'TextItem')">{{
                  letData.cellIdx1 ? letData.cellIdx1 : "（编辑）"
                }}</span>
                <label>撤〔</label>
                <span @click="commandFill('cellIdx2', '', 'TextItem')">{{
                  letData.cellIdx2 ? letData.cellIdx2 : "（编辑）"
                }}</span>
                <label>〕</label>
                <span @click="commandFill('cellIdx3', '', 'TextItem')">{{
                  letData.cellIdx3 ? letData.cellIdx3 : "（编辑）"
                }}</span>
                <label>号</label>
              </div>
            </div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_4"
                  style="width: 62%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx4', '', 'TextItem')"
                >
                  {{ letData.cellIdx4 }}
                </td>
                <td class="textAlignLeft">:</td>
              </tr>
            </table>
            <div class="docTextarea">
              <label style="width: 5%"></label>
              我
              <span
                class="no-underline"
                @click="commandFill('cellIdx5', '局', 'TextItem')"
                >{{ letData.cellIdx5 ? letData.cellIdx5 : "(编辑)" }}</span
              >
              于
              <span @click="commandFill('cellIdx6', '年', 'TextItem')">{{
                letData.cellIdx6 ? letData.cellIdx6 : "（XX）"
              }}</span>
              年
              <span @click="commandFill('cellIdx7', '月', 'TextItem')">{{
                letData.cellIdx7 ? letData.cellIdx7 : "（XX）"
              }}</span>
              月
              <span @click="commandFill('cellIdx8', '日', 'TextItem')">{{
                letData.cellIdx8 ? letData.cellIdx8 : "（XX）"
              }}</span>
              日
              <span @click="commandFill('cellIdx9', '时', 'TextItem')">{{
                letData.cellIdx9 ? letData.cellIdx9 : "（XX）"
              }}</span>
              时
              <span @click="commandFill('cellIdx10', '分', 'TextItem')">{{
                letData.cellIdx10 ? letData.cellIdx10 : "（XX）"
              }}</span>
              分，在对你单位安全监察时，发现在
              <span @click="commandFill('cellIdx11', '', 'TextItem')">{{
                letData.cellIdx11 ? letData.cellIdx11 : "（点击编辑）"
              }}</span>
              有
              <span
                @dblclick="commandFill('cellIdx12', '违法违规行为', corpData.caseType === '0' ? 'DangerTable' : 'DangerTextareaItem')"
                @click="commandFill('cellIdx12', '违法行为', 'DangerTextareaItem')"
                >{{
                  letData.cellIdx12 ? letData.cellIdx12 : "（点击编辑）"
                }}</span
              >
              等威胁职工生命安全的紧急情况，现命令立即从
              <span @click="commandFill('cellIdx13', '', 'TextItem')">{{
                letData.cellIdx13 ? letData.cellIdx13 : "（点击编辑）"
              }}</span>
              危险区内撤出作业人员。
            </div>
            <div class="docTextarea">
              <label style="width: 5%"></label>
              此命令
              <span @click="commandFill('cellIdx14', '年', 'TextItem')">{{
                letData.cellIdx14 ? letData.cellIdx14 : "（XX）"
              }}</span>
              年
              <span @click="commandFill('cellIdx15', '月', 'TextItem')">{{
                letData.cellIdx15 ? letData.cellIdx15 : "（XX）"
              }}</span>
              月
              <span @click="commandFill('cellIdx16', '日', 'TextItem')">{{
                letData.cellIdx16 ? letData.cellIdx16 : "（XX）"
              }}</span>
              日
              <span @click="commandFill('cellIdx17', '时', 'TextItem')">{{
                letData.cellIdx17 ? letData.cellIdx17 : "（XX）"
              }}</span>
              时
              <span @click="commandFill('cellIdx18', '分', 'TextItem')">{{
                letData.cellIdx18 ? letData.cellIdx18 : "（XX）"
              }}</span>
              分现场已作出。
            </div>
            <div class="docTextarea">
              <label style="width: 5%"></label>
              如对本命令不服，可在接到本命令书之日起60日内向
              <span @click="commandFill('cellIdx19', '机构名', 'TextItem')">{{
                letData.cellIdx19 ? letData.cellIdx19 : "（点击编辑）"
              }}</span>
              申请行政复议或6个月内向
              <span @click="commandFill('cellIdx20', '人民法院', 'TextItem')">{{
                letData.cellIdx20 ? letData.cellIdx20 : "（点击编辑）"
              }}</span>
              人民法院提起行政诉讼，但不停止执行本命令。
            </div>
            <table height="30"></table>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:47%">
                <span class="no-line">被检查单位负责人意见：</span>
                <span @click="commandFill('cellIdx21', '被检查单位负责人意见', 'TextItem')"
                  >{{ letData.cellIdx21 ? letData.cellIdx21 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">签名：</span>
                <span @click="commandFill('cellIdx22', '签名', 'TextItem')">{{
                  letData.cellIdx22 ? letData.cellIdx22 : "（点击编辑）"
                }}</span>
                <span class="no-line">日期：</span>
                <span @click="commandFill('cellIdx23', '日期', 'DateItem')">{{
                  letData.cellIdx23 ? letData.cellIdx23 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
                <div class="line1"></div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:65%">
                <span class="no-line">执法人员（签名)：</span>
                <span @click="commandFill('cellIdx24', '执法人员（签名)', 'TextItem')"
                  >&nbsp;&nbsp;{{ letData.cellIdx24 ? letData.cellIdx24 : "（点击编辑）" }}
                </span>
                <span class="no-line">&nbsp;</span>
                <span @click="commandFill('cellIdx25', '执法人员（签名)', 'TextItem')"
                  >{{ letData.cellIdx25 ? letData.cellIdx25 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">日期</span>
                <span @click="commandFill('cellIdx26', '日期', 'DateItem')">{{
                  letData.cellIdx26 ? letData.cellIdx26 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
                <div class="line1"></div>
            </div>
            <table height="30"></table>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_26"
                  align="right"
                  style="width: 95%"
                  @click="commandFill('cellIdx27', '', 'TextItem')"
                >
                  {{ letData.cellIdx27 ? letData.cellIdx27 : "（点击编辑）" }}
                </td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_28"
                  align="right"
                  style="width: 95%"
                  data-title
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx28', '日期', 'DateItem')"
                >
                  {{ letData.cellIdx28 ? letData.cellIdx28 : "（点击编辑）" }}
                </td>
              </tr>
            </table>
            <div class="docTextarea" style="border-top: 2px solid #000;">
              备注：本文书一式两份，一份交被检查单位，一份存档。
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
import { getDocNumber } from "@/utils/setInitPaperData";
import associationSelectPaper from "@/components/association-select-paper";
import { setNewDanger } from '@/utils/setInitPaperData'
import { setDangerTable } from '@/utils/handlePaperData'
export default {
  name: "Let106",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {},
      options: {},
      associationPaper: this.corpData.caseType === '0' ? ["1"] : [],
    };
  },
  methods: {
    async initLetData(selectedPaper) {
      let db = new GoDB(this.$store.state.DBName);
      let corpBase = db.table("corpBase");
      //查询符合条件的记录
      let corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      // 1.生成文书编号
      let { num0, num1, num3, num4 } = await getDocNumber(
        db,
        this.docData.docTypeNo,
        this.corpData.caseId
      );
      // 2.时间
      let now = new Date();
      let cellIdx6Year = now.getFullYear().toString();
      let cellIdx7Month = (now.getMonth() + 1).toString();
      let cellIdx8Date = now.getDate().toString();
      let cellIdx9Hour = now.getHours().toString();
      let cellIdx10Minu = now.getMinutes().toString();
      // 3.隐患描述
      let let1DataPaperContent = this.corpData.caseType === '0' ? JSON.parse(
        selectedPaper.let1Data.paperContent
      ) : null;
      // let dangerObject = this.corpData.caseType === '0' ? getDangerObject(
      //   let1DataPaperContent.DangerTable.selectedDangerList
      // ) : null;
      // let cellIdx12String = this.corpData.caseType === '0' ? dangerObject.dangerString : '';
      let cellIdx12String = this.corpData.caseType === '0' ?setDangerTable(
          let1DataPaperContent.DangerTable,
          {},
          {
            page: "3",
            key: "cellIdx12",
          }
        ):'';
      // 4.sysOfficeInfo中organName和courtPrefix
      let orgInfo = db.table("orgInfo");
      let orgData = await orgInfo.find(
        (item) => item.no === this.$store.state.user.userGroupId
      );
      let orgSysOfficeInfo =
        orgData && orgData.sysOfficeInfo
          ? JSON.parse(orgData.sysOfficeInfo)
          : { organName: "", courtPrefix: "" };
      let cellIdx19String = orgSysOfficeInfo.organName;
      let cellIdx20String = orgSysOfficeInfo.courtPrefix;
      let DangerTable = null
      if (this.corpData.caseType === '0') {
        DangerTable = let1DataPaperContent.DangerTable ? 
          setNewDanger(selectedPaper.let1Data, let1DataPaperContent.DangerTable)
          : {}
      }
      await db.close();
      this.letData = {
        cellIdx0: num0, // 文书号
        cellIdx1: num1, // 文书号
        cellIdx2: num3, // 文书号
        cellIdx3: num4, // 文书号
        cellIdx4: corp.corpName ? corp.corpName : null, // corpname
        cellIdx5: "局", // 局
        cellIdx6: cellIdx6Year, // 年
        cellIdx6TypeTextItem: cellIdx6Year, // 年
        cellIdx7: cellIdx7Month, // 月
        cellIdx7TypeTextItem: cellIdx7Month, // 月
        cellIdx8: cellIdx8Date, // 日
        cellIdx8TypeTextItem: cellIdx8Date, // 日
        cellIdx9: cellIdx9Hour, // 时
        cellIdx9TypeTextItem: cellIdx9Hour, // 时
        cellIdx10: cellIdx10Minu, // 分
        cellIdx10TypeTextItem: cellIdx10Minu, // 分
        cellIdx11: null, // 发现在。。。有
        cellIdx12: cellIdx12String, // 隐患描述
        cellIdx13: null, //
        cellIdx14: cellIdx6Year, // 年
        cellIdx14TypeTextItem: cellIdx6Year, // 年
        cellIdx15: cellIdx7Month, // 月
        cellIdx15TypeTextItem: cellIdx7Month, // 月
        cellIdx16: cellIdx8Date, // 日
        cellIdx16TypeTextItem: cellIdx8Date, // 日
        cellIdx17: cellIdx9Hour, // 时
        cellIdx17TypeTextItem: cellIdx9Hour, // 时
        cellIdx18: cellIdx10Minu, // 分
        cellIdx18TypeTextItem: cellIdx10Minu, // 分
        cellIdx19: cellIdx19String, // 机构名
        cellIdx19TypeTextItem: cellIdx19String, // 机构名
        cellIdx20: cellIdx20String, // 人民法院
        cellIdx20TypeTextItem: cellIdx20String, // 人民法院
        cellIdx21: null, // 被检查单位负责人意见
        cellIdx22: null, // 签名
        cellIdx23: null, // 日期
        cellIdx24: null, // 执法人员（签名)
        cellIdx25: null, // 执法人员（签名)
        cellIdx26: null, //日期
        cellIdx27: this.$store.state.curCase.provinceGroupName, //
        cellIdx28: this.todayDate, // 日期
        cellIdx28TypeDateItem: this.todayDate, // 日期
        DangerTable: DangerTable,
        associationPaperId: this.corpData.caseType === '0' ? { // 关联的paperId
          // paper22Id: let1DataPaperContent.associationPaperId.paper22Id,
          paper1Id: selectedPaper.let1Data.paperId
        } : null
      };
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
        if (key === "cellIdx12") {
          if (type === 'DangerTable') {
            this.options[key] = {
              page: "3",
              key: key,
              // showSelectDangerBtn: true, // 用于区分是否可以选择隐患项
            };
            dataKey = "DangerTable";
          } else {
            this.options[key] = {
              disabled: false
            };
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
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/let";
</style>