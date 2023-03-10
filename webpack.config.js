const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { env } = require("process");

module.exports = {
  devtool: env.production ? "none" : "source-map",
  entry: { 
    main: "./src/index.ts"
  },
  output: {
    path: path.resolve(__dirname, "wwwroot"),
    filename: "[name].[chunkhash].js",
    publicPath: "./",
  },
  resolve: {
    extensions: [".js", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      } 
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({             // default => inject 'all' chunks
      template: "./src/index.html",
      filename: "index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[chunkhash].css",
    })
  ],
};