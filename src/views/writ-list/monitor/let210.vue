<!-- 行政处罚 听证程序 不予受理听证申请通知书 -->
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
            <div class="textAlignCenter formHeader3">不 予 受 理 听 证 申 请 通 知 书</div>
             <div class="docTextLine paper-number-div">
              <div>
                <span
                  @click="commandFill('cellIdx0', '文书号', 'TextItem')"
                >{{ letData.cellIdx0 ? letData.cellIdx0 : '（编辑）' }}</span>
                <label>煤安监</label>
                <span
                  @click="commandFill('cellIdx1', '文书号', 'TextItem')"
                >{{ letData.cellIdx1 ? letData.cellIdx1 : '（编辑）' }}</span>
                <label>听不受〔</label>
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
                  align="center"
                  style="width:60%"
                  data-title=""
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx4', '', 'TextItem')"
                >{{letData.cellIdx4}}</td>
                <td class="textAlignLeft ">：</td>
              </tr>
            </table>
            <div class="docTextarea">
              <label style="width:5%"></label>
              经审查，你
              <span
                class="no-line"
                @click="commandFill('cellIdx5', '单位/个人', 'TextItem')"
              >{{ letData.cellIdx5 ? letData.cellIdx5 : ''}}</span>
              关于
              <span
                @click="commandFill('cellIdx6', '违法行为', 'DangerTableItem')"
              >{{ letData.cellIdx6 ? letData.cellIdx6 : '（点击编辑）'}}</span>
              提出的听证申请属于以下第
              <span
                @click="commandFill('cellIdx7', '编号', 'SelectItem')"
              >{{ letData.cellIdx7 ? letData.cellIdx7 : '（XX）'}}</span>
              项情形：
            </div>
            <table style="border:solid 0 #000;" class="docBody">
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
            </table>
            <div class="docTextarea">
              <label style="width:5%"></label>
              根据《中华人民共和国行政处罚法》第六十三条、六十四条规定，我
              <span
                class="no-line"
                @click="commandFill('cellIdx8', '单位/个人', 'SelectItem')"
              >{{ letData.cellIdx8 ? letData.cellIdx8 : '（点击编辑）'}}</span>
              决定不予受理你
              <span
                class="no-line"
                @click="commandFill('cellIdx9', '单位/个人', 'TextItem')"
              >{{ letData.cellIdx9 ? letData.cellIdx9 : '（点击编辑）'}}</span>
              的听证申请。
            </div>
            <table height="30"></table>
            <div class="docTextLine">
              <div style="flex: 1; display: flex;">
                <label>签收人（签名）：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx10', '签收人（签名）', 'TextItem')"
                >{{ letData.cellIdx10 ? letData.cellIdx10 : '（点击编辑）' }}</div>
              </div>
              <div style="flex: 1; display: flex;">
                <label>日&nbsp;&nbsp;&nbsp;&nbsp;期：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx11', '日期', 'DateItem')"
                >{{ letData.cellIdx11 ? letData.cellIdx11 : '（点击编辑）' }}</div>
              </div>
            </div>
            <div class="docTextLine">
              <div style="flex: 2; display: flex">
                <label>我</label>
                <span @click="commandFill('cellIdx12', '', 'TextItem')">{{
                  letData.cellIdx12 ? letData.cellIdx12 : "（点击编辑）"
                }}</span>
                <label>地址：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx13', '地址', 'TextItem')"
                >
                  {{ letData.cellIdx13 ? letData.cellIdx13 : "（点击编辑）" }}
                </div>
              </div>
              <div style="flex: 2; display: flex">
                <label>邮政编码：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx14', '邮政编码', 'TextItem')"
                >
                  {{ letData.cellIdx14 ? letData.cellIdx14 : "（点击编辑）" }}
                </div>
              </div>
            </div>
            <div class="docTextLine">
              <div style="flex: 2; display: flex">
                <label>我</label>
                <span @click="commandFill('cellIdx15', '', 'TextItem')">{{
                  letData.cellIdx15 ? letData.cellIdx15 : "（点击编辑）"
                }}</span>
                <label>联系人：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx16', '联系人', 'TextItem')"
                >
                  {{ letData.cellIdx16 ? letData.cellIdx16 : "（点击编辑）" }}
                </div>
              </div>
              <div style="flex: 2; display: flex">
                <label>联系电话：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx17', '联系电话', 'TextItem')"
                >
                  {{ letData.cellIdx17 ? letData.cellIdx17 : "（点击编辑）" }}
                </div>
              </div>
            </div>
            <table height="60"></table>
            <table class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_18"
                  align="right"
                  style="width: 95%"
                  @click="commandFill('cellIdx18', '', 'TextItem')"
                >
                  {{ letData.cellIdx18 ? letData.cellIdx18 : "（点击编辑）" }}
                </td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_19"
                  align="right"
                  style="width: 95%"
                  data-title
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx19', '日期', 'DateItem')"
                >
                  {{ letData.cellIdx19 ? letData.cellIdx19 : "（点击编辑）" }}
                </td>
              </tr>
            </table>
            <div class="docTextarea cellLine">
              <label style="width: 5%"></label>
              &nbsp;&nbsp;&nbsp;&nbsp;备注：本文书一式两份，一份交申请听证
              <span
                style="border-bottom: none"
                @click="commandFill('cellIdx20', '单位/个人', 'TextItem')"
                >{{
                  letData.cellIdx20 ? letData.cellIdx20 : "（点击编辑）"
                }}</span
              >
              ，一份存档。
            </div>
            <table height="50"></table>
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
import letMain from "@/views/make-law-writ/components/let-main.vue";
import GoDB from "@/utils/godb.min.js";
import { getDocNumber, getDangerObject } from '@/utils/setInitPaperData'
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
      const db = new GoDB(this.$store.state.DBName);
      const corpBase = db.table("corpBase");
      //查询符合条件的记录
      const corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      const wkPaper = db.table("wkPaper");
      const caseId = this.corpData.caseId;
      const checkPaper = await wkPaper.findAll((item) => {
        return (
          item.caseId === caseId && item.paperType === this.docData.docTypeNo && item.delFlag !== '1'
        );
      });
      // await wkPaper.delete(checkPaper[0].id)
      // 保存额外拼写的数据内容，用于修改隐患项时回显使用
      this.extraData = {
        corpName: corp.corpName,
      }
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
        let orgSysOfficeInfo = orgData && orgData.sysOfficeInfo ? JSON.parse(orgData.sysOfficeInfo) : {depAddress: '', depPost: '', master: '', phone: ''}
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
    commandFill (key, title, type) {
      // 判断是否可编辑
      if (this.$refs.letMain.canEdit) {
        // 文书各个字段点击打开左侧弹出编辑窗口
        let dataKey = `${key}Type${type}`
        if (key === 'cellIdx6') {
          this.options[key] = {
            page: '29',
            key: key,
            spellString: this.extraData
          }
          dataKey = 'dangerItemObject'
        }
        this.$refs.letMain.commandFill(key, dataKey, title, type, this.letData[dataKey], this.options[key])
      }
    },
    async confirm() {
      // 选择单位或个人
      this.visible = false
      this.letData.cellIdx5 = this.selectedType
      this.letData.cellIdx5TypeTextItem = this.selectedType
      this.letData.cellIdx9 = this.selectedType
      this.letData.cellIdx9TypeTextItem = this.selectedType
      this.letData.cellIdx20 = this.selectedType
      this.letData.cellIdx20TypeTextItem = this.selectedType
      this.letData.cellIdx9 = this.selectedType
      this.letData.cellIdx9TypeTextItem = this.selectedType
      this.letData.cellIdx22 = this.selectedType
      this.letData.cellIdx22TypeTextItem = this.selectedType
      this.letData.selectedType = this.selectedType
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/let";
</style>