// 各文书页面使用的保存各种类型填写数据公用方法
import { 
  getDangerObject, 
  getDangerContentWithoutPoint, 
  getDangerContentWithoutPointHasIndex, 
  getDangerPenaltyBasisWithoutPointHasIndex, 
  getDangerDes,
  getDangerPenaltyDescWithoutPointHasIndex,
  getDangerPenaltyDescWithoutPoint
}from '@/utils/setInitPaperData'
import store from '@/store'
import { handleDate } from '@/utils/date'
import {
  transformNumToChinese,
} from "@/utils";

function setTextItem (data) {
  // 处理简单文本数据
  return data
}

function setCheckItem (data, selectedData, options) {
  // 处理检查方案中监察或监管类型或方式展示内容
  let string = ''
  options.map(option => {
    data.checkList.map(val => {
      if (option.value === val) {
        if (val === '26') {
          string += option.label + '：' + data.detailValue + ','
        } else {
          string += option.label + ','
        }
      }
    })
  })
  return string.substring(0, string.length - 1)
}

function setDaterangeItem (data, selectedData) {
  return data
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
    string += '地面：' + (addressContent ? addressContent : '') + '，'
  }
  if (isUnder && underlist.length > 0) {
    string += '井下：'
    coalList.length > 0 && coalList.map(coal => {
      string += (coal ? coal : '') + '采煤工作面，'
    })
    tunnellingList.length > 0 && tunnellingList.map(tunnelling => {
      string += (tunnelling ? tunnelling : '') + '掘进工作面，'
    })
    addList.length > 0 && addList.map(add => {
      string += (add ? add : '') + '，'
    })
  }
  if (isOther) {
    string += '其他：' + (otherContent ? otherContent : '') + '，'
  }
  return string.substring(0, string.length - 1)
}

function setCheckTable (data) {
  // 检查项数据
  return data.tableData
}

function setDateItem (data) {
  // 日期数据
  return data
}

function setDangerTable (data, selectedData, options) {
  // 隐患项数据
  let string = ''
  // 根据不同的文书，返回不同形式的文本
  let dangerObject = {}
  let dangerObjectIndex = {}
  let newList = []
  if (data.dangerContentMerge) {
    // 隐患合并
    // 合并数据，通过合并后的数组获取相应的检查描述
    if (data.selectedDangerList && data.selectedDangerList.length > 0) {
      data.selectedDangerList[0].penaltyDescFine = data.selectedDangerList[0].penaltyDescFine ? data.selectedDangerList[0].penaltyDescFine : 0
      newList = [data.selectedDangerList[0]]
      for (let i = 1; i < data.selectedDangerList.length; i++) {
        let isAdd = true
        for (let j = 0; j < newList.length; j++) {
          if (newList[j].confirmBasis === data.selectedDangerList[i].confirmBasis &&
            newList[j].penaltyBasis === data.selectedDangerList[i].penaltyBasis) {
              // 如果相同的违法认定法条和相同的行政处罚依据 就可进行隐患合并
              newList[j] = {
                itemContent: getString(newList[j].itemContent, data.selectedDangerList[i].itemContent),
                confirmBasis: newList[j].confirmBasis,
                onsiteDesc: getString(newList[j].onsiteDesc, data.selectedDangerList[i].onsiteDesc),
                penaltyBasis: newList[j].penaltyBasis,
                penaltyDesc: getString(newList[j].penaltyDesc, data.selectedDangerList[i].penaltyDesc),
                penaltyDescFine: data.selectedDangerList[i].penaltyDescFine ? newList[j].penaltyDescFine + data.selectedDangerList[i].penaltyDescFine : newList[j].penaltyDescFine,
              }
              isAdd = false
              break
            }
        }
        if (isAdd) {
          newList.push(data.selectedDangerList[i])
        }
      }
      dangerObject = getDangerObject(newList)
      dangerObjectIndex = getDangerObject(newList, {
        danger: true,
        penaltyDesc: true
      })
    }
  } else {
    // 不合并
    dangerObject = data && data.selectedDangerList && data.selectedDangerList.length > 0 ? getDangerObject(data.selectedDangerList) : {
      contentOnsiteDesc: '',
      dangerString: '',
      illegalString: '',
      onsiteDescString: '',
      treatmentSuggestion: '',
      penaltyBasisString: '',
      penaltyDesc: '',
      penaltyDescFineTotle: 0
    }
    dangerObjectIndex = data && data.selectedDangerList && data.selectedDangerList.length > 0 ? getDangerObject(data.selectedDangerList, {
      danger: true,
      penaltyDesc: true
    }) : {
      contentOnsiteDesc: '',
      dangerString: '',
      illegalString: '',
      onsiteDescString: '',
      treatmentSuggestion: '',
      penaltyBasisString: '',
      penaltyDesc: '',
      penaltyDescFineTotle: 0
    }
  }
  switch(options.page) {
    case '1':  // 现场检查记录/现场检查笔录
      let dangerString = ''
      if (data.dangerContentMerge) {
        newList.map((item, index) => {
          dangerString += `    ${(index + 1)}. ${item.itemContent}\r\n`
        })
      } else {
        if (data.selectedDangerList) {
          data.selectedDangerList.map((item, index) => {
            dangerString += `    ${(index + 1)}. ${item.itemContent}\r\n`
          })
        }
      }
      string = `${data.baseInfor}\r\n${data.dangerInfor}\r\n${dangerString}`
      break
    case '2': // 现场处理决定书
      string = dangerObjectIndex.contentOnsiteDesc
      break
    case '13': // 复查意见书
      if (options.key === 'cellIdx9') {
        string = dangerObjectIndex.dangerString || ''
      } else if (options.key === 'cellIdx10') {
        string = dangerObject.onsiteDescString || ''
      } else if (options.key === 'cellIdx14') {
        string = dangerObject.onsiteDescString || ''
      }
      break
    case '3': // 撤出作业人员命令书
      string = dangerObject.dangerString || ''
      break
    case '23': // 抽样取证通知书
      string = dangerObject.dangerString || ''
      break
    case '25': // 先行登记保存证据通知书
      string = dangerObject.dangerString || ''
      break
    case '32': // 查封（扣押）决定书
      if (store.state.user.userType === 'supervision') {
        // 监管
        if (options.key === 'cellIdx7') {
          string = dangerObject.dangerString || ''
        } else if (options.key === 'cellIdx8') {
          string = dangerObject.illegalString || ''
        }
      } else {
        // 监察
        if (options.key === 'cellIdx6') {
          string = dangerObject.dangerString || ''
        } else if (options.key === 'cellIdx7') {
          string = dangerObject.illegalString || ''
        }
      }
      break
    case '4': // 立案决定书
      if (data.dangerContentMerge) {
        // 合并
        if (options.key === 'cellIdx4') {
          let dangerString1 = getDangerContentWithoutPoint(newList || [], '、')
          string = `${options.spellString.corpName}${dangerString1 || ''}违法违规案。`
        } else if (options.key === 'cellIdx5') {
          let dangerString2 = getDangerContentWithoutPoint(newList || [], '；')
          string = `${options.spellString.dateString}，${options.spellString.userGroupName}对${options.spellString.corpName}进行现场检查时发现：${dangerString2}。以上行为分别涉嫌违反了${dangerObject.illegalString || ''}的规定。依据《安全生产违法行为行政处罚办法》第二十三条的规定申请立案。`
        }
      } else {
        // 不合并
        if (options.key === 'cellIdx4') {
          let dangerString1 = getDangerContentWithoutPoint(data.selectedDangerList || [], '、')
          string = `${options.spellString.corpName}${dangerString1 || ''}违法违规案。`
        } else if (options.key === 'cellIdx5') {
          let dangerString2 = getDangerContentWithoutPoint(data.selectedDangerList || [], '；')
          string = `${options.spellString.dateString}，${options.spellString.userGroupName}对${options.spellString.corpName}进行现场检查时发现：${dangerString2}。以上行为分别涉嫌违反了${dangerObject.illegalString || ''}的规定。依据《安全生产违法行为行政处罚办法》第二十三条的规定申请立案。`
        }
      }
      break
    case '5': // 调查取证笔录
      if (options.key === 'cellIdx8') {
        string = `${options.spellString.corpName}涉嫌${dangerObject.dangerString || ''}案。`
      } else if (options.key === 'cellIdx21') {
        string = `我们是${options.spellString.userGroupName}${store.state.user.userType === 'supervision' ? '监管' : '监察'}员，这是我们的执法证件（出示行政执法证件），现就你${options.spellString.corpName}涉嫌${dangerObject.dangerString || ''}违法违规案向你进行调查取证，你有配合调查、如实回答问题的义务，也享有拒绝回答与调查取证无关问题的权利，但不得做虚假陈述和伪证，否则，将负相应的法律责任，你听清楚了吗？`
      }
      break
    case '36': // 案件处理呈报书
      let list36 = data.dangerContentMerge ? newList : data.selectedDangerList
      if (options.key === 'cellIdx2') {
        let dangerString = getDangerContentWithoutPoint(list36 || [], '、')
        string = `${options.spellString.corpName}涉嫌${dangerString || ''}违法违规案。`
      } else if (options.key === 'cellIdx3') {
        string = `${options.spellString.corpName}涉嫌${dangerObject.dangerString || ''}违法违规案。`
      } else if (options.key === 'cellIdx6') {
        let dangerString = getDangerContentWithoutPointHasIndex(list36 || [], ';')
        let isMultiString = list36.length > 1 ? '分别' : ''
        string = `${dangerString}。经调查取证以上违法违规行为属实，${isMultiString}违反了${dangerObject.illegalString || ''}的规定。`
      } else if (options.key === 'cellIdx7') {
        if (store.state.user.userType === 'supervision') {
          string = `${dangerObject.dangerString || ''}经调查取证以上违法违规行为属实，分别违反了${dangerObject.illegalString || ''}的规定。`
        } else {
          let dangerString = getDangerPenaltyBasisWithoutPointHasIndex(list36 || [], ';')
          let {descTypeStrings} = getDangerDes(list36 || [])
          string = `分别依据${dangerString || ''}。${dangerObject.penaltyDescFineTotle ? `合并罚款人民币${transformNumToChinese(dangerObject.penaltyDescFineTotle) || ''}（￥${dangerObject.penaltyDescFineTotle.toLocaleString() || ''}）` : ''}${descTypeStrings || ''}`
        }
      }
      break
    case '6': // 行政处罚告知书
      let list6 = data.dangerContentMerge ? newList : data.selectedDangerList
      if (options.key === 'cellIdx6') {
        let dangerString1 = getDangerContentWithoutPointHasIndex(list6 || [], '；')
        string = dangerString1
      } else if (options.key === 'cellIdx7') {
        string = dangerObject.illegalString || ''
      } else if (options.key === 'cellIdx8') {
        string = dangerObject.penaltyBasisString || ''
      } else if (options.key === 'cellIdx10') {
        let penaltyDescString = getDangerPenaltyDescWithoutPointHasIndex(list6 || [], '；')
        let {descTypeStrings} = getDangerDes(list6 || [])
        string = `${penaltyDescString}。${dangerObject.penaltyDescFineTotle ? `合并罚款人民币${transformNumToChinese(dangerObject.penaltyDescFineTotle) || ''}（￥${dangerObject.penaltyDescFineTotle.toLocaleString() || ''}）` : ''}${descTypeStrings || ''}`
      }
      break
    case '30': // 陈述申辩笔录
      string = `${options.spellString.corpName}涉嫌${dangerObject.dangerString || ''}案。`
      break
    case '8': // 行政处罚决定书
      let list8 = data.dangerContentMerge ? newList : data.selectedDangerList
      if (options.key === 'cellIdx7') {
        let dangerString1 = getDangerContentWithoutPointHasIndex(list8 || [], '；')
        string = dangerString1
      } else if (options.key === 'cellIdx8') {
        string = dangerObject.illegalString || ''
      } else if (options.key === 'cellIdx9') {
        string = dangerObject.penaltyBasisString || ''
      } else if (options.key === 'cellIdx10') {
        let penaltyDescString = getDangerPenaltyDescWithoutPoint(list8 || [], '；')
        let {descTypeStrings} = getDangerDes(list8 || [])
        string = `分别${penaltyDescString}。${dangerObject.penaltyDescFineTotle ? `合并罚款人民币${transformNumToChinese(dangerObject.penaltyDescFineTotle) || ''}（￥${dangerObject.penaltyDescFineTotle.toLocaleString() || ''}）` : ''}${descTypeStrings || ''}`
      }
      break
    case '31': // 执法案件公开裁定记录
      string = `${options.spellString.corpName}涉嫌${dangerObject.dangerString || ''}案。`
      break
    case '18': // 强制执行申请书
      string = `${options.spellString.corpName}涉嫌${dangerObject.dangerString || ''}案。`
      break
    case '28': // 听证通知书
      string = `${options.spellString.corpName}涉嫌${dangerObject.dangerString || ''}案。`
      break
    case '29': // 不予受理听证申请通知书
      string = `${options.spellString.corpName}涉嫌${dangerObject.dangerString || ''}案。`
      break
    case '15': // 执法案卷（首页）及目录
      string = `${options.spellString.corpName}${dangerObject.dangerString || ''}案。`
      break
    case '47': // 行政执法决定法制审核意见书
      if (options.key === 'cellIdx3') {
        string = `${options.spellString.corpName}涉嫌${dangerObject.dangerString || ''}案。`
      } else if (options.key === 'cellIdx5') {
        string = `${options.spellString.let101Date}${options.spellString.userGroupName}对${options.spellString.corpName}进行现场检查时发现${dangerObjectIndex.dangerString}以上行为分别涉嫌${dangerObject.illegalString || ''}依据《安全生产违法行为行政处罚办法》第二十三条的规定申请立案。`
      } else if (options.key === 'cellIdx6') {
        string = dangerObject.penaltyBasisString || ''
      } else if (options.key === 'cellIdx7') {
        string = dangerObject.penaltyDesc || ''
      }
      break
    case '48': // 集体讨论记录
      string = `${options.spellString.corpName}涉嫌${dangerObject.dangerString || ''}案。`
      break
  }
  return string
}

// function getString (longString, string) {
//   // 获取对比后的字符串集合
//   // longString为长字符串，可通过逗号分解单字符，分解后再与string对比，如果相同则不再添加，如果不同则添加
//   let finString = ''
//   if (longString.includes('，')) {
//     let stringList = longString.split('，')
//     let isAdd = true
//     stringList.map(item => {
//       if (item === string) {
//         isAdd = false
//       }
//     })
//     if (isAdd) {
//       let longStringWithoutPoint = longString
//       if (longString.includes('。')) {
//         longStringWithoutPoint = longStringWithoutPoint.substring(0, longStringWithoutPoint.length - 1)
//       }
//       finString = `${longStringWithoutPoint}，${string}`
//     } else {
//       finString = longString
//     }
//   } else {
//     if (longString === string) {
//       finString = longString
//     } else {
//       let longStringWithoutPoint = longString
//       if (longString.includes('。')) {
//         longStringWithoutPoint = longStringWithoutPoint.substring(0, longStringWithoutPoint.length - 1)
//       }
//       finString = `${longStringWithoutPoint}，${string}`
//     }
//   }
//   return finString
// }
function getString (longString, string) {
  // 获取对比后的字符串集合
  let finString = ''
  if (longString === string) {
    finString = longString
  } else {
    let longStringWithoutPoint = longString
    if (longString.includes('。')) {
      longStringWithoutPoint = longStringWithoutPoint.substring(0, longStringWithoutPoint.length - 1)
    }
    finString = `${longStringWithoutPoint}，${string}`
  }
  return finString
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

function setSamplingForensicsTable (data, selectedData, options) {
  // 保存抽样取证清单
  if (options.page === '55') {
    // 鉴定委托书 文书 回传table
    return data.tableData
  } else {
    // 其他为整体回传即可
    return data
  }
}

function setVolumesMenuTable (data, selectedData, options) {
  // 保存档案卷内目录
  return data.tableData
}

function setUploadFile(data, selectedData, options) {
  // 保存档案卷内目录
  return data.tableData
}

export {
  setTextItem,
  setCheckItem,
  setDaterangeItem,
  setTextareaItem,
  setCheckPositionItem,
  setCheckTable,
  setDateItem,
  setDangerTable,
  setDatetimeItem,
  setSelectItem,
  setSelectInputItem,
  setSamplingForensicsTable,
  setVolumesMenuTable,
  setUploadFile
}