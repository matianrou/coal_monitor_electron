// 用户仓库
export default {
  state: {
    userId: null, // 用户id
    loginName: null, // 用户登录名
    userName: null, // 用户姓名
    userSessId: null, // 用户sessionId，用于判断是否连接后台
    userGroupId: null, // 用户所在机构id
    userAreaId: null, // 用户所在地区id
    userGroupName: null, // 用户所在机构名称
    userNumber: null // 用户编号，用于文书编号生成
  }
}
