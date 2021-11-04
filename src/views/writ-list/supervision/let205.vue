<!-- 行政处罚 听证程序  陈述申辩笔录 30 -->
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
            <div class="textAlignCenter formHeader1">陈述申辩笔录</div>
            <div class="docTextLine">
              时间：
              <div style="flex: 1; display: flex;">
                <div
                  class="line-div center"
                  @click="commandFill('cellIdx0', '年', 'TextItem')"
                >{{ letData.cellIdx0 ? letData.cellIdx0 : 'XX' }}</div>
                <label>年</label>
              </div>
              <div style="flex: 1; display: flex;">
                <div
                  class="line-div center"
                  @click="commandFill('cellIdx1', '月', 'TextItem')"
                >{{ letData.cellIdx1 ? letData.cellIdx1 : 'XX' }}</div>
                <label>月</label>
              </div>
              <div style="flex: 1; display: flex;">
                <div
                  class="line-div center"
                  @click="commandFill('cellIdx2', '日', 'TextItem')"
                >{{ letData.cellIdx2 ? letData.cellIdx2 : 'XX' }}</div>
                <label>日</label>
              </div>
              <div style="flex: 1; display: flex;">
                <div
                  class="line-div center"
                  @click="commandFill('cellIdx3', '时', 'TextItem')"
                >{{ letData.cellIdx3 ? letData.cellIdx3 : 'XX' }}</div>
                <label>时</label>
              </div>
              <div style="flex: 1; display: flex;">
                <div
                  class="line-div center"
                  @click="commandFill('cellIdx4', '分', 'TextItem')"
                >{{ letData.cellIdx4 ? letData.cellIdx4 : 'XX' }}</div>
                <label>分至</label>
              </div>
              <div style="flex: 1; display: flex;">
                <div
                  class="line-div center"
                  @click="commandFill('cellIdx5', '时', 'TextItem')"
                >{{ letData.cellIdx5 ? letData.cellIdx5 : 'XX' }}</div>
                <label>时</label>
              </div>
              <div style="flex: 1; display: flex;">
                <div
                  class="line-div center"
                  @click="commandFill('cellIdx6', '分', 'TextItem')"
                >{{ letData.cellIdx6 ? letData.cellIdx6 : 'XX' }}</div>
                <label>分</label>
              </div>
            </div>
            <div class="docTextarea">
              <span class="no-line">地点：</span>
              <span class="line-div" @click="commandFill('cellIdx7', '地点', 'TextItem')"
                >{{letData.cellIdx7 ? letData.cellIdx7 : "（点击编辑）"}}</span>
              <div class="line"></div>
            </div>
            <div class="docTextLine">
              <div style="flex: 3; display: flex;">
                <label>陈述申辩人：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx8', '陈述申辩人', 'TextItem')"
                >{{ letData.cellIdx8 ? letData.cellIdx8 : '（点击编辑）' }}</div>
              </div>
              <div style="flex: 1; display: flex;">
                <label>性别：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx9', '性别', 'SelectItem')"
                >{{ letData.cellIdx9 ? letData.cellIdx9 : '（编辑）' }}</div>
              </div>
              <div style="flex: 1; display: flex;">
                <label>年龄：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx10', '年龄', 'TextItem')"
                >{{ letData.cellIdx10 ? letData.cellIdx10 : '（编辑）' }}</div>
              </div>
            </div>
            <div class="docTextLine">
              <div style="flex: 2; display: flex;">
                <label>工作单位：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx11', '工作单位', 'TextItem')"
                >{{ letData.cellIdx11 ? letData.cellIdx11 : '（点击编辑）' }}</div>
              </div>
              <div style="flex: 1; display: flex;">
                <label>职务（职业）：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx12', '职务（职业）', 'TextItem')"
                >{{ letData.cellIdx12 ? letData.cellIdx12 : '（编辑）' }}</div>
              </div>
            </div>
            <div class="docTextLine">
              <div style="flex: 3; display: flex;">
                <label>住址：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx13', '住址', 'TextItem')"
                >{{ letData.cellIdx13 ? letData.cellIdx13 : '（点击编辑）' }}</div>
              </div>
              <div style="flex: 1; display: flex;">
                <label>电话：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx14', '电话', 'TextItem')"
                >{{ letData.cellIdx14 ? letData.cellIdx14 : '（点击编辑）' }}</div>
              </div>
            </div>
            <div class="docTextLine">
              <div style="flex: 5; display: flex;">
                <label>承办人（签名）：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx15', '承办人（签名）', 'TextItem')"
                >{{ letData.cellIdx15 ? letData.cellIdx15 : '（点击编辑）' }}</div>
              </div>
              <div style="flex: 3; display: flex;">
                <label>&nbsp;、&nbsp;</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx16', '承办人（签名）', 'TextItem')"
                >{{ letData.cellIdx16 ? letData.cellIdx16 : '（点击编辑）' }}</div>
              </div>
              <div style="flex: 5; display: flex;">
                <label>记录人（签名）：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx17', '记录人（签名）', 'TextItem')"
                >{{ letData.cellIdx17 ? letData.cellIdx17 : '（点击编辑）' }}</div>
              </div>
            </div>
            <div class="docTextarea">
              陈述申辩记录：我们是
              <span
                @click="commandFill('cellIdx18', '执法人员', 'TextItem')"
              >{{ letData.cellIdx18 ? letData.cellIdx18 : '（点击编辑）' }}</span>
              的行政执法人员，这是我们的执法证件（出示证件），现就
              <span
                @click="commandFill('cellIdx19', '违法行为', 'DangerTable')"
              >{{ letData.cellIdx19 ? letData.cellIdx19 : '（点击编辑）'}}</span>
              听取你
              <span
                class="no-underline"
              >{{ letData.cellIdx20 ? letData.cellIdx20 : '（点击编辑）'}}</span>
              的陈述申辩。
            </div>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              @click="commandFill('cellIdx21', '陈述申辩内容', 'TextareaItem')">
              <div v-if="letData.cellIdx21 && letData.cellIdx21.length > 0" style="position: relative;">
                <p class="show-area-item-p">
                  <span style="padding: 7px;">{{letData.cellIdx21 ? letData.cellIdx21 : '（点击编辑）'}}</span>
                </p>
                <div
                  v-for="(item, index) in 100"
                  :key="index"
                  class="cellLine"
                  :style="`top: ${(index + 1) * 9.54}mm;`"
                >
                </div>
              </div>
              <div v-else>
                <p class="show-area-item-p">&nbsp;</p>
                <p class="show-area-item-p">&nbsp;</p>
              </div>
            </div>
            <div class="docTextarea">
              <span class="no-line">陈述申辩人意见：</span>
              <span
                @click="commandFill('cellIdx22', '陈述申辩人意见', 'TextItem')"
              >{{ letData.cellIdx22 ? letData.cellIdx22 : '（点击编辑）'}}</span>
              <div class="line"></div>
            </div>
            <div class="docTextLine" style="margin-bottom: 60px;">
              <div style="flex: 5; display: flex;">
                <label>陈述申辩人（签名）：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx23', '陈述申辩人（签名）', 'TextItem')"
                >{{ letData.cellIdx23 ? letData.cellIdx23 : '（点击编辑）' }}</div>
                <label>&nbsp;&nbsp;</label>
              </div>
              <div style="flex: 1; display: flex;">
                <div
                  class="line-div center"
                  @click="commandFill('cellIdx24', '年', 'TextItem')"
                >{{ letData.cellIdx24 ? letData.cellIdx24 : 'XX' }}</div>
                <label>年</label>
              </div>
              <div style="flex: 1; display: flex;">
                <div
                  class="line-div center"
                  @click="commandFill('cellIdx25', '月', 'TextItem')"
                >{{ letData.cellIdx25 ? letData.cellIdx25 : 'XX' }}</div>
                <label>月</label>
              </div>
              <div style="flex: 1; display: flex;">
                <div
                  class="line-div center"
                  @click="commandFill('cellIdx26', '日', 'TextItem')"
                >{{ letData.cellIdx26 ? letData.cellIdx26 : 'XX' }}</div>
                <label>日</label>
              </div>
            </div>
            <div class="docTextarea" style="border-top: 2px solid #000;">
              备注:被陈述申辩人应在确认笔录后，签署意见，并签名押印。
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
      :col-list="colList"
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
  name: "Let205",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {},
      options: {
        cellIdx9: [
          {
            value: '男',
            name: '男'
          },
          {
            value: '女',
            name: '女'
          },
        ],
        cellIdx19: {
          page: '30',
          key: 'cellIdx19' // 用来区分一个页面多个地方调用隐患大表，最后返回值
        },
        cellIdx20: [
          {
            value: '单位',
            name: '单位'
          },
          {
            value: '个人',
            name: '个人'
          },
        ]
      },
      associationPaper: ['1', '6']
    };
  },
  methods: {
    async initLetData (selectedPaper) {
      const db = new GoDB(this.$store.state.DBName);
      const corpBase = db.table("corpBase");
      const corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
       // 1.时间：当前年、月、日、时、分
      let now = new Date()
      let cellIdx0Year = now.getFullYear().toString()
      let cellIdx1Month = (now.getMonth() + 1).toString()
      let cellIdx2Date = now.getDate().toString()
      let cellIdx3Hour = now.getHours().toString()
      let cellIdx4Minu = now.getMinutes().toString()
      // 2.工作单位：煤矿名称
      let cellIdx11String = corp.corpName
      // 3.单位
      let cellIdx18String = this.$store.state.user.userGroupName
      // 获取笔录文书中
      let let1DataPapaerContent = JSON.parse(selectedPaper.let1Data.paperContent)
      let dangerObject = getDangerObject(let1DataPapaerContent.DangerTable.tableData)
      // 4.陈述申辩：煤矿名称 + '涉嫌' + 隐患描述 + '案。'
      let cellIdx19String = `${corp.corpName}涉嫌${dangerObject.dangerString}案。`
      // 5.单位/个人：从行政处罚告知书(paperType === '6')中获取
      let let6DataPaperContent = JSON.parse(selectedPaper.let6Data.paperContent)
      let cellIdx20String = let6DataPaperContent.selectedType ? let6DataPaperContent.selectedType : ''
      await db.close();
      this.letData = {
        cellIdx0: cellIdx0Year, // 年
        cellIdx0TypeTextItem: cellIdx0Year, // 年
        cellIdx1: cellIdx1Month, // 月
        cellIdx1TypeTextItem: cellIdx1Month, // 年
        cellIdx2: cellIdx2Date, // 日
        cellIdx2TypeTextItem: cellIdx2Date, // 年
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
        cellIdx13: null, // 住址
        cellIdx14: null, // 电话
        cellIdx15: null, // 承办人（签名）
        cellIdx16: null, // 承办人（签名）
        cellIdx17: null, // 记录人（签名）
        cellIdx18: cellIdx18String, // 监管员
        cellIdx18TypeTextItem: cellIdx18String, // 监管员
        cellIdx19: cellIdx19String, // 违法行为
        cellIdx20: cellIdx20String, // 单位/个人
        cellIdx20TypeTextItem: cellIdx20String, // 单位/个人
        cellIdx21: null, // 法制审核意见
        cellIdx22: null, // 陈述申辩人意见
        cellIdx23: null, // 陈述申辩人（签名）
        cellIdx24: null, // 年
        cellIdx25: null, // 月
        cellIdx26: null, // 日
        DangerTable: let1DataPapaerContent.DangerTable,
        extraData: { // 保存额外拼写的数据内容，用于修改隐患项时回显使用
          corpName: corp.corpName,
          userGroupName: this.$store.state.user.userGroupName,
        },
        selectedType: cellIdx20String
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
        if (key === 'cellIdx19') {
          this.options[key] = {
            page: '30',
            key: key,
            spellString: this.letData.extraData
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