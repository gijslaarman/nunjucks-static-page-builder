import alias from "@rollup/plugin-alias";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";

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
  ],
};

export default config;