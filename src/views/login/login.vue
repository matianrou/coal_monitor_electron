<template>
  <div>
    <div style="text-align:center;">
      <div class="login-main">
        <div class="close-icon">
          <img src="@/views/login/assets/btnPower.png" style="cursor: pointer;" @click="closeWin" />
        </div>
        <div class="login-form-main">
          <div style="width: 300px; margin: 0 auto;">
            <div style="height: 40px;"></div>
            <div class="form-title">
              <span>用户登录</span>
            </div>
            <div style="height: 20px;"></div>
            <div class="form-content">
              <div class="form-content-item">
                <span class="item-label">USER NAME</span>
                <el-input v-model="dataForm.txtUserNo"></el-input>
              </div>
              <div class="form-content-item">
                <span class="item-label">PASSWORD</span>
                <el-input v-model="dataForm.txtPassword" type="password"></el-input>
              </div>
            </div>
            <div class="form-foot">
              <el-checkbox v-model="recordAccount">记住登录账号</el-checkbox>
              <!-- <el-checkbox v-model="offLine">离线使用</el-checkbox> -->
            </div>
            <div v-loading="loading.loginBtn" class="login-btn">
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
import { encry } from '@/utils/AesEncryptUtil'
import { electronRequest } from '@/utils/electronRequest'
import GoDB from "@/utils/godb.min.js";
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
    this.initAccount()
  },
  methods: {
    initAccount () {
      // 如果已记住登录账号则返回账号及密码
      if (localStorage.getItem('userAccount')) {
        this.dataForm = JSON.parse(localStorage.getItem('userAccount'))
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
      // if (!navigator.onLine) {
      // 	doAlert('网络不可用，请确认设备已经联网。');
      // 	return;
      // }
      // 如果已勾选记住登录账号：
      if (this.recordAccount) {
        // 保存当前账号至LocalStoreage
        localStorage.setItem('userAccount', JSON.stringify(this.dataForm))
      } else {
        if (localStorage.getItem('userAccount')) {
          localStorage.removeItem('userAccount')
        }
      }
      //登录
      let password = encry(this.dataForm.txtPassword);
      this.loading.loginBtn = true
      this.$http.post(`/login`, {
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
            // 最大化窗口
            electronRequest({msgName: 'window-max'});
            // 设置系统读取数据库
            this.$store.commit('changeState', {
              key: 'DBName',
              val: userId
            })
            // 判断当前登录用户为监管或监察
            await this.getUserType(userId, sessId)
            await this.getUserInfo(userId, sessId);
            this.$router.replace({
              name: 'CalmineElectronMain',
            })
          } else {
            this.$message.error(data.message)
          }
          this.loading.loginBtn = false
        }).catch(err => {
          console.log('登录请求失败：', err)
          this.loading.loginBtn = false
        })
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
            this.$router.replace({
              name: 'Login',
            })
          }
        }).catch(err => {
          this.$router.replace({
            name: 'Login',
          })
          console.log('获取用户为监管或监察失败：', err)
        })
    },
    async getUserInfo(userId, sessId) {
      let path = ''
      if (this.$store.state.user.userType === 'supervision') {
        path = '/sv'
      }
      await this.$http.get(`${path}/local/user/info?__sid=${sessId}&userId=${userId}`).then(({ data }) => {
        this.$store.state.user.userGroupId = data.data.groupId
        this.$store.state.user.userAreaId = data.data.areaId
        this.$store.state.user.userGroupName = data.data.groupName
        // 获取个人执法编号
        // 有网络时，直接使用接口返回的数据
        this.$store.state.user.userNumber = data.data.userNumber
      }).catch(err => {
        console.log('获取用户信息失败：', err)
      })
        // 获取个人执法编号
      // 当前没有网络的情况下，从本地库中获取：
      // let db = new GoDB(this.$store.state.DBName);
      // let person = db.table("person")
      // let userInfo = await person.find(item => item.no === userId)
      // this.$store.state.user.userNumber = userInfo ? userInfo.userNumber : ''
      // await db.close()
    },
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
    width: 420px;
    position: absolute;
    top: 89px;
    right: 82px;
    .form-title {
      height: 60px;
      display: flex;
      align-items: center;
      span {
        font-size: 19px;
        font-weight: 500;
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
