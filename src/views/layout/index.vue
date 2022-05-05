<template>
  <div>
    <el-menu
      mode="horizontal"
      router
      :default-active="activeIndex"
      @select="handleSelect"
    >
      <el-menu-item
        v-for="item in menus"
        :index="item.id"
        :key="item.id"
        :route="item.path"
      >
        {{ item.name }}
      </el-menu-item>
    </el-menu>
  </div>

  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
interface menus {
  id: string
  path: string
  name: string
}

export default defineComponent({
  setup() {
    const menus: menus[] = [
      { id: '1', path: '/home', name: 'home' },
      { id: '2', path: '/setting', name: 'setting' },
      { id: '3', path: '/other', name: 'other' }
    ]
    const activeIndex = ref('1')
    const handleSelect = (key: string, keyPath: string[]) => {
      activeIndex.value = key
    }
    return {
      menus,
      activeIndex,
      handleSelect
    }
  }
})
</script>

<style lang="stylus" scoped></style>
