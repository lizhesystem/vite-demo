<template>
  <div class="menu" :style="{ width: isCollapse ? '65px' : '250px' }">
    <el-menu
      :default-active="defaultActive"
      :collapse="isCollapse"
      :collapse-transition="false"
      :unique-opened="true"
      background-color="#20222a"
      text-color="#bdbdc0"
      active-text-color="#fff"
    >
			<Logo :is-collapse="isCollapse"></Logo>
      <SubItem :menu-list="menuList" />
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import { MenuStore } from '@/store/modules/menu'
import SubItem from '@/views/layout/Menu/components/SubItem.vue'
import menuListJson from './json/menu.json'
import { useRoute } from 'vue-router'
import Logo from "@/views/layout/Menu/components/Logo.vue";

const route = useRoute()
const menuStore = MenuStore()
menuStore.setMenuList(menuListJson)

const isCollapse = computed((): boolean => menuStore.isCollapse)
const defaultActive = computed((): string => route.path)
const menuList = computed((): Menu.MenuOptions[] => menuStore.menuList)

// onMounted(() => {
//   listeningWindow()
// })
const screenWidth = ref<number>(0)
const screenHeight = ref<number>(0)

// 监听窗口大小
const listeningWindow = () => {
  window.onresize = () => {
    return (() => {
      screenWidth.value = document.body.clientWidth
      screenHeight.value = document.body.clientHeight
      if (!isCollapse.value && screenWidth.value < 1200) menuStore.setCollapse()
      if (isCollapse.value && screenWidth.value > 1200) menuStore.setCollapse()
    })()
  }
}
listeningWindow()
</script>

<style scoped lang="scss">
.menu {
  transition: all 0.3s ease;
  background-color: #20222a;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;

  .el-menu {
    flex: 1;
    overflow: auto;
    overflow-x: hidden;
    border-right: none;

    &::-webkit-scrollbar {
      background-color: #20222a;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #41444b;
    }

    // 防止 icon 抖动
    .el-icon {
      width: auto;
      height: auto;
      margin: 0px 8px 0 3px;
    }

    .el-menu-item {
      &.is-active {
        background-color: #060708 !important;
      }

      &.is-active::before {
        content: '';
        top: 0;
        left: 0;
        bottom: 0;
        width: 4px;
        background: #409eff;
        position: absolute;
      }
    }
  }
}
</style>
