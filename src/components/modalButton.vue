<template>
  <div>teleport瞬移</div>
  <el-button type="primary" size="mini" @click="modalOpen = true">
    Open full screen model!
  </el-button>

  <teleport to="body">
    <div
      v-if="modalOpen"
      class="absolute flex flex-col justify-center items-center top-0 right-0 bottom-0 left-0 bg-black-rgba"
    >
      <div class="flex flex-col items-center justify-center bg-white w-80 h-80 p-1">
        i'm a teleported modal! (my parent is 'body')
        <el-button type="primary" size="mini" @click="modalOpen = false"> Close </el-button>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const modalOpen = ref(false)
    // todo
    return {
      modalOpen
    }
  }
})
</script>

<style lang="stylus" scoped></style>
