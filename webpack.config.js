const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Archivo de entrada principal
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // Limpia la carpeta 'dist' antes de cada compilación
  },
  mode: "development", // Establece el modo explícitamente en el nivel superior
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html", // Archivo HTML base
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i, // Para manejar archivos CSS
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i, // Para manejar contenido HTML en JS
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // Para manejar imágenes
        type: "asset/resource",
      },
      {
        test: /\.scss$/i, // Para manejar SCSS/SASS
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  watch: true,
};
