<!-- 行政处罚 一般程序 调查取证笔录 5 -->
<template>
  <div style="width: 100%; height: 100%">
    <let-main
      ref="letMain"
      :corp-data="corpData"
      :doc-data="docData"
      :let-data="letData"
      :paper-data="paperData"
      :from-page="fromPage"
      :send-data="sendData"
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
            <div class="textAlignCenter formHeader3">调 查 取 证 笔 录</div>
            <div class="docTextLine">
              <label>时&nbsp;&nbsp;&nbsp; 间：</label>
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
              <span class="no-line">调查事由：</span>
              <span
                @click="commandFill('cellIdx8', '调查事由', 'TextareaItem')"
                >{{
                  letData.cellIdx8 ? letData.cellIdx8 : "（点击编辑）"
                }}</span
              >
              <div class="line"></div>
            </div>
            <div class="docTextLine" style="text-align: center">
              <label>被调查人：</label>
              <div style="flex: 2; display: flex">
                <label>姓名</label>
                <span
                  class="line-div"
                  @click="commandFill('cellIdx9', '姓名', 'TextItem')"
                  >{{ letData.cellIdx9 ? letData.cellIdx9 : "" }}</span
                >
              </div>
              <div style="flex: 1; display: flex">
                <label>性别</label>
                <span
                  class="line-div"
                  @click="commandFill('cellIdx10', '性别', 'SelectItem')"
                  >{{ letData.cellIdx10 ? letData.cellIdx10 : "" }}</span
                >
              </div>
              <div style="flex: 1; display: flex">
                <label>年龄</label>
                <span
                  class="line-div"
                  @click="commandFill('cellIdx11', '年龄', 'TextItem')"
                  >{{ letData.cellIdx11 ? letData.cellIdx11 : "" }}</span
                >
              </div>
              <div style="flex: 3.5; display: flex">
                <label>身份证号</label>
                <span
                  class="line-div"
                  @click="commandFill('cellIdx12', '身份证号', 'TextItem')"
                  >{{ letData.cellIdx12 ? letData.cellIdx12 : "" }}</span
                >
              </div>
            </div>
            <div class="docTextarea">
              <span class="no-line" style="width: 25%"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;工作单位</span
              >
              <span
                style="
                  display: inline-block;
                  min-width: 32%;
                  line-height: normal;
                  max-width: 32%;
                "
                @click="commandFill('cellIdx13', '工作单位', 'TextItem')"
                >{{ letData.cellIdx13 ? letData.cellIdx13 : "（点击编辑）" }}
              </span>
              <span class="no-line" style="width: 17%">职务（职业）</span>
              <span
                style="
                  display: inline-block;
                  min-width: 21%;
                  line-height: normal;
                  max-width: 21%;
                "
                @click="commandFill('cellIdx14', '职务（职业）', 'TextItem')"
                >{{
                  letData.cellIdx14 ? letData.cellIdx14 : "（点击编辑）"
                }}</span
              >
            </div>
            <div class="docTextarea">
              <span class="no-line" style="width: 25%"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;政治面貌</span
              >
              <span
                style="
                  display: inline-block;
                  min-width: 17%;
                  line-height: normal;
                  max-width: 17%;
                "
                @click="commandFill('cellIdx15', '政治面貌', 'SelectItem')"
                >{{ letData.cellIdx15 ? letData.cellIdx15 : "（编辑）" }}
              </span>
              <span class="no-line" style="width: 11%">文化程度</span>
              <span
                style="
                  display: inline-block;
                  min-width: 11%;
                  line-height: normal;
                  max-width: 11%;
                "
                @click="commandFill('cellIdx16', '文化程度', 'SelectItem')"
                >{{ letData.cellIdx16 ? letData.cellIdx16 : "（编辑）" }}</span
              >
              <span class="no-line" style="width: 11%"
                >电话</span
              >
              <span
                style="
                  display: inline-block;
                  min-width: 18%;
                  line-height: normal;
                  max-width: 18%;
                "
                @click="commandFill('cellIdx17', '电话', 'TextItem')"
                >{{ letData.cellIdx17 ? letData.cellIdx17 : "（编辑）" }}</span
              >
            </div>
            <div class="docTextarea">
              <span class="no-line" style="width: 25%"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;住址</span
              >
              <span
                style="
                  display: inline-block;
                  min-width: 73%;
                  line-height: normal;
                  max-width: 73%;
                "
                @click="commandFill('cellIdx18', '住址', 'TextItem')"
                >{{ letData.cellIdx18 ? letData.cellIdx18 : "（编辑）" }}
              </span>
            </div>
            <div class="docTextarea">
              <div style="display: inline-block; min-width: 50%">
                <span class="no-line">调查人（签名）：</span>
                <span
                  @click="
                    commandFill('cellIdx19', '调查人（签名）', 'TextItem')
                  "
                  >{{ letData.cellIdx19 ? letData.cellIdx19 : "（点击编辑）" }}
                </span>
              </div>
              <span class="no-line">记录人（签名）：</span>
              <span
                @click="commandFill('cellIdx20', '记录人（签名）', 'TextItem')"
                >{{
                  letData.cellIdx20 ? letData.cellIdx20 : "（点击编辑）"
                }}</span
              >
              <div class="line"></div>
            </div>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              @click="commandFill('cellIdx21', '', 'TextareaItem')"
              >
              <div v-if="letData.cellIdx21 && letData.cellIdx21.length > 0">
                <p class="show-area-item-p">
                  <span style="padding: 7px;">{{ letData.cellIdx21? letData.cellIdx21 : '（点击编辑）' }}</span>
                </p>
                <p class="show-area-item-p">&nbsp;</p>
                <cell-line></cell-line>
              </div>
              <div v-else>
                <p
                  v-for="(item, index) in 8"
                  :key="index"
                  class="show-area-item-p">&nbsp;</p>
              </div>
            </div>
            <div
              class="docTextarea"
              style="
                border-top: 2px solid #000;
                margin-top: 30px;
                line-height: normal;
              "
            >
              备注：被调查人员应在过目笔录后，签署意见，书写“以上笔录我已看过，与我说的一致”，并签名押印。
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
import GoDB from "@/utils/godb.min.js";
import { setNewDanger } from "@/utils/setInitPaperData";
import associationSelectPaper from "@/components/association-select-paper";
import { setDangerTable } from "@/utils/handlePaperData";
export default {
  name: "Let202",
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
        cellIdx7: null, // 地点
        cellIdx8: null, // 调查事由
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
        cellIdx21: null,
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
        extraData: {},
        associationPaperId: null,
        DangerTable: null,
        associationPaperOrder: []
      },
      options: {
        cellIdx10: [
          // 性别码表
          {
            value: "男",
            name: "男",
          },
          {
            value: "女",
            name: "女",
          },
        ],
        cellIdx15: [
          // 政治面貌码表
          {
            value: "中共党员",
            name: "中共党员",
          },
          {
            value: "中共预备党员",
            name: "中共预备党员",
          },
          {
            value: "共青团员",
            name: "共青团员",
          },
          {
            value: "民革党员",
            name: "民革党员",
          },
          {
            value: "民盟盟员",
            name: "民盟盟员",
          },
          {
            value: "民建会员",
            name: "民建会员",
          },
          {
            value: "民进会员",
            name: "民进会员",
          },
          {
            value: "农工党党员",
            name: "农工党党员",
          },
          {
            value: "致公党党员",
            name: "致公党党员",
          },
          {
            value: "九三学社社员",
            name: "九三学社社员",
          },
          {
            value: "台盟盟员",
            name: "台盟盟员",
          },
          {
            value: "无党派人士",
            name: "无党派人士",
          },
          {
            value: "群众",
            name: "群众",
          },
        ],
        cellIdx16: [
          // 文化程度码表
          {
            value: "博士",
            name: "博士",
          },
          {
            value: "硕士",
            name: "硕士",
          },
          {
            value: "本科",
            name: "本科",
          },
          {
            value: "大专",
            name: "大专",
          },
          {
            value: "中专",
            name: "中专",
          },
          {
            value: "中技",
            name: "中技",
          },
          {
            value: "技工学校",
            name: "技工学校",
          },
          {
            value: "高中",
            name: "高中",
          },
          {
            value: "初中",
            name: "初中",
          },
          {
            value: "小学",
            name: "小学",
          },
          {
            value: "文盲",
            name: "文盲",
          },
          {
            value: "半文盲",
            name: "半文盲",
          },
        ],
      },
      associationPaper: ["4"],
    };
  },
  methods: {
    async initLetData(selectedPaper) {
      let corpBase = await this.getDatabase('baseInfo');
      let corp = corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      // 1.时间
      let now = new Date();
      let cellIdx0Year = now.getFullYear().toString();
      let cellIdx1Month = (now.getMonth() + 1).toString();
      let cellIdx2Date = now.getDate().toString();
      let cellIdx3Hour = now.getHours().toString();
      let cellIdx4Minu = now.getMinutes().toString();
      let cellIdx8String = ''
      let dangerString = ''
      let provinceGroupName = ''
      let associationPaperId = {}
      let associationPaperOrder = []
      let DangerTable = null;
      if (this.fromPage === 'send-paper') {
        // 调查互动发送文书进入时，获取机构名称改为当前用户的省级机构名称
        let orgInfo = await this.getDatabase('org')
        // 归档机构信息
        // 监察需要筛选type
        let orgData = orgInfo.find(item => item.no === this.$store.state.user.userGroupId
          // && (item.type === '3' || item.type === '4' || item.type === '11') 
          && item.delFlag !== "1")
        // 获取当前归档机构的省局名称
        provinceGroupName = `${orgData.name}`
        if (orgData.grade === '3') {
          let provinceOrg = orgInfo.find(item => item.no === orgData.parentId)
          provinceGroupName = provinceOrg.name
        }
      } else {
        let let4DataPaperContent = JSON.parse(selectedPaper.let4Data.paperContent);
        cellIdx8String =
          this.corpData.caseType === "0"
            ? setDangerTable(
                let4DataPaperContent.DangerTable,
                {},
                {
                  page: "5",
                  key: "cellIdx8",
                  spellString: {
                    corpName: corp.corpName,
                    groupName: this.$store.state.curCase.provinceGroupName,
                  },
                }
              )
            : "";
        //涉嫌...违法违规
        dangerString =
          this.corpData.caseType === "0"
            ? setDangerTable(
                let4DataPaperContent.DangerTable,
                {},
                {
                  page: "5",
                  key: "cellIdx21",
                  spellString: {
                    corpName: corp.corpName,
                    groupName: this.$store.state.curCase.provinceGroupName,
                  },
                }
              )
            : "";
        provinceGroupName = this.$store.state.curCase.provinceGroupName
        associationPaperId = Object.assign({}, this.setAssociationPaperId(let4DataPaperContent.associationPaperId), {
          paper4Id: selectedPaper.let4Data.paperId,
        }) 
        associationPaperOrder = this.setAssociationPaperOrder(let4DataPaperContent.associationPaperOrder)
        associationPaperOrder.push('4')
        if (this.corpData.caseType === "0") {
          DangerTable = let4DataPaperContent.DangerTable
            ? setNewDanger(
                selectedPaper.let4Data,
                let4DataPaperContent.DangerTable
              )
            : {};
        }
      }
      // 2.组成： “我们是”+当前机构+“监察员，这是我们的执法证件（出示行政执法证件），现就你”+煤矿名称+“涉嫌”+隐患描述+“违法违规案向你进行调查取证，你有配合调查、如实回答问题的义务，也享有拒绝回答与调查取证无关问题的权利，但不得做虚假陈述和伪证，否则，将负相应的法律责任，你听清楚了吗？”
      let cellIdx21String = `我们是${provinceGroupName}监察员，这是我们的执法证件（出示行政执法证件），现就你${corp.corpName}涉嫌${dangerString || 'XXX'}违法违规案向你进行调查取证，你有配合调查、如实回答问题的义务，也享有拒绝回答与调查取证无关问题的权利，但不得做虚假陈述和伪证，否则，将负相应的法律责任，你听清楚了吗？
      答：听清楚了。
      问：你对我们调查人员申请回避吗？
      答：不申请回避。
      问：你的岗位安全生产职责主要是什么？
      答：我主要负责XX掘进工作面等地点安全监控设备安装、维护、调校等工作
      问：XXXXX问题是否属实？
      答：属实。
      问：为什么出现这个问题？
      答：
      问：你还有补充吗？
      答： 没有了。
      问： 请你看一下记录，是否如你所说一样，如无异议，请签字确认。`;
      this.letData = Object.assign({}, this.letData, {
        cellIdx0: cellIdx0Year, // 年
        cellIdx1: cellIdx1Month, // 月
        cellIdx2: cellIdx2Date, // 日
        cellIdx3: cellIdx3Hour, // 时
        cellIdx4: cellIdx4Minu, // 分
        cellIdx7: corp.corpName, // 地点
        cellIdx8: cellIdx8String, // 调查事由
        cellIdx13: corp.corpName, // 工作单位
        cellIdx21: cellIdx21String, // 22.3.3恢复
        extraData: {
          // 保存额外拼写的数据内容，用于修改隐患项时回显使用
          corpName: corp.corpName,
          groupName: provinceGroupName,
        },
        associationPaperId,
        associationPaperOrder,
        DangerTable: DangerTable
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