<!-- 行政处罚 一般程序 行政处罚告知书 6 -->
<template>
  <div style="width: 100%; height: 100%;">
    <let-main
      ref="letMain"
      :corp-data="corpData"
      :doc-data="docData"
      :let-data="letData"
      :paper-data="paperData"
      @go-back="goBack"
    >
      <div slot="left">
        <div class="page page-sizeA4">
          <div>
            <div class="stdRowH"></div>
            <div class="textAlignCenter formHeader0">煤矿安全监管行政执法文书</div>
            <div class="textAlignCenter formHeader1">行政处罚告知书</div>
            <div class="docTextLine paper-number-div">
              <div>
                <span
                  @click="commandFill('cellIdx0', '文书号', 'TextItem')"
                >{{ letData.cellIdx0 ? letData.cellIdx0 : '（编辑）' }}</span>
                <label>（</label>
                <span
                  @click="commandFill('cellIdx1', '文书号', 'TextItem')"
                >{{ letData.cellIdx1 ? letData.cellIdx1 : '（编辑）' }}</span>
                <label>）煤安告〔</label>
                <span
                  @click="commandFill('cellIdx2', '文书号', 'TextItem')"
                >{{ letData.cellIdx2 ? letData.cellIdx2 : '（编辑）' }}</span>
                <label>〕</label>
                <span
                  @click="commandFill('cellIdx3', '文书号', 'TextItem')"
                >{{ letData.cellIdx3 ? letData.cellIdx3 : '（编辑）' }}</span>
                <label>号</label>
              </div>
            </div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_4"
                  style="width:50%"
                  data-title="煤矿名称"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx4', selectedType === '单位' ? '煤矿名称' : '个人名称', 'TextItem')"
                >{{letData.cellIdx4}}</td>
                <td class="textAlignLeft">:</td>
              </tr>
            </table>
            <div class="docTextarea">
              <label style="width: 5%"></label>
              经查，你
              <span class="no-underline">{{
                letData.cellIdx5 ? letData.cellIdx5 : "（点击编辑）"
              }}</span>
              的以下行为
              <span
                @dblclick="commandFill('cellIdx6', '违法行为', `${corpData.caseType === '0' ? 'DangerTable' : 'TextareaItem'}`)"
                @click="commandFill('cellIdx6', '违法行为', corpData.caseType === '0' ? 'DangerTextareaItem' : 'TextareaItem')"
                >{{
                  letData.cellIdx6 ? letData.cellIdx6 : "（点击编辑）"
                }}</span
              >
              <span
                class="no-underline"
                @click="commandFill('cellIdx22', '', 'TextItem')"
                >{{letData.cellIdx22}}</span
              >违反了
              <span
                @dblclick="commandFill('cellIdx7', '规定', `${corpData.caseType === '0' ? 'DangerTable' : 'TextareaItem'}`)"
                @click="commandFill('cellIdx7', '规定', corpData.caseType === '0' ? 'DangerTextareaItem' : 'TextareaItem')"
                >{{
                  letData.cellIdx7 ? letData.cellIdx7 : "（点击编辑）"
                }}</span
              >
              的规定，依据
              <span
                @dblclick="commandFill('cellIdx8', '法律依据', `${corpData.caseType === '0' ? 'DangerTable' : 'TextareaItem'}`)"
                @click="commandFill('cellIdx8', '法律依据', corpData.caseType === '0' ? 'DangerTextareaItem' : 'TextareaItem')"
                >{{
                  letData.cellIdx8 ? letData.cellIdx8 : "（点击编辑）"
                }}</span
              >
              的规定，拟对你
              <span class="no-underline">{{
                letData.cellIdx9 ? letData.cellIdx9 : "（点击编辑）"
              }}</span>
              <span
                @dblclick="commandFill('cellIdx10', '行政处罚', `${corpData.caseType === '0' ? 'DangerTable' : 'TextareaItem'}`)"
                @click="commandFill('cellIdx10', '行政处罚', corpData.caseType === '0' ? 'DangerTextareaItem' : 'TextareaItem')"
                >{{
                  letData.cellIdx10 ? letData.cellIdx10 : "（点击编辑）"
                }}</span
              >
              的行政处罚。
            </div>
            <div class="docTextarea">
              <label style="width:5%"></label>
              根据《中华人民共和国行政处罚法》第<span class="text-decoration">四十五</span>条规定，你
              <span
                class="no-underline"
              >{{ letData.cellIdx11 ? letData.cellIdx11 : '（点击编辑）'}}</span>
              对上述拟作出的行政处罚有陈述、申辩的权利。
            </div>
            <div class="docTextarea">
              <label style="width:5%"></label>
              <span
                @click="commandFill('cellIdx23', '', 'SelectItem')"
                class="no-underline"
                >{{
                  letData.cellIdx23 ? letData.cellIdx23 : "□"
                }}
              </span>
              根据《中华人民共和国行政处罚法》第<span class="text-decoration">六十三</span>条、第<span class="text-decoration">六十四</span>条规定，你
              <span
                class="no-underline"
              >{{ letData.cellIdx11 ? letData.cellIdx11 : '（点击编辑）'}}</span>对上述拟作出的行政处罚有要求举行听证的权利。要求举行听证的，应当在收到本告知书之日起五个工作日内提出。逾期未提出的，视为放弃此权利。
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:55%;margin-top: 30px;">
                <span class="no-line">受送达人（签名）：</span>
                <span @click="commandFill('cellIdx13', '受送达人（签名）：', 'TextItem')"
                  >{{ letData.cellIdx13 ? letData.cellIdx13 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">日&nbsp;&nbsp;&nbsp;&nbsp;期：</span>
                <span @click="commandFill('cellIdx14', '日期', 'DateItem')">{{
                  letData.cellIdx14 ? letData.cellIdx14 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:55%">
                <span class="no-line">执法机关地址：</span>
                <span @click="commandFill('cellIdx15', '执法机关地址', 'TextItem')"
                  >{{ letData.cellIdx15 ? letData.cellIdx15 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">邮政编码：</span>
                <span @click="commandFill('cellIdx16', '邮政编码', 'TextItem')">{{
                  letData.cellIdx16 ? letData.cellIdx16 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:55%">
                <span class="no-line">执法机关联系人：</span>
                <span @click="commandFill('cellIdx17', '执法机关联系人', 'TextItem')"
                  >{{ letData.cellIdx17 ? letData.cellIdx17 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">联系电话：</span>
                <span @click="commandFill('cellIdx18', '联系电话', 'TextItem')">{{
                  letData.cellIdx18 ? letData.cellIdx18 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <table class="docBody" style="margin-top: 30px;">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_19"
                  align="right"
                  style="width:95%"
                  @click="commandFill('cellIdx19', '', 'TextItem')"
                >{{letData.cellIdx19 ? letData.cellIdx19 : '（点击编辑）'}}</td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_20"
                  align="right"
                  style="width:95%"
                  data-title
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx20', '日期', 'DateItem')"
                >{{letData.cellIdx20 ? letData.cellIdx20 : '（点击编辑）'}}</td>
              </tr>
            </table>
            <div class="docTextarea" style="border-top: 2px solid #000;">
              备注：本文书一式两份，一份送拟处罚
              <span
                style="borderBottom:none"
              >{{ letData.cellIdx21 ? letData.cellIdx21 : '（点击编辑）'}}</span>
              ，一份存档。 
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
import {
  setNewDanger,
  getDocNumber,
  getOrgData
} from "@/utils/setInitPaperData";
import associationSelectPaper from '@/components/association-select-paper'
import { setDangerTable } from '@/utils/handlePaperData'
export default {
  name: "Let204",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {
        cellIdx0: null, // 文书号
        cellIdx1: null, // 文书号
        cellIdx2: null, // 文书号
        cellIdx3: null, // 文书号
        cellIdx4: null, // 煤矿名称
        cellIdx5: null, // 单位或个人
        cellIdx6: null, // 违法行为
        cellIdx22: null, // 分别违反了或违反了
        cellIdx7: null, // 规定
        cellIdx8: null, // 法律依据
        cellIdx9: null, // 单位或个人
        cellIdx10: null, // 行政处罚
        cellIdx23: null,
        cellIdx11: null, // 单位或个人
        cellIdx13: null, // 收件人（签名）
        cellIdx14: null, // 日期
        cellIdx15: null, // 邮政编码
        cellIdx16: null, // 邮政编码
        cellIdx17: null, // 我局联系人
        cellIdx18: null, // 联系电话
        cellIdx19: null, // 
        cellIdx20: null, // 日期
        cellIdx21: null, // 单位或个人
        DangerTable: null,
        associationPaperId: null,
        associationPaperOrder: [],
      },
      options: {
        cellIdx23: [
          {
            value: "□",
            name: "□",
          },
          {
            value: "√",
            name: "√",
          },            
        ],
      },
      visibleSelectDialog: false,
      selectedType: "单位", // 初始化时选择的单位或个人
      selectAssociationPaper: ['36', '4'],
    };
  },
  methods: {
    async initLetData (selectedPaper) {
      if (this.corpData.caseType === '0') {
        let db = new GoDB(this.$store.state.DBName);
        let paperNumber = await getDocNumber(
          db,
          this.docData.docTypeNo,
          this.corpData.caseId
        );
        let selectletData = {}
        let letDataPaperContent = {}
        let associationPaperId = {}
        let associationPaperOrder = []
        let selectedType = ''
        if (selectedPaper.let36Data) {
          // 如果是关联案件处理呈报书
          letDataPaperContent = JSON.parse(
            selectedPaper.let36Data.paperContent
          );
          if (letDataPaperContent.selectedType) {
            selectedType = letDataPaperContent.selectedType
          } else {
            // 1.弹出提示框，选择单位或个人
            this.visibleSelectDialog = true;
          }
          selectletData = selectedPaper.let36Data
          // 遍历关联文书key
          associationPaperId = Object.assign({}, this.setAssociationPaperId(letDataPaperContent.associationPaperId), {
            paper36Id: selectedPaper.let36Data.paperId,
          }) 
          associationPaperOrder = this.setAssociationPaperOrder(letDataPaperContent.associationPaperOrder)
          associationPaperOrder.push('36')
        } else {
          // 如果是关联立案决定书
          // 1.弹出提示框，选择单位或个人
          this.visibleSelectDialog = true;
          letDataPaperContent = JSON.parse(
            selectedPaper.let4Data.paperContent
          );
          selectletData = selectedPaper.let4Data
          associationPaperId = Object.assign({}, this.setAssociationPaperId(letDataPaperContent.associationPaperId), {
            paper4Id: selectedPaper.let4Data.paperId,
          }) 
          associationPaperOrder = this.setAssociationPaperOrder(letDataPaperContent.associationPaperOrder)
          associationPaperOrder.push('4')
        }
        // 7.行政处罚决定
        let cellIdx10String = setDangerTable(
          letDataPaperContent.DangerTable,
          {},
          {
            page: "6",
            key: "cellIdx10",
          }
        );
        // 9.机构接口中获取sysOfficeInfo实体中
        let orgSysOfficeInfo = await getOrgData(db, this.$store.state.curCase.affiliate)
        // depAddress：我局地址、
        // depPost：邮政编码、
        // master：我局联系人、
        // phone：联系电话
        let cellIdx6String = setDangerTable(
          letDataPaperContent.DangerTable,
          {},
          {
            page: "6",
            key: "cellIdx6",
          }
        );
        let cellIdx22String = setDangerTable(
          letDataPaperContent.DangerTable,
          {},
          {
            page: "6",
            key: "cellIdx22",
          }
        );
        let cellIdx7String = setDangerTable(
          letDataPaperContent.DangerTable,
          {},
          {
            page: "6",
            key: "cellIdx7",
          }
        );
        let cellIdx8String = setDangerTable(
          letDataPaperContent.DangerTable,
          {},
          {
            page: "6",
            key: "cellIdx8",
          }
        );
        let DangerTable = letDataPaperContent.DangerTable ? 
          setNewDanger(selectletData, letDataPaperContent.DangerTable)
          : {}
        await db.close();
        this.letData = Object.assign({}, this.letData, {
          cellIdx0: paperNumber.num0, // 文书号
          cellIdx1: paperNumber.num1, // 文书号
          cellIdx2: paperNumber.num3, // 文书号
          cellIdx3: paperNumber.num4, // 文书号
          cellIdx4: selectedType === '单位' ? this.corpData.corpName : '',
          cellIdx5: selectedType,
          cellIdx6: cellIdx6String, // 违法行为
          cellIdx22: cellIdx22String, // 分别违反了或违反了
          cellIdx7: cellIdx7String, // 违法行为
          cellIdx8: cellIdx8String, // 法律依据
          cellIdx9: selectedType,
          cellIdx10: cellIdx10String, // 法律规定
          cellIdx11: selectedType,
          cellIdx23: '□', // 
          cellIdx15: orgSysOfficeInfo.depAddress, // 邮政编码
          cellIdx16: orgSysOfficeInfo.depPost, // 邮政编码
          cellIdx17: orgSysOfficeInfo.master, // 我局联系人
          cellIdx18: orgSysOfficeInfo.phone, // 联系电话
          cellIdx19: this.$store.state.curCase.groupName, // 
          cellIdx20: this.todayDate, // 日期
          cellIdx21: selectedType, 
          DangerTable: DangerTable,
          selectedType,
          associationPaperId: associationPaperId,
          associationPaperOrder,
        })
      } else {
        let db = new GoDB(this.$store.state.DBName);
        let paperNumber = await getDocNumber(
          db,
          this.docData.docTypeNo,
          this.corpData.caseId
        );
        // 9.机构接口中获取sysOfficeInfo实体中
        let orgSysOfficeInfo = await getOrgData(db, this.$store.state.curCase.affiliate)
        await db.close();
        let selectedType = ''
        let associationPaperId = {}
        let letDataPaperContent = {}
        if (selectedPaper.let36Data) {
          // 如果是关联案件处理呈报书
          letDataPaperContent = JSON.parse(
            selectedPaper.let36Data.paperContent
          );
          if (letDataPaperContent.selectedType) {
            selectedType = letDataPaperContent.selectedType
          } else {
            // 1.弹出提示框，选择单位或个人
            this.visibleSelectDialog = true;
          }
          // 遍历关联文书key
          associationPaperId = Object.assign({}, this.setAssociationPaperId(letDataPaperContent.associationPaperId), {
            paper36Id: selectedPaper.let36Data.paperId,
          }) 
        } else {
          // 如果是关联立案决定书
          this.visibleSelectDialog = true;
          letDataPaperContent = JSON.parse(
            selectedPaper.let4Data.paperContent
          );
          associationPaperId = Object.assign({}, this.setAssociationPaperId(letDataPaperContent.associationPaperId), {
            paper4Id: selectedPaper.let4Data.paperId,
          }) 
        }
        this.letData = Object.assign({}, this.letData, {
          cellIdx0: paperNumber.num0, // 文书号
          cellIdx1: paperNumber.num1, // 文书号
          cellIdx2: paperNumber.num3, // 文书号
          cellIdx3: paperNumber.num4, // 文书号
          cellIdx23: '□', // 
          cellIdx15: orgSysOfficeInfo.depAddress, // 邮政编码
          cellIdx16: orgSysOfficeInfo.depPost, // 邮政编码
          cellIdx17: orgSysOfficeInfo.master, // 我局联系人
          cellIdx18: orgSysOfficeInfo.phone, // 联系电话
          cellIdx19: this.$store.state.curCase.groupName, // 
          cellIdx20: this.todayDate, // 日期
          selectedType,
          associationPaperId: associationPaperId,
          associationPaperOrder,
        })
      }
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
        if (key === "cellIdx6" ||
          key === "cellIdx7" ||
          key === "cellIdx8" ||
          key === "cellIdx10"
        ) {
          if (type === 'DangerTable') {
            this.options[key] = {
              page: "6",
              key: key,
              selectedType: this.letData.selectedType,
              showMergeBtn: true,
              showPunishmentInfor: true
            };
            dataKey = "DangerTable";
          } else {
            if (this.corpData.caseType === '0' &&
              (key === 'cellIdx6' || key === 'cellIdx7' || key === 'cellIdx10')) {
              this.options[key] = {
                disabled: true
              };
            } else {
              this.options[key] = {
                disabled: false
              };
            }
          }
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
      if (this.selectedType === "单位") {
        let corpName = this.corpData.corpName;
        // 按单位初始化信息
        // 1.单位名称
        this.letData.cellIdx4 = corpName;
      } else {
        // 按个人初始化信息
      }
      // 2.经查，你XX的以下行为
      this.letData.cellIdx5 = this.selectedType;
      // 6.你单位或个人
      this.letData.cellIdx9 = this.selectedType;
      // 8.你单位或个人
      this.letData.cellIdx11 = this.selectedType;
      this.letData.cellIdx21 = this.selectedType;
      this.letData.selectedType = this.selectedType;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/let";
</style>