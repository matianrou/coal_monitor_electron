import store from "@/store"
import { getMoney } from '@/utils'
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
export async function getDocNumber(db, docTypeNo, caseId, user) {
  // 获取当前机构
  const orgInfo = db.table("orgInfo");
  const orgData = await orgInfo.find(item => item.no === user.userGroupId)
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
  tableData.map((item, index) => {
    contentOnsiteDesc += `    ${(index + 1)}. ${item.itemContent}${item.onsiteDesc}。\r\n`
    dangerString += hasIndex.danger ? `${(index + 1)}. ${item.itemContent}` : `${item.itemContent}`
    illegalString += hasIndex.illegal ? `${(index + 1)}. ${item.confirmBasis}、` : `${item.confirmBasis}、`
    onsiteDescString += hasIndex.onsiteDesc ? `${(index + 1)}. ${item.onsiteDesc}、` : `${item.onsiteDesc}、`
    treatmentSuggestion += `${(index + 1)}. ${item.penaltyBasis ? item.penaltyBasis : ''}${item.penaltyDesc ? item.penaltyDesc : ''}；`
    penaltyBasisString += hasIndex.penaltyBasis ? `${(index + 1)}. ${item.penaltyBasis ? item.penaltyBasis : ''}、` : `${item.penaltyBasis ? item.penaltyBasis : ''}、`
    penaltyDesc += hasIndex.penaltyDesc ? `${item.penaltyDesc ? `${(index + 1)}. ${item.penaltyDesc}` : ''}` : `${item.penaltyDesc ? `${item.penaltyDesc}` : ''}`
    penaltyDescFineTotle += item.penaltyDescFine ? Number(item.penaltyDescFine) : 0
  })
  illegalString = illegalString.substring(0, illegalString.length - 1)
  onsiteDescString = onsiteDescString.substring(0, onsiteDescString.length - 1)
  treatmentSuggestion = treatmentSuggestion.substring(0, treatmentSuggestion.length - 1) + '。'
  penaltyBasisString = penaltyBasisString.substring(0, penaltyBasisString.length - 1)
  penaltyDesc = penaltyDesc.substring(0, penaltyDesc.length - 1) + '。'
  penaltyDescFineTotle = penaltyDescFineTotle
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
    if (item.itemContent[item.itemContent.length - 1] === '。') {
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
    if (item.itemContent[item.itemContent.length - 1] === '。') {
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
    if (item.penaltyDesc[item.penaltyDesc.length - 1] === '。') {
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
    if (item.penaltyDesc[item.penaltyDesc.length - 1] === '。') {
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
    if (item.penaltyDesc[item.penaltyDesc.length - 1] === '。') {
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
  else sSummary += "矿井核定生产能力为   万吨/年，";
  sSummary +=
    corpData.mineWsGradeName +
    "、水文地质类型为中等，煤层自燃倾向性为" +
    corpData.mineFireName +
    "，煤尘" +
    corpData.grimeExplosiveName +
    "，";
  sSummary +=
    "矿井状况为" +
    corpData.mineStatusZsName +
    "，开拓方式为" +
    corpData.mineMinestyleName +
    "开拓。";
  sSummary +=
    "采煤方式为综采。通风方式为中央分列抽出，采掘作业地点有71003综采工作面采煤工作面、 71007综采工作面风巷、71007综采工作面机巷掘进工作面。";
  return sSummary
}