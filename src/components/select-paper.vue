<!-- 弹窗选择文书 -->
<template>
  <el-dialog
    :title="title ? title : `请选择：${paperName}`"
    :close-on-click-modal="false"
    :show-close="false"
    append-to-body
    :visible="visible"
    top="5vh"
    :width="dialogWidth"
  >
    <div style="height: 70vh;">
      <el-table
        :data="showList"
        style="width: 100%;"
        border
        stripe
        :default-sort = "{prop: 'createDate', order: 'descending'}"
        :highlight-current-row="!multiSelect"
        :header-cell-style="{background: '#f5f7fa'}"
        height="100%"
        @current-change="handleCurrentChange"
        @selection-change="handleSelectionChange">
        <el-table-column
          v-if="multiSelect"
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          type="index"
          width="60"
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          v-for="(item, index) in colList"
          :key="index"
          :label="item.label ? item.label: ''"
          :header-align="item.headerAlign ? item.headerAlign : 'center'"
          :align="item.align ? item.align : 'center'"
          :width="item.width ? item.width : ''">
          <template slot-scope="scope">
            <span>{{ scope.row[item.prop] }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="close">取消</el-button>
      <el-button type="primary" @click="confirm">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { getCurPaperDocNumber, getDangerContentWithoutPointHasIndex, hasPaperNumber } from  '@/utils/setInitPaperData'
export default {
  name: "SelectPaperDialog",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    title: {
      // 弹窗标题
      type: String,
      default: null,
    },
    paperList: {
      type: Array,
      default: () => []
    },
    multiSelect: {
      // 多选，当前送达收执需多选文书
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentRow: {}, // 单选： 选中的文书
      currentRows: [], // 多选： 选中的文书
      showList: [], // 展示的表格数据
      colList: [], // 展示的表格列
      paperName: '', // 文书名称
      dialogWidth: '', // 对话框宽度
    };
  },
  created() {
    this.initData()
  },
  watch: {
    paperList(val) {
      this.initData()
    }
  },
  methods: {
    async initData () {
      // 获取paperList数据和colList数据
      let colList = [
        {
          label: '制作人',
          width: '100',
          prop: 'personName',
        },
        {
          label: '制作日期',
          prop: 'createDate',
          align: 'left',
          width: '180'
        },
      ]
      let paperName = ''
      let dialogWidth = '400px'
      if (this.paperList && this.paperList.length > 0) {
        // 特殊处理:有文书号的展示文书号
        let hasPaper = hasPaperNumber(this.paperList[0].paperType)
        if (hasPaper) {
          for (let i = 0; i < this.paperList.length; i++) {
            let item = this.paperList[i]
            item.paperNumber = await getCurPaperDocNumber(item)
            item.dangerContent = await getDangerContentWithoutPointHasIndex(JSON.parse(item.paperContent).DangerTable.selectedDangerList, '；')
          }
          colList.splice(0, 0, {
            label: '文书号',
            width: '230',
            prop: 'paperNumber',
          },{
            label: '隐患信息',
            prop: 'dangerContent',
            align: 'left',
          })
          dialogWidth = '1000px'
        }
        // 特殊处理:有区分类型的
        let paperType = this.paperList[0].paperType
        if (paperType === '32' || paperType === '46' || paperType === '46' || paperType === '47' 
          || paperType === '48' || paperType === '37' || paperType === '38' || paperType === '6'
          || paperType === '49' || paperType === '36' || paperType === '8' || paperType === '9'
          || paperType === '53') {
          for (let i = 0; i < this.paperList.length; i++) {
            let item = this.paperList[i]
            item.selectedType = JSON.parse(item.paperContent).selectedType
          }
          colList.splice(0, 0, {
            label: '类别',
            width: '80',
            prop: 'selectedType'
          })
          dialogWidth = hasPaper ? '1200px' : '650px'
        }
        paperName = this.paperList[0].name
      }
      this.showList = this.paperList
      this.colList = colList
      this.paperName = paperName
      this.dialogWidth = dialogWidth
    },
    close(refresh) {
      this.$emit("close", { page: "selectPaper", refresh });
    },
    confirm() {
      // 关闭弹窗，并赋值
      if (this.multiSelect) {
        // 多选时回传多选值
        this.$emit("confirm-paper", this.currentRows);
      } else {
        // 单选时回传单选值
        this.$emit("confirm-paper", this.currentRow);
      }
    },
    handleCurrentChange(val) {
      this.currentRow = val;
    },
    handleSelectionChange(val) {
      this.currentRows = val
    }
  },
};
</script>

<style lang="scss" scoped>
/deep/ .current-row {
  td {
    background: rgb(83, 168, 255) !important;
    color: #fff;
  }
}
</style>