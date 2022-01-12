<template>
  <div>
    <div style="text-align:center;">
      <div class="login-main">
        <div class="close-icon">
          <img src="@/views/login/assets/btnPower.png" style="cursor: pointer;" @click="closeWin" />
        </div>
        <div class="login-form-main">
          <div>
            <div style="height: 30px;"></div>
            <div class="form-title">
              <span>用户登录</span>
            </div>
          </div>
          <div v-loading="loading.loginBtn" element-loading-text="正在登录，请稍后..." style="width: 300px; margin: 0 auto;">
            <div style="height: 30px;"></div>
            <div class="form-content">
              <div class="form-content-item">
                <span class="item-label">用户名</span>
                <el-input v-model="dataForm.txtUserNo"></el-input>
              </div>
              <div class="form-content-item">
                <span class="item-label">密码</span>
                <el-input v-model="dataForm.txtPassword" type="password"></el-input>
              </div>
            </div>
            <div class="form-foot">
              <el-checkbox v-model="recordAccount">记住登录账号</el-checkbox>
              <!-- <el-checkbox v-model="offLine">离线使用</el-checkbox> -->
            </div>
            <div class="login-btn">
              <img
                src="@/views/login/assets/login-btn-enter.jpg"
                @click="doLogin"
                style="border:0;cursor:pointer;"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { encry, Encrypt, Decrypt } from '@/utils/AesEncryptUtil'
import { electronRequest } from '@/utils/electronRequest'
import GoDB from "@/utils/godb.min.js";
import { schema, doDocDb } from '@/utils/downloadSource'
import { getNowFormatTime } from '@/utils/date'
export default {
  name: "Login",
  data() {
    return {
      dataForm: {
        txtUserNo: null,
        txtPassword: null
      },
      recordAccount: false, // 是否记住登录账号
      offLine: false, // 是否离线使用
      loading: {
        loginBtn: false
      }
    }
  },
  created() {
    this.init()
  },
  methods: {
    init () {
      // 判断当前是否需要自动登录
      if (this.$route.params && this.$route.params.autoLogin === false) {
        // 不自动登录时返回保存的账号信息
        this.initAccount()
      } else {
        // 如果路由跳转时要求可以自动登录，则判断当前是否储存了账号密码，并恢复，然后直接执行登录操作
        if (localStorage.getItem('userAccount')) {
          this.initAccount()
          this.doLogin()
        } else {
          // 如果没有存储账号则保持在登录页面不做任何操作
        }
      }
    },
    initAccount () {
      // 如果已记住登录账号则返回账号及密码
      if (localStorage.getItem('userAccount')) {
        let {txtUserNo, txtPassword} = JSON.parse(localStorage.getItem('userAccount'))
        txtUserNo = Decrypt(txtUserNo)
        txtPassword = Decrypt(txtPassword)
        this.dataForm = {txtUserNo, txtPassword}
        this.recordAccount = true
      } else {
        this.recordAccount = false
      }
    },
    closeWin () {
      // 关闭程序
      electronRequest({msgName: 'window-quit'})
    },
    doLogin () {
      //判断是否在线
      if (!navigator.onLine) {
        // 如果不在线则进行离线登录
        // 记录离线登录标记
        this.$store.commit('changeState', {
          key: 'onLine',
          val: false
        })
        // 进行离线登录
        this.offLineLogin()
      } else {
        this.$store.commit('changeState', {
          key: 'onLine',
          val: true
        })
        // 进行在线登录
        this.onLineLogin()
      }
    },
    async offLineLogin () {
      // 离线登录
      if (localStorage.getItem('userAccount')) {
        // 判断当前账号和保存的账号密码是否一致，如果一致则恢复所有user信息并登录
        let {txtUserNo, txtPassword} = JSON.parse(localStorage.getItem('userAccount'))
        if (Decrypt(txtUserNo) === this.dataForm.txtUserNo && Decrypt(txtPassword) === this.dataForm.txtPassword) {
          this.loading.loginBtn = true
          // 获取已经存储的用户信息
          let {userId, loginName, userName, userGroupId, userAreaId, userGroupName, userNumber, userType} = JSON.parse(localStorage.getItem('userInfo')) 
          userId = Decrypt(userId)
          loginName = Decrypt(loginName)
          userName = Decrypt(userName)
          userGroupId = Decrypt(userGroupId)
          userAreaId = Decrypt(userAreaId)
          userGroupName = Decrypt(userGroupName)
          userNumber = Decrypt(userNumber)
          userType = Decrypt(userType)
          this.$store.state.user.userId = userId
          this.$store.state.user.loginName = loginName
          this.$store.state.user.userName = userName
          this.$store.commit('changeState', {
            key: 'DBName',
            val: userId
          })
          this.$store.state.user.userType = userType
          this.$store.state.user.userGroupId = userGroupId
          this.$store.state.user.userAreaId = userAreaId
          this.$store.state.user.userGroupName = userGroupName
          this.$store.state.user.userNumber = userNumber
          await this.setDB(userId)
          this.loading.loginBtn = false
          this.$message.warning('当前为离线，部分功能无法使用！')
          this.$router.replace({
            name: 'CalmineElectronMain',
          })
        } else {
          // 如果不一致则提示当前没有网络，切换账号需要在有网络的环境，提示登录失败
          this.$message.error('当前账号未存储，不可离线登录！')
        }
      } else {
        this.$message.error('当前账号未存储，不可离线登录！')
      }
    },
    async onLineLogin () {
      // 在线登录
      // 如果已勾选记住登录账号：
      if (this.recordAccount) {
        // 保存当前账号至LocalStoreage
        let {txtUserNo, txtPassword} = this.dataForm
        txtUserNo = Encrypt(txtUserNo)
        txtPassword = Encrypt(txtPassword)
        localStorage.setItem('userAccount', JSON.stringify({txtUserNo, txtPassword}))
      } else {
        if (localStorage.getItem('userAccount')) {
          localStorage.removeItem('userAccount')
        }
        if (localStorage.getItem('userInfo')) {
          localStorage.removeItem('userInfo')
        }
      }
      //登录
      let password = encry(this.dataForm.txtPassword);
      this.loading.loginBtn = true
      await this.$http.post(`/login`, {
          username: this.dataForm.txtUserNo,
          password,
          mobileLogin: true,
        }).then(async ({data}) => {
          if (data.id) {
            let userId = data.id;
            let sessId = data.sessionid;
            this.$store.state.user.userId = userId
            this.$store.state.user.loginName = data.loginName
            this.$store.state.user.userName = data.name
            this.$store.state.user.userSessId = sessId
            //获取用户信息
            // 设置系统读取数据库
            this.$store.commit('changeState', {
              key: 'DBName',
              val: userId
            })
            // 判断当前登录用户为监管或监察
            await this.getUserType(userId, sessId)
            await this.getUserInfo(userId, sessId)
            await this.setDB(userId)
            if (this.recordAccount) {
              // 保存所有用户数据至localStorage中，用于在离线操作时使用
              let {loginName, userName, userGroupId, userAreaId, userGroupName, userNumber, userType} = this.$store.state.user
              let userId1 = Encrypt(userId)
              loginName = Encrypt(loginName)
              userName = Encrypt(userName)
              userGroupId = Encrypt(userGroupId)
              userAreaId = Encrypt(userAreaId)
              userGroupName = Encrypt(userGroupName)
              userNumber = Encrypt(userNumber)
              userType = Encrypt(userType)
              localStorage.setItem('userInfo', JSON.stringify({userId: userId1, loginName, userName, userGroupId, userAreaId, userGroupName, userNumber, userType}))
            }
            this.$message.success('在线登录成功！')
            this.$router.replace({
              name: 'CalmineElectronMain',
            })
            // 最大化窗口
            electronRequest({msgName: 'window-max'});
          } else {
            this.$message.error(data.message)
          }
        }).catch(err => {
          console.log('登录请求失败：', err)
        })
      this.loading.loginBtn = false 
    },
    async getUserType (userId, sessId) {
      await this.$http.get(`/local/user/role?__sid=${sessId}&userId=${userId}`).then(({ data }) => {
          if(data.status === '200') {
            // 返回用户类别标识
            let userType = ''
            if (data.message === '1') {
              // 1为监察执法
              userType = 'monitor'
            } else if (data.message === '2') {
              // 2为监管执法
              userType = 'supervision'
            }
            this.$store.state.user.userType = userType
          } else {
            this.$message.error('获取用户信息失败，请重新登录！')
            this.$router.replace({name: 'Login', params: {
              autoLogin: false
            }})
          }
        }).catch(err => {
          this.$router.replace({name: 'Login', params: {
            autoLogin: false
          }})
          this.$message.error('获取用户信息失败，请重新登录！')
          console.log('获取用户为监管或监察失败：', err)
        })
    },
    async getUserInfo(userId, sessId) {
      let path = ''
      if (this.$store.state.user.userType === 'supervision') {
        path = '/sv'
      }
      await this.$http.get(`${path}/local/user/info?__sid=${sessId}&userId=${userId}`).then(({ data }) => {
        if (data && data.status === '200') {
          this.$store.state.user.userGroupId = data.data.groupId
          this.$store.state.user.userAreaId = data.data.areaId
          this.$store.state.user.userGroupName = data.data.groupName
          // 获取个人执法编号
          // 有网络时，直接使用接口返回的数据
          this.$store.state.user.userNumber = data.data.userNumber
        } else {
          this.$message.error('获取用户信息失败，请重新登录！')
          this.$router.replace({name: 'Login', params: {
            autoLogin: false
          }})
        }
      }).catch(err => {
        this.$router.replace({name: 'Login', params: {
          autoLogin: false
        }})
        this.$message.error('获取用户信息失败，请重新登录！')
        console.log('获取用户信息失败：', err)
      })
    },
    async setDB (userId) {
      // 校验是否存在数据库
      // 以下注释的为原生indexDB校验方法，可实现校验数据库创建数据库表
      // 此方式只是没有做好同步的操作，只能将路由跳转放进onupgradeneeded和onsuccess方法的回调中才能解决判断后再跳转页面，
      // 所以使用此方法时需删除调用此方法的function中的路由跳转语句
      // onupgradeneeded为创建数据库时调用方法
      // onsuccess为一般打开数据库的回调
      // const request = window.indexedDB.open(userId)
      // let that = this
      // request.onsuccess = function (event) {
      //   request.result.close()
      //   that.$router.replace({
      //     name: 'CalmineElectronMain',
      //   })
      // }
      // request.onupgradeneeded = async function (event) {
      //   let version = event.oldVersion
      //   await event.target.result.close()
      //   if (version === 0) {
      //     let db = new GoDB(userId, schema)
      //     await db.close()
      //     that.$store.commit('changeState', {
      //       key: 'activeTab',
      //       val: 'SourceDownload'
      //     })
      //     that.$message.warning('初次使用系统，请先下载全部资源后再使用！')
      //     that.$router.replace({
      //       name: 'CalmineElectronMain',
      //     })
      //   }
      // };
      // 以上方法保留的基础上新增判断土方法：
      // 读取当前是否已进行过资源下载，如果没有则表示未下载过资源，则提示需要下载资源，同时创建数据库表
      let db1 = new GoDB(userId);
      let sourceDownload = db1.table('sourceDownload')
      let downloadData = await sourceDownload.find(item => item)
      await db1.close()
      if (!downloadData) {
        // 创建数据库，建表
        let db2 = new GoDB(userId, schema)
        await db2.close()
        // 进入下载页面
        this.$store.commit('changeState', {
          key: 'activeTab',
          val: 'SourceDownload'
        })
        this.$message.warning('当前未下载任何资源，请先下载全部资源后再使用！')
      } else {
        // 如果有网络则自动更新下载文书资源
        if (navigator.onLine) {
          let userId = this.$store.state.user.userId;
          let userSessId = this.$store.state.user.userSessId;
          let path = this.$store.state.user.userType === 'supervision' ? '/sv' : ''
          let url = `${path}/local/jczf/getPageJczfByOfficeId?__sid=${userSessId}&userId=${userId}`
          await this.$http
            .get(`${url}`)
            .then(async (response) => {
              if (response.data.data) {
                await doDocDb('doc', response.data.data);
                // 修改更新日期
                await this.handleUpdateTime()
              }
            })
            .catch((err) => {
              console.log("下载文书失败：", err);
            })
        }
      }
    },
    async handleUpdateTime() {
      // 更新文书下载时间未当前日期
      let db = new GoDB(this.$store.state.user.userId);
      let sourceDownload = db.table('sourceDownload')
      let updateTime = await sourceDownload.find(item => item)
      updateTime.doc = getNowFormatTime()
      await sourceDownload.put(updateTime)
      await db.close()
    }
  },
};
</script>

<style lang="scss" scoped>
.login-main {
  background: url('~@/assets/img/login_bg.png') no-repeat;
  background-position: center center;
  width: 1200px;
  height: 720px;
  margin: 0 auto;
  position: relative;
  .close-icon {
    position: absolute;
    top: 10px;
    right: 10px;
  }
  .login-form-main {
    height: 495px;
    width: 419px;
    position: absolute;
    top: 89px;
    right: 82px;
    .form-title {
      height: 60px;
      display: flex;
      align-items: center;
      background: rgb(102, 177, 255);
      justify-content: center;
      letter-spacing: 0.5rem;
      span {
        font-size: 25px;
        font-weight: 500;
        color: #fff;
      }
    }
    .form-content {
      .form-content-item {
        height: 65px;
        width: 300px;
        position: relative;
        border: 1px solid #EBEEF5;
        margin-bottom: 20px;
        display: flex;
        .item-label {
          position: absolute;
          top: -11px;
          left: 7px;
          background: #fff;
          display: inline-block;
          padding: 0 3px;
        }
        /deep/ .el-input {
          width: 100%;
          display: flex;
          align-items: flex-end;
          justify-content: center;
        }
        /deep/ .el-input__inner {
          background: #fff;
          border: none;
          border-bottom: 1px solid #DCDFE6;
          width: 210px;
          margin-bottom: 10px;
        }
      }
    }
    .form-foot {
      margin-bottom: 30px;
      /deep/ .el-checkbox__label {
        font-size: 16px;
      }
    }
  }
}

</style>
