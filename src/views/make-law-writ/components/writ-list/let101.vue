<!-- 现场检查 一般检查 现场检查笔录 -->
<template>
  <div style="width: 100%; height: 100%;">
    <let-main
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
            <div class="textAlignCenter formHeader1">现 场 检 查 笔 录</div>
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
                  @click="commandFill('cellIdx0', '被检查单位：', 'TextItem')"
                >{{letData.cellIdx0}}</td>
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
                  @click="commandFill('cellIdx1', '检查时间：', 'DateItem')"
                >{{letData.cellIdx1}}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">检查地点（路线）：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_2"
                  style="width:79%"
                  data-title="检查地点（路线）"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx2', '检查地点（路线）：', 'TextItem')"
                >{{letData.cellIdx2}}</td>
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
                  @click="commandFill('cellIdx3', '采矿许可证：', 'TextItem')"
                >{{letData.cellIdx3}}</td>
                <td class="textAlignCenter">安全生产许可证：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_4"
                  style="width:28%"
                  data-title="安全生产许可证"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx4', '安全生产许可证：', 'TextItem')"
                >{{letData.cellIdx4}}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">检查人（签名）：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_5"
                  style="width:81.4%"
                  data-title="检查人（签名）"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx5', '检查人（签名）：', 'TextItem')"
                >{{letData.cellIdx5}}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">记录人（签名）：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_6"
                  style="width:28%"
                  data-title="记录人（签名）"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx6', '记录人（签名）：', 'TextItem')"
                >{{letData.cellIdx6}}</td>
                <td class="textAlignCenter">陪同检察人员：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_7"
                  style="width:38%"
                  data-title="陪同检察人员"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx7', '陪同检察人员：', 'TextItem')"
                >{{letData.cellIdx7}}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">检查情况：</td>
                <td style="width:88.3%">&nbsp;</td>
              </tr>
            </table>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea addtrouble"
              id="cell_idx_8"
              data-title="检查情况"
              data-type="textarea"
              @click="commandFill('cellIdx8', '检查情况：', 'DangerTableItem')"
            >
              <div v-if="letData.cellIdx8">
                <div v-html="letData.cellIdx8" class="show-danger-content">
                </div>
              </div>
              <div v-else>
                <p style="width:100%; height:auto; word-wrap:break-word;word-wrap: break-all; overflow: hidden;">
                  &nbsp;
                </p>
              </div>
            </div>
            <table style="border:solid 0px #000;" class="docBody">
              <tr>
                <td class="textAlignLeft">被检查单位负责人意见：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_9"
                  style="width:30%"
                  data-title="被检查单位负责人意见"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx9', '被检查单位负责人意见：', 'TextItem')"
                >{{letData.cellIdx9}}</td>
                <td class="textAlignCenter">签名:</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_10"
                  style="width:15%"
                  data-title="签名"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx10', '签名:', 'TextItem')"
                >{{letData.cellIdx10}}</td>
                <td class="textAlignCenter">日期:</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_11"
                  style="width:20%"
                  data-title="日期"
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx11', '日期:', 'DateItem')"
                >{{letData.cellIdx11}}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </let-main>
    <let-drawer
      :visible="visible"
      :selectedData="selectedData"
      @handle-close="handleClose"
      @handle-save="handleSave"
    ></let-drawer>
  </div>
</template>

<script>
import letMain from "@/views/make-law-writ/components/writ-list/components/let-main";
import letDrawer from "@/views/make-law-writ/components/writ-list/components/let-drawer";
import GoDB from "@/utils/godb.min.js";
import {
  setTextItem,
  setDateItem,
  setDangerTableItem,
} from "@/utils/handlePaperData";
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
        }
      },
    }
  },
  components: {
    letMain,
    letDrawer,
  },
  data() {
    return {
      letData: {},
      visible: false, // 展示填写组件
      selectedData: {
        key: null, // 修改的内容key
        type: null, // 填写组件类型
        title: null, // 标题
        value: null, // 值
        options: null, // 选项
      },
      options: {
      },
      functions: {
        setTextItem,
        setDateItem,
        setDangerTableItem,
      },
      editData: {}, // 回显数据
    };
  },
  created() {
    this.initData();
  },
  watch: {
    'corpData.corpId' (val) {
      if (val) {
        this.initData()
      }
    }
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
      //查询当前计划是否已做现场检查笔录
      const checkPaper = await wkPaper.findAll((item) => {
        return item.caseId === caseId && item.name === '现场检查笔录';
      });
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
          cellIdx2: null, // 检查地点（路线）
          cellIdx3: null, // 采矿许可证
          cellIdx4: null, // 安全生产许可证
          cellIdx5: null, // 检查人（签名）
          cellIdx6: null, // 记录人（签名）
          cellIdx7: null, // 陪同检察人员
          cellIdx8: null, // 检查情况
          cellIdx9: null, // 被检查单位负责人意见
          cellIdx10: null, // 签名
          cellIdx11: null, // 日期
        };
      }
      await db.close();
    },
    goBack({page}) {
      // 返回选择企业
      this.$emit("go-back", {page});
    },
    commandFill(key, title, type) {
      // 打开编辑
      this.visible = true;
      let valueKey = `${key}Type${type}`;
      this.selectedData = {
        type,
        key,
        title,
        value: this.letData[valueKey],
        corpData: this.corpData,
        options: this.options[key],
      };
    },
    handleClose() {
      // 关闭编辑
      this.selectedData = {
        key: null,
        type: null,
        title: null,
        value: null,
        options: null,
      };
      this.visible = false;
    },
    handleSave(params) {
      let { key, type } = this.selectedData;
      // 保存反显数据
      this.letData[`${key}Type${type}`] = params.value;
      // 处理反显数据，保存一份paperContent通用文本数据
      this.letData[key] = this.functions[`set${type}`](
        this.letData[`${key}Type${type}`],
        this.selectedData,
        this.options
      );
      this.handleClose();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/views/make-law-writ/assets/scss/let";
.show-danger-content {
  display: inline;
  border-bottom: solid 1px #000;
  padding-bottom: 0.1rem;
  line-height: 30px;
}
</style>