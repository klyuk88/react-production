import webpack from "webpack";
import path from "path";
import { buildWebpackConfig } from "./config/configModules";
import type { BuildPaths, BuildMode, BuildEnv } from "./config/types/config";

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    public: path.resolve(__dirname, "public"),
    html: path.resolve(__dirname, "public", "index.html"),

  };

  const mode: BuildMode = env.mode || "development";
  const isDev = mode === "development";
  const port = env.port || 3000;

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port,
  });
  return config;
};
