<template xmlns="">
  <div class="login-container">
    <h3>this is login form!</h3>
    <login-form ref="loginRef" :data="loginForm" @clickParent="clickParent" />
    <el-button type="primary" @click="helloClick">登录</el-button>
  </div>
</template>

<script setup lang="ts">
import LoginForm from "@/views/login/components/LoginForm.vue"
import { reactive, ref } from "vue"

type LoginFormExpose = {
  count: number
  consoleNumber: () => void
}
const loginRef = ref<LoginFormExpose | null>(null)

const helloClick = () => {
  console.log(loginRef.value?.count)
  loginRef.value!.consoleNumber()
}

interface LoginForm {
  username: String
  password: String
}

const loginForm = reactive<LoginForm[]>([
  {
    username: "default",
    password: "123456"
  }
])

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
