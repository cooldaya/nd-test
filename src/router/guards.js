const routerBeforeHandle =async (to, from) => {
    console.log(to,from)


};







const useGuard = (router) => {
  router.beforeEach(routerBeforeHandle);
};

export { useGuard };
