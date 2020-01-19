'use strict'
const path = require('path');
const config = require('../config');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlWebpackPlugin = require("add-asset-html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const EslintFriendlyFormatter = require('eslint-friendly-formatter');

const devMode = process.env.NODE_ENV === 'development';
const { eslintFix } = config.dev;

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    main: './src/index.tsx'
  },
  output: {
    publicPath: '/'
  },
  resolve: {
    extensions: ['.tsx', '.ts', 'jsx', '.js', '.css'],
    alias: {
      '@': resolve('src'),
      '@img': resolve('src/static/images')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)(\?.*)?$/,
        use: [
          'babel-loader',
          {
            loader: 'eslint-loader',
            options: {
              fix: eslintFix,
              emitError: false,
              emitWarning: true,
              formatter: EslintFriendlyFormatter
            },
          }
        ],
        include: [resolve('src')],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1024,
          name: 'static/img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'template/index.html',
      filename: 'index.html',
      inject: true,
      favicon: 'template/favicon.ico',
    }),
    new AddAssetHtmlWebpackPlugin({
      filepath: [resolve('dll/vendor.*.dll.js'), resolve('dll/polyfill.*.dll.js')],
      publicPath: '/static/js',
      outputPath: 'static/js'
    }),
    new webpack.DllReferencePlugin({
      manifest: resolve('dll/vendor.manifest.json')
    }),
    new webpack.DllReferencePlugin({
      manifest: resolve('dll/polyfill.manifest.json')
    })
  ]
}