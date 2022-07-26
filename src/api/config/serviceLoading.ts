import { ElLoading } from 'element-plus'

// 使用 ReturnType<T> 高级类型来获取一个函数返回值的类型：
let loadingInstance: ReturnType<typeof ElLoading.service>

const startLoading = () => {
  loadingInstance = ElLoading.service({
    fullscreen: true,
    lock: true,
    text: 'Loading',
    background: 'rgba(0,0,0,0.5)'
  })
}

const endLoading = () => {
  loadingInstance.close()
}
// showFullScreenLoading()、tryHideFullScreenLoading() 要干的事儿就是将同一时刻的请求合并。
// 声明一个变量 needLoadingRequestCount，每次调用showFullScreenLoading方法 needLoadingRequestCount + 1。
// 调用tryHideFullScreenLoading()方法，needLoadingRequestCount - 1。needLoadingRequestCount为 0 时，结束 loading。

let needLoadingRequestCount = 0
export const showFullScreenLoading = () => {
  if (needLoadingRequestCount === 0) {
    startLoading()
  }
  needLoadingRequestCount++
}

export const tryHideFullScreenLoading = () => {
  if (needLoadingRequestCount <= 0) return
  needLoadingRequestCount--
  if (needLoadingRequestCount === 0) {
    endLoading()
  }
}
