import type { Configuration as DevServerConfig } from "webpack-dev-server";
import type { BuildOptions } from "./types";
export const buildDevServer = (options: BuildOptions): DevServerConfig => {
  const {port, paths} = options
  return {
    port,
    static: paths.build,
    historyApiFallback: true
  };
};
