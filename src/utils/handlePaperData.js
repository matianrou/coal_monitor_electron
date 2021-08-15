// 各文书页面使用的保存各种类型填写数据公用方法

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
  let stringList = []
  if (options && options.cellIdx7 && options.cellIdx7.page === '2') {
    // 现场处理决定书，特殊处理展示字段： 违法行为描述+现场处理决定
    data.tableData.map((item, index) => {
      stringList.push(`${(index + 1)}. ${item.itemContent}${item.onsiteDesc}`)
    })
  } else {
    // 其他的只返回违法行为描述list形式
    data.tableData.map((item, index) => {
      stringList.push(`${index + 1}. ${item.itemContent}`)
    })
  }
  return stringList
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
  setSelectInputItem
}