'use strict'
const utils = require('./utils');
const path = require('path');
const config = require('../config');
const webpackMerge = require('webpack-merge');
const baseWebpack = require('./webpack.base.conf');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const stylelintFormatter = require('stylelint-formatter-pretty');

const { open, host, port, hot, stylelintFix, historyApiFallback, notifyOnQuiet, notifyOnErrors } = config.dev;

module.exports = webpackMerge(baseWebpack, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    open: open,
    host: host,
    port: port,
    hot: hot,
    quiet: notifyOnQuiet,
    historyApiFallback: historyApiFallback
  },
  plugins: [
    new StyleLintPlugin({
      fix: stylelintFix,
      context: "src",
      configFile: path.resolve(__dirname, '../.stylelintrc.js'), // 指定 stylelint 配置的文件 
      files: '**/*.{css,less}',
      syntax: 'less',
      emitError: false,
      emitWarning: true, 
      formatter: stylelintFormatter
    }),
    new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: [`Your application is running here: http://${host}:${port}`],
      },
      onErrors: notifyOnErrors
      ? utils.createNotifierCallback()
      : undefined
    })
  ]
});