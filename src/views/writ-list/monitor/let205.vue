<!-- 行政处罚 一般程序 陈述申辩笔录 30 -->
<template>
  <div style="width: 100%; height: 100%">
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
            <div class="textAlignCenter formHeader2">
              国 家 矿 山 安 全 监 察
              <br />
            </div>
            <div class="textAlignCenter formHeader3">陈 述 申 辩 笔 录</div>
            <div class="docTextLine">
              <label>讨论时间：</label>
              <span
                class="line-div center"
                @click="commandFill('cellIdx0', '年', 'TextItem')"
                >{{ letData.cellIdx0 ? letData.cellIdx0 : "（XX）" }}</span
              >
              <label>年</label>
              <span
                class="line-div center"
                @click="commandFill('cellIdx1', '月', 'TextItem')"
                >{{ letData.cellIdx1 ? letData.cellIdx1 : "（XX）" }}</span
              >
              <label>月</label>
              <span
                class="line-div center"
                @click="commandFill('cellIdx2', '日', 'TextItem')"
                >{{ letData.cellIdx2 ? letData.cellIdx2 : "（XX）" }}</span
              >
              <label>日</label>
              <span
                class="line-div center"
                @click="commandFill('cellIdx3', '时', 'TextItem')"
                >{{ letData.cellIdx3 ? letData.cellIdx3 : "（XX）" }}</span
              >
              <label>时</label>
              <span
                class="line-div center"
                @click="commandFill('cellIdx4', '分', 'TextItem')"
                >{{ letData.cellIdx4 ? letData.cellIdx4 : "（XX）" }}</span
              >
              分至
              <span
                class="line-div center"
                @click="commandFill('cellIdx5', '时', 'TextItem')"
                >{{ letData.cellIdx5 ? letData.cellIdx5 : "（XX）" }}</span
              >
              时
              <span
                class="line-div center"
                @click="commandFill('cellIdx6', '分', 'TextItem')"
                >{{ letData.cellIdx6 ? letData.cellIdx6 : "（XX）" }}</span
              >
              分
            </div>
            <div class="docTextarea">
              <span class="no-line">地&nbsp;&nbsp;&nbsp; 点：</span>
              <span @click="commandFill('cellIdx7', '地点', 'TextItem')">{{
                letData.cellIdx7 ? letData.cellIdx7 : "（点击编辑）"
              }}</span>
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display: inline-block; min-width: 48%">
                <span class="no-line">陈述、申辩人：</span>
                <span
                  @click="commandFill('cellIdx8', '陈述、申辩人', 'TextItem')"
                  >{{
                    letData.cellIdx8 ? letData.cellIdx8 : "（点击编辑）"
                  }}</span
                >
              </div>
              <span class="no-line">性&nbsp;&nbsp;&nbsp;别：</span>
              <span @click="commandFill('cellIdx9', '性别', 'SelectItem')">{{
                letData.cellIdx9 ? letData.cellIdx9 : "（编辑）"
              }}</span>
              <span class="no-line">年&nbsp;&nbsp;&nbsp;龄：</span>
              <span @click="commandFill('cellIdx10', '年龄', 'TextItem')">{{
                letData.cellIdx10 ? letData.cellIdx10 : "（编辑）"
              }}</span>
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display: inline-block; min-width: 48%">
                <span class="no-line">工作单位：</span>
                <span @click="commandFill('cellIdx11', '工作单位', 'TextItem')"
                  >{{ letData.cellIdx11 ? letData.cellIdx11 : "（点击编辑）" }}
                </span>
              </div>
              <span class="no-line">职务（职业）：</span>
              <span
                @click="commandFill('cellIdx12', '职务（职业）', 'TextItem')"
                >{{
                  letData.cellIdx12 ? letData.cellIdx12 : "（点击编辑）"
                }}</span
              >
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display: inline-block; min-width: 48%">
                <span class="no-line">住&nbsp;&nbsp;&nbsp;&nbsp;址：</span>
                <span @click="commandFill('cellIdx13', '住址', 'TextItem')"
                  >{{ letData.cellIdx13 ? letData.cellIdx13 : "（点击编辑）" }}
                </span>
              </div>
              <span class="no-line">电&nbsp;&nbsp;&nbsp;&nbsp;话：</span>
              <span @click="commandFill('cellIdx14', '电话', 'TextItem')">{{
                letData.cellIdx14 ? letData.cellIdx14 : "（点击编辑）"
              }}</span>
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display: inline-block; min-width: 48%">
                <span class="no-line">承办人（签名）：</span>
                <span
                  @click="
                    commandFill('cellIdx15', '承办人（签名）', 'TextItem')
                  "
                  >{{ letData.cellIdx15 ? letData.cellIdx15 : "（点击编辑）" }}
                </span>
              </div>
              <span class="no-line">记录人（签名）：</span>
              <span
                @click="commandFill('cellIdx17', '记录人（签名）', 'TextItem')"
                >{{
                  letData.cellIdx17 ? letData.cellIdx17 : "（点击编辑）"
                }}</span
              >
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              陈述、申辩记录：我们是
              <span
                class="no-underline"
                @click="commandFill('cellIdx18', '执法人员', 'TextItem')"
                >{{
                  letData.cellIdx18 ? letData.cellIdx18 : "（点击编辑）"
                }}</span
              >
              监察员，这是我们的证件（出示证件）。现对
              <span
                @click="commandFill('cellIdx19', '违法行为', 'TextareaItem')"
                >{{
                  letData.cellIdx19 ? letData.cellIdx19 : "（点击编辑）"
                }}</span
              >
              听取你
              <span class="no-underline">{{
                letData.cellIdx20 ? letData.cellIdx20 : "（点击编辑）"
              }}</span>
              的陈述、申辩。
            </div>
            <div
              style="
                word-wrap: break-word;
                word-break: break-all;
                overflow: hidden;
              "
              class="cellInput mutiLineArea"
              @click="commandFill('cellIdx21', '陈述申辩内容', 'TextareaItem')"
            >
              <div
                v-if="letData.cellIdx21 && letData.cellIdx21.length > 0"
                style="position: relative"
              >
                <p class="show-area-item-p">
                  <span style="padding: 7px">{{
                    letData.cellIdx21 ? letData.cellIdx21 : "（点击编辑）"
                  }}</span>
                </p>
                <div
                  v-for="(item, index) in 100"
                  :key="index"
                  class="cellLine"
                  :style="`top: ${(index + 1) * 9.54}mm;`"
                ></div>
              </div>
              <div v-else>
                <p class="show-area-item-p">&nbsp;</p>
                <p class="show-area-item-p">&nbsp;</p>
              </div>
            </div>
            <div class="docTextarea" style="border-top: 2px solid #000">
              备注：陈述、申辩人应在过目笔录后，签署意见，并签名押印。
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
import { setNewDanger } from "@/utils/setInitPaperData";
import associationSelectPaper from "@/components/association-select-paper";
import { setDangerTable } from "@/utils/handlePaperData";
export default {
  name: "Let205",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {},
      options: {
        cellIdx9: [
          {
            value: "男",
            name: "男",
          },
          {
            value: "女",
            name: "女",
          },
        ],
        cellIdx19: {
          page: "30",
          key: "cellIdx19", // 用来区分一个页面多个地方调用隐患大表，最后返回值
        },
        cellIdx20: [
          {
            value: "单位",
            name: "单位",
          },
          {
            value: "个人",
            name: "个人",
          },
        ],
      },
      associationPaper: ["6"],
    };
  },
  methods: {
    async initLetData(selectedPaper) {
      let db = new GoDB(this.$store.state.DBName);
      let corpBase = db.table("corpBase");
      let corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      // 1.时间：当前年、月、日、时、分
      let now = new Date();
      let cellIdx0Year = now.getFullYear().toString();
      let cellIdx1Month = (now.getMonth() + 1).toString();
      let cellIdx2Date = now.getDate().toString();
      let cellIdx3Hour = now.getHours().toString();
      let cellIdx4Minu = now.getMinutes().toString();
      // 2.工作单位：煤矿名称
      let cellIdx11String = corp.corpName;
      // 3.监察单位
      let cellIdx18String = this.$store.state.curCase.provinceGroupName;
      // 获取笔录文书中的隐患数据
      // 4.陈述申辩：煤矿名称 + '涉嫌' + 隐患描述 + '案。'
      // 5.单位/个人：从行政处罚告知书(paperType === '6')中获取
      let let6DataPaperContent = JSON.parse(
        selectedPaper.let6Data.paperContent
      );
      // let dangerObject = this.corpData.caseType === '0' ? getDangerObject(
      //   let6DataPaperContent.DangerTable.selectedDangerList
      // ) : null;
      // let cellIdx19String = this.corpData.caseType === '0' ? `${corp.corpName}涉嫌${dangerObject.dangerString}案。` : ''
      let cellIdx19String =
        this.corpData.caseType === "0"
          ? setDangerTable(
              let6DataPaperContent.DangerTable,
              {},
              {
                page: "30",
                key: "cellIdx19",
                spellString: {
                  corpName: corp.corpName,
                  groupName: this.$store.state.curCase.provinceGroupName,
                },
              }
            )
          : "";
      let DangerTable = null;
      if (this.corpData.caseType === "0") {
        DangerTable = let6DataPaperContent.DangerTable
          ? setNewDanger(
              selectedPaper.let6Data,
              let6DataPaperContent.DangerTable
            )
          : {};
      }
      await db.close();
      /* let let204Data = await wkPaper.find(
          (item) => item.caseId === caseId && item.paperType === "6"
        );
        let let204DataPaperContent = JSON.parse(let204Data.paperContent);
        let cellIdx20String = let204DataPaperContent.cellIdx5; */
      let cellIdx20String = let6DataPaperContent.selectedType
        ? let6DataPaperContent.selectedType
        : "";
      this.letData = {
        cellIdx0: cellIdx0Year, // 年
        cellIdx0TypeTextItem: cellIdx0Year, // 年
        cellIdx1: cellIdx1Month, // 月
        cellIdx1TypeTextItem: cellIdx1Month, // 月
        cellIdx2: cellIdx2Date, // 日
        cellIdx2TypeTextItem: cellIdx2Date, // 日
        cellIdx3: cellIdx3Hour, // 时
        cellIdx3TypeTextItem: cellIdx3Hour, // 时
        cellIdx4: cellIdx4Minu, // 分
        cellIdx4TypeTextItem: cellIdx4Minu, // 分
        cellIdx5: null, // 时
        cellIdx6: null, // 分
        cellIdx7: null, // 地点
        cellIdx8: null, // 陈述申辩人
        cellIdx9: null, // 性别
        cellIdx10: null, // 年龄
        cellIdx11: cellIdx11String, // 工作单位
        cellIdx11TypeTextItem: cellIdx11String, // 工作单位
        cellIdx12: null, // 职务（职业）
        cellIdx13: null, // 邮政编码
        cellIdx14: null, // 电话
        cellIdx15: null, // 承办人（签名）
        // cellIdx16: null, // 承办人（签名）   暂不用
        cellIdx17: null, // 记录人（签名）
        cellIdx18: cellIdx18String, // 监察员
        cellIdx18TypeTextItem: cellIdx18String, // 监察员
        cellIdx19: cellIdx19String, // 违法行为
        cellIdx20: cellIdx20String, // 单位/个人
        cellIdx20TypeTextItem: cellIdx20String, // 单位/个人
        cellIdx21: null, // 法制审核意见
        DangerTable: DangerTable,
        extraData: {
          // 保存额外拼写的数据内容，用于修改隐患项时回显使用
          corpName: corp.corpName,
          groupName: this.$store.state.curCase.provinceGroupName,
        },
        selectedType: let6DataPaperContent.selectedType,
        associationPaperId:
          this.corpData.caseType === "0"
            ? {
                // 关联的paperId
                paper22Id: let6DataPaperContent.associationPaperId.paper22Id,
                paper1Id: let6DataPaperContent.associationPaperId.paper1Id,
                paper6Id: selectedPaper.let6Data.paperId,
              }
            : {
                paper6Id: selectedPaper.let6Data.paperId,
              },
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
        // if (key === "cellIdx19") {
        //   this.options[key] = {
        //     page: "30",
        //     key: key,
        //     spellString: this.letData.extraData,
        //   };
        //   dataKey = "DangerTable";
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