import {buidLoaders, buildPlugins, buildResolvers} from "../configModules"
import type {BuildOptions} from "../types/config"
import webpack from "webpack";

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
  const {mode, paths} = options
  return {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    module: {
      rules: buidLoaders()
    },
    resolve: buildResolvers(),
    plugins: buildPlugins(options)
  };
}