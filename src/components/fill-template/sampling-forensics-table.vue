<!-- 填写组件 抽样取证清单、先行登记保存证据清单、物品清单 表格（可编辑） -->
<template>
  <div class="sampling-main">
    <!-- 标题 -->
    <div class="sampling-title">
      <span>{{ title }}</span>
    </div>
    <!-- 表格 -->
    <div class="sampling-table-main">
      <el-table
        :data="dataForm.tempValue.tableData"
        ref="table"
        border
        stripe
        height="58vh"
        style="width: 100%">
        <el-table-column
          header-align="center"
          align="center"
          width="80"
          label="序号">
          <template slot-scope="scope">
            <span>{{ scope.$index + 1 }}</span>
          </template>
        </el-table-column>
        <el-table-column
          v-for="(colItem, colIndex) in colList"
          :key="colIndex"
          :label="colItem.label"
          :header-align="colItem.headerAlign ? colItem.headerAlign : 'center'"
          :align="colItem.align ? colItem.align : 'center'"
          :width="colItem.width ? colItem.width : 'auto'"
          :min-width="colItem.minWidth ? colItem.minWidth : '300'"
          :fixed="colItem.fixed">
          <template slot-scope="scope">
            <!-- 可编辑时 -->
            <div v-if="options.canEdit">
              <div v-if="colItem.type === 'text'">
                <!-- 文本类型输入 -->
                <el-input
                  v-model.trim="scope.row[colItem.prop]">
                </el-input>
              </div>
              <div v-else-if="colItem.type === 'date'">
                <!-- 日期类型选择 -->
                <el-date-picker
                  v-model="scope.row[colItem.prop]"
                  type="date"
                  format="yyyy年M月d日"
                  value-format="yyyy年M月d日"
                  style="width: 170px;">
                </el-date-picker>
              </div>
              <div v-else>
                <!-- 其他类型直接展示不可修改 -->
                <span>{{ scope.row[colItem.prop] }}</span>
              </div>
            </div>
            <!-- 不可编辑时 -->
            <div v-else>
              <span>{{ scope.row[colItem.prop] }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          v-if="options.canEdit"
          fixed="right"
          header-align="center"
          align="center"
          width="100"
          label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="operation(scope, 'add')">添加</el-button>
            <el-button :disabled="dataForm.tempValue.tableData.length < 2" type="text" size="small" @click="operation(scope, 'delete')">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 底部 -->
    <div v-if="options.page !== '55'" class="sampling-foot-main" :style="options.page === '25' || options.page === '32' || options.page === '34' || options.page === '46' || options.page === '47' ? 'height: 160px;' : ''">
      <div v-if="options.page === '25' || options.page === '23'">
        <div v-if="options.page === '25'">
          <span>其他证据：</span>
          <el-input
            v-if="options.canEdit"
            v-model="dataForm.tempValue.otherEvidence"
            style="width: 200px;"
            size="small">
          </el-input>
          <span v-else>{{dataForm.tempValue.otherEvidence ? dataForm.tempValue.otherEvidence : ''}}</span>
        </div>
        <div style="margin-top: 10px;">
          <span>{{'上述证据经核无误。'}}</span>
        </div>
      </div>
      <div v-if="options.page === '32' || options.page === '34' || options.page === '46' || options.page === '47'">
        <div>
          <span>场所地点：</span>
          <el-input
            v-if="options.canEdit"
            v-model="dataForm.tempValue.places"
            style="width: 200px;"
            size="small">
          </el-input>
          <span v-else>{{dataForm.tempValue.places ? dataForm.tempValue.places : ''}}</span>
        </div>
        <div style="margin-top: 10px;">
          <span>上述设施、设备、器材经核无误。</span>
        </div>
      </div>
      <div style="margin-top: 10px;">
        <span>被{{options.page === '32' || options.page === '34' || options.page === '46' || options.page === '47' ? options.name : '取证'}}单位负责人（签名）：</span>
        <el-input
          v-if="options.canEdit"
          v-model="dataForm.tempValue.signature"
          style="width: 200px;"
          size="small">
        </el-input>
        <span v-else>{{dataForm.tempValue.signature ? dataForm.tempValue.signature : ''}}</span>
        <span>&nbsp;&nbsp;&nbsp;日期：</span>
        <el-date-picker
          v-if="options.canEdit"
          v-model="dataForm.tempValue.signDate"
          type="date"
          format="yyyy年M月d日"
          value-format="yyyy年M月d日"
          size="small">
        </el-date-picker>
        <span v-else>{{dataForm.tempValue.signDate ? dataForm.tempValue.signDate : ''}}</span>
      </div>
      <div v-if="options.page === '25' || options.page === '32' || options.page === '34' || options.page === '46' || options.page === '47'" style="margin-top: 10px;">
        <span>{{options.page ==='25' || options.page === '32' || options.page === '46' || options.page === '47' ? '执法人员（签名）：' : '执法人员（签名）：'}}</span>
        <el-input
          v-if="options.canEdit"
          v-model="dataForm.tempValue.lawSignature"
          style="width: 200px;"
          size="small">
        </el-input>
        <span v-else>{{dataForm.tempValue.lawSignature ? dataForm.tempValue.lawSignature : ''}}</span>
        <span>&nbsp;&nbsp;&nbsp;日期：</span>
        <el-date-picker
          v-if="options.canEdit"
          v-model="dataForm.tempValue.lawSignDate"
          type="date"
          format="yyyy年M月d日"
          value-format="yyyy年M月d日"
          size="small">
        </el-date-picker>
        <span v-else>{{dataForm.tempValue.lawSignDate ? dataForm.tempValue.lawSignDate : ''}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SamplingForensicsTable",
  props: {
    value: {
      type: Object,
      default: () => {
        return {
          tableData: [],
          signature: null,
          signDate: ''
        }
      }
    },
    options: {
      type: Object,
      default: () => {
        return {
          canEdit: false,
          page: '' // 用于控制当前为抽样取证或者先行登记保存证据清单
        }
      }
    }
  },
  data() {
    return {
      dataForm: {
        tempValue: {
          tableData: [],
          signature: null, // 被取证单位负责人（签名）
          signDate: null, // 日期
          // 以下为先行登记保存证据清单增加字段
          otherEvidence: null, // 其他证据
          lawSignature: null, // 执法人员（签名）
          lawSignDate: null, // 日期
          places: null, // 场所地点
        }
      },
    };
  },
  computed: {
    title() {
      let title = ''
      if (this.options.page === '23') {
        title = '抽样取证清单'
      } else if (this.options.page === '25') {
        title = '先行登记保存证据清单'
      } else if (this.options.page === '32' || this.options.page === '34' || this.options.page === '55') {
        title = `${this.options.name || ''}物品清单`
      } else if (this.options.page === '46' || this.options.page === '47') {
        // 查封（扣押）处理决定书
        title = this.options.name + '物品处理表'
      }
      return title
    },
    colList () {
      let colList = [
        {
          label: '名称',
          prop: 'name',
          type: 'text',
        },
        {
          label: '规格型号',
          prop: 'modelNumber',
          type: 'text',
        },
        {
          label: '生产厂家',
          prop: 'manufacturer',
          type: 'text',
        },
        {
          label: '出厂日期',
          prop: 'productDate',
          width: '190',
          type: 'date',
        },
        {
          label: '单位',
          prop: 'units',
          width: '100',
          type: 'text',
        },
        {
          label: '价格',
          prop: 'price',
          width: '100',
          type: 'text',
        },
        {
          label: '数量',
          prop: 'num',
          width: '100',
          type: 'text',
        }
      ]
      if (this.options.page === '46') {
        // 当页面为查封(扣押)处理决定书时，最后一列为处理决定
        colList.push({
          label: '处理决定',
          prop: 'desc',
          width: '200',
          type: 'text',
        })
      } else if (this.options.page === '55') {
        // 当页面为鉴定委托书时，展示的列为：物品名称，规格型号，数量和备注，
        colList = [
          {
            label: '物品名称',
            prop: 'name',
            type: 'text',
          },
          {
            label: '规格型号',
            prop: 'modelNumber',
            type: 'text',
          },
          {
            label: '数量',
            prop: 'num',
            width: '100',
            type: 'text',
          },
          {
            label: '备注',
            prop: 'note',
            type: 'text',
          }
        ]
      } else {
        // 其他页面最后一列为备注
        colList.push({
          label: '备注',
          prop: 'note',
          width: '200',
          type: 'text',
        })
      }
      return colList
    }
  },
  created() {
    this.init()
  },
  methods: {
    init () {
      this.dataForm.tempValue = JSON.parse(JSON.stringify(this.value)) 
      if (this.options.canEdit) {
        // 如果value.tableData无数据则自动添加一条
        if (this.dataForm.tempValue.tableData.length === 0) {
          if (this.options.page === '46' || this.options.page === '47') {
            this.dataForm.tempValue.tableData.push({
              sindex: 1, // 序号
              name: null, // 名称
              modelNumber: null, // 规格型号
              manufacturer: null, // 生产厂家
              productDate: null,  // 出厂日期
              units: null, // 单位
              price: null, // 价格
              num: null, // 数量
              desc: null, // 处理决定
            })
          } else {
            this.dataForm.tempValue.tableData.push({
              sindex: 1, // 序号
              name: null, // 名称
              modelNumber: null, // 规格型号
              manufacturer: null, // 生产厂家
              productDate: null,  // 出厂日期
              units: null, // 单位
              price: null, // 价格
              num: null, // 数量
              note: null, // 备注
            })
          }
        }
      }
    },
    operation(scope, operate) {
      if (operate === 'add') {
        // 添加行操作
        let item = {}
        for(let key in this.dataForm.tempValue.tableData[0]) {
          item[key] = null
        }
        this.dataForm.tempValue.tableData.splice(scope.$index + 1, 0, JSON.parse(JSON.stringify(item)))
      } else if (operate === 'delete') {
        // 删除行操作
        this.dataForm.tempValue.tableData.splice(scope.$index, 1)
      }
      this.editIndex()
    },
    editIndex () {
      // 整理序号:重新赋值序号sindex的值
      this.dataForm.tempValue.tableData.forEach((item, index) => {
        item.sindex = index + 1
      })
    }
  },
};
</script>

<style lang="scss" scoped>
.sampling-main {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  .sampling-title {
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    text-align: center;
    color: #303133;
  }
  .sampling-table-main {
    flex: 1;
  }
  .sampling-foot-main {
    height: 100px;
    margin-top: 10px;
    color: #303133;
  }
}
</style>