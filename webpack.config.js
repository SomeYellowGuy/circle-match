const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(png|wav|mp3)$/i,
                type: "asset/resource"
            },
            {
                test: /\.css$/i,
                use: ["css-loader"],
            },        
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'circle-match.bundle.js',
    },
    plugins: [new HtmlWebpackPlugin({
        title: "Circle Match" ,
        favicon: "./public/favicon.png"
    })],
    mode: "development",
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        },
        compress: true,
        port: 3000,
        hot: true
    }
};