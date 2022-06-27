<template>
  <!--<div>-->
  <!--  <el-menu mode="horizontal" router :default-active="activeIndex">-->
  <!--    <el-menu-item v-for="item in menus" :index="item.id" :key="item.id" :route="item.path">-->
  <!--      {{ item.name }}-->
  <!--    </el-menu-item>-->
  <!--  </el-menu>-->
  <!--</div>-->
  <el-container>
    <router-view></router-view>
  </el-container>
</template>

<script setup lang="ts">
import { Ref, ref, watch } from "vue"
import { useRoute } from "vue-router"

interface menus {
  id: string
  path: string
  name: string
}

const menus: menus[] = [
  { id: "home", path: "/home", name: "home" },
  { id: "setting", path: "/setting", name: "setting" },
  { id: "other", path: "/other", name: "other" },
  { id: "debounce", path: "/debounce", name: "debounce" },
  { id: "login", path: "/login", name: "login" }
]
const activeIndex: Ref<any> = ref(null)
const route = useRoute()
watch(
  () => route.name,
  val => {
    activeIndex.value = val
  }
)
</script>
<style scoped lang="scss">
.el-container {
  width: 100%;
  height: 100%;
  min-width: 700px;
  display: flex;
}
</style>
