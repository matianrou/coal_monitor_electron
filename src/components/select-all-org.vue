<!-- 弹窗选择单位 全国所有机构 -->
<template>
  <el-dialog
    :title="title ? title : '选择单位'"
    :close-on-click-modal="false"
    append-to-body
    :visible="visible"
    width="70%"
    @close="close"
  >
    <div class="select-org-list-main">
      <!-- 企业列表 -->
      <div class="org-top-list" :style="{ width: divWidth + 'px' }">
        <div
          v-for="(item, index) in orgTreeList"
          :key="index"
          class="org-item">
          <span
            style="cursor: pointer;"
            :class="item.active ? 'active' : ''"
            @click="selectedItem(item, index)">
            {{ `${item.name}` }}
          </span>
        </div>
      </div>
      <adjustable-div
        @width-change="widthChange">
      </adjustable-div>
      <div class="select-org-main">
        <el-radio-group 
          v-if="childrenOrg.length > 0"
          v-model="selectOrg">
          <el-radio 
            v-for="(orgItem, orgIndex) in childrenOrg"
            :key="orgIndex"
            :label="orgItem.no"
            class="org-radio">
            {{orgItem.name}}
          </el-radio>
        </el-radio-group> 
      </div>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="close">取消</el-button>
      <el-button type="primary" @click="confirm">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import GoDB from "@/utils/godb.min.js";
import { sortbyAsc } from "@/utils/index";
import adjustableDiv from '@/components/adjustable-div'
export default {
  name: "SelectAllOrg",
  components: {
    adjustableDiv
  },
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
    selectedId: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      DBName: this.$store.state.DBName,
      divWidth: 400, // 机构部分div基础宽度
      orgList: [], // 机构平级结构
      orgTreeList: [], // 机构树状结构
      childrenOrg: [], // 机构子集
      selectOrg: null, // 选中的机构
    };
  },
  async created() {
    await this.getOrgList()
  },
  methods: {
    widthChange (width) {
      this.divWidth -= width;
      if (this.divWidth < 50) {
        this.divWidth = 50;
      }
      if (this.divWidth > 800) {
        this.divWidth = 800;
      }
    },
    async getOrgList () {
      // 获取全国机构
      let db = new GoDB(this.DBName);
      let orgInfo = db.table("orgInfo"); // 机构
      // 只针对监察三级机构做的处理
      // 监察过滤机构 同时去掉国家局
      let orgList = await orgInfo.findAll(item => 
        item.delFlag !== "1" && 
        // (item.type === '3' || item.type === '4' || item.type === '11') &&
        item.grade !== '1')
      // 过滤掉当前机构省局及处室机构
      let provinceId = ''
      let userGroupId = this.$store.state.user.userGroupId 
      let userGroup = await orgInfo.find(item => {
        return item.delFlag !== "1" 
        && item.no === userGroupId
        // && (item.type === '3' || item.type === '4' || item.type === '11')
      })
      await db.close()
      if (userGroup.no) {
        if (userGroup.grade === '2') {
          provinceId = userGroup.no
        } else if (userGroup.grade === '3') {
          provinceId = userGroup.parentId
        }
      }
      orgList = orgList.filter(item => item.no !== provinceId && item.parentId !== provinceId)
      // 处理机构数据，整理为树状结构
      // 按grade排序
      orgList.sort(sortbyAsc('grade'))
      this.orgList = orgList
      let orgTreeList = []
      for (let i = 0; i < orgList.length; i++) {
        let item = orgList[i]
        if (item.grade === '2') {
          // 省级则直接加入一级树状结构中，同时也加入二级
          let children = []
          children.push(item)
          orgTreeList.push(Object.assign({}, item, {
            active: false,
            children
          }))
        } else if (item.grade === '3') {
          // 处室直接加入对应二级中
          for (let j = 0; j < orgTreeList.length; j++) {
            let orgTreeItem = orgTreeList[j]
            // 遍历已有树状机构结构，找到当前处室父级机构，加入其二级机构中
            if (orgTreeItem.no === item.parentId) {
              orgTreeItem.children.push(item)
            }
          }
        }
      }
      this.orgTreeList = orgTreeList
      if (this.selectedId) {
        this.setOrigin()
      }
    },
    selectedItem(item, index) {
      // 选中机构一级
      this.orgTreeList.forEach(item => {
        item.active = false
      })
      item.active = true
      // 保存已选择的隐患项
      // 设置选中状态
      this.$set(this.orgTreeList, index, item)
      this.childrenOrg = item.children
      this.selectOrg = null
    },
    setOrigin () {
      // 根据回传id设置初始值
      let selectedOrg = {}
      for (let i = 0; i < this.orgList.length; i++) {
        // 遍历所有机构获取当前选中机构数据
        let item = this.orgList[i]
        if (item.no === this.selectedId) {
          selectedOrg = item
        }
      }
      let parentOrg = {}
      let parentIndex = null
      let parentNo = null
      if (selectedOrg.grade === '2') {
        // 如果选中为省级机构
        parentNo = selectedOrg.no
      } else if (selectedOrg.grade === '3') {
        // 如果选中为处室机构
        parentNo = selectedOrg.parentId
      }
      for (let i = 0; i < this.orgTreeList.length; i++) {
        // 根据当前选中机构回选机构树
        let item = this.orgTreeList[i]
        if (parentNo === item.no) {
          parentIndex = i
          parentOrg = item
        }
      }
      this.selectedItem(parentOrg, parentIndex)
      this.selectOrg = this.selectedId
    },
    close(refresh) {
      this.$emit("close", { page: "selectAllOrg", refresh });
    },
    confirm() {
      // 关闭弹窗，并赋值
      if (this.selectOrg) {
        let selectOrg = {}
        for (let i = 0; i < this.orgList.length; i++) {
          let item = this.orgList[i]
          if (item.no === this.selectOrg) {
            selectOrg = item
          }
        }
        this.$emit("confirm-org", selectOrg)
      } else {
        this.$message.error('请先选择机构！')
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.select-org-list-main {
  display: flex;
  height: 60vh;
  .org-top-list {
    height: 100%;
    overflow: auto;
    .org-item {
      span {
        display: block;
        width: calc(100% - 10px);
        white-space: nowrap;
        padding: 8px 5px;
      }
    }
  } 
  .select-org-main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 10px 20px 0px;
    overflow: auto;
    .org-radio {
      display: flex;
      align-items: center;
      line-height: 1.5rem;
      font-size: 18px;
      margin-bottom: 10px;
    }
  }
  .active {
    background: #4F83E9;
    color: #fff !important;
  }
}
</style>