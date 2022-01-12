<!-- tab: 文书管理 -->
<template>
  <div id="pageWork" class="writ-management">
    <div v-show="!showPage.writFill" class="writ-management-show">
      <div class="writ-management-show-select">
        <!-- 选择检查活动 -->
        <case-list
          ref="caseList"
          use-page="WritManagement"
          :select-plan-data="selectPlanData"
          @change-page="changePage"
        ></case-list>
      </div>
      <div class="writ-management-show-detail">
        <div v-if="showPage.empty" id="workContainer">
          <br />
          <br />
          <br />
          <br />
          <div style="width:100%;font-size:16px;text-align:center;">请从左边选择检查活动，查看文书列表…</div>
        </div>
        <div v-else-if="showPage.writFlow" class="detail-main">
          <div class="detail-org-information">
            <!-- 企业信息 -->
            <org-information
              v-if="corpData && corpData.corpId"
              :corp-data="corpData"
            ></org-information>
          </div>
          <div class="detail-paper-list">
            <!-- 文书列表 -->
            <div class="paper-list-title">
              <img
                src="@/components/assets/image/letTitle.png"
                style="width:32px;height:32px;vertical-align:middle"
              />执法文书
            </div>
            <div style="flex: 1;">
              <el-table
                :data="paperList"
                ref="table"
                v-loading="loading.list"
                style="width: 100%;"
                height="100%"
                stripe
                :header-cell-style="{background: '#f5f7fa'}">
                <el-table-column
                  header-align="center"
                  align="center"
                  width="80">
                  <template slot-scope="scope">
                    <span>{{ scope.$index + 1 }}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="name"
                  header-align="center"
                  align="center"
                  label="文书名称">
                </el-table-column>
                <el-table-column
                  prop="personName"
                  header-align="center"
                  align="center"
                  width="170"
                  label="制作人">
                </el-table-column>
                <el-table-column
                  prop="createTime"
                  header-align="center"
                  align="center"
                  width="200"
                  label="制作时间">
                </el-table-column>
                <el-table-column
                  prop="fileTime"
                  header-align="center"
                  align="center"
                  width="200"
                  label="归档时间">
                </el-table-column>
                <el-table-column
                  fixed="right"
                  header-align="center"
                  align="center"
                  width="200"
                  label="操作">
                  <template slot-scope="scope">
                    <div>
                      <el-button
                        :loading="loading.btn"
                        type="text"
                        size="small"
                        @click="handleEdit(scope.row)">
                        {{scope.row.delFlag === '0' ? '查看' : '编辑'}}
                      </el-button>
                      <el-button
                        :loading="loading.btn"
                        :disabled="scope.row.delFlag === '0'"
                        type="text"
                        size="small"
                        @click="handleDelete(scope.row)">
                        删除
                      </el-button>
                      <el-button
                        :loading="loading.btn"
                        :disabled="scope.row.delFlag === '0'"
                        type="text"
                        size="small"
                        @click="handleFile(scope.row, 'file')">
                        归档
                      </el-button>
                    </div>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showPage.writFill" class="make-law-writ-fill">
      <!-- 填写文书 -->
      <component
        v-if="$store.state.user.userType"
        :is="`${$store.state.user.userType}-writ-list`"
        :show-temp="showTemp"
        :corp-data="corpData"
        :doc-data="docData"
        :paper-data="selectedPaper"
        @go-back="changePage">
      </component>
    </div>
  </div>
</template>

<script>
import caseList from "@/components/case-list";
import orgInformation from '@/components/org-information' // 企业信息
import GoDB from '@/utils/godb.min.js'
import { sortbyDes } from '@/utils/index'
import { saveToUpload } from '@/utils/savePaperData'
import monitorWritList from '@/views/make-law-writ/components/monitor-writ-list' // 监察文书组件表
import supervisionWritList from '@/views/make-law-writ/components/supervision-writ-list' // 监管文书组件表
export default {
  name: "WritManagement",
  components: {
    caseList,
    orgInformation,
    monitorWritList,
    supervisionWritList,
  },
  data() {
    return {
      corpData: {}, // 选择的企业信息
      selectPlanData: {}, // 选择的计划日期和归档机构
      showPage: {
        empty: true, // 展示默认页面
        writFlow: false, // 展示企业信息和文书列表
        writFill: false // 展示编辑页面
      },
      caseData: {}, // 企业信息
      loading: {
        list: false,
        btn: false
      },
      paperList: [], // 文书列表
      showTemp: null, // 展示的文书详情模板号，比如let100
      docData: {}, // 选择显示的文书基本信息编号及名称
      DBName: this.$store.state.DBName,
      selectedPaper: {}, // 选择编辑的文书数据
    };
  },
  created() {
    console.log(`已进入${this.$store.state.user.userType === 'supervision' ? '监管' : '监察'}文书管理`)
  },
  methods: {
    changePage ({page, data}) {
      // 展示文书管理 showDocManage
      this.showPage = {
        empty: false,
        writFlow: false,
        writFill: false
      }
      if (page === 'writFill') {
        // 进入填写页面时，data为展示模板page
        this.showTemp = data.page
        this.docData = data.docData
      } else if (page === 'empty') {
        // 进入空页面时，清空已选择的煤矿数据
        this.corpData = {}
      } else if (page === 'writFlow') {
        if (data) {
          this.caseData = data
          // 通过corpId查询煤矿信息
          this.getData()
        }
      }
      this.showPage[page] = true
    },
    async getData () {
      this.loading.list = true
      let db = new GoDB(this.DBName)
      // 获取煤矿信息
      if (this.caseData.corpId) {
        let corpBase = db.table('corpBase')
        let corp = await corpBase.find(item => item.corpId === this.caseData.corpId)
        this.corpData = {
          corpName: corp.corpName,
          corpTypeName: corp.corpTypeName,
          corpCountryName: corp.provinceName + " " + corp.cityName + " " + corp.countryName,
          address: corp.address,
          legalName: corp.legalName,
          tel: corp.tel,
          corpId: corp.corpId,
          planId: this.caseData.planId,
          caseId: this.caseData.caseId,
          caseType: this.caseData.caseType,
          constructType: corp.constructType
        }
      }
      // 获取文书列表
      if (this.caseData.caseId) {
        let wkPaper = db.table('wkPaper')
        let paperList = await wkPaper.findAll(item => item.caseId === this.caseData.caseId && item.delFlag !== '1')
        // 按创建时间排序
        paperList.length > 0 && paperList.sort(sortbyDes('createTime'))
        // 遍历设置归档时间：如果delFlag='0'则代表已归档，将updateTiem设置为归档时间，其他则为未归档
        paperList.length > 0 && paperList.map(item => {
          item.fileTime = item.delFlag === '0' ? item.updateDate : '未归档'
        })
        this.paperList = paperList
      }
      await db.close()
      this.loading.list = false
    },
    async handleEdit (row) {
      // 编辑，打开编辑页面
      // 根据paperType打开相应页面
      let page = ''
      let dictName = this.$store.state.user.userType === 'supervision' ? 'supervisionPaperType' : 'monitorPaperType'
      this.$store.state.dictionary[dictName].map(item => {
        if (item.id === row.paperType) page = item.page
      })
      this.changePage({
        page: 'writFill',
        data: {
          page: page,
          docData: {
            docTypeNo: row.paperType,
            docTypeName: row.name
          }
        }
      })
      this.selectedPaper = row
      // let db = new GoDB(this.DBName)
      // let wkPaper = db.table('wkPaper')
      // row.delFlag = '2'
      // await wkPaper.put(row)
      // await db.close()
    },
    async handleDelete (row) {
      if (!navigator.onLine) {
        this.$message.error('当前无网络，请联网后删除文书！')
        return
      }
      // 删除文书 判断是否已归档，如果已归档则不可删除
      this.loading.btn = true
      this.$confirm(`是否确认删除${row.name}?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          dangerouslyUseHTMLString: true,
          type: 'warning'
        }).then(async () => {
          await this.$http.get(`/sv/local/jczf/delPaperByPaperId?__sid=${this.$store.state.user.userSessId}&paperId=${row.paperId}`)
            .then(async ({ data }) => {
              if (data.status === "200") {
                // 删除成功后，从本地数据库中删除
                let db = new GoDB(this.$store.state.DBName)
                // 删除文书
                let wkPaper = db.table('wkPaper')
                let paperData = await wkPaper.find(item => item.paperId === row.paperId)
                let data = paperData
                data.delFlag = '1'
                await wkPaper.put(data)
                // 删除对应隐患
                let wkDanger = db.table('wkDanger')
                let dangerList = await wkDanger.findAll(item => item.paperId === row.paperId)
                if (dangerList && dangerList.length > 0) {
                  dangerList.map(async (danger) => {
                    let dangerData = danger
                    dangerData.delFlag = '1'
                    await wkDanger.put(dangerData)
                  })
                }
                await db.close()
                this.$message.success('文书删除成功！')
                this.getData()
              } else {
                this.$message.error('删除文书失败，请再次尝试')
              }
            })
            .catch((err) => {
              this.$message.error('删除文书失败，请再次尝试')
              console.log('删除文书失败:', err)
            });
          this.loading.btn = false
        }).catch(() => {
          this.loading.btn = false
        })
    },
    async handleFile (row) {
      // 归档: 更新delFlag = '0'字段（本地及上传）
      // 拉取已经保存的文书，修改delFlag = '0',调用saveToUpload上传
      this.$confirm(`是否确认归档${row.name}?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          dangerouslyUseHTMLString: true,
          type: 'warning'
        }).then(async () => {
          let db = new GoDB(this.$store.state.DBName)
          let wkPaper = db.table('wkPaper')
          let curPaper = await wkPaper.find(item => item.paperId === row.paperId && item.delFlag !== '1')
          let paperData = curPaper
          paperData.delFlag = '0'
          await wkPaper.put(paperData)
          await db.close()
          this.$message.success(`${row.name}归档成功！`)
          await saveToUpload(row.paperId, this.$store.state.user.userSessId)
          this.loading.btn = false
          this.getData()
        }).catch(() => {
          this.loading.btn = false
        })
    }
  },
};
</script>

<style lang="scss" scoped>
.writ-management {
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  .writ-management-show {
    height: calc(100vh - 102px);
    width: calc(100vw - 20px);
    display: flex;
    margin: auto;
    .writ-management-show-select {
      width: 330px;
      background-color: #ffffff;
      border-radius: 10px;
      height: 100%;
    }
    .writ-management-show-detail {
      flex: 1;
      height: 100%;
      overflow-y: auto;
      overflow-x: hidden;
      .detail-main {
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        height: 100%;
        min-width: 800px;
        overflow: auto;
        .etail-org-information {
          height: 180px;
        }
        .detail-paper-list {
          margin-top: 20px;
          flex: 1;
          border-radius: 10px;
          background: #fff;
          overflow: auto;
          display: flex;
          flex-direction: column;
          .paper-list-title {
            width: 100%;
            height: 40px;
            line-height: 40px;
            text-indent: 30px;
            color: #fff;
            font-size: 18px;
            margin: 0px;
            background: #4f83e9;
          }
        }
      }
    }
    .make-law-writ-fill {
      width: 100%;
      overflow: hidden;
    }
  }
  .make-law-writ-fill {
    width: 100%;
    overflow: hidden;
  }
}
</style>