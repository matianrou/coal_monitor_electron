<!-- 现场检查 实施检查 解除查封(扣押决定书) -->
<template>
  <div style="width: 100%; height: 100%;">
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
            <div class="textAlignCenter formHeader0">国 家 煤 矿 安 全 监 察</div>
            <div class="textAlignCenter formHeader3">
              <table class="docBody">
                <tr>
                  <td class="textAlignLeft">解除</td>
                  <td
                    class="cellInput"
                    id="cell_idx_0"
                    style="width:15%"
                    data-title="查封(扣押)"
                    data-type="text"
                    data-src
                    @click="commandFill('cellIdx0', '查封(扣押)', 'TextItem')"
                  >{{ letData.cellIdx0 }}</td>
                  <td class="textAlignLeft">决定书</td>
                </tr>
              </table>
            </div>
            <div class="stdRowH"></div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_1"
                  align="right"
                  style="width:50%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx1', '', 'TextItem')"
                  >{{ letData.cellIdx1 }}</td>
                <td class="textAlignLeft cellBottomLine">煤安监</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_2"
                  align="center"
                  style="width:7%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx2', '', 'TextItem')"
                  >{{ letData.cellIdx2 }}</td>
                <td class="textAlignLeft cellBottomLine">解</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_3"
                  align="center"
                  style="width:7%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx3', '', 'TextItem')"
                  >{{ letData.cellIdx3 }}</td>
                <td class="textAlignLeft cellBottomLine">〔</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_4"
                  align="center"
                  style="width:7%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx4', '', 'TextItem')"
                  >{{ letData.cellIdx4 }}</td>
                <td class="textAlignLeft cellBottomLine">〕</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_5"
                  align="center"
                  style="width:7%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx5', '', 'TextItem')"
                  >{{ letData.cellIdx5 }}</td>
                <td class="textAlignLeft cellBottomLine">号&nbsp;&nbsp;</td>
              </tr>
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_6"
                  style="width:62%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx6', '', 'TextItem')"
                  >{{ letData.cellIdx6 }}</td>
                <td class="textAlignLeft">:</td>
              </tr>
            </table>
            <table style="border:solid 0px #000;" class="docBody">
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我</td>
                <td
                  class="cellInput"
                  id="cell_idx_7"
                  align="center"
                  style="width:8%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx7', '', 'TextItem')"
                >{{ letData.cellIdx7 }}</td>
                <td class="textAlignLeft">于</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_8"
                  align="center"
                  style="width:8%"
                  data-title="年"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx8', '年', 'TextItem')"
                >{{ letData.cellIdx8 }}</td>
                <td class="textAlignLeft">年</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_9"
                  align="center"
                  style="width:8%"
                  data-title="月"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx9', '月', 'TextItem')"
                >{{ letData.cellIdx9 }}</td>
                <td class="textAlignLeft">月</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_10"
                  align="center"
                  style="width:8%"
                  data-title="日"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx10', '日', 'TextItem')"
                >{{ letData.cellIdx10 }}</td>
                <td class="textAlignLeft">日向你</td>
                <td
                  class="cellInput"
                  id="cell_idx_11"
                  align="center"
                  style="width:8%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx11', '', 'TextItem')"
                >{{ letData.cellIdx11 }}</td>
                <td class="textAlignLeft">作出《</td>
                <td
                  class="cellInput"
                  id="cell_idx_12"
                  align="center"
                  style="width:15%"
                  data-title=""
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx12', '', 'TextItem')"
                >{{ letData.cellIdx12 }}</td>
                <td class="textAlignLeft">决</td>
              </tr>
              <tr>
                <td class="textAlignLeft">定书》（</td>
                <td
                  class="cellInput"
                  id="cell_idx_13"
                  align="right"
                  style="width:8%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx13', '', 'TextItem')"
                >{{ letData.cellIdx13 }}</td>
                <td class="textAlignLeft">煤安监</td>
                <td
                  class="cellInput"
                  id="cell_idx_14"
                  align="center"
                  style="width:8%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx14', '', 'TextItem')"
                >{{ letData.cellIdx14 }}</td>
                <td
                  class="cellInput"
                  id="cell_idx_15"
                  align="center"
                  style="width:7%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx15', '', 'TextItem')"
                >{{ letData.cellIdx15 }}</td>
                <td class="textAlignLeft">〔</td>
                <td
                  class="cellInput"
                  id="cell_idx_16"
                  align="center"
                  style="width:7%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx16', '', 'TextItem')"
                >{{ letData.cellIdx16 }}</td>
                <td class="textAlignLeft">〕</td>
                <td
                  class="cellInput"
                  id="cell_idx_17"
                  align="center"
                  style="width:7%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx17', '', 'TextItem')"
                >{{ letData.cellIdx17 }}</td>
                <td class="textAlignLeft">号），对所附《物品清单》</td>
              </tr>
              <tr>
                <td class="textAlignLeft">所列物品予以</td>
                <td
                  class="cellInput"
                  id="cell_idx_18"
                  align="center"
                  style="width:15%"
                  data-title=""
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx18', '', 'TextItem')"
                >{{ letData.cellIdx18 }}</td>
                <td class="textAlignLeft">，现根据《中华人民共和国行政强制法》第二十八条</td>
              </tr>
              <tr>
                <td class="textAlignLeft">第一款第</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_19"
                  align="center"
                  style="width:10%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx19', '', 'TextItem')"
                >{{ letData.cellIdx19 }}</td>
                <td class="textAlignLeft">项的规定，予以</td>
                <td
                  class="cellInput"
                  id="cell_idx_20"
                  align="center"
                  style="width:15%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx20', '', 'SelectItem')"
                >{{ letData.cellIdx20 }}</td>
                <td class="textAlignLeft">解除</td>
                <td
                  class="cellInput"
                  id="cell_idx_21"
                  align="center"
                  style="width:10%"
                  data-title=""
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx21', '', 'TextItem')"
                >{{ letData.cellIdx21 }}</td>
                <td class="textAlignLeft">（详见《物品清单》）。</td>
              </tr>
            </table>
            <table height="30"></table>
            <table class="docBody">
              <tr>
                <td
                  style="cursor: pointer;"
                  @click="commandFill('cellIdx22', '附件：物品清单', 'SamplingForensicsTable')"
                  class="textAlignLeft">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;附件：物品清单
                </td>
                <!-- <td
                  class="cellInput"
                  id="cell_idx_22"
                  style="width:80%"
                  data-title="附件"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx22', '', '')"
                ></td> -->
              </tr>
            </table>
            <table height="30"></table>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_23"
                  align="right"
                  style="width:95%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx23', '', 'TextItem')"
                >{{ letData.cellIdx23 }}</td>
              </tr>
            </table>
            <table class="docBody">
              <td class="cellInput" style="width:55%"></td>
              <td
                class="cellInput"
                id="cell_idx_24"
                align="center"
                style="width:45%"
                data-title="日期"
                data-type="date"
                data-src
                @click="commandFill('cellIdx24', '日期', 'DateItem')"
                >{{ letData.cellIdx24 }}</td>
            </table>
            <table height="60"></table>
            <table>
              <hr />
              <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;备注：本文书一式两份，一份交被解除</td>
              <td
                class="cellInput"
                id="cell_idx_25"
                align="center"
                style="width:10%"
                data-title
                data-type="text"
                data-src
                @click="commandFill('cellIdx25', '', 'TextItem')"
                >{{ letData.cellIdx25 }}</td>
              <td class="textAlignLeft">单位，一份存档。</td>
            </table>
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
      :show-close="false">
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
import letMain from "./components/let-main";
import GoDB from "@/utils/godb.min.js";
import { getDangerObject, getDocNumber } from '@/utils/monitor/setInitPaperData'
export default {
  name: "Let111",
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
        cellIdx20: [
          {
            value: '全部',
            name: '全部'
          },
          {
            value: '部分',
            name: '部分'
          },
        ],
      },
      editData: {}, // 回显数据
      selectedType: '查封',
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
      const db = new GoDB("CoalDB");
      const corpBase = db.table("corpBase");
      //查询符合条件的记录
      const corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      const wkPaper = db.table("wkPaper");
      const caseId = this.corpData.caseId;
      const checkPaper = await wkPaper.findAll((item) => {
        return item.caseId === caseId && item.paperType === this.docData.docTypeNo;
      });
      if (checkPaper.length > 0) {
        // 回显
        this.letData = JSON.parse(checkPaper[0].paperContent);
        this.editData = checkPaper[0];
      } else {
        // 创建初始版本
        // 1.弹出提示框，选择查封或扣押
        this.visible = true
        // 2.生成文书编号
        let { num0, num1, num3, num4 } = await getDocNumber(db, this.docData.docTypeNo, caseId, this.$store.state.user)
        // 3.获取查封（扣押）决定书的日期和编号
        const let110Data = await wkPaper.find((item) => {
          return item.caseId === caseId && item.paperType === '32';
        });
        let let110DataPapaerContent = JSON.parse(let110Data.paperContent)
        let date = let110DataPapaerContent.cellIdx20
        date = date.replace('年', '-').replace('月', '-').replace('日', '-')
        let dateList = date.split('-')
        let cellIdx8String = dateList[0]
        let cellIdx9String = dateList[1]
        let cellIdx10String = dateList[2]
        // 文书编号：
        let cellIdx13String = let110DataPapaerContent.cellIdx1
        let cellIdx14String = let110DataPapaerContent.cellIdx2
        let cellIdx16String = let110DataPapaerContent.cellIdx3
        let cellIdx17String = let110DataPapaerContent.cellIdx4
        this.letData = {
          cellIdx0: null, // 查封(扣押)
          cellIdx1: num0, // 文书号
          cellIdx1TypeTextItem: num0, // 文书号
          cellIdx2: num1, // 文书号
          cellIdx2TypeTextItem: num1, // 文书号
          cellIdx3: null, // 查/扣
          cellIdx3TypeTextItem: null, // 查/扣
          cellIdx4: num3, // 文书号
          cellIdx4TypeTextItem: num3, // 文书号
          cellIdx5: num4, // 文书号
          cellIdx5TypeTextItem: num4, // 文书号
          cellIdx6: corp.corpName ? corp.corpName : null, // corpname
          cellIdx6TypeTextItem: corp.corpName ? corp.corpName : null, // corpname
          cellIdx7: null, // 单位
          cellIdx8: cellIdx8String, // 年
          cellIdx8TypeTextItem: cellIdx8String, // 年
          cellIdx9: cellIdx9String, // 月
          cellIdx9TypeTextItem: cellIdx9String, // 月
          cellIdx10: cellIdx10String, // 日
          cellIdx10TypeTextItem: cellIdx10String, // 日
          cellIdx11: null, // 单位/个人
          cellIdx12: null, // 查封(扣押)
          cellIdx13: cellIdx13String, // 文书号
          cellIdx13TypeTextItem: cellIdx13String, // 文书号
          cellIdx14: cellIdx14String, // 文书号
          cellIdx14TypeTextItem: cellIdx14String, // 文书号
          cellIdx15: null, // 查/扣
          cellIdx16: cellIdx16String, // 文书号
          cellIdx16TypeTextItem: cellIdx16String, // 文书号
          cellIdx17: cellIdx17String, // 文书号
          cellIdx17TypeTextItem: cellIdx17String, // 文书号
          cellIdx18: null, // 查封(扣押)
          cellIdx19: null, // 第X项的规定
          cellIdx20: null, // 全部/部分
          cellIdx21: null, // 查封(扣押)
          cellIdx22: null, // 附件
          cellIdx23: null, //
          cellIdx24: null, // 日期
          cellIdx25: null, //
          samplingForensicsTable: let110DataPapaerContent.samplingForensicsTable
        };
      }
      await db.close();
    },
    goBack({ page }) {
      // 返回选择企业
      this.$emit("go-back", { page });
    },
    commandFill (key, title, type) {
      // 判断是否可编辑
      if (this.$refs.letMain.canEdit) {
        // 文书各个字段点击打开左侧弹出编辑窗口
        let dataKey = `${key}Type${type}`
         if (key === 'cellIdx22') {
          this.options[key] = {
            canEdit: true,
            page: '34', // 物品清单
            name: this.selectedType
          }
          dataKey = 'samplingForensicsTable'
        }
        this.$refs.letMain.commandFill(key, dataKey, title, type, this.letData[dataKey], this.options[key])
      }
    },
    confirm() {
      // 选择单位或个人
      this.visible = false
      this.letData.cellIdx0 = this.selectedType
      this.letData.cellIdx0TypeTextItem = this.selectedType
      this.letData.cellIdx3 = this.selectedType.substring(0, 1)
      this.letData.cellIdx3TypeTextItem = this.selectedType.substring(0, 1)
      this.letData.cellIdx12 = this.selectedType
      this.letData.cellIdx12TypeTextItem = this.selectedType
      this.letData.cellIdx15 = this.selectedType.substring(0, 1)
      this.letData.cellIdx15TypeTextItem = this.selectedType.substring(0, 1)
      this.letData.cellIdx18 = this.selectedType
      this.letData.cellIdx18TypeTextItem = this.selectedType
      this.letData.cellIdx21 = this.selectedType
      this.letData.cellIdx21TypeTextItem = this.selectedType
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/let";
</style>