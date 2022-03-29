// 上传服务器保存文书各方法

import http from '@/utils/http'
import { Message, Alert } from 'element-ui'
import store from "@/store"
import { randomString } from "@/utils/index";
import { getNowTime } from "@/utils/date";
import { getDatabase, updateDatabase, getPaperDatabase, updatePaperDatabase, deleteDatabasePhysics } from '@/utils/databaseOperation'
export async function saveToUpload (paperId, messageShow, caseId) {
  // messageShow是否展示保存成功提示
  // 保存文书至服务器
  // 额外补充caseId传输，因wkPaper改为按检查活动读取存储方式
  let wkCase = await getDatabase("wkCase");
  let wkPaper = await getPaperDatabase(caseId);
  let wkDanger = await getDatabase("wkDanger")
  let corpBase = await getDatabase('baseInfo')
  //查询符合条件的记录 不能增加delFlag === '1'的过滤条件，否则在本地已被删除的数据则无法同步上传服务器
  let workPaper = wkPaper.find((item) => {
    return item.paperId == paperId
  });
  // 没有监察活动和煤矿信息时的容错
  let caseNo = null, caseType = null, corpId = null
  let meikuangType = null, meikuangPlanfrom = null, planId = null
  let checkReason = null, checkStatus = null, planBeginDate = null
  let planEndDate = null, createDate = null, pcMonth = null
  let corpName = null, caseClassify = null, riskAssessment = null, riskAssessmentContent = null
  let workCase = {}
  if (workPaper.caseId) {
    workCase = wkCase.find((item) => {
      return item.caseId === workPaper.caseId && item.delFlag !== '1';
    });
  } else {
    workCase = { caseNo, caseType, corpId, corpName, 
      meikuangType, meikuangPlanfrom, planId,
      checkReason, checkStatus, planBeginDate,
      planEndDate, createDate, pcMonth, 
      caseClassify, riskAssessment, riskAssessmentContent 
    }
  }
  let wkDangerList = []
  wkDangerList = JSON.parse(JSON.stringify(wkDanger.filter(item => item.paperId === paperId && item.delFlag !== '1') || []))
  // 当文书选择为意见建议书或执法案卷（首页）及目录时，corpName赋值：
  if (workPaper.paperType === "16" || workPaper.paperType === "17" || (workPaper.paperType === "15" && !workPaper.caseId)) {
    let paperContent = JSON.parse(workPaper.paperContent);
    if (workPaper.paperType === "15") {
      corpName = paperContent.cellIdx0
    } else {
      corpName = paperContent.cellIdx5
    }
  }
  let workCaseObj = workCase
  let corpData = corpBase.find(item => item.corpId === workCaseObj.corpId) 
  // 容错，planBeginDate历史数据有不符合规则的，判断是否有时分秒，如果没有则添加
  let planBegin = workCaseObj.planBeginDate || null
  let planEnd = workCaseObj.planEndDate || null
  if (planBegin && planBegin.split(' ').length === 1) {
    planBegin = planBegin + ' 00:00:00'
  }
  if (planEnd && planEnd.split(' ').length === 1) {
    planEnd = planEnd + ' 00:00:00'
  }
  // 整理上传数据
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
        caseNo: workCaseObj.caseNo,
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
        verNo: null,
        paperInfo: null,
        affiliate: workCaseObj.affiliate,
        meikuangType: workCaseObj.meikuangType,
        meikuangPlanfrom: workCaseObj.meikuangPlanfrom,
        pcVersion: "",
        clericalVersion: "2",
        p1PersonId: workPaper.p1PersonId,
        p1PersonName: workPaper.p1PersonName,
        p5EvidenceTime: workPaper.p5EvidenceTime,
        p8Penalty: workPaper.p8Penalty ? (workPaper.p8Penalty / 10000) + '' : '', // 行政处罚金额，后台需要万元单位
        p8PersonPenalty: workPaper.p8PersonPenalty ? (workPaper.p8PersonPenalty / 10000) + '' : '', // 个人处罚金额，后台需要万元单位
        p8OrgPenalty: workPaper.p8OrgPenalty ? (workPaper.p8OrgPenalty / 10000) + '' : '', // 单位处罚金额，后台需要万元单位
        p13PersonId: workPaper.p13PersonId,
        p13PersonName: workPaper.p13PersonName,
        p31JudgeTime: workPaper.p31JudgeTime,
        p36PersonId: workPaper.p36PersonId,
        p36PersonName: workPaper.p36PersonName,
        p36RegisterTime: workPaper.p36RegisterTime,
        p0ParentId: workPaper.p0ParentId,
        p8penaltyType: workPaper.p8penaltyType,
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
        createDate: workCaseObj.createDate,
        updateDate: workCaseObj.updateDate,
        createBy: {
          id: workCaseObj.personId,
        },
        updateBy: {
          id: workCaseObj.personId,
        },
        sourceFlag: "0",
        caseSn: workCaseObj.caseSn,
        caseId: workCaseObj.caseId,
        caseNo: workCaseObj.caseNo,
        caseType: workCaseObj.caseType,
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
        personId: workCaseObj.personId,
        personName: workCaseObj.personName,
        groupId: workCaseObj.groupId,
        groupName: workCaseObj.groupName,
        verNo: null,
        name: null,
        corpType: "",
        corpType2: "",
        corpInfo: JSON.stringify(corpData),
        corpDataType: "",
        checkReason: workCaseObj.checkReason,
        checkStatus: workCaseObj.checkStatus,
        planBeginDate: planBegin,
        planEndDate: planEnd,
        createTime: workCaseObj.createDate,
        affiliate: workCaseObj.affiliate,
        meikuangType: workCaseObj.meikuangType,
        meikuangPlanfrom: workCaseObj.meikuangPlanfrom, // 是否计划内
        planId: workCaseObj.planId,
        pcMonth: workCaseObj.pcMonth,
        caseClassify: workCaseObj.caseClassify || '',
				riskAssessment: workCaseObj.riskAssessment || '',
				riskAssessmentContent: workCaseObj.riskAssessmentContent || '', 
      },
    ],
    danger: [],
  };
  if (workPaper.paperType === "16" || workPaper.paperType === "17" || (workPaper.paperType === "15" && !workPaper.caseId)) {
    // 当文书为意见建议书中三个文书时，不传输检查活动
    submitData.jczfCase = []
  } else if (workCase.caseType === '0' && (workPaper.paperType === "1" || workPaper.paperType  === "2" || workPaper.paperType  === "4"
    || workPaper.paperType  === "5" || workPaper.paperType === "6"|| workPaper.paperType  === "8" || workPaper.paperType === '13'
    || workPaper.paperType  === "36" || workPaper.paperType  === "44")) {
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
          dangerCate: item.dangerCate,
          dangerType: item.dangerCate,
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
          // penaltyDescFine: item.penaltyDescFine ? (item.penaltyDescFine / 10000) + '' : '', // 后台不需要此字段
          penaltyOrg: '', // 后台不需要了21.12.2
          penaltyOrgFine: item.penaltyOrgFine ? (item.penaltyOrgFine / 10000) + '' : '', // 后台需要万元单位
          penaltyPerson: '',  // 后台不需要了21.12.2
          penaltyPersonFine: item.penaltyPersonFine ? (item.penaltyPersonFine / 10000) + '' : '',
          itemOnsiteType: item.itemOnsiteType,
          itemOnsiteBasis: item.itemOnsiteBasis,
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
    // if (workPaper.paperType === "8") { 已经在文书保存过程中已经做过处理，此处去掉再次处理逻辑
    //   // 行政处罚决定书保存时除添加隐患项数据以外还需保存以下数据
    //   let penaltyTotle = 0
    //   let paperContent = JSON.parse(workPaper.paperContent);
    //   if (paperContent.DangerTable.tableData.length > 0) {
    //     paperContent.DangerTable.tableData.map(item => {
    //       penaltyTotle += item.penaltyDescFine ? Number(item.penaltyDescFine) : 0
    //     })
    //   }
    //   submitData.paper.p8Penalty = (penaltyTotle / 10000) + '' // 罚款总额
    //   submitData.paper.p8PersonPenalty = paperContent.cellIdx4 === '个人' ? (penaltyTotle / 10000) + '' : '', // 个人罚款总额
    //   submitData.paper.p8OrgPenalty = paperContent.cellIdx4 === '单位' ? (penaltyTotle / 10000) + '' : '' // 企业罚款总额
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
  // 判断当前是否离线
  if (store.state.onLine) {
    // 如果在线则上传服务器
    let path = store.state.user.userType === 'supervision' ? '/sv' : ''
    await http.post(
        `${path}/local/jczf/uploadJczf?__sid=${store.state.user.userSessId}`,
        {
          sendJson: true,
          data: JSON.stringify(submitData),
        }
      )
      .then(async ({ data }) => {
        if (data.status === "200") {
          // 保存成功时检索云存储列表中是否有未存储数据，如果有则标记已发送成功
          let prepareUpload = await getDatabase("prepareUpload");
          let paperData = prepareUpload.find(item => item.paperId === workPaper.paperId && item.isUpload === '0')
          if (paperData) {
            await deleteDatabasePhysics('prepareUpload', [paperData], 'paperId')
          }
        } else {
          // 当保存失败时，将文书保存至库表prepareUpload
          await savePaperToPrepareUpload(submitData)
        }
        if (workPaper.delFlag === '0') {
          // 当归档时：
          if (messageShow) {
            // 需要提示信息时：
            if (data.status === "200") {
              // 调整为归档时提示文书上传服务器，2022.1.5建议
              Message.success(
                `“${workPaper.name}”文书已经归档上传至服务器。`
              );
            } else {
              Message.error({
                message: "上传至服务器请求失败，请重新归档！",
                showClose: true,
                duration: 0,
              });
            }
          }
        }
      })
      .catch(async (err) => {
        if (messageShow && workPaper.delFlag === '0') {
          Message.error({
            message: "上传至服务器请求失败，请重新归档！",
            showClose: true,
            duration: 0,
          });
        }
        // 当保存失败时，将文书保存至库表prepareUpload
        await savePaperToPrepareUpload(submitData)
        console.log("上传至服务器请求失败：", err);
      });
  } else {
    // 离线则保存至未存档数据
    await savePaperToPrepareUpload(submitData)
  }
}

async function savePaperToPrepareUpload(submitData) {
  // 保存未成功上传的文书
  let paperData = submitData.paper[0]
  let prepareUploadData = {
    id: getNowTime() + randomString(28),
    paperId: paperData.paperId,
    isUpload: '0', 
    corpId: paperData.corpId,
    corpName: paperData.corpName,
    paperType: paperData.paperType,
    name: paperData.name,
    createDate: paperData.createDate,
    personId: paperData.personId,
    personName: paperData.personName,
    delFlag: '0',
    caseId: paperData.caseId ? paperData.caseId : '',
    operation: 'save'
  }
  await updateDatabase('prepareUpload', [prepareUploadData], 'paperId')
  // 置未保存成功的文书delFlag为2保存状态
  // 修改文书delFlag
  if (submitData.paper) {
    for (let i = 0; i < submitData.paper.length; i++) {
      submitData.paper[i].delFlag = '2'
      if (submitData.paper[i].paperType === '22') {
        // 检查方案时，恢复p22JczfCheck中的delFlag
        if (submitData.paper[i].p22JczfCheck) {
          let p22JczfCheck = JSON.parse(submitData.paper[i].p22JczfCheck)
          if (p22JczfCheck && p22JczfCheck.CheckItemRecords && p22JczfCheck.CheckItemRecords.length > 0) {
            p22JczfCheck.CheckItemRecords.forEach(item => {
              item.delFlag = '2'
            })
          }
          submitData.paper[i].p22JczfCheck = JSON.stringify(p22JczfCheck)
        }
      }
    }
    await updatePaperDatabase(submitData.jczfCase && submitData.jczfCase.length > 0 ? submitData.jczfCase[0].caseId : 'opinion-suggestion', submitData.paper)
  }
  // 修改隐患项delFlag
  if (submitData.danger) {
    for (let i = 0; i < submitData.danger.length; i++) {
      submitData.danger[i].delFlag = '2'
    }
    await updateDatabase('wkDanger', submitData.danger, 'dangerId')
  }
}

export async function saveFineCollection(paperId, caseId) {
  // 额外补充caseId，因wkPaper存储方式改为按检查活动id存储
  // 上传罚款收缴
  // 整理上传数据：
  let wkPaper = await getPaperDatabase(caseId);
  let wkCase = await getDatabase("wkCase");
    //查询符合条件的记录
  let paperData = wkPaper.find((item) => {
    return item.paperId == paperId && item.delFlag !== '1';
  });
  let caseData = wkCase.find((item) => {
    return item.caseId == paperData.caseId && item.delFlag !== '1';
  });
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
        p8Penalty: (item.p8Penalty) + '',
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
  await http.post(
      `${path}/local/api-fine/uploadFine?__sid=${store.state.user.userSessId}`,
      {
        sendJson: true,
        data: JSON.stringify(submitData),
      }
    )
    .then(async ({ data }) => {
      if (paperData.delFlag === '0') {
        if (data.status === "200") {
          Message.success(
            `“罚款收缴”信息已上传至服务器`
          );
        } else {
          // 上传失败时，重新置文书为保存状态，以备再次归档
          paperData.delFlag = '2'
          await updatePaperDatabase(paperData.caseId, [paperData])
          Message.error("上传至服务器请求失败，请重新归档！");
        }
      }
    })
    .catch(async (err) => {
      if (paperData.delFlag === '0') {
        // 上传失败时，重新置文书为保存状态，以备再次归档
        paperData.delFlag = '2'
        await updateDatabase(paperData.caseId, [paperData])
        Message.error("上传至服务器请求失败，请重新归档！");
        console.log("上传至服务器请求失败：", err);
      }
    });
}

export async function updateXkzStatus(paperId, caseId) {
  // 额外补充caseId，因wkPaper存储方式改为按检查活动id存储
  // 整理上传数据：
  let wkPaper = await getPaperDatabase(caseId);
  //查询符合条件的记录
  let paperData = wkPaper.find((item) => {
    return item.paperId == paperId && item.delFlag !== '1';
  });
  let paperContent = JSON.parse(paperData.paperContent)
  let DangerTable = paperContent.DangerTable || null
  let selectedDangerList = DangerTable.selectedDangerList || []
  let path = store.state.user.userType === 'supervision' ? '/sv' : ''
  for (let i = 0; i < selectedDangerList.length; i++) {
    let item = selectedDangerList[i]
    let xkzStatus = ''
    if (item.penaltyDesc.includes('暂扣安全生产许可证')) {
      xkzStatus = '7'
    } else if (item.penaltyDesc.includes('吊销安全生产许可证')) {
      xkzStatus = '11'
    } else if (item.penaltyDesc.includes('责令停产整顿')) {
      xkzStatus = '3'
    }  else if (item.penaltyDesc.includes('责令停止建设')) {
      xkzStatus = '5'
    }
    if (xkzStatus) {
      await http.get(
        `${path}/local/corp/updateXkzStatus?__sid=${store.state.user.userSessId}&corpId=${paperData.corpId}&xkzStatus=${xkzStatus}`)
      .then(({ data }) => {
        if (data.status === "200") {
        } else {
          console.log('发送行政处罚信息失败')
        }
      })
      .catch((err) => {
        console.log('发送行政处罚信息失败', err)
      });
    }
  }
}