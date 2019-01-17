<template>
  <section class="container">
    <div>
      <logo/>这是首页
      <el-button @click="handleGoUser">去用户页面</el-button>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue';

export default {
  components: {
    Logo
  },
  created() {
    console.log(this.$axios);
  },
  asyncData(context) {
    console.log(context.$axios);
  },
  methods: {
    async handleGoUser() {
      const result = await this.$axios.$post('/login/jwt', {
        data: {
          name: 'admin',
          password: 'abc.123'
        }
      });
      console.log(result);
    }
  }
};
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
