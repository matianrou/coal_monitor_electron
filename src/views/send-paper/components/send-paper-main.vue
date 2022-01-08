<!-- 发送文书 及历史记录 展示子组件 -->
<!-- 通过当前展示的tab激活页签区分展示 activeTab='sendPaper'时展示调查笔录发送页签 ='sendHistory'时展示历史记录 -->
<template>
  <div class="send-paper-main">
    <!-- 选择用户、煤矿制作文书 -->
    <div v-if="activeTab === 'sendPaper'" class="send-paper-operation">
      <!-- 文书制作 -->
      <div class="operation-row">
        <div class="operation-row-title">
          <span>发送给：</span>
        </div>
        <div>
          <el-button 
            type="text" 
            @click="selectData('selectPerson')"
          >
            {{ dataForm.receiveName ? dataForm.receiveName : '选择接收用户' }}
          </el-button>
        </div>
      </div>
      <div class="operation-row">
        <div class="operation-row-title">
          <span>煤 矿：</span>
        </div>
        <div>
          <el-button 
            type="text" 
            @click="selectData('selectCompany')"
          >
           {{ dataForm.companyName ? dataForm.companyName : '选择煤矿' }}
          </el-button>
        </div>
      </div>
      <div>
        <el-button type="primary" @click="createPaper">添加文书</el-button>
      </div>
    </div>
    <div v-else class="send-paper-history-title">
      <span>查看文书：</span>
    </div>
    <!-- 文书列表 -->
    <div class="paper-list" :style="activeTab === 'sendPaper' ? 'height: calc(100vh - 260px);' : 'height: calc(100vh - 170px);'">
      <el-table
        :data="paperList"
        ref="table"
        v-loading="loading.list"
        style="width: 100%;"
        height="100%"
        stripe
        border
        :header-cell-style="{ background: '#f5f7fa' }"
      >
        <el-table-column
          header-align="center"
          align="center"
          label="序号"
          width="80"
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
          prop="receiveName"
          header-align="center"
          align="left"
          label="接收人"
          width="120"
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
          width="150"
          label="操作"
        >
          <template slot-scope="scope">
            <div v-if="activeTab === 'sendPaper'">
              <el-button
                :loading="loading.btn"
                type="text"
                size="small"
                @click="handleSend(scope.row)"
              >
                发送
              </el-button>
              <el-button
                :loading="loading.btn"
                type="text"
                size="small"
                @click="handleEdit(scope.row)"
              >
                编辑
              </el-button>
              <el-button
                :loading="loading.btn"
                type="text"
                size="small"
                @click="handleDelete(scope.row)"
              >
                删除
              </el-button>
            </div>
            <div v-else>
              <el-button
                :loading="loading.btn"
                type="text"
                size="small"
                @click="handleEdit(scope.row)"
              >
                查看
              </el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <select-person
      v-if="showDialog.selectPerson"
      :visible="showDialog.selectPerson"
      :selected-data="{no: dataForm.receiveId}"
      title="选择接收人"
      @confirm-person="confirmPerson"
      @close="closeDialog"
    ></select-person>
    <select-company
      :visible="showDialog.selectCompany"
      @confirm-company="confirmCompany"
      @close="closeDialog"
    ></select-company>
  </div>
</template>
<script>
import GoDB from "@/utils/godb.min.js";
import selectPerson from '@/components/select-person'
import selectCompany from '@/components/select-company'
export default {
  name: "SendPaperMain",
  components: {
    selectPerson,
    selectCompany
  },
  props: {
    activeTab: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      loading: {
        list: false,
        btn: false,
      },
      paperList: [], // 文书列表
      dataForm: {
        receiveId: null, // 接收人
        receiveName: null, // 接收人
        companyId: null, // 企业
        companyName: null, // 企业
      },
      showDialog: {
        selectPerson: false, // 展示选择用户弹窗
        selectCompany: false, // 展示选择企业弹窗
      },
      userType: this.$store.state.user.userType,
    };
  },
  async created() {
    this.init();
    this.getData();
  },
  watch: {
    activeTab(val) {
      this.getData()
    }
  },
  methods: {
    init() {
      // 首先获取数据仓库中是否已存数据，如果有则恢复
      if (this.$store.state.sendPaperTabData) {
        this.$set(this, 'dataForm', this.$store.state.sendPaperTabData)
      }
    },
    selectData (type) {
      // 打开选择用户、选择企业弹窗
      this.showDialog[type] = true
    },
    closeDialog ({page, refresh}) {
      // 关闭选择用户、选择企业弹窗
      this.showDialog[page] = false
    },
    confirmPerson (selectedPerson) {
      // 选择接收人
      if (selectedPerson) {
        this.dataForm.receiveId = selectedPerson.no
        this.dataForm.receiveName = selectedPerson.name
        this.setStore()
      }
    },
    confirmCompany (selectedCompany) {
      // 选定企业
      if (selectedCompany) {
        this.dataForm.companyId = selectedCompany.corpId
        this.dataForm.companyName = selectedCompany.corpName
        this.setStore()
      }
    },
    async createPaper() {
      // 添加文书
      // 判断是否选择了接收人及煤矿
      let {receiveId, companyId} = this.dataForm
      if (receiveId && companyId) {
        let docData = {
          page: 'let202',
          docTypeNo: '5',
          docTypeName: '调查取证笔录',
        }
        // 获取煤矿数据
        let db = new GoDB(this.$store.state.DBName);
        let corpBase = db.table("corpBase");
        let corpData = await corpBase.find((item) => {
          return item.corpId == this.dataForm.companyId;
        });
        await db.close()
        let sendData = {
          receiveId: this.dataForm.receiveId,
          receiveName: this.dataForm.receiveName,
        }
        this.changePage({docData, corpData, sendData});
      } else {
        this.$message.error('请选择接收人及煤矿后再添加文书！')
      }
    },
    changePage({docData = null, corpData = null, sendData = null, paperData = null}) {
      // 切换编辑页面前保留当前选择的煤矿和发送人
      this.setStore()
      this.$emit("change-page", {
        status: "sendPaperPaper",
        docData,
        corpData,
        sendData,
        paperData,
      });
    },
    setStore() {
      this.$store.commit('changeState', {
        key: 'sendPaperTabData',
        val: this.dataForm
      })
    },
    async getData() {
      // 从本地数据库中获取已保存的发送文书数据
      this.loading.list = true
      let db = new GoDB(this.$store.state.DBName);
      let sendPaper = db.table('sendPaper')
      // 根据当前需要查询调查笔录发送列表或者历史记录分别搜索,通过delFlag进行分辨，如果为2则为保存，0为发送
      let delFlag = this.activeTab === 'sendPaper' ? '2' : '0'
      let paperList = await sendPaper.findAll(item => item.delFlag === delFlag)
      await db.close()
      if (paperList.length > 0) {
        paperList.forEach(item => {
          item.paperContent = JSON.parse(item.paperContent)
        })
      }
      this.paperList = paperList
      this.loading.list = false
      this.$nextTick(() => {
        this.$refs.table.doLayout();
      });
    },
    async handleSend (row) {
      if (!navigator.onLine) {
        this.$message.error('当前无网络，请联网后发送！')
        return
      }
      this.$confirm(`是否确认发送给${row.receiveName || ''}“${row.companyName}”的${row.paperContent.name}?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        dangerouslyUseHTMLString: true,
        type: "warning",
      })
        .then(async () => {
          // 发送文书数据
          this.loading.btn = true
          row.delFlag = '0' // 发送时相当于归档
          row.paperContent.delFlag = '2' // 文书依旧可以修改编辑
          row.paperContent.isSelected = false // 未接收标记
          row.paperContent = JSON.stringify(row.paperContent)
          // 调用接口发送文书数据
          await this.$http.post(
              `${this.userType === 'supervision' ? '/sv' : ''}/local/api-postPaper/save?__sid=${this.$store.state.user.userSessId}`,
              {
                sendJson: true,
                data: row
              }
            )
            .then(async ({ data }) => {
              if (data.status === "200") {
                this.$message.success('发送文书成功！')
                // 发送成功后更新本地库
                let db = new GoDB(this.$store.state.DBName);
                let sendPaper = db.table('sendPaper')
                // let paperData = await sendPaper.find(item => JSON.parse(item.paperContent).paperId === row.paperContent.paperId && item.delFlag !== '1')
                await sendPaper.put(row)
                await db.close()
                // 更新列表
                await this.getData()
              } else {
                this.$message.error('发送文书失败，请重新发送！')
              }
            })
            .catch((err) => {
              console.log("发送文书失败：", err);
            });
        })
        .catch(() => {
        });
        this.loading.btn = false
    },
    async handleEdit(row) {
      // 编辑，打开编辑页面
      // 根据paperType打开相应页面
      let page = '';
      let dictName =
        this.$store.state.user.userType === "supervision"
          ? "supervisionPaperType"
          : "monitorPaperType";
      this.$store.state.dictionary[dictName].map((item) => {
        if (item.id === row.paperContent.paperType) page = item.page;
      });
      let docData = {
        docTypeNo: row.paperContent.paperType,
        docTypeName: row.paperContent.name,
        page,
      };
      let db = new GoDB(this.$store.state.DBName);
      let corpBase = db.table("corpBase");
      let corpData = await corpBase.find((item) => {
        return item.corpId == row.companyId;
      });
      await db.close()
      let sendData = {
        receiveId: row.receiveId,
        receiveName: row.receiveName,
      }
      this.changePage({docData, corpData, sendData, paperData: row.paperContent});
    },
    async handleDelete(row) {
      // 删除文书 判断是否已归档，如果已归档则不可删除
      this.$confirm(`是否确认删除发送给${row.receiveName || ''}“${row.companyName}”的${row.paperContent.name}?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          // 从本地数据库中删除数据
          this.loading.btn = true
          row.delFlag = '1'
          row.paperContent.delFlag = '1'
          row.paperContent = JSON.stringify(row.paperContent)
          let db = new GoDB(this.$store.state.DBName);
          let sendPaper = db.table('sendPaper')
          await sendPaper.put(row)
          await db.close()
          this.loading.btn = false
          // 更新列表
          await this.getData()
        })
        .catch(() => {
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.send-paper-main {
  height: 100%;
  width: calc(100% - 100px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  .send-paper-history-title {
    height: 30px;
    line-height: 30px;
    margin-bottom: 10px;
  }
  .send-paper-operation {
    display: flex;
    // border-bottom: 1px solid #dcdfe6;
    flex-direction: column;
    padding-bottom: 10px;
    .operation-row {
      display: flex;
      align-items: center;
      .operation-row-title {
        text-align-last:justify;
        text-align:justify;
        text-justify:distribute-all-lines; // 兼容ie浏览器
        width: 80px;
      }
    }
  }
  .paper-list {
    width: 100%;
  }
}
</style>