<template>
  <div>
    <el-button @click="handleLogin">登陆</el-button>
  </div>
</template>

<script>
import auth from '../utils/index';

export default {
  layout: 'blank',
  methods: {
    async handleLogin() {
      const result = await this.$axios.$post('/login/jwt', {
        username: 'admin',
        password: '123456'
      });
      console.log(result);
      if (result && result.body && result.body.token) {
        console.log(result.body.token);
        auth.setToken(result.body.token);
        this.$router.push('/');
      }
    }
  }
};
</script>
