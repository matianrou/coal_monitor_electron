<!-- 行政强制 行政强制执行 行政强制执行事先催告书 53 -->
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
            <div class="textAlignCenter formHeader0">煤矿安全监管行政执法文书</div>
            <div class="textAlignLeft formHeader1">
               <div class="textAlignCenter ">行政强制执行事先催告书</div>
            </div>
            <div class="docTextLine paper-number-div">
              <div>
                <span
                  @click="commandFill('cellIdx0', '文书号', 'TextItem')"
                >{{ letData.cellIdx0 ? letData.cellIdx0 : '（编辑）' }}</span>
                <label>（</label>
                <span
                  @click="commandFill('cellIdx1', '文书号', 'TextItem')"
                >{{ letData.cellIdx1 ? letData.cellIdx1 : '（编辑）' }}</span>
                <label>）煤安催告〔</label>
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
                  style="width:50%"
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
              本机关对
              <span
                class="no-underline"
                @click="commandFill('cellIdx6', '单位/个人', 'SelectItem')"
              >{{ letData.cellIdx6 ? letData.cellIdx6 : '（点击编辑）'}}</span>
              作出的
              <span
                @click="commandFill('cellIdx7', '', 'TextareaItem')"
              >{{ letData.cellIdx7 ? letData.cellIdx7 : '（点击编辑）'}}</span>
              尚未履行，且
              <span
                class="no-underline"
                @click="commandFill('cellIdx8', '单位/个人', 'SelectItem')"
              >{{ letData.cellIdx8 ? letData.cellIdx8 : '（点击编辑）'}}</span>
              在法定期限内未申请行政复议或者提起行政诉讼。依据《中华人民共和国行政强制法》第五十三条、第五十四条的规定，请
              <span
                class="no-underline"
                @click="commandFill('cellIdx9', '单位/个人', 'SelectItem')"
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
              如
              <span
                class="no-underline"
                @click="commandFill('cellIdx20', '单位/个人', 'SelectItem')"
              >{{ letData.cellIdx20 ? letData.cellIdx20 : '（点击编辑）'}}</span>
              不履行上述义务，本机关将依据《中华人民共和国行政强制法》第五十三条、第五十四条的规定，申请人民法院强制执行。
            </div>
            <div class="docTextLine" style="margin-top: 30px;">
              <label style="width: 2em;"></label>
              <div style="flex: 1; display: flex;">
                <label>受送达人（签名）：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx21', '受送达人（签名）', 'TextItem')"
                >{{ letData.cellIdx21 ? letData.cellIdx21 : '（点击编辑）' }}</div>
              </div>
              <div style="flex: 1; display: flex;">
                <label>&nbsp;&nbsp;日&nbsp;&nbsp;&nbsp;&nbsp;期：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx22', '日期', 'DateItem')"
                >{{ letData.cellIdx22 ? letData.cellIdx22 : '（点击编辑）' }}</div>
              </div>
            </div>
            <div class="docTextLine">
              <label style="width: 2em;"></label>
              <div style="flex: 1; display: flex;">
                <label>执法机关地址：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx23', '执法机关地址', 'TextItem')"
                >{{ letData.cellIdx23 ? letData.cellIdx23 : '（点击编辑）' }}</div>
              </div>
              <div style="flex: 1; display: flex;">
                <label>&nbsp;&nbsp;邮政编码：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx24', '邮政编码', 'TextItem')"
                >{{ letData.cellIdx24 ? letData.cellIdx24 : '（点击编辑）' }}</div>
              </div>
            </div>
            <div class="docTextLine">
              <label style="width: 2em;"></label>
              <div style="flex: 1; display: flex;">
                <label>执法机关联系人：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx25', '执法机关联系人', 'TextItem')"
                >{{ letData.cellIdx25 ? letData.cellIdx25 : '（点击编辑）' }}</div>
              </div>
              <div style="flex: 1; display: flex;">
                <label>&nbsp;&nbsp;联系电话：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx26', '联系电话', 'TextItem')"
                >{{ letData.cellIdx26 ? letData.cellIdx26 : '（点击编辑）' }}</div>
              </div>
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
                @click="commandFill('cellIdx29', '单位/个人', 'SelectItem')"
              >{{ letData.cellIdx29 ? letData.cellIdx29 : '（点击编辑）'}}</span>
              ，一份存档。 
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
import { getDocNumber } from '@/utils/setInitPaperData'
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
const companyPerson = [
  {
    value: '单位',
    name: '单位',
  },
  {
    value: '你',
    name: '你',
  },
]
export default {
  name: "Let112",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {},
      options: {
        cellIdx6: companyPerson,
        cellIdx8: companyPerson,
        cellIdx9: companyPerson,
        cellIdx10: toggleDictionary,
        cellIdx18: toggleDictionary,
        cellIdx20: companyPerson,
        cellIdx29: [
          {
            value: '单位',
            name: '单位',
          },
          {
            value: '个人',
            name: '个人',
          },
        ],
      },
      associationPaper: ['8']
    };
  },
  methods: {
    async initLetData (selectedPaper) {
      const db = new GoDB(this.$store.state.DBName);
      const corpBase = db.table("corpBase");
      const corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      // 1.生成文书编号
      let { num0, num1, num3, num4 } = await getDocNumber(db, this.docData.docTypeNo, this.corpData.caseId, this.$store.state.user)
      // 2.sysOfficeInfo实体中 地址：depAddress、邮政编码：depPost、联系人：master、联系电话：phone
      const orgInfo = db.table("orgInfo");
      const orgData = await orgInfo.find(item => item.no === this.$store.state.user.userGroupId)
      let orgSysOfficeInfo = orgData && orgData.sysOfficeInfo ? JSON.parse(orgData.sysOfficeInfo) : {depAddress: '', depPost: '', master: '', phone: ''}
      let depAddress = orgSysOfficeInfo.depAddress
      let depPost = orgSysOfficeInfo.depPost
      let master = orgSysOfficeInfo.master
      let phone = orgSysOfficeInfo.phone
      // 3.带入处罚决定书的单位或个人
      let let8DataPapaerContent = JSON.parse(selectedPaper.let8Data.paperContent)
      let selectedType = let8DataPapaerContent.selectedType
      let selectedString = selectedType === '个人' ? '你' : '单位'
      await db.close();
      this.letData = {
        cellIdx0: num0, // 文书号
        cellIdx0TypeTextItem: num0, // 文书号
        cellIdx1: num1, // 文书号
        cellIdx1TypeTextItem: num1, // 文书号
        cellIdx2: num3, // 文书号
        cellIdx2TypeTextItem: num3, // 文书号
        cellIdx3: num4, // 文书号
        cellIdx3TypeTextItem: num4, // 文书号
        // cellIdx4: null, // 单位
        cellIdx5: corp.corpName ? corp.corpName : null, // corpname
        cellIdx5TypeTextItem: corp.corpName ? corp.corpName : null, //
        cellIdx6: selectedString, // 单位/个人
        cellIdx6TypeSelectItem: selectedString, // 单位/个人
        cellIdx7: null, // 作出XX尚未履行
        cellIdx8: selectedString, // 且你XX在法定期限内未申请行政复议或者提起行政诉讼
        cellIdx8TypeSelectItem: selectedString, // 且你XX在法定期限内未申请行政复议或者提起行政诉讼
        cellIdx9: selectedString, // 请你XX（单位）
        cellIdx9TypeSelectItem: selectedString, // 请你XX（单位）
        cellIdx10: '□', // 勾选项
        cellIdx11: null, // 年
        cellIdx12: null, // 月
        cellIdx13: null, // 日
        cellIdx14: null, // 罚款（大写）
        cellIdx15: null, // 加处罚款（大写）
        cellIdx16: null, // 合计
        cellIdx17: null, // 银行
        cellIdx18: '□', // 勾选项
        cellIdx19: null, // 立即履行以下行政决定XXX
        cellIdx20: selectedString, // 单位/个人
        cellIdx20TypeSelectItem: selectedString, // 单位/个人
        cellIdx21: null, // 受送达人（签名）
        cellIdx22: null, // 日期
        cellIdx23: depAddress, // 执法机关地址
        cellIdx23TypeTextItem: depAddress, // 执法机关地址
        cellIdx24: depPost, // 邮政编码
        cellIdx24TypeTextItem: depPost, // 邮政编码
        cellIdx25: master, // 执法机关联系人
        cellIdx25TypeTextItem: master, // 执法机关联系人
        cellIdx26: phone, // 联系电话
        cellIdx26TypeTextItem: phone, // 联系电话
        cellIdx27: null, //
        cellIdx28: null, //日期
        cellIdx29: selectedType, // 单位/个人
        cellIdx29TypeSelectItem: selectedType, // 单位/个人
        selectedType: selectedType, // 单位/个人
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