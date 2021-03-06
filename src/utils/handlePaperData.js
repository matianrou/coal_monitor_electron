// 各文书页面使用的保存各种类型填写数据公用方法
import {
  getDangerObject,
  getDangerContentWithoutPoint,
  getDangerContentWithoutPointHasIndex,
  getDangerPenaltyBasisWithoutPoint,
  getDangerPenaltyBasisWithoutPointHasIndex,
  getDangerDes,
  getDangerPenaltyDescWithoutPointHasIndex,
  getDangerPenaltyDescWithoutPoint,
  getDangerConfirmBasis,
  getDangerPenaltyBasis,
  retrunGetMoney
} from '@/utils/setInitPaperData'
import store from '@/store'
import { handleDate } from '@/utils/date'
import {
  transformNumToChinese,
} from "@/utils";

function setTextItem(data) {
  // 处理简单文本数据
  return data
}

function setCheckItem(data, selectedData, options) {
  // 处理检查方案中监察或监管类型或方式展示内容
  let string = ''
  options.map(option => {
    data.checkList.map(val => {
      if (option.value === val) {
        if (val === '26') {
          string += option.label + (data.detailValue ? '：' + data.detailValue : '') + ','
        } else {
          string += option.label + ','
        }
      }
    })
  })
  return string.substring(0, string.length - 1)
}

function setDaterangeItem(data, selectedData) {
  return data
}

function setTextareaItem(data) {
  // 处理文本域
  return data
}

function setCheckPositionItem(data, selectedData) {
  // 处理检查地点
  let { isAddress, addressContent, isUnder, coalList, tunnellingList, addList, isOther, otherContent } = data
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

function setCheckTable(data) {
  // 检查项数据
  return data.tableData
}

function setDateItem(data) {
  // 日期数据
  return data
}

function setDangerTable(data, selectedData, options) {
  // 隐患项数据
  let string = ''
  // 根据不同的文书，返回不同形式的文本
  let dangerObject = {}
  let dangerObjectIndex = {}
  let newList = []
  if (data && data.dangerContentMerge) {
    // 隐患合并
    // 合并数据，通过合并后的数组获取相应的检查描述
    if (data && data.selectedDangerList && data.selectedDangerList.length > 0) {
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
              penaltyDesc: getPenaltyDescString(newList[j].penaltyDesc, data.selectedDangerList[i].penaltyDesc),
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
  switch (options.page) {
    case '1':  // 现场检查记录/现场检查笔录
      let dangerString = ''
      if (data && data.dangerContentMerge) {
        newList.map((item, index) => {
          dangerString += `    ${(index + 1)}. ${item.itemContent}\r\n`
        })
      } else {
        if (data && data.selectedDangerList) {
          data.selectedDangerList.map((item, index) => {
            dangerString += `    ${(index + 1)}. ${item.itemContent}\r\n`
          })
        }
      }
      string = data.baseInfor ? `${data.baseInfor}\r\n` : ''
      string += data.dangerInfor ? `${data.dangerInfor}\r\n` : ''
      string += `${dangerString}`
      break
    case '2': // 现场处理决定书
      let dangerString1 = ''
      if (data && data.dangerContentMerge) {
        newList.map((item, index) => {
          dangerString1 += `    ${(index + 1)}. ${item.itemContent}${item.onsiteDesc ? item.onsiteDesc + '。' : ''}\r\n`
        })
      } else {
        if (data && data.selectedDangerList) {
          data.selectedDangerList.map((item, index) => {
            dangerString1 += `    ${(index + 1)}. ${item.itemContent}${item.onsiteDesc ? item.onsiteDesc + '。' : ''}\r\n`
          })
        }
      }
      string = dangerString1
      // let list2 = data.dangerContentMerge ? newList : data.selectedDangerList
      // if (data.dangerContentMerge) {
      //   let dangerString = getDangerContentWithoutPointHasIndex(list2 || [], '；')
      //   string = ` ${dangerString} \r\n`
      // } else {
      //   let dangerString = getDangerContentWithoutPointHasIndex(data ? data.selectedDangerList : [], '；')
      //   string = ` ${dangerString} \r\n`
      // }
      break
    case '13': // 复查意见书
      let list13 = data && (data.dangerContentMerge ? newList : data.selectedDangerList)
      if (options.key === 'cellIdx9') {
        let dangerString = getDangerContentWithoutPointHasIndex(list13 || [], '；')
        string = dangerString
      } else if (options.key === 'cellIdx10') {
        let dangerString = getDangerContentWithoutPoint(list13 || [], '、')
        string = dangerString
      } else if (options.key === 'cellIdx14') {
        string = dangerObject.onsiteDescString || ''
      }
      // if (options.key === 'cellIdx9') {
      //   string = dangerObjectIndex.dangerString || ''
      // } else if (options.key === 'cellIdx10') {
      //   string = dangerObject.onsiteDescString || ''
      // } else if (options.key === 'cellIdx14') {
      //   string = dangerObject.onsiteDescString || ''
      // }
      break
    case '3': // 撤出作业人员命令书
      let list3 = data && (data.dangerContentMerge ? newList : data.selectedDangerList)
      if (options.key === 'cellIdx12') {
        let dangerString1 = getDangerContentWithoutPoint(list3 || [], ',')
        string = dangerString1
      }
      // string = dangerObject.dangerString || ''
      break
    case '23': // 抽样取证通知书
      let list23 = data && (data.dangerContentMerge ? newList : data.selectedDangerList)
      if (options.key === 'cellIdx5') {
        let dangerString1 = getDangerContentWithoutPoint(list23 || [], '、')
        string = dangerString1
      }
      // string = dangerObject.dangerString || ''
      break
    case '25': // 先行登记保存证据通知书
      let list25 = data && (data.dangerContentMerge ? newList : data.selectedDangerList)
      if (options.key === 'cellIdx6') {
        let dangerString1 = getDangerContentWithoutPoint(list25 || [], ',')
        string = dangerString1
      }
      // string = dangerObject.dangerString || ''
      break
    case '32': // 查封（扣押）决定书
      let list32 = data && (data.dangerContentMerge ? newList : data.selectedDangerList)
      if (store.state.user.userType === 'supervision') {
        // 监管
        if (options.key === 'cellIdx7') {
          let dangerString = getDangerContentWithoutPointHasIndex(list32 || [], '；')
          string = dangerString
        } else if (options.key === 'cellIdx8') {
          let dangerString = getDangerConfirmBasis(list32 || [], '、')
          string = dangerString
        }
      } else {
        // 监察
        if (options.key === 'cellIdx6') {
          let dangerString = getDangerContentWithoutPointHasIndex(list32 || [], '；')
          string = dangerString
        } else if (options.key === 'cellIdx7') {
          let dangerString = getDangerConfirmBasis(list32 || [], '、')
          string = dangerString
        }
      }
      break
    case '4': // 立案决定书
      let list4 = data && (data.dangerContentMerge ? newList : data.selectedDangerList) || []
      if (options.key === 'cellIdx4') {
        let dangerString1 = getDangerContentWithoutPoint(list4, '、')
        string = `${options.spellString.corpName}${dangerString1 || ''}违法违规案。`
      } else if (options.key === 'cellIdx5') {
        // 判断单条或者多条隐患
        if (list4.length === 1) {
          // 单条
          let dangerString2 = getDangerContentWithoutPoint(list4, '；')
          string = `${options.spellString.dateString}，${options.spellString.groupName}对${options.spellString.corpName}进行现场检查时发现${dangerString2}。以上行为涉嫌违反了${dangerObject.illegalString || ''}的规定。依据《安全生产违法行为行政处罚办法》第二十三条的规定申请立案。`
        } else if (list4.length > 1) {
          // 多条
          let dangerString2 = getDangerContentWithoutPointHasIndex(list4, '；')
          string = `${options.spellString.dateString}，${options.spellString.groupName}对${options.spellString.corpName}进行现场检查时发现：${dangerString2}。以上行为分别涉嫌违反了${dangerObject.illegalString || ''}的规定。依据《安全生产违法行为行政处罚办法》第二十三条的规定申请立案。`
        }
      }
      break
    case '5': // 调查取证笔录
      if (options.key === 'cellIdx8') {
        let dangerString = getDangerContentWithoutPoint(data ? data.selectedDangerList : [], '、')
        string = `${options.spellString.corpName}涉嫌${dangerString}`
      }
      break
    case '36': // 案件处理呈报书
      let list36 = data && (data.dangerContentMerge ? newList : data.selectedDangerList) || []
      if (options.key === 'cellIdx2') {
        let dangerString = getDangerContentWithoutPoint(list36 || [], '、')
        string = `${options.spellString.corpName}涉嫌${dangerString || ''}违法违规案。`
      } else if (options.key === 'cellIdx3') {
        string = `${options.spellString.corpName}涉嫌${dangerObject.dangerString || ''}违法违规案。`
      } else if (options.key === 'cellIdx6') {
        // 违法事实及依据
        if (list36.length === 1) {
          // 单条时：
          let dangerString = getDangerContentWithoutPoint(list36 || [], '；')
          string = `${dangerString}。经调查取证以上违法违规行为属实，违反了${dangerObject.illegalString || ''}的规定。`
        } else if (list36.length > 1) {
          // 多条时
          let dangerString = getDangerContentWithoutPointHasIndex(list36 || [], '；')
          string = `${dangerString}。经调查取证以上违法违规行为属实，分别违反了${dangerObject.illegalString || ''}的规定。`
        }
      } else if (options.key === 'cellIdx7') {
        // 建议案件处理意见
        if (list36.length === 1) {
          // 单条时
          let dangerString = getDangerPenaltyBasisWithoutPoint(list36 || [], '；')
          string = `依据${dangerString || ''}。`
        } else if (list36.length > 1) {
          // 多条时
          let dangerString = getDangerPenaltyBasisWithoutPointHasIndex(list36 || [], '；')
          let { descTypeStrings } = getDangerDes(list36 || [])
          let punishmentInfor = ''
          if (data.punishmentInfor) {
            punishmentInfor = data.punishmentInfor
          } else {
            if (dangerObject.penaltyDescFineTotle) {
              punishmentInfor = `合并罚款人民币${transformNumToChinese(dangerObject.penaltyDescFineTotle) || ''}（￥${dangerObject.penaltyDescFineTotle.toLocaleString() || ''}）` + (descTypeStrings || '')
            }
          }
          string = `分别依据${dangerString || ''}。${punishmentInfor}`
        }
      }
      break
    case '6': // 行政处罚告知书
      let list6 = data && (data.dangerContentMerge ? newList : data.selectedDangerList) || []
      if (options.key === 'cellIdx6') {
        // 违法行为
        if (list6.length === 1) {
          // 单条时,不加序号
          let dangerString1 = getDangerContentWithoutPoint(list6 || [], '；')
          string = dangerString1
        } else if (list6.length > 1) {
          let dangerString1 = getDangerContentWithoutPointHasIndex(list6 || [], '；')
          string = dangerString1
        }
      } else if (options.key === 'cellIdx22') {
        // 分别违反了或违反了
        if (list6.length === 1) {
          // 单条时,没有分别
          string = ''
        } else if (list6.length > 1) {
          string = '分别'
        }
      } else if (options.key === 'cellIdx7') {
        // 规定
        string = dangerObject.illegalString || ''
      } else if (options.key === 'cellIdx8') {
        // 法律依据
        string = dangerObject.penaltyBasisString || ''
      } else if (options.key === 'cellIdx10') {
        // 行政处罚
        if (list6.length === 1) {
          // 单条时,没有序号,同时去掉合并罚款说明
          let penaltyDescString = getDangerPenaltyDescWithoutPoint(list6 || [], '；')
          string = `作出：${penaltyDescString}`
        } else if (list6.length > 1) {
          let penaltyDescString = getDangerPenaltyDescWithoutPointHasIndex(list6 || [], '；')
          let { descTypeStrings } = getDangerDes(list6 || [])
          let punishmentInfor = ''
          if (data.punishmentInfor) {
            punishmentInfor = data.punishmentInfor
          } else {
            if (dangerObject.penaltyDescFineTotle) {
              punishmentInfor = `合并罚款人民币${transformNumToChinese(dangerObject.penaltyDescFineTotle) || ''}（￥${dangerObject.penaltyDescFineTotle.toLocaleString() || ''}）` + (descTypeStrings || '')
            }
          }
          string = `分别作出：${penaltyDescString}。${punishmentInfor}`
        }
      }
      break
    case '30': // 陈述、申辩笔录
      if (options.key === 'cellIdx19') {
        let dangerString = getDangerContentWithoutPoint(data ? data.selectedDangerList : [], '、')
        string = `${options.spellString.corpName}涉嫌${dangerString}违法违规案。`
      }
      // string = `${options.spellString.corpName}涉嫌${dangerObject.dangerString || ''}案。`
      break
    case '8': // 行政处罚决定书
      let list8 = data && (data.dangerContentMerge ? newList : data.selectedDangerList) || []
      if (options.key === 'cellIdx7') {
        // 违法事实：
        if (list8.length === 1) {
          // 单条时：不带序号
          let dangerString1 = getDangerContentWithoutPoint(list8, '；')
          string = dangerString1
        } else if (list8.length > 1) {
          // 多条时，有序号
          let dangerString1 = getDangerContentWithoutPointHasIndex(list8, '；')
          string = dangerString1
        }
      } else if (options.key === 'cellIdx22') {
        // 分别
        if (list8.length === 1) {
          // 单条时：
          string = ''
        } else if (list8.length > 1) {
          // 多条时
          string = '分别'
        }
      } else if (options.key === 'cellIdx8') {
        // 法律规定
        string = dangerObject.illegalString || ''
      } else if (options.key === 'cellIdx9') {
        // 法律依据
        string = dangerObject.penaltyBasisString || ''
      } else if (options.key === 'cellIdx10') {
        // 行政处罚
        if (list8.length === 1) {
          // 单条时：
          let penaltyDescString = getDangerPenaltyDescWithoutPoint(list8 || [], '；')
          string = `${penaltyDescString}。`
        } else if (list8.length > 1) {
          // 多条时
          let penaltyDescString = getDangerPenaltyDescWithoutPoint(list8 || [], '；')
          let { descTypeStrings } = getDangerDes(list8 || [])
          let punishmentInfor = ''
          if (data.punishmentInfor) {
            punishmentInfor = data.punishmentInfor
          } else {
            if (dangerObject.penaltyDescFineTotle) {
              punishmentInfor = `合并罚款人民币${transformNumToChinese(dangerObject.penaltyDescFineTotle) || ''}（￥${dangerObject.penaltyDescFineTotle.toLocaleString() || ''}）` + (descTypeStrings || '')
            }
          }
          string = `分别${penaltyDescString}。${punishmentInfor}`
        }
      }
      break
    case '31': // 执法案件公开裁定记录
      if (options.key === 'cellIdx8') {
        let dangerString = getDangerContentWithoutPoint(data ? data.selectedDangerList : [], '、')
        string = `${options.spellString.corpName}涉嫌${dangerString}违法违规案。`
      }
      // string = `${options.spellString.corpName}涉嫌${dangerObject.dangerString || ''}案。`
      break
    case '18': // 强制执行申请书
      let list18 = data && (data.dangerContentMerge ? newList : data.selectedDangerList)
      if (options.key === 'cellIdx16') {
        // 监察字段
        let dangerString = getDangerContentWithoutPoint(list18 || [], '、')
        string = `${options.spellString.corpName}涉嫌${dangerString}违法违规案`
      } else if (options.key === 'cellIdx9') {
        // 监管字段
        let dangerString = getDangerContentWithoutPoint(list18 || [], '、')
        string = `${options.spellString.corpName}涉嫌${dangerString}违法违规案`
      }
      break
    case '28': // 听证通知书
      if (options.key === 'cellIdx7') {
        if (store.state.user.userType === 'supervision') {
          // 监管不带最后的句号
          let dangerString = getDangerContentWithoutPoint(data ? data.selectedDangerList : [], '、')
          string = `${options.spellString.corpName}涉嫌${dangerString}违法违规案`
        } else {
          // 监察最后加标点符号
          let dangerString = getDangerContentWithoutPoint(data ? data.selectedDangerList : [], '、')
          string = `${options.spellString.corpName}涉嫌${dangerString}违法违规案。`
        }
      }
      // string = `${options.spellString.corpName}涉嫌${dangerObject.dangerString || ''}案。`
      break
    case '29': // 不予受理听证申请通知书
      if (options.key === 'cellIdx6') {
        let dangerString = getDangerContentWithoutPoint(data ? data.selectedDangerList : [], '、')
        string = `${options.spellString.corpName}涉嫌${dangerString}违法违规案`
      }
      // string = `${options.spellString.corpName}涉嫌${dangerObject.dangerString || ''}案。`
      break
    case '15': // 执法案卷（首页）及目录
      if (options.key === 'cellIdx2') {
        let dangerString = getDangerContentWithoutPoint(data ? data.selectedDangerList : [], '、')
        string = `${options.spellString.corpName}涉嫌${dangerString}违法违规案。`
      }
      // string = `${options.spellString.corpName}${dangerObject.dangerString || ''}案。`
      break
    case '47': // 行政执法决定法制审核意见书 监管
      let list47 = data && (data.dangerContentMerge ? newList : data.selectedDangerList)
      if (options.key === 'cellIdx3') {
        let dangerString = getDangerContentWithoutPoint(list47 || [], '、')
        string = `${options.spellString.corpName}涉嫌${dangerString }违法违规案。`
      } else if (options.key === 'cellIdx5') {
        let dangerString2 = getDangerContentWithoutPoint(list47 || [], '；')
        string = `${options.spellString.dateString}，${options.spellString.groupName}对${options.spellString.corpName}进行现场检查时发现：${dangerString2}。以上行为${list47 && list47.length > 1 ? '分别' : ''}涉嫌违反了${dangerObject.illegalString || ''}的规定。依据《安全生产违法行为行政处罚办法》第二十三条的规定申请立案。`
      } else if (options.key === 'cellIdx6') {
        string = getDangerPenaltyBasis(list47 || [], '，') + '。'
      } else if (options.key === 'cellIdx7') {
        if (list47) {
          if (list47.length === 1) {
            // 单条时：
            let penaltyDescString = getDangerPenaltyDescWithoutPoint(list47 || [], '；')
            string = `${penaltyDescString}。`
          } else if (list47.length > 1) {
            // 多条时
            let penaltyDescString = getDangerPenaltyDescWithoutPoint(list47 || [], '；')
            let { descTypeStrings } = getDangerDes(list47 || [])
            let punishmentInfor = ''
            if (data.punishmentInfor) {
              punishmentInfor = data.punishmentInfor
            } else {
              if (dangerObject.penaltyDescFineTotle) {
                punishmentInfor = `合并罚款人民币${transformNumToChinese(dangerObject.penaltyDescFineTotle) || ''}（￥${dangerObject.penaltyDescFineTotle.toLocaleString() || ''}）` + (descTypeStrings || '')
              }
            }
            string = `分别${penaltyDescString}。${punishmentInfor}`
          }
        }
      }
      break
    case '49': // 行政执法决定法制审核意见书 监察
      let list49 = data && (data.dangerContentMerge ? newList : data.selectedDangerList)
      if (store.state.user.userType === 'supervision') {
        // 听证会报告书 监管
        if (options.key === 'cellIdx2') {
          let dangerString = getDangerContentWithoutPoint(list49 || [], '、')
          string = `${options.spellString.corpName}涉嫌${dangerString }违法违规案。`
        } 
      } else {
        // 行政执法决定法制审核意见书 监察
        if (options.key === 'cellIdx3') {
          let dangerString = getDangerContentWithoutPoint(list49 || [], '、')
          string = `${options.spellString.corpName}涉嫌${dangerString }违法违规案。`
        } else if (options.key === 'cellIdx5') {
          let dangerString2 = getDangerContentWithoutPoint(list49 || [], '；')
          string = `${options.spellString.dateString}，${options.spellString.groupName}对${options.spellString.corpName}进行现场检查时发现：${dangerString2}。以上行为${list49.length > 1 ? '分别' : ''}涉嫌违反了${dangerObject.illegalString || ''}的规定。依据《安全生产违法行为行政处罚办法》第二十三条的规定申请立案。`
        } else if (options.key === 'cellIdx6') {
          string = getDangerPenaltyBasis(list49 || [], '，') + '。'
        } else if (options.key === 'cellIdx7') {
          if (list49.length === 1) {
            // 单条时：
            let penaltyDescString = getDangerPenaltyDescWithoutPoint(list49 || [], '；')
            string = `${penaltyDescString}。`
          } else if (list49.length > 1) {
            // 多条时
            let penaltyDescString = getDangerPenaltyDescWithoutPoint(list49 || [], '；')
            let { descTypeStrings } = getDangerDes(list49 || [])
            let punishmentInfor = ''
            if (data.punishmentInfor) {
              punishmentInfor = data.punishmentInfor
            } else {
              if (dangerObject.penaltyDescFineTotle) {
                punishmentInfor = `合并罚款人民币${transformNumToChinese(dangerObject.penaltyDescFineTotle) || ''}（￥${dangerObject.penaltyDescFineTotle.toLocaleString() || ''}）` + (descTypeStrings || '')
              }
            }
            string = `分别${penaltyDescString}。${punishmentInfor}`
          }
        }
      }
      break
    case '48': // 集体讨论记录或停供电(停供民用爆炸物品)决定书
      if (store.state.user.userType === 'supervision') {
        // 监管为集体讨论记录
        if (options.key === 'cellIdx4') {
          let dangerString = getDangerContentWithoutPoint(data ? data.selectedDangerList : [], '、')
          string = `${options.spellString.corpName}涉嫌${dangerString}违法违规案。`
        }
      } else {
        if (options.key === 'cellIdx10') {
          // 监察为停供电(停供民用爆炸物品)决定书 
          let dangerString = getDangerPenaltyDescWithoutPoint(data ? data.selectedDangerList : [], '；')
          string = dangerString
        }
      }
      // string = `${options.spellString.corpName}涉嫌${dangerObject.dangerString || ''}案。`
      break
    case '56': // 监管停供电(停供民用爆炸物品)决定书
      if (store.state.user.userType === 'supervision') {
        if (options.key === 'cellIdx10') {
          let dangerString = getDangerPenaltyDescWithoutPoint(data ? data.selectedDangerList : [], '；')
          string = dangerString
        }
      }
      break
    case '35': // 移送案件呈报书
      if (options.key === 'cellIdx2') {
        let dangerString = getDangerContentWithoutPoint(data ? data.selectedDangerList : [], '、')
        string = `${options.spellString.corpName}涉嫌${dangerString}违法违规案。`
      } else if (options.key === 'cellIdx3') {
        let dangerString = getDangerContentWithoutPointHasIndex(data ? data.selectedDangerList : [], '；')
        string = `${options.spellString.dateString}我分局对${options.spellString.corpName}进行安全监察时，发现该矿：${dangerString}。经分局执法人员初步调查取证，认定该行为涉嫌违反了《矿产资源法》第十七条规定。`
      }
      // string = `${options.spellString.corpName}涉嫌${dangerObject.dangerString || ''}案。`
      break
    case '19': // 移送书
      if (options.key === 'cellIdx8') {
        let dangerString = getDangerContentWithoutPoint(data ? data.selectedDangerList : [], '、')
        string = `${dangerString}`
      }
      break
    case '20': // 涉嫌犯罪案件移送书
      if (options.key === 'cellIdx10') {
        let dangerString = getDangerContentWithoutPoint(data ? data.selectedDangerList : [], '、')
        string = `${options.spellString.corpName}涉嫌${dangerString}违法违规案`
      }
      break
    case '46': // 延长查封（扣押）期限决定书
      if (options.key === 'cellIdx18') {
        // 监察所用字段
        let dangerString = getDangerContentWithoutPoint(data ? data.selectedDangerList : [], '；')
        string = dangerString
      } else if (options.key === 'cellIdx17') {
        // 监管所用字段
        let dangerString = getDangerContentWithoutPoint(data ? data.selectedDangerList : [], '；')
        string = dangerString
      }
      break
    case '14': // 案件结案报告
      let list14 = data && (data.dangerContentMerge ? newList : data.selectedDangerList) || []
      if (options.key === 'cellIdx5') {
        // 违法行为
        let dangerString = getDangerContentWithoutPoint(list14, '、')
        string = `${dangerString}`
      } else if (options.key === 'cellIdx6') {
        // 规定
        string = `${list14.length > 1 ? '分别' : ''}违反了${dangerObject.illegalString}`
      } else if (options.key === 'cellIdx7') {
        // 依据
        string = `${list14.length > 1 ? '分别' : ''}依据${dangerObject.penaltyBasisString}`
      }else if (options.key === 'cellIdx8') {
        // 行政处罚
        if (list14.length === 1) {
          // 单条时 无序号
          let dangerString = getDangerPenaltyDescWithoutPoint(list14, '，')
          string = `给予${dangerString || 'XXX'}`
        } else if (list14.length > 1) {
          // 多条时，有序号
          let dangerString = getDangerPenaltyDescWithoutPointHasIndex(list14, '，')
          string = `分别给予${dangerString || 'XXX'}`
        }
      }
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
function getString(longString, string) {
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

function getPenaltyDescString(longString, string) {
  // 对比行政处罚决定，获取其中各标点符号分割出的数组，分别对比，如果罚款则合并，其他信息对比如果不同则加上
  let string1List = longString ? longString.split(/[,᠃.。，]/) : []
  let string2List = string ? string.split(/[,᠃.。，]/) : []
  let finString = ''
  let noFineList1 = [] // 没有罚款的字符串集合1
  let noFineList2 = [] // 没有罚款的字符串集合2
  let fine1 = 0 // 罚款的字符串集合1
  let fine2 = 0 // 罚款的字符串集合1
  let fine = ''
  // 整理第一个字符串
  for (let i = 0; i < string1List.length; i++) {
    let string1 = string1List[i]
    if (string1.includes('罚款') && 1 < string1.split('罚款').length && string1.split('罚款').length < 3) {
      // 当有罚款，并且罚款文字只有一个时，获取罚款中元的字数和金额
      let money1 = retrunGetMoney(string1)
      if (money1.count < 3) {
        // 如果金额超过不超过三个则获取金额
        fine1 = money1.money
      } else {
        // 如果超过三个则放入其他处罚中
        noFineList1.push(string1)
      }
    } else {
      // 没有罚款字符，或者多余一个时，放入其他处罚字符串中
      noFineList1.push(string1)
    }
  }
  // 整理第二个字符串
  for (let i = 0; i < string2List.length; i++) {
    let string2 = string2List[i]
    if (string2.includes('罚款') && 1 < string2.split('罚款').length && string2.split('罚款').length < 3) {
      // 当有罚款，并且罚款文字只有一个时，获取罚款中元的字数和金额
      let money2 = retrunGetMoney(string2)
      if (money2.count < 3) {
        // 如果金额超过不超过三个则获取金额
        fine2 = money2.money
      } else {
        // 如果超过三个则放入其他处罚中
        noFineList2.push(string2)
      }
    } else {
      // 没有罚款字符，或者多余一个时，放入其他处罚字符串中
      noFineList2.push(string2)
    }
  }
  // 合并罚款字符串
  if (fine1 && fine2) {
    // 如果两个都有值则合并罚款
    fine = `处罚款${(fine1 + fine2) / 10000}万元`
  } else {
    fine = fine1 ? `处罚款${(fine1) / 10000}万元` : `处罚款${(fine2) / 10000}万元`
  }
  // 合并其他处罚决定字串
  for (let i = 0; i < noFineList2.length; i++) {
    let string1 = noFineList2[i]
    let hasSame = false
    for (let j = 0; j < noFineList1.length; j++) {
      let string2 = noFineList1[j]
      if (string1 === string2) {
        hasSame = true
      }
      if (!finString.includes(string2)) {
        finString += string2 + '，'
      }
    }
    if (!hasSame) {
      if (!finString.includes(string1)) {
        finString += string1 + '，'
      }
    }
  }
  finString = finString.substring(0, finString.length - 1)
  finString = fine + '，' + finString
  return finString
}

function setDatetimeItem(data) {
  // 设置日期时间
  let string = ''
  return string
}

function setSelectItem(data, selectedData, options) {
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

function setSelectInputItem(data) {
  // 设置选择模板后修改输入组件值
  return data
}

function setSamplingForensicsTable(data, selectedData, options) {
  // 保存抽样取证清单
  if (options.page === '55') {
    // 鉴定委托书 文书 回传table
    return data.tableData
  } else {
    // 其他为整体回传即可
    return data
  }
}

function setVolumesMenuTable(data, selectedData, options) {
  // 保存档案卷内目录
  return data.tableData
}

function setUploadFile(data, selectedData, options) {
  // 保存档案卷内目录
  return data.tableData
}

function setSelectPersonItem(data, selectedData, options) {
  // 保存选择人员
  return data.personNamesString
}

function setDangerTextareaItem(data, selectedData, options) {
  return data
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
  setUploadFile,
  setSelectPersonItem,
  setDangerTextareaItem
}