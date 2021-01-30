
/// <reference path="../node_modules/@types/node/index.d.ts"/>

const path = require("path");
const fs = require("fs");
const webpackUtility = require("./webpack.utility");
const webpack = require("webpack");

module.exports = env => {
    const intlLocaleDataPath = path.join(webpackUtility.nodeModulesPath, "intl", "locale-data", "jsonp");

    const entries = {};

    fs.readdirSync(intlLocaleDataPath).forEach((fileName) => {
        const entryName = path.parse(fileName).name;
        const entryFile = path.join(intlLocaleDataPath, fileName);

        entries[entryName] = entryFile;
    });

    return {
        name: "intl",

        target: "web",

        mode: env.production ? "production" : "development",

        entry: entries,

        stats: "errors-only",

        output: {
            filename: "[name].js",
            path: path.join(webpackUtility.appPath, env.production ? "AppRead" : "dist", "IntlPolyfillLocaleData")
        },

        // use "eval" for faster incremental builds (code is transformed into js, so no direct ts debugging)
        // more options here: http://webpack.github.io/docs/configuration.html#devtool
        devtool: env.production ? undefined : "eval-source-map",

        watch: false,

        plugins: [
            new webpack.ProvidePlugin({
                IntlPolyfill: "intl"
            })
        ]
    }
}