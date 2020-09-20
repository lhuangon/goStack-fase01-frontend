const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.js$/, //termina com js
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/, //termina com css
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader'},
          { loader: 'css-loader'},
        ]
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i, //termina com gif, png, jpeg, jpg e "i" significa não sensitive
        use: { loader: 'file-loader'}
      }
    ]
  }
};
