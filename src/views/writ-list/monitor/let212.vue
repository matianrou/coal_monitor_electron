<!--行政处罚 案件结案 罚款收缴 43-->
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
            <!-- 罚款收缴表 -->
            <div class="paper-title">
              <span>罚款收缴</span>
              <span>（请填写罚款收缴金额）</span>
            </div>
            <div class="table-main">
              <el-table
                :data="tableData"
                stripe
                border
                style="width: 100%;"
                height="100%"
                :header-cell-style="{background: '#f5f7fa'}">
                <el-table-column
                  prop="noItemContent"
                  label="文书名称"
                  header-align="center"
                  align="center">
                </el-table-column>
                <el-table-column
                  prop="noItemContent"
                  header-align="center"
                  align="center"
                  label="文书编号"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="noItemContent"
                  header-align="center"
                  align="center"
                  label="罚款类别"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="noItemContent"
                  header-align="center"
                  align="center"
                  label="罚款金额(万元)"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="noItemContent"
                  header-align="center"
                  align="center"
                  label="收缴金额(万元)"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="noItemContent"
                  header-align="center"
                  align="center"
                  label="加处罚款(万元)"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="noItemContent"
                  header-align="center"
                  align="center"
                  label="收缴日期"
                  width="180">
                </el-table-column>
                <el-table-column
                  header-align="center"
                  align="center"
                  label="操作"
                  width="80">
                  <template slot-scope="scope">
                    <el-button
                      :loading="loading.btn"
                      type="text"
                      @click="handleOperation(scope.$index, scope.row)"
                    >操作</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
          <div class="file-table-main">
            <!-- 文件上传 -->
            <div class="paper-title" style="display: flex; padding: 0 20px; align-items: center; justify-content: flex-end;">
              <div>
                <span>回执单</span>
              </div>
              <div style="flex: 1; display: flex; align-items: center; justify-content: flex-end; line-height: 0px;">
                <el-upload
                  action=""
                  :auto-upload="true"
                  :show-file-list="false"
                  :http-request="addFile">
                  <el-button size="small" :loading="loading.btn">上传回执单</el-button>
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
                  label="文书编号"
                  header-align="center"
                  align="center">
                </el-table-column>
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
  </div>
</template>

<script>
import GoDB from "@/utils/godb.min.js";
import associationSelectPaper from "@/components/association-select-paper";
export default {
  name: "Let212",
  mixins: [associationSelectPaper],
  components: {
  },
  data() {
    return {
      letData: {},
      options: {},
      tableData: [], // 罚款收缴表
      fileTableData: [], // 上传文件表
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
      // 通过用户id获取罚款收缴
      let {userSessId, userId} = this.$store.state.user
      let path = this.$store.state.user.userType === 'supervision' ? '/sv' : ''
      this.$http.get(
          `${path}/local/api-fine/getFineCollection?userId=${userId}&__sid=${userSessId}`)
        .then(({ data }) => {
          if (data.status === "200") {
            console.log('data', data)
          } else {
          }
        })
        .catch((err) => {
          console.log("上传至服务器请求失败：", err);
        });
      // 创建初始版本
      await db.close();
      this.letData = {
      };
    },
    goBack({ page }) {
      // 返回选择企业
      this.$emit("go-back", { page });
    },
    handleOperation() {

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