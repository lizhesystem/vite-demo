import { defineStore } from 'pinia'
import { localGet } from '@/utils/util'
import * as types from './mutation-type'
import piniaPersist from '@/config/painaPersist'

export const GlobalStore = defineStore({
  // 必须ID,store中唯一
  id: 'GlobalState',
  // 返回对象的函数,定义的属性
  state: () => ({
    token: localGet(types.ACCESS_TOKEN),
    userInfo: localGet(types.USER_INFO)
  }),
  // getters: 计算属性
  getters: {},
  // actions: 修改状态（包括同步和异步，pinia中没有mutations）
  actions: {
    // set token
    setToken(token: string) {
      this.token = token
    },
    // set userInfo
    setUserInfo(userInfo: any) {
      this.userInfo = userInfo
    }
  },
  persist: piniaPersist('GlobalState')
})
