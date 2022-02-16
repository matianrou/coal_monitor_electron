<!-- 行政强制 行政强制执行 行政强制执行事先催告书 54 -->
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
            <div class="textAlignLeft formHeader4">
               <div class="textAlignCenter ">行政强制执行事先催告书</div>
            </div>
            <div class="formHeader5 paper-number-div">
              <div>
                <span
                  @click="commandFill('cellIdx0', '文书号', 'TextItem')"
                >{{ letData.cellIdx0 ? letData.cellIdx0 : '（编辑）' }}</span>
                <label>煤安监</label>
                <span
                  @click="commandFill('cellIdx1', '文书号', 'TextItem')"
                >{{ letData.cellIdx1 ? letData.cellIdx1 : '（编辑）' }}</span>
                <label>催告〔</label>
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
                  id="cell_idx_5"
                  style="min-width:50%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx5', '', 'TextItem')"
                >{{ letData.cellIdx5 }}</td>
                <td class="textAlignLeft">:</td>
              </tr>
            </table>
            <div class="docTextarea">
              <label style="width:5%"></label>
              我局对你
              <span
                class="no-underline"
              >{{ letData.cellIdx6 ? letData.cellIdx6 : '（点击编辑）'}}</span>
              作出的
              <span
                @click="commandFill('cellIdx7', '', 'TextareaItem')"
              >{{ letData.cellIdx7 ? letData.cellIdx7 : '（点击编辑）'}}</span>
              尚未履行，且你
              <span
                class="no-underline"
              >{{ letData.cellIdx8 ? letData.cellIdx8 : '（点击编辑）'}}</span>
              在法定期限内未申请行政复议或者提起行政诉讼。依据《中华人民共和国行政强制法》第<span class="text-decoration">五十三</span>条、第<span class="text-decoration">五十四</span>条的规定，请你
              <span
                class="no-underline"
              >{{ letData.cellIdx9 ? letData.cellIdx9 : '（点击编辑）'}}</span>
              ：
            </div>
            <div class="docTextarea">
              <label style="width:5%"></label>
              <span
                class="no-underline"
                @click="commandFill('cellIdx10', '', 'SelectItem')"
              >{{ letData.cellIdx10 ? letData.cellIdx10 : '□'}}</span>
              于
              <span
                @click="commandFill('cellIdx11', '年', 'TextItem')"
              >{{ letData.cellIdx11 ? letData.cellIdx11 : '（XX）'}}</span>
              年
              <span
                @click="commandFill('cellIdx12', '月', 'TextItem')"
              >{{ letData.cellIdx12 ? letData.cellIdx12 : '（XX）'}}</span>
              月
              <span
                @click="commandFill('cellIdx13', '日', 'TextItem')"
              >{{ letData.cellIdx13 ? letData.cellIdx13 : '（XX）'}}</span>
              日前将罚款
              <span
                @click="commandFill('cellIdx14', '罚款', 'TextItem')"
              >{{ letData.cellIdx14 ? letData.cellIdx14 : '（点击编辑）'}}</span>
              元（大写）、加处罚款
              <span
                @click="commandFill('cellIdx15', '罚款', 'TextItem')"
              >{{ letData.cellIdx15 ? letData.cellIdx15 : '（点击编辑）'}}</span>
              元（大写），（合计：
              <span
                @click="commandFill('cellIdx16', '合计', 'TextItem')"
              >{{ letData.cellIdx16 ? letData.cellIdx16 : '（点击编辑）'}}</span>
              元）缴纳至
              <span
                @click="commandFill('cellIdx17', '银行', 'TextItem')"
              >{{ letData.cellIdx17 ? letData.cellIdx17 : '（点击编辑）'}}</span>
              银行。
            </div>
            <div class="docTextarea">
              <label style="width:5%"></label>
              <span
                class="no-underline"
                @click="commandFill('cellIdx18', '', 'SelectItem')"
              >{{ letData.cellIdx18 ? letData.cellIdx18 : '□' }}</span>
              立即履行以下行政决定:
              <span
                @click="commandFill('cellIdx19', '行政决定', 'TextareaItem')"
              >{{ letData.cellIdx19 ? letData.cellIdx19 : '（点击编辑）'}}</span>
              。
            </div>
            <div class="docTextarea">
              <label style="width:5%"></label>
              如你
              <span
                class="no-underline"
              >{{ letData.cellIdx20 ? letData.cellIdx20 : '（点击编辑）'}}</span>
              不履行上述义务，本机关将依据《中华人民共和国行政强制法》第<span class="text-decoration">五十三</span>条、第<span class="text-decoration">五十四</span>条的规定，申请人民法院强制执行。
            </div>
            <div class="docTextarea" style="margin-top: 30px;">
              <div style="display:inline-block;min-width:55%">
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;受送达<span class="no-underline">{{letData.cellIdx29}}</span>（签名）：</span>
                <span @click="commandFill('cellIdx21', `受送达${letData.cellIdx29}（签名）`, 'TextItem')"
                  >{{ letData.cellIdx21 ? letData.cellIdx21 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;日&nbsp;&nbsp;&nbsp;&nbsp;期：</span>
                <span @click="commandFill('cellIdx22', '日期', 'DateItem')">{{
                  letData.cellIdx22 ? letData.cellIdx22 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:55%">
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;我局地址：</span>
                <span @click="commandFill('cellIdx23', '执法机关地址：', 'TextItem')"
                  >{{ letData.cellIdx23 ? letData.cellIdx23 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;邮政编码：</span>
                <span @click="commandFill('cellIdx24', '邮政编码', 'TextItem')">{{
                  letData.cellIdx24 ? letData.cellIdx24 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:55%">
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;我局联系人：</span>
                <span @click="commandFill('cellIdx25', '执法机关联系人', 'TextItem')"
                  >{{ letData.cellIdx25 ? letData.cellIdx25 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;联系电话：</span>
                <span @click="commandFill('cellIdx26', '联系电话', 'TextItem')">{{
                  letData.cellIdx26 ? letData.cellIdx26 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <table class="docBody" style="margin-top: 30px;">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_27"
                  align="right"
                  style="width:95%"
                  @click="commandFill('cellIdx27', '', 'TextItem')"
                >{{letData.cellIdx27 ? letData.cellIdx27 : '（点击编辑）'}}</td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_28"
                  align="right"
                  style="width:95%"
                  data-title
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx28', '日期', 'DateItem')"
                >{{letData.cellIdx28 ? letData.cellIdx28 : '（点击编辑）'}}</td>
              </tr>
            </table>
            <div class="docTextarea" style="border-top: 2px solid #000;">
              备注：本文书一式两份，一份送被催告
              <span
                style="borderBottom:none"
              >{{ letData.cellIdx29 ? letData.cellIdx29 : '（点击编辑）'}}</span>
              ，一份存档。 
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
import { getDocNumber, setNewDanger, getOrgData } from '@/utils/setInitPaperData'
import associationSelectPaper from '@/components/association-select-paper'
import { transformNumToChinese } from '@/utils/index'
const toggleDictionary = [
  {
    value: '□',
    name: '□'
  },
  {
    value: '☑',
    name: '☑'
  },
]
export default {
  name: "Let309",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {
        cellIdx0: null, // 文书号
        cellIdx1: null, // 文书号
        cellIdx2: null, // 文书号
        cellIdx3: null, // 文书号
        cellIdx4: null, // 暂不用
        cellIdx5: null, // corpname
        cellIdx6: null, // 单位/个人
        cellIdx7: null, // 作出XX尚未履行
        cellIdx8: null, // 且你XX在法定期限内未申请行政复议或者提起行政诉讼
        cellIdx9: null, // 请你XX（单位）
        cellIdx10: null, // 勾选项
        cellIdx11: null, // 年
        cellIdx12: null, // 月
        cellIdx13: null, // 日
        cellIdx14: null, // 罚款（大写）
        cellIdx15: null, // 加处罚款（大写）
        cellIdx16: null, // 合计
        cellIdx17: null, // 银行
        cellIdx18: null, // 勾选项
        cellIdx19: null, // 立即履行以下行政决定XXX
        cellIdx20: null, // 单位/个人
        cellIdx21: null, // 受送达人（签名）
        cellIdx22: null, // 日期
        cellIdx23: null, // 执法机关地址
        cellIdx24: null, // 邮政编码
        cellIdx25: null, // 执法机关联系人
        cellIdx26: null, // 联系电话
        cellIdx27: null, //
        cellIdx28: null, //日期
        cellIdx29: null, // 单位/个人
        DangerTable: null,
        associationPaperId: {},
        associationPaperOrder: []
      },
      options: {
        cellIdx10: toggleDictionary,
        cellIdx18: toggleDictionary,
      },
      associationPaper: ['8']
    };
  },
  methods: {
    async initLetData (selectedPaper) {
      let db = new GoDB(this.$store.state.DBName);
      let corpBase = db.table("corpBase");
      let corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      // 1.生成文书编号
      let { num0, num1, num3, num4 } = await getDocNumber(db, this.docData.docTypeNo, this.corpData.caseId)
      // 2.sysOfficeInfo实体中 地址：depAddress、邮政编码：depPost、联系人：master、联系电话：phone
      let orgSysOfficeInfo = await getOrgData(db, this.$store.state.curCase.groupId)
      let accountName = orgSysOfficeInfo.accountName || ''
      let depAddress = orgSysOfficeInfo.depAddress || ''
      let depPost = orgSysOfficeInfo.depPost || ''
      let master = orgSysOfficeInfo.master || ''
      let phone = orgSysOfficeInfo.phone || ''
      // 3.带入处罚决定书的单位或个人
      let let8DataPaperContent = JSON.parse(selectedPaper.let8Data.paperContent)
      let selectedType = let8DataPaperContent.selectedType
      // 4.被处罚单位个人
      let cellIdx5String = let8DataPaperContent.cellIdx5 || ''
      // 5.获取行政处罚决定
      let cellIdx7String = let8DataPaperContent.cellIdx10 || ''
      // 6.当前时间
      let now = new Date();
      let year = now.getFullYear() + ''; //得到年份
      let month = now.getMonth() + 1 + '';//得到月份
      let date = now.getDate() + '';//得到日期
      let moneyChinese = ''
      if (selectedPaper.let8Data.p8Penalty) {
        moneyChinese = transformNumToChinese(selectedPaper.let8Data.p8Penalty)
      }
      let cellIdx14String = selectedPaper.let8Data.p8Penalty ? moneyChinese : ''
      let DangerTable = null;
      if (this.corpData.caseType === "0") {
        DangerTable = let8DataPaperContent.DangerTable
          ? setNewDanger(
              selectedPaper.let8Data,
              let8DataPaperContent.DangerTable
            )
          : {};
      }
      await db.close();
      let associationPaperId = Object.assign({}, this.setAssociationPaperId(let8DataPaperContent.associationPaperId), {
        paper8Id: selectedPaper.let8Data.paperId,
      }) 
      let associationPaperOrder = this.setAssociationPaperOrder(let8DataPaperContent.associationPaperOrder)
      associationPaperOrder.push('8')
      this.letData = Object.assign({}, this.letData, {
        cellIdx0: num0, // 文书号
        cellIdx1: num1, // 文书号
        cellIdx2: num3, // 文书号
        cellIdx3: num4, // 文书号
        cellIdx5: cellIdx5String, // 被处罚单位、个人
        cellIdx6: selectedType, // 单位/个人
        cellIdx7: cellIdx7String, // 行政处罚决定
        cellIdx8: selectedType, // 且你XX在法定期限内未申请行政复议或者提起行政诉讼
        cellIdx9: selectedType, // 请你XX（单位）
        cellIdx10: '□', // 勾选项
        cellIdx11: year, // 年
        cellIdx12: month, // 月
        cellIdx13: date, // 日
        cellIdx14: cellIdx14String, // 罚款大写
        cellIdx17: accountName, // 银行
        cellIdx18: '□', // 勾选项
        cellIdx20: selectedType, // 单位/个人
        cellIdx23: depAddress, // 执法机关地址
        cellIdx24: depPost, // 邮政编码
        cellIdx25: master, // 执法机关联系人
        cellIdx26: phone, // 联系电话
        cellIdx27: this.$store.state.curCase.provinceGroupName, //
        cellIdx28: this.todayDate, //日期
        cellIdx29: selectedType, // 单位/个人
        selectedType: selectedType, // 单位/个人
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