<!--其他 其他 鉴定委托书 55 -->
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
            <div class="textAlignCenter formHeader1">鉴定委托书</div>
            <div class="docTextLine paper-number-div">
              <div>
                <span
                  @click="commandFill('cellIdx0', '文书号', 'TextItem')"
                >{{ letData.cellIdx0 ? letData.cellIdx0 : '（编辑）' }}</span>
                <label>（</label>
                <span
                  @click="commandFill('cellIdx1', '文书号', 'TextItem')"
                >{{ letData.cellIdx1 ? letData.cellIdx1 : '（编辑）' }}</span>
                <label>）煤安鉴〔</label>
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
                  style="width:50%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx4', '', 'TextItem')"
                >{{letData.cellIdx4}}</td>
                <td class="textAlignLeft">：</td>
              </tr>
            </table>
            <div class="docTextarea ">
              <label style="width: 2em;"></label>
            因调查有关安全生产违法案件的需要，本机关现委托你单位对下列物品进行鉴定。
            </div>
            <div class="docBody itemTable">
              <table>
                <thead>
                  <tr>
                    <th style="width: 30%;">物品名称</th>
                    <th style="width: 30%;">规格型号</th>
                    <th style="width: 15%;">数量</th>
                    <th>备注</th>
                  </tr>
                </thead>
                <tr
                  v-for="(item, index) in (letData.cellIdx5 ? letData.cellIdx5 : [])"
                  :key="index">
                  <td style="width: 30%;">{{item.name}}</td>
                  <td style="width: 30%;">{{item.modelNumber}}</td>
                  <td style="width: 15%;">{{item.num}}</td>
                  <td>{{item.note}}</td>
                </tr>
                <tr 
                  class="edit-tr"
                  @click="commandFill('cellIdx5', '', 'SamplingForensicsTable')"
                >
                <span class="no-print">（点击编辑）</span>
                </tr>
              </table>
            </div>
            <div class="docTextarea ">
              <label style="width: 2em;"></label>
            鉴定要求：
            </div>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              @click="commandFill('cellIdx6', '鉴定要求', 'TextareaItem')">
              <p
                style="width:100%; height:auto; word-wrap:break-word;word-wrap: break-all; overflow: hidden;"
              >{{ letData.cellIdx6 ? letData.cellIdx6 : '（点击编辑）' }}</p>
              <cell-line></cell-line>
            </div>
            <div class="docTextarea">
              <label style="width: 2em;"></label>
              请于
              <span
                @click="commandFill('cellIdx7', '年', 'TextItem')"
              >{{ letData.cellIdx7 ? letData.cellIdx7 : '（XX）' }}</span>
              年
              <span
                @click="commandFill('cellIdx8', '月', 'TextItem')"
              >{{ letData.cellIdx8 ? letData.cellIdx8 : '（XX）' }}</span>
              月
              <span
                @click="commandFill('cellIdx9', '日', 'TextItem')"
              >{{ letData.cellIdx9 ? letData.cellIdx9 : '（XX）' }}</span>
              日前向本机关提交鉴定结果。
            </div>
            <div class="docTextarea" style="margin-bottom: 30px;">
              <label style="width: 2em;"></label>
              联系人：
              <span
                @click="commandFill('cellIdx10', '联系人', 'TextItem')"
              >{{ letData.cellIdx10 ? letData.cellIdx10 : '（点击编辑）' }}</span>
              &nbsp;&nbsp;联系电话：
              <span
                @click="commandFill('cellIdx11', '联系电话', 'TextItem')"
              >{{ letData.cellIdx11 ? letData.cellIdx11 : '（点击编辑）' }}</span>
              。
            </div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_12"
                  align="right"
                  style="width:95%"
                  @click="commandFill('cellIdx12', '', 'TextItem')"
                >{{letData.cellIdx12 ? letData.cellIdx12 : '（点击编辑）'}}</td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_13"
                  align="right"
                  style="width:95%"
                  data-title
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx13', '日期', 'DateItem')"
                >{{letData.cellIdx13 ? letData.cellIdx13 : '（点击编辑）'}}</td>
              </tr>
            </table>
            <div class="docTextarea" style="border-top: 2px solid #000; font-size: 15px;">
              鉴定结果请提出具体鉴定报告书，并由鉴定人员签名或者盖章，加盖鉴定机构印章。
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
import { getDangerObject, getDocNumber } from "@/utils/setInitPaperData";
import associationSelectPaper from '@/components/association-select-paper'
export default {
  name: "Let401",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {},
      options: {},
      associationPaper: []
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
      let { num0, num1, num3, num4 } = await getDocNumber(
        db,
        this.docData.docTypeNo,
        this.corpData.caseId,
        this.$store.state.user
      );
      // 3.sysOfficeInfo实体中 地址：depAddress、邮政编码：depPost、master、联系电话：phone
      const orgInfo = db.table("orgInfo");
      const orgData = await orgInfo.find(
        (item) => item.no === this.$store.state.user.userGroupId
      );
      let orgSysOfficeInfo = orgData && orgData.sysOfficeInfo ? JSON.parse(orgData.sysOfficeInfo) : {depAddress: '', depPost: '', master: '', phone: ''}
      let cellIdx12String = orgSysOfficeInfo.depAddress;
      let cellIdx13String = orgSysOfficeInfo.depPost;
      let cellIdx15String = orgSysOfficeInfo.master;
      let cellIdx16String = orgSysOfficeInfo.phone;
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
        cellIdx4: null, // 
        cellIdx5: null, //
        cellIdx6: null, // 鉴定要求
        cellIdx7: null, //年
        cellIdx8: null, // 月
        cellIdx9: null, //日
        cellIdx10: null, // 联系人
        cellIdx11: null, // 联系电话
        cellIdx12: null, //
        cellIdx13: null, // 日期
        SamplingForensicsTable: {
          tableData: [],
          signature: null,
          signDate: ''
        }
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
        if (key === 'cellIdx5') {
          this.options[key] = {
            canEdit: true,
            page: '55', //
          }
          dataKey = 'SamplingForensicsTable'
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
.itemTable table{
  border-collapse: collapse;
  text-align:center;
  width: 100%;
  td{
    display:table-cell
  }
  .edit-tr {
    width: 100%;
    height: 50px;
    border: 1px solid #000;
    line-height: 50px;
    cursor: pointer;
  }
}
.itemTable table td, table th {
  border: 1px solid #000;
  height: 40px;
}
</style>
