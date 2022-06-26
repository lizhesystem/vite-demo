import axios from 'axios'
import {ref} from 'vue'

export default function useRequest<T>(url: string) {
	// 使用axios发送异步ajax请求
	const result = ref<T | null>(null)
	const loading = ref(true)
	const errorMsg = ref(null)

	axios
		.get(url)
		.then((response) => {
			loading.value = false
			result.value = response.data
			console.log('执行了！')
		})
		.catch((error) => {
			loading.value = false
			errorMsg.value = error.message || '未知错误'
		})

	return {result, loading, errorMsg}
}
