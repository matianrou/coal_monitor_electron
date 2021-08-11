<!-- 文书 样式总框架组件 -->
<template>
  <div class="let-main">
    <div class="let-main-left">
      <!-- 左侧文书组件 -->
      <slot name="left" ref="letLeft"></slot>
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
            <span style="cursor: pointer; color: #fff;" @click="cmdDocView">打印预览</span>
            <!-- <a class="btnTool" href="javascript:cmdDocView()">打印预览</a> -->
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
      this.$emit("go-back", { page: "writFlow" });
    },
    async cmdDocSave(saveFlag = "2") {
      // 保存或归档文书
      let paperId = this.editData.paperId
        ? this.editData.paperId
        : getNowTime() + randomString(18);
      let jsonPaper = {
        paperId: paperId,
        remoteId: "",
        delFlag: saveFlag,
        createDate: getNowFormatTime(),
        updateDate: getNowFormatTime(),
        createById: this.$store.state.user.userId,
        updateById: this.$store.state.user.userId,
        createTime: getNowFormatTime(),
        personId: this.$store.state.user.userId,
        personName: this.$store.state.user.userName,
        p0FloorTime: "",
        groupId: this.$store.state.user.userGroupId, //机构id
        groupName: this.$store.state.user.userGroupName, //机构名称
        paperContent: JSON.stringify(this.$parent.letData),
        paperType: this.docData.docTypeNo,
        name: this.docData.docTypeName,
        caseId: this.corpData.caseId,
        caseType: '',
        corpId: this.corpData.corpId,
        corpName: this.corpData.corpName,
        planId: this.corpData.planId,
      };
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
      let mes = saveFlag === "2" ? "保存" : "归档";
      this.$message.success(
        `“${this.docData.docTypeName}”文书已经${mes}完毕。`
      );
      await this.saveToUpload(paperId);
      // 返回列表并刷新
      // this.cmdDocBack();
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
      // 整理上传数据
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
            paperId: workPaper.paperId,
            paperType: workPaper.paperType,
            paperContent: workPaper.paperContent,
            paperPath: null,
            memo: null,
            createTime: workPaper.createTime,
            fileTime: null,
            caseId: workPaper.caseId,
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
            p0FloorTime: getNowFormatTime(),
            p8penaltyType: null,
            paperHtml: this.$slots.left[0].elm.innerHTML,
            localizeFlag: '1',
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
            caseId: workPaper.caseId,
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
            planBeginDate: workCase.planBeginDate + " 00:00:00",
            planEndDate: workCase.planEndDate + " 00:00:00",
            createTime: workCase.createDate,
            affiliate: workPaper.groupId,
            meikuangType: workCase.meikuangType,
            meikuangPlanfrom: workCase.meikuangPlanfrom,
            planId: workCase.planId,
            pcMonth: workCase.pcMonth,
          },
        ],
        danger: []
      };
      if (this.docData.docTypeNo === '22') {
        // 检查方案上传数据
        let letData = this.$parent.letData
        // 监察方式（字典值，多个用逗号隔开）
        let p22inspection = ''
        if (letData.cellIdx1TypeCheckItem && letData.cellIdx1TypeCheckItem.length > 0) {
          letData.cellIdx1TypeCheckItem.map(item => {
            p22inspection += item + ','
          })
        }
        p22inspection = p22inspection.substring(0, p22inspection.length - 1)
        // 检查项附件
        let CheckItemRecords = []
        if (letData.cellIdx5TypeCheckTableItem && letData.cellIdx5TypeCheckTableItem.tableData && letData.cellIdx5TypeCheckTableItem.tableData.length > 0) {
          letData.cellIdx5TypeCheckTableItem.tableData.map(item => {
            let CheckItemRecord = {
              name: item.categoryName,
              basis: item.basis,
              categoryCode: item.categoryCode,
              categoryName: item.categoryName,
              createBy: {
                id: this.$store.state.user.userId
              },
              createDate: item.createDate,
              delFlag: item.delFlag,
              groupId: item.groupId,
              id: item.itemCode,
              itemCode: item.itemCode,
              itemContent: item.itemContent,
              method: item.basis,
              souFlag: item.souFlag,
              status: item.status,
              updateBy: {
                id:this.$store.state.user.userId
              },
              updateDate: item.updateDate,
              paperId: workPaper.paperId,
              groupName: this.$store.state.user.userGroupName,
              personId: '[]'
            }
            CheckItemRecords.push(CheckItemRecord)
          })
        }
        let p22JczfCheck = {
          CheckItemRecords
        }
        let p22PaperData = {
          p22BeginTime: letData.cellIdx2TypeDaterangeItem[0].replace('年', '-').replace('月', '-').replace('日', '') + ' 00:00:00',
          p22EndTime:  letData.cellIdx2TypeDaterangeItem[1].replace('年', '-').replace('月', '-').replace('日', '') + ' 00:00:00',
          p22location: letData.cellIdx4,
          p22inspection,
          p22JczfCheck: JSON.stringify(p22JczfCheck),
          locationRemarks: letData.cellIdx1,
        }
        Object.assign(submitData.paper[0], p22PaperData)
      } else if (this.docData.docTypeNo === '1') {
        // 现场检查笔录上传数据
        let danger = [];
        // 当docTypeNo = '1' 即现场检查笔录时，增加回传danger字段
        if (this.$parent.letData && this.$parent.letData.cellIdx8TypeDangerTableItem) {
          let dangerItem = this.$parent.letData.cellIdx8TypeDangerTableItem
          if (dangerItem.tableData && dangerItem.tableData.length > 0) {
            dangerItem.tableData.map(item => {
              let dangerData = {
                id: null,
                isNewRecord: null,
                remarks: null,
                delFlag: workPaper.delFlag,
                createDate: workPaper.createDate,
                updateDate: workPaper.updateDate,
                createBy: {
                  id: workPaper.personId,
                },
                personIds: workPaper.personId,
                personNames: workPaper.personName,
                updateBy: {
                  id: workPaper.personId,
                },
                caseId: workPaper.caseId,
                dangerId: item.dangerId ? item.dangerId : getNowTime() + randomString(18),
                dangerType: {
                  categoryCode: item.categoryCode,
                },
                dangerItemId: item.itemCode,
                dangerContent: item.itemContent,
                dangerLocation: null,
                dangerStatus: null,
                detectTime: getNowFormatTime(),
                isHigh: item.isSerious,
                personId: workPaper.personId,
                personName: workPaper.personName,
                rectifyTerm: null,
                solveTime: null,
                solveMethod: null,
                checkTime: item.reviewDate,
                checkPerson: null,
                subitemCode: null,
                subitemContent: item.itemContent,
                subitemPenalty: item.penaltyDesc,
                subitemPenaltyBasis: item.penaltyBasis,
                penaltyOrg: null,
                penaltyOrgFine: null,
                penaltyPerson: null,
                penaltyPersonFine: null,
                itemOnsiteType: null,
                itemOnsiteBasis: item.onsiteBasis,
                onsiteContent: item.onsiteDesc,
                verNo: null,
                paperId: paperId,
                basisContent: item.confirmBasis,
                name: null,
                sourceFlag: "0",
                onsiteType: item.onsiteType,
                penaltyType: null,
                changeDangerType: item.categoryCode,
                showIndex: item.order,
                isCheck: item.isReview,
                dangerParentId: null,
                isCommon: null,
                deviceNum: item.deviceNum,
                coalingFace: item.coalingFace,
                headingFace: item.headingFace,
                dangerCorrected: null,
                reviewUnitId: null,
                reviewUnitName: null,
              }
              danger.push(dangerData)
            })
          }
        }
        submitData.danger = danger
      }
      this.$http
        .post(
          `/local/jczf/uploadJczf?__sid=${this.$store.state.user.userSessId}`,
          {
            sendJson: true,
            data: JSON.stringify(submitData),
          }
        )
        .then(({ data }) => {
          if (data.status === "200") {
            this.$message.success(
              `“${this.docData.docTypeName}”文书已经上传至服务器。`
            );
          } else {
            this.$message.error("上传至服务器请求失败，请重新保存！");
          }
        })
        .catch((err) => {
          this.$message.error("上传至服务器请求失败，请重新保存！");
          console.log("上传至服务器请求失败：", err);
        });
    },
    cmdDocView() {
      // 打印预览
      // 如果打印为22检查方案，另外打印检查分工明细表
      let printDiv = this.$slots.left[0].elm;
      this.$print(printDiv);
    },
  },
};
</script>

<style lang="scss" scoped>
.let-main {
  display: flex;
  padding: 0px 12px;
  height: 100%;
  .let-main-left {
    flex: 1;
    height: calc(100vh - 102px);
    overflow: auto;
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
/* 应用这个样式的在打印时隐藏 */
.noPrint {
  display: none;
}

/* 应用这个样式的，从那个标签结束开始另算一页，之后在遇到再起一页，以此类推 */
.page-break {
  page-break-after: always;
}
</style>
