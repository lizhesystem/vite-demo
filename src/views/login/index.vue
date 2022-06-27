<template xmlns="">
  <div class="login-container">
    <h3>this is login form!</h3>
    <login-form ref="loginRef" :data="loginForm" @submitParent="submitParent" />
  </div>
</template>

<script setup lang="ts">
import LoginForm from '@/views/login/components/LoginForm.vue'
import { reactive, ref } from 'vue'
import { LoginFormExpose, LoginFrom } from '@/views/login/types'

const loginRef = ref<LoginFormExpose | null>(null)

// login
const submitParent = (LoginForm: LoginFrom) => {}

const loginForm = reactive<LoginFrom>({
    username: 'default',
    password: '123456'})

const clickParent = (number: number) => {
  console.log(number)
  console.log(11111111111111)
}
</script>

<style scoped lang="scss">
.login-container {
  margin: 0 auto;
  max-width: 500px;
}
</style>
