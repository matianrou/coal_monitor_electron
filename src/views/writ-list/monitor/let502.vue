<!-- 意见建议书 加强和改善安全管理意见书议书  -->
<template>
  <div style="width: 100%; height: 100%">
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
              国 家 矿 山 安 全 监 察
              <br />
            </div>
            <div class="textAlignCenter formHeader3">
              加强和改善安全管理意见书
            </div>
            <div class="docTextLine paper-number-div">
              <div>
                <span @click="commandFill('cellIdx0', '', 'TextItem')">{{
                  letData.cellIdx0 ? letData.cellIdx0 : "（编辑）"
                }}</span>
                <label>矿安监</label>
                <span @click="commandFill('cellIdx1', '', 'TextItem')">{{
                  letData.cellIdx1 ? letData.cellIdx1 : "（编辑）"
                }}</span>
                <label>管意〔</label>
                <span @click="commandFill('cellIdx2', '', 'TextItem')">{{
                  letData.cellIdx2 ? letData.cellIdx2 : "（编辑）"
                }}</span>
                <label>〕</label>
                <span @click="commandFill('cellIdx3', '', 'TextItem')">{{
                  letData.cellIdx3 ? letData.cellIdx3 : "（编辑）"
                }}</span>
                <label>号</label>
              </div>
            </div>
            <div class="docTextLine paper-number-div">
              <div>
                <label>签发人：</label>
                <span
                  class="line"
                  @click="commandFill('cellIdx4', '签发人', 'TextItem')"
                  >{{
                    letData.cellIdx4 ? letData.cellIdx4 : "（点击编辑）"
                  }}</span
                >
              </div>
            </div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_5"
                  style="width: 62%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx5', '', 'TextItem')"
                >
                  {{ letData.cellIdx5 }}
                </td>
                <td class="textAlignLeft">:</td>
              </tr>
            </table>
            <div class="docTextarea">
              <label style="width: 5%"></label>
              经我
              <span class="no-underline" @click="commandFill('cellIdx6', '局', 'TextItem')">{{
                letData.cellIdx6 ? letData.cellIdx6 : ""
              }}</span>
              检查，你单位在煤矿安全管理工作中，存在下列问题（见附件），提出加强和改善煤矿安全管理的如下意见（见附件）。
            </div>
            <div class="docTextarea">
              <label style="width: 5%"></label>
             请将处理意见于
              <span @click="commandFill('cellIdx7', '年', 'TextItem')">{{
                letData.cellIdx8 ? letData.cellIdx8 : "（XX）"
              }}</span>
              年
              <span @click="commandFill('cellIdx8', '月', 'TextItem')">{{
                letData.cellIdx8 ? letData.cellIdx8 : "（XX）"
              }}</span>
              月
              <span @click="commandFill('cellIsdx9', '日', 'TextItem')">{{
                letData.cellIdx9 ? letData.cellIdx9 : "（XX）"
              }}</span>
              日前函告我
              <span @click="commandFill('cellIdx10', '局', 'TextItem')">{{
                letData.cellIdx10 ? letData.cellIdx10 : ""
              }}</span>
            </div>
            <div class="docTextLine">
              <label style="width: 5%"></label>
              <label>附件：</label>
              <div
                class="no-line-div"
                @click="
                  commandFill(
                    'cellIdx18',
                    '加强和改善安全管理意见',
                    'CheckTableItem'
                  )
                "
              >
                加强和改善安全管理意见
              </div>
            </div>
            <table height="60"></table>
            <div class="docTextLine">
              <label>送件人（签名)：</label>
              <div
                class="line-div"
                @click="
                  commandFill('cellIdx11', '送件人（签名)', 'TextItem')
                "
              >
                {{ letData.cellIdx11 ? letData.cellIdx11 : "（编辑）" }}
              </div>
              <label>日期：</label>
              <div
                class="line-div"
                @click="commandFill('cellIdx12', '日期:', 'DateItem')"
              >
                {{ letData.cellIdx12 ? letData.cellIdx12 : "（编辑）" }}
              </div>
            </div>
            <div class="docTextLine">
              <label>收件人（签名)：</label>
              <div
                class="line-div"
                @click="commandFill('cellIdx13', '收件人（签名)', 'TextItem')"
              >
                {{ letData.cellIdx13 ? letData.cellIdx13 : "（编辑）" }}
              </div>
              <label>日期：</label>
              <div
                class="line-div"
                @click="commandFill('cellIdx14', '日期:', 'DateItem')"
              >
                {{ letData.cellIdx14 ? letData.cellIdx14 : "（编辑）" }}
              </div>
            </div>
            <div class="docTextarea">
              <span class="no-line"
                >&nbsp;&nbsp;&nbsp;&nbsp;报 送：</span
              >
              <span
                @click="commandFill('cellIdx15', '报送', 'TextItem')"
                >{{
                  letData.cellIdx15 ? letData.cellIdx15 : "（点击编辑）"
                }}</span
              >
              <div class="line"></div>
            </div>
            <table height="30"></table>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_17"
                  align="right"
                  style="width: 95%"
                  @click="commandFill('cellIdx16', '', 'TextItem')"
                >
                  {{ letData.cellIdx16 ? letData.cellIdx16 : "（点击编辑）" }}
                </td>
              </tr>
                <tr>
                <td
                  class="cellInput"
                  id="cell_idx_18"
                  align="right"
                  style="width: 95%"
                  data-title
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx18', '日期', 'DateItem')"
                >
                  {{ letData.cellIdx17 ? letData.cellIdx17 : "（点击编辑）" }}
                </td>
              </tr>
            </table>
            <table class="cellLine">
              <td class="textAlignLeft">
                &nbsp;&nbsp;&nbsp;&nbsp;备注：本文书一式三份，一份主送煤矿上级企业，一份报送国家矿山安全监察局，一份存档。
              </td>
            </table>
          </div>
        </div>
      </div>
    </let-main>
  </div>
</template>

<script>
import GoDB from "@/utils/godb.min.js";
import associationSelectPaper from "@/components/association-select-paper";
export default {
  name: "Let502",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {},
      options: {},
    };
  },
  methods: {
    async initLetData(selectedPaper) {
      this.letData = {
        cellIdx0: null, // 文书号
        cellIdx1: null, // 文书号
        cellIdx2: null, // 文书号
        cellIdx3: null, // 文书号
        cellIdx4: null, // 签发人
        cellIdx5: null, // 单位
        cellIdx6: null, // 经我XX检查，
        cellIdx7: null, // XX在矿山安全监督管理工作中
        cellIdx8: null, // 年
        cellIdx9: null, // 月
        cellIdx10: null, // 日
        cellIdx11: null, // 局
        cellIdx12: null, // 月
        cellIdx13: null, // 日
        cellIdx14: null, // 承办人（签名）
        cellIdx15: null, // 档号
        cellIdx16: null, // 保管期限
        cellIdx17: [], // 编辑目录
        volumesMenuTable: {
          tableData: [],
        },
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
        if (key === "cellIdx17") {
          this.options[key] = {
            canEdit: true,
            page: "15",
          };
          dataKey = "volumesMenuTable";
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