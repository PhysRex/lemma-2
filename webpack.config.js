const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
/* 
  TODO: Break into development and production configs
  https://itnext.io/front-end-development-with-javascript-using-reactjs-redux-sass-and-webpack-1a2fdd46daba
  https://developerhandbook.com/webpack/how-to-configure-scss-modules-for-webpack/
 */
module.exports = {
  // entry: ['./src/index.js','./src/App.scss'],
  // output: {
  //     filename: 'js/main.js',
  //     path: path.resolve(__dirname, 'dist')
  // },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        loader: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: { sourceMap: true }
          }
        ]
      }
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ],
  // resolve: { // allows imports w/out extension
  //   extensions: ['.js', '.jsx', '.scss']
  // }
}
