<!-- 填写组件 隐患 -->
<template>
  <div style="width: 100%;">
    <div>
      <div style="margin-top: 10px;">
        <el-button
          v-if="options.showSelectDangerBtn"
          type="primary" 
          @click="handleDialog('dangerSelect')"
        >添加隐患</el-button>
        <el-button 
          v-if="options.showSelectDangerBtn"
          type="primary" 
          @click="handleDialog('receiveDanger')"
        >隐患接收</el-button>
        <el-button 
          v-if="options.showSelectDangerBtn"
          type="primary" 
          @click="addNewDanger"
        >其他隐患</el-button>
        <el-button 
          type="primary" 
          @click="deleteDangerList()"
        >隐患删除</el-button>
        <el-button 
          v-if="options.showMergeBtn"
          type="primary" 
          @click="dangerMerge()"
        >隐患合并</el-button>
      </div>
      <div class="danger-table-main">
        <div v-if="options.showBaseInfor || options.showDangerInfor" class="col-main" style="margin-right: 10px;">
          <div v-if="options.showBaseInfor">
            <div class="title">
              <span>基本信息：</span>
            </div>
            <el-input
              v-model="dataForm.tempValue.baseInfor"
              type="textarea"
              :rows="15"
              placeholder="请填写基本信息">
            </el-input>
          </div>
          <div v-if="options.showDangerInfor">
            <div class="title">
              <span>隐患情况：</span>
            </div>
            <el-input
              v-model="dataForm.tempValue.dangerInfor"
              type="textarea"
              :rows="9"
              placeholder="请填写隐患情况">
            </el-input>
          </div>
        </div>
        <!-- 隐患项展示，选择 -->
        <div class="danger-table-main-table">
          <!-- 展示已选隐患 -->
          <el-table
            ref="dangerTable"
            v-if="dataForm.tempValue.tableData"
            :data="dataForm.tempValue.tableData"
            style="width: 100%;"
            row-key="dangerId"
            border
            @selection-change="handleSelectionChange"
            @select="selectDanger">
            <el-table-column
              type="selection"
              header-align="center"
              align="center"
              width="55">
            </el-table-column>
            <el-table-column
              label="隐患项"
              header-align="center"
              align="left">
              <template slot-scope="scope">
                <span
                  style="cursor: pointer; display: block; width: 100%; min-height: 30px;"
                  :class="scope.row.active ? 'active' : ''"
                  @click="selectedItem(scope)">
                  {{ (scope.$index + 1)+ '.' + scope.row.itemContent }}
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
            v-if="dangerItemDetail.dangerId"
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
                :autosize="{ minRows: 1, maxRows: 5}"
                :maxlength="1000"
                @change="val => changeValue(val, 'itemContent')">
              </el-input>
            </el-form-item>
            <el-form-item
              label="a.违法认定法条："
              prop="confirmBasis">
              <el-input
                v-model.trim="dangerItemDetail.confirmBasis"
                type="textarea"
                placeholder="请填写违法认定法条"
                :autosize="{ minRows: 1, maxRows: 5}"
                :maxlength="1000"
                @change="val => changeValue(val, 'confirmBasis')">
              </el-input>
            </el-form-item>
            <el-form-item
              label="b.现场处理决定："
              prop="onsiteType">
              <div style="display: flex;">
                <el-input
                  v-model.trim="dangerItemDetail.onsiteDesc"
                  placeholder="请填写现场处理决定"
                  :maxlength="1000"
                  style="width: calc(100% - 210px); margin-right: 10px;"
                  @change="changeOnsiteDesc">
                </el-input>
                <!-- 现场处理类型 -->
                <el-select
                  v-if="options.showSelectDangerBtn"
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
                :autosize="{ minRows: 1, maxRows: 5}"
                :maxlength="1000"
                @change="val => changeValue(val, 'onsiteBasis')">
              </el-input>
            </el-form-item>
            <el-form-item
              label="c.行政处罚决定："
              prop="penaltyDesc">
              <el-input
                v-model.trim="dangerItemDetail.penaltyDesc"
                placeholder="请填写行政处罚决定"
                :maxlength="1000"
                @change="val => changeValue(val, 'penaltyDesc')">
              </el-input>
            </el-form-item>
            <el-form-item
              label="c.行政处罚依据："
              prop="penaltyBasis">
              <el-input
                v-model.trim="dangerItemDetail.penaltyBasis"
                type="textarea"
                placeholder="请填写行政处罚依据"
                :autosize="{ minRows: 1, maxRows: 5}"
                :maxlength="1000"
                @change="val => changeValue(val, 'penaltyBasis')">
              </el-input>
            </el-form-item>
            <el-form-item
              v-if="options.showSelectDangerBtn"
              label="更改从属隐患类别："
              prop="changeDangerType"
              style="width: 100%;"
              ref="changeDangerType">
              <el-select 
                v-model="dangerItemDetail.firstDangerType"
                placeholder="请选择从属隐患类别"
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
                placeholder="请选择从属隐患类别"
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
                placeholder="请选择从属隐患类别"
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
              v-if="options.showSelectDangerBtn"
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
              v-if="options.showSelectDangerBtn"
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
                @change="val => changeValue(val, 'reviewDate')">
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
          </el-form>
        </div>
        <div v-if="options.showPunishmentInfor" class="col-main">
          <div class="title">
            <span>行政处罚信息捕获</span>
          </div>
          <div class="puinshment-main">
            <div
              v-for="(item, index) in dataForm.tempValue.punishmentList"
              :key="index"
              class="puinshment-item-main"
            >
              <span class="puinshment-item-title"><i class="el-icon-tickets" /> 隐患{{index + 1}}：</span>
              <span>{{ item.counterStr }}</span>
              <span>{{ item.fineStr }}</span>
              <span>{{ item.penaltyDesStr }}</span>
            </div>
          </div>
          <div class="title">
            <span>合并处罚文书用语</span>
          </div>
          <div>
            <el-input
              v-model="dataForm.tempValue.punishmentInfor"
              type="textarea"
              :rows="5"
              placeholder="请填写合并处罚信息">
            </el-input>
          </div>
        </div>
      </div>
    </div>
    <select-person
      v-if="visible.selectPerson"
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
import { severalDaysLater, getNowTime, getNowFormatTime } from "@/utils/date";
import selectPerson from '@/components/select-person'
import { treeDataTranslate, fuzzyearch, randomString, getMoney, transformNumToChinese, thousands, sortbyAsc } from '@/utils'
import { retrunGetMoney, getPenaltyDescType } from '@/utils/setInitPaperData'
import Sortable from 'sortablejs'
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
          punishmentInfor: null,
          punishmentList: [],
          tableData: [],
          selectedDangerList: [],  // 多选隐患项
          dangerContentMerge: false, // 是否合并隐患项
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
          showSelectDangerBtn: false, // 用于区分是否可以选择隐患项
          showDangerInfor: false, // 用于区分是否可以修改隐患情况
          showMergeBtn: false, // 用于区分是否展示隐患合并按钮
          showPunishmentInfor: false, // 展示行政处罚信息
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
          dangerInfor: null,
          punishmentInfor: null,
          punishmentList: [],
          tableData: [],
          selectedDangerList: [],  // 多选隐患项
          dangerContentMerge: false, // 是否合并隐患项
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
        penaltyDescTypeId: null, // 行政处罚决定类型的id
        penaltyDescType: null, // 行政处罚决定类型
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
      rules: {
        personIds: [
          { required: true, message: '请选择隐患发现人', tirgger: 'change' }
        ],
        itemContent: [
          { required: true, message: '请填写违法行为描述', tirgger: 'blur' }
        ],
        onsiteType: [
          { required: true, message: '请选择现场处理决定', tirgger: 'blur' }
        ],
        changeDangerType: [
          {required: true, message: '请选择隐患从属类别', trigger: 'change'},
          { validator: validateCate, trigger: 'change' }
        ]
      },
      onsiteTypeOptions: [], // 现场处理类型码表
      subitemTypeOptions: [], // 行政处罚类型码表
      showOnsiteDesc: {
        deviceNum: false,
        coalingFace: false,
        headingFace: false,
      },
      selectedRowPersonList: [], // 选择的检查人员列表，用于回显
      dangerCateOptions: { // 隐患类别码表，用于修改从属类别
        dangerCateList: [],
        dangerCateSecList: [],
        dangerCateThirdList: []
      },
      sortableItem: null, // 拖拽实例
      originalValue: null, // 原始数据，用来对比是否修改数据
      setPunishmentInfor: false, // 是否需要重置合并处罚文书用语，如果为true则重新计算合并处罚文书用语
    };
  },
  async created() {
    this.getDictionary()
    this.initData()
  },
  mounted() {
    this.setSelection()
    this.rowDrop()
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
    'dataForm.tempValue.tableData.length'(val) {
      // 列表中有两个以上的值时才能排序
      if (val > 1) {
        this.sortableItem.options.disabled = false
      } else {
        this.sortableItem.options.disabled = true
      }
    },
  },
  methods: {
    async getDictionary () {
      // 获取码表
      let dictionaryList = await this.getDatabase('dictionary')
      let onsiteType = dictionaryList.find(item => item.type === 'onsiteDesc') 
      let onsiteTypeList = onsiteType ? JSON.parse(onsiteType.list) : []
      onsiteTypeList.sort(sortbyAsc('sort'))
      this.onsiteTypeOptions = onsiteTypeList
      let subitemType = dictionaryList.find(item => item.type === 'subitemType')
      let subitemTypeList = subitemType ? JSON.parse(subitemType.list) : []
      subitemTypeList.sort(sortbyAsc('sort'))
      this.subitemTypeOptions = subitemTypeList
      // 当文书为案件处理呈报书、行政处罚告知书、行政处罚决定书时，同步结算行政处罚信息捕获及合并处罚文书
      let page = this.options.page
      if (page === '36' || page === '6' || page === '8') {
        this.setPunishmentList()
      }
    },
    async initData () {
      let tempData = Object.assign({}, this.dataForm.tempValue, this.value)
      this.dataForm.tempValue = tempData
      // 保存初始数据
      this.originalValue = tempData
      if (this.dataForm.tempValue.tableData.length > 0) {
        await this.selectedItem({
          $index: 0,
          row: this.dataForm.tempValue.tableData[0]
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
      this.dangerItemDetail = scope.row
      await this.getDangerCate()
    },
    setSelection() {
      // 设置选中
      for(let i = 0; i < this.dataForm.tempValue.selectedDangerList.length; i++) {
        let item = this.dataForm.tempValue.selectedDangerList[i]
        for (let j = 0; j < this.dataForm.tempValue.tableData.length; j++) {
          let tableItem = this.dataForm.tempValue.tableData[j]
          if (tableItem.dangerId === item.dangerId) {
            this.$nextTick(() => {
              this.$refs.dangerTable.toggleRowSelection(tableItem, true)
            })
          }
        }
      }
    },
    // 行拖拽
    rowDrop () {
      // 此时找到的元素是要拖拽元素的父容器
      const tbody = this.$refs.dangerTable.$el.querySelectorAll(
        '.el-table__body-wrapper > table > tbody'
      )[0]
      const that = this;
      this.sortableItem = new Sortable(tbody, {
        //  指定父元素下可被拖拽的子元素
        draggable: ".el-table__row",
        disabled: that.dataForm.tempValue.tableData.length < 2,
        onEnd ({ newIndex, oldIndex }) {
          that.orderTable(oldIndex, newIndex)
        }
      });
    },
    orderTable (oldIndex, newIndex) {
      // 修改tableData中所有项目的order值
      let value = JSON.parse(JSON.stringify(this.dataForm.tempValue.tableData))
      // 删除tableData中原位置的隐患项
      let currRow = value.splice(oldIndex, 1)[0]
      // 在tableData新位置中插入隐患项
      value.splice(newIndex, 0, currRow);
      // 重新排列order
      for (let index = 0; index < value.length; index++) {
        let item = value[index]
        item.order = index
        // 同步更新已选择列表中的order
        for (let j = 0; j < this.dataForm.tempValue.selectedDangerList.length; j++) {
          let selectedItem = this.dataForm.tempValue.selectedDangerList[j]
          if (selectedItem.dangerId === item.dangerId) {
            this.dataForm.tempValue.selectedDangerList[j].order = index
          }
        }
      }
      // 按新的order排序数组
      value.sort(sortbyAsc('order'))
      this.dataForm.tempValue.selectedDangerList.sort(sortbyAsc('order'))
      this.$set(this.dataForm.tempValue, 'tableData', value)
      this.setSelection()
      // 再同步修改已选中展示的节点元素
      if (this.dangerItemDetail.dangerId) {
        for (let i = 0; i < this.dataForm.tempValue.tableData.length; i++) {
          let item = this.dataForm.tempValue.tableData[i]
          if (item.dangerId === this.dangerItemDetail.dangerId) {
            this.dangerItemDetail.order = item.order
          }
        }
      }
    },
    handleDialog (key) {
      if (key === 'receiveDanger' && !this.$store.state.onLine) {
        this.$message.error('当前为离线登录，请联网后接收隐患！')
        return
      }
      // 展示选择检查内容弹窗
      this.visible[key] = true
    },
    handleClose (key) {
      this.visible[key] = false
    },
    async handleSave (params) {
      // 保存选择的检查项
      let tableData = []
      // 抽取选择的检查项最底一层，作为table展示
      this.handleData(params.data.selecteddangerList, tableData)
      if (tableData.length > 0) {
        let showDetailIndex = this.dataForm.tempValue.tableData.length
        for (let i = 0; i < tableData.length; i++) {
          let item = tableData[i]
          // 通过模糊匹配onsiteType
          let onsiteType = null
          let matchOption = fuzzyearch(item.onsiteDesc, this.onsiteTypeOptions, 'label')
          if (matchOption) {
            onsiteType = matchOption.value
          }
          // 获取罚款金额
          let penaltyDescFine = 0
          if (item.penaltyDesc) {
            let {money, count} = retrunGetMoney(item.penaltyDesc)
            if (count > 0 && count < 3) {
              penaltyDescFine = money
            }
          }
          let {id, type} = getPenaltyDescType(item.penaltyDesc, this.subitemTypeOptions)
          // 通过categoryCode获取从属隐患一级和二级类别
          let secDangerType = await this.getParentDangerCateCode(item.categoryCode)
          let firstDangerType = await this.getParentDangerCateCode(secDangerType)
          let addItem = Object.assign({}, item, {
            dangerId: getNowTime() + randomString(28),
            personIds: this.$store.state.user.userId, // 隐患发现人
            personNames: this.$store.state.user.userName, // 隐患发现人
            onsiteType, // 现场处理决定类型
            headingFace: null, // 掘进工作面
            deviceNum: null, // 设备台数
            coalingFace: null, // 采煤工作面
            penaltyDescFine, // 行政处罚决定罚金
            penaltyDescTypeId: id, // 行政处罚决定类型的id
            penaltyDescType: type, // 行政处罚决定类型
            firstDangerType, // 第一级隐患类别
            secDangerType, // 第二级隐患类别
            changeDangerType: item.categoryCode, // 更改的隐患类别
            isSerious: '0', // 是否重大隐患
            isReview: '0', // 是否复查
            reviewDate: null, // 复查日期
            order: this.dataForm.tempValue.tableData.length,
            createDate: getNowFormatTime(),
            delFlag: '2',
          })
          this.dataForm.tempValue.tableData.push(addItem)
          // 同时放入已选隐患中设置选中
          this.dataForm.tempValue.selectedDangerList.push(addItem)
        }
        this.setSelection()
        await this.selectedItem({
          $index: showDetailIndex,
          row: this.dataForm.tempValue.tableData[showDetailIndex]
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
              order: tableData.length,
              headingFace: '', // 掘进工作面
              deviceNum: '', // 设备台数
              coalingFace: '', // 采煤工作面
              isSerious: '0',
              isReview: '0',
              reviewDate: null,
              active: false,
            })
            tableData.push(itemObject)
          }
        })
      }
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
      this.orderTable(dangerItemDetail.order, newOrder)
    },
    changeValue (val, field) {
      let index = this.dangerItemDetail.order
      this.$set(this.dataForm.tempValue.tableData, index, this.dangerItemDetail)
      if (field === 'isReview') {
        if (val === '1') {
          // 如果是隐患复查，并且为是的时候，设置reviewDate复查日期为顺延一个月
          let reviewDate = severalDaysLater(30)
          let reviewDateList = reviewDate.split('-')
          this.dangerItemDetail.reviewDate = `${reviewDateList[0]}年${reviewDateList[1]}月${reviewDateList[2]}日`
          this.$set(this.dataForm.tempValue.tableData, index, this.dangerItemDetail)
        } else {
          // 如果不为隐患复查，清空日期
          this.dangerItemDetail.reviewDate = ''
          this.$set(this.dataForm.tempValue.tableData, index, this.dangerItemDetail)
        }
      } else if (field === 'penaltyDesc') {
        // 修改行政处罚决定时同步关联修改罚金字段penaltyDescFine
        // 同步关联修改行政处罚决定类型
        let {money, count} = retrunGetMoney(val)
        let penaltyDescFine = 0
        if (count > 0 && count < 3) {
          penaltyDescFine = money
        }
        let {id, type} = getPenaltyDescType(val, this.subitemTypeOptions)
        this.dataForm.tempValue.tableData[index].penaltyDescFine = penaltyDescFine
        this.dataForm.tempValue.tableData[index].penaltyDescTypeId = id
        this.dataForm.tempValue.tableData[index].penaltyDescType = type
        // 同步修改已选择的数据
        if (this.dataForm.tempValue.selectedDangerList && this.dataForm.tempValue.selectedDangerList.length > 0) {
          let selectedItemIndex = this.dataForm.tempValue.selectedDangerList.findIndex(item => item.dangerId === this.dataForm.tempValue.tableData[index].dangerId)
          if (selectedItemIndex !== -1) {
            let obj = Object.assign({}, this.dataForm.tempValue.selectedDangerList[selectedItemIndex], {
              penaltyDescFine: penaltyDescFine,
              penaltyDescTypeId: id,
              penaltyDescType: type,
            })
            this.$set(this.dataForm.tempValue.selectedDangerList, selectedItemIndex, obj)
          }
        }
      }
      // 同步修改已选择的数据
      if (this.dataForm.tempValue.selectedDangerList && this.dataForm.tempValue.selectedDangerList.length > 0) {
        let selectedItemIndex = this.dataForm.tempValue.selectedDangerList.findIndex(item => item.dangerId === this.dataForm.tempValue.tableData[index].dangerId)
        if (selectedItemIndex !== -1) {
          this.dataForm.tempValue.selectedDangerList[selectedItemIndex][field] = val
        }
      }
      if (field === 'penaltyDesc') {
        // 修改行政处罚信息捕获内容和合并处罚文书用语
        this.setPunishmentInfor = true
        this.setPunishmentList()
      }
    },
    async handleSaveReceiveDanger (dangerList) {
      // 保存接收的隐患项: 放入隐患列表
      for (let i = 0; i < dangerList.length; i++) {
        let receiveDanger = dangerList[i]
        // 添加
        // 通过模糊匹配onsiteType
        let onsiteType = null
        let matchOption = fuzzyearch(receiveDanger.onsiteDesc, this.onsiteTypeOptions, 'label')
        if (matchOption) {
          onsiteType = matchOption.value
        }
        // 获取罚款金额
        let penaltyDescFine = 0
        if (receiveDanger.penaltyDesc) {
          let {money, count} = retrunGetMoney(receiveDanger.penaltyDesc)
          if (count > 0 && count < 3) {
            penaltyDescFine = money
          }
        }
        let {id, type} = getPenaltyDescType(receiveDanger.penaltyDesc, this.subitemTypeOptions)
        // 通过categoryCode获取从属隐患一级和二级类别
        let categoryCode = receiveDanger.categoryCode
        let secDangerType = ''
        if (receiveDanger.categoryCode) {
          secDangerType = await this.getParentDangerCateCode(receiveDanger.categoryCode)
        }
        let firstDangerType = ''
        if (secDangerType === '000000') {
          firstDangerType = receiveDanger.categoryCode
          secDangerType = null
          categoryCode = null
        } else {
          firstDangerType = await this.getParentDangerCateCode(secDangerType)
        }
        let receData = {
          dangerId: getNowTime() + randomString(28),
          active: false,
          itemCode: receiveDanger.itemCode,
          no: receiveDanger.no,
          categoryCode: categoryCode,
          personIds: receiveDanger.personId, // 隐患发现人
          personNames: receiveDanger.name, // 隐患发现人
          itemContent: receiveDanger.itemContent, // 违法行为描述
          confirmBasis: receiveDanger.confirmBasis, // 违法认定法条
          onsiteDesc: receiveDanger.onsiteDesc, // 现场处理决定
          onsiteBasis: receiveDanger.onsiteBasis, // 现场处理依据
          onsiteType, // 现场处理决定类型
          headingFace: null, // 掘进工作面
          deviceNum: null, // 设备台数
          coalingFace: null, // 采煤工作面
          penaltyDesc: receiveDanger.penaltyDesc, // 行政处罚决定
          penaltyDescFine, // 行政处罚决定罚金
          penaltyDescTypeId: id, // 行政处罚决定类型的id
          penaltyDescType: type, // 行政处罚决定类型
          penaltyBasis: receiveDanger.penaltyBasis, // 行政处罚依据
          firstDangerType, // 第一级隐患类别
          secDangerType, // 第二级隐患类别
          changeDangerType: categoryCode, // 更改的隐患类别
          isSerious: '0', // 是否重大隐患
          isReview: '0', // 是否复查
          reviewDate: null, // 复查日期
          order: this.dataForm.tempValue.tableData.length,
          delFlag: '2',
          isCommon: receiveDanger.isCommon,
          createDate: receiveDanger.createDate
        }
        this.dataForm.tempValue.tableData.push(receData)
          // 同时放入已选隐患中设置选中
        this.dataForm.tempValue.selectedDangerList.push(receData)
      }
      this.setSelection()
    },
    deleteDangerItem (scope) {
      // 删除单条隐患项
      this.$confirm(`是否确定删除隐患项：${scope.row.itemContent}？`, '提示', {
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
    deleteDangerList () {
      if (this.dataForm.tempValue.selectedDangerList && this.dataForm.tempValue.selectedDangerList.length > 0) {
        let delMsg = '第'
        this.dataForm.tempValue.selectedDangerList.map((item, index) => {
          delMsg += (index + 1) + '，'
        })
        delMsg = delMsg.substring(0, delMsg.length - 1) + '条'
        this.$confirm(`是否确定删除隐患项：${delMsg}？`, '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            dangerouslyUseHTMLString: true,
            type: 'warning'
          }).then(() => {
            let value = JSON.parse(JSON.stringify(this.dataForm.tempValue.tableData))
            this.dataForm.tempValue.selectedDangerList.map(selectedItem => {
              // 删除隐患项列表tableData中数据
              let index = value.findIndex(tableItem => tableItem.dangerId === selectedItem.dangerId)
              value.splice(index, 1)
            })
            // 更改当前所有数据的order排序值
            value.forEach((item, index) => {
              item.order = index
            })
            this.dataForm.tempValue.tableData = value
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
      } else {
        this.$message.error('请选择删除的隐患！')
      }
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
      // 确认选择检查人员
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
      let dangerCate = await this.getDatabase('dangerCate')
      let corpBase = await this.getDatabase('baseInfo');
      let dangerCateData = JSON.parse(JSON.stringify(dangerCate.filter((item) => item.delFlag !== '1') || []))
      let corpBaseData = corpBase.find((item) => {
        return item.corpId === this.corpData.corpId
      });
      let list = treeDataTranslate([...dangerCateData], 'treeId', 'treeParentId')
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
        let setDefault = false
        if (corpBaseData.mineMinetypeName === '井工' || corpBaseData.mineMinetypeName === '露天') {
          if (curDangerFirst[0].categoryCode === this.dangerCateOptions.dangerCateList[0].categoryCode) {
            setDefault = true
          }
        } else {
          setDefault = true
        }
        if (setDefault) {
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
      } else if (this.dangerItemDetail.secDangerType) {
        let curDangerSec = dangerCateData.filter(item => item.categoryCode === this.dangerItemDetail.secDangerType)
        let curDangerFirst = dangerCateData.filter(item => item.categoryCode === curDangerSec[0].pid)
        let setDefault = false
        if (corpBaseData.mineMinetypeName === '井工' || corpBaseData.mineMinetypeName === '露天') {
          if (curDangerFirst[0].categoryCode === this.dangerCateOptions.dangerCateList[0].categoryCode) {
            setDefault = true
          }
        } else {
          setDefault = true
        }
        if (setDefault) {
          // 设置默认值
          this.dangerItemDetail.firstDangerType = curDangerFirst[0].categoryCode
          this.changeDangerCate(curDangerFirst[0].categoryCode, '0')
          this.dangerItemDetail.secDangerType = curDangerSec[0].categoryCode
          this.changeDangerCate(curDangerSec[0].categoryCode, '1')
        } else {
          this.dangerItemDetail.firstDangerType = null
          this.dangerItemDetail.secDangerType = null
          this.dangerCateOptions.dangerCateSecList = []
          this.dangerItemDetail.changeDangerType = null
          this.dangerCateOptions.dangerCateThirdList = []
        }
      } else if (this.dangerItemDetail.firstDangerType) {
        let curDangerFirst = dangerCateData.filter(item => item.categoryCode === this.dangerItemDetail.firstDangerType)
        let setDefault = false
        if (corpBaseData.mineMinetypeName === '井工' || corpBaseData.mineMinetypeName === '露天') {
          if (curDangerFirst[0].categoryCode === this.dangerCateOptions.dangerCateList[0].categoryCode) {
            setDefault = true
          }
        } else {
          setDefault = true
        }
        if (setDefault) {
          // 设置默认值
          this.dangerItemDetail.firstDangerType = curDangerFirst[0].categoryCode
          this.changeDangerCate(curDangerFirst[0].categoryCode, '0')
        } else {
          this.dangerItemDetail.firstDangerType = null
          this.dangerItemDetail.secDangerType = null
          this.dangerCateOptions.dangerCateSecList = []
          this.dangerItemDetail.changeDangerType = null
          this.dangerCateOptions.dangerCateThirdList = []
        }
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
        this.dangerCateOptions.dangerCateSecList = cur.length > 0 ? cur[0].children : this.dangerCateOptions.dangerCateList[0]
        // 清空第二级和第三级从属类别
        this.dangerItemDetail.secDangerType = null
        this.dangerItemDetail.changeDangerType = null
        this.dangerCateOptions.dangerCateThirdList = []
      } else if (level === '1') {
        let cur = this.dangerCateOptions.dangerCateSecList.length > 0 ? this.dangerCateOptions.dangerCateSecList.filter(item => item.categoryCode === val) : []
        this.dangerCateOptions.dangerCateThirdList = cur.length > 0 ? cur[0].children : this.dangerCateOptions.dangerCateSecList[0]
        // 第三级从属类别
        this.dangerItemDetail.changeDangerType = null
      } else if (level === '2') {
        if (this.dangerItemDetail.isCommon === '1') {
          this.dangerItemDetail.categoryCode = val
        }
      }
    },
    async getParentDangerCateCode (code) {
      // 获取父级code
      let dangerCate = await this.getDatabase('dangerCate')
      let parentCode = ''
      parentCode = dangerCate.find((item) => item.delFlag !== '1' && item.categoryCode === code);
      return parentCode ? parentCode.pid : ''
    },
    changeOnsiteDesc (val) {
      // 修改现场处理决定，关联现场处理决定选择
      let matchOption = fuzzyearch(val, this.onsiteTypeOptions, 'label')
      if (matchOption) {
        this.dangerItemDetail.onsiteType = matchOption.value
        this.changeValue(matchOption.value, 'onsiteType')
      }
    },
    addNewDanger () {
      // 新建隐患项
      let itemCode = getNowTime() + randomString(28)
      this.dataForm.tempValue.tableData.push({
        dangerId: getNowTime() + randomString(28),
        active: true,
        categoryCode: '', // 新增的同changeDangerType
        personIds: this.$store.state.user.userId, // 隐患发现人
        personNames: this.$store.state.user.userName, // 隐患发现人
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
        penaltyDescTypeId: '', // 行政处罚决定类型的id
        penaltyDescType: '', // 行政处罚决定类型
        penaltyBasis: '', // 行政处罚依据
        firstDangerType: '', // 第一级隐患类别
        secDangerType: '', // 第二级隐患类别
        changeDangerType: '', // 更改的隐患类别
        isSerious: '0', // 是否重大隐患
        isReview: '0', // 是否复查
        reviewDate: '', // 复查日期
        createDate: getNowFormatTime(), // 创建日期
        itemCode: itemCode, //
        no: itemCode, // 同itemCode
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
    },
    handleSelectionChange (val) {
      this.dataForm.tempValue.selectedDangerList = val
      this.setPunishmentList()
    },
    selectDanger (val) {
      // 监听隐患列表中数据变动，根据变化的数据捕获处罚信息和合并处罚文书用语
      // 当文书为案件处理呈报书、行政处罚告知书、行政处罚决定书时，同步结算行政处罚信息捕获及合并处罚文书
      this.setPunishmentInfor = true
    },
    dangerMerge () {
      // 隐患合并
      // 检索数据，合并相同字段数据，形成返回数据
      this.$parent.$parent.handleSave(false, true)
    },
    setPunishmentList () {
      // setPunishmentInfor更新合并处罚信息标记，如果修改隐患中行政处罚决定时，一定联动修改处罚情况
      // 获取行政处罚信息
      if (this.subitemTypeOptions.length > 0) {
        let punishmentList = []
        let selectedDangerList = this.dataForm.tempValue.selectedDangerList || []
        if (selectedDangerList.length > 0) {
          for (let i = 0; i < selectedDangerList.length; i++) {
            let item = selectedDangerList[i]
            let punishmentObj = {
              counterStr: '', // 针对个人或单位
              fine: 0, // 罚款
              fineStr: '', // 罚款
              penaltyDesId: '', // 处罚决定
              penaltyDesStr: '', // 处罚决定
            }
            // 获取针对个人或单位
            if (this.options.selectedType) {
              punishmentObj.counterStr = `针对“${this.options.selectedType}”`
            }
            // 获取罚款金额
            // 增加逻辑：判断是否有多个“罚款”，如果有则提示多个罚款金额，无法计算罚款金额
            if (item.penaltyDesc) {
              if (item.penaltyDesc.split('罚款').length > 2) {
                punishmentObj.fineStr = '（发现本条隐患存在多个罚款金额，对于“行政处罚告知书、行政处罚决定书”只能一条隐患拥有一个罚款金额，请修正“行政处罚决定用语”!）'
              } else {
                let stringList = item.penaltyDesc.replace(/\（(.+?)\）/g, '').replace(/\((.+?)\)/g, '').split(/[,᠃.。，]/)
                for (let i = 0; i < stringList.length; i++) {
                  let string = stringList[i]
                  if (string.includes('罚款') && string.includes('元')) {
                    let count = 0
                    for (let j = 0; j < string.length; j++) {
                      if (string[j] === '元') count ++  
                    }
                    if (count > 2) {
                      // 如果当前有2个以上的元字，则报错提示
                      punishmentObj.fineStr = '（发现本条隐患存在多个罚款金额，对于“行政处罚告知书、行政处罚决定书”只能一条隐患拥有一个罚款金额，请修正“行政处罚决定用语”!）'
                    } else {
                      // 提取罚款金额
                      punishmentObj.fine = getMoney(string) 
                      punishmentObj.fineStr = `罚款${getMoney(string)}元` 
                      punishmentObj.penaltyDesStr = '罚款,'
                      punishmentObj.penaltyDesId = this.subitemTypeOptions.filter(item => item.label === '罚款')[0].value + ','
                    }
                  }
                }
              }
            }
            // 获取处罚决定
            // 通过行政处罚决定penaltyDesc获取行政处罚信息
            for (let j = 0; j < this.subitemTypeOptions.length; j++) {
              if (this.subitemTypeOptions[j].searchLabel && item.penaltyDesc && item.penaltyDesc.includes(this.subitemTypeOptions[j].searchLabel)) {
                punishmentObj.penaltyDesId += this.subitemTypeOptions[j].value + ','
                punishmentObj.penaltyDesStr += this.subitemTypeOptions[j].label + ','
              }
            }
            if (punishmentObj.penaltyDesId) punishmentObj.penaltyDesId = punishmentObj.penaltyDesId.substring(0, punishmentObj.penaltyDesId.length - 1)
            if (punishmentObj.penaltyDesStr) punishmentObj.penaltyDesStr = punishmentObj.penaltyDesStr.substring(0, punishmentObj.penaltyDesStr.length - 1)
            punishmentList.push(punishmentObj)
          } 
          this.$set(this.dataForm.tempValue, 'punishmentList', punishmentList)
          if (!this.dataForm.tempValue.punishmentInfor || this.setPunishmentInfor) {
            // 合并处罚文书仅在选择的隐患项大于1条，即两条以上时才计算
            if (selectedDangerList.length > 1) {
              // 两条以上合并处罚
              let total = 0
              let penaltyId = ''
              let penaltyStr = ''
              for (let i = 0; i < punishmentList.length; i++) {
                let item = punishmentList[i]
                // 合计罚款
                if (item.fine) {
                  total += item.fine
                }
                if (item.penaltyDesId) {
                  let idItemList = item.penaltyDesId.split(',')
                  idItemList.map(idItem => {
                    if (!penaltyId.includes(idItem)) {
                      penaltyId += idItem + ','
                    }
                  })
                }
                if (item.penaltyDesStr) {
                  let strItemList = item.penaltyDesStr.split(',')
                  strItemList.map(strItem => {
                    // 用语中去掉“罚款”，但行政处罚类型中保留
                    if (strItem !== '罚款') {
                      if (!penaltyStr.includes(strItem)) {
                        penaltyStr += strItem + ','
                      }
                    }
                  })
                }
              }
              // 转换大写和人民币金额样式
              let transTotal = transformNumToChinese(total)
              let thousandsTotal = thousands(total)
              if (penaltyId) penaltyId = penaltyId.substring(0, penaltyId.length - 1)
              if (penaltyStr) penaltyStr = penaltyStr.substring(0, penaltyStr.length - 1)
              this.$set(this.dataForm.tempValue, 'punishmentInfor', `合并罚款人民币${transTotal}（¥${thousandsTotal}）${penaltyStr}`)
            } else {
              this.$set(this.dataForm.tempValue, 'punishmentInfor', '')
            }
            // setPunishmentInfor为是否重新计算合并处罚文书用语字段，只有当修改选择的隐患项时才处罚重置，重置一次后标记下次不再重置
            this.setPunishmentInfor = false
          }
        } else {
          this.$set(this.dataForm.tempValue, 'punishmentList', [])
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  margin-top: 10px;
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
  height: calc(100vh - 320px);
  min-width: 900px;
  overflow: hidden;
  .danger-table-main-table {
    flex: 2;
    height: 100%;
    overflow: auto;
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
    min-width: 500px;
    flex: 4;
    border: 1px solid #EBEEF5;
    margin-left: 10px;
    padding: 0 7px;
    overflow: auto;
    .special-form-item {
      /deep/ .el-form-item__content {
        display: inline-block;
        line-height: 0;
      }
    }
  }
  .col-main {
    min-width: 200px;
    flex: 1;
    border: 1px solid #EBEEF5;
    padding: 0 7px;
    overflow: auto;
    .puinshment-main {
      height: calc(100% - 250px);
      overflow: auto;
      .puinshment-item-main {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        span {
          line-height: 1.5;
          font-size: 15px;
          color: #606266;
        }
        .puinshment-item-title {
          font-size: 16px;
          color: #4F83E9;
        }
      }
    }
  }
  /deep/ .el-form-item {
    margin-bottom: 10px;
  }
  /deep/ .el-form--label-top .el-form-item__label {
    padding: 0px;
  }
  /deep/ .el-input__inner {
    font-family: monospace;
  }
}
</style>