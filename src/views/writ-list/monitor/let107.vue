<!-- 现场检查 实施检查 抽样取证通知书 23 -->
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
            <div class="textAlignCenter formHeader4">抽 样 取 证 通 知 书</div>
            <div class="formHeader5 paper-number-div">
              <div>
                <span @click="commandFill('cellIdx0', '', 'TextItem')">{{
                  letData.cellIdx0 ? letData.cellIdx0 : "（编辑）"
                }}</span>
                <label>矿安监</label>
                <span @click="commandFill('cellIdx1', '', 'TextItem')">{{
                  letData.cellIdx1 ? letData.cellIdx1 : "（编辑）"
                }}</span>
                <label>抽〔</label>
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
              <span
                @click="commandFill('cellIdx5', '违法行为', 'DangerTable')"
                >{{
                  letData.cellIdx5 ? letData.cellIdx5 : "（点击编辑）"
                }}</span
              >
              涉嫌违法违规。根据《中华人民共和国行政处罚法》第三十七条第二款规定，我
              <span  class="no-underline" @click="commandFill('cellIdx6', '局', 'TextItem')">{{
                letData.cellIdx6 ? letData.cellIdx6 : ""
              }}</span>
              决定对你单位的有关证据（详见《抽样取证清单》）采取抽样取证。
            </div>
            <table height="20"></table>
            <table class="docBody">
              <tr>
                <td style="width: 5%"></td>
                <td
                  class="textAlignLeft"
                  style="cursor: pointer"
                  @click="
                    commandFill(
                      'cellIdx7',
                      '抽样取证清单',
                      'SamplingForensicsTable'
                    )
                  "
                >
                  附件：抽样取证清单
                </td>
                <td
                  id="cell_idx_7"
                  style="width: 70%"
                  data-title="附件"
                  data-type="text"
                  data-src
                ></td>
              </tr>
            </table>
            <div class="docTextarea">
            <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;抽样承办人：（签名）</span>
            <span
              @click="commandFill('cellIdx8', '抽样承办人：（签名）', 'TextItem')"
              >{{ letData.cellIdx8 ? letData.cellIdx8 : "（点击编辑）" }}</span
            >
            <div class="line"></div>
          </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:55%">
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;抽样时间：</span>
                <span
                  class="line-div center"
                  @click="commandFill('cellIdx9', '年', 'TextItem')"
                  >{{ letData.cellIdx9 ? letData.cellIdx9 : "（XX）" }}</span
                >
                <label>年</label>
                <span
                  class="line-div center"
                  @click="commandFill('cellIdx10', '月', 'TextItem')"
                  >{{ letData.cellIdx10 ? letData.cellIdx10 : "（XX）" }}</span
                >
                <label>月</label>
                <span
                  class="line-div center"
                  @click="commandFill('cellIdx11', '日', 'TextItem')"
                  >{{ letData.cellIdx11 ? letData.cellIdx11 : "（XX）" }}</span
                >
                <label>日</label>
                <span
                  class="line-div center"
                  @click="commandFill('cellIdx12', '时', 'TextItem')"
                  >{{ letData.cellIdx12 ? letData.cellIdx12 : "（XX）" }}</span
                >
                <label>时</label>
              </div>
                <span class="no-line">抽样地点:</span>
                <span @click="commandFill('cellIdx13', '抽样地点', 'TextItem')"
                  >{{ letData.cellIdx13 ? letData.cellIdx13 : "（点击编辑）" }}
                </span>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:50%">
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;受送达人（签名）：</span>
                <span @click="commandFill('cellIdx14', '受送达人（签名）', 'TextItem')"
                  >{{ letData.cellIdx14 ? letData.cellIdx14 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;日期</span>
                <span @click="commandFill('cellIdx15', '日期', 'DateItem')">{{
                  letData.cellIdx15 ? letData.cellIdx15 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:50%">
                <span class="no-line">
                  <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;我</span>
                  <span class="no-line" @click="commandFill('cellIdx16', '局', 'TextItem')"
                  >{{ letData.cellIdx16 ? letData.cellIdx16 : "" }}</span>
                地址：</span>
                <span @click="commandFill('cellIdx17', '地址', 'TextItem')"
                  >{{ letData.cellIdx17 ? letData.cellIdx17 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;邮政编码：</span>
                <span @click="commandFill('cellIdx18', '邮政编码', 'TextItem')">{{
                  letData.cellIdx18 ? letData.cellIdx18 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
              <div class="docTextarea">
                <div style="display:inline-block;min-width:50%">
                  <span class="no-line">
                    <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;我</span>
                    <span class="no-line" @click="commandFill('cellIdx19', '局', 'TextItem')"
                    >{{ letData.cellIdx19 ? letData.cellIdx19 : "" }}</span>
                  联系人：</span>
                  <span @click="commandFill('cellIdx20', '联系人', 'TextItem')"
                    >{{ letData.cellIdx20 ? letData.cellIdx20 : "（点击编辑）" }}
                  </span>
                </div>
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;联系电话：</span>
                <span @click="commandFill('cellIdx21', '联系电话', 'TextItem')">{{
                  letData.cellIdx21 ? letData.cellIdx21 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <table class="docBody"></table>
            <table height="30"></table>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_22"
                  align="right"
                  style="width: 95%"
                  @click="commandFill('cellIdx22', '', 'TextItem')"
                >
                  {{ letData.cellIdx22 ? letData.cellIdx22 : "（点击编辑）" }}
                </td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_23"
                  align="right"
                  style="width: 95%"
                  data-title
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx23', '日期', 'DateItem')"
                >
                  {{ letData.cellIdx23 ? letData.cellIdx23 : "（点击编辑）" }}
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
import { getDangerObject, getDocNumber } from "@/utils/setInitPaperData";
import associationSelectPaper from "@/components/association-select-paper";
export default {
  name: "Let107",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {},
      options: {
        cellIdx5: {
          page: "23",
          key: "cellIdx5",
        },
      },
      associationPaper: ["1"],
    };
  },
  methods: {
    async initLetData(selectedPaper) {
      const db = new GoDB(this.$store.state.DBName);
      const corpBase = db.table("corpBase");
      //查询符合条件的记录
      const corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      // 1.生成文书编号
      let { num0, num1, num3, num4 } = await getDocNumber(
        db,
        this.docData.docTypeNo,
        this.corpData.caseId,
        this.$store.state.user
      );
      // 2.隐患描述
      // 获取笔录文书中的隐患数据
      let let1DataPapaerContent = JSON.parse(
        selectedPaper.let1Data.paperContent
      );
      let dangerObject = getDangerObject(
        let1DataPapaerContent.DangerTable.tableData
      );
      let cellIdx5String = `${dangerObject.dangerString}`;
      // 3.抽样时间9-12
      let now = new Date();
      let cellIdx9Year = now.getFullYear().toString();
      let cellIdx10Month = (now.getMonth() + 1).toString();
      let cellIdx11Date = now.getDate().toString();
      let cellIdx12Hour = now.getHours().toString();
      // 4.sysOfficeInfo实体中 地址：depAddress、邮政编码：depPost、master、联系电话：phone
      const orgInfo = db.table("orgInfo");
      const orgData = await orgInfo.find(
        (item) => item.no === this.$store.state.user.userGroupId
      );
      let orgSysOfficeInfo =
        orgData && orgData.sysOfficeInfo
          ? JSON.parse(orgData.sysOfficeInfo)
          : { depAddress: "", depPost: "", master: "", phone: "" };
      let cellIdx17String = orgSysOfficeInfo.depAddress;
      let cellIdx18String = orgSysOfficeInfo.depPost;
      let cellIdx20String = orgSysOfficeInfo.master;
      let cellIdx21String = orgSysOfficeInfo.phone;
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
        cellIdx5: cellIdx5String, // 隐患描述
        cellIdx6: '局', // 局
        cellIdx6TypeTextItem: '局', // 局
        cellIdx7: null, // 抽样取证清单
        cellIdx8: null, // 抽样承办人：（签名）
        cellIdx9: cellIdx9Year, // 年
        cellIdx9TypeTextItem: cellIdx9Year, // 年
        cellIdx10: cellIdx10Month, // 月
        cellIdx10TypeTextItem: cellIdx10Month, // 月
        cellIdx11: cellIdx11Date, // 日
        cellIdx11TypeTextItem: cellIdx11Date, // 日
        cellIdx12: cellIdx12Hour, // 时
        cellIdx12TypeTextItem: cellIdx12Hour, // 时
        cellIdx13: null, // 抽样地点
        cellIdx14: null, // 受送达人（签名）
        cellIdx15: null, // 日期
        cellIdx16: '局', // 局
        cellIdx17: cellIdx17String, // 地址
        cellIdx17TypeTextItem: cellIdx17String, // 地址
        cellIdx18: cellIdx18String, // 邮政编码
        cellIdx18TypeTextItem: cellIdx18String, // 邮政编码
        cellIdx19: '局', // 局
        cellIdx20: cellIdx20String, // 联系人
        cellIdx20TypeTextItem: cellIdx20String, // 联系人
        cellIdx21: cellIdx21String, // 联系电话
        cellIdx21TypeTextItem: cellIdx21String, // 联系电话
        cellIdx22: this.$store.state.curCase.groupName, //
        cellIdx22TypeTextItem: this.$store.state.curCase.groupName, //
        cellIdx23: this.todayDate, // 日期
        cellIdx23TypeDateItem: this.todayDate, // 日期
        DangerTable: let1DataPapaerContent.DangerTable,
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
        if (key === "cellIdx5") {
          this.options[key] = {
            page: "23",
            key: key,
          };
          dataKey = "DangerTable";
        } else if (key === "cellIdx7") {
          this.options[key] = {
            canEdit: true,
            page: "23", // 控制当前为抽样取证或者先行登记保存证据清单
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
      } else {
        if (key === "cellIdx7") {
          // 不能编辑时，还需要查看附件
          this.options[key] = {
            canEdit: false,
            page: "23", // 控制当前为抽样取证或者先行登记保存证据清单
          };
          let dataKey = "SamplingForensicsTable";
          this.$refs.letMain.commandFill(
            key,
            dataKey,
            title,
            type,
            this.letData[dataKey],
            this.options[key]
          );
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/let";
</style>