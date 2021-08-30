<!-- 现场检查 实施检查 抽样取证通知书 -->
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
            <div class="textAlignCenter formHeader3">抽 样 取 证 通 知 书</div>
            <div class="stdRowH"></div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_0"
                  align="right"
                  style="width:60%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx0', '', 'TextItem')"
                >{{ letData.cellIdx0 }}</td>
                <td class="textAlignLeft cellBottomLine">煤安监</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_1"
                  align="center"
                  style="width:7%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx1', '', 'TextItem')"
                >{{ letData.cellIdx1 }}</td>
                <td class="textAlignLeft cellBottomLine">抽〔</td>
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
                <td class="textAlignLeft cellBottomLine">〕</td>
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
                <td class="textAlignLeft cellBottomLine">号&nbsp;&nbsp;</td>
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
            <table style="border:solid 0px #000;" class="docBody">
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你单位</td>
                <!-- <td
                  style="width:87%"
                  class="cellInput cellBottomLine"
                  id="cell_idx_5"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx5', '', 'TextItem')"
                >{{ letData.cellIdx5 }}</td> -->
                <div
                  style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
                  class="cellInput mutiLineArea"
                  id="cell_idx_5"
                  data-title="违法行为"
                  data-type="textarea"
                  data-src
                  @click="commandFill('cellIdx5', '违法行为', 'DangerTableItem')">
                  <div v-if="letData.cellIdx5 && letData.cellIdx5.length > 0">
                    <p class="show-area-item-p">
                      <span style="padding: 7px;">{{ letData.cellIdx5 }}</span>
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
              </tr>
              <tr>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;涉嫌违法违规。根据《中华人民共和国行政处罚法》第三十七条第二款规定，我</td>
                <td
                  class="cellInput"
                  id="cell_idx_6"
                  style="width:15%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx6', '单位', 'TextItem')"
                >{{ letData.cellIdx6 }}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">决定对你单位的有关证据（详见《抽样取证清单》）采取抽样取证。</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td
                  class="textAlignLeft"
                  style="cursor: pointer;"
                  @click="commandFill('cellIdx7', '抽样取证清单', 'SamplingForensicsTable')"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;附件：抽样取证清单</td>
                <td
                  id="cell_idx_7"
                  style="width:70%;"
                  data-title="附件"
                  data-type="text"
                  data-src
                ></td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;抽样承办人：（签名）</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_8"
                  style="width:59%"
                  data-title="抽样承办人：（签名）"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx8', '抽样承办人：（签名）', 'TextItem')"
                >{{ letData.cellIdx8 }}</td>
              </tr>
              <tr>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;抽样时间：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_9"
                  align="center"
                  style="width:6%"
                  data-title="年"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx9', '年', 'TextItem')"
                >{{ letData.cellIdx9 }}</td>
                <td class="textAlignLeft">年</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_10"
                  align="center"
                  style="width:6%"
                  data-title="月"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx10', '月', 'TextItem')"
                >{{ letData.cellIdx10 }}</td>
                <td class="textAlignLeft">月</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_11"
                  align="center"
                  style="width:6%"
                  data-title="日"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx11', '日', 'TextItem')"
                >{{ letData.cellIdx11 }}</td>
                <td class="textAlignLeft">日</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_12"
                  align="center"
                  style="width:6%"
                  data-title="时"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx12', '时', 'TextItem')"
                >{{ letData.cellIdx12 }}</td>
                <td class="textAlignLeft">时</td>
                <td class="textAlignLeft">&nbsp;&nbsp;抽样地点：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_13"
                  style="width:24.8%"
                  data-title="抽样地点"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx13', '抽样地点', 'TextItem')"
                >{{ letData.cellIdx13 }}</td>
              </tr>
              <tr>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;受送达人（签名）：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_14"
                  style="width:24%"
                  data-title="受送达人（签名）"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx14', '受送达人（签名）', 'TextItem')"
                >{{ letData.cellIdx14 }}</td>
                <td class="textAlignLeft">&nbsp;&nbsp;日&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;期：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_15"
                  style="width:24.6%"
                  data-title="日期"
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx15', '日期', 'DateItem')"
                >{{ letData.cellIdx15 }}</td>
              </tr>
              <tr>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我</td>
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
                <td class="textAlignLeft">地址：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_17"
                  style="width:27.1%"
                  data-title="地址"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx17', '地址', 'TextItem')"
                >{{ letData.cellIdx17 }}</td>
                <td class="textAlignLeft">&nbsp;&nbsp;邮政编码：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_18"
                  style="width:24.8%"
                  data-title="邮政编码"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx18', '邮政编码', 'TextItem')"
                >{{ letData.cellIdx18 }}</td>
              </tr>
              <tr>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我</td>
                <td
                  class="cellInput"
                  id="cell_idx_19"
                  align="center"
                  style="width:8%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx19', '', 'TextItem')"
                >{{ letData.cellIdx19 }}</td>
                <td class="textAlignLeft">联系人：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_20"
                  style="width:24.9%"
                  data-title="联系人"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx20', '联系人', 'TextItem')"
                >{{ letData.cellIdx20 }}</td>
                <td class="textAlignLeft">&nbsp;&nbsp;联系电话：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_21"
                  style="width:24.8%"
                  data-title="联系电话"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx21', '联系电话', 'TextItem')"
                >{{ letData.cellIdx21 }}</td>
              </tr>
            </table>
            <table height="60"></table>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_22"
                  align="right"
                  style="width:95%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx22', '', 'TextItem')"
                >{{ letData.cellIdx22 }}</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td class="cellInput" style="width:55%"></td>
                <td
                  class="cellInput"
                  id="cell_idx_23"
                  align="center"
                  style="width:45%"
                  data-title="日期"
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx23', '日期', 'DateItem')"
                >{{ letData.cellIdx23 }}</td>
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
  name: "Let107",
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
        cellIdx5: {
          page: '23',
          key: 'cellIdx5'
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
        // 2.隐患描述
        // 获取笔录文书中的隐患数据
        const let101Data = await wkPaper.find((item) => {
          return item.caseId === caseId && item.paperType === '1';
        });
        let let101DataPapaerContent = JSON.parse(let101Data.paperContent)
        let dangerObject = getDangerObject(let101DataPapaerContent.dangerItemObject.tableData)
        let cellIdx5String = `${dangerObject.dangerString}`
        // 3.抽样时间9-12
        let now = new Date()
        let cellIdx9Year = now.getFullYear()
        let cellIdx10Month = now.getMonth() + 1
        let cellIdx11Date = now.getDate()
        let cellIdx12Hour = now.getHours()
        // 4.sysOfficeInfo实体中 地址：depAddress、邮政编码：depPost、master、联系电话：phone
        const orgInfo = db.table("orgInfo");
        const orgData = await orgInfo.find(item => item.no === this.$store.state.user.userGroupId)
        let orgSysOfficeInfo = JSON.parse(orgData.sysOfficeInfo)
        let cellIdx17String = orgSysOfficeInfo.depAddress
        let cellIdx18String = orgSysOfficeInfo.depPost
        let cellIdx20String = orgSysOfficeInfo.master
        let cellIdx21String = orgSysOfficeInfo.phone
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
          cellIdx5: cellIdx5String, // 隐患描述
          cellIdx6: null, // 单位
          cellIdx7: null, // 抽样取证清单
          cellIdx8: null, // 抽样承办人：（签名）
          cellIdx9: cellIdx9Year, // 年
          cellIdx9TypeTextItem: cellIdx9Year, // 年
          cellIdx10: cellIdx10Month, // 月
          cellIdx10TypeTextItem: cellIdx10Month, // 月
          cellIdx11: cellIdx11Date, // 日
          cellIdx11TypeTextItem: cellIdx11Date, // 日
          cellIdx12: cellIdx12Hour, // 时
          cellIdx12TypeTextItem: cellIdx12Hour, // 时
          cellIdx13: null, // 抽样地点
          cellIdx14: null, // 受送达人（签名）
          cellIdx15: null, // 日期
          cellIdx16: null, // 单位
          cellIdx17: cellIdx17String, // 地址
          cellIdx17TypeTextItem: cellIdx17String, // 地址
          cellIdx18: cellIdx18String, // 邮政编码
          cellIdx18TypeTextItem: cellIdx18String, // 邮政编码
          cellIdx19: null, // 单位
          cellIdx20: cellIdx20String, // 联系人
          cellIdx20TypeTextItem: cellIdx20String, // 联系人
          cellIdx21: cellIdx21String, // 联系电话
          cellIdx21TypeTextItem: cellIdx21String, // 联系电话
          cellIdx22: null, //
          cellIdx23: null, // 日期
          dangerItemObject: let101DataPapaerContent.dangerItemObject,
          SamplingForensicsTable: {
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
    commandFill (key, title, type) {
      // 判断是否可编辑
      if (this.$refs.letMain.canEdit) {
        // 文书各个字段点击打开左侧弹出编辑窗口
        let dataKey = `${key}Type${type}`
        if (key === 'cellIdx5') {
          this.options[key] = {
            page: '23',
            key: key,
          }
          dataKey = 'dangerItemObject'
        } else if (key === 'cellIdx7') {
          this.options[key] = {
            canEdit: true,
            page: '23', // 控制当前为抽样取证或者先行登记保存证据清单
          }
          dataKey = 'SamplingForensicsTable'
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