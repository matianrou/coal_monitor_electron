<!-- 弹窗查看检查项任务-->
<template>
  <el-dialog
    title="检查项任务"
    :close-on-click-modal="false"
    append-to-body
    :visible="visible"
    top="5vh"
    width="1200px"
    @close="close">
    <div class="check-list-show-main">
      <div v-if="checkList.length > 0" style="height: 100%; width: 100%; display: flex;">
        <!-- 企业列表 -->
        <div class="check-list-company-list" :style="{ width: divWidth + 'px' }">
          <div
            v-for="(item, index) in checkList"
            :key="index"
            class="company-item">
            <span
              style="cursor: pointer;"
              :class="item.active ? 'active' : ''"
              @click="selectedItem(item, index)">
              {{ `${item.corpName}` }}
            </span>
          </div>
        </div>
        <adjustable-div
          @width-change="widthChange">
        </adjustable-div>
        <div class="check-list-company-main">
          <div class="company-info">
            <!-- 企业信息 -->
            <span>发送人： {{selectedCompany.postName}}</span>
            <span>企&nbsp;&nbsp;&nbsp;业： {{selectedCompany.corpName}}</span>
          </div>
          <div style="flex: 1;">
            <!-- 检查项列表 -->
            <el-table
              :data="selectedCompany.list"
              style="width: 100%"
              height="100%"
              border
              :header-cell-style="{background: '#f5f7fa'}">
              <el-table-column
                prop="categoryName"
                label="检查事项"
                header-align="center"
                align="left"
                width="130">
              </el-table-column>
              <el-table-column
                prop="itemContent"
                header-align="center"
                align="left"
                label="检查内容"
                width="300">
              </el-table-column>
              <el-table-column
                prop="method"
                header-align="center"
                align="left"
                label="检查主要资料及方法"
                width="180">
              </el-table-column>
              <el-table-column
                prop="address"
                header-align="center"
                align="left"
                label="检查地点">
              </el-table-column>
              <el-table-column
                prop="createDate"
                header-align="center"
                align="left"
                label="时间"
                width="100">
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
      <div v-else style="display: flex; align-item: center; justify-content: center;">
        暂无数据
      </div>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="close" type="primary">关闭</el-button>
    </span>
  </el-dialog>
</template>

<script>
import adjustableDiv from '@/components/adjustable-div'
export default {
  name: "CheckListShow",
  components: {
    adjustableDiv
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    checkList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      divWidth: 200, // 企业部分div基础宽度
      selectedCompany: {}, // 选中的企业信息
      tableData: [],
    };
  },
  created() {
  },
  methods: {
    widthChange (width) {
      this.divWidth -= width;
      if (this.divWidth < 50) {
        this.divWidth = 50;
      }
      if (this.divWidth > 800) {
        this.divWidth = 800;
      }
    },
    close(refresh) {
      this.$emit("close", { page: "checkList", refresh });
    },
    selectedItem(item, index) {
      // 选中企业
      this.checkList.forEach(item => {
        item.active = false
      })
      item.active = true
      // 保存已选择的隐患项
      // 设置选中状态
      this.$set(this.checkList, index, item)
      this.selectedCompany = item
    },
  },
};
</script>

<style lang="scss" scoped>
.check-list-show-main {
  margin-top: 20px;
  display: flex;
  height: 60vh;
  .check-list-company-list {
    height: 100%;
    overflow: auto;
    .company-item {
      span {
        display: block;
        width: calc(100% - 10px);
        white-space: nowrap;
        padding: 8px 5px;
      }
    }
  } 
  .check-list-company-main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 10px 20px 0px;
    overflow: auto;
    .company-info {
      height: 60px;
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid #DCDFE6;
      font-size: 17px;
      justify-content: space-around;
      margin-bottom: 10px;
    }
  }
  .active {
    // background: #4F83E9;
    color: #4F83E9 !important;
  }
}
</style>