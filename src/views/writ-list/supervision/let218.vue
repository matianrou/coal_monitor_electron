<!-- 行政处罚 听证程序  听证会报告书 -->
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
              <br/>
            </div>
            <div class="textAlignCenter formHeader1">听证会报告书</div>
            <div class="stdRowH"></div>
            <table style="border:solid 0 #000;" class="docBody">
              <tr>
                <td
                    class="cellInput "
                    id="cell_idx_0"
                    align="center"
                    style="width:68%"
                    data-title=""
                    data-type="text"
                    data-src
                    @click="commandFill('cellIdx0', '', 'TextItem')"
                >{{ letData.cellIdx0 }}
                </td>
                <td class="textAlignLeft">编号：</td>
                <td
                    class="cellInput cellBottomLine"
                    id="cell_idx_1"
                    align="center"
                    style="width:25%"
                    data-title="编号"
                    data-type="text"
                    data-src
                    @click="commandFill('cellIdx1', '编号', 'TextItem')"
                >{{ letData.cellIdx1 }}
                </td>
              </tr>
              <tr>
                <td class="textAlignLeft">案由：</td>
              </tr>
              <div
                style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
                class="cellInput mutiLineArea"
                id="cell_idx_2"
                data-title="案由"
                data-type="textarea"
                data-src
                @click="commandFill('cellIdx2', '案由', 'DangerTableItem')">
                <div v-if="letData.cellIdx2 && letData.cellIdx2.length > 0">
                  <p class="show-area-item-p">
                    <span style="padding: 7px;">{{ letData.cellIdx2? letData.cellIdx2 : '（点击编辑）' }}</span>
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
            </table>
            <table class="docBody">
              <tr>
                <td class="textAlignLeft" style="width:14%">听证主持人：</td>
                <td
                    class="cellInput cellBottomLine"
                    id="cell_idx_3"
                    align="center"
                    style="width:24%"
                    data-title="听证主持人"
                    data-type="text"
                    data-src
                    @click="commandFill('cellIdx3', '听证主持人', 'TextItem')"
                >{{ letData.cellIdx3 }}
                </td>
                <td class="textAlignCenter">&nbsp;&nbsp;</td>
                <td
                    class="cellInput cellBottomLine"
                    id="cell_idx_4"
                    align="center"
                    style="width:24%"
                    data-title="听证主持人"
                    data-type="text"
                    data-src
                    @click="commandFill('cellIdx4', '听证主持人', 'TextItem')"
                >{{ letData.cellIdx4 }}
                </td>
                <td class="textAlignLeft" style="width:10%">&nbsp;记录人：</td>
                <td
                    class="cellInput cellBottomLine"
                    id="cell_idx_5"
                    align="center"
                    style="width:26%"
                    data-title="记录人"
                    data-type="text"
                    data-src
                    @click="commandFill('cellIdx5', '记录人', 'TextItem')"
                >{{ letData.cellIdx5 }}
                </td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td class="textAlignLeft" style="width:23%">听证会基本情况摘要：</td>
              </tr>
              <div
                style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
                class="cellInput mutiLineArea"
                id="cell_idx_6"
                data-title="听证会基本情况摘要"
                data-type="textarea"
                data-src
                @click="commandFill('cellIdx6', '听证会基本情况摘要', 'DangerTableItem')">
                <div v-if="letData.cellIdx6 && letData.cellIdx6.length > 0">
                  <p class="show-area-item-p">
                    <span style="padding: 7px;">{{ letData.cellIdx6? letData.cellIdx6 : '（点击编辑）' }}</span>
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
            </table>
            <table class="docBody">
              <tr>
                <td class="textAlignLeft" style="width:23%">听证主持人意见：</td>
              </tr>
              <div
                style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
                class="cellInput mutiLineArea"
                id="cell_idx_7"
                data-title="听证主持人意见"
                data-type="textarea"
                data-src
                @click="commandFill('cellIdx7', '听证主持人意见', 'DangerTableItem')">
                <div v-if="letData.cellIdx7 && letData.cellIdx7.length > 0">
                  <p class="show-area-item-p">
                    <span style="padding: 7px;">{{ letData.cellIdx7? letData.cellIdx7 : '（点击编辑）' }}</span>
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
            </table>
            <table class="docBody">
              <tr>
                <td
                  class="textAlignLeft" style="width:23%"
                >听证主持人（签名）：
                </td>
                <td
                    class="cellInput cellBottomLine"
                    id="cell_idx_8"
                    align="center"
                    style="width:49%"
                    data-title="听证主持人（签名）"
                    data-type="text"
                    data-src
                    @click="commandFill('cellIdx8', '听证主持人（签名）', 'TextItem')"
                >{{ letData.cellIdx8 }}
                </td>
                <td class="textAlignCenter">&nbsp;日期：</td>
                <td
                    class="cellInput cellBottomLine"
                    id="cell_idx_9"
                    align="center"
                    style="width:20.5%"
                    data-title="日期"
                    data-type="text"
                    data-src
                    @click="commandFill('cellIdx9', '日期', 'DateItem')"
                >{{ letData.cellIdx9 }}
                </td>
              </tr>
              <tr>
                <td
                    class="textAlignLeft" style="width:18%"
                >负责人审核意见：
                </td>
                <td
                    class="cellInput cellBottomLine"
                    id="cell_idx_10"
                    align="center"
                    style="width:20%"
                    data-title="负责人审核意见"
                    data-type="text"
                    data-src
                    @click="commandFill('cellIdx10', '负责人审核意见', 'TextItem')"
                >{{ letData.cellIdx10 }}
                </td>
                <td
                    class="textAlignLeft " style="width:18%"
                >负责人（签名）：
                </td>
                <td
                    class="cellInput cellBottomLine"
                    id="cell_idx_11"
                    align="center"
                    style="width:17%"
                    data-title="负责人（签名）"
                    data-type="text"
                    data-src
                    @click="commandFill('cellIdx11', '负责人（签名）', 'TextItem')"
                >{{ letData.cellIdx11 }}
                </td>
                <td class="textAlignCenter">日期：</td>
                <td
                    class="cellInput cellBottomLine"
                    id="cell_idx_12"
                    align="center"
                    style="width:20%"
                    data-title="日期"
                    data-type="text"
                    data-src
                    @click="commandFill('cellIdx12', '日期', 'DateItem')"
                >{{ letData.cellIdx12 }}
                </td>
              </tr>
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
import {getDangerObject} from '@/utils/setInitPaperData'

export default {
  name: "Let205",
  props: {
    corpData: {
      type: Object,
      default: () => {
      },
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
        cellIdx2: {
          page: '30',
          key: 'cellIdx2' // 用来区分一个页面多个地方调用隐患大表，最后返回值
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
      // 保存额外拼写的数据内容，用于修改隐患项时回显使用
      this.extraData = {
        corpName: corp.corpName,
      }
      // 已做文书则展示文书内容，否则创建初始版本
      if (checkPaper.length > 0) {
        // 回显
        this.letData = JSON.parse(checkPaper[0].paperContent);
        this.editData = checkPaper[0];
      } else {
        // 创建初始版本
        // 获取笔录文书中的隐患数据
        const let101Data = await wkPaper.find((item) => {
          return item.caseId === caseId && item.paperType === '1';
        });
        if (!let101Data) {
          this.$message.error('请先填写并保存现场检查记录中内容！')
          return
        }
        let let101DataPapaerContent = JSON.parse(let101Data.paperContent)
        let dangerObject = getDangerObject(let101DataPapaerContent.dangerItemObject.tableData)
        // 案由：煤矿名称 + '涉嫌' + 隐患描述 + '案。'
        let cellIdx2String = `${corp.corpName}涉嫌${dangerObject.dangerString}案。`
        this.letData = {
          cellIdx0: null, //
          cellIdx1: null, // 编号
          cellIdx2: cellIdx2String, // 案由
          cellIdx3: null, // 听证主持人
          cellIdx4: null, // 听证主持人
          cellIdx5: null, // 记录人
          cellIdx6: null, // 听证会基本情况摘要
          cellIdx7: null, // 听证主持人意见
          cellIdx8: null, // 听证主持人（签名）
          cellIdx9: null, // 日期
          cellIdx10: null, // 负责人审核意见
          cellIdx11: null, // 负责人（签名）
          cellIdx12: null, // 日期
          dangerItemObject: let101DataPapaerContent.dangerItemObject
        };
      }
      await db.close();
    },
    goBack({page}) {
      // 返回选择企业
      this.$emit("go-back", {page});
    },
    commandFill(key, title, type) {
      // 判断是否可编辑
      if (this.$refs.letMain.canEdit) {
        // 文书各个字段点击打开左侧弹出编辑窗口
        let dataKey = `${key}Type${type}`;
        if (key === 'cellIdx2') {
          this.options[key] = {
            page: '30',
            key: key,
            spellString: this.extraData
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