<!-- 现场检查 实施检查 先行登记保存证据通知书 25 -->
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
              先 行 登 记 保 存 证 据 通 知 书
            </div>
            <div class="formHeader5 paper-number-div">
              <div>
                <span @click="commandFill('cellIdx0', '', 'TextItem')">{{
                  letData.cellIdx0 ? letData.cellIdx0 : "（编辑）"
                }}</span>
                <label>矿安监</label>
                <span @click="commandFill('cellIdx1', '', 'TextItem')">{{
                  letData.cellIdx1 ? letData.cellIdx1 : "（编辑）"
                }}</span>
                <label>先保〔</label>
                <span @click="commandFill('cellIdx2', '', 'TextItem')">{{
                  letData.cellIdx2 ? letData.cellIdx2 : "（编辑）"
                }}</span>
                <label>〕</label>
                <span @click="commandFill('cellIdx3', '', 'TextItem')">{{
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
                  style="width: 62%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx4', '', 'TextItem')"
                >
                  {{ letData.cellIdx4 }}
                </td>
                <td class="textAlignLeft">:</td>
              </tr>
            </table>
            <div class="docTextarea">
              <label style="width: 5%"></label>
              你单位
              <!-- <span
                class="no-underline"
                @click="commandFill('cellIdx5', '单位', 'DangerTable')"
                >{{
                  letData.cellIdx5 ? letData.cellIdx5 : "（点击编辑）"
                }}</span> -->
              <span
                @dblclick="commandFill('cellIdx6', '违法违规行为', 'DangerTable')"
                @click="commandFill('cellIdx6', '违法违规行为', 'TextareaItem')"
                >{{
                  letData.cellIdx6 ? letData.cellIdx6 : "（点击编辑）"
                }}</span
              >
              的行为涉嫌违法违规。根据《中华人民共和国行政处罚法》第三十七条第二款规定，我
              <span class="no-underline" @click="commandFill('cellIdx7', '局', 'TextItem')">{{
                letData.cellIdx7 ? letData.cellIdx7 : "(编辑)"
              }}</span>
              决定对你单位
              <!-- <span @click="commandFill('cellIdx8', '单位', 'TextItem')">{{
                letData.cellIdx8 ? letData.cellIdx8 : "（点击编辑）"
              }}</span> -->
              的有关证据（详见《先行登记保存证据清单》）采取先行登记保存措施。先行登记保存的证据，存放在
              <span @click="commandFill('cellIdx9', '', 'TextItem')">{{
                letData.cellIdx9 ? letData.cellIdx9 : "（点击编辑）"
              }}</span>
              由
              <span @click="commandFill('cellIdx10', '', 'TextItem')">{{
                letData.cellIdx10 ? letData.cellIdx10 : "（点击编辑）"
              }}</span>
              负责保管，在此期间，不得销毁或者转移证据。
            </div>
            <div class="docTextarea">
              <label style="width: 5%"></label>
              我
              <span
                class="no-underline"
                @click="commandFill('cellIdx11', '局', 'TextItem')"
                >{{ letData.cellIdx11 ? letData.cellIdx11 : "(编辑)" }}</span
              >
              将在七日内对先行登记保存的证据依法作出处理决定。逾期未作出处理决定的，先行登记保存措施自动解除。
            </div>
            <table height="30"></table>
            <div class="docTextLine">
              <label style="width: 7%"></label>
              <label>XX</label>
              <div
                class="no-line-div"
                @click="
                  commandFill(
                    'cellIdx12',
                    '先行登记保存证据清单',
                    'SamplingForensicsTable'
                  )
                "
              >
                先行登记保存证据清单
              </div>
            </div>
            <table height="20"></table>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:50%">
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;受送达人（签名）：</span>
                <span @click="commandFill('cellIdx13', '受送达人（签名）', 'TextItem')"
                  >{{ letData.cellIdx13 ? letData.cellIdx13 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;日期</span>
                <span @click="commandFill('cellIdx14', '日期', 'DateItem')">{{
                  letData.cellIdx14 ? letData.cellIdx14 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:50%">
                <span class="no-line">
                  <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我</span>
                  <span class="no-line" @click="commandFill('cellIdx15', '局', 'TextItem')"
                  >{{ letData.cellIdx15 ? letData.cellIdx15 : "(编辑)" }}</span>
                地址：</span>
                <span @click="commandFill('cellIdx16', '地址', 'TextItem')"
                  >{{ letData.cellIdx16 ? letData.cellIdx16 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;邮政编码：</span>
                <span @click="commandFill('cellIdx17', '邮政编码', 'TextItem')">{{
                  letData.cellIdx17 ? letData.cellIdx17 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
              <div class="docTextarea">
                <div style="display:inline-block;min-width:50%">
                  <span class="no-line">
                    <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我</span>
                    <span class="no-line" @click="commandFill('cellIdx18', '局', 'TextItem')"
                    >{{ letData.cellIdx18 ? letData.cellIdx18 : "(编辑)" }}</span>
                  联系人：</span>
                  <span @click="commandFill('cellIdx19', '联系人', 'TextItem')"
                    >{{ letData.cellIdx19 ? letData.cellIdx19 : "（点击编辑）" }}
                  </span>
                </div>
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;联系电话：</span>
                <span @click="commandFill('cellIdx20', '联系电话', 'TextItem')">{{
                  letData.cellIdx20 ? letData.cellIdx20 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <table height="20"></table>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_21"
                  align="right"
                  style="width: 95%"
                  @click="commandFill('cellIdx21', '', 'TextItem')"
                >
                  {{ letData.cellIdx21 ? letData.cellIdx21 : "（点击编辑）" }}
                </td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_22"
                  align="right"
                  style="width: 95%"
                  data-title
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx22', '日期', 'DateItem')"
                >
                  {{ letData.cellIdx22 ? letData.cellIdx22 : "（点击编辑）" }}
                </td>
              </tr>
            </table>
            <div class="docTextarea" style="border-top: 2px solid #000">
              备注：本文书一式两份，一份交被检查单位，一份存档。
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
import { getDangerObject, getDocNumber, setNewDanger } from "@/utils/setInitPaperData";
import associationSelectPaper from "@/components/association-select-paper";
export default {
  name: "Let108",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {},
      options: {
        cellIdx6: {
          page: "25",
          key: "cellIdx6",
        },
      },
      associationPaper: ["1"],
    };
  },
  methods: {
    async initLetData(selectedPaper) {
      let db = new GoDB(this.$store.state.DBName);
      let corpBase = db.table("corpBase");
      let corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      // 1.生成文书编号
      let { num0, num1, num3, num4 } = await getDocNumber(
        db,
        this.docData.docTypeNo,
        this.corpData.caseId,
        this.$store.state.user
      );
      // 2.获取笔录文书中的隐患数据
      let let1DataPapaerContent = JSON.parse(
        selectedPaper.let1Data.paperContent
      );
      let dangerObject = getDangerObject(
        let1DataPapaerContent.DangerTable.selectedDangerList
      );
      let cellIdx6String = `${dangerObject.dangerString}`;
      // 3.sysOfficeInfo实体中 地址：depAddress、邮政编码：depPost、master、联系电话：phone
      let orgInfo = db.table("orgInfo");
      let orgData = await orgInfo.find(
        (item) => item.no === this.$store.state.user.userGroupId
      );
      let orgSysOfficeInfo =
        orgData && orgData.sysOfficeInfo
          ? JSON.parse(orgData.sysOfficeInfo)
          : { depAddress: "", depPost: "", master: "", phone: "" };
      let cellIdx16String = orgSysOfficeInfo.depAddress;
      let cellIdx17String = orgSysOfficeInfo.depPost;
      let cellIdx19String = orgSysOfficeInfo.master;
      let cellIdx20String = orgSysOfficeInfo.phone;
      let DangerTable = let1DataPapaerContent.DangerTable ? 
      setNewDanger(selectedPaper.let1Data, let1DataPapaerContent.DangerTable)
      : {}
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
        cellIdx4: corp.corpName ? corp.corpName : null, // corpname
        cellIdx4TypeTextItem: corp.corpName ? corp.corpName : null, // corpname
        // cellIdx5: '单位', // 单位/个人？
        cellIdx6: cellIdx6String, // 隐患描述
        cellIdx7: "局", // 局
        cellIdx7TypeTextItem: "局", // 局
        // cellIdx8: null, // 单位/个人？
        cellIdx9: null, // 存放在...
        cellIdx10: null, // 由...负责保管
        cellIdx11: "局", // 局
        cellIdx11TypeTextItem: "局", // 局
        cellIdx12: null, // 附件：抽样取证清单
        cellIdx13: null, // 受送达人（签名）
        cellIdx14: null, // 日期
        cellIdx15: "局", // 局
        cellIdx15TypeTextItem: "局", // 局
        cellIdx16: cellIdx16String, // 地址
        cellIdx16ypeTextItem: cellIdx16String, // 地址
        cellIdx17: cellIdx17String, // 邮政编码
        cellIdx17ypeTextItem: cellIdx17String, // 邮政编码
        cellIdx18: "局", // 局
        cellIdx18TypeTextItem: "局", // 局
        cellIdx19: cellIdx19String, // 联系人
        cellIdx19ypeTextItem: cellIdx19String, // 联系人
        cellIdx20: cellIdx20String, // 联系电话
        cellIdx20ypeTextItem: cellIdx20String, // 联系电话
        cellIdx21: this.$store.state.curCase.groupName, //
        cellIdx21TypeTextItem: this.$store.state.curCase.groupName, //
        cellIdx22: this.todayDate, //
        cellIdx22TypeDateItem: this.todayDate, // 日期
        DangerTable: DangerTable,
        SamplingForensicsTable: {
          tableData: [],
          signature: null,
          signDate: "",
        },
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
        if (key === "cellIdx6" && type === 'DangerTable') {
          this.options[key] = {
            page: "25",
            key: key,
          };
          dataKey = "DangerTable";
        } else if (key === "cellIdx12") {
          this.options[key] = {
            canEdit: true,
            page: "25", // 控制当前为抽样取证或者先行登记保存证据清单
          };
          dataKey = "SamplingForensicsTable";
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
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/let";
</style>