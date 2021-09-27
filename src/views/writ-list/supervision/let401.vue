<!--其他 其他 移送书 -->
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
            <div class="textAlignCenter formHeader1">移送书</div>
            <div class="docTextLine paper-number-div">
              <div>
                <span
                  @click="commandFill('cellIdx0', '文书号', 'TextItem')"
                >{{ letData.cellIdx0 ? letData.cellIdx0 : '(编辑)' }}</span>
                <label>(</label>
                <span
                  @click="commandFill('cellIdx1', '文书号', 'TextItem')"
                >{{ letData.cellIdx1 ? letData.cellIdx1 : '(编辑)' }}</span>
                <label>） 煤安移〔</label>
                <span
                  @click="commandFill('cellIdx2', '文书号', 'TextItem')"
                >{{ letData.cellIdx2 ? letData.cellIdx2 : '(编辑)' }}</span>
                <label>〕</label>
                <span
                  @click="commandFill('cellIdx3', '文书号', 'TextItem')"
                >{{ letData.cellIdx3 ? letData.cellIdx3 : '(编辑)' }}</span>
                <label>号&nbsp;&nbsp;签发人：</label>
                <span
                  @click="commandFill('cellIdx4',   '签发人', 'TextItem')"
                >{{ letData.cellIdx4 ? letData.cellIdx4 : '(编辑)' }}</span>
              </div>
            </div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_5"
                  style="width:50%"
                  data-title=""
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx5', '', 'TextItem')"
                >{{letData.cellIdx5}}</td>
                <td class="textAlignLeft">：</td>
              </tr>
            </table>
            <div class="docTextarea">
              <label style="width:5%"></label>
              经本机关检查，发现
              <span
                @click="commandFill('cellIdx7', '', 'TextItem')"
              >{{ letData.cellIdx7 ? letData.cellIdx7 : '（点击编辑）'}}</span>
              存在
              <span
                @click="commandFill('cellIdx8', '违法行为', 'TextareaItem')"
              >{{ letData.cellIdx8? letData.cellIdx8 : '（点击编辑）'}}</span>的问题，根据《中华人民共和国安全生产法》第六十六条规定，现将该案件移送贵单位依法处理。
            </div>
            <table class="docBody">
              <!-- <tr>
                <td class="textAlignLeft">的问题，根据《中华人民共和国安全生产法》第六十六条规定，现将该问题移送贵单位依</td>
              </tr> -->
              <!-- <tr>
                <td class="textAlignLeft"></td>
              </tr> -->
              <br>
              <br>
              <tr>
                <td class="textAlignLeft">附件：有关材料</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_9"
                  align="center"
                  style="width:10%"
                  data-title="x份"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx9', 'x份', 'TextItem')"
                >{{letData.cellIdx9}}</td>
                <td class="textAlignLeft">份</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_10"
                  align="center"
                  style="width:10%"
                  data-title="X页"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx10', 'X页', 'TextItem')"
                >{{letData.cellIdx10}}</td>
                <td class="textAlignLeft">页</td>
              </tr>
            </table>
            <div class="docTextLine" style="margin-top: 30px;">
              <div style="flex: 1; display: flex;">
                <label>移送单位地址：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx11', '移送单位地址', 'TextItem')"
                >{{ letData.cellIdx11 ? letData.cellIdx11 : '（点击编辑）' }}</div>
              </div>
              <div style="flex: 1; display: flex;">
                <label>&nbsp;&nbsp;邮政编码：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx13', '邮政编码', 'TextItem')"
                >{{ letData.cellIdx13 ? letData.cellIdx13 : '（点击编辑）' }}</div>
              </div>
            </div>
            <div class="docTextLine">
              <div style="flex: 1; display: flex;">
                <label>移送单位联系人：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx15', '移送单位联系人', 'TextItem')"
                >{{ letData.cellIdx15 ? letData.cellIdx15 : '（点击编辑）' }}</div>
              </div>
              <div style="flex: 1; display: flex;">
                <label>&nbsp;&nbsp;电&nbsp;&nbsp;&nbsp;&nbsp;话：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx16', '电话', 'TextItem')"
                >{{ letData.cellIdx16 ? letData.cellIdx16 : '（点击编辑）' }}</div>
              </div>
            </div>
            <div class="docTextLine">
              <div style="flex: 1; display: flex;">
                <label>送件人（签名）：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx17', '送件人（签名）', 'TextItem')"
                >{{ letData.cellIdx17 ? letData.cellIdx17 : '（点击编辑）' }}</div>
              </div>
              <div style="flex: 1; display: flex;">
                <label>&nbsp;&nbsp;日&nbsp;&nbsp;&nbsp;&nbsp;期：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx18', '日期', 'DateItem')"
                >{{ letData.cellIdx18 ? letData.cellIdx18 : '（点击编辑）' }}</div>
              </div>
            </div>
            <div class="docTextLine">
              <div style="flex: 1; display: flex;">
                <label>送件人（签名）：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx23', '送件人（签名）', 'TextItem')"
                >{{ letData.cellIdx23 ? letData.cellIdx23 : '（点击编辑）' }}</div>
              </div>
              <div style="flex: 1; display: flex;">
                <label>&nbsp;&nbsp;日&nbsp;&nbsp;&nbsp;&nbsp;期：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx24', '日期', 'DateItem')"
                >{{ letData.cellIdx24 ? letData.cellIdx24 : '（点击编辑）' }}</div>
              </div>
            </div>
            <div class="docTextLine">
              <div style="flex: 1; display: flex;">
                <label>收件人（签名）：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx19', '收件人（签名）', 'TextItem')"
                >{{ letData.cellIdx19 ? letData.cellIdx19 : '（点击编辑）' }}</div>
              </div>
              <div style="flex: 1; display: flex;">
                <label>&nbsp;&nbsp;日&nbsp;&nbsp;&nbsp;&nbsp;期：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx20', '日期', 'DateItem')"
                >{{ letData.cellIdx20 ? letData.cellIdx20 : '（点击编辑）' }}</div>
              </div>
            </div>
            <table class="docBody" style="margin-top: 30px;">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_21"
                  align="right"
                  style="width:95%"
                  @click="commandFill('cellIdx21', '', 'TextItem')"
                >{{letData.cellIdx21 ? letData.cellIdx21: '（点击编辑）'}}</td>
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
              备注：本文书一式两份，一份交受移送单位，一份存档。
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
  name: "Let401",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {},
      options: {},
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
      // 2.违法行为：获取笔录文书中的隐患数据
      let let1DataPapaerContent = JSON.parse(selectedPaper.let1Data.paperContent)
      let dangerObject = getDangerObject(let1DataPapaerContent.dangerItemObject.tableData)
      let cellIdx8String = `${dangerObject.dangerString}`
      // 3.sysOfficeInfo实体中 地址：depAddress、邮政编码：depPost、master、联系电话：phone
      const orgInfo = db.table("orgInfo");
      const orgData = await orgInfo.find(item => item.no === this.$store.state.user.userGroupId)
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
        cellIdx5: null, //
        cellIdx6: null, // 单位  暂不用
        cellIdx7: corp.corpName, // 发现XX存在
        cellIdx7TypeTextItem: corp.corpName, // 发现XX存在
        cellIdx8: cellIdx8String, // 违法行为
        cellIdx8TypeTextareaItem: cellIdx8String, // 违法行为
        cellIdx9: null, // X份
        cellIdx10: null, // X页
        cellIdx11: orgSysOfficeInfo.depAddress, // 移送单位地址
        cellIdx11TypeTextItem: orgSysOfficeInfo.depAddress, // 移送单位地址
        cellIdx12: null, // 地址  暂不用
        cellIdx13: orgSysOfficeInfo.depPost, // 邮政编码
        cellIdx13TypeTextItem: orgSysOfficeInfo.depPost, // 邮政编码
        cellIdx14: null, // 单位  暂不用
        cellIdx15: orgSysOfficeInfo.master, // 移送单位联系人
        cellIdx15TypeTextItem: orgSysOfficeInfo.master, // 联系人
        cellIdx16: orgSysOfficeInfo.phone, // 电话
        cellIdx16TypeTextItem: orgSysOfficeInfo.phone, // 电话
        cellIdx17: null, // 送件人（签名）
        cellIdx18: null, // 日期
        cellIdx23: null, // 送件人（签名）
        cellIdx24: null, // 日期
        cellIdx19: null, // 收件人（签名）
        cellIdx20: null, // 日期
        cellIdx21: null, //
        cellIdx22: null, // 日期
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