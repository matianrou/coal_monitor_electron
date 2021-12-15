<!--其他 其他 涉嫌犯罪案件移送书 20 -->
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
            <div class="textAlignCenter formHeader1">涉嫌犯罪案件移送书</div>
            <div class="docTextLine paper-number-div">
              <div>
                <span
                  @click="commandFill('cellIdx0', '文书号', 'TextItem')"
                >{{ letData.cellIdx0 ? letData.cellIdx0 : '(编辑)' }}</span>
                <label>（</label>
                <span
                  @click="commandFill('cellIdx1', '文书号', 'TextItem')"
                >{{ letData.cellIdx1 ? letData.cellIdx1 : '(编辑)' }}</span>
                <label>）煤安涉〔</label>
                <span
                  @click="commandFill('cellIdx2', '文书号', 'TextItem')"
                >{{ letData.cellIdx2 ? letData.cellIdx2 : '(编辑)' }}</span>
                <label>〕</label>
                <span
                  @click="commandFill('cellIdx3', '文书号', 'TextItem')"
                >{{ letData.cellIdx3 ? letData.cellIdx3 : '(编辑)' }}</span>
                <label>号&nbsp;&nbsp;签发人：</label>
                <span
                  @click="commandFill('cellIdx4', '签发人', 'TextItem')"
                >{{ letData.cellIdx4 ? letData.cellIdx4 : '(编辑)' }}</span>
              </div>
            </div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_5"
                  style="width:50%"
                  data-title="受移送单位"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx5', '受移送单位', 'TextItem')"
                >{{letData.cellIdx5}}</td>
                <td class="textAlignLeft">：</td>
              </tr>
            </table>
            <div class="docTextarea">
              <label style="width:5%"></label>
              本机关于
              <span
                @click="commandFill('cellIdx7', '年', 'TextItem')"
              >{{ letData.cellIdx7 ? letData.cellIdx7 : '（XX）'}}</span>
              年
              <span
                @click="commandFill('cellIdx8', '月', 'TextItem')"
              >{{ letData.cellIdx8 ? letData.cellIdx8 : '（XX）'}}</span>
              月
              <span
                @click="commandFill('cellIdx9', '日', 'TextItem')"
              >{{ letData.cellIdx9 ? letData.cellIdx9 : '（XX）'}}</span>
              日对
              <span
                @click="commandFill('cellIdx10', '', 'TextItem')"
              >{{ letData.cellIdx10 ? letData.cellIdx10 : '（点击编辑）'}}</span>
              立案调查，在调查中发现其违法事实涉嫌构成犯罪，根据《行政执法机关移送涉嫌犯罪案件的规定》第三条第一款以及
              <span
                @click="commandFill('cellIdx11', '法律规定', 'TextareaItem')"
              >{{ letData.cellIdx11 ? letData.cellIdx11 : '（点击编辑）'}}</span>
              规定，现移送贵单位，请审查决定是否予以立案侦查。
            </div>
            <table class="docBody" style="margin-top: 30px; margin-bottom: 30px;">
              <tr>
                <td class="textAlignLeft">附：本案有关材料</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_12"
                  align="center"
                  style="width:10%"
                  data-title="份数"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx12', '份数', 'TextItem')"
                >{{letData.cellIdx12}}</td>
                <td class="textAlignLeft">份</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_13"
                  align="center"
                  style="width:10%"
                  data-title="页数"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx13', '页数', 'TextItem')"
                >{{letData.cellIdx13}}</td>
                <td class="textAlignLeft">页</td>
              </tr>
            </table>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:55%">
                <span class="no-line">移送单位地址：</span>
                <span @click="commandFill('cellIdx14', '移送单位地址', 'TextItem')"
                  >{{ letData.cellIdx14 ? letData.cellIdx14 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">&nbsp;&nbsp;邮政编码：</span>
                <span @click="commandFill('cellIdx16', '邮政编码', 'TextItem')">{{
                  letData.cellIdx16 ? letData.cellIdx16 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:55%">
                <span class="no-line">移送单位联系人：</span>
                <span @click="commandFill('cellIdx18', '移送单位联系人', 'TextItem')"
                  >{{ letData.cellIdx18 ? letData.cellIdx18 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">&nbsp;&nbsp;电&nbsp;&nbsp;&nbsp;&nbsp;话：</span>
                <span @click="commandFill('cellIdx19', '电话', 'TextItem')">{{
                  letData.cellIdx19 ? letData.cellIdx19 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:55%">
                <span class="no-line">送件人（签名）：</span>
                <span @click="commandFill('cellIdx20', '送件人（签名）', 'TextItem')"
                  >{{ letData.cellIdx20 ? letData.cellIdx20 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">&nbsp;&nbsp;日&nbsp;&nbsp;&nbsp;&nbsp;期：</span>
                <span @click="commandFill('cellIdx21', '日期', 'DateItem')">{{
                  letData.cellIdx21 ? letData.cellIdx21 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:55%">
                <span class="no-line">送件人（签名）：</span>
                <span @click="commandFill('cellIdx22', '送件人（签名）', 'TextItem')"
                  >{{ letData.cellIdx22 ? letData.cellIdx22 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">&nbsp;&nbsp;日&nbsp;&nbsp;&nbsp;&nbsp;期：</span>
                <span @click="commandFill('cellIdx23', '日期', 'DateItem')">{{
                  letData.cellIdx23 ? letData.cellIdx23 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:55%">
                <span class="no-line">收件人（签名）：</span>
                <span @click="commandFill('cellIdx24', '收件人（签名）', 'TextItem')"
                  >{{ letData.cellIdx24 ? letData.cellIdx24 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">&nbsp;&nbsp;日&nbsp;&nbsp;&nbsp;&nbsp;期：</span>
                <span @click="commandFill('cellIdx25', '日期', 'DateItem')">{{
                  letData.cellIdx25 ? letData.cellIdx25 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <table class="docBody" style="margin-top: 30px;">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_26"
                  align="right"
                  style="width:95%"
                  @click="commandFill('cellIdx26', '', 'TextItem')"
                >{{letData.cellIdx26 ? letData.cellIdx26 : '（点击编辑）'}}</td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_27"
                  align="right"
                  style="width:95%"
                  data-title
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx27', '日期', 'DateItem')"
                >{{letData.cellIdx27 ? letData.cellIdx27 : '（点击编辑）'}}</td>
              </tr>
            </table>
            <div class="docTextarea" style="border-top: 2px solid #000;">
              备注：本文书一式两份，一份交受移送公安机关，一份存档。
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
  name: "Let402",
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
      let db = new GoDB(this.$store.state.DBName);
      let corpBase = db.table("corpBase");
      let corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      // 1.生成文书编号
      let { num0, num1, num3, num4 } = await getDocNumber(db, this.docData.docTypeNo, this.corpData.caseId)
      // 2.违法行为：获取笔录文书中的隐患数据
      // let let1DataPaperContent = JSON.parse(selectedPaper.let1Data.paperContent)
      // let dangerObject = getDangerObject(let1DataPaperContent.DangerTable.tableData)
      // let cellIdx5String = `${corp.corpName}涉嫌${dangerObject.dangerString}案。`
      // 3.sysOfficeInfo实体中 地址：depAddress、邮政编码：depPost、master、联系电话：phone
      let orgInfo = db.table("orgInfo");
      let orgData = await orgInfo.find(item => item.no === this.$store.state.user.userGroupId)
      let orgSysOfficeInfo = orgData && orgData.sysOfficeInfo ? JSON.parse(orgData.sysOfficeInfo) : {depAddress: '', depPost: '', master: '', phone: ''}
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
        cellIdx4: null, // 签发人
        cellIdx5: null, // 被检查单位
        // cellIdx6: null, // 单位 暂不用
        cellIdx7: null, // 年
        cellIdx8: null, // 月
        cellIdx9: null, // 日
        cellIdx10: corp.corpName, // corpName
        cellIdx10TypeTextItem: corp.corpName, // corpName
        cellIdx11: null, // 法律规定
        cellIdx12: null, // 份数
        cellIdx13: null, // 页数
        cellIdx14: orgSysOfficeInfo.depAddress, // 移送单位地址
        cellIdx14TypeTextItem: orgSysOfficeInfo.depAddress, // 移送单位地址
        cellIdx15: null, // 单位 暂不用
        cellIdx16: orgSysOfficeInfo.depPost, // 邮政编码
        cellIdx16TypeTextItem: orgSysOfficeInfo.depPost, // 地址
        cellIdx17: null, // 单位 暂不用
        cellIdx18: orgSysOfficeInfo.master, // 移送单位联系人
        cellIdx18TypeTextItem: orgSysOfficeInfo.master, // 移送单位联系人
        cellIdx19: orgSysOfficeInfo.phone, // 电话
        cellIdx19TypeTextItem: orgSysOfficeInfo.phone, // 电话
        cellIdx20: null, // 送件人（签名）
        cellIdx21: null, // 日期
        cellIdx22: null, // 送件人（签名）
        cellIdx23: null, // 日期
        cellIdx24: null, // 收件人（签名）
        cellIdx25: null, // 日期
        cellIdx26: this.$store.state.curCase.provinceGroupName, //
        cellIdx27: this.todayDate, // 日期
        cellIdx27TypeDateItem: this.todayDate, // 日期
      };
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