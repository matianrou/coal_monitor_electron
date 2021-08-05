

function setInputItem (data) {
  // 处理简单文本数据
  return data
}

function setCheckItem (data, selectedData, options) {
  // 处理多选展示内容
  let string = ''
  options[selectedData.key].map(option => {
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
    string += addressContent + '，'
  }
  if (isUnder && underlist.length > 0) {
    underlist.map(under => {
      string += under + '，'
    })
  }
  if (isOther) {
    string += otherContent + '，'
  }
  return string.substring(0, string.length - 1)
}

function setCheckTableItem (data) {
  return data.tableData
}

function setDateItem (data) {
  return data
}

export {
  setInputItem,
  setCheckItem,
  setDaterangeItem,
  setTextareaItem,
  setCheckPositionItem,
  setCheckTableItem,
  setDateItem
}