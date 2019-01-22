<template>
  <div>用户列表页面
    <nuxt-link to="/user/1">111去用户详情页面344343</nuxt-link>
    <el-input v-model="input" placeholder="请输入内容"/>
    <img :src="imgSrc" alt>
  </div>
</template>

<script>
import img from '~/assets/image/bg.png';

export default {
  data() {
    return {
      imgSrc: img
    };
  }
};
</script>
