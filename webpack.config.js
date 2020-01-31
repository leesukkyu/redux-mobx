const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// 다국어 처리
module.exports = {
  mode: "development",
  entry: {
    app: ["core-js", "./src/index"]
  },
  output: {
    path: `${__dirname}/build`,
    filename: "bundle.js",
    chunkFilename: "chunks/[name].chunks.js",
    publicPath: "./"
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        include: /(src)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              configFile: path.resolve("babel.config.js")
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(), // 폴더 클린
    new HtmlWebpackPlugin({
      // 기본 확장 템플릿
      template: "public/index.html"
    })
  ],
  devtool: "inline-source-map"
};
