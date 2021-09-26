<!-- 行政处罚 一般程序 陈述申辩笔录 -->
<template>
  <div style="width: 100%; height: 100%">
    <let-main
      ref="letMain"
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
            <div class="textAlignCenter formHeader1">陈 述 申 辩 笔 录</div>
            <div class="docTextLine">
              <label>讨论时间：</label>
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
            <div class="docTextLine">
              地&nbsp;&nbsp;&nbsp;&nbsp;点：
              <div style="flex: 1; display: flex">
                <div
                  class="line-div"
                  @click="commandFill('cellIdx7', '地点', 'TextItem')"
                >
                  {{ letData.cellIdx7 ? letData.cellIdx7 : "（点击编辑）" }}
                </div>
              </div>
            </div>
            <div class="docTextLine">
              <label>陈述、申辩人：</label>
              <div
                class="line-div"
                @click="commandFill('cellIdx8', '陈述申辩人', 'TextItem')"
              >
                {{ letData.cellIdx8 ? letData.cellIdx8 : "（点击编辑）" }}
              </div>
              <label>性&nbsp;&nbsp;&nbsp;别：</label>
              <div
                class="line-div"
                @click="commandFill('cellIdx9', '性别', 'TextItem')"
              >
                {{ letData.cellIdx9 ? letData.cellIdx9 : "（点击编辑）" }}
              </div>
              <label>年&nbsp;&nbsp;&nbsp;龄：</label>
              <div
                class="line-div"
                @click="commandFill('cellIdx10', '年龄', 'TextItem')"
              >
                {{ letData.cellIdx10 ? letData.cellIdx10 : "（点击编辑）" }}
              </div>
            </div>
            <div class="docTextLine">
              <div style="flex: 3; display: flex">
                <label>工作单位：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx11', '工作单位', 'TextItem')"
                >
                  {{ letData.cellIdx11 ? letData.cellIdx11 : "（点击编辑）" }}
                </div>
              </div>
              <div style="flex: 2; display: flex">
                <label>职务（职业）：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx12', '职务（职业）', 'TextItem')"
                >
                  {{ letData.cellIdx12 ? letData.cellIdx12 : "（点击编辑）" }}
                </div>
              </div>
            </div>
            <div class="docTextLine">
              <div style="flex: 3; display: flex">
                <label>住&nbsp;&nbsp;&nbsp;&nbsp;址：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx13', '住址', 'TextItem')"
                >
                  {{ letData.cellIdx13 ? letData.cellIdx13 : "（点击编辑）" }}
                </div>
              </div>
              <div style="flex: 2; display: flex">
                <label>电&nbsp;&nbsp;&nbsp;&nbsp;话：</label>
                <div
                  class="line-div"
                  @click="commandFill('cellIdx14', '电话', 'TextItem')"
                >
                  {{ letData.cellIdx14 ? letData.cellIdx14 : "（点击编辑）" }}
                </div>
              </div>
            </div>
            <div class="docTextLine">
              <div style="flex: 5; display: flex">
                <label>承办人（签名）：</label>
                <div
                  class="line-div"
                  @click="
                    commandFill('cellIdx15', '承办人（签名）', 'TextItem')
                  "
                >
                  {{ letData.cellIdx15 ? letData.cellIdx15 : "（点击编辑）" }}
                </div>
              </div>
              <div style="flex: 3; display: flex">
                <label>&nbsp;&nbsp;</label>
                <div
                  class="line-div"
                  @click="
                    commandFill('cellIdx16', '承办人（签名）', 'TextItem')
                  "
                >
                  {{ letData.cellIdx16 ? letData.cellIdx16 : "（点击编辑）" }}
                </div>
              </div>
              <div style="flex: 5; display: flex">
                <label>记录人（签名）：</label>
                <div
                  class="line-div"
                  @click="
                    commandFill('cellIdx17', '记录人（签名）', 'TextItem')
                  "
                >
                  {{ letData.cellIdx17 ? letData.cellIdx17 : "（点击编辑）" }}
                </div>
              </div>
            </div>
            <div class="docTextarea">
              陈述、申辩记录：我们是
              <span
                class="no-underline"
                @click="commandFill('cellIdx18', '执法人员', 'TextItem')"
                >{{
                  letData.cellIdx18 ? letData.cellIdx18 : "（点击编辑）"
                }}</span
              >
              的监察员，这是我们的证件（出示证件）。现对
              <span
                @click="commandFill('cellIdx19', '违法行为', 'DangerTableItem')"
                >{{
                  letData.cellIdx19 ? letData.cellIdx19 : "（点击编辑）"
                }}</span
              >
              听取你
              <span
                class="no-underline"
                @click="commandFill('cellIdx20', '单位/个人', 'SelectItem')"
                >{{
                  letData.cellIdx20 ? letData.cellIdx20 : "（点击编辑）"
                }}</span
              >
              的陈述、申辩。
            </div>
            <div
              style="
                word-wrap: break-word;
                word-break: break-all;
                overflow: hidden;
              "
              class="cellInput mutiLineArea"
              id="cell_idx_21"
              data-title="陈述申辩内容"
              data-type="textarea"
              data-src
              @click="commandFill('cellIdx21', '陈述申辩内容', 'TextareaItem')"
            >
              <p
                style="
                  width: 100%;
                  height: auto;
                  word-wrap: break-word;
                  word-wrap: break-all;
                  overflow: hidden;
                "
              >
                &nbsp;{{
                  letData.cellIdx21 ? letData.cellIdx21 : "（点击编辑）"
                }}
              </p>
              <p
                style="
                  width: 100%;
                  height: auto;
                  word-wrap: break-word;
                  word-wrap: break-all;
                  overflow: hidden;
                "
              >
                &nbsp;
              </p>
            </div>
            <table height="60"></table>
            <div class="docTextarea cellLine">
              <label style="width: 5%"></label>
              备注：陈述、申辩人应在过目笔录后，签署意见，并签名押印。
            </div>
            <table height="50"></table>
          </div>
        </div>
      </div>
    </let-main>
  </div>
</template>

<script>
import letMain from "@/views/make-law-writ/components/let-main.vue";
import GoDB from "@/utils/godb.min.js";
import { getDangerObject } from "@/utils/setInitPaperData";
export default {
  name: "Let205",
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
  },
  data() {
    return {
      letData: {},
      options: {
        cellIdx19: {
          page: "30",
          key: "cellIdx19", // 用来区分一个页面多个地方调用隐患大表，最后返回值
        },
      },
      editData: {}, // 回显数据
      extraData: {}, // 用于拼写隐患内容的字符集合
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
      const db = new GoDB(this.$store.state.DBName);
      //查询符合条件的记录
      const wkPaper = db.table("wkPaper");
      const caseId = this.corpData.caseId;
      const checkPaper = await wkPaper.findAll((item) => {
        return (
          item.caseId === caseId &&
          item.paperType === this.docData.docTypeNo &&
          item.delFlag !== "1"
        );
      });
      const corpBase = db.table("corpBase");
      const corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      // await wkPaper.delete(checkPaper[0].id)
      // 保存额外拼写的数据内容，用于修改隐患项时回显使用
      this.extraData = {
        corpName: corp.corpName,
      };
      if (checkPaper.length > 0) {
        // 回显
        this.letData = JSON.parse(checkPaper[0].paperContent);
        this.editData = checkPaper[0];
      } else {
        // 创建初始版本
        // 1.时间：当前年、月、日、时、分
        let now = new Date();
        let cellIdx0Year = now.getFullYear();
        let cellIdx1Month = now.getMonth() + 1;
        let cellIdx2Date = now.getDate();
        let cellIdx3Hour = now.getHours();
        let cellIdx4Minu = now.getMinutes();
        // 2.工作单位：煤矿名称
        let cellIdx11String = corp.corpName;
        // 3.监察单位
        let cellIdx18String = this.$store.state.user.userGroupName;
        // 获取笔录文书中的隐患数据
        const let101Data = await wkPaper.find((item) => {
          return item.caseId === caseId && item.paperType === "1";
        });
        let let101DataPapaerContent = JSON.parse(let101Data.paperContent);
        let dangerObject = getDangerObject(
          let101DataPapaerContent.dangerItemObject.tableData
        );
        // 4.陈述申辩：煤矿名称 + '涉嫌' + 隐患描述 + '案。'
        let cellIdx19String = `${corp.corpName}涉嫌${dangerObject.dangerString}案。`;
        // 5.单位/个人：从行政处罚告知书(paperType === '6')中获取
        const let204Data = await wkPaper.find(
          (item) => item.caseId === caseId && item.paperType === "6"
        );
        let let204DataPaperContent = JSON.parse(let204Data.paperContent);
        let cellIdx20String = let204DataPaperContent.cellIdx5;
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
          cellIdx13: null, // 邮政编码
          cellIdx14: null, // 电话
          cellIdx15: null, // 承办人（签名）
          cellIdx16: null, // 承办人（签名）
          cellIdx17: null, // 记录人（签名）
          cellIdx18: cellIdx18String, // 监察员
          cellIdx18TypeTextItem: cellIdx18String, // 监察员
          cellIdx19: cellIdx19String, // 违法行为
          cellIdx20: cellIdx20String, // 单位/个人
          cellIdx20TypeTextItem: cellIdx20String, // 单位/个人
          cellIdx21: null, // 法制审核意见
          dangerItemObject: let101DataPapaerContent.dangerItemObject,
        };
      }
      await db.close();
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
        if (key === "cellIdx19") {
          this.options[key] = {
            page: "30",
            key: key,
            spellString: this.extraData,
          };
          dataKey = "dangerItemObject";
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