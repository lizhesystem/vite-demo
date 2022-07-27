import { Login } from '@/api/interface'
import http from '@/api'

/**
 * 登录接口
 * @param params
 */
export const loginApi = (params: Login.LoginParams) => {
  return http.post<Login.LoginAPI>('/authentication', params)
}

// * 导出系统日志
export const downLoadFile = () => {
  return http.get(`/file/downloadLocal`, {}, { responseType: 'blob' })
}
