<template xmlns="">
  <div class="login-container">
    <h3>this is login form!</h3>
    <login-form/>
    <el-button type="primary" @click="helloClick"></el-button>
  </div>
</template>

<script setup lang="ts">
import LoginForm from "@/views/login/components/LoginForm.vue";

const helloClick = () => {
  console.log(1)
}
</script>

<style scoped lang="scss">
.login-container {
  display: flex;
  justify-content: center;
}
</style>
