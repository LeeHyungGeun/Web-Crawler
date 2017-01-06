var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, '../app/'),
    entry: ['./main.ts'],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist/'),
        publicPath: '/dist'
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
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, '../node_modules')
        ],
        extensions: ['.js', '.json', '.ts', '.css'],
        alias: {

        }
    },
    devServer: {
        hot: true,
        compress: true,
        inline: true,
        contentBase: path.resolve(__dirname, '../'),
        publicPath: '/dist/',
        proxy: [{
            path: [],
            target: ''
        }]
    },
    performance: {
        hints: 'warning',
        maxAssetSize: 200000,
        maxEntrypointSize: 400000,
        assetFilter: function(assetFilename) {
            return assetFilename.endsWith('.css') || assetFilename.endsWith('.js') || assetFilename.endsWith('.ts');
        }
    },
    devtool: 'eval',    // https://webpack.js.org/configuration/devtool/
    target: 'web',  // https://webpack.js.org/configuration/target/
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    profile: true,
    bail: true,
    cache: false,
    watch: true,
    watchOptions: {
        aggregateTimeout: 1000,
        poll: true,
        poll: 500
    },
    recordsPath: path.resolve(__dirname, '../records/records.json'),
    recordsInputPath: path.resolve(__dirname, '../records/records.json'),
    recordsOutputPath: path.resolve(__dirname, '../records/records.json')
};