<!-- tab: 资源下载 -->
<template>
  <div>
    <table
      style="width:98%;border-collapse:collapse;margin:6px auto;background:#093A83;border-radius:10px;"
    >
      <tr>
        <td colspan="4">
          <img src="@/components/assets/image/resTitle.png" style="width:109px;height:42px;" />
        </td>
      </tr>
      <tr style="height:36px;background:#DCECFB;color:#333;">
        <td style="width:3%;">&nbsp;</td>
        <th style="width:37%;text-align:left;">资源名称</th>
        <th style="width:32%;text-align:left">更新时间</th>
        <th style="width:28%;text-align:center;">操作</th>
      </tr>
      <tbody>
        <tr style="height:36px;background-color:#F9FDFF;">
          <td colspan="4" style="padding-left:10px;color:#666;font-weight:bold;">
            <img
              src="@/components/assets/image/letTitle.png"
              style="width:32px;height:32px;vertical-align:middle"
            />基础信息资源
          </td>
        </tr>
        <tr style="height:36px;background-color:#fff;color:#666;border-top:1px solid #DCECFB;">
          <td style="text-align:center;">&nbsp;</td>
          <td>机构资源</td>
          <td>{{updateTime.org}}</td>
          <td style="text-align:center;" id="cell-org-down">
            <el-button
              type="text"
              :loading="loading.download"
              id="btn-org-down"
              @click="resDownload('org')"
            >下载</el-button>
          </td>
        </tr>
        <tr style="height:36px;background-color:#fff;color:#666;border-top:1px solid #DCECFB;">
          <td style="text-align:center;">&nbsp;</td>
          <td>用户资源</td>
          <td>{{updateTime.person}}</td>
          <td style="text-align:center;" id="cell-person-down">
            <el-button
              type="text"
              :loading="loading.download"
              id="btn-person-down"
              @click="resDownload('person')"
            >下载</el-button>
          </td>
        </tr>
        <!--
            <tr style="height:36px;background-color:#fff;color:#666;border-top:1px solid #DCECFB;">
                <td style="text-align:center;">&nbsp;</td>
                <td>字典资源</td>
                <td>2020/10/02 18:20:36</td>
                <td style="text-align:center;" id="cell-other-down"><a href="javascript:resDownload('other')" style="color:#0091FF">下载</a></td>
            </tr>
        -->
        <tr style="height:36px;background-color:#fff;color:#666;border-top:1px solid #DCECFB;">
          <td style="text-align:center;">&nbsp;</td>
          <td>其它资源</td>
          <td>{{updateTime.plan}}</td>
          <td style="text-align:center;" id="cell-plan-down">
            <el-button
              type="text"
              :loading="loading.download"
              id="btn-plan-down"
              @click="resDownload('plan')"
            >下载</el-button>
          </td>
        </tr>
        <tr style="height:36px;background-color:#F9FDFF;border-top:1px solid #DCECFB;">
          <td colspan="4" style="padding-left:10px;color:#666;font-weight:bold;">
            <img
              src="@/components/assets/image/letTitle.png"
              style="width:32px;height:32px;vertical-align:middle"
            />企业信息资源
          </td>
        </tr>
        <tr style="height:36px;background-color:#fff;color:#666;border-top:1px solid #DCECFB;">
          <td style="text-align:center;">&nbsp;</td>
          <td>企业列表</td>
          <td>{{updateTime.corp}}</td>
          <td style="text-align:center;" id="cell-corp-down">
            <el-button
              type="text"
              :loading="loading.download"
              id="btn-corp-down"
              @click="resDownload('corp')"
            >下载</el-button>
          </td>
        </tr>
        <tr style="height:36px;background-color:#fff;color:#666;border-top:1px solid #DCECFB;">
          <td style="text-align:center;">&nbsp;</td>
          <td>行政区域</td>
          <td>{{updateTime.enterpriseList}}</td>
          <td style="text-align:center;" id="cell-enterpriseList-down">
            <el-button
              type="text"
              :loading="loading.download"
              id="btn-enterpriseList-down"
              @click="resDownload('enterpriseList')"
            >下载</el-button>
          </td>
        </tr>
        <tr style="height:36px;background-color:#F9FDFF;border-top:1px solid #DCECFB;">
          <td colspan="4" style="padding-left:10px;color:#666;font-weight:bold;">
            <img
              src="@/components/assets/image/letTitle.png"
              style="width:32px;height:32px;vertical-align:middle"
            />隐患信息资源
          </td>
        </tr>
        <tr style="height:36px;background-color:#fff;color:#666;border-top:1px solid #DCECFB;">
          <td style="text-align:center;">&nbsp;</td>
          <td>检查项类别</td>
          <td>{{updateTime.checkCate}}</td>
          <td style="text-align:center;" id="cell-checkCate-down">
            <el-button
              type="text"
              :loading="loading.download"
              id="btn-checkCate-down"
              @click="resDownload('checkCate')"
            >下载</el-button>
          </td>
        </tr>
        <tr style="height:36px;background-color:#fff;color:#666;border-top:1px solid #DCECFB;">
          <td style="text-align:center;">&nbsp;</td>
          <td>检查项内容</td>
          <td>{{updateTime.checkList}}</td>
          <td style="text-align:center;" id="cell-checkList-down">
            <el-button
              type="text"
              :loading="loading.download"
              id="btn-checkList-down"
              @click="resDownload('checkList')"
            >下载</el-button>
          </td>
        </tr>
        <tr style="height:36px;background-color:#fff;color:#666;border-top:1px solid #DCECFB;">
          <td style="text-align:center;">&nbsp;</td>
          <td>隐患类别</td>
          <td>{{updateTime.dangerCate}}</td>
          <td style="text-align:center;" id="cell-dangerCate-down">
            <el-button
              type="text"
              :loading="loading.download"
              id="btn-dangerCate-down"
              @click="resDownload('dangerCate')"
            >下载</el-button>
          </td>
        </tr>
        <tr style="height:36px;background-color:#fff;color:#666;border-top:1px solid #DCECFB;">
          <td style="text-align:center;">&nbsp;</td>
          <td>隐患内容</td>
          <td>{{updateTime.dangerList}}</td>
          <td style="text-align:center;" id="cell-dangerList-down">
            <el-button
              type="text"
              :loading="loading.download"
              id="btn-dangerList-down"
              @click="resDownload('dangerList')"
            >下载</el-button>
          </td>
        </tr>
        <tr style="height:36px;background-color:#F9FDFF;border-top:1px solid #DCECFB;">
          <td colspan="4" style="padding-left:10px;color:#666;font-weight:bold;">
            <img
              src="@/components/assets/image/letTitle.png"
              style="width:32px;height:32px;vertical-align:middle"
            />执法文书资源
          </td>
        </tr>
        <tr style="height:36px;background-color:#fff;color:#666;border-top:1px solid #DCECFB;">
          <td style="text-align:center;">&nbsp;</td>
          <td>个人账号文书资源</td>
          <td>{{updateTime.doc}}</td>
          <td style="text-align:center;" id="cell-doc-down">
            <el-button
              type="text"
              :loading="loading.download"
              id="btn-doc-down"
              @click="resDownload('doc')"
            >下载</el-button>
          </td>
        </tr>
        <!--
            <tr style="height:36px;background-color:#fff;color:#666;border-top:1px solid #DCECFB;">
                <td style="text-align:center;">&nbsp;</td>
                <td>所在单位全部文书资源</td>
                <td>2020/10/02 18:20:36</td>
                <td style="text-align:center;"><a href="javascript:resDownload('')" style="color:#0091FF">下载</a></td>
            </tr>
        -->
      </tbody>
    </table>
  </div>
</template>

<script>
import { doOrgDb, doPersonDb, doPlanDb, doCorpDb, doEnterpriseList, doCheckCateDb, doCheckListDb, doDangerCateDb, doDangerListDb, doDocDb, docFileListDb, docDictionaryDb } from "@/utils/downloadSource"
import GoDB from "@/utils/godb.min.js";
import { getUUID } from '@/utils/index'
import { getNowFormatTime } from '@/utils/date'
export default {
  name: "SourceDownload",
  async beforeRouteLeave(to, from, next){
    if (this.loading.download) {
      await this.$confirm('当前正在下载，切换页签会导致下载失败，是否确认切换？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          dangerouslyUseHTMLString: true,
          type: 'warning'
        }).then(() => {
          // 如果确定跳转则调用mainTop组件中的切换tab方法，传go为true执行继续跳转
          this.$parent.$refs.mainTop.changeTab(to.name, true)
          next()
        }).catch(() => {
        })
    } else {
      this.$parent.$refs.mainTop.changeTab(to.name, true)
      next()
    }
  },
  data() {
    return {
      loading: {
        download: false,
      },
      DBName: this.$store.state.DBName,
      updateTime: {
        id: null,
        org: '未下载',
        person: '未下载',
        plan: '未下载',
        corp: '未下载',
        enterpriseList: '未下载',
        checkCate: '未下载',
        checkList: '未下载',
        dangerCate: '未下载',
        dangerList: '未下载',
        doc: '未下载',
      },
      fileData: {
        localReview: [],
        fineCollection: [],
        singleReceipt: [],
        imageEvidence: [],
        paperAttachment: [],
        jczfReport: []
      },
      dictionary: {
        programmeType: [],
        caseClassify: []
      },
      userType: this.$store.state.user.userType
    };
  },
  computed: {
    downloadPath() {
      return this.$store.state.user.userType === 'supervision' ? '/sv' : ''
    }
  },
  async created() {
    await this.init()
  },
  methods: {
    async init () {
      // 初始化更新时间
      let db = new GoDB(this.DBName);
      let sourceDownload = db.table('sourceDownload')
      let downloadData = await sourceDownload.find(item => item)
      if (downloadData) {
        this.updateTime = Object.assign({}, this.updateTime, downloadData)
      } else {
        this.updateTime = {
          id: getUUID(),
          org: '未下载',
          person: '未下载',
          plan: '未下载',
          corp: '未下载',
          enterpriseList: '未下载',
          checkCate: '未下载',
          checkList: '未下载',
          dangerCate: '未下载',
          dangerList: '未下载',
          doc: '未下载',
        }
        await sourceDownload.add(this.updateTime)
      }
      await db.close()
    },
    /*! *****************************************************************************
    资源下载、任务/活动创建、文书保存及归档
    ***************************************************************************** */
    async resDownload(resId) {
      let objLink = document.getElementById("btn-" + resId + "-down");
      objLink.disabled = true;
      let userId = this.$store.state.user.userId;
      let userSessId = this.$store.state.user.userSessId;
      let userGroupId = this.$store.state.user.userGroupId;
      let path = this.downloadPath
      let uri = `${path}`;
      switch (resId) {
        case "org":
          // 调整为下载全国机构
          uri +=
            "/local/office/list?__sid=" +
            userSessId +
            "&officeId=000000110001&allOffice=true";
          break;
        case "person":
          // 调整为下载全国用户
          uri +=
            "/local/user/getUserByOfficeId?__sid=" +
            userSessId +
            "&officeId=000000110001";
          break;
        case "plan":
          uri +=
            "/local/plan/list?__sid=" + userSessId + "&officeId=" + userGroupId;
          break;
        case "corp":
          uri +=
            "/local/corp/list?__sid=" + userSessId + "&officeId=" + userGroupId;
          break;
        case "checkCate": //根据机构id获取全部检查类别
          uri +=
            "/local/schema/getCategoryAll?__sid=" +
            userSessId +
            "&officeId=" +
            userGroupId;
          break;
        case "checkList": //根据机构id获取全部检查内容
          uri +=
            "/local/schema/getItemAll?__sid=" +
            userSessId +
            "&officeId=" +
            userGroupId;
          break;
        case "dangerCate":
          //根据机构id获取全部隐患类别
          uri +=
            "/local/statute/getCategoryAll?__sid=" +
            userSessId +
            "&officeId=" +
            userGroupId;
          break;
        case "dangerList":
          //根据机构id获取全部隐患内容
          uri +=
            "/local/statute/getItemContentList?__sid=" +
            userSessId +
            "&officeId=" +
            userGroupId;
          break;
        case "doc":
          //文书信息分页下载接口//文书信息分页下载接口
          uri +=
            "/local/jczf/getPageJczfByOfficeId?__sid=" +
            userSessId +
            "&userId=" +
            userId +
            "&officeId=&caseId=&flag=false&pageNo=0&pageSize=1000";
          break;
        case "enterpriseList":
          //文书信息分页下载接口//文书信息分页下载接口
          uri += "/local/area/list?__sid=" + userSessId;
          break;

        //下载机构所有文书，
      }
      this.loading.download = true
      await this.$http
        .get(`${uri}`)
        .then(async (response) => {
          if (response.status != 200) {
            this.$message.error(
              "远程请求异常，可能是认证信息超时，请重新登录。"
            );
            objLink.disabled = false;
            this.loading.download = false
          } else {
            if (response.data.data) {
              // 删除当前库表，处理数据，保存至IndexDB
              switch (resId) {
                case "org":
                  await doOrgDb(resId, response.data.data);
                  this.$message.success('“机构资源”已经下载完毕。');
                  break;
                case "person":
                  await doPersonDb(resId, response.data.data);
                  this.$message.success('“用户资源”已经下载完毕。');
                  break;
                case "plan":
                  await doPlanDb(resId, response.data.data);
                  this.$message.success('“其他资源”已经下载完毕。');
                  break;
                case "corp":
                  await doCorpDb(resId, response.data.data);
                  this.$message.success('“企业资源”已经下载完毕。');
                  break;
                case "enterpriseList":
                  await doEnterpriseList(resId, response.data.data);
                  this.$message.success('“行政区域”已经下载完毕。');
                  break;
                case "checkCate":
                  await doCheckCateDb(resId, response.data.data);
                  this.$message.success('“检查项类别”已经下载完毕。');
                  break;
                case "checkList":
                  await doCheckListDb(resId, response.data.data);
                  this.$message.success('“检查项内容”已经下载完毕。');
                  break;
                case "dangerCate":
                  await doDangerCateDb(resId, response.data.data);
                  this.$message.success('“隐患类别”已经下载完毕。');
                  break;
                case "dangerList":
                  await doDangerListDb(resId, response.data.data);
                  this.$message.success('“隐患内容”已经下载完毕。');
                  break;
                case "doc":
                  await doDocDb(resId, response.data.data);
                  this.$message.success('“个人账号文书资源”已经下载完毕。');
                  break;
              }
            }
            // 下载完毕
            document.getElementById('cell-' + resId + '-down').innerHTML = "下载完毕";
            // 保存更新时间：
            this.handleUpdateTime(resId)
            this.loading.download = false
          }
        })
        .catch((err) => {
          this.$message.error("远程请求异常，可能是认证信息超时，请重新登录。");
          console.log("下载失败：", err);
          objLink.disabled = false;
          this.loading.download = false
        });
      if (resId === 'doc') {
        // 后加逻辑：当下载个人账号文书资源时，额外请求接口获取：
        // 获取委托复查，
        // 获取罚款收缴，
        // 获取回执单，
        // 获取影音证据，
        // 获取意见建议书中的附件
        // 获取监察执法报告
        let {userId, userSessId} = this.$store.state.user
        await Promise.all([
          this.getLocalReview(userId, userSessId),
          this.getFineCollection(userId, userSessId),
          this.getSingleReceipt(userId, userSessId),
          this.getImageEvidencePC(userId, userSessId),
          this.getPaperAttachment(userId, userSessId),
          this.getJczfReport(userId, userSessId)
        ]).then(async () => {
          await docFileListDb(resId, this.fileData)
        })
      } else if (resId === 'plan') {
        // 下载其他资源时，同时下载码表
        let {userSessId} = this.$store.state.user
        await Promise.all([
          this.getProgrammeType(userSessId),
          this.getCaseClassify(userSessId),
        ]).then(async () => {
          await docDictionaryDb(resId, this.dictionary)
        })
      }
    },
    getLocalReview (userId, userSessId) {
      // 获取委托复查
      return this.$http.get(
          `${this.downloadPath}/local/api-review/getLocalReview?userId=${userId}&__sid=${userSessId}`)
        .then(({ data }) => {
          if (data.status === "200") {
            this.fileData.localReview = data.data || []
          } else {
            this.fileData.localReview = []
          }
        })
        .catch((err) => {
          this.fileData.localReview = []
          console.log("获取文件列表失败：", err);
        });
    },
    getFineCollection (userId, userSessId) {
      // 获取罚款收缴
      return this.$http.get(
          `${this.downloadPath}/local/api-fine/getFineCollection?userId=${userId}&__sid=${userSessId}`)
        .then(({ data }) => {
          if (data.status === "200") {
            this.fileData.fineCollection = data.data || []
          } else {
            this.fileData.fineCollection = []
          }
        })
        .catch((err) => {
          this.fileData.fineCollection = []
          console.log("获取文件列表失败：", err);
        });
    },
    getSingleReceipt (userId, userSessId) {
      // 获取回执单
      return this.$http.get(
          `${this.downloadPath}/local/api-fine/getSingleReceipt?userId=${userId}&__sid=${userSessId}`)
        .then(({ data }) => {
          if (data.status === "200") {
            this.fileData.singleReceipt = data.data || []
          } else {
            this.fileData.singleReceipt = []
          }
        })
        .catch((err) => {
          this.fileData.singleReceipt = []
          console.log("获取文件列表失败：", err);
        });
    },
    getImageEvidencePC (userId, userSessId) {
      // 获取影音证据
      return this.$http.get(
          `${this.downloadPath}/local/jczf/getImageEvidencePC?userId=${userId}&__sid=${userSessId}`)
        .then(({ data }) => {
          if (data.status === "200") {
            this.fileData.imageEvidence = data.data || []
          } else {
            this.fileData.imageEvidence = []
          }
        })
        .catch((err) => {
          this.fileData.imageEvidence = []
          console.log("获取文件列表失败：", err);
        });
    },
    getPaperAttachment (userId, userSessId) {
      // 获取附件
      return this.$http.get(
          `${this.downloadPath}/local/api-attachment/getPaperAttachment?userId=${userId}&__sid=${userSessId}`)
        .then(({ data }) => {
          if (data.status === "200") {
            this.fileData.paperAttachment = data.data || []
          } else {
            this.fileData.paperAttachment = []
          }
        })
        .catch((err) => {
          this.fileData.paperAttachment = []
          console.log("获取文件列表失败：", err);
        });
    },
    getJczfReport (userId, userSessId) {
      // 获取监察执法报告
      return this.$http.get(
          `${this.downloadPath}/local/jczf/getReportByUserId?userId=${userId}&__sid=${userSessId}`)
        .then(({ data }) => {
          if (data.status === "200") {
            this.fileData.jczfReport = data.data || []
          } else {
            this.fileData.jczfReport = []
          }
        })
        .catch((err) => {
          this.fileData.jczfReport = []
          console.log("获取监察执法报告文件列表失败：", err);
        });
    },
    getProgrammeType (userSessId) {
      return this.$http.get(
          `/local/dict/listData?type=${(this.userType === 'supervision' ? 'programme_sv_type' : 'programme_jczf_type')}&__sid=${userSessId}`)
        .then(async ({ data }) => {
          if (data.status === "200") {
            this.dictionary.programmeType = data.data
          }
        })
        .catch((err) => {
          console.log("获取监察监管类型或方式码表失败：", err);
        });
    },
    getCaseClassify (userSessId) {
      return this.$http.get(
          `/local/dict/listData?type=${(this.userType === 'supervision' ? 'caseClassify' : 'caseClassify')}&__sid=${userSessId}`)
        .then(async ({ data }) => {
          if (data.status === "200") {
            this.dictionary.caseClassify = data.data
          }
        })
        .catch((err) => {
          console.log("获取监察活动类别码表失败：", err);
        });
    },
    async handleUpdateTime(resId) {
      // 根据更新的resId为key更新updateTime为当前时间
      let db = new GoDB(this.DBName);
      let sourceDownload = db.table('sourceDownload')
      this.updateTime[resId] = getNowFormatTime()
      await sourceDownload.put(this.updateTime)
      await db.close()
    }
  },
};
</script>

<style lang="scss" scoped>
</style>