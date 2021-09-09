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
                  class="cellInput"
                  id="cell_idx_0"
                  align="center"
                  style="width:30%"
                  data-title="文书号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx0', '文书号', 'TextItem')"
                >{{letData.cellIdx0}}</td>
                <td class="textAlignLeft">（</td>
                <td
                  class="cellInput"
                  id="cell_idx_1"
                  align="center"
                  style="width:25%"
                  data-title="文书号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx1', '文书号', 'TextItem')"
                >{{letData.cellIdx1}}</td>
                <td class="textAlignLeft">）</td>
                <td class="textAlignLeft">煤安鉴〔</td>
                <td
                  class="cellInput"
                  id="cell_idx_2"
                  align="center"
                  style="width:8%"
                  data-title="文书号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx2', '文书号', 'TextItem')"
                >{{letData.cellIdx2}}</td>
                <td class="textAlignLeft">〕</td>
                <td
                  class="cellInput"
                  id="cell_idx_3"
                  align="center"
                  style="width:8%"
                  data-title="文书号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx3', '文书号', 'TextItem')"
                >{{letData.cellIdx3}}</td>
                <td class="textAlignLeft">号&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
              </tr>
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
              <tr>
                <td style="width:5%"></td>
                <td class="textAlignLeft">因调查有关安全生产违法案件的需要，本机关现委托你单位对下列物品进行鉴定。</td>
              </tr>
            </table>
            <table class="docBody" style="border:1px solid #000">
              <tr  style="border:1px solid #000;height:38px;text-align:center;">
                <td style="width:29%" class="cellRightLine ">物品名称</td>
                <td style="width:30%" class="cellRightLine ">规格型号</td>
                <td style="width:15%" class="cellRightLine ">数量</td>
                <td style="width:25%">备注</td>
              </tr>
              <template v-if="!letData.cellIdx5 || letData.cellIdx5.length === 0">
                <tr
                  style="border:1px solid #000;height:150px">
                  <td
                    class="cellInput"
                    style="width:100%;height:150px"
                    data-title
                    data-type="text"
                    data-src
                    @click="commandFill('cellIdx5', '', 'SamplingForensicsTable')"
                  >（点击编辑）</td>
                </tr>
              </template>
              <template v-else>
                <tr
                  v-for="(item, index) in letData.cellIdx5"
                  :key="index"
                  style="border:1px solid #000;height:50px;text-align:center;line-height:50px">
                  <td style="width:30%">{{item.name}}</td>
                  <td style="width:30%">{{item.modelNumber}}</td>
                  <td style="width:15%">{{item.num}}</td>
                  <td style="width:25%">{{item.note}}</td>
                </tr>
                <tr
                  style="border:1px solid #000;height:50px">
                  <td
                    class="cellInput"
                    style="width:100%;height:50px"
                    data-title
                    data-type="text"
                    data-src
                    @click="commandFill('cellIdx5', '', 'SamplingForensicsTable')"
                  >（点击编辑）</td>
                </tr>
              </template>
            </table>
            <table height="40"></table>
             <div class="docTextarea ">
              <span class="no-line">鉴定要求：</span>
              <span
                @click="commandFill('cellIdx6', '鉴定要求', 'TextareaItem')"
              >{{ letData.cellIdx6 ? letData.cellIdx6 : '（点击编辑）'}}</span>
              <div class="line"></div>
            </div>
            <table class="docBody">
              <tr>
                <td style="width:5%"></td>
                <td class="textAlignLeft" style="width:5%">请于</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_7"
                  align="center"
                  style="width:10%"
                  data-title="年"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx7', '年', 'TextItem')"
                >{{letData.cellIdx7}}</td>
                <td class="textAlignLeft" style="width:2%">年</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_8"
                  align="center"
                  style="width:10%"
                  data-title="月"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx8', '月', 'TextItem')"
                >{{letData.cellIdx8}}</td>
                <td class="textAlignLeft" style="width:2%">月</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_9"
                  align="center"
                  style="width:10%"
                  data-title="日"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx9', '日', 'TextItem')"
                >{{letData.cellIdx9}}</td>
                <td class="textAlignLeft" style="width:30%">日前向本机关提交鉴定结果。</td>
              </tr>
              <tr>
                <td style="width:5%"></td>
                <td class="textAlignLeft" style="width:9%">联系人：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_10"
                  align="center"
                  style="width:40%"
                  data-title="联系人"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx10', '联系人', 'TextItem')"
                >{{letData.cellIdx10}}</td>
                <td class="textAlignLeft" style="width:14%">&nbsp;&nbsp;联系电话：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_11"
                  align="center"
                  style="width:32%"
                  data-title="联系电话"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx11', '联系电话', 'TextItem')"
                >{{letData.cellIdx11}}</td>
              </tr>
            </table>
            <table height="40"></table>
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
            <table class="docBody">
              <hr />
              <td class="textAlignLeft">鉴定结果请提出具体鉴定报告书，并由鉴定人员签名或者盖章，加盖鉴定机构印章。</td>
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
import { getDangerObject, getDocNumber } from "@/utils/setInitPaperData";
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
      const db = new GoDB(this.$store.state.DBName);
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
          item.caseId === caseId && item.paperType === this.docData.docTypeNo && item.delFlag !== '1'
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
        let { num0, num1, num3, num4 } = await getDocNumber(
          db,
          this.docData.docTypeNo,
          caseId,
          this.$store.state.user
        );
        // 2.违法行为：获取笔录文书中的隐患数据
        const let101Data = await wkPaper.find((item) => {
          return item.caseId === caseId && item.paperType === "1";
        });
        if (!let101Data) {
          this.$message.error('请先填写并保存现场检查记录中内容！')
          return
        }
        let let101DataPapaerContent = JSON.parse(let101Data.paperContent);
        let dangerObject = getDangerObject(
          let101DataPapaerContent.dangerItemObject.tableData
        );
        let cellIdx8String = `${dangerObject.dangerString}`;
        // 3.sysOfficeInfo实体中 地址：depAddress、邮政编码：depPost、master、联系电话：phone
        const orgInfo = db.table("orgInfo");
        const orgData = await orgInfo.find(
          (item) => item.no === this.$store.state.user.userGroupId
        );
        let orgSysOfficeInfo = JSON.parse(orgData.sysOfficeInfo);
        let cellIdx12String = orgSysOfficeInfo.depAddress;
        let cellIdx13String = orgSysOfficeInfo.depPost;
        let cellIdx15String = orgSysOfficeInfo.master;
        let cellIdx16String = orgSysOfficeInfo.phone;
        this.letData = {
          cellIdx0: num0, // 文书号
          cellIdx0TypeTextItem: num0, // 文书号
          cellIdx1: num1, // 文书号
          cellIdx1TypeTextItem: num1, // 文书号
          cellIdx2: num3, // 文书号
          cellIdx2TypeTextItem: num3, // 文书号
          cellIdx3: num4, // 文书号
          cellIdx3TypeTextItem: num4, // 文书号
          cellIdx4: corp.corpName, // 被检查单位
          cellIdx4TypeTextItem: corp.corpName, // 被检查单位
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
</style>
