<!-- 现场检查 复查 隐患整改 -->
<template>
  <div style="width: 100%; height: 100%">
    <let-main
      ref="letMain"
      :corp-data="corpData"
      :doc-data="docData"
      :let-data="letData"
      :edit-data="paperData"
      @go-back="goBack"
    >
      <div slot="left">
        <div class="page page-sizeA4 danger-rectification">
          <div class="danger-table-main">
            <!-- 隐患整改表 -->
            <div class="paper-title">
              <span>隐患整改</span>
            </div>
            <div class="table-main">
              <el-table
                :data="dangerTableData"
                stripe
                border
                style="width: 100%;"
                height="100%"
                :header-cell-style="{background: '#f5f7fa'}">
                <el-table-column
                  type="index"
                  header-align="center"
                  align="center"
                  label="序号"
                  width="80">
                </el-table-column>
                <el-table-column
                  prop="noItemContent"
                  label="违法行为描述"
                  header-align="center"
                  align="center">
                </el-table-column>
                <el-table-column
                  header-align="center"
                  align="center"
                  label="是否完成"
                  width="100">
                  <template slot-scope="scope">
                    <el-checkbox v-model="scope.row.isComplate">{{scope.row.isComplate ? '已完成' : '未完成' }}</el-checkbox>
                  </template>
                </el-table-column>
                <el-table-column
                  header-align="center"
                  align="center"
                  label="复查单位"
                  width="180">
                  <template slot-scope="scope">
                    <el-select v-model="scope.row.orgId" filterable placeholder="请选择">
                      <el-option
                        v-for="item in orgOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
          <div class="file-table-main">
            <!-- 文件上传 -->
            <div class="paper-title">
              <span>委托地方复查文书上传</span>
            </div>
            <div class="table-main">
              <el-table
                :data="fileTableData"
                stripe
                border
                style="width: 100%;"
                height="100%"
                :header-cell-style="{background: '#f5f7fa'}">
                <el-table-column
                  prop="noItemContent"
                  label="文件名称"
                  header-align="center"
                  align="center">
                </el-table-column>
                <el-table-column
                  prop="onsiteBasis"
                  header-align="center"
                  align="center"
                  label="添加日期"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="onsiteDesc"
                  header-align="center"
                  align="center"
                  label="操作"
                  width="120">
                </el-table-column>
              </el-table>
            </div>
          </div>
        </div>
      </div>
    </let-main>
    <!-- 关联文书选择 -->
    <select-paper
      :visible="visible.selectPaper"
      title="关联文书选择"
      :paper-list="paperList"
      @close="closeDialog"
      @confirm-paper="confirmPaper"
    ></select-paper>
  </div>
</template>

<script>
import GoDB from "@/utils/godb.min.js";
import associationSelectPaper from "@/components/association-select-paper";
export default {
  name: "Let105",
  mixins: [associationSelectPaper],
  components: {
  },
  data() {
    return {
      letData: {},
      options: {},
      dangerTableData: [], // 隐患表
      fileTableData: [], // 上传文件表
      associationPaper: ['1'],
      orgList: [], // 复查单位列表
    };
  },
  created() {
    this.getOrgList()
  },
  methods: {
    async initLetData(selectedPaper) {
      // 创建初始版本
      const db = new GoDB(this.$store.state.DBName);
      const corpBase = db.table("corpBase");
      //查询符合条件的记录
      const corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      // 创建初始版本
      await db.close();
      let let1DataPapaerContent = JSON.parse(selectedPaper.let1Data.paperContent)
      this.dangerTableData = let1DataPapaerContent.dangerItemObject.tableData
      this.letData = {
      };
    },
    goBack({ page }) {
      // 返回选择企业
      this.$emit("go-back", { page });
    },
    getOrgList () {
      // 获取复查单位列表
    },
    selectOrg () {
      // 选择复查单位
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/let";
.danger-rectification {
  display: flex;
  flex-direction: column;
  .danger-table-main {
    flex-direction: column;
  }
  .file-table-main {
    flex: 1;
  }
  .paper-title {
    height: 35px;
    background: rgb(33, 150, 243);
    line-height: 35px;
    padding-left: 30px;
    color: #fff;
    font-family: '宋体';
    font-weight: bold;
  }
  .table-main {
    height: calc(50vh - 90px);
  }
}
</style>