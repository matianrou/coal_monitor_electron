<!-- 行政强制 行政复议 行政复议决定书 -->
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
            <div class="textAlignCenter formHeader3">行 政 复 议 决 定 书</div>
            <div class="stdRowH"></div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_0"
                  align="right"
                  style="width:59%"
                  data-title="文书号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx0', '文书号', 'TextItem')"
                >{{letData.cellIdx0}}</td>
                <td class="textAlignLeft cellBottomLine">煤安监</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_1"
                  align="center"
                  style="width:7%"
                  data-title="文书号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx1', '文书号', 'TextItem')"
                >{{letData.cellIdx1}}</td>
                <td class="textAlignLeft cellBottomLine">复决〔</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_2"
                  align="center"
                  style="width:7%"
                  data-title="文书号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx2', '文书号', 'TextItem')"
                >{{letData.cellIdx2}}</td>
                <td class="textAlignLeft cellBottomLine">〕</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_3"
                  align="center"
                  style="width:7%"
                  data-title="文书号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx3', '文书号', 'TextItem')"
                >{{letData.cellIdx3}}</td>
                <td class="textAlignLeft cellBottomLine">号&nbsp;&nbsp;</td>
              </tr>
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我局经对你</td>
                <td
                  class="cellInput"
                  id="cell_idx_4"
                  align="center"
                  style="width:10%"
                  data-title="单位/个人"
                  data-type="textarea"
                  data-src
                  @click="commandFill('cellIdx4', '单位/个人', 'TextItem')"
                >{{letData.cellIdx4}}</td>
                <td class="textAlignLeft">于</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_5"
                  align="center"
                  style="width:10%"
                  data-title="年"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx5', '年', 'TextItem')"
                >{{letData.cellIdx5}}</td>
                <td class="textAlignLeft">年</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_6"
                  align="center"
                  style="width:10%"
                  data-title="月"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx6', '月', 'TextItem')"
                >{{letData.cellIdx6}}</td>
                <td class="textAlignLeft">月</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_7"
                  align="center"
                  style="width:10%"
                  data-title="日"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx7', '日', 'TextItem')"
                >{{letData.cellIdx7}}</td>
                <td class="textAlignLeft">日</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_8"
                  align="center"
                  style="width:10%"
                  data-title="时"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx8', '时', 'TextItem')"
                >{{letData.cellIdx8}}</td>
                <td class="textAlignLeft">时</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_9"
                  align="center"
                  style="width:10%"
                  data-title="分"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx9', '分', 'TextItem')"
                >{{letData.cellIdx9}}</td>
                <td class="textAlignLeft">分申请的行政复议事项进行</td>
              </tr>
              <tr>
                <td class="textAlignLeft">审查，现作出以下行政复议决定：</td>
              </tr>
            </table>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              id="cell_idx_10"
              data-title="行政复议决定"
              data-type="textarea"
              data-src
              @click="commandFill('cellIdx10', '行政复议决定', 'TextareaItem')">
              <p class="show-area-item-p">
                <span style="padding: 7px; white-space: pre-wrap;">{{ letData.cellIdx10 }}</span>
              </p>
            </div>
            <table style="border:solid 0px #000;" class="docBody">
              <tr>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;申请人对本行政复议决定不服，可以在收到本决定书之日起十五日内向</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_11"
                  align="center"
                  style="width:15%"
                  data-title="人民法院"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx11', '人民法院', 'TextItem')"
                >{{letData.cellIdx11}}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">人民法院提起行政诉讼。</td>
              </tr>
            </table>
            <table height="30"></table>
            <table class="docBody">
              <td class="cellInput" style="width:55%"></td>
              <td
                class="cellInput cellBottomLine"
                id="cell_idx_12"
                align="center"
                style="width:10%"
                data-title="年"
                data-type="text"
                data-src
                @click="commandFill('cellIdx12', '年', 'TextItem')"
              >{{letData.cellIdx12}}</td>
              <td class="textAlignLeft">年</td>
              <td
                class="cellInput cellBottomLine"
                id="cell_idx_13"
                align="center"
                style="width:10%"
                data-title="月"
                data-type="text"
                data-src
                @click="commandFill('cellIdx13', '月', 'TextItem')"
              >{{letData.cellIdx13}}</td>
              <td class="textAlignLeft">月</td>
              <td
                class="cellInput cellBottomLine"
                id="cell_idx_14"
                align="center"
                style="width:10%"
                data-title="日"
                data-type="text"
                data-src
                @click="commandFill('cellIdx14', '日', 'TextItem')"
              >{{letData.cellIdx14}}</td>
              <td class="textAlignLeft">日</td>
            </table>
            <table class="docBody">
              <hr />
              <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;备注：本文书一式三份，一份交申请复议</td>
              <td class="cellInput" align="center" style="width:10%"></td>
              <td class="textAlignLeft">，一份交被申请复议单位；一份存档。</td>
            </table>
          </div>
        </div>
      </div>
    </let-main>
    <el-dialog
      title="文书信息选择"
      :close-on-click-modal="false"
      append-to-body
      :visible="visible"
      width="400px"
      :show-close="false">
      <span>请选择：</span>
      <el-radio-group v-model="selectedType">
        <el-radio label="单位">单位</el-radio>
        <el-radio label="个人">个人</el-radio>
      </el-radio-group>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="confirm">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import letMain from "./components/let-main";
import GoDB from "@/utils/godb.min.js";
import { getDangerObject, transformNumToChinese, getDocNumber } from '@/utils/monitor/setInitPaperData'
export default {
  name: "Let305",
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
      visible: false,
      selectedType: '单位', // 初始化时选择的单位或个人
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
      const db = new GoDB("CoalDB");
      //查询符合条件的记录
      const wkPaper = db.table("wkPaper");
      const caseId = this.corpData.caseId;
      const checkPaper = await wkPaper.findAll((item) => {
        return (
          item.caseId === caseId && item.paperType === this.docData.docTypeNo
        );
      });
      if (checkPaper.length > 0) {
        // 回显
        this.letData = JSON.parse(checkPaper[0].paperContent);
        this.editData = checkPaper[0];
      } else {
        // 创建初始版本
        // 1.弹出提示框，选择单位或个人
        this.visible = true
        // 2.文书号：
        let paperNumber = await getDocNumber(db, this.docData.docTypeNo, caseId, this.$store.state.user)
        // 3.获取行政复议申请笔录中的申请时间
        const let302Data = await wkPaper.find((item) => {
          return item.caseId === caseId && item.paperType === '10';
        });
        let let302DataPapaerContent = JSON.parse(let302Data.paperContent)
        let cellIdx5String = let302DataPapaerContent.cellIdx0 + ''
        let cellIdx6String = let302DataPapaerContent.cellIdx1 + ''
        let cellIdx7String = let302DataPapaerContent.cellIdx2 + ''
        let cellIdx8String = let302DataPapaerContent.cellIdx2 + ''
        let cellIdx9String = let302DataPapaerContent.cellIdx2 + ''
        // 4.固定模板：
        // 获取文书编号：
        // 行政处罚决定书：
        let paperNum8 = await getDocNumber(db, '8', caseId, this.$store.state.user)
        // 行政处罚告知书：
        let paperNum6 = await getDocNumber(db, '6', caseId, this.$store.state.user)
        let cellIdx10String = `申请人于 20XX 年 XX 月 XX 日对 XX 煤矿安全监察局 XX 监察分局《行政处罚决定书》（${paperNum8.numString}）作出的行政处罚决定不服，向本局提出行政复议申请，我局受理后依法采取书面审理的方式，被申请人在法定期限内提交了行政复议答辩意见。通过对有关行政执法审查和对有关人员调查询问，现已审理终结。
      申请人请求：撤销被申请人作出的《行政处罚决定书》（${paperNum8.numString}），减轻或免于行政处罚。
      申请人称：淮北监察分局对我矿安全检查时发现特种作业人员无证上岗作业问题，在行政处罚法律适用上，不应适用《中华人民共和国安全生产法》进行处罚,应依据《煤矿安全监察条例》第二十九条第（四）项“特种作业人员未取得资格证书上岗作业的”应当责令限期改正的规定。《煤矿安全监察条例》是确立煤矿安全监察机构执法地位的专门法规，应优先执行。既使适用《中华人民共和国安全生产法》第九十四条“责令限期改正，可以处五万元以下的罚款”的规定，也应当遵守《安全生产行政处罚自由裁量适用规则（试行）》(国家安全生产监督管理总局令第 31 号)第十二条第一款“法律、行政法规或者部门规章规定的多种处罚应当并处的，不得选择适用；规定可以并处的，可以选择适用”的规定。我矿积极主动改正，在案件调查前已将爆破工 XXX、瓦斯检查工 XXX 调离工作岗位，对于已培训未持证上岗作业的特种作业人员，是因有关机构未及时发证，培训机构业已出具培训合格证明。基于上述事实，安全隐患已消除，对安全生产不构成威胁，未产生严重后果。按照《安全生产违法行为行政处罚办法》第五十六条第（二）项“主动消除或者减轻安全生产违法行为危害后果的”应当依法从轻或者减轻行政处罚的规定，应当减轻或免于行政处罚。
      被申请人辩称：我局对 XX 煤矿作出的《行政处罚决定书》（${paperNum8.numString}） ，事实清楚、程序合法、处罚依据充分。根据《中华人民共和国立法法》规定，法律的效力高于行政法规，《中华人民共和国安全生产法》是国家法律，《煤矿安全监察条例》是国务院行政法规，应优先选择适用国家法律。在程序上，我局依法履行了告知义务，告知了申请人陈述、申辩和申请听证的权利，《行政处罚决定书》（${paperNum8.numString}）已经送达给申请人。申请人主张从轻或免于行政处罚理由不成立。爆破工 XXX、瓦斯检查工 XXX 无证上岗作业经调查长时间存在，申请人也知道特种作业人员无证不得上岗作业的规定，是违法行为的主观故意。根据《安全生产行政处罚自由裁量适用规则（试行）》(国家安全生产监督管理总局令第 31 号)第十五条第（八）项“故意实施违法行为的”应当依法从重处罚，不适用从轻或免于行政处罚情形，所以选择给予责令停产整顿，罚款肆万伍仟元的行政处罚。综上所述，我局对违法事实认定清楚，证据确凿，程序合法，请复议机关依法维持《行政处罚决定书》（${paperNum8.numString}）的处罚决定。
      经审理查明：申请人长时间安排爆破工 XXX、瓦斯检查工 XXX 无证上岗作业，被申请人于 20XX 年 XX 月 XX 日，在对申请人进行安全监察时根据发现的线索进行立案调查。20XX 年 XX 月 XX 日，被申请人作出（${paperNum6.numString}）《行政处罚告知书》，告知了申请人有陈述、申辩和申请听证的权利。20XX 年 XX 月 XX日，听取了申请人的陈述、申辩。20XX 年 XX 月 XX 日，组织进行了听证。20XX 年XX 月 XX 日，被申请人根据《中华人民共和国安全生产法》第九十四条第（七）项的规定，依法作出《行政处罚决定书》（${paperNum8.numString}），分别没收违法所得，并处十万元以上五十万元以下的罚款，注销其安全生产许可证、责令停止生产，限期办理变更手续，处1万元以上3万元以下罚款。合并罚款人民币伍拾叁万元整（¥530,000.00）罚款、没收违法所得。
      本局认为：申请人安排爆破工 XXX、瓦斯检查工 XXX 无证上岗作业的违法行为，不存在从轻或免于行政处罚情形。被申请人在作出行政处罚决定前，依法进行了立案调查、处罚告知，处罚程序符合法律规定。对违法事实认定清楚，证据确凿，适用法律正确、行政处罚适当。根据《中华人民共和国行政复议法》第二十八条第一款第（一）项规定，经集体讨论，决定维持淮北监察分局《行政处罚决定书》（${paperNum8.numString}）的处罚决定。`
        // 5.人民法院
        const orgInfo = db.table("orgInfo");
        const orgData = await orgInfo.find(item => item.no === this.$store.state.user.userGroupId)
        let orgSysOfficeInfo = JSON.parse(orgData.sysOfficeInfo)
        let cellIdx11String = orgSysOfficeInfo.courtPrefix
        this.letData = {
          cellIdx0: paperNumber.num0, // 文书号
          cellIdx0TypeTextItem: paperNumber.num0, // 文书号
          cellIdx1: paperNumber.num1, // 文书号
          cellIdx1TypeTextItem: paperNumber.num1, // 文书号
          cellIdx2: paperNumber.num3, // 文书号
          cellIdx2TypeTextItem: paperNumber.num3, // 文书号
          cellIdx3: paperNumber.num4, // 文书号
          cellIdx3TypeTextItem: paperNumber.num4, // 文书号
          cellIdx4: null, // 单位/个人
          cellIdx5: cellIdx5String, // 年
          cellIdx5TypeTextItem: cellIdx5String, // 年
          cellIdx6: cellIdx6String, // 月
          cellIdx6TypeTextItem: cellIdx6String, // 月
          cellIdx7: cellIdx7String, // 日
          cellIdx7TypeTextItem: cellIdx7String, // 日
          cellIdx8: cellIdx8String, // 时
          cellIdx8TypeTextItem: cellIdx8String, // 时
          cellIdx9: cellIdx9String, // 分
          cellIdx9TypeTextItem: cellIdx9String, // 分
          cellIdx10: cellIdx10String, // 行政复议决定
          cellIdx10TypeTextareaItem: cellIdx10String, // 行政复议决定
          cellIdx11: cellIdx11String, // 人民法院
          cellIdx11TypeTextItem: cellIdx11String, // 人民法院
          cellIdx12: null, // 年
          cellIdx13: null, // 月
          cellIdx14: null, // 日
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
        this.$refs.letMain.commandFill(key, dataKey, title, type, this.letData[dataKey], this.options[key])
      }
    },
    async confirm() {
      // 选择单位或个人
      this.visible = false
      this.letData.cellIdx4 = this.selectedType
      this.letData.cellIdx4TypeTextItem = this.selectedType
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/let";
</style>