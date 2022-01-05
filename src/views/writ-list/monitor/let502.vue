<!-- 意见建议书 加强和改善安全管理意见书 17 -->
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
            <div class="textAlignCenter formHeader4">
              加强和改善安全管理意见书
            </div>
            <div class="formHeader5 paper-number-div">
              <div>
                <span @click="commandFill('cellIdx0', '', 'TextItem')">{{
                  letData.cellIdx0 ? letData.cellIdx0 : "（编辑）"
                }}</span>
                <label>煤安监</label>
                <span @click="commandFill('cellIdx1', '', 'TextItem')">{{
                  letData.cellIdx1 ? letData.cellIdx1 : "（编辑）"
                }}</span>
                <label>管意〔</label>
                <span @click="commandFill('cellIdx2', '', 'TextItem')">{{
                  letData.cellIdx2 ? letData.cellIdx2 : "（编辑）"
                }}</span>
                <label>〕</label>
                <span @click="commandFill('cellIdx3', '', 'TextItem')">{{
                  letData.cellIdx3 ? letData.cellIdx3 : "（编辑）"
                }}</span>
                <label>号&nbsp;&nbsp;&nbsp;签发人：</label>
                <span @click="commandFill('cellIdx4', '签发人', 'TextItem')">{{
                  letData.cellIdx4 ? letData.cellIdx4 : "XXX"
                }}</span>
              </div>
            </div>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_5"
                  style="min-width: 50%"
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
              经我
              <span class="no-underline" @click="commandFill('cellIdx6', '局', 'TextItem')">{{
                letData.cellIdx6 ? letData.cellIdx6 : ""
              }}</span>
              检查，你单位在煤矿安全管理工作中，存在下列问题（见附件），提出加强和改善煤矿安全管理的如下意见（见附件）。
            </div>
            <div class="docTextarea">
              <label style="width: 5%"></label>
             请将处理意见于
              <span @click="commandFill('cellIdx7', '年', 'TextItem')">{{
                letData.cellIdx7 ? letData.cellIdx7 : "（XX）"
              }}</span>
              年
              <span @click="commandFill('cellIdx8', '月', 'TextItem')">{{
                letData.cellIdx8 ? letData.cellIdx8 : "（XX）"
              }}</span>
              月
              <span @click="commandFill('cellIdx9', '日', 'TextItem')">{{
                letData.cellIdx9 ? letData.cellIdx9 : "（XX）"
              }}</span>
              日前函告我
              <span class="no-underline" @click="commandFill('cellIdx10', '局', 'TextItem')">{{
                letData.cellIdx10 ? letData.cellIdx10 : ""
              }}</span>
            </div>
            <table height="20"></table>
            <div class="docTextarea">
              <label style="width: 5%"></label>
              <label>附件：</label>
              <span
                class="no-line-div no-underline"
                @click="
                  commandFill(
                    'cellIdx18',
                    '加强和改善安全管理意见',
                    'UploadFile'
                  )">加强和改善安全管理意见
              </span>
            </div>
            <table height="60"></table>
            <div class="docTextLine">
              <label style="width: 5%"></label>
              <label>送件人（签名)：</label>
              <div
                class="line-div"
                @click="
                  commandFill('cellIdx11', '送件人（签名)', 'TextItem')
                "
              >
                {{ letData.cellIdx11 ? letData.cellIdx11 : "（编辑）" }}
              </div>
              <label>日期：</label>
              <div
                class="line-div"
                @click="commandFill('cellIdx12', '日期:', 'DateItem')"
              >
                {{ letData.cellIdx12 ? letData.cellIdx12 : "（编辑）" }}
              </div>
            </div>
            <div class="docTextLine">
              <label style="width: 5%"></label>
              <label>收件人（签名)：</label>
              <div
                class="line-div"
                @click="commandFill('cellIdx13', '收件人（签名)', 'TextItem')"
              >
                {{ letData.cellIdx13 ? letData.cellIdx13 : "（编辑）" }}
              </div>
              <label>日期：</label>
              <div
                class="line-div"
                @click="commandFill('cellIdx14', '日期:', 'DateItem')"
              >
                {{ letData.cellIdx14 ? letData.cellIdx14 : "（编辑）" }}
              </div>
            </div>
            <div class="docTextarea">
              <span class="no-line"
                >&nbsp;&nbsp;&nbsp;&nbsp;报 送：</span
              >
              <span
                @click="commandFill('cellIdx15', '报送', 'TextItem')"
                >{{
                  letData.cellIdx15 ? letData.cellIdx15 : "（点击编辑）"
                }}</span
              >
              <div class="line"></div>
            </div>
            <table height="30"></table>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_17"
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
            <div
              class="docTextarea"
              style="
                border-top: 2px solid #000;
                margin-top: 30px;
                line-height: normal;
              "
            >
              备注：本文书一式三份，一份主送煤矿上级企业，一份报送国家矿山安全监察局，一份存档。
            </div>
          </div>
        </div>
      </div>
    </let-main>
  </div>
</template>

<script>
import GoDB from "@/utils/godb.min.js";
import associationSelectPaper from "@/components/association-select-paper";
import { getDocNumber } from "@/utils/setInitPaperData";
export default {
  name: "Let502",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {
        cellIdx0: null, // 文书号
        cellIdx1: null, // 文书号
        cellIdx2: null, // 文书号
        cellIdx3: null, // 文书号
        cellIdx4: null, // 签发人
        cellIdx5: null, // 单位
        cellIdx6: null, // 经我XX检查，
        cellIdx7: null, //年
        cellIdx8: null, // 月
        cellIdx9: null, // 日
        cellIdx10: null, // 局
        cellIdx11: null, // 送件人（签名)
        cellIdx12: null, // 日期
        cellIdx13: null, // 收件人（签名)
        cellIdx14: null, // 日期
        cellIdx15: null, // 报送
        cellIdx16: null, // 
        cellIdx17: null, // 日期
        cellIdx18: [], // 附件
        UploadFile: {
          tableData: [],
        },
      },
      options: {},
    };
  },
  methods: {
    async initLetData() {
      let db = new GoDB(this.$store.state.DBName);
      // 1.文书编号
      let paperNumber = await getDocNumber(
        db,
        this.docData.docTypeNo,
        ''
      );
      // 获取当前用户的省局机构名称
      let userGroupId = this.$store.state.user.userGroupId
      let orgInfo = db.table('orgInfo')
      let userOrg = await orgInfo.find(item => item.no === userGroupId)
      let provinceGroupName = userOrg.name
      if (userOrg.grade === '3') {
        let provinceOrg = await orgInfo.find(item => item.no === userOrg.parentId)
        provinceGroupName = provinceOrg.name
      }
      await db.close()
      this.letData = Object.assign({}, this.letData, {
        cellIdx0: paperNumber.num0, // 文书号
        cellIdx1: paperNumber.num1, // 文书号
        cellIdx2: paperNumber.num3, // 文书号
        cellIdx3: paperNumber.num4, // 文书号
        cellIdx6: '局', // 经我XX检查，
        cellIdx10: '局', // 局
        cellIdx16: provinceGroupName, // 
        cellIdx17: this.todayDate, // 日期
        cellIdx18: [], // 附件
        UploadFile: {
          tableData: [],
        },
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
        if (key === "cellIdx18") {
          this.options[key] = {
            canEdit: true,
            page: "17",
          };
          dataKey = "UploadFile";
        }
        this.$refs.letMain.commandFill(
          key,
          dataKey,
          title,
          type,
          this.letData[dataKey],
          this.options[key]
        );
      } else {
        if (key === "cellIdx18") {
          let dataKey = `${type}`;
          this.options[key] = {
            canEdit: false,
          };
          this.$refs.letMain.commandFill(
            key,
            dataKey,
            title,
            type,
            this.letData[dataKey],
            this.options[key]
          );
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/let";
</style>