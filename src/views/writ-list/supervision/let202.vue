<!-- 行政处罚 一般程序 调查询问笔录 -->
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
            <div class="textAlignCenter formHeader0">
              煤矿安全监管行政执法文书
              <br />
            </div>
            <div class="textAlignCenter formHeader1">调查询问笔录</div>
            <div class="docTextLine">
              时&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;间：
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
              <span class="no-line">地&nbsp;&nbsp;&nbsp; 点：</span>
              <span
                @click="commandFill('cellIdx7', '地点', 'TextItem')"
              >{{ letData.cellIdx7 ? letData.cellIdx7 : '（点击编辑）'}}</span>
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line">调查事由：</span>
              <span
                @click="commandFill('cellIdx8', '调查事由', 'DangerTableItem')"
              >{{ letData.cellIdx8 ? letData.cellIdx8 : '（点击编辑）'}}</span>
              <div class="line"></div>
            </div>
            <!-- <table style="border:solid 0 #000;" class="docBody">
              <tr>
                <td class="textAlignLeft">调查事由：</td>
              </tr>
            </table>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              id="cell_idx_8"
              data-title="调查事由"
              data-type="textarea"
              data-src
              @click="commandFill('cellIdx8', '调查事由', 'DangerTableItem')">
              <div v-if="letData.cellIdx8 && letData.cellIdx8.length > 0">
                <p class="show-area-item-p">
                  <span style="padding: 7px;">{{ letData.cellIdx8 ? letData.cellIdx8 : '（点击编辑）'}}</span>
                </p>
                <cell-line></cell-line>
              </div>
              <div v-else>
                <p class="show-area-item-p">
                  &nbsp;
                </p>
                <p class="show-area-item-p">
                  &nbsp;
                </p>
              </div>
            </div> -->
            <div class="docTextLine">
              被调查人：
              <div style="flex: 2; display: flex;">
                <label>姓名</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx9', '姓名', 'TextItem')"
                >{{ letData.cellIdx9 ? letData.cellIdx9 : '(编辑)' }}</div>
              </div>
              <div style="flex: 1; display: flex;">
                <label>&nbsp;性别</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx10', '性别', 'SelectItem')"
                >{{ letData.cellIdx10 ? letData.cellIdx10 : `&nbsp;` }}</div>
              </div>
              <div style="flex: 1; display: flex;">
                <label>&nbsp;年龄</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx11', '年龄', 'TextItem')"
                >{{ letData.cellIdx11 ? letData.cellIdx11 : `&nbsp;` }}</div>
              </div>
              <div style="flex: 4; display: flex;">
                <label>身份证号</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx12', '身份证号', 'TextItem')"
                >{{ letData.cellIdx12 ? letData.cellIdx12 : '(编辑)' }}</div>
              </div>
            </div>
            <div class="docTextLine">
              <label style="width: 13%"></label>
              <div style="flex: 1; display: flex;">
                <label>工作单位</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx13', '工作单位', 'TextItem')"
                >{{ letData.cellIdx13 ? letData.cellIdx13 : '(编辑)' }}</div>
              </div>
              <div style="flex: 1; display: flex;">
                <label>职务（职业）</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx14', '职务（职业）', 'TextItem')"
                >{{ letData.cellIdx14 ? letData.cellIdx14 : '(编辑)' }}</div>
              </div>
            </div>
            <div class="docTextLine">
              <label style="width: 13%"></label>
              <div style="flex: 1; display: flex;">
                <label>政治面貌</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx15', '政治面貌', 'SelectItem')"
                >{{ letData.cellIdx15 ? letData.cellIdx15 : '(编辑)' }}</div>
              </div>
              <div style="flex: 1; display: flex;">
                <label>文化程度</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx16', '文化程度', 'SelectItem')"
                >{{ letData.cellIdx16 ? letData.cellIdx16 : '(编辑)' }}</div>
              </div>
              <div style="flex: 1; display: flex;">
                <label>电话</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx17', '电话', 'TextItem')"
                >{{ letData.cellIdx17 ? letData.cellIdx17 : '(编辑)' }}</div>
              </div>
            </div>
            <div class="docTextLine">
              <label style="width: 13%"></label>
              <div style="flex: 1; display: flex;">
                <label>住址</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx18', '住址', 'TextItem')"
                >{{ letData.cellIdx18 ? letData.cellIdx18 : '(编辑)' }}</div>
              </div>
            </div>
            <div class="docTextLine">
              <div style="flex: 1; display: flex;">
                <label>调查人（签名）：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx19', '调查人（签名）', 'TextItem')"
                >{{ letData.cellIdx19 ? letData.cellIdx19 : '(编辑)' }}</div>
              </div>
              <div style="flex: 1; display: flex;">
                <label>记录人（签名）：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx20', '记录人（签名）', 'TextItem')"
                >{{ letData.cellIdx20 ? letData.cellIdx20 : '(编辑)' }}</div>
              </div>
            </div>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              @click="commandFill('cellIdx21', '', 'TextareaItem')">
              <div v-if="letData.cellIdx21 && letData.cellIdx21.length > 0" style="position: relative;">
                <p class="show-area-item-p">
                  <span style="padding: 7px;">{{letData.cellIdx21 ? letData.cellIdx21 : '（点击编辑）'}}</span>
                </p>
                <div
                  v-for="(item, index) in 200"
                  :key="index"
                  class="cellLine"
                  :style="`top: ${(index + 1) * 9.54}mm;`"
                >
                </div>
              </div>
              <div v-else>
                <p
                  v-for="(item, index) in 8"
                  :key="index"
                  class="show-area-item-p">
                  &nbsp;
                </p>
              </div>
            </div>
            <div class="docTextarea" style="border-top: 2px solid #000; margin-top: 30px; line-height: normal;">
              备注:被调查人员应在核对笔录后，书写“以上笔录我已看过，与我说的一致”，并签名押印。
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
  name: "Let202",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {},
      options: {
        cellIdx8: {
          page: '5',
          key: 'cellIdx8'
        },
        cellIdx10: [ // 性别码表
          {
            value: '男',
            name: '男'
          },
          {
            value: '女',
            name: '女'
          },
        ],
        cellIdx15: [ // 政治面貌码表
          {
            value: '中共党员',
            name: '中共党员',
          },
          {
            value: '中共预备党员',
            name: '中共预备党员',
          },
          {
            value: '共青团员',
            name: '共青团员',
          },
          {
            value: '民革党员',
            name: '民革党员',
          },
          {
            value: '民盟盟员',
            name: '民盟盟员',
          },
          {
            value: '民建会员',
            name: '民建会员',
          },
          {
            value: '民进会员',
            name: '民进会员',
          },
          {
            value: '农工党党员',
            name: '农工党党员',
          },
          {
            value: '致公党党员',
            name: '致公党党员',
          },
          {
            value: '九三学社社员',
            name: '九三学社社员',
          },
          {
            value: '台盟盟员',
            name: '台盟盟员',
          },
          {
            value: '无党派人士',
            name: '无党派人士',
          },
          {
            value: '群众',
            name: '群众',
          },
        ],
        cellIdx16: [ // 文化程度码表
          {
            value: '博士',
            name: '博士'
          },
          {
            value: '硕士',
            name: '硕士'
          },
          {
            value: '本科',
            name: '本科'
          },
          {
            value: '大专',
            name: '大专'
          },
          {
            value: '中专',
            name: '中专'
          },
          {
            value: '中技',
            name: '中技'
          },
          {
            value: '技工学校',
            name: '技工学校'
          },
          {
            value: '高中',
            name: '高中'
          },
          {
            value: '初中',
            name: '初中'
          },
          {
            value: '小学',
            name: '小学'
          },
          {
            value: '文盲',
            name: '文盲'
          },
          {
            value: '半文盲',
            name: '半文盲'
          },
        ]
      },
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
      // 1.调查事由：煤矿名称+“涉嫌”+隐患描述
      // 隐患描述
        // 获取笔录文书中的隐患数据
      let let1DataPapaerContent = JSON.parse(selectedPaper.let1Data.paperContent)
      let dangerObject = getDangerObject(let1DataPapaerContent.dangerItemObject.tableData)
      let cellIdx8String = `${corp.corpName}涉嫌${dangerObject.dangerString}。`
      // 2.组成： “我们是”+当前机构+“监察员，这是我们的执法证件（出示行政执法证件），现就你”+煤矿名称+“涉嫌”+隐患描述+“违法违规案向你进行调查取证，你有配合调查、如实回答问题的义务，也享有拒绝回答与调查取证无关问题的权利，但不得做虚假陈述和伪证，否则，将负相应的法律责任，你听清楚了吗？”
      let cellIdx21String = `我们是${this.$store.state.user.userGroupName}监察员，这是我们的执法证件（出示行政执法证件），现就你${corp.corpName}涉嫌${dangerObject.dangerString}违法违规案向你进行调查取证，你有配合调查、如实回答问题的义务，也享有拒绝回答与调查取证无关问题的权利，但不得做虚假陈述和伪证，否则，将负相应的法律责任，你听清楚了吗？`
      await db.close();
      this.letData = {
        cellIdx0: null, // 年
        cellIdx1: null, // 月
        cellIdx2: null, // 日
        cellIdx3: null, // 时
        cellIdx4: null, // 分
        cellIdx5: null, // 时
        cellIdx6: null, // 分
        cellIdx7: null, // 地点
        cellIdx8: cellIdx8String, // 调查事由
        cellIdx9: null, // 姓名
        cellIdx10: null, // 性别
        cellIdx11: null, // 年龄
        cellIdx12: null, // 身份证号
        cellIdx13: null, // 工作单位
        cellIdx14: null, // 职务（职业）
        cellIdx15: null, // 政治面貌
        cellIdx16: null, // 文化程度
        cellIdx17: null, // 电话
        cellIdx18: null, // 住址
        cellIdx19: null, // 调查人（签名）
        cellIdx20: null, // 记录人（签名）
        cellIdx21: cellIdx21String,
        cellIdx21TypeTextareaItem: cellIdx21String,
        dangerItemObject: let1DataPapaerContent.dangerItemObject,
        extraData: { // 保存额外拼写的数据内容，用于修改隐患项时回显使用
          corpName: corp.corpName,
          userGroupName: this.$store.state.user.userGroupName,
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
        let spellString = {}
        if (key === 'cellIdx8') {
          spellString = {
            corpName: this.letData.extraData.corpName,
          }
          this.options[key] = {
            page: '5',
            key: key,
            spellString
          }
          dataKey = 'dangerItemObject'
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