// 本地保存文书各方法

import store from "@/store"
import { getNowFormatTime } from "@/utils/date";

// 保存新创建的文书时文书号自增1
export async function savePaperNumber (db, docTypeNo) {
  // 获取当年文书号数据
  let date = new Date()
  let curYear = date.getFullYear()
  let personPaperNumber = db.table('personPaperNumber')
  let numberData = await personPaperNumber.find(item => item.year === (curYear + ''))
  let paperNumber = JSON.parse(numberData.paperNumber)
  let num = Number(paperNumber[`paper-${store.state.user.userType}-${docTypeNo}`]) + 1
  let threeNum = ''
  if (num < 10) {
    threeNum = '00' + String(num)
  } else if (num < 100) {
    threeNum = '0' + String(num)
  } else {
    threeNum = String(num)
  }
  numberData.paperNumber = JSON.stringify(Object.assign({}, paperNumber, {
    [`paper-${store.state.user.userType}-${docTypeNo}`]: threeNum
  }))
  numberData.updateDate = getNowFormatTime()
  await personPaperNumber.put(numberData)
}