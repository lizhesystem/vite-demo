<template>
  <el-config-provider :locale="zhCn" :button="config" :size="size">
    <router-view></router-view>
  </el-config-provider>
</template>

<script setup lang="ts">
// 配置element中英文
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import { reactive, ref } from 'vue'

const config = reactive({
  autoInsertSpace: false
})
// 配置全局组件大小
const size = ref<string>('large')
</script>

<style></style>
