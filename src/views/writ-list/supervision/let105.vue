<!-- 现场检查 一般检查 询问通知书 暂不用-->
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
            <div class="textAlignCenter formHeader1">煤矿安全监管行政执法文书</div>
            <div class="textAlignCenter formHeader2">询 问 通 知 书</div>
            <table style="width:390px;" class="docTop">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_0"
                  align="right"
                  style="width:100px"
                  data-title="文书号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx0', '文书号', 'TextItem')"
                >{{letData.cellIdx0}}（</td>
                <td
                  class="cellInput"
                  id="cell_idx_1"
                  align="center"
                  style="width:100px"
                  data-title="文书号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx1', '文书号', 'TextItem')"
                >{{letData.cellIdx1}}）煤安询〔</td>
                <td
                  class="cellInput"
                  id="cell_idx_2"
                  align="center"
                  style="width:7%"
                  data-title="文书号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx2', '文书号', 'TextItem')"
                >{{letData.cellIdx2}}〕</td>
                <td
                  class="cellInput"
                  id="cell_idx_3"
                  align="center"
                  style="width:7%"
                  data-title="文书号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx3', '文书号', 'TextItem')"
                >{{letData.cellIdx3}}</td>
                <td class="textAlignLeft ">号&nbsp;&nbsp;</td>
              </tr>
            </table>
            <div class="stdRowH"></div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_4"
                  align="center"
                  style="width:320px"
                  data-title=""
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx4', '', 'TextItem')"
                >{{letData.cellIdx4}}</td>
                <td>：</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td style="width:15mm;text-align:right;">因</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_5"
                  align="center"
                  style="width:80mm;"
                  data-title=""
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx5', '', 'TextItem')"
                >{{letData.cellIdx5}}</td>
                ，请你（单位）于
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_6"
                  align="center"
                  style="width:55mm;"
                  data-title=""
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx6', '日期时间', 'DateItem')"
                >
                <span v-if="letData.cellIdx6">{{letData.cellIdx6}}</span>
                <span v-else>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;月&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;日&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;时</span>
                </td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td style="width:20px;">到</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_7"
                  align="center"
                  style="width:320px;"
                  data-title=""
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx7', '', 'TextItem')"
                >{{letData.cellIdx7}}
                </td>
                <td style="width:420px;">接受询问调查，来时请携带下列证件材料（见打√处）：</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td
                  style="width:20px;"
                  class="cellInput"
                  id="cell_idx_8"
                  @click="commandFill('cellIdx8', '身份证', 'SelectItem')"
                >{{letData.cellIdx8}}</td>
                <td>身份证</td>
              </tr>
              <tr>
                <td
                  id="cell_idx_9"
                  class="cellInput"
                  @click="commandFill('cellIdx9', '营业执照', 'SelectItem')"
                >{{letData.cellIdx9}}</td>
                <td>营业执照</td>
              </tr>
              <tr>
                <td
                  id="cell_idx_10"
                  class="cellInput"
                  @click="commandFill('cellIdx10', '法定代表人身份证明或者委托书', 'SelectItem')"
                >{{letData.cellIdx10}}</td>
                <td>法定代表人身份证明或者委托书</td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_11"
                  @click="commandFill('cellIdx11', '其他', 'SelectItem')"
                >{{letData.cellIdx11}}</td>
                <td
                  class="cellInput"
                  id="cell_idx_12"
                  @click="commandFill('cellIdx12', '', 'TextItem')"
                >{{letData.cellIdx12 ? letData.cellIdx12 : '其他'}}</td>
              </tr>
              <tr>
                <td colspan="2">如无法按时前来，请及时联系。</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td style="width:40mm;">执法机关地址：</td>
                <td
                  style="width:150mm;"
                  class="cellInput cellBottomLine textAlignCenter"
                  id="cell_idx_13"
                  @click="commandFill('cellIdx13', '执法机关地址', 'TextItem')"
                >{{letData.cellIdx13}}</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td style="width:70px;">联系人：</td>
                <td
                  style="width:280px;"
                  class="cellInput cellBottomLine textAlignCenter"
                  @click="commandFill('cellIdx14', '联系人', 'TextItem')"
                  id="cell_idx_14"
                >{{letData.cellIdx14}}</td>
                <td style="width:90px;text-align:right;">联系电话：</td>
                <td
                  style="width:276px;"
                  class="cellInput cellBottomLine textAlignCenter"
                  @click="commandFill('cellIdx15', '联系电话', 'TextItem')"
                  id="cell_idx_15"
                >{{letData.cellIdx15}}</td>
              </tr>
            </table>
            <div style="height:300px;"></div>
            <table class="docBody">
              <tr>
                <td style="width:410px;">&nbsp;</td>
                <td
                  style="width:250px;"
                  class="cellInput textAlignRight"
                  @click="commandFill('cellIdx16', '机构', 'TextItem')"
                  id="cell_idx_16">
                  {{letData.cellIdx16}}
                </td>
                <td style="width:100px;padding-right:16px;" class="textAlignCenter">（印章）</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td style="width:494px;">&nbsp;</td>
                <td
                  style="padding-right:16px;width:170px;"
                  class="cellInput textAlignCenter"
                  id="cell_idx_16"
                  @click="commandFill('cellIdx17', '日期', 'DateItem')"
                >{{letData.cellIdx17 ? letData.cellIdx17 : '选择日期...'}}</td>
                <td style="width:16px;">&nbsp;</td>
              </tr>
            </table>
            <!-- <div class="docFooter">
              <div
                style="margin-top:4px;width:98%;height: 24px; line-height:30px; padding-left: 16px;"
              >本文书一式两份：一份由应急管理部门备案，一份交被询问人。</div>
            </div> -->
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
const toggleDictionary = [
  {
    value: '□',
    name: '□'
  },
  {
    value: '√',
    name: '√'
  },
]
export default {
  name: "Let105",
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
        cellIdx8: toggleDictionary,
        cellIdx9: toggleDictionary,
        cellIdx10: toggleDictionary,
        cellIdx11: toggleDictionary,
      },
      paperData: {}, // 回显数据
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
      // 初始化文书内容
      let db = new GoDB(this.$store.state.DBName);
      let corpBase = db.table("corpBase");
      //查询符合条件的记录
      let corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      let wkPaper = db.table("wkPaper");
      let caseId = this.corpData.caseId;
      //查询当前计划是否已做文书
      let checkPaper = await wkPaper.findAll((item) => {
        return (
          item.caseId === caseId && item.paperType === this.docData.docTypeNo && item.delFlag !== '1'
        );
      });
      // 已做文书则展示文书内容，否则创建初始版本
      if (checkPaper.length > 0) {
        // 回显
        this.letData = JSON.parse(checkPaper[0].paperContent);
        this.paperData = checkPaper[0];
      } else {
        // 创建初始版本
        let paperNumber = await getDocNumber(db, this.docData.docTypeNo, caseId)
        this.letData = {
          cellIdx0: paperNumber.num0, // 文书号
          cellIdx0TypeTextItem: paperNumber.num0, // 文书号
          cellIdx1: paperNumber.num1, // 文书号
          cellIdx1TypeTextItem: paperNumber.num1, // 文书号
          cellIdx2: paperNumber.num3, // 文书号
          cellIdx2TypeTextItem: paperNumber.num3, // 文书号
          cellIdx3: paperNumber.num4, // 文书号
          cellIdx3TypeTextItem: paperNumber.num4, // 文书号
          cellIdx4: corp.corpName, // 煤矿名称
          cellIdx4TypeTextItem: corp.corpName, // 煤矿名称
          cellIdx5: null, // 因XXX,
          cellIdx6: null, // 请你单位于XX日期
          cellIdx7: null, // 到XXX接受询问调查
          cellIdx8: '□', // 身份证
          cellIdx9: '□', // 营业执照
          cellIdx10: '□', // 法定代表人身份证明或者委托书
          cellIdx11: '□', // 其他
          cellIdx12: null, // 其他内容
          cellIdx13: null, // 执法机关地址
          cellIdx14: null, // 联系人
          cellIdx15: null, // 联系电话
          cellIdx16: null, // OrgName
          cellIdx17: null, // 日期
        };
      }
      await db.close();
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