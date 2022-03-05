<!-- 行政处罚 一般程序 送达收执 9 -->
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
            <div class="textAlignCenter formHeader4">送达收执</div>
            <div class="formHeader5 paper-number-div">
              <div>
                <span @click="commandFill('cellIdx0', '文书号', 'TextItem')">{{
                  letData.cellIdx0 ? letData.cellIdx0 : "（编辑）"
                }}</span>
                <label>煤安监</label>
                <span @click="commandFill('cellIdx1', '文书号', 'TextItem')">{{
                  letData.cellIdx1 ? letData.cellIdx1 : "（编辑）"
                }}</span>
                <label>送〔</label>
                <span @click="commandFill('cellIdx2', '文书号', 'TextItem')">{{
                  letData.cellIdx2 ? letData.cellIdx2 : "（编辑）"
                }}</span>
                <label>〕</label>
                <span @click="commandFill('cellIdx3', '文书号', 'TextItem')">{{
                  letData.cellIdx3 ? letData.cellIdx3 : "（编辑）"
                }}</span>
                <label>号</label>
              </div>
            </div>
            <table height="60"></table>
            <div class="docTextarea">
              <span class="no-line">送达文书：</span>
              <span @click="commandFill('cellIdx4', '送达文书', 'TextItem')">{{
                letData.cellIdx4 ? letData.cellIdx4 : "（点击编辑）"
              }}</span>
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line">文书编号：</span>
              <span @click="commandFill('cellIdx5', '文书编号', 'TextItem')">{{
                letData.cellIdx5 ? letData.cellIdx5 : "（点击编辑）"
              }}</span>
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line">送达地点：</span>
              <span @click="commandFill('cellIdx6', '送达地点', 'TextItem')">{{
                letData.cellIdx6 ? letData.cellIdx6 : "（点击编辑）"
              }}</span>
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line">送达方式：</span>
              <span
                @click="commandFill('cellIdx7', '送达方式', 'SelectItem')"
                >{{
                  letData.cellIdx7 ? letData.cellIdx7 : "（点击编辑）"
                }}</span
              >
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:60%">
                <span class="no-line">
                  <span class="no-line">受送达</span><span class="no-line">{{ letData.cellIdx14 ? letData.cellIdx14 : "(编辑)" }}</span>（签名）：</span>
                <span @click="commandFill('cellIdx8', `受送达${letData.cellIdx14}（签名）`, 'TextItem')"
                  >{{ letData.cellIdx8 ? letData.cellIdx8 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">日期：</span>
                <span @click="commandFill('cellIdx9', '日期', 'DateItem')">{{
                  letData.cellIdx9 ? letData.cellIdx9 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:60%">
                <span class="no-line">送达人（签名）：</span>
                <span @click="commandFill('cellIdx10', '送达人（签名）', 'TextItem')"
                  >{{ letData.cellIdx10 ? letData.cellIdx10 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">日期：</span>
                <span @click="commandFill('cellIdx11', '日期', 'DateItem')">{{
                  letData.cellIdx11 ? letData.cellIdx11 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <table height="30"></table>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_12"
                  align="right"
                  style="width: 95%"
                  @click="commandFill('cellIdx12', '', 'TextItem')"
                >
                  {{ letData.cellIdx12 ? letData.cellIdx12 : "（点击编辑）" }}
                </td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_13"
                  align="right"
                  style="width: 95%"
                  data-title
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx13', '日期', 'DateItem')"
                >
                  {{ letData.cellIdx13 ? letData.cellIdx13 : "（点击编辑）" }}
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </let-main>
    <el-dialog
      title="文书信息选择"
      :close-on-click-modal="false"
      append-to-body
      :visible="visibleSelectDialog"
      width="400px"
      :show-close="false"
    >
      <span>请选择：</span>
      <el-radio-group v-model="selectedType">
        <el-radio label="单位">单位</el-radio>
        <el-radio label="个人">个人</el-radio>
      </el-radio-group>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="confirm">确定</el-button>
      </span>
    </el-dialog>
    <!-- 关联文书选择 -->
    <select-paper
      v-if="visible.selectPaper"
      :visible="visible.selectPaper"
      :paper-list="paperList"
      :multi-select="true"
      @close="closeDialog"
      @confirm-paper="confirmPaper"
    ></select-paper>
  </div>
</template>

<script>
import { getDocNumber, setNewDanger } from "@/utils/setInitPaperData";
import associationSelectPaper from "@/components/association-select-paper";
export default {
  name: "Let207",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {
        cellIdx0: null, // 文书号
        cellIdx1: null, // 文书号
        cellIdx2: null, // 文书号
        cellIdx3: null, // 文书号
        cellIdx4: null, // 送达文书
        cellIdx5: null, // 文书字号
        cellIdx6: null, // 送达地点
        cellIdx7: null, // 送达方式
        cellIdx14: null, // 单位负责人/个人
        cellIdx8: null, // 受送达单位负责人（个人）（签名）
        cellIdx9: null, // 日期
        cellIdx10: null, // 送达人（签名）
        cellIdx11: null, // 日期
        cellIdx12: null, //
        cellIdx13: null, // 日期
        selectedType: null,
        associationPaperId: null,
        associationPaperOrder: []
      },
      options: {
        cellIdx7: [
          // 送达方式码表
          {
            value: "直接送达",
            name: "直接送达",
          },
          {
            value: "留置送达",
            name: "留置送达",
          },
          {
            value: "委托送达",
            name: "委托送达",
          },
          {
            value: "邮寄送达",
            name: "邮寄送达",
          },
          {
            value: "公告送达",
            name: "公告送达",
          },
          {
            value: "传真送达",
            name: "传真送达",
          },
          {
            value: "电子邮件送达",
            name: "电子邮件送达",
          },
        ],
        cellIdx14: [
          {
            value: "单位负责人",
            name: "单位负责人",
          },
          {
            value: "个人",
            name: "个人",
          },
        ],
      },
      visibleSelectDialog: false,
      selectedType: "单位", // 初始化时选择的单位或个人
      associationPaper: ["8"],
    };
  },
  methods: {
    async initLetData(selectedPaper) {
      // 获取行政处罚决定书中选择的单位/个人
      this.visibleSelectDialog = true;
      let corpBase = await this.getDatabase('baseInfo');
      let corp = corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      // 1.送达文书：国家煤矿安全监察行政处罚决定书
      let cellIdx4String = "国家矿山安全监察行政处罚决定书";
      // 2.文书字号：使用行政处罚决定书的文书编号
      let cellIdx5String = ''
      for (let i = 0; i < selectedPaper.let8Data.length; i++) {
        let let8DataPaperContent = JSON.parse(
          selectedPaper.let8Data[i].paperContent
        );  
        cellIdx5String += `${let8DataPaperContent.cellIdx0}煤安监${let8DataPaperContent.cellIdx1}罚〔${let8DataPaperContent.cellIdx2}〕${let8DataPaperContent.cellIdx3}号和`;
      }
      cellIdx5String = cellIdx5String.substring(0, cellIdx5String.length - 1)
      // 3.送达地点：煤矿名称
      let cellIdx6String = corp.corpName;
      let paperNumber = await getDocNumber(
        this.docData.docTypeNo,
        this.corpData.caseId
      );
      let let8DataPaperContent = JSON.parse(
        selectedPaper.let8Data[0].paperContent
      ); 
      let associationPaperId = Object.assign({}, this.setAssociationPaperId(let8DataPaperContent.associationPaperId), {
        paper8Id: selectedPaper.let8Data[0].paperId
      }) 
      let associationPaperOrder = this.setAssociationPaperOrder(let8DataPaperContent.associationPaperOrder)
      associationPaperOrder.push('8')
      this.letData = Object.assign({}, this.letData, {
        cellIdx0: paperNumber.num0, // 文书号
        cellIdx1: paperNumber.num1, // 文书号
        cellIdx2: paperNumber.num3, // 文书号
        cellIdx3: paperNumber.num4, // 文书号
        cellIdx4: cellIdx4String, // 送达文书
        cellIdx5: cellIdx5String, // 文书字号
        cellIdx6: cellIdx6String, // 送达地点
        cellIdx12: this.$store.state.curCase.provinceGroupName, //
        cellIdx13: this.todayDate, // 日期
        associationPaperId,
        associationPaperOrder,
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
    async confirm() {
      // 选择单位或个人
      this.visibleSelectDialog = false;
      this.letData.cellIdx14 = this.selectedType === "单位" ? "单位负责人" : "个人";
      this.letData.selectedType = this.selectedType;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/let";
</style>