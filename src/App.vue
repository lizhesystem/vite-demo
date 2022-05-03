<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <div>我是火狐</div>
  <child/>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Child from "./components/child.vue";
import HelloWorld from "./components/HelloWorld.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
    Child,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
