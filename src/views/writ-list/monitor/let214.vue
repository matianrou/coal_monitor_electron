<!-- 行政处罚 案件结案 执法案卷（首页）及目录 -->
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
            <div class="textAlignCenter formHeader0" style="font-size:30px">国 家 煤 矿 安 全 监 察</div>
            <div class="textAlignCenter formHeader3" style="font-size:30px">执 法 案 卷 首 页</div>
            <div class="halfRowH"></div>
            <table class="docBody" style="border:solid 1.5px #000;">
              <tr style="height:3cm;">
                <td
                  style="width:30mm;height:30mm"
                  class="textAlignCenter cellBottomLine cellRightLine"
                >
                  <br />执法单位
                </td>
                <td
                  style="width:158mm;height:30mm"
                  class="cellInput cellBottomLine textPaddingLeft"
                  id="cell_idx_0"
                  align="center"
                  data-title="执法单位"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx0', '执法单位', 'TextItem')"
                >{{letData.cellIdx0}}</td>
              </tr>
              <tr style="height:5cm;">
                <td
                  style="width:30mm;height:50mm"
                  class="textAlignCenter cellBottomLine cellRightLine"
                >
                  <br />
                  <br />案卷类别
                </td>
                <td
                  style="width:158mm;height:50mm"
                  class="cellInput cellBottomLine textPaddingLeft"
                  id="cell_idx_1"
                  align="center"
                  data-title="案卷类别"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx1', '案卷类别', 'TextItem')"
                >{{letData.cellIdx1}}</td>
              </tr>
              <tr style="height:6cm;">
                <td style="width:30mm;height:120mm" class="textAlignCenter cellRightLine">
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />案卷题名
                </td>
                <td
                  style="width:158mm;height:120mm"
                  class="cellInput textPaddingLeft"
                  id="cell_idx_2"
                  align="center"
                  data-title="案卷题名"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx2', '案卷题名', 'TextItem')"
                >{{letData.cellIdx2}}</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td class="textPaddingLeft">起止日期：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_3"
                  align="center"
                  style="width:10%"
                  data-title="年"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx3', '年', 'TextItem')"
                >{{letData.cellIdx3}}</td>
                <td class="textAlignLeft">年</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_4"
                  align="center"
                  style="width:10%"
                  data-title="月"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx4', '月', 'TextItem')"
                >{{letData.cellIdx4}}</td>
                <td class="textAlignLeft">月</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_5"
                  align="center"
                  style="width:10%"
                  data-title="日"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx5', '日', 'TextItem')"
                >{{letData.cellIdx5}}</td>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;日至&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_6"
                  align="center"
                  style="width:10%"
                  data-title="年"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx6', '年', 'TextItem')"
                >{{letData.cellIdx6}}</td>
                <td class="textAlignLeft">年</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_7"
                  align="center"
                  style="width:10%"
                  data-title="月"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx7', '月', 'TextItem')"
                >{{letData.cellIdx7}}</td>
                <td class="textAlignLeft">月</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_8"
                  align="center"
                  style="width:10%"
                  data-title="日"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx8', '日', 'TextItem')"
                >{{letData.cellIdx8}}</td>
                <td class="textAlignLeft">日</td>
              </tr>
              <tr>
                <td class="textPaddingLeft">&nbsp;&nbsp;本卷共：&nbsp;&nbsp;</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_9"
                  align="center"
                  style="width:8%"
                  data-title="案由"
                  data-type="textarea"
                  data-src
                  @click="commandFill('cellIdx9', '案由', 'TextItem')"
                >{{letData.cellIdx9}}</td>
                <td class="textAlignLeft">件</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_10"
                  align="center"
                  style="width:8%"
                  data-title="案由"
                  data-type="textarea"
                  data-src
                  @click="commandFill('cellIdx10', '案由', 'TextItem')"
                >{{letData.cellIdx10}}</td>
                <td class="textAlignLeft">页</td>
                <td
                  class="textPaddingLeft"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;归档日期：&nbsp;&nbsp;</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_11"
                  align="center"
                  style="width:10%"
                  data-title="年"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx11', '年', 'TextItem')"
                >{{letData.cellIdx11}}</td>
                <td class="textAlignLeft">年</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_12"
                  align="center"
                  style="width:10%"
                  data-title="月"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx12', '月', 'TextItem')"
                >{{letData.cellIdx12}}</td>
                <td class="textAlignLeft">月</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_13"
                  align="center"
                  style="width:10%"
                  data-title="日"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx13', '日', 'TextItem')"
                >{{letData.cellIdx13}}</td>
                <td class="textAlignLeft">日</td>
              </tr>
              <tr>
                <td class="textPaddingLeft">承办人（签名）：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_14"
                  align="center"
                  style="width:80%"
                  data-title="承办人（签名）"
                  data-type="textarea"
                  data-src
                  @click="commandFill('cellIdx14', '承办人（签名）', 'TextItem')"
                >{{letData.cellIdx14}}</td>
              </tr>
              <tr>
                <td class="textPaddingLeft">&nbsp;&nbsp;&nbsp;档号：&nbsp;&nbsp;&nbsp;</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_15"
                  align="center"
                  style="width:40%"
                  data-title="档号"
                  data-type="textarea"
                  data-src
                  @click="commandFill('cellIdx15', '档号', 'TextItem')"
                >{{letData.cellIdx15}}</td>
                <td class="textPaddingLeft">&nbsp;&nbsp;保管期限：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_16"
                  align="center"
                  style="width:36%"
                  data-title="保管期限"
                  data-type="textarea"
                  data-src
                  @click="commandFill('cellIdx16', '保管期限', 'TextItem')"
                >{{letData.cellIdx16}}</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td class="cellInput" id="cell_idx_17" align="center" style="width:100%">{{letData.cellIdx17}}</td>
                <td class="cellInput" id="cell_idx_18" align="center" style="width:100%">{{letData.cellIdx18}}</td>
                <td class="cellInput" id="cell_idx_19" align="center" style="width:100%">{{letData.cellIdx19}}</td>
                <td class="cellInput" id="cell_idx_20" align="center" style="width:100%">{{letData.cellIdx20}}</td>
                <td class="cellInput" id="cell_idx_21" align="center" style="width:100%">{{letData.cellIdx21}}</td>
                <td class="cellInput" id="cell_idx_22" align="center" style="width:100%">{{letData.cellIdx22}}</td>
                <td class="cellInput" id="cell_idx_23" align="center" style="width:100%">{{letData.cellIdx23}}</td>
                <td class="cellInput" id="cell_idx_24" align="center" style="width:100%">{{letData.cellIdx24}}</td>
                <td class="cellInput" id="cell_idx_25" align="center" style="width:100%">{{letData.cellIdx25}}</td>
                <td class="cellInput" id="cell_idx_26" align="center" style="width:100%">{{letData.cellIdx26}}</td>
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
import { getDangerObject } from '@/utils/setInitPaperData'
export default {
  name: "Let214",
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
        cellIdx2: {
          page: '15',
          key: 'cellIdx2'
        },
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
      // 保存额外拼写的数据内容，用于修改隐患项时回显使用
      this.extraData = {
        corpName: corp.corpName,
      }
      if (checkPaper.length > 0) {
        // 回显
        this.letData = JSON.parse(checkPaper[0].paperContent);
        this.editData = checkPaper[0];
      } else {
        // 创建初始版本
        // 1.案卷题名: 煤矿名称+隐患描述+案
        // 获取笔录文书中的隐患数据
        const let101Data = await wkPaper.find((item) => {
          return item.caseId === caseId && item.paperType === '1';
        });
        let let101DataPapaerContent = JSON.parse(let101Data.paperContent)
        let dangerObject = getDangerObject(let101DataPapaerContent.dangerItemObject.tableData)
        let cellIdx2String = `${corp.corpName}${dangerObject.dangerString}案。`
        this.letData = {
          cellIdx0: null, // 执法单位
          cellIdx1: null, // 案卷类别
          cellIdx2: cellIdx2String, // 案卷题名
          cellIdx3: null, // 年
          cellIdx4: null, // 月
          cellIdx5: null, // 日
          cellIdx6: null, // 年
          cellIdx7: null, // 月
          cellIdx8: null, // 日
          cellIdx9: null, //
          cellIdx10: null, //
          cellIdx11: null, // 年
          cellIdx12: null, // 月
          cellIdx13: null, // 日
          cellIdx14: null, // 承办人（签名）
          cellIdx15: null, // 档号
          cellIdx16: null, // 保管期限
          cellIdx17: null, //
          cellIdx18: null, //
          cellIdx19: null, //
          cellIdx20: null, //
          cellIdx21: null, //
          cellIdx22: null, //
          cellIdx23: null, //
          cellIdx24: null, //
          cellIdx25: null, //
          cellIdx26: null, //
          dangerItemObject: let101DataPapaerContent.dangerItemObject
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
        if (key === 'cellIdx2') {
          this.options[key] = {
            page: '15',
            key: key,
            spellString: this.extraData
          }
          dataKey = 'dangerItemObject'
        }
        this.$refs.letMain.commandFill(key, dataKey, title, type, this.letData[dataKey], this.options[key])
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/let";
</style>