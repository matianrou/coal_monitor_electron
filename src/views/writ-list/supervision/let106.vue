<!-- 现场检查 实施检查 责令撤出作业人员指令书 3 -->
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
            <div class="textAlignCenter formHeader3">撤 出 作 业 人 员  指 令 书</div>
            <div class="stdRowH"></div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_0"
                  align="right"
                  style="width:40%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx0', '文书号', 'TextItem')"
                >{{ letData.cellIdx0 }}</td>
                <td>（</td>
                <td
                  class="cellInput "
                  id="cell_idx_1"
                  align="center"
                  style="width:20%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx1', '', 'TextItem')"
                >{{ letData.cellIdx1 }}</td>
                <td class="textAlignLeft ">） 煤安撤〔</td>
                <td
                  class="cellInput "
                  id="cell_idx_2"
                  align="center"
                  style="width:7%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx2', '', 'TextItem')"
                >{{ letData.cellIdx2 }}</td>
                <td class="textAlignLeft ">〕</td>
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
                <td class="textAlignLeft ">号&nbsp;&nbsp;</td>
              </tr>
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_4"
                  style="width:62%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx4', '', 'TextItem')"
                >{{ letData.cellIdx4 }}</td>
                <td class="textAlignLeft">:</td>
              </tr>
            </table>
            <div class="docTextarea">
              <label style="width:5%"></label>
              本机关于

              <span
                @click="commandFill('cellIdx6', '年', 'TextItem')"
              >{{ letData.cellIdx6 ? letData.cellIdx6 : '（XX）'}}</span>
              年
              <span
                @click="commandFill('cellIdx7', '月', 'TextItem')"
              >{{ letData.cellIdx7 ? letData.cellIdx7 : '（XX）' }}</span>
              月
              <span
                @click="commandFill('cellIdx8', '日', 'TextItem')"
              >{{ letData.cellIdx8 ? letData.cellIdx8 : '（XX）'}}</span>
              日
              <span
                @click="commandFill('cellIdx9', '时', 'TextItem')"
              >{{ letData.cellIdx9 ? letData.cellIdx9 : '（XX）'}}</span>
              时
              <span
                @click="commandFill('cellIdx10', '时', 'TextItem')"
              >{{ letData.cellIdx10 ? letData.cellIdx10 : '（XX）'}}</span>
              分，在对你单位检查时，发现在
              <span
                @click="commandFill('cellIdx11', '', 'TextItem')"
              >{{ letData.cellIdx11? letData.cellIdx11 : '（点击编辑）' }}</span>
              有
              <span
                @click="commandFill('cellIdx12', '违法行为', 'DangerTableItem')"
              >{{ letData.cellIdx12 ? letData.cellIdx12 : '（点击编辑）'}}</span>
              等威胁作业人员生命安全的紧急情况，现责令立即从
              <span
                @click="commandFill('cellIdx13', '', 'TextItem')"
              >{{ letData.cellIdx13 ? letData.cellIdx13 : '（点击编辑）'}}</span>
              危险区内撤出作业人员。
            </div>
            <table style="border:solid 0px #000;" class="docBody">
              <tr>
                <td style="width:5%"></td>
                <td
                  class="textAlignLeft" style="width:7%"
                >此指令</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_14"
                  align="center"
                  style="width:10%"
                  data-title="年"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx14', '年', 'TextItem')"
                >{{ letData.cellIdx14 }}</td>
                <td class="textAlignLeft" style="width:2%">年</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_15"
                  align="center"
                  style="width:10%"
                  data-title="月"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx15', '月', 'TextItem')"
                >{{ letData.cellIdx15 }}</td>
                <td class="textAlignLeft" style="width:2%">月</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_16"
                  align="center"
                  style="width:10%"
                  data-title="日"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx16', '日', 'TextItem')"
                >{{ letData.cellIdx16 }}</td>
                <td class="textAlignLeft" style="width:2%">日</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_17"
                  align="center"
                  style="width:10%"
                  data-title="时"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx17', '时', 'TextItem')"
                >{{ letData.cellIdx17 }}</td>
                <td class="textAlignLeft" style="width:2%">时</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_18"
                  align="center"
                  style="width:10%"
                  data-title="分"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx18', '分', 'TextItem')"
                >{{ letData.cellIdx18 }}</td>
                <td class="textAlignLeft"  style="width:16%">分现场已作出。</td>
              </tr>
              <tr></tr>
              <tr>
                <td style="width:5%"></td>
                <td
                  class="textAlignLeft" style="width:52%"
                >如果不服本指令，可在接到本指令书之日起60日内向</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_19"
                  style="width:43%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx19', '', 'TextItem')"
                >{{ letData.cellIdx19 }}</td>
                <td  class="textAlignLeft" style="width:14%">人民政府或者</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_20"
                  style="width:49%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx20', '', 'TextItem')"
                >{{ letData.cellIdx20 }}</td>
                <td class="textAlignLeft"  style="width:37%">申请行政复议，或者在6个月内依法向</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_21"
                  style="width:39%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx21', '', 'TextItem')"
                >{{ letData.cellIdx21 }}</td>
                <td class="textAlignLeft" style="width:61%">人民法院提起行政诉讼；复议、诉讼期间不停止执行本指令。</td>
              </tr>

            </table>
            <table height="60"></table>
            <table class="docBody">
              <tr>
                <td class="textAlignLeft" style="width:25%">现场执法人员（签名）：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_22"
                  style="width:33%"
                  data-title="现场执法人员（签名）"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx22', '现场执法人员（签名）', 'TextItem')"
                >{{ letData.cellIdx22 }}</td>
                <td class="textAlignLeft" style="width:12%">执法证号：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_23"
                  style="width:30%"
                  data-title="执法证号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx23', '执法证号', 'TextItem')"
                >{{ letData.cellIdx23 }}</td>
                <td style="width:25%"></td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_24"
                  style="width:33%"
                  data-title="现场执法人员（签名）"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx24', '现场执法人员（签名）', 'TextItem')"
                >{{ letData.cellIdx24 }}</td>
                <td class="textAlignLeft"  style="width:12%">执法证号：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_25"
                  style="width:30%"
                  data-title="日期"
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx25', '执法证号', 'TextItem')"
                >{{ letData.cellIdx25 }}</td>
              </tr>
              <tr>
                <td class="textAlignLeft" style="width:25%">被检查单位负责人意见：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_26"
                  style="width:21%"
                  data-title="被检查单位负责人意见"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx26', '被检查单位负责人意见', 'TextItem')"
                >{{ letData.cellIdx26 }}</td>
                <td class="textAlignLeft" style="width:7%">签名：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_27"
                  style="width:20%"
                  data-title="签名"
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx27', '签名', 'TextItem')"
                >{{ letData.cellIdx27}}</td>
                <td class="textAlignLeft" style="width:7%">日期：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_28"
                  style="width:20%"
                  data-title="日期"
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx28', '日期', 'DateItem')"
                >{{ letData.cellIdx28}}</td>
              </tr>
            </table>
            <table height="30"></table>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_29"
                  align="right"
                  style="width:95%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx29', '', 'TextItem')"
                >{{ letData.cellIdx29? letData.cellIdx29 : '（点击编辑）' }}</td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_30"
                  align="right"
                  style="width:95%"
                  data-title
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx30', '日期', 'DateItem')"
                >{{letData.cellIdx30 ? letData.cellIdx30 : '（点击编辑）'}}</td>
              </tr>
            </table>
            <table>
              <hr />
              <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;备注：本文书一式两份，一份交被检查单位，一份存档。</td>
            </table>
          </div>
        </div>
      </div>
    </let-main>
  </div>
</template>

<script>
import letMain from "@/views/make-law-writ/components/let-main.vue";
import GoDB from "@/utils/godb.min.js";
import { getDangerObject, getDocNumber } from '@/utils/setInitPaperData'
export default {
  name: "Let106",
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
        cellIdx12: {
          page: '3',
          key: 'cellIdx12'
        },
      },
      editData: {}, // 回显数据
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
        // 1.生成文书编号
        let { num0, num1, num3, num4 } = await getDocNumber(db, this.docData.docTypeNo, caseId, this.$store.state.user)
        // 2.时间
        let now = new Date()
        let cellIdx6Year = now.getFullYear()
        let cellIdx7Month = now.getMonth() + 1
        let cellIdx8Date = now.getDate()
        let cellIdx9Hour = now.getHours()
        let cellIdx10Minu = now.getMinutes()
        // 3.隐患描述
        // 获取笔录文书中的隐患数据
        const let101Data = await wkPaper.find((item) => {
          return item.caseId === caseId && item.paperType === '1';
        });
        let let101DataPapaerContent = JSON.parse(let101Data.paperContent)
        let dangerObject = getDangerObject(let101DataPapaerContent.dangerItemObject.tableData)
        let cellIdx12String = dangerObject.dangerString
        // 4.sysOfficeInfo中organName和courtPrefix
        const orgInfo = db.table("orgInfo");
        const orgData = await orgInfo.find(item => item.no === this.$store.state.user.userGroupId)
        let orgSysOfficeInfo = orgData ? JSON.parse(orgData.sysOfficeInfo) : {organName: '', courtPrefix: ''}
        let cellIdx20String = orgSysOfficeInfo.organName
        let cellIdx21String = orgSysOfficeInfo.courtPrefix
        this.letData = {
          cellIdx0: num0, // 文书号
          cellIdx0TypeTextItem: num0, // 文书号
          cellIdx1: num1, // 文书号
          cellIdx1TypeTextItem: num1, // 文书号
          cellIdx2: num3, // 文书号
          cellIdx2TypeTextItem: num3, // 文书号
          cellIdx3: num4, // 文书号
          cellIdx3TypeTextItem: num4, // 文书号
          cellIdx4: corp.corpName ? corp.corpName : null, // corpname
          cellIdx4TypeTextItem: corp.corpName ? corp.corpName : null, // corpname
          // cellIdx5: null, // 单位
          cellIdx6: cellIdx6Year, // 年
          cellIdx6TypeTextItem: cellIdx6Year, // 年
          cellIdx7: cellIdx7Month, // 月
          cellIdx7TypeTextItem: cellIdx7Month, // 月
          cellIdx8: cellIdx8Date, // 日
          cellIdx8TypeTextItem: cellIdx8Date, // 日
          cellIdx9: cellIdx9Hour, // 时
          cellIdx9TypeTextItem: cellIdx9Hour, // 时
          cellIdx10: cellIdx10Minu, // 分
          cellIdx10TypeTextItem: cellIdx10Minu, // 分
          cellIdx11: null, // 发现在。。。有
          cellIdx12: cellIdx12String, // 违法行为
          cellIdx13: null, // 现责令立即从XXX危险区内撤出作业人员
          cellIdx14: cellIdx6Year, // 年
          cellIdx14TypeTextItem: cellIdx6Year, // 年
          cellIdx15: cellIdx7Month, // 月
          cellIdx15TypeTextItem: cellIdx7Month, // 月
          cellIdx16: cellIdx8Date, // 日
          cellIdx16TypeTextItem: cellIdx8Date, // 日
          cellIdx17: cellIdx9Hour, // 时
          cellIdx17TypeTextItem: cellIdx9Hour, // 时
          cellIdx18: cellIdx10Minu, // 分
          cellIdx18TypeTextItem: cellIdx10Minu, // 分
          cellIdx19: orgSysOfficeInfo.goverPrefix, // 人民政府
          cellIdx19TypeTextItem: orgSysOfficeInfo.goverPrefix, // 人民政府
          cellIdx20: cellIdx20String, // 机构名
          cellIdx20TypeTextItem: cellIdx20String, // 机构名
          cellIdx21: cellIdx21String, // 人民法院
          cellIdx21TypeTextItem: cellIdx21String, // 人民法院
          cellIdx22: null, // 现场执法人员（签名）
          cellIdx23: null, // 执法证号
          cellIdx24: null, // 现场执法人员（签名）
          cellIdx25: null, // 执法证号
          cellIdx26: null, //被检查单位负责人意见
          cellIdx27: null, // 签名
          cellIdx28: null, // 日期
          cellIdx29: null, //
          cellIdx30: null, // 日期
          dangerItemObject: let101DataPapaerContent.dangerItemObject
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
        if (key === 'cellIdx12') {
          this.options[key] = {
            page: '3',
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
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/let";
</style>