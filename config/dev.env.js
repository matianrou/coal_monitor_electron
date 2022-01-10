'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  OPEN_PROXY: true, // 是否开启代理, 修改后需重启npm run dev
  BASE_URL: '"/api"',
  // FILE_URL: '"http://10.17.113.118:8081/mj"', // 用于文件下载
  FILE_URL: '"https://zhxx.chinamine-safety.gov.cn/mj"',
})
