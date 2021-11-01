<!-- 行政强制 行政复议 行政复议调查笔录 -->
<template>
  <div style="width: 100%; height: 100%">
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
            <div class="textAlignCenter formHeader2">
              国 家 矿 山 安 全 监 察
              <br />
            </div>
            <div class="textAlignCenter formHeader3">
              行 政 复 议 调 查 笔 录
            </div>
            <div class="docTextLine">
              时&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;间：
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
              <span class="no-line">地&nbsp;&nbsp;&nbsp; 点：</span>
              <span @click="commandFill('cellIdx7', '地点', 'TextItem')">{{
                letData.cellIdx7 ? letData.cellIdx7 : "（点击编辑）"
              }}</span>
              <div class="line"></div>
            </div>
            <div class="docTextLine">
              <div style="flex: 1; display: flex">
                <label>调查人（签名）：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx8', '调查人（签名）', 'TextItem')"
                >
                  {{ letData.cellIdx8 ? letData.cellIdx8 : "（点击编辑）" }}
                </div>
              </div>
              <div style="flex: 1; display: flex">
                <label>记录人（签名）：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx9', '记录人（签名）', 'TextItem')"
                >
                  {{ letData.cellIdx9 ? letData.cellIdx9 : "（点击编辑）" }}
                </div>
              </div>
            </div>
            <div class="docTextLine">
              <label>被调查人：</label>
              <label>姓 &nbsp;&nbsp; 名</label>
              <span
                class="line-div"
                @click="commandFill('cellIdx10', '姓名', 'TextItem')"
                >{{ letData.cellIdx10 ? letData.cellIdx10 : "" }}</span
              >
              <label>性别</label>
              <span
                class="line-div"
                @click="commandFill('cellIdx11', '性别', 'SelectItem')"
                >{{ letData.cellIdx11 ? letData.cellIdx11 : "" }}</span
              >
              <label>年龄</label>
              <span
                class="line-div"
                @click="commandFill('cellIdx12', '年龄', 'TextItem')"
                >{{ letData.cellIdx12 ? letData.cellIdx12 : "" }}</span
              >
              <div style="flex: 4; display: flex">
                <label>身份证号</label>
                <span
                  class="line-div"
                  @click="commandFill('cellIdx13', '身份证号', 'TextItem')"
                  >{{ letData.cellIdx13 ? letData.cellIdx13 : "" }}</span
                >
              </div>
            </div>
            <div class="docTextLine">
              <label style="width: 13%"></label>
              <div style="flex: 1.3; display: flex">
                <label>单 &nbsp;&nbsp; 位</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx14', '单位', 'TextItem')"
                >
                  {{ letData.cellIdx14 ? letData.cellIdx14 : "(编辑)" }}
                </div>
              </div>
              <div style="flex: 1; display: flex">
                <label>&nbsp;职务（职业）</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx15', '职务（职业）', 'TextItem')"
                >
                  {{ letData.cellIdx15 ? letData.cellIdx15 : "(编辑)" }}
                </div>
              </div>
            </div>
            <div class="docTextLine">
              <label style="width: 13%"></label>
              <div style="flex: 1; display: flex">
                <label>电 &nbsp;&nbsp; 话</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx16', '电话', 'TextItem')"
                >
                  {{ letData.cellIdx16 ? letData.cellIdx16 : "(编辑)" }}
                </div>
              </div>
              <div style="flex: 1; display: flex">
                <label>&nbsp;住 &nbsp;&nbsp; 址</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx17', '住址', 'TextItem')"
                >
                  {{ letData.cellIdx17 ? letData.cellIdx17 : "(编辑)" }}
                </div>
              </div>
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
import {
  getDangerObject,
  transformNumToChinese,
  getDocNumber,
} from "@/utils/setInitPaperData";
import associationSelectPaper from "@/components/association-select-paper";
export default {
  name: "Let304",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {},
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
      editData: {}, // 回显数据
      associationPaper: ["1"],
    };
  },
  methods: {
    async initLetData(selectedPaper) {
      const db = new GoDB(this.$store.state.DBName);
      const corpBase = db.table("corpBase");
      const corp = await corpBase.find((item) => {
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
      let let1DataPapaerContent = JSON.parse(
        selectedPaper.let1Data.paperContent
      );
      let dangerObject = getDangerObject(
        let1DataPapaerContent.DangerTable.tableData
      );
      let cellIdx18 = `我们是${this.$store.state.user.userGroupName}执法监督处工作人员，这是我们的执法证件（出示行政执法证件），现就你矿涉嫌${dangerObject.dangerString}案向你进行调查取证，你有配合调查、如实回答问题的义务，也享有拒绝回答与调查取证无关问题的权利，但不得做虚假陈述和伪证，否则，将负相应的法律责任，你听清楚了吗？\r\n      答：听清楚了。`;
      await db.close();
      this.letData = {
        cellIdx0: cellIdx0Year, // 年
        cellIdx0TypeTextItem: cellIdx0Year, // 年
        cellIdx1: cellIdx1Month, // 月
        cellIdx1TypeTextItem: cellIdx1Month, // 月
        cellIdx2: cellIdx2Date, // 日
        cellIdx2TypeTextItem: cellIdx2Date, // 日
        cellIdx3: cellIdx3Hour, // 时
        cellIdx3TypeTextItem: cellIdx3Hour, // 时
        cellIdx4: cellIdx4Minu, // 分
        cellIdx4TypeTextItem: cellIdx4Minu, // 分
        cellIdx5: null, // 时
        cellIdx6: null, // 分
        cellIdx7: null, // 地点
        cellIdx8: null, // 调查人（签名）
        cellIdx9: null, // 记录人（签名）
        cellIdx10: null, // 被调查人
        cellIdx11: null, // 性别
        cellIdx12: null, // 年龄
        cellIdx13: null, // 身份证号
        cellIdx14: corp.corpName, // 单位
        cellIdx14TypeTextItem: corp.corpName, // 单位
        cellIdx15: null, // 职务（职业）
        cellIdx16: null, // 电话
        cellIdx17: null, // 住址
        cellIdx18: cellIdx18, // 调查笔录
        cellIdx18TypeTextareaItem: cellIdx18, // 调查笔录
        DangerTable: let1DataPapaerContent.DangerTable,
      };
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