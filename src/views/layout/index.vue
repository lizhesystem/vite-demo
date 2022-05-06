<template>
  <div>
    <el-menu mode="horizontal" router :default-active="activeIndex">
      <el-menu-item v-for="item in menus" :index="item.id" :key="item.id" :route="item.path">
        {{ item.name }}
      </el-menu-item>
    </el-menu>
  </div>

  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent, Ref, ref, watch } from 'vue'
import { RouteRecordName, useRoute } from 'vue-router'
interface menus {
  id: string
  path: string
  name: string
}

export default defineComponent({
  setup() {
    const menus: menus[] = [
      { id: 'home', path: '/home', name: 'home' },
      { id: 'setting', path: '/setting', name: 'setting' },
      { id: 'other', path: '/other', name: 'other' },
      { id: 'debounce', path: '/debounce', name: 'debounce' }
    ]
    const activeIndex: Ref<any> = ref(null)
    const route = useRoute()
    watch(
      () => route.name,
      (val) => {
        activeIndex.value = val
      }
    )

    return {
      menus,
      activeIndex
    }
  }
})
</script>

<style lang="stylus" scoped></style>
