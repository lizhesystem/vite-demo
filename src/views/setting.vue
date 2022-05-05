<template>
  <div>setting</div>
  <my-child message="msg"></my-child>
  <user-test></user-test>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import myChild from '../components/myChild.vue'
import UserTest from '../components/userTest.vue'

export default defineComponent({
  components: { myChild, UserTest },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
