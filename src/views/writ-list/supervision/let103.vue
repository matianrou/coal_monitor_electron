<!-- 现场检查 一般检查 责令限期整改指令书 暂不用-->
<template>
  <div style="width: 100%; height: 100%;">
    <let-main
      ref="letMain"
      :corp-data="corpData"
      :doc-data="docData"
      :let-data="letData"
      :paper-data="paperData"
      @go-back="goBack"
    >
      <div slot="left">
        <div class="page page-sizeA4">
          <div>
            <div class="stdRowH"></div>
            <div class="textAlignCenter formHeader1">安全生产行政执法文书</div>
            <div class="textAlignCenter formHeader2">责令限期整改指令书</div>
            <table style="width:390px;" class="docTop">
              <tr>
                <td
                  class="cellInput textAlignCenter"
                  id="cell_idx_0"
                  @click="commandFill('cellIdx0', '', 'TextItem')"

                >{{letData.cellIdx0}}（[SHORTNAME]）应急责改〔[YEAR]〕[DOCNUMBER]号</td>
              </tr>
            </table>
            <div class="stdRowH"></div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  style="width:320px"
                  id="cell_idx_1"
                  data-title="被检查单位"
                  data-type="text"
                  data-src
                  data-size="30"
                  @click="commandFill('cellIdx1', '被检查单位', 'TextItem')"
                >{{letData.cellIdx1}}</td>
                <td>：</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                 <td style="width:5%"></td>

                <td>经查，你单位存在下列问题：</td>
              </tr>
            </table>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              id="cell_idx_2"
              data-name="ILLEGAL_BEHAVIOR"
              @click="commandFill('cellIdx2', '', 'TextItem')"
            >{{letData.cellIdx2}}</div>
            <!--<table class="docBody">
        <tr>
            <td>（此栏不够，可另附页）</td>
        </tr>
            </table>-->
            <table class="docBody">
              <tr>
                <td style="width:34px;">&nbsp;</td>
                <td style="width:150px;">现责令你单位对上述</td>
                <td
                  style="width:100px;"
                  class="cellInput cellBottomLine textAlignCenter"
                  id="cell_idx_3"
                  data-title="问题项数"
                  data-type="text"
                  data-src
                  data-size="6"
                  @click="commandFill('cellIdx3', '问题项数', 'TextItem')"
                >{{letData.cellIdx3}}</td>
                <td style="width:70px;">项问题于</td>
                <td
                  style="width:180px;"
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_4"
                  data-title="日期"
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx4', '日期', 'TextItem')"
                >
                  <span class="cellYear"></span>年
                  <span class="cellMonth"></span>月
                  <span class="cellDay"></span>日
                </td>
                <td>前整改完毕，达到有关法律</td>
              </tr>
              <tr>
                <td colspan="6">法规规章和标准规定的要求，由此造成事故的，依法追究有关人员的责任。</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td colspan="5">整改期间，你单位应当采取措施，确保安全生产，对安全生产违法行为，将依法予以行政处罚。</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td style="width:34px;">&nbsp;</td>
                <td style="width:300px;">如果不服本指令，可以依法在60日内向</td>
                <td
                  style="width:320px;"
                  class="cellInput cellBottomLine textAlignCenter"
                  id="cell_idx_5"
                  data-title="人民政府"
                  data-type="text"
                  data-src
                  data-size="20"
                  @click="commandFill('cellIdx5', '人民政府', 'TextItem')"
                >{{letData.cellIdx5}}</td>
                <td style="width:106px;">人民政府或者</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td
                  style="width:160px;"
                  class="cellInput cellBottomLine textAlignCenter"
                  id="cell_idx_6"
                  data-title="应急管理单位"
                  data-type="text"
                  data-src
                  data-size="20"
                  @click="commandFill('cellIdx6', '应急管理单位', 'TextItem')"
                >{{letData.cellIdx6}}</td>
                <td style="width:240px;">申请行政复议，或者在6个月内向依法向</td>
                <td
                  style="width:140px;"
                  class="cellInput cellBottomLine textAlignCenter"
                  id="cell_idx_7"
                  data-title="人民法院"
                  data-type="text"
                  data-src
                  data-size="20"
                  @click="commandFill('cellIdx7', '人民法院', 'TextItem')"
                >{{letData.cellIdx7}}</td>
                <td style="width:60px;">人民法院</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td>提起行政诉讼，但本指令不停止执行，法律另有规定的除外。</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td style="width:260px;">安全生产行政执法人员（签名)：</td>
                <td
                  style="width:170px;"
                  class="cellInput cellBottomLine textAlignCenter cellNoPrint"
                  id="cell_idx_8"
                  data-title="执法人员"
                  data-type="text"
                  data-src
                  data-size="20"
                  @click="commandFill('cellIdx8', '执法人员', 'TextItem')"
                >{{letData.cellIdx8}}</td>
                <td style="width:90px;text-align:center;">证号：</td>
                <td
                  style="width:240px;"
                  class="cellInput cellBottomLine textAlignCenter"
                  id="cell_idx_9"
                  data-title="执法证号"
                  data-type="text"
                  data-src
                  data-size="20"
                  @click="commandFill('cellIdx9', '执法证号', 'TextItem')"
                >{{letData.cellIdx9}}</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td
                  class="cellInput cellBottomLine textAlignCenter cellNoPrint"
                  id="cell_idx_10"
                  data-title="执法人员"
                  data-type="text"
                  data-src
                  data-size="20"
                  @click="commandFill('cellIdx10', '执法人员', 'TextItem')"
                >{{letData.cellIdx10}}</td>
                <td style="text-align:center;">证号：</td>
                <td
                  class="cellInput cellBottomLine textAlignCenter"
                  id="cell_idx_11"
                  data-title="执法证号"
                  data-type="text"
                  data-src
                  data-size="20"
                  @click="commandFill('cellIdx11', '执法证号', 'TextItem')"
                >{{letData.cellIdx11}}</td>
              </tr>
              <tr>
                <td>被检查单位负责人（签名）：</td>
                <td
                  style="width:150px;"
                  class="cellInput cellBottomLine textAlignCenter cellNoPrint"
                  id="cell_idx_12"
                  data-title="被检查单位负责人"
                  data-type="text"
                  data-src
                  data-size="20"
                  @click="commandFill('cellIdx12', '被检查单位负责人', 'TextItem')"
                >{{letData.cellIdx12}}</td>
                <td colspan="2"></td>
              </tr>
            </table>
            <div class="halfRowH"></div>
            <table class="docBody">
              <tr>
                <td style="width:410px;">&nbsp;</td>
                <td
                  style="width:250px;"
                  class="cellInput textAlignRight"
                  id="cell_idx_13"
                @click="commandFill('cellIdx13', '', 'TextItem')"
                >{{letData.cellIdx13}}</td>
                <td style="width:100px;padding-right:16px;" class="textAlignCenter">（印章）</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td style="width:594px;">&nbsp;</td>
                <td
                  style="padding-right:16px;width:170px;"
                  class="cellInput textAlignCenter cellDateNoPrint"
                  id="cell_idx_14"
                  data-title="日期"
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx14', '日期', 'TextItem')"
                >
                  <span class="cellYear"></span>年
                  <span class="cellMonth"></span>月
                  <span class="cellDay"></span>日
                </td>
                <td style="width:16px;">&nbsp;</td>
              </tr>
            </table>
            <div class="docTextarea cellLine">
              <label style="width: 5%"></label>
              本文书一式两份：一份由应急管理部门备案，一份交被检查单位。
            </div>
          </div>
        </div>
        <div style="height: 20px; width: 100%"></div>
        <!-- 打印42检查方案，另外打印检查分工明细表 -->
        <div class="page-break"></div>
        <!-- 但页面不展示 -->
        <div style="height: 0px; overflow: hidden">
          <div ref="CheckTable" class="page page-sizeA4">
            <div style="padding: 10px 0; text-align: center">
              {{letData.cellIdx12}}检查分工明细表
            </div>
            <div style="width: 19.5cm; margin: 0 auto;">
              <el-table
                :data="letData.CheckTable.tableData"
                width="100%"
                border
              >
                <el-table-column
                  prop="categoryName"
                  label="检查事项"
                  header-align="center"
                  align="left"
                  width="110"
                >
                </el-table-column>
                <el-table-column
                  prop="itemContent"
                  header-align="center"
                  align="left"
                  label="检查内容"
                >
                </el-table-column>
                <el-table-column
                  prop="method"
                  header-align="center"
                  align="left"
                  label="检查主要资料及方法"
                >
                </el-table-column>
                <el-table-column
                  prop="positions"
                  label="检查地点"
                  header-align="center"
                  align="left"
                >
                </el-table-column>
                <el-table-column
                  prop="labor"
                  label="检查分工"
                  header-align="center"
                  align="left"
                >
                </el-table-column>
                <el-table-column
                  prop="condition"
                  label="调整情况"
                  header-align="center"
                  align="left"
                >
                </el-table-column>
              </el-table>
            </div>
          </div>
        </div>
      </div>
    </let-main>
  </div>
</template>

<script>
import letMain from "@/views/make-law-writ/components/let-main.vue";
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
      paperData: {}, // 回显数据
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
      let db = new GoDB(this.$store.state.DBName);
      let corpBase = db.table("corpBase");
      //查询符合条件的记录
      let corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      let wkPaper = db.table("wkPaper");
      let caseId = this.corpData.caseId;
      //查询当前计划是否已做文书
      let checkPaper = await wkPaper.findAll((item) => {
        return (
          item.caseId === caseId && item.paperType === this.docData.docTypeNo && item.delFlag !== '1'
        );
      });
      // 已做文书则展示文书内容，否则创建初始版本
      if (checkPaper.length > 0) {
        // 回显
        this.letData = JSON.parse(checkPaper[0].paperContent);
        this.paperData = checkPaper[0];
      } else {
        // 创建初始版本
        this.letData = {
          cellIdx0: null,
          cellIdx1: corp.corpName ? corp.corpName : null, // 被检查单位
          cellIdx1TypeTextItem: corp.corpName ? corp.corpName : null,
          cellIdx2: null,
          cellIdx3: null, // 问题项数
          cellIdx4: null, // 日期
          cellIdx5: null, // 人民政府
          cellIdx6: null, // 应急管理单位
          cellIdx7: null, // 人民法院
          cellIdx8: null, // 执法人员
          cellIdx9: null, // 执法证号
          cellIdx10: null, // 执法人员
          cellIdx11: null, // 执法证号
          cellIdx12: null, // 被检查单位负责人
          cellIdx13: null,
          cellIdx14: null, // 日期
        };
      }
      await db.close();
    },
    goBack({ page, data }) {
      // 返回选择企业
      this.$emit("go-back", { page, data });
    },
    commandFill(key, title, type) {
      // 判断是否可编辑
      if (this.$refs.letMain.canEdit) {
        // 文书各个字段点击打开左侧弹出编辑窗口
        let dataKey = `${key}`;
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