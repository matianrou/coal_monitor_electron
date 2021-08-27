<!-- 现场检查 一般检查 现场处理决定书 -->
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
            <div class="textAlignCenter formHeader3">现 场 处 理 决 定 书</div>
            <div class="stdRowH"></div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_0"
                  align="right"
                  style="width:60%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx0', '', 'TextItem')"
                >{{letData.cellIdx0}}</td>
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
                >{{letData.cellIdx1}}</td>
                <td class="textAlignLeft cellBottomLine">处〔</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_2"
                  align="center"
                  style="width:7%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx2', '', 'TextItem')"
                >{{letData.cellIdx2}}</td>
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
                >{{letData.cellIdx3}}</td>
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
                >{{letData.cellIdx4}}</td>
                <td class="textAlignLeft">:</td>
              </tr>
            </table>
            <table class="docBody border-solid">
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我</td>
                <td
                  class="cellInput"
                  id="cell_idx_5"
                  align="center"
                  style="width:8%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx5', '', 'TextItem')"
                >{{letData.cellIdx5}}</td>
                <td class="textAlignLeft">于</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_6"
                  align="center"
                  style="width:40%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx6', '', 'TextItem')"
                >{{letData.cellIdx6}}</td>
                <td class="textAlignLeft">现场检查时，发现你单位有下列违法</td>
              </tr>
              <tr>
                <td class="textAlignLeft">违规行为，现作出以下现场处理决定：</td>
              </tr>
            </table>
            <div
              class="cellInput mutiLineArea show-area-item-content"
              id="cell_idx_7"
              data-title="现场处理决定"
              data-type="textarea"
              data-src
              @click="commandFill('cellIdx7', '现场处理决定', 'DangerTableItem')"
            >
             <div v-if="letData.cellIdx7 && letData.cellIdx7.length > 0">
                <p class="show-area-item-p">
                  <span style="padding: 7px;">{{ letData.cellIdx7 }}</span>
                </p>
              </div>
              <div v-else>
                <p class="show-area-item-p">
                  &nbsp;
                </p>
                <p class="show-area-item-p">
                  &nbsp;
                </p>
              </div>
            </div>
            <table class="docBody border-solid">
              <tr>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如对本处理决定不服，可在接到本决定书之日起60日内向</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_8"
                  align="center"
                  style="width:34%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx8', '', 'TextItem')"
                >{{letData.cellIdx8}}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">申请行政复议或6个月内向</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_9"
                  align="center"
                  style="width:20%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx9', '', 'TextItem')"
                >{{letData.cellIdx9}}</td>
                <td class="textAlignLeft">人民法院提起行政诉讼，但不停止执行本决定。</td>
              </tr>
            </table>
            <table height="30"></table>
            <table class="docBody">
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现场执法人员（签名):</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_10"
                  align="center"
                  style="width:25%"
                  data-title="现场执法人员（签名)"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx10', '现场执法人员（签名)', 'TextItem')"
                >{{letData.cellIdx10}}</td>
                <td class="textAlignCenter">&nbsp;日 期：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_11"
                  align="center"
                  style="width:25%"
                  data-title="日期"
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx11', '日期', 'DateItem')"
                >{{letData.cellIdx11}}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">被检查单位负责人（签名):</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_12"
                  align="center"
                  style="width:25%"
                  data-title="被检查单位负责人（签名)"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx12', '被检查单位负责人（签名)', 'TextItem')"
                >{{letData.cellIdx12}}</td>
                <td class="textAlignCenter">&nbsp;日 期：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_13"
                  align="center"
                  style="width:25%"
                  data-title="日期"
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx13', '日期：', 'DateItem')"
                >{{letData.cellIdx13}}</td>
              </tr>
            </table>
            <table height="30"></table>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_14"
                  align="right"
                  style="width:95%"
                  data-title
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx14', '', 'DateItem')"
                >{{letData.cellIdx14}}</td>
              </tr>
            </table>
            <table class="docBody">
              <td class="cellInput" style="width:55%"></td>
              <td
                class="cellInput"
                id="cell_idx_15"
                align="center"
                style="width:45%"
                data-title="日期"
                data-type="date"
                data-src
                @click="commandFill('cellIdx15', '日期', 'DateItem')"
              >{{letData.cellIdx15}}</td>
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
import { getDangerObject, getDocNumber } from '@/utils/setInitPaperData'
export default {
  name: "Let102",
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
          page: '2', // 用于在隐患项保存，做数据处理时，判断是否增加现场处理决定字段描述
          showBaseInfor: false, // 用于区分是否展示基本情况大文本输入
          showSelectDangerBtn: false // 用于区分是否可以选择隐患项
        }
      },
      editData: {}, // 回显数据
    };
  },
  async created() {
    await this.initData();
  },
  watch: {
    async "corpData.corpId"(val) {
      if (val) {
        await this.initData();
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
      //查询当前计划是否已做现场处理决定
      const checkPaper = await wkPaper.findAll((item) => {
        return item.caseId === caseId && item.paperType === this.docData.docTypeNo;
      });
      // await wkPaper.delete(checkPaper[0].id)
      if (checkPaper.length > 0) {
        // 回显
        this.letData = JSON.parse(checkPaper[0].paperContent);
        this.editData = checkPaper[0];
      } else {
        // 创建初始版本
        // 获取现场检查笔录中的隐患选择
        const let101Data = await wkPaper.find((item) => {
          return item.caseId === caseId && item.paperType === '1';
        });
        let let101DataPapaerContent = JSON.parse(let101Data.paperContent)
        let dangerObject = getDangerObject(let101DataPapaerContent.dangerItemObject.tableData)
        // 通过机构接口中的sysOfficeInfo中获取的organName和courtPrefix字段分别填充cellIdx8和cellIdx9字段
        const orgInfo = db.table("orgInfo");
        const orgData = await orgInfo.find(item => item.no === this.$store.state.user.userGroupId)
        let orgSysOfficeInfo = JSON.parse(orgData.sysOfficeInfo)
        let paperNumber = await getDocNumber(db, this.docData.docTypeNo, caseId, this.$store.state.user)
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
          cellIdx5: null, //
          cellIdx6: null, //
          cellIdx7: dangerObject.contentOnsiteDesc, // 现场处理决定
          cellIdx8: orgSysOfficeInfo.organName, //
          cellIdx8TypeTextItem: orgSysOfficeInfo.organName, //
          cellIdx9: orgSysOfficeInfo.courtPrefix, //
          cellIdx9TypeTextItem: orgSysOfficeInfo.courtPrefix, //
          cellIdx10: null, // 现场执法人员（签名)
          cellIdx11: null, // 日期
          cellIdx12: null, // 被检查单位负责人（签名)
          cellIdx13: null, // 日期
          cellIdx14: null, //
          cellIdx15: null, //
          dangerItemObject: let101DataPapaerContent.dangerItemObject, // 隐患项大表
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
        // 打开编辑
        let dataKey = `${key}Type${type}`
        if (key === 'cellIdx7') {
          // 隐患项时对应letData中的dangerItemObject
          dataKey = 'dangerItemObject'
        }
        this.$refs.letMain.commandFill(key, dataKey, title, type, this.letData[dataKey], this.options[key])
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/let";
</style>