<!-- 行政处罚 听证程序  听证笔录/听证会报告书 -->
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
            <div class="textAlignCenter formHeader1">听 证 笔 录</div>
            <div class="stdRowH"></div>
            <table style="border:solid 0 #000;" class="docBody">
              <tr>
                <td class="textAlignLeft">听证时间：</td>
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
                <td class="textAlignLeft">听证地点：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_7"
                  align="center"
                  style="width:85%"
                  data-title="听证地点"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx7', '听证地点', 'TextItem')"
                >{{letData.cellIdx7}}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">听证主持人（签名）：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_8"
                  align="center"
                  style="width:25%"
                  data-title="听证主持人（签名）"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx8', '听证主持人（签名）', 'TextItem')"
                >{{letData.cellIdx8}}</td>
                <td class="textAlignLeft">记录人（签名）：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_9"
                  align="center"
                  style="width:35%"
                  data-title="记录人（签名）"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx9', '记录人（签名）', 'TextItem')"
                >{{letData.cellIdx9}}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">听证记录：</td>
              </tr>
            </table>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              id="cell_idx_10"
              data-title="听证记录"
              data-type="textarea"
              data-src
              @click="commandFill('cellIdx10', '听证记录', 'TextareaItem')">
              <p
                style="width:100%; height:auto; word-wrap:break-word;word-wrap: break-all; overflow: hidden;"
              >&nbsp;{{ letData.cellIdx10 }}</p>
              <p
                style="width: 100%; height: auto; word-wrap: break-word; word-wrap: break-all; overflow: hidden;"
              >&nbsp;</p>
            </div>
            <table style="border:solid 0 #000;" class="docBody">
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;听证参加人（签名）：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_11"
                  style="width:71.5%"
                  data-title="听证参加人（签名）"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx11', '听证参加人（签名）', 'TextItem')"
                >{{letData.cellIdx11}}</td>
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
export default {
  name: "Let211",
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
        // 1.时间
        let now = new Date()
        let cellIdx0Year = now.getFullYear()
        let cellIdx1Month = now.getMonth() + 1
        let cellIdx2Date = now.getDate()
        let cellIdx3Hour = now.getHours()
        let cellIdx4Minu = now.getMinutes()
        // 2.听证记录：固定模板
        let cellIdx10String = `主持人：今天，就淮北矿业股份有限公司许疃煤矿申请对安徽煤矿安全监察局淮北监察分局拟对其使用违法违规行为作出
    根据《安全生产违法行为行政处罚办法》第三十九条规定，请记录人先查明听证各方参加人员到会情况，宣布听证会场纪律、当事人的权利和义务。
      记录人：现在开始查明听证各方参加人员到会情况 (经查明，案件调查人到会2人，申请人到会1人，申请代理人到会1人) 。现宣读参加听证会的全体人员应遵守的纪律、当事人享有的权利和义务（内容略）。
      记录人：案件调查人、申请人及其代理人全部到会。会场纪律、当事人的权利和义务宣读完毕，现在请主持人主持听证。
      主持人：本案听证会由XX煤矿安全监察局XX监察分局负责人指定本机关陈XX担任听证主持人，指定本机关张XX、赵XX 担任听证员，由本机关齐XX担任听证记录人。现在核实听证会参加人员。
      主持人：本案调查人，请说明你的姓名、性别、工作单位、职务和行政执法证件号？
      调查人：王XX，男，XX煤矿安全监察分局XXX室主任，证件号：00XX00010。
      调查人：史XX，男， XX煤矿安全监察分局XX室主任科员，证件号：00XX00021。
      主持人：申请人，请说明你的姓名、性别、单位、职务？是否委托代理人参加听证？有其他参加人员吗？
      申请人：冯XX，男，XX煤矿，矿长。已委托代理人姜XX，无其他人员参加听证。
      主持人：申请人的代理人，请说明你的姓名、性别、工作单位、职业？
      代理人：姜XX，男，XX市XXXX律师事务所，律师。
      主持人：现在宣布听证会开始进行。
      主持人：案件调查人、申请人、代理人，你们对记录人宣读的权利和义务都听清楚了吗？
      调查人：听清楚了。
      申请人：听清楚了。
      代理人：听清楚了。
      主持人：申请人你是否申请听证主持人、听证员、记录人回避？
      当事人：不申请。
      主持人：案件调查人、申请人，你们是否有证人到会作证？
      调查人答：没有。
      申请人答：没有。
      主持人：请案件调查人就本案调查过程、申请人违法的事实和证据以及对申请人的处罚建议和处罚依据进行陈述和说明。
      调查人：我分局郭XX、包XX于20XX年X月XX日，在对XX煤矿进行安全监察时，发现该矿进、回风立井安全设施设计未经审查同意，擅自施工并投入使用，这是20XX
  年X月XX日现场检查笔录，该矿矿长签属检查情况属实(出示复制件)。因涉嫌违法，经我分局分管副局长批准立案，指派我们两人进行案件调查。我们调取了进风井提升绞车的运行日志(出示复制件)，风井主要通风机的运行记录 (出示复制件)，进、回风井的测风报表(出示复制件)。对相关的4名人员进行调查取证，制作了调查取证笔录(出示机电工区区长张XX、绞车司机周XX、通风工区区长李XX、主要通风机司机王XX的调查取证笔录4份)。根据上述调查情况，经我分局办公会集体研究，认为该矿启用的进、回风立井安全设施设计未经审查同意，擅自施工投入使用，违反了《中华人民共和国安全生产法》第三十条第二款规定，依据中华人民共和国安全生产法》第九十五条的规定，拟给XX煤矿责令停产整顿，限30日改正的行政处罚决定 (出示) 。
      主持人：请听证员向申请人、代理人展示调查人出示的证据。
      主持人：申请人、代理人你对调查人提供证据的真实性、关联性、合法性有无议？如有疑问，请说明理由。
      申请人：没有异议。
      代理人：没有异议。
      主持人：申请人你有需要陈述和说明吗？是否有新的证据提供？对你单位的行政处罚有什么申辩意见？
      申请人：请我的委托代理人陈述。
      主持人：代理人请你进行陈述。
      代理人：调查人的陈述符合实际，我们对提供的证据没有异议。但在行政处罚法律适用上存有异议，我们认为应该适用《中华人民共和国矿山安全法》，不应适用《中华人民共和国安全生产法》。
      主持人：调查人需要陈述和说明的吗？是否有新的证据提供？
      调查人：没有。
      主持人：申请人、委托人你还有需要陈述和说明的吗？是否有新的证据提供？
      代理人：没有。
      主持人:刚才调查人、申请人及代理人都发表了自己的观点并进行了举证，经过各方的陈述，主持人认为，双方争议的主要焦点是：对违法行为行政处罚的法律适用。现听证调查阶段结束，进入听证辨论阶段。听证辨论应围绕双方争议的焦点问题及如何适用法律发表各自的意见，辩论时要阐明主张的事实、理由及法律依据，以理服人，一方发言时未经允许其他人不得插话。首先请申请人或其委托代理人发言。
      代理人：《中华人民共和国矿山安全法》《中华人民共和国安全生产法》两者均为全国人民代表大会常务委员会制定的法律，前者为调整矿山安全的特别规定，后者是调整社会安全生产关系的一般规定。按照《中华人民共和国立法法》第九十二条“同一机关制定的法律、行政法规、地方性法规、自治条例和单行条例、规章，特别规定与一般规定不一致的，适用特别规定”，我的当事人违法行为应按照《中华人民共和国矿山安全法》第四十二条规定进行行政处罚。
      主持人:请调查人发言。
      调查人：《中华人民共和国立法法》第九十二条确立了两项适用规则。即：一是“同一机关制定的法律、行政法规、地方性法规、自治条例和单行条例、规章，特别规定与一般规定不一致的，适用特别规定”；二是“新的规定与旧的规定不一致的，
  适用新的规定”。《中华人民共和国矿山安全法》《中华人民共和国安全生产法》实施时间不同，前者属于旧法，后者属于新法。《中华人民共和国安全生产法》关于法律
  适用范围在第二条已经有明确规定“除消防安全和道路交通安全、铁路交通安全、
  水上交通安全、民用航空安全以及核与辐射安全、特种设备安全以外的从事生产经
  营活动的单位均适用”，因此，煤矿生产经营活动应该受《中华人民共和国安全生产法》的约束，对煤矿安全生产隐患实施行政处罚适用《中华人民共和国安全生产法》并无不当。
      主持人: 申请人、代理人你们还有什么需要补充的？
      申请人：没有。
      代理人：没有。
      主持人:案件调查人员你们还有什么需要补充的？
      案件调查人：没有。
      主持人：现在进入最后陈述阶段，先请案件调查人员作最后陈述。
      调查人：申请人的违法行为认定清楚，行政处罚依据的法律适用正确。
      主持人：请申请人或委托代理人作最后陈述。
      代理人：对我当事人的违法认定没有异议，坚持认为行政处罚依据应适用中华人民共和国矿山安全法》。
      主持人：听证会到此结束，本主持人将根据听证笔录写出听证报告上报本局负责人。请听证参加人员核对听证记录。

                                                                                                  XXX签名压印
                                                                                                20XX年XX月XX日`
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
          cellIdx7: null, // 听证地点
          cellIdx8: null, // 听证主持人（签名）
          cellIdx9: null, // 记录人（签名）
          cellIdx10: cellIdx10String, // 听证记录
          cellIdx10TypeTextareaItem: cellIdx10String, // 听证记录
          cellIdx11: null, // 听证参加人（签名）
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