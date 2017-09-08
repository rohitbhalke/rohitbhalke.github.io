var config = {
    entry: '/Users/rbo2913/Documents/My Directory/React/MyWebsite/home.js',

    output: {
        path:__dirname,
        filename: 'index.js',
        publicPath: '/public/'
    },

    devServer: {
        inline: true,
        port: 5000
    },

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

module.exports = config;