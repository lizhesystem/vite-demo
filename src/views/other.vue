<template>
  <div>other</div>
  <hello-world :msg="'aaa'"></hello-world>

  <h3>m1:{{ m1 }}</h3>
  <h3>m2:{{ m2 }}</h3>
  <h3>m3:{{ m3 }}</h3>
  <h3>m4:{{ m4 }}</h3>

  <el-button type="primary" size="default" @click="update">更新</el-button>

  <!-- 测试toRaw -->
  <div class="mt-1"></div>
  <h3>{{ state }}</h3>
  <el-button type="primary" size="default" @click="testToRaw">测试toRaw</el-button>
  <el-button type="primary" size="default" @click="testMarkRaw">测试MarkRaw</el-button>

  <!-- 测试toRef -->
  <h3>toRef</h3>
  <h3>{{ state1 }}</h3>
  <h3>{{ foo }}</h3>
  <h3>{{ foo2 }}</h3>
  <el-button type="primary" size="default" @click="testToRef">测试tpRef</el-button>
</template>

<script lang="ts">
import {
  defineComponent,
  markRaw,
  reactive,
  ref,
  shallowReactive,
  shallowRef,
  toRaw,
  toRef,
  toRefs
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

    // 测试toRaw
    const state = reactive<any>({
      name: 'tom',
      age: 20
    })

    const testToRaw = () => {
      const user = toRaw(state)
      user.age++ // 界面不会更新
    }

    const testMarkRaw = () => {
      const likes = ['a', 'b']
      // state.likes = likes
      state.likes = markRaw(likes) // likes就不是响应式的了
      setTimeout(() => {
        state.likes[0] += '---'
      }, 2000)
    }

    // 测试toRef
    const state1 = {
      foo: 1,
      bar: 2
    }
    // const foo = toRef(state1, 'foo')
    const foo = toRefs(state1)
    const foo2 = ref(state1.foo)
    const testToRef = () => {
      // state1.foo++
      // foo.value++
      // foo.bar += 1
    }

    return {
      m1,
      m2,
      m3,
      m4,
      update,
      state,
      testToRaw,
      testMarkRaw,
      foo,
      foo2,
      state1,
      testToRef
    }
  }
})
</script>

<style scoped></style>
