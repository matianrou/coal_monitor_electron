<!-- 现场检查 实施检查  查封(扣押)处理决定书 -->
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
                <td class="textAlignLeft ">（</td>
                <td
                  class="cellInput "
                  id="cell_idx_2"
                  align="center"
                  style="width:12%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx2', '', 'TextItem')"
                >{{ letData.cellIdx2 }}</td>
                <td class="textAlignLeft ">）</td>
                <td class="textAlignLeft ">煤安 </td>
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
                <td  class="textAlignLeft ">处&nbsp;&nbsp;&nbsp;&nbsp;〔</td>
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
                  style="width:8%"
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
            <table style="border:solid 0 #000;" class="docBody">
             <tr>
                <td style="width:5%"></td>
                <td class="textAlignLeft">本机关于</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_7"
                  align="center"
                  style="width:8%"
                  data-title="年"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx7', '年', 'TextItem')"
                >{{ letData.cellIdx7 }}</td>
                <td class="textAlignLeft">年</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_8"
                  align="center"
                  style="width:8%"
                  data-title="月"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx8', '月', 'TextItem')"
                >{{ letData.cellIdx8 }}</td>
                <td class="textAlignLeft">月</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_9"
                  align="center"
                  style="width:8%"
                  data-title="日"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx9', '日', 'TextItem')"
                >{{ letData.cellIdx9 }}</td>
                <td class="textAlignLeft">日向你单位作出&nbsp;&nbsp;《</td>
                <td
                  style="width:9%"
                  class="cellInput "
                  id="cell_idx_10"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx10', '', 'TextItem')"
                >{{ letData.cellIdx10 }}</td>
                <td class="textAlignLeft">决定书》&nbsp;&nbsp;</td>
                <td class="textAlignLeft" >(</td>
                <td
                  class="cellInput"
                  id="cell_idx_11"
                  align="center"
                  style="width:8%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx11', '', 'TextItem')"
                >{{ letData.cellIdx11 }}</td>
                <td>(</td>
                 <td
                  class="cellInput"
                  id="cell_idx_12"
                  align="center"
                  style="width:8%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx12', '', 'TextItem')"
                >{{ letData.cellIdx12 }}</td>
                <td>)  </td>
                <td class="textAlignLeft">&nbsp;&nbsp;煤安</td>
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
                <td class="textAlignLeft">〔</td>
                <td
                  class="cellInput"
                  id="cell_idx_14"
                  align="center"
                  style="width:8%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx14', '', 'TextItem')"
                >{{ letData.cellIdx14 }}</td>
                <td class="textAlignLeft">〕</td>
                <td
                  class="cellInput"
                  id="cell_idx_15"
                  align="center"
                  style="width:8%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx15', '', 'TextItem')"
                >{{ letData.cellIdx15 }}</td>
                <td class="textAlignLeft ">号&nbsp;&nbsp;)</td>
                 <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;对所附</td>
                <td
                  class="cellInput "
                  id="cell_idx_16"
                  align="center"
                  style="width:30%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx16', '物品清单', 'SamplingForensicsTable')"
                >《物品清单》所列物品予以</td>
                <!-- <td class="textAlignLeft"></td> -->
                <!-- <td class="textAlignLeft">号）。现根据《中华人民</td> -->
              </tr>
              <tr>
                <td
                  class="cellInput "
                  id="cell_idx_17"
                  align="center"
                  style="width:8%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx17', '', 'TextItem')"
                >{{ letData.cellIdx17 }}</td>
                <td  class="textAlignLeft">。现根据《中华人民共和国行政强制法》
                  第二十七条</td>
                <td
                  class="cellInput "
                  id="cell_idx_18"
                  align="center"
                  style="width:18%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx18', '', 'TextItem')"
                >{{ letData.cellIdx18 ? letData.cellIdx18 : '点击编辑' }}</td>
                  <td  class="textAlignLeft">、第二十八条第一款第</td>
                  <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_19"
                  align="center"
                  style="width:8%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx19', '', 'TextItem')"
                >{{ letData.cellIdx19 }}</td>
                <td  class="textAlignLeft">项的</td>
                <td  class="textAlignLeft">规定，作出处理决定：具体处理决定详见《</td>
                <td
                  class="cellInput "
                  id="cell_idx_20"
                  align="center"
                  style="width:6%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx20', '', 'TextItem')"
                >{{ letData.cellIdx20 }}</td>
                <td  class="textAlignLeft">物品处理表》。</td>
              </tr>
              <tr>
                <td style="width:5%"></td>
                <td
                  class="textAlignLeft"
                >如果不服本决定，可在接到本决定书之日起60日内向</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_21"
                  align="center"
                  style="width:43%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx21', '人民政府', 'TextItem')"
                >{{ letData.cellIdx21 }}</td>
              </tr>
              <tr>
                 <td class="textAlignLeft">人民政府或者</td>
                 <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_22"
                  align="center"
                  style="width:49%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx22', '', 'TextItem')"
                >{{ letData.cellIdx22 }}</td>
                <td class="textAlignLeft">申请行政复议，或者在6个月内依法向</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_23"
                  align="center"
                  style="width:37%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx23', '人民法院', 'TextItem')"
                >{{ letData.cellIdx23 }}</td>
                <td class="textAlignLeft">人民法院提起行政诉讼；复议、诉讼期间，不停止执行本决定。</td>
              </tr>
            </table>
            <table height="60"></table>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_24"
                  style="width:30%"
                  data-title="附件"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx16', '物品清单', 'SamplingForensicsTable')"
                >附件：物品清单</td>
              </tr>
            </table>
            <table height="30"></table>
           <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_25"
                  align="right"
                  style="width:95%"
                  @click="commandFill('cellIdx25', '', 'TextItem')"
                >{{letData.cellIdx25 ? letData.cellIdx25 : '（点击编辑）'}}</td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_27"
                  align="right"
                  style="width:95%"
                  data-title
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx26', '日期', 'DateItem')"
                >{{letData.cellIdx26 ? letData.cellIdx26 : '（点击编辑）'}}</td>
              </tr>
            </table>
            <table height="60"></table>

            <table>
              <hr />
              <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;备注：本文书一式两份，一份交被</td>
              <td
                class="cellInput"
                id="cell_idx_28"
                align="center"
                style="width:15%"
                data-title
                data-type="text"
                data-src
                @click="commandFill('cellIdx28', '单位', 'TextItem')"
                >{{ letData.cellIdx28 }}</td>
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
      options: {},
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
        // 3.地点：sysOfficeInfo实体中organName字段+ courtPrefix字段
        const orgInfo = db.table("orgInfo");
        const orgData = await orgInfo.find(item => item.no === this.$store.state.user.userGroupId)
        let orgSysOfficeInfo = orgData ? JSON.parse(orgData.sysOfficeInfo) : {organName: '', courtPrefix: ''}
        // 4.查封扣押文书号
        const let110Data = await wkPaper.find((item) => {
          return item.caseId === caseId && item.paperType === '32';
        });
        if (!let110Data) {
          this.$message.error('请先填写并保存查封(扣押)决定书中内容！')
          return
        }
        let let110DataPapaerContent = JSON.parse(let110Data.paperContent)
        let let110Date = let110DataPapaerContent.cellIdx20 ? let110DataPapaerContent.cellIdx20.replace('年', '-').replace('月', '-').replace('日', '-').split('-') : ['', '', '']
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
          cellIdx7: let110Date[0], // 年
          cellIdx8: let110Date[1], // 月
          cellIdx9: let110Date[2], // 日
          cellIdx10: let110DataPapaerContent.cellIdx0, // 查封(扣押)
          cellIdx11: let110DataPapaerContent.cellIdx1, // 查封扣押文书号
          cellIdx11TypeTextareaItem: let110DataPapaerContent.cellIdx1, // 查封扣押文书号
          cellIdx12: let110DataPapaerContent.cellIdx2, // 查封扣押文书号
          cellIdx12TypeTextareaItem: let110DataPapaerContent.cellIdx2, // 查封扣押文书号
          cellIdx13: let110DataPapaerContent.cellIdx3, // 查封扣押文书号 查、扣
          cellIdx13TypeTextareaItem: let110DataPapaerContent.cellIdx3, // 查封扣押文书号 查、扣
          cellIdx14: let110DataPapaerContent.cellIdx4, // 查封扣押文书号
          cellIdx14TypeTextareaItem: let110DataPapaerContent.cellIdx4, // 查封扣押文书号
          cellIdx15: let110DataPapaerContent.cellIdx5, // 查封扣押文书号
          cellIdx15TypeTextareaItem: let110DataPapaerContent.cellIdx5, // 查封扣押文书号
          cellIdx16: null, // 查封扣押中的物品清单
          cellIdx17: null, // 查封/扣押
          cellIdx18: null, // 第二十七条、XXX第二十八条第一款第
          cellIdx19: null, // 第二十八条第一款第XX项的规定
          cellIdx20: null, // 查封/扣押
          cellIdx21: null, // 人民政府
          cellIdx22: orgSysOfficeInfo.organName, // organName
          cellIdx22TypeTextItem: orgSysOfficeInfo.organName, // organName
          cellIdx23: orgSysOfficeInfo.courtPrefix, // courtPrefix人民法院
          cellIdx23TypeTextItem: orgSysOfficeInfo.courtPrefix, // courtPrefix人民法院
          // cellIdx24: null, // 附件
          cellIdx25: null, //
          cellIdx26: null, // 日期
          SamplingForensicsTable: let110DataPapaerContent.SamplingForensicsTable
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
        if (key === 'cellIdx16') {
          this.options[key] = {
            canEdit: true,
            page: this.docData.docTypeNo, // 物品清单
            name: this.selectedType
          }
          dataKey = 'SamplingForensicsTable'
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
      this.letData.cellIdx0 = `${this.selectedType}处理`
      this.letData.cellIdx0TypeTextItem = `${this.selectedType}处理`
      this.letData.cellIdx17 = this.selectedType
      this.letData.cellIdx17TypeTextItem = this.selectedType
      this.letData.cellIdx20 = this.selectedType
      this.letData.cellIdx20TypeTextItem = this.selectedType
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/let";
</style>