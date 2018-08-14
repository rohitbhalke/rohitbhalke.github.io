var PROD = (process.env.PROD_ENV === "prod") || (process.argv.indexOf('prod')!==-1);
var webpack = require('webpack');


var config = {
    entry: './home.js',

    output: {
        path:__dirname,
        filename: 'index.js',
        publicPath: '/public/'
    },

    devServer: {
        inline: true,
        port: 5000
    },
    plugins: [],

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}

PROD = true;
if(PROD) {
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        })
    )
}


module.exports = config;