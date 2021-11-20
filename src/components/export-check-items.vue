<!-- 导入检查项列表 -->
<template>
	<el-drawer
    title="导入检查项"
    :append-to-body="true"
    :visible="visible"
    direction="rtl"
    :before-close="close"
    :wrapperClosable="false"
    size="80%">
    <div v-loading="loading" class="export-check">
      <div class="export-check-select">
        <!-- 检查活动列表 -->
        <el-select 
          v-model="selectedCase" 
          placeholder="请选择检查活动"
          style="width: 500px;"
          @change="changeSelected">
          <el-option
            v-for="item in caseList"
            :key="item.paperId"
            :label="item.showTag"
            :value="item.paperId">
          </el-option>
        </el-select>
      </div>
      <div class="export-check-content">
        <!-- 检查活动已选检查项 -->
        <el-table
          ref="checkTable"
          :data="checkList"
          style="width: 100%;"
          height="100%"
          row-key="treeId"
          border
          :header-cell-style="{background: '#f5f7fa'}"
          @selection-change="handleSelectionChange">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            prop="categoryName"
            label="检查事项"
            header-align="center"
            align="left"
            width="100">
          </el-table-column>
          <el-table-column
            prop="itemContent"
            header-align="center"
            align="left"
            label="检查内容"
            width="300">
          </el-table-column>
          <el-table-column
            prop="method"
            header-align="center"
            align="left"
            label="检查主要资料及方法"
            width="180">
          </el-table-column>
          <el-table-column
            prop="positions"
            header-align="center"
            align="left"
            label="检查地点">
          </el-table-column>
          <el-table-column
            prop="personNames"
            header-align="center"
            align="left"
            label="检查人员">
          </el-table-column>
          <el-table-column
            prop="situation"
            header-align="center"
            align="left"
            label="调整情况">
          </el-table-column>
        </el-table>
      </div>
      <div class="export-check-operation">
        <el-button @click="close">取消</el-button>
        <el-button type="primary" @click="save">确定</el-button>
      </div>
    </div>
	</el-drawer>
</template>

<script>
  import GoDB from '@/utils/godb.min.js'
  export default {
    name: 'ExportCheckItems',
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
    data () {
      return {
        loading: false,
        DBName: this.$store.state.DBName,
        selectedCase: null, // 选择的检查活动
        caseList: [], // 检查活动列表
        checkList: [], // 选中的检查活动的检查项列表
        multiSelectedIndexs: [], // 选中的需要导入的检查项
      }
    },
    created() {
      this.getCheckList()
    },
    methods: {
      handleSelectionChange (val) {
        this.multiSelectedIndexs = val
      },  
      async getCheckList() {
        let db = new GoDB(this.DBName)
        let wkPaper = db.table('wkPaper')
        // 拉取做的检查活动
        let caseList = await wkPaper.findAll(item => item.paperType === '22' 
          && item.delFlag !== '1' && item.personId === this.$store.state.user.userId)
        if (caseList.length > 0) {
          caseList.map(item => {
            item.paperContent = JSON.parse(item.paperContent)
            item.showTag = `${item.corpName} ${item.createDate}`
          })
        }
        this.caseList = caseList
      },
      changeSelected (val) {
        // 切换选择的检查活动
        let selected = this.caseList.filter(item => item.paperId === val)
        this.checkList = selected[0].paperContent.CheckTable ? selected[0].paperContent.CheckTable.tableData : []
      },
      close () {
        this.$emit('close', 'exportCheck')
      },
      save () {
        if (this.multiSelectedIndexs.length > 0) {
          this.$emit('save', {data: this.multiSelectedIndexs})
        } else {
          this.$message.error('请选择需要导入的检查项！')
        }
      },
    }
  }
;
</script>

<style lang="scss" scoped>
.export-check {
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  .export-check-select {
    margin: 10px 0px;
  }
  .export-check-content {
    height: calc(100vh - 200px);
  }
  .export-check-operation {
    text-align: right;
    margin: 10px 0px;
  }
}
/deep/ .el-drawer__header {
  margin-bottom: 0px;
  padding: 20px;
  border-bottom: 1px solid #DCDFE6;
}
</style>