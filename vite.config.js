import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@apis": path.resolve(__dirname, "src/apis"),
    },
  },
  server: {
    proxy: {
      "/netcore": {
        target: "http://122.9.157.65:9600",
        changeOrigin: true,
      },
    },
    watch:{
      ignored:['**/src/apis/swagger-apis/**']
    }
    
  },
});
