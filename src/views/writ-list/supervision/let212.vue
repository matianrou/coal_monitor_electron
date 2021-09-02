<!--行政处罚 案件结案 罚款缴纳催告书 -->
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
            <div class="textAlignCenter formHeader3">罚款缴纳催告书</div>
            <div class="stdRowH"></div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_0"
                  align="right"
                  style="width:35%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx0', '文书号', 'TextItem')"
                >{{ letData.cellIdx0 }}</td>
                <td>（</td>
                <td
                  class="cellInput "
                  id="cell_idx_1"
                  align="center"
                  style="width:20%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx1', '', 'TextItem')"
                >{{ letData.cellIdx1 }}</td>
                <td class="textAlignLeft ">） 煤安催缴〔</td>
                <td
                  class="cellInput "
                  id="cell_idx_2"
                  align="center"
                  style="width:8%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx2', '', 'TextItem')"
                >{{ letData.cellIdx2 }}</td>
                <td class="textAlignLeft ">〕</td>
                <td
                  class="cellInput "
                  id="cell_idx_3"
                  align="center"
                  style="width:10%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx3', '', 'TextItem')"
                >{{ letData.cellIdx3 }}</td>
                <td class="textAlignLeft ">号&nbsp;&nbsp;</td>
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
            <div class="docTextarea">
              <label style="width:5%"></label>
              本机关于
              <span
                @click="commandFill('cellIdx5', '年', 'TextItem')"
              >{{ letData.cellIdx5 ? letData.cellIdx5 : '（XX）'}}</span>
              年
              <span
                @click="commandFill('cellIdx6', '月', 'TextItem')"
              >{{ letData.cellIdx6 ? letData.cellIdx6 : '（XX）'}}</span>
              月
              <span
                @click="commandFill('cellIdx7', '日', 'TextItem')"
              >{{ letData.cellIdx7 ? letData.cellIdx7 : '（XX）'}}</span>
              日作出 《行政处罚决定书》 (
              <span
                class="no-underline"
                @click="commandFill('cellIdx8', '行政处罚决定书文书号', 'TextItem')"
              >{{ letData.cellIdx8 ? letData.cellIdx8 : '（点击编辑）'}}</span>
              （
              <span
                class="no-underline"
                @click="commandFill('cellIdx9', '行政处罚决定书文书号', 'TextItem')"
              >{{ letData.cellIdx9 ? letData.cellIdx9 : '（点击编辑）'}}</span>
              ）煤安罚〔
              <span
                class="no-underline"
                @click="commandFill('cellIdx10', '行政处罚决定文书号', 'TextItem')"
              >{{ letData.cellIdx10 ? letData.cellIdx10 : '（点击编辑）'}}</span>
              〕
              <span
                class="no-underline"
                @click="commandFill('cellIdx11', '行政处罚决定文书号', 'TextItem')"
              >{{ letData.cellIdx11 ? letData.cellIdx11 : '（点击编辑）'}}</span>
              号），要求你
              <span
                class="no-underline"
                @click="commandFill('cellIdx12', '单位', 'TextItem')"
              >{{ letData.cellIdx12 ? letData.cellIdx12 : '（点击编辑）'}}</span>
              于
              <span
                @click="commandFill('cellIdx13', '年', 'TextItem')"
              >{{ letData.cellIdx13 ? letData.cellIdx13 : '（点击编辑）'}}</span>
              年
              <span
                @click="commandFill('cellIdx14', '月', 'TextItem')"
              >{{ letData.cellIdx14 ? letData.cellIdx14 : '（点击编辑）'}}</span>
              月
              <span
                @click="commandFill('cellIdx15', '日', 'TextItem')"
              >{{ letData.cellIdx15 ? letData.cellIdx15 : '（点击编辑）'}}</span>
              日前将罚款缴至
              <span
                @click="commandFill('cellIdx16', '罚款缴至', 'TextItem')"
              >{{ letData.cellIdx16 ? letData.cellIdx16 : '（点击编辑）'}}</span>
              。因你单位逾期未履行该处罚决定，依据《中华人民共和国行政强制法》第三十五条规定，现催告你
              <span
                class="no-underline"
                @click="commandFill('cellIdx17', '单位', 'TextItem')"
              >{{ letData.cellIdx17 ? letData.cellIdx17 : '（点击编辑）'}}</span>
              履行以上决定，本机关将依据《中华人民共和国行政处罚法》第七十二条第一款第一项规定，每日按罚款数额的3%加处罚款。如有异议，依据《中华人民共和国行政强制法》第三十六条规定，你
              <span
                class="no-underline"
                @click="commandFill('cellIdx18', '单位', 'TextItem')"
              >{{ letData.cellIdx18 ? letData.cellIdx18 : '（点击编辑）'}}</span>
              有权在收到本催告书之日起3日内向本机关提出陈述和申辩，逾期未提出的，视为放弃此权利。
            </div>
            <table height="60"></table>
             <table class="docBody">
              <tr>
                <td style="width:5%"></td>
                <td class="textAlignLeft" style="width:21%">受送达人（签名）：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_19"
                  style="width:35%"
                  data-title="收件人（签名）"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx19', '受送达人（签名）', 'TextItem')"
                >{{letData.cellIdx19}}</td>
                <td
                  class="textAlignLeft" style="width:13%"
                >&nbsp;&nbsp;日&nbsp;&nbsp;&nbsp;&nbsp;期：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_20"
                  style="width:26%"
                  data-title="日期"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx20', '日期', 'DateItem')"
                >{{letData.cellIdx20}}</td>
              </tr>
              <tr>
                <td style="width:5%"></td>
                <td class="textAlignLeft" style="width:16%">执法机关地址：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_21"
                  style="width:40%"
                  data-title="执法机关地址"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx21', '执法机关地址', 'TextItem')"
                >{{letData.cellIdx21}}</td>
                <td class="textAlignLeft" style="width:14%">&nbsp;&nbsp;邮政编码：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_22"
                  style="width:25%"
                  data-title="邮政编码"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx22', '邮政编码', 'TextItem')"
                >{{letData.cellIdx22}}</td>
              </tr>
              <tr>
                <td style="width:5%"></td>
                <td class="textAlignLeft" style="width:18%">执法机关联系人：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_23"
                  style="width:38%"
                  data-title="执法机关联系人"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx23', '执法机关联系人', 'TextItem')"
                >{{letData.cellIdx23}}</td>
                <td class="textAlignLeft" style="width:14%">&nbsp;&nbsp;联系电话：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_24"
                  style="width:25%"
                  data-title="联系电话"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx24', '联系电话', 'TextItem')"
                >{{letData.cellIdx24}}</td>
              </tr>
            </table>
            <table height="90"></table>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_25"
                  align="right"
                  style="width:95%"
                  @click="commandFill('cellIdx25', '', 'TextItem')"
                >{{letData.cellIdx25 ? letData.cellIdx25 : '（点击编辑）'}}</td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_26"
                  align="right"
                  style="width:95%"
                  data-title
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx26', '日期', 'DateItem')"
                >{{letData.cellIdx26 ? letData.cellIdx26: '（点击编辑）'}}</td>
              </tr>
            </table>
            <table>
              <hr />
              <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;备注：本文书一式两份：一份交被处罚</td>
              <td
                  class="cellInput "
                  id="cell_idx_27"
                  style="width:10%"
                  data-title="单位"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx27', '单位', 'TextItem')"
                >{{letData.cellIdx27}}</td>
              <td class="textAlignLeft">，一份存档。</td>
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
  name: "Let212",
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
          item.caseId === caseId && item.paperType === this.docData.docTypeNo && item.delFlag !== '1'
        );
      });
      // 已做文书则展示文书内容，否则创建初始版本
      if (checkPaper.length > 0) {
        // 回显
        this.letData = JSON.parse(checkPaper[0].paperContent);
        this.editData = checkPaper[0];
      } else {
        // 创建初始版本
        // 1.生成文书编号
        let {num0, num1, num3, num4} = await getDocNumber(db, this.docData.docTypeNo, caseId, this.$store.state.user)
        // 2.行政处罚决定书 日期、编号、
        const let206Data = await wkPaper.find(item => item.caseId === caseId && item.paperType === '8')
        if (!let206Data) {
          this.$message.error('请先填写并保存行政处罚决定书中内容！')
          return
        }
        let let206DataPapaerContent = JSON.parse(let206Data.paperContent)
        let date206 = let206DataPapaerContent.cellIdx20 ? let206DataPapaerContent.cellIdx20.replace('年', '-').replace('月', '-').replace('日', '-').split('-') : ['', '', '']
        const orgInfo = db.table("orgInfo");
        const orgData = await orgInfo.find(item => item.no === this.$store.state.user.userGroupId)
        let orgSysOfficeInfo = orgData ? JSON.parse(orgData.sysOfficeInfo) : {accountName: '', accountBank: '', billName: '', account: '', accountAddress: '', organName: '', courtPrefix: ''}
        this.letData = {
          cellIdx0: num0, // 文书号
          cellIdx0TypeTextItem: num0, // 文书号
          cellIdx1: num1, // 文书号
          cellIdx1TypeTextItem: num1, // 文书号
          cellIdx2: num3, // 文书号
          cellIdx2TypeTextItem: num3, // 文书号
          cellIdx3: num4, // 文书号
          cellIdx3TypeTextItem: num4, // 文书号
          cellIdx4: corp.corpName, // corpName
          cellIdx4TypeTextItem: corp.corpName, // corpName
          cellIdx5: date206[0], // 年
          cellIdx5TypeTextItem: date206[0], // 年
          cellIdx6: date206[1], // 月
          cellIdx6TypeTextItem: date206[1], // 月
          cellIdx7: date206[2], // 日
          cellIdx7TypeTextItem: date206[2], // 日
          cellIdx8: let206DataPapaerContent.cellIdx0, // 行政处罚决定书 文书号
          cellIdx8TypeTextItem: let206DataPapaerContent.cellIdx0, // 行政处罚决定书 文书号
          cellIdx9: let206DataPapaerContent.cellIdx1, // 行政处罚决定书 文书号
          cellIdx9TypeTextItem: let206DataPapaerContent.cellIdx1, // 行政处罚决定书 文书号
          cellIdx10: let206DataPapaerContent.cellIdx2, // 行政处罚决定书 文书号
          cellIdx10TypeTextItem: let206DataPapaerContent.cellIdx2, // 行政处罚决定书 文书号
          cellIdx11: let206DataPapaerContent.cellIdx3, // 行政处罚决定书 文书号
          cellIdx11TypeTextItem: let206DataPapaerContent.cellIdx3, // 行政处罚决定书 文书号
          cellIdx12: null, // 单位
          cellIdx13: null, // 年
          cellIdx14: null, // 月
          cellIdx15: null, // 日
          cellIdx16: null, // 罚款缴至
          cellIdx17: null, // 单位
          cellIdx18: null, // 单位
          cellIdx19: null, // 受送达人（签名）
          cellIdx20: null, // 日期
          cellIdx21: orgSysOfficeInfo.accountAddress, // 执法机关地址
          cellIdx22: null, // 邮政编码
          cellIdx23: null, // 执法机关联系人
          cellIdx24: null, // 联系电话
          cellIdx25: null, //
          cellIdx26: null, //日期
          cellIdx27: let206DataPapaerContent.cellIdx4, //单位
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