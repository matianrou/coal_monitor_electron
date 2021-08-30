<!-- 现场检查 实施检查 先行登记保存证据处理决定书 -->
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
            <div class="textAlignCenter formHeader0">
              国 家 煤 矿 安 全 监 察
              <br />
            </div>
            <div class="textAlignCenter formHeader3">先行登记保存证据处理决定书</div>
            <div class="stdRowH"></div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_0"
                  align="right"
                  style="width:55%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx0', '', 'TextItem')"
                >{{ letData.cellIdx0 }}</td>
                <td class="textAlignLeft cellBottomLine">煤安监</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_1"
                  align="center"
                  style="width:7%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx1', '', 'TextItem')"
                >{{ letData.cellIdx1 }}</td>
                <td class="textAlignLeft cellBottomLine">先保处〔</td>
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
                <td class="textAlignLeft cellBottomLine">〕</td>
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
                <td class="textAlignLeft cellBottomLine">号&nbsp;&nbsp;</td>
              </tr>
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
            <table style="border:solid 0px #000;" class="docBody">
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我</td>
                <td
                  class="cellInput"
                  id="cell_idx_5"
                  align="center"
                  style="width:10%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx5', '', 'TextItem')"
                >{{ letData.cellIdx5 }}</td>
                <td class="textAlignLeft">于</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_6"
                  align="center"
                  style="width:8%"
                  data-title="年"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx6', '年', 'TextItem')"
                >{{ letData.cellIdx6 }}</td>
                <td class="textAlignLeft">年</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_7"
                  align="center"
                  style="width:8%"
                  data-title="月"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx7', '月', 'TextItem')"
                >{{ letData.cellIdx7 }}</td>
                <td class="textAlignLeft">月</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_8"
                  align="center"
                  style="width:8%"
                  data-title="日"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx8', '日', 'TextItem')"
                >{{ letData.cellIdx8 }}</td>
                <td class="textAlignLeft">日对你单位的</td>
                <td
                  style="width:37%"
                  class="cellInput cellBottomLine"
                  id="cell_idx_9"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx9', '', 'TextItem')"
                >{{ letData.cellIdx9 }}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">等物品进行了先行登记保存（</td>
                <td
                  class="cellInput"
                  id="cell_idx_10"
                  align="center"
                  style="width:8%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx10', '', 'TextItem')"
                >{{ letData.cellIdx10 }}</td>
                <td class="textAlignLeft">煤安监</td>
                <td
                  class="cellInput"
                  id="cell_idx_11"
                  align="center"
                  style="width:8%"
                  data-title
                  data-type="text"
                  data-src
                  click="commandFill('cellIdx11', '', 'TextItem')"
                >{{ letData.cellIdx11 }}</td>
                <td class="textAlignLeft">先保〔</td>
                <td
                  class="cellInput"
                  id="cell_idx_12"
                  align="center"
                  style="width:8%"
                  data-title
                  data-type="text"
                  data-src
                  click="commandFill('cellIdx12', '', 'TextItem')"
                >{{ letData.cellIdx12 }}</td>
                <td class="textAlignLeft">〕</td>
                <td
                  class="cellInput"
                  id="cell_idx_13"
                  align="center"
                  style="width:8%"
                  data-title
                  data-type="text"
                  data-src
                  click="commandFill('cellIdx13', '', 'TextItem')"
                >{{ letData.cellIdx13 }}</td>
                <td class="textAlignLeft">号）。现根据</td>
              </tr>
              <tr>
                <td class="textAlignLeft">《中华人民共和国行政处罚法》第三十七条第二款规定，对上述物品作出以下处理决</td>
              </tr>
              <tr>
                <td class="textAlignLeft">定:</td>
              </tr>
            </table>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              id="cell_idx_14"
              data-title="处理决定"
              data-type="textarea"
              data-src
              @click="commandFill('cellIdx14', '处理决定', 'TextareaItem')"
            >
              <p class="show-area-item-p">
                <span style="padding: 7px;">{{ letData.cellIdx14 }}</span>
              </p>
            </div>
            <table style="border:solid 0px #000;" class="docBody">
              <tr>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如对本处理决定不服，可在接到本决定书之日起60日内向</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_15"
                  style="width:36.2%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx15', '', 'TextItem')"
                >{{ letData.cellIdx15 }}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">申请行政复议或6个月内向</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_16"
                  style="width:20%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx16', '人民法院', 'TextItem')"
                >{{ letData.cellIdx16 }}</td>
                <td class="textAlignLeft">人民法院提起行政诉讼，但不停止执行本决定。</td>
              </tr>
            </table>
            <table height="90"></table>
            <table height="60"></table>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_17"
                  align="right"
                  style="width:95%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx17', '', 'TextItem')"
                >{{ letData.cellIdx17 }}</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td class="cellInput" style="width:55%"></td>
                <td
                  class="cellInput"
                  id="cell_idx_18"
                  align="center"
                  style="width:45%"
                  data-title="日期"
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx18', '日期', 'DateItem')"
                >{{ letData.cellIdx18 }}</td>
              </tr>
            </table>
            <table>
              <hr />
              <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;备注：本文书一式两份，一份交被检查单位，一份存档。</td>
            </table>
          </div>
        </div>
      </div>
    </let-main>
  </div>
</template>

<script>
import letMain from "@/views/make-law-writ/components/let-main.vue";
import GoDB from "@/utils/godb.min.js";
import { getDocNumber } from '@/utils/setInitPaperData'
export default {
  name: "Let109",
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
      options: {},
      editData: {}, // 回显数据
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
      const db = new GoDB("CoalMonitorDB");
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
        // 1.生成文书编号
        let { num0, num1, num3, num4 } = await getDocNumber(db, this.docData.docTypeNo, caseId, this.$store.state.user)
        // 2.获取先行登记保存证据通知书中的日期、物品清单和编号字段
        const let108Data = await wkPaper.find((item) => {
          return item.caseId === caseId && item.paperType === '25';
        });
        let let108DataPapaerContent = JSON.parse(let108Data.paperContent)
        // 日期
        let let108Date = let108DataPapaerContent.cellIdx14
        let108Date = let108Date.replace('年', '-').replace('月', '-').replace('日', '-')
        let dateList = let108Date.split('-')
        let cellIdx6String = dateList[0]
        let cellIdx7String = dateList[0]
        let cellIdx8String = dateList[0]
        // 物品名称：
        let let108Article = let108DataPapaerContent.SamplingForensicsTable.tableData
        let articleName = ''
        if (let108Article.length > 0) {
          let108Article.map(item => {
            articleName += item.name + '、'
          })
          articleName = articleName.substring(0, articleName.length - 1)
        }
        let cellIdx9String = articleName
        // 文书号：
        let num1080 = let108DataPapaerContent.cellIdx0
        let num1081 = let108DataPapaerContent.cellIdx1
        let num1083 = let108DataPapaerContent.cellIdx2
        let num1084 = let108DataPapaerContent.cellIdx3
        // 3.sysOfficeInfo实体中 organName、人民法院：courtPrefix
        const orgInfo = db.table("orgInfo");
        const orgData = await orgInfo.find(item => item.no === this.$store.state.user.userGroupId)
        let orgSysOfficeInfo = JSON.parse(orgData.sysOfficeInfo)
        let cellIdx15String = orgSysOfficeInfo.organName
        let cellIdx16String = orgSysOfficeInfo.courtPrefix
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
          cellIdx5: null, // 单位
          cellIdx6: cellIdx6String, // 年
          cellIdx6TypeTextItem: cellIdx6String, // 年
          cellIdx7: cellIdx7String, // 月
          cellIdx7TypeTextItem: cellIdx7String, // 月
          cellIdx8: cellIdx8String, // 日
          cellIdx8TypeTextItem: cellIdx8String, // 日
          cellIdx9: cellIdx9String, // 物品名称
          cellIdx9TypeTextItem: cellIdx9String, // 物品名称
          cellIdx10: num1080, // 文书号
          cellIdx10TypeTextItem: num1080, // 文书号
          cellIdx11: num1081, // 文书号
          cellIdx11TypeTextItem: num1081, // 文书号
          cellIdx12: num1083, // 文书号
          cellIdx12TypeTextItem: num1083, // 文书号
          cellIdx13: num1084, // 文书号
          cellIdx13TypeTextItem: num1084, // 文书号
          cellIdx14: null, // 处理决定
          cellIdx15: cellIdx15String, // 可在接到本决定书之日起60日内向。。。申请行政复议或6个月内向
          cellIdx15TypeTextItem: cellIdx15String, // 可在接到本决定书之日起60日内向。。。申请行政复议或6个月内向
          cellIdx16: cellIdx16String, // 人民法院
          cellIdx16TypeTextItem: cellIdx16String, // 人民法院
          cellIdx17: null, //
          cellIdx18: null, // 日期
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
        this.$refs.letMain.commandFill(key, dataKey, title, type, this.letData[dataKey], this.options[key])
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/let";
</style>