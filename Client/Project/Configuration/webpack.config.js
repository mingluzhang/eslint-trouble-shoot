/// <reference path="../node_modules/@types/node/index.d.ts"/>

const webpackUtility = require("./webpack.utility");
const webpack = webpackUtility.webpack;
const appPath = webpackUtility.appPath;
const appCorePath = webpackUtility.appCorePath;
const path = require("path");
const commonConfig = require("./webpack.common.config");
const intlPolyfillConfig = require("./webpack.intl.config");
const merge = require("webpack-merge");
const TerserPlugin = require("terser-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const prodConfigExtension = env => {
  return {
    output: {
      // This is only used if running "webpack" directly on cmd line.
      path: path.join(appPath, "AppRead"),
      filename: "[name]_[chunkhash:8].js"
    },

    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          include: [appPath],
          use: [
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
        {
          test: /\.(jpe?g|png|svg|gif)$/,
          include: [appPath],
          exclude: [path.join(appCorePath, "Images", "Static")],
          use: [
            {
              loader: "file-loader",
              options: {
                esModule: false,
                name: "[name].[ext]"
              }
            }
          ]
        },
        {
          test: /\.(jpe?g|png|svg|gif)$/,
          include: [path.join(appCorePath, "Images", "Static")],
          use: [
            {
              loader: "file-loader",
              options: {
                esModule: false,
                name: "[name].[ext]"
              }
            }
          ]
        }
      ]
    },

    optimization: {
      minimizer: [
        new TerserPlugin({
          test: /^pulseprereqs.*\.js$/,
          terserOptions: {
            output: {
              wrap_iife: true
            }
          }
        }),
        new TerserPlugin({
          exclude: /^pulseprereqs.*\.js$/,
          sourceMap: true,
          terserOptions: {
            keep_fnames: true,
            keep_classnames: true,
            output: {
              semicolons: false
            }
          }
        })
      ]
    },

    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: "static"
      }),
      new webpack.DefinePlugin(
        {
          "process.env": {
            NODE_ENV: JSON.stringify("production")
          },
          DEBUG: false
        }
      ),
      function () {
        this.plugin("done", function (stats) {
          if (stats.compilation.errors && stats.compilation.errors.length) {
            console.log(stats.compilation.errors);
            process.exit(1);
          }
        });
      }
    ]
  };
};

module.exports = [
  env => {
    return merge(commonConfig(env), prodConfigExtension(env));
  },
  intlPolyfillConfig
]
