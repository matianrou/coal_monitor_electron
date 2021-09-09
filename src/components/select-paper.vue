<!-- 弹窗选择文书 -->
<template>
  <el-dialog
    :title="title ? title : '选择文书'"
    :close-on-click-modal="false"
    append-to-body
    :visible="visible"
    width="600px"
    @close="close"
  >
    <div>
      <el-table
        :data="paperList"
        style="width: 100%;"
        border
        stripe
        :default-sort = "{prop: 'createDate', order: 'descending'}"
        highlight-current-row
        :header-cell-style="{background: '#f5f7fa'}"
        @current-change="handleCurrentChange">
        <el-table-column
          type="index"
          width="80"
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
    colList: {
      type: Array,
      default: () => [
        {
          label: '文书类型',
          prop: 'name',
        },
        {
          label: '制作人',
          prop: 'personName',
        },
        {
          label: '制作日期',
          prop: 'createDate',
          align: 'left',
          width: '180'
        },
      ]
    },
    paperList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      currentRow: {}, // 选中的文书
    };
  },
  created() {
  },
  methods: {
    close(refresh) {
      this.$emit("close", { page: "selectPaper", refresh });
    },
    confirm() {
      // 关闭弹窗，并赋值
      this.$emit("confirm-paper", this.currentRow);
    },
    handleCurrentChange(val) {
      this.currentRow = val;
    },
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