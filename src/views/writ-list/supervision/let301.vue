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
                  class="cellInput "
                  id="cell_idx_0"
                  align="right"
                  style="width:12%"
                  data-title="文书号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx0', '文书号', 'TextItem')"
                >{{letData.cellIdx0}}</td>
                <td class="textAlignLeft ">（</td>
                <td
                  class="cellInput "
                  id="cell_idx_1"
                  align="center"
                  style="width:25%"
                  data-title="文书号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx1', '文书号', 'TextItem')"
                >{{letData.cellIdx1}}</td>
                <td class="textAlignLeft ">）</td>

                <td class="textAlignLeft ">煤安执〔</td>
                <td
                  class="cellInput "
                  id="cell_idx_2"
                  align="center"
                  style="width:8%"
                  data-title="文书号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx2', '文书号', 'TextItem')"
                >{{letData.cellIdx2}}</td>
                <td class="textAlignLeft ">〕</td>
                <td
                  class="cellInput "
                  id="cell_idx_3"
                  align="center"
                  style="width:7%"
                  data-title="文书号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx3', '文书号', 'TextItem')"
                >{{letData.cellIdx3}}</td>
                <td class="textAlignLeft ">
                  号&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </td>
                <td class="textAlignLeft ">签发人：</td>
                <td
                  class="cellInput "
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
                 <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_5"
                  align="center"
                  style="width:50%"
                  data-title="人民法院"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx5', '人民法院', 'TextItem')"
                >{{letData.cellIdx5}}</td>
                <td class="textAlignLeft ">人民法院：</td>
              </tr>
            </table>
           <table style="border:solid 0 #000;" class="docBody">
              <tr>
                <td style="width:5%"></td>
                <td class="textAlignLeft">本机关于</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_6"
                  align="center"
                  style="width:9%"
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
                  style="width:9%"
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
                  style="width:9%"
                  data-title="日"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx8', '日', 'TextItem')"
                >{{ letData.cellIdx8 }}</td>
                <td class="textAlignLeft">日对被申请执行人</td>
                <td
                  style="width:36%"
                  class="cellInput cellBottomLine"
                  id="cell_idx_9"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx9', '', 'TextItem')"
                >{{ letData.cellIdx9 }}</td>
              </tr>
              <tr>
                 <td class="textAlignLeft">作出了</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_10"
                  align="center"
                  style="width:40%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx10', '', 'TextareaItem')"
                >{{ letData.cellIdx10 }}</td>
                <td class="textAlignLeft">的行政处罚决定&nbsp;&nbsp;&nbsp;(</td>
                 <td
                  class="cellInput"
                  id="cell_idx_11"
                  align="center"
                  style="width:12%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx11', '', 'TextItem')"
                >{{ letData.cellIdx11 }}</td>
               <td>(</td>
                 <td
                  class="cellInput"
                  id="cell_idx_12"
                  align="center"
                  style="width:12%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx12', '', 'TextItem')"
                >{{ letData.cellIdx12 }}</td>
                <td>)  </td>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;煤安罚</td>
              </tr>
              <tr>
                 <td class="textAlignLeft">〔</td>
                 <td
                  class="cellInput"
                  id="cell_idx_13"
                  align="center"
                  style="width:12%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx13', '', 'TextItem')"
                >{{ letData.cellIdx13 }}</td>
                <td class="textAlignLeft">〕</td>
                 <td
                  class="cellInput"
                  id="cell_idx_14"
                  align="center"
                  style="width:12%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx14', '', 'TextItem')"
                >{{ letData.cellIdx14 }}</td>
                <td class="textAlignLeft">号），并于</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_15"
                  align="center"
                  style="width:9%"
                  data-title="年"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx15', '年', 'TextItem')"
                >{{ letData.cellIdx15 }}</td>
                <td class="textAlignLeft">年</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_16"
                  align="center"
                  style="width:9%"
                  data-title="月"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx16', '月', 'TextItem')"
                >{{ letData.cellIdx16 }}</td>
                <td class="textAlignLeft">月</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_17"
                  align="center"
                  style="width:9%"
                  data-title="日"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx17', '日', 'TextItem')"
                >{{ letData.cellIdx17 }}</td>
                <td class="textAlignLeft">日送达了催告书&nbsp;&nbsp;&nbsp;(</td>
                 <td
                  class="cellInput"
                  id="cell_idx_18"
                  align="center"
                  style="width:12%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx18', '', 'TextItem')"
                >{{ letData.cellIdx18 }}</td>
               <td>(</td>
                 <td
                  class="cellInput"
                  id="cell_idx_19"
                  align="center"
                  style="width:12%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx19', '', 'TextItem')"
                >{{ letData.cellIdx19 }}</td>
                <td>)  </td>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;煤安催告</td>
                <td class="textAlignLeft">〔</td>
                 <td
                  class="cellInput"
                  id="cell_idx_20"
                  align="center"
                  style="width:12%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx20', '', 'TextItem')"
                >{{ letData.cellIdx20 }}</td>
                <td class="textAlignLeft">〕</td>
                 <td
                  class="cellInput"
                  id="cell_idx_21"
                  align="center"
                  style="width:12%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx21', '', 'TextItem')"
                >{{ letData.cellIdx21 }}</td>
                <td class="textAlignLeft">号）。被申请执行人在法定的期限</td>
              </tr>
              <tr>
                <td class="textAlignLeft">内未履行上述行政处罚决定。根据《中华人民共和国行政处罚法》第七十二条第一款第四项、《中华</td>
              </tr>
              <tr>
                <td class="textAlignLeft">人民共和国行政强制法》第五十三条、第五十四条规定特申请贵院强制执行。</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                 <td style="width:5%"></td>
                 <td class="textAlignLeft">附有关材料:</td>
              </tr>
              <tr>
                 <td style="width:5%"></td>
                 <td class="textAlignLeft">1.&nbsp;&nbsp;</td>
                 <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_22"
                  align="center"
                  style="width:85%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx22', '材料1', 'TextItem')"
                >{{ letData.cellIdx22 }}</td>
              </tr>
              <tr>
                 <td style="width:5%"></td>
                 <td class="textAlignLeft">2.&nbsp;&nbsp;</td>
                 <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_23"
                  align="center"
                  style="width:85%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx23', '材料2', 'TextItem')"
                >{{ letData.cellIdx23 }}</td>
              </tr>
              <tr>
                 <td style="width:5%"></td>
                 <td class="textAlignLeft">3.&nbsp;&nbsp;</td>
                 <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_24"
                  align="center"
                  style="width:85%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx24', '材料3', 'TextItem')"
                >{{ letData.cellIdx24 }}</td>
              </tr>
            </table>
            <table height="60"></table>
            <table class="docBody">
              <tr>
                 <td style="width:5%"></td>
                <td class="textAlignLeft">收件人（签名）：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_25"
                  align="center"
                  style="width:35%"
                  data-title="收件人（签名）"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx25', '收件人（签名）', 'TextItem')"
                >{{letData.cellIdx25}}</td>
                <td class="textAlignLeft">&nbsp;&nbsp;日&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;期：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_26"
                  align="center"
                  style="width:28%"
                  data-title="日期"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx26', '日期', 'DateItem')"
                >{{letData.cellIdx26}}</td>
              </tr>
              <tr>
                 <td style="width:5%"></td>
                <td class="textAlignLeft">申请单位联系人：</td>
                <!-- <td
                  class="cellInput"
                  id="cell_idx_29"
                  align="center"
                  style="width:8%"
                  data-title="单位"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx29', '单位', 'TextItem')"
                >{{letData.cellIdx29}}</td>
                <td class="textAlignLeft">联系人：</td> -->
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_27"
                  align="center"
                  style="width:35%"
                  data-title="联系人"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx27', '联系人', 'TextItem')"
                >{{letData.cellIdx27}}</td>
                <td class="textAlignLeft">&nbsp;&nbsp;联系电话：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_28"
                  align="center"
                  style="width:28%"
                  data-title="联系电话"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx28', '联系电话', 'TextItem')"
                >{{letData.cellIdx28}}</td>
              </tr>
            </table>
             <table height="40"></table>
             <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_29"
                  align="right"
                  style="width:95%"
                  @click="commandFill('cellIdx29', '', 'TextItem')"
                >{{letData.cellIdx29 ? letData.cellIdx29 : '（点击编辑）'}}</td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_30"
                  align="right"
                  style="width:95%"
                  data-title
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx30', '日期', 'DateItem')"
                >{{letData.cellIdx30 ? letData.cellIdx30 : '（点击编辑）'}}</td>
              </tr>
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
import letMain from "@/views/make-law-writ/components/let-main.vue";
import GoDB from "@/utils/godb.min.js";
import { getDocNumber, getDangerObject } from '@/utils/setInitPaperData'
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
      options: {},
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
          cellIdx5: orgSysOfficeInfo.courtPrefix, // 人民法院
          cellIdx5TypeTextItem: orgSysOfficeInfo.courtPrefix, // 人民法院
          cellIdx6: null, // 年
          cellIdx7: null, // 月
          cellIdx8: null, // 日
          cellIdx9: null, // 对被申请执行人
          cellIdx10: null, // 行政处罚决定
          cellIdx11: null, // 行政处罚决定 文书号
          cellIdx11TypeTextItem: null, // 行政处罚决定 文书号
          cellIdx12: null, // 行政处罚决定 文书号
          cellIdx13: null, // 行政处罚决定 文书号
          cellIdx14: null, // 行政处罚决定 文书号
          cellIdx15: null, // 年
          cellIdx16: null, // 月
          cellIdx17: null, // 日
          cellIdx18: null, // 催告书 文书号
          cellIdx19: null, // 催告书 文书号
          cellIdx20: null, // 催告书 文书号
          cellIdx21: null, // 催告书 文书号
          cellIdx22: null, // 材料1
          cellIdx23: null, // 材料2
          cellIdx24: null, // 材料3
          cellIdx25: null, // 收件人（签名）
          cellIdx26: null, // 日期
          cellIdx27: null, // 联系人
          cellIdx28: null, // 联系电话
          cellIdx29: null, //
          cellIdx30: null, // 日期
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