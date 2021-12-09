<!-- 创建检查活动 弹窗组件-->
<template>
  <div>
    <el-dialog
      :title="corpData.corpName ? corpData.corpName : ''"
      :close-on-click-modal="false"
      append-to-body
      :visible="visible"
      :close-on-press-escape="false"
      width="550px"
      @close="cancel"
    >
      <div class="writ-information-main">
        <div class="writ-information-main-title">
          <span>创建检查活动：</span>
        </div>
        <el-form
          ref="dataForm"
          label-position="right"
          label-width="150px"
          :model="dataForm"
          :rules="rules"
        >
          <el-form-item label="检查时间：" prop="searchDate">
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
          <el-form-item label="请选择：" prop="caseType">
            <el-radio-group v-model="dataForm.caseType">
              <el-radio label="0">{{ userType === 'supervision' ? '监管' : '监察' }}</el-radio>
              <el-radio label="1">事故</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="归档至：" prop="address">
            <el-tag>{{ dataForm.address }}</el-tag>
          </el-form-item>
          <el-form-item label="执法活动分类：" prop="caseClassify">
            <el-select
              v-model="dataForm.caseClassify"
              placeholder="请选择执法活动分类">
              <el-option
                v-for="item in dictionary.caseClassify"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
                <div>
                  <span style="color: #606266;">{{ item.label }}</span>
                  <span style="color: #909399;">{{ item.description }}</span>
                </div>
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="重大安全风险研判：" prop="riskAssessmentContent">
            <el-input
              v-model="dataForm.riskAssessmentContent"
              readonly
              type="textarea"
              :rows="5"
              :title="dataForm.riskAssessmentContent || ''"
              placeholder="请选择重大安全风险研判"
              @focus="openDialog('riskAssessment')"
            ></el-input>
          </el-form-item>
        </el-form>
        <select-risk-assessment
          v-if="showDialog.riskAssessment"
          :visible="showDialog.riskAssessment"
          :selected-risk-assessment="dataForm.riskAssessment"
          @close="closeDialog"
          @save="saveRisk"
        ></select-risk-assessment>
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
import { severalDaysLater, getNowFormatDate, getNowFormatTime, getNowTime  } from "@/utils/date";
import { sortbyAsc, randomString } from "@/utils/index";
import selectRiskAssessment from '@/components/select-risk-assessment'
export default {
  name: "WritInformation",
  components: {
    selectRiskAssessment
  },
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
        caseType: '0',
        searchDate: [],
        caseClassify: null, // 活动分类
        riskAssessment: null, // 风险研判编码
        riskAssessmentContent: null, // 风险研判内容
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
        caseType: [
          { required: true, message: "请选择类别", trigger: "change" },
        ],
        caseClassify: [
          { required: true, message: "请选择执法活动分类", trigger: "change" },
        ],
        riskAssessmentContent: [
          { required: true, message: "请选择重大安全风险研判", trigger: "change" },
        ],
      },
      DBName: this.$store.state.DBName,
      userType: this.$store.state.user.userType,
      dictionary: {
        caseClassify: []
      },
      showDialog: {
        riskAssessment: false, // 选择风险研判
      }
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
    async initData() {
      //初始化日期范围
      this.dataForm.startDate = getNowFormatDate();
      this.dataForm.endDate = severalDaysLater(7);
      this.dataForm.searchDate = [
        this.dataForm.startDate,
        this.dataForm.endDate,
      ];
      // 初始化其他数据
      this.dataForm.groupId = this.selectPlanData.selGovUnit
      this.dataForm.address = this.selectPlanData.selGovUnitName
      this.dataForm.planId = this.corpData.dbplanId
      // 初始化码表
      let db = new GoDB(this.DBName);
      let dictionary = db.table('dictionary')
      let caseClassifyListJson = await dictionary.find(item => item.type === 'caseClassify')
      let caseClassifyList = caseClassifyListJson ? JSON.parse(caseClassifyListJson.list) : []
      caseClassifyList.sort(sortbyAsc('sort'))
      // 根据登录用户筛选，如果省级用户展示3个，去掉分局的两个，其他为展示5个
      let person = db.table('person')
      let curPerson = await person.find(item => item.no === this.$store.state.user.userId && item.delFlag !== '1')
      if (curPerson) {
        let curOffice = JSON.parse(curPerson.office)
        if (curOffice.grade === '2') {
          this.dictionary.caseClassify = caseClassifyList.filter(item => !item.label.includes('分局'))
        } else {
          this.dictionary.caseClassify = caseClassifyList
        }
      } else {
        this.$message.error('用户信息查询失败，请重新下载“用户资源”！')
      }
      await db.close()
    },
    changeDate(val) {
      this.dataForm.startDate = val && val.length > 0 ? val[0] : null;
      this.dataForm.endDate = val && val.length > 1 ? val[1] : null;
    },
    cancel(refresh = false) {
      // 关闭弹窗
      this.$refs.dataForm.resetFields();
      this.dataForm.riskAssessment = null
      console.log('this.dataForm', this.dataForm)
      this.initData();
      this.$emit("close", { name: "newCase", refresh });
    },
    async submit() {
      // 提交
      // 调取 doc.js 文件 doSaveCase() 方法
      await this.$refs.dataForm.validate(async (validate) => {
        if (validate) {
          let db = new GoDB(this.DBName);
          let corpId = this.corpData.corpId;
          let corpInfo = db.table("corpBase");
          // 获取煤矿基本信息
          let corpBase = await corpInfo.findAll((item) => {
            return item.corpId === corpId;
          });
          // 获取计划
          let {selPlanDate, selGovUnit} = this.selectPlanData
          let docPlan = db.table("docPlan");
          let corpPlan = await docPlan.findAll(item =>
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
            this.$parent.$refs.caseList.dataForm.isPlan = '其他'
            this.$parent.$refs.caseList.changeSelect('其他', 'isPlan')
          }
          // 刷新页面
          this.cancel(true);
        }
      })
    },
    async doSaveCase(corpBase, corpPlan) {
      let userId = this.$store.state.user.userId;
      let userName = this.$store.state.user.userName;
      let groupId = this.selectPlanData.selGovUnit; // 企业选择的机构id
      let groupName = this.selectPlanData.selGovUnitName; // 企业选择的机构名称
      let sDate = getNowFormatTime();
      let caseId = getNowTime() + randomString(28);
      let caseNo = groupId + getNowTime();
      // 生成文书编号的最后三位自增数字：存储在LocalStorage中，根据userId获取对应数据
      let num = 0
      let userNumber = this.$store.state.user.userNumber
      if(localStorage.getItem(`addSelfNum-${this.$store.state.user.userId}-${userNumber}`)) {
        num = Number(localStorage.getItem(`addSelfNum-${this.$store.state.user.userId}-${userNumber}`)) + 1
        localStorage.setItem(`addSelfNum-${this.$store.state.user.userId}-${userNumber}`, num)
      } else {
        num = 1
        localStorage.setItem(`addSelfNum-${this.$store.state.user.userId}-${userNumber}`, 1)
      }
      // numString三位数字存储进wkCase表中，文书编号生成时抓取
      let numString = (Array(3).join(0) + num).slice(-3)
      let jsonCase = {
        caseId: caseId,
        caseNo: caseNo,
        caseSn: `${userNumber}${numString}`, // 文书编号后五位：用户userNumber+自增三位数字
        caseType: this.dataForm.caseType,
        remoteId: "",
        delFlag: "0",
        affiliate: groupName, // 归档机构
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
        checkReason: "1",
        checkStatus: this.dataForm.caseType,
        planBeginDate: this.dataForm.startDate,
        planEndDate: this.dataForm.endDate,
        meikuangType: corpBase.meikuangType,
        meikuangPlanfrom: "3", // 是否计划内的，此处创建不是检查计划中的所以写死'3'其他
        planId: corpPlan ? corpPlan.dbplanId : '',
        pcMonth: this.selectPlanData.selPlanDate,
        caseClassify: this.dataForm.caseClassify,
        riskAssessment: this.dataForm.riskAssessment,
        riskAssessmentContent: this.dataForm.riskAssessmentContent,
      };
      let db = new GoDB(this.DBName);
      // 保存case 表
      let wkCase = db.table("wkCase");
      await wkCase.add(jsonCase);
      await db.close();
      // 回调 渲染方法
      this.$message.success("检查活动已经创建完毕");
    },
    closeDialog ({page}) {
      this.showDialog[page] = false
    },
    openDialog (page) {
      // 打开选择弹窗
      this.showDialog[page] = true
    },
    saveRisk ({data}) {
      // 保存风险研判
      let contents = ''
      let ids = ''
      data.map(item => {
        ids += item.id + ','
        if (item.name === '其他') {
          if (item.content) {
            contents += `${item.name}: ${item.content}，`
          } else {
            contents += item.name + ','
          }
        } else {
          contents += item.name + ','
        }
      })
      ids = ids.substring(0, ids.length - 1)
      contents = contents.substring(0, contents.length - 1)
      this.dataForm.riskAssessment = ids
      this.dataForm.riskAssessmentContent = contents
      this.showDialog.riskAssessment = false
    }
  },
};
</script>

<style lang="scss" scoped>
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
  .case-classify-dictionary {
    display: flex;
    flex-direction: column;

  }
}
</style>
