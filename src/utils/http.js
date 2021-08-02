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
    config.data = qs.stringify(config.data)
  }
  config.headers['content-type'] = 'application/x-www-form-urlencoded'
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
    router.replace({ name: 'Login' })
  }
  return response
}, error => {
  return Promise.reject(error)
})

export default http
