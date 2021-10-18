<!-- 行政处罚 一般程序 行政处罚告知书 -->
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
            <div class="textAlignCenter formHeader0">国 家 煤 矿 安 全 监 察</div>
            <div class="textAlignCenter formHeader3">行 政 处 罚 告 知 书</div>
            <div class="docTextLine paper-number-div">
              <div>
                <span
                  @click="commandFill('cellIdx0', '文书号', 'TextItem')"
                >{{ letData.cellIdx0 ? letData.cellIdx0 : '（编辑）' }}</span>
                <label> 煤安监</label>
                <span
                  @click="commandFill('cellIdx1', '文书号', 'TextItem')"
                >{{ letData.cellIdx1 ? letData.cellIdx1 : '（编辑）' }}</span>
                <label>〔</label>
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
                  style="width:50%"
                  data-title="煤矿名称"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx4', selectedType === '单位' ? '煤矿名称' : '个人名称', 'TextItem')"
                >{{letData.cellIdx4}}</td>
                <td class="textAlignLeft">:</td>
              </tr>
            </table>
            <div class="docTextarea">
              <label style="width:5%"></label>
              经查，你
              <span
                class="no-underline"
                @click="commandFill('cellIdx5', '单位', 'TextItem')"
              >{{ letData.cellIdx5 ? letData.cellIdx5 : '（点击编辑）'}}</span>
              的以下行为
              <span
                @click="commandFill('cellIdx6', '违法行为', 'DangerTableItem')"
              >{{ letData.cellIdx6 ? letData.cellIdx6 : '（点击编辑）'}}</span>
              <span
                @click="commandFill('cellIdx7', '违法行为', 'DangerTableItem')"
              >{{ letData.cellIdx7 ? letData.cellIdx7 : '（点击编辑）'}}</span>
              的规定，依据
              <span
                @click="commandFill('cellIdx8', '法律依据', 'DangerTableItem')"
              >{{ letData.cellIdx8 ? letData.cellIdx8 : '（点击编辑）'}}</span>
              的规定，拟对你
              <span
                class="no-underline"
                @click="commandFill('cellIdx9', '单位/个人', 'TextItem')"
              >{{ letData.cellIdx9 ? letData.cellIdx9 : '（点击编辑）'}}</span>
              <span
                @click="commandFill('cellIdx10', '法律规定', 'DangerTableItem')"
              >{{ letData.cellIdx10 ? letData.cellIdx10 : '（点击编辑）'}}</span>
              的行政处罚。
            </div>
            <div class="docTextarea">
              <label style="width:5%"></label>
              根据《中华人民共和国行政处罚法》第四十五条规定，你
              <span class="no-underline"
                @click="commandFill('cellIdx11', '单位或个人', 'TextItem')"
              >{{ letData.cellIdx11 ? letData.cellIdx11 : '（点击编辑）'}}</span>
              对上述拟作出的行政处罚有陈述、申辩的权利。
            </div>
            <div class="docTextarea">
              <label style="width:5%"></label>
              根据《中华人民共和国行政处罚法》第六十三条、第六十四条规定，你单位对上述拟作出的行政处罚有要求举行听证的权利。要求举行听证的，应当在收到本告知书之日起五个工作日内提出。逾期未提出的，视为放弃此权利。
            </div>
            <table height="30"></table>
            <div class="docTextLine">
              <div style="flex: 1; display: flex;">
                <label>收件人（签名）：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx13', '收件人（签名）', 'TextItem')"
                >{{ letData.cellIdx13 ? letData.cellIdx13 : '（点击编辑）' }}</div>
              </div>
              <div style="flex: 1; display: flex;">
                <label>&nbsp;&nbsp;日&nbsp;&nbsp;&nbsp;&nbsp;期：&nbsp;</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx14', '日期', 'DateItem')"
                >{{ letData.cellIdx14 ? letData.cellIdx14 : '（点击编辑）' }}</div>
              </div>
            </div>
            <div class="docTextLine">
              <div style="flex: 1; display: flex;">
                <label>我分局地址</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx15', '我分局地址', 'TextItem')"
                >{{ letData.cellIdx15 ? letData.cellIdx15 : '（点击编辑）' }}</div>
              </div>
              <div style="flex: 1; display: flex;">
                <label>&nbsp;&nbsp;邮政编码：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx16', '邮政编码', 'TextItem')"
                >{{ letData.cellIdx16 ? letData.cellIdx16 : '（点击编辑）' }}</div>
              </div>
            </div>
            <div class="docTextLine">
              <div style="flex: 1; display: flex;">
                <label>我分局联系人</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx17', '我分局联系人', 'TextItem')"
                >{{ letData.cellIdx17 ? letData.cellIdx17 : '（点击编辑）' }}</div>
              </div>
              <div style="flex: 1; display: flex;">
                <label>&nbsp;&nbsp;联系电话：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx18', '联系电话', 'TextItem')"
                >{{ letData.cellIdx18 ? letData.cellIdx18 : '（点击编辑）' }}</div>
              </div>
            </div>
            <table height="60"></table>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_19"
                  align="right"
                  style="width:95%"
                  @click="commandFill('cellIdx19', '', 'TextItem')"
                >{{letData.cellIdx19 ? letData.cellIdx19 : '（点击编辑）'}}</td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_20"
                  align="right"
                  style="width:95%"
                  data-title
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx20', '日期', 'DateItem')"
                >{{letData.cellIdx20 ? letData.cellIdx20 : '（点击编辑）'}}</td>
              </tr>
            </table>
            <table height="60"></table>
            <div class="docTextarea cellLine">
              <label style="width: 5%"></label>
              备注：本文书一式两份，一份送拟处罚
              <span
                style="borderBottom:none"
                @click="commandFill('cellIdx21', '单位或个人', 'TextItem')"
              >{{ letData.cellIdx21 ? letData.cellIdx21 : '（点击编辑）'}}</span>
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
// import letMain from "@/views/make-law-writ/components/let-main.vue";
import GoDB from "@/utils/godb.min.js";
import { getDangerObject, transformNumToChinese, getDocNumber } from '@/utils/setInitPaperData'
import associationSelectPaper from '@/components/association-select-paper'
export default {
  name: "Let204",
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
      options: {
        cellIdx6: {
          page: '6',
          key: 'cellIdx6'
        },
        cellIdx7: {
          page: '6',
          key: 'cellIdx7'
        },
        cellIdx8: {
          page: '6',
          key: 'cellIdx8'
        },
        cellIdx10: {
          page: '6',
          key: 'cellIdx10'
        },
      },
      // editData: {}, // 回显数据
      visibleSelectDialog: false,
      selectedType: '单位', // 初始化时选择的单位或个人
      extraData: {}, // 用于拼写隐患内容的字符集合
      associationPaper: ['1']
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
    async initLetData (selectedPaper) {
      const db = new GoDB(this.$store.state.DBName);
      /* //查询符合条件的记录
      const wkPaper = db.table("wkPaper");
      const caseId = this.corpData.caseId;
      const checkPaper = await wkPaper.findAll((item) => {
        return (
          item.caseId === caseId && item.paperType === this.docData.docTypeNo && item.delFlag !== '1'
        );
      });
      // await wkPaper.delete(checkPaper[0].id)
      if (checkPaper.length > 0) {
        // 回显
        this.letData = JSON.parse(checkPaper[0].paperContent);
        this.editData = checkPaper[0];
      } else {
        // 创建初始版本 */
        // 1.弹出提示框，选择单位或个人
        this.visibleSelectDialog = true
        let paperNumber = await getDocNumber(db, this.docData.docTypeNo, this.corpData.caseId, this.$store.state.user)
        // 获取笔录文书中的隐患数据
      let let1DataPapaerContent =JSON.parse(selectedPaper.let1Data.paperContent);
      let dangerObject = getDangerObject(
        let1DataPapaerContent.dangerItemObject.tableData,
        { danger: true, penaltyDesc: true }
      );
      // 7.行政处罚决定
        let cellIdx10String = `分别作出：${dangerObject.penaltyDesc}。合并罚款人民币${transformNumToChinese(dangerObject.penaltyDescFineTotle)}（￥${dangerObject.penaltyDescFineTotle.toLocaleString()}）罚款。`
       // 9.机构接口中获取sysOfficeInfo实体中
        const orgInfo = db.table("orgInfo");
        const orgData = await orgInfo.find(item => item.no === this.$store.state.user.userGroupId)
        let orgSysOfficeInfo = orgData && orgData.sysOfficeInfo ? JSON.parse(orgData.sysOfficeInfo) : {depAddress: '', depPost: '', master: '', phone: ''}
        // depAddress：我分局地址、
        // depPost：邮政编码、
        // master：我分局联系人、
        // phone：联系电话
      await db.close();
        this.letData = {
          cellIdx0: paperNumber.num0, // 文书号
          cellIdx0TypeTextItem: paperNumber.num0, // 文书号
          cellIdx1: paperNumber.num1, // 文书号
          cellIdx1TypeTextItem: paperNumber.num1, // 文书号
          cellIdx2: paperNumber.num3, // 文书号
          cellIdx2TypeTextItem: paperNumber.num3, // 文书号
          cellIdx3: paperNumber.num4, // 文书号
          cellIdx3TypeTextItem: paperNumber.num4, // 文书号
          cellIdx4: null, // 煤矿名称
          cellIdx5: null, // 单位
          cellIdx6: `${dangerObject.dangerString}`, // 违法行为
          cellIdx7: `${dangerObject.illegalString}`, // 违法行为
          cellIdx8: dangerObject.penaltyBasisString, // 法律依据
          cellIdx9: null, // 单位或个人
          cellIdx10: cellIdx10String, // 法律规定
          cellIdx11: null, // 单位或个人
          cellIdx12: null, // 签名
          cellIdx13: null, // 日期
          cellIdx14: orgSysOfficeInfo.depAddress, // 我分局地址
          cellIdx14TypeTextItem: orgSysOfficeInfo.depAddress, //我分局地址
          cellIdx15: orgSysOfficeInfo.depPost, // 邮政编码
          cellIdx15TypeTextItem: orgSysOfficeInfo.depPost, // 邮政编码
          cellIdx16: orgSysOfficeInfo.master, // 我分局联系人
          cellIdx16TypeTextItem: orgSysOfficeInfo.master, // 我分局联系人
          cellIdx17: orgSysOfficeInfo.phone, // 联系电话
          cellIdx17TypeTextItem: orgSysOfficeInfo.phone, // 联系电话
          cellIdx18: null, // 年
          cellIdx19: null, // 月
          cellIdx20: null, // 日
          cellIdx21: null,
        dangerItemObject: let1DataPapaerContent.dangerItemObject,
        }
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
        if (key === 'cellIdx6' || key === 'cellIdx7' || key === 'cellIdx8' || key === 'cellIdx10') {
          this.options[key] = {
            page: '6',
            key: key,
          }
          dataKey = 'dangerItemObject'
        }
        this.$refs.letMain.commandFill(key, dataKey, title, type, this.letData[dataKey], this.options[key])
      }
    },
    async confirm() {
      // 选择单位或个人
      this.visibleSelectDialog = false
      if (this.selectedType === '单位') {
        // const db = new GoDB(this.$store.state.DBName);
        // const wkPaper = db.table("wkPaper");
        // const caseId = this.corpData.caseId;
        let corpName = this.corpData.corpName
        // 按单位初始化信息
        // 1.单位名称
        this.letData.cellIdx4 = corpName
        this.letData.cellIdx4TypeTextItem = corpName
        }else {
        // 按个人初始化信息
        // 1.经查，你XX的以下行为
        // this.letData.cellIdx5 = this.selectedType
        // this.letData.cellIdx5TypeTextItem = this.selectedType
        // 2.你单位或个人
        // this.letData.cellIdx9 = this.selectedType
        // this.letData.cellIdx9TypeTextItem = this.selectedType
        // this.letData.cellIdx11 = this.selectedType
        // this.letData.cellIdx11TypeTextItem = this.selectedType
        // this.letData.cellIdx21 = this.selectedType
        // this.letData.cellIdx21TypeTextItem = this.selectedType
        // this.letData.dangerItemObject = let101DataPapaerContent.dangerItemObject
        // this.letData.selectedType = this.selectedType
      }
        // 2.经查，你XX的以下行为
        this.letData.cellIdx5 = this.selectedType
        this.letData.cellIdx5TypeTextItem = this.selectedType
        // 6.你单位或个人
        this.letData.cellIdx9 = this.selectedType
        this.letData.cellIdx9TypeTextItem = this.selectedType
        // 8.你单位或个人
        this.letData.cellIdx11 = this.selectedType
        this.letData.cellIdx11TypeTextItem = this.selectedType
        this.letData.cellIdx21 = this.selectedType
        this.letData.cellIdx21TypeTextItem = this.selectedType
        this.letData.selectedType = this.selectedType;
      }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/let";
</style>