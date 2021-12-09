<!-- 弹窗新建违法违规行为 -->
<template>
  <el-dialog
    title="新建违法违规行为"
    :close-on-click-modal="false"
    :show-close="false"
    append-to-body
    :visible="visible"
    top="5vh"
    width="850px">
    <div style="margin-top: 20px;">
      <el-form
        :model="dataForm"
        ref="dataForm"
        label-position="right"
        label-width="130px"
        :rules="rules">
        <el-form-item
          label="隐患从属类别："
          prop="categoryCode"
          style="width: 100%;"
          ref="categoryCode">
          <el-select 
            v-model="dataForm.firstDangerType"
            placeholder="请选择从属类别"
            @change="val => changeDangerCate(val, '0')">
            <el-option
              v-for="item in dangerCateOptions.dangerCateList"
              :key="item.categoryCode"
              :label="item.categoryName"
              :value="item.categoryCode">
            </el-option>
          </el-select>
          <el-select 
            v-model="dataForm.secDangerType"
            placeholder="请选择从属类别"
            @change="val => changeDangerCate(val, '1')">
            <el-option
              v-for="item in dangerCateOptions.dangerCateSecList"
              :key="item.categoryCode"
              :label="item.categoryName"
              :value="item.categoryCode">
            </el-option>
          </el-select>
          <el-select 
            v-model="dataForm.categoryCode"
            placeholder="请选择从属类别"
            @change="val => changeDangerCate(val, '2')">
            <el-option
              v-for="item in dangerCateOptions.dangerCateThirdList"
              :key="item.categoryCode"
              :label="item.categoryName"
              :value="item.categoryCode">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          label="违法违规行为："
          prop="itemContent">
          <el-input
            v-model.trim="dataForm.itemContent"
            placeholder="请填写违法违规行为"
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4}"
            :maxlength="200">
          </el-input>
        </el-form-item>
        <el-form-item
          label="违法认定法条："
          prop="confirmBasis">
          <el-input
            v-model.trim="dataForm.confirmBasis"
            type="textarea"
            placeholder="请填写违法认定法条"
            :autosize="{ minRows: 2, maxRows: 4}"
            :maxlength="300">
          </el-input>
        </el-form-item>
        <el-form-item
          label="现场处理依据："
          prop="onsiteBasis">
          <el-input
            v-model.trim="dataForm.onsiteBasis"
            type="textarea"
            placeholder="请填写现场处理依据"
            :autosize="{ minRows: 2, maxRows: 4}"
            :maxlength="300">
          </el-input>
        </el-form-item>
        <el-form-item
          label="现场处理措施："
          prop="onsiteDesc">
          <el-input
            v-model.trim="dataForm.onsiteDesc"
            type="textarea"
            placeholder="请填写现场处理措施"
            :autosize="{ minRows: 2, maxRows: 4}"
            :maxlength="300">
          </el-input>
        </el-form-item>
        <el-form-item
          label="行政处罚依据："
          prop="penaltyBasis">
          <el-input
            v-model.trim="dataForm.penaltyBasis"
            type="textarea"
            placeholder="请填写行政处罚依据"
            :autosize="{ minRows: 2, maxRows: 4}"
            :maxlength="300">
          </el-input>
        </el-form-item>
        <el-form-item
          label="行政处罚决定："
          prop="penaltyDesc">
          <el-input
            v-model.trim="dataForm.penaltyDesc"
            type="textarea"
            placeholder="请填写行政处罚决定"
            :autosize="{ minRows: 2, maxRows: 4}"
            :maxlength="300">
          </el-input>
        </el-form-item>
      </el-form>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="close">取消</el-button>
      <el-button type="primary" @click="confirm">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import GoDB from "@/utils/godb.min.js";
import { treeDataTranslate } from '@/utils'
export default {
  name: "AddDanger",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    var validateCate = (rule, value, callback) => {
      let {firstDangerType, secDangerType, categoryCode} = this.dataForm
      if (!firstDangerType || !secDangerType || !categoryCode) {
        callback('请选择隐患从属类别！')
      } else {
        callback()
      }
    }
    return {
      DBName: this.$store.state.DBName,
      dataForm: {
        firstDangerType: null,
        secDangerType: null,
        categoryCode: null,
        itemContent: null,
        confirmBasis: null,
        onsiteBasis: null,
        onsiteDesc: null,
        penaltyBasis: null,
        penaltyDesc: null
      },
      rules: {
        itemContent: [
          { required: true, message: '请填写违法行为描述', tirgger: 'blur' }
        ],
        onsiteDesc: [
          { required: true, message: '请填写现场处理决定', tirgger: 'blur' }
        ],
        categoryCode: [
          {required: true, message: '请选择隐患从属类别', trigger: 'change'},
          { validator: validateCate, trigger: 'change' }
        ]
      },
      dangerCateOptions: { // 隐患类别码表，用于修改从属类别
        dangerCateList: [],
        dangerCateSecList: [],
        dangerCateThirdList: []
      },
    };
  },
  created() {
    this.getDangerCate()
  },
  methods: {
    close(refresh) {
      this.$emit("close", { page: "addDanger", refresh });
    },
    confirm() {
      // 关闭弹窗，并赋值
      this.$refs.dataForm.validate(validate => {
        if (validate) {
          this.$emit("confirm", this.dataForm);
          this.$refs.dataForm.resetFields()
          this.dataForm.firstDangerType = null
          this.dataForm.secDangerType = null
          this.close()
        }
      })
    },
    async getDangerCate () {
      // 获取隐患从属类别三级码表
      let db = new GoDB(this.DBName);
      let dangerCate = db.table('dangerCate')
      let dangerCateData = await dangerCate.findAll((item) => item.delFlag !== '1');
      await db.close()
      let list = treeDataTranslate([...dangerCateData] || [], 'treeId', 'treeParentId')
      this.dangerCateOptions.dangerCateList = list
    },
    changeDangerCate (val, level = '0') {
      // 修改隐患从属类别
      // 赋值，同时赋值码表
      if (level === '0') {
        let cur = this.dangerCateOptions.dangerCateList.filter(item => item.categoryCode === val)
        this.dangerCateOptions.dangerCateSecList = cur[0].children
        // 清空第二级和第三级从属类别
        this.dataForm.secDangerType = null
        this.dataForm.categoryCode = null
        this.dangerCateOptions.dangerCateThirdList = []
      } else if (level === '1') {
        let cur = this.dangerCateOptions.dangerCateSecList.filter(item => item.categoryCode === val)
        this.dangerCateOptions.dangerCateThirdList = cur[0].children
        // 第三级从属类别
        this.dataForm.categoryCode = null
      } else if (level === '2') {
        if (this.dataForm.isCommon === '1') {
          this.dataForm.categoryCode = val
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>