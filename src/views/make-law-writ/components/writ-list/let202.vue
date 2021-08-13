<!-- 行政处罚 一般程序 调查取证笔录 -->
<template>
  <div style="width: 100%; height: 100%;">
    <let-main
      :corp-data="corpData"
      :doc-data="docData"
      :let-data="letData"
      :edit-data="editData"
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
            <div class="stdRowH"></div>
            <table style="border:solid 0px #000;" class="docBody">
              <tr>
                <td class="textAlignLeft">时&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;间：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_0"
                  align="center"
                  style="width:9%"
                  data-title="年"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx0', '年', 'TextItem')"
                >{{letData.cellIdx0}}</td>
                <td class="textAlignLeft">年</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_1"
                  align="center"
                  style="width:10%"
                  data-title="月"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx1', '月', 'TextItem')"
                >{{letData.cellIdx1}}</td>
                <td class="textAlignLeft">月</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_2"
                  align="center"
                  style="width:10%"
                  data-title="日"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx2', '日', 'TextItem')"
                >{{letData.cellIdx2}}</td>
                <td class="textAlignLeft">日</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_3"
                  align="center"
                  style="width:10%"
                  data-title="时"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx3', '时', 'TextItem')"
                >{{letData.cellIdx3}}</td>
                <td class="textAlignLeft">时</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_4"
                  align="center"
                  style="width:10%"
                  data-title="分"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx4', '分', 'TextItem')"
                >{{letData.cellIdx4}}</td>
                <td class="textAlignLeft">分至</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_5"
                  align="center"
                  style="width:10%"
                  data-title="时"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx5', '时', 'TextItem')"
                >{{letData.cellIdx5}}</td>
                <td class="textAlignLeft">时</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_6"
                  align="center"
                  style="width:10%"
                  data-title="分"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx6', '分', 'TextItem')"
                >{{letData.cellIdx6}}</td>
                <td class="textAlignLeft">分</td>
              </tr>
              <tr>
                <td class="textAlignLeft">地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;点：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_7"
                  align="center"
                  style="width:85%"
                  data-title="地点"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx7', '地点', 'TextItem')"
                >{{letData.cellIdx7}}</td>
              </tr>
            </table>
            <table style="border:solid 0px #000;" class="docBody">
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
              @click="commandFill('cellIdx8', '调查事由', 'TextareaItem')">
              <p class="show-area-item-p">
                <span style="padding: 7px;">{{ letData.cellIdx8 }}</span>
              </p>
            </div>
            <table style="border:solid 0px #000;" class="docBody">
              <tr>
                <td class="textAlignLeft">被调查人：</td>
                <td class="textAlignLeft">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_9"
                  align="center"
                  style="width:20%"
                  data-title="姓名"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx9', '姓名', 'TextItem')"
                >{{letData.cellIdx9}}</td>
                <td class="textAlignLeft">性别</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_10"
                  align="center"
                  style="width:7%"
                  data-title="性别"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx10', '性别', 'SelectItem')"
                >{{letData.cellIdx10}}</td>
                <td class="textAlignLeft">年龄</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_11"
                  align="center"
                  style="width:7%"
                  data-title="年龄"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx11', '年龄', 'TextItem')"
                >{{letData.cellIdx11}}</td>
                <td class="textAlignLeft">身份证号</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_12"
                  align="center"
                  style="width:28%"
                  data-title="身份证号"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx12', '身份证号', 'TextItem')"
                >{{letData.cellIdx12}}</td>
              </tr>
              <tr>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;工作单位</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_13"
                  align="center"
                  style="width:40%"
                  data-title="工作单位"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx13', '工作单位', 'TextItem')"
                >{{letData.cellIdx13}}</td>
                <td class="textAlignLeft">职务（职业）</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_14"
                  align="center"
                  style="width:26%"
                  data-title="职务（职业）"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx14', '职务（职业）', 'TextItem')"
                >{{letData.cellIdx14}}</td>
              </tr>
              <tr>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;政治面貌</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_15"
                  align="center"
                  style="width:20%"
                  data-title="政治面貌"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx15', '政治面貌', 'SelectItem')"
                >{{letData.cellIdx15}}</td>
                <td class="textAlignLeft">文化程度</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_16"
                  align="center"
                  style="width:20%"
                  data-title="文化程度"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx16', '文化程度', 'SelectItem')"
                >{{letData.cellIdx16}}</td>
                <td class="textAlignLeft">电&nbsp;&nbsp;&nbsp;&nbsp;话</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_17"
                  align="center"
                  style="width:23%"
                  data-title="电话"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx17', '电话', 'TextItem')"
                >{{letData.cellIdx17}}</td>
              </tr>
              <tr>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;住&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_18"
                  align="center"
                  style="width:78%"
                  data-title="住址"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx18', '住址', 'TextItem')"
                >{{letData.cellIdx18}}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">调查人（签名）：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_19"
                  align="center"
                  style="width:36%"
                  data-title="调查人（签名）"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx19', '调查人（签名）', 'TextItem')"
                >{{letData.cellIdx19}}</td>
                <td class="textAlignCenter">记录人（签名）：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_20"
                  align="center"
                  style="width:28%"
                  data-title="记录人（签名）"
                  data-type="text"
                  data-src
                  @click="commandFill('cellIdx20', '记录人（签名）', 'TextItem')"
                >{{letData.cellIdx20}}</td>
              </tr>
              <tr>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_21"
                  style="width:95%"
                  @click="commandFill('cellIdx21', '', 'TextareaItem')"
                >{{letData.cellIdx21}}</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_22"
                  contenteditable="true"
                  style="width:95%"
                >{{letData.cellIdx22}}</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_23"
                  style="width:95%"
                  contenteditable="true"
                >{{letData.cellIdx23}}</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_24"
                  style="width:95%"
                  contenteditable="true"
                >{{letData.cellIdx24}}</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_25"
                  contenteditable="true"
                  style="width:95%"
                >{{letData.cellIdx25}}</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_26"
                  contenteditable="true"
                  style="width:95%"
                >{{letData.cellIdx26}}</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_27"
                  contenteditable="true"
                  style="width:95%"
                >{{letData.cellIdx27}}</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_28"
                  contenteditable="true"
                  style="width:95%"
                >{{letData.cellIdx28}}</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_29"
                  contenteditable="true"
                  style="width:95%"
                >{{letData.cellIdx29}}</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_30"
                  contenteditable="true"
                  style="width:95%"
                >{{letData.cellIdx30}}</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_31"
                  contenteditable="true"
                  style="width:95%"
                >{{letData.cellIdx31}}</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_32"
                  contenteditable="true"
                  style="width:95%"
                >{{letData.cellIdx32}}</td>
              </tr>
              <tr>
                <td
                  class="textAlignLeft"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;备注：被调查人员应在过目笔录后，签署意见，并签名押印。</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </let-main>
    <let-drawer
      :visible="visible"
      :selectedData="selectedData"
      @handle-close="handleClose"
      @handle-save="handleSave"
    ></let-drawer>
  </div>
</template>

<script>
import letMain from "@/views/make-law-writ/components/writ-list/components/let-main";
import letDrawer from "@/views/make-law-writ/components/writ-list/components/let-drawer";
import GoDB from "@/utils/godb.min.js";
import {
  setTextItem,
  setTextareaItem,
  setDateItem,
  setSelectItem
} from "@/utils/handlePaperData";
export default {
  name: "Let202",
  props: {
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
    letDrawer,
  },
  data() {
    return {
      letData: {},
      visible: false, // 展示填写组件
      selectedData: {
        key: null, // 修改的内容key
        type: null, // 填写组件类型
        title: null, // 标题
        value: null, // 值
        options: null, // 选项
      },
      options: {
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
      functions: {
        setTextItem,
        setTextareaItem,
        setDateItem,
        setSelectItem
      },
      editData: {}, // 回显数据
    };
  },
  created() {
    this.initData();
  },
  watch: {
    "corpData.corpId"(val) {
      if (val) {
        this.initData();
      }
    },
  },
  methods: {
    async initData() {
      const db = new GoDB("CoalDB");
      const corpBase = db.table("corpBase");
      //查询符合条件的记录
      const corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      const wkPaper = db.table("wkPaper");
      const caseId = this.corpData.caseId;
      const checkPaper = await wkPaper.findAll((item) => {
        return (
          item.caseId === caseId && item.paperType === this.docData.docTypeNo
        );
      });
      if (checkPaper.length > 0) {
        // 回显
        this.letData = JSON.parse(checkPaper[0].paperContent);
        this.editData = checkPaper[0];
      } else {
        // 创建初始版本
        // 1.调查事由：煤矿名称+“涉嫌”+隐患描述
        // 隐患描述
        const let101Data = await wkPaper.find((item) => {
          return item.caseId === caseId && item.paperType === '1';
        });
        let let101DataPapaerContent = JSON.parse(let101Data.paperContent)
        let dangerString = ''
        let101DataPapaerContent.cellIdx8TypeDangerTableItem.tableData.map((item, index) => {
          dangerString += `${item.itemContent}`
        })
        let cellIdx8String = `${corp.corpName}涉嫌${dangerString}`
        //组成： “我们是”+当前机构+“监察员，这是我们的执法证件（出示行政执法证件），现就你”+煤矿名称+“涉嫌”+隐患描述+“违法违规案向你进行调查取证，你有配合调查、如实回答问题的义务，也享有拒绝回答与调查取证无关问题的权利，但不得做虚假陈述和伪证，否则，将负相应的法律责任，你听清楚了吗？”
        let cellIdx21String = `我们是${this.$store.state.user.userGroupName}监察员，这是我们的执法证件（出示行政执法证件），现就你${corp.corpName}涉嫌${dangerString}违法违规案向你进行调查取证，你有配合调查、如实回答问题的义务，也享有拒绝回答与调查取证无关问题的权利，但不得做虚假陈述和伪证，否则，将负相应的法律责任，你听清楚了吗？`
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
          cellIdx8TypeTextareaItem: cellIdx8String, // 调查事由
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
        };
      }
      await db.close();
    },
    goBack({ page }) {
      // 返回选择企业
      this.$emit("go-back", { page });
    },
    commandFill(key, title, type) {
      // 打开编辑
      this.visible = true;
      let valueKey = `${key}Type${type}`;
      this.selectedData = {
        type,
        key,
        title,
        value: this.letData[valueKey],
        corpData: this.corpData,
        options: this.options[key],
      };
    },
    handleClose() {
      // 关闭编辑
      this.selectedData = {
        key: null,
        type: null,
        title: null,
        value: null,
        options: null,
      };
      this.visible = false;
    },
    handleSave(params) {
      let { key, type } = this.selectedData;
      // 保存反显数据
      this.letData[`${key}Type${type}`] = params.value;
      // 处理反显数据，保存一份paperContent通用文本数据
      this.letData[key] = this.functions[`set${type}`](
        this.letData[`${key}Type${type}`],
        this.selectedData,
        this.options
      );
      this.handleClose();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/views/make-law-writ/assets/scss/let";
</style>