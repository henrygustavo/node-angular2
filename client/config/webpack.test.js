var webpack = require("webpack");
var helpers = require('./helpers');

module.exports = {
    devtool: 'inline-source-map',

    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['awesome-typescript-loader', 'angular2-template-loader']
            }, {
                test: /\.html$/,
                use: ['html-loader']

            }, {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                use: ['null']
            }, {
                test: /\.css$/,
                exclude: helpers.root('src', 'app'),
                use: ['null']
            }, {
                test: /\.css$/,
                include: helpers.root('src', 'app'),
                use: ['raw-loader']
            }
        ]
    },
    plugins: [
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            helpers.root("./src"),
        {})
    ]
}