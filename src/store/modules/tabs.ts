import { defineStore } from 'pinia'
import piniaPersist from '@/config/painaPersist'
import router from '@/route/router'

interface TabsState {
  tabsMenuValue: string
  tabsMenuList: Menu.MenuOptions[]
}

export const TabsStore = defineStore({
  id: 'TabsState',
  state: (): TabsState => ({
    tabsMenuValue: '/home',
    tabsMenuList: [{ title: '首页', path: '/home', icon: 'home-filled', close: false }]
  }),
  getters: {},
  actions: {
    async addTabs(tabItem: Menu.MenuOptions) {
      let whiteList = ['/403', '/404', '/500', '/layout', '/login']
      if (whiteList.includes(tabItem.path)) return
      const tabInfo: Menu.MenuOptions = {
        title: tabItem.title,
        path: tabItem.path,
        close: tabItem.close
      }
      let flag = false
      this.tabsMenuList.forEach(item => {
        if (item.title === tabItem.title) flag = true
      })
      if (flag) {
        await router.push(tabItem.path)
        await this.setTabsMenuValue(tabItem.path)
      } else {
        // TODO 这里没有做深度拷贝,不知道有问题没
        // const newTabsMenuList = deepCopy<Menu.MenuOptions[]>(this.tabsMenuList);
        // newTabsMenuList.push(tabInfo);
        this.tabsMenuList.push(tabInfo)
        this.tabsMenuValue = tabItem.path
        await router.push(tabItem.path)
      }
      flag = false
    },
    // 删除tab
    async removeTabs(tabPath: string) {
      if (this.tabsMenuValue === tabPath) {
        this.tabsMenuList.forEach((item, index) => {
          if (item.path === tabPath) {
            const nextTab = this.tabsMenuList[index + 1] || this.tabsMenuList[index - 1]
            if (nextTab) {
              // this.tabsMenuValue = nextTab
              // router.push(nextTab.path)
            }
          }
        })
      }
    },
    async setTabsMenuValue(tabPath: string) {
      this.tabsMenuValue = tabPath
    }
  },
  persist: piniaPersist('TabsStore')
})
