<!-- 现场检查 实施检查 先行登记保存证据处理决定书 27 -->
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
            <div class="textAlignCenter formHeader0">
              煤矿安全监管行政执法文书
              <br />
            </div>
            <div class="textAlignCenter formHeader1">
              先行登记保存证据处理决定书
            </div>
            <div class="docTextLine paper-number-div">
              <div>
                <span
                  @click="commandFill('cellIdx0', '文书号', 'TextItem')"
                >{{ letData.cellIdx0 ? letData.cellIdx0 : '（编辑）' }}</span>
                <label>（</label>
                <span
                  @click="commandFill('cellIdx1', '文书号', 'TextItem')"
                >{{ letData.cellIdx1 ? letData.cellIdx1 : '（编辑）' }}</span>
                <label>）煤安保处〔</label>
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
              本机关于
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
              日对你单位的
              <span @click="commandFill('cellIdx9', '', 'TextItem')">{{
                letData.cellIdx9 ? letData.cellIdx9 : "（点击编辑）"
              }}</span>
              等证据进行了先行登记保存（
              <span
                class="no-underline"
                @click="commandFill('cellIdx10', '', 'TextItem')"
                >{{ letData.cellIdx10 ? letData.cellIdx10 : "点击编辑" }}</span
              >
              （
              <span
                class="no-underline"
                @click="commandFill('cellIdx11', '', 'TextItem')"
                >{{ letData.cellIdx11 ? letData.cellIdx11 : "点击编辑" }}</span
              >
              )&nbsp;&nbsp;煤安保〔
              <span
                class="no-underline"
                @click="commandFill('cellIdx12', '', 'TextItem')"
                >{{ letData.cellIdx12 ? letData.cellIdx12 : "点击编辑" }}</span
              >
              〕
              <span
                class="no-underline"
                @click="commandFill('cellIdx13', '', 'TextItem')"
                >{{ letData.cellIdx13 ? letData.cellIdx13 : "点击编辑" }}</span
              >
              号）。现根据《中华人民共和国行政处罚法》第<span class="text-decoration">五十六</span>条规定，对上述证据作出如下处理决定:
            </div>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              @click="commandFill('cellIdx14', '处理决定', 'TextareaItem')">
              <p
                style="width:100%; height:auto; word-wrap:break-word;word-wrap: break-all; overflow: hidden;"
              >{{ letData.cellIdx14 ? letData.cellIdx14 : '（点击编辑）' }}</p>
              <cell-line></cell-line>
            </div>
            <div class="docTextarea">
              <label style="width:5%"></label>
              如果不服本决定，可在接到本决定书之日起60日内向
              <span
                @click="commandFill('cellIdx15', '人民政府', 'TextItem')"
              >{{ letData.cellIdx15 ? letData.cellIdx15 : '（点击编辑）'}}</span>
              人民政府或者
              <span
                @click="commandFill('cellIdx16', '', 'TextItem')"
              >{{ letData.cellIdx16 ? letData.cellIdx16 : '（点击编辑）' }}</span>
              申请行政复议,或者在6个月内依法向
              <span
                @click="commandFill('cellIdx17', '法院', 'TextItem')"
              >{{ letData.cellIdx17 ? letData.cellIdx17 : '（点击编辑）'}}</span>
              法院提起行政诉讼；复议、诉讼期间，不停止执行本决定。
            </div>
            <table class="docBody" style="margin-top: 60px;">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_18"
                  align="right"
                  style="width: 95%"
                  @click="commandFill('cellIdx18', '', 'TextItem')"
                >
                  {{ letData.cellIdx18 ? letData.cellIdx18 : "（点击编辑）" }}
                </td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_19"
                  align="right"
                  style="width: 95%"
                  data-title
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx19', '日期', 'DateItem')"
                >
                  {{ letData.cellIdx19 ? letData.cellIdx19 : "（点击编辑）" }}
                </td>
              </tr>
            </table>
            <div class="docTextarea" style="border-top: 2px solid #000; margin-top: 60px;">
              备注：本文书一式两份，一份交被取证单位，一份存档。
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
import { getDocNumber, setNewDanger } from "@/utils/setInitPaperData";
import associationSelectPaper from "@/components/association-select-paper";
export default {
  name: "Let109",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {
        cellIdx0: null, // 文书号
        cellIdx1: null, // 文书号
        cellIdx2: null, // 文书号
        cellIdx3: null, // 文书号
        cellIdx4: null, // corpname
        cellIdx5: null, // 单位
        cellIdx6: null, // 年
        cellIdx7: null, // 月
        cellIdx8: null, // 日
        cellIdx9: null, // 物品名称
        cellIdx10: null, // 文书号
        cellIdx11: null, // 文书号
        cellIdx12: null, // 文书号
        cellIdx13: null, // 文书号
        cellIdx14: null, // 处理决定
        cellIdx15: null, // 人民政府
        cellIdx16: null, // 可在接到本决定书之日起60日内向。。。申请行政复议或6个月内向
        cellIdx17: null, // 人民法院
        cellIdx18: null, // 
        cellIdx19: null, // 日期
        DangerTable: null,
        associationPaperId: null,
        associationPaperOrder: []
      },
      options: {},
      associationPaper: ["25"],
    };
  },
  methods: {
    async initLetData(selectedPaper) {
      let db = new GoDB(this.$store.state.DBName);
      let corpBase = db.table("corpBase");
      let corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      // 1.生成文书编号
      let { num0, num1, num3, num4 } = await getDocNumber(
        db,
        this.docData.docTypeNo,
        this.corpData.caseId
      );
      // 2.获取先行登记保存证据通知书中的日期、物品清单和编号字段
      let let25DataPaperContent = JSON.parse(
        selectedPaper.let25Data.paperContent
      );
      // 日期
      let let25Date = selectedPaper.let25Data.createDate;
      let25Date = let25Date
        ? let25Date.split(' ')[0].replace("年", "-").replace("月", "-").replace("日", "-")
        : " - - ";
      let dateList = let25Date.split("-");
      let cellIdx6String = dateList[0];
      let cellIdx7String = dateList[1];
      let cellIdx8String = dateList[2];
      // 物品名称：
      let checkPosition = ''
      if (this.corpData.caseType === "0") {
        // 5.获取检查地点
        let wkPaper = db.table('wkPaper')
        let paper22 = await wkPaper.find(item => item.paperId === let25DataPaperContent.associationPaperId.paper22Id)
        checkPosition = paper22.paperContent ? JSON.parse(paper22.paperContent).cellIdx4 || 'XX' + '使用的' : ''
      }
      let let25Article = let25DataPaperContent.SamplingForensicsTable
        ? let25DataPaperContent.SamplingForensicsTable.tableData
        : [];
      let articleName = "";
      if (let25Article.length > 0) {
        let25Article.map((item) => {
          articleName += item.name + "、";
        });
        articleName = articleName.substring(0, articleName.length - 1);
      }
      let cellIdx9String = checkPosition + (articleName || "XXX");
      // 文书号：
      let num250 = let25DataPaperContent.cellIdx0;
      let num251 = let25DataPaperContent.cellIdx1;
      let num253 = let25DataPaperContent.cellIdx2;
      let num254 = let25DataPaperContent.cellIdx3;
      // 3.sysOfficeInfo实体中 organName、人民法院：courtPrefix
      let orgInfo = db.table("orgInfo");
      let orgData = await orgInfo.find(
        (item) => item.no === this.$store.state.curCase.affiliate
      );
      let orgSysOfficeInfo =
        orgData && orgData.sysOfficeInfo
          ? JSON.parse(orgData.sysOfficeInfo)
          : { goverPrefix: "", organName: "", courtPrefix: "" };
      let cellIdx15String = orgSysOfficeInfo.goverPrefix;
      let cellIdx16String = orgSysOfficeInfo.organName;
      let cellIdx17String = orgSysOfficeInfo.courtPrefix;
      let DangerTable = null
      if (this.corpData.caseType === '0') {
        DangerTable = let25DataPaperContent.DangerTable ? 
          setNewDanger(selectedPaper.let25Data, let25DataPaperContent.DangerTable)
          : {}
      }
      let associationPaperId = Object.assign({}, this.setAssociationPaperId(let25DataPaperContent.associationPaperId), {
        paper25Id: selectedPaper.let25Data.paperId
      }) 
      let associationPaperOrder = this.setAssociationPaperOrder(let25DataPaperContent.associationPaperOrder)
      associationPaperOrder.push('25')
      await db.close();
      this.letData = Object.assign({}, this.letData, {
        cellIdx0: num0, // 文书号
        cellIdx1: num1, // 文书号
        cellIdx2: num3, // 文书号
        cellIdx3: num4, // 文书号
        cellIdx4: corp.corpName ? corp.corpName : null, // corpname
        cellIdx6: cellIdx6String, // 年
        cellIdx7: cellIdx7String, // 月
        cellIdx8: cellIdx8String, // 日
        cellIdx9: cellIdx9String, // 物品名称
        cellIdx10: num250, // 文书号
        cellIdx11: num251, // 文书号
        cellIdx12: num253, // 文书号
        cellIdx13: num254, // 文书号
        cellIdx14: '解除先行登记保存证据', // 处理决定
        cellIdx15: cellIdx15String, // 可在接到本决定书之日起60日内向。。。申请行政复议或6个月内向
        cellIdx16: cellIdx16String, // organName
        cellIdx17: cellIdx17String, // 人民法院
        cellIdx18: this.$store.state.curCase.provinceGroupName, //
        cellIdx19: this.todayDate, // 日期
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