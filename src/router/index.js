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
    {
      path: '/',
      name: 'Login',
      component: () => import('@/views/login/login')
    },
    {
      path: '/main',
      name: 'CalmineMonitorElectronMain',
      component: () => import('@/views/main'),
      children: [
        // // 资源下载
        {
          path: '/main/sourceDownload',
          name: 'SourceDownload',
          component: () => import('@/views/source-download/source-download')
        },
        // // 执法工作台
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
      ]
    }
  ]
})