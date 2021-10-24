<!-- 现场检查 实施检查 责令撤出作业人员指令书 3 -->
<template>
  <div style="width: 100%; height: 100%;">
    <let-main
      ref="letMain"
      :corp-data="corpData"
      :doc-data="docData"
      :let-data="letData"
      :edit-data="paperData"
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
            <div class="textAlignCenter formHeader1">撤出作业人员指令书</div>
            <div class="docTextLine paper-number-div">
              <div>
                <span
                  @click="commandFill('cellIdx0', '文书号', 'TextItem')"
                >{{ letData.cellIdx0 ? letData.cellIdx0 : '（编辑）' }}</span>
                <label>（</label>
                <span
                  @click="commandFill('cellIdx1', '文书号', 'TextItem')"
                >{{ letData.cellIdx1 ? letData.cellIdx1 : '（编辑）' }}</span>
                <label>）煤安撤〔</label>
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
              本机关于
              <span
                @click="commandFill('cellIdx6', '年', 'TextItem')"
              >{{ letData.cellIdx6 ? letData.cellIdx6 : '（XX）'}}</span>
              年
              <span
                @click="commandFill('cellIdx7', '月', 'TextItem')"
              >{{ letData.cellIdx7 ? letData.cellIdx7 : '（XX）' }}</span>
              月
              <span
                @click="commandFill('cellIdx8', '日', 'TextItem')"
              >{{ letData.cellIdx8 ? letData.cellIdx8 : '（XX）'}}</span>
              日
              <span
                @click="commandFill('cellIdx9', '时', 'TextItem')"
              >{{ letData.cellIdx9 ? letData.cellIdx9 : '（XX）'}}</span>
              时
              <span
                @click="commandFill('cellIdx10', '时', 'TextItem')"
              >{{ letData.cellIdx10 ? letData.cellIdx10 : '（XX）'}}</span>
              分，在对你单位检查时，发现在
              <span
                @click="commandFill('cellIdx11', '', 'TextItem')"
              >{{ letData.cellIdx11? letData.cellIdx11 : '（点击编辑）' }}</span>
              有
              <span
                @click="commandFill('cellIdx12', '违法行为', 'DangerTableItem')"
              >{{ letData.cellIdx12 ? letData.cellIdx12 : '（点击编辑）'}}</span>
              等威胁作业人员生命安全的紧急情况，现责令立即从
              <span
                @click="commandFill('cellIdx13', '', 'TextItem')"
              >{{ letData.cellIdx13 ? letData.cellIdx13 : '（点击编辑）'}}</span>
              危险区内撤出作业人员。
            </div>
            <div class="docTextarea">
              <label style="width:5%"></label>
              此指令
              <span
                @click="commandFill('cellIdx14', '年', 'TextItem')"
              >{{ letData.cellIdx14 ? letData.cellIdx14 : '（XX）'}}</span>
              年
              <span
                @click="commandFill('cellIdx15', '月', 'TextItem')"
              >{{ letData.cellIdx15 ? letData.cellIdx15 : '（XX）' }}</span>
              月
              <span
                @click="commandFill('cellIdx16', '日', 'TextItem')"
              >{{ letData.cellIdx16 ? letData.cellIdx16 : '（XX）'}}</span>
              日
              <span
                @click="commandFill('cellIdx17', '时', 'TextItem')"
              >{{ letData.cellIdx17 ? letData.cellIdx17 : '（XX）'}}</span>
              时
              <span
                @click="commandFill('cellIdx18', '分', 'TextItem')"
              >{{ letData.cellIdx18 ? letData.cellIdx18 : '（XX）'}}</span>
              分现场已作出。
            </div>
            <div class="docTextarea">
              <label style="width:5%"></label>
              如果不服本指令，可在接到本指令书之日起60日内向
              <span
                @click="commandFill('cellIdx19', '人民政府', 'TextItem')"
              >{{ letData.cellIdx19 ? letData.cellIdx19 : '（点击编辑）'}}</span>
              人民政府或者
              <span
                @click="commandFill('cellIdx20', '', 'TextItem')"
              >{{ letData.cellIdx20 ? letData.cellIdx20 : '（点击编辑）' }}</span>
              申请行政复议，或者在6个月内依法向
              <span
                @click="commandFill('cellIdx21', '人民法院', 'TextItem')"
              >{{ letData.cellIdx21 ? letData.cellIdx21 : '（点击编辑）'}}</span>
              人民法院提起行政诉讼；复议、诉讼期间不停止执行本指令。
            </div>
            <div class="docTextLine" style="margin-top: 60px;">
              <div style="flex: 1; display: flex;">
                <label>现场执法人员（签名）：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx22', '现场执法人员（签名）', 'TextItem')"
                >{{ letData.cellIdx22 ? letData.cellIdx22 : '（点击编辑）' }}</div>
              </div>
              <div style="flex: 1; display: flex;">
                <label>执法证号：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx23', '执法证号', 'TextItem')"
                >{{ letData.cellIdx23 ? letData.cellIdx23 : '（点击编辑）' }}</div>
              </div>
            </div>
            <div class="docTextLine">
              <div style="flex: 1; display: flex;">
                <label style="width: 60%;"></label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx24', '现场执法人员（签名）', 'TextItem')"
                >{{ letData.cellIdx24 ? letData.cellIdx24 : '（点击编辑）' }}</div>
              </div>
              <div style="flex: 1; display: flex;">
                <label>执法证号：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx25', '执法证号', 'TextItem')"
                >{{ letData.cellIdx25 ? letData.cellIdx25 : '（点击编辑）' }}</div>
              </div>
            </div>
            <div class="docTextLine">
              <div style="flex: 7; display: flex;">
                <label>被检查单位负责人意见：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx26', '被检查单位负责人意见', 'TextItem')"
                >{{ letData.cellIdx26 ? letData.cellIdx26 : '（编辑）' }}</div>
              </div>
              <div style="flex: 4; display: flex;">
                <label>签名：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx27', '签名', 'TextItem')"
                >{{ letData.cellIdx27 ? letData.cellIdx27 : '（编辑）' }}</div>
              </div>
              <div style="flex: 4; display: flex;">
                <label>日期：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx28', '日期', 'DateItem')"
                >{{ letData.cellIdx28 ? letData.cellIdx28 : '（编辑）' }}</div>
              </div>
            </div>
            <table class="docBody" style="margin-top: 30px;">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_29"
                  align="right"
                  style="width:95%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx29', '', 'TextItem')"
                >{{ letData.cellIdx29? letData.cellIdx29 : '（点击编辑）' }}</td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_30"
                  align="right"
                  style="width:95%"
                  data-title
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx30', '日期', 'DateItem')"
                >{{letData.cellIdx30 ? letData.cellIdx30 : '（点击编辑）'}}</td>
              </tr>
            </table>
            <div class="docTextarea" style="border-top: 2px solid #000;">
              备注：本文书一式两份，一份交被检查单位，一份存档。
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
import { getDangerObject, getDocNumber } from '@/utils/setInitPaperData'
import associationSelectPaper from '@/components/association-select-paper'
export default {
  name: "Let106",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {},
      options: {
        cellIdx12: {
          page: '3',
          key: 'cellIdx12'
        },
      },
      associationPaper: ['1']
    };
  },
  methods: {
    async initLetData (selectedPaper) {
      const db = new GoDB(this.$store.state.DBName);
      const corpBase = db.table("corpBase");
      const corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      // 1.生成文书编号
      let { num0, num1, num3, num4 } = await getDocNumber(db, this.docData.docTypeNo, this.corpData.caseId, this.$store.state.user)
      // 2.时间
      let now = new Date()
      let cellIdx6Year = now.getFullYear()
      let cellIdx7Month = now.getMonth() + 1
      let cellIdx8Date = now.getDate()
      let cellIdx9Hour = now.getHours()
      let cellIdx10Minu = now.getMinutes()
      let let1DataPapaerContent = JSON.parse(selectedPaper.let1Data.paperContent)
      let dangerObject = getDangerObject(let1DataPapaerContent.dangerItemObject.tableData)
      let cellIdx12String = dangerObject.dangerString
      // 4.sysOfficeInfo中organName和courtPrefix
      const orgInfo = db.table("orgInfo");
      const orgData = await orgInfo.find(item => item.no === this.$store.state.user.userGroupId)
      let orgSysOfficeInfo = orgData && orgData.sysOfficeInfo ? JSON.parse(orgData.sysOfficeInfo) : {organName: '', courtPrefix: ''}
      let cellIdx20String = orgSysOfficeInfo.organName
      let cellIdx21String = orgSysOfficeInfo.courtPrefix
      await db.close();
      this.letData = {
        cellIdx0: num0, // 文书号
        cellIdx0TypeTextItem: num0, // 文书号
        cellIdx1: num1, // 文书号
        cellIdx1TypeTextItem: num1, // 文书号
        cellIdx2: num3, // 文书号
        cellIdx2TypeTextItem: num3, // 文书号
        cellIdx3: num4, // 文书号
        cellIdx3TypeTextItem: num4, // 文书号
        cellIdx4: corp.corpName ? corp.corpName : null, // corpname
        cellIdx4TypeTextItem: corp.corpName ? corp.corpName : null, // corpname
        // cellIdx5: null, // 单位
        cellIdx6: cellIdx6Year, // 年
        cellIdx6TypeTextItem: cellIdx6Year, // 年
        cellIdx7: cellIdx7Month, // 月
        cellIdx7TypeTextItem: cellIdx7Month, // 月
        cellIdx8: cellIdx8Date, // 日
        cellIdx8TypeTextItem: cellIdx8Date, // 日
        cellIdx9: cellIdx9Hour, // 时
        cellIdx9TypeTextItem: cellIdx9Hour, // 时
        cellIdx10: cellIdx10Minu, // 分
        cellIdx10TypeTextItem: cellIdx10Minu, // 分
        cellIdx11: null, // 发现在。。。有
        cellIdx12: cellIdx12String, // 违法行为
        cellIdx13: null, // 现责令立即从XXX危险区内撤出作业人员
        cellIdx14: cellIdx6Year, // 年
        cellIdx14TypeTextItem: cellIdx6Year, // 年
        cellIdx15: cellIdx7Month, // 月
        cellIdx15TypeTextItem: cellIdx7Month, // 月
        cellIdx16: cellIdx8Date, // 日
        cellIdx16TypeTextItem: cellIdx8Date, // 日
        cellIdx17: cellIdx9Hour, // 时
        cellIdx17TypeTextItem: cellIdx9Hour, // 时
        cellIdx18: cellIdx10Minu, // 分
        cellIdx18TypeTextItem: cellIdx10Minu, // 分
        cellIdx19: orgSysOfficeInfo.goverPrefix, // 人民政府
        cellIdx19TypeTextItem: orgSysOfficeInfo.goverPrefix, // 人民政府
        cellIdx20: cellIdx20String, // 机构名
        cellIdx20TypeTextItem: cellIdx20String, // 机构名
        cellIdx21: cellIdx21String, // 人民法院
        cellIdx21TypeTextItem: cellIdx21String, // 人民法院
        cellIdx22: null, // 现场执法人员（签名）
        cellIdx23: null, // 执法证号
        cellIdx24: null, // 现场执法人员（签名）
        cellIdx25: null, // 执法证号
        cellIdx26: null, //被检查单位负责人意见
        cellIdx27: null, // 签名
        cellIdx28: null, // 日期
        cellIdx29: this.$store.state.curCase.groupName, //
        cellIdx30: this.todayDate, // 日期
        dangerItemObject: let1DataPapaerContent.dangerItemObject
      };
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
        if (key === 'cellIdx12') {
          this.options[key] = {
            page: '3',
            key: key,
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