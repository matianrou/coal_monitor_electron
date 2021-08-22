<template>
  <div>
    <div style="text-align:center;">
      <div
        style="background-image: url('static/image/login_bg.jpg');background-repeat:no-repeat;background-position:center center;width:1200px;height:720px;margin:0 auto;"
      >
        <div style="width:100%;height:15px;"></div>
        <table style="width:100%;">
          <tr>
            <td style="width:1140px;">&nbsp;</td>
            <td style="width:50px;text-align:center;">
              <img src="@/views/login/assets/btnPower.png" style="cursor: pointer;" @click="closeWin" />
            </td>
            <td style="width:10px;">&nbsp;</td>
          </tr>
        </table>
        <div style="width:100%;height:174px;"></div>
        <table style="width:100%;margin:0 auto;">
          <tr>
            <td style="width:790px;">&nbsp;</td>
            <td style="width:270px;">
              <!-- <div style="width:100%;height:50px;line-height:50px;"><input type="text" id="txtUserNo" style="width:100%;height:42px;border:0;" value="test" /></div> -->
              <div style="width:100%;height:50px;line-height:50px;">
                <input
                  type="text"
                  id="txtUserNo"
                  style="width:100%;height:42px;border:0;"
                  value=""
                />
              </div>
              <div style="width:100%;height:44px;">&nbsp;</div>
              <!-- <div style="width:100%;height:50px;line-height:50px;"><input type="password" id="txtPassword" style="width:100%;height:42px;border:0;" value="Cs_11223344" /></div> -->
              <div style="width:100%;height:50px;line-height:50px;">
                <input
                  type="password"
                  id="txtPassword"
                  style="width:100%;height:42px;border:0;"
                  value=""
                />
              </div>
              <div style="width:100%;height:15px;">&nbsp;</div>
              <table style="width:100%;">
                <tr>
                  <td style="width:50%;text-align:left;">
                    <input type="checkbox" />记住登录账号
                  </td>
                  <td style="width:50%;text-align:right">
                    <input type="checkbox" />离线使用
                  </td>
                </tr>
              </table>
              <div style="width:100%;height:30px;">&nbsp;</div>
              <div style="width:100%;height:45px;margin:0 auto;text-align:center;">
                <img
                  src="@/views/login/assets/login-btn-enter.jpg"
                  @click="doLogin"
                  style="border:0;cursor:pointer;"
                />
              </div>
            </td>
            <td style="width:125px;"></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { encry } from '@/utils/AesEncryptUtil'
import electronRequest from '@/utils/electronRequest'
import GoDB from "@/utils/godb.min.js";
export default {
  name: "Login",
  data() {
    return{
    }
  },
  methods: {
    closeWin () {
      // 关闭程序
      electronRequest('closeWindow')
    },
    doLogin () {
      //判断是否在线
      // if (!navigator.onLine) {
      // 	doAlert('网络不可用，请确认设备已经联网。');
      // 	return;
      // }
      //登录
      let userNo = document.getElementById("txtUserNo").value;
      let password = document.getElementById("txtPassword").value;
      password = encry(password);
      this.$http.post(`/login`, {
          username: userNo,
          password: password,
          mobileLogin: true,
        }).then(({data}) => {
          if (data.id) {
            let userId = data.id;
            let sessId = data.sessionid;
            this.$store.state.user.userId = userId
            this.$store.state.user.loginName = data.loginName
            this.$store.state.user.userName = data.name
            this.$store.state.user.userSessId = sessId
            //获取用户信息
            this.getUserInfo(userId, sessId);
            // 最大化窗口
            electronRequest('maxWindow');
            // 判断当前登录用户为监管或监察，分别进入不同的路由
            let path = 'CalmineMonitorElectronMain' // 监察路径
            // let path = 'CalmineSupervisionElectronMain' // 监管路径
            this.$router.replace({
              name: path
            })
          } else {
            this.$message.error(data.message)
          }
        }).catch(err => {
          console.log('登录请求失败：', err)
        })
    },
    async getUserInfo(userId, sessId) {
      await this.$http.get(`/local/user/info?__sid=${sessId}&userId=${userId}`).then(({ data }) => {
        this.$store.state.user.userGroupId = data.data.groupId
        this.$store.state.user.userAreaId = data.data.areaId
        this.$store.state.user.userGroupName = data.data.groupName
      }).catch(err => {
        console.log('获取用户信息失败：', err)
      })
      const db = new GoDB("CoalDB");
      // 个人执法编号
      let person = db.table("person")
      let userInfo = await person.find(item => item.no === userId)
      this.$store.state.user.userNumber = userInfo.userNumber
    }
  },
};
</script>

<style>
</style>
