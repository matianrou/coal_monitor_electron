<!-- 现场检查 一般检查 检查方案 22 -->
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
            <div class="textAlignCenter formHeader0">
              煤矿安全监管行政执法文书
              <br />
            </div>
            <div class="textAlignCenter formHeader1">检查方案</div>
            <div class="docTextarea">
              <span class="no-line"
                >&nbsp;&nbsp;&nbsp;&nbsp;一、被检查单位：</span
              >
              <span
                @click="commandFill('cellIdx0', '被检查单位', 'TextItem')"
                >{{
                  letData.cellIdx0 ? letData.cellIdx0 : "（点击编辑）"
                }}</span
              >
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line"
                >&nbsp;&nbsp;&nbsp;&nbsp;二、监管类型或方式：</span
              >
              <span
                @click="commandFill('cellIdx1', '监管类型或方式', 'CheckItem')"
                >{{
                  letData.cellIdx1 ? letData.cellIdx1 : "（点击编辑）"
                }}</span
              >
              <div class="line"></div>
            </div>
            <div class="docTextLine">
              <label style="width: 2em"></label>
              <label>三、检查时间：</label>
              <div
                class="line-div"
                @click="commandFill('cellIdx2', '检查时间', 'DaterangeItem')"
              >
                {{ letData.cellIdx2 ? letData.cellIdx2 : "（点击编辑）" }}
              </div>
            </div>
            <div class="docTextarea">
              <span class="no-line"
                >&nbsp;&nbsp;&nbsp;&nbsp;四、煤矿概况：</span
              >
              <span
                @click="commandFill('cellIdx3', '煤矿概况', 'TextareaItem')"
                >{{
                  letData.cellIdx3 ? letData.cellIdx3 : "（点击编辑）"
                }}</span
              >
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line"
                >&nbsp;&nbsp;&nbsp;&nbsp;五、检查地点：</span
              >
              <span
                @click="
                  commandFill('cellIdx4', '检查地点', 'CheckPositionItem')
                "
                >{{
                  letData.cellIdx4 ? letData.cellIdx4 : "（点击编辑）"
                }}</span
              >
              <div class="line"></div>
            </div>
            <div class="docTextLine">
              <label style="width: 2em"></label>
              <div
                class="no-line-div"
                @click="
                  commandFill(
                    'cellIdx5',
                    '检查分工明细表',
                    'CheckTable'
                  )
                "
              >
                六、检查的主要内容和分工见明细表（详见《检查分工明细表》）
              </div>
              <div></div>
            </div>
            <div class="docTextarea">
              <span class="no-line"
                >&nbsp;&nbsp;&nbsp;&nbsp;七、其他事项：</span
              >
              <span @click="commandFill('cellIdx6', '其他事项', 'TextItem')">{{
                letData.cellIdx6 ? letData.cellIdx6 : "（点击编辑）"
              }}</span>
              <div class="line"></div>
            </div>
            <div
              class="docTextLine"
              style="margin-top: 30px; margin-bottom: 30px"
            >
              <label style="width: 2em"></label>
              <label>附件：</label>
              <div
                class="no-line-div"
                @click="
                  commandFill(
                    'cellIdx5',
                    '检查分工明细表',
                    'CheckTable'
                  )
                "
              >
                检查分工明细表
              </div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:55%">
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;编制人（签名）：</span>
                <span @click="commandFill('cellIdx8', '编制人', 'TextItem')"
                  >{{ letData.cellIdx8 ? letData.cellIdx8 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;日期：</span>
                <span @click="commandFill('cellIdx9', '日期', 'DateItem')">{{
                  letData.cellIdx9 ? letData.cellIdx9 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:55%">
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;带队人（签名）：</span>
                <span @click="commandFill('cellIdx10', '带队人（签名）', 'TextItem')"
                  >{{ letData.cellIdx10 ? letData.cellIdx10 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;日期：</span>
                <span @click="commandFill('cellIdx11', '日期', 'DateItem')">{{
                  letData.cellIdx11 ? letData.cellIdx11 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:55%">
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;审批人（签名）：</span>
                <span @click="commandFill('cellIdx12', '审批人（签名）', 'TextItem')"
                  >{{ letData.cellIdx12 ? letData.cellIdx12 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;日期：</span>
                <span @click="commandFill('cellIdx13', '日期', 'DateItem')">{{
                  letData.cellIdx13 ? letData.cellIdx13 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <!-- <div class="footer-test">页脚</div> -->
            <div style="height: 20px; width: 100%"></div>
          </div>
        </div>
        <div style="height: 20px; width: 100%"></div>
        <!-- 打印22检查方案，另外打印检查分工明细表 -->
        <div class="page-break"></div>
        <!-- 但页面不展示 -->
        <div style="height: 0px; overflow: hidden">
          <div ref="CheckTable" class="page page-sizeA4">
            <div style="padding: 10px 0; text-align: center">
              检查分工明细表
            </div>
            <div style="width: 19.5cm; margin: 0 auto;">
              <table border="0" cellspacing="0" cellpadding="10" style="border: 1px solid #E4E7ED;">
                <tr>
                  <th width="70" style="border: 1px solid #E4E7ED; color: #606266;">检查事项</th>
                  <th style="border: 1px solid #E4E7ED; color: #606266;">检查内容</th>
                  <th style="border: 1px solid #E4E7ED; color: #606266;">检查主要资料及方法</th>
                  <th width="70" style="border: 1px solid #E4E7ED; color: #606266;">检查地点</th>
                  <th width="70" style="border: 1px solid #E4E7ED; color: #606266;">检查分工</th>
                  <th width="70" style="border: 1px solid #E4E7ED; color: #606266;">调整情况</th>
                </tr>
                <tr
                  v-for="(item, index) in letData.CheckTable.tableData"
                  :key="index"
                >
                  <th style="border: 1px solid #E4E7ED; color: #606266;">{{item.categoryName}}</th>
                  <th style="border: 1px solid #E4E7ED; color: #606266;">{{item.itemContent}}</th>
                  <th style="border: 1px solid #E4E7ED; color: #606266;">{{item.method}}</th>
                  <th style="border: 1px solid #E4E7ED; color: #606266;">{{item.positions}}</th>
                  <th style="border: 1px solid #E4E7ED; color: #606266;">{{item.personNames}}</th>
                  <th style="border: 1px solid #E4E7ED; color: #606266;">{{item.situation}}</th>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </let-main>
  </div>
</template>

<script>
import associationSelectPaper from "@/components/association-select-paper";
import { corpInformation }from '@/utils/setInitPaperData'
import { handleDateNormal }from '@/utils/date'
export default {
  name: "Let100",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {
        cellIdx0: null, // 被检查单位
        cellIdx1: null, // 监管类型或方式
        cellIdx2: null, // 检查时间
        cellIdx3: null, // 煤矿概况
        cellIdx4: null, // 检查地点
        cellIdx5: null, // 检查分工明细表
        cellIdx6: null, // 其他事项
        cellIdx8: null, // 编制人
        cellIdx9: null, // 编制日期
        cellIdx10: null, // 带队人
        cellIdx11: null, // 审批日期
        cellIdx12: null, // 审批人
        cellIdx13: null, // 审批日期
        CheckTable: {
          tableData: [],
          selectedIdList: [],
        }, // 检查表
      },
      options: {},
    };
  },
  methods: {
    async initLetData() {
      // 创建初始版本
      let corpBase = await this.getDatabase("baseInfo");
      //查询符合条件的记录
      let corp = corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      // 1.获取创建检查活动的检查时间
      let wkCase = await this.getDatabase('wkCase')
      let caseData = await wkCase.find(item => item.caseId === this.corpData.caseId && item.delFlag !== '1')
      let beginList = caseData.planBeginDate.split(' ')
      let endList = caseData.planEndDate.split(' ')
      let cellIdx2String = handleDateNormal(beginList[0], endList[0])
      // 2.默认选中监察类型或方式的第一个选项
      let sSummary = await corpInformation(corp)
      let corpOther = "检查的内容和分工变化时，应及时调整。";
      this.letData = Object.assign({}, this.letData, {
        cellIdx0: corp.corpName ? corp.corpName : null, // 被检查单位
        cellIdx1: this.options.cellIdx1[0].label,
        cellIdx2: cellIdx2String,
        cellIdx3: sSummary ? sSummary : null, // 煤矿概况
        cellIdx6: corpOther, // 其他事项
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
        if (key === "cellIdx5") {
          dataKey = `${type}`;
        } else if (key === 'cellIdx4') {
          dataKey = `${key}Type${type}`;
        }
        this.$refs.letMain.commandFill(
          key,
          dataKey,
          title,
          type,
          this.letData[dataKey],
          this.options[key]
        );
      } else {
        if (key === "cellIdx5") {
          let dataKey = `${type}`;
          this.options[key] = {
            canEdit: false,
          };
          this.$refs.letMain.commandFill(
            key,
            dataKey,
            title,
            type,
            this.letData[dataKey],
            this.options[key]
          );
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/let";
</style>