const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { spawn } = require('child_process');
const ReactRefreshWebpack = require('@pmmmwh/react-refresh-webpack-plugin');

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
                use: [
                    {
                        loader: require.resolve('babel-loader'),
                        options: {
                            plugins: [
                                require.resolve('react-refresh/babel'),
                            ].filter(Boolean),
                        },
                    },
                ],
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
                use: [{ loader: 'file-loader?name=font/[name]__[hash:base64:5].[ext]' }],
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
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ReactRefreshWebpack(),
    ].filter(Boolean),
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