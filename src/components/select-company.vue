<!-- 弹窗选择煤矿/企业 -->
<template>
  <el-dialog
    title="选择煤矿/企业"
    :close-on-click-modal="false"
    append-to-body
    :visible="visible"
    width="800px"
    top="10vh"
    @close="close">
    <div class="company-tree" v-loading="loading">
      <el-form
        v-loading="loading"
        :model="dataForm"
        ref="dataForm"
        label-width="0"
        size="small"
        @keyup.enter.native="getCompanyList()"
        style="position: relative;">
        <div style="display: flex; justify-content: space-between;">
          <!-- 企业矿井类型筛选 -->
          <el-form-item
            prop="companyStatus">
            <el-radio-group
              v-model="dataForm.companyStatus"
              @change="getCompanyList">
              <el-radio label="0000">全部</el-radio>
              <el-radio label="10">上级企业</el-radio>
              <el-radio label="0101">正常生产矿井</el-radio>
              <el-radio label="0301">关闭矿井</el-radio>
            </el-radio-group>
          </el-form-item>
          <!-- 是否本级机构筛选 -->
          <el-form-item
            prop="onlySelf">
            <el-checkbox
              v-model="dataForm.onlySelf"
              @change="getCompanyList">
              仅显示本机构
            </el-checkbox>
          </el-form-item>
        </div>
        <!-- 企业名称输入检索 -->
        <el-form-item
          prop="companyName">
          <el-input
            v-model.trim="dataForm.companyName"
            placeholder="请输入企业名称"
            style="width: 200px;"
            clearable>
          </el-input>
          <el-button type="primary" @click="getCompanyList">搜索</el-button>
        </el-form-item>
        <div class="company-count">
          <span>共{{ companyList ? companyList.length : 0}}家企业</span>
        </div>
      </el-form>
      <div class="select-company-main">
        <!-- 按地区筛选 -->
        <div class="select-company-tree">
          <el-tree
            ref="areaTree"
            :data="areaTree"
            :props="{
              label: 'name',
              children: 'children',
            }"
            node-key="code"
            default-expand-all
            :highlight-current="true"
            :expand-on-click-node="false"
            @node-click="selectArea">
          </el-tree>
        </div>
        <!-- 企业筛选结果 -->
        <div class="select-company-list">
          <div
            v-for="(item, index) in companyList"
            :key="index"
            :class="item.active ? 'active-item select-company-list-item' : 'select-company-list-item'"
            @click="selectCompany(item, index)">
            <img src="./assets/image/company.png" alt="" />
            <span style="margin-left: 7px;">{{ item.corpName }}</span>
          </div>
        </div>
      </div>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="close">取消</el-button>
      <el-button type="primary" @click="confirm">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { treeDataTranslate } from '@/utils/index'
  export default {
    name: 'SelectCompanyDialog',
    props: {
      visible: {
        type: Boolean,
        default: false
      },
    },
    data () {
      return {
        loading: false,
        companyList: [],
        areaTree: [],
        selectedCompany: null, // 选择的企业
        dataForm: { // 筛选条件
          onlySelf: false, // 仅显示本机构
          companyStatus: '0000', // 企业状态：全部、上级企业、正常生产矿井、关闭矿井
          companyName: '', // 按企业名称搜索
          areaId: '', // 按地区检索
        },
        curAreaLevel: 2, // 当前地区节点的level，用于检索
      }
    },
    created () {
      this.init()
    },
    methods: {
      async init () {
        this.loading = true
        // 获取企业列表
        await this.getAreaTree()
        await this.getCompanyList()
        this.loading = false
      },
      async getAreaTree() {
        let doEnterpriseList = await this.getDatabase('enterpriseList');
        let areaId = this.$store.state.user.userAreaId
        let areaList = []
        areaList = JSON.parse(JSON.stringify(doEnterpriseList.filter((item) => {
          return (item.parentIds && item.parentIds.includes(areaId)) || item.code === areaId;
        }) || []))
        this.areaTree = treeDataTranslate(JSON.parse(JSON.stringify(areaList)), 'code', 'parentId')
        this.selectArea(this.areaTree[0])
      },
      // 获取企业列表
      async getCompanyList() {
        // 获取企业数据
        // 整理筛选项内容：
        let {onlySelf, companyStatus, companyName, areaId} = this.dataForm
        let corpBase = await this.getDatabase("baseInfo"); // 煤矿企业
        let corpList = corpBase.length > 0 && JSON.parse(JSON.stringify(corpBase.filter(item => {
          return item.corpName && item.corpName.indexOf(companyName) !== -1 &&
            item.delFlag !== '1' && 
            item.zoneCountyId && item.zoneCountyId.slice(0, this.curAreaLevel) === (areaId ? areaId.slice(0, this.curAreaLevel) : item.zoneCountyId.slice(0, this.curAreaLevel))
        }) || []))
        // 是否仅显示本机构
        if (onlySelf) {
          corpList = corpList.filter(item => item.groupId === this.$store.state.user.userGroupId) || []
        }
        if (companyStatus === '10') {
          corpList = corpList.filter(item => item.constructType === companyStatus) || []
        } else if (companyStatus === '0101' || companyStatus === '0301') {
          corpList = corpList.filter(item => item.mineStatusZs === companyStatus)
        }
        if (corpList.length > 0) {
          corpList.forEach(item => {
            item.active = false
          })
        }
        this.companyList = corpList
      },
      selectArea(data, node, ele) {
        // 选中地区进行筛选 按名称中是否有省做判断条件，当前选中地区的level
        if (data.type) {
          switch (Number(data.type)) {
            case 2: 
              this.curAreaLevel = 2
              break
            case 3:
              this.curAreaLevel = 4
              break
            case 4: 
              this.curAreaLevel = 6
              break
          }
        }
        this.dataForm.areaId = data ? data.code : null
        this.getCompanyList()
      },
      close (refresh) {
        // 关闭选择弹窗
        this.selectedCompany = null
        this.$emit('close', {page: 'selectCompany', refresh})
      },
      selectCompany (company, index) {
        // 选中企业
        // 清空其他企业选中状态
        this.companyList.forEach(item => {
          item.active = false
        })
        // 设置选中样式
        let companyObj = Object.assign({}, company, {
          active: true
        })
        this.$set(this.companyList, index, companyObj)
        this.selectedCompany = companyObj
      },
      confirm() {
        // 关闭机构弹窗，并赋值
        // 将临时保存数据结果赋值到数据中
        this.$emit('confirm-company', this.selectedCompany)
        this.close()
      },
    }
  }
</script>

<style lang="scss" scoped>
.el-form-item {
  margin-bottom: 0px;
}
.company-count {
  position: absolute;
  bottom: 0px;
  right: 0px;
  font-size: 14px;
  color: #909399;
}
.company-tree {
  border: 1px solid #DCDFE6;
  padding: 10px 20px;
  .select-company-main {
    display: flex;
    height: 400px;
    border: 1px solid #DCDFE6;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    margin-top: 10px;
    .select-company-tree {
      flex: 2;
      border-right: 1px solid #DCDFE6;
      overflow: auto;
    }
    .select-company-list {
      flex: 3;
      height: 100%;
      overflow: auto;
      white-space: nowrap;
      .select-company-list-item {
        display: flex;
        height: 30px;
        align-items: center;
        cursor: pointer;
        padding: 0 10px;
        &:hover {
          background: rgba(83, 168, 255, 0.7);
          color: #fff;
        }
      }
      .active-item {
        background: rgb(83, 168, 255);
        color: #fff;
      }
    }
  }
}
/deep/ .el-tree {
  overflow: auto；
}
/deep/ .el-tree-node__content {
  display: block!important;
}
/deep/ .el-tree-node__children {
  overflow: visible!important;
}
/deep/ .el-tree-node__content:hover {
  background: rgba(83, 168, 255, 0.7);
  color: #fff;
}
/deep/ .el-tree-node:focus>.el-tree-node__content {
  background: rgb(83, 168, 255);
  color: #fff;
}
/deep/ .el-tree--highlight-current .el-tree-node.is-current>.el-tree-node__content {
  background: rgb(83, 168, 255);
  color: #fff;
}
</style>