<template>
	<el-icon class="collapse-icon" @click="menuStore.setCollapse()">
		<component :is="isCollapse ? 'expand' : 'fold'"></component>
	</el-icon>
</template>

<script setup lang="ts">
import {MenuStore} from "@/store/modules/menu";
import {computed} from "vue";

const menuStore = MenuStore()
const isCollapse = computed((): boolean => menuStore.isCollapse)
</script>

<style scoped lang="scss"></style>
