<!-- 现场检查 实施检查  查封（扣押）决定书 -->
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
            <div class="textAlignCenter formHeader0">
              煤矿安全监管行政执法文书
              <br />
            </div>
            <div class="textAlignCenter formHeader3">
              <table class="docBody">
                <tr>
                  <td
                    class="cellInput"
                    id="cell_idx_0"
                    data-title="查封(扣押)"
                    data-type="text"
                    data-src
                    @click="commandFill('cellIdx0', '查封(扣押)', 'TextItem')"
                >{{ letData.cellIdx0 }}</td>
                  <td class="textAlignLeft">决定书</td>
                </tr>
              </table>
            </div>
            <div class="stdRowH"></div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_1"
                  align="right"
                  style="width:40%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx1', '文书号', 'TextItem')"
                >{{ letData.cellIdx1 }}</td>
                <td>（</td>
                <td
                  class="cellInput "
                  id="cell_idx_2"
                  align="center"
                  style="width:14%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx2', '', 'TextItem')"
                >{{ letData.cellIdx2 }}</td>
                <td class="textAlignLeft ">)</td>
                <td class="textAlignLeft ">&nbsp;&nbsp;&nbsp;&nbsp;煤安 </td>
                <td
                  class="cellInput "
                  id="cell_idx_3"
                  align="center"
                  style="width:7%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx3', '', 'TextItem')"
                >{{ letData.cellIdx3 }}</td>
                <td class="textAlignLeft ">〔</td>
                <td
                  class="cellInput "
                  id="cell_idx_4"
                  align="center"
                  style="width:8%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx4', '', 'TextItem')"
                >{{ letData.cellIdx4 }}</td>
                <td class="textAlignLeft ">〕</td>
                <td
                  class="cellInput "
                  id="cell_idx_5"
                  align="center"
                  style="width:10%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx5', '', 'TextItem')"
                >{{ letData.cellIdx5 }}</td>
                <td class="textAlignLeft ">号&nbsp;&nbsp;</td>
              </tr>

              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_6"
                  style="width:62%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx6', '', 'TextItem')"
                >{{ letData.cellIdx6 }}</td>
                <td class="textAlignLeft">:</td>
              </tr>
            </table>
            <table style="border:solid 0px #000;" class="docBody">
              <tr>
                <td style="width:5%"></td>
                <td class="textAlignLeft">经查，你单位</td>
                <!-- <td
                  style="width:81%"
                  class="cellInput cellBottomLine"
                  id="cell_idx_7"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx7', '', 'TextItem')"
                >{{ letData.cellIdx7 }}</td> -->
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
                      <span style="padding: 7px;">{{ letData.cellIdx7 ? letData.cellIdx7 : '（点击编辑）' }}</span>
                    </p>
                    <cell-line></cell-line>
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
              </tr>
              <tr>
                <td class="textAlignLeft">的行为涉嫌违反</td>
                <!-- <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_8"
                  style="width:84%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx8', '', 'TextItem')"
                >{{ letData.cellIdx8 }}</td> -->
                <div
                  style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
                  class="cellInput mutiLineArea"
                  id="cell_idx_8"
                  data-title=""
                  data-type="textarea"
                  data-src
                  @click="commandFill('cellIdx8', '', 'DangerTableItem')">
                  <div v-if="letData.cellIdx8 && letData.cellIdx8.length > 0">
                    <p class="show-area-item-p">
                      <span style="padding: 7px;">{{ letData.cellIdx8 ? letData.cellIdx8 : '（点击编辑）' }}</span>
                    </p>
                    <cell-line></cell-line>
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
              </tr>
              <tr>
                <td class="textAlignLeft">的规定，根据《中华人民共和国安全生产法》
                  第六十二条第一款第四项和《中华人民共和国行政强制
                  </td>
                  <td>法》第二十四条规定，本机关决定对你单位涉案</td>
                <td
                  class="cellInput"
                  id="cell_idx_9"
                  align="center"
                  style="width:15.5%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx9', '', 'TextItem')"
                >{{ letData.cellIdx9 ? letData.cellIdx9 : '（点击编辑）'}}</td>
                <td class="textAlignLeft">予以</td>
                <td
                  class="cellInput"
                  align="center"
                  id="cell_idx_10"
                  style="width:8%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx10', '', 'TextItem')"
                >{{ letData.cellIdx10 }}</td>
                <!-- <td class="textAlignLeft"></td> -->
                <td
                  class="cellInput"
                  id="cell_idx_11"
                  style="width:23%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx18', '附件：物品清单', 'SamplingForensicsTable')"
                >,（详见《物品清单》）</td>
                <td class="textAlignLeft">。</td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_12"
                  style="width:15%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx12', '', 'TextItem')"
                >{{ letData.cellIdx12 ? letData.cellIdx12 : '（点击编辑）' }}</td>
                <td class="textAlignLeft">的</td>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td
                  class="cellInput"
                  id="cell_idx_13"
                  align="center"
                  style="width:20%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx13', '', 'SelectItem')"
                >{{ letData.cellIdx13 ? letData.cellIdx13 : '（点击编辑）' }}</td>
                <td class="textAlignLeft">作出处理决定。此前，你单位不得使用、销毁或转移上述</td>
              </tr>

              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td
                  class="cellInput"
                  id="cell_idx_14"
                  align="center"
                  style="width:20%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx14', '', 'SelectItem')"
                >{{ letData.cellIdx14 ? letData.cellIdx14 : '（点击编辑）' }}</td>
                <td class="textAlignLeft">，并负有安全保障责任。</td>
              </tr>
              <tr>
                <td style="width:5%"></td>
                <td
                  class="textAlignLeft"
                >如不服本决定，可在接到本决定书之日起60日内向</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_15"
                  align="center"
                  style="width:44%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx15', '', 'TextItem')"
                >{{ letData.cellIdx15 }}</td>

              </tr>
              <tr>
                 <td class="textAlignLeft">人民政府或者</td>
                 <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_16"
                  align="center"
                  style="width:49%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx16', '', 'TextItem')"
                >{{ letData.cellIdx16 }}</td>
                <td class="textAlignLeft">申请行政复议，或者在6个月内依法向</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_17"
                  align="center"
                  style="width:35%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx17', '', 'TextItem')"
                >{{ letData.cellIdx17 }}</td>
                <td class="textAlignLeft">人民法院提起行政诉讼；复议、诉讼期间，不停止执行本决定。</td>
              </tr>
            </table>
            <table height="30"></table>
            <table class="docBody">
              <tr>
                <td style="width:5%"></td>
                <td
                  class="textAlignLeft"
                  style="cursor: pointer;"
                  >附件：
                </td>
                <td
                  class="cellInput"
                  id="cell_idx_18"
                  style="width:20%"
                  data-title="附件"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx18', '附件：物品清单', 'SamplingForensicsTable')"
                >《物品清单》</td>
              </tr>
            </table>
            <table height="30"></table>
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
            <table>
              <hr />
              <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;备注：本文书一式两份，一份交被</td>
              <td
                class="cellInput"
                id="cell_idx_21"
                align="center"
                style="width:10%"
                data-title
                data-type="text"
                data-src
                @click="commandFill('cellIdx21', '', 'TextItem')"
                >{{ letData.cellIdx21 }}</td>
              <td class="textAlignLeft">单位，一份存档。</td>
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
        <el-radio label="查封">查封</el-radio>
        <el-radio label="扣押">扣押</el-radio>
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
import { getDangerObject, getDocNumber } from '@/utils/setInitPaperData'
const dictionary = [
  {
    value: '场所',
    name: '场所'
  },
  {
    value: '设施',
    name: '设施'
  },
  {
    value: '物品',
    name: '物品'
  },
  {
    value: '场所、设施',
    name: '场所、设施'
  },
  {
    value: '场所、物品',
    name: '场所、物品'
  },
  {
    value: '设施、物品',
    name: '设施、物品'
  },
  {
    value: '场所、设施、物品',
    name: '场所、设施、物品'
  },
]
export default {
  name: "Let110",
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
          page: '32',
          key: 'cellIdx7'
        },
        cellIdx8: {
          page: '32',
          key: 'cellIdx8'
        },
        cellIdx10: dictionary,
        cellIdx14: dictionary,
        cellIdx15: dictionary,
      },
      editData: {}, // 回显数据
      selectedType: '查封',
      visible: false,
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
      // 已做文书则展示文书内容，否则创建初始版本
      if (checkPaper.length > 0) {
        // 回显
        this.letData = JSON.parse(checkPaper[0].paperContent);
        this.editData = checkPaper[0];
      } else {
        // 创建初始版本
        // 1.弹出提示框，选择查封或扣押
        this.visible = true
        // 2.生成文书编号
        let { num0, num1, num3, num4 } = await getDocNumber(db, this.docData.docTypeNo, caseId, this.$store.state.user)
        // 3.违法行为：获取笔录文书中的隐患数据
        const let101Data = await wkPaper.find((item) => {
          return item.caseId === caseId && item.paperType === '1';
        });
        let let101DataPapaerContent = JSON.parse(let101Data.paperContent)
        let dangerObject = getDangerObject(let101DataPapaerContent.dangerItemObject.tableData)
        let cellIdx7String = `${dangerObject.dangerString}`
        let cellIdx8String = `${dangerObject.illegalString}`
        // 4.地点：sysOfficeInfo实体中organName字段+ courtPrefix字段
        const orgInfo = db.table("orgInfo");
        const orgData = await orgInfo.find(item => item.no === this.$store.state.user.userGroupId)
        let orgSysOfficeInfo = orgData ? JSON.parse(orgData.sysOfficeInfo) : {organName: '', depAddress: ''}
        let cellIdx16String = orgSysOfficeInfo.organName
        let cellIdx17String = orgSysOfficeInfo.depAddress
        this.letData = {
          cellIdx0: null, // 查封(扣押)
          cellIdx1: num0, // 文书号
          cellIdx1TypeTextItem: num0, // 文书号
          cellIdx2: num1, // 文书号
          cellIdx2TypeTextItem: num1, // 文书号
          cellIdx3: null, // 查/扣
          cellIdx4: num3, // 文书号
          cellIdx4TypeTextItem: num3, // 文书号
          cellIdx5: num4, // 文书号
          cellIdx5TypeTextItem: num4, // 文书号
          cellIdx6: corp.corpName ? corp.corpName : null, // corpname
          cellIdx6TypeTextItem: corp.corpName ? corp.corpName : null, // corpname
          cellIdx7: cellIdx7String, // 违法行为
          cellIdx8: cellIdx8String, // 违法认定法条
          cellIdx9: null, // 本机关决定对你单位涉案XX
          cellIdx10: null, // 予以XX
          cellIdx11: null, // 物品清单
          cellIdx12: null, // XX的
          cellIdx13: null, // XX作出处理决定
          cellIdx14: null, // 此前，你单位不得使用、销毁或转移上述XX
          cellIdx15: null, // 人民政府
          cellIdx16: cellIdx16String, // organName
          cellIdx16TypeTextItem: cellIdx16String, // organName
          cellIdx17: cellIdx17String, // courtPrefix人民法院
          cellIdx17TypeTextItem: cellIdx17String, // courtPrefix人民法院
          cellIdx18: null, // 附件
          cellIdx19: null, //
          cellIdx20: null, // 日期
          cellIdx21: null, // 查封(扣押)
          dangerItemObject: let101DataPapaerContent.dangerItemObject,
          samplingForensicsTable: {
            tableData: [],
            signature: null,
            signDate: ''
          }
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
        if (key === 'cellIdx7' || key === 'cellIdx8') {
          this.options[key] = {
            page: '32',
            key: key,
          }
          dataKey = 'dangerItemObject'
        } else if (key === 'cellIdx18') {
          this.options[key] = {
            canEdit: true,
            page: '32', // 物品清单
            name: this.selectedType
          }
          dataKey = 'samplingForensicsTable'
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
      this.visible = false
      this.letData.cellIdx0 = this.selectedType
      this.letData.cellIdx0TypeTextItem = this.selectedType
      this.letData.cellIdx3 = this.selectedType.substring(0, 1)
      this.letData.cellIdx3TypeTextItem = this.selectedType.substring(0, 1)
      this.letData.cellIdx10 = this.selectedType
      this.letData.cellIdx10TypeTextItem = this.selectedType
      this.letData.cellIdx21 = this.selectedType
      this.letData.cellIdx21TypeTextItem = this.selectedType
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/let";
</style>