import GoDB from '@/utils/godb.min.js'

// “机构资源”下载。
async function doOrgDb(resId, data) {
  const schema = {
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
      "areaId": String,
      "areaName": String,
      "areaShortName": String,
      "areaParentIds": String,
      "sysOfficeInfo": String
    }
  };
  const db = new GoDB('CoalMonitorDB', schema);
  const orgInfo = db.table('orgInfo');

  //1-add baseInfo(煤矿基本信息)
  let arrOrg = [];
  for (let i = 0; i < data.length; i++) {
    let obj = data[i];
    const item = await orgInfo.get({ no: obj.id });
    if (!item) {
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
        "areaId": obj.area.id,
        "areaName": obj.area.name,
        "areaShortName": obj.area.shortName,
        "areaParentIds": obj.area.parentIds,
        "areaParentId": obj.area.parentId,
        "sysOfficeInfo": JSON.stringify(obj.sysOfficeInfo)
    });
    }
  }
  // 增:
  await orgInfo.addMany(arrOrg);
  //await orgInfo.consoleTable();
  await db.close();
}

// “用户资源”下载。
async function doPersonDb(resId, data) {
  let arrPerson = [];
  const schema = {
    person: {
      no: {
        type: String,
        unique: true
      },
      name: String,
      loginName: String,
      officeId: String,
      officeName: String,
      userNumber: String
    }
  };
  const db = new GoDB('CoalMonitorDB', schema);
  const person = db.table('person');

  for (let i = 0; i < data.length; i++) {
    let obj = data[i];
    const item = await person.get({ no: obj.id });
    if (!item) arrPerson.push({ no: obj.id, name: obj.name, loginName: obj.loginName, officeId: obj.office.id, officeName: obj.office.name, userNumber: obj.userNumber });
  }

  // 增:
  await person.addMany(arrPerson);
  //await person.consoleTable();
  await db.close();

}

// “其他资源”下载。
async function doPlanDb(resId, data) {
	const schema = {
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
		}
	};
	const db = new GoDB('CoalMonitorDB', schema);
	const docPlan = db.table('docPlan');

	let arrPlan = [];
	if (data) {
		for (let i = 0; i < data.length; i++) {
			let obj = data[i];
			const item = await docPlan.get({ no: obj.id });
			if (!item) {
				arrPlan.push({
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
	}
	// 增:
	await docPlan.addMany(arrPlan);
	//await docPlan.consoleTable();
	await db.close();
}

// “企业资源”下载。
async function doCorpDb(resId, data) {
	let arrBaseInfo = data.baseInfo;
	let arrZfZzInfo = data.zfZzInfo;
	let arrZfJjgzmInfo = data.zfJjgzmInfo;
	let arrZfCyrytjInfo = data.zfCyrytjInfo;
	let arrZfCmgzmInfo = data.zfCmgzmInfo;
	/*console.log("arrBaseInfo=" + arrBaseInfo.length);
	console.log("arrZfZzInfo=" + arrZfZzInfo.length);
	console.log("arrZfJjgzmInfo=" + arrZfJjgzmInfo.length);
	console.log("arrZfCyrytjInfo=" + arrZfCyrytjInfo.length);
	console.log("arrZfCmgzmInfo=" + arrZfCmgzmInfo.length);
	console.log(data);*/
	const schema = {
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
			"contacts": String, //"郑海庭",
			"tel": String, //"0319-6809588",
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
			"groupId": String // "130500130001"
		},
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
		}
	};
	const db = new GoDB('CoalMonitorDB', schema);
	const corpBase = db.table('corpBase');
	const zfZzInfo = db.table('zfZzInfo');
	const zfJjgzmInfo = db.table('zfJjgzmInfo');
	const zfCyrytjInfo = db.table('zfCyrytjInfo');
	const zfCmgzmInfo = db.table('zfCmgzmInfo');

	//1-add baseInfo(煤矿基本信息)
	let arrOrg = [];
	for (let i = 0; i < arrBaseInfo.length; i++) {
		let obj = arrBaseInfo[i];
		const item = await corpBase.get({ corpId: obj.corpId });
		if (!item) {
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
				"contacts": obj.contacts,
				"tel": obj.tel,
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
				"groupId": obj.groupId
			});
		}
	}

	// 增:
	await corpBase.addMany(arrOrg);
	//await corpBase.consoleTable();
	console.log('-----------add baseInfo(煤矿基本信息)');

	//2-add zfZzInfo(证照信息)
	arrOrg = [];
	for (let i = 0; i < arrZfZzInfo.length; i++) {
		let obj = arrZfZzInfo[i];
		const item = await zfZzInfo.get({ corpId: obj.corpId });
		if (!item) {
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
	}

	// 增:
	await zfZzInfo.addMany(arrOrg);
	//await zfZzInfo.consoleTable();
	console.log('-----------add zfZzInfo(证照信息)');

	//3-add zfJjgzmInfo(掘进工作面信息)
	arrOrg = [];
	for (let i = 0; i < arrZfJjgzmInfo.length; i++) {
		let obj = arrZfJjgzmInfo[i];
		const item = await zfJjgzmInfo.get({ corpId: obj.corpId });
		if (!item) {
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
	}

	// 增:
	await zfJjgzmInfo.addMany(arrOrg);
	//await zfJjgzmInfo.consoleTable();
	console.log('-----------add zfJjgzmInfo(掘进工作面信息)');

	//4-add zfCyrytjInfo(从业人员信息)
	arrOrg = [];
	for (let i = 0; i < arrZfCyrytjInfo.length; i++) {
		let obj = arrZfCyrytjInfo[i];
		const item = await zfCyrytjInfo.get({ corpId: obj.corpId });
		if (!item) {
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
	}

	// 增:
	await zfCyrytjInfo.addMany(arrOrg);
	//await zfCyrytjInfo.consoleTable();
	console.log('-----------add zfCyrytjInfo(从业人员信息)');

	//5-add zfCmgzmInfo(采煤工作面信息)
	arrOrg = [];
	for (let i = 0; i < arrZfCmgzmInfo.length; i++) {
		let obj = arrZfCmgzmInfo[i];
		const item = await zfCmgzmInfo.get({ corpId: obj.corpId });
		if (!item) {
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
	}
	// 增:
	await zfCmgzmInfo.addMany(arrOrg);
	//await zfCmgzmInfo.consoleTable();
	console.log('-----------add zfCmgzmInfo(采煤工作面信息)');
	await db.close();
}

// “行政区域”下载。
async function doEnterpriseList(resId, data){
	let EnterpriseList = [];
	const schema = {
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
			"sort": String,
			"type": String,
			"updateBy": String,
			"updateDate": String,
		}
	};
	const db = new GoDB('CoalMonitorDB', schema);
	const doEnterpriseList = db.table('doEnterpriseList');

	for (let i = 0; i < data.length; i++) {
		let obj = data[i];
		//
		const item = await doEnterpriseList.get({ no: obj.id });
		if (!item) EnterpriseList.push({
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
	//await dangerList.consoleTable();
	await db.close();

}

// “检查项类别”下载。
async function doCheckCateDb(resId, data) {
	let arrCheck = [];
	const schema = {
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
		}
	};
	const db = new GoDB('CoalMonitorDB', schema);
	const checkCate = db.table('checkCate');

	for (let i = 0; i < data.length; i++) {
		let obj = data[i];
		const item = await checkCate.get({ no: obj.id });
		if (!item) arrCheck.push({
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
	//await checkCate.consoleTable();
	await db.close();

}

// “检查项内容”下载。
async function doCheckListDb(resId, data) {
	let arrCheck = [];
	const schema = {
		checkList: {
			"no": {
				type: String,
				unique: true
			},
			"createDate": String,
			"updateDate": String,
			"delFlag": String,
			"itemCode": String,
			"itemContent": String,
			"basis": String,
			"status": String,
			"groupId": String,
			"souFlag": String,
			"categoryCode": String,
			"categoryName": String,
			"treeName": String,
			"treeId": String,
			"treeParentId": String
		}
	};
	const db = new GoDB('CoalMonitorDB', schema);
	const checkList = db.table('checkList');

	for (let i = 0; i < data.length; i++) {
		let obj = data[i];
		const item = await checkList.get({ no: obj.id });
		if (!item) arrCheck.push({
			no: obj.id,
      delFlag: obj.delFlag,
      createDate: obj.createDate,
      updateDate: obj.updateDate,
      itemCode: obj.itemCode,
      itemContent: obj.itemContent,
			basis: obj.basis,
      status: obj.status,
      groupId: obj.groupId,
      souFlag: obj.souFlag,
      categoryCode: obj.categoryCode,
      categoryName: obj.categoryName,
      treeName: obj.itemContent,
      treeId: obj.itemCode,
      treeParentId: obj.categoryCode,
		});
	}

	// 增:
	await checkList.addMany(arrCheck);
	//await checkList.consoleTable();
	await db.close();
}

// “隐患类别”下载。
async function doDangerCateDb(resId, data) {
	let arrDanger = [];
	const schema = {
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
			"souFlag": String, // "1",
			"parentCode": String, // "000000",
			"parentId": String, // "0"
			"pid": String,
      "treeName": String,
			"treeId": String,
			"treeParentId": String
		}
	};
	const db = new GoDB('CoalMonitorDB', schema);
	const dangerCate = db.table('dangerCate');
	if (data) {
		for (let i = 0; i < data.length; i++) {
			let obj = data[i];
			const item = await dangerCate.get({ no: obj.id });
			if (!item) arrDanger.push({
        no: obj.id,
        delFlag: obj.delFlag,
        sort: obj.sort,
        categoryName: obj.categoryName,
        groupId: obj.groupId,
        categoryCode: obj.categoryCode,
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
	//await dangerCate.consoleTable();
	await db.close();
}

// “隐患内容”下载。
async function doDangerListDb(resId, data) {
	let arrDanger = [];
	const schema = {
		dangerList: {
			"no": {
				type: String,
				unique: true
			},
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
			"treeParentId": String
		}
	};
	const db = new GoDB('CoalMonitorDB', schema);
	const dangerList = db.table('dangerList');
	for (let i = 0; i < data.length; i++) {
		let obj = data[i];
		const item = await dangerList.get({ no: obj.id });
		if (!item) arrDanger.push({
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
		});
	}
	// 增:
	await dangerList.addMany(arrDanger);
	//await dangerList.consoleTable();
	await db.close();
}

// “个人账号文书资源”下载。
async function doDocDb(resId, data){
	let arrPaper = data?data.paper:[];
	let arrCase = data?data.jczfCase:[];
	let arrDanger = data?data.danger:[];
	const schema = {
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
			/*
			"p1PersonId": String, //null,
			"p1PersonName": String, //null,
			"p22BeginTime": String, //"2021-06-15 00:00:00",
			"p22EndTime": String, //"2021-06-22 00:00:00",
			"p22location": String, //"检查地点",
			"p22inspection": String, //"32",
			"locationRemarks": String, //"%e5%85%a8%e7%b3%bb%e7%bb%9f%e5%90%84%e7%8e%af%e8%8a%82%e7%9b%91%e5%af%9f",
			"p5EvidenceTime": String, //null,
			"p8penaltyType": String, //null,
			"p8Penalty": String, //null,
			"p8PersonPenalty": String, //null,
			"p8OrgPenalty": String, //null,
			"p13PersonId": String, // null,
			"p13PersonName": String, // null,
			"p31JudgeTime": String, //null,
			"p36PersonId": String, //null,
			"p36PersonName": String, //null,
			"p36RegisterTime": String, //null
			//"p0ParentId": "00000000-0000-0000-0000-000000000000",*/
		},
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
			//"caseId": "185b15772fb746dfb3643a66aa192f86",
			//"caseNo": "34060013074120210615110030",
			//"corpId": "340603003619",
			//"corpName": "新光集团淮北刘东煤矿有限公司",
			//"personId": "3bb3963f02c34e22a7dc3cc3252c9664",
			//"personName": "国产化测试",
			//"groupId": "130000120001",
			//"groupName": "河北煤监局",
			*/
			//"corpType": "QYK_ALLBUSINESS",
			"checkReason": String, // "1",
			"checkStatus": String, // "0",
			"planBeginDate": String, //检查开始日期：2021-06-15 00:00:00
			"planEndDate": String, //检查结束日期：2021-06-22 00:00:00
			//"createTime": "2021-06-15 11:00:25",
			"caseSn": String,
			//"sourceFlag": "0",
			//"affiliate": "130000120001",
			//"meikuangType": "2",
			//"meikuangPlanfrom": "1",
			//"planId": "7d59ccba707440e488ce2a1693d9ac1f",
			"meikuangType": String, //docPlan表-meikuangType字段
			"meikuangPlanfrom": String, //docPlan表-meikuangPlanfrom字段
			"planId": String, //docPlan表-no字段
			"pcMonth": String //计划时间（年月）：2021-6
			//"riskAssessment": "0101",
			//"riskAssessmentContent": "矿井开拓、准备、回采比例失调（小） ",
			//"mobile": false
		},
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
			"delFlag": "2",
			"createDate": "2021-06-24 15:48:54",
			"updateDate": "2021-06-24 15:48:54",
			"createBy": {
				"id": "beba494c4b67435f93e5fdfbe440e18e"
			},
			"personIds": "beba494c4b67435f93e5fdfbe440e18e",
			"personNames": "测试小柴",
			"updateBy": {
				"id": "beba494c4b67435f93e5fdfbe440e18e"
			},
			"caseId": "33853598dd45458cb487a825d75d7c7f",
			"dangerId": "4860c107357a48ab9dc2c3f65d96cfc9",
			"dangerType": {
				"categoryCode": "710100"
			},
			*/
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
			"penaltyOrgFine": Number,   //单位罚金
			"penaltyPerson": String,    //对个人的处罚
			"penaltyPersonFine": Number,//个人罚金
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
    },
	};
	const db = new GoDB('CoalMonitorDB', schema);
	const wkPaper = db.table('wkPaper');
	const wkCase = db.table('wkCase');
	const wkDanger = db.table('wkDanger');
	let arrDocPaper = [], arrDocCase = [], arrDocDanger = [];

	//1-paper
	for (let i = 0; i < arrPaper.length; i++) {
		let obj = arrPaper[i];
		const item = await wkPaper.get({ paperId: obj.paperId });
		if (item) await wkPaper.delete({ paperId: obj.paperId }); //删除
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
		});
	}

	//2-case
	for (let i = 0; i < arrCase.length; i++) {
		let obj = arrCase[i];
		const item = await wkCase.get({ caseId: obj.caseId });
		if (!item) {
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
				"caseType": obj.caseType,
				"checkReason": obj.checkReason,
				"checkStatus": obj.checkStatus,
				"planBeginDate": obj.planBeginDate,
				"planEndDate": obj.planEndDate,
				"meikuangType": obj.meikuangType,
				"meikuangPlanfrom": obj.meikuangPlanfrom,
				"planId": obj.planId,
				"pcMonth": obj.pcMonth,
			});
		}
	}

	//3-danger
	for (let i = 0; i < arrDanger.length; i++) {
		let obj = arrDanger[i];
		const item = await wkDanger.get({ dangerId: obj.dangerId });
		if (item) await wkDanger.delete({ dangerId: obj.dangerId }); //删除
		arrDocDanger.push({
			"dangerId": obj.dangerId,
			"paperId": obj.paperId,
			"remoteId": obj.id,
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
			"penaltyOrgFine": obj.penaltyOrgFine,
			"penaltyPerson": obj.penaltyPerson,
			"penaltyPersonFine": obj.penaltyPersonFine,
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
			"reviewUnitName": obj.reviewUnitName
		});
	}

	// 增:
	await wkPaper.addMany(arrDocPaper);
	await wkCase.addMany(arrDocCase);
	await wkDanger.addMany(arrDocDanger);
	//await docInfo.consoleTable();
	await db.close();
}

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
  doDocDb
}