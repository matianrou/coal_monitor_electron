import Vue from 'vue'
import Router from 'vue-router'


//获取原型对象上的push函数
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject){
    return originalPush.call(this, location, onResolve, onReject)
  }
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    // 登录路由
    {
      path: '/',
      name: 'Login',
      component: () => import('@/views/login/login')
    },
    {
      path: '/main',
      name: 'CalmineElectronMain',
      component: () => import('@/views/main'),
      children: [
        // 资源下载
        {
          path: '/main/sourceDownload',
          name: 'SourceDownload',
          component: () => import('@/views/source-download/source-download')
        },
        // 执法工作台
        {
          path: '/main/MakeLawWrit',
          name: 'MakeLawWrit',
          component: () => import('@/views/make-law-writ/make-law-writ')
        },
        // 文书管理
        {
          path: '/main/writManagement',
          name: 'WritManagement',
          component: () => import('@/views/writ-management/writ-management')
        },
        // 文书查看
        {
          path: '/main/WritCheck',
          name: 'WritCheck',
          component: () => import('@/views/writ-check/writ-check')
        },
        // 意见建议书
        {
          path: '/main/opinionSuggestion',
          name: 'opinionSuggestion',
          component: () => import('@/views/opinion-suggestion/opinion-suggestion')
        },
        // 发送文书
        {
          path: '/main/sendPaper',
          name: 'sendPaper',
          component: () => import('@/views/send-paper/send-paper')
        },
      ]
    }
  ]
})