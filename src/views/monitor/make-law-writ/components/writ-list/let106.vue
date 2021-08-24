<!-- 现场检查 实施检查 撤出作业人员命令书 -->
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
              国 家 煤 矿 安 全 监 察
              <br />
            </div>
            <div class="textAlignCenter formHeader3">撤 出 作 业 人 员 命 令 书</div>
            <div class="stdRowH"></div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_0"
                  align="right"
                  style="width:50%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx0', '文书号', 'TextItem')"
                >{{ letData.cellIdx0 }}</td>
                <td class="textAlignLeft cellBottomLine">煤安监</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_1"
                  align="center"
                  style="width:17%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx1', '文书号', 'TextItem')"
                >{{ letData.cellIdx1 }}</td>
                <td class="textAlignLeft cellBottomLine">撤〔</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_2"
                  align="center"
                  style="width:7%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx2', '文书号', 'TextItem')"
                >{{ letData.cellIdx2 }}</td>
                <td class="textAlignLeft cellBottomLine">〕</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_3"
                  align="center"
                  style="width:7%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx3', '文书号', 'TextItem')"
                >{{ letData.cellIdx3 }}</td>
                <td class="textAlignLeft cellBottomLine">号&nbsp;&nbsp;</td>
              </tr>
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_4"
                  style="width:50%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx4', '', 'TextItem')"
                  onclick="commandFill(this.id)"
                >{{ letData.cellIdx4 }}</td>
                <td class="textAlignLeft">:</td>
              </tr>
            </table>
            <table style="border:solid 0 #000;" class="docBody">
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我</td>
                <td
                  class="cellInput"
                  id="cell_idx_5"
                  align="center"
                  style="width:15%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx5', '单位', 'TextItem')"
                >{{ letData.cellIdx5 }}</td>
                <td class="textAlignLeft">于</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_6"
                  align="center"
                  style="width:8%"
                  data-title="年"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx6', '年', 'TextItem')"
                >{{ letData.cellIdx6 }}</td>
                <td class="textAlignLeft">年</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_7"
                  align="center"
                  style="width:8%"
                  data-title="月"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx7', '月', 'TextItem')"
                >{{ letData.cellIdx7 }}</td>
                <td class="textAlignLeft">月</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_8"
                  align="center"
                  style="width:8%"
                  data-title="日"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx8', '日', 'TextItem')"
                >{{ letData.cellIdx8 }}</td>
                <td class="textAlignLeft">日</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_9"
                  align="center"
                  style="width:8%"
                  data-title="时"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx9', '时', 'TextItem')"
                >{{ letData.cellIdx9 }}</td>
                <td class="textAlignLeft">时</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_10"
                  align="center"
                  style="width:8%"
                  data-title="分"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx10', '分', 'TextItem')"
                >{{ letData.cellIdx10 }}</td>
                <td class="textAlignLeft">分，在对你单位安全监察</td>
              </tr>
              <tr>
                <td class="textAlignLeft">时，发现在</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_11"
                  style="width:33%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx11', '', 'TextItem')"
                >{{ letData.cellIdx11 }}</td>
                  <td class="textAlignLeft">有</td>
                <td
                  style="width:33%"
                  class="cellInput cellBottomLine"
                  id="cell_idx_12"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx12', '', 'TextItem')"
                >{{ letData.cellIdx12 }}</td>
                <td class="textAlignLeft">等威胁职工生命安</td>
                <td>全的紧急情况，根据《中华人民共和国安全生产法》第六十五条第一款第三项规定，现命令立即从</td>
                <td
                  style="width:55%"
                  class="cellInput cellBottomLine"
                  id="cell_idx_13"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx13', '', 'TextItem')"
                >{{ letData.cellIdx13 }}</td>
                <td class="textAlignLeft">危险区内撤出作业人员。</td>
              </tr>
              <!-- <tr>

                <div
                  style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
                  class="cellInput mutiLineArea"
                  id="cell_idx_7"
                  data-title="违法行为"
                  data-type="textarea"
                  data-src
                  @click="commandFill('cellIdx12', '违法行为', 'DangerTableItem')">
                  <div v-if="letData.cellIdx12 && letData.cellIdx12.length > 0">
                    <p class="show-area-item-p">
                      <span style="padding: 7px;">{{ letData.cellIdx12 }}</span>
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
              </tr> -->
              <!-- <tr>
                <td class="textAlignLeft">等威胁职工生命安全的紧急情况，现命令立即从</td>
                <td
                  style="width:55%"
                  class="cellInput cellBottomLine"
                  id="cell_idx_13"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx13', '', 'TextItem')"
                >{{ letData.cellIdx13 }}</td>
              </tr> -->
              <!-- <tr>
                <td class="textAlignLeft">危险区内撤出作业人员。</td>
              </tr> -->
              <tr>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此命令</td>
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
                <td class="textAlignLeft">年</td>
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
                <td class="textAlignLeft">月</td>
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
                <td class="textAlignLeft">日</td>
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
                <td class="textAlignLeft">时</td>
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
                <td class="textAlignLeft">分现场已作出。</td>
              </tr>
              <tr></tr>
              <tr>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如对本命令不服，可在接到本命令书之日起60日内向</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_19"
                  style="width:41%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx19', '', 'TextItem')"
                >{{ letData.cellIdx19 }}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">申请行政复议或6个月内向</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_20"
                  style="width:20%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx20', '', 'TextItem')"
                >{{ letData.cellIdx20 }}</td>
                <td class="textAlignLeft">人民法院提起行政诉讼，但不停止执行本命令。</td>
              </tr>
            </table>
            <table height="60"></table>
            <table class="docBody">
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;被检查单位负责人意见：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_21"
                  style="width:40%"
                  data-title="被检查单位负责人意见"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx21', '被检查单位负责人意见', 'TextItem')"
                >{{ letData.cellIdx21 }}</td>
                <td class="textAlignLeft">签名：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_22"
                  style="width:22%"
                  data-title="签名"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx22', '签名', 'TextItem')"
                >{{ letData.cellIdx22 }}</td>
                <td class="textAlignLeft">日期：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_23"
                  style="width:92%"
                  data-title="日期"
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx23', '日期', 'DateItem')"
                >{{ letData.cellIdx23 }}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;执法人员（签名)：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_24"
                  style="width:40%"
                  data-title="执法人员（签名)"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx24', '执法人员（签名)', 'TextItem')"
                >{{ letData.cellIdx24 }}</td>
                <td class="textAlignLeft">日期：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_25"
                  style="width:28%"
                  data-title="日期"
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx25', '日期', 'DateItem')"
                >{{ letData.cellIdx25 }}</td>
              </tr>
            </table>
            <table height="30"></table>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_26"
                  align="right"
                  style="width:95%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx26', '', 'TextItem')"
                >{{ letData.cellIdx26 }}</td>
              </tr>
            </table>
            <!-- <table class="docBody">
              <td class="cellInput" style="width:55%"></td>
              <td
                class="cellInput"
                id="cell_idx_27"
                align="center"
                style="width:45%"
                data-title="日期"
                data-type="date"
                data-src
                @click="commandFill('cellIdx27', '日期', 'DateItem')"
              >{{ letData.cellIdx27 }}</td>
            </table> -->
             <table class="docBody">
              <td class="cellInput" style="width:55%"></td>
              <td
                class="cellInput "
                id="cell_idx_27"
                align="center"
                style="width:10%"
                data-title="年"
                data-type="text"
                data-src
                @click="commandFill('cellIdx27', '年', 'TextItem')"
              >{{letData.cellIdx27}}</td>
              <td class="textAlignLeft">年</td>
              <td
                class="cellInput"
                id="cell_idx_28"
                align="center"
                style="width:10%"
                data-title="月"
                data-type="text"
                data-src
                @click="commandFill('cellIdx28', '月', 'TextItem')"
              >{{letData.cellIdx28}}</td>
              <td class="textAlignLeft">月</td>
              <td
                class="cellInput "
                id="cell_idx_29"
                align="center"
                style="width:10%"
                data-title="日"
                data-type="text"
                data-src
                @click="commandFill('cellIdx29', '日', 'TextItem')"
              >{{letData.cellIdx29}}</td>
              <td class="textAlignLeft">日</td>
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
import letMain from "../let-main";
import GoDB from "@/utils/godb.min.js";
import { getDangerObject, getDocNumber } from '@/utils/monitor/setInitPaperData'
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
      const db = new GoDB("CoalMonitorDB");
      const corpBase = db.table("corpBase");
      //查询符合条件的记录
      const corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      const wkPaper = db.table("wkPaper");
      const caseId = this.corpData.caseId;
      const checkPaper = await wkPaper.findAll((item) => {
        return item.caseId === caseId && item.paperType === this.docData.docTypeNo;
      });
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
        let orgSysOfficeInfo = JSON.parse(orgData.sysOfficeInfo)
        let cellIdx19String = orgSysOfficeInfo.organName
        let cellIdx20String = orgSysOfficeInfo.courtPrefix
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
          cellIdx5: null, // 单位
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
          cellIdx12: cellIdx12String, // 隐患描述
          cellIdx13: null, //
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
          cellIdx19: cellIdx19String, // 机构名
          cellIdx19TypeTextItem: cellIdx19String, // 机构名
          cellIdx20: cellIdx20String, // 人民法院
          cellIdx20TypeTextItem: cellIdx20String, // 人民法院
          cellIdx21: null, // 被检查单位负责人意见
          cellIdx22: null, // 签名
          cellIdx23: null, // 日期
          cellIdx24: null, // 执法人员（签名)
          cellIdx25: null, // 日期
          cellIdx26: null, //
          cellIdx27: null, // 日期
          dangerItemObject: let101DataPapaerContent.dangerItemObject
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
        if (key === 'cellIdx12') {
          this.options[key] = {
            page: '3',
            key: key,
          }
          dataKey = 'dangerItemObject'
        }
        this.$refs.letMain.commandFill(key, dataKey, title, type, this.letData[dataKey], this.options[key])
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/let";
</style>