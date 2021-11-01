<!-- 现场检查 实施检查 停供电(停供民用爆炸物品)决定书 56 -->
<template>
  <div style="width: 100%; height: 100%">
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
            </div>
            <div class="textAlignCenter formHeader1">
              <table class="docBody">
                <tr>
                  <td
                    class="cellInput"
                    id="cell_idx_0"
                    data-title="停供电(停供民用爆炸物品)"
                    data-type="text"
                    data-src
                  >
                    {{ letData.cellIdx0 }}
                  </td>
                  <td class="textAlignLeft">决定书</td>
                </tr>
              </table>
            </div>
            <div class="docTextLine paper-number-div">
              <div>
                <span @click="commandFill('cellIdx1', '文书号', 'TextItem')">{{
                  letData.cellIdx1 ? letData.cellIdx1 : "（编辑）"
                }}</span>
                <label>（</label>
                <span @click="commandFill('cellIdx2', '文书号', 'TextItem')">{{
                  letData.cellIdx2 ? letData.cellIdx2 : "（编辑）"
                }}</span>
                <label>）煤安停</label>
                <span>{{
                  letData.cellIdx3 ? letData.cellIdx3 : "（编辑）"
                }}</span>
                <label>决〔</label>
                <span @click="commandFill('cellIdx4', '文书号', 'TextItem')">{{
                  letData.cellIdx4 ? letData.cellIdx4 : "（编辑）"
                }}</span>
                <label>〕</label>
                <span @click="commandFill('cellIdx5', '文书号', 'TextItem')">{{
                  letData.cellIdx5 ? letData.cellIdx5 : "（编辑）"
                }}</span>
                <label>号</label>
              </div>
            </div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_6"
                  style="width: 62%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx6', '', 'TextItem')"
                >
                  {{ letData.cellIdx6 }}
                </td>
                <td class="textAlignLeft">:</td>
              </tr>
            </table>
            <div class="docTextarea">
              <label style="width: 5%"></label>
              因你单位存在重大事故隐患，本机关于
              <span @click="commandFill('cellIdx7', '年', 'TextItem')">{{
                letData.cellIdx7 ? letData.cellIdx7 : "（XX）"
              }}</span>
              年
              <span @click="commandFill('cellIdx8', '月', 'TextItem')">{{
                letData.cellIdx8 ? letData.cellIdx8 : "（XX）"
              }}</span>
              月
              <span @click="commandFill('cellIdx9', '', 'TextItem')">{{
                letData.cellIdx9 ? letData.cellIdx9 : "（XX）"
              }}</span>
              日依法对你单位作出
              <span>{{
                letData.cellIdx10 ? letData.cellIdx10 : "（点击编辑）"
              }}</span>
              的决定，但你单位未执行以上决定，未及时消除事故隐患，存在发生生产安全事故的危险。根据《中华人民共和国安全生产法》第六十七条第一款规定，本机关决定自
              <span
                @click="commandFill('cellIdx11', '', 'TextItem')">{{
                letData.cellIdx11 ? letData.cellIdx11 : "（XX）"
              }}</span>
              年
              <span 
                @click="commandFill('cellIdx12', '', 'TextItem')">{{
                letData.cellIdx12 ? letData.cellIdx12 : "（XX）"
              }}</span>
              月
              <span 
                @click="commandFill('cellIdx13', '', 'TextItem')">{{
                letData.cellIdx13 ? letData.cellIdx13 : "（XX）"
              }}</span>
              日
              <span 
                @click="commandFill('cellIdx14', '', 'TextItem')">{{
                letData.cellIdx14 ? letData.cellIdx14 : "（XX）"
              }}</span>
              时
              <span 
                @click="commandFill('cellIdx15', '', 'TextItem')">{{
                letData.cellIdx15 ? letData.cellIdx15 : "（XX）"
              }}</span>
              分起，对你单位采取
              <span
                class="no-underline"
                >{{
                  letData.cellIdx16 ? letData.cellIdx16 : "（点击编辑）"
                }}</span
              >
              的措施，强制你单位履行决定。
            </div>
            <div class="docTextarea">
              <label style="width:5%"></label>
              你单位依法履行行政决定、采取相应措施消除事故隐患，本机关将及时通知有关单位解除上述有关措施。
            </div>
            <div class="docTextarea">
              <label style="width:5%"></label>
              如果不服本决定，可在接到本决定书之日起60日内向
              <span
                @click="commandFill('cellIdx17', '人民政府', 'TextItem')"
              >{{ letData.cellIdx17 ? letData.cellIdx17 : '（点击编辑）'}}</span>
              人民政府或者
              <span
                @click="commandFill('cellIdx18', '', 'TextItem')"
              >{{ letData.cellIdx18 ? letData.cellIdx18 : '（点击编辑）' }}</span>
              申请行政复议，或者在6个月内依法向
              <span
                @click="commandFill('cellIdx19', '', 'TextItem')"
              >{{ letData.cellIdx19 ? letData.cellIdx19 : '（点击编辑）'}}</span>
              人民法院提起行政诉讼；复议、诉讼期间，不停止执行本决定。
            </div>
            <table class="docBody" style="margin-top: 30px;">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_20"
                  align="right"
                  style="width: 95%"
                  @click="commandFill('cellIdx20', '', 'TextItem')"
                >
                  {{ letData.cellIdx20 ? letData.cellIdx20 : "（点击编辑）" }}
                </td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_21"
                  align="right"
                  style="width: 95%"
                  data-title
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx21', '日期', 'DateItem')"
                >
                  {{ letData.cellIdx21 ? letData.cellIdx21 : "（点击编辑）" }}
                </td>
              </tr>
            </table>
            <div class="docTextarea" style="border-top: 2px solid #000;">
              备注：本文书一式两份，一份交煤矿，一份存档。
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
      :show-close="false"
    >
      <span>请选择：</span>
      <el-radio-group v-model="selectedType">
        <el-radio label="停供电">停供电</el-radio>
        <el-radio label="停供民用爆炸物品">停供民用爆炸物品</el-radio>
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
import { getDocNumber } from "@/utils/setInitPaperData";
import associationSelectPaper from "@/components/association-select-paper";
export default {
  name: "Let111",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {},
      options: {},
      editData: {}, // 回显数据
      visibleSelectDialog: false,
      selectedType: "停供电",
      associationPaper: [],
    };
  },
  methods: {
    async initLetData(selectedPaper) {
      const db = new GoDB(this.$store.state.DBName);
      const corpBase = db.table("corpBase");
      const corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      // 1.选择：
      this.visibleSelectDialog = true;
      // 2.文书编号
      let { num0, num1, num3, num4 } = await getDocNumber(
        db,
        this.docData.docTypeNo,
        this.corpData.caseId,
        this.$store.state.user
      );
      // 3.sysOfficeInfo实体中organName字段+ courtPrefix字段
      const orgInfo = db.table("orgInfo");
      const orgData = await orgInfo.find(
        (item) => item.no === this.$store.state.user.userGroupId
      );
      let orgSysOfficeInfo =
        orgData && orgData.sysOfficeInfo
          ? JSON.parse(orgData.sysOfficeInfo)
          : { organName: "", depAddress: "" };
      // 4.年、月、日取当前时间
      let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let strDate = date.getDate();
      await db.close();
      this.letData = {
        cellIdx0: null, // 停供电(停供民用爆炸物品)
        cellIdx1: num0, // 文书号
        cellIdx1TypeTextItem: num0, // 文书号
        cellIdx2: num1, // 文书号
        cellIdx2TypeTextItem: num1, // 文书号
        cellIdx3: null, // 停供电(停供民用爆炸物品)
        cellIdx4: num3, // 文书号
        cellIdx4TypeTextItem: num3, // 文书号
        cellIdx5: num4, // 文书号
        cellIdx5TypeTextItem: num4, // 文书号
        cellIdx6: corp.corpName, // corpName
        cellIdx6TypeTextItem: corp.corpName, // corpName
        cellIdx7: year, // 年
        cellIdx7TypeTextItem: year, // 年
        cellIdx8: month, // 月
        cellIdx8TypeTextItem: month, // 月
        cellIdx9: strDate, // 日
        cellIdx9TypeTextItem: strDate, // 日
        cellIdx10: null, // 依法对你单位作出XXX的决定
        cellIdx11: null, // 年
        cellIdx12: null, // 月
        cellIdx13: null, // 日
        cellIdx14: null, // 时
        cellIdx15: null, // 分
        cellIdx16: null, // 采取XX的措施
        cellIdx17: orgSysOfficeInfo.goverPrefix, // 人民政府
        cellIdx17TypeTextItem: orgSysOfficeInfo.courtPrefix, // 人民政府
        cellIdx18: orgSysOfficeInfo.organName, //
        cellIdx18TypeTextItem: orgSysOfficeInfo.organName, //
        cellIdx19: orgSysOfficeInfo.courtPrefix, // 人民法院
        cellIdx19TypeTextItem: orgSysOfficeInfo.courtPrefix, // 人民法院
        cellIdx20: this.$store.state.curCase.groupName, //
        cellIdx20TypeTextItem: this.$store.state.curCase.groupName, //
        cellIdx21: this.todayDate, // 日期
        cellIdx21TypeDateItem: this.todayDate, // 日期
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
    confirm() {
      // 选择停供电(停供民用爆炸物品)
      this.visibleSelectDialog = false;
      this.letData.cellIdx0 = this.selectedType;
      this.letData.cellIdx0TypeTextItem = this.selectedType;
      this.letData.cellIdx3 = this.selectedType === '停供电' ? '电' : '爆';
      this.letData.cellIdx3TypeTextItem = this.selectedType === '停供电' ? '电' : '爆';
      this.letData.cellIdx10 = this.selectedType;
      this.letData.cellIdx10TypeTextItem = this.selectedType;
      this.letData.cellIdx16 = this.selectedType === '停供电' ? '停供生产性用电' : '停供民用爆炸物品';
      this.letData.cellIdx16TypeTextItem = this.selectedType === '停供电' ? '停供生产性用电' : '停供民用爆炸物品';
      this.letData.selectedType = this.selectedType;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/let";
</style>