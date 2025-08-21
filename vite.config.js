import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  base: "/dashboard/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },

    css: {
      devSourcemap: true,
    },
  },
});
