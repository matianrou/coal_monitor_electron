<!--行政强制 行政强制执行 强制执行申请书 -->
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
            <div class="textAlignCenter formHeader3">强 制 执 行 申 请 书</div>
            <div class="stdRowH"></div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_0"
                  align="right"
                  style="width:7%"
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
                <td class="textAlignLeft cellBottomLine">执〔</td>
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
                <td class="textAlignLeft cellBottomLine">
                  号&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </td>
                <td class="textAlignLeft cellBottomLine">签发人：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_4"
                  align="center"
                  style="width:7%"
                  data-title="签发人"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx4', '签发人', 'TextItem')"
                >{{letData.cellIdx4}}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">申请人：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_5"
                  style="width:87%"
                  data-title="申请人"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx5', '申请人', 'TextItem')"
                >{{letData.cellIdx5}}</td>
              </tr>
            </table>
            <table style="border:solid 0px #000;" class="docBody">
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;法定代表人：姓名</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_6"
                  align="center"
                  style="width:16.5%"
                  data-title="法定代表人：姓名"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx6', '法定代表人：姓名', 'TextItem')"
                >{{letData.cellIdx6}}</td>
                <td class="textAlignLeft">职&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;务</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_7"
                  align="center"
                  style="width:50%"
                  data-title="职务"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx7', '职务', 'TextItem')"
                >{{letData.cellIdx7}}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;委托代理人：姓名</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_8"
                  align="center"
                  style="width:16.5%"
                  data-title="委托代理人：姓名"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx8', '委托代理人：姓名', 'TextItem')"
                >{{letData.cellIdx8}}</td>
                <td class="textAlignLeft">工作单位</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_9"
                  align="center"
                  style="width:19%"
                  data-title="工作单位"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx9', '工作单位', 'TextItem')"
                >{{letData.cellIdx9}}</td>
                <td class="textAlignLeft">职务（职业）</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_10"
                  align="center"
                  style="width:18%"
                  data-title="职务（职业）"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx10', '职务（职业）', 'TextItem')"
                >{{letData.cellIdx10}}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">被申请人：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_11"
                  style="width:85%"
                  data-title="被申请人"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx11', '被申请人', 'TextItem')"
                >{{letData.cellIdx11}}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;法定代表人：姓名</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_12"
                  align="center"
                  style="width:16.5%"
                  data-title="法定代表人：姓名"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx12', '法定代表人：姓名', 'TextItem')"
                >{{letData.cellIdx12}}</td>
                <td class="textAlignLeft">职&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;务</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_13"
                  align="center"
                  style="width:19%"
                  data-title="职务"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx13', '职务', 'TextItem')"
                >{{letData.cellIdx13}}</td>
                <td class="textAlignLeft">性别</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_14"
                  align="center"
                  style="width:25%"
                  data-title="性别"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx14', '性别', 'TextItem')"
                >{{letData.cellIdx14}}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;住址
                </td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_15"
                  align="center"
                  style="width:75.5%"
                  data-title="住址"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx15', '住址', 'TextItem')"
                >{{letData.cellIdx15}}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对被申请人</td>
              </tr>
            </table>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              id="cell_idx_16"
              data-title="对被申请人"
              data-type="textarea"
              data-src
              @click="commandFill('cellIdx16', '对被申请人', 'DangerTableItem')">
              <div v-if="letData.cellIdx16 && letData.cellIdx16.length > 0">
                <p class="show-area-item-p">
                  <span style="padding: 7px;">{{ letData.cellIdx16 }}</span>
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
            <table style="border:solid 0px #000;" class="docBody">
              <tr>
                <td class="textAlignLeft">，我</td>
                <td
                  class="cellInput"
                  id="cell_idx_17"
                  align="center"
                  style="width:15%"
                  data-title="煤监机构"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx17', '煤监机构', 'TextItem')"
                >{{letData.cellIdx17}}</td>
                <td class="textAlignLeft">依法作出行</td>
              </tr>
              <tr>
                <td class="textAlignLeft">政处罚决定，并于</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_18"
                  align="center"
                  style="width:10%"
                  data-title="年"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx18', '年', 'TextItem')"
                >{{letData.cellIdx18}}</td>
                <td class="textAlignLeft">年</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_19"
                  align="center"
                  style="width:10%"
                  data-title="月"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx19', '月', 'TextItem')"
                >{{letData.cellIdx19}}</td>
                <td class="textAlignLeft">月</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_20"
                  align="center"
                  style="width:10%"
                  data-title="日"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx20', '日', 'TextItem')"
                >{{letData.cellIdx20}}</td>
                <td class="textAlignLeft">日</td>
                <td class="textAlignLeft">送达了行政决定履行催告书（</td>
                <td
                  class="cellInput"
                  id="cell_idx_21"
                  align="center"
                  style="width:7%"
                  data-title="文书号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx21', '文书号', 'TextItem')"
                >{{letData.cellIdx21}}</td>
                <td class="textAlignLeft">煤</td>
              </tr>
              <tr>
                <td class="textAlignLeft">安监</td>
                <td
                  class="cellInput"
                  id="cell_idx_22"
                  align="center"
                  style="width:7%"
                  data-title="文书号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx22', '文书号', 'TextItem')"
                >{{letData.cellIdx22}}</td>
                <td class="textAlignLeft">催〔</td>
                <td
                  class="cellInput"
                  id="cell_idx_23"
                  align="center"
                  style="width:7%"
                  data-title="文书号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx23', '文书号', 'TextItem')"
                >{{letData.cellIdx23}}</td>
                <td class="textAlignLeft">〕</td>
                <td
                  class="cellInput"
                  id="cell_idx_24"
                  align="center"
                  style="width:7%"
                  data-title="文书号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx24', '文书号', 'TextItem')"
                >{{letData.cellIdx24}}</td>
                <td class="textAlignLeft">号）。由于其在法定期限内未履行，根据《中华人</td>
              </tr>
              <tr>
                <td class="textAlignLeft">民共和国行政处罚法》第五十一条、《中华人民共和国行政强制法》第五十三条规定、第</td>
              </tr>
              <tr>
                <td class="textAlignLeft">五十四条规定，申请贵院强制执行下列项目：</td>
              </tr>
            </table>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              id="cell_idx_25"
              data-title=""
              data-type="textarea"
              data-src
              @click="commandFill('cellIdx25', '', 'TextareaItem')">
              <p class="show-area-item-p">
                <span style="padding: 7px;">{{ letData.cellIdx25 }}</span>
              </p>
            </div>
            <table style="border:solid 0px #000;" class="docBody">
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此致</td>
              </tr>
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_26"
                  align="center"
                  style="width:40%"
                  data-title="人民法院"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx26', '人民法院', 'TextItem')"
                >{{letData.cellIdx26}}</td>
                <td class="textAlignLeft">人民法院</td>
              </tr>
            </table>
            <table height="30"></table>
            <table class="docBody">
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;收件人（签名）：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_27"
                  align="center"
                  style="width:27%"
                  data-title="收件人（签名）"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx27', '收件人（签名）', 'TextItem')"
                >{{letData.cellIdx27}}</td>
                <td class="textAlignLeft">&nbsp;&nbsp;日&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;期：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_28"
                  align="center"
                  style="width:25%"
                  data-title="日期"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx28', '日期', 'DateItem')"
                >{{letData.cellIdx28}}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我</td>
                <td
                  class="cellInput"
                  id="cell_idx_29"
                  align="center"
                  style="width:8%"
                  data-title="单位"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx29', '单位', 'TextItem')"
                >{{letData.cellIdx29}}</td>
                <td class="textAlignLeft">联系人：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_30"
                  align="center"
                  style="width:24.9%"
                  data-title="联系人"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx30', '联系人', 'TextItem')"
                >{{letData.cellIdx30}}</td>
                <td class="textAlignLeft">&nbsp;&nbsp;联系电话：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_31"
                  align="center"
                  style="width:24.8%"
                  data-title="联系电话"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx31', '联系电话', 'TextItem')"
                >{{letData.cellIdx31}}</td>
              </tr>
            </table>
            <table height="60"></table>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_32"
                  align="right"
                  style="width:95%"
                  @click="commandFill('cellIdx32', '', 'TextItem')"
                >{{letData.cellIdx32}}</td>
              </tr>
            </table>
            <table class="docBody">
              <td class="cellInput" style="width:55%"></td>
              <td
                class="cellInput cellBottomLine"
                id="cell_idx_33"
                align="center"
                style="width:10%"
                data-title="年"
                data-type="text"
                data-src
                @click="commandFill('cellIdx33', '年', 'TextItem')"
              >{{letData.cellIdx33}}</td>
              <td class="textAlignLeft">年</td>
              <td
                class="cellInput cellBottomLine"
                id="cell_idx_34"
                align="center"
                style="width:10%"
                data-title="月"
                data-type="text"
                data-src
                @click="commandFill('cellIdx34', '月', 'TextItem')"
              >{{letData.cellIdx34}}</td>
              <td class="textAlignLeft">月</td>
              <td
                class="cellInput cellBottomLine"
                id="cell_idx_35"
                align="center"
                style="width:10%"
                data-title="日"
                data-type="text"
                data-src
                @click="commandFill('cellIdx35', '日', 'TextItem')"
              >{{letData.cellIdx35}}</td>
              <td class="textAlignLeft">日</td>
            </table>
            <table class="docBody">
              <hr />
              <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;备注：本文书一式两份，一份送人民法院，一份存档。</td>
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
import { getDocNumber, getDangerObject } from '@/utils/monitor/setInitPaperData'
export default {
  name: "Let301",
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
        cellIdx16: {
          page: '18',
          key: 'cellIdx16'
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
      this.extraData = {
        corpName: corp.corpName
      }
      // 已做文书则展示文书内容，否则创建初始版本
      if (checkPaper.length > 0) {
        // 回显
        this.letData = JSON.parse(checkPaper[0].paperContent);
        this.editData = checkPaper[0];
      } else {
        // 创建初始版本
        // 1.文书编号：送达收执文书编号
        let paperNumber = await getDocNumber(db, '9', caseId, this.$store.state.user)
        // 2.申请人：机构名称
        let cellIdx5String = this.$store.state.user.userGroupName
        // 3.被申请人：企业煤矿名称
        let cellIdx11String = corp.corpName
        // 4.对被申请人：企业名称+'涉嫌'+隐患描述+'案'
        // 获取笔录文书中的隐患数据
        const let101Data = await wkPaper.find((item) => {
          return item.caseId === caseId && item.paperType === '1';
        });
        let let101DataPapaerContent = JSON.parse(let101Data.paperContent)
        let dangerObject = getDangerObject(let101DataPapaerContent.dangerItemObject.tableData)
        let cellIdx16String = `${corp.corpName}涉嫌${dangerObject.dangerString}案`
        // 5.文书号2：催告书编号
        let paperNumber39 = await getDocNumber(db, '39', caseId, this.$store.state.user)
        // 从sysOfficeInfo中获取：
        const orgInfo = db.table("orgInfo");
        const orgData = await orgInfo.find(item => item.no === this.$store.state.user.userGroupId)
        let orgSysOfficeInfo = JSON.parse(orgData.sysOfficeInfo)
        // 6.强制执行下列项目：‘划转罚款至’accountName+accountBank‘账户名称：’+billName+‘待结算财政款项账号：’+account
        let cellIdx25String = `划转罚款至${orgSysOfficeInfo.accountName}${orgSysOfficeInfo.accountBank}。账户名称：${orgSysOfficeInfo.billName}。待结算财政款项账号：${orgSysOfficeInfo.account}`
        // 7.人民法院：courtPrefix 联系人：master 联系电话：phone
        // 8.申请人的法定代表人legalPerson和职务post
        this.letData = {
          cellIdx0: paperNumber.num0, // 文书号
          cellIdx0TypeTextItem: paperNumber.num0, // 文书号
          cellIdx1: paperNumber.num1, // 文书号
          cellIdx1TypeTextItem: paperNumber.num1, // 文书号
          cellIdx2: paperNumber.num3, // 文书号
          cellIdx2TypeTextItem: paperNumber.num3, // 文书号
          cellIdx3: paperNumber.num4, // 文书号
          cellIdx3TypeTextItem: paperNumber.num4, // 文书号
          cellIdx4: null, // 签发人
          cellIdx5: cellIdx5String, // 申请人
          cellIdx5TypeTextItem: cellIdx5String, // 申请人
          cellIdx6: orgSysOfficeInfo.legalPerson, // 法定代表人：姓名
          cellIdx6TypeTextItem: orgSysOfficeInfo.legalPerson, // 法定代表人：姓名
          cellIdx7: orgSysOfficeInfo.post, // 职务
          cellIdx7TypeTextItem: orgSysOfficeInfo.post, // 职务
          cellIdx8: null, // 委托代理人：姓名
          cellIdx9: null, // 工作单位
          cellIdx10: null, // 职务（职业）
          cellIdx11: cellIdx11String, // 被申请人
          cellIdx11TypeTextItem: cellIdx11String, // 被申请人
          cellIdx12: null, // 法定代表人：姓名
          cellIdx13: null, // 职务
          cellIdx14: null, // 性别
          cellIdx15: null, // 住址
          cellIdx16: cellIdx16String, // 对被申请人
          cellIdx17: null, // 煤监机构
          cellIdx18: null, // 年
          cellIdx19: null, // 月
          cellIdx20: null, // 日
          cellIdx21: paperNumber39.num0, // 文书号
          cellIdx21TypeTextItem: paperNumber39.num0, // 文书号
          cellIdx22: paperNumber39.num1, // 文书号
          cellIdx22TypeTextItem: paperNumber39.num1, // 文书号
          cellIdx23: paperNumber39.num3, // 文书号
          cellIdx23TypeTextItem: paperNumber39.num3, // 文书号
          cellIdx24: paperNumber39.num4, // 文书号
          cellIdx24TypeTextItem: paperNumber39.num4, // 文书号
          cellIdx25: cellIdx25String, //
          cellIdx25TypeTextareaItem: cellIdx25String, //
          cellIdx26: orgSysOfficeInfo.courtPrefix, // 人民法院
          cellIdx26TypeTextItem: orgSysOfficeInfo.courtPrefix, // 人民法院
          cellIdx27: null, // 收件人（签名）
          cellIdx28: null, // 日期
          cellIdx29: null, // 单位
          cellIdx30: orgSysOfficeInfo.master, // 联系人
          cellIdx30TypeTextItem: orgSysOfficeInfo.master, // 联系人
          cellIdx31: orgSysOfficeInfo.phone, // 联系电话
          cellIdx31TypeTextItem: orgSysOfficeInfo.phone, // 联系电话
          cellIdx32: null, //
          cellIdx33: null, // 年
          cellIdx34: null, // 月
          cellIdx35: null, // 日
          dangerItemObject: let101DataPapaerContent.dangerItemObject
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
        if (key === 'cellIdx16') {
          this.options[key] = {
            page: '18',
            key: key,
            spellString: this.extraData
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