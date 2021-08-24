// 各文书页面使用的保存各种类型填写数据公用方法
import { getDangerObject, transformNumToChinese }from '@/utils/supervision/setInitPaperData'

function setTextItem (data) {
  // 处理简单文本数据
  return data
}

function setCheckItem (data, selectedData, options) {
  // 处理多选展示内容
  let string = ''
  options.map(option => {
    data.map(val => {
      if (option.value === val) {
        string += option.name + ','
      }
    })
  })
  return string.substring(0, string.length - 1)
}

function setDaterangeItem (data, selectedData) {
  // 处理日期范围选择数据
  let string = ''
  data.map(item => {
    // let dateList = item.split('-')
    // string += `${dateList[0]}年${dateList[1]}月${dateList[2]}日-`
    string += item + '-'
  })
  return string.substring(0, string.length - 1)
}

function setTextareaItem (data) {
  // 处理文本域
  return data
}

function setCheckPositionItem (data, selectedData) {
  // 处理检查地点
  let {isAddress, addressContent, isUnder, coalList, tunnellingList, addList, isOther, otherContent} = data
  let underlist = [...coalList, ...tunnellingList, ...addList]
  let string = ''
  if (isAddress) {
    string += '地面：' + addressContent + '，'
  }
  if (isUnder && underlist.length > 0) {
    string += '井下：'
    coalList.length > 0 && coalList.map(coal => {
      string += coal + '采煤工作面，'
    })
    tunnellingList.length > 0 && tunnellingList.map(tunnelling => {
      string += tunnelling + '掘进工作面，'
    })
    addList.length > 0 && addList.map(add => {
      string += add + '，'
    })
  }
  if (isOther) {
    string += '其他：' + otherContent + '，'
  }
  return string.substring(0, string.length - 1)
}

function setCheckTableItem (data) {
  // 检查项数据
  return data.tableData
}

function setDateItem (data) {
  // 日期数据
  return data
}

function setDangerTableItem (data, selectedData, options) {
  // 隐患项数据
  let string = ''
  // 根据不同的文书，返回不同形式的文本
  let dangerObject = getDangerObject(data.tableData)
  let dangerObjectIndex = getDangerObject(data.tableData, {
    danger: true
  })
  switch(options.page) {
    case '1':  // 现场检查记录
      string = dangerObjectIndex.dangerString
      break
    case '2': // 现场处理决定书
      string = dangerObjectIndex.contentOnsiteDesc
      break
    case '13': // 复查意见书
      if (options.key === 'cellIdx9') {
        string = `${dangerObjectIndex.dangerString}`
      } else if (options.key === 'cellIdx10') {
        string = `${dangerObject.onsiteDescString}`
      }
      break
    case '3': // 撤出作业人员命令书
      string = `${dangerObject.dangerString}`
      break
    case '23': // 抽样取证通知书
      string = `${dangerObject.dangerString}`
      break
    case '25': // 先行登记保存证据通知书
      string = `${dangerObject.dangerString}`
      break
    case '32': // 查封(扣押)决定书
      if (options.key === 'cellIdx7') {
        string = `${dangerObject.dangerString}`
      } else if (options.key === 'cellIdx8') {
        string = `${dangerObject.illegalString}`
      }
      break

    case '4': // 立案决定书
      if (options.key === 'cellIdx4') {
        string = `${options.spellString.corpName}${dangerObject.dangerString}案。`
      } else if (options.key === 'cellIdx5') {
        string = `${options.spellString.dateString}，${options.spellString.userGroupName}对${options.spellString.corpName}进行现场检查时发现：${dangerObjectIndex.dangerString}。以上行为分别涉嫌违反了${dangerObject.illegalString}的规定。依据《安全生产违法行为行政处罚办法》第二十三条的规定申请立案。`
      }
      break
    case '5': // 调查取证笔录
      if (options.key === 'cellIdx8') {
        string = `${options.spellString.corpName}涉嫌${dangerObject.dangerString}案。`
      } else if (options.key === 'cellIdx21') {
        string = `我们是${options.spellString.userGroupName}监察员，这是我们的执法证件（出示行政执法证件），现就你${options.spellString.corpName}涉嫌${dangerObject.dangerString}违法违规案向你进行调查取证，你有配合调查、如实回答问题的义务，也享有拒绝回答与调查取证无关问题的权利，但不得做虚假陈述和伪证，否则，将负相应的法律责任，你听清楚了吗？`
      }
      break
    case '36': // 案件处理呈报书
      if (options.key === 'cellIdx2') {
        string = `${options.spellString.corpName}涉嫌${dangerObject.dangerString}案。`
      } else if (options.key === 'cellIdx6') {
        string = `${dangerObjectIndex.dangerString}。经调查取证以上违法违规行为属实，分别违反了${dangerObject.illegalString}的规定。`
      } else if (options.key === 'cellIdx7') {
        string = `分别依据${dangerObject.treatmentSuggestion}。合并罚款人民币${transformNumToChinese(dangerObject.penaltyDescFineTotle)}（￥${dangerObject.penaltyDescFineTotle.toLocaleString()}）罚款。`
      }
      break
    case '6': // 行政处罚告知书
      if (options.key === 'cellIdx6') {
        string = `${dangerObjectIndex.dangerString}`
      } else if (options.key === 'cellIdx7') {
        string = `分别违反了${dangerObject.illegalString}`
      } else if (options.key === 'cellIdx8') {
        string = dangerObject.penaltyBasisString
      } else if (options.key === 'cellIdx10') {
        string = `分别作出：${dangerObjectIndex.penaltyDesc}。合并罚款人民币${transformNumToChinese(dangerObject.penaltyDescFineTotle)}（￥${dangerObject.penaltyDescFineTotle.toLocaleString()}）罚款。`
      }
      break
    case '30': // 陈述、申辩笔录
      string = `${options.spellString.corpName}涉嫌${dangerObject.dangerString}案。`
      break
    case '8': // 行政处罚决定书
      if (options.key === 'cellIdx7') {
        string = `${dangerObjectIndex.dangerString}`
      } else if (options.key === 'cellIdx8') {
        string = `分别违反了${dangerObject.illegalString}`
      } else if (options.key === 'cellIdx9') {
        string = dangerObject.penaltyBasisString
      } else if (options.key === 'cellIdx10') {
        string = `分别${dangerObject.penaltyDesc}。合并罚款人民币${transformNumToChinese(dangerObject.penaltyDescFineTotle)}（￥${dangerObject.penaltyDescFineTotle.toLocaleString()}）罚款。`
      }
      break
    case '31': // 执法案件公开裁定记录
      string = `${options.spellString.corpName}涉嫌${dangerObject.dangerString}案。`
      break
    case '18': // 强制执行申请书
      string = `${options.spellString.corpName}涉嫌${dangerObject.dangerString}案。`
      break
    case '28': // 听证通知书
      string = `${options.spellString.corpName}涉嫌${dangerObject.dangerString}案。`
      break
    case '29': // 不予受理听证申请通知书
      string = `${options.spellString.corpName}涉嫌${dangerObject.dangerString}案。`
      break
    case '15': // 执法案卷（首页）及目录
      string = `${options.spellString.corpName}${dangerObject.dangerString}案。`
      break
  }
  return string
}

function setDatetimeItem (data) {
  // 设置日期时间
  let string = ''
  return string
}

function setSelectItem (data, selectedData, options) {
  // 选项数据返回
  // 通过value值返回name字段，展示文本字符
  let string = ''
  selectedData.options.map(item => {
    if (item.value === data) {
      string = item.name
    }
  })
  return string
}

function setSelectInputItem (data) {
  // 设置选择模板后修改输入组件值
  return data
}

function setSamplingForensicsTable (data) {
  // 保存抽样取证清单
  return data
}

export {
  setTextItem,
  setCheckItem,
  setDaterangeItem,
  setTextareaItem,
  setCheckPositionItem,
  setCheckTableItem,
  setDateItem,
  setDangerTableItem,
  setDatetimeItem,
  setSelectItem,
  setSelectInputItem,
  setSamplingForensicsTable
}