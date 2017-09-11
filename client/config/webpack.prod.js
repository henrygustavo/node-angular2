var webpack = require("webpack");
var webpackMerge = require("webpack-merge");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var commonConfig = require("./webpack.common.js");
var helpers = require("./helpers");

var ENV = process.env.npm_lifecycle_event;

module.exports = webpackMerge(commonConfig,
    {
        devtool: "cheap-module-source-map",
        output: {
            path: helpers.root("dist"),
            filename: 'assets/js/[name].[hash].js'
        },
        module: {
            rules: [
                {
                    test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                    use: 'file-loader?limit=10000&name=assets/fonts/[name].[hash].[ext]'
                }
            ]
        },
        plugins: [
            new webpack.NoEmitOnErrorsPlugin(),
           
            new ExtractTextPlugin("assets/css/[name].[hash].css"),
            new webpack.DefinePlugin({
                'process.env': {
                    'ENV': JSON.stringify(ENV)
                }
            }),
            new webpack.LoaderOptionsPlugin({
                htmlLoader: {
                    minimize: true
                }
            }),
            new webpack.optimize.UglifyJsPlugin({
                sourcemap: true,
                beautify: false,
                comments: false,
                compress: {
                  warnings: false,
                  drop_console: true
                }
             }),
        ]
    });