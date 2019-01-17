<template>
  <div>user list page
    <el-button @click="goBack">回退</el-button>
  </div>
</template>


<script>
export default {
  methods: {
    goBack() {
      console.log(this.$router.back);
      this.$router.back();
    }
  }
};
</script>
