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
          <td>2020/10/02 18:20:36</td>
          <td style="text-align:center;" id="cell-org-down">
            <button
              id="btn-org-down"
              style="width:80px;height:28px;border:0;border-radius:10px;"
              @click="resDownload('org')"
            >下载</button>
          </td>
        </tr>
        <tr style="height:36px;background-color:#fff;color:#666;border-top:1px solid #DCECFB;">
          <td style="text-align:center;">&nbsp;</td>
          <td>用户资源</td>
          <td>2020/11/15 14:48:42</td>
          <td style="text-align:center;" id="cell-person-down">
            <button
              id="btn-person-down"
              style="width:80px;height:28px;border:0;border-radius:10px;"
              @click="resDownload('person')"
            >下载</button>
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
          <td>2020/11/15 13:57:22</td>
          <td style="text-align:center;" id="cell-plan-down">
            <button
              id="btn-plan-down"
              style="width:80px;height:28px;border:0;border-radius:10px;"
              @click="resDownload('plan')"
            >下载</button>
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
          <td>2020/11/15 15:10:25</td>
          <td style="text-align:center;" id="cell-corp-down">
            <button
              id="btn-corp-down"
              style="width:80px;height:28px;border:0;border-radius:10px;"
              @click="resDownload('corp')"
            >下载</button>
          </td>
        </tr>
        <tr style="height:36px;background-color:#fff;color:#666;border-top:1px solid #DCECFB;">
          <td style="text-align:center;">&nbsp;</td>
          <td>行政区域</td>
          <td>2020/11/15 15:10:25</td>
          <td style="text-align:center;" id="cell-EnterpriseList-down">
            <button
              id="btn-EnterpriseList-down"
              style="width:80px;height:28px;border:0;border-radius:10px;"
              @click="resDownload('EnterpriseList')"
            >下载</button>
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
          <td>2020/10/02 18:20:36</td>
          <td style="text-align:center;" id="cell-check-cate-down">
            <button
              id="btn-check-cate-down"
              style="width:80px;height:28px;border:0;border-radius:10px;"
              @click="resDownload('check-cate')"
            >下载</button>
          </td>
        </tr>
        <tr style="height:36px;background-color:#fff;color:#666;border-top:1px solid #DCECFB;">
          <td style="text-align:center;">&nbsp;</td>
          <td>检查项内容</td>
          <td>2020/10/02 18:20:36</td>
          <td style="text-align:center;" id="cell-check-list-down">
            <button
              id="btn-check-list-down"
              style="width:80px;height:28px;border:0;border-radius:10px;"
              @click="resDownload('check-list')"
            >下载</button>
          </td>
        </tr>
        <tr style="height:36px;background-color:#fff;color:#666;border-top:1px solid #DCECFB;">
          <td style="text-align:center;">&nbsp;</td>
          <td>隐患类别</td>
          <td>2020/10/02 18:20:36</td>
          <td style="text-align:center;" id="cell-danger-cate-down">
            <button
              id="btn-danger-cate-down"
              style="width:80px;height:28px;border:0;border-radius:10px;"
              @click="resDownload('danger-cate')"
            >下载</button>
          </td>
        </tr>
        <tr style="height:36px;background-color:#fff;color:#666;border-top:1px solid #DCECFB;">
          <td style="text-align:center;">&nbsp;</td>
          <td>隐患内容</td>
          <td>2020/10/02 18:20:36</td>
          <td style="text-align:center;" id="cell-danger-list-down">
            <button
              id="btn-danger-list-down"
              style="width:80px;height:28px;border:0;border-radius:10px;"
              @click="resDownload('danger-list')"
            >下载</button>
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
          <td>2020/10/02 18:20:36</td>
          <td style="text-align:center;" id="cell-doc-down">
            <button
              id="btn-doc-down"
              style="width:80px;height:28px;border:0;border-radius:10px;"
              @click="resDownload('doc')"
            >下载</button>
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
import { doOrgDb, doPersonDb, doPlanDb, doCorpDb, doEnterpriseList, doCheckCateDb, doCheckListDb, doDangerCateDb, doDangerListDb, doDocDb } from "@/utils/supervision/downloadSource"
export default {
  name: "SupervisionSourceDownload",
  data() {
    return {};
  },
  created() {},
  methods: {
    /*! *****************************************************************************
    资源下载、任务/活动创建、文书保存及归档
    ***************************************************************************** */
    resDownload(resId) {
      let objLink = document.getElementById("btn-" + resId + "-down");
      objLink.disabled = true;
      let userId = this.$store.state.user.userId;
      let userSessId = this.$store.state.user.userSessId;
      let userGroupId = this.$store.state.user.userGroupId;
      let uri = '';
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
        case "check-cate": //根据机构id获取全部检查类别
          uri +=
            "/local/schema/getCategoryAll?__sid=" +
            userSessId +
            "&officeId=" +
            userGroupId;
          break;
        case "check-list": //根据机构id获取全部检查内容
          uri +=
            "/local/schema/getItemAll?__sid=" +
            userSessId +
            "&officeId=" +
            userGroupId;
          break;
        case "danger-cate":
          //根据机构id获取全部隐患类别
          uri +=
            "/local/statute/getCategoryAll?__sid=" +
            userSessId +
            "&officeId=" +
            userGroupId;
          break;
        case "danger-list":
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
            "&officeId=&caseId=&flag=false&pageNo=0&pageSize=10";
          break;
        case "EnterpriseList":
          //文书信息分页下载接口//文书信息分页下载接口
          uri += "/local/area/list?__sid=" + userSessId;
          break;

        //下载机构所有文书，
      }
      this.$http
        .get(`${uri}`)
        .then(async (response) => {
          if (response.status != 200) {
            this.$message.error(
              "远程请求异常，可能是认证信息超时，请重新登录。"
            );
            objLink.disabled = false;
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
                case "EnterpriseList":
                  await doEnterpriseList(resId, response.data.data);
                  this.$message.success('“行政区域”已经下载完毕。');
                  break;
                case "check-cate":
                  await doCheckCateDb(resId, response.data.data);
                  this.$message.success('“检查项类别”已经下载完毕。');
                  break;
                case "check-list":
                  await doCheckListDb(resId, response.data.data);
                  this.$message.success('“检查项内容”已经下载完毕。');
                  break;
                case "danger-cate":
                  await doDangerCateDb(resId, response.data.data);
                  this.$message.success('“隐患类别”已经下载完毕。');
                  break;
                case "danger-list":
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
          }
        })
        .catch((err) => {
          this.$message.error("远程请求异常，可能是认证信息超时，请重新登录。");
          console.log("下载失败：", err);
          objLink.disabled = false;
        });
    },
    saveDBData(listData, ) {
      if (listData && listData.length > 0) {
        listData
      }
    }
  },
};
</script>

<style lang="scss" scoped>
</style>