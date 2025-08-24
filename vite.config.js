import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  publicDir: resolve(__dirname, "public"),
  build: {
    outDir: "dist",
  },
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: [
          "import",
          "mixed-decls",
          "color-functions",
          "global-builtin",
        ],
      },
    },
  },
});
