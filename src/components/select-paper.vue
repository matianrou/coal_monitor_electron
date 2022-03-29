<!-- 弹窗选择文书 -->
<template>
  <el-dialog
    :close-on-click-modal="false"
    :show-close="false"
    append-to-body
    :visible="visible"
    top="5vh"
    :width="dialogWidth"
  >
    <div slot="title" class="dialog-title">
      <span v-if="title">{{title}}</span>
      <span v-else>请选择：<span style="color: #4f83e9;">{{paperName}}</span></span>
    </div>
    <div style="height: 70vh;">
      <el-table
        :data="showList"
        style="width: 100%;"
        border
        stripe
        :default-sort = "{prop: 'createTime', order: 'descending'}"
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
      <el-button @click="close">返回</el-button>
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
    },
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
          align: 'center',
          prop: 'personName',
        },
        {
          label: '制作日期',
          prop: 'createTime',
          align: 'center',
          width: '180'
        },
      ]
      let paperName = ''
      let dialogWidth = 385
      if (this.paperList && this.paperList.length > 0) {
        // 特殊处理:检查方案
        let paperType = this.paperList[0].paperType
        if (paperType === '22' || paperType === '42') {
          for (let i = 0; i < this.paperList.length; i++) {
            let item = this.paperList[i]
            let paperContent = JSON.parse(item.paperContent)
            item.checkTime = paperContent.cellIdx2
          }
          colList.splice(0, 0, {
            label: '检查时间',
            prop: 'checkTime',
            align: 'center',
          })
          dialogWidth += 200
        }
        let userType = this.$store.state.user.userType
        // 特殊处理：有隐患项的文书展示隐患描述
        if (paperType === '1' || paperType === '2' || paperType === '13' || paperType === '44'
          || paperType === '4' || paperType === '5' || paperType === '6' || paperType === '19'
          || paperType === '36' || paperType === '8' || paperType === '14' || paperType === '15'
          || paperType === '31' || paperType === '20' || paperType === '18'|| paperType === '30'
          || (userType !== 'supervision' && (paperType === '49' || paperType === '54' || paperType === '55'))
          || (userType === 'supervision' && (paperType === '47' || paperType === '55' || paperType === '54'))) {
          for (let i = 0; i < this.paperList.length; i++) {
            let item = this.paperList[i]
            if (JSON.parse(item.paperContent) && JSON.parse(item.paperContent).DangerTable && JSON.parse(item.paperContent).DangerTable.selectedDangerList) {
              item.dangerContent = await getDangerContentWithoutPointHasIndex(JSON.parse(item.paperContent).DangerTable.selectedDangerList, '；')
            }
          }
          colList.splice(colList.length - 2, 0, {
            label: '隐患信息',
            prop: 'dangerContent',
            align: 'left',
          })
          dialogWidth += 400
        }
        // 特殊处理:有文书号的展示文书号
        let hasPaper = hasPaperNumber(paperType)
        if (hasPaper) {
          for (let i = 0; i < this.paperList.length; i++) {
            let item = this.paperList[i]
            item.paperNumber = await getCurPaperDocNumber(item)
          }
          colList.splice(0, 0, {
            label: '文书号',
            width: '260',
            prop: 'paperNumber',
          })
          dialogWidth += 260
        }
        // 特殊处理:有区分类型的
        if (paperType === '32' || paperType === '37' || paperType === '38' || paperType === '6'
          || paperType === '8' || paperType === '9'
          || (userType !== 'supervision' && (paperType === '46' || paperType === '47' || paperType === '48' || paperType === '49' 
          || paperType === '53' || paperType === '51' || paperType === '52' || paperType === '54'
          || paperType === '55')) || (userType === 'supervision' && (paperType === '45' || paperType === '46' || paperType === '56' || paperType === '47' 
          || paperType === '52' || paperType === '50' || paperType === '51' || paperType === '53'
          || paperType === '54'))) {
          for (let i = 0; i < this.paperList.length; i++) {
            let item = this.paperList[i]
            item.selectedType = JSON.parse(item.paperContent).selectedType
          }
          colList.splice(0, 0, {
            label: '类别',
            width: '80',
            prop: 'selectedType'
          })
          dialogWidth += 80
        }
        paperName = this.paperList[0].name
      }
      this.showList = this.paperList
      this.colList = colList
      this.paperName = paperName
      this.dialogWidth = dialogWidth + 'px'
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
.dialog-title {
  font-size: 18px;
  color: #606266;
}
</style>