const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const port = 3000;
const basename = '/';

module.exports = () => {
  
  return {
    devServer: {
      port: port,
      historyApiFallback: true,
      open: true
    },
    entry: [
      './src/index'
    ],
    output: {
      publicPath: basename,
      filename: '[name]-[contenthash].js'
    },
    target: ['web', 'es5'],
    resolve: {
      extensions: ['.js', '.jsx', '.css'],
      modules: [
        path.resolve('.'),
        'node_modules'
      ],
      alias: {
        react: path.resolve('node_modules/react'),
      }
    },
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        },
        {
          test: /\.less$/i,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            'less-loader',
          ],
        },
        {
          test: /\.(css)$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            }]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'index.html',
        filename: 'index.html',
        title: 'tpcde',
      }),
      new Dotenv()
    ]
  };
}
