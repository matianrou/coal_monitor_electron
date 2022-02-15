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
          <el-tab-pane 
            v-for="item in tabs"
            :key="item.name"
            :label="item.label" 
            :name="item.name">
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
        </el-tabs>
      </div>
      <span slot="footer">
        <el-button @click="close">取消</el-button>
        <el-button v-if="activeName === 'receiveDanger'" type="primary" @click="save">接收</el-button>
        <el-button v-else type="primary" @click="reuse">再次使用</el-button>
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
      userType: this.$store.state.user.userType,
      receiveDangerList: [], // 接收到的所有隐患数据, 用来发送隐患已接收状态
      selectedDangerList: [], // 已选择的隐患项
      allList: [],
      tabs: [
        {
          label: '隐患接收',
          name: 'receiveDanger'
        },
        {
          label: '历史记录',
          name: 'historyList'
        },
      ],
    };
  },
  async created () {
    await this.getDangerList()
    await this.handleClick()
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
                let dangerContent = item.dangerContent ? JSON.parse(decodeURIComponent(item.dangerContent)) : []
                if (dangerContent.length > 0) {
                  dangerContent.map(danger => {
                    // 根据隐患项中的isSelected字段判断是否为已接收字段 true为已接收，false为未接收
                    let recDanger = {
                      HistoryId: danger.HistoryId,
                      categoryCode: danger.categoryCode,
                      no: danger.no ? danger.no : null,
                      confirmBasis: danger.confirmBasis,
                      createDate: danger.createDate,
                      createBy: danger.createBy,
                      id: danger.id ? danger.id : null,
                      isNewRecord: danger.isNewRecord ? danger.isNewRecord : false,
                      isOther: danger.isOther ? danger.isOther : false,
                      isSelected: danger.isSelected ? danger.isSelected : false,
                      itemCode: danger.itemCode,
                      itemContent: danger.itemContent,
                      onsiteBasis: danger.onsiteBasis,
                      onsiteDesc: danger.onsiteDesc,
                      penaltyBasis: danger.penaltyBasis,
                      penaltyDesc: danger.penaltyDesc,
                      updateDate: danger.updateDate,
                      delFlag: danger.delFlag,
                      isSend: danger.isSend ? danger.isSend :  '1',
                      isCommon: danger.isCommon ? danger.isCommon : null
                    }
                    let showData = {
                      ...recDanger,
                      companyName: item.companyName,
                      name: item.name,
                      personId: item.postId,
                      sendTime: item.createDate
                    }
                    console.log('showData', showData)
                    if (!danger.isSelected) {
                      dangerList.push(showData)
                    } else {
                      dangerHistoryList.push(showData)
                    }
                  })
                }
              })
            }
            this.allList = data.data
            this.receiveDangerList = dangerList
            this.receiveDangerListHistory = dangerHistoryList
          } else {
            this.$message.error('接收隐患失败，请再次尝试')
            this.receiveDangerList = []
            this.receiveDangerListHistory = []
            this.tableData = []
            this.allList = []
          }
          this.loading =false
        })
        .catch((err) => {
          this.$message.error('接收隐患失败，请再次尝试')
          this.receiveDangerList = []
          this.receiveDangerListHistory = []
          this.tableData = []
          this.allList = []
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
        this.allList.length > 0 && this.allList.forEach(receiveDanger => {
          let dangerContent = receiveDanger.dangerContent ? JSON.parse(decodeURIComponent(receiveDanger.dangerContent)) : []
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
        for (let i = 0; i < this.allList.length; i++) {
          let receiveDanger = this.allList[i]
          this.$http.post(`${this.userType === 'supervision' ? '/sv' : ''}/local/postdanger/save?__sid=${this.$store.state.user.userSessId}`, {sendJson: true, data: receiveDanger})
            .then(async ({ data }) => {
              if (data.status === "200") {
              } else {
                receiveSuccess = false
              }
            })
            .catch((err) => {
              receiveSuccess = false
            });
        }
        // 接收成功后完成隐患添加至隐患列表中
        if (receiveSuccess) {
          this.$message.success('隐患接收成功！')
          this.$emit('save', this.selectedDangerList)
          this.close()
        } else {
          this.$message.error('隐患接收失败，请再次尝试！')
        }
      } else {
        this.$message.error('请选择接收的隐患项！')
      }
    },
    handleClick () {
      // 切换tab
      this.tableData = this.activeName === 'receiveDanger' ? this.receiveDangerList : this.receiveDangerListHistory
    },
    handleSelectionChange (val) {
      this.selectedDangerList = val
    },
    reuse () {
      // 再次使用
      this.$emit('save', this.selectedDangerList)
      this.close()
    }
  },
};
</script>

<style lang="scss" scoped>
.receive-danger-main {
  height: 65vh;
  width: 100%;
}
</style>