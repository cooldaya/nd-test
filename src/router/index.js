import { createWebHashHistory, createRouter } from "vue-router";
import { generateRoutesFromViews } from "./gen-routes";

const routes = generateRoutesFromViews();

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

console.log("Final Routes:", routes,router);
router.beforeEach((to, from, next) => {
  console.log("Navigating from", from.fullPath, "to", to.fullPath);
  next();
});
export { router };
