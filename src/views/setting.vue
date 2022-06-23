<template>
  <div>setting</div>
  <my-child message="msg"></my-child>
  <user-test></user-test>

	<div class="w-4 h-20  bg-green-500">

	</div>
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
