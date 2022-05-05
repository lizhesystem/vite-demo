<template>
  <layout />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import layout from './views/layout/index.vue'

export default defineComponent({
  components: {
    layout
  },
  name: 'App',
  setup() {}
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #fff;
}
</style>
