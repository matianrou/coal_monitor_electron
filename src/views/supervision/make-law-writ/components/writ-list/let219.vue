<!-- 行政处罚 案件结案 延期（分期）缴纳罚款决定书-->
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
            <div class="textAlignCenter formHeader1">煤矿安全监管行政执法文书</div>
            
            <div class="textAlignCenter formHeader3">
              <table class="docBody">
                <tr>
                  <td
                    class="cellInput"
                    id="cell_idx_0"
                    data-title="延期(分期)"
                    data-type="text"
                    data-src
                    @click="commandFill('cellIdx0', '延期(分期)', 'TextItem')"
                >{{ letData.cellIdx0 }}</td>
                  <td class="textAlignLeft">缴纳罚款决定书</td>
                </tr>
              </table>
            </div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput "
                  id="cell_idx_0"
                  align="right"
                  style="width:40%"
                  data-title="文书号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx0', '文书号', 'TextItem')"
                >{{letData.cellIdx0}}</td>
                <td class="textAlignLeft ">（</td>
                <td
                  class="cellInput "
                  id="cell_idx_1"
                  align="center"
                  style="width:20%"
                  data-title="文书号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx1', '文书号', 'TextItem')"
                >{{letData.cellIdx1}}</td>
                <td class="textAlignLeft ">）煤安缴决〔</td>
                
                <td
                  class="cellInput "
                  id="cell_idx_2"
                  align="center"
                  style="width:8%"
                  data-title="文书号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx2', '文书号', 'TextItem')"
                >{{letData.cellIdx2}}</td>
                <td class="textAlignLeft ">〕</td>
                <td
                  class="cellInput "
                  id="cell_idx_3"
                  align="center"
                  style="width:10%"
                  data-title="文书号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx3', '文书号', 'TextItem')"
                >{{letData.cellIdx3}}</td>
                <td class="textAlignLeft ">号&nbsp;&nbsp;</td>
              </tr>

            </table>
           
            <table class="docBody">
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_4"
                  align="center"
                  style="width:60%"
                  data-title=""
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx4', '', 'TextItem')"
                >{{letData.cellIdx4}}</td>
                <td>：</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td style="width:5%"></td>
                <td style="width:10%;text-align:right;">本机关于</td>
                
                 <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_6"
                  contenteditable="true"
                  align="center"
                  style="width:8%"
                  data-title="年"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx6', '年', 'TextItem')"
                >{{letData.cellIdx6}}</td>
                <td class="textAlignLeft">年</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_7"
                  contenteditable="true"
                  align="center"
                  style="width:8%"
                  data-title="月"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx7', '月', 'TextItem')"
                >{{letData.cellIdx7}}</td>
                <td class="textAlignLeft">月</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_20"
                  contenteditable="true"
                  align="center"
                  style="width:8%"
                  data-title="日"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx20', '日', 'TextItem')"
                >{{letData.cellIdx20}}</td>
                <td class="textAlignLeft">日向你</td>
                <td
                  class="cellInput "
                  id="cell_idx_20"
                  contenteditable="true"
                  align="center"
                  style="width:15%"
                  data-title="单位"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx20', '单位', 'TextItem')"
                >{{letData.cellIdx20}}</td>
                <td class="textAlignLeft">作出《行政处罚决定书》</td>
               
                <td class="textAlignLeft" >(</td>
                <td
                  class="cellInput"
                  id="cell_idx_5"
                  align="center"
                  style="width:9%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx5', '', 'TextItem')"
                >{{ letData.cellIdx5 }}</td>
                <td  class="textAlignLeft">(</td>
                 <td
                  class="cellInput"
                  id="cell_idx_5"
                  align="center"
                  style="width:20%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx5', '', 'TextItem')"
                >{{ letData.cellIdx5 }}</td>
                <td>)  </td>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;煤安罚&nbsp;&nbsp;&nbsp;〔</td>
                
                <td
                  class="cellInput"
                  id="cell_idx_12"
                  align="center"
                  style="width:12%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx12', '', 'TextItem')"
                >{{ letData.cellIdx12 }}</td>
                <td class="textAlignLeft">〕</td>
                
                <td
                  class="cellInput "
                  id="cell_idx_5"
                  align="center"
                  style="width:12%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx5', '', 'TextItem')"
                >{{ letData.cellIdx5 }}</td>
                <td class="textAlignLeft ">号&nbsp;&nbsp;，对你</td>
                 <td
                  class="cellInput "
                  id="cell_idx_5"
                  align="center"
                  style="width:17%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx5', '单位', 'TextItem')"
                >{{ letData.cellIdx5 }}</td>
                <td class="textAlignLeft ">作出罚款</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_5"
                  align="center"
                  style="width:24%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx5', '罚款', 'TextItem')"
                >{{ letData.cellIdx5 }}</td>
                <td class="textAlignLeft ">的行政处罚决定。现根据你</td>
                <td
                  class="cellInput "
                  id="cell_idx_5"
                  align="center"
                  style="width:17%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx5', '单位', 'TextItem')"
                >{{ letData.cellIdx5 }}</td>
                <td class="textAlignLeft ">的申请，本机关依据《中华人民</td>
                
                
              </tr>
              <tr>
                <td class="textAlignLeft ">共和国行政处罚法》第六十六条第二款规定，经研究，作出如下决定:</td>
              </tr>
            </table>
           
            <table class="docBody">
              <tr>
                <td style="width:5%"></td>
                <td
                  style="width:3%;"
                  class="cellInput"
                  id="cell_idx_8"
                  @click="commandFill('cellIdx8', '身份证', 'SelectItem')"
                >{{letData.cellIdx8}}</td>
                <td class="textAlignLeft ">不予批准</td>
                 <td
                  class="cellInput "
                  id="cell_idx_5"
                  align="center"
                  style="width:8%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx5', '', 'TextItem')"
                >{{ letData.cellIdx5 }}</td>
                <td class="textAlignLeft ">缴纳罚款。</td>
                 
              </tr>
              <tr>
                <td style="width:5%"></td>
                <td
                  id="cell_idx_9"
                  style="width:3%;"
                  class="cellInput"
                  @click="commandFill('cellIdx9', '营业执照', 'SelectItem')"
                >{{letData.cellIdx9}}</td>
                 <td class="textAlignLeft ">延期缴纳罚款。延长至</td>
                  <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_6"
                  contenteditable="true"
                  align="center"
                  style="width:8%"
                  data-title="年"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx6', '年', 'TextItem')"
                >{{letData.cellIdx6}}</td>
                <td class="textAlignLeft">年</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_7"
                  contenteditable="true"
                  align="center"
                  style="width:8%"
                  data-title="月"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx7', '月', 'TextItem')"
                >{{letData.cellIdx7}}</td>
                <td class="textAlignLeft">月</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_20"
                  contenteditable="true"
                  align="center"
                  style="width:8%"
                  data-title="日"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx20', '日', 'TextItem')"
                >{{letData.cellIdx20}}</td>
                <td class="textAlignLeft">日止。</td>

              </tr>
              <tr>
                <td style="width:5%"></td>
                <td
                  id="cell_idx_10"
                  style="width:3%;"
                  class="cellInput"
                  @click="commandFill('cellIdx10', '', 'SelectItem')"
                >{{letData.cellIdx10}}</td>
                <td class="textAlignLeft">分期缴纳罚款。分</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_20"
                  contenteditable="true"
                  align="center"
                  style="width:8%"
                  data-title="分几期"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx20', '分几期', 'TextItem')"
                >{{letData.cellIdx20}}</td>
                <td class="textAlignLeft">期：</td>
              </tr>
              
              <tr>
                <td style="width:5%"></td>
                <td colspan="2">如无法按时前来，请及时联系。</td>
              </tr>
            </table>
            <table class="docBody">
                <td style="width:5%"></td>

               <td class="textAlignLeft">第</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_7"
                  contenteditable="true"
                  align="center"
                  style="width:8%"
                  data-title="月"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx7', '月', 'TextItem')"
                >{{letData.cellIdx7}}</td>
                <td class="textAlignLeft">期至</td>
              <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_6"
                  contenteditable="true"
                  align="center"
                  style="width:8%"
                  data-title="年"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx6', '年', 'TextItem')"
                >{{letData.cellIdx6}}</td>
                <td class="textAlignLeft">年</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_7"
                  contenteditable="true"
                  align="center"
                  style="width:8%"
                  data-title="月"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx7', '月', 'TextItem')"
                >{{letData.cellIdx7}}</td>
                <td class="textAlignLeft">月</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_20"
                  contenteditable="true"
                  align="center"
                  style="width:8%"
                  data-title="日"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx20', '日', 'TextItem')"
                >{{letData.cellIdx20}}</td>
                <td class="textAlignLeft">日 &nbsp;&nbsp;&nbsp;&nbsp;前，缴纳罚款</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_20"
                  contenteditable="true"
                  align="center"
                  style="width:12%"
                  data-title="缴纳罚款"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx20', '缴纳罚款', 'TextItem')"
                >{{letData.cellIdx20}}</td>
                <td class="textAlignLeft">(￥</td>
                <td
                  class="cellInput "
                  id="cell_idx_20"
                  contenteditable="true"
                  align="center"
                  style="width:12%"
                  data-title="￥"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx20', '￥', 'TextItem')"
                >{{letData.cellIdx20}}</td>
                <td class="textAlignLeft">)</td>
              
            </table>
            <table class="docBody">
                <td style="width:5%"></td>

               <td class="textAlignLeft">第</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_7"
                  contenteditable="true"
                  align="center"
                  style="width:8%"
                  data-title="月"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx7', '月', 'TextItem')"
                >{{letData.cellIdx7}}</td>
                <td class="textAlignLeft">期至</td>
              <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_6"
                  contenteditable="true"
                  align="center"
                  style="width:8%"
                  data-title="年"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx6', '年', 'TextItem')"
                >{{letData.cellIdx6}}</td>
                <td class="textAlignLeft">年</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_7"
                  contenteditable="true"
                  align="center"
                  style="width:8%"
                  data-title="月"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx7', '月', 'TextItem')"
                >{{letData.cellIdx7}}</td>
                <td class="textAlignLeft">月</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_20"
                  contenteditable="true"
                  align="center"
                  style="width:8%"
                  data-title="日"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx20', '日', 'TextItem')"
                >{{letData.cellIdx20}}</td>
                <td class="textAlignLeft">日 &nbsp;&nbsp;&nbsp;&nbsp;前，缴纳罚款</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_20"
                  contenteditable="true"
                  align="center"
                  style="width:12%"
                  data-title="缴纳罚款"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx20', '缴纳罚款', 'TextItem')"
                >{{letData.cellIdx20}}</td>
                <td class="textAlignLeft">(￥</td>
                <td
                  class="cellInput "
                  id="cell_idx_20"
                  contenteditable="true"
                  align="center"
                  style="width:12%"
                  data-title="￥"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx20', '￥', 'TextItem')"
                >{{letData.cellIdx20}}</td>
                <td class="textAlignLeft">)</td>
              
            </table>
            
            <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_22"
                  align="right"
                  style="width:40%"
                  @click="commandFill('cellIdx17', '附件', 'TextItem')"
                >{{letData.cellIdx22 ? letData.cellIdx22 : '（点击编辑）'}}</td>
              </tr>
            </table>
            <table height="30"></table>
          <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_22"
                  align="right"
                  style="width:95%"
                  @click="commandFill('cellIdx17', '', 'TextItem')"
                >{{letData.cellIdx22 ? letData.cellIdx22 : '（点击编辑）'}}</td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_23"
                  align="right"
                  style="width:95%"
                  data-title
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx23', '日期', 'DateItem')"
                >{{letData.cellIdx23 ? letData.cellIdx18 : '（点击编辑）'}}</td>
              </tr>
            </table>
            
          </div>

          <table class="docBody">
              <hr />
              <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;备注：本文书一式三份，一份交银行，一份交被处单位，一份存档。</td>
             
            </table>
        </div>
      </div>
    </let-main>
  </div>
</template>

<script>
import letMain from "../let-main";
import GoDB from "@/utils/godb.min.js";
import { getDocNumber } from '@/utils/monitor/setInitPaperData'
const toggleDictionary = [
  {
    value: '□',
    name: '□'
  },
  {
    value: '√',
    name: '√'
  },
]
export default {
  name: "Let105",
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
        cellIdx8: toggleDictionary,
        cellIdx9: toggleDictionary,
        cellIdx10: toggleDictionary,
        cellIdx11: toggleDictionary,
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
        let paperNumber = await getDocNumber(db, this.docData.docTypeNo, caseId, this.$store.state.user)
        this.letData = {
          cellIdx0: paperNumber.num0, // 文书号
          cellIdx0TypeTextItem: paperNumber.num0, // 文书号
          cellIdx1: paperNumber.num1, // 文书号
          cellIdx1TypeTextItem: paperNumber.num1, // 文书号
          cellIdx2: paperNumber.num3, // 文书号
          cellIdx2TypeTextItem: paperNumber.num3, // 文书号
          cellIdx3: paperNumber.num4, // 文书号
          cellIdx3TypeTextItem: paperNumber.num4, // 文书号
          cellIdx4: corp.corpName, // 煤矿名称
          cellIdx4TypeTextItem: corp.corpName, // 煤矿名称
          cellIdx5: null, // 因XXX,
          cellIdx6: null, // 请你单位于XX日期
          cellIdx7: null, // 到XXX接受询问调查
          cellIdx8: '□', // 身份证
          cellIdx9: '□', // 营业执照
          cellIdx10: '□', // 法定代表人身份证明或者委托书
          cellIdx11: '□', // 其他
          cellIdx12: null, // 其他内容
          cellIdx13: null, // 执法机关地址
          cellIdx14: null, // 联系人
          cellIdx15: null, // 联系电话
          cellIdx16: null, // OrgName
          cellIdx17: null, // 日期
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