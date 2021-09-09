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
import { sevenafter, getNowFormatDate, getNowFormatTime, getNowTime  } from "@/utils/date";
import { getRandom, randomString } from "@/utils/index";
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
    selectPlanData: {
      type: Object,
      default: () => {
        return {
          selPlanDate: null,
          selGovUnit: null,
          selGovUnitName: null
        }
      }
    }
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
        groupId: null,
        address: null,
        planId: null,
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
      DBName: this.$store.state.DBName
    };
  },
  created() {
    this.initData();
  },
  watch: {
    'selectPlanData.selGovUnit'(val) {
      this.initData()
    }
  },
  methods: {
    initData() {
      //初始化日期范围
      this.dataForm.startDate = getNowFormatDate();
      this.dataForm.endDate = sevenafter(7);
      this.dataForm.searchDate = [
        this.dataForm.startDate,
        this.dataForm.endDate,
      ];
      // 初始化其他数据
      this.dataForm.groupId = this.selectPlanData.selGovUnit
      this.dataForm.address = this.selectPlanData.selGovUnitName
      this.dataForm.planId = this.corpData.dbplanId
    },
    changeDate(val) {
      this.dataForm.startDate = val && val.length > 0 ? val[0] : null;
      this.dataForm.endDate = val && val.length > 1 ? val[1] : null;
    },
    cancel(refresh = false) {
      // 关闭弹窗
      this.$refs.dataForm.resetFields();
      this.initData();
      this.$emit("close", { name: "newCase", refresh });
    },
    async submit() {
      // 提交
      // 调取 doc.js 文件 doSaveCase() 方法
      const db = new GoDB(this.DBName);
      const corpId = this.corpData.corpId;
      const corpInfo = db.table("corpBase");
      // 获取煤矿基本信息
      const corpBase = await corpInfo.findAll((item) => {
        return item.corpId === corpId;
      });
      // 获取计划
      const {selPlanDate, selGovUnit} = this.selectPlanData
      const docPlan = db.table("docPlan");
      const corpPlan = await docPlan.findAll(item =>
      item.corpId === corpId && item.groupId === selGovUnit
      && (`${item.planYear}-${item.planMonth}` === selPlanDate))
      await db.close();
      // 创建检查活动
      if (corpPlan.length > 0 && corpPlan[0].dbplanId) {
        // 所选煤矿、检查日期年月、归档机构均符合时，直接创建检查活动
        await this.doSaveCase(corpBase[0], corpPlan[0]);
      } else {
        // 无计划时，创建无planId的检查活动，放入其他类型中
        await this.doSaveCase(corpBase[0]);
        // 创建成功后进入其他选择页签
        this.$parent.$refs.caseList.dataForm.caseType = '其他'
        this.$parent.$refs.caseList.changeSelect('其他', 'caseType')
      }
      // 刷新页面
      this.cancel(true);
    },
    async doSaveCase(corpBase, corpPlan) {
      let userId = this.$store.state.user.userId;
      let userName = this.$store.state.user.userName;
      let groupId = this.selectPlanData.selGovUnit; // 企业选择的机构id
      let groupName = this.selectPlanData.selGovUnitName; // 企业选择的机构名称
      let sDate = getNowFormatTime();
      let caseId = getNowTime() + randomString(18);
      let caseNo = groupId + getNowTime();
      // 生成文书编号的最后三位自增数字：存储在LocalStorage中，根据userId获取对应数据
      let num = 0
      let userNumber = this.$store.state.user.userNumber
      if(localStorage.getItem(`addSelfNum-${userNumber}`)) {
        num = Number(localStorage.getItem(`addSelfNum-${userNumber}`)) + 1
        localStorage.setItem(`addSelfNum-${userNumber}`, num)
      } else {
        num = 1
        localStorage.setItem(`addSelfNum-${userNumber}`, 1)
      }
      // numString三位数字存储进wkCase表中，文书编号生成时抓取
      let numString = (Array(3).join(0) + num).slice(-3)
      let jsonCase = {
        caseId: caseId,
        caseNo: caseNo,
        caseSn: `${userNumber}${numString}`, // 文书编号后五位：用户userNumber+自增三位数字
        remoteId: "",
        delFlag: "0",
        createDate: sDate,
        updateDate: sDate,
        createById: userId,
        updateById: userId,
        corpId: corpBase.corpId,
        corpName: corpBase.corpName,
        personId: userId,
        personName: userName,
        groupId: groupId,
        groupName: groupName,
        caseType: this.dataForm.checkStatus,
        checkReason: "1",
        checkStatus: "0",
        planBeginDate: this.dataForm.startDate,
        planEndDate: this.dataForm.endDate,
        meikuangType: corpBase.meikuangType,
        meikuangPlanfrom: corpBase.meikuangPlanfrom ? corpBase.meikuangPlanfrom : "1",
        planId: corpPlan ? corpPlan.dbplanId : '',
        pcMonth: this.selectPlanData.selPlanDate,
      };
      const db = new GoDB(this.DBName);
      // 保存case 表
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
