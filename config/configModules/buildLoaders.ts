import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "../types/config";

export const buidLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
  const { isDev } = options;
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const sassLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: /\.module\.\w+$/i,
            localIdentName: "[path][name]__[local]--[hash:base64:5]"
          },
        },
      },
      "sass-loader",
    ]
  };

  return [typescriptLoader,  sassLoader];
};
