<!-- 隐患描述 输入 -->
<template>
  <div style="width: 100%;">
    <el-input
      v-model="dataForm.tempValue"
      type="textarea"
      :placeholder="placeholder"
      :rows="10"
      :disabled="options.disabled"
      @change="changeValue">
    </el-input>
    <div class="danger-info-main">
      <div class="danger-info-title">
        <div>
          <span>发现隐患及处理情况</span>
        </div>
        <div style="text-align: right; flex: 1;">
          <el-button
            type="primary"
            size="mini"
            @click="showDangerEdit"
          >编辑</el-button>
        </div>
      </div>
      <div class="danger-info-content">
        <span>已选隐患{{dangerInfo.selectedCount}}项，其中重大隐患{{dangerInfo.seriousCount}}项</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DangerTextareaItem",
  props: {
    value: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: ''
    },
    options: {
      type: Object,
      default: () => {
        return {
          disabled: false
        }
      }
    },
    letData: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      dataForm: {
        tempValue: null
      }
    };
  },
  computed: {
    dangerInfo () {
      let dangerInfo = {
        selectedCount: 0, // 已选隐患数
        seriousCount: 0 // 重大隐患数
      }
      if (this.letData && this.letData.DangerTable && this.letData.DangerTable.selectedDangerList) {
        dangerInfo.selectedCount = this.letData.DangerTable.selectedDangerList.length
        let count = 0
        for (let i = 0; i < this.letData.DangerTable.selectedDangerList.length; i++) {
          let item = this.letData.DangerTable.selectedDangerList[i]
          if (item.isSerious === '1') {
            count ++ 
          }
        }
        dangerInfo.seriousCount = count
      }
      return dangerInfo
    }
  },
  created() {
    this.dataForm.tempValue = this.value
  },
  watch: {
    value(val) {
      this.dataForm.tempValue = val || ''
    }
  },
  methods: {
    changeValue(val) {
      this.$parent.handleSave(true)
    },
    showDangerEdit () {
      // 返回使用隐患项组件进行编辑
      this.$parent.showDangerEdit()
    }
  },
};
</script>

<style lang="scss" scoped>
.danger-info-main {
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(64, 158, 255);
  border-radius: 8px;
  margin-top: 5px;
  padding: 0;
  .danger-info-title {
    font-size: 16px;
    background: rgb(203, 230, 255);
    color: rgb(64, 158, 255);
    padding: 3px 3px;
    display: flex;
    align-items: center;
  }
  .danger-info-content {
    font-size: 14px;
    color: #909399;
    padding: 5px 3px;
  }
}
</style>