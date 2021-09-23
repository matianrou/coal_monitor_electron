<!-- 现场检查 实施检查 停供电(停供民用爆炸物品)函告书 -->
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
            <div class="textAlignCenter formHeader1">
              <table class="docBody">
                <tr>
                  <td
                    class="cellInput"
                    id="cell_idx_0"
                    data-title="停供电(停供民用爆炸物品)"
                    data-type="text"
                    data-src
                    @click="commandFill('cellIdx0', '停供电(停供民用爆炸物品)', 'TextItem')"
                  >{{ letData.cellIdx0 }}</td>
                  <td class="textAlignLeft">&nbsp;函告书</td>
                </tr>
              </table>
            </div>
            <div class="docTextLine paper-number-div">
              <div>
                <span
                  @click="commandFill('cellIdx1', '', 'TextItem')"
                >{{ letData.cellIdx1 ? letData.cellIdx1 : '（编辑）' }}</span>
                <label>(</label>
                <span
                  @click="commandFill('cellIdx2', '', 'TextItem')"
                >{{ letData.cellIdx2 ? letData.cellIdx2 : '（编辑）' }}</span>
                <label>） 煤安停〔</label>
                <span
                  @click="commandFill('cellIdx3', '', 'TextItem')"
                >{{ letData.cellIdx3 ? letData.cellIdx3 : '（编辑）' }}</span>
                <label>〕</label>
                <span
                  @click="commandFill('cellIdx4', '', 'TextItem')"
                >{{ letData.cellIdx4 ? letData.cellIdx4 : '（编辑）' }}</span>
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
              本机关在对
              <span
                @click="commandFill('cellIdx6', '', 'TextItem')"
              >{{ letData.cellIdx6 ? letData.cellIdx6 : '（点击编辑）'}}</span>
              进行安全检查中发现存在重大事故隐患，依法作出
              <span
                @click="commandFill('cellIdx7', '', 'TextItem')"
              >{{ letData.cellIdx7 ? letData.cellIdx7 : '（点击编辑）'}}</span>
              的决定，但该单位拒不执行此决定，未及时消除安全隐患，现有发生生产安全事故的危险。根据《中华人民共和国安全生产法》第六十七条第一款规定，请贵单位对其采取
              <span style="borderBottom:none"
                @click="commandFill('cellIdx8', '停供电(停供民用爆炸物品)', 'TextItem')"
              >{{ letData.cellIdx8 ? letData.cellIdx8 : '（点击编辑）'}}</span>
              的措施。
            </div>
            <table style="border:solid 0px #000;" class="docBody">
            </table>
            <table height="60"></table>
            <div class="docTextLine">
              <div style="flex: 1; display: flex;">
                <label>受送达人（签名）：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx9', '受送达人（签名）', 'TextItem')"
                >{{ letData.cellIdx9 ? letData.cellIdx9 : '（点击编辑）' }}</div>
              </div>
              <div style="flex: 1; display: flex;">
                <label>&nbsp;&nbsp;&nbsp;日&nbsp;&nbsp;&nbsp;&nbsp;期：&nbsp;</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx10', '日期', 'DateItem')"
                >{{ letData.cellIdx10 ? letData.cellIdx10 : '（点击编辑）' }}</div>
              </div>
            </div>
            <div class="docTextLine">
              <div style="flex: 1; display: flex;">
                <label>执法机关地址：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx11', '执法机关地址', 'TextItem')"
                >{{ letData.cellIdx11 ? letData.cellIdx11 : '（点击编辑）' }}</div>
              </div>
              <div style="flex: 1; display: flex;">
                <label>&nbsp;&nbsp;邮政编码：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx12', '邮政编码', 'TextItem')"
                >{{ letData.cellIdx12 ? letData.cellIdx12 : '（点击编辑）' }}</div>
              </div>
            </div>
            <div class="docTextLine">
              <div style="flex: 1; display: flex;">
                <label>执法机关联系人：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx13', '执法机关联系人', 'TextItem')"
                >{{ letData.cellIdx13 ? letData.cellIdx13 : '（点击编辑）' }}</div>
              </div>
              <div style="flex: 1; display: flex;">
                <label>&nbsp;&nbsp;联系电话：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx14', '联系电话', 'TextItem')"
                >{{ letData.cellIdx14 ? letData.cellIdx14 : '（点击编辑）' }}</div>
              </div>
            </div>
            <table height="30"></table>
             <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_15"
                  align="right"
                  style="width:95%"
                  @click="commandFill('cellIdx15', '', 'TextItem')"
                >{{letData.cellIdx15 ? letData.cellIdx15 : '（点击编辑）'}}</td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_16"
                  align="right"
                  style="width:95%"
                  data-title
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx16', '日期', 'DateItem')"
                >{{letData.cellIdx16 ? letData.cellIdx16 : '（点击编辑）'}}</td>
              </tr>
            </table>
            <table height="60"></table>
            <div class="docTextarea cellLine">
              <label style="width: 5%"></label>
              备注：本文书一式三份，一份交
              <span
                style="borderBottom:none"
                @click="commandFill('cellIdx17', '', 'TextItem')"
              >{{ letData.cellIdx17 ? letData.cellIdx17 : '（点击编辑）'}}</span>
              ，一份交煤矿，一份存档。 
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
import { getDocNumber } from '@/utils/setInitPaperData'
import associationSelectPaper from '@/components/association-select-paper'
export default {
  name: "Let112",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {},
      options: {},
      editData: {}, // 回显数据
      visibleSelectDialog: false,
      selectedType: '停供电', // 初始化时选择的停供电
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
      // 1.弹出提示框，选择停供电或停供民用爆炸物品
      this.visibleSelectDialog = true
      // 2.生成文书编号
      let { num0, num1, num3, num4 } = await getDocNumber(db, this.docData.docTypeNo, this.corpData.caseId, this.$store.state.user)
      // 3.sysOfficeInfo实体中 地址：depAddress、邮政编码：depPost、联系人：master、联系电话：phone
      const orgInfo = db.table("orgInfo");
      const orgData = await orgInfo.find(item => item.no === this.$store.state.user.userGroupId)
      let orgSysOfficeInfo = orgData && orgData.sysOfficeInfo ? JSON.parse(orgData.sysOfficeInfo) : {depAddress: '', depPost: '', master: '', phone: ''}
      await db.close();
      this.letData = {
        cellIdx0: null, // 停供电(停供民用爆炸物品)
        cellIdx1: num0, // 文书号
        cellIdx1TypeTextItem: num0, // 文书号
        cellIdx2: num1, // 文书号
        cellIdx2TypeTextItem: num1, // 文书号
        cellIdx3: num3, // 文书号
        cellIdx3TypeTextItem: num3, // 文书号
        cellIdx4: num4, // 文书号
        cellIdx4TypeTextItem: num4, // 文书号
        cellIdx5: null, // 单位
        cellIdx6: corp.corpName, // 本机关在对XXX进行安全监察中发现
        cellIdx6TypeTextItem: corp.corpName, // 单位
        cellIdx7: null, // 依法作出XXX的决定
        cellIdx8: null, // 请贵单位对其采取XXX的措施。
        cellIdx9: null, // 受送达人（签名）
        cellIdx10: null, // 日期
        cellIdx11: orgSysOfficeInfo.depAddress, // 执法机关地址
        cellIdx11TypeTextItem: orgSysOfficeInfo.depAddress, // 执法机关地址
        cellIdx12: orgSysOfficeInfo.depPost, // 邮政编码
        cellIdx12TypeTextItem: orgSysOfficeInfo.depPost, // 邮政编码
        cellIdx13: orgSysOfficeInfo.master, // 执法机关联系人
        cellIdx13TypeTextItem: orgSysOfficeInfo.master, // 执法机关联系人
        cellIdx14: orgSysOfficeInfo.phone, // 联系电话
        cellIdx14TypeTextItem: orgSysOfficeInfo.phone, // 联系电话
        cellIdx15: null, //
        cellIdx16: null, // 日期
        cellIdx17: null, // 一份交XXX
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
    confirm() {
      // 选择停供电或停供民用爆炸物品
      this.visibleSelectDialog = false
      this.letData.cellIdx0 = this.selectedType
      this.letData.cellIdx0TypeTextItem = this.selectedType
      this.letData.cellIdx8 = this.selectedType === '停供电' ? '停供生产性用电' : '停供民用爆炸物品'
      this.letData.cellIdx8TypeTextItem = this.selectedType === '停供电' ? '停供生产性用电' : '停供民用爆炸物品'
      this.letData.selectedType = this.selectedType
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/let";
</style>