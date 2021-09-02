<!-- 行政强制 行政复议 行政复议申请笔录 -->
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
            <div class="textAlignCenter formHeader1">行 政 复 议 申 请 笔 录</div>
            <div class="stdRowH"></div>
            <table style="border:solid 0px #000;" class="docBody">
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
                  id="cell_idx_9"
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
                  id="cell_idx_11"
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
              <p class="show-area-item-p">
                <span style="padding: 7px;">{{ letData.cellIdx14 }}</span>
              </p>
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
import { getDangerObject, getDocNumber } from '@/utils/setInitPaperData'
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
          item.caseId === caseId && item.paperType === this.docData.docTypeNo && item.delFlag !== '1'
        );
      });
      // await wkPaper.delete(checkPaper[0].id)
      if (checkPaper.length > 0) {
        // 回显
        this.letData = JSON.parse(checkPaper[0].paperContent);
        this.editData = checkPaper[0];
      } else {
        // 创建初始版本
        // 1.时间：当前年、月、日、时、分
        let now = new Date()
        // 2.申请人单位
        // 3.申请记录：“我代表”+煤矿名称+“对”+机构名称+“做出的行政处罚决定”+文书编号（行政处罚决定）+“申请行政复议，对处罚的”+隐患描述+“违法行为进行复议。我矿认为......。请求从轻或者免于处罚。”
        const let101Data = await wkPaper.find((item) => {
          return item.caseId === caseId && item.paperType === '1';
        });
        let let101DataPapaerContent = JSON.parse(let101Data.paperContent)
        let { numString } = await getDocNumber(db, '8', caseId, this.$store.state.user)
        let dangerObject = getDangerObject(let101DataPapaerContent.dangerItemObject.tableData)
        let cellIdx14String = `我代表${corp.corpName}对${this.$store.state.user.userGroupName}做出的行政处罚决定${numString}申请行政复议，对处罚的${dangerObject.dangerString}违法行为进行复议。我矿认为......。请求从轻或者免于处罚。`
        this.letData = {
          cellIdx0: now.getFullYear(), // 年
          cellIdx0TypeTextItem: now.getFullYear(), // 年
          cellIdx1: now.getMonth() + 1, // 月
          cellIdx1TypeTextItem: now.getMonth() + 1, // 月
          cellIdx2: now.getDate(), // 日
          cellIdx2TypeTextItem: now.getDate(), // 日
          cellIdx3: now.getHours(), // 时
          cellIdx3TypeTextItem: now.getHours(), // 时
          cellIdx4: now.getMinutes(), // 分
          cellIdx4TypeTextItem: now.getMinutes(), // 分
          cellIdx5: null, // 申请地点
          cellIdx6: null, // 申请人姓名
          cellIdx7: null, // 性别
          cellIdx8: null, // 年龄
          cellIdx9: corp.corpName, // 申请人单位
          cellIdx9TypeTextItem: corp.corpName, // 申请人单位
          cellIdx10: null, // 职务（职业）
          cellIdx11: null, // 电话
          cellIdx12: null, // 申请人住址
          cellIdx13: null, // 记录人（签名）
          cellIdx14: cellIdx14String, // 申请记录
          cellIdx14TypeTextareaItem: cellIdx14String, // 申请记录
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