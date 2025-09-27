import { createWebHashHistory, createRouter } from "vue-router";
import baseRoutes from './base-routes'
import { generateBusinessRoutesFromViews } from "./gen-routes";

const businessRoutes = generateBusinessRoutesFromViews();



const homeRoute = baseRoutes.find(r=>r.path==="/")
homeRoute.children.push(...businessRoutes);
homeRoute.redirect=businessRoutes[0]?.path


const router = createRouter({
  history: createWebHashHistory(),
  routes:baseRoutes,
});



console.log("Final Routes:", baseRoutes);
router.beforeEach((to, from, next) => {
  // console.log("Navigating from", from.fullPath, "to", to.fullPath);
  next();
});
export { router };
