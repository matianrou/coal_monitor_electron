<!-- tab: 文书查看-执法活动列表 -->
<template>
  <div v-loading="loading" class="writ-case-main">
    <!-- 筛选 -->
    <div>
      <el-form 
        :inline="true" 
        ref="dataForm" 
        :model="dataForm" 
        @keyup.enter.native="selectDataList()">
        <div>
          <el-form-item 
            prop="esname" 
            label="检索煤矿名称/活动编号/制作人：">
            <el-input 
              v-model.trim="dataForm.esname" 
              placeholder="检索煤矿名称/活动编号/制作人" 
              clearable
              style="width: 550px;"
            ></el-input>
          </el-form-item>
          <el-form-item 
            prop="dateValue" 
            label="制作时间：">
            <el-date-picker
              v-model="dataForm.dateValue"
              type="daterange"
              format="yyyy-MM-dd"
              value-format="yyyy-MM-dd"
              range-separator="至"
              :unlink-panels="true"
              clearable
            ></el-date-picker>
          </el-form-item>
        </div>
        <div style="display: flex;">
          <div>
            <el-form-item 
              prop="checkStatus" 
              label="监察类型：">
              <el-select
                v-model="dataForm.checkStatus"
                placeholder="活动类型"
              >
                <el-option label="监察" value="0"> </el-option>
                <el-option label="事故" value="1"> </el-option>
              </el-select>
            </el-form-item>
            <el-form-item 
              prop="officeId" 
              label="制作机构：">
              <el-select
                v-model="dataForm.officeId"
                placeholder="选择机构">
                <el-option
                  v-for="(item, index) in orgList"
                  :key="index"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </div>
          <div style="flex: 1; text-align: right">
            <el-form-item>
              <el-button @click="resetForm">重置</el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="selectDataList()">查询</el-button>
            </el-form-item>
          </div>
        </div>
      </el-form>
    </div>
    <!-- 列表 -->
    <div class="writ-case-table-main">
      <el-table
        :data="tableData"
        stripe
        border
        style="width: 100%;"
        height="100%"
        :header-cell-style="{background: '#f5f7fa'}">
        <el-table-column
          prop="caseNo"
          label="活动编号"
          header-align="center"
          align="center"
          width="260">
        </el-table-column>
        <el-table-column
          prop="corpName"
          label="煤矿名称"
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop="affiliateName"
          header-align="center"
          align="center"
          width="260"
          label="归属机构">
        </el-table-column>
        <el-table-column
          prop="groupName"
          header-align="center"
          align="center"
          width="260"
          label="制作机构">
        </el-table-column>
        <el-table-column
          prop="createDate"
          header-align="center"
          align="center"
          label="制作时间"
          width="180">
        </el-table-column>
        <el-table-column
          prop="personName"
          header-align="center"
          align="center"
          label="制作人"
          width="120">
        </el-table-column>
        <el-table-column
          header-align="center"
          align="center"
          label="操作"
          width="120">
          <template slot-scope="scope">
            <el-button type="text" @click="showPaper(scope.row, scope.$index)">查看文书列表</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="writ-case-table-pagination">
      <el-pagination v-if="tableData && tableData.length"
        @size-change="sizeChangeHandle"
        @current-change="currentChangeHandle"
        :current-page="pageNo"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="pageSize"
        :total="totalCount"
        layout="total, sizes, prev, pager, next, jumper">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { getAffiliateOrgName } from '@/utils/setInitPaperData'
export default {
  name: "WritCase",
  props: {
    orgList: {
      type: Array,
      default: () => []
    },
    allOrgList: {
      type: Array,
      default: () => []
    }
  },
  components: {
  },
  data() {
    return {
      loading: false,
      dataForm: {
        officeId: this.$store.state.user.userGroupId, // 
        esname: null, // 全局搜索
        checkStatus: '0', // 活动类型
        dateValue: []
      },
      pageNo: 1,
      pageSize: 10,
      totalCount: 0,
      tableData: [],
    };
  },
  watch: {
    allOrgList(val) {
      this.getDataList()
    }
  },
  methods: {
    // 每页数
    sizeChangeHandle (val) {
      this.pageSize = val
      this.pageNo = 1
      this.getDataList()
    },
    // 当前页
    currentChangeHandle (val) {
      this.pageNo = val
      this.getDataList()
    },
    selectDataList () {
      this.pageNo = 1
      this.getDataList()
    },
    resetForm () {
      this.pageNo = 1
      this.$refs.dataForm.resetFields()
      this.getDataList()
    },
    getDataList () {
      if (!this.$store.state.onLine) {
        this.$message.warning('当前为离线登录，请联网后再查看文书！')
        return
      }
      this.loading = true
      this.tableData = []
      let { userSessId, userGroupId } = this.$store.state.user
      let paramTxt = `__sid=${userSessId}&`
      paramTxt += `officeId=${this.dataForm.officeId ? this.dataForm.officeId : userGroupId}&`
      if (this.dataForm.esname) {
        paramTxt += `esname=${this.dataForm.esname}&`
      }
      if (this.dataForm.checkStatus) {
        paramTxt += `checkStatus=${this.dataForm.checkStatus}&`
      }
      if (this.dataForm.dateValue && this.dataForm.dateValue.length > 0) {
        paramTxt += `beginTime=${this.dataForm.dateValue[0]}&endTime=${this.dataForm.dateValue[1]}&`
      }
      paramTxt = paramTxt.substring(0, paramTxt.length - 1)
      this.$http.get(`${this.$store.state.user.userType === 'supervision' ? '/sv' : ''}/local/jczf/getCaseByOfficeId?${paramTxt}`)
      .then(async (response) => {
        if (response.status === 200) {
          if (response.data.data && response.data.data.list) {
            for (let i = 0; i < response.data.data.list.length; i++) {
              let item = response.data.data.list[i]
              // 获取归属机构和制作机构名称
              for (let j = 0; j < this.allOrgList.length; j++) {
                let org = this.allOrgList[j]
                if (org.no === item.affiliate) {
                  if (item.caseClassify === '4') {
                    let orgInfo = await this.getDatabase('org')
                    let curOrgData = orgInfo.find(o => o.no === item.affiliate && o.delFlag !== "1")
                    item.affiliateName = getAffiliateOrgName(curOrgData, this.allOrgList)
                  } else {
                    item.affiliateName = org.name
                  }
                }
                if (org.no === item.groupId) {
                  item.groupName = org.name
                }
              }
            }
            this.tableData = response.data.data.list
            this.totalCount = response.data.data.count
          }
          this.loading = false
        } else {
          this.$message.error("远程请求异常，可能是认证信息超时，请重新登录。");
          this.loading = false
        }}).catch(err => {
          this.$message.error("远程请求异常，可能是认证信息超时，请重新登录。");
          console.log("获取检查活动失败：", err);
          this.loading = false
        })
    },
    showPaper (row, index) {
      // 查看文书
      this.$emit('go-back', {page: 'writPaper', data: row})
    },
  },
};
</script>

<style lang="scss" scoped>
.writ-case-main {
  padding: 20px;
  .el-form-item {
    margin-bottom: 5px;
  }
  .writ-case-table-main {
    height: calc(100vh - 400px);
  }
  .writ-case-table-pagination {
    margin-top: 15px;
    text-align: right;
  }
}
</style>