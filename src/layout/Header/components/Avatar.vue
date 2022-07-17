<template>
  <el-dropdown trigger="click">
    <div class="avatar">
      <img src="@/assets/images/avatar.gif" alt="" />
    </div>
    <template #dropdown>
			<el-dropdown-menu>
				<el-dropdown-item @click.native="openDialog('infoRef')">个人资料</el-dropdown-item>
				<el-dropdown-item @click.native="openDialog('passwordRef')">修改密码</el-dropdown-item>
				<el-dropdown-item divided  @click.native="logout">退出登录</el-dropdown-item>
			</el-dropdown-menu>
    </template>
  </el-dropdown>

	<!-- infoDialog -->
	<InfoDialog ref="infoRef"></InfoDialog>
	<!-- passwordDialog -->
	<PasswordDialog ref="passwordRef"></PasswordDialog>
</template>

<script setup lang="ts">
import InfoDialog from  './infoDialog.vue'
import PasswordDialog from  './passwordDialog.vue'
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
