<!-- 现场检查 一般检查 询问通知书 57 -->
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
            <div class="textAlignCenter formHeader0">
              煤矿安全监管行政执法文书
              <br />
            </div>
            <div class="textAlignCenter formHeader1">询问通知书</div>
            <div class="docTextLine paper-number-div">
              <div>
                <span
                  @click="commandFill('cellIdx0', '文书号', 'TextItem')"
                >{{ letData.cellIdx0 ? letData.cellIdx0 : '（编辑）' }}</span>
                <label>（</label>
                <span
                  @click="commandFill('cellIdx1', '文书号', 'TextItem')"
                >{{ letData.cellIdx1 ? letData.cellIdx1 : '（编辑）' }}</span>
                <label>）煤安询〔</label>
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
            <table class="docBody" style="margin-top: 30px;">
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_4"
                  align="center"
                  style="width:60%"
                  data-title=""
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx4', '', 'TextItem')"
                >{{letData.cellIdx4}}</td>
                <td>：</td>
              </tr>
            </table>
            <div class="docTextarea">
              <label style="width:5%"></label>
              因
              <span
                @click="commandFill('cellIdx5', '', 'TextItem')"
              >{{ letData.cellIdx5 ? letData.cellIdx5 : '（点击编辑）'}}</span>
              ，请
              <span
                class="no-underline"
                @click="commandFill('cellIdx6', '单位/个人', 'SelectItem')"
              >{{ letData.cellIdx6 }}</span>
              于
              <span
                @click="commandFill('cellIdx7', '年', 'TextItem')"
              >{{ letData.cellIdx7 ? letData.cellIdx7 : '（XX）'}}</span>
              年
              <span
                @click="commandFill('cellIdx8', '月', 'TextItem')"
              >{{ letData.cellIdx8 ? letData.cellIdx8 : '（XX）' }}</span>
              月
              <span
                @click="commandFill('cellIdx9', '日', 'TextItem')"
              >{{ letData.cellIdx9 ? letData.cellIdx9 : '（XX）'}}</span>
              日到
              <span
                @click="commandFill('cellIdx10', '', 'TextItem')"
              >{{ letData.cellIdx10 ? letData.cellIdx10 : '（点击编辑）'}}</span>
              接受询问调查，来时请携带下列证件材料（见打√处）：
            </div>
            <table class="docBody">
              <tr>
                <td style="width:5%"></td>
                <td
                  style="width:3%;"
                  class="cellInput"
                  id="cell_idx_11"
                  @click="commandFill('cellIdx11', '身份证', 'SelectItem')"
                >{{letData.cellIdx11}}</td>
                <td>身份证</td>
              </tr>
              <tr>
                <td style="width:5%"></td>
                <td
                  id="cell_idx_12"
                  style="width:3%;"
                  class="cellInput"
                  @click="commandFill('cellIdx12', '营业执照', 'SelectItem')"
                >{{letData.cellIdx12}}</td>
                <td>营业执照</td>
              </tr>
              <tr>
                <td style="width:5%"></td>
                <td
                  id="cell_idx_13"
                  style="width:3%;"
                  class="cellInput"
                  @click="commandFill('cellIdx13', '法定代表人身份证明或者委托书', 'SelectItem')"
                >{{letData.cellIdx13}}</td>
                <td>法定代表人身份证明或者委托书</td>
              </tr>
              <tr>
                <td style="width:5%"></td>
                <td
                  class="cellInput"
                  id="cell_idx_14"
                  style="width:3%;"
                  @click="commandFill('cellIdx14', '其他', 'SelectItem')"
                >{{letData.cellIdx14}}</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_15"
                  style="width:92%;"
                  @click="commandFill('cellIdx15', '', 'TextItem')"
                >{{letData.cellIdx15 ? letData.cellIdx15 : '其他'}}</td>
              </tr>
              <tr>
                <td style="width:5%"></td>
                <td colspan="2">如无法按时前来，请及时联系。</td>
              </tr>
            </table>
            <div class="docTextarea">
              <span class="no-line">执法机关地址：</span>
              <span
                @click="commandFill('cellIdx16', '执法机关地址', 'TextItem')"
                >{{
                  letData.cellIdx16 ? letData.cellIdx16 : "（点击编辑）"
                }}</span
              >
              <div class="line"></div>
            </div>
            <div class="docTextLine">
              <div style="flex: 1; display: flex;">
                <label>联系人：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx17', '联系人', 'TextItem')"
                >{{ letData.cellIdx17 ? letData.cellIdx17 : '（编辑）' }}</div>
              </div>
              <div style="flex: 1; display: flex;">
                <label>联系电话：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx18', '联系电话', 'TextItem')"
                >{{ letData.cellIdx18 ? letData.cellIdx18 : '（编辑）' }}</div>
              </div>
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
          </div>
          <div class="docTextarea" style="border-top: 2px solid #000;">
            备注：本文书一式两份，一份交被询问人，一份存档。
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
export default {
  name: "Let105",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {},
      options: {
        cellIdx6: [
          {
            value: '你',
            name: '你'
          },
          {
            value: '单位',
            name: '单位'
          },
        ],
        cellIdx11: toggleDictionary,
        cellIdx12: toggleDictionary,
        cellIdx13: toggleDictionary,
        cellIdx14: toggleDictionary,
      },
      associationPaper: []
    };
  },
  methods: {
    async initLetData (selectedPaper) {
      let db = new GoDB(this.$store.state.DBName);
      let corpBase = db.table("corpBase");
      let corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      let paperNumber = await getDocNumber(db, this.docData.docTypeNo, this.corpData.caseId, this.$store.state.user)
      // sysOfficeInfo实体中depAddress字段+ deparFullname字段
      // 地址：depAddress、邮政编码：depPost、联系人：master、联系电话：phone
      let orgInfo = db.table("orgInfo");
      let orgData = await orgInfo.find(item => item.no === this.$store.state.user.userGroupId)
      let orgSysOfficeInfo = orgData && orgData.sysOfficeInfo ? JSON.parse(orgData.sysOfficeInfo) : {depAddress: '', master: '', phone: ''}
      await db.close();
      this.letData = {
        cellIdx0: paperNumber.num0, // 文书号
        cellIdx0TypeTextItem: paperNumber.num0, // 文书号
        cellIdx1: paperNumber.num1, // 文书号
        cellIdx1TypeTextItem: paperNumber.num1, // 文书号
        cellIdx2: paperNumber.num3, // 文书号
        cellIdx2TypeTextItem: paperNumber.num3, // 文书号
        cellIdx3: paperNumber.num4, // 文书号
        cellIdx3TypeTextItem: paperNumber.num4, // 文书号
        cellIdx4: corp.corpName, // 煤矿名称
        cellIdx4TypeTextItem: corp.corpName, // 煤矿名称
        cellIdx5: null, // 因XXX,
        cellIdx6: '你', // 请你XX于
        cellIdx6TypeSelectItem: '你', // 请你XX于
        cellIdx7: null, // 年
        cellIdx8: null, // 月
        cellIdx9: null, // 日
        cellIdx10: null, // 到XXX接受询问调查
        cellIdx11: '□', // 身份证
        cellIdx12: '□', // 营业执照
        cellIdx13: '□', // 法定代表人身份证明或者委托书
        cellIdx14: '□', // 其他
        cellIdx15: null, // 其他内容
        cellIdx16: orgSysOfficeInfo.depAddress, // 执法机关地址
        cellIdx16TypeTextItem: orgSysOfficeInfo.depAddress, // 执法机关地址
        cellIdx17: orgSysOfficeInfo.master, // 联系人
        cellIdx17TypeTextItem: orgSysOfficeInfo.master, // 联系人
        cellIdx18: orgSysOfficeInfo.phone, // 联系电话
        cellIdx18TypeTextItem: orgSysOfficeInfo.phone, // 联系电话
        cellIdx19: this.$store.state.curCase.groupNamee, //
        cellIdx19TypeTextItem: this.$store.state.curCase.groupName, //
        cellIdx20: this.todayDate, // 日期
        cellIdx20TypeDateItem: this.todayDate, // 日期
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