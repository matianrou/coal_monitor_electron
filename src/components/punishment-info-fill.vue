<!-- 弹窗补充事故类行政处罚金额和类型 -->
<template>
  <el-dialog
    title="信息填写与确认"
    :close-on-click-modal="false"
    append-to-body
    :visible="visible"
    width="700px"
    top="10vh"
    @close="close"
  >
    <div v-loading="loading" class="punishment-info-fill-main">
      <div class="title" style="justify-content: center; background: #F56C6C;">
        重要信息填写
      </div>
      <div class="title">
        请填写事故罚款金额和行政处罚类型
      </div>
      <div>
        <el-form
          ref="dataForm"
          label-position="right"
          label-width="130px"
          :model="dataForm"
          :rules="rules"
          size="small"
          style="margin-top: 20px;">
          <el-form-item label="行政处罚对象：" prop="selectedType">
            <el-input 
              v-model="dataForm.selectedType" 
              placeholder="请输入行政处罚对象" 
              style="width: 100px;"
              disabled
            ></el-input>
          </el-form-item>
          <el-form-item label="行政罚款金额：" prop="penaltyMoney">
            <el-input-number 
              v-model="dataForm.penaltyMoney"
              :controls="false" 
              :min="0" 
              size="small"
              style="width: 100px;"
              placeholder="请输入行政罚款金额(万元)">
            </el-input-number>
            <span>万元</span>
          </el-form-item>
          <el-form-item label="行政处罚类型：" prop="penaltyType">
            <el-select 
              v-model="dataForm.penaltyType"
              placeholder="请选择行政处罚类型"
              multiple>
              <el-option
                v-for="item in subitemTypeOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="close">取消</el-button>
      <el-button type="primary" @click="confirm">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import GoDB from "@/utils/godb.min.js";
import { retrunGetMoney, getPenaltyDescType } from '@/utils/setInitPaperData'
import { sortbyAsc } from "@/utils/index";
export default {
  name: "PunishmentInfoFill",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    letData: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      loading: false,
      DBName: this.$store.state.DBName,
      dataForm: {
        selectedType: null,
        penaltyMoney: 0,
        penaltyType: null,
      },
      rules: {
        selectedType: [
          { required: true, message: "请输入行政处罚对象", trigger: "blur" },
        ],
        penaltyMoney: [
          { required: true, message: "请输入行政罚款金额", trigger: "blur" },
        ],
      },
      subitemTypeOptions: [], // 行政处罚类型码表
    };
  },
  async created() {
    await this.getDictionary()
    this.init()
  },
  methods: {
    async getDictionary () {
      let db = new GoDB(this.DBName)
      let dictionary = db.table('dictionary')
      let subitemType = await dictionary.findAll(item => item.type === 'subitemType')
      let subitemTypeList = JSON.parse(subitemType[0].list)
      subitemTypeList.sort(sortbyAsc('sort'))
      this.subitemTypeOptions = subitemTypeList
      await db.close()
    },
    async init() {
      // 初始化选择
      if (this.letData) {
        this.dataForm.selectedType = this.letData.selectedType
        // 根据行政处罚获取罚金和类型
        let {money} = retrunGetMoney(this.letData.cellIdx10)
        let {id} = getPenaltyDescType(this.letData.cellIdx10, this.subitemTypeOptions)
        this.dataForm.penaltyMoney = money ? money / 10000 : 0
        if (id) {
          let idList = id.split(',')
          this.dataForm.penaltyType = idList
        } else {
          this.dataForm.penaltyType = []
        }
      }
    },
    close(refresh) {
      this.$emit("close", { page: "punishmentInfoFill", refresh });
    },
    confirm() {
      // 关闭弹窗，并赋值
      this.$emit('confirm', this.dataForm)
    },
  },
};
</script>

<style lang="scss" scoped>
/deep/ .el-dialog__body {
  padding: 10px 30px;
  border-top: 1px solid #DCDFE6;
}
.punishment-info-fill-main {
  .title {
    height: 30px;
    background: #4F83E9;
    color: #fff;
    padding: 2px 10px;
    display: flex;
    align-items: center;
  }
}
</style>