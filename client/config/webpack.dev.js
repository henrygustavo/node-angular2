var webpackMerge = require("webpack-merge");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var commonConfig = require("./webpack.common.js");
var helpers = require("./helpers");

module.exports = webpackMerge(commonConfig,
    {
        devtool: "cheap-module-eval-source-map",

        output: {
            path: helpers.root("dist"),
            filename: 'assets/js/[name].js'
        },
        module: {
            rules: [
                {
                    test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                    use: 'file-loader?limit=10000&name=assets/fonts/[name].[ext]'
                }
            ]
        },
        plugins: [
            new ExtractTextPlugin("assets/css/[name].css")
        ],
        devServer: {
            compress: true,
            port: 9090,
            open: true,
            stats: "errors-only"
        }
    });