const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const { ProvidePlugin } = require("webpack");

const commonjsPackages = [
  "electron",
  "electron/main",
  "electron/common",
  "electron/renderer",
  "electron-store",
  "dns",
  "fs",
  "source-map-js",
  "url",
  "/^electron.*/",
  "fs-extra"
];

class ESMPolyfillWrapper {
  apply(compiler) {
    compiler.options.plugins.push(
      new ProvidePlugin({
        process: "process/browser.js"
      })
    );

    compiler.options.resolve.fallback = {
      ...compiler.options.resolve.fallback,
      os: "os-browserify/browser.js",
      process: "process/browser.js"
    };
  }
}

module.exports = function (context, options) {
  return {
    name: "docusaurus-node-polyfills",
    configureWebpack(config, isServer) {
      return {
        externals: commonjsPackages,
        plugins: [new ESMPolyfillWrapper(), new NodePolyfillPlugin({ excludeAliases: ["process", "os", "electron-store"] })]
      };
    }
  };
};
