const path = require("path");

module.exports = {
  entry: "./src/index.ts", // ponto de entrada do seu código
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js", // nome do arquivo de saída
    path: path.resolve(__dirname, "dist"), // pasta de saída
  },
};
