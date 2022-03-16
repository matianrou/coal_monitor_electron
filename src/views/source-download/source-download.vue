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
        <td colspan="1" style="text-align: center;">
          <el-button type="primary" size="small" @click="downloadAll">全部下载</el-button>
        </td>
      </tr>
      <tr style="height:36px;background:#DCECFB;color:#333;">
        <td style="width:3%;">&nbsp;</td>
        <th style="width:30%;text-align:left;">资源名称</th>
        <th style="width:25%;text-align:center;">更新时间</th>
        <th style="width:350px;text-align:center;">下载日期范围</th>
        <th style="text-align:center;">操作</th>
      </tr>
      <tbody v-if="updateTime">
        <tr style="height:36px;background-color:#F9FDFF;">
          <td colspan="5" style="padding-left:10px;color:#666;font-weight:bold;">
            <img
              src="@/components/assets/image/letTitle.png"
              style="width:32px;height:32px;vertical-align:middle"
            />基础信息资源
          </td>
        </tr>
        <tr style="height:36px;background-color:#fff;color:#666;border-top:1px solid #DCECFB;">
          <td style="text-align:center;">&nbsp;</td>
          <td>机构资源</td>
          <td style="text-align:center;">{{updateTime.org}}</td>
          <td></td>
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
          <td style="text-align:center;">{{updateTime.person}}</td>
          <td></td>
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
          <td>其它资源（{{userType === 'supervision' ? '监管' : '监察'}}计划及数据码表）</td>
          <td style="text-align:center;">{{updateTime.plan}}</td>
          <td></td>
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
          <td colspan="5" style="padding-left:10px;color:#666;font-weight:bold;">
            <img
              src="@/components/assets/image/letTitle.png"
              style="width:32px;height:32px;vertical-align:middle"
            />企业信息资源
          </td>
        </tr>
        <tr style="height:36px;background-color:#fff;color:#666;border-top:1px solid #DCECFB;">
          <td style="text-align:center;">&nbsp;</td>
          <td>煤矿/企业信息</td>
          <td style="text-align:center;">{{updateTime.corp}}</td>
          <td></td>
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
          <td style="text-align:center;">{{updateTime.enterpriseList}}</td>
          <td></td>
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
          <td colspan="5" style="padding-left:10px;color:#666;font-weight:bold;">
            <img
              src="@/components/assets/image/letTitle.png"
              style="width:32px;height:32px;vertical-align:middle"
            />隐患信息资源
          </td>
        </tr>
        <tr style="height:36px;background-color:#fff;color:#666;border-top:1px solid #DCECFB;">
          <td style="text-align:center;">&nbsp;</td>
          <td>检查项类别</td>
          <td style="text-align:center;">{{updateTime.checkCate}}</td>
          <td></td>
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
          <td style="text-align:center;">{{updateTime.checkList}}</td>
          <td></td>
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
          <td>隐患项类别</td>
          <td style="text-align:center;">{{updateTime.dangerCate}}</td>
          <td></td>
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
          <td>隐患项内容</td>
          <td style="text-align:center;">{{updateTime.dangerList}}</td>
          <td></td>
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
          <td colspan="5" style="padding-left:10px;color:#666;font-weight:bold;">
            <img
              src="@/components/assets/image/letTitle.png"
              style="width:32px;height:32px;vertical-align:middle"
            />执法文书资源
          </td>
        </tr>
        <tr style="height:36px;background-color:#fff;color:#666;border-top:1px solid #DCECFB;">
          <td style="text-align:center;">&nbsp;</td>
          <td>个人账号文书资源</td>
          <td style="text-align:center;">{{updateTime.doc}}</td>
          <td style="text-align:center;">
            <el-date-picker
              v-model="dataForm.docDownDaterange"
              type="daterange"
              format="yyyy-MM-dd"
              value-format="yyyy-MM-dd"
              range-separator="至"
              start-placeholder="起始日期"
              end-placeholder="截止日期"
              :unlink-panels="true"
              style="margin-left: 10px;"
              size="small"
            ></el-date-picker>
          </td>
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
import { getUUID } from '@/utils/index'
import { getNowFormatTime, getNowDay, getPreMonthDay } from '@/utils/date'
import { orgSave, personSave, planSave, corpSave, enterpriseListSave, checkCateSave, checkListSave, dangerCateSave, dangerListSave, docSave, fileDataSave, dictionarySave} from '@/utils/downloadSource'
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
      updateTime: {
        id: 1,
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
      resIdDict: [
        {
          resId: 'org',
          resName: '机构资源'
        },
        {
          resId: 'person',
          resName: '用户资源'
        },
        {
          resId: 'plan',
          resName: '其他资源'
        },
        {
          resId: 'corp',
          resName: '企业资源'
        },
        {
          resId: 'enterpriseList',
          resName: '行政区域'
        },
        {
          resId: 'checkCate',
          resName: '检查项类别'
        },
        {
          resId: 'checkList',
          resName: '检查项内容'
        },
        {
          resId: 'dangerCate',
          resName: '隐患类别'
        },
        {
          resId: 'dangerList',
          resName: '隐患内容'
        },
        {
          resId: 'doc',
          resName: '个人账号文书资源'
        },
      ],
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
        caseClassify: [],
        riskAssessment: [],
        subitemType: [],
        onsiteDesc: [],
      },
      dataForm: {
        docDownDaterange: []
      },
      downloadFunction: {
        orgSave,
        personSave,
        planSave,
        corpSave,
        enterpriseListSave,
        checkCateSave,
        checkListSave,
        dangerCateSave,
        dangerListSave,
        docSave,
        fileDataSave,
        dictionarySave
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
      // 初始化个人账号文书资源下载时间
      let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let strDate = date.getDate();
      let today = year + '-' + month + '-' + strDate;
      let preMonthDay= getPreMonthDay(today, 2)
      this.dataForm.docDownDaterange = [preMonthDay, today]
      let updateTime = await this.getDatabase('sourceDownload')
      this.$set(this, 'updateTime', updateTime[0])
    },
    /*! *****************************************************************************
    资源下载、任务/活动创建、文书保存及归档
    ***************************************************************************** */
    async resDownload(resId) {
      if (!this.$store.state.onLine) {
        this.$message.error('当前为离线登录，请调整网络后再尝试下载！')
        return
      }
      let userId = this.$store.state.user.userId;
      let userSessId = this.$store.state.user.userSessId;
      let userGroupId = this.$store.state.user.userGroupId;
      let path = this.downloadPath
      let uri = `${path}`;
      // 监察或监管国家局officeId 
      let goverOfficeId = this.$store.state.user.userType === 'supervision' ? '000000310001' : '000000110001'
      switch (resId) {
        case "org":
          // 调整为下载全国机构
          uri +=
            "/local/office/list?__sid=" +
            userSessId +
            "&officeId=" + goverOfficeId + "&allOffice=true";
          break;
        case "person":
          // 调整为下载全国用户
          uri +=
            "/local/user/getUserByOfficeId?__sid=" +
            userSessId +
            "&officeId=" + goverOfficeId;
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
          // &officeId=&caseId=&flag=false&pageNo=0&pageSize=5000
          // &isAll=1为下载全部文书，默认为0只下载近两个月的
          uri +=
            "/local/jczf/getPageJczfByOfficeId?__sid=" +
            userSessId +
            "&userId=" +
            userId + "&pageNo=0&pageSize=5000&isAll=1"
          if (this.dataForm.docDownDaterange && this.dataForm.docDownDaterange.length > 0) {
            uri += `&startTime=${this.dataForm.docDownDaterange[0]}`
            uri += `&endTime=${this.dataForm.docDownDaterange[1]}`
          } else if (this.updateTime.doc !== '未下载') {
            uri += `&updateTime=${this.updateTime.doc}`
          }
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
            this.loading.download = false
          } else {
            let saveData = response.data.data ? response.data.data : []
            await this.downloadFunction[`${resId}Save`](resId, saveData)
            if (resId !== 'doc' && resId !== 'plan') this.saveFinished(resId)
          }
        })
        .catch((err) => {
          this.$message.error("远程请求异常，可能是认证信息超时，请重新登录。");
          console.log("下载失败：", err);
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
        if (this.$store.state.user.userType === 'supervision') {
          // 监管时下载影音证据
          await Promise.all([
            this.getImageEvidencePC(userId, userSessId),
          ]).then(async () => {
            await this.downloadFunction['fileDataSave'](resId, this.fileData)
            this.saveFinished(resId)
          })
        } else {
          // 监察时下载委托复查、罚款收缴、回执单、影音证据、意见建议书附件、监察执法报告
          await Promise.all([
            this.getLocalReview(userId, userSessId),
            this.getFineCollection(userId, userSessId),
            this.getSingleReceipt(userId, userSessId),
            this.getImageEvidencePC(userId, userSessId),
            this.getPaperAttachment(userId, userSessId),
            this.getJczfReport(userId, userSessId)
          ]).then(async () => {
            await this.downloadFunction['fileDataSave'](resId, this.fileData)
            this.saveFinished(resId)
          })
        }
      } else if (resId === 'plan') {
        // 下载其他资源时，同时下载码表
        let {userSessId} = this.$store.state.user
        await Promise.all([
          this.getProgrammeType(userSessId),
          this.getCaseClassify(userSessId),
          this.getRiskAssessment(userSessId),
          this.getSubitemType(userSessId), // 行政处罚类型 
          this.getOnsiteDesc (userSessId), // 现场处理决定 
          this.getParentType(userSessId),
          this.getMineWsGrade(userSessId),
          this.getGrimeExplosive(userSessId),
          this.getMineMinestyle(userSessId),
          this.getMineVentilatestyle(userSessId),
          this.getHydrogeologicalType(userSessId),
          this.getMineFire(userSessId),
          this.getBaseMineStatusZs(userSessId),
        ]).then(async () => {
          await this.downloadFunction['dictionarySave'](resId, this.dictionary)
          this.saveFinished(resId)
        })
      }
    },
    saveFinished (resId) {
      let res = this.resIdDict.find(item => item.resId === resId)
      this.$message.success(`“${res.resName || ''}”已经下载完毕。`);
      this.loading.download = false
      // 下载完毕
      document.getElementById('cell-' + resId + '-down').innerHTML = "下载完毕";
      // 保存更新时间：
      this.handleUpdateTime(resId)
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
    // 码表下载
    getProgrammeType (userSessId) {
      // 监察监管类型或方式码表
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
      // 执法活动分类
      return this.$http.get(
          `/local/dict/listData?type=${(this.userType === 'supervision' ? 'caseClassify' : 'caseClassify')}&__sid=${userSessId}`)
        .then(async ({ data }) => {
          if (data.status === "200") {
            // 根据数据中增加说明字段
            for (let i = 0; i < data.data.length; i++) {
              data.data[i].description = ''
              switch (data.data[i].label) {
                case '本执法处':
                  data.data[i].description = ''
                  break
                case '业务处和综合处': 
                  data.data[i].description = '“业务处和综合处”是指省级局机关对本执法处辖区开展的执法检查统计数据。'
                  break
                case '其他执法处': 
                  data.data[i].description = '“其他执法处”是指省级局组织的其他执法处对本执法处辖区煤矿开展的执法检查统计数据。'
                  break
                case '外省级局异地执法': 
                  data.data[i].description = '“外省级局异地执法”是指国家局组织的外省级局对本执法处辖区煤矿开展的异地执法检查统计数据。'
                  break
                case '国家局明察暗访': 
                  data.data[i].description = '“国家局明查暗访”是指国家局机关组织的对本执法处辖区煤矿开展的明查暗访执法检查统计数据。'
                  break
              }
            }
            this.dictionary.caseClassify = data.data
          }
        })
        .catch((err) => {
          console.log("获取执法活动分类码表失败：", err);
        });
    },
    getRiskAssessment (userSessId) {
      // 风险研判
      return this.$http.get(
          `/local/riskStrict/getAll?__sid=${userSessId}`)
        .then(async ({ data }) => {
          if (data.status === "200") {
            data.data.forEach(item => {
              item.id = item.id.trim()
            })
            this.dictionary.riskAssessment = data.data
          }
        })
        .catch((err) => {
          console.log("获取风险研判码表失败：", err);
        });
    },
    getSubitemType (userSessId) {
      // 行政处罚类型
      return this.$http.get(
          `/local/dict/listData?type=${(this.userType === 'supervision' ? 'subitem_type' : 'subitem_type')}&__sid=${userSessId}`)
        .then(async ({ data }) => {
          if (data.status === "200") {
            // 码表数据，增加比对校验字符串
            data.data.forEach(item => {
              // 设置检索词
              switch (item.label) {
                case '警告':
                  item.searchLabel = '警告'
                  break
                case '责令停产整顿':
                  item.searchLabel = '整顿'
                  break
                case '责令停产停业':
                  item.searchLabel = '停业'
                  break
                case '责令停止建设':
                  item.searchLabel = '建设'
                  break
                case '责令停止施工':
                  item.searchLabel = '施工'
                  break
                case '暂停有关执业资格、岗位证书':
                  item.searchLabel = '暂停有关执业资格、岗位证书'
                  break
                case '没收违法所得':
                  item.searchLabel = '所得'
                  break
                case '没收非法开采的煤炭产品、采掘设备':
                  item.searchLabel = '开采'
                  break
                case '撤销有关执业资格、岗位证书':
                  item.searchLabel = '撤销'
                  break
                case '罚款':
                  item.searchLabel = ''
                  break
                case '暂扣安全生产许可证':
                  item.searchLabel = ''
                  break
                case '吊销安全生产许可证':
                  item.searchLabel = ''
                  break
              }
            })
            this.dictionary.subitemType = data.data
          }
        })
        .catch((err) => {
          console.log("获取行政处罚类型码表失败：", err);
        });
    },
    getOnsiteDesc (userSessId) {
      // 现场处理决定码表
      return this.$http.get(
          `/local/dict/listData?type=${(this.userType === 'supervision' ? 'onsite_desc' : 'onsite_desc')}&__sid=${userSessId}`)
        .then(async ({ data }) => {
          if (data.status === "200") {
            data.data.forEach(item => {
              item.id = item.id.trim()
            })
            this.dictionary.onsiteDesc = data.data
          }
        })
        .catch((err) => {
          console.log("获取现场处理决定码表失败：", err);
        });
    },
    getParentType (userSessId) {
      // 煤矿类型
      return this.$http.get(
          `/local/dict/listData?type=${(this.userType === 'supervision' ? 'ParentType' : 'ParentType')}&__sid=${userSessId}`)
        .then(async ({ data }) => {
          if (data.status === "200") {
            data.data.forEach(item => {
              item.id = item.id.trim()
            })
            this.dictionary.parentType = data.data
          }
        })
        .catch((err) => {
          console.log("获取煤矿类型码表失败：", err);
        });
    },
    getMineWsGrade (userSessId) {
      // 瓦斯等级
      return this.$http.get(
          `/local/dict/listData?type=${(this.userType === 'supervision' ? 'MineWsGrade' : 'MineWsGrade')}&__sid=${userSessId}`)
        .then(async ({ data }) => {
          if (data.status === "200") {
            data.data.forEach(item => {
              item.id = item.id.trim()
            })
            this.dictionary.mineWsGrade = data.data
          }
        })
        .catch((err) => {
          console.log("获取瓦斯等级码表失败：", err);
        });
    },
    getGrimeExplosive (userSessId) {
      // 煤尘爆炸性
      return this.$http.get(
          `/local/dict/listData?type=${(this.userType === 'supervision' ? 'GrimeExplosive' : 'GrimeExplosive')}&__sid=${userSessId}`)
        .then(async ({ data }) => {
          if (data.status === "200") {
            data.data.forEach(item => {
              item.id = item.id.trim()
            })
            this.dictionary.grimeExplosive = data.data
          }
        })
        .catch((err) => {
          console.log("获取煤尘爆炸性码表失败：", err);
        });
    },
    getMineMinestyle (userSessId) {
      // 开拓方式
      return this.$http.get(
          `/local/dict/listData?type=${(this.userType === 'supervision' ? 'MineMinestyle' : 'MineMinestyle')}&__sid=${userSessId}`)
        .then(async ({ data }) => {
          if (data.status === "200") {
            data.data.forEach(item => {
              item.id = item.id.trim()
            })
            this.dictionary.mineMinestyle = data.data
          }
        })
        .catch((err) => {
          console.log("获取开拓方式码表失败：", err);
        });
    },
    getMineVentilatestyle (userSessId) {
      // 通风方式
      return this.$http.get(
          `/local/dict/listData?type=${(this.userType === 'supervision' ? 'MineVentilatestyle' : 'MineVentilatestyle')}&__sid=${userSessId}`)
        .then(async ({ data }) => {
          if (data.status === "200") {
            data.data.forEach(item => {
              item.id = item.id.trim()
            })
            this.dictionary.mineVentilatestyle = data.data
          }
        })
        .catch((err) => {
          console.log("获取通风方式码表失败：", err);
        });
    },
    getHydrogeologicalType (userSessId) {
      // 水文地质类型
      return this.$http.get(
          `/local/dict/listData?type=${(this.userType === 'supervision' ? 'HydrogeologicalType' : 'HydrogeologicalType')}&__sid=${userSessId}`)
        .then(async ({ data }) => {
          if (data.status === "200") {
            data.data.forEach(item => {
              item.id = item.id.trim()
            })
            this.dictionary.hydrogeologicalType = data.data
          }
        })
        .catch((err) => {
          console.log("获取水文地质类型码表失败：", err);
        });
    },
    getMineFire (userSessId) {
      // 煤层自燃倾向性
      return this.$http.get(
          `/local/dict/listData?type=${(this.userType === 'supervision' ? 'MineFire' : 'MineFire')}&__sid=${userSessId}`)
        .then(async ({ data }) => {
          if (data.status === "200") {
            data.data.forEach(item => {
              item.id = item.id.trim()
            })
            this.dictionary.mineFire = data.data
          }
        })
        .catch((err) => {
          console.log("获取煤层自燃倾向性码表失败：", err);
        });
    },
    getBaseMineStatusZs (userSessId) {
      // 矿井状态
      return this.$http.get(
          `/local/dict/listData?type=${(this.userType === 'supervision' ? 'base_mine_status_zs' : 'base_mine_status_zs')}&__sid=${userSessId}`)
        .then(async ({ data }) => {
          if (data.status === "200") {
            data.data.forEach(item => {
              item.id = item.id.trim()
            })
            this.dictionary.baseMineStatusZs = data.data
          }
        })
        .catch((err) => {
          console.log("获取矿井状态码表失败：", err);
        });
    },
    async handleUpdateTime(resId) {
      // 根据更新的resId为key更新updateTime为当前时间
      this.updateTime[resId] = getNowFormatTime()
      await this.setDatabase('sourceDownload', [this.updateTime])
    },
    downloadAll () {
      // 下载所有资源
      if (!this.$store.state.onLine) {
        this.$message.error('当前为离线登录，请调整网络后再尝试下载！')
        return
      }
      this.$confirm('请确认是否按照当前下载日期范围下载执法文书资源以及其他所有资源？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          dangerouslyUseHTMLString: true,
          type: 'warning'
        }).then(async () => {
          for (let i = 0; i < this.resIdDict.length; i++) {
            await this.resDownload(this.resIdDict[i].resId)
          }
        }).catch((err) => {
          console.log('下载失败：', err)
        })
    }
  },
};
</script>

<style lang="scss" scoped>
</style>