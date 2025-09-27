

const routes = [
  {
    path: "/",
    children: [],
  },
  {
    path:"/auth/login",
    name:'/login',
    component: () => import("../views/auth/login-page/index.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/common/NotFound.vue"),
  },
];
export default routes;