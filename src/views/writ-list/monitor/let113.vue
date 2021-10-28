<!-- 现场检查 实施检查 解除停供电(停供民用爆炸物品)通知书 -->
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
              国 家 矿 山 安 全 监 察
            </div>
            <div class="textAlignLeft formHeader3">
              <table class="docBody">
                <tr>
                  <!-- <td class="textAlignCenter">解除</td> -->
                  <td
                    class="cellInput"
                    id="cell_idx_0"
                    align="right"
                    style="width: 55%"
                    data-title="停供电(停供民用爆炸物品)"
                    data-type="text"
                    data-src
                    @click="
                      commandFill(
                        'cellIdx0',
                        '停供电(停供民用爆炸物品)',
                        'TextItem'
                      )
                    "
                  >
                    {{ letData.cellIdx0 }}
                  </td>
                  <td class="textAlignLeft">&nbsp;通知书</td>
                </tr>
              </table>
            </div>
            <div class="docTextLine paper-number-div">
              <div>
                <span @click="commandFill('cellIdx1', '', 'TextItem')">{{
                  letData.cellIdx1 ? letData.cellIdx1 : "（编辑）"
                }}</span>
                <label>矿安监</label>
                <span @click="commandFill('cellIdx2', '', 'TextItem')">{{
                  letData.cellIdx2 ? letData.cellIdx2 : "（编辑）"
                }}</span>
                <label>解停〔</label>
                <span @click="commandFill('cellIdx3', '', 'TextItem')">{{
                  letData.cellIdx3 ? letData.cellIdx3 : "（编辑）"
                }}</span>
                <label>〕</label>
                <span @click="commandFill('cellIdx4', '', 'TextItem')">{{
                  letData.cellIdx4 ? letData.cellIdx4 : "（编辑）"
                }}</span>
                <label>号</label>
              </div>
            </div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_5"
                  style="width: 50%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx5', '', 'TextItem')"
                >
                  {{ letData.cellIdx5 }}
                </td>
                <td class="textAlignLeft">:</td>
              </tr>
            </table>
            <div class="docTextarea">
              <label style="width: 5%"></label>
              <span @click="commandFill('cellIdx6', '违法行为', 'TextItem')">{{
                letData.cellIdx6 ? letData.cellIdx6 : "（点击编辑）"
              }}</span>
              已依法履行行政决定，采取相应措施消除了安全隐患，发生生产安全事故的现实危险已不存在，根据《中华人民共和国安全生产法》第七十条第二款规定，请贵单位解除对其采取的
              <span
                @click="
                  commandFill(
                    'cellIdx7',
                    '解除停供电(停供民用爆炸物品)',
                    'TextItem'
                  )
                "
                >{{
                  letData.cellIdx7 ? letData.cellIdx7 : "（点击编辑）"
                }}</span
              >
              措施。
              <span @click="commandFill('cellIdx8', '', 'TextItem')">{{
                letData.cellIdx8 ? letData.cellIdx8 : "（点击编辑）"
              }}</span>
              已依法履行行政决定，采取相应措施消除了安全隐患，发生生产安全事故的现实危险已不存在，根据《中华人民共和国安全生产法》第六十七条第二款规定，请贵单位解除对其采取的
              <span @click="commandFill('cellIdx9', '', 'TextItem')">{{
                letData.cellIdx9 ? letData.cellIdx9 : "（点击编辑）"
              }}</span>
              的措施。
            </div>
            <table height="30"></table>
            <div class="docTextLine">
              <label style="width: 5%"></label>
              <div style="flex: 2; display: flex">
                <label>受送达人（签名）：</label>
                <div
                  class="line-div"
                  @click="
                    commandFill('cellIdx8', '受送达人（签名）', 'TextItem')
                  "
                >
                  {{ letData.cellIdx8 ? letData.cellIdx8 : "（点击编辑）" }}
                </div>
                <label>日期：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx9', '日期', 'DateItem')"
                >
                  {{ letData.cellIdx9 ? letData.cellIdx9 : "（点击编辑）" }}
                </div>
              </div>
            </div>
            <div class="docTextLine">
              <label style="width: 5%"></label>
              <div style="flex: 2; display: flex">
                <label>我</label>
                <span @click="commandFill('cellIdx10', '局', 'TextItem')">{{
                  letData.cellIdx10 ? letData.cellIdx10 : ""
                }}</span>
                <label>地址：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx11', '地址', 'TextItem')"
                >
                  {{ letData.cellIdx11 ? letData.cellIdx11 : "（点击编辑）" }}
                </div>
              </div>
              <div style="flex: 2; display: flex">
                <label>邮政编码：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx12', '邮政编码', 'TextItem')"
                >
                  {{ letData.cellIdx12 ? letData.cellIdx12 : "（点击编辑）" }}
                </div>
              </div>
            </div>
            <div class="docTextLine">
              <label style="width: 5%"></label>
              <div style="flex: 2; display: flex">
                <label>我</label>
                <span @click="commandFill('cellIdx13', '局', 'TextItem')">{{
                  letData.cellIdx13 ? letData.cellIdx13 : ""
                }}</span>
                <label>联系人：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx14', '联系人', 'TextItem')"
                >
                  {{ letData.cellIdx14 ? letData.cellIdx14 : "（点击编辑）" }}
                </div>
              </div>
              <div style="flex: 2; display: flex">
                <label>联系电话：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx15', '联系电话', 'TextItem')"
                >
                  {{ letData.cellIdx15 ? letData.cellIdx15 : "（点击编辑）" }}
                </div>
              </div>
            </div>
            <table height="30"></table>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_16"
                  align="right"
                  style="width: 95%"
                  @click="commandFill('cellIdx16', '', 'TextItem')"
                >
                  {{ letData.cellIdx16 ? letData.cellIdx16 : "（点击编辑）" }}
                </td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_17"
                  align="right"
                  style="width: 95%"
                  data-title
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx17', '日期', 'DateItem')"
                >
                  {{ letData.cellIdx17 ? letData.cellIdx17 : "（点击编辑）" }}
                </td>
              </tr>
            </table>
            <table height="60"></table>
            <div class="docTextarea cellLine">
              <label style="width: 5%"></label>
              &nbsp;&nbsp;&nbsp;&nbsp;备注：本文书一式三份，一份交
              <span
                style="border-bottom: none"
                @click="commandFill('cellIdx18', '', 'TextItem')"
                >{{
                  letData.cellIdx18 ? letData.cellIdx18 : "（点击编辑）"
                }}</span
              >
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
      :show-close="false"
    >
      <span>请选择：</span>
      <el-radio-group v-model="selectedType">
        <el-radio label="解除停供电">解除停供电</el-radio>
        <el-radio label="解除停供民用爆炸物品">解除停供民用爆炸物品</el-radio>
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
// import letMain from "@/views/make-law-writ/components/let-main.vue";
import GoDB from "@/utils/godb.min.js";
import { getDocNumber } from "@/utils/setInitPaperData";
import associationSelectPaper from "@/components/association-select-paper";
export default {
  name: "Let113",
  mixins: [associationSelectPaper],
  /*   props: {
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
  }, */
  data() {
    return {
      letData: {},
      options: {},
      editData: {}, // 回显数据
      visibleSelectDialog: false,
      selectedType: "解除停供电", // 初始化时选择的解除停供电
      associationPaper: [],
    };
  },
  /*   created() {
    this.initData();
  },
  watch: {
    "corpData.corpId"(val) {
      if (val) {
        this.initData();
      }
    },
  }, */
  methods: {
    async initLetData(selectedPaper) {
      const db = new GoDB(this.$store.state.DBName);
      const corpBase = db.table("corpBase");
      const corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      /*  const wkPaper = db.table("wkPaper");
      const caseId = this.corpData.caseId;
      const checkPaper = await wkPaper.findAll((item) => {
        return item.caseId === caseId && item.paperType === this.docData.docTypeNo && item.delFlag !== '1';
      });
      if (checkPaper.length > 0) {
        // 回显
        this.letData = JSON.parse(checkPaper[0].paperContent);
        this.editData = checkPaper[0];
      } else {
        // 创建初始版本 */
      // 1.弹出提示框，选择停供电或停供民用爆炸物品
      this.visibleSelectDialog = true;
      // 2.生成文书编号
      let { num0, num1, num3, num4 } = await getDocNumber(
        db,
        this.docData.docTypeNo,
        this.corpData.caseId,
        this.$store.state.user
      );
      // 3.sysOfficeInfo实体中 地址：depAddress、邮政编码：depPost、联系人：master、联系电话：phone
      const orgInfo = db.table("orgInfo");
      const orgData = await orgInfo.find(
        (item) => item.no === this.$store.state.user.userGroupId
      );
      let orgSysOfficeInfo =
        orgData && orgData.sysOfficeInfo
          ? JSON.parse(orgData.sysOfficeInfo)
          : { depAddress: "", depPost: "", master: "", phone: "" };
      let cellIdx11String = orgSysOfficeInfo.depAddress;
      let cellIdx12String = orgSysOfficeInfo.depPost;
      let cellIdx14String = orgSysOfficeInfo.master;
      let cellIdx15String = orgSysOfficeInfo.phone;
      await db.close();
      this.letData = {
        cellIdx0: null, // 解除停供电(解除停供民用爆炸物品)
        cellIdx1: num0, // 文书号
        cellIdx1TypeTextItem: num0, // 文书号
        cellIdx2: num1, // 文书号
        cellIdx2TypeTextItem: num1, // 文书号
        cellIdx3: num3, // 文书号
        cellIdx3TypeTextItem: num3, // 文书号
        cellIdx4: num4, // 文书号
        cellIdx4TypeTextItem: num4, // 文书号
        cellIdx5: null, // 单位
        cellIdx6: corp.corpName ? corp.corpName : null, // corpname
        cellIdx6TypeTextItem: corp.corpName ? corp.corpName : null, // corpname
        cellIdx7: null, // 解除停供电(解除停供民用爆炸物品)
        cellIdx8: null, // 受送达人（签名）
        cellIdx9: null, // 日期
        cellIdx10: null, // 局
        cellIdx11: cellIdx11String, // 地址
        cellIdx11TypeTextItem: cellIdx11String, // 地址
        cellIdx12: cellIdx12String, // 邮政编码
        cellIdx12TypeTextItem: cellIdx12String, // 邮政编码
        cellIdx13: null, // 局
        cellIdx14: cellIdx14String, // 联系人
        cellIdx14TypeTextItem: cellIdx14String, // 联系人
        cellIdx15: cellIdx15String, // 联系电话
        cellIdx15TypeTextItem: cellIdx15String, // 联系电话
        cellIdx16: null, //
        cellIdx17: null, // 日期
        cellIdx18: null, // 单位/个人
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
      // 选择解除停供电或解除停供民用爆炸物品
      this.visibleSelectDialog = false;
      this.letData.cellIdx0 = this.selectedType;
      this.letData.cellIdx0TypeTextItem = this.selectedType;
      this.letData.cellIdx7 = this.selectedType.substring(
        2,
        this.selectedType.length
      );
      this.letData.cellIdx7TypeTextItem = this.selectedType.substring(
        2,
        this.selectedType.length
      );
      this.letData.selectedType = this.selectedType;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/let";
</style>