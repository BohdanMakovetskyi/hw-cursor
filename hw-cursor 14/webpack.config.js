const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
    src: path.join(__dirname, 'src'),
    dist: path.join(__dirname, 'dist')
};

module.exports = {
    mode: "development",
    entry: ["babel-polyfill",PATHS.src + '/index.js'],
    output: {
        path: PATHS.dist,
        filename: '[name].js'
    },
    devServer: {
        port: 3000,
        contentBase: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
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