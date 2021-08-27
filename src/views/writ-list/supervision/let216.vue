<!-- 行政处罚 一般程序 案件处理呈报书 -->
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
              <br/>
            </div>
            <div class="textAlignCenter formHeader3">案件处理呈报书</div>
            <div class="stdRowH"></div>
            <table class="docBody">
              <tr>
                <td class="cellInput" id="cell_idx_0" align="right" style="width:70%"
                    @click="commandFill('cellIdx0', '', 'TextItem')"
                >{{ letData.cellIdx0 }}
                </td>
                <td class="textAlignLeft">编号：</td>
                <td
                    class="cellInput cellBottomLine"
                    id="cell_idx_1"
                    align="center"
                    style="width:23%"
                    data-title="编号"
                    data-type="text"
                    data-src
                    @click="commandFill('cellIdx1', '编号', 'TextItem')"
                >{{ letData.cellIdx1 }}
                </td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td
                    class="cellInput "
                    id="cell_idx_2"
                    style="width:70%"
                    data-title
                    data-type="text"
                    data-src
                    @click="commandFill('cellIdx2', '', 'TextItem')"
                >{{ letData.cellIdx2 }}
                </td>
              </tr>
              <tr>
                <td style="width:5%"></td>
                <td class="textAlignLeft">案&nbsp;&nbsp;由：</td>
              </tr>
            </table>
            <div
                style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
                class="cellInput mutiLineArea"
                id="cell_idx_3"
                data-title="案由"
                data-type="textarea"
                data-src
                @click="commandFill('cellIdx3', '案由', 'DangerTableItem')">
              <div v-if="letData.cellIdx3 && letData.cellIdx3.length > 0">
                <p class="show-area-item-p">
                  <span style="padding: 7px;">{{ letData.cellIdx3 ? letData.cellIdx3 : '（点击编辑）' }}</span>
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
            <table style="border:solid 0s #000;" class="docBody">
              <tr>

                <td class="textAlignLeft">立案决定书编号：</td>
                <td
                    class="cellInput cellBottomLine"
                    id="cell_idx_4"
                    style="width:40%"
                    data-title
                    data-type="text"
                    data-src
                    @click="commandFill('cellIdx4', '立案决定书编号', 'TextItem')"
                >{{ letData.cellIdx4 }}
                </td>
                <td class="textAlignLeft">立案时间：</td>
                <td
                    class="cellInput cellBottomLine"
                    id="cell_idx_5"
                    style="width:31%"
                    data-title
                    data-type="text"
                    data-src
                    @click="commandFill('cellIdx5', '立案时间', 'DateItem')"
                >{{ letData.cellIdx5 }}
                </td>
              </tr>
              <tr>

                <td class="textAlignLeft">承办人：</td>
                <td
                    class="cellInput cellBottomLine"
                    id="cell_idx_6"
                    style="width:91%"
                    data-title
                    data-type="text"
                    data-src
                    @click="commandFill('cellIdx6', '承办人', 'TextItem')"
                >{{ letData.cellIdx6 }}
                </td>

              </tr>
            </table>
            <table style="border:solid 0s #000;" class="docBody">
              <tr>

                <td class="textAlignLeft">违法事实及依据：</td>
              </tr>
            </table>
            <div
                style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
                class="cellInput mutiLineArea"
                id="cell_idx_7"
                data-title="违法事实及依据"
                data-type="textarea"
                data-src
                @click="commandFill('cellIdx7', '违法事实及依据', 'TextareaItem')">
              <p class="show-area-item-p">
                <span style="padding: 7px;">{{ letData.cellIdx7 ? letData.cellIdx7 : '（点击编辑）' }}</span>
              </p>
            </div>
            <table style="border:solid 0s #000;" class="docBody">
              <tr>

                <td class="textAlignLeft">法制审核意见：</td>
              </tr>
            </table>
            <div
                style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
                class="cellInput mutiLineArea"
                id="cell_idx_8"
                data-title="法制审核意见"
                data-type="textarea"
                data-src
                @click="commandFill('cellIdx8', '法制审核意见', 'TextareaItem')">
              <p class="show-area-item-p">
                <span style="padding: 7px;">{{ letData.cellIdx8 ? letData.cellIdx8 : '（点击编辑）' }}</span>
              </p>
            </div>
            <table style="border:solid 0s #000;" class="docBody">
              <tr>

                <td class="textAlignLeft">建议案件处理意见：</td>
              </tr>
            </table>
            <div
                style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
                class="cellInput mutiLineArea"
                id="cell_idx_9"
                data-title="建议案件处理意见"
                data-type="textarea"
                data-src
                @click="commandFill('cellIdx9', '建议案件处理意见', 'TextareaItem')">
              <p class="show-area-item-p">
                <span style="padding: 7px;">{{ letData.cellIdx9 ? letData.cellIdx9 : '（点击编辑）' }}</span>
              </p>
            </div>

            <table height="60"></table>
            <table class="docBody">
              <tr>
                <td
                    class="textAlignLeft"
                >执法相关负责人意见：
                </td>
                <td
                    class="cellInput cellBottomLine"
                    id="cell_idx_10"
                    align="center"
                    style="width:23%"
                    data-title="执法相关负责人意见"
                    data-type="text"
                    data-src
                    @click="commandFill('cellIdx10', '执法相关负责人意见', 'TextItem')"
                >{{ letData.cellIdx10 }}
                </td>
                <td
                    class="textAlignLeft"
                >签名：
                </td>
                <td
                    class="cellInput cellBottomLine"
                    id="cell_idx_11"
                    align="center"
                    style="width:20%"
                    data-title="签名"
                    data-type="text"
                    data-src
                    @click="commandFill('cellIdx11', '签名', 'TextItem')"
                >{{ letData.cellIdx11 }}
                </td>


                <td class="textAlignCenter">&nbsp;日期：</td>
                <td
                    class="cellInput cellBottomLine"
                    id="cell_idx_12"
                    align="center"
                    style="width:20%"
                    data-title="日期"
                    data-type="text"
                    data-src
                    @click="commandFill('cellIdx12', '日期', 'DateItem')"
                >{{ letData.cellIdx12 }}
                </td>
              </tr>

            </table>
            <table height="30"></table>
          </div>
        </div>
      </div>
    </let-main>
  </div>
</template>

<script>
import letMain from "@/views/make-law-writ/components/let-main.vue";
import GoDB from "@/utils/godb.min.js";
import {getNowDate} from '@/utils/date'
import {getDangerObject, transformNumToChinese} from '@/utils/setInitPaperData'

export default {
  name: "Let203",
  props: {
    corpData: {
      type: Object,
      default: () => {
      },
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
          page: '36', // 用于在隐患项保存，做数据处理时，判断是否增加现场处理决定字段描述
          key: 'cellIdx2' // 用来区分一个页面多个地方调用隐患大表，最后返回值
        },
        cellIdx6: {
          page: '36',
          key: 'cellIdx6'
        },
        cellIdx7: {
          page: '36',
          key: 'cellIdx7'
        },
        cellIdx8: []
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
      this.extraData = {
        corpName: corp.corpName,
      }
      // 已做文书则展示文书内容，否则创建初始版本
      if (checkPaper.length > 0) {
        // 回显
        this.letData = JSON.parse(checkPaper[0].paperContent);
        this.editData = checkPaper[0];
      } else {
        // 创建初始版本
        // 获取笔录文书中的隐患数据
        const let101Data = await wkPaper.find((item) => {
          return item.caseId === caseId && item.paperType === '1';
        });
        let let101DataPapaerContent = JSON.parse(let101Data.paperContent)
        let dangerObject = getDangerObject(let101DataPapaerContent.dangerItemObject.tableData)
        // 1.案由内容初始化：煤矿名称+隐患描述+“案”组成
        // 获取笔录文书中的隐患数据
        let cellIdx2String = `${corp.corpName}涉嫌${dangerObject.dangerString}案。`
        // 2.违法事实及依据：隐患描述+“经调查取证以上违法违规行为属实，分别违反了”+违法认定发条
        dangerObject = getDangerObject(let101DataPapaerContent.dangerItemObject.tableData, {danger: true})
        let cellIdx6String = `${dangerObject.dangerString}经调查取证以上违法违规行为属实，分别违反了${dangerObject.illegalString}的规定。`
        // 3.建议案件处理意见：行政处罚依据+行政处罚决定（分条）
        let cellIdx7String = `分别依据${dangerObject.treatmentSuggestion}。合并罚款人民币${transformNumToChinese(dangerObject.penaltyDescFineTotle)}（￥${dangerObject.penaltyDescFineTotle.toLocaleString()}）罚款。`
        // 4.法制审核意见初始化码表
        let nowDate = getNowDate()
        let optionList = [
          '认为案件事实清楚，证据确凿充分，定性准确，处罚适当，程序合法，同意处罚意见。',
          '认为案件主要事实不清，证据不足，建议继续调查或不予作出行政执法决定的建议。',
          '认为案件定性不准，使用法律不准确，执行裁量基准不当的，建议给予XXX的行政处罚。',
          '认为案件程序不合法的，建议进行纠正。'
        ]
        optionList.map(item => {
          this.options.cellIdx8.push({
            name: `经${nowDate}法制审核，${item}`,
            value: `经${nowDate}法制审核，${item}`
          })
        })
        this.letData = {
          cellIdx0: null, //
          cellIdx1: null, // 编号
          cellIdx2: cellIdx2String, // 案由
          cellIdx3: null, // 立案决定书编号
          cellIdx4: null, // 立案时间
          cellIdx5: null, // 承办人
          cellIdx6: cellIdx6String, // 违法事实及依据
          cellIdx7: cellIdx7String, // 建议案件处理意见
          cellIdx8: null, // 法制审核意见
          cellIdx9: null, // 分管负责人意见
          cellIdx10: null, // 签名
          cellIdx11: null, // 日期
          cellIdx12: null, // 主要负责人意见
          cellIdx13: null, // 签名
          cellIdx14: null, // 日期
          dangerItemObject: let101DataPapaerContent.dangerItemObject
        };
      }
      await db.close();
    },
    goBack({page}) {
      // 返回选择企业
      this.$emit("go-back", {page});
    },
    commandFill(key, title, type) {
      // 判断是否可编辑
      if (this.$refs.letMain.canEdit) {
        // 文书各个字段点击打开左侧弹出编辑窗口
        let dataKey = `${key}Type${type}`;
        let spellString = {}
        if (key === 'cellIdx2' || key === 'cellIdx6' || key === 'cellIdx7') {
          if (key === 'cellIdx2') {
            spellString = {
              corpName: this.extraData.corpName,
            }
          }
          this.options[key] = {
            page: '36',
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