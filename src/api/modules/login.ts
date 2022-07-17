import {LoginAPI, LoginParams} from "@/api/interface";
import http from '@/api'

/**
 * 登录接口
 * @param params
 */
export const loginApi = (params:LoginParams) =>{
	return http.post('/authentication',params)
}
