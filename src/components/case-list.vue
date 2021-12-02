<!-- 选择企业计划 组件-->
<template>
  <div class="case-list">
    <div class="case-list-select-main">
      <div style="height:36px; line-height: 36px; color:#666;background:#4F83E9">
        <td style="text-indent:20px;color:#fff;font-size：20px">{{usePage === 'MakeLawWrit' ? '选择企业' : '选择检查活动'}}</td>
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
            :title="item.corpName"
            :class="item.active ? 'active' : ''">
            <td
              v-if="item.dbplan"
              class="editaddbook"
              @dblclick="editaddbook(item)"
              style="display: inline-block;width: 318px;height:36px;padding-left:8px;cursor:pointer;line-height: 36px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;"
              @click="showDocHome(item, index)">
              <i class="el-icon-s-flag" style="font-size:16px;color:red"></i>
              {{ item.corpName}}
            </td>
            <td
              v-else
              class="editaddbookG"
              @dblclick="editaddbook(item)"
              style="display: inline-block;width: 318px;height:36px;padding-left:8px;cursor:pointer;line-height: 36px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;"
              @click="showDocHome(item, index)">
              <i class="el-icon-s-flag" style="font-size:16px;color:#53ff0c"></i>
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
  </div>
</template>

<script>
import GoDB from '@/utils/godb.min.js'
import { getAllProvinceOrg } from '@/utils/index'
import selectCompany from '@/components/select-company'
import casePull from '@/components/case-pull'
export default {
  name: "CaseList",
  components: {
    selectCompany,
    casePull
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
      },
      selectedCase: {}, // 已选中的检查活动（或计划）
      DBName: this.$store.state.DBName,
      loading: {
        btn: false
      }
    };
  },
  async created() {
    await this.init()
  },
  watch: {
  },
  methods: {
    async init () {
      await this.getOrgList()
      this.setOrg()
      this.getPlanDateList()
      this.setPlanDate()
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
          let curUserGroup = this.orgList.filter(item => item.value === userGroupId)
          this.dataForm.selGovUnit = curUserGroup.length > 0 ? curUserGroup[0].value : null
          this.dataForm.selGovUnitName = curUserGroup.length > 0 ? curUserGroup[0].label : null
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
      let db = new GoDB(this.DBName);
      let docPlan = db.table("docPlan"); // 计划
      let wkCaseInfo = db.table("wkCase"); // 检查活动
      // 判断检查活动类型选择为计划或者其他，计划则为由网页端创建的计划再创建的检查活动，
      // 其他则为未从网页端创建，直接从客户端创建的检查活动，无planId，归档时归入其他类
      let corpList = []
      if (this.dataForm.isPlan === '计划') {
        // 增加逻辑：先获取检查活动，按检查活动对比计划中的企业信息
        // 如果计划中的企业已有检查，则名称前增加”（已做）“
        // 检查活动
        let wkCase = await wkCaseInfo.findAll((item) => {
          return item.groupId === selGovUnit
          && item.pcMonth === selectPlanDate
          && item.planId && item.delFlag !== '1';
        });
        // 计划
        let arrPlan = await docPlan.findAll((item) => {
          return item.groupId === selGovUnit
          && (`${item.planYear}-${item.planMonth}`) === selectPlanDate
          && item.delFlag !== '1';
        });
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
        let listArr = this.usePage === 'MakeLawWrit' ? [...wkCase, ...arrPlan] : [...wkCase];
        this.total = listArr.length;
        // 转换为列表所需要的值
        listArr.map((k, index) => {
          let corp = {}
          if (k.dbplanId) {
            corp= {
              index: index,
              dbplan: true,
              corpId: k.corpId,
              corpName: k.corpName,
              planId: k.dbplanId,
              no: k.no,
              active: false,
            }
          } else if (k.caseId) {
            corp = {
              index: index,
              plan: true,
              caseType: k.caseType,
              caseId: k.caseId,
              corpName: k.corpName,
              planId: k.planId,
              corpId: k.corpId,
              no: k.no,
              active: false,
            }
          }
          corpList.push(corp)
        })
      } else if (this.dataForm.isPlan === '其他') {
        // 检查活动
        let wkCase = await wkCaseInfo.findAll((item) => {
          return item.groupId === selGovUnit
          && item.pcMonth === selectPlanDate
          && !item.planId && item.delFlag !== '1';
        })
        let listArr = [...wkCase]
        // 转换为列表所需要的值
        listArr.map((k, index) => {
          let corp = {}
          if (k.caseId) {
            corp = {
              index: index,
              plan: true,
              caseType: k.caseType,
              caseId: k.caseId,
              corpName: k.corpName,
              planId: '',
              corpId: k.corpId,
              no: k.no,
              active: false,
            }
          }
          corpList.push(corp)
        })
      }
      await db.close();
      this.corpList = corpList
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
      if (this.selectedCase && this.selectedCase.caseId) {
        this.loading.btn = true
        this.$confirm(`是否确定删除“${this.selectedCase.corpName}”的检查活动及已保存的文书？`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          dangerouslyUseHTMLString: true,
          type: 'warning'
        }).then(async () => {
          // 删除检查活动
          // 首先遍历检查活动中的文书时候已经有归档的文书
          let db = new GoDB(this.DBName);
          let wkPaper = db.table('wkPaper')
          // 获取所有此检查活动caseId的文书
          let paperList = await wkPaper.findAll(item => item.caseId === this.selectedCase.caseId)
          let canDelete = true
          // 遍历文书，判断是否有已经归档的文书
          paperList.length > 0 && paperList.map(item => {
            if (item.delFlag === '0') {
              canDelete = false
            }
          })
          if (canDelete) {
            // 调用接口删除检查活动，接口删除成功后进行本地删除
            let wkCase = db.table('wkCase')
            let curCase = await wkCase.find(item => item.caseId === this.selectedCase.caseId)
            await this.$http.get(`${this.$store.state.user.userType === 'supervision' ? '/sv' : ''}/local/jczf/deleteCaseByCaseId?__sid=${this.$store.state.user.userSessId}&caseId=${curCase.caseId}`)
              .then(async ({ data }) => {
                if (data.status === "200") {
                  // 本地删除：检查活动
                  // 删除检查活动delFlag为1
                  curCase.delFlag = '1'
                  await wkCase.put(curCase)
                  // 本地删除：文书
                  // 遍历所有已经保存的文书，进行修改保存（本地），delFlag为1，即删除
                  let wkDanger = db.table('wkDanger')
                  paperList.map(async (paper) => {
                    let data = paper
                    data.delFlag = '1'
                    await wkPaper.put(data)
                    // 删除wkDanger中隐患项数据
                    let curDangerList = await wkDanger.findAll(danger => danger.paperId === paper.paperId)
                    if (curDangerList && curDangerList.length > 0) {
                      curDangerList.map(async (danger) => {
                        let dangerData = danger
                        dangerData.delFlag = '1'
                        await wkDanger.put(dangerData)
                      })
                    }
                  })
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
          await db.close()
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
    async confirmCasePull () {
      // 拉取检查活动后更新检查列表
      await this.getData()
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
