import GoDB from "@/utils/godb.min.js";
import http from '@/utils/http'
import { Message } from 'element-ui'
import store from "@/store"
export async function saveToUpload(paperId, messageShow) {
  // messageShow是否展示保存成功提示
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
    return item.caseId == workPaper.caseId && item.delFlag !== '1';
  });
  const wkDangerList = await wkDanger.findAll(item => item.paperId === paperId && item.delFlag !== '1')
  await db.close();
  // 没有监察活动和煤矿信息时的容错
  let caseNo = null, caseType = null, corpId = null
  let meikuangType = null, meikuangPlanfrom = null, planId = null
  let checkReason = null, checkStatus = null, planBeginDate = null
  let planEndDate = null, createDate = null, pcMonth = null
  let corpName = null, caseClassify = null, riskAssessment = null, riskAssessmentContent = null
  // 当文书选择为意见建议书或执法案卷（首页）及目录时，corpName赋值：
  if (workPaper.paperType === "16" || workPaper.paperType === "17" || (workPaper.paperType === "15" && !workPaper.caseId)) {
    let paperContent = JSON.parse(workPaper.paperContent);
    if (workPaper.paperType === "15") {
      corpName = paperContent.cellIdx0
    } else {
      corpName = paperContent.cellIdx5
    }
  }
  let workCaseObj = workCase ? workCase
    : { caseNo, caseType, corpId, corpName, 
      meikuangType, meikuangPlanfrom, planId,
      checkReason, checkStatus, planBeginDate,
      planEndDate, createDate, pcMonth, 
      caseClassify, riskAssessment, riskAssessmentContent }
      // 整理上传数据
  // 整理网页端展示的html
  let submitData = {
    paper: [
      {
        id: null, // 不添加paperId，后台自动生成，传输会报错
        isNewRecord: null,
        remarks: null,
        paperId: workPaper.paperId,
        delFlag: workPaper.delFlag,
        createDate: workPaper.createDate,
        updateDate: workPaper.updateDate,
        createBy: {
          id: workPaper.personId,
        },
        updateBy: {
          id: workPaper.personId,
        },
        paperType: workPaper.paperType,
        paperContent: workPaper.paperContent,
        createTime: workPaper.createTime,
        caseId: workPaper.caseId,
        caseType: workCaseObj.caseType,
        name: workPaper.name,
        personId: workPaper.personId,
        personName: workPaper.personName,
        corpId: workCaseObj.corpId,
        corpName: workCaseObj.corpName,
        planId: workCaseObj.planId,
        group: {
          id: workPaper.groupId,
          name: workPaper.groupName,
        },
        p0FloorTime: workPaper.p0FloorTime,
        p22JczfCheck: workPaper.p22JczfCheck || null,
        p22BeginTime: workPaper.p22BeginTime || null,
        p22EndTime: workPaper.p22EndTime || null,
        p22location: workPaper.p22location || null,
        p22inspection: workPaper.p22inspection || null,
        locationRemarks: workPaper.locationRemarks || null,

        sourceFlag: "0",
        paperPath: null,
        memo: null,
        fileTime: null,
        caseNo: workCaseObj.caseNo,
        verNo: null,
        paperInfo: null,
        affiliate: workPaper.groupId,
        meikuangType: workCaseObj.meikuangType,
        meikuangPlanfrom: workCaseObj.meikuangPlanfrom,
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
        caseSn: workCaseObj.caseSn,
        caseId: workPaper.caseId,
        caseNo: workCaseObj.caseNo,
        caseType: workCaseObj.caseType,
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
        corpId: workCaseObj.corpId,
        corpName: workCaseObj.corpName,
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
        checkReason: workCaseObj.checkReason,
        checkStatus: workCaseObj.checkStatus,
        planBeginDate: workCaseObj.planBeginDate ? workCaseObj.planBeginDate + " 00:00:00" : null,
        planEndDate: workCaseObj.planEndDate ? workCaseObj.planEndDate + " 00:00:00" : null,
        createTime: workCaseObj.createDate,
        affiliate: workPaper.groupId,
        meikuangType: workCaseObj.meikuangType,
        meikuangPlanfrom: workCaseObj.meikuangPlanfrom,
        planId: workCaseObj.planId,
        pcMonth: workCaseObj.pcMonth,
        caseClassify: workCaseObj.caseClassify,
				riskAssessment: workCaseObj.riskAssessment,
				riskAssessmentContent: workCaseObj.riskAssessmentContent, 
      },
    ],
    danger: [],
  };
  if (workPaper.paperType === "16" || workPaper.paperType === "17" || (workPaper.paperType === "15" && !workPaper.caseId)) {
    submitData.jczfCase = []
  } else if (workPaper.paperType === "1" || workPaper.paperType  === "2" || workPaper.paperType  === "4"
    || workPaper.paperType  === "5" || workPaper.paperType === "6"|| workPaper.paperType  === "8"
    || workPaper.paperType  === "36" || workPaper.paperType  === "44") {
    // 现场检查笔录或现场处理决定书增加上传隐患项数据
    let danger = [];
    if (wkDangerList && wkDangerList.length > 0) {
      wkDangerList.map((item) => {
        let dangerData = {
          id: null,  // 不添加dangerId，后台自动生成，传输会报错
          isNewRecord: null,
          remarks: null,
          paperId: item.paperId,
          createDate: item.createDate,
          updateDate: item.updateDate,
          createBy: {
            id: workPaper.personId,
          },
          updateBy: {
            id: workPaper.personId,
          },
          caseId: workPaper.caseId,
          dangerId: item.dangerId,
          dangerType: {
            categoryCode: item.dangerCate,
          },
          delFlag: item.delFlag,
          dangerItemId: item.dangerItemId,
          dangerContent: item.dangerContent,
          dangerLocation: null,
          dangerStatus: item.dangerStatus,
          detectTime: item.detectTime,
          isHigh: item.isHigh,
          personId: item.personId, // 发现人
          personName: item.personName,
          personIds: item.personIds ? item.personIds : workPaper.personId, // 发现人多选
          personNames: item.personNames ? item.personNames : workPaper.personName,
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
          basisContent: item.basisContent,
          name: null,
          sourceFlag: "0",
          onsiteType: item.onsiteType,
          penaltyType: item.penaltyType,
          changeDangerType: item.changeDangerType,
          showIndex: item.showIndex,
          isCheck: item.isCheck,
          dangerParentId: item.dangerParentId,
          isCommon: item.isCommon ? item.isCommon : null,
          deviceNum: item.deviceNum,
          coalingFace: item.coalingFace,
          headingFace: item.headingFace,
          dangerCorrected: item.dangerCorrected ? item.dangerCorrected : null,
          reviewUnitId: item.reviewUnitId ? item.reviewUnitId : null,
          reviewUnitName: item.reviewUnitName ? item.reviewUnitName : null,
        };
        danger.push(dangerData);
      });
    }
    if (workPaper.paperType === "8") {
      // 行政处罚决定书保存时除添加隐患项数据以外还需保存以下数据
      let penaltyTotle = 0
      let paperContent = JSON.parse(workPaper.paperContent);
      if (paperContent.DangerTable.tableData.length > 0) {
        paperContent.DangerTable.tableData.map(item => {
          penaltyTotle += item.penaltyDescFine ? Number(item.penaltyDescFine) : 0
        })
      }
      submitData.paper.p8Penalty = penaltyTotle // 罚款总额
      submitData.paper.p8PersonPenalty = paperContent.cellIdx4 === '个人' ? penaltyTotle : '', // 个人罚款总额
      submitData.paper.p8OrgPenalty = paperContent.cellIdx4 === '单位' ? penaltyTotle : '' // 企业罚款总额
      if (danger.length > 0) {
        danger.forEach(item => {
          item.penaltyType = paperContent.cellIdx4 // 行政处罚类型
          item.penaltyOrgFine = paperContent.cellIdx4 === '单位' ? item.penaltyDescFine: '' // 单位罚金
          item.penaltyPersonFine = paperContent.cellIdx4 === '个人' ? item.penaltyDescFine: '' // 个人罚金
        })
      }
    }
    submitData.danger = danger;
  }
  let path = store.state.user.userType === 'supervision' ? '/sv' : ''
  http.post(
      `${path}/local/jczf/uploadJczf?__sid=${store.state.user.userSessId}`,
      {
        sendJson: true,
        data: JSON.stringify(submitData),
      }
    )
    .then(({ data }) => {
      if (messageShow) {
        if (data.status === "200") {
          Message.success(
            `“${workPaper.name}”文书已经上传至服务器。`
          );
        } else {
          Message.error("上传至服务器请求失败，请重新保存！");
        }
      }
    })
    .catch((err) => {
      if (messageShow) {
        Message.error("上传至服务器请求失败，请重新保存！");
      }
      console.log("上传至服务器请求失败：", err);
    });
}

export async function saveFineCollection(paperId) {
  // 上传罚款收缴
  // 整理上传数据：
  let db = new GoDB(store.state.DBName);
  let wkPaper = db.table("wkPaper");
  let wkCase = db.table("wkCase");
    //查询符合条件的记录
  let paperData = await wkPaper.find((item) => {
    return item.paperId == paperId && item.delFlag !== '1';
  });
  let caseData = await wkCase.find((item) => {
    return item.caseId == paperData.caseId && item.delFlag !== '1';
  });
  await db.close()
  let paperContent = JSON.parse(paperData.paperContent)
  let submitData  = []
  if (paperContent && paperContent.tableData && paperContent.tableData.length > 0) {
    paperContent.tableData.map(item => {
      submitData.push({
        fineId: item.fineId,
        paperId: paperData.paperId,
        p8Id: item.p8Id,
        caseId: caseData.caseId,
        paperNo: item.paperNo,
        punishType: item.punishType,
        p8Penalty: item.p8Penalty,
        collectionFine: item.collectionFine,
        lateFee: item.lateFee,
        collectionDate: item.collectionDate ? item.collectionDate.replace("年", "-").replace("月", "-").replace("日", "") + " 00:00:00" : null,
        createTime: paperData.createTime,
        createDate: paperData.createDate,
        createBy: {
          id: paperData.personId,
        },
        updateBy: {
          id: paperData.personId,
        },
      })
    })
  }
  let path = store.state.user.userType === 'supervision' ? '/sv' : ''
  http.post(
      `${path}/local/api-fine/uploadFine?__sid=${store.state.user.userSessId}`,
      {
        sendJson: true,
        data: JSON.stringify(submitData),
      }
    )
    .then(({ data }) => {
      if (data.status === "200") {
        Message.success(
          `“罚款收缴”信息已上传至服务器`
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