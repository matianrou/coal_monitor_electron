// 初始化各文书数据

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
  let101DataPapaerContent.cellIdx8TypeDangerTableItem.tableData.map((item, index) => {
    dangerString += `${(index + 1)}. ${item.itemContent}`
    illegalString += `${item.confirmClause}、`
    treatmentSuggestion += `${(index + 1)}. ${item.penaltyBasis ? item.penaltyBasis : ''}${item.penaltyDesc ? item.penaltyDesc : ''}；`
  })
  illegalString = illegalString.substring(0, illegalString.length - 1)
  treatmentSuggestion = treatmentSuggestion.substring(0, treatmentSuggestion.length - 1)
  treatmentSuggestion += '。'
  return {
    dangerString,
    illegalString,
    treatmentSuggestion
  }
}