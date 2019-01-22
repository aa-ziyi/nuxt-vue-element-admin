<template>
  <div>
    <div class="header">
      <customMenu :permissions="currentUser.permissions || []"/>
      <user :user="currentUser"/>
    </div>
    <breadcrumb/>
    <div class="main-container">
      <nuxt keep-alive/>
    </div>
    <customFooter/>
  </div>
</template>

<script>
import auth from '~/utils/index';
import customMenu from '~/components/layout/menu';
import user from '~/components/layout/user';
import customFooter from '~/components/layout/footer';
import breadcrumb from '~/components/layout/breadcrumb';

export default {
  components: {
    customMenu,
    user,
    customFooter,
    breadcrumb
  },
  data() {
    return {
      currentUser: {}
    };
  },
  created() {
    if (auth.getCurrentUser()) {
      this.currentUser = JSON.parse(auth.getCurrentUser());
      return;
    }
    this.getUser();
  },
  methods: {
    async getUser() {
      const result = await this.$axios.$get('/users/current');
      if (result && result.body) {
        auth.setCurrentUser(result.body);
        this.currentUser = result.body;
      }
    }
  }
};
</script>

<style lang="less">
body {
  margin: 0;
  background-color: #f1f1f1;
}

.main-container {
  margin: 20px;
  background-color: #fff;
  min-height: 80vh;
  padding: 0;
  text-align: center;
}

.header {
  padding: 0 20px;
  background-color: rgb(84, 92, 100);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
