<!-- 现场检查 实施检查 停供电(停供民用爆炸物品)函告书 -->
<template>
  <div style="width: 100%; height: 100%;">
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
            <div class="textAlignCenter formHeader0">煤矿安全监管行政执法文书</div>
            <div class="textAlignLeft formHeader3">
              <table class="docBody">
                <tr>
                  <td
                    class="cellInput"
                    id="cell_idx_0"
                    align="right"
                    style="width:55%"
                    data-title="停供电(停供民用爆炸物品)"
                    data-type="text"
                    data-src
                    @click="commandFill('cellIdx0', '停供电(停供民用爆炸物品)', 'TextItem')"
                  >{{ letData.cellIdx0 }}</td>
                  <td class="textAlignLeft">&nbsp;函告书</td>
                </tr>
              </table>
            </div>
            <div class="stdRowH"></div>
            <table class="docBody">
               <tr>
                <td
                  class="cellInput "
                  id="cell_idx_1"
                  align="right"
                  style="width:40%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx1', '', 'TextItem')"
                  >{{ letData.cellIdx1 }}</td>
                   <td class="textAlignLeft">（</td>
                  <td
                  class="cellInput "
                  id="cell_idx_2"
                  align="center"
                  style="width:15%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx2', '', 'TextItem')"
                  >{{ letData.cellIdx2 }}</td>
                  <td class="textAlignLeft">）</td>
                <td class="textAlignLeft ">煤安停</td>
                <td class="textAlignLeft ">〔</td>
                <td
                  class="cellInput "
                  id="cell_idx_3"
                  align="center"
                  style="width:8%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx3', '', 'TextItem')"
                  >{{ letData.cellIdx3 }}</td>
                <td class="textAlignLeft ">〕</td>
                <td
                  class="cellInput "
                  id="cell_idx_4"
                  align="center"
                  style="width:10%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx4', '', 'TextItem')"
                  >{{ letData.cellIdx4}}</td>
                <td class="textAlignLeft ">号&nbsp;&nbsp;</td>
              </tr>
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
              进行安全监察中发现存在重大事故隐患，依法作出
              <span
                @click="commandFill('cellIdx7', '', 'TextItem')"
              >{{ letData.cellIdx7 ? letData.cellIdx7 : '（点击编辑）'}}</span>
              的决定，但该单位拒不执行该决定，未及时消除安全隐患，现有发生生产安全事故的危险。根据《中华人民共和国安全生产法》第六十七条第一款规定，请贵单位对其采取
              <span style="borderBottom:none"
                @click="commandFill('cellIdx8', '停供电(停供民用爆炸物品)', 'TextItem')"
              >{{ letData.cellIdx8 ? letData.cellIdx8 : '（点击编辑）'}}</span>
              的措施。
            </div>


            <table style="border:solid 0px #000;" class="docBody">

            </table>
            <table height="30"></table>
            <table height="30"></table>
            <table class="docBody">
              <tr>
                <td
                  class="textAlignLeft" style="width:21%"
                >受送达人（签名）：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_9"
                  style="width:30%"
                  data-title="受送达人（签名）"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx9', '受送达人（签名）', 'TextItem')"
                >{{ letData.cellIdx9 }}</td>
                <td class="textAlignLeft" style="width:15%">&nbsp;&nbsp;&nbsp;日&nbsp;&nbsp;&nbsp;&nbsp;期：&nbsp;</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_10"
                  style="width:34%"
                  data-title="日期"
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx10', '日期', 'DateItem')"
                >{{ letData.cellIdx10 }}</td>
              </tr>
              <tr>
                <td
                  class="textAlignLeft" style="width:15%"
                >执法机关地址:</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_11"
                  align="center"
                  style="width:37%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx11', '执法机关地址', 'TextItem')"
                >{{ letData.cellIdx11 }}</td>

                <td class="textAlignLeft" style="width:14%">&nbsp;&nbsp;邮政编码：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_12"
                  style="width:34%"
                  data-title="邮政编码"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx12', '邮政编码', 'TextItem')"
                >{{ letData.cellIdx12 }}</td>
              </tr>
              <tr>
                <td
                  class="textAlignLeft" style="width:18%"
                >执法机关联系人：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_13"
                  align="center"
                  style="width:34%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx13', '执法机关联系人', 'TextItem')"
                >{{ letData.cellIdx13 }}</td>

                <td class="textAlignLeft" style="width:14%">&nbsp;&nbsp;联系电话：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_14"
                  style="width:34%"
                  data-title="联系电话"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx14', '联系电话', 'TextItem')"
                >{{ letData.cellIdx14 }}</td>
              </tr>
            </table>
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

            <table>
              <hr />
              <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;备注：本文书一式三份，一份交</td>
              <td
                class="cellInput"
                id="cell_idx_17"
                align="center"
                style="width:20%"
                data-title
                data-type="text"
                data-src
                @click="commandFill('cellIdx17', '', 'TextItem')"
                >{{ letData.cellIdx17 }}</td>
              <td class="textAlignLeft">，一份交煤矿，一份存档。</td>
            </table>
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
  </div>
</template>

<script>
import letMain from "@/views/make-law-writ/components/let-main.vue";
import GoDB from "@/utils/godb.min.js";
import { getDocNumber } from '@/utils/setInitPaperData'
export default {
  name: "Let112",
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
      options: {},
      editData: {}, // 回显数据
      visible: false,
      selectedType: '停供电', // 初始化时选择的停供电
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
      // 初始化文书内容
      const db = new GoDB(this.$store.state.DBName);
      const corpBase = db.table("corpBase");
      //查询符合条件的记录
      const corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      const wkPaper = db.table("wkPaper");
      const caseId = this.corpData.caseId;
      //查询当前计划是否已做文书
      const checkPaper = await wkPaper.findAll((item) => {
        return (
          item.caseId === caseId && item.paperType === this.docData.docTypeNo && item.delFlag !== '1'
        );
      });
      // 已做文书则展示文书内容，否则创建初始版本
      if (checkPaper.length > 0) {
        // 回显
        this.letData = JSON.parse(checkPaper[0].paperContent);
        this.editData = checkPaper[0];
      } else {
        // 创建初始版本
        // 1.弹出提示框，选择停供电或停供民用爆炸物品
        this.visible = true
        // 2.生成文书编号
        let { num0, num1, num3, num4 } = await getDocNumber(db, this.docData.docTypeNo, caseId, this.$store.state.user)
        // 3.sysOfficeInfo实体中 地址：depAddress、邮政编码：depPost、联系人：master、联系电话：phone
        const orgInfo = db.table("orgInfo");
        const orgData = await orgInfo.find(item => item.no === this.$store.state.user.userGroupId)
        let orgSysOfficeInfo = orgData ? JSON.parse(orgData.sysOfficeInfo) : {depAddress: '', depPost: '', master: '', phone: ''}
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
          cellIdx5: corp.corpName, // 单位
          cellIdx5TypeTextItem: corp.corpName, // 单位
          cellIdx6: null, // 本机关在对XXX进行安全监察中发现
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
      this.visible = false
      this.letData.cellIdx0 = this.selectedType
      this.letData.cellIdx0TypeTextItem = this.selectedType
      this.letData.cellIdx8 = this.selectedType
      this.letData.cellIdx8TypeTextItem = this.selectedType
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/let";
</style>