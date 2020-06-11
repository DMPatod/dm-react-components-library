import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import nodeResolve from "rollup-plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { uglify } from "rollup-plugin-uglify";

import packageJSON from "./package.json";
const minifyExtension = (pathToFile) => pathToFile.replace(/\.js$/, ".min.js");

export default [
  {
    input: "src/index.js",
    output: {
      file: packageJSON.main,
      format: "cjs",
    },
    plugins: [
      babel({
        exclude: "node_modules/**",
      }),
      peerDepsExternal(),
      nodeResolve(),
      commonjs(),
    ],
  },
  {
    input: "src/index.js",
    output: {
      file: minifyExtension(packageJSON.main),
      format: "cjs",
    },
    plugins: [
      babel({
        exclude: "node_modules/**",
      }),
      peerDepsExternal(),
      nodeResolve(),
      commonjs(),
      uglify(),
    ],
  },
];
