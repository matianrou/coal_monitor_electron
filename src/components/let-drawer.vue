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
    <el-dialog
      v-if="showDrawer"
      :title="selectedData.title"
      :visible.sync="visible"
      :before-close="handleClose"
      :close-on-click-modal="false"
      :show-close="false"
      append-to-body
      top="4vh"
      :width="drawerSize.width">
      <div class="let-drawer-main">
        <div class="let-drawer-component">
          <component
            v-if="visible"
            :is="selectedData.type"
            :ref="selectedData.type"
            :value="selectedData.value"
            :options="selectedData.options"
            :corp-data="selectedData.corpData"
            :paper-data="paperData"
          ></component>
        </div>
        <div slot="footer" class="let-drawer-operation">
          <el-button @click="handleClose">返回</el-button>
          <el-button type="primary" @click="handleSave(false)">保存</el-button>
        </div>
      </div>
    </el-dialog>
    <div v-else class="let-drawer-direct">
      <div class="let-drawer-direct-title">
        <span>编辑区域</span>
      </div>
      <div class="let-drawer-direct-main">
        <div class="let-drawer-direct-main-title">
          <span>{{selectedData.title}}</span>
        </div>
        <component
          v-if="visible"
          :is="selectedData.type"
          :ref="selectedData.type"
          :value="selectedData.value"
          :options="selectedData.options"
          :corp-data="selectedData.corpData"
          :paper-data="paperData"
          :let-data="letData"
        ></component>
      </div>
    </div>
  </div>
</template>

<script>
import { comparDangerTable } from '@/utils/setInitPaperData'
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
    paperData: {
      type: Object,
      default: () => {}
    },
    docData: {
      type: Object,
      default: () => {}
    },
    letData: {
      type: Object,
      default: () => {}
    }
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
    SelectPersonItem: resolve => { require(["./fill-template/select-person-item"], function(SelectPersonItem) { resolve(SelectPersonItem);});},
    DangerTextareaItem: resolve => { require(["./fill-template/danger-textarea-item"], function(DangerTextareaItem) { resolve(DangerTextareaItem);});},
  },
  data() {
    return {
    };
  },
  computed: {
    // showDrawer() {
    // 22.2.10修改为所有均弹窗，所以注释掉此处，以防再变化故保留此段代码
    //   let show = false
    //   let type = this.selectedData.type
    //   if (type === 'CheckTable' 
    //   || type === 'DangerTable' 
    //   || type === 'SamplingForensicsTable' 
    //   || type === 'VolumesMenuTable' 
    //   || type === 'UploadFile'
    //   || type === 'CheckItem'
    //   || type === 'CheckPositionItem') {
    //     // 修改子组件为检查项CheckTable、隐患项DangerTable、抽样调查SamplingForensicsTable、卷宗管理VolumesMenuTable或文件上传UploadFile时，弹窗
    //     // 多选框CheckItem、检查地点CheckPositionItem
    //     show = true
    //   }
    //   return show
    // },
    showDrawer() {
      let show = true
      let type = this.selectedData.type
      if (type === 'DangerTextareaItem') {
        // 修改所有内容均弹窗，除隐患单击修改时
        show = false
      }
      return show
    },
    drawerSize () {
      let size = {
        width: '800px',
      }
      let type = this.selectedData.type
      if (type=== 'CheckTable' || type === 'SamplingForensicsTable' 
        || type === 'VolumesMenuTable' || type === 'UploadFile') {
        size = {
          width: '1200px',
        } 
      } else if (type === 'DangerTable') {
        size = {
          width: '1300px',
        } 
      }
      return size
    }
  },
  created() {
  },
  methods: {
    async handleClose () {
      // 关闭编辑
      // 如果是隐患项编辑保存时增加校验是否有修改，如果有修改则提示是否确认返回
      if (this.selectedData.type === 'DangerTable') {
        let tempValue = this.$refs[this.selectedData.type].dataForm.tempValue
        let originalValue = this.$refs[this.selectedData.type].originalValue
        let isSame = comparDangerTable(originalValue, tempValue)
        if (isSame) {
          // 如果数据相同则表示未修改任何数据，直接执行返回
          this.$emit('handle-close')
        } else {
          // 如果有修改
          this.$confirm('当前有已修改的隐患项，是否确定不保存修改直接返回？', '提示', {
              confirmButtonText: '取消',
              cancelButtonText: '确定',
              dangerouslyUseHTMLString: true,
              type: 'warning'
            }).then(() => {
            }).catch(() => {
              this.$emit('handle-close')
            })
        }
      } else {
        this.$emit('handle-close')
      }
    },
    async handleSave (direct = false, dangerContentMerge = false) {
      // *direct是否直接保存，不关闭（主要处理普通文本框直接在编辑区域修改）
      // *dangerContentMerge为隐患项是否隐患合并，如果为true则需要隐患合并，默认为false
      // 保存数据
      if (this.selectedData.type === 'DangerTable' && this.$refs[this.selectedData.type].$refs.dataForm) {
        this.$refs[this.selectedData.type].$refs.dataForm.validate(async validate => { 
          if (validate) {
            // 如果是隐患项保存的话则获取当前选中隐患项进行数据总结提取
            let value = this.$refs[this.selectedData.type].dataForm.tempValue
            let isSave = true
            let indexString = ''
            if (value.selectedDangerList && value.selectedDangerList.length > 0) {
              value.selectedDangerList.map((item, index) => {
                // 校验违法违规行为，行政处罚决定，更改从属类型必填
                if (!item.itemContent || !item.onsiteType || !item.changeDangerType) {
                  isSave = false
                  indexString += (index + 1) + ','
                }
              })
            }
            if (indexString.length > 0 ) indexString = indexString.substring(0, indexString.length -1)
            if (isSave) {
              // 隐患项点击保存时
              // 置隐患合并标记为false
              this.$refs[this.selectedData.type].dataForm.tempValue.dangerContentMerge = dangerContentMerge
              if (this.docData.docTypeNo === '1') {
                // 现场检查记录时增加保存逻辑：如果所有隐患项均未勾选隐患复查和重大隐患项，则提示：
                // 是否有复查
                let hasReview = false
                let hasSerious = false
                for (let i = 0; i < value.tableData.length; i++) {
                  if (value.tableData[i].isReview === '1') {
                    hasReview = true
                  }
                  if (value.tableData[i].isSerious === '1') {
                    hasSerious = true
                  }
                }
                if (!hasReview || !hasSerious) {
                  let msg  = `<div">
                    ${!hasReview ? '<p>您当前所有隐患均未选“隐患复查”，是否真的不复查？</p>' : ''}
                    ${!hasSerious ? '<p>您当前所有隐患均未选“重大隐患”，是否真的无重大隐患？</p>' : ''}
                    <p style="color: #F56C6C;">点击“是”继续保存，点击“否”返回继续编辑</p>
                  </div>`
                  await this.$confirm(msg, '提示', {
                      confirmButtonText: '是',
                      cancelButtonText: '否',
                      dangerouslyUseHTMLString: true,
                      type: 'warning',
                      showClose: false,
                      closeOnClickModal: false,
                      customClass: 'reviewSeriousMessageBox'
                    }).then(() => {
                      this.$emit('handle-save', {value: this.$refs[this.selectedData.type].dataForm.tempValue, direct})
                    }).catch(() => {
                    })
                } else {
                  this.$emit('handle-save', {value: this.$refs[this.selectedData.type].dataForm.tempValue, direct})
                }
              } else {
                this.$emit('handle-save', {value: this.$refs[this.selectedData.type].dataForm.tempValue, direct})
              }
            } else {
              this.$message.error(`选中的隐患项第${indexString}条中有必填的项目未填写，如：违法行为描述,现场处理决定或更改从属隐患类别`)
            }
          }
        })
      } else {
        this.$emit('handle-save', {value: this.$refs[this.selectedData.type].dataForm.tempValue, direct})
      }
    },
    showDangerEdit () {
      let {key, title} = this.selectedData
      this.$parent.$parent.commandFill(key, title, 'DangerTable')
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
  // height: 80vh;
  overflow: auto;
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
    margin-bottom: 5px;
  }
  .let-drawer-direct-main {
    display: flex;
    flex-direction: column;
    .let-drawer-direct-main-title {
      font-size: 16px;
      padding: 3px 3px;
    }
  }
}
</style>
<style>
.reviewSeriousMessageBox {
  width: 460px;
}
</style>