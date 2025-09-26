import { OpenAPI } from "./swagger-apis/core/OpenAPI";

const initSwaggerApis = () => {
  // 设置静态 token
  OpenAPI.TOKEN = `
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjIyMzY0MTE1NzU0NTY1LCJBY2NvdW50IjoibGl1a2FpIiwianRpIjoyMjYxNTM3NjU0MTYzNywiaWF0IjoxNzU4ODQ3ODMxLCJuYmYiOjE3NTg4NDc4MzEsImV4cCI6MTc1OTAyMDYzMSwiaXNzIjoi562-5Y-R5pa5IiwiYXVkIjoi562-5pS25pa5In0.pevUKjELc71PnPBoIYn-j210KignbIFpI-V9RZ25ZYQ
`.trim();
};

initSwaggerApis();
