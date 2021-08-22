<!-- 现场检查 一般检查 现场检查记录 -->
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
            <div class="textAlignCenter formHeader1">现场检查记录</div>
            <div class="stdRowH"></div>
            <table style="border:solid 0px #000;" class="docBody">
              <tr>
                <td class="textAlignLeft">被检查单位：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_0"
                  style="width:85.6%"
                  data-title="被检查单位"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                >{corp_name}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">检查时间：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_1"
                  style="width:87.8%"
                  data-title="检查时间"
                  data-type="date"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
              </tr>
              <tr>
                <td class="textAlignLeft">采矿许可证：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_3"
                  style="width:40%"
                  data-title="采矿许可证"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignLeft">有效期：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_4"
                  style="width:40%"
                  data-title="有效期"
                  data-type="date"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
              </tr>
              <tr>
                <td class="textAlignCenter">安全生产许可证：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_5"
                  style="width:28%"
                  data-title="安全生产许可证"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignLeft">有效期：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_6"
                  style="width:40%"
                  data-title="采矿许可证"
                  data-type="date"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
              </tr>
              <tr>
                <td class="textAlignLeft">统一社会信用代码：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_7"
                  style="width:79%"
                  data-title="统一社会信用代码"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
              </tr>
              <tr>
                <td class="textAlignLeft">主要负责人：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_8"
                  style="width:28%"
                  data-title="主要负责人"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignCenter">联系电话：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_9"
                  style="width:38%"
                  data-title="联系电话"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
              </tr>
              <tr>
                <td class="textAlignLeft">检查地点（路线）：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_10"
                  style="width:79%"
                  data-title="检查地点（路线）"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
              </tr>
              <tr>
                <td class="textAlignLeft">检查人（签名）：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_11"
                  style="width:81.4%"
                  data-title="检查人（签名）"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
              </tr>
              <tr>
                <td class="textAlignLeft">记录人（签名）：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_12"
                  style="width:28%"
                  data-title="记录人（签名）"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignCenter">陪同检察人员：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_13"
                  style="width:38%"
                  data-title="陪同检察人员"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
              </tr>
              <tr>
                <td class="textAlignLeft">检查情况：</td>
                <td style="width:88.3%">&nbsp;</td>
              </tr>
            </table>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              id="cell_idx_14"
              data-title="检查情况"
              data-type="textarea"
              data-src
              onclick="commandFill(this.id)"
            >
              <p
                style="width:100%; height:auto; word-wrap:break-word;word-wrap: break-all; overflow: hidden;"
              >&nbsp;</p>
              <p
                style="width: 100%; height: auto; word-wrap: break-word; word-wrap: break-all; overflow: hidden;"
              >&nbsp;</p>
              <p
                style="width: 100%; height: auto; word-wrap: break-word; word-wrap: break-all; overflow: hidden;"
              >&nbsp;</p>
            </div>

            <table style="border:solid 0px #000;" class="docBody">
              <tr>
                <td class="textAlignLeft">被检查单位负责人意见：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_15"
                  style="width:20%"
                  data-title="被检查单位负责人意见"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignCenter">单位负责人签名:</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_16"
                  style="width:10%"
                  data-title="签名"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignCenter">日期:</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_17"
                  style="width:15%"
                  data-title="日期"
                  data-type="date"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
              </tr>
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
export default {
  name: "Let100",
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
        this.letData = {
          cellIdx0: corp.corpName ? corp.corpName : null, // 被检查单位
          cellIdx0TypeTextItem: corp.corpName ? corp.corpName : null,
          cellIdx1: null, // 监察类型或方式
          cellIdx2: null, // 检查时间
          cellIdx3: sSummary ? sSummary : null, // 煤矿概况
          cellIdx3TypeTextareaItem: sSummary ? sSummary : null, // 煤矿概况
          cellIdx4: null, // 检查地点
          cellIdx5: [], // 检查分工明细表
          cellIdx5TypeCheckTableItem: {}, // 检查分工明细表
          cellIdx6: corpOther, // 其他事项
          cellIdx6TypeTextItem: corpOther, // 其他事项
          cellIdx8: null, // 编制人
          cellIdx9: null, // 编制日期
          cellIdx10: null, // 审批人
          cellIdx11: null, // 审批日期
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
@import "../../assets/scss/let";
</style>