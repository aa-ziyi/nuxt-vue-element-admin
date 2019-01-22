<template>
  <div v-if="user" class="user">
    {{ user.name }}
    <span class="line">|</span>
    <a @click="handleLogout">退出登陆</a>
  </div>
</template>

<script>
import auth from '~/utils';

export default {
  props: {
    user: {
      type: Object,
      default: new Object()
    }
  },
  created() {
    // console.log(this.user);
  },
  methods: {
    handleLogout() {
      auth.removeCurrentUser();
      auth.removeToken();
      this.$router.push('/login');
    }
  }
};
</script>

<style lang="less" scoped>
.user {
  color: #fff;
  font-size: 14px;
  .line {
    margin: 0 5px;
  }
}
</style>
