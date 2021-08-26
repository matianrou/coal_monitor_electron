<!--行政处罚  听证程序 不予受理听证申请通知书 -->
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
            <div class="textAlignCenter formHeader3">不 予 受 理 听 证 申 请 通 知 书</div>
            <div class="stdRowH"></div>
           <table class="docBody">
             <tr>
                <td
                  class="cellInput "
                  id="cell_idx_0"
                  align="right"
                  style="width:35%"
                  data-title="文书号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx0', '文书号', 'TextItem')"
                >{{letData.cellIdx0}}</td>
                <td class="textAlignLeft ">（</td>
                <td
                  class="cellInput "
                  id="cell_idx_1"
                  align="center"
                  style="width:20%"
                  data-title="文书号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx1', '文书号', 'TextItem')"
                >{{letData.cellIdx1}}</td>
                <td class="textAlignLeft ">）煤安不听〔</td>
                
                <td
                  class="cellInput "
                  id="cell_idx_2"
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
                  align="center"
                  style="width:10%"
                  data-title="文书号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx3', '文书号', 'TextItem')"
                >{{letData.cellIdx3}}</td>
                <td class="textAlignLeft ">号&nbsp;&nbsp;</td>
              </tr>
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_4"
                  align="center"
                  style="width:60%"
                  data-title="文书号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx4', '文书号', 'TextItem')"
                >{{letData.cellIdx3}}</td>
                <td class="textAlignLeft ">：</td>
              </tr>
            </table>
            <table style="border:solid 0 #000;" class="docBody">
              <tr>
                <td style="width:5%"></td>

                <td class="textAlignLeft">经审查，你</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_5"
                  align="center"
                  style="width:10%"
                  data-title="单位或个人"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx5', '单位或个人', 'TextItem')"
                >{{letData.cellIdx5}}</td>
                <td class="textAlignLeft">关于</td>
              </tr>
            </table>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              id="cell_idx_6"
              data-title="案由"
              data-type="textarea"
              data-src
              @click="commandFill('cellIdx6', '违法行为', 'DangerTableItem')">
              <p
                style="width:100%; height:auto; word-wrap:break-word;word-wrap: break-all; overflow: hidden;"
              >&nbsp;{{ letData.cellIdx6 ? letData.cellIdx6 : '（点击编辑）'}}</p>
              <p
                style="width: 100%; height: auto; word-wrap: break-word; word-wrap: break-all; overflow: hidden;"
              >&nbsp;</p>
            </div>
            <table style="border:solid 0 #000;" class="docBody">
              <tr>
                <td class="textAlignLeft">提出的听证申请属于以下第</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_7"
                  align="center"
                  style="width:20%"
                  data-title="编号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx7', '编号', 'SelectItem')"
                >{{letData.cellIdx7}}</td>
                <td class="textAlignLeft">项情形：</td>
              </tr>
              <tr>
                <td style="width:5%"></td>
                <td
                  class="textAlignLeft"
                >（一）申请人不是本案当事人或者其代理人；</td>
              </tr>
              <tr>
                <td style="width:5%"></td>
                <td
                  class="textAlignLeft"
                >（二）未在规定期限内提出听证申请；</td>
              </tr>
              <tr>
                <td style="width:5%"></td>
                <td
                  class="textAlignLeft"
                >（三）不属于依法应当听证的范围；</td>
              </tr>
              <tr>
                <td style="width:9%"></td>
                <td
                  class="textAlignLeft"
                >根据《中华人民共和国行政处罚法》第六十三条、第六十四条规定，本机关决定不予受理你</td>
                <td
                  class="cellInput"
                  id="cell_idx_8"
                  align="center"
                  style="width:10%"
                  data-title="分局"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx8', '单位', 'TextItem')"
                >{{letData.cellIdx8}}</td>
                <td class="textAlignLeft">的听证申请。</td>
              </tr>
              
            </table>
           <table height="30"></table>
            <table class="docBody">
              <tr>
                <td style="width:5%"></td>
                <td class="textAlignLeft">受送达人（签名）：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_12"
                  style="width:35%"
                  data-title="收件人（签名）"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx12', '收件人（签名）', 'TextItem')"
                >{{letData.cellIdx12}}</td>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;日&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;期：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_13"
                  style="width:26%"
                  data-title="日期"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx13', '日期', 'DateItem')"
                >{{letData.cellIdx13}}</td>
              </tr>
              <tr>
                <td style="width:5%"></td>
                <td class="textAlignLeft">执法机关地址：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_14"
                  style="width:40%"
                  data-title="我分局地址"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx14', '我分局地址', 'TextItem')"
                >{{letData.cellIdx14}}</td>
                <td class="textAlignLeft">&nbsp;&nbsp;邮政编码：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_15"
                  style="width:26%"
                  data-title="邮政编码"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx15', '邮政编码', 'TextItem')"
                >{{letData.cellIdx15}}</td>
              </tr>
              <tr>
                <td style="width:5%"></td>

                <td class="textAlignLeft">执法机关联系人：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_16"
                  style="width:38%"
                  data-title="我分局联系人"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx16', '我分局联系人', 'TextItem')"
                >{{letData.cellIdx16}}</td>
                <td class="textAlignLeft">&nbsp;&nbsp;联系电话：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_17"
                  style="width:26%"
                  data-title="联系电话"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx17', '联系电话', 'TextItem')"
                >{{letData.cellIdx17}}</td>
              </tr>
               <tr>
                <td
                  class="cellInput"
                  id="cell_idx_12"
                  align="right"
                  style="width:40%"
                  @click="commandFill('cellIdx12', '附件', 'TextItem')"
                >{{letData.cellIdx12 ? letData.cellIdx12 : '（点击编辑）'}}</td>
              </tr>
            </table>
        

            <table height="90"></table>
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
                  id="cell_idx_24"
                  align="right"
                  style="width:95%"
                  data-title
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx23', '日期', 'DateItem')"
                >{{letData.cellIdx24 ? letData.cellIdx24: '（点击编辑）'}}</td>
              </tr>
            </table>
            <table class="docBody">
              <hr />
              <td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;备注：本文书一式两份，一份交听证申请人，一份存档。</td>
              
            </table>
          </div>
        </div>
      </div>
    </let-main>
    <el-dialog
      title="文书信息选择"
      :close-on-click-modal="false"
      append-to-body
      :visible="visible"
      width="400px"
      :show-close="false">
      <span>请选择：</span>
      <el-radio-group v-model="selectedType">
        <el-radio label="单位">单位</el-radio>
        <el-radio label="个人">个人</el-radio>
      </el-radio-group>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="confirm">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import letMain from "../let-main";
import GoDB from "@/utils/godb.min.js";
import { getDocNumber, getDangerObject } from '@/utils/monitor/setInitPaperData'
export default {
  name: "Let210",
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
      options: {
        cellIdx6: {
          page: '29',
          key: 'cellIdx6'
        },
        cellIdx7: [
          {
            value: '（一）',
            name: '（一）',
          },
          {
            value: '（二）',
            name: '（二）',
          },
          {
            value: '（三）',
            name: '（三）',
          },
        ]
      },
      editData: {}, // 回显数据
      visible: false,
      selectedType: '单位', // 初始化时选择的单位或个人
      extraData: {}, // 用于拼写隐患内容的字符集合
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
      // 保存额外拼写的数据内容，用于修改隐患项时回显使用
      this.extraData = {
        corpName: corp.corpName,
      }
      // 已做文书则展示文书内容，否则创建初始版本
      if (checkPaper.length > 0) {
        // 回显
        this.letData = JSON.parse(checkPaper[0].paperContent);
        this.editData = checkPaper[0];
      } else {
        // 创建初始版本
        // 1.弹出提示框，选择单位或个人
        this.visible = true
        // 2.生成文书编号
        let {num0, num1, num3, num4} = await getDocNumber(db, this.docData.docTypeNo, caseId, this.$store.state.user)
        // 3.企业煤矿名称
        // 4.违法行为：获取笔录文书中的隐患数据
        const let101Data = await wkPaper.find((item) => {
          return item.caseId === caseId && item.paperType === '1';
        });
        let let101DataPapaerContent = JSON.parse(let101Data.paperContent)
        let dangerObject = getDangerObject(let101DataPapaerContent.dangerItemObject.tableData)
        let cellIdx6String = `${corp.corpName}涉嫌${dangerObject.dangerString}案。`
        // 5.地点：sysOfficeInfo实体中depAddress字段+ deparFullname字段
        // 地址：depAddress、邮政编码：depPost、联系人：master、联系电话：phone
        const orgInfo = db.table("orgInfo");
        const orgData = await orgInfo.find(item => item.no === this.$store.state.user.userGroupId)
        let orgSysOfficeInfo = JSON.parse(orgData.sysOfficeInfo)
        let cellIdx13String = orgSysOfficeInfo.depAddress
        let cellIdx14String = orgSysOfficeInfo.depPost
        let cellIdx16String = orgSysOfficeInfo.master
        let cellIdx17String = orgSysOfficeInfo.phone
        this.letData = {
          cellIdx0: num0, // 文书号
          cellIdx0TypeTextItem: num0, // 文书号
          cellIdx1: num1, // 文书号
          cellIdx1TypeTextItem: num1, // 文书号
          cellIdx2: num3, // 文书号
          cellIdx2TypeTextItem: num3, // 文书号
          cellIdx3: num4, // 文书号
          cellIdx3TypeTextItem: num4, // 文书号
          cellIdx4: corp.corpName, // 企业煤矿名称
          cellIdx4TypeTextItem: corp.corpName, //
          cellIdx5: null, // 单位或个人
          cellIdx6: cellIdx6String, // 违法行为
          cellIdx7: null, // 编号
          cellIdx8: null, // 单位
          cellIdx9: null, // 单位或个人
          cellIdx10: null, // 签收人（签名）
          cellIdx11: null, // 日期
          cellIdx12: null, // 单位
          cellIdx13: cellIdx13String, // 地址
          cellIdx13TypeTextItem: cellIdx13String, // 地址
          cellIdx14: cellIdx14String, // 邮政编码
          cellIdx14TypeTextItem: cellIdx14String, // 邮政编码
          cellIdx15: null, // 单位
          cellIdx16: cellIdx16String, // 联系人
          cellIdx16TypeTextItem: cellIdx16String, // 联系人
          cellIdx17: cellIdx17String, // 联系电话
          cellIdx17TypeTextItem: cellIdx17String, // 联系电话
          cellIdx18: null, // 单位
          cellIdx19: null, // 年
          cellIdx20: null, // 月
          cellIdx21: null, // 日
          cellIdx22: null, // 单位或个人
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
        if (key === 'cellIdx6') {
          this.options[key] = {
            page: '29',
            key: key,
            spellString: this.extraData
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
    async confirm() {
      // 选择单位或个人
      this.visible = false
      this.letData.cellIdx5 = this.selectedType
      this.letData.cellIdx5TypeTextItem = this.selectedType
      this.letData.cellIdx9 = this.selectedType
      this.letData.cellIdx9TypeTextItem = this.selectedType
      this.letData.cellIdx22 = this.selectedType
      this.letData.cellIdx22TypeTextItem = this.selectedType
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/let";
</style>