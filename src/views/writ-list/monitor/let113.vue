<!-- 现场检查 实施检查 解除停供电(停供民用爆炸物品)通知书 38 -->
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
            </div>
            <div class="textAlignLeft formHeader4">
              <table class="docBody">
                <tr style="text-align: center;">
                  <td class="textAlignCenter">解除</td>
                  <td
                    class="cellInput"
                    id="cell_idx_0"
                    align="right"
                    data-title="停供电(停供民用爆炸物品)"
                    data-type="text"
                    data-src
                  >
                    {{ letData.cellIdx0 }}
                  </td>
                  <td class="textAlignLeft">通知书</td>
                </tr>
              </table>
            </div>
            <div class="formHeader5 paper-number-div">
              <div>
                <span @click="commandFill('cellIdx1', '', 'TextItem')">{{
                  letData.cellIdx1 ? letData.cellIdx1 : "（编辑）"
                }}</span>
                <label>煤安监</label>
                <span @click="commandFill('cellIdx2', '', 'TextItem')">{{
                  letData.cellIdx2 ? letData.cellIdx2 : "（编辑）"
                }}</span>
                <label>解停〔</label>
                <span @click="commandFill('cellIdx3', '', 'TextItem')">{{
                  letData.cellIdx3 ? letData.cellIdx3 : "（编辑）"
                }}</span>
                <label>〕</label>
                <span @click="commandFill('cellIdx4', '', 'TextItem')">{{
                  letData.cellIdx4 ? letData.cellIdx4 : "（编辑）"
                }}</span>
                <label>号</label>
              </div>
            </div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_5"
                  style="width: 50%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx5', '', 'TextItem')"
                >
                  {{ letData.cellIdx5 }}
                </td>
                <td class="textAlignLeft">:</td>
              </tr>
            </table>
            <div class="docTextarea">
              <label style="width: 5%"></label>
              <span @click="commandFill('cellIdx6', '', 'TextItem')">{{
                letData.cellIdx6 ? letData.cellIdx6 : "（点击编辑）"
              }}</span>
              已依法履行行政决定，采取相应措施消除了安全隐患，发生生产安全事故的现实危险已不存在，根据《中华人民共和国安全生产法》第<span class="text-decoration">七十</span>条第<span class="text-decoration">二</span>款规定，请贵单位解除对其采取的
              <span class="no-underline">{{ letData.cellIdx7 ? letData.cellIdx7 : "（点击编辑）" }}</span>
              措施。
            </div>
            <table height="30"></table>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:50%">
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;受送达人（签名）：</span>
                <span @click="commandFill('cellIdx8', '受送达人（签名）', 'TextItem')"
                  >{{ letData.cellIdx8 ? letData.cellIdx8 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;日期：</span>
                <span @click="commandFill('cellIdx9', '日期', 'DateItem')">{{
                  letData.cellIdx9 ? letData.cellIdx9 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:50%">
                <span class="no-line">
                  <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;我</span>
                  <span class="no-line" @click="commandFill('cellIdx10', '局', 'TextItem')"
                  >{{ letData.cellIdx10 ? letData.cellIdx10 : "(编辑)" }}</span>
                地址：</span>
                <span @click="commandFill('cellIdx11', '地址', 'TextItem')"
                  >{{ letData.cellIdx11 ? letData.cellIdx11 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;邮政编码：</span>
                <span @click="commandFill('cellIdx12', '邮政编码', 'TextItem')">{{
                  letData.cellIdx12 ? letData.cellIdx12 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
              <div class="docTextarea">
                <div style="display:inline-block;min-width:50%">
                  <span class="no-line">
                    <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;我</span>
                    <span class="no-line" @click="commandFill('cellIdx13', '局', 'TextItem')"
                    >{{ letData.cellIdx13 ? letData.cellIdx13 : "(编辑)" }}</span>
                  联系人：</span>
                  <span @click="commandFill('cellIdx14', '联系人', 'TextItem')"
                    >{{ letData.cellIdx14 ? letData.cellIdx14 : "（点击编辑）" }}
                  </span>
                </div>
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;联系电话：</span>
                <span @click="commandFill('cellIdx15', '联系电话', 'TextItem')">{{
                  letData.cellIdx15 ? letData.cellIdx15 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <table height="30"></table>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_16"
                  align="right"
                  style="width: 95%"
                  @click="commandFill('cellIdx16', '', 'TextItem')"
                >
                  {{ letData.cellIdx16 ? letData.cellIdx16 : "（点击编辑）" }}
                </td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_17"
                  align="right"
                  style="width: 95%"
                  data-title
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx17', '日期', 'DateItem')"
                >
                  {{ letData.cellIdx17 ? letData.cellIdx17 : "（点击编辑）" }}
                </td>
              </tr>
            </table>
            <table height="30"></table>
            <div class="docTextarea" style="border-top: 2px solid #000;">
              备注：本文书一式三份，一份交
              <span
                style="borderBottom:none"
              >{{ letData.cellIdx18 ? letData.cellIdx18 : '（点击编辑）'}}</span>
              ，一份交煤矿，一份存档。 
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
import { getDocNumber, setNewDanger } from "@/utils/setInitPaperData";
import associationSelectPaper from "@/components/association-select-paper";
export default {
  name: "Let113",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {
        cellIdx0: null, // 解除停供电(解除停供民用爆炸物品)
        cellIdx1: null, // 文书号
        cellIdx2: null, // 文书号
        cellIdx3: null, // 文书号
        cellIdx4: null, // 文书号
        cellIdx5: null, // 单位
        cellIdx6: null, // corpname
        cellIdx7: null, // 解除停供电(解除停供民用爆炸物品)
        cellIdx8: null, // 受送达人（签名）
        cellIdx9: null, // 日期
        cellIdx10: null, // 局
        cellIdx11: null, // 地址
        cellIdx12: null, // 邮政编码
        cellIdx13: null, // 局
        cellIdx14: null, // 联系人
        cellIdx15: null, // 联系电话
        cellIdx16: null, //
        cellIdx17: null, // 日期
        cellIdx18: null, // 单位/个人
        cellIdx19: null, // 暂不用
        selectedType: null,
        DangerTable: null, // 隐患项大表
        associationPaperId: null,
        associationPaperOrder: []
      },
      options: {},
      associationPaper: ['37'],
    };
  },
  methods: {
    async initLetData(selectedPaper) {
      let corpBase = await this.getDatabase("baseInfo");
      let corp = corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      // 1.关联停供电通知书
      let let37DataPaperContent = JSON.parse(
        selectedPaper.let37Data.paperContent
      );
      // 2.生成文书编号
      let { num0, num1, num3, num4 } = await getDocNumber(
        this.docData.docTypeNo,
        this.corpData.caseId
      );
      // 3.sysOfficeInfo实体中 地址：depAddress、邮政编码：depPost、联系人：master、联系电话：phone
      let orgInfo = await this.getDatabase('org');
      // 监察需要筛选type
      let orgData = await orgInfo.find(
        (item) => item.no === this.$store.state.curCase.groupId
        // && (item.type === '3' || item.type === '4' || item.type === '11') 
        && item.delFlag !== "1"
      );
      let orgSysOfficeInfo =
        orgData && orgData.sysOfficeInfo
          ? JSON.parse(orgData.sysOfficeInfo)
          : { depAddress: "", depPost: "", master: "", phone: "" };
      let cellIdx11String = orgSysOfficeInfo.depAddress;
      let cellIdx12String = orgSysOfficeInfo.depPost;
      let cellIdx14String = orgSysOfficeInfo.master;
      let cellIdx15String = orgSysOfficeInfo.phone;
      let DangerTable = null
      if (this.corpData.caseType === '0') {
        DangerTable = let37DataPaperContent.DangerTable ? 
          setNewDanger(selectedPaper.let37Data, let37DataPaperContent.DangerTable)
          : {}
      }
      let associationPaperId = Object.assign({}, this.setAssociationPaperId(let37DataPaperContent.associationPaperId), {
        paper37Id: selectedPaper.let37Data.paperId,
      }) 
      let associationPaperOrder = this.setAssociationPaperOrder(let37DataPaperContent.associationPaperOrder)
      associationPaperOrder.push('37')
      this.letData = Object.assign({}, this.letData, {
        cellIdx0: let37DataPaperContent.selectedType, // 解除停供电(解除停供民用爆炸物品)
        cellIdx1: num0, // 文书号
        cellIdx2: num1, // 文书号
        cellIdx3: num3, // 文书号
        cellIdx4: num4, // 文书号
        cellIdx5: let37DataPaperContent.selectedType === '停供电' ? `${orgData.areaName}供电公司` : `${orgData.areaName}公安局`,
        cellIdx6: corp.corpName ? corp.corpName : null, // corpname
        cellIdx7: let37DataPaperContent.selectedType, // 解除停供电(解除停供民用爆炸物品)
        cellIdx10: '局', // 局
        cellIdx11: cellIdx11String, // 地址
        cellIdx12: cellIdx12String, // 邮政编码
        cellIdx13: '局', // 局
        cellIdx14: cellIdx14String, // 联系人
        cellIdx15: cellIdx15String, // 联系电话
        cellIdx16: this.$store.state.curCase.provinceGroupName, //
        cellIdx17: this.todayDate, // 日期
        cellIdx18: let37DataPaperContent.selectedType === '停供电' ? '供电部门' : '公安机关', // 单位/个人
        selectedType: let37DataPaperContent.selectedType,
        DangerTable, // 隐患项大表
        associationPaperId: associationPaperId,
        associationPaperOrder,
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