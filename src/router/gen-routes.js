function generateRoutesFromViews() {
  const routes = [];
  // 查找所有的 Vue 组件
  const vueModules = import.meta.glob("../views/**/*-page/index.vue");
  // 查找所有的路由配置文件
  const routeConfigModules = import.meta.glob("../views/**/*-page/route.js", {
    eager: true,
  });

  console.log({
    vueModules,
    routeConfigModules,
  });

  // 用于构建路由树的辅助Map
  const routeMap = new Map();

  const replaceExg = /(\.\.\/views|\/index\.vue)/g;

  for (const vuePath in vueModules) {
    // 处理路径 '../views/auth/login/index.vue' -> '/auth/login'

    const pathArray = vuePath
      .replaceAll(replaceExg, "")
      .split("/")
      .filter(Boolean);

    pathArray.slice(0, -1).forEach((pathItem, index) => {
      const parentPath = "/" + pathArray.slice(0, index + 1).join("/");
      if (!routeMap.has(parentPath)) {
        routeMap.set(parentPath, {
          name: pathItem,
          path: "/" + pathItem,
          children: [],
        });
      }
    });

    // route配置
    const routeConfigPath = vuePath.replace("/index.vue", "/route.js");
    const routeConfig = routeConfigModules[routeConfigPath]?.default || {};

    // 生成路由名称和路径
    const routeName = pathArray.at(-1).toLocaleLowerCase();
    const routePath = "/" + pathArray.join("/");

    // 基础路由配置
    const route = {
      ...routeConfig,
      path: "/" + routeName,
      name: routeName,
      component: () => vueModules[vuePath](),
      children: [],
    };

    // 将路由添加到正确的父级路由下
    // const parentPath = pathArray.slice(0, -1).join("/");
    // const parentRoute = routeMap.get(parentPath);
    // if (parentRoute) {
    //   parentRoute.children.push(route);
    // }

    // 将当前路由添加到路由Map中
    routeMap.set(routePath, route);
  }

  // 可以根据权限做过滤
  routeMap.delete("/auth");

  for (const [routePath, route] of routeMap) {

    if (routePath.split("/").length === 2) {
      routes.push(route);
      continue;
    }
    const parentPath = routePath.split("/").slice(0, -1).join("/");
    const parentRoute = routeMap.get(parentPath);
    if (parentRoute) {
      parentRoute.children.push(route);
    }
  }
  return routes;
}

export { generateRoutesFromViews };
