<template>
  <div>my home</div>
  <ModalButton></ModalButton>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ModalButton from '../components/modalButton.vue'

export default defineComponent({
  setup() {
    return {}
  },
  components: { ModalButton }
})
</script>

<style scoped></style>
