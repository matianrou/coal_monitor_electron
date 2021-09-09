<!-- 行政处罚 一般程序 集体讨论记录 -->
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
            <div class="textAlignCenter formHeader3">集体讨论记录</div>
            <div class="stdRowH"></div>
            <div class="docTextarea">
             <span class="no-line">案由：</span>
              <span
                @click="commandFill('cellIdx0', '案由', 'DangerTableItem')"
              >{{ letData.cellIdx0 ? letData.cellIdx0 : '（点击编辑）'}}</span>
              <div class="line"></div>
            </div>
            <!-- <table style="border:solid 0 #000;" class="docBody">
              <tr>
                <td class="textAlignLeft">案由：</td>
              </tr>
            </table>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              id="cell_idx_0"
              data-title="案由"
              data-type="textarea"
              data-src
              @click="commandFill('cellIdx0', '案由', 'DangerTableItem')">
              <div v-if="letData.cellIdx0 && letData.cellIdx0.length > 0">
                <p class="show-area-item-p">
                  <span style="padding: 7px;">{{ letData.cellIdx0? letData.cellIdx0 : '（点击编辑）' }}</span>
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
            </div> -->
            <table style="border:solid 0 #000;" class="docBody">
              <tr>
                <td class="textAlignLeft" style="width:13%">讨论时间：&nbsp;</td>
              <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_1"
                  align="center"
                  style="width:10%"
                  data-title="年"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx1', '年', 'TextItem')"
                >{{ letData.cellIdx1 }}</td>
                <td class="textAlignLeft" style="width:2%">年</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_2"
                  align="center"
                  style="width:10%"
                  data-title="月"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx2', '月', 'TextItem')"
                >{{ letData.cellIdx2 }}</td>
                <td class="textAlignLeft" style="width:2%">月</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_3"
                  align="center"
                  style="width:10%"
                  data-title="日"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx3', '日', 'TextItem')"
                >{{ letData.cellIdx3 }}</td>
                <td class="textAlignLeft" style="width:2%">日</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_4"
                  align="center"
                   style="width:10%"
                  data-title="时"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx4', '时', 'TextItem')"
                >{{ letData.cellIdx4 }}</td>
                <td class="textAlignLeft" style="width:2%">时</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_5"
                  align="center"
                  style="width:10%"
                  data-title="分"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx5', '分', 'TextItem')"
                >{{ letData.cellIdx5 }}</td>
                <td class="textAlignLeft" style="width:5%">分至</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_6"
                  align="center"
                  style="width:10%"
                  data-title="时"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx6', '时', 'TextItem')"
                >{{ letData.cellIdx6 }}</td>
                <td class="textAlignLeft" style="width:2%">时</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_7"
                  align="center"
                  style="width:10%"
                  data-title="分"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx7', '分', 'TextItem')"
                >{{ letData.cellIdx7 }}</td>
                <td class="textAlignLeft" style="width:2%">分</td>
              </tr>

              <tr>
                <td class="textAlignLeft" style="width:7%">地点：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_8"
                  align="center"
                  style="width:93%"
                  data-title="分"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx8', '地点', 'TextItem')"
                >{{ letData.cellIdx8 }}</td>
              </tr>
               <tr>
                <td class="textAlignLeft" style="width:9%">主持人：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_9"
                  align="center"
                  style="width:25%"
                  data-title="分"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx9', '主持人', 'TextItem')"
                >{{ letData.cellIdx9 }}</td>
                <td class="textAlignLeft" style="width:9%">汇报人：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_10"
                  align="center"
                  style="width:24%"
                  data-title="分"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx10', '汇报人', 'TextItem')"
                >{{ letData.cellIdx10 }}</td>
                <td class="textAlignLeft" style="width:9%">记录人：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_11"
                  align="center"
                  style="width:24%"
                  data-title="分"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx11', '记录人', 'TextItem')"
                >{{ letData.cellIdx11 }}</td>
              </tr>
            </table>
             <div class="docTextarea">
               <span class="no-line"> 出席人员姓名以及职务：</span>
              <span
                @click="commandFill('cellIdx12', '出席人员姓名以及职务', 'TextareaItem')"
              >{{ letData.cellIdx12 ? letData.cellIdx12 : '（点击编辑）'}}</span>
              <div class="line"></div>
            </div>
            <div class="docTextarea">
               <span class="no-line"> 讨论内容：</span>
              <span
                @click="commandFill('cellIdx13', '讨论内容', 'TextareaItem')"
              >{{ letData.cellIdx13 ? letData.cellIdx13 : '（点击编辑）'}}</span>
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line"> 讨论记录：</span>
              <span
                @click="commandFill('cellIdx14', '讨论记录', 'TextareaItem')"
              >{{ letData.cellIdx14 ? letData.cellIdx14 : '（点击编辑）'}}</span>

              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line"> 结论性意见：</span>
              <span
                @click="commandFill('cellIdx15', '结论性意见', 'TextareaItem')"
              >{{ letData.cellIdx15 ? letData.cellIdx15 : '（点击编辑）'}}</span>
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line"> 出席人员签名：</span>
              <span
                @click="commandFill('cellIdx16', '出席人员签名', 'TextItem')"
              >{{ letData.cellIdx16 ? letData.cellIdx16 : '（点击编辑）'}}</span>
              <div class="line"></div>
            </div>
             <!-- <table style="border:solid 0s #000;" class="docBody">
              <tr>
                <td class="textAlignLeft">出席人员姓名以及职务</td>
              </tr>
            </table>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              id="cell_idx_12"
              data-title="出席人员姓名以及职务"
              data-type="textarea"
              data-src
              @click="commandFill('cellIdx12', '出席人员姓名以及职务', 'TextareaItem')">
              <div v-if="letData.cellIdx12">
                <p class="show-area-item-p">
                  <span style="padding: 7px;">{{ letData.cellIdx12 ? letData.cellIdx12 : '（点击编辑）'}}</span>
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
            </div> -->
            <!-- <table style="border:solid 0s #000;" class="docBody">
              <tr>
                <td class="textAlignLeft">讨论内容：</td>
              </tr>
            </table>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              id="cell_idx_13"
              data-title="讨论内容"
              data-type="textarea"
              data-src
              @click="commandFill('cellIdx13', '讨论内容', 'TextareaItem')">
              <p class="show-area-item-p">
                <span style="padding: 7px;">{{ letData.cellIdx13 ? letData.cellIdx13 : '（点击编辑）' }}</span>
              </p>
              <cell-line></cell-line>
            </div> -->
            <!-- <table style="border:solid 0s #000;" class="docBody">
              <tr>
                <td class="textAlignLeft">讨论记录：</td>
              </tr>
            </table>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              id="cell_idx_14"
              data-title="讨论记录"
              data-type="textarea"
              data-src
              @click="commandFill('cellIdx14', '讨论记录', 'TextareaItem')">
              <p class="show-area-item-p">
                <span style="padding: 7px;">{{ letData.cellIdx14 ? letData.cellIdx14 : '（点击编辑）' }}</span>
              </p>
              <cell-line></cell-line>
            </div>
            <table style="border:solid 0s #000;" class="docBody">
              <tr>
                <td class="textAlignLeft">结论性意见：</td>
              </tr>
            </table>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              id="cell_idx_15"
              data-title="结论性意见"
              data-type="textarea"
              data-src
              @click="commandFill('cellIdx15', '结论性意见', 'TextareaItem')">
              <p class="show-area-item-p">
                <span style="padding: 7px;">{{ letData.cellIdx15 ? letData.cellIdx15 : '（点击编辑）' }}</span>
              </p>
              <cell-line></cell-line>
            </div>
            <table style="border:solid 0s #000;" class="docBody">
              <tr>
                <td class="textAlignLeft">出席人员签名：</td>
              </tr>
            </table>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              id="cell_idx_16"
              data-title="出席人员签名"
              data-type="textarea"
              data-src
              @click="commandFill('cellIdx16', '出席人员签名', 'TextareaItem')">
              <p class="show-area-item-p">
                <span style="padding: 7px;">{{ letData.cellIdx16 ? letData.cellIdx16 : '（点击编辑）' }}</span>
              </p>
              <cell-line></cell-line>
            </div> -->
            <!-- <table>
		<hr />
		<td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;备注：本文书一式两份，一份交被复查单位，一份存档。</td>
            </table>-->
          </div>
        </div>
      </div>
    </let-main>
  </div>
</template>

<script>
import letMain from "@/views/make-law-writ/components/let-main.vue";
import GoDB from "@/utils/godb.min.js";
import { handleDate } from '@/utils/date'
import { getDangerObject } from '@/utils/setInitPaperData'
export default {
  name: "Let201",
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
      const db = new GoDB(this.$store.state.DBName);
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
      // 保存额外拼写的数据内容，用于修改隐患项时回显使用
      // 获取检查时间
      const let100Data = await wkPaper.find((item) => {
        return item.caseId === caseId && item.paperType === '22';
      });
      let let100DataPapaerContent = JSON.parse(let100Data.paperContent)
      // 整合检查时间日期文本：
      let dateString = handleDate(let100DataPapaerContent.cellIdx2, '-')
      this.extraData = {
        corpName: corp.corpName,
        dateString,
        userGroupName: this.$store.state.user.userGroupName,
      }
      // 已做文书则展示文书内容，否则创建初始版本
      if (checkPaper.length > 0) {
        // 回显
        this.letData = JSON.parse(checkPaper[0].paperContent);
        this.editData = checkPaper[0];
      } else {
        // 创建初始版本
        // 1.案由内容初始化：煤矿名称+隐患描述+“案”组成
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
        let cellIdx4String = `${corp.corpName}涉嫌${dangerObject.dangerString}案。`
        this.letData = {
          cellIdx0: cellIdx4String, // 案由
          cellIdx1: null, // 年
          cellIdx2: null, // 月
          cellIdx3: null, // 日
          cellIdx4: null, // 时
          cellIdx5: null, // 分
          cellIdx6: null, // 时
          cellIdx7: null, // 分
          cellIdx8: null, // 地点
          cellIdx9: null, // 主持人
          cellIdx10: null, // 汇报人
          cellIdx11: null, // 记录人
          cellIdx12: null, // 出席人员姓名以及职务
          cellIdx13: null, // 讨论内容
          cellIdx14: null, // 讨论记录
          cellIdx15: null, // 结论性意见
          cellIdx16: null, // 出席人员签名
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
        if (key === 'cellIdx0') {
          this.options[key] = {
            page: '48',
            key: key,
            spellString: {
              corpName: this.extraData.corpName
            }
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