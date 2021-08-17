<!-- 现场检查 实施检查 抽样取证通知书 -->
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
            <div class="textAlignCenter formHeader3">抽 样 取 证 通 知 书</div>
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
                <td class="textAlignLeft cellBottomLine">抽〔</td>
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
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你单位</td>
                <td
                  style="width:87%"
                  class="cellInput cellBottomLine"
                  id="cell_idx_5"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx5', '', 'TextItem')"
                >{{ letData.cellIdx5 }}</td>
              </tr>
              <tr>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;涉嫌违法违规。根据《中华人民共和国行政处罚法》第三十七条第二款规定，我</td>
                <td
                  class="cellInput"
                  id="cell_idx_6"
                  style="width:15%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx6', '', 'TextItem')"
                >{{ letData.cellIdx6 }}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">决定对你单位的有关证据（详见《抽样取证清单》）采取抽样取证。</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;附件</td>
                <td
                  class="cellInput"
                  id="cell_idx_7"
                  style="width:70%"
                  data-title="附件"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx7', '', '')"
                ></td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;抽样承办人：（签名）</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_8"
                  style="width:59%"
                  data-title="抽样承办人：（签名）"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx8', '抽样承办人：（签名）', 'TextItem')"
                >{{ letData.cellIdx8 }}</td>
              </tr>
              <tr>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;抽样时间：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_9"
                  align="center"
                  style="width:6%"
                  data-title="年"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx9', '年', 'TextItem')"
                >{{ letData.cellIdx9 }}</td>
                <td class="textAlignLeft">年</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_10"
                  align="center"
                  style="width:6%"
                  data-title="月"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx10', '月', 'TextItem')"
                >{{ letData.cellIdx10 }}</td>
                <td class="textAlignLeft">月</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_11"
                  align="center"
                  style="width:6%"
                  data-title="日"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx11', '日', 'TextItem')"
                >{{ letData.cellIdx11 }}</td>
                <td class="textAlignLeft">日</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_12"
                  align="center"
                  style="width:6%"
                  data-title="时"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx12', '时', 'TextItem')"
                >{{ letData.cellIdx12 }}</td>
                <td class="textAlignLeft">时</td>
                <td class="textAlignLeft">&nbsp;&nbsp;抽样地点：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_13"
                  style="width:24.8%"
                  data-title="抽样地点"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx13', '抽样地点', 'TextItem')"
                >{{ letData.cellIdx13 }}</td>
              </tr>
              <tr>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;受送达人（签名）：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_14"
                  style="width:24%"
                  data-title="受送达人（签名）"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx14', '受送达人（签名）', 'TextItem')"
                >{{ letData.cellIdx14 }}</td>
                <td class="textAlignLeft">&nbsp;&nbsp;日&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;期：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_15"
                  style="width:24.6%"
                  data-title="日期"
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx15', '日期', 'DateItem')"
                >{{ letData.cellIdx15 }}</td>
              </tr>
              <tr>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我</td>
                <td
                  class="cellInput"
                  id="cell_idx_16"
                  align="center"
                  style="width:8%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx16', '', 'TextItem')"
                >{{ letData.cellIdx16 }}</td>
                <td class="textAlignLeft">地址：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_17"
                  style="width:27.1%"
                  data-title="地址"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx17', '地址', 'TextItem')"
                >{{ letData.cellIdx17 }}</td>
                <td class="textAlignLeft">&nbsp;&nbsp;邮政编码：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_18"
                  style="width:24.8%"
                  data-title="邮政编码"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx18', '邮政编码', 'TextItem')"
                >{{ letData.cellIdx18 }}</td>
              </tr>
              <tr>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我</td>
                <td
                  class="cellInput"
                  id="cell_idx_19"
                  align="center"
                  style="width:8%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx19', '', 'TextItem')"
                >{{ letData.cellIdx19 }}</td>
                <td class="textAlignLeft">联系人：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_20"
                  style="width:24.9%"
                  data-title="联系人"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx20', '联系人', 'TextItem')"
                >{{ letData.cellIdx20 }}</td>
                <td class="textAlignLeft">&nbsp;&nbsp;联系电话：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_21"
                  style="width:24.8%"
                  data-title="联系电话"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx21', '联系电话', 'TextItem')"
                >{{ letData.cellIdx21 }}</td>
              </tr>
            </table>
            <table height="60"></table>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_22"
                  align="right"
                  style="width:95%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx22', '', 'TextItem')"
                >{{ letData.cellIdx22 }}</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td class="cellInput" style="width:55%"></td>
                <td
                  class="cellInput"
                  id="cell_idx_23"
                  align="center"
                  style="width:45%"
                  data-title="日期"
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx23', '日期', 'DateItem')"
                >{{ letData.cellIdx23 }}</td>
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
import letMain from "@/views/make-law-writ/components/writ-list/components/let-main";
import GoDB from "@/utils/godb.min.js";
export default {
  name: "Let107",
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
        return item.caseId === caseId && item.paperType === this.docData.docTypeNo;
      });
      if (checkPaper.length > 0) {
        // 回显
        this.letData = JSON.parse(checkPaper[0].paperContent);
        this.editData = checkPaper[0];
      } else {
        // 创建初始版本
        this.letData = {
          cellIdx0: null, //
          cellIdx1: null, //
          cellIdx2: null, //
          cellIdx3: null, //
          cellIdx4: corp.corpName ? corp.corpName : null, // corpname
          cellIdx4TypeTextItem: corp.corpName ? corp.corpName : null, // corpname
          cellIdx5: null, //
          cellIdx6: null, //
          cellIdx7: null, //
          cellIdx8: null, // 抽样承办人：（签名）
          cellIdx9: null, // 年
          cellIdx10: null, // 月
          cellIdx11: null, // 日
          cellIdx12: null, // 时
          cellIdx13: null, // 抽样地点
          cellIdx14: null, // 受送达人（签名）
          cellIdx15: null, // 日期
          cellIdx16: null, //
          cellIdx17: null, // 地址
          cellIdx18: null, // 邮政编码
          cellIdx19: null, //
          cellIdx20: null, // 联系人
          cellIdx21: null, // 联系电话
          cellIdx22: null, //
          cellIdx23: null, // 日期
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