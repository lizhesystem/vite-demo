import {LoginAPI, LoginParams} from "@/api/interface";
import http from '@/api'

/**
 * 登录接口
 * @param params
 */
export const loginApi = (params:LoginParams) =>{
	return http.post<LoginAPI>('/authentication',params)
}

// * 导出系统日志
export const downLoadFile = () => {
	return http.get(`/file/downloadLocal`, {}, { responseType: "blob" });
};
