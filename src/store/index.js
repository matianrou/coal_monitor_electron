import Vue from 'vue'
import Vuex from 'vuex'
import cloneDeep from 'lodash/cloneDeep'
import user from './modules/user'
import dictionary from './modules/dictionary'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  state: {
    activeTab: null,
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
