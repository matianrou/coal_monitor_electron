<!-- 行政强制 行政强制执行 行政执法有关事项审批报告 55 -->
<template>
  <div style="width: 100%; height: 100%;">
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
            <div class="textAlignCenter formHeader4">行政执法有关事项审批报告</div>
            <div class="docTextLine paper-number-div">
              <div>
                <label>编号：</label>
                <span
                  class="line"
                  @click="commandFill('cellIdx1', '编号', 'TextItem')"
                >{{ letData.cellIdx1 ? letData.cellIdx1 : '（点击编辑）' }}</span>
              </div>
            </div>
            <div class="docTextarea">
              <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;案&nbsp;&nbsp;&nbsp;由：</span>
              <span
                @click="commandFill('cellIdx2', '案由', 'TextareaItem')"
              >{{ letData.cellIdx2 ? letData.cellIdx2 : '（点击编辑）' }}</span>
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;审批事项：</span>
              <span
                @click="commandFill('cellIdx3', '审批事项', 'TextareaItem')"
              >{{ letData.cellIdx3 ? letData.cellIdx3 : '（点击编辑）' }}</span>
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;行政相对人基本情况：</span>
              <span
                @click="commandFill('cellIdx4', '行政相对人基本情况', 'TextareaItem')"
              >{{ letData.cellIdx4 ? letData.cellIdx4 : '（点击编辑）' }}</span>
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;案情摘要：</span>
              <span
                @click="commandFill('cellIdx5', '案情摘要', 'TextareaItem')"
              >{{ letData.cellIdx5 ? letData.cellIdx5 : '（点击编辑）' }}</span>
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;提请审批的理由及依据：</span>
              <span
                @click="commandFill('cellIdx6', '提请审批的理由及依据', 'TextareaItem')"
              >{{ letData.cellIdx6 ? letData.cellIdx6 : '（点击编辑）' }}</span>
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;承办人意见：</span>
              <span
                @click="commandFill('cellIdx7', '承办人意见', 'TextareaItem')"
              >{{ letData.cellIdx7 ? letData.cellIdx7 : '（点击编辑）' }}</span>
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line" style="width:22%">承办人（签名）：</span>
              <span style="display:inline-block;min-width:38%;line-height: normal;max-width:35%" @click="commandFill('cellIdx8', '承办人（签名）', 'TextItem')"
                >{{ letData.cellIdx8 ? letData.cellIdx8 : "（点击编辑）" }}
              </span>
              <span class="no-line" style="width:12%">日&nbsp;&nbsp;&nbsp;&nbsp;期:</span>
              <span style="display:inline-block;min-width:22%;line-height: normal;max-width:20%" @click="commandFill('cellIdx9', '日期', 'DateItem')">{{
                letData.cellIdx9 ? letData.cellIdx9 : "（点击编辑）"
              }}</span>
            </div>
            <div class="docTextarea">
              <span class="no-line" style="width:22%">&nbsp;</span>
              <span style="display:inline-block;min-width:38%;line-height: normal;max-width:35%" @click="commandFill('cellIdx10', '承办人（签名）', 'TextItem')"
                >{{ letData.cellIdx10 ? letData.cellIdx10 : "（点击编辑）" }}
              </span>
              <span class="no-line" style="width:12%">日&nbsp;&nbsp;&nbsp;&nbsp;期:</span>
              <span style="display:inline-block;min-width:22%;line-height: normal;max-width:20%" @click="commandFill('cellIdx11', '日期', 'DateItem')">{{
                letData.cellIdx11 ? letData.cellIdx11 : "（点击编辑）"
              }}</span>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:45%">
                <span class="no-line">分管负责人意见：</span>
                <span @click="commandFill('cellIdx12', '分管负责人意见', 'TextItem')"
                  >{{ letData.cellIdx12 ? letData.cellIdx12 : "（编辑）" }}
                </span>
              </div>
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;签名：</span>
                <span @click="commandFill('cellIdx13', '签名', 'TextItem')">{{
                  letData.cellIdx13 ? letData.cellIdx13 : "（编辑）"
                }}</span>
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;日期：</span>
                <span @click="commandFill('cellIdx14', '日期', 'DateItem')">{{
                  letData.cellIdx14 ? letData.cellIdx14 : "（编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:45%">
                <span class="no-line">主要负责人意见：</span>
                <span @click="commandFill('cellIdx15', '主要负责人意见', 'TextItem')"
                  >{{ letData.cellIdx15 ? letData.cellIdx15 : "（编辑）" }}
                </span>
              </div>
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;签名：</span>
                <span @click="commandFill('cellIdx16', '签名', 'TextItem')">{{
                  letData.cellIdx16 ? letData.cellIdx16 : "（编辑）"
                }}</span>
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;日期：</span>
                <span @click="commandFill('cellIdx17', '日期', 'DateItem')">{{
                  letData.cellIdx17 ? letData.cellIdx17 : "（编辑）"
                }}</span>
                <div class="line"></div>
                <div class="line1"></div>
            </div>
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
      @close="closeDialog"
      @confirm-paper="confirmPaper"
    ></select-paper>
  </div>
</template>

<script>
import GoDB from "@/utils/godb.min.js";
import { getDocNumber2, setNewDanger } from "@/utils/setInitPaperData";
import associationSelectPaper from '@/components/association-select-paper'

export default {
  name: "Let408",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {
        cellIdx0: null, // 暂不用
        cellIdx1: null, // 编号
        cellIdx2: null, // 案由
        cellIdx3: null, // 审批事项
        cellIdx4: null, // 行政相对人基本情况
        cellIdx5: null, // 案情摘要
        cellIdx6: null, // 提请审批的理由及依据
        cellIdx7: null, // 承办人意见
        cellIdx8: null, // 承办人（签名)
        cellIdx9: null, // 日期
        cellIdx10: null, // 承办人（签名）)
        cellIdx11: null, // 日期
        cellIdx12: null, // 被检查单位意见
        cellIdx13: null, // 单位负责人（签名)
        cellIdx14: null, // 日期
        cellIdx15: null, // 被检查单位意见
        cellIdx16: null, // 单位负责人（签名)
        cellIdx17: null, // 日期
        DangerTable: null,
        selectedType: null,
        associationPaperId: {},
        associationPaperOrder: []
      },
      options: {},
      visibleSelectDialog: false,
      selectedType: "单位", // 初始化时选择的单位或个人
      associationPaper: ['4']
    };
  },
  methods: {
    async initLetData (selectedPaper) {
      this.visibleSelectDialog = true;
      let db = new GoDB(this.$store.state.DBName);
      // 1.生成文书编号
      let paperNumber = await getDocNumber2(
        db,
        this.docData.docTypeNo,
        this.corpData.caseId
      );
      // 2.获取立案决定书案由
      let let4DataPaperContent = JSON.parse(selectedPaper.let4Data.paperContent);
      let DangerTable = null
      if (this.corpData.caseType === '0') {
        DangerTable = let4DataPaperContent.DangerTable ? 
          setNewDanger(selectedPaper.let4Data, let4DataPaperContent.DangerTable)
          : {}
      }
      await db.close();
      let associationPaperId = Object.assign({}, this.setAssociationPaperId(let4DataPaperContent.associationPaperId), {
        paper4Id: selectedPaper.let4Data.paperId,
      }) 
      let associationPaperOrder = this.setAssociationPaperOrder(let4DataPaperContent.associationPaperOrder)
      associationPaperOrder.push('4')
      this.letData = Object.assign({}, this.letData, {
        cellIdx1: paperNumber,
        cellIdx2: let4DataPaperContent.cellIdx4, // 案由
        cellIdx5: let4DataPaperContent.cellIdx5, // 案由
        DangerTable,
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
    async confirm() {
      // 选择单位或个人
      this.visibleSelectDialog = false;
      if (this.selectedType === "单位") {
        // 按单位初始化信息
        let db = new GoDB(this.$store.state.DBName);
        let corpBase = db.table("corpBase");
        let corp = await corpBase.find((item) => {
          return item.corpId == this.corpData.corpId;
        });
        // 煤矿名称+“，”+统一信用代码+“，”+法定代表人+“，”+“法定代表人手机号”+“，”+煤矿地址。
        let corpDescription = `${corp.corpName || 'XX'}，${corp.uscCode || 'XX'}，${corp.legalName || 'XX'}，${corp.legalTel || 'XX'}，${corp.address || 'XX'}`
        this.letData.cellIdx4 = corpDescription;
      } else {
        // 按个人初始化信息
      }
      this.letData.selectedType = this.selectedType;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/let";
</style>