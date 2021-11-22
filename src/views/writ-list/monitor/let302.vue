<!-- 行政强制 行政复议 行政复议申请笔录 10 -->
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
            <div class="textAlignCenter formHeader3">
              行 政 复 议 申 请 笔 录
            </div>
            <div class="docTextLine">
              申请时间：
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
                <label>分</label>
              </div>
            </div>
            <div class="docTextarea">
              <span class="no-line">申请地点：</span>
              <span @click="commandFill('cellIdx5', '申请地点', 'TextItem')">{{
                letData.cellIdx5 ? letData.cellIdx5 : "（点击编辑）"
              }}</span>
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:50%">
                <span class="no-line">申请人姓名：</span>
                <span @click="commandFill('cellIdx6', '申请人姓名', 'TextItem')"
                  >{{ letData.cellIdx6 ? letData.cellIdx6 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">性别：</span>
                <span @click="commandFill('cellIdx7', '性别', 'SelectItem')">{{
                  letData.cellIdx7 ? letData.cellIdx7 : "（点击编辑）"
                }}</span>
                <span class="no-line">年龄：</span>
                <span @click="commandFill('cellIdx8', '年龄', 'TextItem')">{{
                  letData.cellIdx8 ? letData.cellIdx8 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
                <div class="line1"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line">申请人单位：</span>
              <span
                @click="commandFill('cellIdx9', '申请人单位', 'TextItem')"
                >{{
                  letData.cellIdx9 ? letData.cellIdx9 : "（点击编辑）"
                }}</span
              >
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:50%">
                <span class="no-line">职务（职业）：</span>
                <span @click="commandFill('cellIdx10', '职务（职业）', 'TextItem')"
                  >{{ letData.cellIdx10 ? letData.cellIdx10 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">电话：</span>
                <span @click="commandFill('cellIdx11', '电话', 'DateItem')">{{
                  letData.cellIdx11 ? letData.cellIdx11 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line">申请人住址：</span>
              <span
                @click="commandFill('cellIdx12', '申请人住址', 'TextItem')"
                >{{
                  letData.cellIdx12 ? letData.cellIdx12 : "（点击编辑）"
                }}</span
              >
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line">记录人（签名）：</span>
              <span
                @click="commandFill('cellIdx13', '记录人（签名）', 'TextItem')"
                >{{
                  letData.cellIdx13 ? letData.cellIdx13 : "（点击编辑）"
                }}</span
              >
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line">申请记录：</span>
            </div>
            <div
              style="
                word-wrap: break-word;
                word-break: break-all;
                overflow: hidden;
              "
              class="cellInput mutiLineArea"
               @click="commandFill('cellIdx14', '申请记录', 'TextareaItem')"
            >
              <div
                v-if="letData.cellIdx14 && letData.cellIdx14.length > 0"
                style="position: relative"
              >
                <p class="show-area-item-p">
                  <span style="padding: 7px">{{
                    letData.cellIdx14 ? letData.cellIdx14 : "（点击编辑）"
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
import { getDocNumber, getDangerObject } from "@/utils/setInitPaperData";
import associationSelectPaper from "@/components/association-select-paper";
export default {
  name: "Let302",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {},
      options: {
        cellIdx7: [
          {
            value: '男',
            name: '男'
          },
          {
            value: '女',
            name: '女'
          },
        ]
      },
      associationPaper: ["8"],
    };
  },
  methods: {
    async initLetData(selectedPaper) {
      const db = new GoDB(this.$store.state.DBName);
      const corpBase = db.table("corpBase");
      const corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      // 创建初始版本
      // 1.时间：当前年、月、日、时、分
      let now = new Date();
      // 1.时间
      // 2.申请人单位
      // 3.申请记录：“我代表”+煤矿名称+“对”+机构名称+“做出的行政处罚决定”+文书编号（行政处罚决定）+“申请行政复议，对处罚的”+隐患描述+“违法行为进行复议。我矿认为......。请求从轻或者免于处罚。”
      let let8DataPapaerContent = JSON.parse(
        selectedPaper.let8Data.paperContent
      );
      let dangerObject = getDangerObject(
        let8DataPapaerContent.DangerTable.tableData
      );
      let paper8number = `${let8DataPapaerContent.cellIdx0}矿安监${let8DataPapaerContent.cellIdx1}罚〔${let8DataPapaerContent.cellIdx2}〕${let8DataPapaerContent.cellIdx3}号`
      let cellIdx14String = `我代表${corp.corpName}对${this.$store.state.user.userGroupName}做出的行政处罚决定${paper8number}申请行政复议，对处罚的${dangerObject.dangerString}违法行为进行复议。我矿认为......。请求从轻或者免于处罚。`;
      await db.close();
      this.letData = {
        cellIdx0: now.getFullYear().toString(), // 年
        cellIdx0TypeTextItem: now.getFullYear().toString(), // 年
        cellIdx1: (now.getMonth() + 1).toString(), // 月
        cellIdx1TypeTextItem: (now.getMonth() + 1).toString(), // 月
        cellIdx2: now.getDate().toString(), // 日
        cellIdx2TypeTextItem: now.getDate().toString(), // 日
        cellIdx3: now.getHours().toString(), // 时
        cellIdx3TypeTextItem: now.getHours().toString(), // 时
        cellIdx4: now.getMinutes().toString(), // 分
        cellIdx4TypeTextItem: now.getMinutes().toString(), // 分
        cellIdx5: null, // 申请地点
        cellIdx6: null, // 申请人姓名
        cellIdx7: null, // 性别
        cellIdx8: null, // 年龄
        cellIdx9: corp.corpName, // 申请人单位
        cellIdx9TypeTextItem: corp.corpName, // 申请人单位
        cellIdx10: null, // 职务（职业）
        cellIdx11: null, // 电话
        cellIdx12: null, // 申请人住址
        cellIdx13: null, // 记录人（签名）
        cellIdx14: cellIdx14String, // 申请记录
        cellIdx14TypeTextareaItem: cellIdx14String, // 申请记录
        DangerTable: let8DataPapaerContent.DangerTable,
        extraData: {
          // 保存额外拼写的数据内容，用于修改隐患项时回显使用
          corpName: corp.corpName,
          userGroupName: this.$store.state.user.userGroupName,
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