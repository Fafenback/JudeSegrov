const path = require("path");
const slsw = require("serverless-webpack");

module.exports = {
  entry: "./src/client/client.js",
  mode: slsw.lib.webpack.isLocal ? "development" : "production",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public")
  },
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
