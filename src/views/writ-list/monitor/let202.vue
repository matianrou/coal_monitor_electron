<!-- 行政处罚 一般程序 调查取证笔录 -->
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
              国 家 煤 矿 安 全 监 察
              <br />
            </div>
            <div class="textAlignCenter formHeader1">调 查 取 证 笔 录</div>
            <div class="docTextLine">
                <label>时&nbsp;&nbsp;&nbsp; 间：</label>
                <span
                  class="line-div"
                  @click="commandFill('cellIdx0', '年', 'TextItem')"
                  >{{ letData.cellIdx0 ? letData.cellIdx0 : "（XX）" }}</span
                >
                <label>年</label>
                <span
                  class="line-div"
                  @click="commandFill('cellIdx1', '月', 'TextItem')"
                  >{{ letData.cellIdx1 ? letData.cellIdx1 : "（XX）" }}</span
                >
                <label>月</label>
                <span
                  class="line-div"
                  @click="commandFill('cellIdx2', '日', 'TextItem')"
                  >{{ letData.cellIdx2 ? letData.cellIdx2 : "（XX）" }}</span
                >
                <label>日</label>
                <span
                  class="line-div"
                  @click="commandFill('cellIdx3', '时', 'TextItem')"
                  >{{ letData.cellIdx3 ? letData.cellIdx3 : "（XX）" }}</span
                >
                <label>时</label>
                <span
                  class="line-div"
                  @click="commandFill('cellIdx4', '分', 'TextItem')"
                  >{{ letData.cellIdx4 ? letData.cellIdx4 : "（XX）" }}</span
                >
                分至
                <span
                  class="line-div"
                  @click="commandFill('cellIdx5', '时', 'TextItem')"
                  >{{ letData.cellIdx5 ? letData.cellIdx5 : "（XX）" }}</span
                >
                时
                <span
                  class="line-div"
                  @click="commandFill('cellIdx6', '分', 'TextItem')"
                  >{{ letData.cellIdx6 ? letData.cellIdx6 : "（XX）" }}</span
                >
                分
            </div>
            <div class="docTextarea">
              <span class="no-line">地&nbsp;&nbsp;&nbsp; 点：</span>
              <span
                @click="commandFill('cellIdx7', '地点', 'TextItem')"
              >{{ letData.cellIdx7 ? letData.cellIdx7 : '（点击编辑）'}}</span>
              <div class="line"></div>
            </div>
            <div class="docTextLine">
              <label>调查事由：</label>
              <div
                class="line-div"
                @click="commandFill('cellIdx8', '调查事由', 'DangerTableItem')"
              >
                {{ letData.cellIdx8 ? letData.cellIdx8 : "（点击编辑）" }}
              </div>
            </div>
            <div class="docTextLine">
                <label>被调查人：</label>
                <label>姓 &nbsp;&nbsp; 名</label>
                <span
                  class="line-div"
                  @click="commandFill('cellIdx9', '姓名', 'TextItem')"
                  >{{ letData.cellIdx9 ? letData.cellIdx9 : "" }}</span
                >
                <label>性别</label>
                <span
                  class="line-div"
                  @click="commandFill('cellIdx10', '性别', 'TextItem')"
                  >{{ letData.cellIdx10 ? letData.cellIdx10 : "" }}</span
                >
                <label>年龄</label>
                <span
                  class="line-div"
                  @click="commandFill('cellIdx11', '年龄', 'TextItem')"
                  >{{ letData.cellIdx11 ? letData.cellIdx11 : "" }}</span
                >
              <div style="flex:4; display: flex">

                <label>身份证号</label>
                <span
                  class="line-div"
                  @click="commandFill('cellIdx12', '身份证号', 'TextItem')"
                  >{{ letData.cellIdx12 ? letData.cellIdx12 : "（XX）" }}</span
                >
              </div>
            </div>
            <div class="docTextLine">
              <label style="width:13.5%"></label>
            <label>工作单位</label>
                <span
                  class="line-div"
                  @click="commandFill('cellIdx13', '工作单位', 'TextItem')"
                  >{{ letData.cellIdx13 ? letData.cellIdx13 : "" }}</span
                >
                <label>职务（职业）</label>
                <span
                  class="line-div"
                  @click="commandFill('cellIdx14', '职务（职业）', 'TextItem')"
                  >{{ letData.cellIdx14 ? letData.cellIdx14 : "" }}</span
                >
            </div>
            <div class="docTextLine">
              <label style="width:13.5%"></label>
            <label>政治面貌</label>
                <span
                  class="line-div"
                  @click="commandFill('cellIdx15', '政治面貌', 'SelectItem')"
                  >{{ letData.cellIdx15 ? letData.cellIdx15 : "" }}</span
                >
                <label>文化程度</label>
                <span
                  class="line-div"
                  @click="commandFill('cellIdx16', '文化程度', 'SelectItem')"
                  >{{ letData.cellIdx16 ? letData.cellIdx16 : "" }}</span
                >
                <label>电话</label>
                <span
                  class="line-div"
                  @click="commandFill('cellIdx17', '电话', 'SelectItem')"
                  >{{ letData.cellIdx17 ? letData.cellIdx17 : "" }}</span
                >
            </div>
            <div class="docTextLine">
              <label style="width:13.5%"></label>
              <label>住址</label>
              <div
                class="line-div"
                @click="commandFill('cellIdx18', '住址', 'TextItem')"
              >
                {{ letData.cellIdx18 ? letData.cellIdx18 : "（点击编辑）" }}
              </div>
            </div>
            <div class="docTextLine">
            <label>调查人（签名）：</label>
                <span
                  class="line-div"
                  @click="commandFill('cellIdx19', '调查人（签名）', 'TextItem')"
                  >{{ letData.cellIdx19 ? letData.cellIdx19 : "" }}</span
                >
                <label>记录人（签名）：</label>
                <span
                  class="line-div"
                  @click="commandFill('cellIdx20', '记录人（签名）', 'TextItem')"
                  >{{ letData.cellIdx20 ? letData.cellIdx20 : "" }}</span
                >
            </div>
            <div class="docTextarea">
              <label style="width: 5%"></label>
              <span
                @click="commandFill('cellIdx21', '煤矿概况', 'TextareaItem')"
                >{{ letData.cellIdx21 ? letData.cellIdx21 : "（点击编辑）" }}</span
              >
              <div class="line"></div>
            </div>
            
            <table style="border:solid 0px #000;" class="docBody">
              <!-- <tr>
                <div
                  style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
                  class="cellInput mutiLineArea"
                  @click="commandFill('cellIdx21', '', 'TextareaItem')">
                  <div v-if="letData.cellIdx8 && letData.cellIdx8.length > 0" style="position: relative;">
                    <p class="show-area-item-p">
                      <span style="padding: 7px;">{{letData.cellIdx21}}</span>
                    </p>
                    <div
                      v-for="(item, index) in 50"
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
              </tr> -->
            </table>
            <table height="60"></table>
            <div class="docTextarea cellLine">
              <label style="width: 5%"></label>
              &nbsp;&nbsp;&nbsp;&nbsp;备注：被调查人员应在过目笔录后，签署意见，并签名押印。
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
// import letMain from "@/views/make-law-writ/components/let-main.vue";
import GoDB from "@/utils/godb.min.js";
import { getDangerObject } from '@/utils/setInitPaperData'
import associationSelectPaper from '@/components/association-select-paper'
export default {
  name: "Let202",
  mixins: [associationSelectPaper],
/*   props: {
    corpData: {
      type: Object,
      default: () => {},
    },
    docData: {
      type: Object,
      default: () => {
        return {
          docTypeNo: null,
          docTypeName: null,
        };
      },
    },
  },
  components: {
    letMain,
  }, */
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
      // editData: {}, // 回显数据
      // extraData: {}, // 用于拼写隐患内容的字符集合
    };
  },
/*   created() {
    this.initData();
  },
  watch: {
    "corpData.corpId"(val) {
      if (val) {
        this.initData();
      }
    },
  }, */
  methods: {
   async initLetData (selectedPaper) {
      const db = new GoDB(this.$store.state.DBName);
      const corpBase = db.table("corpBase");
      const corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      /* const wkPaper = db.table("wkPaper");
      const caseId = this.corpData.caseId;
      const checkPaper = await wkPaper.findAll((item) => {
        return (
          item.caseId === caseId && item.paperType === this.docData.docTypeNo && item.delFlag !== '1'
        );
      });
      // await wkPaper.delete(checkPaper[0].id)
      // 保存额外拼写的数据内容，用于修改隐患项时回显使用
      this.extraData = {
        corpName: corp.corpName,
        userGroupName: this.$store.state.user.userGroupName,
      }
      if (checkPaper.length > 0) {
        // 回显
        this.letData = JSON.parse(checkPaper[0].paperContent);
        this.editData = checkPaper[0];
      } else {
        // 创建初始版本
        // 1.调查事由：煤矿名称+“涉嫌”+隐患描述
        // 隐患描述 */
         // 获取笔录文书中的隐患数据
        // const let101Data = await wkPaper.find((item) => {
        //   return item.caseId === caseId && item.paperType === '1';
        // });
        // let let101DataPapaerContent = JSON.parse(let101Data.paperContent)
        // let dangerObject = getDangerObject(let101DataPapaerContent.dangerItemObject.tableData)
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
          cellIdx22: null,
          cellIdx23: null,
          cellIdx24: null,
          cellIdx25: null,
          cellIdx26: null,
          cellIdx27: null,
          cellIdx28: null,
          cellIdx29: null,
          cellIdx30: null,
          cellIdx31: null,
          cellIdx32: null,
          // dangerItemObject: let101DataPapaerContent.dangerItemObject
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
    commandFill (key, title, type) {
      // 判断是否可编辑
      if (this.$refs.letMain.canEdit) {
        // 文书各个字段点击打开左侧弹出编辑窗口
        let dataKey = `${key}Type${type}`
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
        this.$refs.letMain.commandFill(key, dataKey, title, type, this.letData[dataKey], this.options[key])
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/let";
</style>