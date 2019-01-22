<template>
  <div>用户详情页面
    <el-input v-model="input" placeholder="请输入内容"/>
    <el-button @click="goBack">回退</el-button>
    <div class="bg"/>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.back();
    }
  }
};
</script>

<style lang="less" scoped>
.bg {
  height: 200px;
  background-image: url('~assets/image/bg.png');
}
</style>
