<!-- 接收文书 -->
<template>
  <el-dialog
    title="接收文书"
    :close-on-click-modal="false"
    append-to-body
    :visible="visible"
    width="1000px"
    :show-close="false"
    top="5vh">
    <div v-loading="loading.main" class="receive-paper-main">
      <el-tabs 
        v-model="activeTab"
        type="card">
        <el-tab-pane 
          v-for="(item, index) in tabList"
          :key="index"
          :label="item.label" 
          :name="item.name"
        >
          <el-table
            :data="dataList"
            stripe
            border
            style="width: 100%;"
            height="calc(100vh - 10vh - 204px)"
            :header-cell-style="{background: '#f5f7fa'}">
            <el-table-column
              header-align="center"
              align="center"
              label="序号"
              width="60"
            >
              <template slot-scope="scope">
                <span>{{ scope.$index + 1 }}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="companyName"
              header-align="center"
              align="left"
              label="煤矿"
            >
            </el-table-column>
            <el-table-column
              prop="paperContent.name"
              header-align="center"
              align="center"
              width="150"
              label="文书类型"
            >
            </el-table-column>
            <el-table-column
              prop="paperContent.personName"
              header-align="center"
              align="center"
              label="制作人"
              width="120"
            >
            </el-table-column>
            <el-table-column
              prop="paperContent.createTime"
              header-align="center"
              align="center"
              width="180"
              label="制作时间"
            >
            </el-table-column>
            <el-table-column
              fixed="right"
              header-align="center"
              align="center"
              width="80"
              label="操作"
            >
              <template slot-scope="scope">
                <div v-if="activeTab === 'receive'">
                  <el-button
                    :loading="loading.btn"
                    type="text"
                    size="small"
                    @click="handleRecevice(scope.row)"
                  >
                    接收
                  </el-button>
                </div>
                <div v-else>
                  <el-button
                    :loading="loading.btn"
                    type="text"
                    size="small"
                    @click="handleShow(scope.row)"
                  >
                    查看
                  </el-button>
                </div>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button :loading="loading.main" @click="close">返回</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { saveToUpload } from '@/utils/savePaperData'
export default {
  name: "ReceivePaper",
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
  data() {
    return {
      loading: {
        main: false
      },
      tabList: [
        {
          label: '文书接收',
          name: 'receive'
        },
        {
          label: '历史记录',
          name: 'history'
        }
      ],
      activeTab: 'receive'
    };
  },
  computed: {
    dataList() {
      let list = []
      if (this.$store.state.unreceivedPaper && this.$store.state.unreceivedPaper.length > 0) {
        // 当页签选择为接收文书时，筛选isSelected为false即未接收的文书，当页签为历史记录时筛选isSelected为true即已接收的文书
        let isSelected = this.activeTab === 'receive' ? false : true
        this.$store.state.unreceivedPaper.map(paper => {
          if (paper.companyId === this.corpData.corpId) {
            let paperContentString = paper.paperContent
            if (JSON.parse(paperContentString).isSelected === isSelected) {
              list.push(Object.assign({}, paper, {
                paperContent: JSON.parse(paperContentString)
              }))
            }
          }
        })
      }
      return list
    }
  },
  async created() {
    this.init()
  },
  methods: {
    init () {

    },
    close () {
      // 关闭
      this.$emit('close', {page: 'receivePaper'})
    },
    async handleRecevice (row) {
      if (!this.$store.state.onLine) {
        this.$message.error('当前离线状态，请联网后才能接收！')
        return
      }
      // 接收文书
      // 置发送的文书中isSelected为true
      row.paperContent.isSelected = true
      row.paperContent.caseId = this.corpData.caseId
      row.paperContent.caseType = this.corpData.caseType
      row.paperContent.planId = this.corpData.planId
      row.paperContent = JSON.stringify(row.paperContent)
      // 发送请求确认接收
      await this.$http.post(
          `${this.userType === 'supervision' ? '/sv' : ''}/local/api-postPaper/save?__sid=${this.$store.state.user.userSessId}`,
          {
            sendJson: true,
            data: row
          }
        )
        .then(async ({ data }) => {
          if (data.status === "200") {
            this.$message.success('接收文书成功！')
            // 接收成功后
            // 将文书数据放入本地数据库中
            row.paperContent = JSON.parse(row.paperContent)
            await this.updatePaperDatabase(row.paperContent.caseId, [row.paperContent])
            // 上传保存
            await saveToUpload(row.paperContent.paperId, false, row.paperContent.caseId);
            // 更新列表
            await this.getData()
            // 关闭当前接收窗口
            this.$emit('recevice-paper', {data: row})
          } else {
            this.$message.error('接收文书成功，请重新发送！')
          }
        })
        .catch((err) => {
          console.log("接收文书成功：", err);
        });
    },
    async getData() {
      let {userId, userSessId} = this.$store.state.user
      await this.$http.get(`${this.$store.state.user.userType === 'supervision' ? '/sv' : ''}/local/api-postPaper/findAllByUserId?userId=${userId}&__sid=${userSessId}`)
        .then(async ({ data }) => {
          if (data.status === "200") {
            this.$store.commit('changeState', {
              key: 'unreceivedPaper',
              val: data.data
            })
          }
        })
        .catch((err) => {
          console.log('获取未接收的文书失败！', err)
        });
    },
    handleShow (row) {
      this.$emit('recevice-paper', {data: row})
    }
  },
};
</script>

<style lang="scss" scoped>
.receive-paper-main {
  height: calc(100vh - 10vh - 54px - 70px - 20px);
}
</style>