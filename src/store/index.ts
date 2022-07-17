import { defineStore } from 'pinia'
import piniaPersist from '@/config/painaPersist'
import { GlobalState } from '@/store/interface'

export const GlobalStore = defineStore({
  id: 'GlobalState',
  state: (): GlobalState => ({
    token: '',
    userInfo: '',
    size: 'default'
  }),
  getters: {},
  actions: {
    // set token
    setToken(token: string) {
      this.token = token
    },
    // set userInfo
    setUserInfo(userInfo: any) {
      this.userInfo = userInfo
    },
    setSize(size: string) {
      this.size = size
    }
  },
  persist: piniaPersist('GlobalState')
})
