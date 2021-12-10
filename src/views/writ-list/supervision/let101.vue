<!-- 现场检查 一般检查 现场检查记录 1 -->
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
            <div class="textAlignCenter formHeader0">
              煤矿安全监管行政执法文书
              <br />
            </div>
            <div class="textAlignCenter formHeader1">现场检查记录</div>
            <div class="docTextarea">
              <span class="no-line">被检查单位：</span>
              <span
                @click="commandFill('cellIdx0', '被检查单位', 'TextItem')"
                >{{
                  letData.cellIdx0 ? letData.cellIdx0 : "（点击编辑）"
                }}</span
              >
              <div class="line"></div>
            </div>
            <div class="docTextLine">
              <label>检查时间：</label>
              <div
                class="line-div"
                @click="commandFill('cellIdx1', '检查时间：', 'DaterangeItem')"
              >
                {{ letData.cellIdx1 ? letData.cellIdx1 : "（点击编辑）" }}
              </div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:55%">
                <span class="no-line">采矿许可证证号：</span>
                <span @click="commandFill('cellIdx2', '采矿许可证', 'TextItem')"
                  >{{ letData.cellIdx2 ? letData.cellIdx2 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">有效期：</span>
                <span @click="commandFill('cellIdx3', '有效期', 'TextItem')">{{
                  letData.cellIdx3 ? letData.cellIdx3 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:55%">
                <span class="no-line">安全生产许可证证号：</span>
                <span @click="commandFill('cellIdx4', '安全生产许可证', 'TextItem')"
                  >{{ letData.cellIdx4 ? letData.cellIdx4 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">有效期：</span>
                <span @click="commandFill('cellIdx5', '有效期', 'TextItem')">{{
                  letData.cellIdx5 ? letData.cellIdx5 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line">统一社会信用代码：</span>
              <span
                @click="commandFill('cellIdx6', '统一社会信用代码', 'TextItem')"
                >{{
                  letData.cellIdx6 ? letData.cellIdx6 : "（点击编辑）"
                }}</span
              >
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:55%">
                <span class="no-line">主要负责人：</span>
                <span @click="commandFill('cellIdx7', '主要负责人', 'TextItem')"
                  >{{ letData.cellIdx7 ? letData.cellIdx7 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">联系电话：</span>
                <span @click="commandFill('cellIdx8', '联系电话', 'TextItem')">{{
                  letData.cellIdx8 ? letData.cellIdx8 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line">检查地点（路线）：</span>
              <span
                @click="commandFill('cellIdx9', '检查地点（路线）', 'TextItem')"
                >{{
                  letData.cellIdx9 ? letData.cellIdx9 : "（点击编辑）"
                }}</span
              >
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line">检查人（签名）：</span>
              <span
                @click="commandFill('cellIdx10', '检查人（签名）', 'TextItem')"
                >{{
                  letData.cellIdx10 ? letData.cellIdx10 : "（点击编辑）"
                }}</span
              >
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:55%">
                <span class="no-line">记录人（签名）：</span>
                <span @click="commandFill('cellIdx11', '记录人', 'TextItem')"
                  >{{ letData.cellIdx11 ? letData.cellIdx11 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">陪同检查人员：</span>
                <span @click="commandFill('cellIdx12', '陪同检查人员', 'TextItem')">{{
                  letData.cellIdx12 ? letData.cellIdx12 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <table style="border:solid 0 #000;" class="docBody">
              <tr>
                <td class="textAlignLeft">检查情况：</td>
              </tr>
            </table>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              @click="commandFill('cellIdx13', '检查情况', 'DangerTable')">
              <div v-if="letData.cellIdx13 && letData.cellIdx13.length > 0">
                <p class="show-area-item-p">
                  <span style="padding: 7px;">{{ letData.cellIdx13 }}</span>
                </p>
                <cell-line :line-num="300"></cell-line>
              </div>
              <div v-else>
                <p class="show-area-item-p">
                  &nbsp;
                </p>
                <p class="show-area-item-p">
                  &nbsp;
                </p>
              </div>
            </div>
            <!-- <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              id="cell_idx_13"
              data-title="检查情况"
              data-type="textarea"
              data-src
              @click="commandFill('cellIdx13', '检查情况', 'DangerTable')"
            >
              <div v-if="letData.cellIdx13 && letData.cellIdx13.length > 0">
                <p class="show-area-item-p">
                  <span style="padding: 7px;">{{ letData.cellIdx13 }}</span>
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
             <div class="docTextarea">
              <div style="display:inline-block;min-width:43%">
                <span class="no-line">被检查单位意见：</span>
                <span @click="commandFill('cellIdx14', '被检查单位意见', 'TextItem')"
                  >{{ letData.cellIdx14 ? letData.cellIdx14 : "（编辑）" }}
                </span>
              </div>
                <span class="no-line">单位负责人签名：</span>
                <span @click="commandFill('cellIdx15', '签名', 'TextItem')">{{
                  letData.cellIdx15 ? letData.cellIdx15 : "（编辑）"
                }}</span>
                <span class="no-line">日期：</span>
                <span @click="commandFill('cellIdx16', '日期', 'DateItem')">{{
                  letData.cellIdx16 ? letData.cellIdx16 : "（编辑）"
                }}</span>
                <div class="line"></div>
                <div class="line1"></div>
            </div>
          </div>
        </div>
      </div>
    </let-main>
  </div>
</template>

<script>
import associationSelectPaper from "@/components/association-select-paper";
import GoDB from "@/utils/godb.min.js";
export default {
  name: "Let101",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {},
      options: {
        cellIdx13: {
          page: "1", // 用于在隐患项保存，做数据处理
          showBaseInfor: true, // 用于区分是否展示基本情况大文本输入
          showSelectDangerBtn: true, // 用于区分是否可以选择隐患项
        },
      },
    };
  },
  methods: {
    async initLetData() {
      // 创建初始版本
      let db = new GoDB(this.$store.state.DBName);
      let corpBase = db.table("corpBase");
      //查询符合条件的记录
      let corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      let let22DataPapaerContent = JSON.parse(
        selectedPaper.let22Data.paperContent
      );
      let zfZzInfo = db.table("zfZzInfo");
      let zzInfo1 = await zfZzInfo.find((item) => {
        return item.corpId == this.corpData.corpId && item.credTypeName == "采矿许可证";
      });
      let zzInfo2 = await zfZzInfo.find((item) => {
        return item.corpId == this.corpData.corpId && item.credTypeName == "安全生产许可证";
      });
      await db.close();
      // "检查方案检查时间"，"落款机构名称"的煤矿安全监察员"分工明细表中的所有人员"按照月度监察执法计划对“煤矿名称”进行检查，检查前制定了检查方案。依据执法程序当场向被检查单位出示了执法证件，表明身份，向其告知了检查内容和依法享有的权利、义务。检查时矿井处于“正常生产煤矿”状态。
      let nameList = []
      if (let22DataPapaerContent.CheckTable && let22DataPapaerContent.CheckTable.tableData) {
        // 遍历检查分工明细表中的检查人员列表
        let22DataPapaerContent.CheckTable.tableData.map(item => {
          if (item.personList && item.personList.length > 0) {
            item.personList.map(person => {
              // 如果已存在此人名则不再添加，如果未存在则添加人名
              if (!nameList.includes(person.name)) {
                nameList.push(person.name)
              }
            })
          }
        })
      }
      let names = ''
      if (nameList.length > 0) {
        nameList.map(name => {
          names += name + '、'
        })
      }
      names = names.substring(0, names.length - 1)
      let baseInfor = `${let22DataPapaerContent.cellIdx2 ? let22DataPapaerContent.cellIdx2 : ''}，${this.$store.state.curCase.provinceGroupName}的煤矿安全监察员${names}按照月度监察执法计划对${corp.corpName}进行检查，检查前制定了检查方案。依据执法程序当场向被检查单位出示了执法证件，表明身份，向其告知了检查内容和依法享有的权利、义务。检查时矿井处于${corp.mineStatusZsName}状态。`
      let dangerInfor = `    发现违法违规行为如下：`
      this.letData = {
        cellIdx0: corp.corpName ? corp.corpName : null, // 被检查单位
        cellIdx1: let22DataPapaerContent.cellIdx2, // 检查时间
        cellIdx2: zzInfo1.credId, // 采矿许可证
        cellIdx3: null, // 有效期
        cellIdx4: zzInfo2.credId, // 安全生产许可证
        cellIdx5: null, // 有效期
        cellIdx6: null, // 统一社会信用代码
        cellIdx7: null, // 主要负责人
        cellIdx8: null, // 联系电话
        cellIdx9: null, // 检查地点
        cellIdx10: null, // 检查人
        cellIdx11: null, // 记录人
        cellIdx12: null, // 陪同检查人员
        cellIdx13: `${baseInfor}\r\n${dangerInfor}`, // 检查情况
        cellIdx14: null, // 被检查单位意见
        cellIdx15: null, // 单位负责人签名
        cellIdx16: null, // 日期
        DangerTable: {
          baseInfor: baseInfor,
          dangerInfor: dangerInfor,
          tableData: [],
          selectedIdList: [],
          dangerItemDetail: {
            itemContent: null, // 违法行为描述
            confirmBasis: null, // 违法认定法条
            onsiteDesc: null, // 现场处理决定
            onsiteBasis: null, // 现场处理依据
            onsiteType: null, // 现场处理决定类型
            headingFace: null, // 掘进工作面
            deviceNum: null, // 设备台数
            coalingFace: null, // 采煤工作面
            penaltyDesc: null, // 行政处罚决定
            penaltyDescFine: null, // 行政处罚决定罚金
            penaltyBasis: null, // 行政处罚依据
            isSerious: false, // 是否重大隐患
            isReview: false, // 是否复查
            reviewDate: null, // 复查日期
          },
        }, // 隐患项大表
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
        if (key === "cellIdx13") {
          // 隐患项时对应letData中的dangerItemObject
          dataKey = "DangerTable";
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