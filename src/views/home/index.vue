<template>
  <div class="flex w-full h-full">
    <img class="h-96" src="@/assets/images/welcome.png" alt="welcome" />
  </div>
</template>

<script setup lang="ts">
import { GlobalStore } from '@/store'

const store = GlobalStore()

interface Props<T> {
  username: T
}

const data: Props<string> = {
  username: 'string123'
}

interface PropsSay {
	say<T>(value: T): T;
}

interface PropsNumber<T, U> {
	(a: T, b: U): number;
}

console.log(data.username)
console.log(store.token)
</script>

<style scoped lang="scss"></style>
