import axios from 'axios'
import Cookies from 'js-cookie'
import router from '@/router'
import qs from 'qs'
import isPlainObject from 'lodash/isPlainObject'
import { clearLoginInfo } from '@/utils'

const http = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 1000 * 60,
  withCredentials: true
})
/**
 * 请求拦截
 */
http.interceptors.request.use(config => {
  // token
  config.headers['token'] = Cookies.get('token')
  if (config.method === 'get') {
    if (isPlainObject(config.params)) {
      config.params = {
        ...config.params
      }
      // config.paramsSerializer = function(params) {
      //   let dataParams = {}
      //   for (let key in params) {
      //     if (params[key]) {
      //       dataParams[key] = params[key]
      //     }
      //   }
      //   return qs.stringify(dataParams, { arrayFormat: 'repeat' });
      // }
    }
  } else if (config.method === 'post') {
    // 设置sendJson字段，如果data中发送sendJson,则直接发送data
    if (!config.data.sendJson) {
      config.headers['content-type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
      config.data = qs.stringify(config.data)
    } else {
      config.headers['content-type'] = 'application/json;charset=utf-8'
      config.data = config.data.data
    }
  }
  return config
}, error => {
  return Promise.reject(error)
})

/**
 * 响应拦截
 */
http.interceptors.response.use(response => {
  if (response.data && response.data.code === 401) { // 401, token失效
    clearLoginInfo()
    router.replace({ name: 'Login', params: {
      autoLogin: false
    }})
  }
  return response
}, error => {
  return Promise.reject(error)
})

export default http
