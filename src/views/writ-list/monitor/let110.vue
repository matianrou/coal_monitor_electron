<!-- 现场检查 实施检查 查封(扣押)决定书 -->
<template>
  <div style="width: 100%; height: 100%">
    <let-main
      ref="letMain"
      :corp-data="corpData"
      :doc-data="docData"
      :let-data="letData"
      :edit-data="editData"
      @go-back="goBack"
    >
      <div slot="left">
        <div class="page page-sizeA4">
          <div>
            <div class="stdRowH"></div>
            <div class="textAlignCenter formHeader0">
              国 家 煤 矿 安 全 监 察
              <br />
            </div>
            <div class="textAlignCenter formHeader3">
              <table class="docBody">
                <tr>
                  <td
                    class="cellInput"
                    id="cell_idx_0"
                    style="width: 15%"
                    data-title="查封(扣押)"
                    data-type="text"
                    data-src
                    @click="commandFill('cellIdx0', '查封(扣押)', 'TextItem')"
                  >
                    {{ letData.cellIdx0 }}
                  </td>
                  <td class="textAlignLeft">决定书</td>
                </tr>
              </table>
            </div>
            <div class="docTextLine paper-number-div">
              <div>
                <span @click="commandFill('cellIdx1', '', 'TextItem')">{{
                  letData.cellIdx1 ? letData.cellIdx1 : "（编辑）"
                }}</span>
                <label>（</label>
                <span @click="commandFill('cellIdx2', '', 'TextItem')">{{
                  letData.cellIdx2 ? letData.cellIdx2 : "（编辑）"
                }}</span>
                <label>）煤安撤〔</label>
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
              <span @click="commandFill('cellIdx6', '违法行为', 'TextItem')">{{
                letData.cellIdx6 ? letData.cellIdx6 : "（点击编辑）"
              }}</span>
              行为涉嫌违反
              <span @click="commandFill('cellIdx7', '', 'TextItem')">{{
                letData.cellIdx7 ? letData.cellIdx7 : "（点击编辑）"
              }}</span>
              的规定，根据《中华人民共和国安全生产法》第六十五条第一款第四项规定，我
              <span @click="commandFill('cellIdx8', '', 'TextItem')">{{
                letData.cellIdx8 ? letData.cellIdx8 : "（点击编辑）"
              }}</span>
              决定对你单位涉案
              <span @click="commandFill('cellIdx9', '', 'TextItem')">{{
                letData.cellIdx9 ? letData.cellIdx9 : "（点击编辑）"
              }}</span>
              予以
              <span @click="commandFill('cellIdx10', '', 'TextItem')">{{
                letData.cellIdx10 ? letData.cellIdx10 : "（点击编辑）"
              }}</span>
              （详见《物品清单》）。
            </div>
            <div class="docTextarea">
              <label style="width: 5%"></label>
              我
              <span @click="commandFill('cellIdx11', '', 'TextItem')">{{
                letData.cellIdx11 ? letData.cellIdx11 : "（点击编辑）"
              }}</span>
              将于三十日内（不包括检测、检验或者技术鉴定期限）对上述被
              <span @click="commandFill('cellIdx12', '', 'TextItem')">{{
                letData.cellIdx12 ? letData.cellIdx12 : "（点击编辑）"
              }}</span>
              的
              <span @click="commandFill('cellIdx13', '', 'TextItem')">{{
                letData.cellIdx13 ? letData.cellIdx13 : "（点击编辑）"
              }}</span>
              作出处理决定。此前，你单位不得使用、销毁或转移上述
              <span @click="commandFill('cellIdx14', '', 'TextItem')">{{
                letData.cellIdx14 ? letData.cellIdx14 : "（点击编辑）"
              }}</span>
              ，并负有安全保障责任。
            </div>
            <div class="docTextarea">
              <label style="width: 5%"></label>
              如不服本决定，可在接到本决定书之日起60日内向
              <span @click="commandFill('cellIdx15', '', 'DangerTableItem')">{{
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
                    'cellIdx17',
                    '先行登记保存证据清单',
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
            </table>
            <table class="docBody">
              <td class="cellInput" style="width: 55%"></td>
              <td
                class="cellInput"
                id="cell_idx_20"
                align="center"
                style="width: 10%"
                data-title="年"
                data-type="text"
                data-src
                @click="commandFill('cellIdx20', '年', 'TextItem')"
              >
                {{ letData.cellIdx20 }}
              </td>
              <td class="textAlignLeft">年</td>
              <td
                class="cellInput"
                id="cell_idx_21"
                align="center"
                style="width: 10%"
                data-title="月"
                data-type="text"
                data-src
                @click="commandFill('cellIdx21', '月', 'TextItem')"
              >
                {{ letData.cellIdx21 }}
              </td>
              <td class="textAlignLeft">月</td>
              <td
                class="cellInput"
                id="cell_idx_22"
                align="center"
                style="width: 10%"
                data-title="日"
                data-type="text"
                data-src
                @click="commandFill('cellIdx22', '日', 'TextItem')"
              >
                {{ letData.cellIdx22 }}
              </td>
              <td class="textAlignLeft">日</td>
            </table>
            <table height="60"></table>
            <div class="docTextarea cellLine">
              <label style="width: 5%"></label>
              &nbsp;&nbsp;&nbsp;&nbsp;备注：本文书一式两份，一份交被
              <span
                style="borderBottom:none"
                @click="commandFill('cellIdx23', '', 'TextItem')"
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
      :visible="visible"
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
  </div>
</template>

<script>
import letMain from "@/views/make-law-writ/components/let-main.vue";
import GoDB from "@/utils/godb.min.js";
import { getDangerObject, getDocNumber } from "@/utils/setInitPaperData";
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
  props: {
    corpData: {
      type: Object,
      default: () => {},
    },
    docData: {
      type: Object,
      default: () => {
        return {
          docTypeNo: null,
          docTypeName: null,
        };
      },
    },
  },
  components: {
    letMain,
  },
  data() {
    return {
      letData: {},
      options: {
        cellIdx7: {
          page: "32",
          key: "cellIdx7",
        },
        cellIdx8: {
          page: "32",
          key: "cellIdx8",
        },
        cellIdx10: dictionary,
        cellIdx14: dictionary,
        cellIdx15: dictionary,
      },
      editData: {}, // 回显数据
      selectedType: "查封",
      visible: false,
    };
  },
  created() {
    this.initData();
  },
  watch: {
    "corpData.corpId"(val) {
      if (val) {
        this.initData();
      }
    },
  },
  methods: {
    async initData() {
      const db = new GoDB(this.$store.state.DBName);
      const corpBase = db.table("corpBase");
      //查询符合条件的记录
      const corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      const wkPaper = db.table("wkPaper");
      const caseId = this.corpData.caseId;
      const checkPaper = await wkPaper.findAll((item) => {
        return (
          item.caseId === caseId &&
          item.paperType === this.docData.docTypeNo &&
          item.delFlag !== "1"
        );
      });
      // await wkPaper.delete(checkPaper[0].id)
      if (checkPaper.length > 0) {
        // 回显
        this.letData = JSON.parse(checkPaper[0].paperContent);
        this.editData = checkPaper[0];
      } else {
        // 创建初始版本
        // 1.弹出提示框，选择查封或扣押
        this.visible = true;
        // 2.生成文书编号
        let { num0, num1, num3, num4 } = await getDocNumber(
          db,
          this.docData.docTypeNo,
          caseId,
          this.$store.state.user
        );
        // 3.违法行为：获取笔录文书中的隐患数据
        const let101Data = await wkPaper.find((item) => {
          return item.caseId === caseId && item.paperType === "1";
        });
        let let101DataPapaerContent = JSON.parse(let101Data.paperContent);
        let dangerObject = getDangerObject(
          let101DataPapaerContent.dangerItemObject.tableData
        );
        let cellIdx7String = `${dangerObject.dangerString}`;
        let cellIdx8String = `${dangerObject.illegalString}`;
        // 4.地点：sysOfficeInfo实体中organName字段+ courtPrefix字段
        const orgInfo = db.table("orgInfo");
        const orgData = await orgInfo.find(
          (item) => item.no === this.$store.state.user.userGroupId
        );
        let orgSysOfficeInfo =
          orgData && orgData.sysOfficeInfo
            ? JSON.parse(orgData.sysOfficeInfo)
            : { organName: "", depAddress: "" };
        let cellIdx16String = orgSysOfficeInfo.organName;
        let cellIdx17String = orgSysOfficeInfo.depAddress;
        this.letData = {
          cellIdx0: null, // 查封(扣押)
          cellIdx1: num0, // 文书号
          cellIdx1TypeTextItem: num0, // 文书号
          cellIdx2: num1, // 文书号
          cellIdx2TypeTextItem: num1, // 文书号
          cellIdx3: num3, // 文书号
          cellIdx3TypeTextItem: num3, // 文书号
          cellIdx4: num4, // 文书号
          cellIdx4TypeTextItem: num4, // 文书号
          cellIdx5: corp.corpName ? corp.corpName : null, // corpname
          cellIdx5TypeTextItem: corp.corpName ? corp.corpName : null, // corpname
          cellIdx6: null, // 单位
          cellIdx7: cellIdx7String, // 隐患描述
          cellIdx8: cellIdx8String, // 违法认定法条
          cellIdx9: null, // 单位
          cellIdx10: null, // 检查物品场所码表
          cellIdx11: null, // 查封/扣押
          cellIdx12: null, // 单位
          cellIdx13: null, // 查封/扣押
          cellIdx14: null, // 检查物品场所码表
          cellIdx15: null, // 检查物品场所码表
          cellIdx16: cellIdx16String, // organName
          cellIdx16TypeTextItem: cellIdx16String, // organName
          cellIdx17: cellIdx17String, // courtPrefix人民法院
          cellIdx17TypeTextItem: cellIdx17String, // courtPrefix人民法院
          cellIdx18: null, // 附件
          cellIdx19: null, //
          cellIdx20: null, // 年
          cellIdx21: null, //月
          cellIdx22: null, // 日
          cellIdx23: null, //
          dangerItemObject: let101DataPapaerContent.dangerItemObject,
          SamplingForensicsTable: {
            tableData: [],
            signature: null,
            signDate: "",
          },
        };
      }
      await db.close();
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
        if (key === "cellIdx7" || key === "cellIdx8") {
          this.options[key] = {
            page: "32",
            key: key,
          };
          dataKey = "dangerItemObject";
        } else if (key === "cellIdx18") {
          this.options[key] = {
            canEdit: true,
            page: "32", // 物品清单
            name: this.selectedType,
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
      }
    },
    confirm() {
      // 选择单位或个人
      this.visible = false;
      this.letData.cellIdx0 = this.selectedType;
      this.letData.cellIdx0TypeTextItem = this.selectedType;
      this.letData.cellIdx11 = this.selectedType;
      this.letData.cellIdx11TypeTextItem = this.selectedType;
      this.letData.cellIdx13 = this.selectedType;
      this.letData.cellIdx13TypeTextItem = this.selectedType;
      this.letData.selectedType = this.selectedType;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/let";
</style>