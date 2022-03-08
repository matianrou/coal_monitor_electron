import GoDB from '@/utils/godb.min.js'
import store from "@/store"

// “机构资源”下载。
async function doOrgDb(resId, data) {
	// 当前获取的机构资源有重复的数据，导致第一次下载时会报错，故加上以下去重逻辑
	// let obj = {}
	// let arrData = JSON.parse(JSON.stringify(data))
	// arrData = arrData.reduce((cur, next) => {
	// 	obj[next.id] ? "" : obj[next.id] = true && cur.push(next);
	// 	return cur
	// }, [])
	// 检验数据是否仍有重复
	// let id = []
	// for (let i = 0; i < (arrData.length / 2); i++ ) {
	// 	let del = arrData.splice(i, 1)
	// 	arrData.map(item => {
	// 		if (del[0].id === item.id) {
	// 			console.log('del', del)
	// 			console.log('item', item)
	// 			id.push(del)
	// 		}
	// 	})
	// 	i--
	// }
	// console.log('id', id)
	let schema = {
		orgInfo: {
			"no": {
				type: String,
				unique: true
			},
			"createDate": String,
			"updateDate": String,
			"delFlag": String,
			"parentIds": String,
			"name": String,
			"code": String,
			"type": String,
			"grade": String,
			"address": String,
			"parentId": String,
			"sort": Number,
			"areaId": String,
			"areaName": String,
			"areaShortName": String,
			"areaParentIds": String,
			"areaDelFlag": String,
			"areaSort": Number,
			"sysOfficeInfo": String
		}
	}
  let db = new GoDB(store.state.DBName, schema);
  let orgInfo = db.table('orgInfo');

  //1-add baseInfo(机构基本信息)
  let arrOrg = [];
  for (let i = 0; i < data.length; i++) {
    let obj = data[i];
    let item = await orgInfo.get({ no: obj.id });
		if (item) await orgInfo.delete({ no: obj.id }); //删除
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
  await orgInfo.addMany(arrOrg);
  //await orgInfo.consoleTable();
  await db.close();
}

// “用户资源”下载。
async function doPersonDb(resId, data) {
  let arrPerson = [];
	let schema = {
		person: {
			admin: Boolean,
			company: String,
			createBy: String,
			createDate: String,
			delFlag: String,
			email: String,
			no: {
				type: String,
				unique: true
			},
			loginDate: String,
			loginFlag: String,
			loginIp: String,
			loginName: String,
			mobile: String,
			name: String,
			office: String,
			oldLoginDate: String,
			oldLoginIp: String,
			qylxmc: String,
			remarks: String,
			roleNames: String,
			updateBy: String,
			updateDate: String,
			userNumber: String,
			userType: String,
			zfLogin: Boolean,
			officeId: String,
			officeName: String,
		},
	}
  let db = new GoDB(store.state.DBName, schema);
  let person = db.table('person');
  for (let i = 0; i < data.length; i++) {
    let obj = data[i];
    let item = await person.get({ no: obj.id });
		if (item) await person.delete({ no: obj.id }); //删除
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
  await person.addMany(arrPerson);
  //await person.consoleTable();
  await db.close();

}

// “其他资源”下载。
async function doPlanDb(resId, data) {
	let schema = {
		// 检查分工中添加的人员
		addPerson: { 
			no: {
				type: String,
				unique: true
			},
			name: String,
			officeName: String,
			caseId: String,
			corpId: String,
			delFlag: String,
			createBy: String,
			createDate: String,
			company: String,
			email: String,
			mobile: String,
			office: String,
			qylxmc: String,
			remarks: String,
			roleNames: String,
			userType: String,
			officeId: String,
			officeName: String,
		},
		// “其他资源:计划表
		docPlan: {
			"no": {
				type: String,
				unique: true
			},
			"createDate": String,
			"updateDate": String,
			"delFlag": String,
			"status": String,
			"corpId": String,
			"corpName": String,
			"groupId": String,
			"planMonthTimes": String,
			"planMonth": String,
			"planYear": String,
			"meikuangType": String,
			"meikuangPlanfrom": String,
			"isRandom": String,
			"monitoringCategory": String,
			"monitoringCategoryName": String,
			"dbplanId":String,
		},
		// 字典表
		dictionary: {
			"type": {
				type: String,
				unique: true
			},
			"list": String,
		},
		// 未归档成功的文书存储
		prepareUpload: { 
			"id": { // 唯一标识
				type: String,
				unique: true
			},
			'paperId': String, // 文书id
			'isUpload': String, // 是否上传，0未上传 1已上传
			'corpId': String, // 煤矿企业id
			'corpName': String, // 煤矿企业名称
			'paperType': String, // 文书类型
			'name': String, // 文书类型名称
			'createDate': String, // 文书制作时间
			'personId': String, // 制作人id
			'personName': String, // 制作人姓名
			"delFlag": String, // 删除标记
			"caseId": String, // 检查活动id
		},
		// 个人自增文书编号
		personPaperNumber: { 
			"id": {
				type: String,
				unique: true
			},
			"year": String, // 年度文书号
			"paperNumber": String, // 所有类型文书号
			"createDate": String, // 创建日期
			"updateDate": String, // 更新日期
		}
	}
	let db = new GoDB(store.state.DBName, schema);
	let docPlan = db.table('docPlan');
	// 增加计划逻辑：删除当前已有所有计划，重新添加计划
	let planList = await docPlan.findAll(item => item)
	for (let i = 0; i < planList.length; i++) {
		await docPlan.delete({ no: planList[i].no  })
	}
	let arrPlan = [];
	if (data) {
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
	}
	// 增:
	await docPlan.addMany(arrPlan);
	await db.close();
}

// “企业资源”下载。
async function doCorpDb(resId, data) {
	let arrBaseInfo = data.baseInfo || [];
	let arrZfZzInfo = data.zfZzInfo || [];
	let arrZfJjgzmInfo = data.zfJjgzmInfo || [];
	let arrZfCyrytjInfo = data.zfCyrytjInfo || [];
	let arrZfCmgzmInfo = data.zfCmgzmInfo || [];
	let schema = {
		// “企业资源”:企业表
		corpBase: {
			"corpId": {
				type: String,
				unique: true
			},
			"delFlag": String, //"0",
			"corpName": String, //"邢台新兴通泰矿业集团内丘裕泰煤业有限公司",
			"meikuangType": String, //"5",
			"corpTypeName": String, // "县管企业",
			"address": String, //"邢台市内丘县内丘镇东庞前街村",
			"provinceName": String, //"河北省",
			"cityName": String, //"邢台市",
			"countryName": String, //"内丘县",
			"zoneCountyId": String, //"130523",
			"legalName": String, // "郑海庭",
			"legalTel": String, // 法定代表人电话
			"contacts": String, //"郑海庭",
			"tel": String, //"0319-6809588",
			"uscCode": String, // 统一信用代码
			"xkzStatusNameZs": String, //"未办证",
			"parentTypeName": String, //"地方国有",
			"economyTypeName": String, //"集体经济",
			"standardClassName": String, //"未评定",
			"mineStatusZs": String, //"0301",
			"mineStatusZsName": String, //"关闭矿井->已关闭矿井",
			"mineClassName": String, //"小型矿井",
			"designOutput": Number, //6.0,
			"provedOutput": Number, //15.0,
			"mineMinestyleName": String, //"立井",
			"mineMinetypeName": String, // "井工",
			"mineTransmitstyleName": String, // "调度绞车",
			"minePowerstyleName": String, // "双电源",
			"mineVentilatestyleName": String, // "其他",
			"mineGeohazardtypeName": String, //"爆炸",
			"hydrogeologicalTypeName": String, // "复杂",
			"approvedMineDepth": Number, // 200.0,
			"mineWsGradeName": String, //"低瓦斯",
			"mineFireName": String, //"自燃",
			"grimeExplosiveName": String, //"有爆炸性",
			"rockburstName": String, //"无冲击地压矿井",
			"groupId": String, // "130500130001"
			"constructType": String,  //煤矿11  上级企业10
			"parentId": String, // 上级企业
			"parentIdName": String, // 上级企业名称
		},
		// 证照信息
		zfZzInfo: {
			"delFlag": String, // "0",
			"corpId": String, // "130201001532",
			"corpName": String, // "开滦（集团）有限责任公司东欢坨矿业分公司",
			"provinceName": String, // "河北省",
			"cityName": String, // "唐山市",
			"countryName": String, // "路北区",
			"zoneCountyId": String, //"130203",
			"groupId": String, // "130200130001",
			"credId": String, // "130206196709150336",
			"effectiveTime": String, // "2016-07-13 12:07:00",
			"expireTime": String, // "2019-07-12 12:07:00",
			"credTypeName": String, // "矿长安全资格证"
		},
		// 掘进工作面信息
		zfJjgzmInfo: {
			"delFlag": String, // "0",
			"corpId": String, // "130201001532",
			"corpName": String, // "开滦（集团）有限责任公司东欢坨矿业分公司",
			"provinceName": String, // "河北省",
			"cityName": String, // "唐山市",
			"countryName": String, // "路北区",
			"zoneCountyId": String, // "130203",
			"groupId": String, // "130200130001",
			"mineTunnelGeotype": String, // "12",
			"mineTunnelProcessName": String, //"综掘",
			"mineTunnelsupporstyleName": String, // "锚喷支护",
			"workfaceName": String, // "-690南翼轨道巷"
		},
		// 从业人员信息
		zfCyrytjInfo: {
			"delFlag": String, // "0",
			"corpId": String, // "130201001532",
			"corpName": String, // "开滦（集团）有限责任公司东欢坨矿业分公司",
			"provinceName": String, // "河北省",
			"cityName": String, // "唐山市",
			"countryName": String, // "路北区",
			"zoneCountyId": String, // "130203",
			"groupId": String, // "130200130001",
			"reportYear": String, // "2016",
			"cyrytZs": String, // "3731",
			"cyrytJxcyrs": String, //"3224",
			"cyrytZzrs": String, // "572",
			"cyrytGz": String, //"1394",
			"cyrytCz": String, //"1706",
			"cyrytCzyx": String, //"59"
		},
		// 采煤工作面信息
		zfCmgzmInfo: {
			"delFlag": String, // "0",
			"corpId": String, // "130201001532",
			"corpName": String, // "开滦（集团）有限责任公司东欢坨矿业分公司",
			"provinceName": String, // "河北省",
			"cityName": String, // "唐山市",
			"countryName": String, // "路北区",
			"zoneCountyId": String, // "130203",
			"groupId": String, // "130200130001",
			"mineLayer": String, // "8",
			"mineGatherstyleName": String, // "综采",
			"mineTunnelsupporstyleName": String, // "综采支架支护",
			"tffsName": String, // "中央分列抽出",
			"workfaceName": String, // "3085"
		},
	}
	let db = new GoDB(store.state.DBName, schema);
	let corpBase = db.table('corpBase');
	let zfZzInfo = db.table('zfZzInfo');
	let zfJjgzmInfo = db.table('zfJjgzmInfo');
	let zfCyrytjInfo = db.table('zfCyrytjInfo');
	let zfCmgzmInfo = db.table('zfCmgzmInfo');

	//1-add baseInfo(煤矿基本信息)
	let arrOrg = [];
	for (let i = 0; i < arrBaseInfo.length; i++) {
		let obj = arrBaseInfo[i];
		let item = await corpBase.get({ corpId: obj.corpId });
		if (item) await corpBase.delete({ corpId: obj.corpId }); //删除
		arrOrg.push({
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
	// 增:
	console.log('-----------add baseInfo(煤矿基本信息)');
	await corpBase.addMany(arrOrg);

	//2-add zfZzInfo(证照信息)
	arrOrg = [];
	for (let i = 0; i < arrZfZzInfo.length; i++) {
		let obj = arrZfZzInfo[i];
		let item = await zfZzInfo.get({ corpId: obj.corpId });
		if (item) await zfZzInfo.delete({ corpId: obj.corpId }); //删除
		arrOrg.push({
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

	// 增:
	console.log('-----------add zfZzInfo(证照信息)');
	await zfZzInfo.addMany(arrOrg);

	//3-add zfJjgzmInfo(掘进工作面信息)
	arrOrg = [];
	for (let i = 0; i < arrZfJjgzmInfo.length; i++) {
		let obj = arrZfJjgzmInfo[i];
		let item = await zfJjgzmInfo.get({ corpId: obj.corpId });
		if (item) await zfJjgzmInfo.delete({ corpId: obj.corpId }); //删除
		arrOrg.push({
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

	// 增:
	console.log('-----------add zfJjgzmInfo(掘进工作面信息)');
	await zfJjgzmInfo.addMany(arrOrg);

	//4-add zfCyrytjInfo(从业人员信息)
	arrOrg = [];
	for (let i = 0; i < arrZfCyrytjInfo.length; i++) {
		let obj = arrZfCyrytjInfo[i];
		let item = await zfCyrytjInfo.get({ corpId: obj.corpId });
		if (item) await zfCyrytjInfo.delete({ corpId: obj.corpId }); //删除
		arrOrg.push({
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

	// 增:
	console.log('-----------add zfCyrytjInfo(从业人员信息)');
	await zfCyrytjInfo.addMany(arrOrg);

	//5-add zfCmgzmInfo(采煤工作面信息)
	arrOrg = [];
	for (let i = 0; i < arrZfCmgzmInfo.length; i++) {
		let obj = arrZfCmgzmInfo[i];
		let item = await zfCmgzmInfo.get({ corpId: obj.corpId });
		if (item) await zfCmgzmInfo.delete({ corpId: obj.corpId }); //删除
		arrOrg.push({
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
	console.log('-----------add zfCmgzmInfo(采煤工作面信息)');
	await zfCmgzmInfo.addMany(arrOrg);
	await db.close();
}

// “行政区域”下载。
async function doEnterpriseList(resId, data){
	let EnterpriseList = [];
	let schema = {
		// “行政区域”表。
		doEnterpriseList: {
			"no": {
				type: String,
				unique: true
			},
			"code": String,
			"createBy": String,
			"createDate": String,
			"delFlag": String,
			"id": String,
			"name": String,
			"parentId": String,
			"parentIds": String,
			"shortName": String,
			"sort": Number,
			"type": String,
			"updateBy": String,
			"updateDate": String,
		},
	}
	let db = new GoDB(store.state.DBName, schema);
	let doEnterpriseList = db.table('doEnterpriseList');

	for (let i = 0; i < data.length; i++) {
		let obj = data[i];
		//
		let item = await doEnterpriseList.get({ no: obj.id });
		if (item) await doEnterpriseList.delete({ no: obj.id }); //删除
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
	// 增:
	await doEnterpriseList.addMany(EnterpriseList);
	await db.close();
}

// “检查项类别”下载。
async function doCheckCateDb(resId, data) {
	let arrCheck = [];
	let schema = {
		// “检查项类别”表
		checkCate: {
			"no": {
				type: String,
				unique: true
			},
			//"id": "fe372c44-a4d9-7898-a162-c3ad70645922",
			"delFlag": String, // "0",
			"sort": Number, //30,
			"categoryName": String, //"露天煤矿",
			"groupId": String, //"000000110001",
			"categoryCode": String, //"000002",
			"souFlag": String, // "1",
			"parentCode": String, // "000000",
			"parentId": String, // "0"
			"treeName": String,
			"treeId": String,
			"treeParentId": String
		},
	}
	let db = new GoDB(store.state.DBName, schema);
	let checkCate = db.table('checkCate');

	for (let i = 0; i < data.length; i++) {
		let obj = data[i];
		let item = await checkCate.get({ no: obj.id });
		if (item) await checkCate.delete({ no: obj.id }); //删除
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

	// 增:
	await checkCate.addMany(arrCheck);
	await db.close();
}

// “检查项内容”下载。
async function doCheckListDb(resId, data) {
	let arrCheck = [];
	// 当前获取的检查项内容有重复的数据，导致第一次下载时会报错，故加上以下去重逻辑
	// let obj = {}
	// let arrData = JSON.parse(JSON.stringify(data))
	// arrData = arrData.reduce((cur, next) => {
	// 	obj[next.id] ? "" : obj[next.id] = true && cur.push(next);
	// 	return cur
	// }, [])
	// 检验数据是否仍有重复
	// let id = []
	// for (let i = 0; i < (arrData.length / 2); i++ ) {
	// 	let del = arrData.splice(i, 1)
	// 	arrData.map(item => {
	// 		if (del[0].id === item.id) {
	// 			console.log('del', del)
	// 			console.log('item', item)
	// 			id.push(del)
	// 		}
	// 	})
	// 	i--
	// }
	// console.log('id', id)
	let schema = {
		// “检查项内容”表
		checkList: {
			"no": String,
			"createDate": String,
			"updateDate": String,
			"delFlag": String,
			"itemCode": String,
			"itemContent": String,
			"basis": String,
			"method": String,
			"status": String,
			"groupId": String,
			"souFlag": String,
			"categoryCode": String,
			"categoryName": String,
			"treeName": String,
			"treeId": String,
			"treeParentId": String,
			"qdId": String, // 清单标记
			"name": String, // 清单名称
		},
	}
	let db = new GoDB(store.state.DBName, schema);
	let checkList = db.table('checkList');

	for (let i = 0; i < data.length; i++) {
		let obj = data[i];
		let item = await checkList.get({ no: obj.id });
		if (item) await checkList.delete({ no: obj.id }); //删除
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

	// 增:
	await checkList.addMany(arrCheck);
	await db.close();
}

// “隐患类别”下载。
async function doDangerCateDb(resId, data) {
	let arrDanger = [];
	let schema = {
		// “隐患类别”表
		dangerCate: {
			"no": {
				type: String,
				unique: true
			},
			//"id": "fe372c44-a4d9-7898-a162-c3ad70645922",
			"delFlag": String, // "0",
			"sort": Number, //30,
			"categoryName": String, //"露天煤矿",
			"groupId": String, //"000000110001",
			"categoryCode": String, //"000002",
			"categoryLevel": String,
			"createBy": String, 
			"createDate": String,
			"updateBy": String, 
			"updateDate": String,
			"industryId": String,
			"souFlag": String, // "1",
			"parentCode": String, // "000000",
			"parentId": String, // "0"
			"pid": String,
			"treeName": String,
			"treeId": String,
			"treeParentId": String
		},
	}
	let db = new GoDB(store.state.DBName, schema);
	let dangerCate = db.table('dangerCate');
	if (data) {
		for (let i = 0; i < data.length; i++) {
			let obj = data[i];
			let item = await dangerCate.get({ no: obj.id });
			if (item) await dangerCate.delete({ no: obj.id }); //删除
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
	}
	// 增:
	await dangerCate.addMany(arrDanger);
	await db.close();
}

// “隐患内容”下载。
async function doDangerListDb(resId, data) {
	let arrDanger = [];
	let schema = {
		// “隐患内容”表
		dangerList: {
			"no": String,
			"createDate": String,
			"updateDate": String,
			"delFlag": String,
			"itemCode": String,// "7502000045",
			"itemContent": String,//  "采用钻井法开凿立井井筒，钻井临时锁口深度不符合规定。",
			"noItemContent": String,//  "采用钻井法开凿立井井筒，钻井临时锁口深度不符合规定。",
			"confirmClause": String,//  "《煤矿安全规程》第五十条",
			"confirmBasis": String,//  "《煤矿安全规程》第五十条",
			"onsiteBasis": String,//  "《中华人民共和国安全生产法》第六十二条第一款第二项",
			"onsiteDesc": String,//  "责令限X日内改正",
			"penaltyBasis": String,//  "《安全生产违法行为行政处罚办法》第四十五条第一项",
			"penaltyDesc": String,//  "给予警告，并可以对生产经营单位处一万元以上三万元以下罚款，对其主要负责人、其他有关人员处一千元以上一万元以下的罚款。",
			"status": String,//  "20",
			"groupId": String,//  "000000110001",
			"categoryCode": String,//  "750200",
			"souFlag": String,//  "1"
			"treeName": String,
			"treeId": String,
			"treeParentId": String,
			"qdId": String, // 清单标记
			"name": String, // 清单名称
		},
	}
	let db = new GoDB(store.state.DBName, schema);
	let dangerList = db.table('dangerList');
	for (let i = 0; i < data.length; i++) {
		let obj = data[i];
		let item = await dangerList.get({ no: obj.id });
		if (item) await dangerList.delete({ no: obj.id }); //删除
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
	// 增:
	await dangerList.addMany(arrDanger);
	await db.close();
}

// “个人账号文书资源”下载。
async function doDocDb(resId, data, savePullField = false){
	let arrPaper = data && data.paper ? data.paper : [];
	let arrCase = data && data.jczfCase ? data.jczfCase : [];
	let arrDanger = data && data.danger ? data.danger : [];
	let schema = {
		// 文书
		wkPaper: {
			"paperId": {     //客户端生产的文书唯一id
				type: String,
				unique: true
			},
			"remoteId": String,  //服务器端生成的id/
			"delFlag": String,
			"createDate": String,
			"updateDate": String,
			"createById": String,
			"updateById": String,
			"paperType": String, //docTypeNo,
			"paperContent": String, // 文书大JSON字符串,/
			"paperHtml": String, // 文书展示样式html
			"createTime": String, //文书创建时间/
			"caseId": String, //第1次做文书时，活动的唯一id：185b15772fb746dfb3643a66aa192f86/
			"caseType": String, //活动类型
			"name": String, //文书名称
			"personId": String, //文书制作人id
			"personName": String, //文书制作人名称/
			"corpId": String,
			"corpName": String,
			"p0FloorTime": String, //归档时间：2021-06-15 11:00:38
			"p22JczfCheck": String,   //检查项分工明细表
			"groupId": String, //机构id
			"groupName": String, //机构名称
			"planId": String, //docPlan表-no字段
			"checkSite":String,
			"checkSiteArr":String,
			"p0ParentId": String, // 文书与其他文书关联id
			"p22BeginTime": String, //"2021-06-15 00:00:00",
			"p22EndTime": String, //"2021-06-22 00:00:00",
			"p22location": String, //"检查地点",
			"p22inspection": String, //"32",
			"locationRemarks": String, //"%e5%85%a8%e7%b3%bb%e7%bb%9f%e5%90%84%e7%8e%af%e8%8a%82%e7%9b%91%e5%af%9f",
			"p1PersonId": String, //null,
			"p1PersonName": String, //null,
			"p5EvidenceTime": String, //null,
			"p8penaltyType": String, //null,
			"p8Penalty": Number, //null,
			"p8PersonPenalty": String, //null,
			"p8OrgPenalty": String, //null,
			"p13PersonId": String, // null,
			"p13PersonName": String, // null,
			"p31JudgeTime": String, //null,
			"p36PersonId": String, //null,
			"p36PersonName": String, //null,
			"p36RegisterTime": String, //null 
			"localizeFlag": String,
			"isPull": Boolean, // "拉取的文书标记"
		},
		// 检查活动
		wkCase: {
			"caseId": {     //第1次做文书时，活动的唯一id：185b15772fb746dfb3643a66aa192f86
				type: String,
				unique: true
			},
			"caseNo": String,  //机构id+年月日时分秒：34060013074120210615110030
			"remoteId": String,  //服务器端生成的id
			"caseType": String, //活动类型
			"delFlag": String,
			"createDate": String,
			"updateDate": String,
			"createById": String,
			"updateById": String,
			"corpId": String, //企业id
			"corpName": String, //企业名称
			"personId": String, //文书制作人id
			"personName": String, //文书制作人名称
			"groupId": String, //机构id
			"groupName": String, //机构名称
			/*
			*/
			"corpType": String,
			"checkReason": String, // "1",
			"checkStatus": String, // "0",
			"planBeginDate": String, //检查开始日期：2021-06-15 00:00:00
			"planEndDate": String, //检查结束日期：2021-06-22 00:00:00
			//"createTime": "2021-06-15 11:00:25",
			"caseSn": String,
			//"sourceFlag": "0",
			"affiliate": String,
			"meikuangType": String, //docPlan表-meikuangType字段
			"meikuangPlanfrom": String, //docPlan表-meikuangPlanfrom字段
			"planId": String, //docPlan表-no字段
			"pcMonth": String, //计划时间（年月）：2021-6
			"caseClassify": String, // 活动分类 "2"
			"riskAssessment": String, // ""0100,0101,0102,0103,0104"
			"riskAssessmentContent": String, // "生产接续计划方面 ,矿井开拓、准备、回采比例失调（小） ,上级企业超能力下达生产指标，煤矿超强度、超定员组织生产 ,采掘工作面数量超过规定 ,其他 "
			//"mobile": false
			"isPull": Boolean, // "拉取的检查活动标记"
		},
		// 隐患
		wkDanger: {
			"dangerId": {     //客户端生产的隐患唯一id
				type: String,
				unique: true
			},
			"paperId": String, //客户端生产的文书唯一id
			"remoteId": String,  //服务器端生成的id
			/*
			"id": null,
			"isNewRecord": null,
			"remarks": null,
			*/
			"createDate":String,
			"updateDate": String,
			"createBy": String,
			"updateBy":String,
			"caseId": String,
			"dangerType": String,
			"delFlag": String,
			"dangerCate": String,
			"dangerItemId": String,   //"7101000033",
			"dangerContent": String,  //"煤矿建设项目未按规定进行安全预评价和安全验收评价，逾期未改正的。",
			"dangerLocation": String, //违法违规及隐患位置
			"dangerStatus": String,   //违法违规及隐患状态
			"detectTime": String,     //发现时间：2021-06-24 15:48:54
			"isHigh": String,         //是否重大隐患：[0|1]
			"personId": String,       //发现人编号：beba494c4b67435f93e5fdfbe440e18e
			"personName": String,     //发现人姓名：测试小柴
			"personIds": String,       //发现人编号多选：以逗号分隔
			"personNames": String,     //隐患发现人多选：以逗号分隔
			"rectifyTerm": String,    //整改期限
			"solveTime": String,      //隐患消解时间
			"solveMethod": String,    //整改落实措施
			"checkTime": String,      //整改核查时间
			"checkPerson": String,    //整改核查人
			"subitemCode": String,    //违法违规自由裁量序号
			"subitemContent": String,      //违法违规内容：煤矿建设项目未按规定进行安全预评价和安全验收评价，逾期未改正的。
			"subitemPenalty": String,      //违法违规行政处罚决定：逾期未改正的，处五十万元以上一百万元以下的罚款，对其直接负责的主管人员和其他直接责任人员处二万元以上五万元以下的罚款。
			"subitemPenaltyBasis": String, //行政处罚依据：《中华人民共和国安全生产法》第二十九条，第九十五条第一项
			"penaltyOrg": String,       //对单位的处罚
			"penaltyOrgFine": String,   //单位罚金
			"penaltyPerson": String,    //对个人的处罚
			"penaltyPersonFine": String,//个人罚金
			"itemOnsiteType": String,   //现场处理类型
			"itemOnsiteBasis": String,  //现场决定依据：《中华人民共和国安全生产法》第九十五条第一项
			"onsiteContent": String,    //现场处理内容：责令停止建设责令停止作业、限X日内改正
			"verNo": String,            // 版本号：null
			"basisContent": String,     //认定：《中华人民共和国安全生产法》第二十九条；《煤矿建设项目安全设施监察规定》第九条
			"name": String,             //名称
			//"sourceFlag": "0",        //数据来源0为新数据，1为老数据
			"onsiteType": String,       //现场处理决定类型：4
			"penaltyType": String,      //行政处罚类型：null,
			"changeDangerType": String, //更改后隐患类别：710100
			"showIndex": String,        //隐患顺序：1
			"isCheck": String,          //是否需要复查0不需要1需要,
			"dangerParentId": String,   //隐患父id：null
			"isCommon": String,         //是否为其他隐患（自定义隐患传1）：null
			"deviceNum": String,        //设备台数：默认为空
			"coalingFace": String,      //采煤工作面：3
			"headingFace": String,      //掘进工作面：6
			"dangerCorrected": String,  //隐患整改情况(0未整改，1已整改）：null
			"reviewUnitId": String,     //复查单位id：null
			"reviewUnitName": String,   //复查单位名称：null
			"isPull": Boolean, // "拉取的隐患标记"
		},
		// 创建发送文书数据库
		sendPaper: {
			"id": {     
				type: String,
				unique: true
			},
			"postId": String,  // 发送人id
			"receiveId": String, // 接收人id,
			"receiveName": String, // 接收人姓名,
			"paperContent": String, // 文书大JSON字符串,/
			"companyId": String, // 煤矿id
			"companyName": String, // 煤矿名称,
			"isReceive": String, // 是否发送,'0'未发送，'1'是发送
			"delFlag": String, // 2保存 1删除 0归档
			"createDate": String,
			"updateDate": String,
			"createById": String,
			"updateById": String,
		},
		// 创建发送隐患数据库
		sendDanger: {
			"HistoryId": {     
				type: String,
				unique: true
			},
			"categoryCode": String,
			"confirmBasis": String,
			"createDate": String, 
			"itemId": String, 
			"isNewRecord": Boolean, 
			"isOther": Boolean, 
			"isSelected": Boolean, 
			"itemCode": String, 
			"itemContent": String, 
			"onsiteBasis": String, 
			"onsiteDesc": String, 
			"penaltyBasis": String, 
			"penaltyDesc": String, 
			"updateDate": String, 
			"delFlag": String,
			"isSend": String, // 0为未发送，1为发送
			"postId": String,
			"receiveId": String,
			"name": String,
			"companyId": String,
			"companyName": String,
			"no": String,
			"isCommon": String,
			"sendTime": String,
		},
	}
	let db = new GoDB(store.state.DBName, schema);
	let wkPaper = db.table('wkPaper');
	let wkCase = db.table('wkCase');
	let wkDanger = db.table('wkDanger');
	let arrDocPaper = [], arrDocCase = [], arrDocDanger = [];
	//1-paper
	for (let i = 0; i < arrPaper.length; i++) {
		let obj = arrPaper[i];
		let item = await wkPaper.get({ paperId: obj.paperId });
		let isPull = null
		if (item) {
			if (!savePullField) {
				isPull = item.isPull ? item.isPull : null
			}
			await wkPaper.delete({ paperId: obj.paperId }); // 删除
		}
		arrDocPaper.push({
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
			"isPull": savePullField ? obj.isPull : isPull,
		});
	}

	//2-case
	for (let i = 0; i < arrCase.length; i++) {
		let obj = arrCase[i];
		let item = await wkCase.get({ caseId: obj.caseId });
		let isPull = null
		if (item) {
			if (!savePullField) {
				isPull = item.isPull ? item.isPull : null
			}
			await wkCase.delete({ caseId: obj.caseId }); //删除
		}
		arrDocCase.push({
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
			"isPull": savePullField ? obj.isPull : isPull,
		});
	}

	// 当前获取的检查项内容有重复的数据，导致第一次下载时会报错，故加上以下去重逻辑
	// let obj = {}
	// arrDanger = arrDanger.reduce((cur, next) => {
	// 	obj[next.id] ? "" : obj[next.id] = true && cur.push(next);
	// 	return cur
	// }, [])
	// 检验数据是否仍有重复
	// let id = []
	// for (let i = 0; i < arrDanger.length; i++ ) {
	// 	let del = arrDanger.splice(i, 1)
	// 	arrDanger.map(item => {
	// 		if (del[0].dangerId === item.dangerId) {
	// 			id.push(del)
	// 		}
	// 	})
	// 	i--
	// }
	// console.log('id', id)
	//3-danger
	for (let i = 0; i < arrDanger.length; i++) {
		let obj = arrDanger[i];
		let item = await wkDanger.get({ dangerId: obj.dangerId });
		let isPull = null
		if (item) {
			if (!savePullField) {
				isPull = item.isPull ? item.isPull : null
			}
			await wkDanger.delete({ dangerId: obj.dangerId }); //删除
		}
		arrDocDanger.push({
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
			"isPull": savePullField ? obj.isPull : isPull,
		});
	}

	// 增:
	await wkPaper.addMany(arrDocPaper);
	await wkCase.addMany(arrDocCase);
	await wkDanger.addMany(arrDocDanger);
	//await docInfo.consoleTable();
	await db.close();
}

// “委托复查,罚款收缴,回执单,影音证据,意见建议书附件”下载。
async function docFileListDb(resId, data){
	let schema = {
		// 委托复查
		localReview: {
			"id": {
				type: String,
				unique: true
			},
			"reviewId": String,
			"name": String,
			"createBy": String,
			"createDate": String,
			"updateBy": String,
			"updateDate": String,
			"delFlag": String,
			"remark": String,
			"caseId": String,
			"fileName": String,
			"filePath": String,
			"createTime": String,
			"fileSize": Number,
			"hashCode": String,
			"paperId": String,
		},
		// 罚款收缴
		fineCollection: {
			"id": {
				type: String,
				unique: true
			},
			"fineId": String,
			"name": String,
			"createBy": String,
			"createDate": String,
			"updateBy": String,
			"updateDate": String,
			"delFlag": String,
			"remark": String,
			"caseId": String,
			"paperId": String,
			"punishType": String,
			"P8Penalty": Number,
			"collectionFine": String,
			"p8Id": String,
			"paperNo": String,
			"createTime": String,
			"lateFee": String,
			"collectionDate": String,
		},
		// 回执单
		singleReceipt: {
			"id": {
				type: String,
				unique: true
			},
			"singleId": String,
			"name": String,
			"createBy": String,
			"createDate": String,
			"updateBy": String,
			"updateDate": String,
			"delFlag": String,
			"remark": String,
			"caseId": String,
			"fileName": String,
			"filePath": String,
			"createTime": String,
			"fileSize": Number,
			"hashCode": String,
			"paperId": String,
			"p8Id": String,
		},
		// 影音证据
		imageEvidence: {
			"id": {
				type: String,
				unique: true
			},
			"evidenceId": String,
			"name": String,
			"createBy": String,
			"createDate": String,
			"updateBy": String,
			"updateDate": String,
			"delFlag": String,
			"remark": String,
			"filePath": String,
			"caseId": String,
			"caseNo": String,
			"evidenceType": String,
			"groupId": String,
			"groupName": String,
			"corpId": String,
			"corpName": String,
			"paperId": String,
			"evidenceDesc": String,
			"createTime": String,
			"fileName": String,
			"fileSize": String,
			"hashCode": String,
		},
		// 附件
		paperAttachment: {
			"id": {
				type: String,
				unique: true
			},
			"attachmentId": String,
			"paperId": String,
			"fileSize": String,
			"fileType": String,
			"fileHash": String,
			"fileName": String,
			"filePath": String,
			"groupId": String,
			"groupName": String,
			"createBy": String,
			"createDate": String,
			"updateBy": String,
			"updateDate": String,
			"remark": String,
			"delFlag": String,
		},
		// 监察执法报告
		jczfReport: {
			"id": {
				type: String,
				unique: true
			},
			"evidenceId": String,
			"fileName": String,
			"filePath": String,
			"fileSize": String,
			"hashCode": String,
			"caseId": String,
			"caseNo": String,
			"groupId": String,
			"groupName": String,
			"corpId": String,
			"corpName": String,
			"createTime": String,
			"createDate": String,
			"createBy": String,
			"updateBy": String,
			"updateDate": String,
			"delFlag": String,
			"remark": String,
			"paperId": String,
		},
	}
	let db = new GoDB(store.state.DBName, schema);
	let localReview = db.table('localReview');
	let fineCollection = db.table('fineCollection');
	let singleReceipt = db.table('singleReceipt');
	let imageEvidence = db.table('imageEvidence');
	let paperAttachment = db.table('paperAttachment');
	let jczfReport = db.table('jczfReport');
	let localReviewList = [], fineCollectionList = [], singleReceiptList = [], imageEvidenceList = [], paperAttachmentList = [], jczfReportList = [];
	//1-localReview
	for (let i = 0; i < data.localReview.length; i++) {
		let obj = data.localReview[i];
		let item = await localReview.get({ id: obj.id });
		if (item) await localReview.delete({ id: obj.id }); //删除
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
	//2-fineCollection
	for (let i = 0; i < data.fineCollection.length; i++) {
		let obj = data.fineCollection[i];
		let item = await fineCollection.get({ id: obj.id });
		if (item) await fineCollection.delete({ id: obj.id }); //删除
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
	//3-singleReceipt
	for (let i = 0; i < data.singleReceipt.length; i++) {
		let obj = data.singleReceipt[i];
		let item = await singleReceipt.get({ id: obj.id });
		if (item) await singleReceipt.delete({ id: obj.id }); //删除
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
	//4-imageEvidence
	for (let i = 0; i < data.imageEvidence.length; i++) {
		let obj = data.imageEvidence[i];
		let item = await imageEvidence.get({ id: obj.id });
		if (item) await imageEvidence.delete({ id: obj.id }); //删除
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
	//5-paperAttachment
	for (let i = 0; i < data.paperAttachment.length; i++) {
		let obj = data.paperAttachment[i];
		let item = await paperAttachment.get({ id: obj.id });
		if (item) await paperAttachment.delete({ id: obj.id }); //删除
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
	//6-jczfReport
	for (let i = 0; i < data.jczfReport.length; i++) {
		let obj = data.jczfReport[i];
		let item = await jczfReport.get({ id: obj.id });
		if (item) await jczfReport.delete({ id: obj.id }); //删除
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
	// 增:
	await localReview.addMany(localReviewList);
	await fineCollection.addMany(fineCollectionList);
	await singleReceipt.addMany(singleReceiptList);
	await imageEvidence.addMany(imageEvidenceList);
	await paperAttachment.addMany(paperAttachmentList);
	await jczfReport.addMany(jczfReportList);
	await db.close();
}

// “码表”下载。
async function docDictionaryDb(resId, data) {
  let db = new GoDB(store.state.DBName);
  let dictionary = db.table('dictionary');
	let arr = []
	for (let key in data) {
		let item = await dictionary.get({type: key})
		if(item) await dictionary.delete({type: key}) //删除
		arr.push({
			type: key,
			list: JSON.stringify(data[key])
		})
	}
  // 增:
  await dictionary.addMany(arr);
  await db.close();
}

// 数据库表结构:
let schema = {
	// 机构资源表
	orgInfo: {
		"no": {
			type: String,
			unique: true
		},
		"createDate": String,
		"updateDate": String,
		"delFlag": String,
		"parentIds": String,
		"name": String,
		"code": String,
		"type": String,
		"grade": String,
		"address": String,
		"parentId": String,
		"sort": Number,
		"areaId": String,
		"areaName": String,
		"areaShortName": String,
		"areaParentIds": String,
		"areaDelFlag": String,
		"areaSort": Number,
		"sysOfficeInfo": String
	},
	// “用户资源”表
	person: {
		admin: Boolean,
		company: String,
		createBy: String,
		createDate: String,
		delFlag: String,
		email: String,
		no: {
			type: String,
			unique: true
		},
		loginDate: String,
		loginFlag: String,
		loginIp: String,
		loginName: String,
		mobile: String,
		name: String,
		office: String,
		oldLoginDate: String,
		oldLoginIp: String,
		qylxmc: String,
		remarks: String,
		roleNames: String,
		updateBy: String,
		updateDate: String,
		userNumber: String,
		userType: String,
		zfLogin: Boolean,
		officeId: String,
		officeName: String,
	},
	// 检查分工中添加的人员
	addPerson: { 
		no: {
			type: String,
			unique: true
		},
		name: String,
		officeName: String,
		caseId: String,
		corpId: String,
		delFlag: String,
		createBy: String,
		createDate: String,
		company: String,
		email: String,
		mobile: String,
		office: String,
		qylxmc: String,
		remarks: String,
		roleNames: String,
		userType: String,
		officeId: String,
		officeName: String,
	},
	// “其他资源:计划表
	docPlan: {
		"no": {
			type: String,
			unique: true
		},
		"createDate": String,
		"updateDate": String,
		"delFlag": String,
		"status": String,
		"corpId": String,
		"corpName": String,
		"groupId": String,
		"planMonthTimes": String,
		"planMonth": String,
		"planYear": String,
		"meikuangType": String,
		"meikuangPlanfrom": String,
		"isRandom": String,
		"monitoringCategory": String,
		"monitoringCategoryName": String,
		"dbplanId":String,
	},
	// 字典表
	dictionary: {
		"type": {
			type: String,
			unique: true
		},
		"list": String,
	},
	// “企业资源”:企业表
	corpBase: {
		"corpId": {
			type: String,
			unique: true
		},
		"delFlag": String, //"0",
		"corpName": String, //"邢台新兴通泰矿业集团内丘裕泰煤业有限公司",
		"meikuangType": String, //"5",
		"corpTypeName": String, // "县管企业",
		"address": String, //"邢台市内丘县内丘镇东庞前街村",
		"provinceName": String, //"河北省",
		"cityName": String, //"邢台市",
		"countryName": String, //"内丘县",
		"zoneCountyId": String, //"130523",
		"legalName": String, // "郑海庭",
		"legalTel": String, // 法定代表人电话
		"contacts": String, //"郑海庭",
		"tel": String, //"0319-6809588",
		"uscCode": String, // 统一信用代码
		"xkzStatusNameZs": String, //"未办证",
		"parentTypeName": String, //"地方国有",
		"economyTypeName": String, //"集体经济",
		"standardClassName": String, //"未评定",
		"mineStatusZs": String, //"0301",
		"mineStatusZsName": String, //"关闭矿井->已关闭矿井",
		"mineClassName": String, //"小型矿井",
		"designOutput": Number, //6.0,
		"provedOutput": Number, //15.0,
		"mineMinestyleName": String, //"立井",
		"mineMinetypeName": String, // "井工",
		"mineTransmitstyleName": String, // "调度绞车",
		"minePowerstyleName": String, // "双电源",
		"mineVentilatestyleName": String, // "其他",
		"mineGeohazardtypeName": String, //"爆炸",
		"hydrogeologicalTypeName": String, // "复杂",
		"approvedMineDepth": Number, // 200.0,
		"mineWsGradeName": String, //"低瓦斯",
		"mineFireName": String, //"自燃",
		"grimeExplosiveName": String, //"有爆炸性",
		"rockburstName": String, //"无冲击地压矿井",
		"groupId": String, // "130500130001"
		"constructType": String,  //煤矿11  上级企业10
		"parentId": String, // 上级企业
		"parentIdName": String, // 上级企业名称
	},
	// 证照信息
	zfZzInfo: {
		"delFlag": String, // "0",
		"corpId": String, // "130201001532",
		"corpName": String, // "开滦（集团）有限责任公司东欢坨矿业分公司",
		"provinceName": String, // "河北省",
		"cityName": String, // "唐山市",
		"countryName": String, // "路北区",
		"zoneCountyId": String, //"130203",
		"groupId": String, // "130200130001",
		"credId": String, // "130206196709150336",
		"effectiveTime": String, // "2016-07-13 12:07:00",
		"expireTime": String, // "2019-07-12 12:07:00",
		"credTypeName": String, // "矿长安全资格证"
	},
	// 掘进工作面信息
	zfJjgzmInfo: {
		"delFlag": String, // "0",
		"corpId": String, // "130201001532",
		"corpName": String, // "开滦（集团）有限责任公司东欢坨矿业分公司",
		"provinceName": String, // "河北省",
		"cityName": String, // "唐山市",
		"countryName": String, // "路北区",
		"zoneCountyId": String, // "130203",
		"groupId": String, // "130200130001",
		"mineTunnelGeotype": String, // "12",
		"mineTunnelProcessName": String, //"综掘",
		"mineTunnelsupporstyleName": String, // "锚喷支护",
		"workfaceName": String, // "-690南翼轨道巷"
	},
	// 从业人员信息
	zfCyrytjInfo: {
		"delFlag": String, // "0",
		"corpId": String, // "130201001532",
		"corpName": String, // "开滦（集团）有限责任公司东欢坨矿业分公司",
		"provinceName": String, // "河北省",
		"cityName": String, // "唐山市",
		"countryName": String, // "路北区",
		"zoneCountyId": String, // "130203",
		"groupId": String, // "130200130001",
		"reportYear": String, // "2016",
		"cyrytZs": String, // "3731",
		"cyrytJxcyrs": String, //"3224",
		"cyrytZzrs": String, // "572",
		"cyrytGz": String, //"1394",
		"cyrytCz": String, //"1706",
		"cyrytCzyx": String, //"59"
	},
	// 采煤工作面信息
	zfCmgzmInfo: {
		"delFlag": String, // "0",
		"corpId": String, // "130201001532",
		"corpName": String, // "开滦（集团）有限责任公司东欢坨矿业分公司",
		"provinceName": String, // "河北省",
		"cityName": String, // "唐山市",
		"countryName": String, // "路北区",
		"zoneCountyId": String, // "130203",
		"groupId": String, // "130200130001",
		"mineLayer": String, // "8",
		"mineGatherstyleName": String, // "综采",
		"mineTunnelsupporstyleName": String, // "综采支架支护",
		"tffsName": String, // "中央分列抽出",
		"workfaceName": String, // "3085"
	},
	// “行政区域”表。
	doEnterpriseList: {
		"no": {
			type: String,
			unique: true
		},
		"code": String,
		"createBy": String,
		"createDate": String,
		"delFlag": String,
		"id": String,
		"name": String,
		"parentId": String,
		"parentIds": String,
		"shortName": String,
		"sort": Number,
		"type": String,
		"updateBy": String,
		"updateDate": String,
	},
	// “检查项类别”表
	checkCate: {
		"no": {
			type: String,
			unique: true
		},
		//"id": "fe372c44-a4d9-7898-a162-c3ad70645922",
		"delFlag": String, // "0",
		"sort": Number, //30,
		"categoryName": String, //"露天煤矿",
		"groupId": String, //"000000110001",
		"categoryCode": String, //"000002",
		"souFlag": String, // "1",
		"parentCode": String, // "000000",
		"parentId": String, // "0"
		"treeName": String,
		"treeId": String,
		"treeParentId": String
	},
	// “检查项内容”表
	checkList: {
		"no": String,
		"createDate": String,
		"updateDate": String,
		"delFlag": String,
		"itemCode": String,
		"itemContent": String,
		"basis": String,
		"method": String,
		"status": String,
		"groupId": String,
		"souFlag": String,
		"categoryCode": String,
		"categoryName": String,
		"treeName": String,
		"treeId": String,
		"treeParentId": String,
		"qdId": String, // 清单标记
		"name": String, // 清单名称
	},
	// “隐患类别”表
	dangerCate: {
		"no": {
			type: String,
			unique: true
		},
		//"id": "fe372c44-a4d9-7898-a162-c3ad70645922",
		"delFlag": String, // "0",
		"sort": Number, //30,
		"categoryName": String, //"露天煤矿",
		"groupId": String, //"000000110001",
		"categoryCode": String, //"000002",
		"categoryLevel": String,
		"createBy": String, 
		"createDate": String,
		"updateBy": String, 
		"updateDate": String,
		"industryId": String,
		"souFlag": String, // "1",
		"parentCode": String, // "000000",
		"parentId": String, // "0"
		"pid": String,
		"treeName": String,
		"treeId": String,
		"treeParentId": String
	},
	// “隐患内容”表
	dangerList: {
		"no": String,
		"createDate": String,
		"updateDate": String,
		"delFlag": String,
		"itemCode": String,// "7502000045",
		"itemContent": String,//  "采用钻井法开凿立井井筒，钻井临时锁口深度不符合规定。",
		"noItemContent": String,//  "采用钻井法开凿立井井筒，钻井临时锁口深度不符合规定。",
		"confirmClause": String,//  "《煤矿安全规程》第五十条",
		"confirmBasis": String,//  "《煤矿安全规程》第五十条",
		"onsiteBasis": String,//  "《中华人民共和国安全生产法》第六十二条第一款第二项",
		"onsiteDesc": String,//  "责令限X日内改正",
		"penaltyBasis": String,//  "《安全生产违法行为行政处罚办法》第四十五条第一项",
		"penaltyDesc": String,//  "给予警告，并可以对生产经营单位处一万元以上三万元以下罚款，对其主要负责人、其他有关人员处一千元以上一万元以下的罚款。",
		"status": String,//  "20",
		"groupId": String,//  "000000110001",
		"categoryCode": String,//  "750200",
		"souFlag": String,//  "1"
		"treeName": String,
		"treeId": String,
		"treeParentId": String,
		"qdId": String, // 清单标记
		"name": String, // 清单名称
	},
	// “个人账号文书资源”:
	// 文书
	wkPaper: {
		"paperId": {     //客户端生产的文书唯一id
			type: String,
			unique: true
		},
		"remoteId": String,  //服务器端生成的id/
		"delFlag": String,
		"createDate": String,
		"updateDate": String,
		"createById": String,
		"updateById": String,
		"paperType": String, //docTypeNo,
		"paperContent": String, // 文书大JSON字符串,/
		"paperHtml": String, // 文书展示样式html
		"createTime": String, //文书创建时间/
		"caseId": String, //第1次做文书时，活动的唯一id：185b15772fb746dfb3643a66aa192f86/
		"caseType": String, //活动类型
		"name": String, //文书名称
		"personId": String, //文书制作人id
		"personName": String, //文书制作人名称/
		"corpId": String,
		"corpName": String,
		"p0FloorTime": String, //归档时间：2021-06-15 11:00:38
		"p22JczfCheck": String,   //检查项分工明细表
		"groupId": String, //机构id
		"groupName": String, //机构名称
		"planId": String, //docPlan表-no字段
		"checkSite":String,
		"checkSiteArr":String,
		"p0ParentId": String, // 文书与其他文书关联id
		"p22BeginTime": String, //"2021-06-15 00:00:00",
		"p22EndTime": String, //"2021-06-22 00:00:00",
		"p22location": String, //"检查地点",
		"p22inspection": String, //"32",
		"locationRemarks": String, //"%e5%85%a8%e7%b3%bb%e7%bb%9f%e5%90%84%e7%8e%af%e8%8a%82%e7%9b%91%e5%af%9f",
		"p1PersonId": String, //null,
		"p1PersonName": String, //null,
		"p5EvidenceTime": String, //null,
		"p8penaltyType": String, //null,
		"p8Penalty": Number, //null,
		"p8PersonPenalty": String, //null,
		"p8OrgPenalty": String, //null,
		"p13PersonId": String, // null,
		"p13PersonName": String, // null,
		"p31JudgeTime": String, //null,
		"p36PersonId": String, //null,
		"p36PersonName": String, //null,
		"p36RegisterTime": String, //null 
		"localizeFlag": String, // 国产化标记：1
		"isPull": Boolean, // "拉取的检查活动标记"
	},
	// 检查活动
	wkCase: {
		"caseId": {     //第1次做文书时，活动的唯一id：185b15772fb746dfb3643a66aa192f86
			type: String,
			unique: true
		},
		"caseNo": String,  //机构id+年月日时分秒：34060013074120210615110030
		"remoteId": String,  //服务器端生成的id
		"caseType": String, //活动类型
		"delFlag": String,
		"createDate": String,
		"updateDate": String,
		"createById": String,
		"updateById": String,
		"corpId": String, //企业id
		"corpName": String, //企业名称
		"personId": String, //文书制作人id
		"personName": String, //文书制作人名称
		"groupId": String, //机构id
		"groupName": String, //机构名称
		/*
		*/
		"corpType": String,
		"checkReason": String, // "1",
		"checkStatus": String, // "0",
		"planBeginDate": String, //检查开始日期：2021-06-15 00:00:00
		"planEndDate": String, //检查结束日期：2021-06-22 00:00:00
		//"createTime": "2021-06-15 11:00:25",
		"caseSn": String,
		//"sourceFlag": "0",
		"affiliate": String,
		"meikuangType": String, //docPlan表-meikuangType字段
		"meikuangPlanfrom": String, //docPlan表-meikuangPlanfrom字段
		"planId": String, //docPlan表-no字段
		"pcMonth": String, //计划时间（年月）：2021-6
		"caseClassify": String, // 活动分类 "2"
		"riskAssessment": String, // ""0100,0101,0102,0103,0104"
		"riskAssessmentContent": String, // "生产接续计划方面 ,矿井开拓、准备、回采比例失调（小） ,上级企业超能力下达生产指标，煤矿超强度、超定员组织生产 ,采掘工作面数量超过规定 ,其他 "
		//"mobile": false
		"isPull": Boolean, // "拉取的检查活动标记"
	},
	// 隐患
	wkDanger: {
		"dangerId": {     //客户端生产的隐患唯一id
			type: String,
			unique: true
		},
		"paperId": String, //客户端生产的文书唯一id
		"remoteId": String,  //服务器端生成的id
		/*
		"id": null,
		"isNewRecord": null,
		"remarks": null,
		*/
		"createDate":String,
		"updateDate": String,
		"createBy": String,
		"updateBy":String,
		"caseId": String,
		"dangerType": String,
		"delFlag": String,
		"dangerCate": String,
		"dangerItemId": String,   //"7101000033",
		"dangerContent": String,  //"煤矿建设项目未按规定进行安全预评价和安全验收评价，逾期未改正的。",
		"dangerLocation": String, //违法违规及隐患位置
		"dangerStatus": String,   //违法违规及隐患状态
		"detectTime": String,     //发现时间：2021-06-24 15:48:54
		"isHigh": String,         //是否重大隐患：[0|1]
		"personId": String,       //发现人编号：beba494c4b67435f93e5fdfbe440e18e
		"personName": String,     //发现人姓名：测试小柴
		"personIds": String,       //发现人编号多选：以逗号分隔
		"personNames": String,     //隐患发现人多选：以逗号分隔
		"rectifyTerm": String,    //整改期限
		"solveTime": String,      //隐患消解时间
		"solveMethod": String,    //整改落实措施
		"checkTime": String,      //整改核查时间
		"checkPerson": String,    //整改核查人
		"subitemCode": String,    //违法违规自由裁量序号
		"subitemContent": String,      //违法违规内容：煤矿建设项目未按规定进行安全预评价和安全验收评价，逾期未改正的。
		"subitemPenalty": String,      //违法违规行政处罚决定：逾期未改正的，处五十万元以上一百万元以下的罚款，对其直接负责的主管人员和其他直接责任人员处二万元以上五万元以下的罚款。
		"subitemPenaltyBasis": String, //行政处罚依据：《中华人民共和国安全生产法》第二十九条，第九十五条第一项
		"penaltyOrg": String,       //对单位的处罚
		"penaltyOrgFine": String,   //单位罚金
		"penaltyPerson": String,    //对个人的处罚
		"penaltyPersonFine": String,//个人罚金
		"itemOnsiteType": String,   //现场处理类型
		"itemOnsiteBasis": String,  //现场决定依据：《中华人民共和国安全生产法》第九十五条第一项
		"onsiteContent": String,    //现场处理内容：责令停止建设责令停止作业、限X日内改正
		"verNo": String,            // 版本号：null
		"basisContent": String,     //认定：《中华人民共和国安全生产法》第二十九条；《煤矿建设项目安全设施监察规定》第九条
		"name": String,             //名称
		//"sourceFlag": "0",        //数据来源0为新数据，1为老数据
		"onsiteType": String,       //现场处理决定类型：4
		"penaltyType": String,      //行政处罚类型：null,
		"changeDangerType": String, //更改后隐患类别：710100
		"showIndex": String,        //隐患顺序：1
		"isCheck": String,          //是否需要复查0不需要1需要,
		"dangerParentId": String,   //隐患父id：null
		"isCommon": String,         //是否为其他隐患（自定义隐患传1）：null
		"deviceNum": String,        //设备台数：默认为空
		"coalingFace": String,      //采煤工作面：3
		"headingFace": String,      //掘进工作面：6
		"dangerCorrected": String,  //隐患整改情况(0未整改，1已整改）：null
		"reviewUnitId": String,     //复查单位id：null
		"reviewUnitName": String,   //复查单位名称：null
		"isPull": Boolean, // "拉取的检查活动标记"
	},
	// 创建发送文书数据库
	sendPaper: {
		"id": {     
			type: String,
			unique: true
		},
		"postId": String,  // 发送人id
		"receiveId": String, // 接收人id,
		"receiveName": String, // 接收人姓名,
		"paperContent": String, // 文书大JSON字符串,/
		"companyId": String, // 煤矿id
		"companyName": String, // 煤矿名称,
		"isReceive": String, // 是否发送,'0'未发送，'1'是发送
		"delFlag": String, // 2保存 1删除 0归档
		"createDate": String,
		"updateDate": String,
		"createById": String,
		"updateById": String,
	},
	// 创建发送隐患数据库
	sendDanger: {
		"HistoryId": {     
			type: String,
			unique: true
		},
		"categoryCode": String,
		"confirmBasis": String,
		"createDate": String, 
		"itemId": String, 
		"isNewRecord": Boolean, 
		"isOther": Boolean, 
		"isSelected": Boolean, 
		"itemCode": String, 
		"itemContent": String, 
		"onsiteBasis": String, 
		"onsiteDesc": String, 
		"penaltyBasis": String, 
		"penaltyDesc": String, 
		"updateDate": String, 
		"delFlag": String,
		"isSend": String, // 0为未发送，1为发送
		"postId": String,
		"receiveId": String,
		"name": String,
		"companyId": String,
		"companyName": String,
		"no": String,
		"isCommon": String,
		"sendTime": String,
	},
	// 委托复查
	localReview: {
		"id": {
			type: String,
			unique: true
		},
		"reviewId": String,
		"name": String,
		"createBy": String,
		"createDate": String,
		"updateBy": String,
		"updateDate": String,
		"delFlag": String,
		"remark": String,
		"caseId": String,
		"fileName": String,
		"filePath": String,
		"createTime": String,
		"fileSize": Number,
		"hashCode": String,
		"paperId": String,
	},
	// 罚款收缴
	fineCollection: {
		"id": {
			type: String,
			unique: true
		},
		"fineId": String,
		"name": String,
		"createBy": String,
		"createDate": String,
		"updateBy": String,
		"updateDate": String,
		"delFlag": String,
		"remark": String,
		"caseId": String,
		"paperId": String,
		"punishType": String,
		"P8Penalty": Number,
		"collectionFine": String,
		"p8Id": String,
		"paperNo": String,
		"createTime": String,
		"lateFee": String,
		"collectionDate": String,
	},
	// 回执单
	singleReceipt: {
		"id": {
			type: String,
			unique: true
		},
		"singleId": String,
		"name": String,
		"createBy": String,
		"createDate": String,
		"updateBy": String,
		"updateDate": String,
		"delFlag": String,
		"remark": String,
		"caseId": String,
		"fileName": String,
		"filePath": String,
		"createTime": String,
		"fileSize": Number,
		"hashCode": String,
		"paperId": String,
		"p8Id": String,
	},
	// 影音证据
	imageEvidence: {
		"id": {
			type: String,
			unique: true
		},
		"evidenceId": String,
		"name": String,
		"createBy": String,
		"createDate": String,
		"updateBy": String,
		"updateDate": String,
		"delFlag": String,
		"remark": String,
		"filePath": String,
		"caseId": String,
		"caseNo": String,
		"evidenceType": String,
		"groupId": String,
		"groupName": String,
		"corpId": String,
		"corpName": String,
		"paperId": String,
		"evidenceDesc": String,
		"createTime": String,
		"fileName": String,
		"fileSize": String,
		"hashCode": String,
	},
	// 附件
	paperAttachment: {
		"id": {
			type: String,
			unique: true
		},
		"attachmentId": String,
		"paperId": String,
		"fileSize": String,
		"fileType": String,
		"fileHash": String,
		"fileName": String,
		"filePath": String,
		"groupId": String,
		"groupName": String,
		"createBy": String,
		"createDate": String,
		"updateBy": String,
		"updateDate": String,
		"remark": String,
		"delFlag": String,
	},
	// 监察执法报告
	jczfReport: {
		"id": {
			type: String,
			unique: true
		},
		"evidenceId": String,
		"fileName": String,
		"filePath": String,
		"fileSize": String,
		"hashCode": String,
		"caseId": String,
		"caseNo": String,
		"groupId": String,
		"groupName": String,
		"corpId": String,
		"corpName": String,
		"createTime": String,
		"createDate": String,
		"createBy": String,
		"updateBy": String,
		"updateDate": String,
		"delFlag": String,
		"remark": String,
		"paperId": String,
	},
	prepareUpload: { // 未归档成功的文书存储
		"id": { // 唯一标识
			type: String,
			unique: true
		},
		'paperId': String, // 文书id
		'isUpload': String, // 是否上传，0未上传 1已上传
		'corpId': String, // 煤矿企业id
		'corpName': String, // 煤矿企业名称
		'paperType': String, // 文书类型
		'name': String, // 文书类型名称
		'createDate': String, // 文书制作时间
		'personId': String, // 制作人id
		'personName': String, // 制作人姓名
		"delFlag": String, // 删除标记
		"caseId": String, // 检查活动id
	},
	personPaperNumber: { // 个人自增文书编号
		"id": {
			type: String,
			unique: true
		},
		"year": String, // 年度文书号
		"paperNumber": String, // 所有类型文书号
		"createDate": String, // 创建日期
		"updateDate": String, // 更新日期
	}
};

export {
  doOrgDb,
  doPersonDb,
  doPlanDb,
  doCorpDb,
  doEnterpriseList,
  doCheckCateDb,
  doCheckListDb,
  doDangerCateDb,
  doDangerListDb,
  doDocDb,
	docFileListDb,
	docDictionaryDb,
	schema
}