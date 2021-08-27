<!-- 行政处罚 一般程序 行政处罚告知书 -->
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
            <div class="textAlignCenter formHeader3">行 政 处 罚 告 知 书</div>
            <div class="stdRowH"></div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput "
                  id="cell_idx_0"
                  align="right"
                  style="width:35%"
                  data-title="文书号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx0', '文书号', 'TextItem')"
                >{{letData.cellIdx0}}</td>
                <td class="textAlignLeft ">（</td>
                <td
                  class="cellInput "
                  id="cell_idx_1"
                  align="center"
                  style="width:23%"
                  data-title="文书号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx1', '文书号', 'TextItem')"
                >{{letData.cellIdx1}}</td>
                <td class="textAlignLeft ">）煤安告〔</td>

                <td class="textAlignLeft "></td>
                <td
                  class="cellInput "
                  id="cell_idx_2"
                  align="center"
                  style="width:10%"
                  data-title="文书号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx2', '文书号', 'TextItem')"
                >{{letData.cellIdx2}}</td>
                <td class="textAlignLeft ">〕</td>
                <td
                  class="cellInput "
                  id="cell_idx_3"
                  align="center"
                  style="width:10%"
                  data-title="文书号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx3', '文书号', 'TextItem')"
                >{{letData.cellIdx3}}</td>
                <td class="textAlignLeft ">号&nbsp;&nbsp;</td>
              </tr>
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_4"
                  style="width:50%"
                  data-title="煤矿名称"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx4', '煤矿名称', 'TextItem')"
                >{{letData.cellIdx4}}</td>
                <td class="textAlignLeft">:</td>
              </tr>
            </table>
            <table style="border:solid 0 #000;" class="docBody">
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;经查，你</td>
                <td
                  class="cellInput"
                  id="cell_idx_5"
                  align="center"
                  style="width:10%"
                  data-title="单位"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx5', '单位', 'TextItem')"
                >{{letData.cellIdx5}}</td>
                <td class="textAlignLeft">的以下行为</td>
              </tr>
            </table>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              id="cell_idx_6"
              data-title="违法行为"
              data-type="textarea"
              data-src
              @click="commandFill('cellIdx6', '违法行为', 'DangerTableItem')">
              <div v-if="letData.cellIdx6 && letData.cellIdx6.length > 0">
                <p class="show-area-item-p">
                  <span style="padding: 7px;">{{ letData.cellIdx6? letData.cellIdx6 : '（点击编辑）' }}</span>
                </p>
              </div>
              <div v-else>
                <p class="show-area-item-p">
                  &nbsp;
                </p>
                <p class="show-area-item-p">
                  &nbsp;
                </p>
              </div>
            </div>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              id="cell_idx_7"
              data-title="违法行为"
              data-type="textarea"
              data-src
              @click="commandFill('cellIdx7', '违法行为', 'DangerTableItem')">
              <div v-if="letData.cellIdx7 && letData.cellIdx7.length > 0">
                <p class="show-area-item-p">
                  <span style="padding: 7px;">{{ letData.cellIdx7? letData.cellIdx7 : '（点击编辑）' }}</span>
                </p>
              </div>
              <div v-else>
                <p class="show-area-item-p">
                  &nbsp;
                </p>
                <p class="show-area-item-p">
                  &nbsp;
                </p>
              </div>
            </div>
            <table style="border:solid 0 #000;" class="docBody">
              <tr>
                <td class="textAlignLeft">的规定，依据</td>
              </tr>
            </table>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              id="cell_idx_8"
              data-title="法律依据"
              data-type="textarea"
              data-src
              @click="commandFill('cellIdx8', '法律依据', 'DangerTableItem')">
              <div v-if="letData.cellIdx8 && letData.cellIdx8.length > 0">
                <p class="show-area-item-p">
                  <span style="padding: 7px;">{{ letData.cellIdx8 }}</span>
                </p>
              </div>
              <div v-else>
                <p class="show-area-item-p">
                  &nbsp;
                </p>
                <p class="show-area-item-p">
                  &nbsp;
                </p>
              </div>
            </div>
            <table style="border:solid 0px #000;" class="docBody">
              <tr>
                <td class="textAlignLeft">的规定，拟对你</td>
                <td
                  class="cellInput"
                  id="cell_idx_9"
                  align="center"
                  style="width:10%"
                  data-title="单位/个人"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx9', '单位/个人', 'TextItem')"
                >{{letData.cellIdx9}}</td>
              </tr>
            </table>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              id="cell_idx_10"
              data-title="法律规定"
              data-type="textarea"
              data-src
              @click="commandFill('cellIdx10', '法律规定', 'DangerTableItem')">
              <div v-if="letData.cellIdx10 && letData.cellIdx10.length > 0">
                <p class="show-area-item-p">
                  <span style="padding: 7px;">{{ letData.cellIdx10? letData.cellIdx10 : '（点击编辑）' }}</span>
                </p>
              </div>
              <div v-else>
                <p class="show-area-item-p">
                  &nbsp;
                </p>
                <p class="show-area-item-p">
                  &nbsp;
                </p>
              </div>
            </div>
            <table style="border:solid 0 #000;" class="docBody">
              <tr>
                <td
                  class="textAlignLeft"
                >的行政处罚。</td>

              </tr>
              <tr>
                <td style="width:5%"></td>
                 <td
                  class="textAlignLeft">根据《中华人民共和国行政处罚法》第四十五条规定，你</td>
                <td
                  class="cellInput"
                  id="cell_idx_11"
                  align="center"
                  style="width:12%"
                  data-title="单位或个人"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx11', '单位或个人', 'TextItem')"
                >{{letData.cellIdx11}}</td>
                <td class="textAlignLeft">对上述拟作出的行政处罚有</td>
              </tr>
              <tr>
                <td class="textAlignLeft">陈述、申辩的权利。</td>
              </tr>

              <!-- <tr>
                <td style="width:5%"></td>
                <td
                  class="textAlignLeft"
                >根据《中华人民共和国行政处罚法》第六十三条、第六十四条规定，你单位对上述拟作出的行政处罚</td>
              </tr>
              <tr>
                <td class="textAlignLeft">有要求举行听证的权利。要求举行听证的，应当在收到本告知书之日起五个工作日内提出。逾期未提</td>
              </tr>
              <tr>
                <td class="textAlignLeft">出的，视为放弃此权利。</td>
              </tr> -->
              <tr>
                <td style="width:5%"></td>


              </tr>
            </table>
             <div
                style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
                class="cellInput mutiLineArea"
                id="cell_idx_12"
                data-title=""
                data-type="textarea"
                data-src
                @click="commandFill('cellIdx12', '', 'TextareaItem')">
              <p class="show-area-item-p">
                <span style="padding: 7px;">{{ letData.cellIdx12 ? letData.cellIdx12 : '（点击编辑）' }}</span>
              </p>
            </div>

            <table height="30"></table>
            <table class="docBody">
              <tr>
                <td style="width:5%"></td>
                <td class="textAlignLeft">受送达人（签名）：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_12"
                  style="width:35%"
                  data-title="收件人（签名）"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx12', '收件人（签名）', 'TextItem')"
                >{{letData.cellIdx12}}</td>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;日&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;期：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_13"
                  style="width:26%"
                  data-title="日期"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx13', '日期', 'DateItem')"
                >{{letData.cellIdx13}}</td>
              </tr>
              <tr>
                <td style="width:5%"></td>
                <td class="textAlignLeft">执法机关地址：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_14"
                  style="width:40%"
                  data-title="我分局地址"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx14', '我分局地址', 'TextItem')"
                >{{letData.cellIdx14}}</td>
                <td class="textAlignLeft">&nbsp;&nbsp;邮政编码：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_15"
                  style="width:26%"
                  data-title="邮政编码"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx15', '邮政编码', 'TextItem')"
                >{{letData.cellIdx15}}</td>
              </tr>
              <tr>
                <td style="width:5%"></td>

                <td class="textAlignLeft">执法机关联系人：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_16"
                  style="width:38%"
                  data-title="我分局联系人"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx16', '我分局联系人', 'TextItem')"
                >{{letData.cellIdx16}}</td>
                <td class="textAlignLeft">&nbsp;&nbsp;联系电话：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_17"
                  style="width:26%"
                  data-title="联系电话"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx17', '联系电话', 'TextItem')"
                >{{letData.cellIdx17}}</td>
              </tr>
            </table>


            <table height="90"></table>
          <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_22"
                  align="right"
                  style="width:95%"
                  @click="commandFill('cellIdx17', '', 'TextItem')"
                >{{letData.cellIdx22 ? letData.cellIdx22 : '（点击编辑）'}}</td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_23"
                  align="right"
                  style="width:95%"
                  data-title
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx23', '日期', 'DateItem')"
                >{{letData.cellIdx23 ? letData.cellIdx23 : '（点击编辑）'}}</td>
              </tr>
            </table>
            <table height="60"></table>

            <table class="docBody">
              <hr />
              <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;备注：本文书一式两份，一份送被拟处罚</td>
              <td
                class="cellInput"
                id="cell_idx_21"
                align="center"
                style="width:15%"
                data-title="单位或个人"
                data-type="text"
                data-src
                @click="commandFill('cellIdx21', '单位或个人', 'TextItem')"
              >{{letData.cellIdx21}}</td>
              <td class="textAlignLeft">，一份存档。</td>
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
import { getDangerObject, transformNumToChinese, getDocNumber } from '@/utils/setInitPaperData'
export default {
  name: "Let204",
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
      editData: {}, // 回显数据
      visible: false,
      selectedType: '单位', // 初始化时选择的单位或个人
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
      // 初始化文书内容
      const db = new GoDB("CoalSupervisionDB");
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
          item.caseId === caseId && item.paperType === this.docData.docTypeNo
        );
      });
      console.log('corpData', this.corpData)
      console.log('caseId', caseId)
      console.log('docTypeNo', this.docData.docTypeNo)
      console.log('checkPaper', checkPaper)
      // 已做文书则展示文书内容，否则创建初始版本
      if (checkPaper.length > 0) {
        // 回显
        this.letData = JSON.parse(checkPaper[0].paperContent);
        this.editData = checkPaper[0];
      } else {
        // 创建初始版本
        // 1.弹出提示框，选择单位或个人
        this.visible = true
        let paperNumber = await getDocNumber(db, this.docData.docTypeNo, caseId, this.$store.state.user)
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
          cellIdx6: null, // 违法行为
          cellIdx7: null, // 违法行为
          cellIdx8: null, // 法律依据
          cellIdx9: null, // 单位或个人
          cellIdx10: null, // 法律规定
          cellIdx11: null, // 单位或个人
          cellIdx12: null, // 签名
          cellIdx13: null, // 日期
          cellIdx14: null, // 我分局地址
          cellIdx15: null, // 邮政编码
          cellIdx16: null, // 我分局联系人
          cellIdx17: null, // 联系电话
          cellIdx18: null, // 年
          cellIdx19: null, // 月
          cellIdx20: null, // 日
          cellIdx21: null,
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
        if (key === 'cellIdx6' || key === 'cellIdx7' || key === 'cellIdx8' || key === 'cellIdx10') {
          this.options[key] = {
            page: '6',
            key: key,
          }
          dataKey = 'dangerItemObject'
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
    async confirm() {
      // 选择单位或个人
      this.visible = false
      if (this.selectedType === '单位') {
        const db = new GoDB("CoalSupervisionDB");
        const wkPaper = db.table("wkPaper");
        const caseId = this.corpData.caseId;
        let corpName = this.corpData.corpName
        // 按单位初始化信息
        // 1.单位名称
        this.letData.cellIdx4 = corpName
        this.letData.cellIdx4TypeTextItem = corpName
        // 2.经查，你XX的以下行为
        this.letData.cellIdx5 = this.selectedType
        this.letData.cellIdx5TypeTextItem = this.selectedType
        // 获取笔录文书中的隐患数据
        const let101Data = await wkPaper.find((item) => {
          return item.caseId === caseId && item.paperType === '1';
        });
        console.log('let101Data', let101Data)
        let let101DataPapaerContent = JSON.parse(let101Data.paperContent)
        let dangerObject = getDangerObject(let101DataPapaerContent.dangerItemObject.tableData, {danger: true, penaltyDesc: true})
        // 3.隐患描述
        this.letData.cellIdx6 = `${dangerObject.dangerString}`
        // 4.分别违反了+违法认定法条
        this.letData.cellIdx7 = `分别违反了${dangerObject.illegalString}`
        // 5.行政处罚依据
        this.letData.cellIdx8 = dangerObject.penaltyBasisString
        // 6.你单位或个人
        this.letData.cellIdx9 = this.selectedType
        this.letData.cellIdx9TypeTextItem = this.selectedType
        // 7.行政处罚决定
        let cellIdx10String = `分别作出：${dangerObject.penaltyDesc}。合并罚款人民币${transformNumToChinese(dangerObject.penaltyDescFineTotle)}（￥${dangerObject.penaltyDescFineTotle.toLocaleString()}）罚款。`
        this.letData.cellIdx10 = cellIdx10String
        // 8.你单位或个人
        this.letData.cellIdx11 = this.selectedType
        this.letData.cellIdx11TypeTextItem = this.selectedType
        // 9.机构接口中获取sysOfficeInfo实体中
        const orgInfo = db.table("orgInfo");
        const orgData = await orgInfo.find(item => item.no === this.$store.state.user.userGroupId)
        let orgSysOfficeInfo = JSON.parse(orgData.sysOfficeInfo)
        // depAddress：我分局地址、
        // depPost：邮政编码、
        // master：我分局联系人、
        // phone：联系电话
        this.letData.cellIdx14 = orgSysOfficeInfo.depAddress
        this.letData.cellIdx14TypeTextItem = orgSysOfficeInfo.depAddress
        this.letData.cellIdx15 = orgSysOfficeInfo.depPost
        this.letData.cellIdx15TypeTextItem = orgSysOfficeInfo.depPost
        this.letData.cellIdx16 = orgSysOfficeInfo.master
        this.letData.cellIdx16TypeTextItem = orgSysOfficeInfo.master
        this.letData.cellIdx17 = orgSysOfficeInfo.phone
        this.letData.cellIdx17TypeTextItem = orgSysOfficeInfo.phone
        this.letData.cellIdx21 = this.selectedType
        this.letData.cellIdx21TypeTextItem = this.selectedType
        this.letData.dangerItemObject = let101DataPapaerContent.dangerItemObject
        await db.close();
      } else {
        // 按个人初始化信息
        // 1.经查，你XX的以下行为
        this.letData.cellIdx5 = this.selectedType
        this.letData.cellIdx5TypeTextItem = this.selectedType
        // 2.你单位或个人
        this.letData.cellIdx9 = this.selectedType
        this.letData.cellIdx9TypeTextItem = this.selectedType
        this.letData.cellIdx11 = this.selectedType
        this.letData.cellIdx11TypeTextItem = this.selectedType
        this.letData.cellIdx21 = this.selectedType
        this.letData.cellIdx21TypeTextItem = this.selectedType
        this.letData.dangerItemObject = let101DataPapaerContent.dangerItemObject
      }
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/let";
</style>