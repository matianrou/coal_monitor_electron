<!-- 现场检查 复查 检查方案(复查) -->
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
            <div class="textAlignCenter formHeader1">检 查 方 案</div>
            <div class="stdRowH"></div>
            <table class="docBody">
              <tr>
                <td class="textAlignLeft">一、被检查单位：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_0"
                  style="width:79%"
                  data-title="被检查单位"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx0', '被检查单位', 'TextItem')"
                >{{letData.cellIdx0}}</td>
              </tr>

              <tr>
                <td class="textAlignLeft">二、监察类型或方式：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_1"
                  style="width:74.6%"
                  data-title="监察类型或方式"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx1', '监察类型或方式', 'TextItem')"
                >{{ letData.cellIdx1 }}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">三、检查时间：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_2"
                  style="width:81.3%"
                  data-title="检查时间"
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx2', '检查时间', 'TextItem')"
                >{{ letData.cellIdx2 }}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">四、煤矿概况：</td>
                <td style="width:81.3%"></td>
              </tr>
            </table>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              id="cell_idx_3"
              data-title="煤矿概况"
              data-type="textarea"
              data-src
              @click="commandFill('cellIdx3', '煤矿概况', 'TextareaItem')"
            >
              <p class="show-area-item-p">
                <span style="padding: 7px;">{{ letData.cellIdx3 }}</span>
              </p>
            </div>
            <table class="docBody">
              <tr>
                <td class="textAlignLeft">五、检查地点：</td>
                <td
                  style="width:82%"
                  class="cellInput cellBottomLine oneLine"
                  id="cell_idx_4"
                  data-title="检查地点"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx4', '检查地点', 'TextItem')"
                >{{ letData.cellIdx4 }}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">六、检查的主要内容和分工见明细表</td>
                <td class="cellInput"></td>
              </tr>
              <tr>
                <td class="textAlignLeft">七、其他事项：</td>
                <td
                  style="width:82%"
                  class="cellInput textPaddingLeft cellBottomLine oneLine"
                  id="cell_idx_5"
                  data-title="其他事项"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx5', '其他事项', 'TextItem')"
                >{{ letData.cellIdx5 }}</td>
              </tr>
              <tr>
                <td Sclass="textAlignLeft">附件：</td>
                <td class="cellInput" colspan="3" id="cell_idx_6"></td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td class="textAlignLeft">编制人（签名）：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_7"
                  style="width:35%"
                  data-title="编制人（签名）"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx7', '编制人（签名）', 'TextItem')"
                >{{ letData.cellIdx7 }}</td>
                <td class="textAlignCenter">日期:</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_8"
                  style="width:25%"
                  data-title="日期"
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx8', '日期', 'DateItem')"
                >{{ letData.cellIdx8 }}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">审批人（签名）：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_9"
                  style="width:35%"
                  data-title="审批人（签名）"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx9', '审批人（签名）', 'TextItem')"
                >{{ letData.cellIdx9 }}</td>
                <td class="textAlignCenter">日期:</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_10"
                  style="width:25%"
                  data-title="日期"
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx10', '日期', 'DateItem')"
                >{{ letData.cellIdx10 }}</td>
              </tr>
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
  name: "Let103",
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
          cellIdx0: corp.corpName ? corp.corpName : null, // 被检查单位
          cellIdx0TypeTextItem: corp.corpName ? corp.corpName : null, // 被检查单位
          cellIdx1: null, // 监察类型或方式
          cellIdx2: null, // 检查时间
          cellIdx3: null, // 煤矿概况
          cellIdx4: null, // 检查地点
          cellIdx5: null, // 其他事项
          cellIdx6: null, // 附件
          cellIdx7: null, // 编制人（签名）
          cellIdx8: null, // 日期
          cellIdx9: null, // 审批人（签名）
          cellIdx10: null, // 日期
        };
      }
      await db.close();
    },
    goBack({ page }) {
      // 返回选择企业
      this.$emit("go-back", { page });
    },
    commandFill(key, title, type) {
      // 打开编辑
      this.$refs.letMain.commandFill(key, title, type, this.letData[`${key}Type${type}`], this.options[key])
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/views/make-law-writ/assets/scss/let";
</style>