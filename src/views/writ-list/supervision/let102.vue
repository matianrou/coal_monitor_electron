<!-- 现场检查 一般检查 现场处理决定书 2 -->
<template>
  <div style="width: 100%; height: 100%;">
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
            <div class="textAlignCenter formHeader1">现场处理决定书</div>
            <div class="docTextLine paper-number-div">
              <div>
                <span
                  @click="commandFill('cellIdx0', '文书号', 'TextItem')"
                >{{ letData.cellIdx0 ? letData.cellIdx0 : '（编辑）' }}</span>
                <label>（</label>
                <span
                  @click="commandFill('cellIdx1', '文书号', 'TextItem')"
                >{{ letData.cellIdx1 ? letData.cellIdx1 : '（编辑）' }}</span>
                <label>）煤安处〔</label>
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
                >{{letData.cellIdx4}}</td>
                <td class="textAlignLeft">:</td>
              </tr>
            </table>
            <div class="docTextarea">
              <label style="width:5%"></label>
              本机关于
              <span
                @click="commandFill('cellIdx6', '', 'TextItem')"
              >{{ letData.cellIdx6 ? letData.cellIdx6 : '（时间）'}}</span>
              现场检查时，发现你单位有下列违法违规行为，现作出以下现场处理决定：
              <span
                @click="commandFill('cellIdx7', '现场处理决定', 'DangerTable')"
              >{{ letData.cellIdx7 }}</span>
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <label style="width:5%"></label>
              如果不服本决定，可在接到本决定书之日起60日内向
              <span
                @click="commandFill('cellIdx8', '人民政府', 'TextItem')"
              >{{ letData.cellIdx8 ? letData.cellIdx8 : '（点击编辑）'}}</span>
              人民政府或者
              <span
                @click="commandFill('cellIdx9', '', 'TextItem')"
              >{{ letData.cellIdx9 ? letData.cellIdx9 : '（点击编辑）' }}</span>
              申请行政复议，或者在6个月内依法向
              <span
                @click="commandFill('cellIdx10', '人民法院', 'TextItem')"
              >{{ letData.cellIdx10 ? letData.cellIdx10 : '（点击编辑）' }}</span>
              人民法院提起行政诉讼；复议、诉讼期间，不停止执行本决定。
            </div>
            <div class="docTextarea">
              <span class="no-line" style="width:28%">现场执法人员（签名):</span>
              <span style="display:inline-block;min-width:30%;line-height: normal;max-width:30%" @click="commandFill('cellIdx11', '现场执法人员（签名)', 'TextItem')"
                >{{ letData.cellIdx11 ? letData.cellIdx11 : "（点击编辑）" }}
              </span>
              <span class="no-line" style="width: 14%">执法证号：</span>
              <span style="display:inline-block;min-width:23%;line-height: normal;max-width:23%" @click="commandFill('cellIdx12', '执法证号', 'TextItem')">{{
                letData.cellIdx12 ? letData.cellIdx12 : "（点击编辑）"
              }}</span>
            </div>
            <div class="docTextarea">
              <span class="no-line" style="width:28%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span style="display:inline-block;min-width:30%;line-height: normal;max-width:30%" @click="commandFill('cellIdx13', '现场执法人员（签名', 'TextItem')"
                >{{ letData.cellIdx13 ? letData.cellIdx13 : "（点击编辑）" }}
              </span>
              <span class="no-line" style="width: 14%">执法证号：</span>
              <span style="display:inline-block;min-width:23%;line-height: normal;max-width:23%" @click="commandFill('cellIdx14', '执法证号', 'TextItem')">{{
                letData.cellIdx14 ? letData.cellIdx14 : "（点击编辑）"
              }}</span>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:60%">
                <span class="no-line">被检查单位负责人（签名):</span>
                <span @click="commandFill('cellIdx15', '被检查单位负责人（签名)', 'TextItem')"
                  >{{ letData.cellIdx15 ? letData.cellIdx15 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">日&nbsp;&nbsp;&nbsp;期：</span>
                <span @click="commandFill('cellIdx16', '日期', 'DateItem')">{{
                  letData.cellIdx16 ? letData.cellIdx16 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <table class="docBody" style="margin-top: 30px;">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_17"
                  align="right"
                  style="width:95%"
                  @click="commandFill('cellIdx17', '', 'TextItem')"
                >{{letData.cellIdx17 ? letData.cellIdx17 : '（点击编辑）'}}</td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_18"
                  align="right"
                  style="width:95%"
                  data-title
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx18', '日期', 'DateItem')"
                >{{letData.cellIdx18 ? letData.cellIdx18 : '（点击编辑）'}}</td>
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
import { getDangerObject, getDocNumber } from '@/utils/setInitPaperData'
import associationSelectPaper from '@/components/association-select-paper'
export default {
  name: "Let102",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {},
      options: {
        cellIdx7: {
          page: '2', // 用于在隐患项保存，做数据处理时，判断是否增加现场处理决定字段描述
          showBaseInfor: false, // 用于区分是否展示基本情况大文本输入
          showSelectDangerBtn: false // 用于区分是否可以选择隐患项
        }
      },
      associationPaper: ['1']
    };
  },
  methods: {
    async initLetData (selectedPaper) {
      let db = new GoDB(this.$store.state.DBName);
      let corpBase = db.table("corpBase");
      let corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      let let1DataPaperContent = JSON.parse(selectedPaper.let1Data.paperContent)
      let dangerObject = getDangerObject(let1DataPaperContent.DangerTable.tableData)
      // 通过机构接口中的sysOfficeInfo中获取的organName和courtPrefix字段分别填充cellIdx8和cellIdx9字段
      let orgInfo = db.table("orgInfo");
      let orgData = await orgInfo.find(item => item.no === this.$store.state.user.userGroupId)
      let orgSysOfficeInfo = orgData && orgData.sysOfficeInfo ? JSON.parse(orgData.sysOfficeInfo) : {courtPrefix: '', organName: ''}
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
        cellIdx4: corp.corpName ? corp.corpName : null, // 被检查单位
        cellIdx4TypeTextItem: corp.corpName ? corp.corpName : null, // 被检查单位
        cellIdx5: null, // 暂不用
        cellIdx6: null, // 本机关于XXX现场检查时
        cellIdx7: dangerObject.contentOnsiteDesc, //现场处理决定
        cellIdx8: null, // 人民政府
        cellIdx9: orgSysOfficeInfo.organName,
        cellIdx9TypeTextItem: orgSysOfficeInfo.organName, //
        cellIdx10: orgSysOfficeInfo.courtPrefix, // 人民法院
        cellIdx10TypeTextItem: orgSysOfficeInfo.courtPrefix, // 人民法院
        cellIdx11: null, // 现场执法人员（签名)'
        cellIdx12: null, //执法证号
        cellIdx13: null, // 现场执法人员（签名)
        cellIdx14: null,//执法证号
        cellIdx15: null, // 被检查单位负责人（签名)
        cellIdx16: null, // 日期
        cellIdx17: this.$store.state.curCase.provinceGroupName, //
        cellIdx18: this.todayDate, // 日期
        cellIdx18TypeDateItem: this.todayDate, // 日期
        DangerTable: let1DataPaperContent.DangerTable, // 隐患项大表
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
        if (key === 'cellIdx7') {
          // 隐患项时对应letData中的dangerItemObject
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