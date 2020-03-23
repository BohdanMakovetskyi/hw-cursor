const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: ["babel-polyfill", path.join(__dirname, 'src') + '/index.js'],
    output: {
        path: path.join(__dirname,'dist'),
        filename: '[name].js'
    },
    devServer: {
        port: 3000,
        contentBase: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                            disable: true,
                        },
                    },
                ],
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        filename: "index.html",
        template: "./src/index.html"
    })]
};