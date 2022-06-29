<!-- 行政强制 公开裁定 执法案件公开裁定记录 31 -->
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
            <div class="textAlignCenter formHeader2">
              国 家 矿 山 安 全 监 察
              <br />
            </div>
            <div class="textAlignCenter formHeader3">
              执 法 案 件 公 开 裁 定 记 录
            </div>
            <div class="docTextLine">
              裁定时间：
              <div style="flex: 1; display: flex">
                <div
                  class="line-div center"
                  @click="commandFill('cellIdx0', '年', 'TextItem')"
                >
                  {{ letData.cellIdx0 ? letData.cellIdx0 : "XX" }}
                </div>
                <label>年</label>
              </div>
              <div style="flex: 1; display: flex">
                <div
                  class="line-div center"
                  @click="commandFill('cellIdx1', '月', 'TextItem')"
                >
                  {{ letData.cellIdx1 ? letData.cellIdx1 : "XX" }}
                </div>
                <label>月</label>
              </div>
              <div style="flex: 1; display: flex">
                <div
                  class="line-div center"
                  @click="commandFill('cellIdx2', '日', 'TextItem')"
                >
                  {{ letData.cellIdx2 ? letData.cellIdx2 : "XX" }}
                </div>
                <label>日</label>
              </div>
              <div style="flex: 1; display: flex">
                <div
                  class="line-div center"
                  @click="commandFill('cellIdx3', '时', 'TextItem')"
                >
                  {{ letData.cellIdx3 ? letData.cellIdx3 : "XX" }}
                </div>
                <label>时</label>
              </div>
              <div style="flex: 1; display: flex">
                <div
                  class="line-div center"
                  @click="commandFill('cellIdx4', '分', 'TextItem')"
                >
                  {{ letData.cellIdx4 ? letData.cellIdx4 : "XX" }}
                </div>
                <label>分至</label>
              </div>
              <div style="flex: 1; display: flex">
                <div
                  class="line-div center"
                  @click="commandFill('cellIdx5', '时', 'TextItem')"
                >
                  {{ letData.cellIdx5 ? letData.cellIdx5 : "XX" }}
                </div>
                <label>时</label>
              </div>
              <div style="flex: 1; display: flex">
                <div
                  class="line-div center"
                  @click="commandFill('cellIdx6', '分', 'TextItem')"
                >
                  {{ letData.cellIdx6 ? letData.cellIdx6 : "XX" }}
                </div>
                <label>分</label>
              </div>
            </div>
            <div class="docTextarea">
              <span class="no-line">裁定地点：</span>
              <span @click="commandFill('cellIdx7', '裁定地点', 'TextItem')">{{
                letData.cellIdx7 ? letData.cellIdx7 : "（点击编辑）"
              }}</span>
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line">裁定事项：</span>
              <span
                @click="commandFill('cellIdx8', '裁定事项', 'TextareaItem')"
                >{{
                  letData.cellIdx8 ? letData.cellIdx8 : "（点击编辑）"
                }}</span
              >
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display: inline-block; min-width: 50%">
                <span class="no-line">裁定主持人（签名）：</span>
                <span
                  @click="
                    commandFill('cellIdx9', '裁定主持人（签名）', 'TextItem')
                  "
                  >{{ letData.cellIdx9 ? letData.cellIdx9 : "（点击编辑）" }}
                </span>
              </div>
              <span class="no-line">记录人（签名）：</span>
              <span
                @click="commandFill('cellIdx10', '记录人（签名）', 'TextItem')"
                >{{
                  letData.cellIdx10 ? letData.cellIdx10 : "（点击编辑）"
                }}</span
              >
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line">被裁定单位负责人（签名）：</span>
              <span
                @click="
                  commandFill(
                    'cellIdx11',
                    '被裁定单位负责人（签名）',
                    'TextItem'
                  )
                "
                >{{
                  letData.cellIdx11 ? letData.cellIdx11 : "（点击编辑）"
                }}</span
              >
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line">其他单位参加人员（签名）：</span>
              <span
                @click="
                  commandFill(
                    'cellIdx12',
                    '其他单位参加人员（签名）',
                    'TextItem'
                  )
                "
                >{{
                  letData.cellIdx12 ? letData.cellIdx12 : "（点击编辑）"
                }}</span
              >
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line">裁定记录：</span>
            </div>
            <div
              style="
                word-wrap: break-word;
                word-break: break-all;
                overflow: hidden;
              "
              class="cellInput mutiLineArea"
              @click="commandFill('cellIdx13', '裁定记录', 'TextareaItem')"
            >
              <div
                v-if="letData.cellIdx13 && letData.cellIdx13.length > 0"
                style="position: relative"
              >
                <p class="show-area-item-p">
                  <span style="padding: 7px">{{
                    letData.cellIdx13 ? letData.cellIdx13 : "（点击编辑）"
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
                <p
                  v-for="(item, index) in 8"
                  :key="index"
                  class="show-area-item-p"
                >&nbsp;</p>
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
import { setNewDanger } from "@/utils/setInitPaperData";
import associationSelectPaper from "@/components/association-select-paper";
import { setDangerTable } from "@/utils/handlePaperData";
export default {
  name: "Let300",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {
        cellIdx0: null, // 年
        cellIdx1: null, // 月
        cellIdx2: null, // 日
        cellIdx3: null, // 时
        cellIdx4: null, // 分
        cellIdx5: null, // 时
        cellIdx6: null, // 分
        cellIdx7: null, // 裁定地点
        cellIdx8: null, // 裁定事项
        cellIdx9: null, // 裁定主持人（签名）
        cellIdx10: null, // 记录人（签名）
        cellIdx11: null, // 被裁定单位负责人（签名）
        cellIdx12: null, // 其他单位参加人员（签名）
        cellIdx13: null, // 裁定记录
        extraData: null,
        DangerTable: null, // 隐患项大表
        associationPaperId: null,
        associationPaperOrder: []
      },
      options: {},
      associationPaper: ["1"],
    };
  },
  methods: {
    async initLetData(selectedPaper) {
      let corpBase = await this.getDatabase('baseInfo');
      let corp = corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      // 创建初始版本
      // 1.裁定时间：
      let now = new Date();
      let cellIdx0Year = now.getFullYear().toString();
      let cellIdx1Month = (now.getMonth() + 1).toString();
      let cellIdx2Date = now.getDate().toString();
      let cellIdx3Hour = now.getHours().toString();
      let cellIdx4Minu = now.getMinutes().toString();
      // 2.裁定地点：企业名称
      // 3.裁定事项：煤矿名称+“涉嫌”+隐患描述+“案”
      // 获取笔录文书中的隐患数据
      let let1DataPaperContent =
        this.corpData.caseType === "0"
          ? JSON.parse(selectedPaper.let1Data.paperContent)
          : null;
      // let dangerObject = this.corpData.caseType === '0' ? getDangerObject(
      //   let1DataPaperContent.DangerTable.selectedDangerList
      // ) : null;
      // let cellIdx8String = this.corpData.caseType === '0' ? `${corp.corpName}涉嫌${dangerObject.dangerString}案。` : `${corp.corpName}涉嫌XXX案。`
      let cellIdx8String =
        this.corpData.caseType === "0"
          ? setDangerTable(
              let1DataPaperContent.DangerTable,
              {},
              {
                page: "31",
                key: "cellIdx8",
                spellString: {
                  corpName: corp.corpName,
                  groupName: this.$store.state.curCase.provinceGroupName,
                },
              }
            )
          : "";
      let cellIdx13String = `主持人：现在公开裁定开始，首先我先介绍裁定小组成员，我是主持人XXX，记录人是XXX，裁定小组成员有监察分局XXX、XXX。
      主持人：XX煤矿矿长XXX，参加公开裁定的人员是否与你矿有利害关系人员，是否申请回避？
      XX煤矿矿长XXX：不申请回避。
      主持人：现在宣布会场纪律、当事人享有的权利和义务（内容略）。
      主持人：下面请案件承办人XXX陈述案件调查情况。
      案件承办人XXX：20XX年XX月XX日，XX煤矿安全监察局XX监察分局的煤矿安全监察员XXX、XXX……，按照月度监察执法计划对XX公司XX煤矿进行现场检查时发现XX采煤工作面回风巷风流中瓦斯浓度达1.2%，未停止作业，作出了责令立即停止生产，撤出作业人员的现场处理决定。20XX年XX月XX日，经XX煤矿安全监察局XX监察分局负责人XXX批准，决定对该涉嫌违法违规行为进行立案调查，并指定由XXX、XXX两名执法人员承办。案件承办人对XXX、XXX 、XXX和XXX等4人进行调查取证，制作了调查取证笔录，收集了该矿瓦斯监控日报、生产调度台账和调度电话录音等其他证据材料。这是收集的证据。经过调查认定违法事实清楚，违反了《国务院关于预防煤矿生产安全事故的特别规定》第八条第二款第（二）项的规定。
      主持人：请XX煤矿矿长XXX陈述申辩。
      XX煤矿矿长XXX：20XX年XX月XX日，XX煤矿安全监察局XX监察分局的煤矿安全监察员XXX、XXX……，到我矿检查时发现XX采煤工作面回风巷风流中瓦斯浓度达1.2%，未停止作业，我承认这个事故隐患存在。但是我矿对XX采煤工作面采取了区域防突措施、达标评判合格以后，瓦斯含量不高，只是最近这段时间，因为煤层稍微变厚的一些，造成了采空区瓦斯涌出量变大，回风上隅角瓦斯偶尔会超过规定，我们加大了XX采煤工作面的风量，制定了埋管抽放采空区瓦斯等一些措施计划，还没有来得及实施。上隅角瓦斯只是偶尔会超限，不是一直超限，只是你们来检查时，恰好遇到瓦斯超限的情况，超限的数值也不是很大。你们检查发现这个问题后，我们立即将工作面停了下来，彻底进行瓦斯治理，确保瓦斯不超限。
      主持人：案件承办人，你们还有要陈述的吗？
      案件承办人XXX、XXX：没有了。
      主持人：陈述、申辩结束，下面裁定小组集体研究。
      主持人：经过我们裁定小组集体研究，现宣布裁定结果： XX煤矿涉嫌瓦斯超限作业违法违规行为事实清楚，证据确凿充分，违反了《国务院关于预防煤矿生产安全事故的特别规定》第八条第二款第（二）项的规定，依据《国务院关于预防煤矿生产安全事故的特别贵的》第十条第一款、第十一条第一款的规定，并根据违法违规情节的轻重，拟给予责令停产整顿X日，罚款八十万元整，暂扣安全生产许可证；对煤矿企业负责人罚款四万元以整。
      `;
      let DangerTable = null;
      if (this.corpData.caseType === "0") {
        DangerTable = let1DataPaperContent.DangerTable
          ? setNewDanger(
              selectedPaper.let1Data,
              let1DataPaperContent.DangerTable, 
              this.paperId
            )
          : {};
      }
      let associationPaperId = Object.assign({}, this.setAssociationPaperId(let1DataPaperContent.associationPaperId), {
        paper1Id: selectedPaper.let1Data.paperId,
      }) 
      let associationPaperOrder = this.setAssociationPaperOrder(let1DataPaperContent.associationPaperOrder)
      associationPaperOrder.push('1')
      this.letData = Object.assign({}, this.letData, {
        cellIdx0: cellIdx0Year, // 年
        cellIdx1: cellIdx1Month, // 月
        cellIdx2: cellIdx2Date, // 日
        cellIdx3: cellIdx3Hour, // 时
        cellIdx4: cellIdx4Minu, // 分
        cellIdx7: corp.corpName, // 裁定地点
        cellIdx8: cellIdx8String, // 裁定事项
        cellIdx13: cellIdx13String, // 裁定记录 22.3.3恢复
        extraData: {
          // 保存额外拼写的数据内容，用于修改隐患项时回显使用
          corpName: corp.corpName,
          groupName: this.$store.state.curCase.provinceGroupName,
        },
        DangerTable, // 隐患项大表
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
        let spellString = {};
        if (key === "cellIdx8") {
          spellString = {
            corpName: this.letData.extraData.corpName,
          };
        }
        // if (key === "cellIdx8") {
        //   this.options[key] = {
        //     page: "31",
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