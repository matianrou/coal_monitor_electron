<!-- 行政处罚 案件结案 '执法案卷（首页）及目录 -->
<template>
  <div style="width: 100%; height: 100%;">
    <let-main
      ref="letMain"
      :corp-data="corpData"
      :doc-data="docData"
      :let-data="letData"
      :edit-data="paperData"
      @go-back="goBack"
    >
      <div slot="left">
        <div class="page page-sizeA4">
          <div>
            <div class="stdRowH"></div>
            <div class="textAlignCenter formHeader0" style="font-size:30px">煤矿安全监管行政执法文书</div>
            <div class="textAlignCenter formHeader1" style="font-size:30px">执法案卷首页</div>
            <div class="halfRowH"></div>
            <table class="docBody" style="border:solid 1.5px #000;">
              <tr style="height:3cm;">
                <td
                  style="width:30mm;height:30mm"
                  class="textAlignCenter cellBottomLine cellRightLine"
                >
                  <br />执法单位
                </td>
                <td
                  style="width:124mm;height:30mm"
                  class="cellInput cellBottomLine textPaddingLeft"
                  id="cell_idx_0"
                  align="center"
                  data-title="执法单位"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx0', '执法单位', 'TextItem')"
                >{{letData.cellIdx0}}</td>
              </tr>
              <tr style="height:5cm;">
                <td
                  style="width:30mm;height:50mm"
                  class="textAlignCenter cellBottomLine cellRightLine"
                >
                  <br />
                  <br />案卷类别
                </td>
                <td
                  style="width:124mm;height:50mm"
                  class="cellInput cellBottomLine textPaddingLeft"
                  id="cell_idx_1"
                  align="center"
                  data-title="案卷类别"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx1', '案卷类别', 'TextItem')"
                >{{letData.cellIdx1}}</td>
              </tr>
              <tr style="height:6cm;">
                <td style="width:30mm;height:120mm" class="textAlignCenter cellRightLine">
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />案卷题名
                </td>
                <td
                  style="width:124mm;height:120mm"
                  class="cellInput textPaddingLeft"
                  id="cell_idx_2"
                  align="center"
                  data-title="案卷题名"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx2', '案卷题名', 'TextareaItem')"
                >{{letData.cellIdx2}}</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td class="textPaddingLeft">起止日期：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_3"
                  align="center"
                  style="width:10%"
                  data-title="年"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx3', '年', 'TextItem')"
                >{{letData.cellIdx3}}</td>
                <td class="textAlignLeft">年</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_4"
                  align="center"
                  style="width:9%"
                  data-title="月"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx4', '月', 'TextItem')"
                >{{letData.cellIdx4}}</td>
                <td class="textAlignLeft">月</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_5"
                  align="center"
                  style="width:9%"
                  data-title="日"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx5', '日', 'TextItem')"
                >{{letData.cellIdx5}}</td>
                <td
                  class="textAlignLeft" style="width:16%"
                >&nbsp;&nbsp;&nbsp;日&nbsp;&nbsp;&nbsp;至&nbsp;&nbsp;&nbsp;</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_6"
                  align="center"
                  style="width:10%"
                  data-title="年"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx6', '年', 'TextItem')"
                >{{letData.cellIdx6}}</td>
                <td class="textAlignLeft">年</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_7"
                  align="center"
                  style="width:9%"
                  data-title="月"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx7', '月', 'TextItem')"
                >{{letData.cellIdx7}}</td>
                <td class="textAlignLeft">月</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_8"
                  align="center"
                  style="width:9%"
                  data-title="日"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx8', '日', 'TextItem')"
                >{{letData.cellIdx8}}</td>
                <td class="textAlignLeft">日</td>
              </tr>
              <tr>
                <td class="textPaddingLeft">本卷共：&nbsp;&nbsp;</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_9"
                  align="center"
                  style="width:10%"
                  data-type="textarea"
                  data-src
                  @click="commandFill('cellIdx9', '件', 'TextItem')"
                >{{letData.cellIdx9}}</td>
                <td class="textAlignLeft">件</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_10"
                  align="center"
                  style="width:9%"
                  data-type="textarea"
                  data-src
                  @click="commandFill('cellIdx10', '页', 'TextItem')"
                >{{letData.cellIdx10}}</td>
                <td class="textAlignLeft">页</td>
                <td
                  class="textPaddingLeft" style="width:25%"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;归 档 日 期：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_11"
                  align="center"
                  style="width:10%"
                  data-title="年"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx11', '年', 'TextItem')"
                >{{letData.cellIdx11}}</td>
                <td class="textAlignLeft">年</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_12"
                  align="center"
                  style="width:9%"
                  data-title="月"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx12', '月', 'TextItem')"
                >{{letData.cellIdx12}}</td>
                <td class="textAlignLeft">月</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_13"
                  align="center"
                  style="width:9%"
                  data-title="日"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx13', '日', 'TextItem')"
                >{{letData.cellIdx13}}</td>
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
                >{{letData.cellIdx14 ? letData.cellIdx14 : "（点击编辑）"}}</span>
              <div class="line"></div>
            </div>
            <div class="docTextLine">
              <div style="flex: 1; display: flex;">
                <label>档号：&nbsp;&nbsp;</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx15', '档号', 'TextItem')"
                >{{ letData.cellIdx15 ? letData.cellIdx15 : '（点击编辑）' }}</div>
              </div>
              <div style="flex: 1; display: flex;">
                <label>&nbsp;&nbsp;保管期限：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx16', '保管期限', 'TextItem')"
                >{{ letData.cellIdx16 ? letData.cellIdx16 : '（点击编辑）' }}</div>
              </div>
            </div>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              @click="commandFill('cellIdx17', '编辑目录', 'VolumesMenuTable')">
              <div style="margin-top: 10px; margin-bottom: 20px;">
                <div v-if="letData.cellIdx17 && letData.cellIdx17.length > 0" class="show-volumes-menu">
                  <div style="text-align: center; font-size: 20px; font-weight: 500;"><span>档案卷内目录</span></div>
                  <el-table
                    :data="letData.cellIdx17"
                    stripe
                    border
                    style="width: 100%;"
                    :header-cell-style="{background: '#f5f7fa', color: '#000'}">
                    <el-table-column
                      label="序号"
                      type="index"
                      width="50">
                    </el-table-column>
                    <el-table-column
                      prop="paperNumber"
                      label="文号"
                      header-align="center"
                      align="center">
                    </el-table-column>
                    <el-table-column
                      prop="title"
                      label="题名"
                      header-align="center"
                      align="center">
                    </el-table-column>
                    <el-table-column
                      prop="date"
                      header-align="center"
                      align="center"
                      width="190"
                      label="日期">
                    </el-table-column>
                    <el-table-column
                      prop="pageNumber"
                      header-align="center"
                      align="center"
                      width="100"
                      label="页号">
                    </el-table-column>
                    <el-table-column
                      prop="note"
                      header-align="center"
                      align="center"
                      label="备注">
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
      :visible="visible.selectPaper"
      title="关联文书选择"
      :paper-list="paperList"
      @close="closeDialog"
      @confirm-paper="confirmPaper"
    ></select-paper>
  </div>
</template>

<script>
import GoDB from "@/utils/godb.min.js";
import { getDangerObject } from '@/utils/setInitPaperData'
import associationSelectPaper from '@/components/association-select-paper'
export default {
  name: "Let214",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {},
      options: {},
      associationPaper: ['1']
    };
  },
  methods: {
    async initLetData (selectedPaper) {
      const db = new GoDB(this.$store.state.DBName);
      const corpBase = db.table("corpBase");
      const corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      // 1.案卷题名: 煤矿名称+隐患描述+案
      // 获取笔录文书中的隐患数据
      let let1DataPapaerContent = JSON.parse(selectedPaper.let1Data.paperContent)
      let dangerObject = getDangerObject(let1DataPapaerContent.dangerItemObject.tableData)
      let cellIdx2String = `${corp.corpName}${dangerObject.dangerString}案。`
      await db.close();
      this.letData = {
        cellIdx0: null, // 执法单位
        cellIdx1: null, // 案卷类别
        cellIdx2: cellIdx2String, // 案卷题名
        cellIdx2TypeTextareaItem: cellIdx2String, // 案卷题名
        cellIdx3: null, // 年
        cellIdx4: null, // 月
        cellIdx5: null, // 日
        cellIdx6: null, // 年
        cellIdx7: null, // 月
        cellIdx8: null, // 日
        cellIdx9: null, // 本卷共X件
        cellIdx10: null, // X页
        cellIdx11: null, // 年
        cellIdx12: null, // 月
        cellIdx13: null, // 日
        cellIdx14: null, // 承办人（签名）
        cellIdx15: null, // 档号
        cellIdx16: null, // 保管期限
        cellIdx17: [], // 编辑目录
        volumesMenuTable: {
          tableData: []
        }
      };
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
        if (key === 'cellIdx17') {
          this.options[key] = {
            canEdit: true,
            page: '15',
          }
          dataKey = 'volumesMenuTable'
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
  /deep/ .el-table td {
    border-color: #606266!important;
  }
  /deep/ .el-table th.is-leaf {
  border-color: #606266!important;
  }
  /deep/ .el-table--border {
    border-color: #606266!important;
  }
  /deep/ .el-table--group {
    border-color: #606266!important;
  }
  /deep/ .el-table--border::after {
    background-color: #606266!important;
  }
  /deep/ .el-table--group::after {
    background-color: #606266!important;
  }
  /deep/ .el-table::before {
    background-color: #606266!important;
  }
}
</style>