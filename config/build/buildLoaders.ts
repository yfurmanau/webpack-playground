import { ModuleOptions } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import { BuildOptions } from "./types/types";
import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";

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
    exclude: /node_modules/,
    test: /\.tsx?$/,
    use: [
      {
        loader: "ts-loader",
        options: {
          // ts is not checked while creating a bundle
          // that reduces bundle creation
          transpileOnly: true,
        },
      },
    ],
  };

  const babelLoader = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: [
          "@babel/preset-env",
          "@babel/preset-typescript",
          [
            "@babel/preset-react",
            {
              runtime: isDev ? "automatic" : "classic",
            },
          ],
        ],
      },
    },
  };

  return [
    assetLoader,
    scssLoader,
    tsLoader,
    // babelLoader,
    svgrLoader,
  ];
}
