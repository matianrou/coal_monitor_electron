<!-- 现场检查 实施检查 抽样取证通知书 23 -->
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
            <div class="textAlignCenter formHeader1">抽样取证通知书</div>
            <div class="docTextLine paper-number-div">
              <div>
                <span
                  @click="commandFill('cellIdx0', '文书号', 'TextItem')"
                >{{ letData.cellIdx0 ? letData.cellIdx0 : '（编辑）' }}</span>
                <label>（</label>
                <span
                  @click="commandFill('cellIdx1', '文书号', 'TextItem')"
                >{{ letData.cellIdx1 ? letData.cellIdx1 : '（编辑）' }}</span>
                <label>）煤安抽〔</label>
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
                  style="width:62%"
                  data-title
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx4', '', 'TextItem')"
                >{{ letData.cellIdx4 }}</td>
                <td class="textAlignLeft">:</td>
              </tr>
            </table>
            <div class="docTextarea">
              <label style="width:5%"></label>
              你单位
              <span
                @dblclick="commandFill('cellIdx5', '违法违规行为', corpData.caseType === '0' ? 'DangerTable' : 'TextareaItem')"
                @click="commandFill('cellIdx5', '违法行为', corpData.caseType === '0' ? 'DangerTextareaItem' : 'TextareaItem')"
              >{{ letData.cellIdx5 ? letData.cellIdx5 : '（点击编辑）'}}</span>
              的行为涉嫌违法违规。根据《中华人民共和国行政处罚法》第<span class="text-decoration">五十六</span>条规定，本机关决定对你单位的有关证据（详见《抽样取证清单》）采取抽样取证。
            </div>
            <table style="border:solid 0px #000;" class="docBody">
            </table>
            <table class="docBody" style="margin-top: 30px; margin-bottom: 60px;">
              <tr>
                <td
                  class="textAlignLeft"
                  style="cursor: pointer;"
                  @click="commandFill('cellIdx7', '抽样取证清单', 'SamplingForensicsTable')"
                >附件：抽样取证清单</td>
                <!-- <td
                  id="cell_idx_7"
                  style="width:70%;"
                  data-title="附件"
                  data-type="text"
                  data-src
                ></td> -->
              </tr>
            </table>
            <div class="docTextarea">
              <span class="no-line"
                >抽样承办人：（签名）</span
              >
              <span
                @click="commandFill('cellIdx8', '抽样承办人：（签名）', 'TextItem')"
                >{{
                  letData.cellIdx8 ? letData.cellIdx8 : "（点击编辑）"
                }}</span
              >
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line" style="width:14%">抽样时间：</span>
              <div style="display:inline-block;min-width:34%;line-height: normal;max-width:34%;" >
                <span
                @click="commandFill('cellIdx9', '年', 'TextItem')"
              >{{ letData.cellIdx9 ? letData.cellIdx9 : 'XX'}}</span>
              年
              <span
                @click="commandFill('cellIdx10', '月', 'TextItem')"
              >{{ letData.cellIdx10 ? letData.cellIdx10 : 'XX' }}</span>
              月
              <span
                @click="commandFill('cellIdx11', '日', 'TextItem')"
              >{{ letData.cellIdx11 ? letData.cellIdx11 : 'XX'}}</span>
              日
              <span
                @click="commandFill('cellIdx12', '时', 'TextItem')"
              >{{ letData.cellIdx12 ? letData.cellIdx12 : 'XX'}}</span>
              时
              </div>
              <span class="no-line" style="width: 14%">抽样地点：</span>
              <span style="display:inline-block;min-width:33%;line-height: normal;max-width:33%" @click="commandFill('cellIdx13', '抽样地点', 'TextItem')">{{
                letData.cellIdx13 ? letData.cellIdx13 : "（点击编辑）"
              }}</span>
            </div>
             <div class="docTextarea">
              <div style="display:inline-block;min-width:49%">
                <span class="no-line">受送达人（签名）：</span>
                <span @click="commandFill('cellIdx14', '受送达人（签名）：', 'TextItem')"
                  >{{ letData.cellIdx14 ? letData.cellIdx14 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">日&nbsp;&nbsp;&nbsp;&nbsp;期：</span>
                <span @click="commandFill('cellIdx15', '日期', 'DateItem')">{{
                  letData.cellIdx15 ? letData.cellIdx15 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:49%">
                <span class="no-line">执法机关地址：</span>
                <span @click="commandFill('cellIdx16', '执法机关地址', 'TextItem')"
                  >{{ letData.cellIdx16 ? letData.cellIdx16 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">邮政编码：</span>
                <span @click="commandFill('cellIdx18', '邮政编码', 'TextItem')">{{
                  letData.cellIdx18 ? letData.cellIdx18 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:49%">
                <span class="no-line">执法机关联系人：</span>
                <span @click="commandFill('cellIdx19', '执法机关联系人', 'TextItem')"
                  >{{ letData.cellIdx19 ? letData.cellIdx19 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">联系电话：</span>
                <span @click="commandFill('cellIdx21', '联系电话', 'TextItem')">{{
                  letData.cellIdx21 ? letData.cellIdx21 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <table class="docBody" style="margin-top: 60px;">
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_22"
                  align="right"
                  style="width:95%"
                  @click="commandFill('cellIdx22', '', 'TextItem')"
                >{{letData.cellIdx22 ? letData.cellIdx22 : '（点击编辑）'}}</td>
              </tr>
              <tr>
                <td
                  class="cellInput"
                  id="cell_idx_23"
                  align="right"
                  style="width:95%"
                  data-title
                  data-type="date"
                  data-src
                  @click="commandFill('cellIdx23', '日期', 'DateItem')"
                >{{letData.cellIdx23 ? letData.cellIdx23 : '（点击编辑）'}}</td>
              </tr>
            </table>
            <div class="docTextarea" style="border-top: 2px solid #000;">
              备注：本文书一式两份，一份交被取证单位，一份存档。
            </div>
          </div>
        </div>
        <div style="height: 20px; width: 100%"></div>
        <!-- 以下仅供web端抽样取证展示抽样取证清单 -->
        <div class="page-break"></div>
        <!-- 但页面不展示 -->
        <div style="height: 0px; overflow: hidden">
          <div class="page page-sizeA4">
            <div style="padding: 10px 0; text-align: center">
              抽样取证清单
            </div>
            <div style="width: 19.5cm; margin: 0 auto;">
              <el-table
                :data="letData.SamplingForensicsTable.tableData"
                width="100%"
                border
              >
                <el-table-column
                  label="序号"
                  type="index"
                  width="50"
                  align="center">
                </el-table-column>
                <el-table-column
                  prop="name"
                  header-align="center"
                  align="left"
                  label="名称"
                >
                </el-table-column>
                <el-table-column
                  prop="modelNumber"
                  header-align="center"
                  align="left"
                  label="规格型号"
                >
                </el-table-column>
                <el-table-column
                  prop="manufacturer"
                  label="生产厂家"
                  header-align="center"
                  align="left"
                >
                </el-table-column>
                <el-table-column
                  prop="productDate"
                  label="出厂日期"
                  header-align="center"
                  width="120"
                  align="center"
                >
                </el-table-column>
                <el-table-column
                  prop="units"
                  label="单位"
                  header-align="center"
                  align="center"
                >
                </el-table-column>
                <el-table-column
                  prop="price"
                  label="价格"
                  header-align="center"
                  align="right"
                >
                </el-table-column>
                <el-table-column
                  prop="num"
                  label="数量"
                  header-align="center"
                  align="right"
                >
                </el-table-column>
              </el-table>
              <div style="margin-top: 30px;">
                <div style="margin-top: 10px;">
                  <span>{{'上述证据经核无误。'}}</span>
                </div>
                <div style="margin-top: 10px;">
                  <span>被取证单位负责人（签名）：</span>
                  <span>{{letData.SamplingForensicsTable.signature || ''}}</span>
                  <span>&nbsp;&nbsp;&nbsp;日期：</span>
                  <span>{{letData.SamplingForensicsTable.signDate || ''}}</span>
                </div>
              </div>
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
import { setNewDanger, getDocNumber, getOrgData } from '@/utils/setInitPaperData'
import associationSelectPaper from '@/components/association-select-paper'
import { setDangerTable } from '@/utils/handlePaperData'
export default {
  name: "Let107",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {
        cellIdx0: null, // 文书号
        cellIdx1: null, // 文书号
        cellIdx2: null, // 文书号
        cellIdx3: null, // 文书号
        cellIdx4: null, // corpname
        cellIdx5: null, // 隐患描述
        cellIdx6: null, // 暂不用
        cellIdx7: null, // 抽样取证清单
        cellIdx8: null, // 抽样承办人：（签名）
        cellIdx9: null, // 年
        cellIdx10: null, // 月
        cellIdx11: null, // 日
        cellIdx12: null, // 时
        cellIdx13: null, // 抽样地点
        cellIdx14: null, // 受送达人（签名）
        cellIdx15: null, // 日期
        cellIdx16: null, // 执法机关地址
        cellIdx17: null, // 暂不用
        cellIdx18: null, // 邮政编码
        cellIdx19: null, // 执法机关联系人
        cellIdx20: null, // 暂不用
        cellIdx21: null, // 联系电话
        cellIdx22: null, //
        cellIdx23: null, // 日期
        DangerTable: null,
        SamplingForensicsTable: {
          tableData: [],
          signature: null,
          signDate: "",
        },
        associationPaperId: null,
        associationPaperOrder: []
      },
      options: {},
      associationPaper: ['1']
    };
  },
  methods: {
    async initLetData (selectedPaper) {
      let corpBase = await this.getDatabase('baseInfo');
      let corp = corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      // 1.生成文书编号
      let { num0, num1, num3, num4 } = await getDocNumber(this.docData.docTypeNo, this.corpData.caseId)
      // 2.隐患描述
      // 获取笔录文书中的隐患数据
      let let1DataPaperContent = selectedPaper.let1Data ? JSON.parse(
        selectedPaper.let1Data.paperContent
      ) : null;
      let cellIdx5String = this.corpData.caseType === '0' ?setDangerTable(
        let1DataPaperContent.DangerTable,
        {},
        {
          page: "23",
          key: "cellIdx5",
        }
      ):'';
      // 3.抽样时间9-12
      let now = new Date()
      let cellIdx9Year = now.getFullYear().toString()
      let cellIdx10Month = (now.getMonth() + 1).toString()
      let cellIdx11Date = now.getDate().toString()
      let cellIdx12Hour = now.getHours().toString()
      // 4.sysOfficeInfo实体中 地址：depAddress、邮政编码：depPost、master、联系电话：phone
      let orgSysOfficeInfo = await getOrgData(this.$store.state.curCase.groupId)
      let cellIdx17String = orgSysOfficeInfo.depAddress
      let cellIdx18String = orgSysOfficeInfo.depPost
      let cellIdx20String = orgSysOfficeInfo.master
      let cellIdx21String = orgSysOfficeInfo.phone
      // 5.获取检查地点
      let cellIdx13String = ''
      let wkPaper = await this.getPaperDatabase(this.corpData.caseId)
      if (let1DataPaperContent.associationPaperId) {
        let paper22 = wkPaper.find(item => item.paperId === let1DataPaperContent.associationPaperId.paper22Id)
        cellIdx13String = paper22.paperContent ? JSON.parse(paper22.paperContent).cellIdx4 : ''
      }
      let DangerTable = null
      if (this.corpData.caseType === '0') {
        DangerTable = let1DataPaperContent.DangerTable ? 
          setNewDanger(selectedPaper.let1Data, let1DataPaperContent.DangerTable)
          : {}
      }
      let associationPaperId = Object.assign({}, this.setAssociationPaperId(let1DataPaperContent.associationPaperId), {
        paper1Id: selectedPaper.let1Data.paperId,
      }) 
      let associationPaperOrder = this.setAssociationPaperOrder(let1DataPaperContent.associationPaperOrder)
      associationPaperOrder.push('1')
      this.letData = Object.assign({}, this.letData, {
        cellIdx0: num0, // 文书号
        cellIdx1: num1, // 文书号
        cellIdx2: num3, // 文书号
        cellIdx3: num4, // 文书号
        cellIdx4: corp.corpName ? corp.corpName : null, // corpname
        cellIdx5: cellIdx5String, // 隐患描述
        cellIdx9: cellIdx9Year, // 年
        cellIdx10: cellIdx10Month, // 月
        cellIdx11: cellIdx11Date, // 日
        cellIdx12: cellIdx12Hour, // 时
        cellIdx13: cellIdx13String, // 抽样地点
        cellIdx16: cellIdx17String, // 执法机关地址
        cellIdx18: cellIdx18String, // 邮政编码
        cellIdx19: cellIdx20String, // 执法机关联系人
        cellIdx21: cellIdx21String, // 联系电话
        cellIdx22: this.$store.state.curCase.groupName, //
        cellIdx23: this.todayDate, // 日期
        DangerTable: DangerTable,
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
        if (key === "cellIdx5" && type === 'DangerTable') {
          if (type === 'DangerTable') {
            this.options[key] = {
              page: "23",
              key: key,
            };
            dataKey = "DangerTable";
          } else {
            this.options[key] = {
              disabled: false
            };
          }
        } else if (key === "cellIdx7") {
          this.options[key] = {
            canEdit: true,
            page: "23", // 控制当前为抽样取证或者先行登记保存证据清单
          };
          dataKey = "SamplingForensicsTable";
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
        if (key === "cellIdx7") {
          // 不能编辑时，还需要查看附件
          this.options[key] = {
            canEdit: false,
            page: "23", // 控制当前为抽样取证或者先行登记保存证据清单
          };
          let dataKey = "SamplingForensicsTable";
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