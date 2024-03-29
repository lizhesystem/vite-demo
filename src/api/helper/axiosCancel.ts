import axios, { AxiosRequestConfig, Canceler } from 'axios'
import qs from 'qs'
import { isFunction } from '@/utils/is'

// 用来存储每个请求
let pendingMap = new Map<string, Canceler>()

// 获取唯一Key
export const getPendingUrl = (config: AxiosRequestConfig) =>
  [config.method, config.url, qs.stringify(config.data), qs.stringify(config.params)].join('&')

export class AxiosCanceler {
  /**
   * 添加请求
   * @param config
   */
  addPending(config: AxiosRequestConfig) {
    this.removePending(config)
    const url = getPendingUrl(config)
    config.cancelToken =
      config.cancelToken ||
      new axios.CancelToken(cancel => {
        if (!pendingMap.has(url)) {
          pendingMap.set(url, cancel)
        }
      })
  }

  /**
   * 移除请求
   * @param config
   */
  removePending(config: AxiosRequestConfig) {
    const url = getPendingUrl(config)
    if (pendingMap.has(url)) {
      const cancel = pendingMap.get(url)
      cancel && cancel(url)
      pendingMap.delete(url)
    }
  }

  /**
   * 清空所有Pending
   */
  removeAllPending() {
    pendingMap.forEach(cancel => {
      cancel && isFunction(cancel) && cancel()
    })
    pendingMap.clear()
  }

  /**
   *  重置
   */
  reset(): void {
    pendingMap = new Map<string, Canceler>()
  }
}

