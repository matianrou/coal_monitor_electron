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
          v-for="(item, index) in breadcrumbList"
          :key="index"
          :class="index !== breadcrumbList.length - 1 ? 'breadcrumb-item' : ''"
          @click="gotoPage(item.value)">
          <span>{{item.label}}</span><i v-if="index !== breadcrumbList.length - 1" class="el-icon-arrow-right"></i> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WritCheck",
  components: {
  },
  data() {
    return {
      breadcrumbList: [
        {
          label: '执法活动列表',
          value: 'case'
        },
        {
          label: '执法文书列表',
          value: 'paper'
        },
      ]
    };
  },
  created() {
  },
  methods: {
    gotoPage (page) {
      console.log('page', page)
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