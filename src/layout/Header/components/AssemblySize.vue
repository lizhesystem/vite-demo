<template>
  <el-dropdown trigger="click">
    <el-tooltip effect="dark" :content="'组件大小'" placement="bottom">
      <i :class="'iconfont icon-contentright'" class="icon-style"></i>
    </el-tooltip>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="item in assemblySizeList"
          :key="item"
          :disabled="size === item"
          @click.native="setAssemblySize(item)"
        >
          {{ item }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import {ref, reactive, computed} from 'vue'
import {GlobalStore} from "@/store";
import {ElLoading} from "element-plus";
const globalStore = GlobalStore()
const assemblySizeList = reactive<string[]>(['default', 'large', 'small'])
const size = computed(():string => globalStore.size)

const setAssemblySize = (item: string) => {
	if (size.value === item) return;
	ElLoading.service({ lock: true, text: "Loading", background: "rgba(0, 0, 0, 0.7)" });
  globalStore.setSize(item)
  window.location.reload();
}
</script>

<style scoped lang="scss"></style>
