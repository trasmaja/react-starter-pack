var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public/dist');
var APP_DIR = path.resolve(__dirname, 'src');


module.exports = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
        publicPath: '/' //för routing
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.(jsx|js)$/,
                include: APP_DIR,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env','es2015','react','stage-2'],
                        plugins: ["transform-decorators-legacy"]
                    }
                }
    }, {
                test: /\.scss$/,
                include: APP_DIR,
                exclude: /(node_modules|bower_components)/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
            }, {
                    loader: "css-loader" // translates CSS into CommonJS
            }, {
                    loader: "sass-loader" // compiles Sass to CSS
            }]
        }, {
                test: /\.(jpg|otf|png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            },
            {
                test: /\.css$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: "css-loader"
                }]
        }

  ]
    },
 devServer: {
        historyApiFallback: true,
  }

};

/*
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    // ...
    module: {
        loaders: [
            // ...
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('public/style.css', {
            allChunks: true
        })
    ]
}*/
