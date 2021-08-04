<!-- 文书 样式总框架组件 -->
<template>
  <div class="let-main">
    <div class="let-main-left">
      <!-- 左侧文书组件 -->
      <slot name="left"></slot>
    </div>
    <div class="let-main-right" id="toolContainer">
      <table
        style="width:100%;height:42px;background-color:#093A83;border-top-left-radius: 10px;border-top-right-radius: 10px;"
      >
        <tr>
          <td style="width:80px;text-align:center;">
            <span style="cursor: pointer; color: #fff;" @click="cmdDocSave">保存</span>
          </td>
          <td style="width:100px;text-align:center;">
            <a class="btnTool" href="javascript:cmdDocView()">打印预览</a>
          </td>
          <td style="width:80px;text-align:center;">
            <a class="btnTool" href="javascript:cmdDocUploading()">归档</a>
          </td>
          <td style="width:80px;text-align:center;">
            <span class="btnTool" @click="cmdDocBack">返回</span>
            <!-- <a class="btnTool" href="javascript:cmdDocBack()">返回</a> -->
          </td>
          <td style="width:80px;">&nbsp;</td>
        </tr>
      </table>
      <h3 class="uk-card-title" style="padding:10px;">执法对象</h3>
      <table style="border-collapse:collapse;margin:0 auto;margin:0px 10px;" id="rightSideCorp">
        <tr style="height:32px;">
          <td style="border-bottom: 1px solid #666;" colspan="2">{{ corpData.corpName }}</td>
        </tr>
        <tr style="height:32px;">
          <td style="width:20%;border-bottom:1px solid #666;">企业类型：</td>
          <td style="width:80%;border-bottom: 1px solid #666;">{{ corpData.corpTypeName }}</td>
        </tr>
        <tr style="height:32px;">
          <td style="border-bottom:1px solid #666;">所在区域：</td>
          <td style="border-bottom:1px solid #666;">{{ corpData.corpCountryName }}</td>
        </tr>
        <tr style="height:32px;">
          <td style="border-bottom:1px solid #666;">经营地址：</td>
          <td style="border-bottom:1px solid #666;">{{ corpData.address }}</td>
        </tr>
        <tr style="height:32px;">
          <td style="border-bottom:1px solid #666;">负&nbsp;&nbsp;责&nbsp;&nbsp;人：</td>
          <td style="border-bottom:1px solid #666;">{{ corpData.legalName }}</td>
        </tr>
        <tr style="height:32px;">
          <td style="border-bottom:1px solid #666;">联系电话：</td>
          <td style="border-bottom:1px solid #666;">{{ corpData.tel }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { getNowFormatTime, getNowTime } from '@/utils/date'
import { randomString } from '@/utils/index'
export default {
  name: "LetMain",
  components: {},
  props: {
    corpData: { // 煤矿信息
      type: Object,
      default: () => {},
    },
    docData: { // 文书信息
      type: Object,
      default: () => {},
    },
    letData: { // 填写的信息
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
  created() {
  },
  methods: {
    cmdDocBack() {
      this.$emit("go-back");
    },
    async cmdDocSave(saveFlag = '1') {
      // 保存文书
      // sessionStorage.getItem('documents');
      var sPaperId = "p" + getNowTime() + randomString(18);
      var checkSite = $(".checkAddress").html();
      var checkSiteArr = getStorage("checkSiteArr");
      console.log('letData', this.letData)
      const schema = {
        wkPaper: {
          paperId: {
            //客户端生产的文书唯一id
            type: String,
            unique: true,
          },
          remoteId: String, //服务器端生成的id/
          delFlag: String,
          createDate: String,
          updateDate: String,
          createById: String,
          updateById: String,
          paperType: String, //docTypeNo,
          name: String, //文书名称
          paperContent: String, // 文书大JSON字符串,/
          createTime: String, //文书创建时间/
          caseId: String, //第1次做文书时，活动的唯一id：185b15772fb746dfb3643a66aa192f86/
          caseType: String, //活动类型
          personId: String, //文书制作人id
          personName: String, //文书制作人名称/
          corpId: String,
          corpName: String,
          p0FloorTime: String, //归档时间：2021-06-15 11:00:38
          p22JczfCheck: String, //检查项分工明细表
          groupId: String, //机构id
          groupName: String, //机构名称
          planId: String, //docPlan表-no字段
          // "checkSite":String
        },
      };
      var jsonPaper = {
        paperId: sPaperId,
        remoteId: "",
        delFlag: saveFlag,
        createDate: getNowFormatTime(),
        updateDate: getNowFormatTime(),
        createById: getStorage("_glb_user_id"),
        updateById: getStorage("_glb_user_id"),
        paperType: this.docData.docTypeNo,
        name: this.docData.docTypeName,
        paperContent,
        createTime: getNowFormatTime(),
        caseId: this.corpData.caseId,
        caseType: this.corpData.caseId.caseType,
        personId: getStorage("_glb_user_id"),
        personName: getStorage("_glb_user_name"),
        corpId: this.corpData.corpId,
        corpName: this.corpData.corpName,
        p0FloorTime: "",
        p22JczfCheck: getStorage("publicP22JczfCheck"), //检查分工明细表
        groupId: getStorage("_glb_user_gid"), //机构id
        groupName: getStorage("_glb_user_gname"), //机构名称
        planId: "",
        checkSite: this.letData.corpChecksite,
        checkSiteArr:  this.letData.corpChecksites,
      };
      // const db = new GoDB("CoalDB", schema);
      // const wkPaper = db.table("wkPaper");
      // // 如果保存的是已编辑的 那么保存的同时要把上一条重复的数据删除
      // const newWkPaper = await wkPaper.find((item) => {
      //   return item.caseId == caseId;
      // });
      // if (newWkPaper == null) {
      //   await wkPaper.add(jsonPaper);
      // } else {
      //   await wkPaper.delete({ caseId: caseId });
      //   await wkPaper.add(jsonPaper);
      // }
      // await db.close();
      // await doAlert("“" + docTypeName + "”文书已经保存完毕。");
    },
  },
};
</script>

<style lang="scss" scoped>
.let-main {
  display: flex;
  padding: 0px 12px;
  .let-main-left {
    flex: 1;
  }
  .let-main-right {
    width: 320px;
    height: calc(100vh - 102px);
    vertical-align: top;
    background-color: #ffffff;
    border: solid 1px #093a83;
    border-radius: 10px;
  }
  .btnTool {
    cursor: pointer;
    color: #fff;
  }
}
</style>
