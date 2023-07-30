import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import path from 'path';
import {BuildOptions} from "../types/config"

export const buildPlugins = (options: BuildOptions): webpack.WebpackPluginInstance[] => {
  const {mode, paths} = options
  return [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: paths.html
    })
  ]
}