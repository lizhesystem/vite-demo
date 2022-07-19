<template xmlns="">
  <el-form
    style="margin-top: 20px"
    ref="loginFormRef"
    :model="loginForm"
    :rules="loginRules"
    label-width="80px"
    size="large"
  >
    <el-form-item label="用户名：" prop="username">
      <el-input v-model="loginForm.username">
        <template #prefix>
          <el-icon class="el-input__icon">
            <user />
          </el-icon>
        </template>
      </el-input>
    </el-form-item>

    <el-form-item label="密码：" prop="password">
      <el-input type="password" v-model="loginForm.password" show-password>
        <template #prefix>
          <el-icon class="el-input__icon">
            <lock />
          </el-icon>
        </template>
      </el-input>
    </el-form-item>
  </el-form>
  <div class="login-btn">
    <el-button type="primary" :loading="loading" size="large" :icon="UserFilled" round @click="login(loginFormRef)"
      >登录
    </el-button>
    <el-button :icon="CircleClose" round size="large" @click="resetForm(loginFormRef)">重置</el-button>
  </div>
  <!--<el-button @click="submitParent">触发父组件方法</el-button>-->
</template>

<script setup lang="ts">
import { inject, reactive, ref } from 'vue'
import { InjectProps, LoginFrom } from '@/views/login/types'
import { ElForm, ElMessage } from 'element-plus'
import { CircleClose, UserFilled } from '@element-plus/icons-vue'
import { loginApi } from '@/api/modules/login'
import { useRouter } from 'vue-router'
import { GlobalStore } from '@/store'

const router = useRouter()
const globalStore = GlobalStore()

// inject
const provideState = inject('provideState') as InjectProps
console.log(provideState.age)
provideState.changeName()

// 表单相关 定义ref
type FormInstance = InstanceType<typeof ElForm>
const loginFormRef = ref<FormInstance>()
const loginRules = reactive({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
})

const loading = ref<boolean>(false)

const login = (formEL: FormInstance | undefined) => {
  if (!formEL) return
  formEL.validate(async valid => {
    if (valid) {
      loading.value = true
      console.log('submit')
      try {
        const requestLoginFrom: LoginFrom = {
          username: loginForm.username,
          password: loginForm.password
        }
        const res = await loginApi(requestLoginFrom)
        const { token } = res.data
        globalStore.setToken(token)
        ElMessage.success('登录成功！')
        await router.push({ name: 'home' })
      } finally {
        loading.value = false
      }
    }
  })
}

// 重置
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

// 接收父组件参数（采用ts专有声明，有默认值）
interface ParentProps {
  age?: string
  address?: string[]
  obj?: {
    username: string
    password: string
  }
}

const props = withDefaults(defineProps<ParentProps>(), {
  age: '18',
  address: () => ['新希望国际', '伏龙小区'],
  obj: () => {
    return {
      username: 'admin',
      password: '123456'
    }
  }
})

const loginForm = reactive<LoginFrom>({
  username: props.obj.username,
  password: props.obj.password
})
console.log(props)
// 接收父组件参数（采用ts专有声明，无默认值）
// const props1 = defineProps<{ item: string }>();
// console.log(props1);

// 子组件向父组件传输数据（触发父组件的submitParent方法）
const emit = defineEmits<{
  (e: 'submitParent', LoginFrom: LoginFrom): void
}>()
// 调用父类方法
const submitParent = () => {
  emit('submitParent', loginForm)
}

// 子组件数据暴露给父组件 defineExpose
const count = ref<number>(2111)
const consoleNumber = (name: string): void => {
  console.log('我是子组件打印的数据', name)
}

defineExpose({
  count,
  consoleNumber
})
</script>

<style scoped lang="scss">
.el-form-item {
  margin-bottom: 35px;
}

.login-btn {
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  white-space: nowrap;

  .el-button {
    width: 185px;
  }
}
</style>
