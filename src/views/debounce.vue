<template>
  <div>debounce</div>
  <el-input v-model="keyword" placeholder="搜索关键字" size="mini" clearable></el-input>
  <p>{{ keyword }}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useDebounceRef from '../hooks/useDebounceRef'

export default defineComponent({
  setup() {
    const keyword = useDebounceRef('', 100)
    console.log(keyword)

    // todo
    return {
      keyword
    }
  }
})
</script>

<style lang="stylus" scoped></style>
