import store from "@/store"
import { getMoney, randomString } from '@/utils'
import { getNowFormatTime, getNowTime } from "@/utils/date";
// 初始化各文书数据

// 初始化文书编号：
// 文书编号规则：1.机构接口中sysOfficeInfo实体中docRiseSafe字段+“矿安监”
//             2.机构接口中sysOfficeInfo实体中docRiseDepa字段 +
//             3.根据不同文书 显示（立、告、罚、送、催）+
//             4.{当前年份}+
//             5.个人执法编号+
//             6.3位数字（自增的）
// 返回数据：
// 1.num0: 文书号1（docRiseSafe）
// 2.num1: 文书号2（docRiseDepa）
// 3.num2: 文书号3（立、告、罚、送、催）
// 4.num3: 文书号4（curYear）
// 5.num4: 文书号5（个人执法编号+自增三位数字）
export async function getDocNumber(db, docTypeNo, caseId) {
  // 获取当前归档机构信息
  const orgInfo = db.table("orgInfo");
  const orgData = await orgInfo.find(item => item.no === store.state.curCase.affiliate)
  let orgSysOfficeInfo = orgData && orgData.sysOfficeInfo ? JSON.parse(orgData.sysOfficeInfo) : {
    docRiseSafe: '',
    docRiseDepa: ''
  }
  // 根据文书类型，获得（立、告、罚、送、催）
  let docString = ''
  switch (docTypeNo) {
    case '4': // 立案决定书let201
      docString = '立'
      break
    case '6': // 行政处罚告知书let204
      docString = '告'
      break
    case '8': // 行政处罚决定书let206
      docString = '罚'
      break
    case '9': // 送达收执let207
      docString = '送'
      break
    case '39': // 行政决定履行催告书let208
      docString = '催'
      break
    case '2': // 行现场处理决定书let102
      docString = '处'
      break
    case '41': // 不予受理行政复议申请决定书
      docString = '复不受'
      break
    case '12': // 行政复议决定书
      docString = '复决'
      break
    case '28': // 听证通知书
      docString = '听'
      break
    case '29': // 不予受理听证申请通知书
      docString = '听不受'
      break
    case '13': // 复查意见书
      docString = '复'
      break
    case '3': // 撤出作业人员命令书
      docString = '撤'
      break
    case '23': // 抽样取证通知书
      docString = '抽'
      break
    case '25': // 先行登记保存证据通知书
      docString = '先保'
      break
    case '27': // 先行登记保存证据处理决定书
      docString = '先保处'
      break
    case '32': // 查封（扣押）决定书
      docString = '查/扣'
      break
    case '34': // 解除查封（扣押）决定书
      docString = '解查/解扣'
      break
    case '37': // 停供电(停供民用爆炸物品)通知书
      docString = '停'
      break
    case '38': // 解除停供电(停供民用爆炸物品)通知书
      docString = '解停'
      break
    case '19': // 移送书
      docString = '移'
      break
    case '20': // 涉嫌犯罪案件移送书
      docString = '涉'
      break
  }
  // 当前年份
  let date = new Date()
  let curYear = date.getFullYear()
  // 3位数字
  let wkCase = db.table("wkCase")
  let caseInfo = await wkCase.find(item => item.caseId === caseId)
  let paperTypeName = store.state.user.userType === 'supervision' ? '矿安' : '矿安监'
  return {
    num0: orgSysOfficeInfo.docRiseSafe,
    num1: orgSysOfficeInfo.docRiseDepa,
    num2: docString,
    num3: curYear + '',
    num4: caseInfo ? caseInfo.caseSn : '',
  }
}

// 返回对象根据隐患项生成的文本数据：
// dangerString：隐患描述（展示形式为：1. XXX2.XXX未处理最后标点符号）、
// illegalString：违法认定法条（展示形式：XXX、XXX）
// treatmentSuggestion： 行政处罚依据+行政处罚决定（展示形式：1.XXX;2.XXX;）
// penaltyBasisString：行政处罚依据（展示形式：XXX、XXX）
// penaltyDesc：行政处罚决定（展示形式为：1. XXX2.XXX未处理最后标点符号）、
// penaltyDescFineTotle: 行政处罚罚金总额
export function getDangerObject(tableData, hasIndex = {
  danger: false, // 决定dangerString是否带有索引值，1.XXX
  illegal: false, // 决定illegalString是否带有索引值，1.XXX
  treatmentSuggestion: false, // 决定treatmentSuggestion是否带有索引值，1.XXX(未实现)
  penaltyBasis: false, // 决定penaltyBasisString是否带有索引值，1.XXX
  penaltyDesc: false, // 决定penaltyDesc是否带有索引值，1.XXX
  onsiteDesc: false, // 现场处理决定
}) {
  // 现场处理决定书：违法行为描述+现场处理决定
  let contentOnsiteDesc = ''
  // 隐患描述
  let dangerString = ''
  // 违法认定法条
  let illegalString = ''
  // 现场处理决定
  let onsiteDescString = ''
  // 行政处罚依据+行政处罚决定
  let treatmentSuggestion = ''
  // 行政处罚依据
  let penaltyBasisString = ''
  // 行政处罚决定
  let penaltyDesc = ''
  // 行政处罚罚金总额
  let penaltyDescFineTotle = 0
  if (tableData && tableData.length > 0) {
    for (let index = 0; index < tableData.length; index++) {
      let item = tableData[index]
      contentOnsiteDesc += `    ${(index + 1)}. ${item.itemContent}${item.onsiteDesc}。\r\n`
      dangerString += hasIndex.danger ? `${(index + 1)}. ${item.itemContent}` : `${item.itemContent}`
      illegalString += hasIndex.illegal ? `${(index + 1)}. ${item.confirmBasis}、` : `${item.confirmBasis}、`
      onsiteDescString += hasIndex.onsiteDesc ? `${(index + 1)}. ${item.onsiteDesc}、` : `${item.onsiteDesc}、`
      treatmentSuggestion += `${(index + 1)}. ${item.penaltyBasis ? item.penaltyBasis : ''}${item.penaltyDesc ? item.penaltyDesc : ''}；`
      penaltyBasisString += hasIndex.penaltyBasis ? `${(index + 1)}. ${item.penaltyBasis ? item.penaltyBasis : ''}、` : `${item.penaltyBasis ? item.penaltyBasis : ''}、`
      penaltyDesc += hasIndex.penaltyDesc ? `${item.penaltyDesc ? `${(index + 1)}. ${item.penaltyDesc}` : ''}` : `${item.penaltyDesc ? `${item.penaltyDesc}` : ''}`
      penaltyDescFineTotle += item.penaltyDescFine ? Number(item.penaltyDescFine) : 0
    }
    illegalString = illegalString ? illegalString.substring(0, illegalString.length - 1) : ''
    onsiteDescString = onsiteDescString ? onsiteDescString.substring(0, onsiteDescString.length - 1) : ''
    treatmentSuggestion = treatmentSuggestion ? treatmentSuggestion.substring(0, treatmentSuggestion.length - 1) + '。' : ''
    penaltyBasisString = penaltyBasisString ? penaltyBasisString.substring(0, penaltyBasisString.length - 1) : ''
    penaltyDesc = penaltyDesc ? penaltyDesc.substring(0, penaltyDesc.length - 1) + '。' : ''
    penaltyDescFineTotle = penaltyDescFineTotle
  }
  return {
    contentOnsiteDesc,
    dangerString,
    illegalString,
    onsiteDescString,
    treatmentSuggestion,
    penaltyBasisString,
    penaltyDesc,
    penaltyDescFineTotle
  }
}

// 去掉句号形式返回的违法违规行为字符串
// tableData未隐患列表
// replaceString为句号可替换成其他的字符，如、，；等
export function getDangerContentWithoutPoint (tableData, replaceString = '') {
  let dangerString = ''
  for (let i = 0; i < tableData.length; i++) {
    let item = tableData[i]
    if (item.itemContent && item.itemContent[item.itemContent.length - 1] === '。') {
      // 如果有。句号则去掉句号
      dangerString += item.itemContent.substring(0, item.itemContent.length - 1) + replaceString
    } else {
      dangerString += item.itemContent
    }
  }
  if (dangerString[dangerString.length - 1] === replaceString) {
    dangerString = dangerString.substring(0, dangerString.length - 1)
  }
  return dangerString
}

// 对上一个方法getDangerContentWithoutPoint的补充：有序号的
export function getDangerContentWithoutPointHasIndex (tableData, replaceString = '') {
  let dangerString = ''
  for (let i = 0; i < tableData.length; i++) {
    let item = tableData[i]
    if (item.itemContent && item.itemContent[item.itemContent.length - 1] === '。') {
      // 如果有。句号则去掉句号
      dangerString += (i + 1) + '.' + item.itemContent.substring(0, item.itemContent.length - 1) + replaceString
    } else {
      dangerString += (i + 1) + '.' + item.itemContent
    }
  }
  if (dangerString[dangerString.length - 1] === replaceString) {
    dangerString = dangerString.substring(0, dangerString.length - 1)
  }
  return dangerString
}

// 去掉句号形式返回的penaltyBasis行政处罚依据和行政处罚决定的字符串
// replaceString为句号可替换成其他的字符，如、，；等
export function getDangerPenaltyBasisWithoutPointHasIndex (tableData, replaceString = '') {
  let dangerString = ''
  for (let i = 0; i < tableData.length; i++) {
    let item = tableData[i]
    if (item.penaltyDesc && item.penaltyDesc[item.penaltyDesc.length - 1] === '。') {
      // 如果有。句号则去掉句号
      dangerString += (i + 1) + '.' + item.penaltyBasis + item.penaltyDesc.substring(0, item.penaltyDesc.length - 1) + replaceString
    } else {
      dangerString += (i + 1) + '.' + item.penaltyBasis + item.penaltyDesc
    }
  }
  if (dangerString[dangerString.length - 1] === replaceString) {
    dangerString = dangerString.substring(0, dangerString.length - 1)
  }
  return dangerString
}

// 去掉句号形式返回的penaltyDesc行政处罚决定的字符串
// replaceString为句号可替换成其他的字符，如、，；等
export function getDangerPenaltyDescWithoutPoint (tableData, replaceString = '') {
  let dangerString = ''
  for (let i = 0; i < tableData.length; i++) {
    let item = tableData[i]
    if (item.penaltyDesc && item.penaltyDesc[item.penaltyDesc.length - 1] === '。') {
      // 如果有。句号则去掉句号
      dangerString += item.penaltyDesc.substring(0, item.penaltyDesc.length - 1) + replaceString
    } else {
      dangerString += item.penaltyDesc
    }
  }
  if (dangerString[dangerString.length - 1] === replaceString) {
    dangerString = dangerString.substring(0, dangerString.length - 1)
  }
  return dangerString
}

// 去掉句号形式返回的penaltyDesc行政处罚决定的字符串
// replaceString为句号可替换成其他的字符，如、，；等
export function getDangerPenaltyDescWithoutPointHasIndex (tableData, replaceString = '') {
  let dangerString = ''
  for (let i = 0; i < tableData.length; i++) {
    let item = tableData[i]
    if (item.penaltyDesc && item.penaltyDesc[item.penaltyDesc.length - 1] === '。') {
      // 如果有。句号则去掉句号
      dangerString += (i + 1) + '.' + item.penaltyDesc.substring(0, item.penaltyDesc.length - 1) + replaceString
    } else {
      dangerString += (i + 1) + '.' + item.penaltyDesc
    }
  }
  if (dangerString[dangerString.length - 1] === replaceString) {
    dangerString = dangerString.substring(0, dangerString.length - 1)
  }
  return dangerString
}

// 获取总体行政决定说明
export function getDangerDes (tableData) {
  // 遍历隐患获取对应的行政处罚类型
  let descTypeIds = ''
  let descTypeStrings = ''
  for (let i = 0; i < tableData.length; i++) {
    let item = tableData[i]
    if (item.penaltyDescTypeId) {
      let idItemList = item.penaltyDescTypeId.split(',')
      idItemList.map(idItem => {
        if (!descTypeIds.includes(idItem)) {
          descTypeIds += idItem + ','
        }
      })
    }
    if (item.penaltyDescType) {
      let strItemList = item.penaltyDescType.split(',')
      strItemList.map(strItem => {
        if (!descTypeStrings.includes(strItem)) {
          descTypeStrings += strItem + ','
        }
      })
    }
  }
  if (descTypeIds) descTypeIds = descTypeIds.substring(0, descTypeIds.length - 1)
  if (descTypeStrings) descTypeStrings = descTypeStrings.substring(0, descTypeStrings.length - 1)
  return {descTypeIds, descTypeStrings}
}

// 判断是否可以获取金额，如果元字超过两个以上则金额为0，两个以下则获取金额
// 当前同时回传count和money两个值，在使用时再判断是否需要保存金额
export function retrunGetMoney(penaltyDescString) {
  // 罚款金额money
  // 元字统计count
  let money = 0
  let count = 0
  if (penaltyDescString && penaltyDescString.includes('元')) {
    for (let i = 0; i < penaltyDescString.length; i++) {
      if (penaltyDescString[i] === '元') count ++  
    }
    money = getMoney(penaltyDescString) 
  }
  return {money, count}
}

export function getPenaltyDescType (penaltyDescString, subitemTypeOptions) {
  // 通过行政处罚说明获取行政处罚类型和id
  let id = ''
  let type = ''
  let {count} = retrunGetMoney(penaltyDescString)
  if (count > 0 && count < 3) {
    type += '罚款,'
    id += subitemTypeOptions.filter(item => item.label === '罚款')[0].value + ','
  }
  for (let i = 0; i < subitemTypeOptions.length; i++) {
    if (subitemTypeOptions[i].searchLabel && penaltyDescString && penaltyDescString.includes(subitemTypeOptions[i].searchLabel)) {
      id += subitemTypeOptions[i].value + ','
      type += subitemTypeOptions[i].label + ','
    }
  }
  if (id) id = id.substring(0, id.length - 1)
  if (type) type = type.substring(0, type.length - 1)
  return {id, type}
}

// 生成煤矿描述信息
export async function corpInformation(db, corpData) {
  const zfZzInfo = db.table("zfZzInfo");
  const zzInfo1 = await zfZzInfo.find((item) => {
    return item.corpId == corpData.corpId && item.credTypeName == "采矿许可证";
  });
  const zzInfo2 = await zfZzInfo.find((item) => {
    return item.corpId == corpData.corpId && item.credTypeName == "安全生产许可证";
  });
  let sSummary =
    corpData.corpName +
    "位于" +
    corpData.provinceName +
    corpData.cityName +
    corpData.countryName +
    "境内，隶属于" +
    corpData.parentTypeName +
    "煤矿。 ";
  if (zzInfo1 && zzInfo1.expireTime)
    sSummary += "采矿许可证有效日期至" + zzInfo1.expireTime + "、";
  else sSummary += "采矿许可证有效日期至    ";
  if (zzInfo2 && zzInfo2.expireTime)
    sSummary += "、安全生产许可证有效期至" + zzInfo2.expireTime + "，";
  else sSummary += "、安全生产许可证有效期至    ，";
  if (corpData.provedOutput)
    sSummary += "矿井核定生产能力为" + corpData.provedOutput + "万吨/年，";
  else sSummary += "矿井核定生产能力为X万吨/年，";
  sSummary +=
    (corpData.mineWsGradeName || 'XXX')+
    "、水文地质类型为中等，煤层自燃倾向性为" +
    (corpData.mineFireName || 'XXX') +
    "，煤尘" +
    (corpData.grimeExplosiveName || 'XXX') +
    "，";
  sSummary +=
    "矿井状况为" +
    (corpData.mineStatusZsName || 'XXX') +
    "，开拓方式为" +
    (corpData.mineMinestyleName || 'XXX') +
    "开拓。";
  sSummary +=
    "采煤方式为综采。通风方式为中央分列抽出，采掘作业地点有71003综采工作面采煤工作面、 71007综采工作面风巷、71007综采工作面机巷掘进工作面。";
  return sSummary
}

// 创建新的dangerId的隐患表DangerTable
// 现在用于关联隐患项时的创建隐患表和新增文书时自动关联的隐患项
// paperData创建组合的文书数据，最后合并至此文书数据中的DangerTable中
// DangerTable组合进来的隐患列表
export function setNewDanger (paperData, DangerTable) {
  // allDangerTableNew新的所有隐患项列表（包括选中和未选中）
  // selectedDangerTableNew新的所有选中的隐患项列表（只有选中）
  let allDangerTableNew = []
  let selectedDangerTableNew = []
  let paperContentOld = JSON.parse(paperData.paperContent)
  let selectedType = paperContentOld.selectedType
  // 遍历更新的隐患项
  for (let i = 0; i < DangerTable.tableData.length; i++) {
    // 新的隐患项内容
    let tableDataNewItem = DangerTable.tableData[i]
    // 新的隐患id
    let newDangerId = getNowTime() + randomString(28)
    let tableDataNewSave = {
      dangerId: newDangerId,
      categoryCode: tableDataNewItem.categoryCode,
      personIds: tableDataNewItem.personIds, //"发现人编号多选：以逗号分隔",
      personNames: tableDataNewItem.personNames, //"隐患发现人多选：以逗号分隔",
      itemContent: tableDataNewItem.itemContent,
      confirmBasis: tableDataNewItem.confirmBasis,
      onsiteDesc: tableDataNewItem.onsiteDesc,
      onsiteBasis: tableDataNewItem.onsiteBasis,
      onsiteType: tableDataNewItem.onsiteType, //"现场处理类型",
      headingFace: tableDataNewItem.headingFace, //"掘进工作面：6",
      deviceNum: tableDataNewItem.deviceNum, //"设备台数：默认为空",
      coalingFace: tableDataNewItem.coalingFace, //"采煤工作面：3",
      penaltyDesc: tableDataNewItem.penaltyDesc,
      penaltyDescFine: tableDataNewItem.penaltyDescFine, // 罚金
      penaltyDescTypeId: tableDataNewItem.penaltyDescTypeId, // 行政处罚决定类型的id
      penaltyDescType: tableDataNewItem.penaltyDescType, // 行政处罚决定类型
      penaltyBasis: tableDataNewItem.penaltyBasis,
      firstDangerType: tableDataNewItem.firstDangerType,
      secDangerType: tableDataNewItem.secDangerType,
      changeDangerType: tableDataNewItem.changeDangerType, //"更改后隐患类别：710100",
      isSerious: tableDataNewItem.isSerious,
      isReview: tableDataNewItem.isReview,
      reviewDate: tableDataNewItem.reviewDate,
      createDate: paperData.createDate,
      itemCode: tableDataNewItem.itemCode, //
      no: tableDataNewItem.no, // 同itemCode
      delFlag: '2',
      order: tableDataNewItem.order,
      isCommon: tableDataNewItem.isCommon ? tableDataNewItem.isCommon : null, //"是否为其他隐患（自定义隐患传1）：null",

      basisContent: tableDataNewItem.confirmBasis, //"认定：《中华人民共和国安全生产法》第二十九条；《煤矿建设项目安全设施监察规定》第九条",
      caseId: paperData.caseId,
      checkPerson: '', //"整改核查人",
      checkTime: '', //"整改核查时间",
      createBy: JSON.stringify({
        id: store.state.user.userId
      }),
      dangerCate: tableDataNewItem.categoryCode,
      dangerContent: tableDataNewItem.itemContent, // "煤矿建设项目未按规定进行安全预评价和安全验收评价，逾期未改正的。"
      dangerCorrected: tableDataNewItem.dangerCorrected ? tableDataNewItem.dangerCorrected : null, //"隐患整改情况(0未整改，1已整改）：null",
      dangerItemId: tableDataNewItem.itemCode, //"7101000033",
      dangerLocation: '', //违法违规及隐患位置
      dangerParentId: tableDataNewItem.dangerId, //"隐患关联id：null",
      dangerStatus: tableDataNewItem.status, //违法违规及隐患状态
      dangerType: tableDataNewItem.categoryCode,
      detectTime: getNowFormatTime(),  //发现时间：2021-06-24 15:48:54
      isCheck: tableDataNewItem.isReview, //"是否需要复查0不需要1需要",
      isHigh: tableDataNewItem.isSerious, //是否重大隐患：[0|1]
      itemOnsiteBasis: tableDataNewItem.onsiteBasis, //"现场决定依据：《中华人民共和国安全生产法》第九十五条第一项",
      itemOnsiteType: tableDataNewItem.onsiteType, //"现场处理类型",
      name: null,
      onsiteContent: tableDataNewItem.onsiteDesc, //"现场处理内容：责令停止建设责令停止作业、限X日内改正",
      paperId: paperData.paperId,
      penaltyOrg: '', //"对单位的处罚", // 后台不需要了21.12.2
      penaltyOrgFine: selectedType === '单位' ? tableDataNewItem.penaltyDescFine : null, //"单位罚金",
      penaltyPerson: '', //"对个人的处罚",  // 后台不需要了21.12.2
      penaltyPersonFine: selectedType === '个人' ? tableDataNewItem.penaltyDescFine : null, //"个人罚金",
      penaltyType: tableDataNewItem.penaltyDescTypeId, //"行政处罚类型3,7",
      personId: store.state.user.userId, //"7101000033",
      personName: store.state.user.userName, //"发现人编号：beba494c4b67435f93e5fdfbe440e18e",
      rectifyTerm: '', //"整改期限",
      remoteId: '', //服务器端生成的id
      reviewUnitId: tableDataNewItem.reviewUnitId ? tableDataNewItem.reviewUnitId : null, //"复查单位id：null",
      reviewUnitName: tableDataNewItem.reviewUnitName ? tableDataNewItem.reviewUnitName : null, //"复查单位名称：null",
      showIndex: tableDataNewItem.order + '', //"隐患顺序：1",
      solveMethod: '', //"整改落实措施",
      solveTime: '', //"隐患消解时间",
      sourceFlag: '0',
      subitemCode: '', //"违法违规自由裁量序号",
      subitemContent: tableDataNewItem.itemContent, //"违法违规内容：煤矿建设项目未按规定进行安全预评价和安全验收评价，逾期未改正的。",
      subitemPenalty: tableDataNewItem.penaltyDesc, //"违法违规行政处罚决定：逾期未改正的，处五十万元以上一百万元以下的罚款，对其直接负责的主管人员和其他直接责任人员处二万元以上五万元以下的罚款。",
      subitemPenaltyBasis: tableDataNewItem.penaltyBasis, //"行政处罚依据：《中华人民共和国安全生产法》第二十九条，第九十五条第一项",
      updateBy: JSON.stringify({
        id: store.state.user.userId
      }),
      updateDate: getNowFormatTime(),
      verNo: null, //"版本号：null",
    }
    if (DangerTable.selectedDangerList) {
      for (let j = 0; j < DangerTable.selectedDangerList.length; j++) {
        let selectedItem = DangerTable.selectedDangerList[j]
        if (selectedItem.dangerId === tableDataNewItem.dangerId) {
          selectedDangerTableNew.push(tableDataNewSave)
        }
      }
    }
    // 无论是否选中统一添加入allDangerTableNew中
    allDangerTableNew.push(tableDataNewSave)
  }
  // 返回新的DangerTable
  return Object.assign({}, DangerTable, {
    tableData: allDangerTableNew,
    selectedDangerList: selectedDangerTableNew,
  })
}

// 获取DangerTable中需要对比是否更新的字段
// 当前用于隐患项返回时和带有隐患项的文书保存时的对比
// 需要对比的字段有：tableData和selectedDangerList
export function comparDangerTable (originalValue, newValue) {
  // 获取原始数据对比数据
  let tableData1 = originalValue.tableData ? JSON.parse(JSON.stringify(originalValue.tableData)) : []
  // 处理数组中的active字段
  deleteField(tableData1, 'active')
  let selectedDangerList1 = originalValue.selectedDangerList ? JSON.parse(JSON.stringify(originalValue.selectedDangerList)) : []
  deleteField(selectedDangerList1, 'active')
  let originalCompareValue = {
    tableData: tableData1,
    selectedDangerList: selectedDangerList1,
  }
  // 获取当前新数据对比数据
  let tableData2 = newValue.tableData ? JSON.parse(JSON.stringify(newValue.tableData)) : []
  deleteField(tableData2, 'active')
  let selectedDangerList2 = newValue.selectedDangerList ? JSON.parse(JSON.stringify(newValue.selectedDangerList)) : []
  deleteField(selectedDangerList2, 'active')
  let newCompareValue = {
    tableData: tableData2,
    selectedDangerList: selectedDangerList2,
  }
  return JSON.stringify(originalCompareValue) === JSON.stringify(newCompareValue)
}
// 删除字段
function deleteField(arrData, field) {
  for (let i = 0; i < arrData.length; i++) {
    delete arrData[i][field]
  }
}