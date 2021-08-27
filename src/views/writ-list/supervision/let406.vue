<!--其他 其他 鉴定委托书 -->
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
            <div class="textAlignCenter formHeader3">鉴 定 委 托 书</div>
            <div class="stdRowH"></div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput "
                  id="cell_idx_0"
                  contenteditable="true"
                  align="center"
                  style="width:30%"
                  data-title="文书号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx0', '文书号', 'TextItem')"
                >{{letData.cellIdx0}}</td>
                  <td class="textAlignLeft ">（</td>
                <td
                  class="cellInput "
                  id="cell_idx_1"
                  contenteditable="true"
                  align="center"
                  style="width:25%"
                  data-title="文书号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx1', '文书号', 'TextItem')"
                >{{letData.cellIdx1}}</td>
                <td class="textAlignLeft ">）</td>
                <td class="textAlignLeft ">煤安鉴〔</td>


                <td
                  class="cellInput "
                  id="cell_idx_2"
                  contenteditable="true"
                  align="center"
                  style="width:8%"
                  data-title="文书号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx2', '文书号', 'TextItem')"
                >{{letData.cellIdx2}}</td>
                <td class="textAlignLeft ">〕</td>
                <td
                  class="cellInput "
                  id="cell_idx_3"
                  contenteditable="true"
                  align="center"
                  style="width:8%"
                  data-title="文书号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx3', '文书号', 'TextItem')"
                >{{letData.cellIdx3}}</td>
                <td class="textAlignLeft ">
                  号&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </td>

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
                 <td style="width:5%"></td>
                <td class="textAlignLeft">因调查有关安全生产违法案件的需要，本机关现委托你单位对下列物品进行鉴定。</td>


              </tr>
            </table>
            <!-- <table  class="docBody " style="border:1px solid #fff">
              <tr   style="border:1px solid #fff;height:50px;text-align:center;line-height:50px">
                <td style="width:30%">物品名称</td>
                <td style="width:30%">规格型号</td>
                <td style="width:15%">数量</td>
                <td style="width:25%">备注</td>
              </tr>
              <tr style="border:1px solid #fff;height:50px"></tr>

            </table> -->
             <table height="40"></table>
           <table class="docBody">

              <tr>
                <td class="textAlignLeft">鉴定要求：</td>
                 <div
                  style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
                  class="cellInput mutiLineArea"
                  id="cell_idx_5"
                  data-title="鉴定要求"
                  data-type="textarea"
                  data-src
                  @click="commandFill('cellIdx5', '鉴定要求', 'DangerTableItem')">
                  <div v-if="letData.cellIdx5 && letData.cellIdx5.length > 0">
                    <p class="show-area-item-p">
                      <span style="padding: 7px;">{{ letData.cellIdx5  ? letData.cellIdx5 : '（点击编辑）'}}</span>
                    </p>
                  </div>
                  <div v-else>
                    <p class="show-area-item-p">
                      &nbsp;
                    </p>
                    <p class="show-area-item-p">
                      &nbsp;
                    </p>
                  </div>
                </div>
              </tr>
            </table>
              <table class="docBody">

             <tr>
                <td style="width:5%"></td>
                <td class="textAlignLeft">请于</td>
                 <td
                class="cellInput cellBottomLine"
                id="cell_idx_19"
                align="center"
                style="width:10%"
                data-title="年"
                data-type="text"
                data-src
                @click="commandFill('cellIdx19', '年', 'TextItem')"
              >{{letData.cellIdx19}}</td>
              <td class="textAlignLeft">年</td>
              <td
                class="cellInput cellBottomLine"
                id="cell_idx_20"
                align="center"
                style="width:10%"
                data-title="月"
                data-type="text"
                data-src
                @click="commandFill('cellIdx20', '月', 'TextItem')"
              >{{letData.cellIdx20}}</td>
              <td class="textAlignLeft">月</td>
              <td
                class="cellInput cellBottomLine"
                id="cell_idx_21"
                align="center"
                style="width:10%"
                data-title="日"
                data-type="text"
                data-src
                @click="commandFill('cellIdx21', '日', 'TextItem')"
              >{{letData.cellIdx21}}</td>
              <td class="textAlignLeft">日前向本机关提交鉴定结果。</td>
             </tr>


             <tr>
                <td style="width:5%"></td>
                <td class="textAlignLeft">联系人：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_16"
                  align="center"
                  style="width:40%"
                  data-title="联系人"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx16', '联系人', 'TextItem')"
                >{{letData.cellIdx16}}</td>
                <td class="textAlignLeft">&nbsp;&nbsp;联系电话：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_17"
                  align="center"
                  style="width:33%"
                  data-title="联系电话"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx17', '联系电话', 'TextItem')"
                >{{letData.cellIdx17}}</td>
             </tr>
            </table>

            <table height="40"></table>
           <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_17"
                  align="right"
                  style="width:95%"
                  @click="commandFill('cellIdx17', '', 'TextItem')"
                >{{letData.cellIdx17 ? letData.cellIdx17 : '（点击编辑）'}}</td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_18"
                  align="right"
                  style="width:95%"
                  data-title
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx18', '日期', 'DateItem')"
                >{{letData.cellIdx18 ? letData.cellIdx18 : '（点击编辑）'}}</td>
              </tr>
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
import letMain from "@/views/make-law-writ/components/let-main.vue";
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
