<!-- 行政处罚 听证程序  陈述申辩笔录 -->
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
            <div class="textAlignCenter formHeader1">陈 述 申 辩 笔 录</div>
            <div class="stdRowH"></div>
            <table style="border:solid 0 #000;" class="docBody">
              <tr>
                <td class="textAlignLeft" style="width:12%">时&nbsp;&nbsp;&nbsp;&nbsp;间：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_0"
                  align="center"
                  style="width:10%"
                  data-title="年"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx0', '年', 'TextItem')"
                >{{letData.cellIdx0}}</td>
                <td class="textAlignLeft">年</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_1"
                  align="center"
                  style="width:10%"
                  data-title="月"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx1', '月', 'TextItem')"
                >{{letData.cellIdx1}}</td>
                <td class="textAlignLeft">月</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_2"
                  align="center"
                  style="width:10%"
                  data-title="日"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx2', '日', 'TextItem')"
                >{{letData.cellIdx2}}</td>
                <td class="textAlignLeft">日</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_3"
                  align="center"
                  style="width:10%"
                  data-title="时"
                  data-type="text"
                  data-src
                 @click="commandFill('cellIdx3', '时', 'TextItem')"
                >{{letData.cellIdx3}}</td>
                <td class="textAlignLeft">时</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_4"
                  align="center"
                  style="width:10%"
                  data-title="分"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx4', '分', 'TextItem')"
                >{{letData.cellIdx4}}</td>
                <td class="textAlignLeft">分至</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_5"
                  align="center"
                  style="width:10%"
                  data-title="时"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx5', '时', 'TextItem')"
                >{{letData.cellIdx5}}</td>
                <td class="textAlignLeft">时</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_6"
                  align="center"
                  style="width:10%"
                  data-title="分"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx6', '分', 'TextItem')"
                >{{letData.cellIdx6}}</td>
                <td class="textAlignLeft">分</td>
              </tr>
              <tr>
                <td class="textAlignLeft" style="width:12%">地&nbsp;&nbsp;&nbsp;&nbsp;点：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_7"
                  align="center"
                  style="width:88%"
                  data-title="地点"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx7', '地点', 'TextItem')"
                >{{letData.cellIdx7}}</td>
              </tr>
              <tr>
                <td class="textAlignLeft" style="width:16%">陈述申辩人：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_8"
                  align="center"
                  style="width:40%"
                  data-title="陈述申辩人"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx8', '陈述申辩人', 'TextItem')"
                >{{letData.cellIdx8}}</td>
                <td class="textAlignLeft" style="width:10%">性&nbsp;&nbsp;&nbsp;别：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_9"
                  align="center"
                  style="width:12%"
                  data-title="性别"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx9', '性别', 'TextItem')"
                >{{letData.cellIdx9}}</td>
                <td class="textAlignLeft" style="width:10%">年&nbsp;&nbsp;&nbsp;龄：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_10"
                  align="center"
                  style="width:12%"
                  data-title="年龄"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx10', '年龄', 'TextItem')"
                >{{letData.cellIdx10}}</td>
              </tr>
              <tr>
                <td class="textAlignLeft" style="width:12%">工作单位：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_11"
                  align="center"
                  style="width:45%"
                  data-title="工作单位"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx11', '工作单位', 'TextItem')"
                >{{letData.cellIdx11}}</td>
                <td class="textAlignLeft" style="width:16%">职务（职业）：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_12"
                  align="center"
                  style="width:27%"
                  data-title="职务（职业）"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx12', '职务（职业）', 'TextItem')"
                >{{letData.cellIdx12}}</td>
              </tr>
              <tr>
                <td class="textAlignLeft" style="width:12%">住&nbsp;&nbsp;&nbsp;&nbsp;址：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_13"
                  align="center"
                  style="width:45%"
                  data-title="住址"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx13', '住址', 'TextItem')"
                >{{letData.cellIdx13}}</td>
                <td class="textAlignLeft" style="width:10%">电&nbsp;&nbsp;&nbsp;&nbsp;话：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_14"
                  align="center"
                  style="width:33%"
                  data-title="电话"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx14', '电话', 'TextItem')"
                >{{letData.cellIdx14}}</td>
              </tr>
              <tr>
                <td class="textAlignLeft" style="width:18%">承办人（签名）：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_15"
                  align="center"
                  style="width:18%"
                  data-title="承办人（签名）"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx15', '承办人（签名）', 'TextItem')"
                >{{letData.cellIdx15}}</td>
                <td class="textAlignCenter">&nbsp;、&nbsp;</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_16"
                  align="center"
                  style="width:17%"
                  data-title="承办人（签名）"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx16', '承办人（签名）', 'TextItem')"
                >{{letData.cellIdx16}}</td>
                <td class="textAlignLeft" style="width:18%">记录人（签名）：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_17"
                  align="center"
                  style="width:24%"
                  data-title="记录人（签名）"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx17', '记录人（签名）', 'TextItem')"
                >{{letData.cellIdx17}}</td>
              </tr>
            </table>
            <div class="docTextarea">
              陈述申辩记录：我们是
              <span
                class="no-underline"
                @click="commandFill('cellIdx18', '监察员', 'TextItem')"
              >{{ letData.cellIdx18 ? letData.cellIdx18 : '（点击编辑）' }}</span>
              的执法人员，这是我们的证件（出示证件）。现就
              <span
                @click="commandFill('cellIdx19', '违法行为', 'DangerTableItem')"
              >{{ letData.cellIdx19 ? letData.cellIdx19 : '（点击编辑）'}}</span>
              听取你
              <span
                class="no-underline"
                @click="commandFill('cellIdx20', '单位', 'TextItem')"
              >{{ letData.cellIdx20 ? letData.cellIdx20 : '（点击编辑）'}}</span>
              的陈述申辩。
            </div>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              id="cell_idx_21"
              data-title="陈述申辩内容"
              data-type="textarea"
              data-src
              @click="commandFill('cellIdx21', '陈述申辩内容', 'TextareaItem')">
              <p
                style="width:100%; height:auto; word-wrap:break-word;word-wrap: break-all; overflow: hidden;"
              >&nbsp;{{ letData.cellIdx21 ? letData.cellIdx21: '（点击编辑）' }}</p>
              <p
                style="width: 100%; height: auto; word-wrap: break-word; word-wrap: break-all; overflow: hidden;"
              >&nbsp;</p>
            </div>
            <table class="docBody">
               <tr>
                <td class="textAlignLeft" style="width:18%">陈述申辩人意见：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_22"
                  align="center"
                  style="width:82%"
                  data-title="陈述申辩人意见"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx22', '陈述申辩人意见', 'TextItem')"
                >{{letData.cellIdx22}}</td>
              </tr>
            <tr>
               <td class="textAlignLeft" style="width:24%">陈述申辩人（签名）：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_23"
                  align="center"
                  style="width:44%"
                  data-title="陈述申辩人（签名）"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx23', '陈述申辩人（签名）', 'TextItem')"
                >{{letData.cellIdx23}}</td>
                 <td
                  class="cellInput "
                  id="cell_idx_24"
                  align="center"
                  style="width:8%"
                  data-title="年"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx24', '年', 'TextItem')"
                >{{letData.cellIdx24}}</td>
                <td class="textAlignLeft">年</td>
                <td
                  class="cellInput "
                  id="cell_idx_25"
                  align="center"
                  style="width:8%"
                  data-title="月"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx25', '月', 'TextItem')"
                >{{letData.cellIdx25}}</td>
                <td class="textAlignLeft">月</td>
                <td
                  class="cellInput "
                  id="cell_idx_26"
                  align="center"
                  style="width:8%"
                  data-title="日"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx26', '日', 'TextItem')"
                >{{letData.cellIdx26}}</td>
                <td class="textAlignLeft">日</td>
            </tr>
            </table>
            <table height="60"></table>
            <table class="docBody">
              <tr>
                <hr />
                <td class="textAlignLeft">备注:被陈述申辩人应在确认笔录后，签署意见，并签名押印。</td>
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
import { getDangerObject } from '@/utils/setInitPaperData'
export default {
  name: "Let205",
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
        if (!let101Data) {
          this.$message.error('请先填写并保存现场检查记录中内容！')
          return
        }
        let let101DataPapaerContent = JSON.parse(let101Data.paperContent)
        let dangerObject = getDangerObject(let101DataPapaerContent.dangerItemObject.tableData)
        // 4.陈述申辩：煤矿名称 + '涉嫌' + 隐患描述 + '案。'
        let cellIdx19String = `${corp.corpName}涉嫌${dangerObject.dangerString}案。`
        // 5.单位/个人：从行政处罚告知书(paperType === '6')中获取
        const let204Data = await wkPaper.find(item => item.caseId === caseId && item.paperType === '6');
        if (!let204Data) {
          this.$message.error('请先填写并保存行政处罚告知书中内容！')
          return
        }
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
          cellIdx8: null, // 陈述申辩人
          cellIdx9: null, // 性别
          cellIdx10: null, // 年龄
          cellIdx11: cellIdx11String, // 工作单位
          cellIdx11TypeTextItem: cellIdx11String, // 工作单位
          cellIdx12: null, // 职务（职业）
          cellIdx13: null, // 住址
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
          cellIdx22: null, // 陈述申辩人意见
          cellIdx23: null, // 陈述申辩人（签名）
          cellIdx24: null, // 年
          cellIdx25: null, // 月
          cellIdx26: null, // 日
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