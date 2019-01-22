<template>
  <el-breadcrumb class="breadcrumb" separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>活动管理</el-breadcrumb-item>
    <el-breadcrumb-item>活动列表</el-breadcrumb-item>
    <el-breadcrumb-item>活动详情</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  data() {
    return {
      items: []
    };
  },
  watch: {
    $route(to) {
      console.log('router', to);
    }
  },
  created() {
    console.log('router', this.$route);
  }
};
</script>


<style lang="less" scoped>
.breadcrumb {
  margin: 20px 20px 0;
}
</style>
