<!-- 隐患接收 -->
<template>
  <div>
    <el-dialog
      title="隐患接收"
      :close-on-click-modal="false"
      append-to-body
      :visible="visible"
      width="1200px"
      top="5vh"
      @close="close">
      <div v-loading="loading">
        <!-- 标签：切换接收隐患及历史记录 -->
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="隐患接收" name="receiveDanger">
            <div class="receive-danger-main">
              <div style="height: 100%; width: 100%;">
                <el-table
                  :data="tableData"
                  stripe
                  border
                  style="width: 100%;"
                  height="100%"
                  :header-cell-style="{background: '#f5f7fa'}"
                  @selection-change="handleSelectionChange">
                  <el-table-column
                    type="selection"
                    width="55">
                  </el-table-column>
                  <el-table-column
                    prop="itemContent"
                    label="违法违规行为"
                    header-align="center"
                    align="center">
                  </el-table-column>
                  <el-table-column
                    prop="confirmClause"
                    label="违法认定法条"
                    header-align="center"
                    align="center">
                  </el-table-column>
                  <el-table-column
                    prop="onsiteBasis"
                    header-align="center"
                    align="center"
                    label="现场处理依据">
                  </el-table-column>
                  <el-table-column
                    prop="onsiteDesc"
                    header-align="center"
                    align="center"
                    label="现场处理措施">
                  </el-table-column>
                  <el-table-column
                    prop="penaltyBasis"
                    header-align="center"
                    align="center"
                    label="行政处罚依据">
                  </el-table-column>
                  <el-table-column
                    prop="penaltyDesc"
                    header-align="center"
                    align="center"
                    label="行政处罚决定">
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    header-align="center"
                    align="center"
                    width="120"
                    label="发送人">
                  </el-table-column>
                  <el-table-column
                    prop="sendTime"
                    header-align="center"
                    align="center"
                    width="160"
                    label="发送时间">
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="历史记录" name="historyList">
            <el-table
              :data="receiveDangerListHistory"
              stripe
              border
              style="width: 100%"
              :header-row-style="{fontSize: '16px', fontWeight: 600, color: '#303133'}">
              <el-table-column
                prop="receiveName"
                label="接收人"
                header-align="center"
                align="center">
              </el-table-column>
              <el-table-column
                prop="companyName"
                label="煤矿"
                header-align="center"
                align="center">
              </el-table-column>
              <el-table-column
                prop="sendTime"
                header-align="center"
                align="center"
                label="发送时间">
              </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </div>
      <span slot="footer">
        <el-button @click="close">取消</el-button>
        <el-button type="primary" @click="save">接收</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "ReceiveDanger",
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    corpData: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      loading: false,
      activeName: 'receiveDanger',
      tableData: [], // 接收隐患列表
      receiveDangerListHistory: [], // 历史发送隐患记录
      DBName: this.$store.state.DBName,
    };
  },
  async created () {
    await this.getDangerList()
  },
  methods: {
    async getDangerList () {
      // 根绝当前企业及登录用户获取隐患列表
      this.loading = true
      await this.$http.get(`${this.DBName === 'CoalSupervisionDB' ? '/sv' : ''}/local/postdanger/findAllByUserId?userId=${this.$store.state.user.userId}`)
        .then(async ({ data }) => {
          if (data.status === "200") {
            this.tableData = data.data
          } else {
            this.$message.error('接收隐患失败，请再次尝试')
            this.tableData = []
          }
          this.loading =false
        })
        .catch((err) => {
          this.$message.error('接收隐患失败，请再次尝试')
          this.tableData = []
          console.log('接收隐患失败:', err)
          this.loading =false
        });
    },
    close () {
      this.$emit('close', 'receiveDanger')
    },
    save () {
      // 调用接口置接收隐患字段为1，如果成功则接收隐患，不成功则提示重新接收
      // 确定：接收隐患，将隐患放入隐患列表中
      this.$emit('save', this.selectedDangerList)
    },
    handleClick () {
      // 切换tab
    },
    handleSelectionChange (val) {
      this.selectedDangerList = val
    },
  },
};
</script>

<style lang="scss" scoped>
/deep/ .el-dialog__body {
  padding: 0 20px;
}
.receive-danger-main {
  height: 65vh;
  width: 100%;
}
</style>