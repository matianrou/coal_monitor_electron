<!--行政处罚  听证程序 不予受理听证申请通知书 29 -->
<template>
  <div style="width: 100%; height: 100%;">
    <let-main
      ref="letMain"
      :corp-data="corpData"
      :doc-data="docData"
      :let-data="letData"
      :paper-data="paperData"
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
            <div class="textAlignCenter formHeader1">不予受理听证申请通知书</div>
            <div class="docTextLine paper-number-div">
              <div>
                <span
                  @click="commandFill('cellIdx0', '文书号', 'TextItem')"
                >{{ letData.cellIdx0 ? letData.cellIdx0 : '（编辑）' }}</span>
                <label>（</label>
                <span
                  @click="commandFill('cellIdx1', '文书号', 'TextItem')"
                >{{ letData.cellIdx1 ? letData.cellIdx1 : '（编辑）' }}</span>
                <label>）煤安不听〔</label>
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
                class="no-underline"
              >{{ letData.cellIdx5 ? letData.cellIdx5 : '（XX）'}}</span>
              关于
              <span
                @click="commandFill('cellIdx6', '违法行为', 'TextareaItem')"
              >{{ letData.cellIdx6 ? letData.cellIdx6 : '（XX）'}}</span>
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
              根据《中华人民共和国行政处罚法》第<span class="text-decoration">六十三</span>条、第<span class="text-decoration">六十四</span>条规定，本机关决定不予受理你
              <span
                class="no-underline"
              >{{ letData.cellIdx8 ? letData.cellIdx8 : '（点击编辑）'}}</span>
              的听证申请。
            </div>
            <div class="docTextLine" style="margin-top: 30px;">
              <div style="flex: 1; display: flex;">
                <label>受送达人（签名）：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx9', '受送达人（签名）', 'TextItem')"
                >{{ letData.cellIdx9 ? letData.cellIdx9 : '（点击编辑）' }}</div>
              </div>
              <div style="flex: 1; display: flex;">
                <label>&nbsp;&nbsp;日&nbsp;&nbsp;&nbsp;&nbsp;期：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx10', '日期', 'DateItem')"
                >{{ letData.cellIdx10 ? letData.cellIdx10 : '（点击编辑）' }}</div>
              </div>
            </div>
            <div class="docTextLine">
              <div style="flex: 1; display: flex;">
                <label>执法机关地址：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx11', '执法机关地址', 'TextItem')"
                >{{ letData.cellIdx11 ? letData.cellIdx11 : '（点击编辑）' }}</div>
              </div>
              <div style="flex: 1; display: flex;">
                <label>&nbsp;&nbsp;邮政编码：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx12', '邮政编码', 'TextItem')"
                >{{ letData.cellIdx12 ? letData.cellIdx12 : '（点击编辑）' }}</div>
              </div>
            </div>
            <div class="docTextLine">
              <div style="flex: 1; display: flex;">
                <label>执法机关联系人：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx13', '执法机关联系人', 'TextItem')"
                >{{ letData.cellIdx13 ? letData.cellIdx13 : '（点击编辑）' }}</div>
              </div>
              <div style="flex: 1; display: flex;">
                <label>&nbsp;&nbsp;联系电话：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx14', '联系电话', 'TextItem')"
                >{{ letData.cellIdx14 ? letData.cellIdx14 : '（点击编辑）' }}</div>
              </div>
            </div>
            <table class="docBody" style="margin-top: 60px;">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_15"
                  align="right"
                  style="width:95%"
                  @click="commandFill('cellIdx15', '', 'TextItem')"
                >{{letData.cellIdx15 ? letData.cellIdx15 : '（点击编辑）'}}</td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_16"
                  align="right"
                  style="width:95%"
                  data-title
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx16', '日期', 'DateItem')"
                >{{letData.cellIdx16 ? letData.cellIdx16: '（点击编辑）'}}</td>
              </tr>
            </table>
            <div class="docTextarea" style="border-top: 2px solid #000;">
              <label style="width: 5%"></label>
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
import GoDB from "@/utils/godb.min.js";
import { getDocNumber, setNewDanger, getOrgData } from '@/utils/setInitPaperData'
import associationSelectPaper from '@/components/association-select-paper'
import { setDangerTable } from '@/utils/handlePaperData'
export default {
  name: "Let210",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {
        cellIdx0: null, // 文书号
        cellIdx1: null, // 文书号
        cellIdx2: null, // 文书号
        cellIdx3: null, // 文书号
        cellIdx4: null, // 企业煤矿名称
        cellIdx5: null, // 单位或个人
        cellIdx6: null, // 违法行为
        cellIdx7: null, // 第X项情形
        cellIdx8: null, // 单位
        cellIdx9: null, // 受送达人（签名）
        cellIdx10: null, // 日期
        cellIdx11: null, // 地址
        cellIdx12: null, // 邮政编码
        cellIdx13: null, // 地址联系人
        cellIdx14: null, // 联系电话
        cellIdx15: null, // 
        cellIdx16: null, // 日期
        selectedType: null, // 单位或个人
        extraData: null,
        DangerTable: null,
        associationPaperId: null,
        associationPaperOrder: []
      },
      options: {
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
        ],
        cellIdx5: [
          {
            value: '单位',
            name: '单位',
          },
          {
            value: '个人',
            name: '个人',
          },
        ],
        cellIdx8: [
          {
            value: '单位',
            name: '单位',
          },
          {
            value: '个人',
            name: '个人',
          },
        ]
      },
      associationPaper: ['28']
    };
  },
  methods: {
    async initLetData (selectedPaper) {
      let db = new GoDB(this.$store.state.DBName);
      let corpBase = db.table("corpBase");
      let corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      // 2.生成文书编号
      let {num0, num1, num3, num4} = await getDocNumber(db, this.docData.docTypeNo, this.corpData.caseId)
      // 3.企业煤矿名称
      // 4.违法行为：获取笔录文书中的隐患数据
      let let28DataPaperContent = JSON.parse(
        selectedPaper.let28Data.paperContent
      );
      let cellIdx6String = this.corpData.caseType === '0' ?setDangerTable(
          let28DataPaperContent.DangerTable,
          {}, 
          {
            page: "29",
            key: "cellIdx6",
            spellString: {
              corpName: corp.corpName,
              groupName: this.$store.state.curCase.provinceGroupName,
            },
          }
        ):'';
      // 5.地点：sysOfficeInfo实体中depAddress字段+ deparFullname字段
      // 地址：depAddress、邮政编码：depPost、联系人：master、联系电话：phone
      let orgSysOfficeInfo = await getOrgData(db, this.$store.state.curCase.affiliate)
      let DangerTable = null
      if (this.corpData.caseType === '0') {
        DangerTable = let28DataPaperContent.DangerTable ? 
          setNewDanger(selectedPaper.let28Data, let28DataPaperContent.DangerTable)
          : {}
      }
      let associationPaperId = Object.assign({}, this.setAssociationPaperId(let28DataPaperContent.associationPaperId), {
        paper28Id: selectedPaper.let28Data.paperId
      }) 
      let associationPaperOrder = this.setAssociationPaperOrder(let28DataPaperContent.associationPaperOrder)
      associationPaperOrder.push('28')
      await db.close();
      this.letData = Object.assign({}, this.letData, {
        cellIdx0: num0, // 文书号
        cellIdx1: num1, // 文书号
        cellIdx2: num3, // 文书号
        cellIdx3: num4, // 文书号
        cellIdx4: let28DataPaperContent.selectedType === "单位" ? corp.corpName : "", // 企业煤矿名称
        cellIdx5: let28DataPaperContent.selectedType, // 单位或个人
        cellIdx6: cellIdx6String, // 违法行为
        cellIdx8: let28DataPaperContent.selectedType, // 单位
        cellIdx11: orgSysOfficeInfo.depAddress, // 执法机关地址
        cellIdx12: orgSysOfficeInfo.depPost, // 邮政编码
        cellIdx13: orgSysOfficeInfo.master, // 执法机关联系人
        cellIdx14: orgSysOfficeInfo.phone, // 联系电话
        cellIdx15: this.$store.state.curCase.provinceGroupName, // 单位
        cellIdx16: this.todayDate, // 日期
        extraData: { // 保存额外拼写的数据内容，用于修改隐患项时回显使用
          corpName: corp.corpName,
          groupName: this.$store.state.curCase.provinceGroupName,
        },
        selectedType: let28DataPaperContent.selectedType, // 单位或个人
        DangerTable,
        associationPaperId,
        associationPaperOrder,
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