<template>
  <div class="header">
    <div class="header-lf flx-center">
      <el-icon class="collapse-icon" @click="menuStore.setCollapse()">
        <component :is="isCollapse ? 'expand' : 'fold'"></component>
      </el-icon>
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>超级表格</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="header-ri flx-center">
      <el-tooltip effect="dark" :content="'组件大小'" placement="bottom">
        <i :class="'iconfont icon-contentright'" class="icon-style" @click=""></i>
      </el-tooltip>
      <el-tooltip effect="dark" :content="'全屏'" placement="bottom">
        <i :class="'iconfont icon-fangda'" class="icon-style" @click=""></i>
      </el-tooltip>
      <span class="username">Pretty</span>
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
    </div>
    <!--用户信息-->
    <InfoDialog ref="infoRef"></InfoDialog>

    <!--修改密码-->
    <PasswordDialog ref="passwordRef"></PasswordDialog>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { MenuStore } from '@/store/modules/menu'
import { ArrowRight } from '@element-plus/icons-vue'
import InfoDialog from '@/views/layout/Header/components/infoDialog.vue'
import PasswordDialog from '@/views/layout/Header/components/passwordDialog.vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const menuStore = MenuStore()
const isCollapse = computed((): boolean => menuStore.isCollapse)

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
</script>

<style scoped lang="scss">
.header {
  border-bottom: 1px solid #f6f6f6;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  height: 55px;
  .header-lf {
    .collapse-icon {
      font-size: 22px;
      margin-right: 20px;
      cursor: pointer;
    }
  }
  .header-ri {
		margin: 0 30px;
		.icon-style{
			font-size: 20px;
			color: rgb(0,0,0,0.75);
			cursor: pointer;
			margin: 0 20px 0 0;
		}
		.username{
			font-size: 15px;
      color: rgb(0,0,0,0.75);
			margin: 0 20px 0 0;
		}
		.avatar{
			width: 40px;
			height: 40px;
			border-radius: 50%;
			overflow: hidden;
			cursor: pointer;
			img{
				width: 100%;
				height: 100%;
			}
		}
  }
}
</style>
