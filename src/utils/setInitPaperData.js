// 初始化各文书数据

// 初始化文书编号：
// 文书编号规则：1.机构接口中sysOfficeInfo实体中docRiseSafe字段+“煤安监”
//             2.机构接口中sysOfficeInfo实体中docRiseDepa字段 +
//             3.根据不同文书 显示（立、告、罚、送、催）+
//             4.{当前年份}+
//             5.个人执法编号+
//             6.3位数字（自增的）
export async function getDocNumber(db, docTypeNo, userGroupId) {
  // 获取当前机构
  const orgInfo = db.table("orgInfo");
  const orgData = await orgInfo.find(item => item.no === userGroupId)
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
  }
  // 当前年份
  let date = new Date()
  let curYear = date.getFullYear()
  // 个人执法编号
  // 3位数字
  return `${orgSysOfficeInfo.docRiseSafe}煤安监${orgSysOfficeInfo.docRiseDepa}${docString}〔${curYear}〕`
}

// 返回已选的隐患描述+现场处理决定，展示样式：1.XXXX2.XXXXXX（未处理隐患文本及现场处理决定中最后的符号）
export async function getIndexDangerOnsiteDesc (wkPaper, caseId) {
  // wkPaper 文书库表
  // caseId 需要检索的检查活动的id
  const let101Data = await wkPaper.find((item) => {
    return item.caseId === caseId && item.paperType === '1';
  });
  let let101DataPapaerContent = JSON.parse(let101Data.paperContent)
  let stringList = []
  let101DataPapaerContent.cellIdx8TypeDangerTableItem.tableData.map((item, index) => {
    stringList.push(`${(index + 1)}. ${item.itemContent}${item.onsiteDesc}`)
  })
  return stringList
}

// 返回隐患描述：已选的隐患描述，处理隐患项内容如果最后一位是句号。则修改为、
export async function getDangerContent (wkPaper, caseId) {
  // wkPaper 文书库表
  // caseId 需要检索的检查活动的id
  const let101Data = await wkPaper.find((item) => {
    return item.caseId === caseId && item.paperType === '1';
  });
  let let101DataPapaerContent = JSON.parse(let101Data.paperContent)
  let string = ''
  let101DataPapaerContent.cellIdx8TypeDangerTableItem.tableData.map(item => {
    // 判断最后一位是否是句号。如果是则替换为、
    if (item.itemContent.substring(item.itemContent.length - 1) === '。') {
      let contentstring = item.itemContent.substring(0, item.itemContent.length - 1)
      string += contentstring + '；'
    } else {
      string += item.itemContent + '；'
    }
  })
  string = string.substring(0, string.length - 1)
  return string
}

// 返回对象：
// dangerString：隐患描述（展示形式为：1. XXX2.XXX未处理最后标点符号）、
// illegalString：违法认定法条（展示形式：XXX、XXX）
// treatmentSuggestion： 行政处罚依据+行政处罚决定（展示形式：1.XXX;2.XXX;）
// penaltyBasisString：行政处罚依据（展示形式：XXX、XXX）
// penaltyDesc：行政处罚决定（展示形式为：1. XXX2.XXX未处理最后标点符号）、
export async function getDangerObject (wkPaper, caseId) {
  // wkPaper 文书库表
  // caseId 需要检索的检查活动的id
  const let101Data = await wkPaper.find((item) => {
    return item.caseId === caseId && item.paperType === '1';
  });
  let let101DataPapaerContent = JSON.parse(let101Data.paperContent)
  // 隐患描述
  let dangerString = ''
  // 违法认定法条
  let illegalString = ''
  // 行政处罚依据+行政处罚决定
  let treatmentSuggestion = ''
  // 行政处罚依据
  let penaltyBasisString = ''
  // 行政处罚决定
  let penaltyDesc = ''
  let101DataPapaerContent.cellIdx8TypeDangerTableItem.tableData.map((item, index) => {
    dangerString += `${(index + 1)}. ${item.itemContent}`
    illegalString += `${item.confirmClause}、`
    treatmentSuggestion += `${(index + 1)}. ${item.penaltyBasis ? item.penaltyBasis : ''}${item.penaltyDesc ? item.penaltyDesc : ''}；`
    penaltyBasisString += `${item.penaltyBasisString ? item.penaltyBasisString : ''}、`
    penaltyDesc += `${item.penaltyDesc ? `${(index + 1)}. ${item.penaltyDesc}` : ''}、`
  })
  illegalString = illegalString.substring(0, illegalString.length - 1)
  treatmentSuggestion = treatmentSuggestion.substring(0, treatmentSuggestion.length - 1) + '。'
  penaltyBasisString = penaltyBasisString.substring(0, penaltyBasisString.length - 1)
  penaltyDesc = penaltyDesc.substring(0, penaltyDesc.length - 1) + '。'
  return {
    dangerString,
    illegalString,
    treatmentSuggestion,
    penaltyBasisString,
    penaltyDesc
  }
}