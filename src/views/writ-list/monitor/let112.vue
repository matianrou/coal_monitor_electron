<!-- 现场检查 实施检查 停供电(停供民用爆炸物品)通知书 -->
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
            <div class="textAlignCenter formHeader0">国 家 煤 矿 安 全 监 察</div>
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
                  <td class="textAlignLeft">&nbsp;通知书</td>
                </tr>
              </table>
            </div>
            <div class="stdRowH"></div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_1"
                  align="right"
                  style="width:50%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx1', '', 'TextItem')"
                >{{ letData.cellIdx1 }}</td>
                <td class="textAlignLeft cellBottomLine">煤安监</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_2"
                  align="center"
                  style="width:7%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx2', '', 'TextItem')"
                >{{ letData.cellIdx2 }}</td>
                <td class="textAlignLeft cellBottomLine">停〔</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_3"
                  align="center"
                  style="width:7%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx3', '', 'TextItem')"
                >{{ letData.cellIdx3 }}</td>
                <td class="textAlignLeft cellBottomLine">〕</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_4"
                  align="center"
                  style="width:7%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx4', '', 'TextItem')"
                >{{ letData.cellIdx4 }}</td>
                <td class="textAlignLeft cellBottomLine">号&nbsp;&nbsp;</td>
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
            <table style="border:solid 0px #000;" class="docBody">
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我</td>
                <td
                  class="cellInput"
                  id="cell_idx_6"
                  align="center"
                  style="width:8%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx6', '', 'TextItem')"
                >{{ letData.cellIdx6 }}</td>
                <td class="textAlignLeft">在对</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_7"
                  align="center"
                  style="width:30%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx7', '', 'TextItem')"
                >{{ letData.cellIdx7 }}</td>
                <td class="textAlignLeft">进行安全监察中发现存在重大</td>
              </tr>
              <tr>
                <td class="textAlignLeft">安全隐患，依法作出</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_8"
                  align="center"
                  style="width:30%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx8', '', 'TextItem')"
                >{{ letData.cellIdx8 }}</td>
                <td class="textAlignLeft">的决定，但该单位拒不执行该</td>
              </tr>
              <tr>
                <td class="textAlignLeft">决定，未及时消除安全隐患，现有发生生产安全事故的危险。根据《中华人民共和国</td>
              </tr>
              <tr>
                <td class="textAlignLeft">安全生产法》第六十七条第一款规定，请贵单位对其采取</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_9"
                  align="center"
                  style="width:30%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx9', '', 'TextItem')"
                >{{ letData.cellIdx9 }}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">的措施。</td>
              </tr>
            </table>
            <table height="30"></table>
            <!-- <table class="docBody">
    <tr>
        <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;附件：</td>
        <td class="cellInput" id="cell_idx_10"  style="width:80%"></td>
    </tr>
            </table>-->
            <table height="30"></table>
            <table class="docBody">
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;受送达人（签名）：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_11"
                  style="width:24%"
                  data-title="受送达人（签名）"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx11', '受送达人（签名）', 'TextItem')"
                >{{ letData.cellIdx11 }}</td>
                <td class="textAlignLeft">&nbsp;&nbsp;日&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;期：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_12"
                  style="width:24.6%"
                  data-title="日期"
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx12', '日期', 'DateItem')"
                >{{ letData.cellIdx12 }}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我</td>
                <td
                  class="cellInput"
                  id="cell_idx_13"
                  align="center"
                  style="width:8%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx13', '', 'TextItem')"
                >{{ letData.cellIdx13 }}</td>
                <td class="textAlignLeft">地址：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_14"
                  style="width:27.1%"
                  data-title="地址"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx14', '地址', 'TextItem')"
                >{{ letData.cellIdx14 }}</td>
                <td class="textAlignLeft">&nbsp;&nbsp;邮政编码：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_15"
                  style="width:24.8%"
                  data-title="邮政编码"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx15', '邮政编码', 'TextItem')"
                >{{ letData.cellIdx15 }}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我</td>
                <td
                  class="cellInput"
                  id="cell_idx_16"
                  align="center"
                  style="width:8%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx16', '', 'TextItem')"
                >{{ letData.cellIdx16 }}</td>
                <td class="textAlignLeft">联系人：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_17"
                  style="width:24.9%"
                  data-title="联系人"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx17', '联系人', 'TextItem')"
                >{{ letData.cellIdx17 }}</td>
                <td class="textAlignLeft">&nbsp;&nbsp;联系电话：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_18"
                  style="width:24.8%"
                  data-title="联系电话"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx18', '联系电话', 'TextItem')"
                >{{ letData.cellIdx18 }}</td>
              </tr>
            </table>
            <table height="60"></table>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_19"
                  align="right"
                  style="width:95%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx19', '', 'TextItem')"
                >{{ letData.cellIdx19 }}</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td class="cellInput" style="width:55%"></td>
                <td
                  class="cellInput"
                  id="cell_idx_20"
                  align="center"
                  style="width:45%"
                  data-title="日期"
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx20', '日期', 'DateItem')"
                >{{ letData.cellIdx20 }}</td>
              </tr>
            </table>
            <table height="60"></table>
            <table>
              <hr />
              <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;备注：本文书一式三份，一份交</td>
              <td
                class="cellInput"
                id="cell_idx_21"
                align="center"
                style="width:15%"
                data-title
                data-type="text"
                data-src
                @click="commandFill('cellIdx21', '', 'TextItem')"
                >{{ letData.cellIdx21 }}</td>
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
      const db = new GoDB(this.$store.state.DBName);
      const corpBase = db.table("corpBase");
      //查询符合条件的记录
      const corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      const wkPaper = db.table("wkPaper");
      const caseId = this.corpData.caseId;
      const checkPaper = await wkPaper.findAll((item) => {
        return item.caseId === caseId && item.paperType === this.docData.docTypeNo && item.delFlag !== '1';
      });
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
        let orgSysOfficeInfo = JSON.parse(orgData.sysOfficeInfo)
        let cellIdx14String = orgSysOfficeInfo.depAddress
        let cellIdx15String = orgSysOfficeInfo.depPost
        let cellIdx17String = orgSysOfficeInfo.master
        let cellIdx18String = orgSysOfficeInfo.phone
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
          cellIdx5TypeTextItem: null, // 单位
          cellIdx6: null, // 单位
          cellIdx7: corp.corpName ? corp.corpName : null, // corpname
          cellIdx7TypeTextItem: corp.corpName ? corp.corpName : null, // corpname
          cellIdx8: null, // 依法作出X的决定
          cellIdx9: null, // 采取X的措施。
          cellIdx10: null, // 附件？页面已注释
          cellIdx11: null, // 受送达人（签名）
          cellIdx12: null, // 日期
          cellIdx13: null, // 单位
          cellIdx14: cellIdx14String, // 地址
          cellIdx14TypeTextItem: cellIdx14String, // 地址
          cellIdx15: cellIdx15String, // 邮政编码
          cellIdx15TypeTextItem: cellIdx15String, // 邮政编码
          cellIdx16: null, // 单位
          cellIdx17: cellIdx17String, // 联系人
          cellIdx17TypeTextItem: cellIdx17String, // 联系人
          cellIdx18: cellIdx18String, // 联系电话
          cellIdx18TypeTextItem: cellIdx18String, // 联系电话
          cellIdx19: null, //
          cellIdx20: null, // 日期
          cellIdx21: null, // 单位/个人
        };
      }
      await db.close();
    },
    goBack({ page }) {
      // 返回选择企业
      this.$emit("go-back", { page });
    },
    commandFill (key, title, type) {
      // 判断是否可编辑
      if (this.$refs.letMain.canEdit) {
        // 文书各个字段点击打开左侧弹出编辑窗口
        let dataKey = `${key}Type${type}`
        this.$refs.letMain.commandFill(key, dataKey, title, type, this.letData[dataKey], this.options[key])
      }
    },
    confirm() {
      // 选择停供电或停供民用爆炸物品
      this.visible = false
      this.letData.cellIdx0 = this.selectedType
      this.letData.cellIdx0TypeTextItem = this.selectedType
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/let";
</style>