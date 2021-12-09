<!-- 行政处罚 听证程序 不予受理听证申请通知书 29 -->
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
            <div class="textAlignCenter formHeader4">
              不 予 受 理 听 证 申 请 通 知 书
            </div>
            <div class="formHeader5 paper-number-div">
              <div>
                <span @click="commandFill('cellIdx0', '文书号', 'TextItem')">{{
                  letData.cellIdx0 ? letData.cellIdx0 : "（编辑）"
                }}</span>
                <label>矿安监</label>
                <span @click="commandFill('cellIdx1', '文书号', 'TextItem')">{{
                  letData.cellIdx1 ? letData.cellIdx1 : "（编辑）"
                }}</span>
                <label>听不受〔</label>
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
            <table class="docBody">
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_4"
                  style="width: 60%"
                  data-title=""
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx4', '', 'TextItem')"
                >
                  {{ letData.cellIdx4 }}
                </td>
                <td class="textAlignLeft">：</td>
              </tr>
            </table>
            <div class="docTextarea">
              <label style="width: 5%"></label>
              经审查，你
              <span
                class="no-underline"
                >{{ letData.cellIdx5 ? letData.cellIdx5 : "" }}</span
              >
              关于
              <span
                @click="commandFill('cellIdx6', '违法行为', 'TextareaItem')"
                >{{
                  letData.cellIdx6 ? letData.cellIdx6 : "（点击编辑）"
                }}</span
              >
              提出的听证申请属于以下第
              <span @click="commandFill('cellIdx7', '编号', 'SelectItem')">{{
                letData.cellIdx7 ? letData.cellIdx7 : "（XX）"
              }}</span>
              项情形：
            </div>
            <table style="border: solid 0 #000" class="docBody">
              <tr>
                <td style="width: 5%"></td>
                <td class="textAlignLeft">
                  （一）申请人不是本案当事人或者其代理人；
                </td>
              </tr>
              <tr>
                <td style="width: 5%"></td>
                <td class="textAlignLeft">
                  （二）未在规定期限内提出听证申请；
                </td>
              </tr>
              <tr>
                <td style="width: 5%"></td>
                <td class="textAlignLeft">（三）不属于依法应当听证的范围；</td>
              </tr>
            </table>
            <div class="docTextarea">
              <label style="width: 5%"></label>
              根据《中华人民共和国行政处罚法》第四十二条之规定，我
              <span
                class="no-underline"
                @click="commandFill('cellIdx8', '局', 'TextItem')"
                >{{ letData.cellIdx8 ? letData.cellIdx8 : "" }}</span
              >
              决定不予受理你
              <span
                class="no-underline"
                >{{
                  letData.cellIdx9 ? letData.cellIdx9 : "（点击编辑）"
                }}</span
              >
              的听证申请。
            </div>
            <table height="30"></table>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:55%">
                <span class="no-line">签收人（签名）：</span>
                <span @click="commandFill('cellIdx10', '签收人（签名）', 'TextItem')"
                  >{{ letData.cellIdx10 ? letData.cellIdx10 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">日&nbsp;&nbsp;&nbsp;&nbsp;期：</span>
                <span @click="commandFill('cellIdx11', '日期', 'DateItem')">{{
                  letData.cellIdx11 ? letData.cellIdx11 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:55%">
                <span class="no-line">
                  <span class="no-line">我</span>
                  <span class="no-line" @click="commandFill('cellIdx12', '局', 'TextItem')"
                  >{{ letData.cellIdx12 ? letData.cellIdx12 : "(编辑)" }}</span>
                地址：</span>
                <span @click="commandFill('cellIdx13', '地址', 'TextItem')"
                  >{{ letData.cellIdx13 ? letData.cellIdx13 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">邮政编码：</span>
                <span @click="commandFill('cellIdx32', '邮政编码', 'TextItem')">{{
                  letData.cellIdx32 ? letData.cellIdx32 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:55%">
                <span class="no-line">
                  <span class="no-line">我</span>
                  <span class="no-line" @click="commandFill('cellIdx15', '局', 'TextItem')"
                  >{{ letData.cellIdx15 ? letData.cellIdx15 : "(编辑)" }}</span>
                联系人：</span>
                <span @click="commandFill('cellIdx16', '联系人', 'TextItem')"
                  >{{ letData.cellIdx16 ? letData.cellIdx16 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">联系电话：</span>
                <span @click="commandFill('cellIdx17', '联系电话', 'TextItem')">{{
                  letData.cellIdx17 ? letData.cellIdx17 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <table height="60"></table>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_18"
                  align="right"
                  style="width: 95%"
                  @click="commandFill('cellIdx18', '', 'TextItem')"
                >
                  {{ letData.cellIdx18 ? letData.cellIdx18 : "（点击编辑）" }}
                </td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_19"
                  align="right"
                  style="width: 95%"
                  data-title
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx19', '日期', 'DateItem')"
                >
                  {{ letData.cellIdx19 ? letData.cellIdx19 : "（点击编辑）" }}
                </td>
              </tr>
            </table>
            <div class="docTextarea" style="border-top: 2px solid #000;">
              备注：本文书一式两份，一份交申请听证
              <span
                style="borderBottom:none"
              >{{ letData.cellIdx20 ? letData.cellIdx20 : '（点击编辑）'}}</span>
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
import { getDocNumber, setNewDanger } from "@/utils/setInitPaperData";
import associationSelectPaper from "@/components/association-select-paper";
import { setDangerTable } from '@/utils/handlePaperData'
export default {
  name: "Let210",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {},
      options: {
        cellIdx7: [
          {
            value: "（一）",
            name: "（一）",
          },
          {
            value: "（二）",
            name: "（二）",
          },
          {
            value: "（三）",
            name: "（三）",
          },
        ],
        cellIdx5: [
          {
            value: "单位",
            name: "单位",
          },
          {
            value: "个人",
            name: "个人",
          },
        ],
      },
      associationPaper: ["28"],
      visibleSelectDialog: false,
    };
  },
  methods: {
    async initLetData(selectedPaper) {
      let db = new GoDB(this.$store.state.DBName);
      let corpBase = db.table("corpBase");
      let corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      // 1.弹出提示框，选择单位或个人
      this.visibleSelectDialog = true;
      // 2.生成文书编号
      let { num0, num1, num3, num4 } = await getDocNumber(
        db,
        this.docData.docTypeNo,
        this.corpData.caseId,
        this.$store.state.user
      );
      // 3.企业煤矿名称
      // 4.违法行为：获取笔录文书中的隐患数据
      let let28DataPaperContent = JSON.parse(
        selectedPaper.let28Data.paperContent
      );
      // let dangerObject = this.corpData.caseType === '0' ? getDangerObject(
      //   let28DataPaperContent.DangerTable.selectedDangerList
      // ) : null;
      // let cellIdx6String = this.corpData.caseType === '0' ? `${corp.corpName}涉嫌${dangerObject.dangerString}案。` : '';
      let cellIdx6String = this.corpData.caseType === '0' ?setDangerTable(
          let28DataPaperContent.DangerTable,
          {}, 
          {
            page: "29",
            key: "cellIdx6",
            spellString: {
              corpName: corp.corpName,
              groupName: this.$store.state.curCase.groupName,
            },
          }
        ):'';
      // 5.地点：sysOfficeInfo实体中depAddress字段+ deparFullname字段
      // 地址：depAddress、邮政编码：depPost、联系人：master、联系电话：phone
      let orgInfo = db.table("orgInfo");
      let orgData = await orgInfo.find(
        (item) => item.no === this.$store.state.user.userGroupId
      );
      let orgSysOfficeInfo =
        orgData && orgData.sysOfficeInfo
          ? JSON.parse(orgData.sysOfficeInfo)
          : { depAddress: "", depPost: "", master: "", phone: "" };
      let cellIdx13String = orgSysOfficeInfo.depAddress;
      let cellIdx14String = orgSysOfficeInfo.depPost;
      let cellIdx16String = orgSysOfficeInfo.master;
      let cellIdx17String = orgSysOfficeInfo.phone;
      let DangerTable = null
      if (this.corpData.caseType === '0') {
        DangerTable = let28DataPaperContent.DangerTable ? 
          setNewDanger(selectedPaper.let28Data, let28DataPaperContent.DangerTable)
          : {}
      }
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
        cellIdx4: let28DataPaperContent.selectedType === "单位" ? corp.corpName : "", // 企业煤矿名称
        cellIdx4TypeTextItem: let28DataPaperContent.selectedType === "单位" ? corp.corpName : "", //
        cellIdx5: let28DataPaperContent.selectedType, // 单位或个人
        cellIdx5TypeTextItem: let28DataPaperContent.selectedType, // 单位或个人
        cellIdx6: cellIdx6String, // 违法行为
        cellIdx7: null, // 第X项情形
        cellIdx8: '局', // 局
        cellIdx8TypeTextItem: '局', // 局
        cellIdx9: let28DataPaperContent.selectedType, // 单位或个人
        cellIdx9TypeTextItem: let28DataPaperContent.selectedType, // 单位或个人
        cellIdx10: null, // 签收人（签名）
        cellIdx11: null, // 日期
        cellIdx12: '局', // 局
        cellIdx12TypeTextItem: '局', // 局
        cellIdx13: cellIdx13String, // 地址
        cellIdx13TypeTextItem: cellIdx13String, // 地址
        cellIdx14: cellIdx14String, // 邮政编码
        cellIdx14TypeTextItem: cellIdx14String, // 邮政编码
        cellIdx15: '局', // 局
        cellIdx15TypeTextItem: '局', // 局
        cellIdx16: cellIdx16String, // 联系人
        cellIdx16TypeTextItem: cellIdx16String, // 联系人
        cellIdx17: cellIdx17String, // 联系电话
        cellIdx17TypeTextItem: cellIdx17String, // 联系电话
        cellIdx18: this.$store.state.curCase.groupName, // 
        cellIdx19: this.todayDate, // 日期
        cellIdx19TypeDateItem: this.todayDate, // 日期
        cellIdx20: let28DataPaperContent.selectedType, // 单位或个人
        selectedType: let28DataPaperContent.selectedType, // 单位或个人
        extraData: {
          // 保存额外拼写的数据内容，用于修改隐患项时回显使用
          corpName: corp.corpName,
          groupName: this.$store.state.curCase.groupName,
        },
        DangerTable,
        associationPaperId: this.corpData.caseType === '0' ? { // 关联的paperId
          paper22Id: let28DataPaperContent.associationPaperId.paper22Id,
          paper1Id: let28DataPaperContent.associationPaperId.paper1Id,
          paper6Id: let28DataPaperContent.associationPaperId.paper6Id,
          paper28Id: selectedPaper.let28Data.paperId
        } : {
          paper6Id: let28DataPaperContent.associationPaperId.paper6Id,
          paper28Id: selectedPaper.let28Data.paperId
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
    async confirm() {
      // 选择单位或个人
      this.visibleSelectDialog = false;
      this.letData.cellIdx5 = this.selectedType;
      this.letData.cellIdx5TypeTextItem = this.selectedType;
      this.letData.cellIdx9 = this.selectedType;
      this.letData.cellIdx9TypeTextItem = this.selectedType;
      this.letData.cellIdx20 = this.selectedType;
      this.letData.cellIdx20TypeTextItem = this.selectedType;
      this.letData.cellIdx9 = this.selectedType;
      this.letData.cellIdx9TypeTextItem = this.selectedType;
      this.letData.cellIdx22 = this.selectedType;
      this.letData.cellIdx22TypeTextItem = this.selectedType;
      this.letData.selectedType = this.selectedType;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/let";
</style>