<!-- 行政强制 行政复议 行政复议调查笔录 11 -->
<template>
  <div style="width: 100%; height: 100%">
    <let-main
      ref="letMain"
      :corp-data="corpData"
      :doc-data="docData"
      :let-data="letData"
      :paper-data="paperData"
      :from-page="fromPage"
      @go-back="goBack"
    >
      <div slot="left">
        <div class="page page-sizeA4">
          <div>
            <div class="stdRowH"></div>
            <div class="textAlignCenter formHeader2">
              国 家 矿 山 安 全 监 察
              <br />
            </div>
            <div class="textAlignCenter formHeader3">
              行 政 复 议 调 查 笔 录
            </div>
            <div class="docTextLine">
              时&nbsp;&nbsp;&nbsp;&nbsp;间：
              <div style="flex: 1; display: flex">
                <div
                  class="line-div center"
                  @click="commandFill('cellIdx0', '年', 'TextItem')"
                >
                  {{ letData.cellIdx0 ? letData.cellIdx0 : "XX" }}
                </div>
                <label>年</label>
              </div>
              <div style="flex: 1; display: flex">
                <div
                  class="line-div center"
                  @click="commandFill('cellIdx1', '月', 'TextItem')"
                >
                  {{ letData.cellIdx1 ? letData.cellIdx1 : "XX" }}
                </div>
                <label>月</label>
              </div>
              <div style="flex: 1; display: flex">
                <div
                  class="line-div center"
                  @click="commandFill('cellIdx2', '日', 'TextItem')"
                >
                  {{ letData.cellIdx2 ? letData.cellIdx2 : "XX" }}
                </div>
                <label>日</label>
              </div>
              <div style="flex: 1; display: flex">
                <div
                  class="line-div center"
                  @click="commandFill('cellIdx3', '时', 'TextItem')"
                >
                  {{ letData.cellIdx3 ? letData.cellIdx3 : "XX" }}
                </div>
                <label>时</label>
              </div>
              <div style="flex: 1; display: flex">
                <div
                  class="line-div center"
                  @click="commandFill('cellIdx4', '分', 'TextItem')"
                >
                  {{ letData.cellIdx4 ? letData.cellIdx4 : "XX" }}
                </div>
                <label>分至</label>
              </div>
              <div style="flex: 1; display: flex">
                <div
                  class="line-div center"
                  @click="commandFill('cellIdx5', '时', 'TextItem')"
                >
                  {{ letData.cellIdx5 ? letData.cellIdx5 : "XX" }}
                </div>
                <label>时</label>
              </div>
              <div style="flex: 1; display: flex">
                <div
                  class="line-div center"
                  @click="commandFill('cellIdx6', '分', 'TextItem')"
                >
                  {{ letData.cellIdx6 ? letData.cellIdx6 : "XX" }}
                </div>
                <label>分</label>
              </div>
            </div>
            <div class="docTextarea">
              <span class="no-line">地&nbsp;&nbsp;&nbsp;&nbsp;点：</span>
              <span @click="commandFill('cellIdx7', '地点', 'TextItem')">{{
                letData.cellIdx7 ? letData.cellIdx7 : "（点击编辑）"
              }}</span>
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:50%">
                <span class="no-line">调查人（签名）：</span>
                <span @click="commandFill('cellIdx8', '调查人（签名）', 'TextItem')"
                  >{{ letData.cellIdx8 ? letData.cellIdx8 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">记录人（签名）：</span>
                <span @click="commandFill('cellIdx9', '记录人（签名）', 'TextItem')">{{
                  letData.cellIdx9 ? letData.cellIdx9 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <div class="docTextLine" style="text-align:center">
              <label>被调查人：</label>
              <div style="flex: 2; display: flex">
              <label>姓&nbsp;&nbsp;&nbsp;&nbsp;名</label>
              <span
                class="line-div"
                @click="commandFill('cellIdx10', '姓名', 'TextItem')"
                >{{ letData.cellIdx10 ? letData.cellIdx10 : "" }}</span
              >
              </div>
              <div style="flex:1; display: flex">
              <label>性别</label>
              <span
                class="line-div"
                @click="commandFill('cellIdx11', '性别', 'SelectItem')"
                >{{ letData.cellIdx11 ? letData.cellIdx11 : "" }}</span
              >
              </div>
              <div style="flex: 1; display: flex">
              <label>年龄</label>
              <span
                class="line-div"
                @click="commandFill('cellIdx12', '年龄', 'TextItem')"
                >{{ letData.cellIdx12 ? letData.cellIdx12 : "" }}</span
              >
              </div>
              <div style="flex: 3.5; display: flex">
                <label>身份证号</label>
                <span
                  class="line-div"
                  @click="commandFill('cellIdx13', '身份证号', 'TextItem')"
                  >{{ letData.cellIdx13 ? letData.cellIdx13 : "" }}</span
                >
              </div>
            </div>
            <div class="docTextarea">
              <span class="no-line" style="width:25%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;单&nbsp;&nbsp;&nbsp;&nbsp;位</span>
              <span style="display:inline-block;min-width:32%;line-height: normal;max-width:32%" @click="commandFill('cellIdx14', '单位', 'TextItem')"
                >{{ letData.cellIdx14 ? letData.cellIdx14 : "（点击编辑）" }}
              </span>
              <span class="no-line" style="width:17%">职务（职业）</span>
              <span style="display:inline-block;min-width:21%;line-height: normal;max-width:21%" @click="commandFill('cellIdx15', '职务（职业）', 'TextItem')">{{
                letData.cellIdx15 ? letData.cellIdx15 : "（点击编辑）"
              }}</span>
            </div>
            <div class="docTextarea">
              <span class="no-line" style="width:25%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;电&nbsp;&nbsp;&nbsp;&nbsp;话</span>
              <span style="display:inline-block;min-width:32%;line-height: normal;max-width:32%" @click="commandFill('cellIdx16', '电话', 'TextItem')"
                >{{ letData.cellIdx16 ? letData.cellIdx16 : "（点击编辑）" }}
              </span>
              <span class="no-line" style="width:11%">住&nbsp;&nbsp;&nbsp;&nbsp;址</span>
              <span style="display:inline-block;min-width:27%;line-height: normal;max-width:27%" @click="commandFill('cellIdx17', '住址', 'TextItem')">{{
                letData.cellIdx17 ? letData.cellIdx17 : "（点击编辑）"
              }}</span>
            </div>
            <div
              style="
                word-wrap: break-word;
                word-break: break-all;
                overflow: hidden;
              "
              class="cellInput mutiLineArea"
              id="cell_idx_18"
              data-title="调查笔录"
              data-type="textarea"
              data-src
              @click="commandFill('cellIdx18', '调查笔录', 'TextareaItem')"
            >
              <div v-if="letData.cellIdx18 && letData.cellIdx18.length > 0">
                <p class="show-area-item-p">
                  <span style="padding: 7px">{{
                    letData.cellIdx18 ? letData.cellIdx18 : "（点击编辑）"
                  }}</span>
                </p>
                <cell-line></cell-line>
              </div>
              <div v-else>
                <p class="show-area-item-p">&nbsp;</p>
                <p class="show-area-item-p">&nbsp;</p>
              </div>
            </div>
            <div
              class="docTextarea"
              style="
                border-top: 2px solid #000;
                margin-top: 30px;
                line-height: normal;
              "
            >
              备注：被调查人员应在过目笔录后，签署意见，并签名押印。
            </div>
          </div>
        </div>
      </div>
    </let-main>
    <!-- 关联文书选择 -->
    <select-paper
      v-if="visible.selectPaper"
      :visible="visible.selectPaper"
      :paper-list="paperList"
      @close="closeDialog"
      @confirm-paper="confirmPaper"
    ></select-paper>
  </div>
</template>

<script>
import {
  getDangerObject,
  setNewDanger,
} from "@/utils/setInitPaperData";
import associationSelectPaper from "@/components/association-select-paper";
export default {
  name: "Let304",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {
        cellIdx0: null, // 年
        cellIdx1: null, // 月
        cellIdx2: null, // 日
        cellIdx3: null, // 时
        cellIdx4: null, // 分
        cellIdx5: null, // 时
        cellIdx6: null, // 分
        cellIdx7: null, // 地点
        cellIdx8: null, // 调查人（签名）
        cellIdx9: null, // 记录人（签名）
        cellIdx10: null, // 被调查人
        cellIdx11: null, // 性别
        cellIdx12: null, // 年龄
        cellIdx13: null, // 身份证号
        cellIdx14: null, // 单位
        cellIdx15: null, // 职务（职业）
        cellIdx16: null, // 电话
        cellIdx17: null, // 住址
        cellIdx18: null, // 调查笔录
        DangerTable: null,
        associationPaperId: null,
        associationPaperOrder: []
      },
      options: {
        cellIdx11: [
          {
            value: '男',
            name: '男'
          },
          {
            value: '女',
            name: '女'
          },
        ]
      },
      associationPaper: ["10"],
    };
  },
  methods: {
    async initLetData(selectedPaper) {
      let corpBase = await this.getDatabase("baseInfo");
      let corp = corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      // 1.时间：当前年、月、日、时、分
      let now = new Date();
      let cellIdx0Year = now.getFullYear().toString();
      let cellIdx1Month = (now.getMonth() + 1).toString();
      let cellIdx2Date = now.getDate().toString();
      let cellIdx3Hour = now.getHours().toString();
      let cellIdx4Minu = now.getMinutes().toString();
      // 2.单位名称
      // 3.调查笔录：“我们是”+机构名称+“执法监督处工作人员，这是我们的执法证件（出示行政执法证件），现就你矿涉嫌”+隐患描述+“案向你进行调查取证，你有配合调查、如实回答问题的义务，也享有拒绝回答与调查取证无关问题的权利，但不得做虚假陈述和伪证，否则，将负相应的法律责任，你听清楚了吗？答：听清楚了。”
      // 获取笔录文书中的隐患数据
      let let10DataPaperContent = JSON.parse(
        selectedPaper.let10Data.paperContent
      );
      let dangerObject = this.corpData.caseType === '0' ? getDangerObject(
        let10DataPaperContent.DangerTable.selectedDangerList
      ) : null;
      let cellIdx18 = `我们是${this.$store.state.curCase.provinceGroupName}执法监督处工作人员，这是我们的执法证件（出示行政执法证件），现就你矿涉嫌${this.corpData.caseType === '0' ? dangerObject.dangerString : 'XXX'}案向你进行调查取证，你有配合调查、如实回答问题的义务，也享有拒绝回答与调查取证无关问题的权利，但不得做虚假陈述和伪证，否则，将负相应的法律责任，你听清楚了吗？\r\n      答：听清楚了。`;
      let DangerTable = null
      if (this.corpData.caseType === '0') {
        DangerTable = let10DataPaperContent.DangerTable ? 
          setNewDanger(selectedPaper.let10Data, let10DataPaperContent.DangerTable)
          : {}
      }
      let associationPaperId = Object.assign({}, this.setAssociationPaperId(let10DataPaperContent.associationPaperId), {
        paper10Id: selectedPaper.let10Data.paperId
      }) 
      let associationPaperOrder = this.setAssociationPaperOrder(let10DataPaperContent.associationPaperOrder)
      associationPaperOrder.push('10')
      this.letData = Object.assign({}, this.letData, {
        cellIdx0: cellIdx0Year, // 年
        cellIdx1: cellIdx1Month, // 月
        cellIdx2: cellIdx2Date, // 日
        cellIdx3: cellIdx3Hour, // 时
        cellIdx4: cellIdx4Minu, // 分
        cellIdx14: corp.corpName, // 单位
        cellIdx18: cellIdx18, // 调查笔录
        DangerTable: DangerTable,
        associationPaperId,
        associationPaperOrder
      })
    },
    goBack({ page, data }) {
      // 返回选择企业
      this.$emit("go-back", { page, data });
    },
    commandFill(key, title, type) {
      // 判断是否可编辑
      if (this.$refs.letMain.canEdit) {
        // 文书各个字段点击打开左侧弹出编辑窗口
        let dataKey = `${key}`;
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