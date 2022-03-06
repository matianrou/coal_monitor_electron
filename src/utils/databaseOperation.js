import store from "@/store"
import { electronRequest } from '@/utils/electronRequest'
import GoDB from '@/utils/godb.min.js'
const NODE_ENV = process.env.NODE_ENV

// 一般文件获取、保存、更新、删除
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

export async function setDatabase (table, data) {
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

// 文书因会过多，额外按caseId单独存储文件夹及文件
// 以下为文书获取、保存、更新、删除
export async function getPaperDatabase (caseId = null) {
  // caseId检查活动id
  let userId = store.state.user.userId
  let dataList = []
  if (caseId) {
    if (!store.state.database[`wkPaper-${caseId}`]) {
      if (NODE_ENV === 'production') {
        // 发布环境：有electron环境
        let {request} = electronRequest({msgName: 'getDatabase', message: {filePath: `database/${userId}/wkPaper/${caseId}.txt`, fileName: caseId}, type: 'sendSync'})
        if (request.code === '200') {
          store.state.database[`wkPaper-${caseId}`] = JSON.parse(request.data)
          dataList = JSON.parse(request.data)
        } else {
          console.log('读取数据库失败！', request.data)
          dataList = []
        }
      } else {
        // 开发环境:
        let db = new GoDB(userId)
        let dbData = db.table(`wkPaper-${caseId}`)
        let dbList = []
        dbList = await dbData.findAll(item => item)
        await db.close()
        store.state.database[`wkPaper-${caseId}`] = dbList
        dataList = dbList
      }
    } else {
      // 深拷贝，以免使用时会改变数据库内容
      dataList = JSON.parse(JSON.stringify(store.state.database[`wkPaper-${caseId}`]))
    }
  } else {
    // 如果没有检查活动caseId，则获取所有文书
    if (!store.state.database[`wkPaper-all`]) {
      if (NODE_ENV === 'production') {
        // 发布环境：有electron环境
      } else {
        // 开发环境:
      }
    } else {
      dataList = JSON.parse(JSON.stringify(store.state.database[`wkPaper-all`]))
    }
  }
  // console.log('----------getDatabase----------：', dataList)
  return dataList
}

export async function setPaperDatabase (caseId = null, data) {
  // caseId检查活动id
  // data存储数据（整表所有数据）
  // 设置数据库信息
  // console.log('----------setDatabase----------：', data)
  if (data !== undefined && data !== null) {
    let dataJson = JSON.stringify(data)
    let userId = store.state.user.userId
    if (NODE_ENV === 'production') {
      // 发布环境：有electron环境
      if (caseId) {
        let {request} = electronRequest({msgName: 'setDatabase', message: {filePath: `database/${userId}/wkPaper/${caseId}.txt`, fileName: caseId, dataJson}, type: 'sendSync'})
        if (request.code === '200') {
          store.state.database[`wkPaper-${caseId}`] = data
        } else {
          console.log('存储数据库失败！', request.error)
        }
      } else {
        console.log('caseId必传')        
      }
    } else {
      // 开发环境：下载后直接存储store.state.database
      if (caseId) {
        let db = new GoDB(userId)
        let dbData = db.table(`wkPaper-${caseId}`)
        let dbList = await dbData.findAll(item => item)
        for (let i = 0; i < dbList.length; i++) {
          await dbData.delete({id: dbList[i].id})
        }
        await dbData.addMany(data)
        await db.close()
        store.state.database[`wkPaper-${caseId}`] = data
      } else {
        console.log('caseId必传')        
      }
    }
  }
}

export async function updatePaperDatabase (caseId = null, newData = []) {
  // 更新数据库
  // caseId检查活动id
  // newData 新数据列表 
  if (caseId) {
    let oldData = await getPaperDatabase(caseId) || []
    // 遍历数据
    for (let i = 0; i < newData.length; i++) {
      let isHas = false
      // 遍历寻找是否有历史数据
      for (let j = 0; j < oldData.length; j++) {
        if (oldData[j]['paperId'] === newData[i]['paperId']) {
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
    await setPaperDatabase(caseId, oldData)
  } else {
    // 如果没有caseId，则遍历修改
    // 优化更新逻辑：如果数据caseId相同，则一起更新，如果不同则分别更新
    let paperNewData = getPaperFileList(newData)
    // 遍历paperNewData更新
    for (let k = 0; k < paperNewData.length; k++) {
      await updatePaperDatabase(paperNewData[k].caseId, paperNewData[k].paperList)
    }
  }
}

export async function deletePaperDatabasePhysics (caseId = null, delData = []) {
  // 物理删除数据
  // caseId 检查活动id
  // delData 删除数据列表
  if (caseId) {
    let oldData = await getPaperDatabase(caseId)
    // 遍历数据删除
    for (let i = 0; i < delData.length; i++) {
      for (let j = 0; j < oldData.length; j++) {
        if (oldData[j]['paperId'] === delData[i]['paperId']) {
          oldData.splice(j, 1)
          break
        }
      }
    }
    // 重置数据库
    await setPaperDatabase(caseId, oldData)
  } else {
    let paperData = getPaperFileList(delData)
    // 遍历paperNewData删除
    for (k = 0; k < paperData.length; k++) {
      await deletePaperDatabasePhysics(paperData[k].caseId, paperData[k].paperList)
    }
  }
}

export async function initMkdir () {
  let success = true
  // 判断是否有wkPaper目录，如果有则直接创建下载文件，如果没有则继续判断是否有userId目录
  let wkPaperIsExist = getMkdir(`database/${userId}/wkPaper`)
  if (wkPaperIsExist) {
    await this.setSourceDownload()
  } else {
    // 判断是否有userId目录，如果有则直接创建wkPaper和下载记录文件，如果没有则继续判断是否有database目录
    let userIdIsExist = getMkdir(`database/${userId}`)
    if (userIdIsExist) {
      let mkUserWkPaperReq = setMkdir(`database/${userId}/wkPaper`)
      if (mkUserWkPaperReq.code === '200') {
        // 创建下载文件sourceDownload
        await this.setSourceDownload()
      } else {
        // 创建文件夹失败
        success = false
        console.log('创建文件夹失败：', mkUserWkPaperReq)  
      }
    } else {
      // 判断是否有database目录，如果有则直接创建userId、wkPaper和下载记录文件,如果没有则创建并创建userId、wkPaper和下载记录文件
      let databaseIsExist = getMkdir('database')
      if (databaseIsExist) {
        let mkUserIdReq = setMkdir(`database/${userId}`)
        if (mkUserIdReq.code === '200') {
          let mkUserWkPaperReq = setMkdir(`database/${userId}/wkPaper`)
          if (mkUserWkPaperReq.code === '200') {
            // 创建下载文件sourceDownload
            await this.setSourceDownload()
          } else {
            // 创建文件夹失败
            success = false
            console.log('创建文件夹失败：', mkUserWkPaperReq)  
          }
        } else {
          // 创建文件夹失败
          success = false
          console.log('创建文件夹失败：', mkUserIdReq)  
        }
      } else {
        let mkDatabaseReq = setMkdir('database')
        if (mkDatabaseReq) {
          let mkUserIdReq = setMkdir(`database/${userId}`)
          if (mkUserIdReq.code === '200') {
            let mkUserWkPaperReq = setMkdir(`database/${userId}/wkPaper`)
            if (mkUserWkPaperReq.code === '200') {
              // 创建下载文件sourceDownload
              await this.setSourceDownload()
            } else {
              // 创建文件夹失败
              success = false
              console.log('创建文件夹失败：', mkUserWkPaperReq)  
            }
          } else {
            // 创建文件夹失败
            success = false
            console.log('创建文件夹失败：', mkUserIdReq)  
          }
        } else {
          // 创建文件夹失败
          success = false
          console.log('创建文件夹失败：', mkDatabaseReq)  
        }
      }
    }
  }
  return success
}

function getMkdir (path) {
  // 获取文件夹是否存在
  let {request} = electronRequest({msgName: 'checkExistFile', message: {fileName: path}, type: 'sendSync'})
  return request
}

function setMkdir (path) {
  // 创建文件夹
  let {request} = electronRequest({msgName: 'mkdir', message: {mkdirName: path}, type: 'sendSync'})
  return request
}

function getPaperFileList (dataList) {
  // 获取所有要更新的文件，根据要更新的数据去分别更新
  let paperData = []
  if (dataList.length > 0) {
    paperData = [{
      caseId: dataList[0].caseId,
      paperList: [dataList[0]]
    }]
    for (let i = 1; i < dataList.length; i++) {
      let isPaperDataHas = false
      for (let j = 0; j < paperData.length; j++) {
        if (dataList[i].caseId === paperData[j].caseId) {
          paperData[j].paperList.push(dataList[i])
          isPaperDataHas = true
        }
      }
      if (!isPaperDataHas) {
        paperData.push({
          caseId: dataList[i].caseId,
          paperList: [dataList[i]]
        })
      }
    }
  }
  return paperData
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