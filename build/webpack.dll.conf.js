const path = require('path');
const webpack = require('webpack');
const library = '[name]_dll_lib';
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    vendor: ['react', 'react-dom', 'axios'],
    polyfill: ['core-js/stable', 'regenerator-runtime/runtime']
  },
  output: {
    filename: '[name].[chunkhash].dll.js',
    path: path.resolve(__dirname, '../dll'),
    library: library
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DllPlugin({
      name: library,
      path: path.join(__dirname, '../dll', '[name].manifest.json')
    })
  ]
}