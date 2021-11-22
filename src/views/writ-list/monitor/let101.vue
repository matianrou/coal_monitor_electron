<!-- 现场检查 一般检查 现场检查笔录 -->
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
            <div class="textAlignCenter formHeader3">现 场 检 查 笔 录</div>
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
              <span class="no-line">检查地点（路线）：</span>
              <span
                @click="commandFill('cellIdx2', '检查地点（路线）', 'TextItem')"
                >{{
                  letData.cellIdx2 ? letData.cellIdx2 : "（点击编辑）"
                }}</span
              >
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:50%">
                <span class="no-line">采矿许可证：</span>
                <span @click="commandFill('cellIdx3', '采矿许可证', 'TextItem')"
                  >{{ letData.cellIdx3 ? letData.cellIdx3 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">安全生产许可证：</span>
                <span @click="commandFill('cellIdx4', '安全生产许可证', 'TextItem')">{{
                  letData.cellIdx4 ? letData.cellIdx4 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
                <div class="line1"></div>
            </div>
            <div class="docTextarea">
              <span class="no-line">检查人（签名）：</span>
              <span
                @click="commandFill('cellIdx5', '检查人（签名）', 'TextItem')"
                >{{
                  letData.cellIdx5 ? letData.cellIdx5 : "（点击编辑）"
                }}</span
              >
              <div class="line"></div>
            </div>
          </div>
          <div class="docTextarea">
              <div style="display:inline-block;min-width:50%">
                <span class="no-line">记录人（签名）：</span>
                <span @click="commandFill('cellIdx6', '记录人（签名）', 'TextItem')"
                  >{{ letData.cellIdx6 ? letData.cellIdx6 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">陪同检察人员：</span>
                <span @click="commandFill('cellIdx7', '陪同检察人员', 'TextItem')">{{
                  letData.cellIdx7 ? letData.cellIdx7 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
                <div class="line1"></div>
            </div>
          <div class="docTextarea">
            <span class="no-line">检查情况：</span>
            <span
              @click="commandFill('cellIdx8', '检查情况', 'DangerTable')"
              >{{ letData.cellIdx8 ? letData.cellIdx8 : "（点击编辑）" }}</span
            >
            <div class="line"></div>
          </div>
          <!-- <div class="docTextarea">
              <span class="no-line">被检查单位负责人意见：</span>
              <span
                @click="commandFill('cellIdx17', '被检查单位负责人意见', 'TextItem')">
                  {{letData.cellIdx17 ? letData.cellIdx17 : "（点击编辑）"}}</span>
              <div class="line"></div>
            </div>
            <div class="docTextarea">
              <div style="display:inline-block;min-width:60%">
                <span class="no-line">单位负责人（签名）：</span>
                <span @click="commandFill('cellIdx18', '单位负责人（签名）', 'TextItem')">{{
                  letData.cellIdx18 ? letData.cellIdx18 : "（点击编辑）"
                }}</span>
              </div>
                <span class="no-line">日期：</span>
                <span @click="commandFill('cellIdx19', '日期', 'DateItem')">{{
                  letData.cellIdx19 ? letData.cellIdx19 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
                <div class="line1"></div>
            </div> -->
          <div class="docTextarea">
              <div style="display:inline-block;min-width:50%">
                <span class="no-line">被检查单位负责人意见：</span>
                <span @click="commandFill('cellIdx9', '被检查单位负责人意见', 'TextItem')"
                  >{{ letData.cellIdx9 ? letData.cellIdx9 : "（点击编辑）" }}
                </span>
              </div>
                <span class="no-line">签名：</span>
                <span @click="commandFill('cellIdx10', '签名', 'TextItem')">{{
                  letData.cellIdx10 ? letData.cellIdx10 : "（点击编辑）"
                }}</span>
                <span class="no-line">日期：</span>
                <span @click="commandFill('cellIdx11', '日期', 'DateItem')">{{
                  letData.cellIdx11 ? letData.cellIdx11 : "（点击编辑）"
                }}</span>
                <div class="line"></div>
                <div class="line1"></div>
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
      letData: {
        DangerTable: {
          baseInfor: null,
          tableData: [],
          selectedIdList: [],
          dangerItemDetail: {
            itemContent: null, // 违法行为描述
            confirmClause: null, // 违法认定法条
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
      },
      options: {
        cellIdx8: {
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
      const db = new GoDB(this.$store.state.DBName);
      const corpBase = db.table("corpBase");
      //查询符合条件的记录
      const corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      await db.close();
      this.letData = {
        cellIdx0: corp.corpName ? corp.corpName : null, // 被检查单位
        cellIdx0TypeTextItem: corp.corpName ? corp.corpName : null,
        cellIdx1: null, // 检查时间
        cellIdx2: null, // 检查地点（路线）
        cellIdx3: null, // 采矿许可证
        cellIdx4: null, // 安全生产许可证
        cellIdx5: null, // 检查人（签名）
        cellIdx6: null, // 记录人（签名）
        cellIdx7: null, // 陪同检察人员
        cellIdx8: null, // 检查情况
        cellIdx9: null, // 被检查单位负责人意见
        cellIdx10: null, // 签名
        cellIdx11: null, // 日期
      };
    },
    goBack({ page, data }) {
      // 返回选择企业
      this.$emit("go-back", { page, data });
    },
    commandFill(key, title, type) {
      // 判断是否可编辑
      if (this.$refs.letMain.canEdit) {
        // 打开编辑
        let dataKey = `${key}`;
        if (key === "cellIdx8") {
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