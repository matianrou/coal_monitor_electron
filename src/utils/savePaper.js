// 本地保存文书各方法

import store from "@/store"
import { getNowFormatTime } from "@/utils/date";
import { getDatabase, updateDatabase } from '@/utils/databaseOperation'

// // 保存新创建的文书时文书号自增1
// export async function savePaperNumber (docTypeNo) {
//   // 获取当年文书号数据
//   let date = new Date()
//   let curYear = date.getFullYear() + ''
//   let personPaperNumber = await getDatabase('personPaperNumber')
//   let numberData = personPaperNumber.find(item => item.year === curYear)
//   let paperNumber = JSON.parse(numberData.paperNumber)
//   let num = Number(paperNumber[`paper-${store.state.user.userType}-${docTypeNo}`]) + 1
//   let threeNum = ''
//   if (num < 10) {
//     threeNum = '00' + String(num)
//   } else if (num < 100) {
//     threeNum = '0' + String(num)
//   } else {
//     threeNum = String(num)
//   }
//   paperNumber[`paper-${store.state.user.userType}-${docTypeNo}`] = threeNum
//   numberData.paperNumber = JSON.stringify(paperNumber)
//   numberData.updateDate = getNowFormatTime()
//   await updateDatabase('personPaperNumber', [numberData])
// }

// 离线时保存新创建的文书时文书号自增1
export async function savePaperNumber (docTypeNo) {
  // 获取当年文书号数据
  let personPaperNumber = await getDatabase('personPaperNumber')
  let numData = personPaperNumber.find(item => item.paperType === docTypeNo)
  numData.paperCount += 1
  await updateDatabase('personPaperNumber', [numData], 'paperType')
}