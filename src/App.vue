<template>
  <div class="p-2">
    <hello-world msg="aaa"> </hello-world>
    <my-child @fn="getFn"></my-child>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import myChild from './components/myChild.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    myChild
  },
  setup() {
    const name = ref('1')
    function getFn(content: string) {
      name.value = content + name.value
    }
    return {
      getFn,
      name
    }
  }
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
