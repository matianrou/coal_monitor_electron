<!--行政强制 行政强制执行 强制执行申请书 18 -->
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
            <div class="textAlignCenter formHeader0">
              煤矿安全监管行政执法文书
              <br />
            </div>
            <div class="textAlignCenter formHeader1">强制执行申请书</div>
            <div class="docTextLine paper-number-div">
              <div style="display: flex; width: 100%;">
                <div>
                  <span
                    @click="commandFill('cellIdx0', '文书号', 'TextItem')"
                  >{{ letData.cellIdx0 ? letData.cellIdx0 : '（编辑）' }}</span>
                  <label>（</label>
                  <span
                    @click="commandFill('cellIdx1', '文书号', 'TextItem')"
                  >{{ letData.cellIdx1 ? letData.cellIdx1 : '（编辑）' }}</span>
                  <label>）煤安执〔</label>
                  <span
                    @click="commandFill('cellIdx2', '文书号', 'TextItem')"
                  >{{ letData.cellIdx2 ? letData.cellIdx2 : '（编辑）' }}</span>
                  <label>〕</label>
                  <span
                    @click="commandFill('cellIdx3', '文书号', 'TextItem')"
                  >{{ letData.cellIdx3 ? letData.cellIdx3 : '（编辑）' }}</span>
                  <label>号</label>
                </div>
                <div style="flex: 1; text-align: right;">
                  <label>签发人：</label>
                  <span
                    @click="commandFill('cellIdx4', '签发人', 'TextItem')"
                  >{{ letData.cellIdx4 ? letData.cellIdx4 : '（编辑）' }}</span>
                </div>
              </div>
            </div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_5"
                  style="min-width:50%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx5', '', 'TextItem')"
                >{{ letData.cellIdx5 }}</td>
                <td class="textAlignLeft">法院:</td>
              </tr>
            </table>
            <div class="docTextarea">
              <label style="width:5%"></label>
              本机关于
              <span
                @click="commandFill('cellIdx6', '年', 'TextItem')"
              >{{ letData.cellIdx6 ? letData.cellIdx6 : '（XX）'}}</span>
              年
              <span
                @click="commandFill('cellIdx7', '月', 'TextItem')"
              >{{ letData.cellIdx7 ? letData.cellIdx7 : '（XX）'}}</span>
              月
              <span
                @click="commandFill('cellIdx8', '日', 'TextItem')"
              >{{ letData.cellIdx8 ? letData.cellIdx8 : '（XX）'}}</span>
              日对被申请执行人
              <span
                @click="commandFill('cellIdx9', '', 'TextareaItem')"
              >{{ letData.cellIdx9 ? letData.cellIdx9 : '（点击编辑）'}}</span>
              作出了
              <span
                @click="commandFill('cellIdx10', '行政处罚决定', 'TextareaItem')"
              >{{ letData.cellIdx10 ? letData.cellIdx10 : '（点击编辑）'}}</span>
              的行政处罚决定（
              <span
                class="no-underline"
                @click="commandFill('cellIdx11', '行政处罚决定文书号', 'TextItem')"
              >{{ letData.cellIdx11 ? letData.cellIdx11 : '（编辑）'}}</span>
              （
              <span
                class="no-underline"
                @click="commandFill('cellIdx12', '行政处罚决定文书号', 'TextItem')"
              >{{ letData.cellIdx12 ? letData.cellIdx12 : '（编辑）'}}</span>
              ）煤安罚〔
              <span
                class="no-underline"
                @click="commandFill('cellIdx13', '行政处罚决定文书号', 'TextItem')"
              >{{ letData.cellIdx13 ? letData.cellIdx13 : '（编辑）'}}</span>
              〕
              <span
                class="no-underline"
                @click="commandFill('cellIdx14', '行政处罚决定文书号', 'TextItem')"
              >{{ letData.cellIdx14 ? letData.cellIdx14 : '（编辑）'}}</span>
              号），并于
              <span
                @click="commandFill('cellIdx15', '年', 'TextItem')"
              >{{ letData.cellIdx15 ? letData.cellIdx15 : '（XX）'}}</span>
              年
              <span
                @click="commandFill('cellIdx16', '月', 'TextItem')"
              >{{ letData.cellIdx16 ? letData.cellIdx16 : '（XX）'}}</span>
              月
              <span
                @click="commandFill('cellIdx17', '日', 'TextItem')"
              >{{ letData.cellIdx17 ? letData.cellIdx17 : '（XX）'}}</span>
              日送达了催告书（
              <span
                class="no-underline"
                @click="commandFill('cellIdx18', '催告书文书号', 'TextItem')"
              >{{ letData.cellIdx18 ? letData.cellIdx18 : '（编辑）'}}</span>
              （
              <span
                class="no-underline"
                @click="commandFill('cellIdx19', '催告书文书号', 'TextItem')"
              >{{ letData.cellIdx19 ? letData.cellIdx19 : '（编辑）'}}</span>
              ）煤安催告〔
              <span
                class="no-underline"
                @click="commandFill('cellIdx20', '催告书文书号', 'TextItem')"
              >{{ letData.cellIdx20 ? letData.cellIdx20 : '（编辑）'}}</span>
              〕
              <span
                class="no-underline"
                @click="commandFill('cellIdx21', '催告书文书号', 'TextItem')"
              >{{ letData.cellIdx21 ? letData.cellIdx21 : '（编辑）'}}</span>
              号）。被申请执行人在法定的期限内未履行上述行政处罚决定。根据《中华人民共和国行政处罚法》第<span class="text-decoration">七十二</span>条第<span class="text-decoration">一</span>款第<span class="text-decoration">四</span>项、《中华人民共和国行政强制法》第<span class="text-decoration">五十三</span>条、第<span class="text-decoration">五十四</span>条规定，特申请贵院强制执行。
            </div>
            <div class="docTextarea">
              <label style="width: 2em;"></label>
              附有关材料：
            </div>
            <div class="docTextLine"
              v-for="(item, index) in letData.cellIdx34"
              :key="index">
              <label style="width: 2em;"></label>
              <label>{{item.sindex}}.</label>
              <div
                class="line-div"
                @click="editFileName('fileName', `材料${item.sindex}`, 'TextItem', index)"
              >
                {{ item.fileName ? item.fileName : "（点击编辑）" }}
              </div>
              <span
                v-if="paperData && paperData.delFlag !== '0'"
                class="no-line no-print"
                style="cursor: pointer; color:#409EFF;"
                @click="deletFileName(index, item)"
              >删除</span>
            </div>
            <div 
              v-if="paperData && paperData.delFlag !== '0'"
              class="docTextarea no-print" 
              style="text-align: center; cursor: pointer; color:#409EFF;" 
              @click="addFileName">
              （点击添加材料）
            </div>
            <table height="30"></table>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:55%">
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;收件人（签名）：</span>
                <span @click="commandFill('cellIdx25', '收件人（签名）', 'TextItem')"
                  >{{ letData.cellIdx25 ? letData.cellIdx25 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;日&nbsp;&nbsp;&nbsp;&nbsp;期:</span>
                <span @click="commandFill('cellIdx26', '日期', 'DateItem')">{{
                  letData.cellIdx26 ? letData.cellIdx26 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:55%">
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;申请单位联系人：</span>
                <span @click="commandFill('cellIdx27', '申请单位联系人', 'TextItem')"
                  >{{ letData.cellIdx27 ? letData.cellIdx27 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;联系电话：</span>
                <span @click="commandFill('cellIdx28', '联系电话', 'TextItem')">{{
                  letData.cellIdx28 ? letData.cellIdx28 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
             <table class="docBody" style="margin-top: 30px;">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_29"
                  align="right"
                  style="width:95%"
                  @click="commandFill('cellIdx29', '', 'TextItem')"
                >{{letData.cellIdx29 ? letData.cellIdx29 : '（点击编辑）'}}</td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_30"
                  align="right"
                  style="width:95%"
                  data-title
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx30', '日期', 'DateItem')"
                >{{letData.cellIdx30 ? letData.cellIdx30 : '（点击编辑）'}}</td>
              </tr>
            </table>
            <div class="docTextarea" style="border-top: 2px solid #000;">
              备注：本文书一式两份，一份送人民法院，一份存档。
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
import { getDocNumber, setNewDanger, getOrgData } from "@/utils/setInitPaperData";
import associationSelectPaper from '@/components/association-select-paper'
import { setDangerTable } from '@/utils/handlePaperData'
export default {
  name: "Let301",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {
        cellIdx0: null, // 文书号
        cellIdx1: null, // 文书号
        cellIdx2: null, // 文书号
        cellIdx3: null, // 文书号
        cellIdx4: null, // 签发人
        cellIdx5: null, // 法院
        cellIdx6: null, // 年
        cellIdx7: null, // 月
        cellIdx8: null, // 日
        cellIdx9: null, // 对被申请执行人
        cellIdx10: null, // 行政处罚决定
        cellIdx11: null, // 行政处罚决定 文书号
        cellIdx12: null, // 行政处罚决定 文书号
        cellIdx13: null, // 行政处罚决定 文书号
        cellIdx14: null, // 行政处罚决定 文书号
        cellIdx15: null, // 年
        cellIdx16: null, // 月
        cellIdx17: null, // 日
        cellIdx18: null, // 催告书文书号
        cellIdx19: null, // 催告书文书号
        cellIdx20: null, // 催告书文书号
        cellIdx21: null, // 催告书文书号
        cellIdx22: null, // 暂不用
        cellIdx23: null, // 暂不用
        cellIdx24: null, // 暂不用
        cellIdx25: null, // 收件人（签名）
        cellIdx26: null, // 日期
        cellIdx27: null, // 联系人
        cellIdx28: null, // 联系电话
        cellIdx29: null, // 
        cellIdx30: null, // 日期
        cellIdx34: [
          {
            sindex: 1,
            fileName: ''
          },
          {
            sindex: 2,
            fileName: ''
          },
          {
            sindex: 3,
            fileName: ''
          },
        ], // 分期内容
        DangerTable: null,
        associationPaperId: null,
        associationPaperOrder: []
      },
      options: {
        cellIdx14: [
          {
            value: '男',
            name: '男'
          },
          {
            value: '女',
            name: '女'
          },
        ],
      },
      associationPaper: ['53'],
    };
  },
  methods: {
    async initLetData (selectedPaper) {
      let corpBase = await this.getDatabase('baseInfo');
      let corp = corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      let caseId = this.corpData.caseId
      // 1.文书编号：送达收执文书编号
      let paperNumber = await getDocNumber('9', caseId)
      // 2.申请人：机构名称
      let cellIdx5String = this.$store.state.curCase.groupName
      // 3.被申请人：企业煤矿名称
      let cellIdx11String = corp.corpName
      // 5.文书号2：催告书编号
      let let53DataPaperContent = JSON.parse(
        selectedPaper.let53Data.paperContent
      );
      // 4.对被申请人：企业名称+'涉嫌'+隐患描述+'案'
      let newDangerTable = this.corpData.caseType === "0" ? this.handleSelectedDangerList(let53DataPaperContent.DangerTable) : null
      let cellIdx9String = this.corpData.caseType === '0' ? setDangerTable(
          newDangerTable,
          {}, 
          {
            page: "18",
            key: "cellIdx9",
            spellString: {
              corpName: corp.corpName,
              groupName: this.$store.state.curCase.groupName,
            },
          }
        ):'';
      let let53Date = selectedPaper.let53Data.createTime.split(' ')[0].split('-');
      // 6.行政处罚决定书编号
      // 获取关联的行政处罚决定书
      let paper8PaperContent = {}
      let paper8num1 = '', paper8num2 = '', paper8num3 = '', paper8num4 = ''
      let paper8date = ['', '', '']
      if (let53DataPaperContent.associationPaperId) {
        let wkPaper = await this.getPaperDatabase(this.corpData.caseId)
        let paper8 = await wkPaper.find(item => item.paperId === let53DataPaperContent.associationPaperId.paper8Id && item.delFlag !== '1')
        paper8PaperContent = JSON.parse(paper8.paperContent)
        paper8num1 = paper8PaperContent.cellIdx0
        paper8num2 = paper8PaperContent.cellIdx1
        paper8num3 = paper8PaperContent.cellIdx2
        paper8num4 = paper8PaperContent.cellIdx3
        paper8date = paper8.createTime.split(' ')[0].split('-')
      }
      // 从sysOfficeInfo中获取：
      let orgSysOfficeInfo = await getOrgData(this.$store.state.curCase.groupId)
      // 6.强制执行下列项目：‘划转罚款至’accountName+accountBank‘账户名称：’+billName+‘待结算财政款项账号：’+account
      let cellIdx25String = `划转罚款至${orgSysOfficeInfo.accountName}${orgSysOfficeInfo.accountBank}。账户名称：${orgSysOfficeInfo.billName}。待结算财政款项账号：${orgSysOfficeInfo.account}`
      // 7.人民法院：courtPrefix 联系人：master 联系电话：phone
      // 8.申请人的法定代表人legalPerson和职务post
      let DangerTable = null
      if (this.corpData.caseType === '0') {
        DangerTable = newDangerTable ? 
          setNewDanger(selectedPaper.let53Data, newDangerTable, this.paperId)
          : {}
      }
      let associationPaperId = Object.assign({}, this.setAssociationPaperId(let53DataPaperContent.associationPaperId), {
        paper53Id: selectedPaper.let53Data.paperId,
      }) 
      let associationPaperOrder = this.setAssociationPaperOrder(let53DataPaperContent.associationPaperOrder)
      associationPaperOrder.push('53')
      this.letData = Object.assign({}, this.letData, {
        cellIdx0: paperNumber.num0, // 文书号
        cellIdx1: paperNumber.num1, // 文书号
        cellIdx2: paperNumber.num3, // 文书号
        cellIdx3: paperNumber.num4, // 文书号
        cellIdx5: orgSysOfficeInfo.courtPrefix, // 人民法院
        cellIdx6: paper8date[0], // 年
        cellIdx7: paper8date[1], // 月
        cellIdx8: paper8date[2], // 日
        cellIdx9: cellIdx9String, // 对被申请执行人
        cellIdx10: paper8PaperContent ? paper8PaperContent.cellIdx10 : '', // 行政处罚决定
        cellIdx11: paper8num1, // 行政处罚决定 文书号
        cellIdx12: paper8num2, // 行政处罚决定 文书号
        cellIdx13: paper8num3, // 行政处罚决定 文书号
        cellIdx14: paper8num4, // 行政处罚决定 文书号
        cellIdx15: let53Date[0], // 年
        cellIdx16: let53Date[1], // 月
        cellIdx17: let53Date[2], // 日
        cellIdx18: let53DataPaperContent.cellIdx0, // 催告书 文书号
        cellIdx19: let53DataPaperContent.cellIdx1, // 催告书 文书号
        cellIdx20: let53DataPaperContent.cellIdx2, // 催告书 文书号
        cellIdx21: let53DataPaperContent.cellIdx3, // 催告书 文书号
        cellIdx29: this.$store.state.curCase.groupName, //
        cellIdx30: this.todayDate, // 日期
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
    editFileName(key, title, type, index) {
      // 编辑分期内容
      // 判断是否可编辑
      if (this.$refs.letMain.canEdit) {
        // 文书各个字段点击打开左侧弹出编辑窗口
        this.options.cellIdx34 = {
          saveDataKey: 'cellIdx34',
          saveDataIndex: index
        }
        this.$refs.letMain.commandFill(
          key,
          key,
          title,
          type,
          this.letData.cellIdx34[index][key],
          this.options.cellIdx34
        );
      }
    },
    deletFileName (index, item) {
      // 删除分期
      let msg = `是否确定删除材料${item.sindex}.${item.fileName}？`
      this.$confirm(msg, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          dangerouslyUseHTMLString: true,
          type: 'warning'
        }).then(() => {
          this.letData.cellIdx34.splice(index, 1)
          this.orderList()
        }).catch(() => {})
    },
    orderList () {
      for (let i = 0; i < this.letData.cellIdx34.length; i++) {
        let itemData = Object.assign({}, this.letData.cellIdx34[i], {
          sindex: i + 1
        })
        this.$set(this.letData.cellIdx34, i, itemData)
      }
    },
    addFileName () {
      // 添加
      this.letData.cellIdx34.push({
        sindex: this.letData.cellIdx34.length + 1, // 序号
        fileName: '', // 材料
      },)
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/let";
</style>