import { useAppLayoutStore } from "@/stores/app-layout";


const routerBeforeHandle = async (to, from) => {
  // 根据路由设置layout的hideHeader和hideSidebar
  const appLayoutStore = useAppLayoutStore();
  appLayoutStore.changeLayoutByRoute(to);




  console.log('routerBeforeHandle', to, from)
};







const useGuard = (router) => {
  router.beforeEach(routerBeforeHandle);
};

export { useGuard };
