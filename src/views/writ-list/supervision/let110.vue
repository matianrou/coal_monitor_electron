<!-- 现场检查 实施检查  查封（扣押）决定书 32 -->
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
            <div class="textAlignCenter formHeader0">
              煤矿安全监管行政执法文书
              <br />
            </div>
            <div class="textAlignCenter formHeader1">
              <table class="docBody">
                <tr>
                  <td
                    class="cellInput"
                    id="cell_idx_0"
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
            <div class="docTextLine paper-number-div">
              <div>
                <span @click="commandFill('cellIdx1', '文书号', 'TextItem')">{{
                  letData.cellIdx1 ? letData.cellIdx1 : "（编辑）"
                }}</span>
                <label>（</label>
                <span @click="commandFill('cellIdx2', '文书号', 'TextItem')">{{
                  letData.cellIdx2 ? letData.cellIdx2 : "（编辑）"
                }}</span>
                <label>）煤安</label>
                <span>{{
                  letData.cellIdx3 ? letData.cellIdx3 : "（编辑）"
                }}</span>
                <label>〔</label>
                <span @click="commandFill('cellIdx4', '文书号', 'TextItem')">{{
                  letData.cellIdx4 ? letData.cellIdx4 : "（编辑）"
                }}</span>
                <label>〕</label>
                <span @click="commandFill('cellIdx5', '文书号', 'TextItem')">{{
                  letData.cellIdx5 ? letData.cellIdx5 : "（编辑）"
                }}</span>
                <label>号</label>
              </div>
            </div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_6"
                  style="width: 62%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx6', '', 'TextItem')"
                >
                  {{ letData.cellIdx6 }}
                </td>
                <td class="textAlignLeft">:</td>
              </tr>
            </table>
            <div class="docTextarea">
              <label style="width: 5%"></label>
              经查，你单位
              <span
                @dblclick="
                  commandFill(
                    'cellIdx7',
                    '违法违规行为',
                    corpData.caseType === '0'
                      ? 'DangerTable'
                      : 'TextareaItem'
                  )
                "
                @click="
                  commandFill('cellIdx7', '违法违规行为', corpData.caseType === '0' ? 'DangerTextareaItem' : 'TextareaItem')
                "
                >{{
                  letData.cellIdx7 ? letData.cellIdx7 : "（点击编辑）"
                }}</span
              >
              的行为涉嫌违反
              <span
                @dblclick="
                  commandFill(
                    'cellIdx8',
                    '规定',
                    corpData.caseType === '0'
                      ? 'DangerTable'
                      : 'TextareaItem'
                  )
                "
                @click="commandFill('cellIdx8', '规定', corpData.caseType === '0' ? 'DangerTextareaItem' : 'TextareaItem')"
                >{{
                  letData.cellIdx8 ? letData.cellIdx8 : "（点击编辑）"
                }}</span
              >
              的规定，根据《中华人民共和国安全生产法》第<span class="text-decoration">六十五</span>条第<span class="text-decoration">一</span>款第<span class="text-decoration">四</span>项和《中华人民共和国行政强制法》第<span class="text-decoration">二十四</span>条规定，本机关决定对你单位涉案
              <span
                class="no-line"
                style="cursor: pointer;"
                @click="commandFill('cellIdx9', '', 'SelectItem')"
                >{{
                  letData.cellIdx9 ? letData.cellIdx9 : "（点击编辑）"
                }}</span
              >
              予以
              <span class="no-line">{{
                letData.cellIdx10 ? letData.cellIdx10 : "（点击编辑）"
              }}</span>
              ,（详见《
              <span class="no-line">{{
                letData.cellIdx11 ? letData.cellIdx11 : "（点击编辑）"
              }}</span>
              <span
                class="no-line"
                @click="
                  commandFill(
                    'cellIdx12',
                    '附件：物品清单',
                    'SamplingForensicsTable'
                  )
                "
                >物品清单》）。</span
              >
            </div>
            <div class="docTextarea">
              <label style="width: 5%"></label>
              本机关将于三十日内（不包括检测、检验或者技术鉴定期限）对上述被
              <span class="no-line">{{
                letData.cellIdx13 ? letData.cellIdx13 : "（点击编辑）"
              }}</span>
              的
              <span
                class="no-line"
                style="cursor: pointer;"
                @click="commandFill('cellIdx9', '', 'SelectItem')"
                >{{
                  letData.cellIdx9 ? letData.cellIdx9 : "（点击编辑）"
                }}</span
              >
              作出处理决定。此前，你单位不得使用、销毁或转移上述
              <span
                class="no-line"
                style="cursor: pointer;"
                @click="commandFill('cellIdx9', '', 'SelectItem')"
                >{{
                  letData.cellIdx9 ? letData.cellIdx9 : "（点击编辑）"
                }}</span
              >
              ，并负有安全保障责任。
            </div>
            <div class="docTextarea">
              <label style="width: 5%"></label>
              如不服本决定，可在接到本决定书之日起60日内向
              <span @click="commandFill('cellIdx16', '人民政府', 'TextItem')">{{
                letData.cellIdx16 ? letData.cellIdx16 : "（点击编辑）"
              }}</span>
              人民政府或者
              <span @click="commandFill('cellIdx17', '', 'TextItem')">{{
                letData.cellIdx17 ? letData.cellIdx17 : "（点击编辑）"
              }}</span>
              申请行政复议，或者在6个月内依法向
              <span @click="commandFill('cellIdx18', '法院', 'TextItem')">{{
                letData.cellIdx18 ? letData.cellIdx18 : "（点击编辑）"
              }}</span>
              法院提起行政诉讼；复议、诉讼期间，不停止执行本决定。
            </div>
            <div
              class="docTextarea"
              style="margin-top: 30px; margin-bottom: 30px"
            >
              <label style="width: 5%"></label>
              附件：
              <span class="no-line">{{
                letData.cellIdx19 ? letData.cellIdx19 : "（点击编辑）"
              }}</span>
              <span
                class="no-line"
                @click="
                  commandFill(
                    'cellIdx12',
                    '附件：物品清单',
                    'SamplingForensicsTable'
                  )
                "
                >《物品清单》</span
              >
            </div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_21"
                  align="right"
                  style="width: 95%"
                  @click="commandFill('cellIdx21', '', 'TextItem')"
                >
                  {{ letData.cellIdx21 ? letData.cellIdx21 : "（点击编辑）" }}
                </td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_22"
                  align="right"
                  style="width: 95%"
                  data-title
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx22', '日期', 'DateItem')"
                >
                  {{ letData.cellIdx22 ? letData.cellIdx22 : "（点击编辑）" }}
                </td>
              </tr>
            </table>
            <div class="docTextarea" style="border-top: 2px solid #000">
              备注：本文书一式两份，一份交被
              <span class="no-line">{{
                letData.cellIdx23 ? letData.cellIdx23 : "（点击编辑）"
              }}</span>
              单位，一份存档。
            </div>
          </div>
        </div>
        <div style="height: 20px; width: 100%"></div>
        <!-- 以下仅供web端抽样取证展示抽样取证清单 -->
        <div class="page-break"></div>
        <!-- 但页面不展示 -->
        <div style="height: 0px; overflow: hidden">
          <div class="page page-sizeA4">
            <div style="padding: 10px 0; text-align: center">
              {{letData.selectedType || ''}}物品清单
            </div>
            <div style="width: 19.5cm; margin: 0 auto;">
              <el-table
                :data="letData.SamplingForensicsTable.tableData"
                width="100%"
                border
              >
                <el-table-column
                  label="序号"
                  type="index"
                  width="50"
                  align="center">
                </el-table-column>
                <el-table-column
                  prop="name"
                  header-align="center"
                  align="left"
                  label="名称"
                >
                </el-table-column>
                <el-table-column
                  prop="modelNumber"
                  header-align="center"
                  align="left"
                  label="规格型号"
                >
                </el-table-column>
                <el-table-column
                  prop="manufacturer"
                  label="生产厂家"
                  header-align="center"
                  align="left"
                >
                </el-table-column>
                <el-table-column
                  prop="productDate"
                  label="出厂日期"
                  header-align="center"
                  width="120"
                  align="center"
                >
                </el-table-column>
                <el-table-column
                  prop="units"
                  label="单位"
                  header-align="center"
                  align="center"
                >
                </el-table-column>
                <el-table-column
                  prop="price"
                  label="价格"
                  header-align="center"
                  align="right"
                >
                </el-table-column>
                <el-table-column
                  prop="num"
                  label="数量"
                  header-align="center"
                  align="right"
                >
                </el-table-column>
              </el-table>
              <div style="margin-top: 30px;">
                <div>
                  <span>场所地点：</span>
                  <span>{{letData.SamplingForensicsTable.places || ''}}</span>
                </div>
                <div style="margin-top: 10px;">
                  <span>上述设施、设备、器材经核无误。</span>
                </div>
                <div style="margin-top: 10px;">
                  <span>被{{letData.selectedType}}单位负责人（签名）：</span>
                  <span>{{letData.SamplingForensicsTable.signature || ''}}</span>
                  <span>&nbsp;&nbsp;&nbsp;日期：</span>
                  <span>{{letData.SamplingForensicsTable.signDate || ''}}</span>
                </div>
                <div style="margin-top: 10px;">
                  <span>执法人员（签名）：</span>
                  <span>{{letData.SamplingForensicsTable.lawSignature || ''}}</span>
                  <span>&nbsp;&nbsp;&nbsp;日期：</span>
                  <span>{{letData.SamplingForensicsTable.lawSignDate || ''}}</span>
                </div>
              </div>
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
      v-if="visible.selectPaper"
      :visible="visible.selectPaper"
      :paper-list="paperList"
      @close="closeDialog"
      @confirm-paper="confirmPaper"
    ></select-paper>
  </div>
</template>

<script>
import { setNewDanger, getDocNumber, getOrgData } from "@/utils/setInitPaperData";
import associationSelectPaper from "@/components/association-select-paper";
import { setDangerTable } from "@/utils/handlePaperData";
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
      letData: {
        cellIdx0: null, // 查封(扣押)
        cellIdx1: null, // 文书号
        cellIdx2: null, // 文书号
        cellIdx3: null, // 查/扣
        cellIdx4: null, // 文书号
        cellIdx5: null, // 文书号
        cellIdx6: null, // corpName
        cellIdx7: null, // 违法行为
        cellIdx8: null, // 违法认定法条
        cellIdx9: null, // 对你单位涉案....
        cellIdx10: null, // 查封/扣押
        cellIdx11: null, // 查封/扣押
        cellIdx12: null, // 附件：物品清单
        // cellIdx13: null, // 暂不用
        // cellIdx14: null, // 暂不用
        cellIdx15: null, // 暂不用
        cellIdx16: null, // 人民政府
        cellIdx17: null, // organName
        cellIdx18: null, // 法院
        cellIdx19: null, // 查封/扣押
        // cellIdx20: null, // 暂不用
        cellIdx21: null, //
        cellIdx22: null, // 日期
        cellIdx23: null, // 查封/扣押
        DangerTable: null,
        SamplingForensicsTable: {
          tableData: [],
          signature: null,
          signDate: "",
        },
        associationPaperId: null,
        associationPaperOrder: []
      },
      options: {
        cellIdx9: dictionary,
      },
      selectedType: "查封",
      visibleSelectDialog: false,
      associationPaper: ["1"],
    };
  },
  methods: {
    async initLetData(selectedPaper) {
      let corpBase = await this.getDatabase('baseInfo');
      let corp = corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      // 1.弹出提示框，选择查封或扣押
      this.visibleSelectDialog = true;
      // 2.生成文书编号
      let { num0, num1, num3, num4 } = await getDocNumber(
        this.docData.docTypeNo,
        this.corpData.caseId
      );
      // 3.违法行为：获取笔录文书中的隐患数据
      let let1DataPaperContent = selectedPaper.let1Data ? JSON.parse(selectedPaper.let1Data.paperContent) : null;
      let cellIdx7String =
        this.corpData.caseType === "0"
          ? setDangerTable(
              let1DataPaperContent.DangerTable,
              {},
              {
                page: "32",
                key: "cellIdx7",
              }
            )
          : "";
      let cellIdx8String =
        this.corpData.caseType === "0"
          ? setDangerTable(
              let1DataPaperContent.DangerTable,
              {},
              {
                page: "32",
                key: "cellIdx8",
              }
            )
          : "";
      // 4.地点：sysOfficeInfo实体中organName字段+ courtPrefix字段
      let orgSysOfficeInfo = await getOrgData(this.$store.state.curCase.groupId)
      let cellIdx15String = orgSysOfficeInfo.goverPrefix;
      let cellIdx16String = orgSysOfficeInfo.organName;
      let cellIdx17String = orgSysOfficeInfo.courtPrefix;
      let DangerTable = null;
      if (this.corpData.caseType === "0") {
        DangerTable = let1DataPaperContent.DangerTable
          ? setNewDanger(
              selectedPaper.let1Data,
              let1DataPaperContent.DangerTable, 
              this.paperId
            )
          : {};
      }
      let associationPaperId = Object.assign({}, this.setAssociationPaperId(let1DataPaperContent.associationPaperId), {
        paper1Id: selectedPaper.let1Data.paperId,
      }) 
      let associationPaperOrder = this.setAssociationPaperOrder(let1DataPaperContent.associationPaperOrder)
      associationPaperOrder.push('1')
      this.letData = Object.assign({}, this.letData, {
        cellIdx1: num0, // 文书号
        cellIdx2: num1, // 文书号
        cellIdx4: num3, // 文书号
        cellIdx5: num4, // 文书号
        cellIdx6: corp.corpName ? corp.corpName : null, // corpname
        cellIdx7: cellIdx7String, // 违法行为
        cellIdx8: cellIdx8String, // 违法认定法条
        cellIdx9: '场所', // 场所
        cellIdx16: cellIdx15String, // 人民政府
        cellIdx17: cellIdx16String, // organName
        cellIdx18: cellIdx17String, // courtPrefix人民法院
        cellIdx21: this.$store.state.curCase.groupName, //
        cellIdx22: this.todayDate, // 日期
        DangerTable: DangerTable,
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
        if (key === "cellIdx7" || key === "cellIdx8") {
          if (type === "DangerTable") {
            this.options[key] = {
              page: "32",
              key: key,
            };
            dataKey = "DangerTable";
          } else {
            this.options[key] = {
              disabled: false,
            };
          }
        } else if (key === "cellIdx12") {
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
      // 选择单位或个人
      this.visibleSelectDialog = false;
      this.letData.cellIdx0 = this.selectedType;
      this.letData.cellIdx3 = this.selectedType.substring(0, 1);
      this.letData.cellIdx10 = this.selectedType;
      this.letData.cellIdx11 = this.selectedType;
      this.letData.cellIdx13 = this.selectedType;
      this.letData.cellIdx19 = this.selectedType;
      this.letData.cellIdx23 = this.selectedType;
      this.letData.selectedType = this.selectedType;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/let";
</style>