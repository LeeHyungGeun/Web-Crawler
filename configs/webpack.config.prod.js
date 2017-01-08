const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, '../app/'),
    entry: ['./main.ts'],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist/'),
        publicPath: '/dist/'
    },
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, '../node_modules')
        ],
        extensions: ['.js', '.json', '.ts', '.css']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loaders: [
                    'babel-loader',
                    'ts-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true
        })
    ],
    devtool: 'nosources-source-map',    // https://webpack.js.org/configuration/devtool/
    target: 'web'  // https://webpack.js.org/configuration/target/
};