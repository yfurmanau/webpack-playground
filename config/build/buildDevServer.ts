import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

import { BuildOptions } from "./types/types";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port ?? 3000,
    open: false,
    // to make router work only with dev server
    // if you want to expose static files through nginx
    // you need to proxy index.html
    historyApiFallback: true,
    hot: true,
  };
}
