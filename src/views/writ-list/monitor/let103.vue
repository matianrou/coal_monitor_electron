<!-- 现场检查 复查 检查方案(复查) 42 -->
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
              <span class="no-line">&nbsp;&nbsp;&nbsp;&nbsp;一、被检查单位：</span>
              <span
                @click="commandFill('cellIdx0', '被检查单位', 'TextItem')">{{
                  letData.cellIdx0 ? letData.cellIdx0 : "（点击编辑）"}}</span>
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
                    '检查的主要内容和分工见明细表',
                    'CheckTable'
                  )
                "
              >
                六、检查的主要内容和分工见明细表（附件：《XX矿山安全监察局检查分工明细表》）
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
                    'cellIdx7',
                    '检查的主要内容和分工见明细表',
                    'CheckTable'
                  )
                "
              >
                《XX矿山安全监察局检查分工明细表》
              </div>
            </div>
            <div class="docTextLine">
              <label style="width: 5%"></label>
              <div style="flex: 1; display: flex">
                <label>编制人（签名）：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx8', '编制人', 'TextItem')"
                >
                  {{ letData.cellIdx8 ? letData.cellIdx8 : "（点击编辑）" }}
                </div>
              </div>
              <div style="flex: 1; display: flex">
                <label>日期：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx9', '日期', 'DateItem')"
                >
                  {{ letData.cellIdx9 ? letData.cellIdx9 : "（点击编辑）" }}
                </div>
              </div>
            </div>
            <div class="docTextLine">
              <label style="width: 5%"></label>
              <div style="flex: 1; display: flex">
                <label>审批人（签名）：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx10', '审批人', 'TextItem')"
                >
                  {{ letData.cellIdx10 ? letData.cellIdx10 : "（点击编辑）" }}
                </div>
              </div>
              <div style="flex: 1; display: flex">
                <label>日期：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx11', '日期', 'DateItem')"
                >
                  {{ letData.cellIdx11 ? letData.cellIdx11 : "（点击编辑）" }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style="height: 20px; width: 100%"></div>
        <!-- 打印42检查方案（复查），另外打印检查分工明细表 -->
        <div class="page-break"></div>
        <!-- 但页面不展示 -->
        <div style="height: 0px; overflow: hidden">
          <div ref="CheckTable" class="page page-sizeA4">
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
                  prop="basis"
                  header-align="center"
                  align="left"
                  label="检查主要资料及方法"
                >
                </el-table-column>
                <el-table-column
                  prop="positions"
                  header-align="center"
                  align="left"
                  label="检查地点"
                >
                </el-table-column>
                <el-table-column
                  prop="personNames"
                  header-align="center"
                  align="left"
                  label="检查人员"
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
  name: "Let103",
  mixins: [associationSelectPaper],
  data() {
    return {
      letData: {},
      options: {
        cellIdx1: [
          { value: "1", name: "重点监察" },
          { value: "2", name: "专项监察" },
          { value: "3", name: "随机抽查" },
          { value: "4", name: "会诊" },
          { value: "5", name: "体检" },
          { value: "7", name: "煤矿安全集中整治" },
          { value: "8", name: "“一通三防”全覆盖专项监察" },
          { value: "9", name: "水害防治专项监察" },
          { value: "10", name: "机电设备专项监察" },
          { value: "11", name: "安全培训专项监察" },
          { value: "12", name: "提升运输专项监察" },
          { value: "13", name: "顶板管理专项监察" },
          { value: "14", name: "采掘接续专项监察" },
          { value: "15", name: "建设项目专项监察" },
          { value: "16", name: "冲击地压防治专项监察" },
          { value: "17", name: "超能力生产专项监察" },
          { value: "18", name: "安全投入专项监察" },
          { value: "19", name: "安全生产主体责任专项监察" },
          { value: "20", name: "矿领导带班下井专项监察" },
          { value: "21", name: "安全生产许可证专项监察" },
          { value: "22", name: "安全监控系统专项监察" },
          { value: "23", name: "应急救援专项监察" },
          { value: "25", name: "“互联网+ 监管” 远程监察" },
          { value: "30", name: "异地监察" },
          { value: "32", name: "全系统各环节监察" },
          { value: "33", name: "停产停工安全巡查" },
          { value: "26", name: "其他专项监察" },
          { value: "6", name: "其他" },
        ],
      },
    };
  },
  methods: {
    async initLetData() {
    // 创建初始版本
    const db = new GoDB(this.$store.state.DBName);
    const corpBase = db.table("corpBase");
    //查询符合条件的记录
    const corp = await corpBase.find((item) => {
      return item.corpId == this.corpData.corpId;
    });
      const zfZzInfo = db.table("zfZzInfo");
      const zzInfo1 = await zfZzInfo.find((item) => {
        return (
          item.corpId == this.corpData.corpId &&
          item.credTypeName == "采矿许可证"
        );
      });
      const zzInfo2 = await zfZzInfo.find((item) => {
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
        corp.parentTypeName +
        "煤矿。 ";
      if (zzInfo1 && zzInfo1.expireTime)
        sSummary += "采矿许可证有效日期至" + zzInfo1.expireTime + "、";
      else sSummary += "采矿许可证有效日期至    ";
      if (zzInfo2 && zzInfo2.expireTime)
        sSummary += "、安全生产许可证有效期至" + zzInfo2.expireTime + "，";
      else sSummary += "、安全生产许可证有效期至    ，";
      if (corp.provedOutput)
        sSummary += "矿井核定生产能力为" + corp.provedOutput + "万吨/年，";
      else sSummary += "矿井核定生产能力为   万吨/年，";
      sSummary +=
        corp.mineWsGradeName +
        "、水文地质类型为中等，煤层自燃倾向性为" +
        corp.mineFireName +
        "，煤尘" +
        corp.grimeExplosiveName +
        "，";
      sSummary +=
        "矿井状况为" +
        corp.mineStatusZsName +
        "，开拓方式为" +
        corp.mineMinestyleName +
        "开拓。";
      sSummary +=
        "采煤方式为综采。通风方式为中央分列抽出，采掘作业地点有71003综采工作面采煤工作面、 71007综采工作面风巷、71007综采工作面机巷掘进工作面。";
      let corpOther = "检查的内容和分工变化时，应及时调整。";
      await db.close();
      this.letData = {
        cellIdx0: corp.corpName ? corp.corpName : null, // 被检查单位
        cellIdx0TypeTextItem: corp.corpName ? corp.corpName : null,
        cellIdx1: null, // 监察类型或方式
        cellIdx2: null, // 检查时间
        cellIdx3: sSummary ? sSummary : null, // 煤矿概况
        cellIdx3TypeTextareaItem: sSummary ? sSummary : null, // 煤矿概况
        cellIdx4: null, // 检查地点
        cellIdx5: [], // 检查分工明细表
        cellIdx6: corpOther, // 其他事项
        cellIdx6TypeTextItem: corpOther, // 其他事项
        cellIdx8: null, // 编制人
        cellIdx9: null, // 编制日期
        cellIdx10: null, // 审批人
        cellIdx11: null, // 审批日期
        CheckTable: {
          tableData: [],
          selectedIdList: [],
        }, // 检查表
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
        if (key === "cellIdx5") {
          dataKey = `${type}`;
        } else if (key === 'cellIdx4') {
          dataKey = `${key}Type${type}`
        }
        this.$refs.letMain.commandFill(
          key,
          dataKey,
          title,
          type,
          this.letData[dataKey],
          this.options[key]
        );
      }else {
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