import { defineStore } from 'pinia'
import piniaPersist from '@/config/painaPersist'
import router from '@/router/router'
import { TabsState } from '@/store/interface'
import { HOME_URL, TABS_WHITE_LIST } from '@/config/config'

export const TabsStore = defineStore({
  id: 'TabsState',
  state: (): TabsState => ({
    tabsMenuValue: HOME_URL,
    tabsMenuList: [{ title: '首页', path: HOME_URL, icon: 'home-filled', close: false }]
  }),
  getters: {},
  actions: {
    /**
     * 新增tab
     * @param tabItem
     */
    async addTabs(tabItem: Menu.MenuOptions) {
      if (TABS_WHITE_LIST.includes(tabItem.path)) return
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
    /**
     * 删除tab
     * @param tabPath
     */
    async removeTabs(tabPath: string) {
      if (this.tabsMenuValue === tabPath) {
        this.tabsMenuList.forEach((item, index) => {
          if (item.path === tabPath) {
            const nextTab = this.tabsMenuList[index + 1] || this.tabsMenuList[index - 1]
            if (nextTab) {
              this.tabsMenuValue = nextTab.path
              router.push(nextTab.path)
            }
          }
        })
        this.tabsMenuList = this.tabsMenuList.filter(item => item.path !== tabPath)
      }
    },
    async setTabsMenuValue(tabsMenuValue: string) {
      this.tabsMenuValue = tabsMenuValue
    },
    async changeTabs(tabPath: string) {
      this.tabsMenuList.forEach(item => {
        if (item.path === tabPath) router.push(item.path)
      })
    },
    async setTabsMenuList(tabMenuList: Menu.MenuOptions[]) {
      this.tabsMenuList = tabMenuList
    },
    async closeMultipleTab(tabsMenuValue?: string) {
      this.tabsMenuList = this.tabsMenuList.filter(item => {
        return item.path === tabsMenuValue || item.path === HOME_URL
      })
    },
    async goHome() {
      await router.push(HOME_URL)
      this.tabsMenuValue = HOME_URL
    }
  },
  persist: piniaPersist('TabsStore')
})
