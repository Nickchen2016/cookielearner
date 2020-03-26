const { resolve } = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        path: resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        rules:[
            {
                test: /\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.(png|jpg|gif)$/,
                loader : 'url-loader',
                
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './app.html'
        })
    ],
    mode: 'development',
    devServer: {
        contentBase: resolve(__dirname, 'dist'),
        compress: true,
        port: 3001,
        open: true
    } 
}