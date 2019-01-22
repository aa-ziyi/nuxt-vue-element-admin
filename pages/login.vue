<template>
  <div class="login-content">
    <el-form :model="form">
      <el-form-item label="用户名">
        <el-input v-model="form.username" placeholder="请输入用户名"/>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" placeholder="请输入密码"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleLogin">登陆</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import auth from '../utils/index';

export default {
  layout: 'blank',
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    async handleLogin() {
      const result = await this.$axios.$post('/login/jwt', {
        username: this.form.username,
        password: this.form.password
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

<style>
.login-content {
  width: 300px;
  margin: 0 auto;
}
</style>
