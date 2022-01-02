<!-- 行政处罚 一般程序 集体讨论记录 50 -->
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
            <div class="textAlignCenter formHeader1">集体讨论记录</div>
            <div class="docTextarea">
             <span class="no-line">案由：</span>
              <span
                @click="commandFill('cellIdx0', '案由', 'DangerTable')"
              >{{ letData.cellIdx0 ? letData.cellIdx0 : '（点击编辑）'}}</span>
              <div class="line"></div>
            </div>
            <div class="docTextLine">
              讨论时间：
              <div style="flex: 1; display: flex;">
                <div
                  class="line-div center"
                  @click="commandFill('cellIdx1', '年', 'TextItem')"
                >{{ letData.cellIdx1 ? letData.cellIdx1 : 'XX' }}</div>
                <label>年</label>
              </div>
              <div style="flex: 1; display: flex;">
                <div
                  class="line-div center"
                  @click="commandFill('cellIdx2', '月', 'TextItem')"
                >{{ letData.cellIdx2 ? letData.cellIdx2 : 'XX' }}</div>
                <label>月</label>
              </div>
              <div style="flex: 1; display: flex;">
                <div
                  class="line-div center"
                  @click="commandFill('cellIdx3', '日', 'TextItem')"
                >{{ letData.cellIdx3 ? letData.cellIdx3 : 'XX' }}</div>
                <label>日</label>
              </div>
              <div style="flex: 1; display: flex;">
                <div
                  class="line-div center"
                  @click="commandFill('cellIdx4', '时', 'TextItem')"
                >{{ letData.cellIdx4 ? letData.cellIdx4 : 'XX' }}</div>
                <label>时</label>
              </div>
              <div style="flex: 1; display: flex;">
                <div
                  class="line-div center"
                  @click="commandFill('cellIdx5', '分', 'TextItem')"
                >{{ letData.cellIdx5 ? letData.cellIdx5 : 'XX' }}</div>
                <label>分至</label>
              </div>
              <div style="flex: 1; display: flex;">
                <div
                  class="line-div center"
                  @click="commandFill('cellIdx6', '时', 'TextItem')"
                >{{ letData.cellIdx6 ? letData.cellIdx6 : 'XX' }}</div>
                <label>时</label>
              </div>
              <div style="flex: 1; display: flex;">
                <div
                  class="line-div center"
                  @click="commandFill('cellIdx7', '分', 'TextItem')"
                >{{ letData.cellIdx7 ? letData.cellIdx7 : 'XX' }}</div>
                <label>分</label>
              </div>
            </div>
            <div class="docTextarea">
             <span class="no-line">地点：</span>
              <span
                @click="commandFill('cellIdx8', '地点', 'TextItem')"
              >{{ letData.cellIdx8 ? letData.cellIdx8 : '（点击编辑）'}}</span>
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:35%">
                <span class="no-line">主持人：</span>
                <span @click="commandFill('cellIdx9', '主持人', 'TextItem')"
                  >{{ letData.cellIdx9 ? letData.cellIdx9 : "（编辑）" }}
                </span>
              </div>
                <span class="no-line">汇报人：</span>
                <span @click="commandFill('cellIdx10', '汇报人', 'TextItem')">{{
                  letData.cellIdx10 ? letData.cellIdx10 : "（编辑）"
                }}</span>
                <span class="no-line">记录人：</span>
                <span @click="commandFill('cellIdx11', '记录人', 'TextItem')">{{
                  letData.cellIdx11 ? letData.cellIdx11 : "（编辑）"
                }}</span>
                <div class="line"></div>
                <div class="line1"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line">出席人员姓名以及职务：</span>
              <span
                @click="commandFill('cellIdx12', '出席人员姓名以及职务', 'TextareaItem')"
              >{{ letData.cellIdx12 ? letData.cellIdx12 : '（点击编辑）'}}</span>
              <div class="line"></div>
            </div>
            <div class="docTextarea">
               <span class="no-line">讨论内容：</span>
              <span
                @click="commandFill('cellIdx13', '讨论内容', 'TextareaItem')"
              >{{ letData.cellIdx13 ? letData.cellIdx13 : '（点击编辑）'}}</span>
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line">讨论记录：</span>
              <span
                @click="commandFill('cellIdx14', '讨论记录', 'TextareaItem')"
              >{{ letData.cellIdx14 ? letData.cellIdx14 : '（点击编辑）'}}</span>
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line">结论性意见：</span>
              <span
                @click="commandFill('cellIdx15', '结论性意见', 'TextareaItem')"
              >{{ letData.cellIdx15 ? letData.cellIdx15 : '（点击编辑）'}}</span>
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line">出席人员签名：</span>
              <span
                @click="commandFill('cellIdx16', '出席人员签名', 'TextItem')"
              >{{ letData.cellIdx16 ? letData.cellIdx16 : '（点击编辑）'}}</span>
              <div class="line"></div>
            </div>
            <!-- <table>
		<hr />
		<td class="textAlignLeft">&nbsp;&nbsp;&nbsp;&nbsp;备注：本文书一式两份，一份交被复查单位，一份存档。</td>
            </table>-->
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
import { handleDate } from '@/utils/date'
import associationSelectPaper from '@/components/association-select-paper'
import { setDangerTable } from '@/utils/handlePaperData'
export default {
  name: "Let216",
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
      let db = new GoDB(this.$store.state.DBName);
      let corpBase = db.table("corpBase");
      let corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      // 1.案由内容初始化：煤矿名称+隐患描述+“案”组成
      let let1DataPaperContent = JSON.parse(selectedPaper.let1Data.paperContent)
      // let dangerObject = getDangerObject(let1DataPaperContent.DangerTable.tableData)
      // let cellIdx4String = `${corp.corpName}${dangerObject.dangerString}案。`
      let cellIdx4String = this.corpData.caseType === '0' ?setDangerTable(
          let1DataPaperContent.DangerTable,
          {},
          {
            page: "48",
            key: "cellIdx4",
            spellString: {
              corpName: corp.corpName,
              groupName: this.$store.state.curCase.provinceGroupName,
            },
          }
        ):'';
      await db.close();
      this.letData = {
        cellIdx0: cellIdx4String, // 案由
        cellIdx1: null, // 年
        cellIdx2: null, // 月
        cellIdx3: null, // 日
        cellIdx4: null, // 时
        cellIdx5: null, // 分
        cellIdx6: null, // 时
        cellIdx7: null, // 分
        cellIdx8: null, // 地点
        cellIdx9: null, // 主持人
        cellIdx10: null, // 汇报人
        cellIdx11: null, // 记录人
        cellIdx12: null, // 出席人员姓名以及职务
        cellIdx13: null, // 讨论内容
        cellIdx14: null, // 讨论记录
        cellIdx15: null, // 结论性意见
        cellIdx16: null, // 出席人员签名
        DangerTable: let1DataPaperContent.DangerTable,
        extraData: { // 保存额外拼写的数据内容，用于修改隐患项时回显使用
          corpName: corp.corpName,
          groupName: this.$store.state.curCase.provinceGroupName,
        }
      };
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
        if (key === 'cellIdx0') {
          this.options[key] = {
            page: '48',
            key: key,
            spellString: {
              corpName: this.letData.extraData
            }
          }
          dataKey = 'DangerTable'
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
</style>