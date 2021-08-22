<!-- 其他 其他 移送书 -->
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
            <div class="textAlignCenter formHeader3">移 送 书</div>
            <div class="stdRowH"></div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_0"
                  contenteditable="true"
                  align="center"
                  style="width:7%"
                  data-title="文书号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx0', '文书号', 'TextItem')"
                >{{letData.cellIdx0}}</td>
                <td class="textAlignLeft cellBottomLine">煤安监</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_1"
                  contenteditable="true"
                  align="center"
                  style="width:7%"
                  data-title="文书号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx1', '文书号', 'TextItem')"
                >{{letData.cellIdx1}}</td>
                <td class="textAlignLeft cellBottomLine">移〔</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_2"
                  contenteditable="true"
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
                  contenteditable="true"
                  align="center"
                  style="width:7%"
                  data-title="文书号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx3', '文书号', 'TextItem')"
                >{{letData.cellIdx3}}</td>
                <td class="textAlignLeft cellBottomLine">
                  号&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;
                </td>
                <td class="textAlignLeft cellBottomLine">签发人：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_4"
                  contenteditable="true"
                  align="center"
                  style="width:15%"
                  data-title="签发人"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx4', '签发人', 'TextItem')"
                >{{letData.cellIdx4}}</td>
              </tr>
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_5"
                  contenteditable="true"
                  style="width:50%"
                  data-title=""
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx5', '', 'TextItem')"
                >{{letData.cellIdx5}}</td>
                <td class="textAlignLeft">：</td>
              </tr>
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;经我</td>
                <td
                  class="cellInput"
                  id="cell_idx_6"
                  contenteditable="true"
                  align="center"
                  style="width:10%"
                  data-title="单位"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx6', '单位', 'TextItem')"
                >{{letData.cellIdx6}}</td>
                <td class="textAlignLeft">检查，发现</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_7"
                  contenteditable="true"
                  style="width:67%"
                  data-title=""
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx7', '', 'TextItem')"
                >{{letData.cellIdx7}}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">存在</td>
              </tr>
            </table>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              id="cell_idx_8"
              data-title="调查事由"
              data-type="textarea"
              data-src
              @click="commandFill('cellIdx8', '违法行为', 'TextareaItem')">
              <p class="show-area-item-p">
                <span style="padding: 7px;">{{ letData.cellIdx8 }}</span>
              </p>
            </div>
            <table class="docBody">
              <tr>
                <td class="textAlignLeft">的问题，根据《中华人民共和国安全生产法》第六十六条规定，现将该问题移送贵单位依</td>
              </tr>
              <tr>
                <td class="textAlignLeft">法处理。</td>
              </tr>
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;附件：有关材料</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_9"
                  contenteditable="true"
                  align="center"
                  style="width:10%"
                  data-title="调查事由"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx9', '', 'TextItem')"
                >{{letData.cellIdx9}}</td>
                <td class="textAlignLeft">份</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_10"
                  contenteditable="true"
                  align="center"
                  style="width:10%"
                  data-title="调查事由"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx10', '', 'TextItem')"
                >{{letData.cellIdx10}}</td>
                <td class="textAlignLeft">页</td>
              </tr>
            </table>
            <table height="30"></table>
            <table class="docBody">
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我</td>
                <td
                  class="cellInput"
                  id="cell_idx_11"
                  contenteditable="true"
                  align="center"
                  style="width:10%"
                  data-title="调查事由"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx11', '', 'TextItem')"
                >{{letData.cellIdx11}}</td>
                <td class="textAlignLeft">地址：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_12"
                  contenteditable="true"
                  align="center"
                  style="width:27%"
                  data-title="地址"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx12', '地址', 'TextItem')"
                >{{letData.cellIdx12}}</td>
                <td class="textAlignLeft">&nbsp;&nbsp;邮政编码：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_13"
                  contenteditable="true"
                  align="center"
                  style="width:20%"
                  data-title="邮政编码"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx13', '邮政编码', 'TextItem')"
                >{{letData.cellIdx13}}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我</td>
                <td
                  class="cellInput"
                  id="cell_idx_14"
                  contenteditable="true"
                  align="center"
                  style="width:10%"
                  data-title="调查事由"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx14', '', 'TextItem')"
                >{{letData.cellIdx14}}</td>
                <td class="textAlignLeft">联系人：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_15"
                  contenteditable="true"
                  align="center"
                  style="width:25%"
                  data-title="联系人"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx15', '联系人', 'TextItem')"
                >{{letData.cellIdx15}}</td>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;话：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_16"
                  contenteditable="true"
                  align="center"
                  style="width:20%"
                  data-title="电话"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx16', '电话', 'TextItem')"
                >{{letData.cellIdx16}}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;送件人（签名）：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_17"
                  contenteditable="true"
                  align="center"
                  style="width:29%"
                  data-title="送件人（签名）"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx17', '送件人（签名）', 'TextItem')"
                >{{letData.cellIdx17}}</td>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;日&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;期：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_18"
                  contenteditable="true"
                  align="center"
                  style="width:20%"
                  data-title="日期"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx18', '日期', 'DateItem')"
                >{{letData.cellIdx18}}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;收件人（签名）：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_19"
                  contenteditable="true"
                  align="center"
                  style="width:29%"
                  data-title="收件人（签名）"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx19', '收件人（签名）', 'TextItem')"
                >{{letData.cellIdx19}}</td>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;日&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;期：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_20"
                  contenteditable="true"
                  align="center"
                  style="width:20%"
                  data-title="日期"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx20', '日期', 'DateItem')"
                >{{letData.cellIdx20}}</td>
              </tr>
            </table>
            <table height="30"></table>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_21"
                  contenteditable="true"
                  align="right"
                  style="width:95%"
                >{{letData.cellIdx21}}</td>
              </tr>
            </table>
            <table class="docBody">
              <td class="cellInput" style="width:55%"></td>
              <td
                class="cellInput cellBottomLine"
                id="cell_idx_22"
                align="center"
                style="width:10%"
                data-title="年"
                data-type="text"
                data-src
                @click="commandFill('cellIdx22', '年', 'TextItem')"
              >{{letData.cellIdx22}}</td>
              <td class="textAlignLeft">年</td>
              <td
                class="cellInput cellBottomLine"
                id="cell_idx_23"
                align="center"
                style="width:10%"
                data-title="月"
                data-type="text"
                data-src
                @click="commandFill('cellIdx23', '月', 'TextItem')"
              >{{letData.cellIdx23}}</td>
              <td class="textAlignLeft">月</td>
              <td
                class="cellInput cellBottomLine"
                id="cell_idx_24"
                align="center"
                style="width:10%"
                data-title="日"
                data-type="text"
                data-src
                @click="commandFill('cellIdx24', '日', 'TextItem')"
              >{{letData.cellIdx24}}</td>
              <td class="textAlignLeft">日</td>
            </table>
            <table class="docBody">
              <hr />
              <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;备注：本文书一式两份，一份移送有关单位，一份存档。</td>
            </table>
          </div>
        </div>
      </div>
    </let-main>
  </div>
</template>

<script>
import letMain from "@/views/make-law-writ/components/writ-list/components/let-main";
import GoDB from "@/utils/godb.min.js";
import { getDangerObject, getDocNumber } from '@/utils/setInitPaperData'
export default {
  name: "Let401",
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
      const db = new GoDB("CoalDB");
      const corpBase = db.table("corpBase");
      //查询符合条件的记录
      const corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
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
        // 1.生成文书编号
        let { num0, num1, num3, num4 } = await getDocNumber(db, this.docData.docTypeNo, caseId, this.$store.state.user)
        // 2.违法行为：获取笔录文书中的隐患数据
        const let101Data = await wkPaper.find((item) => {
          return item.caseId === caseId && item.paperType === '1';
        });
        let let101DataPapaerContent = JSON.parse(let101Data.paperContent)
        let dangerObject = getDangerObject(let101DataPapaerContent.dangerItemObject.tableData)
        let cellIdx8String = `${dangerObject.dangerString}`
        // 3.sysOfficeInfo实体中 地址：depAddress、邮政编码：depPost、master、联系电话：phone
        const orgInfo = db.table("orgInfo");
        const orgData = await orgInfo.find(item => item.no === this.$store.state.user.userGroupId)
        let orgSysOfficeInfo = JSON.parse(orgData.sysOfficeInfo)
        let cellIdx12String = orgSysOfficeInfo.depAddress
        let cellIdx13String = orgSysOfficeInfo.depPost
        let cellIdx15String = orgSysOfficeInfo.master
        let cellIdx16String = orgSysOfficeInfo.phone
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
          cellIdx6: null, // 单位
          cellIdx7: corp.corpName, //
          cellIdx7TypeTextItem: corp.corpName, //
          cellIdx8: cellIdx8String, // 违法行为
          cellIdx8TypeTextareaItem: cellIdx8String, // 违法行为
          cellIdx9: null, // X份
          cellIdx10: null, // X页
          cellIdx11: null, // 单位
          cellIdx12: cellIdx12String, // 地址
          cellIdx12TypeTextItem: cellIdx12String, // 地址
          cellIdx13: cellIdx13String, // 邮政编码
          cellIdx13TypeTextItem: cellIdx13String, // 邮政编码
          cellIdx14: null, // 单位
          cellIdx15: cellIdx15String, // 联系人
          cellIdx15TypeTextItem: cellIdx15String, // 联系人
          cellIdx16: cellIdx16String, // 电话
          cellIdx16TypeTextItem: cellIdx16String, // 电话
          cellIdx17: null, // 送件人（签名）
          cellIdx18: null, // 日期
          cellIdx19: null, // 收件人（签名）
          cellIdx20: null, // 日期
          cellIdx21: null, //
          cellIdx22: null, // 年
          cellIdx23: null, // 月
          cellIdx24: null, // 日
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
  },
};
</script>

<style lang="scss" scoped>
@import "@/views/make-law-writ/assets/scss/let";
</style>