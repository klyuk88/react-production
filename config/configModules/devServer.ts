import type { Configuration as DevServerConfig } from "webpack-dev-server";
import type { BuildOptions } from "../types/config";
export const buildDevServer = (options: BuildOptions): DevServerConfig => {
  return {
    port: options.port,
    static: options.paths.build,
    open: true,
  };
};
