<!-- 检查活动 弹窗 -->
<template>
  <el-dialog
    title="检查活动拉取"
    :close-on-click-modal="false"
    append-to-body
    :visible="visible"
    width="800px"
    top="5vh"
    @close="close">
    <div class="user-tree" v-loading="loading.main">
      <div class="selected-all-users">
        <!-- 用户筛选 -->
        <el-input
          v-model.trim="dataForm.name"
          placeholder="按姓名筛选"
          size="small"
          style="width: 150px;margin-right: 10px;"
          clearable
          @change="handleChangeUser">
        </el-input>
        <!-- 是否显示全省用户 -->
        <el-checkbox v-model="allUser" @change="handleChangeUser">是否显示全省用户</el-checkbox>
      </div>
      <div class="content-div-main">
        <div class="content-div-left" :style="{ width: divWidth + 'px' }">
          <!-- 左侧 用户列表 -->
          <div
            v-for="(item, index) in userList"
            :key="index"
            class="user-list-row-main">
            <div :class="item.active ? 'active-item user-list-row' : 'user-list-row'" @click="handleSelectUser(item)">
              <img src="@/components/assets/image/customer_list_fill.png" />
              <span>{{ `[${item.officeName}] ` }}</span>
              <span style="color: #303133;">{{ item.name }}</span>
              <span>{{ item.userNumber ? '（号：' + item.userNumber + '）' : '' }}</span>
            </div>
          </div>
        </div>
        <adjustable-div
          @width-change="widthChange">
        </adjustable-div>
        <div class="content-div-right" v-loading="loading.right">
          <!-- 右侧 用户的检查列表 -->
          <el-radio-group
            v-if="caseList.length > 0"
            v-model="selcetedCaseId">
            <div
              v-for="(item, index) in caseList"
              :key="index"
              class="case-list-item"
            >
              <el-radio 
                style="font-size: 18px;"
                :label="item.caseId">
                {{`${item.corpName} [${item.createDate.split(' ')[0]}]`}}
              </el-radio>
            </div>
          </el-radio-group>
          <div v-else style="text-align: center;">
            <span>暂无数据</span>
          </div>
        </div>
      </div>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button :loading="loading.main" @click="close">取消</el-button>
      <el-button :loading="loading.main" type="primary" @click="confirm">拉取</el-button>
    </span>
  </el-dialog>
</template>

<script>
  import adjustableDiv from '@/components/adjustable-div'
  import { doDocDb } from "@/utils/downloadSource"
  import { sortbyDes } from '@/utils/index'
  export default {
    name: 'CasePull',
    props: {
      visible: {
        type: Boolean,
        default: false
      },
    },
    components: {
      adjustableDiv
    },
    data () {
      return {
        loading: {
          main: false,
          right: false
        },
        allUser: false, // 是否显示全省用户
        divWidth: 300, // 用户部分div基础宽度
        userList: [],
        selectedUser: {}, // 点击用户列表选择的用户
        caseList: [], // 选择的用户的检查活动列表
        selcetedCaseId: null, // 单选的需要拉取的个人的检查活动
        dataForm: {
          name: null, // 按姓名筛选
        }
      }
    },
    created () {
      this.init()
    },
    methods: {
      async init () {
        // 获取用户列表
        await this.getUsers()
      },
      async getUsers () {
        this.loading.main = true
        let person = await this.getDatabase("person") // 用户
        let personList = []
        let userId = this.$store.state.user.userId
        let userGroupId = this.$store.state.user.userGroupId
        if (this.allUser) {
          // 查询全省用户，排除自己
          // 通过userGroupId查询机构表，获取全省所有机构，遍历用户表将机构中的人员筛选出来
          if (this.$store.state.user.userType === 'supervision') {
            // 监管时 四级机构，不筛选type类型
            let orgInfo = await this.getDatabase('org')
            let orgData = orgInfo.find(item => item.no === userGroupId
              && item.delFlag !== "1")
            let orgList = []
            if (orgData.grade === '1') {
              // 国家局
              personList = JSON.parse(JSON.stringify(person.filter((item) => {
                return item.delFlag === "0" && item.no !== userId;
              }) || []))
            } else if (orgData.grade === '2') {
              // 省级
              // 获取所有parentId为当前userGroupId的机构
              let orgChildrenList = JSON.parse(JSON.stringify(orgInfo.filter(item => item.parentId === userGroupId
                && item.delFlag !== "1") || []))
              orgList = [...[orgData], ...orgChildrenList]
            } else if (orgData.grade === '3') {
              // 市级
              // 获取当前机构的省级用户
              let parentOrg = orgInfo.find(item => item.no === orgData.parentId
                && item.delFlag !== "1")
              // 获取所有parentId为当前parentOrg.no的机构
              let orgChildrenList = JSON.parse(JSON.stringify(orgInfo.filter(item => item.parentId === parentOrg.no
                && item.delFlag !== "1") || []))
              orgList = [...[parentOrg], ...orgChildrenList]
            } else if (orgData.grade === '4') {
              // 查询市级，再查询省级
              let parentOrg = orgInfo.find(item => item.no === orgData.parentId
                && item.delFlag !== "1")
              // 获取市级机构的省级用户
              let provinceOrg = orgInfo.find(item => item.no === parentOrg.parentId
                && item.delFlag !== "1")
              // 获取所有parentId为当前parentOrg.no的机构
              let orgChildrenList = JSON.parse(JSON.stringify(orgInfo.filter(item => item.parentId === provinceOrg.no
                && item.delFlag !== "1") || []))
              orgList = [...[provinceOrg], ...orgChildrenList]
            }
            if (orgList.length > 0) {
              // 省级和市区县级根据机构获取人员
              for (let i = 0; i < orgList.length; i++) {
                let curPersons = JSON.parse(JSON.stringify(person.filter(item => item.delFlag === "0" && item.officeId === orgList[i].no && item.no !== userId) || []))
                personList = [...personList, ...curPersons]
              }
            }
          } else {
            // 监察时 三级机构，同时筛选Type，2.16去掉过滤
            let orgInfo = await this.getDatabase('org')
            let orgData = orgInfo.find(item => item.no === userGroupId
              // && (item.type === '3' || item.type === '4' || item.type === '11') 
              && item.delFlag !== "1")
            let orgList = []
            if (orgData.grade === '2') {
              // 省级
              // 获取所有parentId为当前userGroupId的机构
              let orgChildrenList = JSON.parse(JSON.stringify(orgInfo.filter(item => item.parentId === userGroupId
                // && (item.type === '3' || item.type === '4' || item.type === '11') 
                && item.delFlag !== "1") || []))
              orgList = [...[orgData], ...orgChildrenList]
            } else if (orgData.grade === '3') {
              // 市区县级
              // 获取当前机构的省级用户
              let parentOrg = orgInfo.find(item => item.no === orgData.parentId
                // && (item.type === '3' || item.type === '4' || item.type === '11') 
                && item.delFlag !== "1")
              // 获取所有parentId为当前parentOrg.no的机构
              let orgChildrenList = JSON.parse(JSON.stringify(orgInfo.filter(item => item.parentId === parentOrg.no
                // && (item.type === '3' || item.type === '4' || item.type === '11') 
                && item.delFlag !== "1") || []))
              orgList = [...[parentOrg], ...orgChildrenList]
            } else {
              // 国家局
              personList = JSON.parse(JSON.stringify(person.filter((item) => {
                return item.delFlag === "0" && item.no !== userId;
              }) || []))
            }
            if (orgList.length > 0) {
              // 省级和市区县级根据机构获取人员
              for (let i = 0; i < orgList.length; i++) {
                let curPersons = JSON.parse(JSON.stringify(person.filter(item => item.delFlag === "0" && item.officeId === orgList[i].no && item.no !== userId) || []))
                personList = [...personList, ...curPersons]
              }
            }
          }
        } else {
          // 查询当前用户当前机构的所有用户，排除自己
          personList = JSON.parse(JSON.stringify(person.filter((item) => {
            return item.delFlag === "0" && item.officeId === userGroupId && item.no !== userId;
          }) || []))
        }
        // 按姓名筛选
        if (this.dataForm.name) {
          let filterPersonList = []
          for (let i = 0; i < personList.length; i++) {
            let item = personList[i]
            if (item.name.includes(this.dataForm.name)) {
              filterPersonList.push(item)
            }
          }
          personList = filterPersonList
        }
        personList.forEach(item => {
          // 默认为都不选中
          item.active = false
        })
        this.userList = personList
        this.loading.main = false
      },
      widthChange (width) {
        this.divWidth -= width;
        if (this.divWidth < 50) {
          this.divWidth = 50;
        }
        if (this.divWidth > 800) {
          this.divWidth = 800;
        }
      },
      handleChangeUser () {
        this.getUsers()
      },
      handleSelectUser (item) {
        // 点击选择用户
        this.userList.forEach(item => {
          // 取消所有用户选中状态
          item.active = false
        })
        // 选中点击的用户
        item.active = true
        // 记录选中人
        this.selectedUser = item
        // 清空已选择的检查活动
        this.selcetedCaseId = null
        // 根据当前选中的用户拉取其所有文书
        this.getUserCase(item.no)
      },
      getUserCase(userId) {
        if (!this.$store.state.onLine) {
          this.$message.error('当前为离线登录，请联网后再拉取！')
          return
        }
        this.loading.right = true
        this.caseList = []
        let userSessId = this.$store.state.user.userSessId
        this.$http.get(`/local/jczf/getPageJczfByOfficeId?__sid=${userSessId}&userId=${userId}&flag=true`)
        .then(async (response) => {
          if (response.status === 200) {
            if (response.data.data) {
              // 如果有检查活动及文书数据则放入当前用户数据中
              response.data.data.jczfCase.sort(sortbyDes('createDate'))
              this.caseList = response.data.data.jczfCase
            }
            this.loading.right = false
          } else {
            this.$message.error("远程请求异常，可能是认证信息超时，请重新登录。");
            this.loading.right = false
          }
          }).catch(err => {
            this.$message.error("远程请求异常，可能是认证信息超时，请重新登录。");
            console.log("拉取用户文书失败：", err);
            this.loading.right = false
          })
      },
      close (refresh) {
        // 关闭选择弹窗
        this.selectedUser = null
        this.$emit('close', {page: 'casePull', refresh})
      },
      confirm() {
        if (this.selcetedCaseId) {
          let msg = ''
          let selectedCaseData = {}
          for(let i = 0; i < this.caseList.length > 0; i++) {
            let item = this.caseList[i]
            if (item.caseId === this.selcetedCaseId) {
              msg += `${item.corpName} [${item.createDate.split(' ')[0]}]`
              selectedCaseData = item
            }
          }
          this.$confirm(`是否确认拉取“${msg}”的检查活动？`, '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(async () => {
              this.loading.main = true
              // 关闭弹窗，并赋值
              // 将临时保存数据结果赋值到数据中
              // 通过选定的selcetedCaseList检查活动，获取相应的检查活动数据jczfCase
              let jczfCase = {}
              this.caseList.map(jcItem => {
                if (jcItem.caseId === selectedCaseData.caseId && jcItem.delFlag !== '1') {
                  jczfCase = Object.assign({}, jcItem, {
                    isPull: true
                  }) 
                }
              })
              // 根据监察活动数据jczfCase再获取相应的paper数据
              if (jczfCase && jczfCase.caseId) {
                // 通过caseId获取所有文书和隐患
                let userSessId = this.$store.state.user.userSessId
                await this.$http.get(`/local/jczf/getPageJczfByOfficeId?__sid=${userSessId}&userId=${this.selectedUser.no}&flag=false&caseId=${jczfCase.caseId}&pageNo=0&pageSize=5000`)
                  .then(async ({data}) => {
                    if (data.status === '200') {
                      let paper = []
                      let danger = []
                      if (data.data) {
                        if (data.data.paper) {
                          for (let i = 0; i < data.data.paper.length; i++) {
                            let item = data.data.paper[i]
                            paper.push(Object.assign({}, item, {
                              isPull: true
                            }))
                          }
                        }
                        if (data.data.danger) {
                          for (let i = 0; i < data.data.danger.length; i++) {
                            let item = data.data.danger[i]
                            danger.push(Object.assign({}, item, {
                              isPull: true
                            }))
                          }
                        }
                      }
                      await this.updateDatabase('wkCase', [jczfCase], 'caseId')
                      await this.updateDatabase('wkPaper', paper, 'paperId')
                      await this.updateDatabase('wkDanger', danger, 'dangerId')
                      // 更新检查活动侧边栏
                      this.$emit('confirm', jczfCase)
                      this.$message.success('文书拉取成功！')
                      this.close()
                    } else {
                      this.$message.error("拉取用户文书失败，远程请求异常，可能是认证信息超时，请重新登录。");
                    }})
                  .catch(err => {
                    this.$message.error("拉取用户文书失败，远程请求异常，可能是认证信息超时，请重新登录。");
                    console.log("拉取用户文书失败：", err);
                  })
              }
              this.loading.main = false
            }).catch(() => {})
        } else {
          this.$message.error('当前未选定需要拉取的检查活动，请选择需要拉取的检查活动后再点击拉取！')
        }
      },
    }
  }
</script>

<style lang="scss" scoped>
.el-form-item {
  margin-bottom: 0px;
}
.user-tree {
  border: 1px solid #DCDFE6;
  padding: 10px 20px;
  .selected-all-users {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: right;
  }
  .content-div-main {
    height: calc(100vh - 5vh - 5vh - 140px - 60px);
    display: flex;
    border: 1px solid #DCDFE6;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    margin-bottom: 10px;
    .content-div-left {
      height: 100%;
      overflow: auto;
      white-space: nowrap;
      .user-list-row-main {
        display: flex;
        align-items: center;
        cursor: pointer;
        .user-list-row {
          display: flex;
          align-items: center;
          padding: 7px 10px;
          img {
            height: 20px;
            width: 20px;
            vertical-align: bottom;
          }
          span {
            color: #909399;
            font-size: 16px;
          }
        }
        .user-list-row:hover {
          background: rgba(83, 168, 255, 0.7);
          span {
            color: #fff !important;
          }
        }
      }
    }
    .content-div-right {
      overflow: auto;
      white-space: nowrap;
      padding: 20px;
      flex: 1;
      .case-list-item {
        display: flex;
        align-items: center;
        margin: 5px 0px;
        height: 25px;
      }
      /deep/ .el-checkbox__label {
        font-size: 16px;
        margin: 0 5px;
        &:hover {
          color: rgba(83, 168, 255, 0.7);
        }
      }
    }
    .active-item {
      background: rgb(83, 168, 255);
      span {
        color: #fff !important;
      }
    }
  }
}
/deep/ .el-dialog__body {
  padding: 0px;
  color: #606266;
  font-size: 14px;
}
/deep/ .el-tree {
  overflow: auto；
}
/deep/ .el-tree-node__content {
  display: block!important;
}
/deep/ .el-tree-node__children {
  overflow: visible!important;
}
/deep/ .el-tree-node__content:hover {
  background: rgba(83, 168, 255, 0.7);
  color: #fff;
}
/deep/ .el-tree-node:focus>.el-tree-node__content {
  background: rgb(83, 168, 255);
  color: #fff;
}
/deep/ .el-tree--highlight-current .el-tree-node.is-current>.el-tree-node__content {
  background: rgb(83, 168, 255);
  color: #fff;
}
</style>