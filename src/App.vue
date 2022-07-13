<template>
  <el-config-provider :locale="zhCn" :button="config" :size="size">
    <router-view></router-view>
  </el-config-provider>
</template>

<script setup lang="ts">
// 配置element中英文
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import { reactive, ref } from 'vue'
import {GlobalStore} from "@/store";

const global = GlobalStore()

// 配置element按钮文字中间是否有空格
const config = reactive({
  autoInsertSpace: false
})
// 配置全局组件大小 (small/default(medium)/large)
const size = ref<string>(global.size)
</script>

<style></style>
