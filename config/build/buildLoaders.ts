import { ModuleOptions } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import { BuildOptions } from "./types/types";

export function buildLoaders(options: BuildOptions): ModuleOptions["rules"] {
  const isDev = options.mode === "development";

  const assetLoader = {
    // svg shouldn't be here since we have svg loader
    test: /\.(png|jpg|jpeg)$/i,
    type: "asset/resource",
  };

  const svgrLoader = {
    test: /\.(svg)$/i,
    use: [{ loader: "@svgr/webpack", options: { icon: true } }],
  };

  const cssLoaderWithModules = {
    loader: "css-loader",
    options: {
      modules: {
        localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]",
      },
    },
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // creates 'style' nodes from JS strings
      MiniCssExtractPlugin.loader,
      // transpiles CSS into CommonJS
      cssLoaderWithModules,
      // compiles SASS to CSS
      "sass-loader",
    ],
  };

  const tsLoader = {
    // ts-loader can work with JSX
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [assetLoader, scssLoader, tsLoader, svgrLoader];
}
