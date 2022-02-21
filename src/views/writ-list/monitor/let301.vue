<!-- 行政强制 行政强制执行 强制执行申请书 18 -->
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
            <div class="textAlignCenter formHeader4">强 制 执 行 申 请 书</div>
            <div class="formHeader5 paper-number-div">
              <div style="display: flex; width: 100%;">
                <div>
                  <span @click="commandFill('cellIdx0', '文书号', 'TextItem')">{{
                    letData.cellIdx0 ? letData.cellIdx0 : "（编辑）"
                  }}</span>
                  <label> 煤安监</label>
                  <span @click="commandFill('cellIdx1', '文书号', 'TextItem')">{{
                    letData.cellIdx1 ? letData.cellIdx1 : "（编辑）"
                  }}</span>
                  <label>执〔</label>
                  <span @click="commandFill('cellIdx2', '文书号', 'TextItem')">{{
                    letData.cellIdx2 ? letData.cellIdx2 : "（编辑）"
                  }}</span>
                  <label>〕</label>
                  <span @click="commandFill('cellIdx3', '文书号', 'TextItem')">{{
                    letData.cellIdx3 ? letData.cellIdx3 : "（编辑）"
                  }}</span>
                  <label>号</label>
                </div>
                <div style="flex: 1; text-align: right;">
                  <label>签发人：</label>
                  <span @click="commandFill('cellIdx4', '签发人', 'TextItem')">{{
                    letData.cellIdx4 ? letData.cellIdx4 : "（编辑）"
                  }}</span>
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
              <label style="width: 5%"></label>
              对被申请人
              <span
                @click="commandFill('cellIdx16', '被申请人', 'TextareaItem')"
                >{{
                  letData.cellIdx16 ? letData.cellIdx16 : "（点击编辑）"
                }}</span
              >
              ，我
              <span
                class="no-underline"
                @click="commandFill('cellIdx17', '局', 'TextItem')"
                >{{ letData.cellIdx17 ? letData.cellIdx17 : "" }}</span
              >
              依法作出行政处罚决定（
              <span
                class="no-underline"
                @click="commandFill('cellIdx6', '行政处罚决定书文书号', 'TextItem')"
              >{{ letData.cellIdx6 ? letData.cellIdx6 : '（点击编辑）'}}</span>
              煤安监
              <span
                class="no-underline"
                @click="commandFill('cellIdx7', '行政处罚决定书文书号', 'TextItem')"
              >{{ letData.cellIdx7 ? letData.cellIdx7 : '（点击编辑）'}}</span>
              罚〔
              <span
                class="no-underline"
                @click="commandFill('cellIdx8', '行政处罚决定文书号', 'TextItem')"
              >{{ letData.cellIdx8 ? letData.cellIdx8 : '（点击编辑）'}}</span>
              〕
              <span
                class="no-underline"
                @click="commandFill('cellIdx9', '行政处罚决定文书号', 'TextItem')"
              >{{ letData.cellIdx9 ? letData.cellIdx9 : '（点击编辑）'}}</span>
              号），并于
              <span @click="commandFill('cellIdx18', '年', 'TextItem')">{{
                letData.cellIdx18 ? letData.cellIdx18 : "（XX）"
              }}</span>
              年
              <span @click="commandFill('cellIdx19', '月', 'TextItem')">{{
                letData.cellIdx19 ? letData.cellIdx19 : "（XX）"
              }}</span>
              月
              <span @click="commandFill('cellIdx20', '日', 'TextItem')">{{
                letData.cellIdx20 ? letData.cellIdx20 : "（XX）"
              }}</span>
              日送达了催告书（
              <span
                class="no-underline"
                @click="commandFill('cellIdx21', '催告书文书号', 'TextItem')"
                >{{
                  letData.cellIdx21 ? letData.cellIdx21 : "（点击编辑）"
                }}</span
              >
              煤安监
              <span
                class="no-underline"
                @click="commandFill('cellIdx22', '催告书文书号', 'TextItem')"
                >{{
                  letData.cellIdx22 ? letData.cellIdx22 : "（点击编辑）"
                }}</span
              >
              催告〔
              <span
                class="no-underline"
                @click="commandFill('cellIdx23', '催告书文书号', 'TextItem')"
                >{{
                  letData.cellIdx23 ? letData.cellIdx23 : "（点击编辑）"
                }}</span
              >
              〕
              <span
                class="no-underline"
                @click="commandFill('cellIdx24', '催告书文书号', 'TextItem')"
                >{{
                  letData.cellIdx24 ? letData.cellIdx24 : "（点击编辑）"
                }}</span
              >
              号）。由于被申请执行人在法定期限内未履行行政处罚决定，根据《中华人民共和国行政处罚法》第<span class="text-decoration">七十二</span>条第<span class="text-decoration">一</span>款第<span class="text-decoration">四</span>项、《中华人民共和国行政强制法》第<span class="text-decoration">五十三</span>条、第<span class="text-decoration">五十四</span>条规定，特申请贵院强制执行。
            </div>
            <div class="docTextarea">
              <label style="width: 2em;"></label>
              此致
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
            <div class="docTextLine">
              <div style="flex: 1; display: flex">
                <label>收件人（签名）：</label>
                <div
                  class="line-div"
                  @click="
                    commandFill('cellIdx27', '收件人（签名）', 'TextItem')
                  "
                >
                  {{ letData.cellIdx27 ? letData.cellIdx27 : "（点击编辑）" }}
                </div>
              </div>
              <div style="flex: 1; display: flex">
                <label>日&nbsp;&nbsp;&nbsp;&nbsp;期：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx28', '日期', 'DateItem')"
                >
                  {{ letData.cellIdx28 ? letData.cellIdx28 : "（点击编辑）" }}
                </div>
              </div>
            </div>
            <div class="docTextLine">
              <div style="flex: 2; display: flex">
                <label>我</label>
                <span @click="commandFill('cellIdx29', '局', 'TextItem')">{{
                  letData.cellIdx29 ? letData.cellIdx29 : ""
                }}</span>
                <label>联系人：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx30', '联系人', 'TextItem')"
                >
                  {{ letData.cellIdx30 ? letData.cellIdx30 : "（点击编辑）" }}
                </div>
              </div>
              <div style="flex: 2; display: flex">
                <label>联系电话：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx31', '联系电话', 'TextItem')"
                >
                  {{ letData.cellIdx31 ? letData.cellIdx31 : "（点击编辑）" }}
                </div>
              </div>
            </div>
            <table height="60"></table>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_32"
                  align="right"
                  style="width: 95%"
                  @click="commandFill('cellIdx32', '', 'TextItem')"
                >
                  {{ letData.cellIdx32 ? letData.cellIdx32 : "（点击编辑）" }}
                </td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_33"
                  align="right"
                  style="width: 95%"
                  data-title
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx33', '日期', 'DateItem')"
                >
                  {{ letData.cellIdx33 ? letData.cellIdx33 : "（点击编辑）" }}
                </td>
              </tr>
            </table>
            <div
              class="docTextarea"
              style="
                border-top: 2px solid #000;
                margin-top: 30px;
                line-height: normal;
              "
            >
              备注：本文书一式两份，一份送法院，一份存档。
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
import GoDB from "@/utils/godb.min.js";
import { getDocNumber, setNewDanger, getOrgData } from "@/utils/setInitPaperData";
import associationSelectPaper from "@/components/association-select-paper";
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
        cellIdx16: null, // 对被申请人
        cellIdx17: null, // 局
        cellIdx6: null, // 行政处罚决定书文书号
        cellIdx7: null, // 行政处罚决定书文书号
        cellIdx8: null, // 行政处罚决定书文书号
        cellIdx9: null, // 行政处罚决定书文书号
        // cellIdx10: null, // 暂不用
        // cellIdx11: null, // 暂不用
        // cellIdx12: null, // 暂不用
        // cellIdx13: null, // 暂不用
        // cellIdx14: null, // 暂不用
        // cellIdx15: null, // 暂不用
        cellIdx18: null, // 年
        cellIdx19: null, // 月
        cellIdx20: null, // 日
        cellIdx21: null, // 催告书文书号
        cellIdx22: null, // 催告书文书号
        cellIdx23: null, // 催告书文书号
        cellIdx24: null, // 催告书文书号
        cellIdx25: null, // 暂不用
        cellIdx26: null, // 暂不用
        cellIdx27: null, // 收件人（签名）
        cellIdx28: null, // 日期
        cellIdx29: null, // 局
        cellIdx30: null, // 联系人
        cellIdx31: null, // 联系电话
        cellIdx32: null, //
        cellIdx33: null, // 日期
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
      // associationPaper: ['39'],
      associationPaper: ['54'],
    };
  },
  methods: {
    async initLetData(selectedPaper) {
      let db = new GoDB(this.$store.state.DBName);
      let corpBase = db.table("corpBase");
      let corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      // 创建初始版本 */
      // 1.文书编号：送达收执文书编号
      let paperNumber = await getDocNumber(
        db,
        "9",
        this.corpData.caseId
      );
      // 2.申请人：机构名称
      let cellIdx5String = this.$store.state.curCase.provinceGroupName;
      // 3.被申请人：企业煤矿名称
      let cellIdx11String = corp.corpName;
      // 5.文书号2：催告书编号
      let let54DataPaperContent = JSON.parse(
        selectedPaper.let54Data.paperContent
      );
      // 4.对被申请人：企业名称+'涉嫌'+隐患描述+'案'
      let cellIdx16String = this.corpData.caseType === '0' ? setDangerTable(
          let54DataPaperContent.DangerTable,
          {}, 
          {
            page: "18",
            key: "cellIdx16",
            spellString: {
              corpName: corp.corpName,
              groupName: this.$store.state.curCase.provinceGroupName,
            },
          }
        ):'';
      let let54Date = let54DataPaperContent.cellIdx28
        ? let54DataPaperContent.cellIdx28
            .replace("年", "-")
            .replace("月", "-")
            .replace("日", "-")
            .split("-")
        : ["", "", ""];
      // 6.行政处罚决定书编号
      // 获取关联的行政处罚决定书
      let paper8num1 = '', paper8num2 = '', paper8num3 = '', paper8num4 = ''
      if (let54DataPaperContent.associationPaperId) {
        let wkPaper = db.table('wkPaper')
        let paper8 = await wkPaper.find(item => item.paperId === let54DataPaperContent.associationPaperId.paper8Id && item.delFlag !== '1')
        let paper8PaperContent = JSON.parse(paper8.paperContent)
        paper8num1 = paper8PaperContent.cellIdx0
        paper8num2 = paper8PaperContent.cellIdx1
        paper8num3 = paper8PaperContent.cellIdx2
        paper8num4 = paper8PaperContent.cellIdx3
      }
      // 从sysOfficeInfo中获取：
        let orgSysOfficeInfo = await getOrgData(db, this.$store.state.curCase.groupId)
      // 6.强制执行下列项目：‘划转罚款至’accountName+accountBank‘账户名称：’+billName+‘待结算财政款项账号：’+account
      let cellIdx25String = `划转罚款至${orgSysOfficeInfo.accountName}${orgSysOfficeInfo.accountBank}。账户名称：${orgSysOfficeInfo.billName}。待结算财政款项账号：${orgSysOfficeInfo.account}`;
      // 7.人民法院：courtPrefix 联系人：master 联系电话：phone
      // 8.申请人的法定代表人legalPerson和职务post
      let DangerTable = null
      if (this.corpData.caseType === '0') {
        DangerTable = let54DataPaperContent.DangerTable ? 
          setNewDanger(selectedPaper.let54Data, let54DataPaperContent.DangerTable)
          : {}
      }
      await db.close()
      let associationPaperId = Object.assign({}, this.setAssociationPaperId(let54DataPaperContent.associationPaperId), {
        paper54Id: selectedPaper.let54Data.paperId,
      }) 
      let associationPaperOrder = this.setAssociationPaperOrder(let54DataPaperContent.associationPaperOrder)
      associationPaperOrder.push('54')
      this.letData = Object.assign({}, this.letData, {
        cellIdx0: paperNumber.num0, // 文书号
        cellIdx1: paperNumber.num1, // 文书号
        cellIdx2: paperNumber.num3, // 文书号
        cellIdx3: paperNumber.num4, // 文书号
        cellIdx5: orgSysOfficeInfo.courtPrefix, // 法院
        cellIdx16: cellIdx16String,
        cellIdx17: '局', // 局
        cellIdx6: paper8num1,
        cellIdx7: paper8num2,
        cellIdx8: paper8num3,
        cellIdx9: paper8num4,
        cellIdx18: let54Date[0], // 年
        cellIdx19: let54Date[1], // 月
        cellIdx20: let54Date[2], // 日
        cellIdx21: let54DataPaperContent.cellIdx0, // 文书号
        cellIdx22: let54DataPaperContent.cellIdx1, // 文书号
        cellIdx23: let54DataPaperContent.cellIdx2, // 文书号
        cellIdx24: let54DataPaperContent.cellIdx3, // 文书号
        cellIdx26: orgSysOfficeInfo.courtPrefix, // 人民法院
        cellIdx29: '局', // 局
        cellIdx30: orgSysOfficeInfo.master, // 联系人
        cellIdx31: orgSysOfficeInfo.phone, // 联系电话
        cellIdx32: this.$store.state.curCase.provinceGroupName, //
        cellIdx33: this.todayDate, // 日期
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