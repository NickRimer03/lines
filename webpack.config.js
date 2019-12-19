const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  mode: "development",
  watch: true,
  entry: {
    index: "./index.js"
  },
  output: {
    path: `${__dirname}/dist`
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [{ loader: "css-loader" }, { loader: "sass-loader", options: { implementation: require("sass") } }]
        })
      }
    ]
  },
  plugins: [new ExtractTextPlugin("style.css")]
};
