const NODE_ENV = process.env.NODE_ENV
// 与electron的交互通信：发送信息
export function electronRequest ({msgName, message, type = 'send'}) {
  let requestData = null
  if (NODE_ENV === 'production') {
    const { ipcRenderer } = window.require('electron')
    if (type === 'send') {
      // send表示发送数据
      console.log('向主进程发送数据')
      ipcRenderer.send(msgName, message)
    } else if (type === 'sendSync') {
      // 向主进程发送同步消息
      ipcRenderer.sendSync(msgName, message)
    }
  } else {
    console.log('当前环境不支持electron')
  }
  return { request: requestData }
}
