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
            <div class="stdRowH"></div>
            <div class="formHeader1 textAlignCenter">安全生产行政执法文书</div>
            <div class="formHeader2 textAlignCenter">行政（当场）处罚决定书</div>
            <table style="width:390px;" class="docTop">
              <tr>
                <td
                  class="textAlignCenter"
                  id="cell_idx_0"
                  contenteditable="true"
                >（{{letData.cellIdx0}}）应急罚当〔{{letData.cellIdx1}}〕{{letData.cellIdx2}}号</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td style="width:22mm; ">被处罚人</td>
                <td
                  style="width:34mm;"
                  class="cellInput cellBottomLine"
                  id="cell_idx_3"
                  contenteditable="true"
                >{{letData.cellIdx3}}</td>
                <td style="width:13mm;" class="textAlignCenter">性别</td>
                <td
                  style="width:13mm;"
                  class="cellInput cellBottomLine"
                  id="cell_idx_4"
                  contenteditable="true"
                >{{letData.cellIdx4}}</td>
                <td style="width:13mm;" class="textAlignCenter">年龄</td>
                <td
                  style="width:14mm;"
                  class="cellInput cellBottomLine"
                  id="cell_idx_5"
                  contenteditable="true"
                >{{letData.cellIdx5}}</td>
                <td style="width:22mm;" class="textAlignCenter">身份证号</td>
                <td
                  style="width:59mm;"
                  class="cellInput cellBottomLine"
                  id="cell_idx_6"
                  contenteditable="true"
                >{{letData.cellIdx6}}</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td style="width:22mm;">家庭住址</td>
                <td
                  style="width:73mm;"
                  class="cellInput cellBottomLine"
                  id="cell_idx_7"
                  contenteditable="true"
                >{{letData.cellIdx7}}</td>
                <td style="width:20mm;" class="textAlignCenter">邮政编码</td>
                <td
                  style="width:20mm;"
                  class="cellInput cellBottomLine textAlignCenter"
                  id="cell_idx_8"
                  contenteditable="true"
                >{{letData.cellIdx8}}</td>
                <td style="width:20mm;" class="textAlignCenter">联系电话</td>
                <td
                  style="width:35mm;"
                  class="cellInput cellBottomLine"
                  id="cell_idx_9"
                  contenteditable="true"
                >{{letData.cellIdx9}}</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td style="width:22mm;">所在单位</td>
                <td
                  style="width:53mm;"
                  class="cellInput cellBottomLine"
                  id="cell_idx_10"
                  contenteditable="true"
                >{{letData.cellIdx10}}</td>
                <td style="width:20mm;" class="textAlignCenter">职务</td>
                <td
                  style="width:20mm;"
                  class="cellInput cellBottomLine textAlignCenter"
                  id="cell_idx_11"
                  contenteditable="true"
                >{{letData.cellIdx11}}</td>
                <td style="width:20mm;" class="textAlignCenter">单位地址</td>
                <td
                  style="width:55mm;"
                  class="cellInput cellBottomLine"
                  id="cell_idx_12"
                  contenteditable="true"
                >{{letData.cellIdx12}}</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td style="width:25mm;">被处罚单位</td>
                <td
                  style="width:165mm;"
                  class="cellInput textPaddingLeft cellBottomLine"
                  id="cell_idx_13"
                  contenteditable="true"
                >{{letData.cellIdx13}}</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td style="width:10mm;">地址</td>
                <td
                  style="width:130mm;"
                  class="cellInput textPaddingLeft cellBottomLine"
                  id="cell_idx_14"
                  contenteditable="true"
                >{{letData.cellIdx14}}</td>
                <td style="width:20mm;" class="textAlignCenter">邮政编码</td>
                <td
                  style="width:30mm;"
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_15"
                  contenteditable="true"
                >{{letData.cellIdx15}}</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td style="width:45mm;">法定代表人（负责人）</td>
                <td
                  style="width:35mm;"
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_16"
                  contenteditable="true"
                >{{letData.cellIdx16}}</td>
                <td style="width:20mm;" class="textAlignCenter">职务</td>
                <td
                  style="width:30mm;"
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_17"
                  contenteditable="true"
                >{{letData.cellIdx17}}</td>
                <td style="width:20mm;" class="textAlignCenter">联系电话</td>
                <td
                  style="width:40mm;"
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_18"
                  contenteditable="true"
                >{{letData.cellIdx18}}</td>
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
              <p>{{letData.cellIdx19}}</p>
              <p></p>
            </div>

            <table class="docBody">
              <tr>
                <td style="width:40mm;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;以上事实违反了</td>
                <td
                  style="width:123mm;"
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_20"
                  contenteditable="true"
                >{{letData.cellIdx20}}</td>
                <td style="width:27mm;" class="textAlignCenter">的规定，依据</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td
                  style="width:75mm;"
                  class="cellInput textAlignCenter cellBottomLine"
                  id="cell_idx_21"
                  contenteditable="true"
                >{{letData.cellIdx21}}</td>
                <td style="width:37mm;">的规定，决定给予</td>
                <td
                  style="width:50mm;"
                  class="cellInput cellBottomLine"
                  id="cell_idx_22"
                  contenteditable="true"
                >{{letData.cellIdx22}}</td>
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
                >□{{letData.cellIdx23}}</td>
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
                >□{{letData.cellIdx24}}</td>
                <td style="width:70mm;">自收到本决定书之日起15日内缴至</td>
                <td
                  style="width:113mm;"
                  id="cell_idx_25"
                  class="cellInput cellBottomLine"
                  contenteditable="true"
                >{{letData.cellIdx25}}</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td style="width:10mm;">账号</td>
                <td
                  style="width:90mm;"
                  id="cell_idx_26"
                  class="cellInput cellBottomLine"
                  contenteditable="true"
                >{{letData.cellIdx26}}</td>
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
                  contenteditable="true"
                >{{letData.cellIdx27}}</td>
                <td style="width:30mm;">人民政府或者</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td
                  style="width:50mm;"
                  class="cellInput cellBottomLine textAlignCenter"
                  id="cell_idx_28"
                  contenteditable="true"
                >{{letData.cellIdx28}}</td>
                <td style="width:70mm;">申请行政复议，或在6个月内依法向</td>
                <td
                  style="width:50mm;"
                  class="cellInput cellBottomLine textAlignCenter"
                  id="cell_idx_29"
                  contenteditable="true"
                >{{letData.cellIdx29}}</td>
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
                  contenteditable="true"
                  @click="commandFill('cellIdx30', '安全生产行政执法人员（签名）', 'TextItem')"
                >{{letData.cellIdx30}}</td>
                <td style="width:100px;">&nbsp;</td>
              </tr>
              <tr>
                <td>当事人或者委托代理人（签名）：</td>
                <td
                  class="cellInput cellBottomLine textAlignCenter"
                  id="cell_idx_31"
                  contenteditable="true"
                  @click="commandFill('cellIdx30', '当事人或者委托代理人（签名）', 'TextItem')"
                >{{letData.cellIdx31}}</td>
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
                  contenteditable="true"
                >{{letData.cellIdx32}}</td>
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
                  @click="commandFill('cellIdx33', '', 'DateItem')"
                >{{letData.cellIdx31 ? letData.cellIdx33 : '选择日期...'}}</td>
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
      const db = new GoDB("CoalMonitorDB");
      //查询符合条件的记录
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
        this.letData = {
          cellIdx0: null, // SHORTNAME
          cellIdx1: null, // YEAR
          cellIdx2: null, // DOCNUMBER
          cellIdx3: null, // 被处罚人
          cellIdx4: null, // 性别
          cellIdx5: null, // 年龄
          cellIdx6: null, // 身份证号
          cellIdx7: null, // 家庭住址
          cellIdx8: null, // 邮政编码
          cellIdx9: null, // 联系电话
          cellIdx10: null, // 所在单位
          cellIdx11: null, // 职务
          cellIdx12: null, // 单位地址
          cellIdx13: null, // 被处罚单位ent_name
          cellIdx14: null, // 地址op_loc_address
          cellIdx15: null, // 邮政编码op_loc_zip_code
          cellIdx16: null, // 法定代表人（负责人）le_rpe
          cellIdx17: null, // 职务rep_duty
          cellIdx18: null, // 联系电话rep_phone
          cellIdx19: null, //
          cellIdx20: null, //
          cellIdx21: null, //
          cellIdx22: null, //
          cellIdx23: null, //
          cellIdx24: null, //
          cellIdx25: null, // RefPayUnit
          cellIdx26: null, // RefPayAccount
          cellIdx27: null, // RefReconsiderOrgan
          cellIdx28: null, // RefDeptName
          cellIdx29: null, // RefLitigationOrgan
          cellIdx30: null, // 安全生产行政执法人员（签名）
          cellIdx31: null, // 当事人或者委托代理人（签名）
          cellIdx32: null, // OrgName
          cellIdx33: null, // 选择日期

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
@import "@/assets/scss/let";
</style>