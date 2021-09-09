<!-- 行政强制 公开裁定 执法案件公开裁定记录 -->
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
            <div class="textAlignCenter formHeader1">执 法 案 件 公 开 裁 定 记 录</div>
            <div class="stdRowH"></div>
            <table style="border:solid 0px #000;" class="docBody">
              <tr>
                <td class="textAlignLeft">裁定时间：</td>
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
                <td class="textAlignLeft">裁定地点：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_7"
                  align="center"
                  style="width:85%"
                  data-title="裁定地点"
                  data-type="textarea"
                  data-src
                  @click="commandFill('cellIdx7', '裁定地点', 'TextItem')"
                >{{letData.cellIdx7}}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">裁定事项：</td>

                <div
                  style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
                  class="cellInput mutiLineArea"
                  id="cell_idx_8"
                  align="center"
                  data-title="裁定事项"
                  data-type="textarea"
                  data-src
                  @click="commandFill('cellIdx8', '裁定事项', 'DangerTableItem')">
                  <div v-if="letData.cellIdx8 && letData.cellIdx8.length > 0">
                    <p class="show-area-item-p">
                      <span style="padding: 7px;">{{ letData.cellIdx8 }}</span>
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
                <td class="textAlignLeft">裁定主持人（签名）：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_9"
                  align="center"
                  style="width:25%"
                  data-title="裁定主持人（签名）"
                  data-type="textarea"
                  data-src
                  @click="commandFill('cellIdx9', '裁定主持人（签名）', 'TextItem')"
                >{{letData.cellIdx9}}</td>
                <td class="textAlignLeft">记录人（签名）：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_10"
                  align="center"
                  style="width:33%"
                  data-title="记录人（签名）"
                  data-type="textarea"
                  data-src
                  @click="commandFill('cellIdx10', '记录人（签名）', 'TextItem')"
                >{{letData.cellIdx10}}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">被裁定单位负责人（签名）：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_11"
                  align="center"
                  style="width:69.5%"
                  data-title="被裁定单位负责人（签名）"
                  data-type="textarea"
                  data-src
                  @click="commandFill('cellIdx11', '被裁定单位负责人（签名）', 'TextItem')"
                >{{letData.cellIdx11}}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">其他单位参加人员（签名）：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_12"
                  align="center"
                  style="width:69.5%"
                  data-title="其他单位参加人员（签名）"
                  data-type="textarea"
                  data-src
                  @click="commandFill('cellIdx12', '其他单位参加人员（签名）', 'TextItem')"
                >{{letData.cellIdx12}}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">裁定记录：</td>
              </tr>
            </table>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              id="cell_idx_13"
              data-title="裁定记录"
              data-type="textarea"
              data-src
              @click="commandFill('cellIdx13', '裁定记录', 'TextareaItem')">
              <p class="show-area-item-p">
                <span style="padding: 7px; white-space: pre-wrap;">{{ letData.cellIdx13 }}</span>
              </p>
            </div>
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
  name: "Let300",
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
        cellIdx8: {
          page: '31',
          key: 'cellIdx8' // 用来区分一个页面多个地方调用隐患大表，最后返回值
        },
      },
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
      const db = new GoDB(this.$store.state.DBName);
      const corpBase = db.table("corpBase");
      //查询符合条件的记录
      const corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      const wkPaper = db.table("wkPaper");
      const caseId = this.corpData.caseId;
      const checkPaper = await wkPaper.findAll((item) => {
        return (
          item.caseId === caseId && item.paperType === this.docData.docTypeNo && item.delFlag !== '1'
        );
      });
      // await wkPaper.delete(checkPaper[0].id)
      // 保存额外拼写的数据内容，用于修改隐患项时回显使用
      this.extraData = {
        corpName: corp.corpName,
      }
      if (checkPaper.length > 0) {
        // 回显
        this.letData = JSON.parse(checkPaper[0].paperContent);
        this.editData = checkPaper[0];
      } else {
        // 创建初始版本
        // 1.裁定事件：
        let now = new Date()
        // 2.裁定地点：企业名称
        // 3.裁定事项：煤矿名称+“涉嫌”+隐患描述+“案”
        // 获取笔录文书中的隐患数据
        const let101Data = await wkPaper.find((item) => {
          return item.caseId === caseId && item.paperType === '1';
        });
        let let101DataPapaerContent = JSON.parse(let101Data.paperContent)
        let dangerObject = getDangerObject(let101DataPapaerContent.dangerItemObject.tableData)
        let cellIdx13String = `主持人：现在公开裁定开始，首先我先介绍裁定小组成员，我是主持人XXX，记录人是XXX，裁定小组成员有监察分局XXX、XXX。
      主持人：XX煤矿矿长XXX，参加公开裁定的人员是否与你矿有利害关系人员，是否申请回避？
      XX煤矿矿长XXX：不申请回避。
      主持人：现在宣布会场纪律、当事人享有的权利和义务（内容略）。
      主持人：下面请案件承办人XXX陈述案件调查情况。
      案件承办人XXX：20XX年XX月XX日，XX煤矿安全监察局XX监察分局的煤矿安全监察员XXX、XXX……，按照月度监察执法计划对XX公司XX煤矿进行现场检查时发现XX采煤工作面回风巷风流中瓦斯浓度达1.2%，未停止作业，作出了责令立即停止生产，撤出作业人员的现场处理决定。20XX年XX月XX日，经XX煤矿安全监察局XX监察分局负责人XXX批准，决定对该涉嫌违法违规行为进行立案调查，并指定由XXX、XXX两名执法人员承办。案件承办人对XXX、XXX 、XXX和XXX等4人进行调查取证，制作了调查取证笔录，收集了该矿瓦斯监控日报、生产调度台账和调度电话录音等其他证据材料。这是收集的证据。经过调查认定违法事实清楚，违反了《国务院关于预防煤矿生产安全事故的特别规定》第八条第二款第（二）项的规定。
      主持人：请XX煤矿矿长XXX陈述申辩。
      XX煤矿矿长XXX：20XX年XX月XX日，XX煤矿安全监察局XX监察分局的煤矿安全监察员XXX、XXX……，到我矿检查时发现XX采煤工作面回风巷风流中瓦斯浓度达1.2%，未停止作业，我承认这个事故隐患存在。但是我矿对XX采煤工作面采取了区域防突措施、达标评判合格以后，瓦斯含量不高，只是最近这段时间，因为煤层稍微变厚的一些，造成了采空区瓦斯涌出量变大，回风上隅角瓦斯偶尔会超过规定，我们加大了XX采煤工作面的风量，制定了埋管抽放采空区瓦斯等一些措施计划，还没有来得及实施。上隅角瓦斯只是偶尔会超限，不是一直超限，只是你们来检查时，恰好遇到瓦斯超限的情况，超限的数值也不是很大。你们检查发现这个问题后，我们立即将工作面停了下来，彻底进行瓦斯治理，确保瓦斯不超限。
      主持人：案件承办人，你们还有要陈述的吗？
      案件承办人XXX、XXX：没有了。
      主持人：陈述、申辩结束，下面裁定小组集体研究。
      主持人：经过我们裁定小组集体研究，现宣布裁定结果： XX煤矿涉嫌瓦斯超限作业违法违规行为事实清楚，证据确凿充分，违反了《国务院关于预防煤矿生产安全事故的特别规定》第八条第二款第（二）项的规定，依据《国务院关于预防煤矿生产安全事故的特别贵的》第十条第一款、第十一条第一款的规定，并根据违法违规情节的轻重，拟给予责令停产整顿X日，罚款八十万元整，暂扣安全生产许可证；对煤矿企业负责人罚款四万元以整。
      `
        this.letData = {
          cellIdx0: now.getFullYear(), // 年
          cellIdx0TypeTextItem: now.getFullYear(), // 年
          cellIdx1: now.getMonth() + 1, // 月
          cellIdx1TypeTextItem: now.getMonth() + 1, // 月
          cellIdx2: now.getDate(), // 日
          cellIdx2TypeTextItem: now.getDate(), // 日
          cellIdx3: now.getHours(), // 时
          cellIdx3TypeTextItem: now.getHours(), // 时
          cellIdx4: now.getMinutes(), // 分
          cellIdx4TypeTextItem: now.getMinutes(), // 分
          cellIdx5: null, // 时
          cellIdx6: null, // 分
          cellIdx7: corp.corpName, // 裁定地点
          cellIdx7TypeTextItem: corp.corpName, // 裁定地点
          cellIdx8: `${corp.corpName}涉嫌${dangerObject.dangerString}案。`, // 裁定事项
          cellIdx9: null, // 裁定主持人（签名）
          cellIdx10: null, // 记录人（签名）
          cellIdx11: null, // 被裁定单位负责人（签名）
          cellIdx12: null, // 其他单位参加人员（签名）
          cellIdx13: cellIdx13String, // 裁定记录
          cellIdx13TypeTextareaItem: cellIdx13String, // 裁定记录
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
        if (key === 'cellIdx8') {
          this.options[key] = {
            page: '31',
            key: key,
            spellString: this.extraData
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