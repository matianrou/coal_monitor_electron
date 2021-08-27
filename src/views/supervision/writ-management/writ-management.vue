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
                        编辑
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
                        |归档
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
        :is="showTemp"
        :corp-data="corpData"
        :doc-data="docData"
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
import { saveToUpload } from '@/utils/supervision/savePaperData'
export default {
  name: "SupervisionWritManagement",
  components: {
    caseList,
    orgInformation,
    let100: resolve => { require(["../make-law-writ/components/writ-list/let100"], function(let100) { resolve(let100);});},
    let101: resolve => { require(["../make-law-writ/components/writ-list/let101"], function(let101) { resolve(let101);});},
    let102: resolve => { require(["../make-law-writ/components/writ-list/let102"], function(let102) { resolve(let102);});},
    let103: resolve => { require(["../make-law-writ/components/writ-list/let103"], function(let103) { resolve(let103);});},
    let104: resolve => { require(["../make-law-writ/components/writ-list/let104"], function(let104) { resolve(let104);});},
    let105: resolve => { require(["../make-law-writ/components/writ-list/let105"], function(let105) { resolve(let105);});},
    let106: resolve => { require(["../make-law-writ/components/writ-list/let106"], function(let106) { resolve(let106);});},
    let107: resolve => { require(["../make-law-writ/components/writ-list/let107"], function(let107) { resolve(let107);});},
    let108: resolve => { require(["../make-law-writ/components/writ-list/let108"], function(let108) { resolve(let108);});},
    let109: resolve => { require(["../make-law-writ/components/writ-list/let109"], function(let109) { resolve(let109);});},
    let110: resolve => { require(["../make-law-writ/components/writ-list/let110"], function(let110) { resolve(let110);});},
    let111: resolve => { require(["../make-law-writ/components/writ-list/let111"], function(let111) { resolve(let111);});},
    let112: resolve => { require(["../make-law-writ/components/writ-list/let112"], function(let112) { resolve(let112);});},
    let1100: resolve => { require(["../make-law-writ/components/writ-list/let1100"], function(let1100) { resolve(let1100);});},
    let1101: resolve => { require(["../make-law-writ/components/writ-list/let1101"], function(let1101) { resolve(let1101);});},
    let113: resolve => { require(["../make-law-writ/components/writ-list/let113"], function(let113) { resolve(let113);});},
    let200: resolve => { require(["../make-law-writ/components/writ-list/let200"], function(let200) { resolve(let200);});},
    let201: resolve => { require(["../make-law-writ/components/writ-list/let201"], function(let201) { resolve(let201);});},
    let202: resolve => { require(["../make-law-writ/components/writ-list/let202"], function(let202) { resolve(let202);});},
    let203: resolve => { require(["../make-law-writ/components/writ-list/let203"], function(let203) { resolve(let203);});},
    let204: resolve => { require(["../make-law-writ/components/writ-list/let204"], function(let204) { resolve(let204);});},
    let205: resolve => { require(["../make-law-writ/components/writ-list/let205"], function(let205) { resolve(let205);});},
    let206: resolve => { require(["../make-law-writ/components/writ-list/let206"], function(let206) { resolve(let206);});},
    let207: resolve => { require(["../make-law-writ/components/writ-list/let207"], function(let207) { resolve(let207);});},
    let208: resolve => { require(["../make-law-writ/components/writ-list/let208"], function(let208) { resolve(let208);});},
    let209: resolve => { require(["../make-law-writ/components/writ-list/let209"], function(let209) { resolve(let209);});},
    let210: resolve => { require(["../make-law-writ/components/writ-list/let210"], function(let210) { resolve(let210);});},
    let211: resolve => { require(["../make-law-writ/components/writ-list/let211"], function(let211) { resolve(let211);});},
    let212: resolve => { require(["../make-law-writ/components/writ-list/let212"], function(let212) { resolve(let212);});},
    let213: resolve => { require(["../make-law-writ/components/writ-list/let213"], function(let213) { resolve(let213);});},
    let214: resolve => { require(["../make-law-writ/components/writ-list/let214"], function(let214) { resolve(let214);});},
    let300: resolve => { require(["../make-law-writ/components/writ-list/let300"], function(let300) { resolve(let300);});},
    let301: resolve => { require(["../make-law-writ/components/writ-list/let301"], function(let301) { resolve(let301);});},
    let302: resolve => { require(["../make-law-writ/components/writ-list/let302"], function(let302) { resolve(let302);});},
    let303: resolve => { require(["../make-law-writ/components/writ-list/let303"], function(let303) { resolve(let303);});},
    let304: resolve => { require(["../make-law-writ/components/writ-list/let304"], function(let304) { resolve(let304);});},
    let305: resolve => { require(["../make-law-writ/components/writ-list/let305"], function(let305) { resolve(let305);});},
    let306: resolve => { require(["../make-law-writ/components/writ-list/let306"], function(let306) { resolve(let306);});},
    let307: resolve => { require(["../make-law-writ/components/writ-list/let307"], function(let307) { resolve(let307);});},
    let308: resolve => { require(["../make-law-writ/components/writ-list/let308"], function(let308) { resolve(let308);});},
    let400: resolve => { require(["../make-law-writ/components/writ-list/let400"], function(let400) { resolve(let400);});},
    let401: resolve => { require(["../make-law-writ/components/writ-list/let401"], function(let401) { resolve(let401);});},
    let402: resolve => { require(["../make-law-writ/components/writ-list/let402"], function(let402) { resolve(let402);});},
    let404: resolve => { require(["../make-law-writ/components/writ-list/let404"], function(let404) { resolve(let404);});},
    let405: resolve => { require(["../make-law-writ/components/writ-list/let405"], function(let405) { resolve(let405);});},
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
    };
  },
  created() {
    console.log('监管-文书管理')
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
      const db = new GoDB('CoalSupervisionDB')
      // 获取煤矿信息
      if (this.caseData.corpId) {
        const corpBase = db.table('corpBase')
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
        }
      }
      // 获取文书列表
      if (this.caseData.caseId) {
        const wkPaper = db.table('wkPaper')
        let paperList = await wkPaper.findAll(item => item.caseId === this.caseData.caseId && item.delFlag !== '1')
        // 按创建时间排序
        paperList.length > 0 && paperList.sort(sortbyDes('createTiem'))
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
      // let page = ''
      // this.$store.state.dictionary.supervisionPaperType.map(item => {
      //   if (item.id === row.paperType) page = item.page
      // })
      // this.changePage({
      //   page: 'writFill',
      //   data: {
      //     page: page,
      //     docData: {
      //       docTypeNo: row.paperType,
      //       docTypeName: row.name
      //     }
      //   }
      // })
      const db = new GoDB('CoalSupervisionDB')
      const wkPaper = db.table('wkPaper')
      row.delFlag = '2'
      await wkPaper.put(row)
      await db.close()
    },
    async handleDelete (row) {
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
                const db = new GoDB('CoalSupervisionDB')
                // 删除文书
                const wkPaper = db.table('wkPaper')
                let paperData = await wkPaper.find(item => item.paperId === row.paperId)
                let data = paperData
                data.delFlag = '1'
                await wkPaper.put(data)
                // 删除对应隐患
                const wkDanger = db.table('wkDanger')
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
          const db = new GoDB('CoalSupervisionDB')
          const wkPaper = db.table('wkPaper')
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