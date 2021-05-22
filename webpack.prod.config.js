const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const defaultInclude = path.resolve(__dirname, 'src');

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
                include: defaultInclude,
            },
            {
                test: /\.jsx?$/i,
                use: ['babel-loader'],
                include: defaultInclude,
            },
            {
                test: /\.(jpe?g|svg|png|gif)$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 10000
                    }
                }],
                include: defaultInclude
            },
            {
                test: /\.(eot|ttf|woff|wotff2)$/i,
                type: "asset/resource",
                use: [{loader: 'file-loader?name=font/[name]__[hash:base64:5].[ext]'}],
                include: defaultInclude
            },
        ]
    },
    target: 'electron-renderer',
    plugins: [
        new HtmlWebpackPlugin({
            title: "Reactron",
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ],
    stats: {
        colors: true,
        children: false,
        chunks: false,
        modules: false
    },
    optimization: {
        minimize: true
    }
};