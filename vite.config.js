import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {port: 3000},
  build: {outDir: "build"},
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
        silenceDeprecations: ["import", "global-builtin", "color-functions"]
      }
    }
  },
  test: {
    environment: "jsdom",
    setupFiles: ["vitest-canvas-mock"]
  }
});
