<!-- 行政处罚 案件结案 案件结案报告 -->
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
            <div class="textAlignCenter formHeader1">案 件 结 案 报 告</div>
            <div class="stdRowH"></div>
            <table style="border:solid 0px #000;" class="docBody">
              <tr>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;主要内容：案由；行政相对人基本情况；案发时间及地点；主要违法事实、立案调查及审理</td>
              </tr>
              <tr>
                <td class="textAlignLeft">情况；行政处罚执行情况；结案理由。</td>
              </tr>
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;承办人意见：</td>
                <!-- <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_0"
                  align="center"
                  style="width:18%"
                  data-title="承办人意见"
                  data-type="textarea"
                  data-src
                  @click="commandFill('cellIdx0', '承办人意见', 'TextItem')"
                >{{letData.cellIdx0}}</td> -->
                <div
                  style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
                  class="cellInput mutiLineArea"
                  id="cell_idx_0"
                  data-title="承办人意见"
                  data-type="textarea"
                  data-src
                  @click="commandFill('cellIdx0', '承办人意见', 'TextareaItem')">
                  <p class="show-area-item-p">
                    <span style="padding: 7px;">{{ letData.cellIdx0 }}</span>
                  </p>
                </div>
                <td class="textAlignLeft">签名：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_1"
                  align="center"
                  style="width:18%"
                  data-title="签名"
                  data-type="textarea"
                  data-src
                  @click="commandFill('cellIdx1', '签名', 'TextItem')"
                >{{letData.cellIdx1}}</td>
                <td class="textAlignLeft">日期：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_2"
                  align="center"
                  style="width:10%"
                  data-title="年"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx2', '年', 'TextItem')"
                >{{letData.cellIdx2}}</td>
                <td class="textAlignLeft">年</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_3"
                  align="center"
                  style="width:10%"
                  data-title="月"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx3', '月', 'TextItem')"
                >{{letData.cellIdx3}}</td>
                <td class="textAlignLeft">月</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_4"
                  align="center"
                  style="width:10%"
                  data-title="日"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx4', '日', 'TextItem')"
                >{{letData.cellIdx4}}</td>
                <td class="textAlignLeft">日</td>
              </tr>
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;审批人意见：</td>
                <!-- <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_5"
                  align="center"
                  style="width:18%"
                  data-title="审批人意见"
                  data-type="textarea"
                  data-src
                  @click="commandFill('cellIdx5', '审批人意见', 'TextItem')"
                >{{letData.cellIdx5}}</td> -->
                <div
                  style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
                  class="cellInput mutiLineArea"
                  id="cell_idx_5"
                  data-title="审批人意见"
                  data-type="textarea"
                  data-src
                  @click="commandFill('cellIdx5', '审批人意见', 'TextareaItem')">
                  <p class="show-area-item-p">
                    <span style="padding: 7px;">{{ letData.cellIdx5 }}</span>
                  </p>
                </div>
                <td class="textAlignLeft">签名：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_6"
                  align="center"
                  style="width:18%"
                  data-title="签名"
                  data-type="textarea"
                  data-src
                  @click="commandFill('cellIdx6', '签名', 'TextItem')"
                >{{letData.cellIdx6}}</td>
                <td class="textAlignLeft">日期：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_7"
                  align="center"
                  style="width:10%"
                  data-title="年"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx7', '年', 'TextItem')"
                >{{letData.cellIdx7}}</td>
                <td class="textAlignLeft">年</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_8"
                  align="center"
                  style="width:10%"
                  data-title="月"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx8', '月', 'TextItem')"
                >{{letData.cellIdx8}}</td>
                <td class="textAlignLeft">月</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_9"
                  align="center"
                  style="width:10%"
                  data-title="日"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx9', '日', 'TextItem')"
                >{{letData.cellIdx9}}</td>
                <td class="textAlignLeft">日</td>
              </tr>
            </table>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              id="cell_idx_10"
              data-title="案由"
              data-type="textarea"
              data-src
              @click="commandFill('cellIdx10', '案由', 'TextareaItem')">
              <p class="show-area-item-p">
                <span style="padding: 7px;">{{ letData.cellIdx10 }}</span>
              </p>
            </div>
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
  name: "Let213",
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
          cellIdx0: null, // 承办人意见
          cellIdx1: null, // 签名
          cellIdx2: null, // 年
          cellIdx3: null, // 月
          cellIdx4: null, // 日
          cellIdx5: null, // 审批人意见
          cellIdx6: null, // 签名
          cellIdx7: null, // 年
          cellIdx8: null, // 月
          cellIdx9: null, // 日
          cellIdx10: null, // 案由
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