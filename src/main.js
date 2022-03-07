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
import JSZipUtils from 'jszip-utils'
import pizzip from 'pizzip'
import fileSaver from 'file-saver'
import { 
	getDatabase, 
	setDatabase, 
	updateDatabase, 
	deleteDatabasePhysics, 
	getPaperDatabase, 
	updatePaperDatabase, 
	deletePaperDatabasePhysics
} from '@/utils/databaseOperation'

Vue.use(ElementUI)
Vue.use(Print)
Vue.config.productionTip = false

Vue.component("cellLine", cellLine)

// 挂载全局
Vue.prototype.$http = http
Vue.prototype.JSZipUtils = JSZipUtils
Vue.prototype.pizzip = pizzip
Vue.prototype.fileSaver = fileSaver
Vue.prototype.getDatabase = getDatabase
Vue.prototype.setDatabase = setDatabase
Vue.prototype.updateDatabase = updateDatabase
Vue.prototype.deleteDatabasePhysics = deleteDatabasePhysics
Vue.prototype.getPaperDatabase = getPaperDatabase
Vue.prototype.updatePaperDatabase = updatePaperDatabase
Vue.prototype.deletePaperDatabasePhysics = deletePaperDatabasePhysics

// 全局前缀
window.SITE_CONFIG = {}
window.SITE_CONFIG['storeState'] = cloneDeep(store.state) // 保存整站vuex本地储存初始状态

if (process.env.NODE_ENV === 'production') {
	const { ipcRenderer } = window.require('electron')
	Vue.prototype.ipcRenderer = ipcRenderer
} else {
	console.log('当前环境不支持electron')
}

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	components: {App},
	template: '<App/>'
});