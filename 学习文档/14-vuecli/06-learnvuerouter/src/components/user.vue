<template>
  <div>
    <h2>我是用户组件</h2>
    <h2>我是用户的相关信息哈哈哈</h2>
    <h2>{{ userId }}</h2>
  </div>
</template>

<script>
export default {
  name: "user",
  computed: {
    userId() {
      return this.$route.params.userId
    }
  }
}
</script>

<style scoped>

</style>
