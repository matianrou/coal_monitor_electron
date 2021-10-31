<!-- 卷内目录 -->
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
            <div class="stdRowH" id="cell_idx_0"></div>
            <div class="textAlignCenter formHeader3" style="font-size:30px">卷 内 目 录</div>
            <div class="halfRowH"></div>
            <table class="docBody mutiLine" style="border:solid 1px #000;">
              <tr>
                <td style="width:15mm;" class="textAlignCenter cellBottomLine cellRightLine">序号</td>
                <td style="width:90mm;" class="textAlignCenter cellBottomLine cellRightLine">文件名称及编号</td>
                <td style="width:30mm;" class="textAlignCenter cellBottomLine cellRightLine">日期</td>
                <td style="width:20mm;" class="textAlignCenter cellBottomLine cellRightLine">页号</td>
                <td style="width:35mm;" class="textAlignCenter cellBottomLine">备注</td>
              </tr>
              <tr>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_10"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_11"
                  onclick="host.commandFill(this.id,'checked','选择文书','catalog')"
                >选择文书...</td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_12"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_13"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_14"
                ></td>
              </tr>
              <tr>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_20"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_21"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_22"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_23"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_24"
                ></td>
              </tr>
              <tr>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_30"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_31"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_32"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_33"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_34"
                ></td>
              </tr>
              <tr>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_40"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_41"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_42"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_43"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_44"
                ></td>
              </tr>
              <tr>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_50"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_51"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_52"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_53"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_54"
                ></td>
              </tr>
              <tr>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_60"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_61"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_62"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_63"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_64"
                ></td>
              </tr>
              <tr>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_70"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_71"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_72"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_73"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_74"
                ></td>
              </tr>
              <tr>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_80"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_81"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_82"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_83"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_84"
                ></td>
              </tr>
              <tr>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_90"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_91"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_92"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_93"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_94"
                ></td>
              </tr>
              <tr>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_100"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_101"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_102"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_103"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_104"
                ></td>
              </tr>
              <tr>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_110"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_111"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_112"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_113"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_114"
                ></td>
              </tr>
              <tr>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_120"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_121"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_122"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_123"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_124"
                ></td>
              </tr>
              <tr>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_130"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_131"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_132"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_133"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_134"
                ></td>
              </tr>
              <tr>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_140"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_141"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_142"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_143"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_144"
                ></td>
              </tr>
              <tr>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_150"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_151"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_152"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_153"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_154"
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
import letMain from "@/views/make-law-writ/components/let-main.vue";
import GoDB from "@/utils/godb.min.js";
export default {
  name: "Let405",
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
      const db = new GoDB(this.$store.state.DBName);
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
          item.caseId === caseId && item.paperType === this.docData.docTypeNo && item.delFlag !== '1'
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