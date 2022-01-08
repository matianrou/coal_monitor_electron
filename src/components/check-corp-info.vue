<!-- 确认回传煤矿信息弹窗 -->
<template>
  <el-dialog
    title="企业基本信息查看"
    :close-on-click-modal="false"
    :show-close="false"
    append-to-body
    :visible="visible"
    top="5vh"
    width="850px">
    <div v-loading="loading.save" class="check-corp-info-main">
      <div class="check-corp-info-title">
        <div>
          <img src="./assets/image/company.png" alt="" style="vertical-align: text-bottom;" />
          <span class="check-corp-name">{{corpData.corpName}}</span>
        </div>
        <span class="check-corp-title-description"><i class="el-icon-warning-outline" />请确认煤矿基本信息，如有不正确的内容，请在这个界面进行修改</span>
      </div>
      <el-form
        :model="dataForm"
        ref="dataForm"
        label-position="right"
        label-width=""
        :rules="rules"
        class="check-corp-form">
        <el-row class="session-content">
          <el-col :span="24" class="col-span-row">
            <el-form-item
              prop="corpName">
              <template slot="label">
                <span class="title">煤矿名称</span>
              </template>
              <div class="content">
                <el-input
                  v-model.trim="dataForm.corpName"
                  placeholder="煤矿名称"
                  :disabled="true">
                </el-input>
              </div>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row class="session-content">
          <el-col :span="24" class="col-span-row">
            <el-form-item
              prop="address">
              <template slot="label">
                <span class="title">煤矿地址</span>
              </template>
              <div class="content">
                <el-input
                  v-model.trim="dataForm.address"
                  placeholder="煤矿地址"
                  type="textarea"
                  :rows="2"
                  :maxlength="200"
                  :disabled="true">
                </el-input>
              </div>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row class="session-content">
          <el-col :span="12" class="col-span-left">
            <el-form-item
              prop="parentType">
              <template slot="label">
                <span class="title">煤矿类型</span>
              </template>
              <div class="content">
                <el-select 
                  v-model="dataForm.parentType"
                  placeholder="煤矿类型">
                  <el-option
                    v-for="item in dictionary.parentType"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </el-form-item>
          </el-col>
          <el-col :span="12" class="col-span-right">
            <el-form-item
              prop="ckxkzExpireTime">
              <template slot="label">
                <span class="title">采矿许可证失效日期</span>
              </template>
              <div class="content">
                <el-date-picker
                  v-model="dataForm.ckxkzExpireTime"
                  type="date"
                  format="yyyy-MM-dd"
                  value-format="yyyy-MM-dd"
                  placeholder="采矿许可证失效日期"
                  :clearable="false">
                </el-date-picker>
              </div>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row class="session-content">
          <el-col :span="12" class="col-span-left">
            <el-form-item
              prop="provedOutput">
              <template slot="label">
                <span class="title">核定产能</span>
              </template>
              <div class="content">
                <el-input-number 
                  v-model="dataForm.provedOutput"
                  :controls="false" 
                  :min="0" 
                  style="width: 100px;"
                  placeholder="核定产能（万吨/年）"
                  @change="val => changeValue(val, 'provedOutput')">
                </el-input-number>
                <span>（万吨/年）</span>
              </div>
            </el-form-item>
          </el-col>
          <el-col :span="12" class="col-span-right">
            <el-form-item
              prop="aqscxkzExpireTime">
              <template slot="label">
                <span class="title">安全生产许可证失效日期</span>
              </template>
              <div class="content">
                <el-date-picker
                  v-model="dataForm.aqscxkzExpireTime"
                  type="date"
                  format="yyyy-MM-dd"
                  value-format="yyyy-MM-dd"
                  placeholder="安全生产许可证失效日期"
                  :clearable="false">
                </el-date-picker>
              </div>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row class="session-content">
          <el-col :span="12" class="col-span-left">
            <el-form-item
              prop="mineWsGrade">
              <template slot="label">
                <span class="title">瓦斯等级</span>
              </template>
              <div class="content">
                <el-select 
                  v-model="dataForm.mineWsGrade"
                  placeholder="瓦斯等级">
                  <el-option
                    v-for="item in dictionary.mineWsGrade"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </el-form-item>
          </el-col>
          <el-col :span="12" class="col-span-right">
            <el-form-item
              prop="hydrogeologicalType">
              <template slot="label">
                <span class="title">水文地质类型</span>
              </template>
              <div class="content">
                <el-select 
                  v-model="dataForm.hydrogeologicalType"
                  placeholder="水文地质类型">
                  <el-option
                    v-for="item in dictionary.hydrogeologicalType"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row class="session-content">
          <el-col :span="12" class="col-span-left">
            <el-form-item
              prop="grimeExplosive">
              <template slot="label">
                <span class="title">煤尘爆炸性</span>
              </template>
              <div class="content">
                <el-select 
                  v-model="dataForm.grimeExplosive"
                  placeholder="煤尘爆炸性">
                  <el-option
                    v-for="item in dictionary.grimeExplosive"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </el-form-item>
          </el-col>
          <el-col :span="12" class="col-span-right">
            <el-form-item
              prop="mineFire">
              <template slot="label">
                <span class="title">煤层自燃倾向性</span>
              </template>
              <div class="content">
                <el-select 
                  v-model="dataForm.mineFire"
                  placeholder="煤层自燃倾向性 ">
                  <el-option
                    v-for="item in dictionary.mineFire"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row class="session-content">
          <el-col :span="12" class="col-span-left">
            <el-form-item
              prop="mineMinestyle">
              <template slot="label">
                <span class="title">开拓方式</span>
              </template>
              <div class="content">
                <el-select 
                  v-model="dataForm.mineMinestyle"
                  placeholder="开拓方式">
                  <el-option
                    v-for="item in dictionary.mineMinestyle"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </el-form-item>
          </el-col>
          <el-col :span="12" class="col-span-right">
            <el-form-item
              prop="mineVentilatestyle">
              <template slot="label">
                <span class="title">通风方式</span>
              </template>
              <div class="content">
                <el-select 
                  v-model="dataForm.mineVentilatestyle"
                  placeholder="通风方式">
                  <el-option
                    v-for="item in dictionary.mineVentilatestyle"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row class="session-content">
          <el-col :span="24" class="col-span-row" style="border-bottom: 1px solid #7DCEFD;">
            <el-form-item
              prop="mineStatusContent">
              <template slot="label">
                <span class="title">矿井状况</span>
              </template>
              <div class="content">
                <el-input
                  v-model.trim="dataForm.mineStatusContent"
                  placeholder="矿井状况"
                  readonly
                  @focus="setMineStatus">
                </el-input>
              </div>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <select-mine-status
        v-if="showDialog.mineStatus"
        :visible="showDialog.mineStatus"
        :selected-mine-status="dataForm.mineStatus"
        @close="closeSelect"
        @save="confirmSelect"
      ></select-mine-status>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button :loading="loading.save" @click="close">取消</el-button>
      <el-button :loading="loading.save" type="primary" @click="confirm">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import GoDB from "@/utils/godb.min.js";
import { sortbyAsc } from "@/utils/index";
import selectMineStatus from '@/components/select-mine-status'
export default {
  name: "CheckCorpInfo",
  components: {
    selectMineStatus
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    corpData: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      DBName: this.$store.state.DBName,
      dataForm: {
        corpId: null,
        corpName: null,
        address: null,
        parentType: null,
        ckxkzExpireTime: null,
        provedOutput: null,
        aqscxkzExpireTime: null,
        mineWsGrade: null,
        hydrogeologicalType: null,
        grimeExplosive: null,
        mineFire: null,
        mineMinestyle: null,
        mineStatus: null,
        mineStatusContent: null,
        mineVentilatestyle: null,
      },
      rules: {
        parentType: [
          {required: true, message: '请选择煤矿类型', trigger: 'change'}
        ],
        provedOutput: [
          {required: true, message: '请输入核定产能', trigger: 'blur'}
        ],
        mineWsGrade: [
          {required: true, message: '请选择瓦斯等级', trigger: 'change'}
        ],
        hydrogeologicalType: [
          {required: true, message: '请选择水文地质类型', trigger: 'change'}
        ],
        grimeExplosive: [
          {required: true, message: '请选择煤尘爆炸性', trigger: 'change'}
        ],
        mineFire: [
          {required: true, message: '请选择煤层自燃倾向性', trigger: 'change'}
        ],
        mineMinestyle: [
          {required: true, message: '请选择煤层开拓方式', trigger: 'change'}
        ],
        mineVentilatestyle: [
          {required: true, message: '请选择通风方式', trigger: 'change'}
        ],
        mineStatusContent: [
          {required: true, message: '请选择矿井状况', trigger: 'change'}
        ],
      },
      dictionary: {
        parentType: [],
        mineWsGrade: [],
        hydrogeologicalType: [],
        grimeExplosive: [],
        mineFire: [],
        mineMinestyle: [],
        mineVentilatestyle: []
      },
      showDialog: {
        mineStatus: false
      },
      loading: {
        save: false
      },
      originalData: null, // 用来对比数据是否被修改
    };
  },
  async created() {
    await this.getDictionary()
    await this.getCorpInfo()
  },
  methods: {
    async getDictionary () {
      // 获取码表
      let db = new GoDB(this.DBName);
      let dictionary = db.table('dictionary')
      for (let key in this.dictionary) {
        let dictJson = await dictionary.find(item => item.type === key)
        let dictList = JSON.parse(dictJson.list)
        dictList.sort(sortbyAsc('sort'))
        this.dictionary[key] = dictList
      }
      await db.close()
    },
    async getCorpInfo () {
      this.originalData = null
      let db = new GoDB(this.DBName);
      let corpBase = db.table('corpBase')
      let corpInfo = await corpBase.find(item => item.corpId === this.corpData.corpId && item.delFlag !== '1')
      let zfZzInfo = db.table("zfZzInfo");
      let corpZfZzInfo1 = await zfZzInfo.find(item => item.corpId === this.corpData.corpId && item.delFlag !== '1' && item.credTypeName === '采矿许可证')
      let corpZfZzInfo2 = await zfZzInfo.find(item => item.corpId === this.corpData.corpId && item.delFlag !== '1' && item.credTypeName === '安全生产许可证')
      await db.close()
      let {corpId, corpName, address, provedOutput} = corpInfo
      let dataForm = Object.assign({}, this.dataForm, {corpId, corpName, address, provedOutput})
      // 处理煤矿类型：parentTypeName,mineWsGrade, hydrogeologicalType, grimeExplosive, mineFire, mineMinestyle, mineVentilatestyle
      let keyList = ['parentType', 'mineWsGrade', 'hydrogeologicalType', 'grimeExplosive', 'mineFire', 'mineMinestyle', 'mineVentilatestyle']
      // 遍历需要转换的数据
      for (let i = 0; i < keyList.length; i++) {
        let key = keyList[i]
        for (let j = 0; j < this.dictionary[key].length; j++) {
          let dictItem = this.dictionary[key][j]
          if (dictItem.label === corpInfo[`${key}Name`]) {
            dataForm[key] = dictItem.value
          }
        }
      }
      // 处理失效日期：expireTime
      dataForm.ckxkzExpireTime = corpZfZzInfo1 && corpZfZzInfo1.expireTime ? corpZfZzInfo1.expireTime.split(' ')[0] : null
      dataForm.aqscxkzExpireTime = corpZfZzInfo2 && corpZfZzInfo2.expireTime ? corpZfZzInfo2.expireTime.split(' ')[0] : null
      // 处理矿井状况: mineStatusZs,mineStatusZsName8
      dataForm.mineStatus = corpInfo.mineStatusZs || ''
      dataForm.mineStatusContent = corpInfo.mineStatusZsName || ''
      this.$set(this, 'dataForm', dataForm) 
      this.$nextTick(() => {
        this.$refs.dataForm.clearValidate()
      })
      if (corpInfo.mineStatusZs === '0301') {
        this.mineStatusDisabled = true
      } else {
        this.mineStatusDisabled = false
      }
      this.originalData = JSON.stringify(this.dataForm)
    },
    changeValue (val, field) {
      if (!val && field === 'provedOutput') {
        // 核定产能没有填则按0处理
        this.dataForm[field] = 0
      }
    },
    close () {
      // 取消
      this.$emit('close', {page: 'checkCorpInfo'})
    },
    confirm () {
      // 确认修改
      if (JSON.parse(this.originalData).mineStatus === '0301') {
        // 关闭的矿井则提示已关闭不可修改
        this.$message.error('当前矿井已关闭，不可修改信息！')
        this.$emit('confirm')
        return
      }
      this.$refs.dataForm.validate(validate => {
        if (validate) {
          let msg = JSON.stringify(this.dataForm) === this.originalData ? '企业信息未修改，是否确认提交？' : '已修改企业信息，是否确认提交？'
          this.$confirm(msg, '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              dangerouslyUseHTMLString: true,
              type: 'warning'
            }).then(async () => {
              this.loading.save = true
              let params = {
                corpId: this.dataForm.corpId,
                address: this.dataForm.address,
                parentType: this.dataForm.parentType,
                mineWsGrade: this.dataForm.mineWsGrade,
                mineFire: this.dataForm.mineFire,
                grimeExplosive: this.dataForm.grimeExplosive,
                mineMinestyle: this.dataForm.mineMinestyle,
                mineVentilatestyle: this.dataForm.mineVentilatestyle,
                mineStatus: this.dataForm.mineStatus,
                hydrogeologicalType: this.dataForm.hydrogeologicalType,
                provedOutput: this.dataForm.provedOutput,
                ckxkzExpireTime: this.dataForm.ckxkzExpireTime,
                aqscxkzExpireTime: this.dataForm.aqscxkzExpireTime,
              }
              await this.$http.post(`${this.userType === 'supervision' ? '/sv' : ''}/local/corp/updateByZf?__sid=${this.$store.state.user.userSessId}`, {sendJson: true, data: params})
                .then(async ({ data }) => {
                  if (data.status === "200") {
                    this.$message.success('确认企业信息成功！')
                    this.$emit('confirm')
                  } else {
                    this.$message.error(data.data)
                  }
                })
                .catch((err) => {
                  console.log('确认企业信息失败:', err)
                  this.$emit('confirm')
                });
              this.loading.save = false
            }).catch(() => {})
        }
      })
    },
    setMineStatus () {
      if (!this.mineStatusDisabled) {
        this.showDialog.mineStatus = true
      } else {
        this.$message.error('当前矿井状况为已关闭，不可修改')
      }
    },
    closeSelect ({page}) {
      this.showDialog[page] = false
    },
    confirmSelect ({data}) {
      this.dataForm.mineStatus = data.mineStatus
      this.dataForm.mineStatusContent = data.mineStatusContent
      this.showDialog.mineStatus = false
    }
  },
};
</script>

<style lang="scss" scoped>
.check-corp-info-main {
  display: flex;
  flex-direction: column;
  .check-corp-info-title {
    display: flex;
    flex-direction: column;
    height: 60px;
    justify-content: space-between;
    border-bottom: 1px solid #EBEEF5;
    margin-bottom: 10px;
    padding-bottom: 5px;
    .check-corp-name {
      font-size: 18px;
    }
    .check-corp-title-description {
      font-size: 16px;
      color: #F56C6C;
    }
  }
  .check-corp-form {
    .session-content {
      padding: 0px;
      font-size: 15px;
      .col-span-row {
        display: flex;
        min-height: 50px;
        border-top: 1px solid #7DCEFD;
        border-left: 1px solid #7DCEFD;
        border-right: 1px solid #7DCEFD;
      }
      .col-span-left {
        display: flex;
        min-height: 50px;
        border-top: 1px solid #7DCEFD;
        border-left: 1px solid #7DCEFD;
        border-right: 1px solid #7DCEFD;
      }
      .col-span-right {
        display: flex;
        min-height: 50px;
        border-top: 1px solid #7DCEFD;
        border-right: 1px solid #7DCEFD;
      }
      .title {
        color: #606266;
        font-weight: 500;
        display: flex;
        width: 160px;
        align-items: center;
        justify-content: center;
        background: #DEF3FF;
      }
      .content {
        flex: 1;
        display: flex;
        padding: 0 7px;
        color: #909399;
        height: 100%;
        align-items: center;
      }
      span {
        display: inline-block;
      }
      /deep/ .el-form-item__label {
        padding: 0px;
        display: flex;
        align-items: center;
        background: #DEF3FF;
        border-right: 1px solid #7DCEFD;
        position: relative;
        justify-content: center;
      }
      /deep/ .el-form-item--medium .el-form-item__content, .el-form-item--medium .el-form-item__label {
        display: inline-block !important;
        width: calc(100% - 160px);
      }
      /deep/ .el-form-item__content {
        width: 100%;
      }
      /deep/ .el-form-item.is-required .el-form-item__label:before {
        content: '*';
        color: #f56c6c;
        position: absolute;
        top: 4px;
        left: 4px;
      }
      .el-form-item {
        width: 100%;
        margin-bottom: 0px;
        display: flex;
      }
      /deep/ .el-form-item__error {
        top: 15px;
        left: 20px;
      }
    }
  }
}
</style>