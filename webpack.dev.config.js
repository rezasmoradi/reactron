const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { spawn } = require('child_process');

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
                test: /\.(jpe?g|png|gif)$/i,
                use: ['file-loader?name=img/[name]__[hash:base64:5].[ext]'],
                include: defaultInclude,
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/i,
                use: ['file-loader?name=font/[name]__[hash:base64:5].[ext]'],
                include: defaultInclude,
            }
        ]
    },
    target: 'electron-renderer',
    plugins: [
        new HtmlWebpackPlugin({
            title: "Reactron",
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],
    devtool: 'cheap-source-map',
    devServer: {
        hot: true,
        publicPath: '/',
        contentBase: path.resolve(__dirname, 'dist'),
        stats: {
            colors: true,
            chunks: false,
            children: false,
        },
        before() {
            spawn('electron', ['.'], {
                shell: true, env: process.env, stdio: 'inherit'
            }).on('close', () => process.exit(0))
                .on('error', (err => console.log(err)))
        },
    }
};