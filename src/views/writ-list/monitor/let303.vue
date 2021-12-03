<!-- 行政强制 行政复议 不予受理行政复议申请决定书 41 -->
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
              不 予 受 理 行 政 复 议 申 请 决 定 书
            </div>
            <div class="formHeader5 paper-number-div">
              <div>
                <span @click="commandFill('cellIdx0', '文书号', 'TextItem')">{{
                  letData.cellIdx0 ? letData.cellIdx0 : "（编辑）"
                }}</span>
                <label>矿安监</label>
                <span @click="commandFill('cellIdx1', '文书号', 'TextItem')">{{
                  letData.cellIdx1 ? letData.cellIdx1 : "（编辑）"
                }}</span>
                <label>复不受〔</label>
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
              <label style="width: 5%"></label>
              你
              <span class="no-underline">{{
                letData.cellIdx5 ? letData.cellIdx5 : "（点击编辑）"
              }}</span>
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
              日 向我局提出行政复议申请，经审查，不符合以下第
              <span @click="commandFill('cellIdx9', '', 'SelectItem')">{{
                letData.cellIdx9 ? letData.cellIdx9 : "（点击编辑）"
              }}</span>
              项情形：
            </div>
            <table style="border: solid 0 #000" class="docBody">
              <tr>
                <td style="width: 5%"></td>
                <td class="textAlignLeft">
                  （一）有明确的申请人和符合规定的被申请人；
                </td>
              </tr>
              <tr>
                <td style="width: 5%"></td>
                <td class="textAlignLeft">
                  （二）申请人与具体行政行为有利害关系；
                </td>
              </tr>
              <tr>
                <td style="width: 5%"></td>
                <td class="textAlignLeft">
                  （三）有具体的行政复议请求和理由；
                </td>
              </tr>
              <tr>
                <td style="width: 5%"></td>
                <td class="textAlignLeft">（四）在法定申请期限内提出；</td>
              </tr>
              <tr>
                <td style="width: 5%"></td>
                <td class="textAlignLeft">
                  （五）属于行政复议法规定的行政复议范围；
                </td>
              </tr>
              <tr>
                <td style="width: 5%"></td>
                <td class="textAlignLeft">
                  （六）属于收到行政复议申请的行政复议机构的职责范围；
                </td>
              </tr>
              <tr>
                <td style="width: 5%"></td>
                <td class="textAlignLeft">
                  （七）其他行政复议机关尚未受理同一行政复议申请，人民法院尚未受理同一主
                </td>
              </tr>
              <tr>
                <td>体就同一事实提起的行政诉讼。</td>
              </tr>
            </table>
            <div class="docTextarea">
              <label style="width: 5%"></label>
              根据《中华人民共和国行政复议法》第十七条第一款的规定，我局决定不予受理你
              <span class="no-underline">{{
                letData.cellIdx10 ? letData.cellIdx10 : "（点击编辑）"
              }}</span>
              的行政复议申请。
            </div>
            <div class="docTextarea">
              <label style="width: 5%"></label>
              如对本不予受理决定不服，可以自收到本通知之日起十五日内依法向
              <span @click="commandFill('cellIdx11', '人民法院', 'TextItem')">{{
                letData.cellIdx11 ? letData.cellIdx11 : "（点击编辑）"
              }}</span>
              人民法院提起行政诉讼。
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:50%">
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;签收人（签名）：</span>
                <span @click="commandFill('cellIdx12', '签收人（签名）', 'TextItem')"
                  >{{ letData.cellIdx12 ? letData.cellIdx12 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;日期</span>
                <span @click="commandFill('cellIdx13', '日期', 'DateItem')">{{
                  letData.cellIdx13 ? letData.cellIdx13 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:50%">
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;我局地址：</span>
                <span @click="commandFill('cellIdx14', '我局地址', 'TextItem')"
                  >{{ letData.cellIdx14 ? letData.cellIdx14 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;邮政编码：</span>
                <span @click="commandFill('cellIdx15', '邮政编码：', 'TextItem')">{{
                  letData.cellIdx15 ? letData.cellIdx15 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:50%">
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;我局联系人：</span>
                <span @click="commandFill('cellIdx16', '我局联系人', 'TextItem')"
                  >{{ letData.cellIdx16 ? letData.cellIdx16 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;联系电话：</span>
                <span @click="commandFill('cellIdx17', '联系电话', 'TextItem')">{{
                  letData.cellIdx17 ? letData.cellIdx17 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <table height="20"></table>
            <table class="docBody">
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
            <div
              class="docTextarea"
              style="
                border-top: 2px solid #000;
                margin-top: 30px;
                line-height: normal;
              "
            >
              &nbsp;&nbsp;&nbsp;&nbsp;备注：本文书一式两份，一份交申请行政复议
              <span style="border-bottom: none">{{
                letData.cellIdx22 ? letData.cellIdx22 : "（点击编辑）"
              }}</span>
              ，一份存档。
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
import { getDangerObject, getDocNumber, setNewDanger } from "@/utils/setInitPaperData";
import associationSelectPaper from "@/components/association-select-paper";
export default {
  name: "Let303",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {},
      options: {
        cellIdx9: [
          {
            value: "（一）",
            name: "（一）",
          },
          {
            value: "（二）",
            name: "（二）",
          },
          {
            value: "（三）",
            name: "（三）",
          },
          {
            value: "（四）",
            name: "（四）",
          },
          {
            value: "（五）",
            name: "（五）",
          },
          {
            value: "（六）",
            name: "（六）",
          },
          {
            value: "（七）",
            name: "（七）",
          },
        ],
      },
      associationPaper: ["10"],
      visibleSelectDialog: false,
      selectedType: "单位", // 初始化时选择的单位或个人
    };
  },
  methods: {
    async initLetData(selectedPaper) {
      let db = new GoDB(this.$store.state.DBName);
      let corpBase = db.table("corpBase");
      let corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      // 1.弹出提示框，选择单位或个人
      this.visibleSelectDialog = true;
      // 2.生成文书编号
      let paperNumber = await getDocNumber(
        db,
        this.docData.docTypeNo,
        this.corpData.caseId,
        this.$store.state.user
      );
      // 3.企业煤矿名称
      // 4.日期，行政复议申请时间
      let let10DataPaperContent = JSON.parse(
        selectedPaper.let10Data.paperContent
      );
      // 5.通过sysOfficeInfo获取人民法院courtPrefix、我局地址：depAddress、
      //   邮政编码：depPost、我局联系人：master、联系电话：phone
      let orgInfo = db.table("orgInfo");
      let orgData = await orgInfo.find(
        (item) => item.no === this.$store.state.user.userGroupId
      );
      let orgSysOfficeInfo =
        orgData && orgData.sysOfficeInfo
          ? JSON.parse(orgData.sysOfficeInfo)
          : {
              courtPrefix: "",
              depAddress: "",
              depPost: "",
              master: "",
              phone: "",
            };
      let DangerTable = let10DataPaperContent.DangerTable ? 
        setNewDanger(selectedPaper.let10Data, let10DataPaperContent.DangerTable)
        : {}
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
        cellIdx4: corp.corpName, //
        cellIdx4TypeTextItem: corp.corpName, //
        cellIdx5: null, // 单位/个人
        cellIdx6: let10DataPaperContent.cellIdx0, // 年
        cellIdx7: let10DataPaperContent.cellIdx1, // 月
        cellIdx8: let10DataPaperContent.cellIdx2, // 日
        cellIdx9: null, //
        cellIdx10: null, // 单位/个人
        cellIdx11: orgSysOfficeInfo.courtPrefix, // 人民法院
        cellIdx11TypeTextItem: orgSysOfficeInfo.courtPrefix, // 人民法院
        cellIdx12: null, // 签收人（签名）
        cellIdx13: null, // 日期
        cellIdx14: orgSysOfficeInfo.depAddress, // 我局地址
        cellIdx14TypeTextItem: orgSysOfficeInfo.depAddress, // 我局地址
        cellIdx15: orgSysOfficeInfo.depPost, // 邮政编码
        cellIdx15TypeTextItem: orgSysOfficeInfo.depPost, // 邮政编码
        cellIdx16: orgSysOfficeInfo.master, // 我局联系人
        cellIdx16TypeTextItem: orgSysOfficeInfo.master, // 我局联系人
        cellIdx17: orgSysOfficeInfo.phone, // 联系电话
        cellIdx17TypeTextItem: orgSysOfficeInfo.phone, // 联系电话
        cellIdx18: this.$store.state.curCase.groupName, //
        cellIdx19: this.todayDate, //日期
        cellIdx22: null, //单位/个人
        DangerTable, // 隐患项大表
        associationPaperId: { // 关联的paperId
          paper22Id: let10DataPaperContent.associationPaperId.paper22Id,
          paper1Id: let10DataPaperContent.associationPaperId.paper1Id,
          paper6Id: let10DataPaperContent.associationPaperId.paper6Id,
          paper8Id: let10DataPaperContent.associationPaperId.paper8Id,
          paper10Id: selectedPaper.let10Data.paperId
        }
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
      this.letData.cellIdx5 = this.selectedType;
      this.letData.cellIdx10 = this.selectedType;
      this.letData.cellIdx22 = this.selectedType;
      this.letData.selectedType = this.selectedType;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/let";
</style>