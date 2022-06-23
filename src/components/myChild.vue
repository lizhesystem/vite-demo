<template>
	<button
		class="mt-2 rounded-md bg-fuchsia-300 public-border p-2 h-10 flex items-center justify-center hover:border-cyan-100"
		@click="sonUpdate"
	>
		<span>子组件的button</span>
	</button>

	<!-- 获取接口数据 -->
	<el-button style="margin-top: 10px" :icon="Search" type="primary"
	>获取接口数据
	</el-button
	>
	<div>list:{{ result && result.title }}</div>

	<input type="text" ref="inputRef"/>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue'
import {Search} from '@element-plus/icons-vue'
import useRequest from '../hooks/useRequest'

// 地址数据接口
interface AddressResult {
	id: string
	name: string
	distance: string
}

// 产品数据接口
interface ProductResult {
	id: string
	title: string
	price: number
}
;``
export default defineComponent({
	name: 'myChild',
	props: {
		message: {
			type: String,
			required: true
		}
	},
	emits: ['fn'],
	setup(props, {attrs, emit, slots}) {
		function sonUpdate() {
			emit('fn', '++')
		}

		// 获取dom让输入框自动获取焦点
		const inputRef = ref<HTMLElement | null>(null)
		onMounted(() => {
			inputRef.value && inputRef.value.focus()
		})
		// 模拟获取接口
		const {loading, result, errorMsg} =
			useRequest<ProductResult>('/static/data.json')

		// watch(result, () => {
		//   if (result.value) {
		//     console.log(result.value) // 有提示
		//     // console.log(loading.value)
		//     ElNotification({
		//       title: 'Success',
		//       message: `请求数据为${result.value.title}`,
		//       type: 'success'
		//     })
		//   }
		// })

		return {
			Search,
			sonUpdate,
			result,
			inputRef
		}
	}
})
</script>

<style></style>
