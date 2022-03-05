<!-- 现场检查 实施检查  查封（扣押）处理决定书 46 -->
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
                  <td class="textAlignLeft">处理决定书</td>
                </tr>
              </table>
            </div>
            <div class="docTextLine paper-number-div">
              <div>
                <span
                  @click="commandFill('cellIdx1', '文书号', 'TextItem')"
                >{{ letData.cellIdx1 ? letData.cellIdx1 : '（编辑）' }}</span>
                <label>（</label>
                <span
                  @click="commandFill('cellIdx2', '文书号', 'TextItem')"
                >{{ letData.cellIdx2 ? letData.cellIdx2 : '（编辑）' }}</span>
                <label>）煤安</label>
                <span
                >{{ letData.cellIdx3 ? letData.cellIdx3 : '（编辑）' }}</span>
                <label>处〔</label>
                <span
                  @click="commandFill('cellIdx4', '文书号', 'TextItem')"
                >{{ letData.cellIdx4 ? letData.cellIdx4 : '（编辑）' }}</span>
                <label>〕</label>
                <span
                  @click="commandFill('cellIdx5', '文书号', 'TextItem')"
                >{{ letData.cellIdx5 ? letData.cellIdx5 : '（编辑）' }}</span>
                <label>号</label>
              </div>
            </div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_6"
                  style="min-width: 50%"
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
              本机关于
              <span @click="commandFill('cellIdx7', '年', 'TextItem')">{{
                letData.cellIdx7 ? letData.cellIdx7 : "（XX）"
              }}</span>
              年
              <span @click="commandFill('cellIdx8', '月', 'TextItem')">{{
                letData.cellIdx8 ? letData.cellIdx8 : "（XX）"
              }}</span>
              月
              <span @click="commandFill('cellIdx9', '', 'TextItem')">{{
                letData.cellIdx9 ? letData.cellIdx9 : "（XX）"
              }}</span>
              日向你单位作出《
              <span
                class="no-underline"
                >{{
                  letData.cellIdx10 ? letData.cellIdx10 : "（点击编辑）"
                }}</span
              >
              决定书》（
              <span
                class="no-underline"
                @click="commandFill('cellIdx11', '', 'TextItem')"
                >{{
                  letData.cellIdx11 ? letData.cellIdx11 : "（点击编辑）"
                }}</span
              >
              （
              <span
                class="no-underline"
                @click="commandFill('cellIdx12', '', 'TextItem')"
                >{{
                  letData.cellIdx12 ? letData.cellIdx12 : "（点击编辑）"
                }}</span
              >
              ）煤安
              <span
                class="no-underline"
                @click="commandFill('cellIdx13', '', 'TextItem')"
                >{{
                  letData.cellIdx13 ? letData.cellIdx13 : "（点击编辑）"
                }}</span
              >
              〔
              <span
                class="no-underline"
                @click="commandFill('cellIdx14', '', 'TextItem')"
                >{{
                  letData.cellIdx14 ? letData.cellIdx14 : "（点击编辑）"
                }}</span
              >
              〕
              <span
                class="no-underline"
                @click="commandFill('cellIdx15', '', 'TextItem')"
                >{{
                  letData.cellIdx15 ? letData.cellIdx15 : "（点击编辑）"
                }}</span
              >
              号），对所附《
              <span
                class="no-underline"
                >{{
                  letData.cellIdx16 ? letData.cellIdx16 : "（点击编辑）"
                }}</span
              >
              <span
                class="no-underline"
                @click="
                  commandFill('cellIdx17', '附件：', 'SamplingForensicsTable')
                "
                >物品清单》所列物品予以</span
              >
              <span
                class="no-underline"
                >{{
                  letData.cellIdx18 ? letData.cellIdx18 : "（点击编辑）"
                }}</span
              >
              。现根据《中华人民共和国行政强制法》第<span class="text-decoration">二十七</span>条、
              <span
                class="no-underline"
                @click="commandFill('cellIdx19', '', 'SelectItem')"
                >{{ letData.cellIdx19 ? letData.cellIdx19 : "□" }}</span
              >
              第<span class="text-decoration">二十八</span>条第<span class="text-decoration">一</span>款第
              <span @click="commandFill('cellIdx20', '第几项', 'TextItem')">{{
                letData.cellIdx20 ? letData.cellIdx20 : "（点击编辑）"
              }}</span>
              项的规定，作出处理决定：具体处理决定详见《
              <span
                class="no-underline"
                >{{
                  letData.cellIdx21 ? letData.cellIdx21 : "（点击编辑）"
                }}</span
              >
              物品处理表》。
            </div>
            <div class="docTextarea">
              <label style="width:5%"></label>
              如果不服本决定，可在接到本决定书之日起60日内向
              <span
                @click="commandFill('cellIdx22', '人民政府', 'TextItem')"
              >{{ letData.cellIdx22 ? letData.cellIdx22 : '（点击编辑）'}}</span>
              人民政府或者
              <span
                @click="commandFill('cellIdx23', '', 'TextItem')"
              >{{ letData.cellIdx23 ? letData.cellIdx23 : '（点击编辑）' }}</span>
              申请行政复议，或者在6个月内依法向
              <span
                @click="commandFill('cellIdx24', '法院', 'TextItem')"
              >{{ letData.cellIdx24 ? letData.cellIdx24 : '（点击编辑）'}}</span>
              法院提起行政诉讼；复议、诉讼期间，不停止执行本决定。
            </div>
            <div class="docTextarea" style="margin-top: 30px; margin-bottom: 30px;">
              <label style="width:5%"></label>
              附件：
              <span 
                style="borderBottom:none"
              >{{ letData.cellIdx25 ? letData.cellIdx25 : '（点击编辑）'}}</span>
              <span
                style="borderBottom:none"
                @click="
                    commandFill(
                      'cellIdx17',
                      '附件：',
                      'SamplingForensicsTable'
                    )
                  "
              >物品处理表</span>
            </div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_27"
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
              备注：本文书一式两份，一份交被
              <span
                style="borderBottom:none"
              >{{ letData.cellIdx29 ? letData.cellIdx29 : '（点击编辑）'}}</span>
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
              {{letData.selectedType || ''}}物品处理表
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
const toggleDictionary = [
  {
    value: "□",
    name: "□",
  },
  {
    value: "☑",
    name: "☑",
  },
];
export default {
  name: "let115",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {
        cellIdx0: null, // 查封(扣押)
        cellIdx1: null, // 文书号
        cellIdx2: null, // 文书号
        cellIdx3: null, // 文书号
        cellIdx4: null, // 文书号
        cellIdx5: null, // 文书号
        cellIdx6: null, // corpname
        cellIdx7: null, // 年
        cellIdx8: null, // 月
        cellIdx9: null, // 日
        cellIdx10: null, // 查封(扣押)
        cellIdx11: null, // 查封扣押文书号
        cellIdx12: null, // 查封扣押文书号
        cellIdx13: null, // 查封扣押文书号
        cellIdx14: null, // 查封扣押文书号
        cellIdx15: null, // 查封扣押文书号
        cellIdx16: null, // 查封/扣押
        cellIdx17: null, // 查封扣押中的物品清单
        cellIdx18: null, // 查封/扣押
        cellIdx19: null, // 第二十七条、XXX第二十八条第一款第
        cellIdx20: null, // 第二十八条第一款第XX项的规定
        cellIdx21: null, // 查封/扣押
        cellIdx22: null, // 人民政府
        cellIdx23: null, // organName
        cellIdx24: null, // 人民法院
        cellIdx25: null, // 查封/扣押
        cellIdx26: null, // 暂不用
        cellIdx27: null, // 机构
        cellIdx28: null, // 日期
        cellIdx29: null, // 查封/扣押
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
        cellIdx19: toggleDictionary,
      },
      associationPaper: ["32"],
    };
  },
  methods: {
    async initLetData(selectedPaper) {
      let corpBase = await this.getDatabase('baseInfo');
      let corp = corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      // 1.生成文书编号
      let { num0, num1, num3, num4 } = await getDocNumber(
        this.docData.docTypeNo,
        this.corpData.caseId
      );
      // 2.获取查封扣押决定书创建日期
      let let32Date = selectedPaper.let32Data.createDate.split(' ')[0].split('-')
      // 3.地点：sysOfficeInfo实体中organName字段+ courtPrefix字段
      let orgSysOfficeInfo = await getOrgData(this.$store.state.curCase.groupId)
      // 4.查封扣押文书号
      let let32DataPaperContent = JSON.parse(
        selectedPaper.let32Data.paperContent
      );
      // 获取查封/扣押
      let selectedType = let32DataPaperContent.selectedType
      let DangerTable = null;
      if (this.corpData.caseType === "0") {
        DangerTable = let32DataPaperContent.DangerTable
          ? setNewDanger(
              selectedPaper.let32Data,
              let32DataPaperContent.DangerTable
            )
          : {};
      }
      let associationPaperId = Object.assign({}, this.setAssociationPaperId(let32DataPaperContent.associationPaperId), {
        paper32Id: selectedPaper.let32Data.paperId,
      }) 
      let associationPaperOrder = this.setAssociationPaperOrder(let32DataPaperContent.associationPaperOrder)
      associationPaperOrder.push('32')
      this.letData = Object.assign({}, this.letData, {
        cellIdx0: selectedType, // 查封(扣押)
        cellIdx1: num0, // 文书号
        cellIdx2: num1, // 文书号
        cellIdx3: selectedType ? selectedType.substring(0, 1) : '', // 查/扣
        cellIdx4: num3, // 文书号
        cellIdx5: num4, // 文书号
        cellIdx6: corp.corpName ? corp.corpName : null, // corpname
        cellIdx7: let32Date[0], // 年
        cellIdx8: let32Date[1], // 月
        cellIdx9: let32Date[2], // 日
        cellIdx10: selectedType, // 查封(扣押)
        cellIdx11: let32DataPaperContent.cellIdx1, // 查封扣押文书号
        cellIdx12: let32DataPaperContent.cellIdx2, // 查封扣押文书号
        cellIdx13: let32DataPaperContent.cellIdx3, // 查封扣押文书号 查、扣
        cellIdx14: let32DataPaperContent.cellIdx4, // 查封扣押文书号
        cellIdx15: let32DataPaperContent.cellIdx5, // 查封扣押文书号
        cellIdx16: selectedType, // 查封/扣押
        cellIdx18: selectedType, // 查封/扣押
        cellIdx19: '□', // 第二十七条、XXX第二十八条第一款第
        cellIdx21: selectedType, // 查封/扣押
        cellIdx22: orgSysOfficeInfo.goverPrefix, // 人民政府
        cellIdx23: orgSysOfficeInfo.organName, // organName
        cellIdx24: orgSysOfficeInfo.courtPrefix, // courtPrefix人民法院
        cellIdx25: selectedType, // 查封/扣押
        cellIdx27: this.$store.state.curCase.groupName, //
        cellIdx28: this.todayDate, // 日期
        cellIdx29: selectedType, // 查封/扣押
        SamplingForensicsTable: let32DataPaperContent.SamplingForensicsTable
          ? let32DataPaperContent.SamplingForensicsTable
          : {
              tableData: [],
              signature: null,
              signDate: "",
            },
        selectedType: selectedType,
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
        if (key === "cellIdx17") {
          this.options[key] = {
            canEdit: true,
            page: this.docData.docTypeNo, // 物品清单
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
        if (key === "cellIdx17") {
          // 不可编辑时仍然可查看附件
          this.options[key] = {
            canEdit: false,
            page: this.docData.docTypeNo, // 物品清单
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
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/let";
</style>