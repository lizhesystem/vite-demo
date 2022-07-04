<template>
  <div class="header">
    <div class="header-left">
      <el-icon class="collapse-icon" @click="menuStore.setCollapse()">
        <component :is="isCollapse ? 'expand' : 'fold'"></component>
      </el-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import {MenuStore} from '@/store/modules/menu'

const menuStore = MenuStore()
const isCollapse = computed((): boolean => menuStore.isCollapse)
</script>

<style scoped lang="scss">
.header{
	border-bottom: 1px solid #f6f6f6;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 15px;
	height: 55px;
	.collapse-icon{
		font-size: 22px;
		cursor: pointer;
	}
}
</style>
