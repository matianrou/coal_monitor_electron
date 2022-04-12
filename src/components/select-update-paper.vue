<!-- 弹窗选择文书 -->
<template>
  <el-dialog
    title="选择同步更新的文书"
    :close-on-click-modal="false"
    :show-close="false"
    append-to-body
    :visible="visible"
    top="5vh"
    width="650px"
  >
    <div class="update-paper-main">
      <div v-if="updatePaper.paper2List && updatePaper.paper2List.length > 0">
        <div class="paper-title">
          现场处理决定书
        </div>
        <div>
          <el-table
            ref="paper2List"
            :data="updatePaper.paper2List"
            style="width: 100%;"
            row-key="paperId"
            border
            stripe
            :default-sort = "{prop: 'createTime', order: 'asc'}"
            :header-cell-style="{background: '#f5f7fa'}"
            @selection-change="val => handleSelectionChange(val, 'paper2List')">
            <el-table-column
              type="selection"
              width="60"
              header-align="center"
              align="center">
            </el-table-column>
            <el-table-column
              type="index"
              width="60"
              header-align="center"
              align="center">
            </el-table-column>
            <el-table-column
              label="制作人"
              prop="personName"
              header-align="center"
              align="center">
            </el-table-column>
            <el-table-column
              label="制作时间"
              prop="createTime"
              header-align="center"
              align="center">
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div v-if="updatePaper.paper13List && updatePaper.paper13List.length > 0">
        <div class="paper-title">
          复查意见书
        </div>
        <div>
          <el-table
            ref="paper13List"
            :data="updatePaper.paper13List"
            style="width: 100%;"
            row-key="paperId"
            border
            stripe
            :default-sort = "{prop: 'createTime', order: 'descending'}"
            :header-cell-style="{background: '#f5f7fa'}"
            @selection-change="val => handleSelectionChange(val, 'paper13List')">
            <el-table-column
              type="selection"
              width="60"
              header-align="center"
              align="center">
            </el-table-column>
            <el-table-column
              type="index"
              width="60"
              header-align="center"
              align="center">
            </el-table-column>
            <el-table-column
              label="制作人"
              prop="personName"
              header-align="center"
              align="center">
            </el-table-column>
            <el-table-column
              label="制作时间"
              prop="createTime"
              header-align="center"
              align="center">
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div v-if="updatePaper.paper4List && updatePaper.paper4List.length > 0">
        <div class="paper-title">
          立案决定书
        </div>
        <div>
          <el-table
            ref="paper4List"
            :data="updatePaper.paper4List"
            style="width: 100%;"
            row-key="paperId"
            border
            stripe
            :default-sort = "{prop: 'createTime', order: 'descending'}"
            :header-cell-style="{background: '#f5f7fa'}"
            @selection-change="val => handleSelectionChange(val, 'paper4List')">
            <el-table-column
              type="selection"
              width="60"
              header-align="center"
              align="center">
            </el-table-column>
            <el-table-column
              type="index"
              width="60"
              header-align="center"
              align="center">
            </el-table-column>
            <el-table-column
              label="制作人"
              prop="personName"
              header-align="center"
              align="center">
            </el-table-column>
            <el-table-column
              label="制作时间"
              prop="createTime"
              header-align="center"
              align="center">
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div v-if="updatePaper.paper6List && updatePaper.paper6List.length > 0">
        <div class="paper-title">
          行政处罚告知书
        </div>
        <div>
          <el-table
            ref="paper6List"
            :data="updatePaper.paper6List"
            style="width: 100%;"
            row-key="paperId"
            border
            stripe
            :default-sort = "{prop: 'createTime', order: 'descending'}"
            :header-cell-style="{background: '#f5f7fa'}"
            @selection-change="val => handleSelectionChange(val, 'paper6List')">
            <el-table-column
              type="selection"
              width="60"
              header-align="center"
              align="center">
            </el-table-column>
            <el-table-column
              type="index"
              width="60"
              header-align="center"
              align="center">
            </el-table-column>
            <el-table-column
              label="制作人"
              prop="personName"
              header-align="center"
              align="center">
            </el-table-column>
            <el-table-column
              label="制作时间"
              prop="createTime"
              header-align="center"
              align="center">
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div v-if="updatePaper[`paper${legalReviewNum}List`] && updatePaper[`paper${legalReviewNum}List`].length > 0">
        <div class="paper-title">
          行政执法决定法制审核意见书
        </div>
        <div>
          <el-table
            :ref="`paper${legalReviewNum}List`"
            :data="updatePaper[`paper${legalReviewNum}List`]"
            style="width: 100%;"
            row-key="paperId"
            border
            stripe
            :default-sort = "{prop: 'createTime', order: 'descending'}"
            :header-cell-style="{background: '#f5f7fa'}"
            @selection-change="val => handleSelectionChange(val, `paper${legalReviewNum}List`)">
            <el-table-column
              type="selection"
              width="60"
              header-align="center"
              align="center">
            </el-table-column>
            <el-table-column
              type="index"
              width="60"
              header-align="center"
              align="center">
            </el-table-column>
            <el-table-column
              label="制作人"
              prop="personName"
              header-align="center"
              align="center">
            </el-table-column>
            <el-table-column
              label="制作时间"
              prop="createTime"
              header-align="center"
              align="center">
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div v-if="updatePaper.paper36List && updatePaper.paper36List.length > 0">
        <div class="paper-title">
          案件处理呈报书
        </div>
        <div>
          <el-table
            ref="paper36List"
            :data="updatePaper.paper36List"
            style="width: 100%;"
            row-key="paperId"
            border
            stripe
            :default-sort = "{prop: 'createTime', order: 'descending'}"
            :header-cell-style="{background: '#f5f7fa'}"
            @selection-change="val => handleSelectionChange(val, 'paper36List')">
            <el-table-column
              type="selection"
              width="60"
              header-align="center"
              align="center">
            </el-table-column>
            <el-table-column
              type="index"
              width="60"
              header-align="center"
              align="center">
            </el-table-column>
            <el-table-column
              label="制作人"
              prop="personName"
              header-align="center"
              align="center">
            </el-table-column>
            <el-table-column
              label="制作时间"
              prop="createTime"
              header-align="center"
              align="center">
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div v-if="updatePaper.paper8List && updatePaper.paper8List.length > 0">
        <div class="paper-title">
          行政处罚决定书
        </div>
        <div>
          <el-table
            ref="paper8List"
            :data="updatePaper.paper8List"
            style="width: 100%;"
            row-key="paperId"
            border
            stripe
            :default-sort = "{prop: 'createTime', order: 'descending'}"
            :header-cell-style="{background: '#f5f7fa'}"
            @selection-change="val => handleSelectionChange(val, 'paper8List')">
            <el-table-column
              type="selection"
              width="60"
              header-align="center"
              align="center">
            </el-table-column>
            <el-table-column
              type="index"
              width="60"
              header-align="center"
              align="center">
            </el-table-column>
            <el-table-column
              label="制作人"
              prop="personName"
              header-align="center"
              align="center">
            </el-table-column>
            <el-table-column
              label="制作时间"
              prop="createTime"
              header-align="center"
              align="center">
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="close">取消</el-button>
      <el-button type="primary" @click="confirm">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: "SelectUpdatePaper",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    updatePaper: {
      type: Object,
      default: () => {
        return {
          paper2List: [],
          paper13List: [],
          paper4List: [],
          paper36List: [],
          paper6List: [],
          paper8List: [],
        }
      }
    }
  },
  data() {
    return {
      selectedRows: {
        paper2List: [],
        paper13List: [],
        paper4List: [],
        paper36List: [],
        paper6List: [],
        paper8List: []
      }, // 选中的文书
    };
  },
  computed: {
    legalReviewNum () {
      console.log('legalReviewNum', this.$store.state.user.userType === 'supervision' ? '47' : '49')
      return this.$store.state.user.userType === 'supervision' ? '47' : '49'
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init () {
      // 选中所有updatePaper数据
      this.$nextTick(() => {
        for (let key in this.updatePaper) {
          for (let i = 0; i < this.updatePaper[key].length; i++) {
            this.$refs[key].toggleRowSelection(this.updatePaper[key][i],
              true
            );
          }
        }
      })
    },
    close () {
      this.$emit("close");
    },
    confirm () {
      // 关闭弹窗，并赋值
      this.$emit("confirm", this.selectedRows);
    },
    handleSelectionChange(val, type) {
      console.log('type', type)
      this.selectedRows[type] = val
    }
  },
};
</script>

<style lang="scss" scoped>
.update-paper-main {
  height: 70vh;
  overflow: auto;
  .paper-title {
    height: 30px;
    background: #4F83E9;
    color: #fff;
    padding: 2px 10px;
    display: flex;
    align-items: center;
  }
}
/deep/ .el-table td {
  padding: 5px 0px;
}
/deep/ .el-table th {
  padding: 5px 0px;
}
</style>