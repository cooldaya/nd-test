import { defineStore } from 'pinia'

export const useAppLayoutStore = defineStore('app-layout', {
  state: () => ({
    hideHeader: false,
    hideSidebar: false,
  }),
  actions: {
    // 根据路由设置layout的hideHeader和hideSidebar
    changeLayoutByRoute(route) {
      let isSetHeader = false;
      let isSetSidebar = false;
      for (let index = route.matched.length - 1; index >= 0; index--) {
        if (isSetHeader && isSetSidebar) break; // 都设置了，就break
        const currentRoute = route.matched[index];
        if (!isSetHeader && [true, false].includes(currentRoute?.meta?.hideHeader)) { // 没设置过，且当前路由有设置
          this.hideHeader = currentRoute?.meta?.hideHeader
          isSetHeader = true
        }
        if (!isSetSidebar && [true, false].includes(currentRoute?.meta?.hideSidebar)) { // 没设置过，且当前路由有设置
          this.hideSidebar = currentRoute?.meta?.hideSidebar
          isSetSidebar = true
        }
      }
      // 如果所有层级都没有配置，则默认显示
      if (!isSetHeader) {
        this.hideHeader = false
      }
      if (!isSetSidebar) {
        this.hideSidebar = false
      }
    }
  },
})