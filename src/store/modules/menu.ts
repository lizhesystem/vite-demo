import { defineStore } from 'pinia'
import piniaPersist from '@/config/painaPersist'

export const MenuStore = defineStore({
  id: 'MenuState',
  state: () => ({
    isCollapse: false
  }),
  getters: {},
  actions: {
    async setCollapse() {
      this.isCollapse = !this.isCollapse
    }
  },
  persist: piniaPersist('MenuState')
})