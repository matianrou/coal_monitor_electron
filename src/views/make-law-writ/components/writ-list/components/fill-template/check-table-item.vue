<!-- 填写组件 检查分工明细表 -->
<template>
  <div style="width: 100%;">
    <div>
      <el-button type="primary" @click="showCheckDialog">选择检查内容</el-button>
    </div>
    <div>
      <div class="title">
        <span>已选检查内容：</span>
      </div>
      <el-tree
        :data="dataForm.tempValue"
        :props="checkListTreeProps"
        node-key="treeId"
        ref="checkListTree"
        show-checkbox
        default-expand-all
        @check="checkFunctionAuthorization">
        <span class="span-node-main" slot-scope="{node, data}">
          <span class="span-ellipsis" :title="node.label">{{ node.label }}</span>
          <span v-if="data.itemCode">
            <el-button
              type="text"
              @click="() => handleEdit(data)">
              编辑
            </el-button>
            <!-- <el-button
              type="text"
              size="mini"
              @click="() => remove(node, data)">
              Delete
            </el-button> -->
          </span>
        </span>
      </el-tree>
    </div>
    <select-check-content
      :visible="visible.checkSelect"
      :corp-data="corpData"
      @save="handleSave"
      @close="handleClose"
    ></select-check-content>
    <el-dialog
      title="编辑检查内容"
      :close-on-click-modal="false"
      append-to-body
      :visible="visible.editCheckContent"
      :close-on-press-escape="false"
      width="500px"
      @close="handleClose('editCheckContent')">
      <div>
        <textarea-item
          ref="textareaItem"
          :value="dataForm.checkContent"
        ></textarea-item>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose('editCheckContent')">取消</el-button>
        <el-button type="primary" @click="saveEdit">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import selectCheckContent from '@/views/make-law-writ/components/writ-list/components/select-check-content'
import textareaItem from '@/views/make-law-writ/components/writ-list/components/fill-template/textarea-item'
export default {
  name: "CheckTableItem",
  components: {
    selectCheckContent,
    textareaItem
  },
  props: {
    value: {
      type: Array,
      default: () => []
    },
    corpData: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      dataForm: {
        tempValue: []
      },
      visible: {
        checkSelect: false,
        editCheckContent: false
      },
      checkListTreeProps: {
        label: 'treeName',
        children: 'children',
      },
      dataForm: {
        checkContent: null
      },
      editContent: {}, // 需要修改的检查项
    };
  },
  created() {
    this.dataForm.tempValue = this.value
  },
  methods: {
    showCheckDialog () {
      // 展示选择检查内容弹窗
      this.visible.checkSelect = true
    },
    handleClose (key) {
      this.visible[key] = false
    },
    handleSave (params) {
      // 保存选择的检查项
      this.dataForm.tempValue = params.data
    },
    saveEdit () {
      // 保存编辑检查内容
      this.dataForm.checkContent = this.$refs.textareaItem.dataForm.tempValue
      Object.assign(this.editContent, {
        treeName: this.dataForm.checkContent
      })
      this.visible.editCheckContent = false
    },
    handleEdit (data) {
      // 编辑 展示编辑弹窗
      this.visible.editCheckContent = true
      this.dataForm.checkContent = data.treeName
      this.editContent = data
    },
    checkFunctionAuthorization (objectItem, selectedObjectItem) {
      // 选择权限同时增加至已选择权限列表中
      let selectedList = [
        ...selectedObjectItem.checkedKeys,
        ...selectedObjectItem.halfCheckedKeys
      ]
      console.log('objectItem', objectItem)
      console.log('selectedObjectItem', selectedObjectItem)
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  margin-top: 20px;
  height: 30px;
  background: #4F83E9;
  color: #fff;
  padding: 2px 10px;
  display: flex;
  align-items: center;
}
.span-node-main {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  width: 100%;
  overflow: hidden;
  .span-ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-right: 10px;
  }
}
</style>