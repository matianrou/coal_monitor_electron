<!-- 现场检查 复查 复查意见书 13 -->
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
            <div class="textAlignCenter formHeader3">复 查 意 见 书</div>
            <div class="stdRowH"></div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput "
                  id="cell_idx_0"
                  align="right"
                  style="width:40%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx0', '', 'TextItem')"
                >{{ letData.cellIdx0 }}</td>
                <td>(</td>
                <td
                  class="cellInput "
                  id="cell_idx_1"
                  align="center"
                  style="width:20%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx1', '', 'TextItem')"
                >{{ letData.cellIdx1 }})</td>
                <td class="textAlignLeft ">煤安复〔</td>
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
            <table style="border:solid 0px #000;" class="docBody">
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_5"
                  align="center"
                  style="width:20%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx5', '', 'TextItem')"
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
                <td class="textAlignLeft">日发现</td>
                <!-- <td
                  style="width:36.5%"
                  class="cellInput cellBottomLine"
                  id="cell_idx_9"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx9', '违法违规行为', 'DangerTableItem')"
                >{{ letData.cellIdx9 }}</td> -->
                <div
                  style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
                  class="cellInput mutiLineArea"
                  id="cell_idx_9"
                  data-title="违法行为"
                  data-type="textarea"
                  data-src
                  @click="commandFill('cellIdx9', '违法行为', 'DangerTableItem')">
                  <div v-if="letData.cellIdx9 && letData.cellIdx9.length > 0">
                    <p class="show-area-item-p">
                      <span style="padding: 7px;">{{ letData.cellIdx9 }}</span>
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
                <td class="textAlignLeft">的违法违规行为，依法作出了</td>
                <div
                  style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
                  class="cellInput mutiLineArea"
                  id="cell_idx_10"
                  data-title="现场处理决定"
                  data-type="textarea"
                  data-src
                  @click="commandFill('cellIdx10', '现场处理决定', 'DangerTableItem')">
                  <div v-if="letData.cellIdx10 && letData.cellIdx10.length > 0">
                    <p class="show-area-item-p">
                      <span style="padding: 7px;">{{ letData.cellIdx10 }}</span>
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
                <td class="textAlignLeft">的决定。</td>
              </tr>
              <tr>
                <td style="width:5%"></td>
                <td class="textAlignLeft">应你单位申请，经复查，意见如下：</td>
              </tr>
              <tr></tr>
            </table>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              id="cell_idx_11"
              data-title="意见"
              data-type="textarea"
              data-src
              @click="commandFill('cellIdx11', '意见', 'TextareaItem')"
            >
              <p
                style="width:100%; height:auto; word-wrap:break-word;word-wrap: break-all; overflow: hidden;"
              >&nbsp;{{ letData.cellIdx11 }}</p>
              <cell-line></cell-line>
            </div>
            <table class="docBody">
              <tr>
                <td class="textAlignLeft">现场执法人员（签名):</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_12"
                  align="center"
                  style="width:30%"
                  data-title="现场执法人员（签名)"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx12', '现场执法人员（签名)', 'TextItem')"
                >{{letData.cellIdx12}}</td>
                <td class="textAlignCenter">执法证号：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_13"
                  align="center"
                  style="width:37%"
                  data-title="执法证号"
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx13', '执法证号', 'TextItem')"
                >{{letData.cellIdx13}}</td>
                <td style="width:21%"></td>
                 <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_14"
                  align="center"
                  style="width:30%"
                  data-title="现场执法人员（签名)"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx14', '现场执法人员（签名)', 'TextItem')"
                >{{letData.cellIdx14}}</td>
                <td class="textAlignCenter">执法证号：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_15"
                  align="center"
                  style="width:37%"
                  data-title="执法证号"
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx15', '执法证号', 'TextItem')"
                >{{letData.cellIdx15}}</td>
              </tr>
              <tr>

                <td class="textAlignLeft">被检查单位意见：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_16"
                  align="center"
                  style="width:18%"
                  data-title="被检查单位意见"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx16', '被检查单位意见', 'TextItem')"
                >{{letData.cellIdx16}}</td>
                <td class="textAlignLeft">单位负责人（签名）：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_17"
                  align="center"
                  style="width:15%"
                  data-title="单位负责人（签名)"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx17', '单位负责人（签名)', 'TextItem')"
                >{{letData.cellIdx17}}</td>
                <td class="textAlignCenter">日期：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_18"
                  align="center"
                  style="width:19%"
                  data-title="日期"
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx18', '日期：', 'DateItem')"
                >{{letData.cellIdx18}}</td>
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
                >{{letData.cellIdx23 ? letData.cellIdx18 : '（点击编辑）'}}</td>
              </tr>
            </table>
            <table>
              <hr />
              <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;备注：本文书一式两份，一份交被复查单位，一份存档。</td>
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
  name: "Let104",
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
        cellIdx9: {
          page: '13',
          key: 'cellIdx9'
        },
        cellIdx10: {
          page: '13',
          key: 'cellIdx10'
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
          item.caseId === caseId && item.paperType === this.docData.docTypeNo
        );
      });
      // await wkPaper.delete(checkPaper[0].id)
      // 已做文书则展示文书内容，否则创建初始版本
      if (checkPaper.length > 0) {
        // 回显
        this.letData = JSON.parse(checkPaper[0].paperContent);
        this.editData = checkPaper[0];
      } else {
        // 创建初始版本
        // 1.生成文书编号
        let { num0, num1, num3, num4 } = await getDocNumber(db, this.docData.docTypeNo, caseId, this.$store.state.user)
        // 2.发现你矿存在：隐患描述
        // 获取笔录文书中的隐患数据
        const let101Data = await wkPaper.find((item) => {
          return item.caseId === caseId && item.paperType === '1';
        });
        let let101DataPapaerContent = JSON.parse(let101Data.paperContent)
        let dangerObject = getDangerObject(let101DataPapaerContent.dangerItemObject.tableData, {danger: true})
        let cellIdx9String = dangerObject.dangerString
        let cellIdx10String = dangerObject.onsiteDescString
        this.letData = {
          cellIdx0: num0, // 文书号
          cellIdx0TypeTextItem: num0, // 文书号
          cellIdx1: num1, // 文书号
          cellIdx1TypeTextItem: num1, // 文书号
          cellIdx2: num3, // 文书号
          cellIdx2TypeTextItem: num3, // 文书号
          cellIdx3: num4, // 文书号
          cellIdx3TypeTextItem: num4, // 文书号
          cellIdx4: corp.corpName ? corp.corpName : null, //
          cellIdx4TypeTextItem: corp.corpName ? corp.corpName : null, //
          cellIdx5: null, // 单位
          cellIdx6: null, // 年
          cellIdx7: null, // 月
          cellIdx8: null, // 日
          cellIdx9: cellIdx9String, // 违法违规行为：隐患描述
          cellIdx10: cellIdx10String, // 现场处理决定
          cellIdx11: null, // 意见
          cellIdx12: null, // 现场执法人员（签名)
          cellIdx13: null, // 执法证号
          cellIdx14: null, // 现场执法人员（签名)
          cellIdx15: null, // 执法证号
          cellIdx16: null, // 被检查单位意见
          cellIdx17: null, // 单位负责人（签名)
          cellIdx18: null, // 日期
          cellIdx19: null, //
          cellIdx20: null, // 日期
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
        if (key === 'cellIdx9' || key === 'cellIdx10') {
          this.options[key] = {
            page: '13',
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