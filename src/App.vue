<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div>我是火狐</div>
  <div class="box">
    {{ age }}
  </div>
  <hello-world></hello-world>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
  setup(props) {
    const age: number = ref(2222);
    return age;
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
