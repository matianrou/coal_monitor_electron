<!-- 选择企业计划 组件-->
<template>
  <div class="case-list">
    <div class="case-list-select-main">
      <div style="height:36px; line-height: 36px; color:#666; background:#4F83E9;border-top-left-radius: 10px;border-top-right-radius: 10px;">
        <td style="text-indent:20px;color:#fff;">{{usePage === 'MakeLawWrit' ? '选择煤矿/企业' : '选择煤矿/企业'}}</td>
      </div>
      <div style="flex: 1;background-color:#fff;vertical-align:top; overflow: auto;">
        <table style="width:100%;">
          <tr style="height:36px;background-color:#fff;color:#666;">
            <!-- 计划年月 -->
            <td style="width:50%;padding-left:6px;">
              <el-select
                v-model="dataForm.selPlanDate"
                style="width:100%;height:32px;"
                size="small"
                @change="val => changeSelect(val, 'selPlanDate')">
                <el-option
                  v-for="(item, index) in planDateList"
                  :key="index"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </td>
            <!-- 归档机构 -->
            <td style="width:50%;padding-right:6px;">
              <el-select
                v-model="dataForm.selGovUnit"
                style="width:100%;height:32px;"
                size="small"
                @change="val => changeSelect(val, 'selGovUnit')">
                <el-option
                  v-for="(item, index) in orgList"
                  :key="index"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </td>
          </tr>
        </table>
        <div style="height:36px;background-color:#fff;color:#666;display:flex; justify-content: flex-end;padding: 0 8px;">
          <!-- 选择计划或其他 -->
          <div style="width:30%;">
            <el-select
              v-model="dataForm.isPlan"
              style="width:100%;height:32px;"
              size="small"
              @change="val => changeSelect(val, 'isPlan')">
              <el-option value="计划"></el-option>
              <el-option value="其他"></el-option>
            </el-select>
          </div>
        </div>
        <table
          style="width:320px;background-color:#fff;color:#666;display:inline-block"
          id="tableCorpList">
          <tr
            v-for="(item, index) in corpList"
            :key="index"
            :data-corpId="item.corpId"
            :class="item.active ? 'active' : ''">
            <td
              v-if="item.dbplan"
              class="editaddbook"
              @dblclick="editaddbook(item)"
              :title="item.corpName"
              style="display: inline-block;width: 318px;height:36px;padding-left:8px;cursor:pointer;line-height: 36px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;"
              @click="showDocHome(item, index)">
              <i class="el-icon-date" style="font-size:16px;color: #DCDFE6;"></i>
              {{ item.corpName }}
            </td>
            <td
              v-else
              class="editaddbookG"
              @dblclick="editaddbook(item)"
              style="display: inline-block;width: 318px;height:36px;padding-left:8px;cursor:pointer;line-height: 36px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;"
              :title="item.corpName"
              @click="showDocHome(item, index)">
              <img src="@/components/assets/image/flash_on.png" alt="" style="vertical-align: middle;" />
              {{ item.corpName}}
            </td>
          </tr>
        </table>
      </div>
      <!-- </tr> -->
    </div>
    <div v-if="usePage === 'MakeLawWrit'" class="case-list-select-operation">
      <div class="extra-btn">
        <img 
          src="@/components/assets/image/user-group.png" 
          title="检查活动拉取" 
          @click="casePull"
        />
        <img 
          src="@/components/assets/image/cloud-upload.png" 
          title="云同步" 
          @click="cloudUpload"
          style="margin-left: 10px;"
        />
      </div>
      <div class="add-delete-btn">
        <el-button
          class="addPlan"
          type="primary"
          style="height: 35px;width:60px;padding:0;margin: 0;"
          @click="addCase"
        >
          <i class="el-icon-plus"></i>添加
        </el-button>&nbsp;&nbsp;
        <el-button
          style="height: 35px; width:60px;padding:0;margin: 0;"
          @click="deleteCase">
          <i class="el-icon-delete"></i>删除
        </el-button>
      </div>
    </div>
    <select-company
      v-if="visible.selectCompany"
      :visible="visible.selectCompany"
      @close="close"
      @confirm-company="confirmCompany"
    ></select-company>
    <case-pull
      v-if="visible.casePull"
      :visible="visible.casePull"
      @close="close"
      @confirm="confirmCasePull"
    ></case-pull>
    <cloud-upload
      v-if="visible.cloudUpload"
      :visible="visible.cloudUpload"
      @close="close"
    ></cloud-upload>
  </div>
</template>

<script>
import { getAllProvinceOrg, sortbyDes } from '@/utils/index'
import selectCompany from '@/components/select-company'
import casePull from '@/components/case-pull'
import cloudUpload from '@/components/cloud-upload'
export default {
  name: "CaseList",
  components: {
    selectCompany,
    casePull,
    cloudUpload
  },
  props: {
    selectPlanData: {
      type: Object,
      default: () => {
        return {
          selPlanDate: null,
          selGovUnit: null,
          selGovUnitName: null,
        }
      }
    },
    usePage: { // 判断当前使用的页面，如果为执法工作台MakeLawWrit则可创建检查活动，文书管理WritManagement则不可
      type: String,
      default: null
    }
  },
  data() {
    return {
      planDateList: [], // 选择企业，年月
      orgList: [], //
      corpList: [], //
      total: null, // 查询总数
      dataForm: {
        selPlanDate: null, // 检查计划或检查活动的年-月
        selGovUnit: null, // 归档机构单位
        selGovUnitName: null, // 归档机构单位名称
        isPlan: '计划', // 是否为计划内的检查活动
      },
      visible: {
        selectCompany: false, // 添加选择企业
        casePull: false, // 检查活动拉取
        cloudUpload: false, // 云上传
      },
      selectedCase: {}, // 已选中的检查活动（或计划）
      loading: {
        btn: false
      }
    };
  },
  async created() {
    await this.init()
  },
  methods: {
    async init () {
      await this.getOrgList()
      this.setOrg()
      this.getPlanDateList()
      this.setPlanDate()
      // 恢复数据仓库中已存储数据
      if (this.$store.state.selectedCaseOption) {
        this.$set(this, 'dataForm', this.$store.state.selectedCaseOption)
      } else {
        this.setStore()
      }
      await this.getData()
    },
    async getOrgList () {
      // 获取当前机构全省机构列表
      let userGroupId = this.$store.state.user.userGroupId
      let arrOrg = await getAllProvinceOrg(userGroupId)
      let orgList = []
      for (let i = 0; i < arrOrg.length; i++) {
        let obj = arrOrg[i];
        let org = {
          value: obj.no,
          label: obj.name
        }
        orgList.push(org)
      }
      this.orgList = orgList
    },
    setOrg () {
      // 设置默认选择的机构
      if (this.selectPlanData.selGovUnit) {
        // 回显已选择内容
        this.dataForm = this.selectPlanData
      } else {
        // 设置为当前机构的选项
        if (this.orgList.length > 0) {
          let { userGroupId } = this.$store.state.user
          let curUserGroup = this.orgList.find(item => item.value === userGroupId)
          this.dataForm.selGovUnit = curUserGroup ? curUserGroup.value : null
          this.dataForm.selGovUnitName = curUserGroup ? curUserGroup.label : null
        }
      }
    },
    getPlanDateList () {
      // 获取计划年月列表选项
      let planDateList = [];
      let today = new Date();
      let iYear = today.getFullYear(),
        iMonth = today.getMonth();
      for (let i = 1; i < 13; i++) {
        let planDate = {
          value: `${(iYear - 1).toString()}-${i.toString()}`,
          label: `${(iYear - 1).toString()}年${i.toString()}月`
        }
        planDateList.push(planDate)
      }
      for (let i = 1; i <= iMonth + 1; i++) {
        let planDate = {
          value: `${iYear.toString()}-${i.toString()}`,
          label: `${iYear.toString()}年${i.toString()}月`,
        }
        planDateList.push(planDate)
      }
      this.planDateList = planDateList
    },
    setPlanDate () {
      // 设置检查计划或检查活动默认日期
      if (this.selectPlanData.selPlanDate) {
        // 回显
        this.dataForm.selPlanDate = this.selectPlanData.selPlanDate
      } else {
        // 设置第一个选项
        this.dataForm.selPlanDate = this.planDateList.length > 0 ? this.planDateList[this.planDateList.length - 1].value : null
      }
    },
    async getData() {
      // 根据计划年月和机构获取计划和活动，组合成选择列表
      let selGovUnit = this.dataForm.selGovUnit;
      let selectPlanDate = this.dataForm.selPlanDate
      let docPlan = await this.getDatabase('plan')
      let wkCaseInfo = await this.getDatabase('wkCase')
      // 判断检查活动类型选择为计划或者其他，计划则为由网页端创建的计划再创建的检查活动，
      // 其他则为未从网页端创建，直接从客户端创建的检查活动，无planId，归档时归入其他类
      let corpList = []
      let listArr = []
      if (this.dataForm.isPlan === '计划') {
        // 增加逻辑：先获取检查活动，按检查活动对比计划中的企业信息
        // 如果计划中的企业已有检查，则名称前增加”（已做）“
        // 检查活动
        // 当caseClassify执法活动分类为异地执法时，按制作机构展示，其他按归档机构展示
        let wkCase = []
        wkCase = wkCaseInfo.length > 0 && JSON.parse(JSON.stringify(wkCaseInfo.filter((item) => {
          return ((item.caseClassify === '4' && item.groupId === selGovUnit)
          || item.affiliate === selGovUnit)
          && item.pcMonth === selectPlanDate
          && item.planId && item.delFlag !== '1';
        })))
        // 计划
        let arrPlan = []
        if (docPlan.length > 0) {
          arrPlan = JSON.parse(JSON.stringify(docPlan.filter((item) => {
            return item.groupId === selGovUnit
            && (`${item.planYear}-${item.planMonth}`) === selectPlanDate
            && item.delFlag !== '1';
          })))
        }
        if (wkCase.length > 0) {
          wkCase.map(caseItem => {
            arrPlan.forEach(planItem => {
              if (planItem.corpId === caseItem.corpId) {
                if (planItem.corpName.indexOf('(已做)') === -1)
                planItem.corpName = `(已做)${planItem.corpName}`
              }
            })
          })
        }
        // 使用页面usePage为执法工作台时，计划中展示计划数据，如果为文书管理，计划内也只展示检查活动
        if (this.usePage === 'MakeLawWrit') {
          if (wkCase.length > 0) {
            listArr = [...wkCase]
          }
          if (arrPlan.length > 0) {
            listArr = [...listArr, ...arrPlan]
          }
        } else {
          listArr = [...wkCase];
        }
        listArr.sort(sortbyDes('createDate'))
        this.total = listArr.length;
        // 转换为列表所需要的值
        for (let i = 0; i < listArr.length; i++) {
          let item = listArr[i]
          let corp = {}
          if (item.dbplanId) {
            corp= {
              index: i,
              dbplan: true,
              corpId: item.corpId,
              corpName: item.corpName,
              planId: item.dbplanId,
              no: item.no,
              active: false,
            }
          } else if (item.caseId) {
            corp = {
              index: i,
              plan: true,
              caseType: item.caseType,
              caseId: item.caseId,
              corpName: item.corpName,
              planId: item.planId,
              corpId: item.corpId,
              no: item.no,
              active: false,
            }
          }
          corpList.push(corp)
        }
      } else if (this.dataForm.isPlan === '其他') {
        // 检查活动
        // 当caseClassify执法活动分类为异地执法时，按制作机构展示，其他按归档机构展示
        let wkCase = JSON.parse(JSON.stringify(wkCaseInfo.filter((item) => {
          return ((item.caseClassify === '4' && item.groupId === selGovUnit)
          || item.affiliate === selGovUnit)
          && item.pcMonth === selectPlanDate
          && !item.planId && item.delFlag !== '1';
        }) || []))
        listArr = [...wkCase]
        // 按创建时间排序
        listArr.sort(sortbyDes('createDate'))
        // 转换为列表所需要的值
        for (let i = 0; i < listArr.length; i++) {
          let item = listArr[i]
          let corp = {}
          if (item.caseId) {
            corp = {
              index: i,
              plan: true,
              caseType: item.caseType,
              caseId: item.caseId,
              corpName: item.corpName,
              planId: '',
              corpId: item.corpId,
              no: item.no,
              active: false,
            }
          }
          corpList.push(corp)
        }
      }
      this.corpList = corpList
      let isDefault = true
      if (this.$store.state.curCase && this.$store.state.curCase.caseId) {
        // 是否有存储的数据，如果有则恢复
        for (let i = 0; i < corpList.length; i++) {
          if (corpList[i].caseId === this.$store.state.curCase.caseId) {
            this.showDocHome(corpList[i], i)
            isDefault = false
          }
        }
      } 
      if (isDefault && listArr.length > 0 && corpList.length > 0) {
        // 默认选中第一个
        this.showDocHome(corpList[0], 0)
      } else if (isDefault) {
        // 如果列表中没有数据则清空选择
        this.selectedCase = {}
        this.$parent.changePage({page: 'empty'})
      }
    },
    async showDocHome(data, index) {
      // 设置case激活状态
      this.setActive(index)
      // data: 单条plan case相关信息
      this.selectedCase = data
      // 执法工作台时点击打开检查活动流程 展示当前case流程进度
      // 文书管理时，展示选择检查活动的所有文书列表
      this.$emit('change-page', {page: 'writFlow', data})
    },
    editaddbook (item) {
      // 判断当前是否已有caseId，如果已有则不弹窗新建
      // 使用页面为执法工作台MakeLawWrit时可创建检查活动
      if (this.usePage === 'MakeLawWrit' && !item.caseId) {
        this.$emit('create-case', {
          corpData: item,
          selectPlanData: this.dataForm
        })
      }
    },
    setActive (index) {
      // 设置为已选择样式
      this.corpList.forEach(item => {
        item.active = false
      })
      this.corpList[index].active = true
    },
    changeSelect (val, field) {
      // 修改选择的活动日期或归档单位
      if (field === 'selGovUnit') {
        this.orgList.map(org => {
          if (org.value === val) {
            this.dataForm.selGovUnitName = org.label
          }
        })
      }
      this.getData()
      this.selectedCase = {}
      this.$parent.changePage({page: 'empty'})
      this.setStore()
    },
    setStore () {
      // 将当前选中的检查活动日期、机构及计划或其他数据更新store数据
      this.$store.commit('changeState', {
        key: 'selectedCaseOption',
        val: this.dataForm
      })
    },
    addCase () {
      // 为无计划的企业添加检查活动
      let msg  = `<div>
        <p style="text-indent: 2em;">执法计划发生变化请从网页端添加；此处添加煤矿企业仅限于发生紧急情况或突发事件下对煤矿企业制作执法文书，文书归档后将统计为“其他”类别。</p>
        <p style="color: #F56C6C;">是否确定继续添加？</p>
      </div>`
      this.$confirm(msg, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          dangerouslyUseHTMLString: true,
          type: 'warning'
        }).then(() => {
          this.visible.selectCompany = true
        }).catch(() => {})
    },
    close ({page, refresh}) {
      this.visible[page] = false
    },
    confirmCompany (company) {
      // 选中企业
      this.editaddbook(company)
    },
    deleteCase () {
      // 删除检查活动
      if (!this.$store.state.onLine) {
        this.$message.error('当前为离线登录，请联网后再尝试删除！')
        return
      }
      if (this.selectedCase && this.selectedCase.caseId) {
        this.loading.btn = true
        this.$confirm(`是否确定删除“${this.selectedCase.corpName}”的检查活动及已保存的文书？`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          dangerouslyUseHTMLString: true,
          type: 'warning'
        }).then(async () => {
          // 删除检查活动:
          // 首先判断当前检查活动是否为拉取的数据，如果是拉取的则直接删除本地存储（如果其中有自己制作的文书则仍需上传服务器），如果不是拉取则上传服务器
          let wkCase = await this.getDatabase('wkCase') 
          let caseData = wkCase.find(item => item.caseId === this.selectedCase.caseId && item.delFlag !== '1')
          if (caseData.isPull) {
            // 拉取文书的删除逻辑：
            let wkPaper = await this.getPaperDatabase(this.selectedCase.caseId) || []
            // 获取所有此检查活动caseId的文书
            let paperList = wkPaper.length > 0 && JSON.parse(JSON.stringify(wkPaper.filter(item => item.caseId === this.selectedCase.caseId && item.delFlag !== '1') || []))
            let canDelete = true
            // 遍历文书，判断是否有自己添加并且已经归档的文书
            let selfDeletePaper = []
            let pullDeletePaper = []
            paperList.length > 0 && paperList.map(item => {
              if (item.delFlag === '0' && !item.isPull) {
                canDelete = false
              } else if (!item.isPull) {
                // 如果是自己新增的文书则需要上传服务器进行文书删除
                selfDeletePaper.push(item)
              } else {
                pullDeletePaper.push(item)
              }
            })
            if (canDelete) {
              // 删除服务器文书, 成功后删除本地检查活动和文书数据
              let deleteAll = true // 请求接口删除成功标记
              let selfDeleteDanger = [] // 需要删除的自己制作的文书隐患
              let wkDanger = await this.getDatabase('wkDanger')
              for (let i = 0; i < selfDeletePaper.length; i ++) {
                let selfPaper = selfDeletePaper[i]
                await this.$http.get(`${this.$store.state.user.userType === 'supervision' ? '/sv' : ''}/local/jczf/delPaperByPaperId?__sid=${this.$store.state.user.userSessId}&paperId=${selfPaper.paperId}`)
                .then(async ({ data }) => {
                  if (data.status === "200") {
                    // 删除成功后，从本地数据库中删除
                    // 删除文书
                    selfPaper.delFlag = '1'
                    // 获取所有需要删除的隐患信息
                    let dangerList = JSON.parse(JSON.stringify(wkDanger.filter(item => item.paperId === selfPaper.paperId) || []))
                    for (let i = 0; i < dangerList.length; i++) {
                      let danger = dangerList[i]
                      danger.delFlag = '1'
                      selfDeleteDanger.push(danger)
                    }
                  } else {
                    deleteAll = false
                  }
                })
                .catch((err) => {
                  deleteAll = false
                  console.log('删除失败:', err)
                });
              }
              if (deleteAll) {
                // 如果接口删除成功：
                // 物理删除所有本地拉取数据：检查活动、文书、隐患
                await this.deleteDatabasePhysics('wkCase', [caseData], 'caseId')
                // 获取需要物理删除的隐患
                let pullDangerList = []
                for (let i = 0; i < pullDeletePaper.length; i ++) {
                  let dangerList = JSON.parse(JSON.stringify(wkDanger.filter(item => item.paperId === pullDeletePaper[i].paperId) || []))
                  for (let j = 0; j < dangerList.length; j++) {
                    pullDangerList.push(dangerList[j])
                  }
                }
                await this.deleteDatabasePhysics('wkDanger', pullDangerList, 'dangerId')
                await this.deletePaperDatabasePhysics(caseData.caseId, pullDeletePaper)
                // 逻辑删除本地添加的数据：文书、隐患
                await this.updatePaperDatabase(caseData.caseId, selfDeletePaper)
                await this.updateDatabase('wkDanger', selfDeleteDanger, 'dangerId')
                // 删除后刷新列表
                await this.getData()
                this.$message.success('删除检查活动成功！')
              } else {
                this.$message.error('删除文书失败，请再次尝试')
              }
            } else {
              // 不可删除
              this.$message.error('当前检查活动有已经归档文书，无法删除！')
            }
          } else {
            // 不是拉取的活动删除逻辑：首先遍历检查活动中的文书时候已经有归档的文书
            let wkPaper = await this.getPaperDatabase(this.selectedCase.caseId)
            // 获取所有此检查活动caseId的文书
            let paperList = JSON.parse(JSON.stringify(wkPaper.filter(item => item.caseId === this.selectedCase.caseId) || []))
            let canDelete = true
            // 遍历文书，判断是否有已经归档的文书
            paperList.length > 0 && paperList.map(item => {
              if (item.delFlag === '0') {
                canDelete = false
              }
            })
            if (canDelete) {
              // 调用接口删除检查活动，接口删除成功后进行本地删除
              let wkCase = await this.getDatabase('wkCase')
              let curCase = wkCase.find(item => item.caseId === this.selectedCase.caseId)
              await this.$http.get(`${this.$store.state.user.userType === 'supervision' ? '/sv' : ''}/local/jczf/deleteCaseByCaseId?__sid=${this.$store.state.user.userSessId}&caseId=${curCase.caseId}`)
                .then(async ({ data }) => {
                  if (data.status === "200") {
                    // 本地删除：检查活动
                    // 删除检查活动delFlag为1
                    curCase.delFlag = '1'
                    await this.updateDatabase('wkCase', [curCase], 'caseId')
                    // 本地删除：文书
                    // 遍历所有已经保存的文书，进行修改保存（本地），delFlag为1，即删除
                    let wkDanger = await this.getDatabase('wkDanger')
                    // 同时获取隐患
                    let delDangerList = []
                    for (let i = 0; i < paperList.length; i++) {
                      paperList[i].delFlag = '1'
                      let curDangerList = JSON.parse(JSON.stringify(wkDanger.filter(danger => danger.paperId === paperList[i].paperId) || []))
                      for (let j = 0; j < curDangerList.length; j++) {
                        curDangerList[j].delFlag = '1'
                        delDangerList.push(curDangerList[j])
                      }
                    }
                    await this.updatePaperDatabase(curCase.caseId, paperList)
                    await this.updateDatabase('wkDanger', delDangerList, 'dangerId')
                    this.$message.success('删除成功！')
                  } else {
                    this.$message.error('删除检查失败，请再次尝试')
                  }
                })
                .catch((err) => {
                  this.$message.error('删除检查失败，请再次尝试')
                  console.log('删除检查失败:', err)
                });
              // 删除成功后刷新企业列表
              this.getData()
              this.selectedCase = {}
              this.$parent.changePage({page: 'empty'})
            } else {
              // 如果有已经归档的文书则弹出无法删除提示
              this.$message.error('当前检查活动有已经归档文书，无法删除！')
            }
          }
          this.loading.btn = false
        }).catch(() => {
          this.loading.btn = false
        })
      } else {
        this.$message.error('请选择检查活动后点击删除！')
      }
    },
    casePull () {
      this.visible.casePull = true
    },
    async confirmCasePull (caseData) {
      // 拉取检查活动后更新检查列表
      // 跳转至活动
      // 判断caseClassify是否为异地执法'4'，如果是则按groupId跳转活动，如果不是则按归档机构affiliate跳转活动
      let groupId = ''
      let groupName = ''
      if (caseData.caseClassify === '4') {
        groupId = caseData.groupId
        groupName = caseData.groupName
      } else {
        groupId =  caseData.affiliate
        // 获取归档机构名称
        let orgInfo = await this.getDatabase('org')
        let affiliateData = orgInfo.find(item => item.no === caseData.affiliate)
        groupName = affiliateData.name
      }
      this.$set(this, 'dataForm', {
        selPlanDate: caseData.pcMonth,
        selGovUnit: groupId,
        selGovUnitName: groupName,
        isPlan: caseData.planId ? '计划' : '其他',
      })
      await this.getData()
      this.setStore()
    },
    cloudUpload () {
      // 弹窗展示未上传的文书列表
      if (!this.$store.state.onLine) {
        this.$message.error('当前为离线登录，请联网后才能云同步！')
        return
      }
      this.visible.cloudUpload = true
    }
  },
};
</script>

<style lang="scss" scoped>
.case-list {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .case-list-select-main {
    flex: 1;
    border-collapse: collapse;
    background-color: #093A83;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: flex;
    flex-direction: column;
    height: calc(100% - 50px);
  }
  .case-list-select-operation {
    height: 41px;
    background-color: #DCECFB;
    color: #666;
    border: 1px solid #093A83;
    border-radius: 10px;
    padding: 6px;
    display: flex;
    align-items: center;
    .extra-btn {
      margin-left: 10px;
      flex: 1;
      img {
        cursor: pointer;
      }
    }
    .add-delete-btn {
      width: 150px;
    }
  }
  .active{
    background: #5f8aca;
    color: #fff;
  }
}
</style>
