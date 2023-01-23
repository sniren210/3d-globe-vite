import { defineConfig } from "vite";
export default defineConfig({
  base: "/3d-globe-vite/",
  //   resolve: {
  //     alias: {
  //       "~": path.resolve(__dirname, "node_modules"),
  //       "@": path.resolve(__dirname, "src"),
  //     },
  //   },
  build: {
    chunkSizeWarningLimit: 1600,
  },
});
