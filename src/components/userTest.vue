<template>
  <div class="p-2">
    <!-- reactive -->
    <el-alert style="margin-top: 10px" title="reactive"></el-alert>

    <div>obj-x:{{ obj.x }}</div>
    <div>obj-y-z:{{ obj.y.z }}</div>
    <div>{{ fullname }}</div>
    <el-button class="mt-3" type="primary" @click="changeObj"
      >更改reactive</el-button
    >
    <!-- computed -->
    <el-input
      style="width: 100px; margin-top: 10px; display: block"
      v-model="fullname2"
      placeholder="输入fullname2"
      clearable
    ></el-input>

    <!-- watch -->
    <el-input
      style="width: 100px; margin-top: 10px; display: block"
      v-model="fullName3"
      clearable
    ></el-input>

    <h2>x: {{ x }}, y: {{ y }}</h2>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  reactive,
  ref,
  watch
} from 'vue'
import HelloWorld from './HelloWorld.vue'
import useMousePosition from '../hooks/useMousePosition'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    const { x, y } = useMousePosition()

    const name = ref('1')
    // reactive
    const obj = reactive({
      x: 1,
      y: {
        z: 1
      }
    })

    const fullName3 = ref('')

    // computed 计算属性
    const fullname = computed(() => {
      console.log('object :>> ', 'fullname')
      return obj.x + '--' + obj.y.z
    })

    // get和set的计算属性
    const fullname2 = computed({
      get() {
        console.log('fullname2')
        return obj.x + '====' + obj.y.z
      },
      set(value: string) {
        console.log('fullname2 set')
      }
    })

    // watch
    watch(
      fullName3,
      (value) => {
        console.log('fullname 3 の', value)

        // fullName3.value = obj.x + 'の'
      },
      // 深度监视
      {
        immediate: true,
        deep: true
      }
    )

    // watch多个数据
    watch([() => obj.x, () => obj.y, fullName3], (values) => {
      console.log('监视多个对象,values是个数组 :>> ', values)
    })

    function getFn(content: string) {
      name.value = content + name.value
    }

    const changeObj = () => {
      obj.x += 1
      obj.y.z += 1
    }

    onBeforeMount(() => {
      console.log('--onBeforeMount')
    })

    onMounted(() => {
      console.log('--onMounted')
    })

    onBeforeUpdate(() => {
      console.log('--onBeforeUpdate')
    })

    onUpdated(() => {
      console.log('--onUpdated')
    })

    onBeforeUnmount(() => {
      console.log('--onBeforeUnmount')
    })

    onUnmounted(() => {
      console.log('--onUnmounted')
    })

    return {
      getFn,
      name,
      obj,
      changeObj,
      fullname,
      fullname2,
      fullName3,
      x,
      y
    }
  }
})
</script>

<style></style>
