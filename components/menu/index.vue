<template>
  <el-menu
    :v-if="menus"
    :default-active="'/'"
    :router="true"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item v-for="item in menus" :index="item.path" :key="item.path">{{ item.title }}</el-menu-item>
  </el-menu>
</template>

<script>
import template from './menu-template';
export default {
  props: {
    permissions: {
      type: Array,
      default: new Array()
    }
  },
  computed: {
    menus() {
      let items = template.filter(item => {
        if (
          this.permissions.indexOf(item.permissions) > -1 ||
          !item.permissions
        ) {
          return true;
        }
      });
      return items;
    }
  }
};
</script>
