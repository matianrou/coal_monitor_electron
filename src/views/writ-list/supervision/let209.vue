<!--行政处罚 听证程序 听证通知书 28 -->
<template>
  <div style="width: 100%; height: 100%;">
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
            <div class="textAlignCenter formHeader0">
              煤矿安全监管行政执法文书
              <br />
            </div>
            <div class="textAlignCenter formHeader1">听证通知书</div>
            <div class="docTextLine paper-number-div">
              <div>
                <span
                  @click="commandFill('cellIdx0', '文书号', 'TextItem')"
                >{{ letData.cellIdx0 ? letData.cellIdx0 : '（编辑）' }}</span>
                <label>（</label>
                <span
                  @click="commandFill('cellIdx1', '文书号', 'TextItem')"
                >{{ letData.cellIdx1 ? letData.cellIdx1 : '（编辑）' }}</span>
                <label>）煤安听〔</label>
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
              <label style="width: 2em"></label>
              本机关根据你
              <span
                class="no-underline"
              >{{ letData.cellIdx6 ? letData.cellIdx6 : '（点击编辑）' }}</span>
              申请，关于
              <span
                @click="commandFill('cellIdx7', '违法行为', 'TextareaItem')"
              >{{ letData.cellIdx7 ? letData.cellIdx7 : '（点击编辑）'}}</span>
              ，现定于
              <span
                class="center"
                @click="commandFill('cellIdx8', '年', 'TextItem')"
              >{{ letData.cellIdx8 ? letData.cellIdx8 : '（XX）'}}</span>
              年
              <span
                class="center"
                @click="commandFill('cellIdx9', '月', 'TextItem')"
              >{{ letData.cellIdx9 ? letData.cellIdx9 : '（XX）'}}</span>
              月
              <span
                class="center"
                @click="commandFill('cellIdx10', '日', 'TextItem')"
              >{{ letData.cellIdx10 ? letData.cellIdx10 : '（XX）'}}</span>
              日
              <span
                class="center"
                @click="commandFill('cellIdx11', '时', 'TextItem')"
              >{{ letData.cellIdx11 ? letData.cellIdx11 : '（XX）'}}</span>
              时在
              <span
                @click="commandFill('cellIdx12', '地点', 'TextItem')"
              >{{ letData.cellIdx12 ? letData.cellIdx12 : '（点击编辑）'}}</span>
              （
              <span
                class="no-underline"
                @click="commandFill('cellIdx13', '公开/不公开', 'SelectItem')"
              >{{ letData.cellIdx13 ? letData.cellIdx13 : '（点击编辑）'}}</span>
              ）举行听证会议，请你
              <span
                class="no-underline"
              >{{ letData.cellIdx14 ? letData.cellIdx14 : '（点击编辑）'}}</span>
              准时参加。
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:55%">
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;听证主持人姓名：</span>
                <span @click="commandFill('cellIdx15', '听证主持人姓名', 'TextItem')"
                  >{{ letData.cellIdx15 ? letData.cellIdx15 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;职务：</span>
                <span @click="commandFill('cellIdx16', '职务', 'TextItem')">{{
                  letData.cellIdx16 ? letData.cellIdx16 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:55%">
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;听 证 员 姓 名：</span>
                <span @click="commandFill('cellIdx17', '听证员姓名', 'TextItem')"
                  >{{ letData.cellIdx17 ? letData.cellIdx17 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;职务：</span>
                <span @click="commandFill('cellIdx18', '职务', 'TextItem')">{{
                  letData.cellIdx18 ? letData.cellIdx18 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:55%">
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;听 证 员 姓 名：</span>
                <span @click="commandFill('cellIdx19', '听证员姓名', 'TextItem')"
                  >{{ letData.cellIdx19 ? letData.cellIdx19 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;职务：</span>
                <span @click="commandFill('cellIdx20', '职务', 'TextItem')">{{
                  letData.cellIdx20 ? letData.cellIdx20 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:55%">
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;记 录 人 姓 名：</span>
                <span @click="commandFill('cellIdx21', '记录人姓名', 'TextItem')"
                  >{{ letData.cellIdx21 ? letData.cellIdx21 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;职务：</span>
                <span @click="commandFill('cellIdx22', '职务', 'TextItem')">{{
                  letData.cellIdx22 ? letData.cellIdx22 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <div class="docTextarea">
              <label style="width: 2em"></label>
              根据《中华人民共和国行政处罚法》第<span class="text-decoration">六十四</span>条规定，你
              <span
                class="no-underline"
              >{{ letData.cellIdx23 ? letData.cellIdx23 : '（点击编辑）'}}</span>
              可以申请听证主持人回避。有关事项告知如下：
            </div>
            <div class="docTextarea">
              <label style="width: 2em"></label>
              1. 请事先准备相关证据，通知证人或委托代理人准时参加；无正当理由拒不出席听证或者未经许可中途退出听证的，视为放弃听证权利，本机关将终止听证。
            </div>
            <div class="docTextarea">
              <label style="width: 2em"></label>
              2. 委托代理人参加听证的，应当在听证会前向本机关提交授权委托书等有关证明。
            </div>
            <div class="docTextarea">
              <label style="width: 2em"></label>
              3. 申请延期举行的，应当在举行听证会前向本机关提出，由本机关决定是否延期。
            </div>
            <!-- <table style="border:solid 0 #000;" class="docBody">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_24"
                  align="center"
                  style="width:10%"
                  data-title="单位"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx24', '单位', 'TextItem')"
                >{{letData.cellIdx24}}</td>
              </tr>
            </table> -->
            <div class="docTextarea">
              <div style="display:inline-block;min-width:55%">
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;受送达人（签名）：</span>
                <span @click="commandFill('cellIdx25', '受送达人（签名）', 'TextItem')"
                  >{{ letData.cellIdx25 ? letData.cellIdx25 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;日&nbsp;&nbsp;&nbsp;&nbsp;期：</span>
                <span @click="commandFill('cellIdx26', '日期', 'DateItem')">{{
                  letData.cellIdx26 ? letData.cellIdx26 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:55%">
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;执法机关地址：</span>
                <span @click="commandFill('cellIdx27', '执法机关地址：', 'TextItem')"
                  >{{ letData.cellIdx27 ? letData.cellIdx27 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;邮政编码：</span>
                <span @click="commandFill('cellIdx28', '邮政编码', 'TextItem')">{{
                  letData.cellIdx28 ? letData.cellIdx28 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:55%">
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;执法机关联系人：</span>
                <span @click="commandFill('cellIdx29', '执法机关联系人', 'TextItem')"
                  >{{ letData.cellIdx29 ? letData.cellIdx29 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;联系电话：</span>
                <span @click="commandFill('cellIdx30', '联系电话', 'TextItem')">{{
                  letData.cellIdx30 ? letData.cellIdx30 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <table class="docBody" style="margin-top: 30px;">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_31"
                  align="right"
                  style="width:95%"
                  @click="commandFill('cellIdx31', '', 'TextItem')"
                >{{letData.cellIdx31 ? letData.cellIdx31 : '（点击编辑）'}}</td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_32"
                  align="right"
                  style="width:95%"
                  data-title
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx32', '日期', 'DateItem')"
                >{{letData.cellIdx32 ? letData.cellIdx32: '（点击编辑）'}}</td>
              </tr>
            </table>
            <div class="docTextarea" style="border-top: 2px solid #000;">
              备注：本文书一式两份，一份交听证申请人，一份存档。
            </div>
          </div>
        </div>
      </div>
    </let-main>
    <!-- 关联文书选择 -->
    <select-paper
      v-if="visible.selectPaper"
      :visible="visible.selectPaper"
      :paper-list="paperList"
      @close="closeDialog"
      @confirm-paper="confirmPaper"
    ></select-paper>
  </div>
</template>

<script>
import { getDocNumber, setNewDanger, getOrgData } from '@/utils/setInitPaperData'
import associationSelectPaper from '@/components/association-select-paper'
import { setDangerTable } from "@/utils/handlePaperData";
export default {
  name: "Let209",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {
        cellIdx0: null, // 文书号
        cellIdx1: null, // 文书号
        cellIdx2: null, // 文书号
        cellIdx3: null, // 文书号
        cellIdx4: null, // 单位
        cellIdx5: null, // 单位
        cellIdx6: null, // 单位/个人
        cellIdx7: null, // 违法行为
        cellIdx8: null, // 年
        cellIdx9: null, // 月
        cellIdx10: null, // 日
        cellIdx11: null, // 时
        cellIdx12: null, // 地点
        cellIdx13: null, // 公开/不公开
        cellIdx14: null, // 单位/个人
        cellIdx15: null, // 听证主持人姓名
        cellIdx16: null, // 职务
        cellIdx17: null, // 听证员姓名
        cellIdx18: null, // 职务
        cellIdx19: null, // 听证员姓名
        cellIdx20: null, // 签名
        cellIdx21: null, // 记录人姓名
        cellIdx22: null, // 职务
        cellIdx23: null, // 单位/个人
        cellIdx24: null, // 单位  暂不用
        cellIdx25: null, // 受送达人（签名）
        cellIdx26: null, // 日期
        cellIdx27: null, // 执法机关地址
        cellIdx28: null, // 邮政编码
        cellIdx29: null, // 执法机关联系人
        cellIdx30: null, // 联系电话
        cellIdx31: null, // 
        cellIdx32: null, // 日期
        DangerTable: null, // 保留用于不予受理中使用
        extraData: null,
        selectedType: null,
        associationPaperId: null,
        associationPaperOrder: []
      },
      options: {
        cellIdx13: [
          {
            value: '公开',
            name: '公开',
          },
          {
            value: '不公开',
            name: '不公开',
          },
        ]
      },
      associationPaper: ['6']
    };
  },
  methods: {
    async initLetData (selectedPaper) {
      let corpBase = await this.getDatabase('baseInfo');
      let corp = corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      // 2.生成文书编号
      let { num0, num1, num3, num4 } = await getDocNumber(this.docData.docTypeNo, this.corpData.caseId)
      // 3.企业煤矿名称
      // 4.违法行为：获取笔录文书中的隐患数据
      let let6DataPaperContent = JSON.parse(
        selectedPaper.let6Data.paperContent
      );
      let newDangerTable = this.corpData.caseType === "0" ? this.handleSelectedDangerList(let6DataPaperContent.DangerTable) : null
      let cellIdx7String =
        this.corpData.caseType === "0"
          ? setDangerTable(
              newDangerTable,
              {},
              {
                page: "28",
                key: "cellIdx7",
                spellString: {
                  corpName: corp.corpName,
                  groupName: this.$store.state.curCase.groupName,
                },
              }
            )
          : "";
      // 5.地点：sysOfficeInfo实体中depAddress字段+ deparFullname字段
      // 地址：depAddress、邮政编码：depPost、联系人：master、联系电话：phone
      let orgSysOfficeInfo = await getOrgData(this.$store.state.curCase.groupId)
      let cellIdx12String = `${orgSysOfficeInfo.depAddress}${orgSysOfficeInfo.deparFullname}`
      let DangerTable =
        this.corpData.caseType === "0"
          ? setNewDanger(
              selectedPaper.let6Data,
              newDangerTable,
              this.paperId
            )
          : null;
      let associationPaperId = Object.assign({}, this.setAssociationPaperId(let6DataPaperContent.associationPaperId), {
        paper6Id: selectedPaper.let6Data.paperId,
      }) 
      let associationPaperOrder = this.setAssociationPaperOrder(let6DataPaperContent.associationPaperOrder)
      associationPaperOrder.push('6')
      this.letData = Object.assign({}, this.letData, {
        cellIdx0: num0, // 文书号
        cellIdx1: num1, // 文书号
        cellIdx2: num3, // 文书号
        cellIdx3: num4, // 文书号
        cellIdx4: let6DataPaperContent.selectedType === "单位" ? corp.corpName : "", // 单位
        cellIdx6: let6DataPaperContent.selectedType, // 单位/个人
        cellIdx7: cellIdx7String, // 违法行为
        cellIdx12: cellIdx12String, // 地点
        cellIdx14: let6DataPaperContent.selectedType, // 单位/个人
        cellIdx23: let6DataPaperContent.selectedType, // 单位/个人
        cellIdx27: orgSysOfficeInfo.depAddress, // 执法机关地址
        cellIdx28: orgSysOfficeInfo.depPost, // 邮政编码
        cellIdx29: orgSysOfficeInfo.master, // 执法机关联系人
        cellIdx30: orgSysOfficeInfo.phone, // 联系电话
        cellIdx31: this.$store.state.curCase.groupName, //
        cellIdx32: this.todayDate, // 日期
        DangerTable: DangerTable,
        extraData: { // 保存额外拼写的数据内容，用于修改隐患项时回显使用
          corpName: corp.corpName,
          groupName: this.$store.state.curCase.groupName,
        },
        selectedType: let6DataPaperContent.selectedType,
        associationPaperId,
        associationPaperOrder
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
        // if (key === 'cellIdx7') {
        //   this.options[key] = {
        //     page: '28',
        //     key: key,
        //     spellString: this.letData.extraData
        //   }
        //   dataKey = 'DangerTable'
        // }
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