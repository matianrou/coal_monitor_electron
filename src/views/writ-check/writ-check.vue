<!-- tab: 文书查看 -->
<template>
  <div class="writ-check">
    <div class="writ-check-title">
      文书查看
    </div>
    <div style="flex: 1; display: flex; flex-direction: column;">
      <!-- 面包屑导航 -->
      <div class="breadcrumb-main">
        <div
          v-for="(item, index) in curBreadcrumb"
          :key="index"
          :class="index !== curBreadcrumb.length - 1 ? 'breadcrumb-item' : ''"
          @click="gotoPage(item.value)">
          <span>{{item.label}}</span><i v-if="index !== curBreadcrumb.length - 1" class="el-icon-arrow-right"></i> 
        </div>
      </div>
      <!-- 执法活动列表 / 执法文书列表 -->
      <keep-alive>
        <component
          :is="activeBreadcrumb"
          :case-data="selectedCaseData"
          :paper-data="selectedPaperData"
          :org-list="orgList"
          :all-org-list="allOrgList"
          @go-back="changePage"
        ></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import writCase from '@/views/writ-check/components/writ-case'
import writPaper from '@/views/writ-check/components/writ-paper'
import writFill from '@/views/writ-check/components/writ-fill'
import { getAllProvinceOrg } from '@/utils/index'
import { getOrgTreeList } from '@/utils/setInitPaperData'
export default {
  name: "WritCheck",
  components: {
    writCase,
    writPaper,
    writFill
  },
  data() {
    return {
      breadcrumbList: [
        {
          label: '执法活动列表',
          value: 'writCase'
        },
        {
          label: '执法文书列表',
          value: 'writPaper'
        },
        {
          label: '文书查看',
          value: 'writFill'
        },
      ],
      activeBreadcrumb: 'writCase',
      orgList: [], // 省级机构
      allOrgList: [], // 所有机构
      selectedCaseData: null, // 选择的检查活动
      selectedPaperData: null, // 选择的文书
    };
  },
  computed: {
    curBreadcrumb() {
      let curBreadcrumb = []
      for (let i = 0; i < this.breadcrumbList.length; i++) {
        let item = this.breadcrumbList[i]
        if (item.value === this.activeBreadcrumb) {
          curBreadcrumb.push(item)
          break;
        } else {
          curBreadcrumb.push(item)
        }
      }
      return curBreadcrumb
    }
  },
  async created() {
    await this.getOrgList()
  },
  methods: {
    async getOrgList () {
      // 获取省级所有机构列表
      let userGroupId = this.$store.state.user.userGroupId
      let arrOrg = await getAllProvinceOrg(userGroupId)
      let orgList = []
      for (let i = 0; i < arrOrg.length; i++) {
        let obj = arrOrg[i];
        let org = {
          value: obj.no,
          label: obj.name
        }
        orgList.push(org)
      }
      this.orgList = orgList
      // 获取全部机构列表
      let orgData = await getOrgTreeList()
      this.allOrgList = orgData.orgList
    },
    gotoPage (page) {
      this.activeBreadcrumb = page
    },
    changePage ({page, data}) {
      if (this.activeBreadcrumb === 'writCase') {
        this.selectedCaseData = data
      } else if (this.activeBreadcrumb === 'writPaper') {
        this.selectedPaperData = data
      }
      this.gotoPage(page)
    }
  },
};
</script>

<style lang="scss" scoped>
.writ-check {
  height: calc(100% - 30px);;
  width: calc(100% - 30px);
  margin: 15px auto 0;
  border: 1px solid #DCDFE6;
  background: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  .writ-check-title {
    height: 40px;
    background: rgb(79, 131, 233);
    color: #fff;
    font-size: 18px;
    line-height: 40px;
    padding-left: 20px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .breadcrumb-main {
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    padding: 0px 20px;
    display: flex;
    border-bottom: 1px solid rgb(79, 131, 233);
    .breadcrumb-item {
      cursor: pointer;
      :hover {
        color: #409EFF;
      }
    }
  }
}
</style>