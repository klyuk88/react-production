import webpack from "webpack";
export const buidLoaders = (): webpack.RuleSetRule[] => {
  const typescriptLoader =  {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  return [typescriptLoader]
}
