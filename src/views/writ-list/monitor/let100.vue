<!-- 现场检查 一般检查 检查方案 22 -->
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
            <div class="textAlignCenter formHeader3">检 查 方 案</div>
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
                >&nbsp;&nbsp;&nbsp;&nbsp;二、监察类型或方式：</span
              >
              <span
                @click="commandFill('cellIdx1', '监察类型或方式', 'CheckItem')"
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
                >&nbsp;&nbsp;&nbsp;&nbsp;四、矿山概况：</span
              >
              <span
                @click="commandFill('cellIdx3', '矿山概况', 'TextareaItem')"
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
                    `${letData.cellIdx12}检查分工明细表`,
                    'CheckTable'
                  )
                "
              >
                六、检查的主要内容和分工见明细表（附件：《{{letData.cellIdx12}}检查分工明细表》）
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
            <div class="docTextLine">
              <label style="width: 5%"></label>
              <label>附件：</label>
              <div
                class="no-line-div"
                @click="
                  commandFill(
                    'cellIdx5',
                    `${letData.cellIdx12}检查分工明细表`,
                    'CheckTable'
                  )
                "
              >
                《{{letData.cellIdx12}}检查分工明细表》
              </div>
            </div>
              <div class="docTextarea">
                <div style="display:inline-block;min-width:60%">
                  <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;编制人（签名）：</span>
                  <span @click="commandFill('cellIdx8', '编制人', 'TextItem')"
                    >{{ letData.cellIdx8 ? letData.cellIdx8 : "（点击编辑）" }}
                  </span>
                </div>
                <span class="no-line">日期：</span>
                <span style="width:19%" @click="commandFill('cellIdx9', '日期', 'DateItem')">{{
                  letData.cellIdx9 ? letData.cellIdx9 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
            </div>
            <div class="docTextarea" >
              <div style="display:inline-block;min-width:60%">
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;带队人（签名）：</span>
                <span @click="commandFill('cellIdx15', '带队人（签名）', 'TextItem')">{{ 
                  letData.cellIdx15 ? letData.cellIdx15 : "（点击编辑）" }}</span>
              </div>
              <span class="no-line">日期：</span>
              <span @click="commandFill('cellIdx16', '日期', 'DateItem')">{{
              letData.cellIdx16 ? letData.cellIdx16 : "（点击编辑）"}}</span>
              <div class="line"></div>
            </div>
            <div class="docTextarea" >
              <div style="display:inline-block;min-width:60%">
                <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;审批人（签名）：</span>
                <span @click="commandFill('cellIdx10', '审批人（签名）', 'TextItem')">{{ 
                  letData.cellIdx10 ? letData.cellIdx10 : "（点击编辑）" }}</span>
              </div>
              <span class="no-line">日期：</span>
              <span @click="commandFill('cellIdx11', '日期', 'DateItem')">{{
              letData.cellIdx11 ? letData.cellIdx11 : "（点击编辑）"}}</span>
              <div class="line"></div>
            </div>
          </div>
        </div>
        <div style="height: 20px; width: 100%"></div>
        <!-- 打印22检查方案，另外打印检查分工明细表 -->
        <div class="page-break"></div>
        <!-- 但页面不展示 -->
        <div style="height: 0px; overflow: hidden">
          <div ref="CheckTable" class="page page-sizeA4">
            <div style="padding: 10px 0; text-align: center">
              XX矿山安全监察局检查分工明细表
            </div>
            <div style="width: 19.5cm">
              <el-table
                :data="letData.CheckTable && letData.CheckTable.tableData"
                width="100%"
                border
              >
                <el-table-column
                  prop="categoryName"
                  label="检查事项"
                  header-align="center"
                  align="left"
                  width="110"
                >
                </el-table-column>
                <el-table-column
                  prop="itemContent"
                  header-align="center"
                  align="left"
                  label="检查内容"
                >
                </el-table-column>
                <el-table-column
                  prop="method"
                  header-align="center"
                  align="left"
                  label="检查主要资料及方法"
                >
                </el-table-column>
                <el-table-column
                  prop="positions"
                  label="检查地点"
                  header-align="center"
                  align="left"
                >
                </el-table-column>
                <el-table-column
                  prop="labor"
                  label="检查分工"
                  header-align="center"
                  align="left"
                >
                </el-table-column>
                <el-table-column
                  prop="condition"
                  label="调整情况"
                  header-align="center"
                  align="left"
                >
                </el-table-column>
              </el-table>
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
  name: "Let100",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {
        cellIdx0: null, // 被检查单位
        cellIdx1: null, // 监察类型或方式
        cellIdx2: null, // 检查时间
        cellIdx3: null, // 煤矿概况
        cellIdx4: null, // 检查地点
        cellIdx5: [], // 检查分工明细表
        cellIdx6: null, // 其他事项
        cellIdx8: null, // 编制人
        cellIdx9: null, // 编制日期
        cellIdx15: null, // 带队人
        cellIdx16: null, // 日期
        cellIdx10: null, // 审批人
        cellIdx11: null, // 审批日期
        cellIdx12: this.$store.state.curCase.provinceGroupName,
        cellIdx13: null,
        cellIdx14: null,
        CheckTable: {
          tableData: [],
        }
      },
      options: {},
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
      let zfZzInfo = db.table("zfZzInfo");
      let zzInfo1 = await zfZzInfo.find((item) => {
        return (
          item.corpId == this.corpData.corpId &&
          item.credTypeName == "采矿许可证"
        );
      });
      let zzInfo2 = await zfZzInfo.find((item) => {
        return (
          item.corpId == this.corpData.corpId &&
          item.credTypeName == "安全生产许可证"
        );
      });
      let sSummary =
        corp.corpName +
        "位于" +
        corp.provinceName +
        corp.cityName +
        corp.countryName +
        "境内，隶属于" +
        (corp.parentTypeName ? corp.parentTypeName : 'XX') +
        "煤矿。 ";
      if (zzInfo1 && zzInfo1.expireTime)
        sSummary += "采矿许可证有效日期至" + zzInfo1.expireTime + "、";
      else sSummary += "采矿许可证有效日期至XX";
      if (zzInfo2 && zzInfo2.expireTime)
        sSummary += "、安全生产许可证有效期至" + zzInfo2.expireTime + "，";
      else sSummary += "、安全生产许可证有效期至XX，";
      if (corp.provedOutput)
        sSummary += "矿井核定生产能力为" + corp.provedOutput + "万吨/年，";
      else sSummary += "矿井核定生产能力为XX万吨/年，";
      sSummary +=
        (corp.mineWsGradeName ? corp.mineWsGradeName : 'XX') +
        "、水文地质类型为中等，煤层自燃倾向性为" +
        (corp.mineFireName ? corp.mineFireName : 'XX') +
        "，煤尘" +
        (corp.grimeExplosiveName ? corp.grimeExplosiveName : 'XX') +
        "，";
      sSummary +=
        "矿井状况为" +
        (corp.mineStatusZsName ? corp.mineStatusZsName : 'XX') +
        "，开拓方式为" +
        (corp.mineMinestyleName ? corp.mineMinestyleName : 'XX') +
        "开拓。";
      sSummary +=
        "采煤方式为综采。通风方式为中央分列抽出，采掘作业地点有71003综采工作面采煤工作面、 71007综采工作面风巷、71007综采工作面机巷掘进工作面。";
      let corpOther = "检查的内容和分工变化时，应及时调整。";
      await db.close();
      this.letData = Object.assign({}, this.letData, {
        cellIdx0: corp.corpName ? corp.corpName : null, // 被检查单位
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