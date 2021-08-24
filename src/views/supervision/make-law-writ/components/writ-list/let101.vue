<!-- 现场检查 一般检查 现场检查记录 1 -->
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
            <table style="border:solid 0 #000;" class="docBody">
              <tr>
                <td class="textAlignLeft">被检查单位：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_0"
                  style="width:85.6%"
                  data-title="被检查单位"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx0', '被检查单位：', 'TextItem')"
                >{{letData.cellIdx0}}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">检查时间：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_1"
                  style="width:88%"
                  data-title="检查时间"
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx1', '检查时间：', 'DateItem')"
                >{{letData.cellIdx1}}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">采矿许可证证号：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_3"
                  style="width:40%"
                  data-title="采矿许可证"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx3', '采矿许可证', 'TextItem')"
                >{{letData.cellIdx3}}</td>
                <td class="textAlignLeft">有效期：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_4"
                  style="width:33%"
                  data-title="有效期"
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx4', '有效期：', 'TextItem')"
                >{{letData.cellIdx4}}</td>
              </tr>
              <tr>
                <td class="textAlignCenter">安全生产许可证证号：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_5"
                  style="width:36%"
                  data-title="安全生产许可证"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx5', '安全生产许可证', 'TextItem')"
                >{{letData.cellIdx5}}</td>
                <td class="textAlignLeft">有效期：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_6"
                  style="width: 32.5%"
                  data-title="采矿许可证"
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx6', '有效期', 'TextItem')"
                >{{letData.cellIdx6}}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">统一社会信用代码：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_7"
                  style="width:79.5%"
                  data-title="统一社会信用代码"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx7', '统一社会信用代码', 'TextItem')"
                >{{letData.cellIdx7}}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">主要负责人：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_8"
                  style="width:30%"
                  data-title="主要负责人"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx8', '主要负责人', 'TextItem')"
                >{{letData.cellIdx8}}</td>
                <td class="textAlignCenter">联系电话：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_9"
                  style="width:45%"
                  data-title="联系电话"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx9', '联系电话', 'TextItem')"
                >{{letData.cellIdx9}}</td>
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
                  @click="commandFill('cellIdx10', '检查地点', 'TextItem')"
                >{{letData.cellIdx10}}</td>
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
                  @click="commandFill('cellIdx11', '检查人', 'TextItem')"
                >{{letData.cellIdx11}}</td>
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
                  @click="commandFill('cellIdx12', '记录人', 'TextItem')"
                >{{letData.cellIdx12}}</td>
                <td class="textAlignCenter">陪同检察人员：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_13"
                  style="width:38%"
                  data-title="陪同检察人员"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx13', '陪同检察人员', 'TextItem')"
                >{{letData.cellIdx13}}</td>
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
              @click="commandFill('cellIdx14', '检查情况', 'DangerTableItem')"
            >
              <div v-if="letData.cellIdx14 && letData.cellIdx14.length > 0">
                <p class="show-area-item-p">
                  <span style="padding: 7px;">{{ letData.cellIdx14 }}</span>
                </p>
              </div>
              <div v-else>
                <p class="show-area-item-p">
                  &nbsp;
                </p>
                <p class="show-area-item-p">
                  &nbsp;
                </p>
              </div>
            </div>
            <table style="border:solid 0 #000;" class="docBody">
              <tr>
                <td class="textAlignLeft">被检查单位负责人意见：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_15"
                  style="width:20%"
                  data-title="被检查单位负责人意见"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx15', '被检查单位负责人意见：', 'TextItem')"
                >{{letData.cellIdx15}}</td>
                <td class="textAlignCenter">单位负责人签名:</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_16"
                  style="width:10%"
                  data-title="签名"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx16', '签名:', 'TextItem')"
                >{{letData.cellIdx16}}</td>
                <td class="textAlignCenter">日期:</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_17"
                  style="width:15%"
                  data-title="日期"
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx17', '日期:', 'DateItem')"
                >{{letData.cellIdx17}}</td>
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
  name: "Let101",
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
      options: {
        cellIdx14: {
          page: '1', // 用于在隐患项保存，做数据处理
          showBaseInfor: true, // 用于区分是否展示基本情况大文本输入
          showSelectDangerBtn: true // 用于区分是否可以选择隐患项
        }
      },
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
          cellIdx1: null, // 检查时间
          cellIdx3: null, // 采矿许可证
          cellIdx4: null, // 有效期
          cellIdx5: null, // 安全生产许可证
          cellIdx6: null, // 有效期
          cellIdx7: null, // 统一社会信用代码
          cellIdx8: null, // 主要负责人
          cellIdx9: null, // 联系电话
          cellIdx10: null, // 检查地点
          cellIdx11: null, // 检查人
          cellIdx12: null, // 记录人
          cellIdx13: null, // 陪同检察人员
          cellIdx14: null, // 检查情况
          cellIdx15: null, // 被检查单位负责人意见
          cellIdx16: null, // 单位负责人签名
          cellIdx17: null, // 日期
          dangerItemObject: {
            baseInfor: null,
            tableData: [],
            selectedIdList: [],
            dangerItemDetail: {
              itemContent: null, // 违法行为描述
              confirmClause: null, // 违法认定法条
              onsiteDesc: null, // 现场处理决定
              onsiteBasis: null, // 现场处理依据
              onsiteType: null, // 现场处理决定类型
              headingFace: null, // 掘进工作面
              deviceNum: null, // 设备台数
              coalingFace: null, // 采煤工作面
              penaltyDesc: null, // 行政处罚决定
              penaltyDescFine: null, // 行政处罚决定罚金
              penaltyBasis: null, // 行政处罚依据
              isSerious: false, // 是否重大隐患
              isReview: false, // 是否复查
              reviewDate: null, // 复查日期
            }
          }, // 隐患项大表
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
        if (key === 'cellIdx14') {
          // 隐患项时对应letData中的dangerItemObject
          dataKey = 'dangerItemObject'
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