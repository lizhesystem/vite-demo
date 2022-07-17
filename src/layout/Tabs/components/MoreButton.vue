<template>
  <el-dropdown trigger="click">
    <el-button size="small" type="primary">
      <span>更多</span>
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </el-button>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click.native="closeCurrentTab">关闭当前</el-dropdown-item>
        <el-dropdown-item @click.native="closeOtherTab">关闭其他</el-dropdown-item>
        <el-dropdown-item @click.native="closeAllTab">关闭所有</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { TabsStore } from '@/store/modules/tabs'
import {HOME_URL} from "@/config";

const tabsStore = TabsStore()

// Close Current
const closeCurrentTab = () => {
  if (tabsStore.tabsMenuValue === HOME_URL) return
  tabsStore.removeTabs(tabsStore.tabsMenuValue)
}

// Close Other
const closeOtherTab = () => {
  tabsStore.closeMultipleTab(tabsStore.tabsMenuValue)
}
// Close All
const closeAllTab = () => {
  tabsStore.closeMultipleTab()
  tabsStore.goHome()
}
</script>

<style scoped></style>
