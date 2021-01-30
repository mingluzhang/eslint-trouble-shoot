/// <reference path="../node_modules/@types/node/index.d.ts"/>

var path = require("path");

var appPath = path.join(__dirname, "..");
var nodeModulesPath = path.join(appPath, "node_modules");
var appCorePath = path.join(appPath, "..", "Core");
var webpack = require(path.join(nodeModulesPath, "webpack"));

module.exports = {
  appPath: appPath,
  appCorePath: appCorePath,
  nodeModulesPath: nodeModulesPath,
  webpack: webpack
}