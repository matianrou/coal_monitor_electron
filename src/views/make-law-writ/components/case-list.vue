<!-- 选择企业计划 组件-->
<template>
  <div class="case-list">
    <div class="case-list-select-main">
      <div style="height:36px; line-height: 36px; color:#666;background:#4F83E9">
        <td style="text-indent:20px;color:#fff;font-size：20px">选择企业</td>
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
              v-model="dataForm.caseType"
              style="width:100%;height:32px;"
              size="small"
              @change="val => changeSelect(val, 'caseType')">
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
              :data-name="item.corpName"
              :data-planId="item.dbplanId"
              :data-corpId="item.corpId"
              @dblclick="editaddbook(item)"
              :data-item="JSON.stringify(item)"
              style="display: inline-block;width: 318px;height:36px;padding-left:8px;cursor:pointer;line-height: 36px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;"
              @click="showDocHome(item, index)">
              <i class="el-icon-s-flag" style="font-size:16px;color:red"></i>
              {{ item.corpName}}
            </td>
            <td
              v-else
              class="editaddbookG"
              :data-casetype="item.caseType"
              :data-caseid="item.caseid"
              :data-name="item.corpName"
              :data-planId="item.planId"
              :data-corpId="item.corpId"
              @dblclick="editaddbook(item)"
              :data-item="JSON.stringify(item)"
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
    <div class="case-list-select-operation">
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
      </el-button>&nbsp;&nbsp;
    </div>
    <select-company
      v-if="visible.selectCompany"
      :visible="visible.selectCompany"
      @close="close"
      @confirm-company="confirmCompany"
    ></select-company>
  </div>
</template>

<script>
import GoDB from '@/utils/godb.min.js'
import selectCompany from '@/views/make-law-writ/components/select-company'
export default {
  name: "CaseList",
  components: {
    selectCompany
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
        caseType: '计划', // 是否为计划内的检查活动
      },
      visible: {
        selectCompany: false
      },
      selectedCase: {}, // 已选中的检查活动（或计划）
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
      // 获取全部机构列表
      const db = new GoDB("CoalDB");
      const orgInfo = db.table("orgInfo"); // 机构
      // 查询全部机构信息
      const arrOrg = await orgInfo.findAll((item) => {
        return item.delFlag == "0";
      });
      await db.close();
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
        // 设置最后一个选项
        this.dataForm.selGovUnit = this.orgList.length > 0 ? this.orgList[0].value : null
        this.dataForm.selGovUnitName = this.orgList.length > 0 ? this.orgList[0].label : null
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
      const userGroupId = this.dataForm.selGovUnit;
      const selectPlanDate = this.dataForm.selPlanDate
      const db = new GoDB("CoalDB");
      const docPlan = db.table("docPlan"); // 计划
      const wkCaseInfo = db.table("wkCase"); // 检查活动
      // 判断检查活动类型选择为计划或者其他，计划则为由网页端创建的计划再创建的检查活动，
      // 其他则为未从网页端创建，直接从客户端创建的检查活动，无planId，归档时归入其他类
      let corpList = []
      if (this.dataForm.caseType === '计划') {
        // 增加逻辑：先获取检查活动，按检查活动对比计划中的企业信息
        // 如果计划中的企业已有检查，则名称前增加”（已做）“
        // 检查活动
        let wkCase = await wkCaseInfo.findAll((item) => {
          return item.groupId === userGroupId
          && item.pcMonth === selectPlanDate
          && item.planId;
        });
        // 计划
        let arrPlan = await docPlan.findAll((item) => {
          return item.groupId === userGroupId
          && (`${item.planYear}-${item.planMonth}`) === selectPlanDate;
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
        let listArr = [...wkCase, ...arrPlan];
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
              casetype: k.caseType,
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
      } else if (this.dataForm.caseType === '其他') {
        // 检查活动
        let wkCase = await wkCaseInfo.findAll((item) => {
          return item.groupId === userGroupId
          && item.pcMonth === selectPlanDate
          && !item.planId;
        })
        let listArr = [...wkCase]
        // 转换为列表所需要的值
        listArr.map((k, index) => {
          let corp = {}
          if (k.caseId) {
            corp = {
              index: index,
              plan: true,
              casetype: k.caseType,
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
      //读取page-work.html（首页）
      // 设置case激活状态
      this.setActive(index)
      // 展示当前case流程进度
      // data: 单条plan case相关信息
      this.selectedCase = data
      this.$emit('change-page', {page: 'writFlow', data})
    },
    editaddbook (item) {
      // 判断当前是否已有caseId，如果已有则不弹窗新建
      if (!item.caseId) {
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
      this.$parent.changePage({page: 'empty'})
    },
    addCase () {
      // 未无计划的企业添加检查活动
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
      this.selectedCase
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
    justify-content: flex-end;
  }
  .active{
    background: #5f8aca;
    color: #fff;
  }
}
</style>
