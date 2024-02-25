import {vitePlugin as remix} from "@remix-run/dev";
import {defineConfig} from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  ssr: {
    noExternal: ["mnlib_components"],
  },
  plugins: [remix(), tsconfigPaths()],
});
