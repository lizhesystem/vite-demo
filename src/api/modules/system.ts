import http from '@/api'
import { Page, sysDict } from '@/api/interface'

/**
 * 系统管理模块
 * @param params
 */

interface dictParams {
  groupName: string
  groupCode: string
  itemDesc: string
}

// 获取字段列表
export const getDict = (params: dictParams) => {
  return http.post<Page<sysDict>>('/sysdict/query/page', params)
}
