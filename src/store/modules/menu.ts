import { defineStore } from 'pinia'
import piniaPersist from '@/config/painaPersist'
import {MenuState} from "@/store/interface";

export const MenuStore = defineStore({
  id: 'MenuState',
  state: (): MenuState => ({
    isCollapse: false,
    menuList: []
  }),
  getters: {},
  actions: {
    async setCollapse() {
      this.isCollapse = !this.isCollapse
    },
    async setMenuList(menuList: Menu.MenuOptions[]) {
      this.menuList = menuList
    }
  },
  persist: piniaPersist('MenuState')
})
