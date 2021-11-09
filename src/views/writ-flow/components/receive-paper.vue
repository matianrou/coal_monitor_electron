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
        v-model="activeTab">
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
      if (this.$store.state.unreceivedPaper.length > 0) {
        this.$store.state.unreceivedPaper.map(paper => {
          if (paper.companyId === this.corpData.corpId) {
            let paperContentString = paper.paperContent
            list.push(Object.assign({}, paper, {
              paperContent: JSON.parse(paperContentString)
            }))
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
    handleRecevice () {

    },
    handleShow () {

    }
  },
};
</script>

<style lang="scss" scoped>
.receive-paper-main {
  height: calc(100vh - 10vh - 54px - 70px - 20px);
}
/deep/ .el-dialog__body {
  padding: 0px 20px;
}
</style>