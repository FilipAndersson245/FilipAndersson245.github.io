const path = require("path");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const webpack = require("webpack");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(sass|scss|css)$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "./dist"),
    open: true,
    compress: true,
    // hot: true,
    inline: true, // comment out if not needed.
    port: 8081,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
  ],
});
