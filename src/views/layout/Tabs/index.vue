<template>
  <div class="tabs-box">
    <div class="tabs-menu">
      <el-tabs v-model="tabsMenuValue" type="card" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="User" name="first">User</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">

const tabsStore = tabs

</script>

<style scoped></style>
