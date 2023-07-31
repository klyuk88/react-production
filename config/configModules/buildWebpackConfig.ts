import {
  buidLoaders,
  buildPlugins,
  buildResolvers,
  buildDevServer,
} from "../configModules";
import type { BuildOptions } from "../types/config";
import webpack from "webpack";

export const buildWebpackConfig = (
  options: BuildOptions
): webpack.Configuration => {
  const { mode, paths, isDev } = options;
  return {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    module: {
      rules: buidLoaders(),
    },
    resolve: buildResolvers(),
    plugins: buildPlugins(options),
    devServer: isDev ? buildDevServer(options) : undefined,
    devtool: isDev ? "inline-source-map" : undefined,
  };
};
