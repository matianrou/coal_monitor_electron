<!-- 选择 风险研判 树状组件 -->
<template>
	<el-dialog
    title="选择重大安全风险研判"
    :close-on-click-modal="false"
    append-to-body
    :visible="visible"
    width="600px"
    @close="close">
    <div v-loading="loading" class="select-risk">
      <!-- <div class="select-risk-col-title">
        <span>选择重大安全风险研判</span>
      </div> -->
      <el-tree
        ref="checkListTree"
        :data="riskAssessmentList"
        :props="{
          label: 'name',
          children: 'children',
        }"
        node-key="id"
        show-checkbox
        @check="checkList">
        <span class="span-ellipsis" slot-scope="{ node, data }">
          <div style="display: flex; align-items: center;">
            <span :title="node.label" :style="node.label === '其他' ? 'white-space: nowrap;' : 'white-space: pre-wrap;'">{{ node.label }}</span>
            <el-input 
              v-if="node.label === '其他' && data._level === 3"
              v-model="data.content"
              size="mini"
              type="textarea"
              style="margin-left: 5px; width: 430px;"
            ></el-input>
          </div>
        </span>
      </el-tree>
    </div>
    <span slot="footer">
      <el-button @click="close">取消</el-button>
      <el-button type="primary" @click="save">确定</el-button>
    </span>
	</el-dialog>
</template>

<script>
  import { sortbyAsc, treeDataTranslate } from "@/utils/index";
  export default {
    name: 'SelectRiskAssessment',
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      selectedRiskAssessment: {
        type: String,
        default: null
      }
    },
    data () {
      return {
        loading: false,
        riskAssessmentList: [],
        selectedRisk: [], 
      }
    },
    watch: {
      selectedRiskAssessment(val) {
        this.getData()
      }
    },
    created() {
      this.getDictionary()
    },
    mounted() {
      this.getData()
    },
    methods: {
      async getDictionary () {
        let dictionaryList = await this.getDatabase('dictionary')
        let riskAssessment = dictionaryList.find(item => item.type === 'riskAssessment') 
        let riskAssessmentList = riskAssessment ? JSON.parse(riskAssessment.list) : []
        // 遍历设置parentId
        riskAssessmentList.sort((sortbyAsc('id')))
        riskAssessmentList.forEach(item => {
          if (item.name === '其他') {
            item.content = ''
          }
          item.parentId = item.parent ? item.parent.id : ''
        })
        let list = treeDataTranslate(riskAssessmentList)
        this.riskAssessmentList = list
      },
      getData () {
        let selectedRisk = []
        if (this.selectedRiskAssessment) {
          selectedRisk = this.selectedRiskAssessment.split(',')
        }
        this.selectedRisk = selectedRisk
        this.$nextTick(() => {
          this.$refs.checkListTree.setCheckedKeys(selectedRisk);
        })
      },
      checkList (objectItem, selectedObjectItem) {
        // 选择权限同时增加至已选择权限列表中
        this.selectedRisk = selectedObjectItem.checkedNodes
      },
      close () {
        this.$emit('close', { page: 'riskAssessment' })
      },
      save () {
        this.$emit('save', { data: this.selectedRisk })
      },
    }
  }
;
</script>

<style lang="scss" scoped>
/deep/ .el-tree-node__content {
  height: auto;
}
.select-risk {
  height: calc(100vh - 500px);
  overflow: auto;
  .select-risk-col-title {
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: #E4EAFA;
    font-size: 14px;
    font-weight: 500;
  }
  .select-risk-col-tree {
    flex: 1;
    overflow: auto;
    .span-ellipsis {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>