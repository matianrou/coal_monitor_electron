<!-- 弹窗选择文书 -->
<template>
  <el-dialog
    :title="title ? title : '选择文书'"
    :close-on-click-modal="false"
    :show-close="false"
    append-to-body
    :visible="visible"
    top="5vh"
    width="650px"
  >
    <div style="height: 70vh;">
      <el-table
        :data="paperList"
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