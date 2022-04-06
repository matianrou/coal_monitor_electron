<!-- 行政处罚 一般程序 行政执法决定法制审核意见书 49 -->
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
            <div class="textAlignCenter formHeader4">
              行政执法决定法制审核意见书
            </div>
            <div class="docTextLine paper-number-div">
              <div>
                <label>编号：</label>
                <span
                  class="line"
                  @click="commandFill('cellIdx1', '编号', 'TextItem')"
                  >{{
                    letData.cellIdx1 ? letData.cellIdx1 : "（点击编辑）"
                  }}</span
                >
              </div>
            </div>
            <div class="docTextarea">
              <span class="no-line"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;案&nbsp;&nbsp;由：</span
              >
              <span 
                @dblclick="commandFill('cellIdx3', '案由', `${corpData.caseType === '0' ? 'DangerTable' : 'TextareaItem'}`)"
                @click="commandFill('cellIdx3', '案由', corpData.caseType === '0' ? 'DangerTextareaItem' : 'TextareaItem')">{{
                letData.cellIdx3 ? letData.cellIdx3 : "（点击编辑）"
              }}</span>
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;行政相对人基本情况：</span
              >
              <span
                @click="
                  commandFill('cellIdx4', '行政相对人基本情况', 'TextareaItem')
                "
                >{{
                  letData.cellIdx4 ? letData.cellIdx4 : "（点击编辑）"
                }}</span
              >
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;案情摘要：</span
              >
              <span
                @dblclick="commandFill('cellIdx5', '案情摘要', `${corpData.caseType === '0' ? 'DangerTable' : 'TextareaItem'}`)"
                @click="commandFill('cellIdx5', '案情摘要', corpData.caseType === '0' ? 'DangerTextareaItem' : 'TextareaItem')"
                >{{
                  letData.cellIdx5 ? letData.cellIdx5 : "（点击编辑）"
                }}</span
              >
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;作出决定依据：</span
              >
              <span
                @dblclick="commandFill('cellIdx6', '作出决定依据', `${corpData.caseType === '0' ? 'DangerTable' : 'TextareaItem'}`)"
                @click="commandFill('cellIdx6', '作出决定依据', corpData.caseType === '0' ? 'DangerTextareaItem' : 'TextareaItem')"
                >{{
                  letData.cellIdx6 ? letData.cellIdx6 : "（点击编辑）"
                }}</span
              >
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;建议行政决定：</span
              >
              <span
                @dblclick="commandFill('cellIdx7', '建议行政决定', `${corpData.caseType === '0' ? 'DangerTable' : 'TextareaItem'}`)"
                @click="commandFill('cellIdx7', '建议行政决定', corpData.caseType === '0' ? 'DangerTextareaItem' : 'TextareaItem')"
                >{{
                  letData.cellIdx7 ? letData.cellIdx7 : "（点击编辑）"
                }}</span
              >
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;法制审核意见：</span
              >
              <span
                @click="
                  commandFill('cellIdx8', '法制审核意见', 'SelectInputItem')
                "
                >{{
                  letData.cellIdx8 ? letData.cellIdx8 : "（点击编辑）"
                }}</span
              >
              <div class="line"></div>
            </div>
            <div
              class="docTextarea"
              style="margin-top: 30px; margin-bottom: 30px"
            >
              <div style="display: inline-block; min-width: 55%">
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;法制审核人员（签名）：</span>
                <span
                  @click="
                    commandFill('cellIdx9', '法制审核人员（签名）', 'TextItem')
                  "
                  >{{ letData.cellIdx9 ? letData.cellIdx9 : "（点击编辑）" }}
                </span>
              </div>
              <span class="no-line">日&nbsp;&nbsp;&nbsp;&nbsp;期：</span>
              <span @click="commandFill('cellIdx10', '日期', 'DateItem')">{{
                letData.cellIdx10 ? letData.cellIdx10 : "（点击编辑）"
              }}</span>
              <div class="line"></div>
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
import { getNowDate } from "@/utils/date";
import { transformNumToChinese } from "@/utils";
import associationSelectPaper from "@/components/association-select-paper";
import { setDangerTable } from "@/utils/handlePaperData";
import { getDocNumber2, setNewDanger, setAssociationPaperId } from '@/utils/setInitPaperData'
export default {
  name: "Let215",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {
        cellIdx0: null, // 暂不用
        cellIdx1: null, // 编号
        cellIdx2: null, // 暂不用
        cellIdx3: null, // 案由
        cellIdx4: null, // 行政相对人基本情况
        cellIdx5: null, // 案情摘要
        cellIdx6: null, // 作出决定依据
        cellIdx7: null, // 建议行政决定
        cellIdx8: null, // 法制审核意见
        cellIdx9: null, // 法制审核人员（签名）
        cellIdx10: null, // 日期
        DangerTable: null,
        extraData: {},
        associationPaperId: {},
        associationPaperOrder: []
      },
      options: {
        cellIdx8: []
      },
      selectAssociationPaper: ['6', '4'],
      selectedType: "单位",
      visibleSelectDialog: false,
    };
  },
  methods: {
    async initLetData(selectedPaper) {
      let corpBase = await this.getDatabase("baseInfo");
      let corp = corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      let selectedType = ''
      let selectletData = {}
      let letDataPaperContent = {}
      let associationPaperId = {}
      let associationPaperOrder = []
      if (selectedPaper.let6Data) {
        // 如果是关联告知书则直接获取告知书的单位或个人
        letDataPaperContent = JSON.parse(
          selectedPaper.let6Data.paperContent
        );
        selectedType = letDataPaperContent.selectedType;
        selectletData = selectedPaper.let6Data
        associationPaperId = Object.assign({}, this.setAssociationPaperId(letDataPaperContent.associationPaperId), {
          paper6Id: selectedPaper.let6Data.paperId,
        }) 
        associationPaperOrder = this.setAssociationPaperOrder(letDataPaperContent.associationPaperOrder)
        associationPaperOrder.push('6')
      } else {
        // 1.如果没关联告知书则弹出提示框，选择单位或个人
        this.visibleSelectDialog = true
        letDataPaperContent = JSON.parse(
          selectedPaper.let4Data.paperContent
        );
        selectletData = selectedPaper.let4Data
        associationPaperId = Object.assign({}, setAssociationPaperId(letDataPaperContent.associationPaperId), {
          paper4Id: selectedPaper.let4Data.paperId,
        }) 
        associationPaperOrder = this.setAssociationPaperOrder(letDataPaperContent.associationPaperOrder)
        associationPaperOrder.push('4')
      }
      // 1.获取文书编号：
      let paperNumber = await getDocNumber2(this.docData.docTypeNo, this.corpData.caseId)
      // 2.案由内容初始化：煤矿企业名称+涉嫌+违法违规行为+案
      // 获取笔录文书中的隐患数据
      let newDangerTable = this.corpData.caseType === "0" ? this.handleSelectedDangerList(letDataPaperContent.DangerTable) : null
      let cellIdx3String =
        this.corpData.caseType === "0"
          ? setDangerTable(
              newDangerTable,
              {},
              {
                page: "49",
                key: "cellIdx3",
                spellString: {
                  corpName: corp.corpName,
                  groupName: this.$store.state.curCase.provinceGroupName,
                },
              }
            )
          : "";
      // 3.案情摘要：与立案决定书案情摘要格式一致。检查时间，煤矿企业全称+进行现场检查时发现，+隐患描述。+违反认定法条+的规定，依据《安全生产违法行为行政处罚办法》第二十三条的规定申请立案。
      // 获取检查时间
      let wkPaper = await this.getPaperDatabase(this.corpData.caseId)
      let let1Data = wkPaper.find(item => item.paperId === letDataPaperContent.associationPaperId.paper1Id && item.delFlag !== '1')
      let let1DataPaperContent = JSON.parse(
        let1Data.paperContent
      );
      // 检查时间日期：
      let dateString = let1DataPaperContent.cellIdx1
        ? let1DataPaperContent.cellIdx1
        : "X年X月X日-X年X月X日";
      let cellIdx5String =
        this.corpData.caseType === "0"
          ? setDangerTable(
              newDangerTable,
              {},
              {
                page: "49",
                key: "cellIdx5",
                spellString: {
                  corpName: corp.corpName,
                  dateString,
                  groupName: this.$store.state.curCase.provinceGroupName,
                },
              }
            )
          : "";
      // 4.建议案件处理意见：行政处罚依据+行政处罚决定（分条）
      // let cellIdx6String = `${dangerObject.penaltyBasisString}`;
      let cellIdx6String =
        this.corpData.caseType === "0"
          ? setDangerTable(
              newDangerTable,
              {},
              {
                page: "49",
                key: "cellIdx6",
              }
            )
          : "";
      // let cellIdx7String = `${dangerObject.penaltyDesc}`;
      let cellIdx7String =
        this.corpData.caseType === "0"
          ? setDangerTable(
              newDangerTable,
              {},
              {
                page: "49",
                key: "cellIdx7",
              }
            )
          : "";
      // 获取采矿许可证和安全生产许可证
      let zfZzInfo = await this.getDatabase("zfZzInfo");
      let zzInfo1 = zfZzInfo.find((item) => {
        return (
          item.corpId == this.corpData.corpId &&
          item.credTypeName == "采矿许可证"
        );
      });
      let zzInfo2 = zfZzInfo.find((item) => {
        return (
          item.corpId == this.corpData.corpId &&
          item.credTypeName == "安全生产许可证"
        );
      });
      let DangerTable = null;
      if (this.corpData.caseType === "0") {
        DangerTable = newDangerTable
          ? setNewDanger(
              selectletData,
              newDangerTable, 
              this.paperId
            )
          : {};
      }
      this.letData = Object.assign({}, this.letData, {
        cellIdx1: paperNumber,
        cellIdx3: cellIdx3String, // 案由
        cellIdx4: selectedType === '单位' ? `${corp.corpName}社会统一信用代码是${corp.uscCode ? corp.uscCode : 'XX'}，采矿许可证号是${zzInfo1 && zzInfo1.credId ? zzInfo1.credId : 'XX'}，安全生产许可证号是${zzInfo2 && zzInfo2.credId ? zzInfo2.credId : 'XX'}。` : '姓名XXX，出生日期XXXX年XX月XX日，身份证号XXXX。',
        cellIdx5: cellIdx5String, // 案情摘要
        cellIdx6: cellIdx6String, // 作出决定依据
        cellIdx7: cellIdx7String, // 建议行政决定
        DangerTable: DangerTable,
        extraData: {
          // 用于拼写隐患内容的字符集合
          corpName: corp.corpName,
          dateString,
          groupName: this.$store.state.curCase.provinceGroupName,
        },
        selectedType,
        associationPaperId: associationPaperId,
        associationPaperOrder: []
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
        if (
          (key === "cellIdx3" ||
          key === "cellIdx5" ||
          key === "cellIdx6" ||
          key === "cellIdx7") &&
          type === "DangerTable"
        ) {
          this.options[key] = {
            page: "49",
            key: key,
            spellString: this.letData.extraData,
            showMergeBtn: true,
          };
          dataKey = "DangerTable";
        } else if (key === "cellIdx8") {
          dataKey = `${key}Type${type}`;
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
    async confirm() {
      // 选择单位或个人
      this.visibleSelectDialog = false;
      //5.行政相对人基本情况：
      // 1，如对煤矿企业经行法制审核，则显示：煤矿企业名称，社会统一信用代码是XXXX，采矿许可证号是xxx,安全生产许可证号是xxx.
      // 2，如果对个人进行法制审核，则显示姓名XXX，出生日期XXXX年XX月XX日，身份证号XXXX。
      let cellIdx4String = ''
      if (this.selectedType === '单位') {
        let corpBase = await this.getDatabase('baseInfo');
        let corp = corpBase.find((item) => {
          return item.corpId == this.corpData.corpId;
        });
        cellIdx4String = `${corp.corpName}社会统一信用代码是${corp.uscCode ? corp.uscCode : 'XX'}，采矿许可证号是${corp.uscCode ? corp.uscCode : 'XX'}，安全生产许可证号是${corp.uscCode ? corp.uscCode : 'XX'}。`;
      } else {
        cellIdx4String = '姓名XXX，出生日期XXXX年XX月XX日，身份证号XXXX。'
      }
      this.letData.cellIdx4 = cellIdx4String
      this.letData.selectedType = this.selectedType
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/let";
</style>