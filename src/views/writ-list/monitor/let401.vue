<!-- 其他 其他 移送书 19 -->
<template>
  <div style="width: 100%; height: 100%">
    <let-main
      ref="letMain"
      :corp-data="corpData"
      :doc-data="docData"
      :let-data="letData"
      :paper-data="paperData"
      :from-page="fromPage"
      @go-back="goBack"
    >
      <div slot="left">
        <div class="page page-sizeA4">
          <div>
            <div class="stdRowH"></div>
            <div class="textAlignCenter formHeader2">
              国 家 矿 山 安 全 监 察
              <br />
            </div>
            <div class="textAlignCenter formHeader4">移 送 书</div>
            <div class="formHeader5 paper-number-div">
              <div style="display: flex; width: 100%;">
                <div>
                  <span @click="commandFill('cellIdx0', '文书号', 'TextItem')">{{ 
                    letData.cellIdx0 ? letData.cellIdx0 : "（编辑）"
                  }}</span>
                  <label>煤安监</label>
                  <span @click="commandFill('cellIdx1', '文书号', 'TextItem')">{{
                    letData.cellIdx1 ? letData.cellIdx1 : "（编辑）"
                  }}</span>
                  <label>移〔</label>
                  <span @click="commandFill('cellIdx2', '文书号', 'TextItem')">{{
                    letData.cellIdx2 ? letData.cellIdx2 : "（编辑）"
                  }}</span>
                  <label>〕</label>
                  <span @click="commandFill('cellIdx3', '文书号', 'TextItem')">{{
                    letData.cellIdx3 ? letData.cellIdx3 : "（编辑）"
                  }}</span>
                  <label>号</label>
                </div>
                <div style="flex: 1; text-align: right;">
                  <label>签发人：</label>
                  <span @click="commandFill('cellIdx4', '签发人', 'TextItem')">{{
                    letData.cellIdx4 ? letData.cellIdx4 : "（编辑）"
                  }}</span>
                </div>
              </div>
            </div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_5"
                  style="width: 60%"
                  data-title=""
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx5', '', 'TextItem')"
                >
                  {{ letData.cellIdx5 }}
                </td>
                <td class="textAlignLeft">：</td>
              </tr>
            </table>
            <div class="docTextarea">
              <label style="width: 5%"></label>
              经我
              <span
                class="no-underline"
                @click="commandFill('cellIdx6', '局', 'TextItem')"
                >{{
                  letData.cellIdx6 ? letData.cellIdx6 : ""
                }}</span
              >
              检查，发现
              <span @click="commandFill('cellIdx7', '', 'TextItem')">{{
                letData.cellIdx7 ? letData.cellIdx7 : "（点击编辑）"
              }}</span>
              存在
              <span @click="commandFill('cellIdx8', '', 'TextareaItem')">{{
                letData.cellIdx8 ? letData.cellIdx8 : "（点击编辑）"
              }}</span>
              的问题，根据《中华人民共和国安全生产法》第<span class="text-decoration">六十九</span>条规定，现移送贵单位依法处理。
            </div>
            <table height="30"></table>
            <table class="docBody">
              <tr>
                <td style="width: 5%"></td>
                <td class="textAlignLeft">附件：有关材料</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_9"
                  align="center"
                  style="width: 10%"
                  data-title="份数"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx9', '份数', 'TextItem')"
                >
                  {{ letData.cellIdx9 }}
                </td>
                <td class="textAlignLeft">份</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_10"
                  align="center"
                  style="width: 10%"
                  data-title="页数"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx10', '页数', 'TextItem')"
                >
                  {{ letData.cellIdx10 }}
                </td>
                <td class="textAlignLeft">页</td>
              </tr>
            </table>
            <table height="20"></table>
            <div class="docTextarea">
                <div style="display:inline-block;min-width:50%">
                  <span class="no-line">
                    <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;我</span>
                    <span class="no-line" @click="commandFill('cellIdx11', '局', 'TextItem')"
                    >{{ letData.cellIdx11 ? letData.cellIdx11 : "" }}</span>
                  地址：</span>
                  <span @click="commandFill('cellIdx12', '地址', 'TextItem')"
                    >{{ letData.cellIdx12 ? letData.cellIdx12 : "（点击编辑）" }}
                  </span>
                </div>
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;邮政编码：</span>
                <span @click="commandFill('cellIdx13', '邮政编码', 'TextItem')">{{
                  letData.cellIdx13 ? letData.cellIdx13 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <div class="docTextarea">
                <div style="display:inline-block;min-width:50%">
                  <span class="no-line">
                    <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;我</span>
                    <span class="no-line" @click="commandFill('cellIdx14', '局', 'TextItem')"
                    >{{ letData.cellIdx14 ? letData.cellIdx14 : "" }}</span>
                  联系人：</span>
                  <span @click="commandFill('cellIdx15', '联系人', 'TextItem')"
                    >{{ letData.cellIdx15 ? letData.cellIdx15 : "（点击编辑）" }}
                  </span>
                </div>
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;电&nbsp;&nbsp;&nbsp;&nbsp;话:</span>
                <span @click="commandFill('cellIdx16', '电话', 'TextItem')">{{
                  letData.cellIdx16 ? letData.cellIdx16 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:50%">
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;送件人（签名）：</span>
                <span @click="commandFill('cellIdx17', '送件人（签名）', 'TextItem')"
                  >{{ letData.cellIdx17 ? letData.cellIdx17 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;日&nbsp;&nbsp;&nbsp;&nbsp;期:</span>
                <span @click="commandFill('cellIdx18', '日期', 'DateItem')">{{
                  letData.cellIdx18 ? letData.cellIdx18 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:50%">
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;收件人（签名）：</span>
                <span @click="commandFill('cellIdx19', '收件人（签名）', 'TextItem')"
                  >{{ letData.cellIdx19 ? letData.cellIdx19 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;日&nbsp;&nbsp;&nbsp;&nbsp;期:</span>
                <span @click="commandFill('cellIdx20', '日期', 'DateItem')">{{
                  letData.cellIdx20 ? letData.cellIdx20 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <table height="30"></table>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_21"
                  align="right"
                  style="width: 95%"
                >
                  {{ letData.cellIdx21 }}
                </td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_22"
                  align="right"
                  style="width: 95%"
                  data-title
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx22', '日期', 'DateItem')"
                >
                  {{ letData.cellIdx22 ? letData.cellIdx22 : "（点击编辑）" }}
                </td>
              </tr>
            </table>
            <div class="docTextarea" style="border-top: 2px solid #000;">
              备注：本文书一式两份，一份移送有关单位，一份存档。
            </div>
          </div>
        </div>
      </div>
    </let-main>
    <!-- 关联文书选择 -->
    <select-paper
      v-if="visible.selectPaper"
      :visible="visible.selectPaper"
      :paper-list="paperList"
      @close="closeDialog"
      @confirm-paper="confirmPaper"
    ></select-paper>
  </div>
</template>

<script>
import { getOrgData, getDocNumber, setNewDanger } from "@/utils/setInitPaperData";
import associationSelectPaper from '@/components/association-select-paper'
import { setDangerTable } from '@/utils/handlePaperData'
export default {
  name: "Let401",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {
        cellIdx0: null, // 文书号
        cellIdx1: null, // 文书号
        cellIdx2: null, // 文书号
        cellIdx3: null, // 文书号
        cellIdx4: null, // 签发人
        cellIdx5: null, //
        cellIdx6: null, // 局
        cellIdx7: null, //
        cellIdx8: null, // 违法行为
        cellIdx9: null, // X份
        cellIdx10: null, // X页
        cellIdx11: null, // 局
        cellIdx12: null, // 地址
        cellIdx13: null, // 邮政编码
        cellIdx14: null, // 局
        cellIdx15: null, // 联系人
        cellIdx16: null, // 电话
        cellIdx17: null, // 送件人（签名）
        cellIdx18: null, // 日期
        cellIdx19: null, // 收件人（签名）
        cellIdx20: null, // 日期
        cellIdx21: null, //
        cellIdx22: null, // 日期
        DangerTable: null,
        associationPaperId: null,
        associationPaperOrder: []
      },
      options: {},
      associationPaper: ['1']
    };
  },
  methods: {
    async initLetData (selectedPaper) {
      let corpBase = await this.getDatabase("baseInfo");
      let corp = corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      // 1.生成文书编号
      let { num0, num1, num3, num4 } = await getDocNumber(
        this.docData.docTypeNo,
        this.corpData.caseId
      );
      // 2.违法行为：获取笔录文书中的隐患数据
      let let1DataPaperContent = selectedPaper.let1Data ? JSON.parse(selectedPaper.let1Data.paperContent) : null
      let cellIdx8String = this.corpData.caseType === '0' ? setDangerTable(
        let1DataPaperContent.DangerTable,
        {}, 
        {
          page: "19",
          key: "cellIdx8",
        }
      ):'';
      // 3.sysOfficeInfo实体中 地址：depAddress、邮政编码：depPost、master、联系电话：phone
      let orgSysOfficeInfo = await getOrgData(this.$store.state.curCase.groupId)
      let cellIdx12String = orgSysOfficeInfo.depAddress;
      let cellIdx13String = orgSysOfficeInfo.depPost;
      let cellIdx15String = orgSysOfficeInfo.master;
      let cellIdx16String = orgSysOfficeInfo.phone;
      let DangerTable = null
      if (this.corpData.caseType === '0') {
        DangerTable = let1DataPaperContent.DangerTable ? 
          setNewDanger(selectedPaper.let1Data, let1DataPaperContent.DangerTable)
          : {}
      }
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
        cellIdx6: '局', // 局
        cellIdx7: corp.corpName, //
        cellIdx8: cellIdx8String, // 违法行为
        cellIdx11: '局', // 局
        cellIdx12: cellIdx12String, // 地址
        cellIdx13: cellIdx13String, // 邮政编码
        cellIdx14: '局', // 局
        cellIdx15: cellIdx15String, // 联系人
        cellIdx16: cellIdx16String, // 电话
        cellIdx21: this.$store.state.curCase.provinceGroupName, //
        cellIdx22: this.todayDate, // 日期
        DangerTable,
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