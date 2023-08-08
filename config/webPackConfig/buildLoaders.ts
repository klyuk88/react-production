import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types";

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
            auto: true,
            localIdentName: isDev ? "[local]--[hash:base64:8]" : "[hash:base64:8]"
          },
        },
      },
      {
        loader: "postcss-loader",
        options: {
          postcssOptions: {
            plugins: [
              [
                "postcss-preset-env",
                "autoprefixer",
              ],
            ],
          },
        },
      },
    ]
  };

  return [typescriptLoader,  sassLoader];
};