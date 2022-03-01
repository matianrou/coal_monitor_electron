import store from "@/store"
import { electronRequest } from '@/utils/electronRequest'
import GoDB from '@/utils/godb.min.js'
const NODE_ENV = process.env.NODE_ENV
export async function getDatabase (table) {
  // 获取数据库信息
  let userId = store.state.user.userId
  let dataList = []
  if (!store.state.database[table]) {
    if (NODE_ENV === 'production') {
      // 发布环境：有electron环境
      let {request} = electronRequest({msgName: 'getDatabase', message: {filePath: `database/${userId}/${table}.txt`, fileName: table}, type: 'sendSync'})
      if (request.code === '200') {
        store.state.database[request.fileName] = JSON.parse(request.data)
        dataList = JSON.parse(request.data)
      } else {
        console.log('读取数据库失败！', request.data)
      }
    } else {
      // 开发环境:
      // 每次下载
      let db = new GoDB(userId)
      let dbData = db.table(table)
      let dbList = await dbData.findAll(item => item)
      await db.close()
      store.state.database[table] = dbList
      dataList = dbList
    }
  } else {
    dataList = store.state.database[table]
  }
  return dataList
}

export async function setDatabase (table, data, callBackFunction = function () {}) {
  // 设置数据库信息
  let dataJson = JSON.stringify(data)
  let userId = store.state.user.userId
  if (NODE_ENV === 'production') {
    // 发布环境：有electron环境
    let {request} = electronRequest({msgName: 'setDatabase', message: {filePath: `database/${userId}/${table}.txt`, fileName: table, dataJson}, type: 'sendSync'})
    if (request.code === '200') {
      store.state.database[table] = data
      callBackFunction()
    } else {
      console.log('存储数据库失败！', request.error)
    }
  } else {
    // 开发环境：下载后直接存储store.state.database
    let db = new GoDB(userId)
    let dbData = db.table(table)
    let dbList = await dbData.findAll(item => item)
    for (let i = 0; i < dbList.length; i++) {
      await dbData.delete({id: dbList[i].id})
    }
    await dbData.addMany(data)
    await db.close()
    store.state.database[table] = data
    callBackFunction()
  }
}

export function getContrastData (newData = [], oldData = [], key) {
  // 遍历对比新数据和旧的数据
  for (let i = 0; i < newData.length; i++) {
    let newItem = newData[i]
    let isHas = false
    for (let j = 0; j < oldData.length; j++) {
      let oldItem = oldData[j]
      if (newItem[key] === oldItem[key]) {
        // 如果有相同数据则覆盖保存
        oldItem = newItem
        isHas = true
      } 
    }
    if (!isHas) {
      // 如果没有相同数据则新增
      oldData.push(newItem)
    }
    // 旧数据保持不变
    return oldData
  }
}