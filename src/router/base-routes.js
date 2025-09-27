

const routes = [
  {
    path: "/",
    children: [],
    redirect:{
      name:"business"
    }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/common/NotFound.vue"),
  },
];
export default routes;