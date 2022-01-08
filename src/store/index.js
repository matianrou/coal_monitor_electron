import Vue from 'vue'
import Vuex from 'vuex'
import cloneDeep from 'lodash/cloneDeep'
import user from './modules/user'
import dictionary from './modules/dictionary'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  state: {
    activeTab: null, // 当前激活的总体tab页签
    DBName: null, // 当前使用的数据库名称
    curCase: null, // 当前选中的检查活动的活动数据
    selectedCaseOption: null, // 当前选择的检查活动日期（年月）、机构、类型（计划或其他）
    unreceivedPaper: [], // 当前未接收的文书信息
    sendPaperTabData: null, // 保留当前发送文书页面已选煤矿和接收人数据
    onLine: false, // 是否在线
  },
  getters: {
  },
  modules: {
    user,
    dictionary
  },
  mutations: {
    // 重置vuex本地储存状态
    resetStore (state) {
      Object.keys(state).forEach((key) => {
        state[key] = cloneDeep(window.SITE_CONFIG['storeState'][key])
      })
      sessionStorage.setItem('state', JSON.stringify(state))
    },
    changeState(state, data) {
      state[data.key] = data.val
    },
  }
})
