import { createMemoryHistory, createRouter } from "vue-router";
import { generateRoutesFromViews } from "./gen-routes";

const routes = generateRoutesFromViews();

console.log(routes)

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});


