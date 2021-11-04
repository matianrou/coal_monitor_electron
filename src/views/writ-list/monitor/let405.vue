<!-- 其他  卷内目录 -->
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
            <div class="stdRowH" id="cell_idx_0">{{letData.cellIdx0}}</div>
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
                  @click="commandFill('cellIdx10', '', 'TextItem')"
                >{{letData.cellIdx10}}</td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_11"
                  onclick="host.commandFill(this.id,'checked','选择文书','catalog')"
                >选择文书...</td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_12"
                  @click="commandFill('cellIdx12', '', 'TextItem')"
                >{{letData.cellIdx12}}</td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_13"
                  @click="commandFill('cellIdx13', '', 'TextItem')"
                >{{letData.cellIdx13}}</td>
                <td
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_14"
                  @click="commandFill('cellIdx14', '', 'TextItem')"
                >{{letData.cellIdx14}}</td>
              </tr>
              <tr>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_20"
                  @click="commandFill('cellIdx20', '', 'TextItem')"
                >{{letData.cellIdx20}}</td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_21"
                  @click="commandFill('cellIdx21', '', 'TextItem')"
                >{{letData.cellIdx21}}</td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_22"
                  @click="commandFill('cellIdx22', '', 'TextItem')"
                >{{letData.cellIdx22}}</td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_23"
                  @click="commandFill('cellIdx23', '', 'TextItem')"
                >{{letData.cellIdx23}}</td>
                <td
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_24"
                  @click="commandFill('cellIdx24', '', 'TextItem')"
                >{{letData.cellIdx24}}</td>
              </tr>
              <tr>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_30"
                  @click="commandFill('cellIdx30', '', 'TextItem')"
                >{{letData.cellIdx30}}</td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_31"
                  @click="commandFill('cellIdx31', '', 'TextItem')"
                >{{letData.cellIdx31}}</td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_32"
                  @click="commandFill('cellIdx32', '', 'TextItem')"
                >{{letData.cellIdx32}}</td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_33"
                  @click="commandFill('cellIdx33', '', 'TextItem')"
                >{{letData.cellIdx33}}</td>
                <td
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_34"
                  @click="commandFill('cellIdx34', '', 'TextItem')"
                >{{letData.cellIdx34}}</td>
              </tr>
              <tr>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_40"
                  @click="commandFill('cellIdx40', '', 'TextItem')"
                >{{letData.cellIdx40}}</td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_41"
                  @click="commandFill('cellIdx41', '', 'TextItem')"
                >{{letData.cellIdx41}}</td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_42"
                  @click="commandFill('cellIdx42', '', 'TextItem')"
                >{{letData.cellIdx42}}</td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_43"
                  @click="commandFill('cellIdx43', '', 'TextItem')"
                >{{letData.cellIdx43}}</td>
                <td
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_44"
                  @click="commandFill('cellIdx44', '', 'TextItem')"
                >{{letData.cellIdx44}}</td>
              </tr>
              <tr>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_50"
                  @click="commandFill('cellIdx50', '', 'TextItem')"
                >{{letData.cellIdx50}}</td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_51"
                  @click="commandFill('cellIdx51', '', 'TextItem')"
                >{{letData.cellIdx51}}</td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_52"
                  @click="commandFill('cellIdx52', '', 'TextItem')"
                >{{letData.cellIdx52}}</td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_53"
                  @click="commandFill('cellIdx53', '', 'TextItem')"
                >{{letData.cellIdx53}}</td>
                <td
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_54"
                  @click="commandFill('cellIdx54', '', 'TextItem')"
                >{{letData.cellIdx54}}</td>
              </tr>
              <tr>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_60"
                  @click="commandFill('cellIdx60', '', 'TextItem')"
                >{{letData.cellIdx60}}</td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_61"
                  @click="commandFill('cellIdx61', '', 'TextItem')"
                >{{letData.cellIdx61}}</td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_62"
                  @click="commandFill('cellIdx62', '', 'TextItem')"
                >{{letData.cellIdx62}}</td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_63"
                  @click="commandFill('cellIdx63', '', 'TextItem')"
                >{{letData.cellIdx63}}</td>
                <td
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_64"
                  @click="commandFill('cellIdx64', '', 'TextItem')"
                >{{letData.cellIdx64}}</td>
              </tr>
              <tr>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_70"
                  @click="commandFill('cellIdx70', '', 'TextItem')"
                >{{letData.cellIdx70}}</td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_71"
                  @click="commandFill('cellIdx71', '', 'TextItem')"
                >{{letData.cellIdx71}}</td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_72"
                  @click="commandFill('cellIdx72', '', 'TextItem')"
                >{{letData.cellIdx72}}</td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_73"
                  @click="commandFill('cellIdx73', '', 'TextItem')"
                >{{letData.cellIdx73}}</td>
                <td
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_74"
                  @click="commandFill('cellIdx74', '', 'TextItem')"
                >{{letData.cellIdx74}}</td>
              </tr>
              <tr>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_80"
                  @click="commandFill('cellIdx80', '', 'TextItem')"
                >{{letData.cellIdx80}}</td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_81"
                  @click="commandFill('cellIdx81', '', 'TextItem')"
                >{{letData.cellIdx81}}</td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_82"
                  @click="commandFill('cellIdx82', '', 'TextItem')"
                >{{letData.cellIdx82}}</td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_83"
                  @click="commandFill('cellIdx83', '', 'TextItem')"
                >{{letData.cellIdx83}}</td>
                <td
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_84"
                  @click="commandFill('cellIdx84', '', 'TextItem')"
                >{{letData.cellIdx84}}</td>
              </tr>
              <tr>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_90"
                  @click="commandFill('cellIdx90', '', 'TextItem')"
                >{{letData.cellIdx90}}</td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_91"
                  @click="commandFill('cellIdx91', '', 'TextItem')"
                >{{letData.cellIdx91}}</td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_92"
                  @click="commandFill('cellIdx92', '', 'TextItem')"
                >{{letData.cellIdx92}}</td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_93"
                  @click="commandFill('cellIdx93', '', 'TextItem')"
                >{{letData.cellIdx93}}</td>
                <td
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_94"
                  @click="commandFill('cellIdx94', '', 'TextItem')"
                >{{letData.cellIdx94}}</td>
              </tr>
              <tr>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_100"
                  @click="commandFill('cellIdx100', '', 'TextItem')"
                >{{letData.cellIdx100}}</td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_101"
                  @click="commandFill('cellIdx101', '', 'TextItem')"
                >{{letData.cellIdx101}}</td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_102"
                  @click="commandFill('cellIdx102', '', 'TextItem')"
                >{{letData.cellIdx102}}</td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_103"
                  @click="commandFill('cellIdx103', '', 'TextItem')"
                >{{letData.cellIdx103}}</td>
                <td
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_104"
                  @click="commandFill('cellIdx104', '', 'TextItem')"
                >{{letData.cellIdx104}}</td>
              </tr>
              <tr>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_110"
                  @click="commandFill('cellIdx110', '', 'TextItem')"
                >{{letData.cellIdx110}}</td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_111"
                  @click="commandFill('cellIdx111', '', 'TextItem')"
                >{{letData.cellIdx111}}</td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_112"
                  @click="commandFill('cellIdx112', '', 'TextItem')"
                >{{letData.cellIdx112}}</td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_113"
                  @click="commandFill('cellIdx113', '', 'TextItem')"
                >{{letData.cellIdx113}}</td>
                <td
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_114"
                  @click="commandFill('cellIdx114', '', 'TextItem')"
                >{{letData.cellIdx114}}</td>
              </tr>
              <tr>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_120"
                  @click="commandFill('cellIdx120', '', 'TextItem')"
                >{{letData.cellIdx120}}</td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_121"
                  @click="commandFill('cellIdx121', '', 'TextItem')"
                >{{letData.cellIdx121}}</td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_122"
                  @click="commandFill('cellIdx122', '', 'TextItem')"
                >{{letData.cellIdx122}}</td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_123"
                  @click="commandFill('cellIdx123', '', 'TextItem')"
                >{{letData.cellIdx123}}</td>
                <td
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_124"
                  @click="commandFill('cellIdx124', '', 'TextItem')"
                >{{letData.cellIdx124}}</td>
              </tr>
              <tr>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_130"
                  @click="commandFill('cellIdx130', '', 'TextItem')"
                >{{letData.cellIdx130}}</td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_131"
                  @click="commandFill('cellIdx131', '', 'TextItem')"
                >{{letData.cellIdx131}}</td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_132"
                  @click="commandFill('cellIdx132', '', 'TextItem')"
                >{{letData.cellIdx132}}</td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_133"
                  @click="commandFill('cellIdx133', '', 'TextItem')"
                >{{letData.cellIdx133}}</td>
                <td
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_134"
                  @click="commandFill('cellIdx134', '', 'TextItem')"
                >{{letData.cellIdx134}}</td>
              </tr>
              <tr>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_140"
                  @click="commandFill('cellIdx140', '', 'TextItem')"
                >{{letData.cellIdx140}}</td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_141"
                  @click="commandFill('cellIdx141', '', 'TextItem')"
                >{{letData.cellIdx141}}</td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_142"
                  @click="commandFill('cellIdx142', '', 'TextItem')"
                >{{letData.cellIdx142}}</td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_143"
                  @click="commandFill('cellIdx143', '', 'TextItem')"
                >{{letData.cellIdx143}}</td>
                <td
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_144"
                  @click="commandFill('cellIdx144', '', 'TextItem')"
                >{{letData.cellIdx144}}</td>
              </tr>
              <tr>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_150"
                  @click="commandFill('cellIdx150', '', 'TextItem')"
                >{{letData.cellIdx150}}</td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_151"
                  @click="commandFill('cellIdx151', '', 'TextItem')"
                >{{letData.cellIdx151}}</td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_152"
                  @click="commandFill('cellIdx152', '', 'TextItem')"
                >{{letData.cellIdx10}}</td>
                <td
                  class="cellInput textAlignCenter cellBottomLine cellRightLine"
                  id="cell_idx_153"
                  @click="commandFill('cellIdx153', '', 'TextItem')"
                >{{letData.cellIdx153}}</td>
                <td
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_154"
                  @click="commandFill('cellIdx154', '', 'TextItem')"
                >{{letData.cellIdx154}}</td>
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
      const db = new GoDB(this.$store.state.DBName);
      const corpBase = db.table("corpBase");
      //查询符合条件的记录
      const corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      const wkPaper = db.table("wkPaper");
      const caseId = this.corpData.caseId;
      const checkPaper = await wkPaper.findAll((item) => {
        return (
          item.caseId === caseId && item.paperType === this.docData.docTypeNo && item.delFlag !== '1'
        );
      });
      if (checkPaper.length > 0) {
        // 回显
        this.letData = JSON.parse(checkPaper[0].paperContent);
        this.paperData = checkPaper[0];
      } else {
        // 创建初始版本
        this.letData = {
          cellIdx0: null, //
        };
      }
      await db.close();
    },
    goBack({ page, data }) {
      // 返回选择企业
      this.$emit("go-back", { page, data });
    },
    commandFill (key, title, type) {
      // 判断是否可编辑
      if (this.$refs.letMain.canEdit) {
        // 文书各个字段点击打开左侧弹出编辑窗口
        let dataKey = `${key}`
        this.$refs.letMain.commandFill(key, dataKey, title, type, this.letData[dataKey], this.options[key])
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/let";
</style>