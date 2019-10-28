const path = require('path');
const merge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const baseConfig = require('./webpack.base.js');

const isDevelopment = process.env.NODE_ENV === 'development';

const config = {
  // Inform webpack for nodeJS not browser

  target: 'node',

  // Root file of app
  entry: './src/index.js',

  // Tell webpack whete to put the outpu
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  externals: [webpackNodeExternals()],

  module: {
    rules: [{
        test: /\.module\.s(a|c)ss$/,
        loader: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: isDevelopment
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment
            }
          }
        ]
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        loader: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment
            }
          }
        ]
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: isDevelopment ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
    })
  ],


};

module.exports = merge(baseConfig, config);
