<!-- 现场检查 一般检查 检查方案 -->
<template>
  <div style="width: 100%;">
    <let-main
      :corp-data="corpData"
      @go-back="goBack">
      <div slot="left">
        <div class="page page-sizeA4">
          <div>
            <div class="stdRowH"></div>
            <div class="textAlignCenter formHeader0">
              国 家 煤 矿 安 全 监 察
              <br />
            </div>
            <div class="textAlignCenter formHeader1">检 查 方 案</div>
            <div class="stdRowH"></div>
            <table class="docBody">
              <tr>
                <td class="textAlignLeft">一、被检查单位：</td>
                <td
                  class="cellInput textPaddingLeft cellBottomLine oneLine checkName"
                  id="cell_idx_0"
                  style="width:79%"
                  data-title="被检查单位"
                  data-type="text"
                  @click="commandFill('corpName', '一、被检查单位：', 'InputItem')"
                >{{ letData.corpName }}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">二、监察类型或方式：</td>
                <td
                  class="cellInput textPaddingLeft cellBottomLine oneLine"
                  id="cell_idx_1"
                  style="width:74.6%"
                  data-title="监察类型或方式"
                  data-type="check"
                  data-src="let-100"
                  @click="commandFill('corpMonitor', '二、监察类型或方式：', 'MonitorCheckItem')"
                >{{ letData.corpMonitor }}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">三、检查时间：</td>
                <td
                  class="cellInput cellBottomLine checktime"
                  id="cell_idx_2"
                  style="width:81.3%"
                  data-title="检查时间"
                  data-type="dateregion"
                  data-src
                  onclick="commandFill(this.id)"
                >{{ letData.corpTime }}</td>
              </tr>
              <tr>
                <td class="textAlignLeft">四、煤矿概况：</td>
                <td style="width:81.3%"></td>
              </tr>
            </table>
            <div
              style="word-wrap:break-word;word-break:break-all;overflow:hidden;"
              class="cellInput mutiLineArea"
              id="cell_idx_3"
              data-title="煤矿概况"
              data-type="textarea"
              data-src
              onclick="commandFill(this.id)"
            >
              <p
                style="width:100%; height:auto; word-wrap:break-word;word-wrap: break-all; overflow: hidden;"
              >{{ letData.corpSummary }}</p>
            </div>
            <table class="docBody">
              <tr>
                <td style="width:18%" class="textAlignLeft">五、检查地点：</td>
                <td
                  style="width:82%"
                  class="cellInput cellBottomLine oneLine checkAddress"
                  id="cell_idx_4"
                  data-title="检查地点"
                  data-type="text"
                  data-src="/organization/addAddress.html"
                  onclick="commandFill(this.id)"
                >{{ letData.corpChecksite }}</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td style="width:40%" class="textAlignLeft">六、检查的主要内容和分工见明细表</td>
                <td
                  style="width:60%"
                  class="cellInput cellBottomLine"
                  id="cell_idx_5"
                  data-title="检查的主要内容和分工见明细表"
                  data-type="check4"
                  data-src="/organization/checkList.html"
                  onclick="commandFill(this.id)"
                >《检查分工明细表》</td>
              </tr>
            </table>
            <table class="docBody">
              <tr>
                <td style="width:18%" class="textAlignLeft">七、其他事项：</td>
                <td
                  style="width:82%"
                  class="cellInput textPaddingLeft cellBottomLine oneLine"
                  id="cell_idx_6"
                  data-title="其他事项"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                >检查的内容和分工变化时，应及时调整。</td>
              </tr>
              <tr>
                <td Sclass="textAlignLeft">附件：</td>
                <td
                  class="cellInput"
                  id="cell_idx_7"
                  data-title="附件"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                >《检查分工明细表》</td>
              </tr>
              <tr></tr>
            </table>
            <table class="docBody">
              <tr>
                <td class="textAlignLeft">编制人（签名）：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_8"
                  style="width:35%"
                  data-title="编制人"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignCenter">日期：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_9"
                  style="width:25%"
                  data-title="日期"
                  data-type="date"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
              </tr>
              <tr>
                <td class="textAlignLeft">审批人（签名）：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_10"
                  style="width:35%"
                  data-title="审批人"
                  data-type="text"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
                <td class="textAlignCenter">日期：</td>
                <td
                  class="cellInput cellBottomLine"
                  id="cell_idx_11"
                  style="width:25%"
                  data-title="日期"
                  data-type="date"
                  data-src
                  onclick="commandFill(this.id)"
                ></td>
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
    ></let-drawer>
  </div>
</template>

<script>
import letMain from "@/views/make-law-writ/components/writ-list/components/let-main";
import letDrawer from '@/views/make-law-writ/components/writ-list/components/let-drawer'
import GoDB from '@/utils/godb.min.js'
export default {
  name: "Let100",
  props: {
    corpData: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    letMain,
    letDrawer,
  },
  data() {
    return {
      letData: {}, // 文书基本数据
      visible: false, // 展示填写组件
      selectedData: {
        key: null, // 修改的内容key
        type: null, // 填写组件类型
        title: null, // 标题
      }
    };
  },
  created() {
    this.initData();
  },
  methods: {
    async initData() {
      const db = new GoDB("CoalDB");
      const corpBase = db.table('corpBase');
      //查询符合条件的记录
      const corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId
      });
      const wkPaper = db.table("wkPaper");
      // const caseId = $(".active td").attr("data-caseid");
      const caseId = this.corpData.caseId;
      //查询当前计划是否已做检查方案
      const checkPaper = await wkPaper.findAll((item) => {
        return (item.caseId = caseId);
      });
      const zfZzInfo = db.table("zfZzInfo");
      const zzInfo1 = await zfZzInfo.find((item) => {
        return item.corpId == this.corpData.corpId && item.credTypeName == "采矿许可证";
      });
      const zzInfo2 = await zfZzInfo.find((item) => {
        return item.corpId == this.corpData.corpId && item.credTypeName == "安全生产许可证";
      });
      //console.log(zzInfo1);
      //console.log(zzInfo2);
      var sSummary =

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

      let corpMonitor = '', corpTime = '', corpChecksite = ''
      if (checkPaper.length != 0) {
        paperContent = JSON.parse(checkPaper[0].paperContent);
        corpMonitor = paperContent.cell_idx_1 ? paperContent.cell_idx_1 : ""
        corpTime = paperContent.cell_idx_2 ? paperContent.cell_idx_2 : ""
        corpChecksite = checkPaper[0].checkSite
      }
      this.letData = {
        corpName: corp.corpName, // 被检查单位
        corpSummary: sSummary, // 煤矿概况
        corpMonitor, // 监察类型或方式
        corpTime, // 检查时间
        corpChecksite // 检查地点
      }
    },
    goBack () {
      // 返回选择企业
      this.$emit('go-back')
    },
    handleClose () {
      // 关闭编辑
      this.selectedData = {
        key: null,
        type: null,
        title: null,
      }
      this.visible = false
    },
    commandFill (key, title, type) {
      // 打开编辑
      this.visible = true
      this.selectedData = {
        type,
        key,
        title
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/views/make-law-writ/assets/scss/let";
</style>