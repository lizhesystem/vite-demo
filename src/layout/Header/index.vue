<template>
  <div class="header">
    <div class="header-lf flx-center">
			<CollapseIcon/>
      <!--面包屑-->
      <Breadcrumb />
    </div>
    <div class="header-ri flx-center">
      <!--组件size-->
      <AssemblySize />
      <!--全屏-->
      <Fullscreen />
      <span class="username">Pretty</span>
      <!--头像-->
      <Avatar />
    </div>
    <!--用户信息-->
    <InfoDialog ref="infoRef"></InfoDialog>

    <!--修改密码-->
    <PasswordDialog ref="passwordRef"></PasswordDialog>
  </div>
</template>

<script setup lang="ts">
import InfoDialog from './components/infoDialog.vue'
import PasswordDialog from './components/passwordDialog.vue'
import Breadcrumb from './components/Breadcrumb.vue'
import Fullscreen from './components/Fullscreen.vue'
import AssemblySize from './components/AssemblySize.vue'
import Avatar from './components/Avatar.vue'
import CollapseIcon from "@/layout/Header/components/CollapseIcon.vue";


</script>


<style lang="scss">
@import "./index.scss";
</style>
