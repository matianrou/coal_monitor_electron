<!-- 填写组件 档案卷内目录 -->
<template>
  <div class="menu-main">
    <!-- 标题 -->
    <div class="menu-title">
      <span>{{ title }}</span>
    </div>
    <!-- 表格 -->
    <div class="menu-table-main">
      <el-table
        :data="dataForm.tempValue.tableData"
        ref="table"
        border
        stripe
        height="67vh"
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
  </div>
</template>

<script>
export default {
  name: "VolumesMenuTable",
  props: {
    value: {
      type: Object,
      default: () => {
        return {
          tableData: [],
        }
      }
    },
    options: {
      type: Object,
      default: () => {
        return {
          canEdit: false,
          page: '' // 当前使用此组件页面
        }
      }
    }
  },
  data() {
    return {
      dataForm: {
        tempValue: {
          tableData: [],
        }
      },
    };
  },
  computed: {
    title() {
      let title = ''
      if (this.options.page === '15') {
        title = '档案卷内目录'
      }
      return title
    },
    colList () {
      let colList = [
        {
          label: '文号',
          prop: 'paperNumber',
          type: 'text',
        },
        {
          label: '题名',
          prop: 'title',
          type: 'text',
        },
        {
          label: '日期',
          prop: 'date',
          width: '190',
          type: 'date',
        },
        {
          label: '页号',
          prop: 'pageNumber',
          width: '100',
          type: 'text',
        },
        {
          label: '备注',
          prop: 'note',
          type: 'text',
        }
      ]
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
          this.dataForm.tempValue.tableData.push({
            sindex: 1, // 序号
            paperNumber: null, // 文号
            title: null, // 题名
            date: null, // 日期
            pageNumber: null, // 页号
            note: null,  // 备注
          })
        }
      }
    },
    operation(scope, operate) {
      if (operate === 'add') {
        // 添加行操作
        let item = {
          sindex: scope.$index + 2,
          paperNumber: '',
          title: '',
          date: '',
          pageNumber: scope.$index + 2,
          note: '',
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
.menu-main {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  .menu-title {
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    text-align: center;
    color: #303133;
  }
  .menu-table-main {
    flex: 1;
  }
}
</style>