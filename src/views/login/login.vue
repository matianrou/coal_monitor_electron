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
              <el-checkbox v-model="offLine">离线使用</el-checkbox>
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
import { schema, doDocDb } from '@/utils/downloadSource'
import { getNowFormatTime } from '@/utils/date'
import { clearLoginInfo } from '@/utils'
import { initDatabase, initMkdir } from '@/utils/databaseOperation'
import { sortbyAsc } from "@/utils/index";
import { saveToUpload } from '@/utils/savePaperData'
import GoDB from '@/utils/godb.min.js'
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
      if (this.offLine) {
        // 如果不在线则进行离线登录
        // 记录离线登录标记
        this.$store.commit('changeState', {
          key: 'onLine',
          val: !this.offLine
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
          this.$store.state.user.userNumber = userNumber || ''
          this.loading.loginBtn = false
          this.$message.warning('当前为离线，部分功能无法使用！')
          this.$router.replace({
            name: 'CalmineElectronMain',
          })
          // 最大化窗口
          electronRequest({msgName: 'window-max'});
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
            let sourceDownload = await this.getDatabase('sourceDownload')
            if (!sourceDownload || sourceDownload.length === 0) {
              // 如果没有下载过资源则跳转下载资源
              // 初始数据库
              await this.setDB(userId)
              this.$store.commit('changeState', {
                key: 'activeTab',
                val: 'SourceDownload'
              })
            } else {
              // 下载过资源进入页面，同时更新文书
              await this.getDatabase('sourceDownload')
              // 如果有网络则自动更新下载文书资源
              if (!this.offLine) {
                // 在线登录时询问是否要同步文书，如果是则云同步未上传文书，上传成功则更新下载文书资源，如果不成功则不下载
                // 如果选择不同步文书则不进行云同步且不进行下载
                let uploadList = await this.getDatabase('prepareUpload')
                if (uploadList.length > 0) {
                  this.$confirm('当前有未上传服务器的文书，是否同步至服务器？（如果同步则会上传文书同时下载最新文书，如果不同步则直接进入系统，需要您手动上传文书）', '提示', {
                    confirmButtonText: '同步',
                    cancelButtonText: '不同步',
                    dangerouslyUseHTMLString: true,
                    closeOnClickModal: false,
                    type: 'warning'
                  }).then(async () => {
                    await this.synchronizationData(uploadList, sourceDownload)
                  }).catch(err => {
                  })
                } else {
                  // 如果没有需要上传的文书则直接进行更新下载文书
                  await this.downloadDoc(sourceDownload)
                }
              }
            }
            this.$router.replace({
              name: 'CalmineElectronMain',
            })
            this.$message.success('在线登录成功！')
            // 最大化窗口
            electronRequest({msgName: 'window-max'});
          } else {
            this.$message.error(data.message)
          }
        }).catch(err => {
          this.$message.error('登录失败，请确保网络通畅！')
          console.log('登录请求失败：', err)
        })
      this.loading.loginBtn = false 
    },
    async getUserType (userId, sessId) {
      // 获取用户角色
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
            this.logoutHandle()
          }
        }).catch(err => {
          this.$message.error('获取用户信息失败，请重新登录！')
          this.logoutHandle()
          console.log('获取用户为监管或监察失败：', err)
        })
    },
    async getUserInfo(userId, sessId) {
      // 获取用户信息
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
          this.$store.state.user.userNumber = data.data.userNumber || ''
        } else {
          this.$message.error('获取用户信息失败，请重新登录！')
          this.logoutHandle()
        }
      }).catch(err => {
        this.$message.error('获取用户信息失败，请重新登录！')
        this.logoutHandle()
        console.log('获取用户信息失败：', err)
      })
    },
    logoutHandle () {
      // 退出返回登录页面
      clearLoginInfo()
      this.handleWindow('window-max')
      this.$router.replace({ name: 'Login', params: {
        autoLogin: false
      }})
    },
    async setDB (userId) {
      // 初始化数据库
      if (process.env.NODE_ENV === 'production') {
        // 创建数据库文件夹
        let isSuccess = await initMkdir(userId)
        if (isSuccess) {
          await this.setSourceDownload()
          // 将现有数据库中内容全部导入至文件中
          this.$message.info('请稍后，正在整合系统资源！')
          await initDatabase(userId)
        } else {
          this.$message.error('系统文件初始化失败，请重新打开系统再次尝试！')
        }
      } else {
        console.log('当前环境不支持electron')
        let db = new GoDB(userId, schema)
        await db.close()
        await this.setSourceDownload()
      } 
    },
    async setSourceDownload () {
      let initData = {
        id: 1,
        org: '未下载',
        person: '未下载',
        plan: '未下载',
        corp: '未下载',
        enterpriseList: '未下载',
        checkCate: '未下载',
        checkList: '未下载',
        dangerCate: '未下载',
        dangerList: '未下载',
        doc: '未下载',
      }
      await this.setDatabase('sourceDownload', [initData])
    },
    async handleUpdateTime() {
      // 更新文书下载时间未当前日期
      let sourceDownload = await this.getDatabase('sourceDownload')
      let updateTime = sourceDownload[0]
      updateTime.doc = getNowFormatTime()
      await this.updateDatabase('sourceDownload', [updateTime])
    },
    async synchronizationData (uploadList, sourceDownload) {
      // 同步数据：
      // 1.上传当前所有未云同步的数据
      uploadList.sort(sortbyAsc('createDate'))
      for (let i = 0; i < uploadList.length; i++) {
        let item = uploadList[i]
        if (item.operation === 'save') {
          // 执行上传保存操作
          await saveToUpload(item.paperId, false, (item.caseId ? item.caseId : 'opinion-suggestion'))
        } else if (item.operation === 'delete') {
          // 执行上传删除操作
          await this.paperDelete(item.paperId, (item.caseId ? item.caseId : 'opinion-suggestion'))
        }
      }
      // 判断是否全部云同步成功，如果还有数据说明未上传成功，则不执行更新文书操作
      let hasUploadPaper = await this.getDatabase('prepareUpload')
      // 2.所有全部上传成功后下载最新文书
      if (hasUploadPaper.length === 0) {
        await this.downloadDoc(sourceDownload)
      }
    },
    async downloadDoc (sourceDownload) {
      let updateTime = sourceDownload[0]
      let docUpdateTime = updateTime ? updateTime.doc : null
      if (docUpdateTime && docUpdateTime !== '未下载') {
        // 获取文书资源
        let userId = this.$store.state.user.userId;
        let userSessId = this.$store.state.user.userSessId;
        let path = this.$store.state.user.userType === 'supervision' ? '/sv' : ''
        let url = `${path}/local/jczf/getPageJczfByOfficeId?__sid=${userSessId}&userId=${userId}&updateTime=${docUpdateTime}&pageNo=0&pageSize=5000`
        await this.$http
          .get(`${url}`)
          .then(async (response) => {
            if (response.data.data) {
              let saveData = response.data.data
              await this.updateDatabase('wkCase', saveData.jczfCase, 'caseId')
              await this.updatePaperDatabase(null, saveData.paper, 'paperId')
              await this.updateDatabase('wkDanger', saveData.danger, 'dangerId')
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
