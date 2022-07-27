import {reactive, ref} from "vue";

export const useTable = (apiUrl?: any) => {
	const tableData = ref([])
	const isPageable = ref(true)
	const hasSearched = ref<boolean>(false)
	const pageable = reactive({

	})
}
