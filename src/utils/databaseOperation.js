import store from "@/store"
import { electronRequest } from '@/utils/electronRequest'
import GoDB from '@/utils/godb.min.js'
const NODE_ENV = process.env.NODE_ENV
export async function getDatabase (table) {
  // table库表名
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
        dataList = []
      }
    } else {
      // 开发环境:
      // 每次下载
      let db = new GoDB(userId)
      let dbData = db.table(table)
      let dbList = []
      dbList = await dbData.findAll(item => item)
      await db.close()
      store.state.database[table] = dbList
      dataList = dbList
    }
  } else {
    // 深拷贝，以免使用时会改变数据库内容
    dataList = JSON.parse(JSON.stringify(store.state.database[table]))
  }
  // console.log('----------getDatabase----------：', dataList)
  return dataList
}

export async function setDatabase (table, data, tableKey = 'id') {
  // table数据库表名
  // data存储数据（整表所有数据）
  // 设置数据库信息
    // console.log('----------setDatabase----------：', data)
    if (data !== undefined && data !== null) {
    let dataJson = JSON.stringify(data)
    let userId = store.state.user.userId
    if (NODE_ENV === 'production') {
      // 发布环境：有electron环境
      let {request} = electronRequest({msgName: 'setDatabase', message: {filePath: `database/${userId}/${table}.txt`, fileName: table, dataJson}, type: 'sendSync'})
      if (request.code === '200') {
        store.state.database[table] = data
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
    }
  }
}

export async function updateDatabase (table, newData = [], tableKey = 'id') {
  // 更新数据库
  // table 数据库表名
  // newData 新数据列表 
  // tableKey 表更新索引字段(唯一值)
  let oldData = await getDatabase(table) || []
  // 遍历数据
  for (let i = 0; i < newData.length; i++) {
    let isHas = false
    // 遍历寻找是否有历史数据
    for (let j = 0; j < oldData.length; j++) {
      if (oldData[j][tableKey] === newData[i][tableKey]) {
        // 如果有相同的数据则更新
        oldData[j] = Object.assign({}, oldData[j], newData[i])
        isHas = true
      }
    }
    if (!isHas) {
      oldData.push(newData[i])
    }
  }
  // 重置数据库
  await setDatabase(table, oldData, tableKey)
}

export async function deleteDatabasePhysics (table, delData = [], tableKey = 'id') {
  // 物理删除数据
  // table 数据库表名
  // delData 删除数据列表
  // tableKey 表更新索引字段(唯一值)
  let oldData = await getDatabase(table)
  // 遍历数据删除
  for (let i = 0; i < delData.length; i++) {
    for (let j = 0; j < oldData.length; j++) {
      if (oldData[j][tableKey] === delData[i][tableKey]) {
        oldData.splice(j, 1)
        break
      }
    }
  }
  // 重置数据库
  await setDatabase(table, oldData)
}

export function getContrastData (newData = [], oldData = [], key) {
  // 暂不用 遍历对比新数据和旧的数据
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
