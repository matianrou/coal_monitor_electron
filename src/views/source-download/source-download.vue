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
import { doOrgDb, doPersonDb, doPlanDb, doCorpDb, doEnterpriseList, doCheckCateDb, doCheckListDb, doDangerCateDb, doDangerListDb, doDocDb } from "@/utils/downloadSource"
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
        org: null,
        person: null,
        plan: null,
        corp: null,
        enterpriseList: null,
        checkCate: null,
        checkList: null,
        dangerCate: null,
        dangerList: null,
        doc: null,
      }
    };
  },
  async created() {
    await this.init()
  },
  methods: {
    async init () {
      // 初始化更新时间
      const db = new GoDB(this.DBName);
      const sourceDownload = db.table('sourceDownload')
      let downloadData = await sourceDownload.find(item => item)
      if (downloadData) {
        this.updateTime = downloadData
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
    resDownload(resId) {
      let objLink = document.getElementById("btn-" + resId + "-down");
      objLink.disabled = true;
      let userId = this.$store.state.user.userId;
      let userSessId = this.$store.state.user.userSessId;
      let userGroupId = this.$store.state.user.userGroupId;
      let path = this.$store.state.DBName === 'CoalSupervisionDB' ? '/sv' : ''
      let uri = `${path}`;
      switch (resId) {
        case "org":
          uri +=
            "/local/office/list?__sid=" +
            userSessId +
            "&officeId=" +
            userGroupId +
            "&allOffice=true";
          break;
        case "person":
          uri +=
            "/local/user/getUserByOfficeId?__sid=" +
            userSessId +
            "&officeId=" +
            userGroupId;
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
      this.$http
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
    },
    async handleUpdateTime(resId) {
      // 根据更新的resId为key更新updateTime为当前时间
      const db = new GoDB(this.DBName);
      const sourceDownload = db.table('sourceDownload')
      this.updateTime[resId] = getNowFormatTime()
      await sourceDownload.put(this.updateTime)
      await db.close()
    }
  },
};
</script>

<style lang="scss" scoped>
</style>