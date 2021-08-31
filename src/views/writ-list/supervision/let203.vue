<!-- 行政处罚 一般程序 行政执法决定法制审核意见书 -->
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
            <div class="textAlignCenter formHeader3">行政执法决定法制审核意见书</div>
            <div class="stdRowH"></div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_0"
                  align="right"
                  style="width:70%"
                  @click="commandFill('cellIdx0', '', 'TextItem')"
                >{{ letData.cellIdx0 }}</td>
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
                >{{ letData.cellIdx1 }}</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_2"
                  style="width:70%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx2', '', 'TextItem')"
                >{{ letData.cellIdx2 }}</td>
              </tr>
            </table>
            <div class="docTextarea">
              <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;案&nbsp;&nbsp;由：</span>
              <span
                @click="commandFill('cellIdx3', '案由', 'DangerTableItem')"
              >{{ letData.cellIdx3 ? letData.cellIdx3 : '（点击编辑）'}}</span>
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;行政相对人基本情况：</span>
              <span
                @click="commandFill('cellIdx4', '行政相对人基本情况', 'DangerTableItem')"
              >{{ letData.cellIdx4 ? letData.cellIdx4 : '（点击编辑）'}}</span>
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;案情摘要：</span>
              <span
                @click="commandFill('cellIdx5', '案情摘要', 'DangerTableItem')"
              >{{ letData.cellIdx5 ? letData.cellIdx5 : '（点击编辑）'}}</span>
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;作出决定依据：</span>
              <span
                @click="commandFill('cellIdx6', '作出决定依据', 'DangerTableItem')"
              >{{ letData.cellIdx6 ? letData.cellIdx6 : '（点击编辑）'}}</span>
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;建议行政决定：</span>
              <span
                @click="commandFill('cellIdx7', '建议行政决定', 'DangerTableItem')"
              >{{ letData.cellIdx7 ? letData.cellIdx7 : '（点击编辑）'}}</span>
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;法制审核意见：</span>
              <span
                @click="commandFill('cellIdx8', '法制审核意见', 'SelectItem')"
              >{{ letData.cellIdx8 ? letData.cellIdx8 : '（点击编辑）'}}</span>
              <div class="line"></div>
            </div>
            <!-- <table style="border:solid 0s #000;" class="docBody">
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
                <cell-line></cell-line>
              </div>
              <div v-else>
                <p class="show-area-item-p">
                  &nbsp;
                </p>
                <p class="show-area-item-p">
                  &nbsp;
                </p>
              </div>
            </div>-->

            <!-- <table style="border:solid 0s #000;" class="docBody">
              <tr>
                <td style="width:5%"></td>

                <td class="textAlignLeft">行政相对人基本情况：</td>
              </tr>
            </table>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              id="cell_idx_4"
              data-title="行政相对人基本情况"
              data-type="textarea"
              data-src
              @click="commandFill('cellIdx4', '行政相对人基本情况', 'TextareaItem')">
              <p class="show-area-item-p">
                <span style="padding: 7px;">{{ letData.cellIdx4 ? letData.cellIdx4 : '（点击编辑）' }}</span>
              </p>
              <cell-line></cell-line>
            </div>-->

            <!-- <table style="border:solid 0s #000;" class="docBody">
              <tr>
                <td style="width:5%"></td>
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
              <p class="show-area-item-p">
                <span style="padding: 7px;">{{ letData.cellIdx5 ? letData.cellIdx5 : '（点击编辑）' }}</span>
              </p>
              <cell-line></cell-line>
            </div>-->

            <!-- <table style="border:solid 0s #000;" class="docBody">
              <tr>
                <td style="width:5%"></td>
                <td class="textAlignLeft">作出决定依据：</td>
              </tr>
            </table>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              id="cell_idx_6"
              data-title="作出决定依据"
              data-type="textarea"
              data-src
              @click="commandFill('cellIdx6', '作出决定依据', 'DangerTableItem')">
              <p class="show-area-item-p">
                <span style="padding: 7px;">{{ letData.cellIdx6 ? letData.cellIdx6 : '（点击编辑）' }}</span>
              </p>
              <cell-line></cell-line>
            </div>-->

            <!-- <table style="border:solid 0s #000;" class="docBody">
              <tr>
                <td style="width:5%"></td>
                <td class="textAlignLeft">建议行政决定：</td>
              </tr>
            </table>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              id="cell_idx_7"
              data-title="建议行政决定"
              data-type="textarea"
              data-src
              @click="commandFill('cellIdx7', '建议行政决定', 'TextareaItem')">
              <p class="show-area-item-p">
                <span style="padding: 7px;">{{ letData.cellIdx7 ? letData.cellIdx7 : '（点击编辑）' }}</span>
              </p>
              <cell-line></cell-line>
            </div>-->

            <!-- <table style="border:solid 0s #000;" class="docBody">
              <tr>
                <td style="width:5%"></td>
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
              @click="commandFill('cellIdx8', '法制审核意见', 'SelectInputItem')">
              <p class="show-area-item-p">
                <span style="padding: 7px;">{{ letData.cellIdx8 ? letData.cellIdx8 : '（点击编辑）' }}</span>
              </p>
              <cell-line></cell-line>
            </div>-->
            <table height="60"></table>
            <table class="docBody">
              <tr>
                <td class="textAlignLeft" style="width:25%">法制审核人员（签名）：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_9"
                  align="center"
                  style="width:40%"
                  data-title="分管负责人意见"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx9', '分管负责人意见', 'TextItem')"
                >{{ letData.cellIdx9 }}</td>
                <td class="textAlignCenter" style="width:8%">&nbsp;日期：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_10"
                  align="center"
                  style="width:27%"
                  data-title="日期"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx10', '日期', 'DateItem')"
                >{{ letData.cellIdx10 }}</td>
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
import { getNowDate } from "@/utils/date";
import {
  getDangerObject,
  transformNumToChinese,
} from "@/utils/setInitPaperData";

export default {
  name: "Let203",
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
        cellIdx8: [
          {
            value:
              "经2021年8月31日法制审核，认为案件事实清楚、证据确凿充分、定性准确、处罚适当、程序合法，同意处罚意见。",
            name: "经2021年8月31日法制审核，认为案件事实清楚、证据确凿充分、定性准确、处罚适当、程序合法，同意处罚意见。",
          },
          {
            value:
              "经2021年8月31日法制审核，认为案件主要事实不清、证据不足，建议继续调查或不予作出行政执法决定的建议。",
            name: "经2021年8月31日法制审核，认为案件主要事实不清、证据不足，建议继续调查或不予作出行政执法决定的建议。",
          },
          {
            value:
              "经2021年8月31日法制审核，认为案件定性不准、适用法律不准确、执行裁量基准不当的，建议给予XXX的行政处罚。",
            name: "经2021年8月31日法制审核，认为案件定性不准、适用法律不准确、执行裁量基准不当的，建议给予XXX的行政处罚。",
          },
          {
            value:
              "经2021年8月31日法制审核，认为案件程序不合法的，建议进行纠正。",
            name: "经2021年8月31日法制审核，认为案件程序不合法的，建议进行纠正。",
          },
          {
            value:
              "经2021年8月31日法制审核，认为超出本机关管辖范围或者涉嫌犯罪的，建议移送。",
            name: "经2021年8月31日法制审核，认为超出本机关管辖范围或者涉嫌犯罪的，建议移送。",
          },
        ],
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
       // 获取笔录文书中的隐患数据和  现场检查笔录时间
      const let101Data = await wkPaper.find((item) => {
        return item.caseId === caseId && item.paperType === "1";
      });
      if (!let101Data) {
        this.$message.error('请先填写并保存现场检查记录中内容！')
        return
      }
      let let101DataPapaerContent = JSON.parse(let101Data.paperContent);
      // 保存额外拼写的数据内容，用于修改隐患项时回显使用
      this.extraData = {
        corpName: corp.corpName,
        let101Date: let101DataPapaerContent.cellIdx1,
        userGroupName: this.$store.state.user.userGroupName
      };
      // await wkPaper.delete(checkPaper[0].id)
      // 已做文书则展示文书内容，否则创建初始版本
      if (checkPaper.length > 0) {
        // 回显
        this.letData = JSON.parse(checkPaper[0].paperContent);
        this.editData = checkPaper[0];
      } else {
        // 创建初始版本
        let dangerObject = getDangerObject(
          let101DataPapaerContent.dangerItemObject.tableData
        );
        // 1.案由内容初始化：煤矿名称+隐患描述+“案”组成
        // 获取笔录文书中的隐患数据
        let cellIdx3String = `${corp.corpName}涉嫌${dangerObject.dangerString}案。`;
        // 2.违法事实及依据：隐患描述+“经调查取证以上违法违规行为属实，分别违反了”+违法认定发条
        dangerObject = getDangerObject(
          let101DataPapaerContent.dangerItemObject.tableData,
          { danger: true }
        );
        // let cellIdx5String = `${dangerObject.dangerString}经调查取证以上违法违规行为属实，分别违反了${dangerObject.illegalString}的规定。`
        let cellIdx5String = `${let101DataPapaerContent.cellIdx1}${this.$store.state.user.userGroupName}对${corp.corpName}进行现场检查时发现${dangerObject.dangerString}以上行为分别涉嫌${dangerObject.illegalString}依据《安全生产违法行为行政处罚办法》第二十三条的规定申请立案。`;
        // 3.建议案件处理意见：行政处罚依据+行政处罚决定（分条）
        let cellIdx6String = `${dangerObject.penaltyBasisString}`;
        let cellIdx7String = `${dangerObject.penaltyDesc}`;
        // 4.法制审核意见初始化码表
        let nowDate = getNowDate();
        let optionList = [
          "认为案件事实清楚，证据确凿充分，定性准确，处罚适当，程序合法，同意处罚意见。",
          "认为案件主要事实不清，证据不足，建议继续调查或不予作出行政执法决定的建议。",
          "认为案件定性不准，使用法律不准确，执行裁量基准不当的，建议给予XXX的行政处罚。",
          "认为案件程序不合法的，建议进行纠正。",
        ];
        optionList.map((item) => {
          this.options.cellIdx8.push({
            name: `经${nowDate}法制审核，${item}`,
            value: `经${nowDate}法制审核，${item}`,
          });
        });
        //5.行政相对人基本情况：煤矿名称+（煤矿基本信息字段uscCode）+（煤矿基本信息字段？）+（煤矿基本信息字段？）
        let cellIdx4String = `${corp.corpName}社会统一信用代码是${corp.useCode}采矿许可证号是${corp.uscCode}安全生产许可证号是${corp.uscCode} `;
        this.letData = {
          cellIdx0: null, //
          cellIdx1: null, // 编号
          cellIdx2: null, //
          cellIdx3: cellIdx3String, // 案由
          cellIdx4: cellIdx4String, // 行政相对人基本情况
          cellIdx5: cellIdx5String, // 案情摘要
          cellIdx6: cellIdx6String, // 作出决定依据
          cellIdx7: cellIdx7String, // 建议行政决定
          cellIdx8: null, // 法制审核意见
          cellIdx9: null, // 分管负责人意见
          cellIdx10: null, // 签名
          cellIdx11: null, // 日期
          cellIdx12: null, // 主要负责人意见
          cellIdx13: null, // 签名
          cellIdx14: null, // 日期
          dangerItemObject: let101DataPapaerContent.dangerItemObject,
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
        let spellString = {};
        if (
          key === "cellIdx3" ||
          key === "cellIdx5" ||
          key === "cellIdx6" ||
          key === "cellIdx7"
        ) {
          if (key === "cellIdx3") {
            spellString = {
              corpName: this.extraData.corpName,
            };
          } else {
            spellString = this.extraData
          }
          this.options[key] = {
            page: "47",
            key: key,
            spellString,
          };
          dataKey = "dangerItemObject";
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