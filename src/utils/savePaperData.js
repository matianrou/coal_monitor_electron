import GoDB from "@/utils/godb.min.js";
import http from '@/utils/http'
import { Message } from 'element-ui'
import store from "@/store"
export async function saveToUpload(paperId, userSessId) {
  // 保存文书至服务器
  const db = new GoDB(store.state.DBName);
  const wkPaper = db.table("wkPaper");
  const wkCase = db.table("wkCase");
  const wkDanger = db.table("wkDanger")
    //查询符合条件的记录
  const workPaper = await wkPaper.find((item) => {
    return item.paperId == paperId && item.delFlag !== '1';
  });
  const workCase = await wkCase.find((item) => {
    return item.caseId == workPaper.caseId;
  });
  const wkDangerList = await wkDanger.findAll(item => item.paperId === paperId)
  await db.close();
  // 整理上传数据
  // 整理网页端展示的html
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
        p0FloorTime: workPaper.p0FloorTime,
        p8penaltyType: null,
        paperHtml: workPaper.paperHtml,
        localizeFlag: "1",
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
        caseSn: workCase.caseSn,
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
    danger: [],
  };
  if (workPaper.paperType === "22") {
    // 检查方案上传数据
    let paperContent = JSON.parse(workPaper.paperContent);
    // 监察方式（字典值，多个用逗号隔开）
    let p22inspection = "";
    if (
      paperContent.cellIdx1TypeCheckItem &&
      paperContent.cellIdx1TypeCheckItem.length > 0
    ) {
      paperContent.cellIdx1TypeCheckItem.map((item) => {
        p22inspection += item + ",";
      });
    }
    p22inspection = p22inspection.substring(0, p22inspection.length - 1);
    // 检查项附件
    let CheckItemRecords = [];
    if (
      paperContent.cellIdx5TypeCheckTableItem &&
      paperContent.cellIdx5TypeCheckTableItem.tableData &&
      paperContent.cellIdx5TypeCheckTableItem.tableData.length > 0
    ) {
      paperContent.cellIdx5TypeCheckTableItem.tableData.map((item) => {
        let CheckItemRecord = {
          name: item.categoryName,
          basis: item.basis,
          categoryCode: item.categoryCode,
          categoryName: item.categoryName,
          createBy: {
            id: workPaper.personId,
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
            id: workPaper.personId,
          },
          updateDate: item.updateDate,
          paperId: workPaper.paperId,
          groupName: workPaper.groupName,
          personId: "[]",
        };
        CheckItemRecords.push(CheckItemRecord);
      });
    }
    let p22JczfCheck = {
      CheckItemRecords,
    };
    let p22PaperData = {
      p22BeginTime:
      paperContent.cellIdx2TypeDaterangeItem && paperContent.cellIdx2TypeDaterangeItem.length > 0 ? paperContent.cellIdx2TypeDaterangeItem[0]
          .replace("年", "-")
          .replace("月", "-")
          .replace("日", "") + " 00:00:00" : null,
      p22EndTime:
      paperContent.cellIdx2TypeDaterangeItem && paperContent.cellIdx2TypeDaterangeItem.length > 1 ? paperContent.cellIdx2TypeDaterangeItem[1]
          .replace("年", "-")
          .replace("月", "-")
          .replace("日", "") + " 00:00:00" : null,
      p22location: paperContent.cellIdx4,
      p22inspection,
      p22JczfCheck: JSON.stringify(p22JczfCheck),
      locationRemarks: paperContent.cellIdx1,
    };
    Object.assign(submitData.paper[0], p22PaperData);
  } else if (workPaper.paperType === "1" || workPaper.paperType  === "2" || workPaper.paperType === "8") {
    // 现场检查笔录或现场处理决定书增加上传隐患项数据
    let danger = [];
    if (wkDangerList && wkDangerList.length > 0) {
      wkDangerList.map((item) => {
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
          dangerId: item.dangerId,
          dangerType: {
            categoryCode: item.dangerCate,
          },
          dangerItemId: item.dangerItemId,
          dangerContent: item.dangerContent,
          dangerLocation: null,
          dangerStatus: null,
          detectTime: item.detectTime,
          isHigh: item.isHigh,
          personId: workPaper.personId,
          personName: workPaper.personName,
          rectifyTerm: null,
          solveTime: null,
          solveMethod: null,
          checkTime: item.checkTime,
          checkPerson: null,
          subitemCode: null,
          subitemContent: item.subitemContent,
          subitemPenalty: item.subitemPenalty,
          subitemPenaltyBasis: item.subitemPenaltyBasis,
          penaltyDescFine: item.penaltyDescFine,
          penaltyOrg: item.penaltyOrg,
          penaltyOrgFine: item.penaltyOrgFine,
          penaltyPerson: item.penaltyPerson,
          penaltyPersonFine: item.penaltyPersonFine,
          itemOnsiteType: item.itemOnsiteType,
          itemOnsiteBasis: item.onsiteBasis,
          onsiteContent: item.onsiteContent,
          verNo: null,
          paperId: item.paperId,
          basisContent: item.basisContent,
          name: null,
          sourceFlag: "0",
          onsiteType: item.onsiteType,
          penaltyType: item.penaltyType,
          changeDangerType: item.changeDangerType,
          showIndex: item.showIndex,
          isCheck: item.isCheck,
          dangerParentId: null,
          isCommon: null,
          deviceNum: item.deviceNum,
          coalingFace: item.coalingFace,
          headingFace: item.headingFace,
          dangerCorrected: null,
          reviewUnitId: null,
          reviewUnitName: null,
        };
        danger.push(dangerData);
      });
    }
    // if (workPaper.paperType === "8") {
    //   // 行政处罚决定书保存时除添加隐患项数据以外还需保存以下数据
    //   let penaltyTotle = 0
    //   let   = JSON.parse(workPaper.paperContent);
    //   if (paperContent.dangerItemObject.tableData.length > 0) {
    //     paperContent.dangerItemObject.tableData.map(item => {
    //       penaltyTotle += item.penaltyDescFine ? Number(item.penaltyDescFine) : 0
    //     })
    //   }
    //   submitData.paper.p8Penalty = penaltyTotle // 罚款总额
    //   submitData.paper.p8PersonPenalty = paperContent.cellIdx4 === '个人' ? penaltyTotle : '', // 个人罚款总额
    //   submitData.paper.p8OrgPenalty = paperContent.cellIdx4 === '单位' ? penaltyTotle : '' // 企业罚款总额
    //   if (danger.length > 0) {
    //     danger.forEach(item => {
    //       item.penaltyType = paperContent.cellIdx4 // 行政处罚类型
    //       item.penaltyOrgFine = paperContent.cellIdx4 === '单位' ? item.penaltyDescFine: '' // 单位罚金
    //       item.penaltyPersonFine = paperContent.cellIdx4 === '个人' ? item.penaltyDescFine: '' // 个人罚金
    //     })
    //   }
    // }
    submitData.danger = danger;
  }
  let path = store.state.DBName === 'CoalSupervisionDB' ? '/sv' : ''
  http.post(
      `${path}/local/jczf/uploadJczf?__sid=${userSessId}`,
      {
        sendJson: true,
        data: JSON.stringify(submitData),
      }
    )
    .then(({ data }) => {
      if (data.status === "200") {
        Message.success(
          `“${workPaper.name}”文书已经上传至服务器。`
        );
      } else {
        Message.error("上传至服务器请求失败，请重新保存！");
      }
    })
    .catch((err) => {
      Message.error("上传至服务器请求失败，请重新保存！");
      console.log("上传至服务器请求失败：", err);
    });
}