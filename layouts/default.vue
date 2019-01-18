<template>
  <div>
    <customMenu :permissions="permissions"/>
    <nuxt/>
    <div>这是统一底部</div>
  </div>
</template>

<script>
import auth from '~/utils/index';
import customMenu from '~/components/menu';

export default {
  components: {
    customMenu
  },
  data() {
    return {
      permissions: []
    };
  },
  created() {
    if (auth.getCurrentUser()) {
      this.permissions = JSON.parse(auth.getCurrentUser()).permissions || [];
      return;
    }
    this.getUser();
  },
  methods: {
    async getUser() {
      const result = await this.$axios.$get('/users/current');
      if (result && result.body) {
        auth.setCurrentUser(result.body);
        console.log(result.body.permissions);
        this.permissions = result.body.permissions || [];
      }
      console.log(result);
    }
  }
};
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
