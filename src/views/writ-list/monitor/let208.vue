<!-- 行政处罚 一般程序 行政决定履行催告书 -->
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
            <div class="textAlignCenter formHeader3">行 政 决 定 履 行 催 告 书</div>
            <div class="stdRowH"></div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_0"
                  align="right"
                  style="width:50%"
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
                <td class="textAlignLeft cellBottomLine">催〔</td>
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
                <td class="cellInput cellBottomLine" id="cell_idx_4" style="width:50%">{{letData.cellIdx4}}</td>
                <td class="textAlignLeft">:</td>
              </tr>
            </table>
            <table style="border:solid 0px #000;" class="docBody">
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我</td>
                <td
                  class="cellInput"
                  id="cell_idx_5"
                  align="center"
                  style="width:10%"
                  data-title="单位"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx5', '单位', 'TextItem')"
                >{{letData.cellIdx5}}</td>
                <td class="textAlignLeft">于</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_6"
                  align="center"
                  style="width:10%"
                  data-title="年"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx6', '年', 'TextItem')"
                >{{letData.cellIdx6}}</td>
                <td class="textAlignLeft">年</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_7"
                  align="center"
                  style="width:10%"
                  data-title="月"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx7', '月', 'TextItem')"
                >{{letData.cellIdx7}}</td>
                <td class="textAlignLeft">月</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_8"
                  align="center"
                  style="width:10%"
                  data-title="日"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx8', '日', 'TextItem')"
                >{{letData.cellIdx8}}</td>
                <td class="textAlignLeft">日向你</td>
                <td
                  class="cellInput"
                  id="cell_idx_9"
                  align="center"
                  style="width:15%"
                  data-title="单位"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx9', '单位', 'TextItem')"
                >{{letData.cellIdx9}}</td>
                <td class="textAlignLeft">送达行政处罚决定书</td>
              </tr>
              <tr>
                <td class="textAlignLeft">（</td>
                <td
                  class="cellInput"
                  id="cell_idx_10"
                  align="center"
                  style="width:11%"
                  data-title="文书号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx10', '文书号', 'TextItem')"
                >{{letData.cellIdx10}}</td>
                <td class="textAlignLeft">煤安监</td>
                <td
                  class="cellInput"
                  id="cell_idx_11"
                  align="center"
                  style="width:7%"
                  data-title="文书号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx11', '文书号', 'TextItem')"
                >{{letData.cellIdx11}}</td>
                <td class="textAlignLeft">罚〔</td>
                <td
                  class="cellInput"
                  id="cell_idx_12"
                  align="center"
                  style="width:7%"
                  data-title="文书号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx12', '文书号', 'TextItem')"
                >{{letData.cellIdx12}}</td>
                <td class="textAlignLeft">〕</td>
                <td
                  class="cellInput"
                  id="cell_idx_13"
                  align="center"
                  style="width:7%"
                  data-title="文书号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx13', '文书号', 'TextItem')"
                >{{letData.cellIdx13}}</td>
                <td class="textAlignLeft">号），你</td>
                <td
                  class="cellInput"
                  id="cell_idx_14"
                  align="center"
                  style="width:15%"
                  data-title=""
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx14', '', 'TextItem')"
                >{{letData.cellIdx14}}</td>
                <td class="textAlignLeft">在法定期限内对该</td>
              </tr>
              <tr>
                <td class="textAlignLeft">行政决定未申请行政复议或者提起行政诉讼，也未履行该行政决定。根据《中华人民共和国</td>
              </tr>
              <tr>
                <td class="textAlignLeft">行政强制法》第五十四条规定，现催告你</td>
                <td
                  class="cellInput"
                  id="cell_idx_15"
                  align="center"
                  style="width:15%"
                  data-title=""
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx15', '', 'TextItem')"
                >{{letData.cellIdx15}}</td>
                <td class="textAlignLeft">自收到本催告书之日起十日内，</td>
              </tr>
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_16"
                  style="width:83%"
                  data-title=""
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx16', '', 'TextItem')"
                >{{letData.cellIdx16}}</td>
                <td class="textAlignLeft">。</td>
              </tr>
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;收到本催告书后，你</td>
                <td
                  class="cellInput"
                  id="cell_idx_17"
                  align="center"
                  style="width:15%"
                  data-title=""
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx17', '', 'TextItem')"
                >{{letData.cellIdx17}}</td>
                <td class="textAlignLeft">有权进行陈述、申辩。无正当理由逾期仍不履行行政决定</td>
              </tr>
              <tr>
                <td class="textAlignLeft">的，我</td>
                <td
                  class="cellInput"
                  id="cell_idx_18"
                  align="center"
                  style="width:15%"
                  data-title=""
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx18', '', 'TextItem')"
                >{{letData.cellIdx18}}</td>
                <td class="textAlignLeft">将依法申请人民法院强制执行。</td>
              </tr>
            </table>
            <table height="30"></table>
            <table class="docBody">
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;受送达</td>
                <td
                  class="cellInput"
                  id="cell_idx_19"
                  align="center"
                  style="width:7%"
                  data-title=""
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx19', '', 'TextItem')"
                >{{letData.cellIdx19}}</td>
                <td class="textAlignLeft">（签名）：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_20"
                  align="center"
                  style="width:21%"
                  data-title="签名"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx20', '签名', 'TextItem')"
                >{{letData.cellIdx20}}</td>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;日&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;期：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_21"
                  align="center"
                  style="width:24.6%"
                  data-title="日期"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx21', '日期', 'DateItem')"
                >{{letData.cellIdx21}}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我</td>
                <td
                  class="cellInput"
                  id="cell_idx_22"
                  align="center"
                  style="width:10%"
                  data-title="单位"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx22', '单位', 'TextItem')"
                >{{letData.cellIdx22}}</td>
                <td class="textAlignLeft">地址：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_23"
                  align="center"
                  style="width:26%"
                  data-title="地址"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx23', '地址', 'TextItem')"
                >{{letData.cellIdx23}}</td>
                <td class="textAlignLeft">&nbsp;&nbsp;邮政编码：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_24"
                  align="center"
                  style="width:24.8%"
                  data-title="邮政编码"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx24', '邮政编码', 'TextItem')"
                >{{letData.cellIdx24}}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我</td>
                <td
                  class="cellInput"
                  id="cell_idx_25"
                  align="center"
                  style="width:10%"
                  data-title="单位"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx25', '单位', 'TextItem')"
                >{{letData.cellIdx25}}</td>
                <td class="textAlignLeft">联系人：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_26"
                  align="center"
                  style="width:24%"
                  data-title="联系人"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx26', '联系人', 'TextItem')"
                >{{letData.cellIdx26}}</td>
                <td class="textAlignLeft">&nbsp;&nbsp;联系电话：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_27"
                  align="center"
                  style="width:24.8%"
                  data-title="联系电话"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx27', '联系电话', 'TextItem')"
                >{{letData.cellIdx27}}</td>
              </tr>
            </table>
            <table height="90"></table>

            <table class="docBody">
              <tr>
                <td class="cellInput" id="cell_idx_28" align="right" style="width:95%">{{letData.cellIdx28}}</td>
              </tr>
            </table>
            <table class="docBody">
              <td class="cellInput" style="width:55%"></td>
              <td
                class="cellInput"
                id="cell_idx_29"
                align="center"
                style="width:10%"
                data-title="年"
                data-type="text"
                data-src
                @click="commandFill('cellIdx29', '年', 'TextItem')"
              >{{letData.cellIdx29}}</td>
              <td class="textAlignLeft">年</td>
              <td
                class="cellInput"
                id="cell_idx_30"
                align="center"
                style="width:10%"
                data-title="月"
                data-type="text"
                data-src
                @click="commandFill('cellIdx30', '月', 'TextItem')"
              >{{letData.cellIdx30}}</td>
              <td class="textAlignLeft">月</td>
              <td
                class="cellInput"
                id="cell_idx_31"
                align="center"
                style="width:10%"
                data-title="日"
                data-type="text"
                data-src
                @click="commandFill('cellIdx31', '日', 'TextItem')"
              >{{letData.cellIdx31}}</td>
              <td class="textAlignLeft">日</td>
            </table>
            <table height="60"></table>

            <table class="docBody">
              <hr />
              <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;备注：本文书一式两份，一份送被催告</td>
              <td class="cellInput" id="cell_idx_32" align="center" style="width:10%">{{letData.cellIdx32}}</td>
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
  name: "Let208",
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
      const db = new GoDB(this.$store.state.DBName);
      const corpBase = db.table("corpBase");
      //查询符合条件的记录
      const corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      const wkPaper = db.table("wkPaper");
      const caseId = this.corpData.caseId;
      const checkPaper = await wkPaper.findAll((item) => {
        return (
          item.caseId === caseId && item.paperType === this.docData.docTypeNo && item.delFlag !== '1'
        );
      });
      if (checkPaper.length > 0) {
        // 回显
        this.letData = JSON.parse(checkPaper[0].paperContent);
        this.editData = checkPaper[0];
      } else {
        // 创建初始版本
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
          cellIdx4: null, // 煤矿单位
          cellIdx5: null, // 单位
          cellIdx6: null, // 年
          cellIdx7: null, // 月
          cellIdx8: null, // 日
          cellIdx9: null, // 单位
          cellIdx10: null, // 文书号
          cellIdx11: null, // 文书号
          cellIdx12: null, // 文书号
          cellIdx13: null, // 文书号
          cellIdx14: null, // 单位/个人
          cellIdx15: null, // 单位/个人
          cellIdx16: null, // 缴纳罚款
          cellIdx17: null, //  单位/个人
          cellIdx18: null, // 单位
          cellIdx19: null, // 单位/个人
          cellIdx20: null, // 签名
          cellIdx21: null, // 日期
          cellIdx22: null, // 单位
          cellIdx23: null, // 地址
          cellIdx24: null, // 邮政编码
          cellIdx25: null, // 单位
          cellIdx26: null, // 联系人
          cellIdx27: null, // 联系电话
          cellIdx28: null, //
          cellIdx29: null, // 年
          cellIdx30: null, // 月
          cellIdx31: null, // 日
          cellIdx32: null, // 单位/个人
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