<!-- 弹窗选择人员 -->
<template>
  <el-dialog
    :title="title ? title : '选择人员'"
    :close-on-click-modal="false"
    append-to-body
    :visible="visible"
    width="600px"
    top="10vh"
    @close="close">
    <div v-loading="loading">
      <el-table
        :data="personList"
        stripe
        border
        style="width: 100%; height: 100%;"
        :header-cell-style="{background: '#f5f7fa'}"
        highlight-current-row
        @current-change="handleCurrentChange">
        <el-table-column
          type="index"
          width="50">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop="officeName"
          label="所属机构"
          header-align="center"
          align="center">
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
import GoDB from "@/utils/godb.min.js";
  export default {
    name: 'selectPersonDialog',
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      title: { // 弹窗标题
        type: String,
        default: null
      }
    },
    data () {
      return {
        loading: false,
        DBName: this.$store.state.DBName,
        personList: [], // 人员列表
        currentRow: {}
      }
    },
    async created () {
      await this.init()
    },
    methods: {
      async init () {
        // 初始化选择列表
        this.loading = true
        const db = new GoDB(this.DBName);
        const person = db.table('person')
        this.personList = await person.findAll(item => item)
        // let curPerson = await person.find(item => item.no === this.$store.state.user.userId)
        // console.log('curPerson', curPerson)
        await db.close()
        this.loading = false
      },
      close (refresh) {
        this.$emit('close', {page: 'selectPerson', refresh})
      },
      confirm () {
        // 关闭弹窗，并赋值
        // 将临时保存数据结果赋值到数据中
        this.$emit('confirm-person', this.currentRow)
        this.close()
      },
      setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row);
      },
      handleCurrentChange(val) {
        this.currentRow = val;
      }
    }
  }
</script>

<style lang="scss" scoped>
/deep/ .current-row {
  td {
    background: rgb(83, 168, 255) !important;
    color: #fff;
  }
}
</style>