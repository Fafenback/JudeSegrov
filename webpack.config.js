const slsw = require("serverless-webpack");
const nodeExternals = require("webpack-node-externals");
// const CopyWebpackPlugin = require("copy-webpack-plugin");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  entry: slsw.lib.entries,
  target: "node",
  mode: slsw.lib.webpack.isLocal ? "development" : "production",

  // Necessary for __dirname and __filename to work correctly when bundling with Webpack for the dev environment.
  // XXX See https://github.com/webpack/webpack/issues/1599
  node: {
    __dirname: true,
    __filename: true
    // fs: 'empty',
    // module: "empty",
  },
  // Generate sourcemaps for proper error messages
  devtool: "source-map",
  // We use webpack-node-externals to excludes all node deps. (like aws-sdk)
  // You can manually set the externals too.
  externals: [nodeExternals()],
  // Run babel on all .js files and skip those in node_modules
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader", "eslint-loader"],
        include: __dirname,
        exclude: /node_modules/
      }
    ]
  }
};
