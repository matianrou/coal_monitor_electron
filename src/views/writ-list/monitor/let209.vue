<!-- 行政处罚 听证程序 听证通知书 -->
<template>
  <div style="width: 100%; height: 100%">
    <let-main
      ref="letMain"
      :corp-data="corpData"
      :doc-data="docData"
      :let-data="letData"
      :edit-data="editData"
      @go-back="goBack"
    >
      <div slot="left">
        <div class="page page-sizeA4">
          <div>
            <div class="stdRowH"></div>
            <div class="textAlignCenter formHeader0">
              国 家 煤 矿 安 全 监 察
              <br />
            </div>
            <div class="textAlignCenter formHeader3">听 证 通 知 书</div>
            <div class="docTextLine paper-number-div">
              <div>
                <span @click="commandFill('cellIdx0', '文书号', 'TextItem')">{{
                  letData.cellIdx0 ? letData.cellIdx0 : "（编辑）"
                }}</span>
                <label>煤安监</label>
                <span @click="commandFill('cellIdx1', '文书号', 'TextItem')">{{
                  letData.cellIdx1 ? letData.cellIdx1 : "（编辑）"
                }}</span>
                <label>听〔</label>
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
                  align="center"
                  style="width: 60%"
                  data-title=""
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx4', '单位', 'TextItem')"
                >
                  {{ letData.cellIdx4 }}
                </td>
                <td class="textAlignLeft">：</td>
              </tr>
            </table>
            <div class="docTextarea">
              <label style="width: 5%"></label>
              我
              <span
                class="no-underline"
                @click="commandFill('cellIdx5', '单位', 'TextItem')"
                >{{
                  letData.cellIdx5 ? letData.cellIdx5 : "（点击编辑）"
                }}</span
              >
              根据你
              <span
                class="no-underline"
                @click="commandFill('cellIdx6', '单位', 'TextItem')"
                >{{
                  letData.cellIdx6 ? letData.cellIdx6 : "（点击编辑）"
                }}</span
              >
              申请，关于
              <span
                @click="commandFill('cellIdx7', '违法行为', 'DangerTableItem')"
                >{{
                  letData.cellIdx7 ? letData.cellIdx7 : "（点击编辑）"
                }}</span
              >
              现定于
              <span @click="commandFill('cellIdx8', '年', 'TextItem')">{{
                letData.cellIdx8 ? letData.cellIdx8 : "（XX）"
              }}</span>
              年
              <span @click="commandFill('cellIdx9', '月', 'TextItem')">{{
                letData.cellIdx9 ? letData.cellIdx9 : "（XX）"
              }}</span>
              月
              <span @click="commandFill('cellIdx10', '日', 'TextItem')">{{
                letData.cellIdx10 ? letData.cellIdx10 : "（XX）"
              }}</span>
              日
              <span @click="commandFill('cellIdx11', '时', 'TextItem')">{{
                letData.cellIdx11 ? letData.cellIdx11 : "（XX）"
              }}</span>
              时在
              <span @click="commandFill('cellIdx12', '地点', 'TextItem')">{{
                letData.cellIdx12 ? letData.cellIdx12 : "（点击编辑）"
              }}</span>
              <span
                class="no-underline"
                @click="commandFill('cellIdx13', '公开/不公开', 'SelectItem')"
                >{{
                  letData.cellIdx13 ? letData.cellIdx13 : "（点击编辑）"
                }}</span
              >
              举行听证会议，请你
              <span
                class="no-underline"
                @click="commandFill('cellIdx14', '单位', 'TextItem')"
                >{{
                  letData.cellIdx14 ? letData.cellIdx14 : "（点击编辑）"
                }}</span
              >
              准时参加。
            </div>
            <div class="docTextLine">
              <label style="width: 5%"></label>
              <div style="flex: 1; display: flex">
                <label>听证主持人姓名：</label>
                <div
                  class="line-div"
                  @click="
                    commandFill('cellIdx15', '听证主持人姓名', 'TextItem')
                  "
                >
                  {{ letData.cellIdx15 ? letData.cellIdx15 : "（点击编辑）" }}
                </div>
              </div>
              <div style="flex: 1; display: flex">
                <label>&nbsp;&nbsp;职务：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx16', '职务', 'TextItem')"
                >
                  {{ letData.cellIdx16 ? letData.cellIdx16 : "（点击编辑）" }}
                </div>
              </div>
            </div>
            <div class="docTextLine">
              <label style="width: 5%"></label>
              <div style="flex: 1; display: flex">
                <label>听 证 员 姓 名：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx17', '听证员姓名', 'TextItem')"
                >
                  {{ letData.cellIdx17 ? letData.cellIdx17 : "（点击编辑）" }}
                </div>
              </div>
              <div style="flex: 1; display: flex">
                <label>&nbsp;&nbsp;职务：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx18', '职务', 'TextItem')"
                >
                  {{ letData.cellIdx18 ? letData.cellIdx18 : "（点击编辑）" }}
                </div>
              </div>
            </div>
            <div class="docTextLine">
              <label style="width: 5%"></label>
              <div style="flex: 1; display: flex">
                <label>听 证 员 姓 名：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx19', '听证员姓名', 'TextItem')"
                >
                  {{ letData.cellIdx19 ? letData.cellIdx19 : "（点击编辑）" }}
                </div>
              </div>
              <div style="flex: 1; display: flex">
                <label>&nbsp;&nbsp;职务：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx20', '职务', 'TextItem')"
                >
                  {{ letData.cellIdx20 ? letData.cellIdx20 : "（点击编辑）" }}
                </div>
              </div>
            </div>
            <div class="docTextLine">
              <label style="width: 5%"></label>
              <div style="flex: 1; display: flex">
                <label>记 录 人 姓 名：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx21', '记录人姓名', 'TextItem')"
                >
                  {{ letData.cellIdx21 ? letData.cellIdx21 : "（点击编辑）" }}
                </div>
              </div>
              <div style="flex: 1; display: flex">
                <label>&nbsp;&nbsp;职务：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx22', '职务', 'TextItem')"
                >
                  {{ letData.cellIdx22 ? letData.cellIdx22 : "（点击编辑）" }}
                </div>
              </div>
            </div>
            <div class="docTextarea">
              <label style="width: 5%"></label>
              根据《中华人民共和国行政处罚法》第六十四条规定，你
              <span
                class="no-underline"
                @click="commandFill('cellIdx23', '单位/个人', 'TextItem')"
                >{{
                  letData.cellIdx23 ? letData.cellIdx23 : "（点击编辑）"
                }}</span
              >
              可以申请听证主持人回避。有关事项告知如下：
            </div>
            <div class="docTextarea">
              <label style="width: 5%"></label>
              1.
              请事先准备相关证据，通知证人或委托代理人准时参加；无正当理由拒不出席或者未经许可中途退出听证的，视为放弃听证权力，我局（
              <span
                class="no-underline"
                @click="commandFill('cellIdx24', '单位', 'TextItem')"
                >{{
                  letData.cellIdx24 ? letData.cellIdx24 : "（点击编辑）"
                }}</span
              >
              ）将终止听证。
            </div>

            <div class="docTextarea">
              <label style="width: 5%"></label>
              2. 委托代理人参加听证的，应当在听证会前向我
              <span
                class="no-underline"
                @click="commandFill('cellIdx25', '单位', 'TextItem')"
                >{{
                  letData.cellIdx25 ? letData.cellIdx25 : "（点击编辑）"
                }}</span
              >
              提交授权委托书等有关证明。
            </div>
            <div class="docTextarea">
              <label style="width: 5%"></label>
              3. 申请延期举行的，应当在举行听证会前向我
              <span
                class="no-underline"
                @click="commandFill('cellIdx26', '单位', 'TextItem')"
                >{{
                  letData.cellIdx26 ? letData.cellIdx26 : "（点击编辑）"
                }}</span
              >
              提出，由我
              <span
                class="no-underline"
                @click="commandFill('cellIdx27', '单位', 'TextItem')"
                >{{
                  letData.cellIdx27 ? letData.cellIdx27 : "（点击编辑）"
                }}</span
              >
              决定是否延期。
            </div>
            <table height="30"></table>
            <div class="docTextLine">
              <label style="width: 5%"></label>
              <div style="flex: 1; display: flex">
                <label>签收人（签名）：</label>
                <div
                  class="line-div"
                  @click="
                    commandFill('cellIdx28', '签收人（签名）', 'TextItem')
                  "
                >
                  {{ letData.cellIdx28 ? letData.cellIdx28 : "（点击编辑）" }}
                </div>
              </div>
              <div style="flex: 1; display: flex">
                <label>日&nbsp;&nbsp;&nbsp;&nbsp;期：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx29', '日期', 'DateItem')"
                >
                  {{ letData.cellIdx29 ? letData.cellIdx29 : "（点击编辑）" }}
                </div>
              </div>
            </div>
            <div class="docTextLine">
              <label style="width: 5%"></label>
              <div style="flex: 2; display: flex">
                <label>我</label>
                <span @click="commandFill('cellIdx30', '', 'TextItem')">{{
                  letData.cellIdx30 ? letData.cellIdx30 : "（点击编辑）"
                }}</span>
                <label>地址：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx31', '地址', 'TextItem')"
                >
                  {{ letData.cellIdx31 ? letData.cellIdx31 : "（点击编辑）" }}
                </div>
              </div>
              <div style="flex: 2; display: flex">
                <label>邮政编码：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx32', '邮政编码', 'TextItem')"
                >
                  {{ letData.cellIdx32 ? letData.cellIdx32 : "（点击编辑）" }}
                </div>
              </div>
            </div>
            <div class="docTextLine">
              <label style="width: 5%"></label>
              <div style="flex: 2; display: flex">
                <label>我</label>
                <span @click="commandFill('cellIdx33', '', 'TextItem')">{{
                  letData.cellIdx33 ? letData.cellIdx33 : "（点击编辑）"
                }}</span>
                <label>联系人：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx34', '联系人', 'TextItem')"
                >
                  {{ letData.cellIdx34 ? letData.cellIdx34 : "（点击编辑）" }}
                </div>
              </div>
              <div style="flex: 2; display: flex">
                <label>联系电话：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx35', '联系电话', 'TextItem')"
                >
                  {{ letData.cellIdx35 ? letData.cellIdx35 : "（点击编辑）" }}
                </div>
              </div>
            </div>
            <table height="60"></table>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_36"
                  align="right"
                  style="width: 95%"
                  @click="commandFill('cellIdx36', '', 'TextItem')"
                >
                  {{ letData.cellIdx36 ? letData.cellIdx36 : "（点击编辑）" }}
                </td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_37"
                  align="right"
                  style="width: 95%"
                  data-title
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx37', '日期', 'DateItem')"
                >
                  {{ letData.cellIdx37 ? letData.cellIdx37 : "（点击编辑）" }}
                </td>
              </tr>
            </table>
            <div class="docTextarea cellLine">
              <label style="width: 5%"></label>
              &nbsp;&nbsp;&nbsp;&nbsp;备注：本文书一式两份，一份交申请听证
              <span
                style="border-bottom: none"
                @click="commandFill('cellIdx38', '单位/个人', 'TextItem')"
                >{{
                  letData.cellIdx38 ? letData.cellIdx38 : "（点击编辑）"
                }}</span
              >
              ，一份存档。
            </div>
            <table height="50"></table>
          </div>
        </div>
      </div>
    </let-main>
    <el-dialog
      title="文书信息选择"
      :close-on-click-modal="false"
      append-to-body
      :visible="visible"
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
  </div>
</template>

<script>
import letMain from "@/views/make-law-writ/components/let-main.vue";
import GoDB from "@/utils/godb.min.js";
import { getDangerObject, getDocNumber } from "@/utils/setInitPaperData";
export default {
  name: "Let209",
  props: {
    corpData: {
      type: Object,
      default: () => {},
    },
    docData: {
      type: Object,
      default: () => {
        return {
          docTypeNo: null,
          docTypeName: null,
        };
      },
    },
  },
  components: {
    letMain,
  },
  data() {
    return {
      letData: {},
      options: {
        cellIdx7: {
          page: "28",
          key: "cellIdx7",
        },
        cellIdx13: [
          {
            value: "公开",
            name: "公开",
          },
          {
            value: "不公开",
            name: "不公开",
          },
        ],
      },
      editData: {}, // 回显数据
      visible: false,
      selectedType: "单位", // 初始化时选择的单位或个人
      extraData: {}, // 用于拼写隐患内容的字符集合
    };
  },
  created() {
    this.initData();
  },
  watch: {
    "corpData.corpId"(val) {
      if (val) {
        this.initData();
      }
    },
  },
  methods: {
    async initData() {
      const db = new GoDB(this.$store.state.DBName);
      const corpBase = db.table("corpBase");
      //查询符合条件的记录
      const corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      const wkPaper = db.table("wkPaper");
      const caseId = this.corpData.caseId;
      const checkPaper = await wkPaper.findAll((item) => {
        return (
          item.caseId === caseId &&
          item.paperType === this.docData.docTypeNo &&
          item.delFlag !== "1"
        );
      });
      // await wkPaper.delete(checkPaper[0].id)
      // 保存额外拼写的数据内容，用于修改隐患项时回显使用
      this.extraData = {
        corpName: corp.corpName,
      };
      if (checkPaper.length > 0) {
        // 回显
        this.letData = JSON.parse(checkPaper[0].paperContent);
        this.editData = checkPaper[0];
      } else {
        // 创建初始版本
        // 1.弹出提示框，选择单位或个人
        this.visible = true;
        // 2.生成文书编号
        let { num0, num1, num3, num4 } = await getDocNumber(
          db,
          this.docData.docTypeNo,
          caseId,
          this.$store.state.user
        );
        // 3.企业煤矿名称
        // 4.违法行为：获取笔录文书中的隐患数据
        const let101Data = await wkPaper.find((item) => {
          return item.caseId === caseId && item.paperType === "1";
        });
        let let101DataPapaerContent = JSON.parse(let101Data.paperContent);
        let dangerObject = getDangerObject(
          let101DataPapaerContent.dangerItemObject.tableData
        );
        let cellIdx7String = `${corp.corpName}涉嫌${dangerObject.dangerString}案。`;
        // 5.地点：sysOfficeInfo实体中depAddress字段+ deparFullname字段
        // 地址：depAddress、邮政编码：depPost、联系人：master、联系电话：phone
        const orgInfo = db.table("orgInfo");
        const orgData = await orgInfo.find(
          (item) => item.no === this.$store.state.user.userGroupId
        );
        let orgSysOfficeInfo =
          orgData && orgData.sysOfficeInfo
            ? JSON.parse(orgData.sysOfficeInfo)
            : { depAddress: "", depPost: "", master: "", phone: "" };
        let cellIdx12String = `${orgSysOfficeInfo.depAddress}${orgSysOfficeInfo.deparFullname}`;
        let cellIdx31String = orgSysOfficeInfo.depAddress;
        let cellIdx32String = orgSysOfficeInfo.depPost;
        let cellIdx34String = orgSysOfficeInfo.master;
        let cellIdx35String = orgSysOfficeInfo.phone;
        this.letData = {
          cellIdx0: num0, // 文书号
          cellIdx0TypeTextItem: num0, // 文书号
          cellIdx1: num1, // 文书号
          cellIdx1TypeTextItem: num1, // 文书号
          cellIdx2: num3, // 文书号
          cellIdx2TypeTextItem: num3, // 文书号
          cellIdx3: num4, // 文书号
          cellIdx3TypeTextItem: num4, // 文书号
          cellIdx4: corp.corpName, // 单位
          cellIdx4TypeTextItem: corp.corpName, // 单位
          cellIdx5: null, // 单位
          cellIdx6: null, // 单位/个人
          cellIdx7: cellIdx7String, // 违法行为
          cellIdx8: null, // 年
          cellIdx9: null, // 月
          cellIdx10: null, // 日
          cellIdx11: null, // 时
          cellIdx12: cellIdx12String, // 地点
          cellIdx12TypeTextItem: cellIdx12String, // 地点
          cellIdx13: null, // 公开/不公开
          cellIdx14: null, // 单位/个人
          cellIdx15: null, // 听证主持人姓名
          cellIdx16: null, // 职务
          cellIdx17: null, // 听证员姓名
          cellIdx18: null, // 职务
          cellIdx19: null, // 听证员姓名
          cellIdx20: null, // 签名
          cellIdx21: null, // 录人姓名
          cellIdx22: null, // 职务
          cellIdx23: null, // 单位/个人
          cellIdx24: null, // 单位
          cellIdx25: null, // 单位
          cellIdx26: null, // 单位
          cellIdx27: null, // 单位
          cellIdx28: null, // 签收人（签名）
          cellIdx29: null, // 日期
          cellIdx30: null, // 单位
          cellIdx31: cellIdx31String, // 地址
          cellIdx31TypeTextItem: cellIdx31String, // 地址
          cellIdx32: cellIdx32String, // 邮政编码
          cellIdx32TypeTextItem: cellIdx32String, // 邮政编码
          cellIdx33: null, // 单位
          cellIdx34: cellIdx34String, // 联系人
          cellIdx34TypeTextItem: cellIdx34String, // 联系人
          cellIdx35: cellIdx35String, // 联系电话
          cellIdx35TypeTextItem: cellIdx35String, // 联系电话
          cellIdx36: null, // 年
          cellIdx37: null, // 月
          cellIdx38: null, // 日
          cellIdx39: null, // 单位/个人
          dangerItemObject: let101DataPapaerContent.dangerItemObject,
        };
      }
      await db.close();
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
        if (key === "cellIdx7") {
          this.options[key] = {
            page: "28",
            key: key,
            spellString: this.extraData,
          };
          dataKey = "dangerItemObject";
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
    confirm() {
      // 选择单位或个人
      this.visible = false;
      this.letData.cellIdx6 = this.selectedType;
      this.letData.cellIdx6TypeTextItem = this.selectedType;
      this.letData.cellIdx14 = this.selectedType;
      this.letData.cellIdx14TypeTextItem = this.selectedType;
      this.letData.cellIdx23 = this.selectedType;
      this.letData.cellIdx23TypeTextItem = this.selectedType;
      this.letData.cellIdx39 = this.selectedType;
      this.letData.cellIdx39TypeTextItem = this.selectedType;
      this.letData.selectedType = this.selectedType;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/let";
</style>