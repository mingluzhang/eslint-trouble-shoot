/// <reference path="../node_modules/@types/node/index.d.ts"/>

// This config is extended from webpack.common.config.js. We use it for development with webpack-dev-server and autoreload/refresh
const webpackUtility = require("./webpack.utility");
const appPath = webpackUtility.appPath;
const appCorePath = webpackUtility.appCorePath;
const webpack = require("webpack");
const path = require("path");
const commonConfig = require("./webpack.common.config");
const intlPolyfillConfig = require("./webpack.intl.config");
const merge = require("webpack-merge");

const devConfigExtension = env => {
  return {
    output: {
      filename: "[name].js",
      path: path.join(appPath, "dist")
    },

    resolve: {
      alias: {
        "react-dom$": "@hot-loader/react-dom"
      }
    },

    // use "eval" for faster incremental builds (code is transformed into js, so no direct ts debugging)
    // more options here: http://webpack.github.io/docs/configuration.html#devtool
    devtool: "eval-source-map",

    watch: true,

    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          include: [appPath, appCorePath],
          use: [
            {
              loader: "babel-loader",
              options: {
                babelrc: false,
                plugins: ["react-hot-loader/babel"],
              },
            },
            {
              loader: "awesome-typescript-loader",
              options: {
                configFileName: path.join(appPath, "tsconfig.json"),
                silent: true,
                useCache: true
              }
            }
          ]
        },
      ]
    },

    plugins: [
      // Used for hot-reload
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new webpack.DefinePlugin({
        DEBUG: true,
        UNITTEST: false
      })
    ]
  };
};

module.exports = [
  env => {
    return merge(commonConfig(env), devConfigExtension(env));
  },
  intlPolyfillConfig
]
