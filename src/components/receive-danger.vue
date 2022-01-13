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
                    prop="confirmBasis"
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
                    width="170"
                    label="发送时间">
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="历史记录" name="historyList">
            <div class="receive-danger-main">
              <el-table
                :data="receiveDangerListHistory"
                stripe
                border
                style="width: 100%"
                height="calc(100% - 200px)"
                :header-row-style="{fontSize: '16px', fontWeight: 600, color: '#303133'}">
                <el-table-column
                  prop="name"
                  label="接收人"
                  header-align="center"
                  align="center"
                  width="180">
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
                  label="发送时间"
                  width="200">
                </el-table-column>
              </el-table>
            </div>
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
import {isJSON} from '@/utils/index'
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
      userType: this.$store.state.user.userType,
      receiveDangerList: [], // 接收到的所有隐患数据, 用来发送隐患已接收状态
      selectedDangerList: [], // 已选择的隐患项
    };
  },
  async created () {
    await this.getDangerList()
  },
  methods: {
    async getDangerList () {
      // 根据当前企业及登录用户获取隐患列表
      this.loading = true
      await this.$http.get(`${this.userType === 'supervision' ? '/sv' : ''}/local/postdanger/findAllByUserId?__sid=${this.$store.state.user.userSessId}&userId=${this.$store.state.user.userId}&corpId=${this.corpData.corpId}`)
        .then(async ({ data }) => {
          if (data.status === "200") {
            let dangerList = []
            let dangerHistoryList = []
            if (data.data && data.data.length > 0) {
              data.data.map(item => {
                let dangerContent = item.dangerContent && isJSON(item.dangerContent) ? JSON.parse(item.dangerContent) : []
                if (dangerContent.length > 0) {
                  dangerContent.map(danger => {
                    // 根据隐患项中的isSelected字段判断是否为已接收字段 true为已接收，false为未接收
                    let showData = {
                      ...danger,
                      companyName: item.companyName,
                      name: item.name,
                      personId: item.createBy.id,
                      sendTime: item.createDate
                    }
                    if (!danger.isSelected) {
                      dangerList.push(showData)
                    } else {
                      dangerHistoryList.push(showData)
                    }
                  })
                }
              })
            }
            this.tableData = dangerList
            this.receiveDangerList = data.data
            this.receiveDangerListHistory = dangerHistoryList
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
      // 确定：接收隐患，将隐患放入隐患列表中
      if (this.selectedDangerList.length > 0) {
        // 根据已选择的隐患遍历当前所有隐患，置已选择的隐患isSelected为true
        this.receiveDangerList.length > 0 && this.receiveDangerList.forEach(receiveDanger => {
          let dangerContent = receiveDanger.dangerContent && isJSON(receiveDanger.dangerContent) ? JSON.parse(receiveDanger.dangerContent) : []
          dangerContent.length > 0 && dangerContent.forEach(danger => {
            this.selectedDangerList.map(selectedDanger => {
              if (danger.HistoryId === selectedDanger.HistoryId) {
                danger.isSelected = true
              }
            })
          })
          // 重新封装dangerContent大字段为json
          receiveDanger.dangerContent = JSON.stringify(dangerContent)
        })
        // 调用接口重新发送隐患项，如果成功则接收隐患，不成功则提示重新接收
        let receiveSuccess = true
        this.receiveDangerList.length > 0 && this.receiveDangerList.map(receiveDanger => {
          this.$http.post(`${this.userType === 'supervision' ? '/sv' : ''}/local/postdanger/save?__sid=${this.$store.state.user.userSessId}`, {sendJson: true, data: receiveDanger})
            .then(async ({ data }) => {
              if (data.status === "200") {
              } else {
                this.$message.error('隐患接收失败，请再次尝试！')
                receiveSuccess = false
              }
            })
            .catch((err) => {
              this.$message.error('隐患接收失败，请再次尝试！')
              console.log('隐患接收失败:', err)
              receiveSuccess = false
            });
        })
        // 接收成功后完成隐患添加至隐患列表中
        if (receiveSuccess) {
          this.$message.success('隐患接收成功！')
          this.$emit('save', this.selectedDangerList)
          this.close()
        }
      } else {
        this.$message.error('请选择接收的隐患项！')
      }
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
.receive-danger-main {
  height: 65vh;
  width: 100%;
}
</style>