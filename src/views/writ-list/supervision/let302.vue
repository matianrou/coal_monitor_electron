<!--行政强制    行政复议申请笔录 -->
<template>
  <div style="width: 100%; height: 100%;">
    <let-main
      ref="letMain"
      :corp-data="corpData"
      :doc-data="docData"
      :let-data="letData"
      :paper-data="paperData"
      :from-page="fromPage"
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
            <div class="textAlignCenter formHeader1">行 政 复 议 申 请 笔 录</div>
            <div class="stdRowH"></div>
            <table style="border:solid 0 #000;" class="docBody">
              <tr>
                <td class="textAlignLeft">申请时间：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_0"
                  align="center"
                  style="width:10%"
                  data-title="年"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx0', '年', 'TextItem')"
                >{{letData.cellIdx0}}</td>
                <td class="textAlignLeft">年</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_1"
                  align="center"
                  style="width:10%"
                  data-title="月"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx1', '月', 'TextItem')"
                >{{letData.cellIdx1}}</td>
                <td class="textAlignLeft">月</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_2"
                  align="center"
                  style="width:10%"
                  data-title="日"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx2', '日', 'TextItem')"
                >{{letData.cellIdx2}}</td>
                <td class="textAlignLeft">日</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_3"
                  align="center"
                  style="width:10%"
                  data-title="时"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx3', '时', 'TextItem')"
                >{{letData.cellIdx3}}</td>
                <td class="textAlignLeft">时</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_4"
                  align="center"
                  style="width:10%"
                  data-title="分"
                  data-type="text"
                  data-src
                   @click="commandFill('cellIdx4', '分', 'TextItem')"
                >{{letData.cellIdx4}}</td>
                <td class="textAlignLeft">分</td>
              </tr>
              <tr>
                <td class="textAlignLeft">申请地点：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_5"
                  align="center"
                  style="width:85%"
                  data-title="申请地点"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx5', '申请地点', 'TextItem')"
                >{{letData.cellIdx5}}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">申请人姓名：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_6"
                  align="center"
                  style="width:31%"
                  data-title="申请人姓名"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx6', '申请人姓名', 'TextItem')"
                >{{letData.cellIdx6}}</td>
                <td class="textAlignLeft">性别：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_7"
                  align="center"
                  style="width:20%"
                  data-title="性别"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx7', '性别', 'TextItem')"
                >{{letData.cellIdx7}}</td>
                <td class="textAlignLeft">年龄：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_8"
                  align="center"
                  style="width:20%"
                  data-title="年龄"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx8', '年龄', 'TextItem')"
                >{{letData.cellIdx8}}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">申请人单位：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_9"
                  align="center"
                  style="width:31%"
                  data-title="申请人单位"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx9', '申请人单位', 'TextItem')"
                >{{letData.cellIdx9}}</td>
                <td class="textAlignLeft">职务（职业）：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_10"
                  align="center"
                  style="width:16%"
                  data-title="职务（职业）"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx10', '职务（职业）', 'TextItem')"
                >{{letData.cellIdx10}}</td>
                <td class="textAlignLeft">电话：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_11"
                  align="center"
                  style="width:16.5%"
                  data-title="电话"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx11', '电话', 'TextItem')"
                >{{letData.cellIdx11}}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">申请人住址：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_12"
                  align="center"
                  style="width:83%"
                  data-title="申请人住址"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx12', '申请人住址', 'TextItem')"
                >{{letData.cellIdx12}}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">记录人（签名）：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_13"
                  align="center"
                  style="width:79%"
                  data-title="记录人（签名）"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx13', '记录人（签名）', 'TextItem')"
                >{{letData.cellIdx13}}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">申请记录：</td>
              </tr>
            </table>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              id="cell_idx_14"
              data-title="申请记录"
              data-type="textarea"
              data-src
              @click="commandFill('cellIdx14', '申请记录', 'TextareaItem')">
              <p
                style="width:100%; height:auto; word-wrap:break-word;word-wrap: break-all; overflow: hidden;"
              >&nbsp;{{ letData.cellIdx14 }}</p>
              <p
                style="width: 100%; height: auto; word-wrap: break-word; word-wrap: break-all; overflow: hidden;"
              >&nbsp;</p>
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
  name: "Let302",
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
      let corpBase = await this.getDatabase('baseInfo');
      //查询符合条件的记录
      let corp = corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      let wkPaper = await this.getDatabase("wkPaper");
      let caseId = this.corpData.caseId;
      //查询当前计划是否已做文书
      let checkPaper = wkPaper.filter((item) => {
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
          cellIdx0: null,//年
          cellIdx1: null, //月
          cellIdx2: null, //日
          cellIdx3: null, //时
          cellIdx4: null,//分
          cellIdx5: null,//申请地点
          cellIdx6: null, // 申请人姓名
          cellIdx7: null, // 性别
          cellIdx8: null, // 年龄
          cellIdx9: null, //申请人单位
          cellIdx10: null, //职务（职业）
          cellIdx11: null,//电话
          cellIdx12: null, //申请人住址
          cellIdx13: null, //记录人（签名）
          cellIdx14: null, //申请记录
        };
      }
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