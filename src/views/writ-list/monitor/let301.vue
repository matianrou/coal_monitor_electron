<!-- 行政强制 行政强制执行 强制执行申请书 18 -->
<template>
  <div style="width: 100%; height: 100%">
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
            <div class="textAlignCenter formHeader2">
              国 家 矿 山 安 全 监 察
              <br />
            </div>
            <div class="textAlignCenter formHeader4">强 制 执 行 申 请 书</div>
            <div class="formHeader5 paper-number-div">
              <div>
                <span @click="commandFill('cellIdx0', '文书号', 'TextItem')">{{
                  letData.cellIdx0 ? letData.cellIdx0 : "（编辑）"
                }}</span>
                <label> 矿安监</label>
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
                <label>号&nbsp;签发人：</label>
                <span @click="commandFill('cellIdx4', '签发人', 'TextItem')">{{
                  letData.cellIdx4 ? letData.cellIdx4 : "（编辑）"
                }}</span>
              </div>
            </div>
            <div class="docTextarea">
              <span class="no-line">申请人：</span>
              <span @click="commandFill('cellIdx5', '申请人', 'TextItem')">{{
                letData.cellIdx5 ? letData.cellIdx5 : "（点击编辑）"
              }}</span>
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:50%">
                <span class="no-line">法定代表人：姓名</span>
                <span @click="commandFill('cellIdx6', '法定代表人：姓名', 'TextItem')"
                  >{{ letData.cellIdx6 ? letData.cellIdx6 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">职&nbsp;&nbsp;&nbsp;务</span>
                <span @click="commandFill('cellIdx7', '职务', 'TextItem')">{{
                  letData.cellIdx7 ? letData.cellIdx7 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:40%">
                <span class="no-line">委托代理人：姓名</span>
                <span @click="commandFill('cellIdx8', '委托代理人：姓名', 'TextItem')"
                  >{{ letData.cellIdx8 ? letData.cellIdx8 : "（编辑）" }}
                </span>
              </div>
                <span class="no-line">工作单位</span>
                <span @click="commandFill('cellIdx9', '工作单位', 'TextItem')">{{
                  letData.cellIdx9 ? letData.cellIdx9 : "（编辑）"
                }}</span>
                <span class="no-line">职务（职业）</span>
                <span @click="commandFill('cellIdx10', '职务（职业）', 'TextItem')">{{
                  letData.cellIdx10 ? letData.cellIdx10 : "（编辑）"
                }}</span>
                <div class="line"></div>
                <div class="line1"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line">被申请人：</span>
              <span @click="commandFill('cellIdx11', '被申请人', 'TextItem')">{{
                letData.cellIdx11 ? letData.cellIdx11 : "（点击编辑）"
              }}</span>
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:40%">
                <span class="no-line">法定代表人：姓名</span>
                <span @click="commandFill('cellIdx12', '法定代表人：姓名', 'TextItem')"
                  >{{ letData.cellIdx12 ? letData.cellIdx12 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">职务</span>
                <span @click="commandFill('cellIdx13', '职务', 'TextItem')">{{
                  letData.cellIdx13 ? letData.cellIdx13 : "（点击编辑）"
                }}</span>
                <span class="no-line">性别</span>
                <span @click="commandFill('cellIdx14', '性别', 'SelectItem')">{{
                  letData.cellIdx14 ? letData.cellIdx14 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
                <div class="line1"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line">住&nbsp;&nbsp;&nbsp;&nbsp;址:</span>
              <span @click="commandFill('cellIdx15', '住址', 'TextItem')">{{
                letData.cellIdx15 ? letData.cellIdx15 : "（点击编辑）"
              }}</span>
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <label style="width: 5%"></label>
              对被申请人
              <span
                @click="commandFill('cellIdx16', '对被申请人', 'TextareaItem')"
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
              依法作出行政处罚决定，并于
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
              日送达了行政决定履行催告书（
              <span
                class="no-underline"
                @click="commandFill('cellIdx21', '文书号', 'TextItem')"
                >{{
                  letData.cellIdx21 ? letData.cellIdx21 : "（点击编辑）"
                }}</span
              >
              矿安监
              <span
                class="no-underline"
                @click="commandFill('cellIdx22', '文书号', 'TextItem')"
                >{{
                  letData.cellIdx22 ? letData.cellIdx22 : "（点击编辑）"
                }}</span
              >
              催〔
              <span
                class="no-underline"
                @click="commandFill('cellIdx23', '文书号', 'TextItem')"
                >{{
                  letData.cellIdx23 ? letData.cellIdx23 : "（点击编辑）"
                }}</span
              >
              〕
              <span
                class="no-underline"
                @click="commandFill('cellIdx24', '文书号', 'TextItem')"
                >{{
                  letData.cellIdx24 ? letData.cellIdx24 : "（点击编辑）"
                }}</span
              >
              号）。由于其在法定期限内未履行，根据《中华人民共和国行政处罚法》第五十一条、《中华人民共和国行政强制法》第五十三条、第五十四条规定，申请贵院强制执行下列项目：
              <span @click="commandFill('cellIdx25', '', 'TextareaItem')">{{
                letData.cellIdx25 ? letData.cellIdx25 : "（点击编辑）"
              }}</span>
            </div>
            <div class="docTextarea">
              <label style="width: 5%"></label>
              此致
            </div>
            <div class="docTextLine paper-number-div">
              <div>
                <span
                  class="line"
                  @click="commandFill('cellIdx26', '人民法院', 'TextItem')"
                  >{{
                    letData.cellIdx26 ? letData.cellIdx26 : "（点击编辑）"
                  }}</span
                >
                <label>人民法院&nbsp;&nbsp;&nbsp;&nbsp;</label>
              </div>
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
              备注：本文书一式两份，一份送人民法院，一份存档。
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
import { getDocNumber, getDangerObject, setNewDanger } from "@/utils/setInitPaperData";
import associationSelectPaper from "@/components/association-select-paper";
export default {
  name: "Let301",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {},
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
      associationPaper: ['39'],
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
        this.corpData.caseId,
        this.$store.state.user
      );
      // 2.申请人：机构名称
      let cellIdx5String = this.$store.state.curCase.groupName;
      // 3.被申请人：企业煤矿名称
      let cellIdx11String = corp.corpName;
      // 5.文书号2：催告书编号
      let let39DataPaperContent = JSON.parse(
        selectedPaper.let39Data.paperContent
      );
      let dangerObject = this.corpData.caseType === '0' ? getDangerObject(
        let39DataPaperContent.DangerTable.selectedDangerList
      ) : null;
      // 4.对被申请人：企业名称+'涉嫌'+隐患描述+'案'
      let cellIdx16String = `${corp.corpName}涉嫌${ this.corpData.caseType === '0' ? dangerObject.dangerString : 'XXX'}案`;
      let let39Date = let39DataPaperContent.cellIdx29
        ? let39DataPaperContent.cellIdx29
            .replace("年", "-")
            .replace("月", "-")
            .replace("日", "-")
            .split("-")
        : ["", "", ""];
      // 从sysOfficeInfo中获取：
      let orgInfo = db.table("orgInfo");
      let orgData = await orgInfo.find(
        (item) => item.no === this.$store.state.user.userGroupId
      );
      let orgSysOfficeInfo =
        orgData && orgData.sysOfficeInfo
          ? JSON.parse(orgData.sysOfficeInfo)
          : {
              accountName: "",
              accountBank: "",
              billName: "",
              account: "",
              accountAddress: "",
              organName: "",
              courtPrefix: "",
            };
      // 6.强制执行下列项目：‘划转罚款至’accountName+accountBank‘账户名称：’+billName+‘待结算财政款项账号：’+account
      let cellIdx25String = `划转罚款至${orgSysOfficeInfo.accountName}${orgSysOfficeInfo.accountBank}。账户名称：${orgSysOfficeInfo.billName}。待结算财政款项账号：${orgSysOfficeInfo.account}`;
      // 7.人民法院：courtPrefix 联系人：master 联系电话：phone
      // 8.申请人的法定代表人legalPerson和职务post
      let DangerTable = null
      if (this.corpData.caseType === '0') {
        DangerTable = let39DataPaperContent.DangerTable ? 
          setNewDanger(selectedPaper.let39Data, let39DataPaperContent.DangerTable)
          : {}
      }
      await db.close()
      this.letData = {
        cellIdx0: paperNumber.num0, // 文书号
        cellIdx0TypeTextItem: paperNumber.num0, // 文书号
        cellIdx1: paperNumber.num1, // 文书号
        cellIdx1TypeTextItem: paperNumber.num1, // 文书号
        cellIdx2: paperNumber.num3, // 文书号
        cellIdx2TypeTextItem: paperNumber.num3, // 文书号
        cellIdx3: paperNumber.num4, // 文书号
        cellIdx3TypeTextItem: paperNumber.num4, // 文书号
        cellIdx4: null, // 签发人
        cellIdx5: cellIdx5String, // 申请人
        cellIdx5TypeTextItem: cellIdx5String, // 申请人
        cellIdx6: orgSysOfficeInfo.legalPerson, // 法定代表人：姓名
        cellIdx6TypeTextItem: orgSysOfficeInfo.legalPerson, // 法定代表人：姓名
        cellIdx7: orgSysOfficeInfo.post, // 职务
        cellIdx7TypeTextItem: orgSysOfficeInfo.post, // 职务
        cellIdx8: null, // 委托代理人：姓名
        cellIdx9: null, // 工作单位
        cellIdx10: null, // 职务（职业）
        cellIdx11: cellIdx11String, // 被申请人
        cellIdx11TypeTextItem: cellIdx11String, // 被申请人
        cellIdx12: null, // 法定代表人：姓名
        cellIdx13: null, // 职务
        cellIdx14: null, // 性别
        cellIdx15: null, // 住址
        cellIdx16: cellIdx16String, // 对被申请人
        cellIdx17: '局', // 局
        cellIdx18: let39Date[0], // 年
        cellIdx19: let39Date[1], // 月
        cellIdx20: let39Date[2], // 日
        cellIdx21: let39DataPaperContent.cellIdx0, // 文书号
        cellIdx22: let39DataPaperContent.cellIdx1, // 文书号
        cellIdx23: let39DataPaperContent.cellIdx2, // 文书号
        cellIdx24: let39DataPaperContent.cellIdx3, // 文书号
        cellIdx25: cellIdx25String, //
        cellIdx25TypeTextareaItem: cellIdx25String, //
        cellIdx26: orgSysOfficeInfo.courtPrefix, // 人民法院
        cellIdx26TypeTextItem: orgSysOfficeInfo.courtPrefix, // 人民法院
        cellIdx27: null, // 收件人（签名）
        cellIdx28: null, // 日期
        cellIdx29: '局', // 局
        cellIdx30: orgSysOfficeInfo.master, // 联系人
        cellIdx30TypeTextItem: orgSysOfficeInfo.master, // 联系人
        cellIdx31: orgSysOfficeInfo.phone, // 联系电话
        cellIdx31TypeTextItem: orgSysOfficeInfo.phone, // 联系电话
        cellIdx32: this.$store.state.curCase.groupName, //
        cellIdx33: this.todayDate, // 日期
        DangerTable,
        associationPaperId: this.corpData.caseType === '0' ?{ // 关联的paperId
          paper22Id: let39DataPaperContent.associationPaperId.paper22Id,
          paper1Id: let39DataPaperContent.associationPaperId.paper1Id,
          paper6Id: let39DataPaperContent.associationPaperId.paper6Id,
          paper8Id: let39DataPaperContent.associationPaperId.paper8Id,
          paper39Id: selectedPaper.let39Data.paperId
        } : {
          paper6Id: let39DataPaperContent.associationPaperId.paper6Id,
          paper8Id: let39DataPaperContent.associationPaperId.paper8Id,
          paper39Id: selectedPaper.let39Data.paperId
        }
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