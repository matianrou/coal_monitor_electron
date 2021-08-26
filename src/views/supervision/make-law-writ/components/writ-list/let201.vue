<!-- 行政处罚 一般程序 立案决定书 -->
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
            <div class="textAlignCenter formHeader3">立 案 决 定 书</div>
            <div class="stdRowH"></div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput "
                  id="cell_idx_0"
                  align="right"
                  style="width:35%"
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
                  style="width:23%"
                  data-title="文书号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx1', '文书号', 'TextItem')"
                >{{letData.cellIdx1}}</td>
                <td class="textAlignLeft ">）</td>

                <td class="textAlignLeft ">&nbsp;&nbsp;煤安立&nbsp;&nbsp;〔</td>
               
                
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
                  style="width:12%"
                  data-title="文书号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx3', '文书号', 'TextItem')"
                >{{letData.cellIdx3}}</td>
                <td class="textAlignLeft ">号&nbsp;&nbsp;</td>
              </tr>
            </table>
            <table style="border:solid 0 #000;" class="docBody">
              <tr>
                <td class="textAlignLeft">案&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由：</td>
              </tr>
            </table>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              id="cell_idx_4"
              data-title="案由"
              data-type="textarea"
              data-src
              @click="commandFill('cellIdx4', '案由', 'DangerTableItem')">
              <div v-if="letData.cellIdx4 && letData.cellIdx4.length > 0">
                <p class="show-area-item-p">
                  <span style="padding: 7px;">{{ letData.cellIdx4? letData.cellIdx4 : '（点击编辑）' }}</span>
                </p>
              </div>
              <div v-else>
                <p class="show-area-item-p">
                  &nbsp;
                </p>
                <p class="show-area-item-p">
                  &nbsp;
                </p>
              </div>
            </div>
            <table style="border:solid 0 #000;" class="docBody">
              <tr>
                <td class="textAlignLeft">案情摘要：</td>
              </tr>
            </table>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              id="cell_idx_5"
              data-title="案情摘要"
              data-type="textarea"
              data-src
              @click="commandFill('cellIdx5', '案情摘要', 'DangerTableItem')">
              <div v-if="letData.cellIdx5 && letData.cellIdx5.length > 0">
                <p class="show-area-item-p">
                  <span style="padding: 7px;">{{ letData.cellIdx5 ? letData.cellIdx5 : '（点击编辑）'}}</span>
                </p>
              </div>
              <div v-else>
                <p class="show-area-item-p">
                  &nbsp;
                </p>
                <p class="show-area-item-p">
                  &nbsp;
                </p>
              </div>
            </div>
            <table class="docBody">
              <tr>
                <td style="width:5%"></td>
                <td class="textAlignLeft">根据以上案由案情，决定自</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_6"
                  contenteditable="true"
                  align="center"
                  style="width:12%"
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
                  style="width:12%"
                  data-title="月"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx7', '月', 'TextItem')"
                >{{letData.cellIdx7}}</td>
                <td class="textAlignLeft">月</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_8"
                  contenteditable="true"
                  align="center"
                  style="width:12%"
                  data-title="日"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx8', '日', 'TextItem')"
                >{{letData.cellIdx8}}</td>
                <td class="textAlignLeft">日起立案调查处理，并指定</td>
              </tr>
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_9"
                  align="left"
                  style="width:35%"
                  data-title="本案承办人"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx9', '本案承办人', 'TextItem')"
                >{{letData.cellIdx9}}</td>
                <td class="textAlignLeft">为本案承办人。</td>
              </tr>
            </table>

            <table height="60"></table>

            <table class="docBody">
              <tr>
                <td style="width:5%"></td>
                <td class="textAlignLeft">审批人意见：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_10"
                  style="width:20%"
                  data-title="审批人意见"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx10', '审批人意见', 'TextItem')"
                >{{letData.cellIdx10}}</td>
                <td class="textAlignLeft">审批人（签名）：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_11"
                  style="width:18%"
                  data-title="审批人（签名）"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx11', '审批人（签名）', 'TextItem')"
                >{{letData.cellIdx11}}</td>
                <td class="textAlignCenter">日期:</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_12"
                  style="width:18%"
                  data-title="日期"
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx12', '日期', 'DateItem')"
                >{{letData.cellIdx12}}</td>
              </tr>
            </table>
            <table height="60"></table>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_13"
                  contenteditable="true"
                  align="right"
                  style="width:95%"
                @click="commandFill('cellIdx13', '', 'DateItem')"
                >{{letData.cellIdx13}}</td>
              </tr>
            </table>
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
            <table height="60"></table>
           
            <!-- <table>
		<hr />
		<td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;备注：本文书一式两份，一份交被复查单位，一份存档。</td>
            </table>-->
          </div>
        </div>
      </div>
    </let-main>
  </div>
</template>

<script>
import letMain from "../let-main";
import GoDB from "@/utils/godb.min.js";
import { handleDate } from '@/utils/date'
import { getDangerObject, getDocNumber } from '@/utils/monitor/setInitPaperData'
export default {
  name: "Let201",
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
        cellIdx4: {
          page: '4',
          key: 'cellIdx4' // 用来区分一个页面多个地方调用隐患大表，最后返回值
        },
        cellIdx5: {
          page: '4',
          key: 'cellIdx5'
        }
      },
      editData: {}, // 回显数据
      extraData: {}, // 用于拼写隐患内容的字符集合
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
      // 保存额外拼写的数据内容，用于修改隐患项时回显使用
      // 获取检查时间
      const let100Data = await wkPaper.find((item) => {
        return item.caseId === caseId && item.paperType === '22';
      });
      let let100DataPapaerContent = JSON.parse(let100Data.paperContent)
      // 整合检查时间日期文本：
      let dateString = handleDate(let100DataPapaerContent.cellIdx2, '-')
      this.extraData = {
        corpName: corp.corpName,
        dateString,
        userGroupName: this.$store.state.user.userGroupName,
      }
      // 已做文书则展示文书内容，否则创建初始版本
      if (checkPaper.length > 0) {
        // 回显
        this.letData = JSON.parse(checkPaper[0].paperContent);
        this.editData = checkPaper[0];
      } else {
        // 创建初始版本
        // 1.案由内容初始化：煤矿名称+隐患描述+“案”组成
        // 获取笔录文书中的隐患数据
        const let101Data = await wkPaper.find((item) => {
          return item.caseId === caseId && item.paperType === '1';
        });
        let let101DataPapaerContent = JSON.parse(let101Data.paperContent)
        let dangerObject = getDangerObject(let101DataPapaerContent.dangerItemObject.tableData)
        let cellIdx4String = `${corp.corpName}${dangerObject.dangerString}案。`
        // 2.案情摘要：检查时间+当前机构名称+“对”+煤矿名称+“进行现场检查时发现”+隐患描述+"以上行为分别涉嫌违反了"+违法认定法条+“依据《安全生产违法行为行政处罚办法》第二十三条的规定申请立案。”
        dangerObject = getDangerObject(let101DataPapaerContent.dangerItemObject.tableData, {danger: true})
        let cellIdx5String = `${dateString}，${this.$store.state.user.userGroupName}对${corp.corpName}进行现场检查时发现：${dangerObject.dangerString}以上行为分别涉嫌违反了${dangerObject.illegalString}的规定。依据《安全生产违法行为行政处罚办法》第二十三条的规定申请立案。`
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
          cellIdx4: cellIdx4String, // 案由
          cellIdx5: cellIdx5String, // 案情摘要
          cellIdx6: null, // 年
          cellIdx7: null, // 月
          cellIdx8: null, // 日
          cellIdx9: null, // 本案承办人
          cellIdx10: null, // 审批人意见
          cellIdx11: null, // 审批人（签名）
          cellIdx12: null, // 日期
          cellIdx13: null, //
          cellIdx14: null, // 年
          cellIdx15: null, // 月
          cellIdx16: null, // 日
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
        let spellString = {}
        if (key === 'cellIdx4' || key === 'cellIdx5') {
          if (key === 'cellIdx4') {
            spellString = {
              corpName: this.extraData.corpName,
            }
          } else if (key === 'cellIdx5') {
            spellString = this.extraData
          }
          this.options[key] = {
            page: '4',
            key: key,
            spellString
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