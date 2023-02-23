import { defineConfig } from "vite";
// for module ES6 import -> https://github.com/Subwaytime/vite-aliases/issues/33#issuecomment-1284408867
import { resolve } from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // for Docker + HMR -> https://github.com/Subwaytime/vite-aliases/issues/33#issuecomment-1424061997
  server: {
    host: true,
    strictPort: true,
    port: 5000,
    watch: {
      usePolling: true,
    },
  },
  assetsInclude: ["**/*.pdf"],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/variables.scss";',
      },
    },
  },
  resolve: {
    alias: {
      "~bootstrap": resolve(__dirname, "node_modules/bootstrap"),
      "@": resolve(__dirname, "src"),
    },
  },
});
