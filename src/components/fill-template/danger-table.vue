<!-- 填写组件 隐患 -->
<template>
  <div style="width: 100%;">
    <div v-if="options.showBaseInfor">
      <div class="title">
        <span>基本信息：</span>
      </div>
      <el-input
        v-model="dataForm.tempValue.baseInfor"
        type="textarea"
        :rows="3"
        placeholder="请填写基本信息">
      </el-input>
    </div>
    <div>
      <div class="title">
        <span>隐患情况：</span>
      </div>
      <el-input
        v-model="dataForm.tempValue.dangerInfor"
        type="textarea"
        :rows="1"
        placeholder="请填写隐患情况">
      </el-input>
      <div style="margin-top: 10px;" v-if="options.showSelectDangerBtn">
        <el-button type="primary" @click="handleDialog('dangerSelect')">添加隐患</el-button>
        <el-button type="primary" @click="handleDialog('receiveDanger')">隐患接收</el-button>
        <el-button type="primary" @click="addNewDanger">其他隐患</el-button>
      </div>
      <div class="danger-table-main">
        <!-- 隐患项展示，选择 -->
        <div class="danger-table-main-table">
          <!-- 展示已选隐患 -->
          <el-table
            v-if="dataForm.tempValue.tableData"
            :data="dataForm.tempValue.tableData"
            style="width: 100%;"
            row-key="order"
            border
            :default-sort = "{prop: 'order', order: 'descending'}">
            <el-table-column
              label="隐患项"
              header-align="center"
              align="left">
              <template slot-scope="scope">
                <span
                  style="cursor: pointer;"
                  :class="scope.row.active ? 'active' : ''"
                  @click="selectedItem(scope)">
                  {{ `${scope.$index + 1}.${scope.row.itemContent}` }}
                </span>
                <i class="el-icon-remove delete-icon" title="删除" @click="deleteDangerItem(scope)"></i>
              </template>
            </el-table-column>
          </el-table>
          <!-- 修改隐患信息 -->
        </div>
        <!-- 修改隐患项 -->
        <div class="danger-table-main-content">
          <el-form
            v-if="dangerItemDetail.no"
            :model="dangerItemDetail"
            ref="dataForm"
            label-position="top"
            size="small"
            :rules="rules">
            <el-form-item
              label="检查人："
              prop="personIds">
              <el-input
                v-model.trim="dangerItemDetail.personNames"
                placeholder="请选择隐患发现人"
                readonly
                @focus="selectPerson">
              </el-input>
            </el-form-item>
            <el-form-item
              label="违法行为描述（可追加细节）："
              prop="itemContent">
              <el-input
                v-model.trim="dangerItemDetail.itemContent"
                placeholder="请填写违法行为描述"
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 4}"
                :maxlength="200">
              </el-input>
            </el-form-item>
            <el-form-item
              label="a.违法认定法条："
              prop="confirmBasis">
              <el-input
                v-model.trim="dangerItemDetail.confirmBasis"
                type="textarea"
                placeholder="请填写违法认定法条"
                :autosize="{ minRows: 2, maxRows: 4}"
                :maxlength="300">
              </el-input>
            </el-form-item>
            <el-form-item
              label="b.现场处理决定："
              prop="onsiteDesc">
              <div style="display: flex;">
                <el-input
                  v-model.trim="dangerItemDetail.onsiteDesc"
                  placeholder="请填写现场处理决定"
                  :maxlength="300"
                  style="width: calc(100% - 210px); margin-right: 10px;"
                  @change="changeOnsiteDesc">
                </el-input>
                <!-- 现场处理类型 -->
                <el-select
                  v-model="dangerItemDetail.onsiteType"
                  @change="val => changeValue(val, 'onsiteType')"
                  style="flex: 1;">
                  <el-option
                    v-for="(item, index) in onsiteTypeOptions"
                    :key="index"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
              <div style="margin-top: 10px; display:flex;">
                <div v-show="showOnsiteDesc.deviceNum" style="margin-left: 10px;">
                  <span class="el-form-item__label">台/台套：</span>
                  <el-input
                    v-model.trim="dangerItemDetail.deviceNum"
                    size="small"
                    style="width: 90px;"
                    @change="val => changeValue(val, 'deviceNum')">
                  </el-input>
                </div>
                <div v-show="showOnsiteDesc.coalingFace" style="margin-left: 10px;">
                  <span class="el-form-item__label">采煤工作面/个：</span>
                  <el-input
                    v-model.trim="dangerItemDetail.coalingFace"
                    style="width: 90px;"
                    @change="val => changeValue(val, 'coalingFace')">
                  </el-input>
                </div>
                <div v-show="showOnsiteDesc.headingFace" style="margin-left: 10px;">
                  <span class="el-form-item__label">掘进工作面/个：</span>
                  <el-input
                    v-model.trim="dangerItemDetail.headingFace"
                    style="width: 90px;"
                    @change="val => changeValue(val, 'headingFace')">
                  </el-input>
                </div>
              </div>
            </el-form-item>
            <el-form-item
              label="b.现场处理依据："
              prop="onsiteBasis">
              <el-input
                v-model.trim="dangerItemDetail.onsiteBasis"
                type="textarea"
                placeholder="请填写现场处理依据"
                :autosize="{ minRows: 2, maxRows: 4}"
                :maxlength="300">
              </el-input>
            </el-form-item>
            <el-form-item
              label="c.行政处罚决定："
              prop="penaltyDesc">
              <el-input
                v-model.trim="dangerItemDetail.penaltyDesc"
                placeholder="请填写行政处罚决定"
                :maxlength="300"
                style="width: calc(100% - 155px);">
              </el-input>
              <el-input
                v-model.trim="dangerItemDetail.penaltyDescFine"
                placeholder="罚金"
                style="width: 150px;">
                <template slot="append">万元</template>
              </el-input>
            </el-form-item>
            <el-form-item
              label="c.行政处罚依据："
              prop="penaltyBasis">
              <el-input
                v-model.trim="dangerItemDetail.penaltyBasis"
                type="textarea"
                placeholder="请填写行政处罚依据"
                :autosize="{ minRows: 2, maxRows: 4}"
                :maxlength="300">
              </el-input>
            </el-form-item>
            <el-form-item
              label="更改隐患从属类别："
              prop="changeDangerType"
              style="width: 100%;"
              ref="changeDangerType">
              <el-select 
                v-model="dangerItemDetail.firstDangerType"
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
                v-model="dangerItemDetail.secDangerType"
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
                v-model="dangerItemDetail.changeDangerType"
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
              label="是否重大隐患："
              prop="isSerious"
              class="special-form-item">
              <el-checkbox
                v-model="dangerItemDetail.isSerious"
                true-label="1"
                false-label="0"
                @change="val => changeValue(val, 'isSerious')"
              ></el-checkbox>
              <span style="color: #F56C6C;">(请谨慎勾选)</span>
            </el-form-item>
            <el-form-item
              label="是否隐患复查："
              prop="isReview"
              class="special-form-item">
              <el-checkbox
                v-model="dangerItemDetail.isReview"
                true-label="1"
                false-label="0"
                @change="val => changeValue(val, 'isReview')"
              ></el-checkbox>
              <el-date-picker
                v-if="dangerItemDetail.isReview === '1'"
                v-model="dangerItemDetail.reviewDate"
                type="date"
                format="yyyy年MM月dd日"
                value-format="yyyy年MM月dd日"
                placeholder="选择复查日期"
                @blur="val => changeValue(val, 'reviewDate')">
              </el-date-picker>
            </el-form-item>
            <el-form-item
              label="排序："
              class="special-form-item">
              <el-button
                v-if="dangerItemDetail.order !== 0"
                type="text"
                @click="changeOrder('forward')">
                向前
              </el-button>
              <el-button
                v-if="dangerItemDetail.order !== dataForm.tempValue.tableData.length - 1"
                type="text"
                @click="changeOrder('backwards')">
                向后
              </el-button>
            </el-form-item>
            <!-- <el-form-item
              label="现场处理决定："
              prop="reportFormType">
              <el-select
                v-model="dataForm.reportFormType"
                placeholder="请选择现场处理决定">
                <el-option
                  v-for="item in $store.state.dictionary.reportFormTypeNoWeb"
                  :key="item.code"
                  :label="item.value"
                  :value="item.code"
                ></el-option>
              </el-select>
            </el-form-item> -->
          </el-form>
        </div>
      </div>
    </div>
    <select-person
      :visible="visible.selectPerson"
      :multi-select="true"
      :selected-data-list="selectedRowPersonList"
      :corp-data="corpData"
      @confirm-person="handleSavePerson"
      @close="closeSelect"
    ></select-person>
    <select-danger-content
      v-if="visible.dangerSelect"
      :visible="visible.dangerSelect"
      :value="dataForm.tempValue"
      :corp-data="corpData"
      @save="handleSave"
      @close="handleClose"
    ></select-danger-content>
    <receive-danger
      v-if="visible.receiveDanger"
      :visible="visible.receiveDanger"
      :corp-data="corpData"
      @save="handleSaveReceiveDanger"
      @close="handleClose"
    ></receive-danger>
  </div>
</template>

<script>
import selectDangerContent from '../select-danger-content'
import receiveDanger from '@/components/receive-danger'
import GoDB from "@/utils/godb.min.js";
import { severalDaysLater, getNowTime } from "@/utils/date";
import selectPerson from '@/components/select-person'
import { treeDataTranslate, fuzzyearch, randomString } from '@/utils'
export default {
  name: "DangerTable",
  components: {
    selectDangerContent,
    receiveDanger,
    selectPerson,
  },
  props: {
    value: {
      type: Object,
      default: () => {
        return {
          baseInfor: null,
          dangerInfor: null,
          tableData: [],
          dangerItemDetail: {
            personIds: null, // 隐患发现人
            personNames: null, // 隐患发现人
            itemContent: null, // 违法行为描述
            confirmBasis: null, // 违法认定法条
            onsiteDesc: null, // 现场处理决定
            onsiteBasis: null, // 现场处理依据
            onsiteType: null, // 现场处理决定类型
            headingFace: null, // 掘进工作面
            deviceNum: null, // 设备台数
            coalingFace: null, // 采煤工作面
            penaltyDesc: null, // 行政处罚决定
            penaltyDescFine: null, // 行政处罚决定罚金
            penaltyBasis: null, // 行政处罚依据
            firstDangerType: null, // 第一级隐患类别
            secDangerType: null, // 第二级隐患类别
            changeDangerType: null, // 更改的隐患类别
            isSerious: '0', // 是否重大隐患
            isReview: '0', // 是否复查
            reviewDate: null, // 复查日期
          },
        }
      }
    },
    corpData: {
      type: Object,
      default: () => {}
    },
    options: {
      type: Object,
      default: () => {
        return {
          showBaseInfor: false, // 用于区分是否展示基本情况大文本输入
          showSelectDangerBtn: false // 用于区分是否可以选择隐患项
        }
      }
    }
  },
  data() {
    var validateCate = (rule, value, callback) => {
      let {firstDangerType, secDangerType, changeDangerType} = this.dangerItemDetail
      if (!firstDangerType || !secDangerType || !changeDangerType) {
        callback('请选择隐患从属类别！')
      } else {
        callback()
      }
    }
    return {
      dataForm: {
        tempValue: {
          baseInfor: null,
          tableData: [],
        }
      },
      dangerItemDetail: {
        personIds: null, // 隐患发现人
        personNames: null, // 隐患发现人
        itemContent: null, // 违法行为描述
        confirmBasis: null, // 违法认定法条
        onsiteDesc: null, // 现场处理决定
        onsiteBasis: null, // 现场处理依据
        onsiteType: null, // 现场处理决定类型
        headingFace: null, // 掘进工作面
        deviceNum: null, // 设备台数
        coalingFace: null, // 采煤工作面
        penaltyDesc: null, // 行政处罚决定
        penaltyDescFine: null, // 行政处罚决定罚金
        penaltyBasis: null, // 行政处罚依据
        firstDangerType: null, // 第一级隐患类别
        secDangerType: null, // 第二级隐患类别
        changeDangerType: null, // 更改的隐患类别
        isSerious: '0', // 是否重大隐患
        isReview: '0', // 是否复查
        reviewDate: null, // 复查日期
      },
      visible: {
        dangerSelect: false, // 选择隐患
        receiveDanger: false, // 接收隐患
        selectPerson: false, // 选择隐患发现人
      },
      dangerListTreeProps: {
        label: 'treeName',
        children: 'children',
      },
      rules: {
        itemContent: [
          { required: true, message: '请填写违法行为描述', tirgger: 'blur' }
        ],
        onsiteDesc: [
          { required: true, message: '请填写现场处理决定', tirgger: 'blur' }
        ],
        changeDangerType: [
          {required: true, message: '请选择隐患从属类别', trigger: 'change'},
          { validator: validateCate, trigger: 'change' }
        ]
      },
      dangerIndex: 0, // 计算隐患排序位置字段
      onsiteTypeOptions: [ // 现场处理类型码表
        {
          label: '当场予以纠正',
          value: '1'
        },
        {
          label: '责令改正',
          value: '2'
        },
        {
          label: '责令限期改正',
          value: '3'
        },
        {
          label: '责令立即停止作业，限期改正',
          value: '4'
        },
        {
          label: '责令立即停止作业或者责令限期达到要求',
          value: '5'
        },
        {
          label: '责令停止作业或者停止使用相关设施、设备',
          value: '6'
        },
        {
          label: '责令立即停止作业',
          value: '7'
        },
        {
          label: '责令立即停止生产',
          value: '8'
        },
        {
          label: '责令限期改正或者责令立即停止使用',
          value: '9'
        },
        {
          label: '责令立即排除事故隐患',
          value: '10'
        },
        {
          label: '责令立即消除或者限期消除事故限制',
          value: '11'
        },
        {
          label: '责令从危险区域撤出作业人员',
          value: '12'
        },
      ],
      showOnsiteDesc: {
        deviceNum: false,
        coalingFace: false,
        headingFace: false,
      },
      DBName: this.$store.state.DBName,
      selectedRowPersonList: [], // 选择的检查人员列表，用于回显
      dangerCateOptions: { // 隐患类别码表，用于修改从属类别
        dangerCateList: [],
        dangerCateSecList: [],
        dangerCateThirdList: []
      },
    };
  },
  created() {
    this.initData()
  },
  watch: {
    'dangerItemDetail.onsiteType'(val) {
      // 监听现场处理类型
      if (val === '4' || val === '5' || val === '7') {
        // 展示采煤工作面和掘进工作面
        this.showOnsiteDesc = {
          deviceNum: false,
          coalingFace: true,
          headingFace: true,
        }
        this.$set(this.dangerItemDetail, 'deviceNum', null)
      } else if (val === '6') {
        // 全部展示
        this.showOnsiteDesc = {
          deviceNum: true,
          coalingFace: true,
          headingFace: true,
        }
      } else if (val === '9') {
        // 只展示台套
        this.showOnsiteDesc = {
          deviceNum: true,
          coalingFace: false,
          headingFace: false,
        }
        this.$set(this.dangerItemDetail, 'coalingFace', null)
        this.$set(this.dangerItemDetail, 'headingFace', null)
      } else {
        this.showOnsiteDesc = {
          deviceNum: false,
          coalingFace: false,
          headingFace: false,
        }
        this.$set(this.dangerItemDetail, 'deviceNum', null)
        this.$set(this.dangerItemDetail, 'coalingFace', null)
        this.$set(this.dangerItemDetail, 'headingFace', null)
      }
      this.changeValue(val, 'onsiteType')
    },
  },
  methods: {
    initData () {
      this.dataForm.tempValue = this.value
      if (this.value.tableData.length > 0) {
        this.selectedItem({
          $index: 0,
          row: this.value.tableData[0]
        })
      }
    },
    handleDialog (key) {
      // 展示选择检查内容弹窗
      this.visible[key] = true
    },
    handleClose (key) {
      this.visible[key] = false
    },
    handleSave (params) {
      // 保存选择的检查项
      let tableData = []
      // 抽取选择的检查项最底一层，作为table展示
      this.handleData(params.data.selecteddangerList, tableData)
      // 清空隐患排序为0，已便下一次继续递归遍历赋值
      this.dangerIndex = 0
      if (tableData.length > 0) {
        console.log('tableData', tableData)
        tableData.forEach((item, index) => {
          let addItem = Object.assign({}, item, {
            personIds: null, // 隐患发现人
            personNames: null, // 隐患发现人
            onsiteType: null, // 现场处理决定类型
            headingFace: null, // 掘进工作面
            deviceNum: null, // 设备台数
            coalingFace: null, // 采煤工作面
            penaltyDescFine: null, // 行政处罚决定罚金
            firstDangerType: null, // 第一级隐患类别
            secDangerType: null, // 第二级隐患类别
            changeDangerType: null, // 更改的隐患类别
            isSerious: '0', // 是否重大隐患
            isReview: '0', // 是否复查
            reviewDate: null, // 复查日期
            order: this.dataForm.tempValue.tableData.length + index,
          })
          this.dataForm.tempValue.tableData.push(addItem)
        })
      }
    },
    handleData (data, tableData) {
      // 递归遍历获取最底层数据
      if (data.length > 0) {
        data.map((item) => {
          if (item.children && item.children.length > 0) {
            this.handleData(item.children, tableData)
          } else {
            let itemObject = Object.assign({}, item, {
              order: this.dangerIndex,
              headingFace: '', // 掘进工作面
              deviceNum: '', // 设备台数
              coalingFace: '', // 采煤工作面
              isSerious: '0',
              isReview: '0',
              reviewDate: null,
              active: false,
            })
            tableData.push(itemObject)
            this.dangerIndex = this.dangerIndex + 1
          }
        })
      }
    },
    async selectedItem(scope) {
      // 选择隐患
      this.dataForm.tempValue.tableData.forEach(item => {
        item.active = false
      })
      scope.row.active = true
      // 保存已选择的隐患项
      // 设置选中状态
      this.$set(this.dataForm.tempValue.tableData, scope.$index, scope.row)
      // 将选中的隐患项内容赋值进form中
      // this.$set(this, 'dangerItemDetail', scope.row)
      this.dangerItemDetail = scope.row
      console.log('this.dangerItemDetail', this.dangerItemDetail)
      await this.getDangerCate()
    },
    changeOrder(type) {
      // 修改排序
      let dangerItemDetail = this.dangerItemDetail
      let newOrder = null
      if (type === 'forward') {
        // 向前
        newOrder = dangerItemDetail.order - 1
      } else if (type === 'backwards') {
        // 向后
        newOrder = dangerItemDetail.order + 1
      }
      // 修改tableData中所有项目的order值
      let tableData = this.dataForm.tempValue.tableData
      // 删除tableData中原位置的隐患项
      tableData.splice(dangerItemDetail.order, 1)
      // 在tableData新位置中插入隐患项
      tableData.splice(newOrder, 0, dangerItemDetail)
      // 重新排列order
      tableData.forEach((item, index) => {
        item.order = index
      })
      // 赋值tableData
      this.dataForm.tempValue.tableData = tableData
      dangerItemDetail.order = newOrder
    },
    changeValue (val, field) {
      let index = this.dangerItemDetail.order
      this.$set(this.dataForm.tempValue.tableData, index, this.dangerItemDetail)
      if (field === 'isReview' && val === '1') {
        // 如果是隐患复查，并且为是的时候，设置reviewDate复查日期为顺延一个月
        let reviewDate = severalDaysLater(30)
        let reviewDateList = reviewDate.split('-')
        this.dangerItemDetail.reviewDate = `${reviewDateList[0]}年${reviewDateList[1]}月${reviewDateList[2]}日`
        this.$set(this.dataForm.tempValue.tableData, index, this.dangerItemDetail)
      }
    },
    handleSaveReceiveDanger (dangerList) {
      // 保存接收的隐患项: 放入隐患列表
      dangerList.map((receiveDanger, index) => {
        // 添加
        this.dataForm.tempValue.tableData.push({
          active: false,
          itemCode: receiveDanger.itemCode,
          no: receiveDanger.no,
          categoryCode: receiveDanger.categoryCode,
          personIds: null, // 隐患发现人
          personNames: null, // 隐患发现人
          itemContent: receiveDanger.itemContent, // 违法行为描述
          confirmBasis: receiveDanger.confirmBasis, // 违法认定法条
          onsiteDesc: receiveDanger.onsiteDesc, // 现场处理决定
          onsiteBasis: receiveDanger.confirmBasis, // 现场处理依据
          onsiteType: null, // 现场处理决定类型
          headingFace: null, // 掘进工作面
          deviceNum: null, // 设备台数
          coalingFace: null, // 采煤工作面
          penaltyDesc: receiveDanger.penaltyDesc, // 行政处罚决定
          penaltyDescFine: null, // 行政处罚决定罚金
          penaltyBasis: receiveDanger.penaltyBasis, // 行政处罚依据
          firstDangerType: null, // 第一级隐患类别
          secDangerType: null, // 第二级隐患类别
          changeDangerType: null, // 更改的隐患类别
          isSerious: '0', // 是否重大隐患
          isReview: '0', // 是否复查
          reviewDate: null, // 复查日期
          order: this.dataForm.tempValue.tableData.length + index,
          delFlag: '0',
          isCommon: receiveDanger.isCommon,
        })
      })
    },
    deleteDangerItem (scope) {
      // 删除单条隐患项
      this.$confirm(`是否确定删除第${scope.$index + 1}条隐患项？`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          dangerouslyUseHTMLString: true,
          type: 'warning'
        }).then(() => {
          // 删除隐患项列表tableData中数据
          this.dataForm.tempValue.tableData.splice(scope.$index, 1)
          // 同时更改当前所有数据的order排序值
          this.dataForm.tempValue.tableData.forEach((item, index) => {
            item.order = index
          })
          // 删除后重新选定index数据（默认逻辑：统一重新选择第一个隐患项）
          if (this.dataForm.tempValue.tableData.length > 0) {
            this.selectedItem({
              $index: 0,
              row: this.dataForm.tempValue.tableData[0]
            })
          } else {
            this.dangerItemDetail = {}
          }
        }).catch(() => {
        })
    },
    selectPerson () {
      // 选择检察人员
      let selectedRowPersonList = []
      if (this.dangerItemDetail.personIds) {
        let persons = this.dangerItemDetail.personIds.split(',')
        persons.map(person => {
          selectedRowPersonList.push({
            no: person
          })
        })
      }
      this.selectedRowPersonList = selectedRowPersonList
      this.visible.selectPerson = true
    },
    closeSelect ({page, refresh}) {
      // 关闭选择人员弹窗
      // this.selectedIndex = null
      // this.selectedRowPersonList = []
      this.visible[page] = false
    },
    handleSavePerson (personList) {
      // 确认选择监察人员
      if (personList.length > 0) {
        let ids = ''
        let names = ''
        personList.map(item => {
          ids += item.no + ','
          names += item.name + ','
        })
        ids = ids.substring(0, ids.length - 1)
        names = names.substring(0, names.length - 1)
        this.dangerItemDetail.personIds = ids
        this.dangerItemDetail.personNames = names
      } else {
        this.dangerItemDetail.personIds = null
        this.dangerItemDetail.personNames = null
      }
      this.visible.selectPerson = false
    },
    async getDangerCate () {
      // 获取隐患从属类别三级码表
      let db = new GoDB(this.DBName);
      let dangerCate = db.table('dangerCate')
      let corpBase = db.table('corpBase');
      let dangerCateData = await dangerCate.findAll((item) => item.delFlag !== '1');
      let corpBaseData = await corpBase.find((item) => {
        return item.corpId === this.corpData.corpId
      });
      await db.close()
      let list = treeDataTranslate([...dangerCateData] || [], 'treeId', 'treeParentId')
      if (corpBaseData.mineMinetypeName === '井工') {
        this.dangerCateOptions.dangerCateList = [list[0]]
      } else if (corpBaseData.mineMinetypeName === '露天') {
        this.dangerCateOptions.dangerCateList = [list[1]]
      } else {
        this.dangerCateOptions.dangerCateList = list
      }
      let categoryCode = ''
      if (this.dangerItemDetail.changeDangerType) {
        categoryCode = this.dangerItemDetail.changeDangerType
      } else if (this.dangerItemDetail.categoryCode) {
        categoryCode = this.dangerItemDetail.categoryCode
      }
      if (categoryCode) {
        // 获取当前隐患项的从属类别，设置为默认值
        // 首先获取最末层类别
        let curDangerThird = dangerCateData.filter(item => item.categoryCode === categoryCode)
        let curDangerSec = dangerCateData.filter(item => item.categoryCode === curDangerThird[0].pid)
        let curDangerFirst = dangerCateData.filter(item => item.categoryCode === curDangerSec[0].pid)
        // 设置默认值
        this.dangerItemDetail.firstDangerType = curDangerFirst[0].categoryCode
        this.changeDangerCate(curDangerFirst[0].categoryCode, '0')
        this.dangerItemDetail.secDangerType = curDangerSec[0].categoryCode
        this.changeDangerCate(curDangerSec[0].categoryCode, '1')
        this.dangerItemDetail.changeDangerType = curDangerThird[0].categoryCode
        this.changeDangerCate(curDangerThird[0].categoryCode, '2')
      } else {
        this.dangerItemDetail.firstDangerType = null
        this.dangerItemDetail.secDangerType = null
        this.dangerCateOptions.dangerCateSecList = []
        this.dangerItemDetail.changeDangerType = null
        this.dangerCateOptions.dangerCateThirdList = []
      }
      this.$nextTick(() => {
        this.$refs.dataForm && this.$refs.dataForm.clearValidate()
      })
    },
    changeDangerCate (val, level = '0') {
      // 修改隐患从属类别
      // 赋值，同时赋值码表
      if (level === '0') {
        let cur = this.dangerCateOptions.dangerCateList.filter(item => item.categoryCode === val)
        this.dangerCateOptions.dangerCateSecList = cur[0].children
        // 清空第二级和第三级从属类别
        this.dangerItemDetail.secDangerType = null
        this.dangerItemDetail.changeDangerType = null
        this.dangerCateOptions.dangerCateThirdList = []
      } else if (level === '1') {
        let cur = this.dangerCateOptions.dangerCateSecList.filter(item => item.categoryCode === val)
        this.dangerCateOptions.dangerCateThirdList = cur[0].children
        // 第三级从属类别
        this.dangerItemDetail.changeDangerType = null
      } else if (level === '2') {
        if (this.dangerItemDetail.isCommon === '1') {
          this.dangerItemDetail.categoryCode = val
        }
      }
    },
    changeOnsiteDesc (val) {
      // 修改现场处理决定，关联现场处理决定选择
      let matchOption = null
      for (let i = 0, len = this.onsiteTypeOptions.length; i < len; i++) {
        let isMatch = fuzzyearch(val, this.onsiteTypeOptions[i].label)
        if (isMatch) {
          matchOption = this.onsiteTypeOptions[i]
          break;
        }
      }
      if (matchOption) {
        this.dangerItemDetail.onsiteType = matchOption.value
        this.changeValue(matchOption.value, 'onsiteType')
      }
    },
    addNewDanger () {
      // 新建隐患项
      this.dataForm.tempValue.tableData.push({
        active: true,
        categoryCode: '', // 新增的同changeDangerType
        personIds: '', // 隐患发现人
        personNames: '', // 隐患发现人
        itemContent: '', // 违法行为描述
        confirmBasis: '', // 违法认定法条
        onsiteDesc: '', // 现场处理决定
        onsiteBasis: '', // 现场处理依据
        onsiteType: '', // 现场处理决定类型
        headingFace: '', // 掘进工作面
        deviceNum: '', // 设备台数
        coalingFace: '', // 采煤工作面
        penaltyDesc: '', // 行政处罚决定
        penaltyDescFine: '', // 行政处罚决定罚金
        penaltyBasis: '', // 行政处罚依据
        firstDangerType: '', // 第一级隐患类别
        secDangerType: '', // 第二级隐患类别
        changeDangerType: '', // 更改的隐患类别
        isSerious: '0', // 是否重大隐患
        isReview: '0', // 是否复查
        reviewDate: '', // 复查日期
        createDate: '', // 创建日期
        itemCode: getNowTime() + randomString(18), //
        no: getNowTime() + randomString(18), // 同itemCode
        delFlag: '2',
        order: this.dataForm.tempValue.tableData.length, // 顺序向后顺延
        isCommon: '1',
      })
      let scope = {
        row: this.dataForm.tempValue.tableData[this.dataForm.tempValue.tableData.length - 1],
        $index: this.dataForm.tempValue.tableData.length - 1
      }
      // 选中新建的隐患项
      this.selectedItem(scope)
    }
  },
};
</script>

<style lang="scss" scoped>
.title {
  margin-top: 20px;
  height: 30px;
  background: #4F83E9;
  color: #fff;
  padding: 2px 10px;
  display: flex;
  align-items: center;
}
.danger-table-main {
  display: flex;
  margin-top: 10px;
  .danger-table-main-table {
    flex: 1;
    .active {
      color: #409EFF;
    }
    .delete-icon {
      color: #F56C6C;
      position: absolute;
      bottom: 5px;
      right: 5px;
      font-size: 20px;
      cursor: pointer;
    }
  }
  .danger-table-main-content {
    flex: 2;
    border: 1px solid #EBEEF5;
    margin-left: 10px;
    padding: 0 7px;
    .special-form-item {
      /deep/ .el-form-item__content {
        display: inline-block;
        line-height: 0;
      }
    }
  }
  /deep/ .el-form-item {
    margin-bottom: 10px;
  }
  /deep/ .el-form--label-top .el-form-item__label {
    padding: 0px;
  }
}
</style>