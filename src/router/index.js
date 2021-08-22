import Vue from 'vue'
import Router from 'vue-router'


//获取原型对象上的push函数
const originalPush = Router.prototype.push
//修改原型对象中的push方法
Router.prototype.push = function push(location) {
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
    // 监察路由
    {
      path: '/monitorMain',
      name: 'CalmineMonitorElectronMain',
      component: () => import('@/views/monitor/main'),
      children: [
        // 资源下载
        {
          path: '/main/sourceDownload',
          name: 'MonitorSourceDownload',
          component: () => import('@/views/monitor/source-download/source-download')
        },
        // 执法工作台
        {
          path: '/main/MakeLawWrit',
          name: 'MonitorMakeLawWrit',
          component: () => import('@/views/monitor/make-law-writ/make-law-writ')
        },
        // 文书管理
        {
          path: '/main/writManagement',
          name: 'MonitorWritManagement',
          component: () => import('@/views/monitor/writ-management/writ-management')
        },
      ]
    },
    // 监管路由
    {
      path: '/supervisionMain',
      name: 'CalmineSupervisionElectronMain',
      component: () => import('@/views/supervision/main'),
      children: [
        // 资源下载
        {
          path: '/main/sourceDownload',
          name: 'SupervisionSourceDownload',
          component: () => import('@/views/supervision/source-download/source-download')
        },
        // 执法工作台
        {
          path: '/main/MakeLawWrit',
          name: 'SupervisionMakeLawWrit',
          component: () => import('@/views/supervision/make-law-writ/make-law-writ')
        },
        // 文书管理
        {
          path: '/main/writManagement',
          name: 'SupervisionWritManagement',
          component: () => import('@/views/supervision/writ-management/writ-management')
        },
      ]
    },
  ]
})