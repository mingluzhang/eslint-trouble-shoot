var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var configs = require("./webpack.dev.config");

var compiler = webpack(configs.map(config => config({})));

var server = new WebpackDevServer(compiler, {
  hot: true,
  noInfo: false,
  disableHostCheck: true,
  inline: true,
  public: "http://localhost:4444",
  publicPath: "/",
  injectHot: (configFile) => configFile.name !== "intl",
  stats: {
    // With console colors
    colors: true,
    // add the hash of the compilation
    hash: true,
    // add webpack version information
    version: false,
    // add timing information
    timings: true,
    // add assets information
    assets: false,
    // add chunk information
    chunks: false,
    // add built modules information to chunk information
    chunkModules: false,
    // add built modules information
    modules: false,
    // add also information about cached (not built) modules
    cached: false,
    // add information about the reasons why modules are included
    reasons: false,
    // add the source code of modules
    source: false,
    // add details to errors (like resolving log)
    errorDetails: true,
    // add the origins of chunks and chunk merging info
    chunkOrigins: false,
    // Add messages from child loaders
    children: true,
    // Avoid large number of entry points output (mainly on intl polyfill)
    entrypoints: false
  },
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
});

server.listen(4444, "localhost", function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Please wait, I'm building the world for you. The first-time build takes some time.....");
});