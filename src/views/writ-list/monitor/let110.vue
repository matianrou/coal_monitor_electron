<!-- 现场检查 实施检查 查封(扣押)决定书 32 -->
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
              <table class="docBody">
                <tr>
                  <td
                    class="cellInput"
                    id="cell_idx_0"
                    style="width: 15%"
                    data-title="查封(扣押)"
                    data-type="text"
                    data-src
                  >
                    {{ letData.cellIdx0 }}
                  </td>
                  <td class="textAlignLeft">决定书</td>
                </tr>
              </table>
            </div>
            <div class="formHeader5 paper-number-div">
              <div>
                <span @click="commandFill('cellIdx1', '', 'TextItem')">{{
                  letData.cellIdx1 ? letData.cellIdx1 : "（编辑）"
                }}</span>
                <label>矿安监</label>
                <span @click="commandFill('cellIdx2', '', 'TextItem')">{{
                  letData.cellIdx2 ? letData.cellIdx2 : "（编辑）"
                }}</span>
                <span>{{
                  letData.cellIdx24 ? letData.cellIdx24 : "（编辑）"
                }}</span>
                <label>〔</label>
                <span @click="commandFill('cellIdx3', '', 'TextItem')">{{
                  letData.cellIdx3 ? letData.cellIdx3 : "（编辑）"
                }}</span>
                <label>〕</label>
                <span @click="commandFill('cellIdx4', '', 'TextItem')">{{
                  letData.cellIdx4 ? letData.cellIdx4 : "（编辑）"
                }}</span>
                <label>号</label>
              </div>
            </div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_5"
                  style="width: 50%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx5', '', 'TextItem')"
                >
                  {{ letData.cellIdx5 }}
                </td>
                <td class="textAlignLeft">:</td>
              </tr>
            </table>
            <div class="docTextarea">
              <label style="width: 5%"></label>
              经查，你单位
              <span
                @dblclick="commandFill('cellIdx6', '违法违规行为', corpData.caseType === '0' ? 'DangerTable' : 'DangerTextareaItem')"
                @click="commandFill('cellIdx6', '违法违规行为', 'DangerTextareaItem')"
                >{{
                  letData.cellIdx6 ? letData.cellIdx6 : "（点击编辑）"
                }}</span
              >
              行为涉嫌违反
              <span 
                @dblclick="commandFill('cellIdx7', '规定', corpData.caseType === '0' ? 'DangerTable' : 'DangerTextareaItem')"
                @click="commandFill('cellIdx7', '规定', 'DangerTextareaItem')">{{
                letData.cellIdx7 ? letData.cellIdx7 : "（点击编辑）"
              }}</span>
              的规定，根据《中华人民共和国安全生产法》第六十二条第一款第四项规定，我
              <span class="no-underline" @click="commandFill('cellIdx8', '局', 'TextItem')">{{
                letData.cellIdx8 ? letData.cellIdx8 : "(编辑)"
              }}</span>
              决定对你单位涉案
              <span
                class="no-underline"
                @click="commandFill('cellIdx9', '', 'SelectItem')"
                >{{ letData.cellIdx9 ? letData.cellIdx9 : "（点击编辑）" }}</span
              >
              予以
              <span
                class="no-underline"
                >{{
                  letData.cellIdx0 ? letData.cellIdx0 : "（点击编辑）"
                }}</span
              >
              <span
                class="no-underline"
                @click="commandFill('cellIdx10', '《物品清单》', 'SamplingForensicsTable')"
                >（详见《物品清单》）。</span
              >
            </div>
            <div class="docTextarea">
              <label style="width: 5%"></label>
              我
              <span
                class="no-underline"
                @click="commandFill('cellIdx11', '局', 'TextItem')"
                >{{ letData.cellIdx11 ? letData.cellIdx11 : "(编辑)" }}</span
              >
              将于三十日内（不包括检测、检验或者技术鉴定期限）对上述被
              <span class="no-underline">{{
                letData.cellIdx12 ? letData.cellIdx12 : "（点击编辑）"
              }}</span>
              的
              <span
                class="no-underline"
                @click="commandFill('cellIdx9', '', 'SelectItem')"
                >{{
                  letData.cellIdx9 ? letData.cellIdx9 : "（点击编辑）"
                }}</span
              >
              作出处理决定。此前，你单位不得使用、销毁或转移上述
              <span class="no-underline" @click="commandFill('cellIdx9', '', 'SelectItem')">{{
                letData.cellIdx9 ? letData.cellIdx9 : "（点击编辑）"
              }}</span>
              ，并负有安全保障责任。
            </div>
            <div class="docTextarea">
              <label style="width: 5%"></label>
              如不服本决定，可在接到本决定书之日起60日内向
              <span @click="commandFill('cellIdx15', '', 'TextItem')">{{
                letData.cellIdx15 ? letData.cellIdx15 : "（点击编辑）"
              }}</span>
              申行政复议请或6个月内向
              <span @click="commandFill('cellIdx16', '人民法院', 'TextItem')">{{
                letData.cellIdx16 ? letData.cellIdx16 : "（点击编辑）"
              }}</span>
              人民法院提起行政诉讼，但不停止本决定的执行。
            </div>
            <table height="30"></table>
            <div class="docTextLine">
              <label style="width: 7%"></label>
              <label>附件：</label>
              <div
                class="no-line-div"
                @click="
                  commandFill(
                    'cellIdx10',
                    '《物品清单》',
                    'SamplingForensicsTable'
                  )
                "
              >
                《物品清单》
              </div>
            </div>
            <table height="30"></table>
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
            <div class="docTextarea" style="border-top: 2px solid #000;">
              备注：本文书一式两份，一份交被
              <span
                style="borderBottom:none"
              >{{ letData.cellIdx23 ? letData.cellIdx23 : '（点击编辑）'}}</span>
              单位，一份存档。 
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
        <el-radio label="查封">查封</el-radio>
        <el-radio label="扣押">扣押</el-radio>
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
      :col-list="colList"
      @close="closeDialog"
      @confirm-paper="confirmPaper"
    ></select-paper>
  </div>
</template>

<script>
import GoDB from "@/utils/godb.min.js";
import { getDangerObject, getDocNumber, setNewDanger } from "@/utils/setInitPaperData";
import associationSelectPaper from "@/components/association-select-paper";
const dictionary = [
  {
    value: "场所",
    name: "场所",
  },
  {
    value: "设施",
    name: "设施",
  },
  {
    value: "物品",
    name: "物品",
  },
  {
    value: "场所、设施",
    name: "场所、设施",
  },
  {
    value: "场所、物品",
    name: "场所、物品",
  },
  {
    value: "设施、物品",
    name: "设施、物品",
  },
  {
    value: "场所、设施、物品",
    name: "场所、设施、物品",
  },
];
export default {
  name: "Let110",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {},
      options: {
        cellIdx6: {
          page: "32",
          key: "cellIdx6",
        },
        cellIdx7: {
          page: "32",
          key: "cellIdx7",
        },
        cellIdx9: dictionary,
      },
      associationPaper: this.corpData.caseType === '0' ? ["1"] : [],
      selectedType: "查封",
      visibleSelectDialog: false,
    };
  },
  methods: {
    async initLetData(selectedPaper) {
      let db = new GoDB(this.$store.state.DBName);
      let corpBase = db.table("corpBase");
      let corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      // 1.弹出提示框，选择查封或扣押
      this.visibleSelectDialog = true;
      // 2.生成文书编号
      let { num0, num1, num3, num4 } = await getDocNumber(
        db,
        this.docData.docTypeNo,
        this.corpData.caseId,
        this.$store.state.user
      );
      // 3.违法行为：获取笔录文书中的隐患数据
      let let1DataPaperContent = this.corpData.caseType === '0' ? JSON.parse(
        selectedPaper.let1Data.paperContent
      ) : null;
      let dangerObject = this.corpData.caseType === '0' ? getDangerObject(
        let1DataPaperContent.DangerTable.selectedDangerList
      ) : null;
      let cellIdx6String = this.corpData.caseType === '0' ? `${dangerObject.dangerString}` : '';
      let cellIdx7String = this.corpData.caseType === '0' ? `${dangerObject.illegalString}` : '';
      // 4.地点：sysOfficeInfo实体中organName字段+ courtPrefix字段
      let orgInfo = db.table("orgInfo");
      let orgData = await orgInfo.find(
        (item) => item.no === this.$store.state.user.userGroupId
      );
      let orgSysOfficeInfo =
        orgData && orgData.sysOfficeInfo
          ? JSON.parse(orgData.sysOfficeInfo)
          : { organName: "", courtPrefix: "" };
      let cellIdx16String = orgSysOfficeInfo.organName;
      let cellIdx17String = orgSysOfficeInfo.courtPrefix;
      let DangerTable = null
      if (this.corpData.caseType === '0') {
        DangerTable = let1DataPaperContent.DangerTable ? 
        setNewDanger(selectedPaper.let1Data, let1DataPaperContent.DangerTable)
        : {}
      }
      await db.close();
      this.letData = {
        cellIdx0: null, // 查封(扣押)
        cellIdx1: num0, // 文书号
        cellIdx1TypeTextItem: num0, // 文书号
        cellIdx2: num1, // 文书号
        cellIdx2TypeTextItem: num1, // 文书号
        cellIdx24: null, // 查/扣
        cellIdx24TypeTextItem: null, // 查/扣
        cellIdx3: num3, // 文书号
        cellIdx3TypeTextItem: num3, // 文书号
        cellIdx4: num4, // 文书号
        cellIdx4TypeTextItem: num4, // 文书号
        cellIdx5: corp.corpName ? corp.corpName : null, // corpname
        cellIdx5TypeTextItem: corp.corpName ? corp.corpName : null, // corpname
        cellIdx6: cellIdx6String, // 违法行为
        cellIdx7: cellIdx7String, // 涉嫌违法...规定
        cellIdx8: '局', //局
        cellIdx8TypeTextItem: '局', //局
        cellIdx9: '物品', // 对你单位涉案....
        cellIdx9TypeSelectItem: '物品', // 对你单位涉案....
        cellIdx10: null, // 附件
        cellIdx11: '局', // 局
        cellIdx11TypeTextItem: '局', //局
        cellIdx12: null, // 查封/扣押
        // cellIdx13: null, // 暂不用
        // cellIdx14: null, // 暂不用
        cellIdx15: cellIdx16String, // organName
        cellIdx15TypeTextItem: cellIdx16String, // organName
        cellIdx16: cellIdx17String, // courtPrefix人民法院
        cellIdx16TypeTextItem: cellIdx17String, // courtPrefix人民法院
        // cellIdx17: null, // 附件 暂不用
        cellIdx18: this.$store.state.curCase.groupName, //
        cellIdx18TypeTextItem: this.$store.state.curCase.groupName, //
        cellIdx19: this.todayDate, //日期
        cellIdx19TypeDateItem: this.todayDate, // 日期
        // cellIdx20: null, // 年
        // cellIdx21: null, //月
        // cellIdx22: null, // 日 暂不用
        cellIdx23: null, // 查封/扣押
        DangerTable: DangerTable,
        SamplingForensicsTable: {
          tableData: [],
          signature: null,
          signDate: "",
        },
        associationPaperId: this.corpData.caseType === '0' ? { // 关联的paperId
          paper22Id: let1DataPaperContent.associationPaperId.paper22Id,
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
        if (key === "cellIdx6" || key === "cellIdx7") {
          if (type === 'DangerTable') {
            this.options[key] = {
              page: "32",
              key: key,
            };
            dataKey = "DangerTable";
          } else {
            this.options[key] = {
              disabled: false
            };
          }
        } else if (key === "cellIdx10") {
          this.options[key] = {
            canEdit: true,
            page: "32", // 物品清单
            name: this.letData.selectedType,
          };
          dataKey = "SamplingForensicsTable";
        }
        this.$refs.letMain.commandFill(
          key,
          dataKey,
          title,
          type,
          this.letData[dataKey],
          this.options[key]
        );
      } else {
        if (key === "cellIdx10") {
          this.options[key] = {
            canEdit: false,
            page: "32", // 物品清单
            name: this.letData.selectedType,
          };
          let dataKey = "SamplingForensicsTable";
          this.$refs.letMain.commandFill(
            key,
            dataKey,
            title,
            type,
            this.letData[dataKey],
            this.options[key]
          );
        }
      }
    },
    confirm() {
      // 选择查封/扣押
      this.visibleSelectDialog = false;
      this.letData.cellIdx0 = this.selectedType;
      this.letData.cellIdx0TypeTextItem = this.selectedType;
      this.letData.cellIdx12 = this.selectedType;
      this.letData.cellIdx12TypeTextItem = this.selectedType;
      this.letData.cellIdx23 = this.selectedType;
      this.letData.cellIdx23TypeTextItem = this.selectedType;
      this.letData.cellIdx24 = this.selectedType.substring(0, 1);
      this.letData.cellIdx24TypeTextItem = this.selectedType.substring(0, 1);
      this.letData.selectedType = this.selectedType;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/let";
</style>