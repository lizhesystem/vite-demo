<template>
  <el-form style="margin-top: 20px" ref="formRef" label-width="80px">
    <el-form-item label="用户名：">
      <el-input v-model="data[0].username">
        <template #prefix>
          <el-icon class="el_input__icon">
            <search />
          </el-icon>
        </template>
      </el-input>
    </el-form-item>

    <el-form-item label="密码：">
      <el-input type="password" v-model="data[0].password" show-password>
        <template #prefix>
          <el-icon class="el_input__icon">
            <search />
          </el-icon>
        </template>
      </el-input>
    </el-form-item>
  </el-form>

  <el-button type="primary" @click="clickParent">子组件提交</el-button>
</template>

<script setup lang="ts">
import { ref } from "vue"

interface LoginForm {
  username: String
  password: String
}

// TS专有声明，可以设置默认
withDefaults(
  defineProps<{
    data: LoginForm[]
  }>(),
  {
    data: () => [{ username: "admin", password: "123456" }]
  }
)

// TS专有声明，子组件向父组件传输数据
const emit = defineEmits<{
  (e: "clickParent", num: number): void
}>()

/*非ts专有*/
// const emit= defineEmits(['clickParent'])

const clickParent = () => {
  emit("clickParent", 2)
}

const count = ref<number>(2123)

const consoleNumber = (): void => {
  console.log(5555)
}

defineExpose({
  count,
  consoleNumber
})
</script>

<style scoped lang="scss"></style>
