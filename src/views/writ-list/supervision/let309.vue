<!-- 行政强制 行政强制执行 行政强制执行事先催告书 -->
<template>
  <div style="width: 100%; height: 100%;">
    <let-main
      ref="letMain"
      :corp-data="corpData"
      :doc-data="docData"
      :let-data="letData"
      :edit-data="paperData"
      @go-back="goBack"
    >
      <div slot="left">
        <div class="page page-sizeA4">
          <div>
            <div class="stdRowH"></div>
            <div class="textAlignCenter formHeader0">煤矿安全监管行政执法文书</div>
            <div class="textAlignLeft formHeader3">
               <div class="textAlignCenter ">行政强制执行事先催告书</div>
            </div>
            <div class="stdRowH"></div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_0"
                  align="right"
                  style="width:40%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx0', '文书号', 'TextItem')"
                >{{ letData.cellIdx0 }}</td>
                <td  class="textAlignLeft ">（</td>
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
              <td  class="textAlignLeft ">）</td>
                <td class="textAlignLeft ">煤安催告〔</td>
                <td
                  class="cellInput "
                  id="cell_idx_2"
                  align="center"
                  style="width:7%"
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
                  style="width:8%"
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
                  id="cell_idx_5"
                  style="width:50%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx5', '', 'TextItem')"
                >{{ letData.cellIdx5 }}</td>
                <td class="textAlignLeft">:</td>
              </tr>
            </table>
            <div class="docTextarea">
              <label style="width:5%"></label>
              本机关对你
              <span
                class="no-underline"
                @click="commandFill('cellIdx6', '单位', 'TextItem')"
              >{{ letData.cellIdx6 ? letData.cellIdx6 : '（点击编辑）'}}</span>
              作出
              <span
                @click="commandFill('cellIdx7', '', 'TextareaItem')"
              >{{ letData.cellIdx7 ? letData.cellIdx7 : '（点击编辑）'}}</span>
              尚未履行，且你
              <span
                class="no-underline"
                @click="commandFill('cellIdx8', '单位', 'TextItem')"
              >{{ letData.cellIdx8 ? letData.cellIdx8 : '（点击编辑）'}}</span>
              在法定期限内未申请行政复议或者提起行政诉讼。依据《中华人民共和国行政强制法》第五十三条、第五十四条的规定，请你
              <span
                class="no-underline"
                @click="commandFill('cellIdx9', '单位', 'TextItem')"
              >{{ letData.cellIdx9 ? letData.cellIdx9 : '（点击编辑）'}}</span>
            </div>
            <table style="border:solid 0px #000;" class="docBody">
              <tr>
               <td style="width:5%"></td>
                 <td
                  class="cellInput "
                  id="cell_idx_10"
                  align="center"
                  style="width:5%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx10', '', 'SelectItem')"
                >{{ letData.cellIdx10 }}</td>
                 <td class="textAlignLeft">于</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_11"
                  align="center"
                  style="width:10%"
                  data-title="年"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx11', '年', 'TextItem')"
                >{{ letData.cellIdx11 }}</td>
                <td class="textAlignLeft"  style="width:2%">年</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_12"
                  align="center"
                  style="width:10%"
                  data-title="月"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx12', '月', 'TextItem')"
                >{{ letData.cellIdx12 }}</td>
                <td class="textAlignLeft"  style="width:2%">月</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_13"
                  align="center"
                  style="width:10%"
                  data-title="日"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx13', '日', 'TextItem')"
                >{{ letData.cellIdx13 }}</td>
                <td class="textAlignLeft"  style="width:16%">日&nbsp;&nbsp;&nbsp;&nbsp;前将罚款</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_14"
                  align="center"
                  style="width:37%"
                  data-title="罚款"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx14', '罚款', 'TextItem')"
                >{{ letData.cellIdx14 }}</td>
              </tr>
              <tr>
                <td class="textAlignLeft"  style="width:23%">元（大写）、加处罚款</td>
                 <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_15"
                  align="center"
                  style="width:39%"
                  data-title="罚款"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx15', '罚款', 'TextItem')"
                >{{ letData.cellIdx15 }}</td>
                <td class="textAlignLeft"  style="width:23%">元（大写），（合计：</td>
                <td
                  class="cellInput "
                  id="cell_idx_16"
                  align="center"
                  style="width:15%"
                  data-title="合计"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx16', '合计', 'TextItem')"
                >{{ letData.cellIdx16 }}</td>
                 <td class="textAlignLeft"  style="width:12%">元）&nbsp;&nbsp;缴至</td>
                 <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_17"
                  align="center"
                  style="width:50%"
                  data-title="银行"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx17', '银行', 'TextItem')"
                >{{ letData.cellIdx17 }}</td>
                <td class="textAlignLeft" style="width:7%">银行。</td>
              </tr>
            </table>
            <div class="docTextarea">
              <label style="width:5%"></label>
              <span
                class="no-underline"
                @click="commandFill('cellIdx18', '', 'SelectItem')"
              >{{ letData.cellIdx18 }}</span>
              立即履行以下行政决定:
              <span
                @click="commandFill('cellIdx19', '行政决定', 'TextareaItem')"
              >{{ letData.cellIdx19 ? letData.cellIdx19 : '（点击编辑）'}}</span>
              如你
              <span
                class="no-underline"
                @click="commandFill('cellIdx20', '单位', 'TextItem')"
              >{{ letData.cellIdx20 ? letData.cellIdx20 : '（点击编辑）'}}</span>
              不履行上述义务，本机关将依据《中华人民共和国行政强制法》第五十三条、第五十四条的规定，申请人民法院强制执行。
            </div>
            <table height="30"></table>
            <table height="30"></table>
            <table class="docBody">
              <tr>
                <td style="width:5%"></td>
                <td
                  class="textAlignLeft"  style="width:21%"
                >受送达人（签名）：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_21"
                  style="width:30%"
                  data-title="受送达人（签名）"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx21', '受送达人（签名）', 'TextItem')"
                >{{ letData.cellIdx21 }}</td>
                <td class="textAlignLeft"  style="width:14%">&nbsp;&nbsp;日&nbsp;&nbsp;&nbsp;&nbsp;期：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_22"
                  style="width:30%"
                  data-title="日期"
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx22', '日期', 'DateItem')"
                >{{ letData.cellIdx22 }}</td>
              </tr>
              <tr>
                <td style="width:5%"></td>
                <td
                  class="textAlignLeft"  style="width:15%"
                >执法机关地址:</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_23"
                  align="center"
                  style="width:36%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx23', '执法机关地', 'TextItem')"
                >{{ letData.cellIdx23 }}</td>

                <td class="textAlignLeft"  style="width:14%">&nbsp;&nbsp;邮政编码：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_24"
                  style="width:30%"
                  data-title="邮政编码"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx24', '邮政编码', 'TextItem')"
                >{{ letData.cellIdx24 }}</td>
              </tr>
              <tr>
                <td style="width:5%"></td>
                <td
                  class="textAlignLeft" style="width:18%"
                >执法机关联系人：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_25"
                  align="center"
                  style="width:33%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx25', '', 'TextItem')"
                >{{ letData.cellIdx25 }}</td>

                <td class="textAlignLeft"  style="width:14%">&nbsp;&nbsp;联系电话：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_26"
                  style="width:30%"
                  data-title="联系电话"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx26', '联系电话', 'TextItem')"
                >{{ letData.cellIdx26 }}</td>
              </tr>
            </table>
           <table height="30"></table>
             <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_27"
                  align="right"
                  style="width:95%"
                  @click="commandFill('cellIdx27', '', 'TextItem')"
                >{{letData.cellIdx27 ? letData.cellIdx27 : '（点击编辑）'}}</td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_28"
                  align="right"
                  style="width:95%"
                  data-title
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx28', '日期', 'DateItem')"
                >{{letData.cellIdx28 ? letData.cellIdx28 : '（点击编辑）'}}</td>
              </tr>
            </table>
            <table height="60"></table>
            <table>
              <hr />
              <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;备注：本文书一式两份，一份送被催告</td>
              <td
                class="cellInput"
                id="cell_idx_29"
                align="center"
                style="width:10%"
                data-title
                data-type="text"
                data-src
                @click="commandFill('cellIdx29', '单位', 'TextItem')"
                >{{ letData.cellIdx29 }}</td>
              <td class="textAlignLeft">，一份存档。</td>
            </table>
          </div>
        </div>
      </div>
    </let-main>
    <!-- 关联文书选择 -->
    <select-paper
      :visible="visible.selectPaper"
      title="关联文书选择"
      :paper-list="paperList"
      @close="closeDialog"
      @confirm-paper="confirmPaper"
    ></select-paper>
  </div>
</template>

<script>
import GoDB from "@/utils/godb.min.js";
import { getDocNumber } from '@/utils/setInitPaperData'
import associationSelectPaper from '@/components/association-select-paper'
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
  name: "Let112",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {},
      options: {
        cellIdx10: toggleDictionary,
        cellIdx18: toggleDictionary,
      },
      associationPaper: []
    };
  },
  methods: {
    async initLetData (selectedPaper) {
      const db = new GoDB(this.$store.state.DBName);
      const corpBase = db.table("corpBase");
      const corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      // 1.生成文书编号
      let { num0, num1, num3, num4 } = await getDocNumber(db, this.docData.docTypeNo, this.corpData.caseId, this.$store.state.user)
      // 2.sysOfficeInfo实体中 地址：depAddress、邮政编码：depPost、联系人：master、联系电话：phone
      const orgInfo = db.table("orgInfo");
      const orgData = await orgInfo.find(item => item.no === this.$store.state.user.userGroupId)
      let orgSysOfficeInfo = orgData ? JSON.parse(orgData.sysOfficeInfo) : {depAddress: '', depPost: '', master: '', phone: ''}
      let depAddress = orgSysOfficeInfo.depAddress
      let depPost = orgSysOfficeInfo.depPost
      let master = orgSysOfficeInfo.master
      let phone = orgSysOfficeInfo.phone
      await db.close();
      this.letData = {
        cellIdx0: num0, // 文书号
        cellIdx0TypeTextItem: num0, // 文书号
        cellIdx1: num1, // 文书号
        cellIdx1TypeTextItem: num1, // 文书号
        cellIdx2: num3, // 文书号
        cellIdx2TypeTextItem: num3, // 文书号
        cellIdx3: num4, // 文书号
        cellIdx3TypeTextItem: num4, // 文书号
        // cellIdx4: null, // 单位
        cellIdx5: corp.corpName ? corp.corpName : null, // corpname
        cellIdx5TypeTextItem: corp.corpName ? corp.corpName : null, //
        cellIdx6: null, // 单位/个人
        cellIdx7: null, // 作出XX尚未履行
        cellIdx8: null, // 且你XX在法定期限内未申请行政复议或者提起行政诉讼
        cellIdx9: null, // 请你XX（单位）
        cellIdx10: '□', // 勾选项
        cellIdx11: null, // 年
        cellIdx12: null, // 月
        cellIdx13: null, // 日
        cellIdx14: null, // 罚款（大写）
        cellIdx15: null, // 加处罚款（大写）
        cellIdx16: null, // 合计
        cellIdx17: null, // 银行
        cellIdx18: '□', // 勾选项
        cellIdx19: null, // 立即履行以下行政决定XXX
        cellIdx20: null, // 单位/个人
        cellIdx21: null, // 受送达人（签名）
        cellIdx22: null, // 日期
        cellIdx23: depAddress, // 执法机关地址
        cellIdx23TypeTextItem: depAddress, // 执法机关地址
        cellIdx24: depPost, // 邮政编码
        cellIdx24TypeTextItem: depPost, // 邮政编码
        cellIdx25: master, // 执法机关联系人
        cellIdx25TypeTextItem: master, // 执法机关联系人
        cellIdx26: phone, // 联系电话
        cellIdx26TypeTextItem: phone, // 联系电话
        cellIdx27: null, //
        cellIdx28: null, //日期
        cellIdx29: null, // 单位/个人
      };
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