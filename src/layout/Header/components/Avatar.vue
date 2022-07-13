<template>
  <el-dropdown trigger="click">
    <div class="avatar">
      <img src="@/assets/images/avatar.gif" alt="" />
    </div>
    <template #dropdown>
      <el-dropdown-menu @click.native="openDialog('infoRef')">个人资料</el-dropdown-menu>
      <el-dropdown-menu @click.native="openDialog('passwordRef')">修改密码</el-dropdown-menu>
      <el-dropdown-menu divided  @click.native="logout">退出登录</el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {ElMessage, ElMessageBox} from "element-plus";
import {useRouter} from "vue-router";

// OpenDialog
interface DialogExpose {
  openDialog: () => void
}
const infoRef = ref<null | DialogExpose>(null)
const passwordRef = ref<null | DialogExpose>(null)

const openDialog = (refName: string) => {
  if (refName === 'infoRef') return infoRef.value?.openDialog()
  passwordRef.value?.openDialog()
}

const router = useRouter()
const logout = () => {
  ElMessageBox.confirm('您是否确认退出登录?', '温馨提示', {
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
    type: 'warning'
  }).then(() => {
    router.push('/login')
    ElMessage({
      type: 'success',
      message: '退出登录成功！'
    })
  })
}
</script>

<style scoped lang="scss">
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>
