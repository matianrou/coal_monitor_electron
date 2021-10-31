<!--行政处罚 听证程序 听证通知书 28 -->
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
            <div class="textAlignCenter formHeader0">
              煤矿安全监管行政执法文书
              <br />
            </div>
            <div class="textAlignCenter formHeader1">听证通知书</div>
            <div class="docTextLine paper-number-div">
              <div>
                <span
                  @click="commandFill('cellIdx0', '文书号', 'TextItem')"
                >{{ letData.cellIdx0 ? letData.cellIdx0 : '（编辑）' }}</span>
                <label>（</label>
                <span
                  @click="commandFill('cellIdx1', '文书号', 'TextItem')"
                >{{ letData.cellIdx1 ? letData.cellIdx1 : '（编辑）' }}</span>
                <label>）煤安听〔</label>
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
                  id="cell_idx_4"
                  align="center"
                  style="width:60%"
                  data-title=""
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx4', '', 'TextItem')"
                >{{letData.cellIdx4}}</td>
                <td class="textAlignLeft ">：</td>
              </tr>
            </table>
            <div class="docTextarea">
              <label style="width: 2em"></label>
              本机关根据你
              <span
                class="no-underline"
              >{{ letData.cellIdx6 ? letData.cellIdx6 : '（点击编辑）' }}</span>
              申请，关于
              <span
                @click="commandFill('cellIdx7', '违法行为', 'DangerTable')"
              >{{ letData.cellIdx7 ? letData.cellIdx7 : '（点击编辑）'}}</span>
              ，现定于
              <span
                class="center"
                @click="commandFill('cellIdx8', '年', 'TextItem')"
              >{{ letData.cellIdx8 ? letData.cellIdx8 : '（XX）'}}</span>
              年
              <span
                class="center"
                @click="commandFill('cellIdx9', '月', 'TextItem')"
              >{{ letData.cellIdx9 ? letData.cellIdx9 : '（XX）'}}</span>
              月
              <span
                class="center"
                @click="commandFill('cellIdx10', '日', 'TextItem')"
              >{{ letData.cellIdx10 ? letData.cellIdx10 : '（XX）'}}</span>
              日
              <span
                class="center"
                @click="commandFill('cellIdx11', '时', 'TextItem')"
              >{{ letData.cellIdx11 ? letData.cellIdx11 : '（XX）'}}</span>
              时在
              <span
                @click="commandFill('cellIdx12', '地点', 'TextItem')"
              >{{ letData.cellIdx12 ? letData.cellIdx12 : '（点击编辑）'}}</span>
              （
              <span
                class="no-underline"
                @click="commandFill('cellIdx13', '公开/不公开', 'SelectItem')"
              >{{ letData.cellIdx13 ? letData.cellIdx13 : '（点击编辑）'}}</span>
              ）举行听证会议，请你
              <span
                class="no-underline"
              >{{ letData.cellIdx14 ? letData.cellIdx14 : '（点击编辑）'}}</span>
              准时参加。
            </div>
            <div class="docTextLine">
              <label style="width: 2em"></label>
              <div style="flex: 1; display: flex;">
                <label>听证主持人姓名：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx15', '听证主持人姓名', 'TextItem')"
                >{{ letData.cellIdx15 ? letData.cellIdx15 : '（点击编辑）' }}</div>
              </div>
              <div style="flex: 1; display: flex;">
                <label>&nbsp;&nbsp;职务：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx16', '职务', 'TextItem')"
                >{{ letData.cellIdx16 ? letData.cellIdx16 : '（点击编辑）' }}</div>
              </div>
            </div>
            <div class="docTextLine">
              <label style="width: 2em"></label>
              <div style="flex: 1; display: flex;">
                <label>听 证 员 姓 名：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx17', '听证员姓名', 'TextItem')"
                >{{ letData.cellIdx17 ? letData.cellIdx17 : '（点击编辑）' }}</div>
              </div>
              <div style="flex: 1; display: flex;">
                <label>&nbsp;&nbsp;职务：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx18', '职务', 'TextItem')"
                >{{ letData.cellIdx18 ? letData.cellIdx18 : '（点击编辑）' }}</div>
              </div>
            </div>
            <div class="docTextLine">
              <label style="width: 2em"></label>
              <div style="flex: 1; display: flex;">
                <label>听 证 员 姓 名：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx19', '听证员姓名', 'TextItem')"
                >{{ letData.cellIdx19 ? letData.cellIdx19 : '（点击编辑）' }}</div>
              </div>
              <div style="flex: 1; display: flex;">
                <label>&nbsp;&nbsp;职务：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx20', '职务', 'TextItem')"
                >{{ letData.cellIdx20 ? letData.cellIdx20 : '（点击编辑）' }}</div>
              </div>
            </div>
            <div class="docTextLine">
              <label style="width: 2em"></label>
              <div style="flex: 1; display: flex;">
                <label>记 录 人 姓 名：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx21', '记录人姓名', 'TextItem')"
                >{{ letData.cellIdx21 ? letData.cellIdx21 : '（点击编辑）' }}</div>
              </div>
              <div style="flex: 1; display: flex;">
                <label>&nbsp;&nbsp;职务：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx22', '职务', 'TextItem')"
                >{{ letData.cellIdx22 ? letData.cellIdx22 : '（点击编辑）' }}</div>
              </div>
            </div>
            <div class="docTextarea">
              <label style="width: 2em"></label>
              根据《中华人民共和国行政处罚法》第六十四条规定，你
              <span
                class="no-underline"
              >{{ letData.cellIdx23 ? letData.cellIdx23 : '（点击编辑）'}}</span>
              可以申请听证主持人回避。有关事项告知如下：
            </div>
            <div class="docTextarea">
              <label style="width: 2em"></label>
              1. 请事先准备相关证据，通知证人或委托代理人准时参加；无正当理由拒不出席听证或者未经许可中途退出听证的，视为放弃听证权利，本机关将终止听证。
            </div>
            <div class="docTextarea">
              <label style="width: 2em"></label>
              2. 委托代理人参加听证的，应当在听证会前向本机关提交授权委托书等有关证明。
            </div>
            <div class="docTextarea">
              <label style="width: 2em"></label>
              3. 申请延期举行的，应当在举行听证会至少三日前向本机关提出，由本机关决定是否延期。
            </div>
            <!-- <table style="border:solid 0 #000;" class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_24"
                  align="center"
                  style="width:10%"
                  data-title="单位"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx24', '单位', 'TextItem')"
                >{{letData.cellIdx24}}</td>
              </tr>
            </table> -->
            <div class="docTextLine">
              <label style="width: 2em"></label>
              <div style="flex: 1; display: flex;">
                <label>受送达人（签名）：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx25', '受送达人（签名）', 'TextItem')"
                >{{ letData.cellIdx25 ? letData.cellIdx25 : '（点击编辑）' }}</div>
              </div>
              <div style="flex: 1; display: flex;">
                <label>&nbsp;&nbsp;日&nbsp;&nbsp;&nbsp;&nbsp;期：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx26', '日期', 'DateItem')"
                >{{ letData.cellIdx26 ? letData.cellIdx26 : '（点击编辑）' }}</div>
              </div>
            </div>
            <div class="docTextLine">
              <label style="width: 2em"></label>
              <div style="flex: 1; display: flex;">
                <label>执法机关地址：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx27', '执法机关地址', 'TextItem')"
                >{{ letData.cellIdx27 ? letData.cellIdx27 : '（点击编辑）' }}</div>
              </div>
              <div style="flex: 1; display: flex;">
                <label>&nbsp;&nbsp;邮政编码：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx28', '邮政编码', 'TextItem')"
                >{{ letData.cellIdx28 ? letData.cellIdx28 : '（点击编辑）' }}</div>
              </div>
            </div>
            <div class="docTextLine">
              <label style="width: 2em"></label>
              <div style="flex: 1; display: flex;">
                <label>执法机关联系人：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx29', '执法机关联系人', 'TextItem')"
                >{{ letData.cellIdx29 ? letData.cellIdx29 : '（点击编辑）' }}</div>
              </div>
              <div style="flex: 1; display: flex;">
                <label>&nbsp;&nbsp;联系电话：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx30', '联系电话', 'TextItem')"
                >{{ letData.cellIdx30 ? letData.cellIdx30 : '（点击编辑）' }}</div>
              </div>
            </div>
            <table class="docBody" style="margin-top: 30px;">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_31"
                  align="right"
                  style="width:95%"
                  @click="commandFill('cellIdx31', '', 'TextItem')"
                >{{letData.cellIdx31 ? letData.cellIdx31 : '（点击编辑）'}}</td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_32"
                  align="right"
                  style="width:95%"
                  data-title
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx32', '日期', 'DateItem')"
                >{{letData.cellIdx32 ? letData.cellIdx32: '（点击编辑）'}}</td>
              </tr>
            </table>
            <div class="docTextarea" style="border-top: 2px solid #000;">
              备注：本文书一式两份，一份交听证申请人，一份存档。
            </div>
          </div>
        </div>
      </div>
    </let-main>
    <el-dialog
      title="文书信息选择"
      :close-on-click-modal="false"
      append-to-body
      :visible="visibleSelectDialog"
      width="400px"
      :show-close="false">
      <span>请选择：</span>
      <el-radio-group v-model="selectedType">
        <el-radio label="单位">单位</el-radio>
        <el-radio label="个人">个人</el-radio>
      </el-radio-group>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="confirm">确定</el-button>
      </span>
    </el-dialog>
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
import { getDangerObject, getDocNumber } from '@/utils/setInitPaperData'
import associationSelectPaper from '@/components/association-select-paper'
export default {
  name: "Let209",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {},
      options: {
        cellIdx7: {
          page: '28',
          key: 'cellIdx7'
        },
        cellIdx13: [
          {
            value: '公开',
            name: '公开',
          },
          {
            value: '不公开',
            name: '不公开',
          },
        ]
      },
      visibleSelectDialog: false,
      selectedType: '单位', // 初始化时选择的单位或个人
      associationPaper: ['1']
    };
  },
  methods: {
    async initLetData (selectedPaper) {
      const db = new GoDB(this.$store.state.DBName);
      const corpBase = db.table("corpBase");
      const corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      // 1.弹出提示框，选择单位或个人
      this.visibleSelectDialog = true
      // 2.生成文书编号
      let { num0, num1, num3, num4 } = await getDocNumber(db, this.docData.docTypeNo, this.corpData.caseId, this.$store.state.user)
      // 3.企业煤矿名称
      // 4.违法行为：获取笔录文书中的隐患数据
      let let1DataPapaerContent = JSON.parse(selectedPaper.let1Data.paperContent)
      let dangerObject = getDangerObject(let1DataPapaerContent.DangerTable.tableData)
      let cellIdx7String = `${corp.corpName}涉嫌${dangerObject.dangerString}案。`
      // 5.地点：sysOfficeInfo实体中depAddress字段+ deparFullname字段
      // 地址：depAddress、邮政编码：depPost、联系人：master、联系电话：phone
      const orgInfo = db.table("orgInfo");
      const orgData = await orgInfo.find(item => item.no === this.$store.state.user.userGroupId)
      let orgSysOfficeInfo = orgData && orgData.sysOfficeInfo ? JSON.parse(orgData.sysOfficeInfo) : {depAddress: '', depPost: '', master: '', phone: '', deparFullname: '' }
      let cellIdx12String = `${orgSysOfficeInfo.depAddress}${orgSysOfficeInfo.deparFullname}`
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
        cellIdx20: null, // 职务
        cellIdx21: null, // 记录人姓名
        cellIdx22: null, // 职务
        cellIdx23: null, // 单位/个人
        cellIdx24: null, // 单位 ？
        cellIdx25: null, // 受送达人（签名）
        cellIdx26: null, // 日期
        cellIdx27: orgSysOfficeInfo.depAddress, // 执法机关地址
        cellIdx27TypeTextItem: orgSysOfficeInfo.depAddress, // 执法机关地址
        cellIdx28: orgSysOfficeInfo.depPost, // 邮政编码
        cellIdx28TypeTextItem: orgSysOfficeInfo.depPost, // 邮政编码
        cellIdx29: orgSysOfficeInfo.master, // 执法机关联系人
        cellIdx29TypeTextItem: orgSysOfficeInfo.master, // 执法机关联系人
        cellIdx30: orgSysOfficeInfo.phone, // 联系电话
        cellIdx30TypeTextItem: orgSysOfficeInfo.phone, // 地址
        cellIdx31: this.$store.state.curCase.groupName, //
        cellIdx31TypeTextItem: this.$store.state.curCase.groupName, //
        cellIdx32: this.todayDate, // 日期
        cellIdx32TypeDateItem: this.todayDate, // 日期
        DangerTable: let1DataPapaerContent.DangerTable,
        extraData: { // 保存额外拼写的数据内容，用于修改隐患项时回显使用
          corpName: corp.corpName,
          userGroupName: this.$store.state.user.userGroupName,
        }
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
        let dataKey = `${key}`;
        if (key === 'cellIdx7') {
          this.options[key] = {
            page: '28',
            key: key,
            spellString: this.letData.extraData
          }
          dataKey = 'DangerTable'
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
      this.visibleSelectDialog = false
      this.letData.cellIdx6 = this.selectedType
      this.letData.cellIdx6TypeTextItem = this.selectedType
      this.letData.cellIdx14 = this.selectedType
      this.letData.cellIdx14TypeTextItem = this.selectedType
      this.letData.cellIdx23 = this.selectedType
      this.letData.cellIdx23TypeTextItem = this.selectedType
      this.letData.selectedType = this.selectedType
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/let";
</style>