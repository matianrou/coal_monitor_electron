// 初始化各文书数据

// 初始化文书编号：
// 文书编号规则：1.机构接口中sysOfficeInfo实体中docRiseSafe字段+“煤安监”
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
// 6.numString: 整体文书编号
export async function getDocNumber(db, docTypeNo, caseId, user) {
  // 获取当前机构
  const orgInfo = db.table("orgInfo");
  const orgData = await orgInfo.find(item => item.no === user.userGroupId)
  let orgSysOfficeInfo = JSON.parse(orgData.sysOfficeInfo)
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
  }
  // 当前年份
  let date = new Date()
  let curYear = date.getFullYear()
  // 3位数字
  let wkCase = db.table("wkCase")
  let caseInfo = await wkCase.find(item => item.caseId === caseId)
  return {
    num0: orgSysOfficeInfo.docRiseSafe,
    num1: orgSysOfficeInfo.docRiseDepa,
    num2: docString,
    num3: curYear + '',
    num4: caseInfo.caseSn,
    numString: `${orgSysOfficeInfo.docRiseSafe}煤安监${orgSysOfficeInfo.docRiseDepa}${docString}〔${curYear}〕${caseInfo.caseSn}号`
  }
}

// 返回对象根据隐患项生成的文本数据：
// dangerString：隐患描述（展示形式为：1. XXX2.XXX未处理最后标点符号）、
// illegalString：违法认定法条（展示形式：XXX、XXX）
// treatmentSuggestion： 行政处罚依据+行政处罚决定（展示形式：1.XXX;2.XXX;）
// penaltyBasisString：行政处罚依据（展示形式：XXX、XXX）
// penaltyDesc：行政处罚决定（展示形式为：1. XXX2.XXX未处理最后标点符号）、
// penaltyDescFineTotle: 行政处罚罚金总额
export function getDangerObject (tableData, hasIndex = {
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
  console.log('tableData', tableData)
  tableData.map((item, index) => {
    contentOnsiteDesc += `${(index + 1)}. ${item.itemContent}${item.onsiteDesc}。`
    dangerString += hasIndex.danger ? `${(index + 1)}. ${item.itemContent}` : `${item.itemContent}`
    illegalString += hasIndex.illegal ? `${(index + 1)}. ${item.confirmClause}、` : `${item.confirmClause}、`
    onsiteDescString += hasIndex.onsiteDesc ? `${(index + 1)}. ${item.onsiteDesc}、` : `${item.onsiteDesc}、`
    treatmentSuggestion += `${(index + 1)}. ${item.penaltyBasis ? item.penaltyBasis : ''}${item.penaltyDesc ? item.penaltyDesc : ''}；`
    penaltyBasisString += hasIndex.penaltyBasis ? `${(index + 1)}. ${item.penaltyBasis ? item.penaltyBasis : ''}、` : `${item.penaltyBasis ? item.penaltyBasis : ''}、`
    penaltyDesc +=  hasIndex.penaltyDesc ? `${item.penaltyDesc ? `${(index + 1)}. ${item.penaltyDesc}` : ''}` : `${item.penaltyDesc ? `${item.penaltyDesc}` : ''}`
    penaltyDescFineTotle += item.penaltyDescFine ? Number(item.penaltyDescFine) : 0
  })
  illegalString = illegalString.substring(0, illegalString.length - 1)
  onsiteDescString = onsiteDescString.substring(0, onsiteDescString.length - 1)
  treatmentSuggestion = treatmentSuggestion.substring(0, treatmentSuggestion.length - 1) + '。'
  penaltyBasisString = penaltyBasisString.substring(0, penaltyBasisString.length - 1)
  penaltyDesc = penaltyDesc.substring(0, penaltyDesc.length - 1) + '。'
  penaltyDescFineTotle = penaltyDescFineTotle * 10000
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

// 数字转换为文字
export function transformNumToChinese(data) {
  let num = parseFloat(data);
  let strOutput = "",
      strUnit = '仟佰拾亿仟佰拾万仟佰拾元角分';
  num += "00";
  let intPos = num.indexOf('.');
  if (intPos >= 0){
      num = num.substring(0, intPos) + num.substr(intPos + 1, 2);
  }
  strUnit = strUnit.substr(strUnit.length - num.length);
  for (let i=0; i < num.length; i++){
      strOutput += '零壹贰叁肆伍陆柒捌玖'.substr(num.substr(i,1),1) + strUnit.substr(i,1);
  }
  return strOutput.replace(/零角零分$/, '整').replace(/零[仟佰拾]/g, '零').replace(/零{2,}/g, '零').replace(/零([亿|万])/g, '$1').replace(/零+元/, '元').replace(/亿零{0,3}万/, '亿').replace(/^元/, "零元")
}