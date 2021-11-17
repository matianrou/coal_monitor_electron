<!-- 弹窗检查项修改组件 -->
<!-- 当前用来修改的子组件中： -->
<!-- checkPostionItem、SelectInputItem用的value为${key}Type${type} -->
<!-- CheckTable: CheckTable -->
<!-- DangerTable: DangerTable -->
<!-- SamplingForensicsTable: SamplingForensicsTable -->
<!-- VolumesMenuTable: VolumesMenuTable -->
<!-- UploadFile: UploadFile -->
<!-- 其他组件均用自身key为value值 -->

<template>
  <div>
    <el-drawer
      v-if="showDrawer"
      :title="selectedData.title"
      :visible.sync="visible"
      direction="rtl"
      :before-close="handleClose"
      :wrapperClosable="false"
      :size="selectedData.type === 'CheckTable' || selectedData.type === 'DangerTable' 
        || selectedData.type === 'SamplingForensicsTable' 
        || selectedData.type === 'VolumesMenuTable' 
        || selectedData.type === 'UploadFile'
        ? '80%' : '400px'">
      <div class="let-drawer-main">
        <div class="let-drawer-component">
          <component
            :is="selectedData.type"
            :ref="selectedData.type"
            :value="selectedData.value"
            :options="selectedData.options"
            :corp-data="selectedData.corpData"
          ></component>
        </div>
        <div class="let-drawer-operation">
          <el-button @click="handleClose">返回</el-button>
          <el-button type="primary" @click="handleSave(false)">确定</el-button>
        </div>
      </div>
    </el-drawer>
    <div class="let-drawer-direct">
      <div class="let-drawer-direct-title">
        <span>编辑区域</span>
      </div>
      <div style="font-size: 18px; margin-bottom: 10px;">
        <span>{{selectedData.title}}</span>
      </div>
      <component
        v-if="visible"
        :is="selectedData.type"
        :ref="selectedData.type"
        :value="selectedData.value"
        :options="selectedData.options"
        :corp-data="selectedData.corpData"
      ></component>
    </div>
  </div>
</template>

<script>
export default {
  name: "LetDrawer",
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    selectedData: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    TextItem: resolve => { require(["./fill-template/text-item"], function(TextItem) { resolve(TextItem);});},
    CheckItem: resolve => { require(["./fill-template/check-item"], function(CheckItem) { resolve(CheckItem);});},
    DaterangeItem: resolve => { require(["./fill-template/daterange-item"], function(DaterangeItem) { resolve(DaterangeItem);});},
    TextareaItem: resolve => { require(["./fill-template/textarea-item"], function(TextareaItem) { resolve(TextareaItem);});},
    DateItem: resolve => { require(["./fill-template/date-item"], function(DateItem) { resolve(DateItem);});},
    CheckPositionItem: resolve => { require(["./fill-template/check-position-item"], function(CheckPositionItem) { resolve(CheckPositionItem);});},
    CheckTable: resolve => { require(["./fill-template/check-table"], function(CheckTable) { resolve(CheckTable);});},
    DangerTable: resolve => { require(["./fill-template/danger-table"], function(DangerTable) { resolve(DangerTable);});},
    DatetimeItem: resolve => { require(["./fill-template/datetime-item"], function(DatetimeItem) { resolve(DatetimeItem);});},
    SelectItem: resolve => { require(["./fill-template/select-item"], function(SelectItem) { resolve(SelectItem);});},
    SelectInputItem: resolve => { require(["./fill-template/select-input-item"], function(SelectInputItem) { resolve(SelectInputItem);});},
    SamplingForensicsTable: resolve => { require(["./fill-template/sampling-forensics-table"], function(SamplingForensicsTable) { resolve(SamplingForensicsTable);});},
    VolumesMenuTable: resolve => { require(["./fill-template/volumes-menu-table"], function(VolumesMenuTable) { resolve(VolumesMenuTable);});},
    UploadFile: resolve => { require(["./fill-template/upload-file"], function(UploadFile) { resolve(UploadFile);});},
  },
  data() {
    return {
    };
  },
  computed: {
    showDrawer() {
      let show = false
      let type = this.selectedData.type
      if (type === 'CheckTable' 
      || type === 'DangerTable' 
      || type === 'SamplingForensicsTable' 
      || type === 'VolumesMenuTable' 
      || type === 'UploadFile'
      || type === 'CheckItem'
      || type === 'CheckPositionItem') {
        // 修改子组件为检查项CheckTable、隐患项DangerTable、抽样调查SamplingForensicsTable、卷宗管理VolumesMenuTable或文件上传UploadFile时，弹窗
        // 多选框CheckItem、检查地点CheckPositionItem
        show = true
      }
      return show
    }
  },
  created() {
  },
  methods: {
    handleClose () {
      // 关闭编辑
      this.$emit('handle-close')
    },
    handleSave (direct = false) {
      // *direct是否直接保存，不关闭（主要处理普通文本框直接在编辑区域修改）
      // 保存数据
      // this.$refs[this.selectedData.type].$refs.dataForm.validate(validate => {
        // if (validate) {
          console.log('direct', direct)
          this.$emit('handle-save', {value: this.$refs[this.selectedData.type].dataForm.tempValue, direct})
        // }
      // })
    }
  },
};
</script>

<style lang="scss" scoped>
/deep/ .el-drawer__header {
  margin: 0px;
}
/deep/ .el-drawer__body {
  overflow: hidden;
}
.let-drawer-main {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  .let-drawer-component {
    flex: 1;
    overflow: auto;
  }
  .let-drawer-operation {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}
.let-drawer-direct {
  margin-top: 10px;
  padding: 10px;
  border-top: 1px solid #DCDFE6;
  .let-drawer-direct-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }
}
</style>