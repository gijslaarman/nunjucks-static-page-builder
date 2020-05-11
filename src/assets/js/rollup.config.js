import alias from "@rollup/plugin-alias";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser"

const config = {
  input: "src/assets/js/index.js",
  output: [
    {
      file: "dist/main.js",
      format: "cjs",
    },
  ],
  plugins: [
    resolve(),
    babel(),
    alias({
      entries: [{ find: "@components", replacement: "../../components" }],
    }),
    terser()
  ],
};

export default config;