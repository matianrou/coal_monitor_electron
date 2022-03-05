<!-- 弹窗补充事故类行政处罚金额和类型 -->
<template>
  <el-dialog
    :title="isEdit ? '信息填写' : '信息确认'"
    :close-on-click-modal="false"
    append-to-body
    :visible="visible"
    width="700px"
    top="10vh"
    @close="close"
  >
    <div v-loading="loading" class="punishment-info-fill-main">
      <div class="title" style="justify-content: center; background: #F56C6C;">
        重要信息{{isEdit ? '填写' : '查看'}}
      </div>
      <div class="title">
        {{isEdit ? '请填写' : ''}}事故罚款金额和行政处罚类型
      </div>
      <div>
        <el-form
          ref="dataForm"
          label-position="right"
          label-width="130px"
          :model="dataForm"
          :rules="rules"
          size="small"
          style="margin-top: 20px;"
          :disabled="!isEdit">
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
      <el-button @click="close">{{ isEdit ? '取消' : '返回'}}</el-button>
      <el-button v-if="isEdit" type="primary" @click="confirm">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
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
    },
    paperData: {
      type: Object,
      default: () => {}
    },
    isEdit: { // 是否可编辑
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      loading: false,
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
  watch: {
    async visible (val) {
      await this.getDictionary()
      this.init()
    }
  },
  methods: {
    async getDictionary () {
      let dictionaryList = await this.getDatabase('dictionary')
      let subitemType = dictionaryList.find(item => item.type === 'subitemType')
      let subitemTypeList = JSON.parse(subitemType.list)
      subitemTypeList.sort(sortbyAsc('sort'))
      this.subitemTypeOptions = subitemTypeList
    },
    async init() {
      // 初始化选择
      if (this.paperData && this.paperData.paperId) {
        // 修改已保存的文书时，带入已经保存的数据
        this.dataForm.penaltyMoney = this.paperData.p8Penalty ? Number(this.paperData.p8Penalty) / 10000 : 0
        this.dataForm.selectedType = this.letData.selectedType
        if (this.paperData.p8penaltyType) {
          let typeList = this.paperData.p8penaltyType.split(',')
          this.dataForm.penaltyType = typeList
        }
      } else if (this.letData) {
        // 新建的文书则从文书数据中获取
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