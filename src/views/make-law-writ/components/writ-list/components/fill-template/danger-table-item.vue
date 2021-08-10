<!-- 填写组件 隐患 -->
<template>
  <div style="width: 100%;">
    <div>
      <div class="title">
        <span>基本信息：</span>
      </div>
      <el-input
        v-model="dataForm.tempValue.baseInfor"
        type="textarea"
        :autosize="{ minRows: 3, maxRows: 6}"
        placeholder="请填写基本信息">
      </el-input>
    </div>
    <div>
      <div class="title">
        <span>隐患情况：</span>
      </div>
      <div style="margin-top: 10px;">
        <el-button type="primary" @click="handleDialog('dangerSelect')">选择隐患内容</el-button>
      </div>
      <div class="danger-table-main">
        <!-- 隐患项展示，选择 -->
        <div class="danger-table-main-table">
          <!-- 展示已选隐患 -->
          <el-table
            v-if="dataForm.tempValue.tableData"
            :data="dataForm.tempValue.tableData"
            style="width: 100%;"
            row-key="treeId"
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
              </template>
            </el-table-column>
          </el-table>
          <!-- 修改隐患信息 -->
        </div>
        <!-- 修改隐患项 -->
        <div class="danger-table-main-content">
          <el-form
            v-if="dataForm.tempValue.dangerItemDetail.id"
            :model="dataForm.tempValue.dangerItemDetail"
            ref="dataForm"
            label-position="top"
            size="small"
            :rules="rules">
            <el-form-item
              label="违法行为描述（可追加细节）："
              prop="itemContent">
              <el-input
                v-model.trim="dataForm.tempValue.dangerItemDetail.itemContent"
                placeholder="请填写违法行为描述"
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 4}"
                :maxlength="200">
              </el-input>
            </el-form-item>
            <el-form-item
              label="a.违法认定法条："
              prop="confirmClause">
              <el-input
                v-model.trim="dataForm.tempValue.dangerItemDetail.confirmClause"
                type="textarea"
                placeholder="请填写违法认定法条"
                :autosize="{ minRows: 2, maxRows: 4}"
                :maxlength="300">
              </el-input>
            </el-form-item>
            <el-form-item
              label="b.现场处理决定："
              prop="onsiteDesc">
              <el-input
                v-model.trim="dataForm.tempValue.dangerItemDetail.onsiteDesc"
                placeholder="请填写现场处理决定"
                :maxlength="300"
                style="width: calc(100% - 200px);">
              </el-input>
              <!-- 现场处理类型 -->
              <el-select
                v-model="dataForm.tempValue.dangerItemDetail.onsiteType">
                <el-option
                  v-for="(item, index) in onsiteTypeOptions"
                  :key="index"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item
              label="b.现场处理依据："
              prop="onsiteBasis">
              <el-input
                v-model.trim="dataForm.tempValue.dangerItemDetail.onsiteBasis"
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
                v-model.trim="dataForm.tempValue.dangerItemDetail.penaltyDesc"
                placeholder="请填写行政处罚决定"
                :maxlength="300">
              </el-input>
            </el-form-item>
            <el-form-item
              label="c.行政处罚依据："
              prop="penaltyBasis">
              <el-input
                v-model.trim="dataForm.tempValue.dangerItemDetail.penaltyBasis"
                type="textarea"
                placeholder="请填写行政处罚依据"
                :autosize="{ minRows: 2, maxRows: 4}"
                :maxlength="300">
              </el-input>
            </el-form-item>
            <el-form-item
              label="是否重大隐患："
              prop="isSerious"
              class="special-form-item">
              <el-checkbox
                v-model="dataForm.tempValue.dangerItemDetail.isSerious"
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
                v-model="dataForm.tempValue.dangerItemDetail.isReview"
                true-label="1"
                false-label="0"
                @change="val => changeValue(val, 'isReview')"
              ></el-checkbox>
              <el-date-picker
                v-if="dataForm.tempValue.dangerItemDetail.isReview === '1'"
                v-model="dataForm.tempValue.dangerItemDetail.reviewDate"
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
                v-if="dataForm.tempValue.dangerItemDetail.order !== 0"
                type="text"
                @click="changeOrder('forward')">
                向前
              </el-button>
              <el-button
                v-if="dataForm.tempValue.dangerItemDetail.order !== dataForm.tempValue.tableData.length - 1"
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
    <select-danger-content
      v-if="visible.dangerSelect"
      :visible="visible.dangerSelect"
      :value="dataForm.tempValue"
      :corp-data="corpData"
      @save="handleSave"
      @close="handleClose"
    ></select-danger-content>
  </div>
</template>

<script>
import selectDangerContent from '@/views/make-law-writ/components/writ-list/components/select-danger-content'
export default {
  name: "DangerTableItem",
  components: {
    selectDangerContent,
  },
  props: {
    value: {
      type: Object,
      default: () => {
        return {
          baseInfor: null,
          tableData: [],
          selectedIdList: [],
          dangerItemDetail: {}
        }
      }
    },
    corpData: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      dataForm: {
        tempValue: {
          baseInfor: null,
          tableData: [],
          selectedIdList: [],
          dangerItemDetail: {
            itemContent: null, // 违法行为描述
            confirmClause: null, // 违法认定法条
            onsiteDesc: null, // 现场处理决定
            onsiteBasis: null, // 现场处理依据
            onsiteType: null, // 现场处理决定类型
            penaltyDesc: null, // 行政处罚决定
            penaltyBasis: null, // 行政处罚依据
            isSerious: false, // 是否重大隐患
            isReview: false, // 是否复查
            reviewDate: null, // 复查日期
          }
        }
      },
      visible: {
        dangerSelect: false,
      },
      dangerListTreeProps: {
        label: 'treeName',
        children: 'children',
      },
      rules: {
        itemContent: [
          { required: true, message: '请填写违法行为描述', tirgger: 'blur' }
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
      ]
    };
  },
  created() {
    this.initData()
  },
  methods: {
    initData () {
      this.dataForm.tempValue = this.value
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
      this.dataForm.tempValue.tableData = tableData
      // 遍历table获取treeId作为后续回显
      let selectedId = []
      tableData.length > 0 && tableData.map(item => {
        selectedId.push(item.treeId)
      })
      this.dataForm.tempValue.selectedIdList = selectedId
    },
    handleData (data, tableData) {
      // 递归遍历获取最底层数据
      if (data.length > 0) {
        data.map((item) => {
          if (item.children && item.children.length > 0) {
            this.handleData(item.children, tableData)
          } else {
            tableData.push(Object.assign(item, {
              order: this.dangerIndex,
              isSerious: '0',
              isReview: '0',
              reviewDate: null,
              active: false,
            }))
            this.dangerIndex = this.dangerIndex + 1
          }
        })
      } else {
        tableData.push(Object.assign(item, {
          order: this.dangerIndex,
          isSerious: '0',
          isReview: '0',
          reviewDate: null,
          active: false,
        }))
        this.dangerIndex = this.dangerIndex + 1
      }
    },
    selectedItem(scope) {
      // 选择隐患
      this.dataForm.tempValue.tableData.forEach(item => {
        item.active = false
      })
      scope.row.active = true
      // 保存已选择的隐患项
      // 设置选中状态
      this.$set(this.dataForm.tempValue.tableData, scope.$index, scope.row)
      // 将选中的隐患项内容赋值进form中
      this.dataForm.tempValue.dangerItemDetail = scope.row
    },
    changeOrder(type) {
      // 修改排序
      let dangerItemDetail = this.dataForm.tempValue.dangerItemDetail
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
      let index = this.dataForm.tempValue.dangerItemDetail.order
      this.$set(this.dataForm.tempValue.tableData, index, this.dataForm.tempValue.dangerItemDetail)
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