<!-- tab: 文书查看-执法活动文书列表 -->
<template>
  <div v-loading="loading" class="writ-paper">
    <div class="writ-paper-case-info-main">
      <div class="writ-paper-case-info-row">
        <div class="writ-paper-case-info">
          <div class="title">活动编号：</div>
          <div>{{ caseData.caseNo }}</div>
        </div>
        <div class="writ-paper-case-info">
          <div class="title">煤矿名称：</div>
          <div>{{ caseData.corpName }}</div>
        </div>
      </div>
      <div class="writ-paper-case-info-row">
        <div class="writ-paper-case-info">
          <div class="title">归属机构：</div>
          <div>{{ caseData.affiliateName }}</div>
        </div>
        <div class="writ-paper-case-info">
          <div class="title">制作机构：</div>
          <div>{{ caseData.groupName }}</div>
        </div>
      </div>
      <div class="writ-paper-case-info-row">
        <div class="writ-paper-case-info">
          <div class="title">制作时间：</div>
          <div>{{ caseData.createTime }}</div>
        </div>
        <div class="writ-paper-case-info">
          <div class="title">制作人：</div>
          <div>{{ caseData.personName }}</div>
        </div>
      </div>
    </div>
    <!-- 文书列表 -->
    <div class="writ-paper-table-main">
      <el-table
        :data="tableData"
        stripe
        border
        style="width: 100%;"
        height="100%"
        :header-cell-style="{background: '#f5f7fa'}">
        <el-table-column
          prop="name"
          label="文书类型"
          header-align="center"
          align="center"
          width="220">
        </el-table-column>
        <el-table-column
          prop="personName"
          label="制作人"
          width="150"
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop="groupName"
          header-align="center"
          align="center"
          label="制作机构">
        </el-table-column>
        <el-table-column
          prop="affiliateName"
          header-align="center"
          align="center"
          label="归属机构">
        </el-table-column>
        <el-table-column
          prop="createTime"
          header-align="center"
          align="center"
          label="制作时间"
          width="180">
        </el-table-column>
        <el-table-column
          prop="updateDate"
          header-align="center"
          align="center"
          label="归档时间"
          width="180">
        </el-table-column>
        <el-table-column
          header-align="center"
          align="center"
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button type="text" @click="showPaper(scope.row, scope.$index)">查看文书</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="writ-paper-back">
      <el-button type="primary" @click="goBack">返回执法活动列表</el-button>
    </div>
  </div>
</template>

<script>
import { getAffiliateOrgName } from '@/utils/setInitPaperData'
export default {
  name: "WritPaper",
  props: {
    caseData: {
      type: Object,
      default: () => {}
    },
    orgList: {
      type: Array,
      default: () => []
    },
    allOrgList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      tableData: [],
      loading: false,
    };
  },
  activated() {
    this.getDataList()
  },
  watch: {
    caseData (val) {
      this.getDataList()
    }
  },
  methods: {
    showPaper (row, index) {
      this.$emit('go-back', {page: 'writFill', data: row})
    },
    getDataList () {
      this.loading = true
      this.tableData = []
      let { userSessId } = this.$store.state.user
      this.$http.get(`${this.$store.state.user.userType === 'supervision' ? '/sv' : ''}/local/jczf/getPaperByCaseId?__sid=${userSessId}&caseId=${this.caseData.caseId}`)
      .then(async (response) => {
        if (response.status === 200) {
          if (response.data.data) {
            for (let i = 0; i < response.data.data.length; i++) {
              let item = response.data.data[i]
              // 获取归属机构和制作机构名称
              for (let j = 0; j < this.allOrgList.length; j++) {
                let org = this.allOrgList[j]
                if (org.no === item.affiliate) {
                  if (this.caseData.caseClassify === '4') {
                    let orgInfo = await this.getDatabase('org')
                    let curOrgData = orgInfo.find(o => o.no === item.affiliate && o.delFlag !== "1")
                    item.affiliateName = getAffiliateOrgName(curOrgData, this.allOrgList)
                  } else {
                    item.affiliateName = org.name
                  }
                }
                if (org.no === item.group.id) {
                  item.groupName = org.name
                }
              }
            }
            this.tableData = response.data.data
          }
          this.loading = false
        } else {
          this.$message.error("远程请求异常，可能是认证信息超时，请重新登录。");
          this.loading = false
        }}).catch(err => {
          this.$message.error("远程请求异常，可能是认证信息超时，请重新登录。");
          console.log("获取检查活动的文书列表失败：", err);
          this.loading = false
        })
    },
    goBack () {
      this.$emit('go-back', {page: 'writCase', data: null})
    }
  },
};
</script>

<style lang="scss" scoped>
.writ-paper {
  padding: 15px;
  .writ-paper-case-info-main {
    display: flex;
    flex-direction: column;
    padding: 0px 10px 5px;
    .writ-paper-case-info-row {
      display: flex;
      .writ-paper-case-info {
        flex: 1;
        display: flex;
        color: #909399;
        height: 35px;
        line-height: 35px;
        font-size: 17px;
        .title {
          color: #606266;
        }
      }
    }
  }
  .writ-paper-table-main {
    height: calc(100vh - 400px);
  }
  .writ-paper-back {
    margin-top: 15px; 
    text-align: right;
  }
}
</style>