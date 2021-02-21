const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { ESBuildPlugin } = require("esbuild-loader");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const SVGSpritemapPlugin = require("svg-spritemap-webpack-plugin");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "./src/index.ts"),
  },

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "esbuild-loader",
        options: {
          loader: "ts",
          target: "es2015",
        },
      },
      // Image data
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/i,
        type: "asset/resource",
      },
      // Fonts and SVGs
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
    ],
  },

  plugins: [
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Filip Andersson Portfolio",
      template: path.resolve(__dirname, "./src/template.html"), // template file
      filename: "index.html", // output file
    }),
    new FaviconsWebpackPlugin({
      logo: "./src/assets/map/logo.svg",
      cache: true,
      inject: true,
      favicons: {
        lang: "en-US",
        developerName: "Filip Andersson",
        orientation: "landscape",
        icons: {
          android: false,
          appleIcon: false,
          appleStartup: false,
          coast: false,
          favicons: true,
          firefox: false,
          windows: false,
          yandex: false,
        },
      },
    }),

    new SVGSpritemapPlugin("./src/assets/map/**/*.svg", {
      styles: true,
    }),
    new ESBuildPlugin(),
  ],
};
