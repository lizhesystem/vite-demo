<template>
  <el-dialog v-model="dialogVisible" title="个人资料" width="30%">
    <span>this is message</span>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const dialogVisible = ref(false)

const openDialog = () => {
  dialogVisible.value = true
}
defineExpose({
	openDialog
})
</script>

<style scoped lang="scss"></style>
