import { setDatabase, updateDatabase, updatePaperDatabase } from '@/utils/databaseOperation'

// “机构资源”下载。
export async function orgSave(resId, data) {
  //1-add baseInfo(机构基本信息)
  let arrOrg = [];
  for (let i = 0; i < data.length; i++) {
    let obj = data[i];
		arrOrg.push({
			"no": obj.id,
			"createDate": obj.createDate,
			"updateDate": obj.updateDate,
			"delFlag": obj.delFlag,
			"parentIds": obj.parentIds,
			"name": obj.name,
			"code": obj.code,
			"type": obj.type,
			"grade": obj.grade,
			"address": obj.address,
			"parentId": obj.parentId,
			"sort": obj.sort,
			"areaId": obj.area.id,
			"areaName": obj.area.name,
			"areaShortName": obj.area.shortName,
			"areaParentIds": obj.area.parentIds,
			"areaParentId": obj.area.parentId,
			"areaDelFlag": obj.area.areaDelFlag,
			"areaSort": obj.area.sort,
			"sysOfficeInfo": JSON.stringify(obj.sysOfficeInfo)
		});
  }
  // 增:
	await setDatabase(resId, arrOrg)
}

// “用户资源”下载。
export async function personSave(resId, data) {
  let arrPerson = [];
  for (let i = 0; i < data.length; i++) {
    let obj = data[i];
    arrPerson.push({ 
			admin: obj.admin,
			company: obj.company ? JSON.stringify(obj.company) : '',
			createBy: obj.createBy ? JSON.stringify(obj.createBy) : '',
			createDate: obj.createDate,
			delFlag: obj.delFlag,
			email: obj.email,
			no: obj.id, 
			loginDate: obj.loginDate,
			loginFlag: obj.loginFlag,
			loginIp: obj.loginIp,
			loginName: obj.loginName,
			mobile: obj.mobile,
			name: obj.name, 
			office: obj.office ? JSON.stringify(obj.office) : '',
			oldLoginDate: obj.oldLoginDate,
			oldLoginIp: obj.oldLoginIp,
			qylxmc: obj.qylxmc,
			remarks: obj.remarks,
			roleNames: obj.roleNames,
			updateBy: obj.updateBy ? JSON.stringify(obj.updateBy) : '',
			updateDate: obj.updateDate,
			userNumber: obj.userNumber,
			userType: obj.userType,
			zfLogin: obj.zfLogin,
			officeId: obj.office.id, 
			officeName: obj.office.name, 
		});
  }
  // 增:
	await setDatabase(resId, arrPerson)
}

// “其他资源”下载。
export async function planSave(resId, data) {
	let arrPlan = [];
	for (let i = 0; i < data.length; i++) {
		let obj = data[i];
		arrPlan.push({
			"no": obj.id,
			"dbplanId": obj.id,
			"createDate": obj.createDate,
			"updateDate": obj.updateDate,
			"delFlag": obj.delFlag,
			"status": obj.status,
			"corpId": obj.corpId,
			"corpName": obj.corpName,
			"groupId": obj.groupId,
			"planMonthTimes": obj.planMonthTimes,
			"planMonth": obj.planMonth,
			"planYear": obj.planYear,
			"meikuangType": obj.meikuangType,
			"meikuangPlanfrom": obj.meikuangPlanfrom,
			"isRandom": obj.isRandom,
			"monitoringCategory": obj.monitoringCategory,
			"monitoringCategoryName": obj.monitoringCategoryName
		});
	}
	// 增:
	await setDatabase(resId, arrPlan)
}

// “企业资源”下载。
export async function corpSave(resId, data) {
	//1-add baseInfo(煤矿基本信息)
	let arrBaseInfo = [];
	for (let i = 0; i < data.baseInfo.length; i++) {
		let obj = data.baseInfo[i];
		arrBaseInfo.push({
			"corpId": obj.corpId,
			"delFlag": obj.delFlag,
			"corpName": obj.corpName,
			"meikuangType": obj.meikuangType,
			"corpTypeName": obj.corpTypeName,
			"address": obj.address,
			"provinceName": obj.provinceName,
			"cityName": obj.cityName,
			"countryName": obj.countryName,
			"zoneCountyId": obj.zoneCountyId,
			"legalName": obj.legalName,
			"legalTel": obj.legalTel,
			"contacts": obj.contacts,
			"tel": obj.tel,
			"uscCode": obj.uscCode,
			"xkzStatusNameZs": obj.xkzStatusNameZs,
			"parentTypeName": obj.parentTypeName,
			"economyTypeName": obj.economyTypeName,
			"standardClassName": obj.standardClassName,
			"mineStatusZs": obj.mineStatusZs,
			"mineStatusZsName": obj.mineStatusZsName,
			"mineClassName": obj.mineClassName,
			"designOutput": obj.designOutput,
			"provedOutput": obj.provedOutput,
			"mineMinestyleName": obj.mineMinestyleName,
			"mineMinetypeName": obj.mineMinetypeName,
			"mineTransmitstyleName": obj.mineTransmitstyleName,
			"minePowerstyleName": obj.minePowerstyleName,
			"mineVentilatestyleName": obj.mineVentilatestyleName,
			"mineGeohazardtypeName": obj.mineGeohazardtypeName,
			"hydrogeologicalTypeName": obj.hydrogeologicalTypeName,
			"approvedMineDepth": obj.approvedMineDepth,
			"mineWsGradeName": obj.mineWsGradeName,
			"mineFireName": obj.mineFireName,
			"grimeExplosiveName": obj.grimeExplosiveName,
			"rockburstName": obj.rockburstName,
			"groupId": obj.groupId,
			"constructType": obj.constructType,
			"parentId": obj.parentId,
			"parentIdName": obj.parentIdName, 
		});
	}
	await setDatabase('baseInfo', arrBaseInfo)
	//2-add zfZzInfo(证照信息)
	let arrZfZzInfo = [];
	for (let i = 0; i < data.zfZzInfo.length; i++) {
		let obj = data.zfZzInfo[i];
		arrZfZzInfo.push({
			"corpId": obj.corpId,
			"delFlag": obj.delFlag,
			"corpName": obj.corpName,
			"provinceName": obj.provinceName,
			"cityName": obj.cityName,
			"countryName": obj.countryName,
			"zoneCountyId": obj.zoneCountyId,
			"groupId": obj.groupId,
			"credId": obj.credId,
			"effectiveTime": obj.effectiveTime,
			"expireTime": obj.expireTime,
			"credTypeName": obj.credTypeName
		});
	}
	await setDatabase('zfZzInfo', arrZfZzInfo)
	//3-add zfJjgzmInfo(掘进工作面信息)
	let arrZfJjgzmInfo = [];
	for (let i = 0; i < data.zfJjgzmInfo.length; i++) {
		let obj = data.zfJjgzmInfo[i];
		arrZfJjgzmInfo.push({
			"corpId": obj.corpId,
			"delFlag": obj.delFlag,
			"corpName": obj.corpName,
			"provinceName": obj.provinceName,
			"cityName": obj.cityName,
			"countryName": obj.countryName,
			"zoneCountyId": obj.zoneCountyId,
			"groupId": obj.groupId,
			"mineTunnelGeotype": obj.mineTunnelGeotype,
			"mineTunnelProcessName": obj.mineTunnelProcessName,
			"mineTunnelsupporstyleName": obj.mineTunnelsupporstyleName,
			"workfaceName": obj.workfaceName
		});
	}
	await setDatabase('zfJjgzmInfo', arrZfJjgzmInfo)
	//4-add zfCyrytjInfo(从业人员信息)
	let arrZfCyrytjInfo = [];
	for (let i = 0; i < data.zfCyrytjInfo.length; i++) {
		let obj = data.zfCyrytjInfo[i];
		arrZfCyrytjInfo.push({
			"corpId": obj.corpId,
			"delFlag": obj.delFlag,
			"corpName": obj.corpName,
			"provinceName": obj.provinceName,
			"cityName": obj.cityName,
			"countryName": obj.countryName,
			"zoneCountyId": obj.zoneCountyId,
			"groupId": obj.groupId,
			"reportYear": obj.reportYear,
			"cyrytZs": obj.reportYear,
			"cyrytJxcyrs": obj.reportYear,
			"cyrytZzrs": obj.reportYear,
			"cyrytGz": obj.reportYear,
			"cyrytCz": obj.reportYear,
			"cyrytCzyx": obj.reportYear
		});
	}
	await setDatabase('zfCyrytjInfo', arrZfCyrytjInfo)
	//5-add zfCmgzmInfo(采煤工作面信息)
	let arrZfCmgzmInfo = [];
	for (let i = 0; i < data.zfCmgzmInfo.length; i++) {
		let obj = data.zfCmgzmInfo[i];
		arrZfCmgzmInfo.push({
			"corpId": obj.corpId,
			"delFlag": obj.delFlag,
			"corpName": obj.corpName,
			"provinceName": obj.provinceName,
			"cityName": obj.cityName,
			"countryName": obj.countryName,
			"zoneCountyId": obj.zoneCountyId,
			"groupId": obj.groupId,
			"mineLayer": obj.mineLayer,
			"mineGatherstyleName": obj.mineGatherstyleName,
			"mineTunnelsupporstyleName": obj.mineTunnelsupporstyleName,
			"tffsName": obj.tffsName,
			"workfaceName": obj.workfaceName
		});
	}
	// 增:
	await setDatabase('zfCmgzmInfo', arrZfCmgzmInfo)
}

// “行政区域”下载。
export async function enterpriseListSave(resId, data){
	let EnterpriseList = [];
	for (let i = 0; i < data.length; i++) {
		let obj = data[i];
		EnterpriseList.push({
			no: obj.id,
			code: obj.code,
			createBy: obj.createBy,
			delFlag: obj.delFlag,
			name: obj.name,
			parentId: obj.parentId,
			parentIds: obj.parentIds,
			shortName: obj.shortName,
			sort: obj.sort,
			type: obj.type,
			updateBy: obj.updateBy,
			updateDate: obj.updateDate,
		});
	}
	await setDatabase(resId, EnterpriseList)
}

// “检查项类别”下载。
export async function checkCateSave(resId, data) {
	let arrCheck = [];
	for (let i = 0; i < data.length; i++) {
		let obj = data[i];
		arrCheck.push({
      no: obj.id,
      delFlag: obj.delFlag,
      sort: obj.sort,
      categoryName: obj.categoryName,
      groupId: obj.groupId,
      categoryCode: obj.categoryCode,
      souFlag: obj.souFlag,
      parentCode: obj.parentCode,
      parentId: obj.parentId,
			treeName: obj.categoryName,
      treeId: obj.categoryCode,
      treeParentId: obj.parentCode
    });
	}
	await setDatabase(resId, arrCheck)
}

// “检查项内容”下载。
export async function checkListSave(resId, data) {
	let arrCheck = [];
	for (let i = 0; i < data.length; i++) {
		let obj = data[i];
		arrCheck.push({
			no: obj.id,
      delFlag: obj.delFlag,
      createDate: obj.createDate,
      updateDate: obj.updateDate,
      itemCode: obj.itemCode,
      itemContent: obj.itemContent,
			basis: obj.basis,
			method: obj.method,
      status: obj.status,
      groupId: obj.groupId,
      souFlag: obj.souFlag,
      categoryCode: obj.categoryCode,
      categoryName: obj.categoryName,
      treeName: obj.itemContent,
      treeId: obj.itemCode,
      treeParentId: obj.categoryCode,
			qdId: obj.qdId,
			name: obj.name
		});
	}
	await setDatabase(resId, arrCheck)
}

// “隐患类别”下载。
export async function dangerCateSave(resId, data) {
	let arrDanger = [];
	for (let i = 0; i < data.length; i++) {
		let obj = data[i];
		arrDanger.push({
			no: obj.id,
			delFlag: obj.delFlag,
			sort: obj.sort,
			categoryName: obj.categoryName,
			groupId: obj.groupId,
			categoryCode: obj.categoryCode,
			categoryLevel: obj.categoryLevel,
			createBy: obj.createBy ? JSON.stringify(obj.createBy) : '',
			createDate: obj.createDate,
			updateBy: obj.updateBy ? JSON.stringify(obj.updateBy) : '',
			updateDate: obj.updateDate,
			industryId: obj.industryId,
			souFlag: obj.souFlag,
			parentCode: obj.parentCode,
			parentId: obj.parentId,
			pid: obj.pid,
			treeName: obj.categoryName,
			treeId: obj.categoryCode,
			treeParentId: obj.pid
		});
	}
	await setDatabase(resId, arrDanger)
}

// “隐患内容”下载。
export async function dangerListSave(resId, data) {
	let arrDanger = [];
	for (let i = 0; i < data.length; i++) {
		let obj = data[i];
		arrDanger.push({
			no: obj.id,
      delFlag: obj.delFlag,
      createDate: obj.createDate,
      updateDate: obj.updateDate,
      itemCode: obj.itemCode,
      itemContent: obj.itemContent,
      noItemContent: obj.noItemContent,
			confirmClause: obj.confirmClause,
      confirmBasis: obj.confirmBasis,
      onsiteBasis: obj.onsiteBasis,
      onsiteDesc: obj.onsiteDesc,
      penaltyBasis: obj.penaltyBasis,
      penaltyDesc: obj.penaltyDesc,
			status: obj.status,
      groupId: obj.groupId,
      categoryCode: obj.categoryCode,
      souFlag: obj.souFlag,
      treeName: obj.itemContent,
      treeId: obj.itemCode,
      treeParentId: obj.categoryCode,
			qdId: obj.qdId,
			name: obj.name
		});
	}
	await setDatabase(resId, arrDanger)
}

// “个人账号文书资源”下载。
export async function docSave(resId, data, savePullField = false){
	let arrPaper = data && data.paper ? data.paper : [];
	let arrCase = data && data.jczfCase ? data.jczfCase : [];
	let arrDanger = data && data.danger ? data.danger : [];
	let arrDocPaper = [], arrDocCase = [], arrDocDanger = [];
	//1-paper
	for (let i = 0; i < arrPaper.length; i++) {
		let obj = arrPaper[i];
		let objData = {
			"paperId": obj.paperId,
			"remoteId": obj.id,
			"delFlag": obj.delFlag,
			"createDate": obj.createDate,
			"updateDate": obj.updateDate,
			"createById": obj.createBy.id,
			"updateById": obj.updateBy.id,
			"paperType": obj.paperType,
			"paperContent": obj.paperContent,
			"createTime": obj.createTime,
			"caseId": obj.caseId,
			"caseType": obj.caseType,
			"name": obj.name,
			"personId": obj.personId,
			"personName": obj.personName,
			"corpId": obj.corpId,
			"corpName": obj.corpName,
			"planId": obj.planId,
			"groupId": obj.group.id,
			"groupName": obj.group.name,
			"p0FloorTime": obj.p0FloorTime,
			"p22JczfCheck": obj.p22JczfCheck,
			"p0ParentId": obj.p0ParentId,
			"p22BeginTime": obj.p22BeginTime, //"2021-06-15 00:00:00",
			"p22EndTime": obj.p22EndTime, //"2021-06-22 00:00:00",
			"p22location": obj.p22location, //"检查地点",
			"p22inspection": obj.p22inspection, //"32",
			"locationRemarks": obj.locationRemarks, //"%e5%85%a8%e7%b3%bb%e7%bb%9f%e5%90%84%e7%8e%af%e8%8a%82%e7%9b%91%e5%af%9f",
			"p1PersonId": obj.p1PersonId, //null,
			"p1PersonName": obj.p1PersonName,
			"p5EvidenceTime": obj.p5EvidenceTime, //null,
			"p8penaltyType": obj.p8penaltyType, //null,
			"p8Penalty": obj.p8Penalty ? Number(obj.p8Penalty) * 10000 : 0, // 因后台保存单位为万元，接收后转为元,
			"p8PersonPenalty": obj.p8PersonPenalty, //null,
			"p8OrgPenalty": obj.p8OrgPenalty, //null,
			"p13PersonId": obj.p13PersonId, // null,
			"p13PersonName": obj.p13PersonName, // null,
			"p31JudgeTime": obj.p31JudgeTime, //null,
			"p36PersonId": obj.p36PersonId, //null,
			"p36PersonName": obj.p36PersonName, //null,
			"p36RegisterTime": obj.p36RegisterTime, //null 
			"localizeFlag": obj.localizeFlag,
		}
		if (savePullField) {
			// 保存是否为拉取字段时 添加isPull标记字段存储，否则按原始数据存储
			objData.isPull = obj.isPull
		}
		arrDocPaper.push(objData);
	}
  await updatePaperDatabase(null, arrDocPaper)
	//2-case
	for (let i = 0; i < arrCase.length; i++) {
		let obj = arrCase[i];
		let objData = {
			"caseId": obj.caseId,
			"caseNo": obj.caseNo,
			"caseSn": obj.caseSn,
			"remoteId": obj.id,
			"delFlag": obj.delFlag,
			"createDate": obj.createDate,
			"updateDate": obj.updateDate,
			"createById": obj.createBy.id,
			"updateById": obj.updateBy.id,
			"corpId": obj.corpId,
			"corpName": obj.corpName,
			"personId": obj.personId,
			"personName": obj.personName,
			"groupId": obj.groupId,
			"groupName": obj.groupName,
			"caseType": obj.checkStatus,
			"checkReason": obj.checkReason,
			"checkStatus": obj.checkStatus,
			"planBeginDate": obj.planBeginDate,
			"planEndDate": obj.planEndDate,
			"meikuangType": obj.meikuangType,
			"meikuangPlanfrom": obj.meikuangPlanfrom,
			"planId": obj.planId,
			"pcMonth": obj.pcMonth,
			"caseClassify": obj.caseClassify,
			"riskAssessment": obj.riskAssessment,
			"riskAssessmentContent": obj.riskAssessmentContent, 
			"affiliate": obj.affiliate,
			"corpType": obj.corpType,
		}
		if (savePullField) {
			// 保存是否为拉取字段时 添加isPull标记字段存储，否则按原始数据存储
			objData.isPull = obj.isPull
		}
		arrDocCase.push(objData);
	}
  await updateDatabase('wkCase', arrDocCase, 'caseId')
	//3-danger
	for (let i = 0; i < arrDanger.length; i++) {
		let obj = arrDanger[i];
		let objData = {
			"dangerId": obj.dangerId,
			"paperId": obj.paperId,
			"remoteId": obj.id,
			"createDate": obj.createDate,
			"updateDate": obj.updateDate,
			"createBy": JSON.stringify(obj.createBy),
			"updateBy": JSON.stringify(obj.updateBy),
			"caseId": obj.caseId,
			"dangerType": JSON.stringify(obj.dangerType),
      "delFlag": obj.delFlag,
			"dangerCate": obj.dangerType.categoryCode,
			"dangerItemId": obj.dangerItemId,
			"dangerContent": obj.dangerContent,
			"dangerLocation": obj.dangerLocation,
			"dangerStatus": obj.dangerStatus,
			"detectTime": obj.detectTime,
			"isHigh": obj.isHigh,
			"personId": obj.personId,
			"personName": obj.personName,
			"personIds": obj.personIds,
			"personNames": obj.personNames,
			"rectifyTerm": obj.rectifyTerm,
			"solveTime": obj.solveTime,
			"solveMethod": obj.solveMethod,
			"checkTime": obj.checkTime,
			"checkPerson": obj.checkPerson,
			"subitemCode": obj.subitemCode,
			"subitemContent": obj.subitemContent,
			"subitemPenalty": obj.subitemPenalty,
			"subitemPenaltyBasis": obj.subitemPenaltyBasis,
			"penaltyOrg": obj.penaltyOrg,
			"penaltyOrgFine": Number(obj.penaltyOrgFine) * 10000,
			"penaltyPerson": obj.penaltyPerson,
			"penaltyPersonFine": Number(obj.penaltyPersonFine) * 10000,
			"itemOnsiteType": obj.itemOnsiteType,
			"itemOnsiteBasis": obj.itemOnsiteBasis,
			"onsiteContent": obj.onsiteContent,
			"verNo": obj.verNo,
			"basisContent": obj.basisContent,
			"name": obj.name,
			//"sourceFlag": "0",        //数据来源0为新数据，1为老数据
			"onsiteType": obj.onsiteType,
			"penaltyType": obj.penaltyType,
			"changeDangerType": obj.changeDangerType,
			"showIndex": obj.showIndex,
			"isCheck": obj.isCheck,
			"dangerParentId": obj.dangerParentId,
			"isCommon": obj.isCommon,
			"deviceNum": obj.deviceNum,
			"coalingFace": obj.coalingFace,
			"headingFace": obj.headingFace,
			"dangerCorrected": obj.dangerCorrected,
			"reviewUnitId": obj.reviewUnitId,
			"reviewUnitName": obj.reviewUnitName,
		}
		if (savePullField) {
			// 保存是否为拉取字段时 添加isPull标记字段存储，否则按原始数据存储
			objData.isPull = obj.isPull
		}
		arrDocDanger.push(objData);
	}
  await updateDatabase('wkDanger', arrDocDanger, 'dangerId')
}

// “委托复查,罚款收缴,回执单,影音证据,意见建议书附件”下载。
export async function fileDataSave(resId, data){
	let localReviewList = [], fineCollectionList = [], singleReceiptList = [], imageEvidenceList = [], paperAttachmentList = [], jczfReportList = [];
	//1-localReview
	for (let i = 0; i < data.localReview.length; i++) {
		let obj = data.localReview[i];
		localReviewList.push({
			"id": obj.id,
			"reviewId": obj.reviewId,
			"name": obj.name,
			"createBy": obj.createBy.id,
			"createDate": obj.createDate,
			"updateBy": obj.updateBy ? obj.updateBy.id : '',
			"updateDate": obj.updateDate,
			"delFlag": obj.delFlag,
			"remark": obj.remark,
			"caseId": obj.caseId,
			"fileName": obj.fileName,
			"filePath": obj.filePath,
			"createTime": obj.createTime,
			"fileSize": obj.fileSize,
			"hashCode": obj.hashCode,
			"paperId": obj.paperId,
		});
	}
	await updateDatabase('localReview', localReviewList)
	//2-fineCollection
	for (let i = 0; i < data.fineCollection.length; i++) {
		let obj = data.fineCollection[i];
		fineCollectionList.push({
			"id": obj.id,
			"fineId": obj.fineId,
			"name": obj.name,
			"createBy": obj.createBy.id,
			"createDate": obj.createDate,
			"updateDate": obj.updateDate,
			"delFlag": obj.delFlag,
			"remark": obj.remark,
			"caseId": obj.caseId,
			"paperId": obj.paperId,
			"punishType": obj.punishType,
			"P8Penalty": obj.P8Penalty ? Number(obj.P8Penalty) : 0,
			"collectionFine": obj.collectionFine,
			"p8Id": obj.p8Id,
			"paperNo": obj.paperNo,
			"createTime": obj.createTime,
			"lateFee": obj.lateFee,
			"collectionDate": obj.collectionDate,
		});
	}
	await updateDatabase('fineCollection', fineCollectionList)
	//3-singleReceipt
	for (let i = 0; i < data.singleReceipt.length; i++) {
		let obj = data.singleReceipt[i];
		singleReceiptList.push({
			"id": obj.id,
			"singleId": obj.singleId,
			"name": obj.name,
			"createBy": obj.createBy.id,
			"createDate": obj.createDate,
			"updateBy": obj.updateBy ? obj.updateBy.id : '',
			"updateDate": obj.updateDate,
			"delFlag": obj.delFlag,
			"remark": obj.remark,
			"caseId": obj.caseId,
			"fileName": obj.fileName,
			"filePath": obj.filePath,
			"createTime": obj.createTime,
			"fileSize": obj.fileSize,
			"hashCode": obj.hashCode,
			"paperId": obj.paperId,
			"p8Id": obj.p8Id,
		});
	}
	await updateDatabase('singleReceipt', singleReceiptList)
	//4-imageEvidence
	for (let i = 0; i < data.imageEvidence.length; i++) {
		let obj = data.imageEvidence[i];
		imageEvidenceList.push({
			"id": obj.id,
			"evidenceId": obj.evidenceId,
			"name": obj.name,
			"createBy": obj.createBy.id,
			"createDate": obj.createDate,
			"updateBy": obj.updateBy ? obj.updateBy.id : '',
			"updateDate": obj.updateDate,
			"delFlag": obj.delFlag,
			"remark": obj.remark,
			"filePath": obj.filePath,
			"caseId": obj.caseId,
			"caseNo": obj.caseNo,
			"evidenceType": obj.evidenceType,
			"groupId": obj.groupId,
			"groupName": obj.groupName,
			"corpId": obj.corpId,
			"corpName": obj.corpName,
			"paperId": obj.paperId,
			"evidenceDesc": obj.evidenceDesc,
			"createTime": obj.createTime,
			"fileName": obj.fileName,
			"fileSize": obj.fileSize,
			"hashCode": obj.hashCode,
		});
	}
	await updateDatabase('imageEvidence', imageEvidenceList)
	//5-paperAttachment
	for (let i = 0; i < data.paperAttachment.length; i++) {
		let obj = data.paperAttachment[i];
		paperAttachmentList.push({
			"id": obj.id,
			"attachmentId": obj.attachmentId,
			"paperId": obj.paperId,
			"fileSize": obj.fileSize,
			"fileType": obj.fileType,
			"fileHash": obj.fileHash,
			"fileName": obj.fileName,
			"filePath": obj.filePath,
			"groupId": obj.groupId,
			"groupName": obj.groupName,
			"createBy": obj.createBy.id,
			"createDate": obj.createDate,
			"updateBy": obj.updateBy ? obj.updateBy.id : '',
			"updateDate": obj.updateDate,
			"remark": obj.remark,
			"delFlag": obj.delFlag,
		});
	}
	await updateDatabase('paperAttachment', paperAttachmentList)
	//6-jczfReport
	for (let i = 0; i < data.jczfReport.length; i++) {
		let obj = data.jczfReport[i];
		jczfReportList.push({
			"id": obj.id, //
			"evidenceId": obj.evidenceId, // 接口无
			"fileName": obj.fileName, // 
			"filePath": obj.filePath, // 
			"fileSize": obj.fileSize, // 接口无
			"hashCode": obj.hashCode, // 接口无
			"caseId": obj.caseId, //
			"caseNo": obj.caseNo, // 接口无
			"groupId": obj.groupId, // 
			"groupName": obj.groupName, // 接口无
			"corpId": obj.corpId, //
			"corpName": obj.corpName, //
			"createTime": obj.createTime,
			"createDate": obj.createDate,
			"createBy": obj.createBy.id, //
			"updateDate": obj.updateDate, //
			"updateBy": obj.updateBy ? obj.updateBy.id : '', //
			"delFlag": obj.delFlag, // 
			"remark": obj.remark, // 接口无
			"paperId": obj.paperId, // 接口无
		});
	}
	await updateDatabase('jczfReport', jczfReportList)
}

// “码表”下载。
export async function dictionarySave(resId, data) {
	let arr = []
	for (let key in data) {
		arr.push({
			type: key,
			list: JSON.stringify(data[key])
		})
	}
  // 增:
	await setDatabase('dictionary', arr)
}

