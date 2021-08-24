<!-- 行政强制 行政复议 行政复议调查笔录 -->
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
            <div class="textAlignCenter formHeader1">行 政 复 议 调 查 笔 录</div>
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
                  contenteditable="true"
                  align="center"
                  style="width:85%"
                  data-title="地点"
                  data-type="texta"
                  data-src
                  @click="commandFill('cellIdx7', '地点', 'TextItem')"
                >{{letData.cellIdx7}}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">调查人（签名）：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_8"
                  contenteditable="true"
                  align="center"
                  style="width:36%"
                  data-title="调查人（签名）"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx8', '调查人（签名）', 'TextItem')"
                >{{letData.cellIdx8}}</td>
                <td class="textAlignCenter">记录人（签名）：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_9"
                  contenteditable="true"
                  align="center"
                  style="width:28%"
                  data-title="记录人（签名）"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx9', '记录人（签名）', 'TextItem')"
                >{{letData.cellIdx9}}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">被调查人：</td>
                <td class="textAlignLeft">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_10"
                  contenteditable="true"
                  align="center"
                  style="width:20%"
                  data-title="被调查人"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx10', '被调查人', 'TextItem')"
                >{{letData.cellIdx10}}</td>
                <td class="textAlignLeft">性别</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_11"
                  contenteditable="true"
                  align="center"
                  style="width:7%"
                  data-title="性别"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx11', '性别', 'TextItem')"
                >{{letData.cellIdx11}}</td>
                <td class="textAlignLeft">年龄</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_12"
                  contenteditable="true"
                  align="center"
                  style="width:7%"
                  data-title="年龄"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx12', '年龄', 'TextItem')"
                >{{letData.cellIdx12}}</td>
                <td class="textAlignLeft">身份证号</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_13"
                  contenteditable="true"
                  align="center"
                  style="width:26%"
                  data-title="身份证号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx13', '身份证号', 'TextItem')"
                >{{letData.cellIdx13}}</td>
              </tr>
              <tr>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;单&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;位</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_14"
                  contenteditable="true"
                  align="center"
                  style="width:20%"
                  data-title="单位"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx14', '单位', 'TextItem')"
                >{{letData.cellIdx14}}</td>
                <td class="textAlignLeft">职务（职业）</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_15"
                  contenteditable="true"
                  align="center"
                  style="width:19%"
                  data-title="职务（职业）"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx15', '职务（职业）', 'TextItem')"
                >{{letData.cellIdx15}}</td>
                <td class="textAlignLeft">电&nbsp;&nbsp;&nbsp;&nbsp;话</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_16"
                  contenteditable="true"
                  align="center"
                  style="width:18%"
                  data-title="电话"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx16', '电话', 'TextItem')"
                >{{letData.cellIdx16}}</td>
              </tr>
              <tr>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;住&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_17"
                  contenteditable="true"
                  align="center"
                  style="width:78%"
                  data-title="住址"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx17', '住址', 'TextItem')"
                >{{letData.cellIdx17}}</td>
              </tr>
              <div
                style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
                class="cellInput mutiLineArea"
                id="cell_idx_18"
                data-title="调查笔录"
                data-type="textarea"
                data-src
                @click="commandFill('cellIdx18', '调查笔录', 'TextareaItem')">
                <p class="show-area-item-p">
                  <span style="padding: 7px; white-space: pre-wrap;">{{ letData.cellIdx18 }}</span>
                </p>
              </div>
              <tr>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;备注：被调查人员应在过目笔录后，签署意见，并签名押印。</td>
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
import { getDangerObject, transformNumToChinese, getDocNumber } from '@/utils/monitor/setInitPaperData'
export default {
  name: "Let304",
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
      const db = new GoDB("CoalMonitorDB");
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
        // 1.时间：当前年、月、日、时、分
        let now = new Date()
        let cellIdx0Year = now.getFullYear()
        let cellIdx1Month = now.getMonth() + 1
        let cellIdx2Date = now.getDate()
        let cellIdx3Hour = now.getHours()
        let cellIdx4Minu = now.getMinutes()
        // 2.单位名称
        // 3.调查笔录：“我们是”+机构名称+“执法监督处工作人员，这是我们的执法证件（出示行政执法证件），现就你矿涉嫌”+隐患描述+“案向你进行调查取证，你有配合调查、如实回答问题的义务，也享有拒绝回答与调查取证无关问题的权利，但不得做虚假陈述和伪证，否则，将负相应的法律责任，你听清楚了吗？答：听清楚了。”
        // 获取笔录文书中的隐患数据
        const let101Data = await wkPaper.find((item) => {
          return item.caseId === caseId && item.paperType === '1';
        });
        let let101DataPapaerContent = JSON.parse(let101Data.paperContent)
        let dangerObject = getDangerObject(let101DataPapaerContent.dangerItemObject.tableData)
        let cellIdx18 = `我们是${this.$store.state.user.userGroupName}执法监督处工作人员，这是我们的执法证件（出示行政执法证件），现就你矿涉嫌${dangerObject.dangerString}案向你进行调查取证，你有配合调查、如实回答问题的义务，也享有拒绝回答与调查取证无关问题的权利，但不得做虚假陈述和伪证，否则，将负相应的法律责任，你听清楚了吗？\r\n      答：听清楚了。`
        this.letData = {
          cellIdx0: cellIdx0Year, // 年
          cellIdx0TypeTextItem: cellIdx0Year, // 年
          cellIdx1: cellIdx1Month, // 月
          cellIdx1TypeTextItem: cellIdx1Month, // 月
          cellIdx2: cellIdx2Date, // 日
          cellIdx2TypeTextItem: cellIdx2Date, // 日
          cellIdx3: cellIdx3Hour, // 时
          cellIdx3TypeTextItem: cellIdx3Hour, // 时
          cellIdx4: cellIdx4Minu, // 分
          cellIdx4TypeTextItem: cellIdx4Minu, // 分
          cellIdx5: null, // 时
          cellIdx6: null, // 分
          cellIdx7: null, // 地点
          cellIdx8: null, // 调查人（签名）
          cellIdx9: null, // 记录人（签名）
          cellIdx10: null, // 被调查人
          cellIdx11: null, // 性别
          cellIdx12: null, // 年龄
          cellIdx13: null, // 身份证号
          cellIdx14: corp.corpName, // 单位
          cellIdx14TypeTextItem: corp.corpName, // 单位
          cellIdx15: null, // 职务（职业）
          cellIdx16: null, // 电话
          cellIdx17: null, // 住址
          cellIdx18: cellIdx18, // 调查笔录
          cellIdx18TypeTextareaItem: cellIdx18, // 调查笔录
        };
      }
      await db.close();
    },
    goBack({ page }) {
      // 返回选择企业
      this.$emit("go-back", { page });
    },
    commandFill (key, title, type) {
      // 判断是否可编辑
      if (this.$refs.letMain.canEdit) {
        // 文书各个字段点击打开左侧弹出编辑窗口
        let dataKey = `${key}Type${type}`
        this.$refs.letMain.commandFill(key, dataKey, title, type, this.letData[dataKey], this.options[key])
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/let";
</style>