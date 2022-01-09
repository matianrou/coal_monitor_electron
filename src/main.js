import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import store from '@/store'
import './vue/directives'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/scss/index.scss'
import http from '@/utils/http'
import cloneDeep from 'lodash/cloneDeep'
import Print from '@/utils/print'
import cellLine from '@/components/cell-line'
import Contextmenu from "vue-contextmenujs"

Vue.use(Contextmenu);
Vue.use(ElementUI)
Vue.use(Print)
Vue.config.productionTip = false

Vue.component("cellLine", cellLine)

// 挂载全局
Vue.prototype.$http = http

// 全局前缀
window.SITE_CONFIG = {}
window.SITE_CONFIG['storeState'] = cloneDeep(store.state) // 保存整站vuex本地储存初始状态

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	components: {App},
	template: '<App/>'
});