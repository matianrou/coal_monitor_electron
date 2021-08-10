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
            <div class="textAlignCenter formHeader1">陈 述、申 辩 笔 录</div>
            <div class="stdRowH"></div>
            <table style="border:solid 0px #000;" class="docBody">
              <tr>
                <td class="textAlignLeft">时&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;间：</td>
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
                <td class="textAlignLeft">分至</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_5"
                  align="center"
                  style="width:10%"
                  data-title="时"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx5', '时', 'TextItem')"
                >{{letData.cellIdx5}}</td>
                <td class="textAlignLeft">时</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_6"
                  align="center"
                  style="width:10%"
                  data-title="分"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx6', '分', 'TextItem')"
                >{{letData.cellIdx6}}</td>
                <td class="textAlignLeft">分</td>
              </tr>
              <tr>
                <td class="textAlignLeft">地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;点：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_7"
                  align="center"
                  style="width:85%"
                  data-title="地点"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx7', '地点', 'TextItem')"
                >{{letData.cellIdx7}}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">陈述、申辩人：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_8"
                  align="center"
                  style="width:25%"
                  data-title="陈述、申辩人"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx8', '陈述、申辩人', 'TextItem')"
                >{{letData.cellIdx8}}</td>
                <td class="textAlignLeft">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_9"
                  align="center"
                  style="width:18%"
                  data-title="性别"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx9', '性别', 'TextItem')"
                >{{letData.cellIdx9}}</td>
                <td class="textAlignLeft">年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;龄：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_10"
                  align="center"
                  style="width:18%"
                  data-title="年龄"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx10', '年龄', 'TextItem')"
                >{{letData.cellIdx10}}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">工作单位：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_11"
                  align="center"
                  style="width:50%"
                  data-title="工作单位"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx11', '工作单位', 'TextItem')"
                >{{letData.cellIdx11}}</td>
                <td class="textAlignLeft">职务（职业）：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_12"
                  align="center"
                  style="width:21%"
                  data-title="职务（职业）"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx12', '职务（职业）', 'TextItem')"
                >{{letData.cellIdx12}}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">住&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_13"
                  align="center"
                  style="width:50%"
                  data-title="住址"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx13', '住址', 'TextItem')"
                >{{letData.cellIdx13}}</td>
                <td class="textAlignLeft">电&nbsp;&nbsp;&nbsp;&nbsp;话：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_14"
                  align="center"
                  style="width:27%"
                  data-title="电话"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx14', '电话', 'TextItem')"
                >{{letData.cellIdx14}}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">承办人（签名）：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_15"
                  align="center"
                  style="width:18%"
                  data-title="承办人（签名）"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx15', '承办人（签名）', 'TextItem')"
                >{{letData.cellIdx15}}</td>
                <td class="textAlignCenter">&nbsp;&nbsp;</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_16"
                  align="center"
                  style="width:18%"
                  data-title="承办人（签名）"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx16', '承办人（签名）', 'TextItem')"
                >{{letData.cellIdx16}}</td>
                <td class="textAlignLeft">记录人（签名）：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_17"
                  align="center"
                  style="width:26%"
                  data-title="记录人（签名）"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx17', '记录人（签名）', 'TextItem')"
                >{{letData.cellIdx17}}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">陈述、申辩记录：我们是</td>
                <td
                  class="cellInput"
                  id="cell_idx_18"
                  contenteditable="true"
                  align="center"
                  style="width:35%"
                  data-title="监察员"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx18', '监察员', 'TextItem')"
                >{{letData.cellIdx18}}</td>
                <td class="textAlignLeft">的监察员，这是我</td>
              </tr>
              <tr>
                <td class="textAlignLeft">们的证件（出示证件）。现对</td>
              </tr>
            </table>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              id="cell_idx_19"
              data-title="违法行为"
              data-type="textarea"
              data-src
              @click="commandFill('cellIdx19', '违法行为', 'TextareaItem')">
              <p class="show-area-item-p">
                <span style="padding: 7px;">{{ letData.cellIdx19 }}</span>
              </p>
            </div>
            <table class="docBody">
              <tr>
                <td class="textAlignLeft">听取你</td>
                <td
                  class="cellInput"
                  id="cell_idx_20"
                  align="center"
                  style="width:15%"
                  data-title="陈述、申辩"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx20', '陈述、申辩', 'TextItem')"
                >{{letData.cellIdx20}}</td>
                <td class="textAlignLeft">的陈述、申辩。</td>
              </tr>
            </table>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              id="cell_idx_21"
              data-title="法制审核意见"
              data-type="textarea"
              data-src
              @click="commandFill('cellIdx21', '法制审核意见', 'TextareaItem')">
              <p class="show-area-item-p">
                <span style="padding: 7px;">{{ letData.cellIdx21 }}</span>
              </p>
            </div>
            <table class="docBody">
              <tr>
                <td class="textAlignLeft">备注：陈述、申辩人应在过目笔录后，签署意见，并签名押印。</td>
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
  setTextareaItem,
  setDateItem,
} from "@/utils/handlePaperData";
export default {
  name: "Let108",
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
      options: {},
      functions: {
        setTextItem,
        setTextareaItem,
        setDateItem,
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
          cellIdx0: null, // 年
          cellIdx1: null, // 月
          cellIdx2: null, // 日
          cellIdx3: null, // 时
          cellIdx4: null, // 分
          cellIdx5: null, // 时
          cellIdx6: null, // 分
          cellIdx7: null, // 地点
          cellIdx8: null, // 陈述、申辩人
          cellIdx9: null, // 性别
          cellIdx10: null, // 年龄
          cellIdx11: null, // 工作单位
          cellIdx12: null, // 职务（职业）
          cellIdx13: null, // 邮政编码
          cellIdx14: null, // 电话
          cellIdx15: null, // 承办人（签名）
          cellIdx16: null, // 承办人（签名）
          cellIdx17: null, // 记录人（签名）
          cellIdx18: null, // 监察员
          cellIdx19: null, // 违法行为
          cellIdx20: null, // 陈述、申辩
          cellIdx21: null, // 法制审核意见

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
</style>