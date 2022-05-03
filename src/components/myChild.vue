<template>
  <div class="cls"></div>
  <button
    class="mt-2 rounded-md bg-fuchsia-300 public-border p-2 h-10 flex items-center justify-center hover:border-cyan-100"
    @click="sonUpdate"
  >
    <span>子组件的button</span>
  </button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'myChild',
  props: ['message'],
  emits: ['fn'],
  setup(props, { attrs, emit, slots }) {
    console.log('object :>> ', this)
    function sonUpdate() {
      emit('fn', '++')
    }
    return {
      sonUpdate
    }
  }
})
</script>

<style>
.public-border {
  @apply border-2 border-gray-900 rounded-md;
}
</style>
