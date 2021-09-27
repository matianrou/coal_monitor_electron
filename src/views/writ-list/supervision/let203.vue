<!-- 行政处罚 一般程序 行政执法决定法制审核意见书 -->
<template>
  <div style="width: 100%; height: 100%;">
    <let-main
      ref="letMain"
      :corp-data="corpData"
      :doc-data="docData"
      :let-data="letData"
      :edit-data="paperData"
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
            <div class="textAlignCenter formHeader1">行政执法决定法制审核意见书</div>
            <div class="docTextLine paper-number-div">
              <div>
                <!-- <span
                  @click="commandFill('cellIdx0', '', 'TextItem')"
                >{{ letData.cellIdx0 ? letData.cellIdx0 : '（编辑）' }}</span> -->
                <label>编号：</label>
                <span
                  class="line"
                  @click="commandFill('cellIdx1', '编号', 'TextItem')"
                >{{ letData.cellIdx1 ? letData.cellIdx1 : '（点击编辑）' }}</span>
              </div>
            </div>
            <!-- <table class="docBody">
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
            </table> -->
            <div class="docTextarea" style="display: flex; justify-content: space-evenly;">
              <div
                class="cellInput"
                id="cell_idx_11"
                @click="commandFill('cellIdx15', '一般行政执法决定法制审核', 'SelectItem')"
              >{{letData.cellIdx15 ? letData.cellIdx15 : '□'}}一般行政执法决定法制审核</div>
              <div
                class="cellInput"
                id="cell_idx_11"
                @click="commandFill('cellIdx16', '重大行政执法决定法制审核', 'SelectItem')"
              >{{letData.cellIdx16 ? letData.cellIdx16 : '□'}}重大行政执法决定法制审核</div>
            </div>
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
                @click="commandFill('cellIdx4', '行政相对人基本情况', 'TextareaItem')"
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
                @click="commandFill('cellIdx8', '法制审核意见', 'SelectInputItem')"
              >{{ letData.cellIdx8 ? letData.cellIdx8 : '（点击编辑）'}}</span>
              <div class="line"></div>
            </div>
            <div class="docTextLine" style="margin-top: 30px; margin-bottom: 30px;">
              <div style="flex: 2; display: flex;">
                <label>法制审核人员（签名）：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx9', '法制审核人员（签名）', 'TextItem')"
                >{{ letData.cellIdx9 ? letData.cellIdx9 : '（点击编辑）' }}</div>
              </div>
              <div style="flex: 1; display: flex;">
                <label>&nbsp;日期：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx10', '日期', 'DateItem')"
                >{{ letData.cellIdx10 ? letData.cellIdx10 : '（点击编辑）' }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </let-main>
    <!-- 关联文书选择 -->
    <select-paper
      :visible="visible.selectPaper"
      title="关联文书选择"
      :paper-list="paperList"
      @close="closeDialog"
      @confirm-paper="confirmPaper"
    ></select-paper>
  </div>
</template>

<script>
import GoDB from "@/utils/godb.min.js";
import { getNowDate } from "@/utils/date";
import {
  getDangerObject,
  transformNumToChinese,
} from "@/utils/setInitPaperData";
import associationSelectPaper from '@/components/association-select-paper'
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
  name: "Let203",
  mixins: [associationSelectPaper],
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
        cellIdx15: toggleDictionary,
        cellIdx16: toggleDictionary,
      },
      associationPaper: ['1']
    };
  },
  methods: {
    async initLetData (selectedPaper) {
      const db = new GoDB(this.$store.state.DBName);
      const corpBase = db.table("corpBase");
      const corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      // 获取笔录文书中的隐患数据和  现场检查笔录时间
      let let1DataPapaerContent = JSON.parse(selectedPaper.let1Data.paperContent);
      let dangerObject = getDangerObject(
        let1DataPapaerContent.dangerItemObject.tableData
      );
      // 1.案由内容初始化：煤矿名称+隐患描述+“案”组成
      // 获取笔录文书中的隐患数据
      let cellIdx3String = `${corp.corpName}涉嫌${dangerObject.dangerString}案。`;
      // 2.违法事实及依据：隐患描述+“经调查取证以上违法违规行为属实，分别违反了”+违法认定发条
      dangerObject = getDangerObject(
        let1DataPapaerContent.dangerItemObject.tableData,
        { danger: true }
      );
      // let cellIdx5String = `${dangerObject.dangerString}经调查取证以上违法违规行为属实，分别违反了${dangerObject.illegalString}的规定。`
      let cellIdx5String = `${let1DataPapaerContent.cellIdx1}${this.$store.state.user.userGroupName}对${corp.corpName}进行现场检查时发现${dangerObject.dangerString}以上行为分别涉嫌${dangerObject.illegalString}依据《安全生产违法行为行政处罚办法》第二十三条的规定申请立案。`;
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
      let cellIdx4String = `${corp.corpName}社会统一信用代码是${corp.useCode ? corp.useCode : 'XX'}采矿许可证号是${corp.uscCode ? corp.uscCode : 'XX'}安全生产许可证号是${corp.uscCode ? corp.uscCode : 'XX'} `;
      await db.close();
      this.letData = {
        cellIdx0: null, //
        cellIdx1: null, // 编号
        cellIdx2: null, // 暂不用
        cellIdx3: cellIdx3String, // 案由
        cellIdx4: cellIdx4String, // 行政相对人基本情况
        cellIdx4TypeTextareaItem: cellIdx4String, // 行政相对人基本情况
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
        cellIdx15: '□', // 选项：一般行政执法决定法制审核
        cellIdx16: '□', // 选项：重大行政执法决定法制审核
        dangerItemObject: let1DataPapaerContent.dangerItemObject,
        extraData: {  // 用于拼写隐患内容的字符集合
          corpName: this.corpData.corpName,
          let101Date: let1DataPapaerContent.cellIdx1,
          userGroupName: this.$store.state.user.userGroupName
        }
      };
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
        if (
          key === "cellIdx3" ||
          key === "cellIdx5" ||
          key === "cellIdx6" ||
          key === "cellIdx7"
        ) {
          this.options[key] = {
            page: "47",
            key: key,
            spellString: this.letData.extraData,
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