<!-- 创建检查活动 弹窗组件-->
<template>
  <div>
    <el-dialog
      :title="corpData.corpName ? corpData.corpName : ''"
      :close-on-click-modal="false"
      append-to-body
      :visible="visible"
      :close-on-press-escape="false"
      width="500px"
      @close="cancel"
    >
      <div class="writ-information-main">
        <div class="writ-information-main-title">
          <span>创建检查活动：</span>
        </div>
        <el-form
          ref="dataForm"
          label-position="right"
          label-width="100px"
          :model="dataForm"
          :rules="rules"
        >
          <el-form-item label="日期范围：" prop="searchDate">
            <el-date-picker
              v-model="dataForm.searchDate"
              type="daterange"
              format="yyyy-MM-dd"
              value-format="yyyy-MM-dd"
              range-separator="至"
              start-placeholder="检查起始日期"
              end-placeholder="检查结束日期"
              :unlink-panels="true"
              @change="changeDate"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="请选择：" prop="checkStatus">
            <el-radio-group v-model="dataForm.checkStatus">
              <el-radio :label="0">监察</el-radio>
              <el-radio :label="1">事故</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="归档至：" prop="address">
            <el-tag>{{ dataForm.address }}</el-tag>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel">取消</el-button>
        <el-button type="primary" @click="submit">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import GoDB from "@/utils/godb.min.js";
import { sevenafter, getNowFormatDate } from "@/utils/date";
import { getRandom, randomString } from "@/utils/index";
import { getNowFormatTime, getNowTime, getNowDay } from '@/utils/date'
export default {
  name: "WritInformation",
  components: {},
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    corpData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    var validateDate = (rule, value, callback) => {
      if (!this.dataForm.startDate) {
        callback(new Error("请选择检查起始日期"));
      } else if (!this.dataForm.endDate) {
        callback(new Error("请选择检查结束日期"));
      } else {
        callback();
      }
    };
    return {
      dataForm: {
        address: this.$getStorage("_glb_user_gname"),
        planId: "",
        startDate: "",
        endDate: "",
        checkStatus: 0,
        searchDate: [],
      },
      rules: {
        searchDate: [
          {
            required: true,
            message: "请选择检查起始及结束日期",
            trigger: "change",
          },
          { validator: validateDate, trigger: "change" },
        ],
        checkStatus: [
          { required: true, message: "请选择类别", trigger: "change" },
        ],
      },
    };
  },
  created() {
    this.initDate();
  },
  methods: {
    initDate() {
      //初始化日期范围
      this.dataForm.startDate = getNowFormatDate();
      this.dataForm.endDate = sevenafter(7);
      this.dataForm.searchDate = [
        this.dataForm.startDate,
        this.dataForm.endDate,
      ];
    },
    changeDate(val) {
      this.dataForm.startDate = val && val.length > 0 ? val[0] : null;
      this.dataForm.endDate = val && val.length > 1 ? val[1] : null;
    },
    cancel(refresh = false) {
      // 关闭弹窗
      this.$refs.dataForm.resetFields();
      this.initDate();
      this.$emit("close", { name: "createPlan", refresh });
    },
    async submit() {
      // 提交
      // 调取 doc.js 文件 doSaveCase() 方法
      const servedb = new GoDB("CoalDB");
      const corpId = this.corpData.corpId;
      const orgInfo = servedb.table("corpBase");
      const arrPaper = await orgInfo.findAll((item) => {
        return item.corpId == corpId;
      });
      await servedb.close();
      if (!this.dataForm.planId) {
        const dbNewplanId = getRandom(20);
        await this.doSaveCase(
          dbNewplanId,
          this.dataForm.startDate,
          this.dataForm.endDate,
          this.dataForm.checkStatus,
          arrPaper
        );
      }
      // 刷新页面
      this.cancel(true);
      this.$removeStorage("corpId");
    },
    async doSaveCase(dbNewplanId, startDate, endDate, checkStatus, arrPaper) {
      var date1 = startDate;
      var date2 = endDate;
      var userId = this.$getStorage("_glb_user_id");
      var userName = this.$getStorage("_glb_user_name");
      var groupId = this.$getStorage("_glb_user_gid");
      var groupName = this.$getStorage("_glb_user_gname");
      var sType = checkStatus;
      var corpId = arrPaper[0].corpId;
      var corpName = arrPaper[0].corpName;
      var planMonth = this.$parent.$refs.orgSelect.dataForm.selPlanDate;
      var meikuangType = arrPaper[0].meikuangType; // 计划下载里
      var meikuangPlanfrom = "1";
      var sDate = getNowFormatTime();
      var caseId = "c" + getNowTime() + randomString(18);
      var caseNo = groupId + getNowDay();
      const schema = {
        wkCase: {
          caseId: {
            //第1次做文书时，活动的唯一id：185b15772fb746dfb3643a66aa192f86
            type: String,
            unique: true,
          },
          caseNo: String, //机构id+年月日时分秒：34060013074120210615110030
          remoteId: String, //服务器端生成的id
          caseType: String, //活动类型
          delFlag: String,
          createDate: String,
          updateDate: String,
          createById: String,
          updateById: String,
          corpId: String, //企业id
          corpName: String, //企业名称
          personId: String, //文书制作人id
          personName: String, //文书制作人名称
          groupId: String, //机构id
          groupName: String, //机构名称
          checkReason: String, // "1",
          checkStatus: String, // "0",
          planBeginDate: String, //检查开始日期：2021-06-15 00:00:00
          planEndDate: String, //检查结束日期：2021-06-22 00:00:00
          meikuangType: String, //docPlan表-meikuangType字段
          meikuangPlanfrom: String, //docPlan表-meikuangPlanfrom字段
          planId: String, //docPlan表-no字段
          pcMonth: String, //计划时间（年月）：2021-6
        },
      };
      var jsonCase = {
        caseId: caseId,
        caseNo: caseNo,
        remoteId: "",
        delFlag: "0",
        createDate: sDate,
        updateDate: sDate,
        createById: userId,
        updateById: userId,
        corpId: corpId,
        corpName: corpName,
        personId: userId,
        personName: userName,
        groupId: groupId,
        groupName: groupName,
        caseType: sType,
        checkReason: "",
        checkStatus: "0",
        planBeginDate: date1,
        planEndDate: date2,
        meikuangType: meikuangType,
        meikuangPlanfrom: meikuangPlanfrom,
        planId: this.$getStorage("planId"),
        pcMonth: planMonth,
      };
      const db = new GoDB("CoalDB", schema);
      // 保存时应该存到 case 表
      const wkCase = db.table("wkCase");
      await wkCase.add(jsonCase);
      await db.close();
      // 回调 渲染方法
      this.$message.success("检查活动已经创建完毕");
    },
  },
};
</script>

<style lang="scss" scoped>
/deep/ .el-dialog__body {
  padding: 10px 20px;
}
.writ-information-main {
  display: flex;
  flex-direction: column;
  .writ-information-main-title {
    height: 35px;
    line-height: 35px;
    padding-left: 10px;
    color: #fff;
    font-size: 16px;
    background: #4f83e9;
    margin-bottom: 15px;
  }
}
</style>
