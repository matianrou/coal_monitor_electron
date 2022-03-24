<!-- 弹窗选择文书 -->
<template>
  <el-dialog
    :title="title"
    :close-on-click-modal="false"
    :show-close="false"
    append-to-body
    :visible="visible"
    top="5vh"
    width="90%"
  >
    <div style="height: 70vh;">
      <el-table
        :data="dangerList"
        style="width: 100%;"
        border
        stripe
        :default-sort="{prop: 'createDate', order: 'descending'}"
        highlight-current-row
        :header-cell-style="{background: '#f5f7fa'}"
        height="100%"
      >
        <el-table-column
          type="index"
          width="40"
          header-align="center"
          align="center"
        >
        </el-table-column>
        <el-table-column
          v-for="(item, index) in colList"
          :key="index"
          :label="item.label ? item.label: ''"
          :header-align="item.headerAlign ? item.headerAlign : 'center'"
          :align="item.align ? item.align : 'center'"
          :width="item.width ? item.width : ''"
          :min-width="item.minWidth ? item.minWidth : ''"
        >
          <template slot-scope="scope">
            <span>{{ scope.row[item.prop] }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <span
      slot="footer"
      class="dialog-footer"
    >
      <el-button
        type="primary"
        @click="exportExcel"
      >导出</el-button>
      <el-button @click="close">返回</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: "ShowDangerItems",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    title: {
      // 弹窗标题
      type: String,
      default: '隐患项明细查看',
    },
    corpData: {
      type: Object,
      default: () => { }
    },
    colList: {
      type: Array,
      default: () => [
        {
          label: '隐患等级',
          prop: 'isSeriousValue',
          width: '80'
        },
        {
          label: '隐患发现人',
          prop: 'personNames',
          width: '100'
        },
        {
          label: '隐患发现时间',
          prop: 'detectTime',
          width: '170'
        },
        {
          label: '隐患描述',
          align: 'left',
          prop: 'itemContent',
          minWidth: '200'
        },
        {
          label: '违法认定法条',
          prop: 'confirmBasis',
          minWidth: '200'
        },
        {
          label: '现场处理措施',
          prop: 'onsiteDesc',
          minWidth: '200'
        },
        {
          label: '现场处理依据',
          prop: 'onsiteBasis',
          minWidth: '250'
        },
        {
          label: '行政处罚决定',
          prop: 'penaltyDesc',
          minWidth: '250'
        },
        {
          label: '行政处罚依据',
          prop: 'penaltyBasis',
          minWidth: '200'
        },
        {
          label: '企业罚款（万）',
          prop: 'orgPenalty',
          width: '120'
        },
        {
          label: '个人罚款（万）',
          prop: 'personPenalty',
          width: '120'
        },
        {
          label: '是否隐患复查',
          prop: 'isReviewValue',
          width: '120'
        },
        {
          label: '隐患复查日期',
          prop: 'reviewDate',
          width: '170'
        },
      ]
    },
    dangerList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
    };
  },
  created() {
  },
  methods: {
    // 导出EXCEL
    exportExcel() {
      import('@/vendor/Export2Excel').then(excel => {
        // 表头
        const tHeader = ['序号'].concat(this.colList.map(h => h.label))
        // 表头对应字段名
        const tColumnVal = ['order'].concat(this.colList.map(c => c.prop))
        const list = this.dangerList;// 数据来源
        const data = this.formatJson(tColumnVal, list);// 数据格式化
        const fileName = this.corpData.corpName || '隐患项明细表';// 导出时文件名
        excel.export_json_to_excel(tHeader, data, fileName);// 导出文件
      })
    },
    // 对导出数据格式化处理
    formatJson(columnList, jsonData) {
      return jsonData.map(v => columnList.map(j => {
        if (j === 'order') v[j]++;
        return v[j];
      }))
    },
    close(refresh) {
      this.$emit("close", { page: "showDangerItems" });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>