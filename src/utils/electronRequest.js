const NODE_ENV = process.env.NODE_ENV
// 与electron的交互通信：发送信息
export default function electronRequest (message) {
  if (NODE_ENV === 'production') {
    const { ipcRenderer } = window.require('electron')
    ipcRenderer.send(message)
  } else {
    console.log('当前环境不支持electron')
  }
}