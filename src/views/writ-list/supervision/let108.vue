<!-- 现场检查 实施检查 先行登记保存证据通知书 25 -->
<template>
  <div style="width: 100%; height: 100%;">
    <let-main
      ref="letMain"
      :corp-data="corpData"
      :doc-data="docData"
      :let-data="letData"
      :paper-data="paperData"
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
            <div class="textAlignCenter formHeader1">先行登记保存证据通知书</div>
            <div class="docTextLine paper-number-div">
              <div>
                <span
                  @click="commandFill('cellIdx0', '文书号', 'TextItem')"
                >{{ letData.cellIdx0 ? letData.cellIdx0 : '（编辑）' }}</span>
                <label>（</label>
                <span
                  @click="commandFill('cellIdx1', '文书号', 'TextItem')"
                >{{ letData.cellIdx1 ? letData.cellIdx1 : '（编辑）' }}</span>
                <label>）煤安保〔</label>
                <span
                  @click="commandFill('cellIdx2', '文书号', 'TextItem')"
                >{{ letData.cellIdx2 ? letData.cellIdx2 : '（编辑）' }}</span>
                <label>〕</label>
                <span
                  @click="commandFill('cellIdx3', '文书号', 'TextItem')"
                >{{ letData.cellIdx3 ? letData.cellIdx3 : '（编辑）' }}</span>
                <label>号</label>
              </div>
            </div>
            <table class="docBody">
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
            <div class="docTextarea">
              <label style="width:5%"></label>
              你单位
              <span
                @dblclick="commandFill('cellIdx6', '违法违规行为', corpData.caseType === '0' ? 'DangerTable' : 'TextareaItem')"
                @click="commandFill('cellIdx6', '违法行为', corpData.caseType === '0' ? 'DangerTextareaItem' : 'TextareaItem')"
              >{{ letData.cellIdx6 ? letData.cellIdx6 : '（点击编辑）'}}</span>
              的行为涉嫌违法违规。依据《中华人民共和国行政处罚法》第<span class="text-decoration">五十六</span>条规定，本机关决定对你单位的有关证据（详见《先行登记保存证据清单》）采取先行登记保存措施。先行登记保存的证据，存放在
              <span
                @click="commandFill('cellIdx9', '', 'TextItem')"
              >{{ letData.cellIdx9 ? letData.cellIdx9 : '（点击编辑）'}}</span>
              ，由
              <span
                @click="commandFill('cellIdx10', '', 'TextItem')"
              >{{ letData.cellIdx10 ? letData.cellIdx10 : '（单位名称+保管人姓名）'}}</span>
              负责保管。在本机关作出处理决定前，保管单位负有妥善保管的义务，不得有短缺、灭失、损毁或者擅自移动等改变证据物品的任何行为。
            </div>
            <div class="docTextarea">
              <label style="width:5%"></label>
              本机关将在七个工作日内对先行登记保存的证据依法作出处理决定。逾期未作出处理决定的，先行登记保存措施自动解除。
            </div>
            <table class="docBody" style="margin-top: 30px; margin-bottom: 30px;">
              <tr>
                 <td style="width:5%"></td>
                <td
                  style="cursor: pointer;"
                  @click="commandFill('cellIdx12', '先行登记保存证据清单', 'SamplingForensicsTable')"
                  class="textAlignLeft">附件：先行登记保存证据清单</td>
              </tr>
            </table>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:55%">
                <span class="no-line">受送达人（签名）：</span>
                <span @click="commandFill('cellIdx13', '受送达人（签名）：', 'TextItem')"
                  >{{ letData.cellIdx13 ? letData.cellIdx13 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">日&nbsp;&nbsp;&nbsp;&nbsp;期：</span>
                <span @click="commandFill('cellIdx14', '日期', 'DateItem')">{{
                  letData.cellIdx14 ? letData.cellIdx14 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:55%">
                <span class="no-line">执法机关地址：</span>
                <span @click="commandFill('cellIdx15', '执法机关地址', 'TextItem')"
                  >{{ letData.cellIdx15 ? letData.cellIdx15 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">邮政编码：</span>
                <span @click="commandFill('cellIdx17', '邮政编码', 'TextItem')">{{
                  letData.cellIdx17 ? letData.cellIdx17 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:55%">
                <span class="no-line">执法机关联系人：</span>
                <span @click="commandFill('cellIdx18', '执法机关联系人', 'TextItem')"
                  >{{ letData.cellIdx18 ? letData.cellIdx18 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">联系电话：</span>
                <span @click="commandFill('cellIdx20', '联系电话', 'TextItem')">{{
                  letData.cellIdx20 ? letData.cellIdx20 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <table class="docBody" style="margin-top: 30px;">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_21"
                  align="right"
                  style="width:95%"
                  @click="commandFill('cellIdx21', '', 'TextItem')"
                >{{letData.cellIdx21 ? letData.cellIdx21 : '（点击编辑）'}}</td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_22"
                  align="right"
                  style="width:95%"
                  data-title
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx22', '日期', 'DateItem')"
                >{{letData.cellIdx22 ? letData.cellIdx22 : '（点击编辑）'}}</td>
              </tr>
            </table>
            <div class="docTextarea" style="border-top: 2px solid #000;">
              备注：本文书一式三份，一份交被取证单位，一份交保管单位，一份存档。
            </div>
          </div>
        </div>
      </div>
    </let-main>
    <!-- 关联文书选择 -->
    <select-paper
      :visible="visible.selectPaper"
      title="关联文书选择"
      :paper-list="paperList"
      @close="closeDialog"
      @confirm-paper="confirmPaper"
    ></select-paper>
  </div>
</template>

<script>
import GoDB from "@/utils/godb.min.js";
import { setNewDanger, getDocNumber, getOrgData } from '@/utils/setInitPaperData'
import associationSelectPaper from '@/components/association-select-paper'
import { setDangerTable } from "@/utils/handlePaperData";
export default {
  name: "Let108",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {
        cellIdx0: null, // 文书号
        cellIdx1: null, // 文书号
        cellIdx2: null, // 文书号
        cellIdx3: null, // 文书号
        cellIdx4: null, // corpname
        // cellIdx5: null, // 单位/个人？
        cellIdx6: null, // 隐患描述
        cellIdx7: null, // 暂不用
        // cellIdx8: null, // 单位/个人？
        cellIdx9: null, // 存放在...
        cellIdx10: null, // 由...负责保管
        cellIdx11: null, // 暂不用
        cellIdx12: null, // 附件：抽样取证清单
        cellIdx13: null, // 受送达人（签名）
        cellIdx14: null, // 日期
        cellIdx15: null, // 执法机关地址
        cellIdx16: null, // 暂不用
        cellIdx17: null, // 邮政编码
        cellIdx18: null, // 暂不用
        cellIdx19: null, // 联系人
        cellIdx20: null, // 联系电话
        cellIdx21: null, //
        cellIdx22: null, // 日期
        DangerTable: null,
        SamplingForensicsTable: {
          tableData: [],
          signature: null,
          signDate: "",
        },
        associationPaperId: null,
        associationPaperOrder: []
      },
      options: {},
      associationPaper: ['1']
    };
  },
  methods: {
    async initLetData (selectedPaper) {
      let db = new GoDB(this.$store.state.DBName);
      let corpBase = db.table("corpBase");
      let corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      // 1.生成文书编号
      let { num0, num1, num3, num4 } = await getDocNumber(db, this.docData.docTypeNo, this.corpData.caseId)
      // 2.获取笔录文书中的隐患数据
      let let1DataPaperContent = selectedPaper.let1Data ? JSON.parse(selectedPaper.let1Data.paperContent) : null;
      let cellIdx6String =
        this.corpData.caseType === "0"
          ? setDangerTable(
              let1DataPaperContent.DangerTable,
              {},
              {
                page: "25",
                key: "cellIdx6",
              }
            )
          : "";
      // 3.sysOfficeInfo实体中 地址：depAddress、邮政编码：depPost、master、联系电话：phone
      let orgSysOfficeInfo = await getOrgData(db, this.$store.state.curCase.affiliate)
      let cellIdx16String = orgSysOfficeInfo.depAddress
      let cellIdx17String = orgSysOfficeInfo.depPost
      let cellIdx19String = orgSysOfficeInfo.master
      let cellIdx20String = orgSysOfficeInfo.phone
      // 5.获取检查地点
      let cellIdx9String = ''
      let wkPaper = db.table('wkPaper')
      if (let1DataPaperContent.associationPaperId) {
        let paper22 = await wkPaper.find(item => item.paperId === let1DataPaperContent.associationPaperId.paper22Id)
        cellIdx9String = paper22.paperContent ? JSON.parse(paper22.paperContent).cellIdx4 : ''
      }
      let DangerTable = null;
      if (this.corpData.caseType === "0") {
        DangerTable = let1DataPaperContent.DangerTable
          ? setNewDanger(
              selectedPaper.let1Data,
              let1DataPaperContent.DangerTable
            )
          : {};
      }
      await db.close();
      let associationPaperId = Object.assign({}, this.setAssociationPaperId(let1DataPaperContent.associationPaperId), {
        paper1Id: selectedPaper.let1Data.paperId,
      }) 
      let associationPaperOrder = this.setAssociationPaperOrder(let1DataPaperContent.associationPaperOrder)
      associationPaperOrder.push('1')
      this.letData = Object.assign({}, this.letData, {
        cellIdx0: num0, // 文书号
        cellIdx1: num1, // 文书号
        cellIdx2: num3, // 文书号
        cellIdx3: num4, // 文书号
        cellIdx4: corp.corpName ? corp.corpName : null, // corpname
        cellIdx6: cellIdx6String, // 隐患描述
        cellIdx9: cellIdx9String, // 存放在...
        cellIdx15: cellIdx16String, // 执法机关地址
        cellIdx17: cellIdx17String, // 邮政编码
        cellIdx18: cellIdx19String, // 执法机关联系人
        cellIdx20: cellIdx20String, // 联系电话
        cellIdx21: this.$store.state.curCase.provinceGroupName, //
        cellIdx22: this.todayDate, // 日期
        DangerTable: DangerTable,
        associationPaperId,
        associationPaperOrder
      })
    },
    goBack({ page, data }) {
      // 返回选择企业
      this.$emit("go-back", { page, data });
    },
    commandFill(key, title, type) {
      // 判断是否可编辑
      if (this.$refs.letMain.canEdit) {
        // 文书各个字段点击打开左侧弹出编辑窗口
        let dataKey = `${key}`;
        let spellString = {};
        if (key === "cellIdx6") {
          if (type === "DangerTable") {
            this.options[key] = {
              page: "25",
              key: key,
            };
            dataKey = "DangerTable";
          } else {
            this.options[key] = {
              disabled: false,
            };
          }
        } else if (key === "cellIdx12") {
          this.options[key] = {
            canEdit: true,
            page: "25", // 控制当前为抽样取证或者先行登记保存证据清单
          };
          dataKey = "SamplingForensicsTable";
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