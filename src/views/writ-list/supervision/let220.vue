<!--行政处罚 案件结案 加处罚款决定书 -->
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
              煤矿安全监管行政执法文书
              <br />
            </div>
            <div class="textAlignCenter formHeader3">加处罚款决定书</div>
            <div class="stdRowH"></div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_0"
                  align="right"
                  style="width:35%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx0', '文书号', 'TextItem')"
                >{{ letData.cellIdx0 }}</td>
                <td>（</td>
                <td
                  class="cellInput "
                  id="cell_idx_1"
                  align="center"
                  style="width:20%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx1', '', 'TextItem')"
                >{{ letData.cellIdx1 }}</td>

                <td class="textAlignLeft ">） 煤安加罚〔</td>

                <td
                  class="cellInput "
                  id="cell_idx_2"
                  align="center"
                  style="width:8%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx2', '', 'TextItem')"
                >{{ letData.cellIdx2 }}</td>
                <td class="textAlignLeft ">〕</td>
                <td
                  class="cellInput "
                  id="cell_idx_3"
                  align="center"
                  style="width:10%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx3', '', 'TextItem')"
                >{{ letData.cellIdx3 }}</td>
                <td class="textAlignLeft ">号&nbsp;&nbsp;</td>
              </tr>
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_4"
                  style="width:62%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx4', '', 'TextItem')"
                >{{ letData.cellIdx4 }}</td>
                <td class="textAlignLeft">:</td>
              </tr>
            </table>
            <table style="border:solid 0px #000;" class="docBody">
              <tr>
                <td style="width:5%"></td>
                <td class="textAlignLeft">本机关于</td>

                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_6"
                  align="center"
                  style="width:8%"
                  data-title="年"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx6', '年', 'TextItem')"
                >{{ letData.cellIdx6 }}</td>
                <td class="textAlignLeft">年</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_7"
                  align="center"
                  style="width:8%"
                  data-title="月"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx7', '月', 'TextItem')"
                >{{ letData.cellIdx7 }}</td>
                <td class="textAlignLeft">月</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_8"
                  align="center"
                  style="width:8%"
                  data-title="日"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx8', '日', 'TextItem')"
                >{{ letData.cellIdx8 }}</td>
                <td class="textAlignLeft">日向你</td>
                 <td
                  class="cellInput "
                  id="cell_idx_8"
                  align="center"
                  style="width:12%"
                  data-title="单位"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx8', '单位', 'TextItem')"
                >{{ letData.cellIdx8 }}</td>
                <td class="textAlignLeft">送达 《行政处罚决定书》 (</td>
                
                <td
                  class="cellInput"
                  id="cell_idx_5"
                  align="center"
                  style="width:12%"
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
                  style="width:12%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx5', '', 'TextItem')"
                >{{ letData.cellIdx5 }}</td>
                <td class="textAlignLeft">)  </td>
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
                <td class="textAlignLeft ">〕</td>

                
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
                <td class="textAlignLeft ">号&nbsp;&nbsp;，对你 </td>
                 <td
                  class="cellInput "
                  id="cell_idx_5"
                  align="center"
                  style="width:12%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx5', '单位', 'TextItem')"
                >{{ letData.cellIdx5 }}</td>
                 <td class="textAlignLeft">罚款</td>

                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_6"
                  align="center"
                  style="width:20%"
                  data-title="年"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx6', '年', 'TextItem')"
                >{{ letData.cellIdx6 }}</td>
                <td class="textAlignLeft">，要求于</td>

                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_6"
                  align="center"
                  style="width:8%"
                  data-title="年"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx6', '年', 'TextItem')"
                >{{ letData.cellIdx6 }}</td>
                <td class="textAlignLeft">年</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_7"
                  align="center"
                  style="width:8%"
                  data-title="月"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx7', '月', 'TextItem')"
                >{{ letData.cellIdx7 }}</td>
                <td class="textAlignLeft">月</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_8"
                  align="center"
                  style="width:8%"
                  data-title="日"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx8', '日', 'TextItem')"
                >{{ letData.cellIdx8 }}</td>
                <td class="textAlignLeft">日前履行。 &nbsp;截至</td>
                

                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_6"
                  align="center"
                  style="width:8%"
                  data-title="年"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx6', '年', 'TextItem')"
                >{{ letData.cellIdx6 }}</td>
                <td class="textAlignLeft">年</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_7"
                  align="center"
                  style="width:8%"
                  data-title="月"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx7', '月', 'TextItem')"
                >{{ letData.cellIdx7 }}</td>
                <td class="textAlignLeft">月</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_8"
                  align="center"
                  style="width:8%"
                  data-title="日"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx8', '日', 'TextItem')"
                >{{ letData.cellIdx8 }}</td>
                <td class="textAlignLeft">日你单位未履行</td>
               

              </tr>
              <tr>
                
                <td class="textAlignLeft">该处罚决定，依据《中华人民共和国行政处罚法》第七十二条第一款第一项规定，本机关决定对你</td>

              </tr>
              <tr>
                <td
                  class="cellInput "
                  id="cell_idx_8"
                  align="center"
                  style="width:10%"
                  data-title="单位"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx8', '单位', 'TextItem')"
                >{{ letData.cellIdx8 }}</td>
                <td class="textAlignLeft">加处罚款</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_8"
                  align="center"
                  style="width:23%"
                  data-title="加处罚款"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx8', '加处罚款', 'TextItem')"
                >{{ letData.cellIdx8 }}</td>
                <td class="textAlignLeft">，并于</td>

                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_6"
                  align="center"
                  style="width:8%"
                  data-title="年"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx6', '年', 'TextItem')"
                >{{ letData.cellIdx6 }}</td>
                <td class="textAlignLeft">年</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_7"
                  align="center"
                  style="width:8%"
                  data-title="月"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx7', '月', 'TextItem')"
                >{{ letData.cellIdx7 }}</td>
                <td class="textAlignLeft">月</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_8"
                  align="center"
                  style="width:8%"
                  data-title="日"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx8', '日', 'TextItem')"
                >{{ letData.cellIdx8 }}</td>
                <td class="textAlignLeft">日前将加处的罚款缴至</td>


              </tr>

              
             

              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_8"
                  align="center"
                  style="width:38%"
                  data-title="罚款缴至"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx8', '罚款缴至', 'TextItem')"
                >{{ letData.cellIdx8 }}</td>

                <td class="textAlignLeft" style="width:6%"> 银行</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_5"
                  align="center"
                  style="width:40%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx5', '支行（分理处）', 'TextItem')"
                >{{ letData.cellIdx5 }}</td>
                <td class="textAlignLeft" style="width:16%">支行（分理处）</td>
              </tr>
               <tr>

                <td class="textAlignLeft" style="width:12%"> 账户名称：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_5"
                  align="center"
                  style="width:42%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx5', '账户名称', 'TextItem')"
                >{{ letData.cellIdx5 }}</td>
                <td class="textAlignLeft" style="width:6%">账号</td>
                 <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_5"
                  align="center"
                  style="width:40%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx5', '账号', 'TextItem')"
                >{{ letData.cellIdx5 }}</td>
              </tr>
              <tr>
                <td class="textAlignLeft" style="width:8%">地址：</td>
                 <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_5"
                  align="center"
                  style="width:40%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx5', '地址', 'TextItem')"
                >{{ letData.cellIdx5 }}</td>

              </tr>
               <tr>
                <td style="width:5%"></td>
                <td
                  class="textAlignLeft"
                >如不服本决定，可在接到本决定书之日起60日内向</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_16"
                  align="center"
                  style="width:44%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx16', '', 'TextItem')"
                >{{ letData.cellIdx16 }}</td>
               
              </tr>
              <tr>
                 <td class="textAlignLeft">人民政府或者</td>
                 <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_17"
                  align="center"
                  style="width:49%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx17', '', 'TextItem')"
                >{{ letData.cellIdx17 }}</td>
                <td class="textAlignLeft">申请行政复议，或者在6个月内依法向</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_17"
                  align="center"
                  style="width:35%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx17', '', 'TextItem')"
                >{{ letData.cellIdx17 }}</td>
                <td class="textAlignLeft">人民法院提起行政诉讼；复议、诉讼期间，不停止执行本决定。</td>
              </tr>
              

            </table>
            <table height="60"></table>
            

          <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_12"
                  align="right"
                  style="width:95%"
                  @click="commandFill('cellIdx12', '', 'TextItem')"
                >{{letData.cellIdx12 ? letData.cellIdx12 : '（点击编辑）'}}</td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_24"
                  align="right"
                  style="width:95%"
                  data-title
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx23', '日期', 'DateItem')"
                >{{letData.cellIdx24 ? letData.cellIdx24: '（点击编辑）'}}</td>
              </tr>
            </table>
            
            <table>
              <hr />
              <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;备注：本文书一式三份；一份交银行，一份交被处罚</td>
              <td
                  class="cellInput "
                  id="cell_idx_17"
                  style="width:10%"
                  data-title="单位"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx17', '单位', 'TextItem')"
                >{{letData.cellIdx17}}</td>
              <td class="textAlignLeft">，一份存档。</td>

            </table>
          </div>
        </div>
      </div>
    </let-main>
  </div>
</template>

<script>
import letMain from "@/views/make-law-writ/components/let-main";
import GoDB from "@/utils/godb.min.js";
import { getDangerObject, getDocNumber } from '@/utils/setInitPaperData'
export default {
  name: "Let106",
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
        cellIdx12: {
          page: '3',
          key: 'cellIdx12'
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
        // 1.生成文书编号
        let { num0, num1, num3, num4 } = await getDocNumber(db, this.docData.docTypeNo, caseId, this.$store.state.user)
        // 2.时间
        let now = new Date()
        let cellIdx6Year = now.getFullYear()
        let cellIdx7Month = now.getMonth() + 1
        let cellIdx8Date = now.getDate()
        let cellIdx9Hour = now.getHours()
        let cellIdx10Minu = now.getMinutes()
        // 3.隐患描述
        // 获取笔录文书中的隐患数据
        const let101Data = await wkPaper.find((item) => {
          return item.caseId === caseId && item.paperType === '1';
        });
        let let101DataPapaerContent = JSON.parse(let101Data.paperContent)
        let dangerObject = getDangerObject(let101DataPapaerContent.dangerItemObject.tableData)
        let cellIdx12String = dangerObject.dangerString
        // 4.sysOfficeInfo中organName和courtPrefix
        const orgInfo = db.table("orgInfo");
        const orgData = await orgInfo.find(item => item.no === this.$store.state.user.userGroupId)
        let orgSysOfficeInfo = JSON.parse(orgData.sysOfficeInfo)
        let cellIdx19String = orgSysOfficeInfo.organName
        let cellIdx20String = orgSysOfficeInfo.courtPrefix
        this.letData = {
          cellIdx0: num0, // 文书号
          cellIdx0TypeTextItem: num0, // 文书号
          cellIdx1: num1, // 文书号
          cellIdx1TypeTextItem: num1, // 文书号
          cellIdx2: num3, // 文书号
          cellIdx2TypeTextItem: num3, // 文书号
          cellIdx3: num4, // 文书号
          cellIdx3TypeTextItem: num4, // 文书号
          cellIdx4: corp.corpName ? corp.corpName : null, // corpname
          cellIdx4TypeTextItem: corp.corpName ? corp.corpName : null, // corpname
          cellIdx5: null, // 单位
          cellIdx6: cellIdx6Year, // 年
          cellIdx6TypeTextItem: cellIdx6Year, // 年
          cellIdx7: cellIdx7Month, // 月
          cellIdx7TypeTextItem: cellIdx7Month, // 月
          cellIdx8: cellIdx8Date, // 日
          cellIdx8TypeTextItem: cellIdx8Date, // 日
          cellIdx9: cellIdx9Hour, // 时
          cellIdx9TypeTextItem: cellIdx9Hour, // 时
          cellIdx10: cellIdx10Minu, // 分
          cellIdx10TypeTextItem: cellIdx10Minu, // 分
          cellIdx11: null, // 发现在。。。有
          cellIdx12: cellIdx12String, // 隐患描述
          cellIdx13: null, //
          cellIdx14: cellIdx6Year, // 年
          cellIdx14TypeTextItem: cellIdx6Year, // 年
          cellIdx15: cellIdx7Month, // 月
          cellIdx15TypeTextItem: cellIdx7Month, // 月
          cellIdx16: cellIdx8Date, // 日
          cellIdx16TypeTextItem: cellIdx8Date, // 日
          cellIdx17: cellIdx9Hour, // 时
          cellIdx17TypeTextItem: cellIdx9Hour, // 时
          cellIdx18: cellIdx10Minu, // 分
          cellIdx18TypeTextItem: cellIdx10Minu, // 分
          cellIdx19: null, //
          cellIdx20: cellIdx19String, // 机构名
          cellIdx20TypeTextItem: cellIdx19String, // 机构名
          cellIdx21: cellIdx20String, // 人民法院
          cellIdx21TypeTextItem: cellIdx20String, // 人民法院
          cellIdx22: null, // 现场执法人员（签名）
          cellIdx23: null, // 执法证号
          cellIdx24: null, // 现场执法人员（签名）
          cellIdx25: null, // 执法证号
          cellIdx26: null, //被检查单位负责人意见
          cellIdx27: null, // 签名
          cellIdx28: null, // 日期
          cellIdx29: null, //
          cellIdx30: null, // 年
          cellIdx31: null, //月
          cellIdx32: null, //日
          dangerItemObject: let101DataPapaerContent.dangerItemObject
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
        if (key === 'cellIdx12') {
          this.options[key] = {
            page: '3',
            key: key,
          }
          dataKey = 'dangerItemObject'
        }
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