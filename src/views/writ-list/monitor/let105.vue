<!-- 现场检查 复查 隐患整改 44 -->
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
                    <el-button
                      size="small"
                      @click="selectOrg(scope.$index)"
                    >{{ scope.row.orgName ? scope.row.orgName : '(点击选择)' }}</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
          <div class="file-table-main">
            <!-- 文件上传 -->
            <div class="paper-title" style="display: flex; padding: 0 20px; align-items: center; justify-content: flex-end;">
              <div>
                <span>委托地方复查文书上传</span>
              </div>
              <div style="flex: 1; display: flex; align-items: center; justify-content: flex-end; line-height: 0px;">
                <el-upload
                  :action="upload.action"
                  :headers="upload.headers"
                  :data="upload.data"
                  :show-file-list="false"
                  :file-list="upload.fileList">
                  <el-button size="small" :loading="loading.btn">上传文件</el-button>
                </el-upload>
              </div>
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
                  <template slot-scope="scope">
                    <el-button
                      :loading="loading.btn"
                      type="text"
                      @click="deleteFile(scope.$index, scope.row)"
                    >删除</el-button>
                  </template>
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
    <select-org
      :visible="selectOrgVisible"
      @confirm-org="confirmOrg"
      @close="closeSelectOrg"
    ></select-org>
  </div>
</template>

<script>
import GoDB from "@/utils/godb.min.js";
import associationSelectPaper from "@/components/association-select-paper";
import selectOrg from '@/components/select-org'
export default {
  name: "Let105",
  mixins: [associationSelectPaper],
  components: {
    selectOrg
  },
  data() {
    return {
      letData: {},
      options: {},
      dangerTableData: [], // 隐患表
      fileTableData: [], // 上传文件表
      associationPaper: ['1'],
      selectOrgVisible: false, // 选择复查单位
      selectedRowIndex: null, // 选中的复查单位的行索引
      upload: {
        action: '',
        headers: {},
        data: {},
        fileList: []
      },
      loading: {
        main: false,
        btn: false
      }
    };
  },
  methods: {
    async initLetData(selectedPaper) {
      // 创建初始版本
      let db = new GoDB(this.$store.state.DBName);
      const corpBase = db.table("corpBase");
      //查询符合条件的记录
      const corp = await corpBase.find((item) => {
        return item.corpId == this.corpData.corpId;
      });
      // 创建初始版本
      await db.close();
      let let1DataPapaerContent = JSON.parse(selectedPaper.let1Data.paperContent)
      this.dangerTableData = let1DataPapaerContent.DangerTable.tableData
      this.letData = {
      };
    },
    goBack({ page }) {
      // 返回选择企业
      this.$emit("go-back", { page });
    },
    selectOrg (index) {
      // 选择复查单位
      this.selectedRowIndex = index
      this.selectOrgVisible = true
    },
    closeSelectOrg () {
      this.selectOrgVisible = false
    },
    confirmOrg (data) {
      let orgName = data.name
      let orgId = data.id
      this.$set(this.dangerTableData, this.selectedRowIndex, Object.assign(this.dangerTableData[this.selectedRowIndex], {
        orgName,
        orgId
      }))
      this.selectOrgVisible = false
    },
    addFile () {
      // 添加文件
    },
    deleteFile (index, row) {
      // 删除文件
      this.$confirm(`是否确定删除文件“${row.fileName}”？`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          dangerouslyUseHTMLString: true,
          type: 'warning'
        }).then(async () => {
          this.loading.btn = false
        }).catch(() => {
          this.loading.btn = false
        })
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
    padding: 0px 30px;
    color: #fff;
    font-family: '宋体';
    font-weight: bold;
  }
  .table-main {
    height: calc(50vh - 90px);
  }
}
</style>