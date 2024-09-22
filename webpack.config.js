const path = reqire("path")

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
        clean: true,
    },

    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./src/restaurant.html"]
    },

    plugins: [
        new HtmlWebpackPlugin({
          template: "./src/restaurant.html",
        }),
      ],
      module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.html$/i,
            loader: "html-loader",
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: "asset/resource",
          },
        ],
      },    
};