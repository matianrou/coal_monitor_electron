<!-- 行政强制 行政复议 不予受理行政复议申请决定书 -->
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
            <div class="textAlignCenter formHeader3">不 予 受 理 行 政 复 议 申 请 决 定 书</div>
            <div class="stdRowH"></div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_0"
                  align="right"
                  style="width:55%"
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
                <td class="textAlignLeft cellBottomLine">复不受〔</td>
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
                <td class="cellInput cellBottomLine" id="cell_idx_4" style="width:62%">{{letData.cellIdx4}}</td>
                <td class="textAlignLeft">:</td>
              </tr>
            </table>
            <table style="border:solid 0px #000;" class="docBody">
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你</td>
                <td
                  class="cellInput"
                  id="cell_idx_5"
                  align="center"
                  style="width:10%"
                  data-title="案由"
                  data-type="textarea"
                  data-src
                  @click="commandFill('cellIdx5', '案由', 'TextItem')"
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
                <td class="textAlignLeft">日</td>
                <td class="textAlignLeft">&nbsp;&nbsp;向我局提出行政复议申请，经审查</td>
              </tr>
              <tr>
                <td class="textAlignLeft">不符合以下第</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_9"
                  align="center"
                  style="width:12%"
                  data-title="案由"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx9', '案由', 'TextItem')"
                >{{letData.cellIdx9}}</td>
                <td class="textAlignLeft">项情形：</td>
              </tr>
              <tr>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（一）有明确的申请人和符合规定的被申请人；</td>
              </tr>
              <tr>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（二）申请人与具体行政行为有利害关系；</td>
              </tr>
              <tr>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（三）有具体的行政复议请求和理由；</td>
              </tr>
              <tr>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（四）在法定申请期限内提出；</td>
              </tr>
              <tr>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（五）属于行政复议法规定的行政复议范围；</td>
              </tr>
              <tr>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（六）属于收到行政复议申请的行政复议机构的职责范围；</td>
              </tr>
              <tr>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（七）其他行政复议机关尚未受理同一行政复议申请，人民法院尚未受理同一主</td>
              </tr>
              <tr>
                <td class="textAlignLeft">体就同一事实提起的行政诉讼。</td>
              </tr>
              <tr>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;根据《中华人民共和国行政复议法》第十七条第一款的规定，我局决定不予</td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_10"
                  align="center"
                  style="width:10%"
                  data-title="案由"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx10', '案由', 'TextItem')"
                >{{letData.cellIdx10}}</td>
                <td class="textAlignLeft">的行政复议申请。</td>
              </tr>
              <tr>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如对本不予受理决定不服，可以自收到本通知之日起十五日内依法向</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_11"
                  contenteditable="true"
                  align="center"
                  style="width:15%"
                  data-title="案由"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx11', '案由', 'TextItem')"
                >{{letData.cellIdx11}}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">人民法院提起行政诉讼。</td>
              </tr>
            </table>
            <table height="30"></table>
            <table class="docBody">
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;签收人（签名）：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_12"
                  align="center"
                  style="width:27%"
                  data-title="签收人（签名）"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx12', '签收人（签名）', 'TextItem')"
                >{{letData.cellIdx12}}</td>
                <td class="textAlignLeft">&nbsp;&nbsp;日&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;期：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_13"
                  align="center"
                  style="width:25%"
                  data-title="日期"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx13', '日期', 'DateItem')"
                >{{letData.cellIdx13}}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我局地址：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_14"
                  align="center"
                  style="width:33%"
                  data-title="我局地址"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx14', '我局地址', 'TextItem')"
                >{{letData.cellIdx14}}</td>
                <td class="textAlignLeft">&nbsp;&nbsp;邮政编码：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_15"
                  align="center"
                  style="width:24.8%"
                  data-title="邮政编码"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx15', '邮政编码', 'TextItem')"
                >{{letData.cellIdx15}}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我局联系人：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_16"
                  align="center"
                  style="width:31%"
                  data-title="我局联系人"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx16', '我局联系人', 'TextItem')"
                >{{letData.cellIdx16}}</td>
                <td class="textAlignLeft">&nbsp;&nbsp;联系电话：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_17"
                  align="center"
                  style="width:24.8%"
                  data-title="联系电话"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx17', '联系电话', 'TextItem')"
                >{{letData.cellIdx17}}</td>
              </tr>
            </table>
            <table height="60"></table>
            <table class="docBody">
              <tr>
                <td class="cellInput" id="cell_idx_18" align="right" style="width:95%">{{letData.cellIdx18}}</td>
              </tr>
            </table>
            <table class="docBody">
              <td class="cellInput" style="width:55%"></td>
              <td
                class="cellInput cellBottomLine"
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
                class="cellInput cellBottomLine"
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
                class="cellInput cellBottomLine"
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
              <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;备注：本文书一式两份，一份交申请行政复议</td>
              <td class="cellInput" id="cell_idx_22" align="center" style="width:8%">{{letData.cellIdx22}}</td>
              <td class="textAlignLeft">，一份存档。</td>
            </table>
          </div>
        </div>
      </div>
    </let-main>
  </div>
</template>

<script>
import letMain from "@/views/make-law-writ/components/writ-list/components/let-main";
import GoDB from "@/utils/godb.min.js";
export default {
  name: "Let303",
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
      const db = new GoDB("CoalDB");
      const corpBase = db.table("corpBase");
      //查询符合条件的记录
      const corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      const wkPaper = db.table("wkPaper");
      const caseId = this.corpData.caseId;
      const checkPaper = await wkPaper.findAll((item) => {
        return (
          item.caseId === caseId && item.paperType === this.docData.docTypeNo
        );
      });
      if (checkPaper.length > 0) {
        // 回显
        this.letData = JSON.parse(checkPaper[0].paperContent);
        this.editData = checkPaper[0];
      } else {
        // 创建初始版本
        this.letData = {
          cellIdx0: null, // 文书号
          cellIdx1: null, // 文书号
          cellIdx2: null, // 文书号
          cellIdx3: null, // 文书号
          cellIdx4: null, //
          cellIdx5: null, // 案由
          cellIdx6: null, // 年
          cellIdx7: null, // 月
          cellIdx8: null, // 日
          cellIdx9: null, // 案由
          cellIdx10: null, // 案由
          cellIdx11: null, // 案由
          cellIdx12: null, // 签收人（签名）
          cellIdx13: null, // 日期
          cellIdx14: null, // 我局地址
          cellIdx15: null, // 邮政编码
          cellIdx16: null, // 我局联系人
          cellIdx17: null, // 联系电话
          cellIdx18: null, //
          cellIdx19: null, // 年
          cellIdx20: null, // 月
          cellIdx21: null, // 日
          cellIdx22: null, //
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
@import "@/views/make-law-writ/assets/scss/let";
</style>