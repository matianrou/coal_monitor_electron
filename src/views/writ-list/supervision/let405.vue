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
                  contenteditable="true"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_11"
                  contenteditable="true"
                  onclick="host.commandFill(this.id,'checked','选择文书','catalog')"
                >选择文书...</td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_12"
                  contenteditable="true"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_13"
                  contenteditable="true"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_14"
                  contenteditable="true"
                ></td>
              </tr>
              <tr>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_20"
                  contenteditable="true"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_21"
                  contenteditable="true"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_22"
                  contenteditable="true"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_23"
                  contenteditable="true"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_24"
                  contenteditable="true"
                ></td>
              </tr>
              <tr>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_30"
                  contenteditable="true"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_31"
                  contenteditable="true"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_32"
                  contenteditable="true"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_33"
                  contenteditable="true"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_34"
                  contenteditable="true"
                ></td>
              </tr>
              <tr>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_40"
                  contenteditable="true"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_41"
                  contenteditable="true"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_42"
                  contenteditable="true"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_43"
                  contenteditable="true"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_44"
                  contenteditable="true"
                ></td>
              </tr>
              <tr>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_50"
                  contenteditable="true"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_51"
                  contenteditable="true"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_52"
                  contenteditable="true"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_53"
                  contenteditable="true"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_54"
                  contenteditable="true"
                ></td>
              </tr>
              <tr>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_60"
                  contenteditable="true"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_61"
                  contenteditable="true"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_62"
                  contenteditable="true"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_63"
                  contenteditable="true"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_64"
                  contenteditable="true"
                ></td>
              </tr>
              <tr>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_70"
                  contenteditable="true"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_71"
                  contenteditable="true"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_72"
                  contenteditable="true"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_73"
                  contenteditable="true"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_74"
                  contenteditable="true"
                ></td>
              </tr>
              <tr>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_80"
                  contenteditable="true"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_81"
                  contenteditable="true"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_82"
                  contenteditable="true"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_83"
                  contenteditable="true"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_84"
                  contenteditable="true"
                ></td>
              </tr>
              <tr>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_90"
                  contenteditable="true"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_91"
                  contenteditable="true"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_92"
                  contenteditable="true"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_93"
                  contenteditable="true"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_94"
                  contenteditable="true"
                ></td>
              </tr>
              <tr>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_100"
                  contenteditable="true"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_101"
                  contenteditable="true"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_102"
                  contenteditable="true"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_103"
                  contenteditable="true"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_104"
                  contenteditable="true"
                ></td>
              </tr>
              <tr>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_110"
                  contenteditable="true"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_111"
                  contenteditable="true"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_112"
                  contenteditable="true"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_113"
                  contenteditable="true"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_114"
                  contenteditable="true"
                ></td>
              </tr>
              <tr>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_120"
                  contenteditable="true"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_121"
                  contenteditable="true"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_122"
                  contenteditable="true"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_123"
                  contenteditable="true"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_124"
                  contenteditable="true"
                ></td>
              </tr>
              <tr>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_130"
                  contenteditable="true"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_131"
                  contenteditable="true"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_132"
                  contenteditable="true"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_133"
                  contenteditable="true"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_134"
                  contenteditable="true"
                ></td>
              </tr>
              <tr>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_140"
                  contenteditable="true"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_141"
                  contenteditable="true"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_142"
                  contenteditable="true"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_143"
                  contenteditable="true"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_144"
                  contenteditable="true"
                ></td>
              </tr>
              <tr>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_150"
                  contenteditable="true"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_151"
                  contenteditable="true"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_152"
                  contenteditable="true"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_153"
                  contenteditable="true"
                ></td>
                <td
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_154"
                  contenteditable="true"
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
@import "@/assets/scss/let";
</style>