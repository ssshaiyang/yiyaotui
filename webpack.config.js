var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: path.join(__dirname),
    devtool: debug ? "inline-sourcemap" : null,
    entry: "./src/app.js",
    module: {
        loaders: [{
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015'],
                    plugins: ['react-html-attrs'], //添加组件的插件配置
                }
            },
            //下面是使用 ant-design 的配置文件
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            {
              test: /\.less$/,
              use: [
                  require.resolve('style-loader'),
                  {
                      loader: require.resolve('css-loader')
                  },
                  {
                      loader: require.resolve('less-loader'),
                      options: {
                      modifyVars: {
                        'primary-color': '#f6f6f6',
                        'link-color': '#1DA57A',
                        'border-radius-base': '2px',
                      },
                      javascriptEnabled: true,
                      } // compiles Less to CSS
                  },
              ],
            }, 
            {
              test: /.(png|jpg)$/,
              use: 'url-loader?lomit=8192'
            }

        ]
    },
    output: {
        path: __dirname,
        filename: "./src/bundle.js"
    },

    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ],
};