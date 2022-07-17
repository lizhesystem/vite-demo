import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { GlobalStore } from '@/store'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import { checkStatus } from '@/api/util/checkStatus'
import { ResultData } from '@/api/interface'

const globalStore = GlobalStore()
const router = useRouter()

const config = {
  // 可以这样取环境变量
  baseURL: import.meta.env.VITE_BASE_API as string,
  timeout: 10000,
  // 跨域时候允许携带凭证
  withCredentials: true
}

class RequestHttp {
  service: AxiosInstance

  constructor(config: AxiosRequestConfig) {
    this.service = axios.create(config)

    /**
     * 请求 request 拦截器
     */
    this.service.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        const token: string = globalStore.token
        return { ...config, headers: { 'access-token': token } }
      },
      (error: AxiosError) => {
        return Promise.reject(error)
      }
    )

    /**
     * 请求 response 拦截器
     */
    this.service.interceptors.response.use(
      (response: AxiosResponse) => {
        const { data } = response
        if (data.code === 200) {
          return data
        } else {
          ElMessage.error(data.message)
          return Promise.reject(data)
        }
      },
      async (error: AxiosError) => {
        const { response } = error
        console.log(response)
        if (response) checkStatus(response.status)
        if (!window.navigator.onLine) return router.replace({ path: '/500' })
        return Promise.reject(error)
      }
    )
  }

  get<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.service.get(url, { ...params, ..._object })
  }

  post<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.service.post(url, { ...params, ..._object })
  }

  // put<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
  //   return this.service.put(url, { params, ..._object })
  // }
  //
  // delete<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
  //   return this.service.delete(url, { params, ..._object })
  // }
}

export default new RequestHttp(config)
