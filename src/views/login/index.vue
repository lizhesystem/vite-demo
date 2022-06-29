<template>
  <div class="login-container">
    <h3>this is login form!</h3>
    <login-form
      ref="loginRef"
      :age="'20'"
      :address="['高新区', '沟赵乡']"
      :obj="loginForm"
      @submitParent="submitParent"
    />

     <el-button @click="consoleRef">打印子组件数据</el-button>

  </div>
</template>

<script setup lang="ts">
import LoginForm from '@/views/login/components/LoginForm.vue'
import { provide, reactive, ref } from 'vue'
import { LoginFormExpose, LoginFrom } from '@/views/login/types'

// 使用provide传数据
let phone = ref<string>('iphone')
provide('provideState', {
  name: 'zhangSan',
  age: '29',
  changeName: () => {
    console.log(phone.value)
    setTimeout(() => {
      phone.value = 'huawei' // phone是响应式
      console.log(phone.value)
    }, 1000)
  }
})

// 使用子组件数据
const loginRef = ref<LoginFormExpose | null>(null)
const consoleRef = ()=>{
  console.log(loginRef.value?.count)
  loginRef.value?.consoleNumber("liutao");
}

// login
const submitParent = (LoginForm: LoginFrom) => {
  console.log(LoginForm.username)
  console.log(LoginForm.password)
}

const loginForm = reactive<LoginFrom>({
  username: 'aa',
  password: 'bb'
})

// const clickParent = (number: number) => {
//   console.log(number)
//   console.log(11111111111111)
// }
</script>

<style scoped lang="scss">
.login-container {
  margin: 20px auto;
  max-width: 500px;
}
</style>