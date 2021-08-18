const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve('client/src/index.js'),
  output: {
    path: path.resolve('client/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react']
        }
      }
    ]
  }
}