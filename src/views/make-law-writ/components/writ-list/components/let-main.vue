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
            <span style="cursor: pointer; color: #fff;" @click="cmdDocSave('2')">保存</span>
          </td>
          <td style="width:100px;text-align:center;">
            <a class="btnTool" href="javascript:cmdDocView()">打印预览</a>
          </td>
          <td style="width:80px;text-align:center;">
            <span style="cursor: pointer; color: #fff;" @click="cmdDocSave('0')">归档</span>
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
import { getNowFormatTime, getNowTime } from "@/utils/date";
import { randomString } from "@/utils/index";
import GoDB from "@/utils/godb.min.js";

export default {
  name: "LetMain",
  components: {},
  props: {
    corpData: {
      // 煤矿信息
      type: Object,
      default: () => {},
    },
    docData: {
      // 文书信息
      type: Object,
      default: () => {},
    },
    editData: {
      // 编辑回显数据
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    cmdDocBack() {
      this.$emit("go-back");
    },
    async cmdDocSave(saveFlag = "2") {
      // 保存或归档文书
      let paperId = this.editData.paperId
        ? this.editData.paperId
        : "p" + getNowTime() + randomString(18);
      let paperSameData = {
        paperId: paperId,
        remoteId: "",
        delFlag: saveFlag,
        createDate: getNowFormatTime(),
        updateDate: getNowFormatTime(),
        createById: this.$getStorage("_glb_user_id"),
        updateById: this.$getStorage("_glb_user_id"),
        createTime: getNowFormatTime(),
        personId: this.$getStorage("_glb_user_id"),
        personName: this.$getStorage("_glb_user_name"),
        p0FloorTime: "",
        groupId: this.$getStorage("_glb_user_gid"), //机构id
        groupName: this.$getStorage("_glb_user_gname"), //机构名称
      };
      this.$emit("save-doc", paperSameData);
      let jsonPaper = this.$parent.paperData;
      const db = new GoDB("CoalDB");
      const wkPaper = db.table("wkPaper");
      // 如果保存的是已编辑的 那么保存的同时要把上一条重复的数据删除
      const newWkPaper = await wkPaper.find((item) => {
        return (
          item.caseId === this.corpData.caseId &&
          item.name === this.docData.docTypeName
        );
      });
      if (newWkPaper == null) {
        await wkPaper.add(jsonPaper);
      } else {
        await wkPaper.delete({ paperId: newWkPaper.paperId });
        await wkPaper.add(jsonPaper);
      }
      await db.close();
      this.$message.success(`“${this.docData.docTypeName}”文书已经保存完毕。`);
      await this.saveToUpload(paperId);
    },
    async saveToUpload(paperId) {
      // 保存文书至服务器
      const db = new GoDB("CoalDB");
      const wkPaper = db.table("wkPaper");
      const wkCase = db.table("wkCase");
      //查询符合条件的记录
      const workPaper = await wkPaper.find((item) => {
        return item.paperId == paperId;
      });
      const workCase = await wkCase.find((item) => {
        return item.caseId == workPaper.caseId;
      });
      await db.close();
      let submitData = {
        paper: [
          {
            id: null,
            isNewRecord: null,
            remarks: null,
            delFlag: workPaper.delFlag,
            createDate: workPaper.createDate,
            updateDate: workPaper.updateDate,
            createBy: {
              id: workPaper.personId,
            },
            updateBy: {
              id: workPaper.personId,
            },
            sourceFlag: "0",
            paperId: workPaper.paperId.substr(1),
            paperType: workPaper.paperType,
            paperContent: workPaper.paperContent,
            paperPath: null,
            memo: null,
            createTime: workPaper.createTime,
            fileTime: null,
            caseId: workPaper.caseId.substr(1),
            caseNo: workCase.caseNo,
            caseType: workCase.caseType,
            corpId: workCase.corpId,
            corpName: workCase.corpName,
            personId: workPaper.personId,
            personName: workPaper.personName,
            verNo: null,
            name: workPaper.name,
            paperInfo: null,
            group: {
              id: workPaper.groupId,
              name: workPaper.groupName,
            },
            affiliate: workPaper.groupId,
            meikuangType: workCase.meikuangType,
            meikuangPlanfrom: workCase.meikuangPlanfrom,
            planId: workCase.planId,
            pcVersion: "版本v1.2.15",
            clericalVersion: "2",
            p1PersonId: null,
            p1PersonName: null,
            p22BeginTime: null,
            p22EndTime: null,
            p22JczfCheck: null,
            p22location: null,
            p22inspection: null,
            p5EvidenceTime: null,
            p8Penalty: null,
            p8PersonPenalty: null,
            p8OrgPenalty: null,
            p13PersonId: null,
            p13PersonName: null,
            p31JudgeTime: null,
            p36PersonId: null,
            p36PersonName: null,
            p36RegisterTime: null,
            p0ParentId: null,
            p0FloorTime: null,
            locationRemarks: '%e5%85%a8%e7%b3%bb%e7%bb%9f%e5%90%84%e7%8e%af%e8%8a%82%e7%9b%91%e5%af%9f',
            p8penaltyType: null,
          },
        ],
        jczfCase: [
          {
            id: null,
            isNewRecord: null,
            remarks: null,
            delFlag: workPaper.delFlag,
            createDate: workPaper.createDate,
            updateDate: workPaper.updateDate,
            createBy: {
              id: workPaper.personId,
            },
            updateBy: {
              id: workPaper.personId,
            },
            sourceFlag: "0",
            caseSn: null,
            caseId: workPaper.caseId.substr(1),
            caseNo: workCase.caseNo,
            caseType: workCase.caseType,
            caseStatus: null,
            penaltyType: null,
            title: null,
            summary: null,
            startDate: null,
            establishDate: null,
            settleDate: null,
            fileDate: null,
            fileNo: null,
            savePeriod: null,
            accidentId: null,
            accuseId: null,
            corpId: workCase.corpId,
            corpName: workCase.corpName,
            personId: workPaper.personId,
            personName: workPaper.personName,
            groupId: workPaper.groupId,
            groupName: workPaper.groupName,
            verNo: null,
            name: null,
            corpType: "QYK_ALLBUSINESS",
            corpType2: "",
            corpInfo: "",
            corpDataType: "",
            checkReason: workCase.checkReason,
            checkStatus: workCase.checkStatus,
            planBeginDate: workCase.planBeginDate + ' 00:00:00',
            planEndDate: workCase.planEndDate + ' 00:00:00',
            createTime: workCase.createDate,
            affiliate: workPaper.groupId,
            meikuangType: workCase.meikuangType,
            meikuangPlanfrom: workCase.meikuangPlanfrom,
            planId:  workCase.planId,
            pcMonth: "2020-11",
          },
        ],
        danger: [],
      };
      this.$http.post(`/local/jczf/uploadJczf?__sid=${this.$getStorage("_glb_user_sessid")}`, JSON.stringify(submitData)).then(({data}) => {
          if (data.status === 200) {
            this.$message.success(`“${this.docData.docTypeName}”文书已经上传至服务器。`)
          } else {
            this.$message.error('上传至服务器请求失败，请重新保存！')
          }
        }).catch(err => {
          this.$message.error('上传至服务器请求失败，请重新保存！')
          console.log('上传至服务器请求失败：', err)
        })
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
