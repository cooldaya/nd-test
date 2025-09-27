import { createWebHashHistory, createRouter } from "vue-router";
import baseRoutes from './base-routes'
import { generateBusinessRoutesFromViews } from "./gen-routes";
import {useGuard} from './guards'

const businessRoutes = generateBusinessRoutesFromViews();



const homeRoute = baseRoutes.find(r=>r.path==="/")
homeRoute.children.push(...businessRoutes);

const router = createRouter({
  history: createWebHashHistory(),
  routes:baseRoutes,
});



console.log("Final Routes:", baseRoutes);

useGuard(router)
export { router };
