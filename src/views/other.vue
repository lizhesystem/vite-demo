<template>
  <div>other</div>
  <hello-world :msg="'aaa'"></hello-world>

  <h3>m1:{{ m1 }}</h3>
  <h3>m2:{{ m2 }}</h3>
  <h3>m3:{{ m3 }}</h3>
  <h3>m4:{{ m4 }}</h3>

  <el-button type="primary" size="default" @click="update">更新</el-button>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  ref,
  shallowReactive,
  shallowRef
} from 'vue'
import HelloWorld from '../components/HelloWorld.vue'

export default defineComponent({
  components: { HelloWorld },
  setup() {
    const m1 = reactive({
      a: 1,
      b: { c: 2 }
    })

    const m2 = shallowReactive({
      a: 1,
      b: { c: 2 }
    })

    const m3 = ref({ a: 1, b: { c: 2 } })
    const m4 = shallowRef({
      a: 1,
      b: { c: 2 }
    })

    const update = () => {
      m2.a += 1
    }
    return {
      m1,
      m2,
      m3,
      m4,
      update
    }
  }
})
</script>

<style scoped></style>
