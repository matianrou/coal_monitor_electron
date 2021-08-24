<!-- 行政处罚 一般程序 行政处罚决定书 -->
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
              煤矿安全监管行政执法文书
              <br />
            </div>
            <div class="textAlignCenter formHeader3">行 政 处 罚 决 定 书</div>
            <div class="stdRowH"></div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_0"
                  align="right"
                  style="width:60%"
                  data-title="文书号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx0', '文书号', 'TextItem')"
                >{{letData.cellIdx0}}</td>
                <td class="textAlignLeft cellBottomLine">煤安监</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_1"
                  align="center"
                  style="width:7%"
                  data-title="文书号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx1', '文书号', 'TextItem')"
                >{{letData.cellIdx1}}</td>
                <td class="textAlignLeft cellBottomLine">罚〔</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_2"
                  align="center"
                  style="width:7%"
                  data-title="文书号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx2', '文书号', 'TextItem')"
                >{{letData.cellIdx2}}</td>
                <td class="textAlignLeft cellBottomLine">〕</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_3"
                  align="center"
                  style="width:7%"
                  data-title="文书号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx3', '文书号', 'TextItem')"
                >{{letData.cellIdx3}}</td>
                <td class="textAlignLeft cellBottomLine">号&nbsp;&nbsp;</td>
              </tr>
              <tr>
                <td class="textAlignLeft">被处罚</td>
                <td class="cellInput"
                  id="cell_idx_4"
                  align="center"
                  style="width:10%"
                  @click="commandFill('cellIdx4', '单位/个人', 'TextItem')"
                >{{letData.cellIdx4}}</td>
                <td class="textAlignLeft">:</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_5"
                  align="center"
                  style="width:40%"
                  data-title="被处罚"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx5', '被处罚', 'TextItem')"
                >{{letData.cellIdx5}}</td>
                <td class="textAlignLeft">地址：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_6"
                  align="center"
                  style="width:33%"
                  data-title="地址"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx6', '地址', 'TextItem')"
                >{{letData.cellIdx6}}</td>
              </tr>
            </table>
            <table style="border:solid 0 #000;" class="docBody">
              <tr>
                <td class="textAlignLeft">违法事实：</td>
              </tr>
            </table>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              id="cell_idx_7"
              data-title="违法事实"
              data-type="textarea"
              data-src
              @click="commandFill('cellIdx7', '违法事实', 'DangerTableItem')">
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
            <table style="border:solid 0 #000;" class="docBody">
              <tr>
                <td class="textAlignLeft">以上事实</td>
              </tr>
            </table>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              id="cell_idx_8"
              data-title="法律规定"
              data-type="textarea"
              data-src
              @click="commandFill('cellIdx8', '法律规定', 'DangerTableItem')">
              <div v-if="letData.cellIdx8 && letData.cellIdx8.length > 0">
                <p class="show-area-item-p">
                  <span style="padding: 7px;">{{ letData.cellIdx8 }}</span>
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
            <table style="border:solid 0 #000;" class="docBody">
              <tr>
                <td class="textAlignLeft">的规定，依据</td>
              </tr>
            </table>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              id="cell_idx_9"
              data-title="法律依据"
              data-type="textarea"
              data-src
              @click="commandFill('cellIdx9', '法律依据', 'DangerTableItem')">
              <div v-if="letData.cellIdx9 && letData.cellIdx9.length > 0">
                <p class="show-area-item-p">
                  <span style="padding: 7px;">{{ letData.cellIdx9 }}</span>
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
            <table style="border:solid 0 #000;" class="docBody">
              <tr>
                <td class="textAlignLeft">的规定，决定给予以下行政处罚：</td>
              </tr>
            </table>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              id="cell_idx_10"
              data-title="行政处罚"
              data-type="textarea"
              data-src
              @click="commandFill('cellIdx10', '行政处罚', 'DangerTableItem')">
              <div v-if="letData.cellIdx10 && letData.cellIdx10.length > 0">
                <p class="show-area-item-p">
                  <span style="padding: 7px;">{{ letData.cellIdx10 }}</span>
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
            <table style="border:solid 0 #000;" class="docBody">
              <tr>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;接到本处罚决定书之日起15日内将罚款缴至</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_11"
                  align="center"
                  style="width:55%"
                  data-title="煤监机构"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx11', '煤监机构', 'TextItem')"
                >{{letData.cellIdx11}}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">银行：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_12"
                  align="center"
                  style="width:35%"
                  data-title="银行"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx12', '银行', 'TextItem')"
                >{{letData.cellIdx12}}</td>
                <td class="textAlignLeft">支行（分理处），账户名称：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_13"
                  align="center"
                  style="width:30%"
                  data-title="支行（分理处），账户名称"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx13', '支行（分理处），账户名称', 'TextItem')"
                >{{letData.cellIdx13}}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">账号：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_14"
                  align="center"
                  style="width:42%"
                  data-title="账号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx14', '账号', 'TextItem')"
                >{{letData.cellIdx14}}</td>
                <td class="textAlignLeft">地址：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_15"
                  align="center"
                  style="width:41%"
                  data-title="地址"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx15', '地址', 'TextItem')"
                >{{letData.cellIdx15}}</td>
                <td class="textAlignLeft">。</td>
              </tr>
              <tr>
                <td class="textAlignLeft">到期不缴纳罚款的，每日按罚款数额的百分之三加处罚款。</td>
              </tr>
              <tr>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如对本处罚决定不服，可在接到本决定书之日起60日内向</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_16"
                  align="center"
                  style="width:43%"
                  data-title="煤监机构"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx16', '煤监机构', 'TextItem')"
                >{{letData.cellIdx16}}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">申请行政复议或6个月内向</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_17"
                  align="center"
                  style="width:20%"
                  data-title="人民法院"
                  data-type="text"
                  data-src
                   @click="commandFill('cellIdx17', '人民法院', 'TextItem')"
                >{{letData.cellIdx17}}</td>
                <td class="textAlignLeft">人民法院提起行政诉讼，但不停止执行本决定。</td>
              </tr>
            </table>
            <table height="30"></table>
            <table height="30"></table>
            <table class="docBody">
              <tr>
                <td class="cellInput" id="cell_idx_18" align="right" style="width:95%"
                @click="commandFill('cellIdx18', '', 'TextItem')"
              >{{letData.cellIdx18}}</td>
              </tr>
            </table>
            <table class="docBody">
              <td class="cellInput" style="width:55%"></td>
              <td
                class="cellInput"
                id="cell_idx_19"
                align="center"
                style="width:10%"
                data-title="年"
                data-type="text"
                data-src
                @click="commandFill('cellIdx19', '年', 'TextItem')"
              >{{letData.cellIdx19}}</td>
              <td class="textAlignLeft">年</td>
              <td
                class="cellInput"
                id="cell_idx_20"
                align="center"
                style="width:10%"
                data-title="月"
                data-type="text"
                data-src
                @click="commandFill('cellIdx20', '月', 'TextItem')"
              >{{letData.cellIdx20}}</td>
              <td class="textAlignLeft">月</td>
              <td
                class="cellInput"
                id="cell_idx_21"
                align="center"
                style="width:10%"
                data-title="日"
                data-type="text"
                data-src
                @click="commandFill('cellIdx21', '日', 'TextItem')"
              >{{letData.cellIdx21}}</td>
              <td class="textAlignLeft">日</td>
            </table>
            <table class="docBody">
              <hr />
              <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;备注：本文书一式三份，一份交被处罚</td>
              <td
                class="cellInput"
                id="cell_idx_22"
                align="center"
                style="width:10%"
                data-title="单位/个人"
                data-type="text"
                data-src
                @click="commandFill('cellIdx22', '单位/个人', 'TextItem')"
              >{{letData.cellIdx22}}</td>
              <td class="textAlignLeft">，一份交银行，一份存档。</td>
            </table>
          </div>
        </div>
      </div>
    </let-main>
  </div>
</template>

<script>
import letMain from "../let-main";
import GoDB from "@/utils/godb.min.js";
import { getDangerObject, transformNumToChinese, getDocNumber } from '@/utils/monitor/setInitPaperData'
export default {
  name: "Let206",
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
          page: '8',
          key: 'cellIdx7'
        },
        cellIdx8: {
          page: '8',
          key: 'cellIdx8'
        },
        cellIdx9: {
          page: '8',
          key: 'cellIdx9'
        },
        cellIdx10: {
          page: '8',
          key: 'cellIdx10'
        },
      },
      editData: {}, // 回显数据
      extraData: {}, // 用于拼写隐患内容的字符集合
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
      const db = new GoDB("CoalSupervisionDB");
      const corpBase = db.table("corpBase");
      //查询符合条件的记录
      const corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      const wkPaper = db.table("wkPaper");
      const caseId = this.corpData.caseId;
      //查询当前计划是否已做文书
      const checkPaper = await wkPaper.findAll((item) => {
        return (
          item.caseId === caseId && item.paperType === this.docData.docTypeNo
        );
      });
      // 已做文书则展示文书内容，否则创建初始版本
      if (checkPaper.length > 0) {
        // 回显
        this.letData = JSON.parse(checkPaper[0].paperContent);
        this.editData = checkPaper[0];
      } else {
        // 创建初始版本
        // 1.关联行政处罚告知书
        const let204Data = await wkPaper.find(item => item.caseId === caseId && item.paperType === '6')
        // 2.单位/个人：行政处罚告知书中的单位/个人cellIdx5
        let let204DataPaperContent = JSON.parse(let204Data.paperContent)
        let cellIdx4String = let204DataPaperContent.cellIdx5
        // 3.被处罚：如果为单位时赋值煤矿名称coprName
        // 4.地址：如果为单位时赋值煤矿地址address
        // 5.违法事实：行政处罚告知书中的cellIdx6
        let dangerObject = getDangerObject(let204DataPaperContent.dangerItemObject.tableData, {danger: true})
        // 6.法律规定 :行政处罚告知书中的cellIdx7
        // 7.法律依据 :行政处罚告知书中的cellIdx8
        // 8.行政处罚 :行政处罚告知书中的cellIdx9
        // 9.机构接口中sysOfficeInfo实体中对应：
        // accountName；银行：accountBank；账户名称：billName；账号：account；
        // 地址：accountAddress；组织机构名：organName；法院：courtPrefix
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
          cellIdx4: let204DataPaperContent.cellIdx5, // 单位/个人
          cellIdx4TypeTextItem: let204DataPaperContent.cellIdx5, // 单位/个人
          cellIdx5: cellIdx4String === '单位' ? corp.corpName : '', // 被处罚
          cellIdx5TextItem: cellIdx4String === '单位' ? corp.corpName : '', // 被处罚
          cellIdx6: cellIdx4String === '单位' ? corp.address : '', // 地址
          cellIdx6TextItem: cellIdx4String === '单位' ? corp.address : '', // 地址
          cellIdx7: dangerObject.dangerString, // 违法事实
          cellIdx8: `分别违反了${dangerObject.illegalString}`, // 法律规定
          cellIdx9: dangerObject.penaltyBasisString, // 法律依据
          cellIdx10: `分别${dangerObject.penaltyDesc}。合并罚款人民币${transformNumToChinese(dangerObject.penaltyDescFineTotle)}（￥${dangerObject.penaltyDescFineTotle.toLocaleString()}）罚款。`, // 行政处罚
          cellIdx11: orgSysOfficeInfo.accountName, //
          cellIdx11TypeTextItem: orgSysOfficeInfo.accountName, //
          cellIdx12: orgSysOfficeInfo.accountBank, // 银行
          cellIdx12TypeTextItem: orgSysOfficeInfo.accountBank, // 银行
          cellIdx13: orgSysOfficeInfo.billName, // 支行（分理处），账户名称
          cellIdx13TypeTextItem: orgSysOfficeInfo.billName, // 支行（分理处），账户名称
          cellIdx14: orgSysOfficeInfo.account, // 账号
          cellIdx14TypeTextItem: orgSysOfficeInfo.account, // 账号
          cellIdx15: orgSysOfficeInfo.accountAddress, // 地址
          cellIdx15TypeTextItem: orgSysOfficeInfo.accountAddress, // 地址
          cellIdx16: orgSysOfficeInfo.organName, // 煤监机构
          cellIdx16TypeTextItem: orgSysOfficeInfo.organName, // 煤监机构
          cellIdx17: orgSysOfficeInfo.courtPrefix, // 人民法院
          cellIdx17TypeTextItem: orgSysOfficeInfo.courtPrefix, // 人民法院
          cellIdx18: null, //
          cellIdx19: null, // 年
          cellIdx20: null, // 月
          cellIdx21: null, // 日
          cellIdx22: let204DataPaperContent.cellIdx5, // 单位/个人
          cellIdx22TypeTextItem: let204DataPaperContent.cellIdx5, // 单位/个人
          dangerItemObject: let204DataPaperContent.dangerItemObject
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
        if (key === 'cellIdx7' || key === 'cellIdx8' || key === 'cellIdx9' || key === 'cellIdx10') {
           this.options[key] = {
            page: '8',
            key: key,
          }
          dataKey = 'dangerItemObject'
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