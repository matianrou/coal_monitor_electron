<!-- tab: 文书查看 -->
<template>
  <div class="writ-check">
    <div class="writ-check-title">
      文书查看
    </div>
    <div>
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
      <!-- 执法活动列表 -->
      <component
        :is="activeBreadcrumb"
      ></component>
    </div>
  </div>
</template>

<script>
import writCase from '@/views/writ-check/components/writ-case'
export default {
  name: "WritCheck",
  components: {
    writCase
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
      ],
      activeBreadcrumb: 'writCase'
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
  created() {
  },
  methods: {
    gotoPage (page) {
      this.activeBreadcrumb = page
    }
  },
};
</script>

<style lang="scss" scoped>
.writ-check {
  height: calc(100% - 30px);
  margin: 15px;
  border: 1px solid #DCDFE6;
  background: #fff;
  border-radius: 10px;
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