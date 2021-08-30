<!-- 现场检查 复查 复查意见书 13 -->
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
            <div class="textAlignCenter formHeader3">复 查 意 见 书</div>
            <div class="stdRowH"></div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput "
                  id="cell_idx_0"
                  align="right"
                  style="width:40%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx0', '', 'TextItem')"
                >{{ letData.cellIdx0 }}</td>
                <td>(</td>
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
                <td class="textAlignLeft ">)  煤安复〔</td>
                <td
                  class="cellInput "
                  id="cell_idx_2"
                  align="center"
                  style="width:7%"
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
                  style="width:8%"
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
            <div class="docTextarea">
              <label style="width:5%"></label>
              <span 
                @click="commandFill('cellIdx5', '', 'TextItem')"
              >{{ letData.cellIdx5  ? letData.cellIdx5 : '（点击编辑）'}}</span>
              于
              <span
                @click="commandFill('cellIdx6', '年', 'TextItem')"
              >{{ letData.cellIdx6 ? letData.cellIdx7 : '（XX）'}}</span>
              年
              <span
                @click="commandFill('cellIdx7', '月', 'TextItem')"
              >{{ letData.cellIdx7 ? letData.cellIdx7 : '（XX）' }}</span>
              月
              <span
                @click="commandFill('cellIdx8', '日', 'TextItem')"
              >{{ letData.cellIdx8 ? letData.cellIdx8 : '（XX）'}}</span>
              日发现
              <span
                @click="commandFill('cellIdx9', '违法行为', 'DangerTableItem')"
              >{{ letData.cellIdx9 }}</span>
              的违法违规行为，下达了《现场处理决定书》
              <span style="borderBottom:none"
                @click="commandFill('cellIdx10', '', 'TextItem')"
              >{{ letData.cellIdx10 }}</span>
              （ 
              <span style="borderBottom:none"
                @click="commandFill('cellIdx11', '', 'TextItem')"
              >{{ letData.cellIdx11 }}</span>
              )  煤安处〔
              <span style="borderBottom:none"
                @click="commandFill('cellIdx12', '', 'TextItem')"
              >{{ letData.cellIdx12 }}</span>
              〕
              <span style="borderBottom:none"
                @click="commandFill('cellIdx13', '', 'TextItem')"
              >{{ letData.cellIdx13 }}</span>

              号&nbsp;依法作出了
              <span
                @click="commandFill('cellIdx14', '现场处理决定', 'DangerTableItem')"
              >{{ letData.cellIdx14 }}</span>
              的决定。

            </div>

             <div class="docTextarea">
              <label style="width:5%"></label>
              应你单位申请，经复查，意见如下：
              <span 
                @click="commandFill('cellIdx15', '意见', 'TextareaItem')"
              >{{ letData.cellIdx15 ? letData.cellIdx15 : '（点击编辑）'}}</span>
              
              <div class="line"></div>
            </div>
            <table style="border:solid 0px #000;" class="docBody">
             
              <tr>
                <td style="width:5%"></td>
                <td class="textAlignLeft" style="width:36%"></td>
              </tr>
              <tr></tr>
            </table>
           
            <table class="docBody">
              <tr>
                <td class="textAlignLeft" style="width:23%">现场执法人员（签名):</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_16"
                  align="center"
                  style="width:30%"
                  data-title="现场执法人员（签名)"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx16', '现场执法人员（签名)', 'TextItem')"
                >{{letData.cellIdx16}}</td>
                <td class="textAlignCenter" style="width:12%">执法证号：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_17"
                  align="center"
                  style="width:35%"
                  data-title="执法证号"
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx17', '执法证号', 'TextItem')"
                >{{letData.cellIdx17}}</td>
                <td style="width:23%"></td>
                 <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_18"
                  align="center"
                  style="width:30%"
                  data-title="现场执法人员（签名)"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx18', '现场执法人员（签名)', 'TextItem')"
                >{{letData.cellIdx18}}</td>
                <td class="textAlignCenter" style="width:12%">执法证号：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_19"
                  align="center"
                  style="width:35%"
                  data-title="执法证号"
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx19', '执法证号', 'TextItem')"
                >{{letData.cellIdx19}}</td>
              </tr>
              <tr>

                <td class="textAlignLeft" style="width:18%">被检查单位意见：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_20"
                  align="center"
                  style="width:18%"
                  data-title="被检查单位意见"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx20', '被检查单位意见', 'TextItem')"
                >{{letData.cellIdx20}}</td>
                <td class="textAlignLeft" style="width:23%">单位负责人（签名）：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_21"
                  align="center"
                  style="width:15%"
                  data-title="单位负责人（签名)"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx21', '单位负责人（签名)', 'TextItem')"
                >{{letData.cellIdx21}}</td>
                <td class="textAlignCenter" style="width:7%">日期：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_22"
                  align="center"
                  style="width:19%"
                  data-title="日期"
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx22', '日期', 'DateItem')"
                >{{letData.cellIdx22}}</td>
              </tr>
            </table>
            <table height="30"></table>

            
             <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_23"
                  align="right"
                  style="width:95%"
                  @click="commandFill('cellIdx23', '', 'TextItem')"
                >{{letData.cellIdx23 ? letData.cellIdx23 : '（点击编辑）'}}</td>
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
                  @click="commandFill('cellIdx24', '日期', 'DateItem')"
                >{{letData.cellIdx24 ? letData.cellIdx24 : '（点击编辑）'}}</td>
              </tr>
            </table>
            <table>
              <hr />
              <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;备注：本文书一式两份，一份交被复查单位，一份存档。</td>
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
import { getDangerObject, getDocNumber } from '@/utils/setInitPaperData'
export default {
  name: "Let104",
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
        cellIdx9: {
          page: '13',
          key: 'cellIdx9'
        },
        cellIdx14: {
          page: '13',
          key: 'cellIdx14'
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
      // await wkPaper.delete(checkPaper[0].id)
      // 已做文书则展示文书内容，否则创建初始版本
      if (checkPaper.length > 0) {
        // 回显
        this.letData = JSON.parse(checkPaper[0].paperContent);
        this.editData = checkPaper[0];
      } else {
        // 创建初始版本
        // 1.生成文书编号
        let { num0, num1, num3, num4 } = await getDocNumber(db, this.docData.docTypeNo, caseId, this.$store.state.user)
        // 2.发现你矿存在：隐患描述
        // 获取笔录文书中的隐患数据
        const let101Data = await wkPaper.find((item) => {
          return item.caseId === caseId && item.paperType === '1' && item.delFlag !== '1';
        })
        if (!let101Data) {
          this.$message.error('请先填写并保存现场检查记录中内容！')
          return
        }
        let let101DataPapaerContent = JSON.parse(let101Data.paperContent)
        let dangerObject = getDangerObject(let101DataPapaerContent.dangerItemObject.tableData, {danger: true})
        let cellIdx9String = dangerObject.dangerString
        let cellIdx10String = dangerObject.onsiteDescString
        // 现场处理决定书文书号：
        let let102Data = await wkPaper.find((item) => {
          return item.caseId === caseId && item.paperType === '2' && item.delFlag !== '1';
        });
        if (!let102Data) {
          this.$message.error('请先填写并保存现场处理决定书中内容！')
          return
        }
        let let102DataPapaerContent = JSON.parse(let102Data.paperContent)
        this.letData = {
          cellIdx0: num0, // 文书号
          cellIdx0TypeTextItem: num0, // 文书号
          cellIdx1: num1, // 文书号
          cellIdx1TypeTextItem: num1, // 文书号
          cellIdx2: num3, // 文书号
          cellIdx2TypeTextItem: num3, // 文书号
          cellIdx3: num4, // 文书号
          cellIdx3TypeTextItem: num4, // 文书号
          cellIdx4: corp.corpName ? corp.corpName : null, //
          cellIdx4TypeTextItem: corp.corpName ? corp.corpName : null, //
          cellIdx5: null, // 单位
          cellIdx6: null, // 年
          cellIdx7: null, // 月
          cellIdx8: null, // 日
          cellIdx9: cellIdx9String, // 违法违规行为：隐患描述
          cellIdx10: let102DataPapaerContent.cellIdx0, // 现场处理决定书 文书号
          cellIdx10TypeTextItem: let102DataPapaerContent.cellIdx0, // 现场处理决定书 文书号
          cellIdx11: let102DataPapaerContent.cellIdx1, // 现场处理决定书 文书号
          cellIdx11TypeTextItem: let102DataPapaerContent.cellIdx1, // 现场处理决定书 文书号
          cellIdx12: let102DataPapaerContent.cellIdx2, // 现场处理决定书 文书号
          cellIdx12TypeTextItem: let102DataPapaerContent.cellIdx2, // 现场处理决定书 文书号
          cellIdx13: let102DataPapaerContent.cellIdx3, // 现场处理决定书 文书号
          cellIdx13TypeTextItem: let102DataPapaerContent.cellIdx3, // 现场处理决定书 文书号
          cellIdx14: cellIdx10String, // 现场处理决定
          cellIdx15: null, // 意见
          cellIdx16: null, // 现场执法人员（签名)
          cellIdx17: null, // 执法证号
          cellIdx18: null, // 现场执法人员（签名)
          cellIdx19: null, // 执法证号
          cellIdx20: null, // 被检查单位意见
          cellIdx21: null, // 单位负责人（签名)
          cellIdx22: null, // 日期
          cellIdx23: null, // 
          cellIdx24: null, //日期
       
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
        if (key === 'cellIdx9' || key === 'cellIdx14') {
          this.options[key] = {
            page: '13',
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