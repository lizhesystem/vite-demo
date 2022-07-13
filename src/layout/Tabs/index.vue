<template>
  <div class="tabs-box">
    <div class="tabs-menu">
      <el-tabs v-model="tabsMenuValue" type="card" @tab-click="tabClick" @tab-remove="removeTab">
        <el-tab-pane
          v-for="item in tabsMenuList"
          :key="item.path"
          :label="item.title"
          :closable="item.close"
          :name="item.path"
        >
          <template #label>
            <el-icon class="tabs-icon" v-if="item.icon">
              <component :is="item.icon"></component>
            </el-icon>
            <span>{{ item.title }}</span>
          </template>
        </el-tab-pane>
      </el-tabs>
      <MoreButton/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TabsStore } from '@/store/modules/tabs'
import { computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { TabsPaneContext } from 'element-plus'
import MoreButton from "@/layout/Tabs/components/MoreButton.vue";

const tabsStore = TabsStore()
const tabsMenuValue = computed({
  get: () => {
    return tabsStore.tabsMenuValue
  },
  set: val => {
    tabsStore.setTabsMenuValue(val)
  }
})
const tabsMenuList = computed((): Menu.MenuOptions[] => tabsStore.tabsMenuList)

const route = useRoute()
const router = useRouter()
watch(
  () => route.path,
  () => {
    const params = {
      title: route.meta.title as string,
      path: route.path,
      close: true
    }
    tabsStore.addTabs(params)
  },
  {
    immediate: true
  }
)

// methods
const tabClick = (tabItem: TabsPaneContext) => {
  let path = tabItem.props.name as string
  router.push(path)
}

const removeTab = (activeTabPath: string) => {
  tabsStore.removeTabs(activeTabPath)
}
</script>

<style scoped lang="scss">
.tabs-box {
  :deep(.tabs-menu) {
    width: 100%;
    position: relative;

    .el-dropdown {
      position: absolute;
      right: 13px;
      top: 8px;
    }

    .tabs-icon {
      top: 2px;
    }

    .el-tabs__nav-wrap {
      position: absolute;
      width: calc(100% - 120px);
    }

    .el-tabs--card > .el-tabs__header {
      height: 40px;
      padding: 0 10px;
      box-sizing: border-box;
      margin: 0;
    }

    .el-tabs--card > .el-tabs__header .el-tabs__nav {
      border: none;
    }

    .el-tabs--card > .el-tabs__header .el-tabs__item {
      color: #ccc;
      border: none;
    }

    .el-tabs--card > .el-tabs__header .el-tabs__item.is-active {
      color: $color;
      border-bottom: 2px solid $color;
    }
  }
}
</style>
