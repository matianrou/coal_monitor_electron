<!-- 行政处罚 一般程序 行政（当场）处罚决定书 -->
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
            <div class="formHeader1 textAlignCenter">安全生产行政执法文书</div>
            <div class="formHeader2 textAlignCenter">行政（当场）处罚决定书</div>
            <table style="width:390px;" class="docTop">
              <tr>
                <td
                  class="textAlignCenter"
                  id="cell_idx_0"
                >（[SHORTNAME]）应急罚当〔[YEAR]〕[DOCNUMBER]号</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td style="width:22mm; ">被处罚人</td>
                <td
                  style="width:34mm;"
                  class="cellInput cellBottomLine"
                  id="cell_idx_3"
                ></td>
                <td style="width:13mm;" class="textAlignCenter">性别</td>
                <td
                  style="width:13mm;"
                  class="cellInput cellBottomLine"
                  id="cell_idx_4"
                ></td>
                <td style="width:13mm;" class="textAlignCenter">年龄</td>
                <td
                  style="width:14mm;"
                  class="cellInput cellBottomLine"
                  id="cell_idx_5"
                ></td>
                <td style="width:22mm;" class="textAlignCenter">身份证号</td>
                <td
                  style="width:59mm;"
                  class="cellInput cellBottomLine"
                  id="cell_idx_6"
                ></td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td style="width:22mm;">家庭住址</td>
                <td
                  style="width:73mm;"
                  class="cellInput cellBottomLine"
                  id="cell_idx_7"
                ></td>
                <td style="width:20mm;" class="textAlignCenter">邮政编码</td>
                <td
                  style="width:20mm;"
                  class="cellInput cellBottomLine textAlignCenter"
                  id="cell_idx_8"
                ></td>
                <td style="width:20mm;" class="textAlignCenter">联系电话</td>
                <td
                  style="width:35mm;"
                  class="cellInput cellBottomLine"
                  id="cell_idx_9"
                ></td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td style="width:22mm;">所在单位</td>
                <td
                  style="width:53mm;"
                  class="cellInput cellBottomLine"
                  id="cell_idx_10"
                ></td>
                <td style="width:20mm;" class="textAlignCenter">职务</td>
                <td
                  style="width:20mm;"
                  class="cellInput cellBottomLine textAlignCenter"
                  id="cell_idx_11"
                ></td>
                <td style="width:20mm;" class="textAlignCenter">单位地址</td>
                <td
                  style="width:55mm;"
                  class="cellInput cellBottomLine"
                  id="cell_idx_12"
                ></td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td style="width:25mm;">被处罚单位</td>
                <td
                  style="width:165mm;"
                  class="cellInput textPaddingLeft cellBottomLine"
                  id="cell_idx_13"
                >{ent_name}</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td style="width:10mm;">地址</td>
                <td
                  style="width:130mm;"
                  class="cellInput textPaddingLeft cellBottomLine"
                  id="cell_idx_14"
                >{op_loc_address}</td>
                <td style="width:20mm;" class="textAlignCenter">邮政编码</td>
                <td
                  style="width:30mm;"
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_15"
                >{op_loc_zip_code}</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td style="width:45mm;">法定代表人（负责人）</td>
                <td
                  style="width:35mm;"
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_16"
                >{le_rpe}</td>
                <td style="width:20mm;" class="textAlignCenter">职务</td>
                <td
                  style="width:30mm;"
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_17"
                >{rep_duty}</td>
                <td style="width:20mm;" class="textAlignCenter">联系电话</td>
                <td
                  style="width:40mm;"
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_18"
                >{rep_phone}</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;违法事实及证据（此栏不够，可另附页） ：</td>
              </tr>
            </table>
            <!--onclick="host.commandFill('cell_idx_19,cell_idx_20,cell_idx_21','doc','选择文书','let-101')"-->
            <div
              style="height:2cm;word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              id="cell_idx_19"
              contenteditable="true"
              onkeydown="checkContent(event,this.id)"
              onchange="doContentChange(this.id)"
            >
              <p></p>
              <p></p>
            </div>

            <table class="docBody">
              <tr>
                <td style="width:40mm;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;以上事实违反了</td>
                <td
                  style="width:123mm;"
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_20"
                ></td>
                <td style="width:27mm;" class="textAlignCenter">的规定，依据</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td
                  style="width:75mm;"
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_21"
                ></td>
                <td style="width:37mm;">的规定，决定给予</td>
                <td
                  style="width:50mm;"
                  class="cellInput cellBottomLine"
                  id="cell_idx_22"
                ></td>
                <td style="width:28mm;">的行政处罚。</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;罚款的履行方式和期限（见打√处）：</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td
                  style="width:7mm;"
                  class="cellInput textAlignCenter"
                  id="cell_idx_23"
                  onclick="host.commandFill(this.id,'toggle','当场缴纳')"
                >□</td>
                <td style="width:183mm;">当场缴纳</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td
                  style="width:7mm;"
                  class="cellInput textAlignCenter"
                  id="cell_idx_24"
                  onclick="host.commandFill(this.id,'toggle','法定代表人身份证明或者委托书')"
                >□</td>
                <td style="width:70mm;">自收到本决定书之日起15日内缴至</td>
                <td
                  style="width:113mm;"
                  id="cell_idx_25"
                  class="cellInput cellBottomLine"
                >[RefPayUnit]</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td style="width:10mm;">账号</td>
                <td
                  style="width:90mm;"
                  id="cell_idx_26"
                  class="cellInput cellBottomLine"
                >[RefPayAccount]</td>
                <td style="width:90mm;">，到期不缴每日按罚款数额的3%加处罚款。</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td
                  style="width:100mm;"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果不服本处罚决定，可以依法在60日内向</td>
                <td
                  style="width:60mm;"
                  class="cellInput cellBottomLine textAlignCenter"
                  id="cell_idx_27"
                >[RefReconsiderOrgan]</td>
                <td style="width:30mm;">人民政府或者</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td
                  style="width:50mm;"
                  class="cellInput cellBottomLine textAlignCenter"
                  id="cell_idx_28"
                >[RefDeptName]</td>
                <td style="width:70mm;">申请行政复议，或在6个月内依法向</td>
                <td
                  style="width:50mm;"
                  class="cellInput cellBottomLine textAlignCenter"
                  id="cell_idx_29"
                >[RefLitigationOrgan]</td>
                <td style="width:20mm;">人民法院</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td>提起行政诉讼，但本决定不停止执行，法律另有规定的除外。逾期不申请行政复议、不提起行政诉讼又不履行的，本机关将依法申请人民法院强制执行或者依照有关规定强制执行。</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td style="width:260px;">安全生产行政执法人员（签名）：</td>
                <td
                  style="width:400px;"
                  class="cellInput cellBottomLine textAlignCenter"
                  id="cell_idx_30"
                ></td>
                <td style="width:100px;">&nbsp;</td>
              </tr>
              <tr>
                <td>当事人或者委托代理人（签名）：</td>
                <td
                  class="cellInput cellBottomLine textAlignCenter"
                  id="cell_idx_31"
                ></td>
                <td>&nbsp;</td>
              </tr>
            </table>
            <div class="halfRowH"></div>
            <table class="docBody">
              <tr>
                <td style="width:410px;">&nbsp;</td>
                <td
                  style="width:250px;"
                  class="cellInput textAlignRight"
                  id="cell_idx_32"
                >[OrgName]</td>
                <td style="width:100px;" class="textAlignCenter">（印章）</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td style="width:594px;">&nbsp;</td>
                <td
                  style="width:170px;"
                  class="cellInput textAlignCenter cellDateNoPrint"
                  id="cell_idx_33"
                  onclick="host.commandFill(this.id,'sign-date','日期')"
                >选择日期...</td>
                <td style="width:16px;">&nbsp;</td>
              </tr>
            </table>
            <div class="docFooter">
              <div
                style="margin-top:4px;width:98%;height: 24px; line-height:30px; padding-left: 16px;"
              >本文书一式两份：一份由应急管理部门备案，一份交被处罚人（单位）。</div>
            </div>
          </div>
        </div>
      </div>
    </let-main>
  </div>
</template>

<script>
import letMain from "@/views/make-law-writ/components/let-main.vue";
import GoDB from "@/utils/godb.min.js";
export default {
  name: "Let200",
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
        this.letData = {
          cellIdx0: corp.corpName ? corp.corpName : null, // 被检查单位
          cellIdx0TypeTextItem: corp.corpName ? corp.corpName : null,
          cellIdx1: null, // 监察类型或方式
          cellIdx2: null, // 检查时间
          cellIdx3: sSummary ? sSummary : null, // 煤矿概况
          cellIdx3TypeTextareaItem: sSummary ? sSummary : null, // 煤矿概况
          cellIdx4: null, // 检查地点
          cellIdx5: [], // 检查分工明细表
          cellIdx5TypeCheckTableItem: {}, // 检查分工明细表
          cellIdx6: corpOther, // 其他事项
          cellIdx6TypeTextItem: corpOther, // 其他事项
          cellIdx8: null, // 编制人
          cellIdx9: null, // 编制日期
          cellIdx10: null, // 审批人
          cellIdx11: null, // 审批日期
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