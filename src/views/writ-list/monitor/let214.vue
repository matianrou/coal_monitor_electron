<!-- 行政处罚 案件结案 执法案卷（首页）及目录 15 -->
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
            <div class="textAlignCenter formHeader2" style="font-size: 30px">
              国 家 矿 山 安 全 监 察
            </div>
            <div class="textAlignCenter formHeader4" style="font-size: 30px">
              执 法 案 卷 首 页
            </div>
            <table class="docBody" style="border: solid 1.5px #000">
              <tr style="height: 3cm">
                <td
                  style="width: 30mm; height: 30mm"
                  class="textAlignCenter cellBottomLine cellRightLine"
                >
                  <br />执法单位
                </td>
                <td
                  style="width: 124mm; height: 30mm; word-break: break-all; display: table-cell; vertical-align: middle;"
                  class="cellInput cellBottomLine textPaddingLeft"
                  id="cell_idx_0"
                  data-title="执法单位"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx0', '执法单位', 'TextItem')"
                >
                  {{ letData.cellIdx0 }}
                </td>
              </tr>
              <tr style="height: 5cm">
                <td
                  style="width: 30mm; height: 50mm;"
                  class="textAlignCenter cellBottomLine cellRightLine"
                >
                  <br />
                  <br />案卷类别
                </td>
                <td
                  style="width: 124mm; height: 50mm; word-break: break-all; display: table-cell; vertical-align: middle;"
                  class="cellInput cellBottomLine textPaddingLeft"
                  id="cell_idx_1"
                  data-title="案卷类别"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx1', '案卷类别', 'TextItem')"
                >
                  {{ letData.cellIdx1 }}
                </td>
              </tr>
              <tr style="height: 6cm">
                <td
                  style="width: 30mm; height: 120mm"
                  class="textAlignCenter cellRightLine"
                >
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />案卷题名
                </td>
                <td
                  style="width: 124mm; height: 120mm; word-break: break-all; display: table-cell; vertical-align: middle;"
                  class="cellInput textPaddingLeft"
                  id="cell_idx_2"
                  data-title="案卷题名"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx2', '案卷题名', 'TextareaItem')"
                >
                  {{ letData.cellIdx2 }}
                </td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td class="textPaddingLeft">起止日期：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_3"
                  align="center"
                  style="width: 10%"
                  data-title="年"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx3', '年', 'TextItem')"
                >
                  {{ letData.cellIdx3 }}
                </td>
                <td class="textAlignLeft">年</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_4"
                  align="center"
                  style="width: 9%"
                  data-title="月"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx4', '月', 'TextItem')"
                >
                  {{ letData.cellIdx4 }}
                </td>
                <td class="textAlignLeft">月</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_5"
                  align="center"
                  style="width: 9%"
                  data-title="日"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx5', '日', 'TextItem')"
                >
                  {{ letData.cellIdx5 }}
                </td>
                <td class="textAlignLeft" style="width: 16%">
                  &nbsp;&nbsp;&nbsp;日&nbsp;&nbsp;&nbsp;至&nbsp;&nbsp;&nbsp;
                </td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_6"
                  align="center"
                  style="width: 10%"
                  data-title="年"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx6', '年', 'TextItem')"
                >
                  {{ letData.cellIdx6 }}
                </td>
                <td class="textAlignLeft">年</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_7"
                  align="center"
                  style="width: 9%"
                  data-title="月"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx7', '月', 'TextItem')"
                >
                  {{ letData.cellIdx7 }}
                </td>
                <td class="textAlignLeft">月</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_8"
                  align="center"
                  style="width: 9%"
                  data-title="日"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx8', '日', 'TextItem')"
                >
                  {{ letData.cellIdx8 }}
                </td>
                <td class="textAlignLeft">日</td>
              </tr>
              <tr>
                <td class="textPaddingLeft">本卷共&nbsp;&nbsp;</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_9"
                  align="center"
                  style="width: 10%"
                  data-type="textarea"
                  data-src
                  @click="commandFill('cellIdx9', '件', 'TextItem')"
                >
                  {{ letData.cellIdx9 }}
                </td>
                <td class="textAlignLeft">件</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_10"
                  align="center"
                  style="width: 9%"
                  data-type="textarea"
                  data-src
                  @click="commandFill('cellIdx10', '页', 'TextItem')"
                >
                  {{ letData.cellIdx10 }}
                </td>
                <td class="textAlignLeft">页</td>
                <td class="textPaddingLeft" style="width: 28%; text-align: right;">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;归档日期：
                </td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_11"
                  align="center"
                  style="width: 10%"
                  data-title="年"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx11', '年', 'TextItem')"
                >
                  {{ letData.cellIdx11 }}
                </td>
                <td class="textAlignLeft">年</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_12"
                  align="center"
                  style="width: 9%"
                  data-title="月"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx12', '月', 'TextItem')"
                >
                  {{ letData.cellIdx12 }}
                </td>
                <td class="textAlignLeft">月</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_13"
                  align="center"
                  style="width: 9%"
                  data-title="日"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx13', '日', 'TextItem')"
                >
                  {{ letData.cellIdx13 }}
                </td>
                <td class="textAlignLeft">日</td>
              </tr>
              <!-- <tr>
                <td
                  class="cellInput "
                  id="cell_idx_17"
                  align="center"
                  style="width:100%"
                  data-title="双击编辑目录"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx17', '编辑目录', 'TextItem')"
                >{{letData.cellIdx17  ? letData.cellIdx17 : '点击编辑目录'}}</td>
              </tr> -->
            </table>
            <div class="docTextarea">
              <span class="no-line">承办人（签名）：</span>
              <span
                @click="commandFill('cellIdx14', '承办人（签名）', 'TextItem')"
                >{{
                  letData.cellIdx14 ? letData.cellIdx14 : "（点击编辑）"
                }}</span
              >
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display: inline-block; min-width: 55%">
                <span class="no-line">档号：</span>
                <span @click="commandFill('cellIdx15', '档号', 'TextItem')"
                  >{{ letData.cellIdx15 ? letData.cellIdx15 : "（点击编辑）" }}
                </span>
              </div>
              <span class="no-line">保管期限：</span>
              <span @click="commandFill('cellIdx16', '保管期限', 'TextItem')">{{
                letData.cellIdx16 ? letData.cellIdx16 : "（点击编辑）"
              }}</span>
              <div class="line"></div>
            </div>
            <div
              style="
                word-wrap: break-word;
                word-break: break-all;
                overflow: hidden;
              "
              class="cellInput mutiLineArea"
              @click="commandFill('cellIdx17', '编辑目录', 'VolumesMenuTable')"
            >
              <div style="margin-top: 10px; margin-bottom: 20px">
                <div
                  v-if="letData.cellIdx17 && letData.cellIdx17.length > 0"
                  class="show-volumes-menu"
                >
                  <div class="textAlignCenter formHeader2" style="font-size: 30px">
                    国 家 矿 山 安 全 监 察
                  </div>
                  <div class="textAlignCenter formHeader4" style="font-size: 30px">
                    档 案 卷 内 目 录
                  </div>
                  <el-table
                    :data="letData.cellIdx17"
                    stripe
                    border
                    style="width: 100%"
                    :header-cell-style="{
                      background: '#f5f7fa',
                      color: '#000',
                    }"
                  >
                    <el-table-column label="序号" type="index" width="50">
                    </el-table-column>
                    <el-table-column
                      prop="paperNumber"
                      label="文号"
                      header-align="center"
                      align="center"
                    >
                    </el-table-column>
                    <el-table-column
                      prop="title"
                      label="题名"
                      header-align="center"
                      align="center"
                    >
                    </el-table-column>
                    <el-table-column
                      prop="date"
                      header-align="center"
                      align="center"
                      width="190"
                      label="日期"
                    >
                    </el-table-column>
                    <el-table-column
                      prop="pageNumber"
                      header-align="center"
                      align="center"
                      width="100"
                      label="页号"
                    >
                    </el-table-column>
                    <el-table-column
                      prop="note"
                      header-align="center"
                      align="center"
                      label="备注"
                    >
                    </el-table-column>
                  </el-table>
                </div>
                <div v-else>
                  <span>（点击编辑目录）</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </let-main>
    <!-- 关联文书选择 -->
    <select-paper
      v-if="fromPage !== 'opinion-suggestion'"
      :visible="visible.selectPaper"
      :paper-list="paperList"
      @close="closeDialog"
      @confirm-paper="confirmPaper"
    ></select-paper>
  </div>
</template>

<script>
import GoDB from "@/utils/godb.min.js";
import { setNewDanger, getCurPaperDocNumber } from "@/utils/setInitPaperData";
import associationSelectPaper from "@/components/association-select-paper";
import { setDangerTable } from "@/utils/handlePaperData";
import { sortbyAsc } from "@/utils/index";
export default {
  name: "Let214",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {
        cellIdx0: null, // 执法单位
        cellIdx1: null, // 案卷类别
        cellIdx2: null, // 案卷题名
        cellIdx3: null, // 年
        cellIdx4: null, // 月
        cellIdx5: null, // 日
        cellIdx6: null, // 年
        cellIdx7: null, // 月
        cellIdx8: null, // 日
        cellIdx9: null, //
        cellIdx10: null, //
        cellIdx11: null, // 年
        cellIdx12: null, // 月
        cellIdx13: null, // 日
        cellIdx14: null, // 承办人（签名）
        cellIdx15: null, // 档号
        cellIdx16: null, // 保管期限
        cellIdx17: [], // 编辑目录
        volumesMenuTable: {
          tableData: [],
        },
        DangerTable: null,
        associationPaperId: null,
        associationPaperOrder: []
      },
      options: {},
      associationPaper: this.fromPage !== "opinion-suggestion" && this.corpData.caseType === "0" ? ["1"] : [],
    };
  },
  methods: {
    async initLetData(selectedPaper) {
      let cellIdx0String = "";
      let cellIdx1String = "";
      let cellIdx2String = "";
      let DangerTable = {};
      let associationPaperId = {};
      let associationPaperOrder = []
      let volumesMenuTableData = []
      if (this.fromPage === "opinion-suggestion") {
        // 从意见建议书进入执法案卷首页时
        cellIdx0String = "";
        cellIdx1String =
          "加强和改善安全监管建议书（加强和改善安全管理意见书）档案";
        let myDate = new Date();
        let curYear = myDate.getFullYear();
        cellIdx2String = `${curYear}年度加强和改善安全监管建议书（加强和改善安全管理意见书）`;
      } else {
        cellIdx0String = this.$store.state.curCase.provinceGroupName;
        cellIdx1String = "行政处罚案件档案";
        let let1DataPaperContent = JSON.parse(
          selectedPaper.let1Data.paperContent
        );
        // 获取所有文书，整理成为默认案卷首页
        let wkPaper = await this.getDatabase('wkPaper') 
        // 获取笔录文书：
        let paper1 = wkPaper.filter(item => item.paperId === selectedPaper.let1Data.paperId)
        let paper22 = []
        let paper22AssociationPaper = []
        if (let1DataPaperContent && let1DataPaperContent.associationPaperId) {
          // 获取关联检查方案文书：
          paper22 = wkPaper.filter(item => item.paperId === let1DataPaperContent.associationPaperId.paper22Id)
          // 获取关联检查方案复查文书：
          paper22AssociationPaper = wkPaper.filter(item => {
            if (item.paperContent) {
              let paperContent = JSON.parse(item.paperContent) 
              if (paperContent.associationPaperId && paperContent.associationPaperId.paper22Id) {
                if (paperContent.associationPaperId.paper22Id === let1DataPaperContent.associationPaperId.paper22Id
                  && item.paperType === '42') {
                  return item
                }
              }
            }
          })
        }
        // 获取所有关联同一笔录文书的文书
        let paperList = wkPaper.filter(item => {
          if (item.paperContent) {
            let paperContent = JSON.parse(item.paperContent) 
            if (paperContent.associationPaperId && paperContent.associationPaperId.paper1Id) {
              if (paperContent.associationPaperId.paper1Id === selectedPaper.let1Data.paperId) {
                return item
              }
            }
          }
        })
        let allPaper = [...paper22, ...paper1, ...paper22AssociationPaper, ...paperList]
        // 按文书顺序排序
        let orderList = []
        let dictionaryField = `${this.$store.state.user.userType}PaperType`
        for (let i = 0; i < this.$store.state.dictionary[dictionaryField].length; i++) {
          orderList.push(this.$store.state.dictionary[dictionaryField][i].id)
        }
        allPaper.sort((sortbyAsc('paperType', orderList)))
        // 通过所有文书allPaper整理出卷内目录
        for (let i = 0; i < allPaper.length; i++) {
          let item = allPaper[i]
          // 获取文号字段
          let number = getCurPaperDocNumber(item)
          // 获取日期字段
          let createDate = ''
          if (item.createDate) {
            let dateList = item.createDate.split(' ')[0].split('-')
            createDate = `${dateList[0]}年${dateList[1]}月${dateList[2]}日`
          }
          volumesMenuTableData.push({
            sindex: i + 1,
            paperNumber: number,
            title: `国家矿山安全监察${item.name}`,
            date: createDate,
            pageNumber: i + 1,
            note: '',
          })
        }
        if (this.corpData.caseType === "0") {
          let corpBase = await this.getDatabase('baseInfo');
          let corp = await corpBase.find((item) => {
            return item.corpId == this.corpData.corpId;
          });
          // 创建初始版本 */
          // 1.案卷题名: 煤矿名称+隐患描述+案
          // 获取笔录文书中的隐患数据
          
          // let dangerObject = getDangerObject(
          //   let1DataPaperContent.DangerTable.selectedDangerList
          // );
          // cellIdx2String = `${corp.corpName}${dangerObject.dangerString}案。`;
          cellIdx2String =
            this.corpData.caseType === "0"
              ? setDangerTable(
                  let1DataPaperContent.DangerTable,
                  {},
                  {
                    page: "15",
                    key: "cellIdx2",
                    spellString: {
                      corpName: corp.corpName,
                      userGroupName: this.$store.state.user.userGroupName,
                    },
                  }
                )
              : "";
          DangerTable = let1DataPaperContent.DangerTable
            ? setNewDanger(
                selectedPaper.let1Data,
                let1DataPaperContent.DangerTable
              )
            : {};
          associationPaperId = Object.assign({}, this.setAssociationPaperId(let1DataPaperContent.associationPaperId), {
            paper1Id: selectedPaper.let1Data.paperId,
          }) 
          associationPaperOrder = this.setAssociationPaperOrder(let1DataPaperContent.associationPaperOrder)
          associationPaperOrder.push('1')
        } else {
          let corpBase = await this.getDatabase('baseInfo');
          let corp = await corpBase.find((item) => {
            return item.corpId == this.corpData.corpId;
          });
          cellIdx2String = `${corp.corpName}XXX案。`;
        }
      }
      // 起止日期和归档日期默认当天
      let now = new Date();
      let year = now.getFullYear() + ''; //得到年份
      let month = now.getMonth() + 1 + '';//得到月份
      let date = now.getDate() + '';//得到日期
      this.letData = Object.assign({}, this.letData, {
        cellIdx0: cellIdx0String, // 执法单位
        cellIdx1: cellIdx1String, // 案卷类别
        cellIdx2: cellIdx2String, // 案卷题名
        cellIdx3: year,
        cellIdx4: month,
        cellIdx5: date,
        cellIdx11: year,
        cellIdx12: month,
        cellIdx13: date,
        cellIdx17: [], // 编辑目录
        volumesMenuTable: {
          tableData: volumesMenuTableData,
        },
        DangerTable,
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
        if (key === "cellIdx17") {
          this.options[key] = {
            canEdit: true,
            page: "15",
          };
          dataKey = "volumesMenuTable";
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
.show-volumes-menu {
  margin-top: 30px;
}
</style>