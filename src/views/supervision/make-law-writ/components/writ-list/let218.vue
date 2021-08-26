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
                  id="cell_idx_7"
                  data-title="案由"
                  data-type="textarea"
                  data-src
                  @click="commandFill('cellIdx7', '案由', 'DangerTableItem')">
                <p
                    style="width:100%; height:auto; word-wrap:break-word;word-wrap: break-all; overflow: hidden;"
                >&nbsp;{{ letData.cellIdx7 ? letData.cellIdx7 : '（点击编辑）' }}</p>
                <p
                    style="width: 100%; height: auto; word-wrap: break-word; word-wrap: break-all; overflow: hidden;"
                >&nbsp;</p>
              </div>
            </table>
            <table class="docBody">


              <tr>
                <td class="textAlignLeft" style="width:14%">听证主持人：</td>
                <td
                    class="cellInput cellBottomLine"
                    id="cell_idx_15"
                    align="center"
                    style="width:24%"
                    data-title="听证主持人"
                    data-type="text"
                    data-src
                    @click="commandFill('cellIdx15', '听证主持人', 'TextItem')"
                >{{ letData.cellIdx15 }}
                </td>
                <td class="textAlignCenter">&nbsp;&nbsp;</td>
                <td
                    class="cellInput cellBottomLine"
                    id="cell_idx_16"
                    align="center"
                    style="width:24%"
                    data-title="听证主持人"
                    data-type="text"
                    data-src
                    @click="commandFill('cellIdx16', '听证主持人', 'TextItem')"
                >{{ letData.cellIdx16 }}
                </td>
                <td class="textAlignLeft" style="width:10%">&nbsp;记录人：</td>
                <td
                    class="cellInput cellBottomLine"
                    id="cell_idx_17"
                    align="center"
                    style="width:26%"
                    data-title="记录人"
                    data-type="text"
                    data-src
                    @click="commandFill('cellIdx17', '记录人', 'TextItem')"
                >{{ letData.cellIdx17 }}
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
                  id="cell_idx_7"
                  data-title="听证会基本情况摘要"
                  data-type="textarea"
                  data-src
                  @click="commandFill('cellIdx7', '听证会基本情况摘要', 'DangerTableItem')">
                <p
                    style="width:100%; height:auto; word-wrap:break-word;word-wrap: break-all; overflow: hidden;"
                >&nbsp;{{ letData.cellIdx7 ? letData.cellIdx7 : '（点击编辑）' }}</p>
                <p
                    style="width: 100%; height: auto; word-wrap: break-word; word-wrap: break-all; overflow: hidden;"
                >&nbsp;</p>
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
                <p
                    style="width:100%; height:auto; word-wrap:break-word;word-wrap: break-all; overflow: hidden;"
                >&nbsp;{{ letData.cellIdx7 ? letData.cellIdx7 : '（点击编辑）' }}</p>
                <p
                    style="width: 100%; height: auto; word-wrap: break-word; word-wrap: break-all; overflow: hidden;"
                >&nbsp;</p>
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
                    id="cell_idx_9"
                    align="center"
                    style="width:49%"
                    data-title="听证主持人（签名）"
                    data-type="text"
                    data-src
                    @click="commandFill('cellIdx9', '听证主持人（签名）', 'TextItem')"
                >{{ letData.cellIdx9 }}
                </td>
                <td class="textAlignCenter">&nbsp;日期：</td>
                <td
                    class="cellInput cellBottomLine"
                    id="cell_idx_11"
                    align="center"
                    style="width:20.5%"
                    data-title="日期"
                    data-type="text"
                    data-src
                    @click="commandFill('cellIdx11', '日期', 'DateItem')"
                >{{ letData.cellIdx11 }}
                </td>
              </tr>
              <tr>
                <td
                    class="textAlignLeft" style="width:18%"
                >负责人审核意见：
                </td>
                <td
                    class="cellInput cellBottomLine"
                    id="cell_idx_9"
                    align="center"
                    style="width:20%"
                    data-title="负责人审核意见"
                    data-type="text"
                    data-src
                    @click="commandFill('cellIdx9', '负责人审核意见', 'TextItem')"
                >{{ letData.cellIdx9 }}
                </td>
                <td
                    class="textAlignLeft " style="width:18%"
                >负责人（签名）：
                </td>
                <td
                    class="cellInput cellBottomLine"
                    id="cell_idx_9"
                    align="center"
                    style="width:17%"
                    data-title="负责人（签名）"
                    data-type="text"
                    data-src
                    @click="commandFill('cellIdx9', '负责人（签名）', 'TextItem')"
                >{{ letData.cellIdx9 }}
                </td>


                <td class="textAlignCenter">日期：</td>
                <td
                    class="cellInput cellBottomLine"
                    id="cell_idx_11"
                    align="center"
                    style="width:20%"
                    data-title="日期"
                    data-type="text"
                    data-src
                    @click="commandFill('cellIdx11', '日期', 'DateItem')"
                >{{ letData.cellIdx11 }}
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
import letMain from "../let-main";
import GoDB from "@/utils/godb.min.js";
import {getDangerObject} from '@/utils/monitor/setInitPaperData'

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
        cellIdx19: {
          page: '30',
          key: 'cellIdx19' // 用来区分一个页面多个地方调用隐患大表，最后返回值
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
        // 1.时间：当前年、月、日、时、分
        let now = new Date()
        let cellIdx0Year = now.getFullYear()
        let cellIdx1Month = now.getMonth() + 1
        let cellIdx2Date = now.getDate()
        let cellIdx3Hour = now.getHours()
        let cellIdx4Minu = now.getMinutes()
        // 2.工作单位：煤矿名称
        let cellIdx11String = corp.corpName
        // 3.监察单位
        let cellIdx18String = this.$store.state.user.userGroupName
        // 获取笔录文书中的隐患数据
        const let101Data = await wkPaper.find((item) => {
          return item.caseId === caseId && item.paperType === '1';
        });
        let let101DataPapaerContent = JSON.parse(let101Data.paperContent)
        let dangerObject = getDangerObject(let101DataPapaerContent.dangerItemObject.tableData)
        // 4.陈述、申辩：煤矿名称 + '涉嫌' + 隐患描述 + '案。'
        let cellIdx19String = `${corp.corpName}涉嫌${dangerObject.dangerString}案。`
        // 5.单位/个人：从行政处罚告知书(paperType === '6')中获取
        const let204Data = await wkPaper.find(item => item.caseId === caseId && item.paperType === '6');
        let let204DataPaperContent = JSON.parse(let204Data.paperContent)
        let cellIdx20String = let204DataPaperContent.cellIdx5
        this.letData = {
          cellIdx0: cellIdx0Year, // 年
          cellIdx0TypeTextItem: cellIdx0Year, // 年
          cellIdx1: cellIdx1Month, // 月
          cellIdx1TypeTextItem: cellIdx1Month, // 年
          cellIdx2: cellIdx2Date, // 日
          cellIdx2TypeTextItem: cellIdx2Date, // 年
          cellIdx3: cellIdx3Hour, // 时
          cellIdx3TypeTextItem: cellIdx3Hour, // 时
          cellIdx4: cellIdx4Minu, // 分
          cellIdx4TypeTextItem: cellIdx4Minu, // 分
          cellIdx5: null, // 时
          cellIdx6: null, // 分
          cellIdx7: null, // 地点
          cellIdx8: null, // 陈述、申辩人
          cellIdx9: null, // 性别
          cellIdx10: null, // 年龄
          cellIdx11: cellIdx11String, // 工作单位
          cellIdx11TypeTextItem: cellIdx11String, // 工作单位
          cellIdx12: null, // 职务（职业）
          cellIdx13: null, // 邮政编码
          cellIdx14: null, // 电话
          cellIdx15: null, // 承办人（签名）
          cellIdx16: null, // 承办人（签名）
          cellIdx17: null, // 记录人（签名）
          cellIdx18: cellIdx18String, // 监察员
          cellIdx18TypeTextItem: cellIdx18String, // 监察员
          cellIdx19: cellIdx19String, // 违法行为
          cellIdx20: cellIdx20String, // 单位/个人
          cellIdx20TypeTextItem: cellIdx20String, // 单位/个人
          cellIdx21: null, // 法制审核意见
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
        if (key === 'cellIdx19') {
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