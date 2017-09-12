var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var helpers = require('./helpers');

module.exports = {
    entry: {
        'app': "./src/app/main.ts",
        'appAdmin': "./src/appAdmin/main-admin.ts",
        'polyfills': "./src/polyfills.ts",
        'vendor': "./src/vendor.ts"
    },
    resolve: {
        extensions: [".ts", ".js", ".css", ".html"]
    },
    devtool: "cheap-module-eval-source-map",
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ["awesome-typescript-loader", "angular2-template-loader", "angular-router-loader"]
            }, {
                test: /\.html$/,

                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: false,
                            removeComments: true,
                            collapseWhitespace: false,

                            // angular 2 templates break if these are omitted
                            removeAttributeQuotes: false,
                            keepClosingSlash: true,
                            caseSensitive: true,
                            conservativeCollapse: true
                        }
                    }
                ]
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({fallback: "style-loader", use: ["css-loader"]})
            }, {
                test: /\.(jpg|jpeg|png|gif|svg)(\?.*)?$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[hash].[ext]",
                            publicPath: "/",
                            outputPath: "assets/image/"
                        }
                    }
                ]
            }, {
                test: /\.(eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[hash].[ext]",
                            publicPath: "/",
                            outputPath: "assets/fonts/"
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/, helpers.root("./src"), {}),
        new webpack
            .optimize
            .CommonsChunkPlugin({
                name: ["vendor", "polyfills"]
            }),
        new HtmlWebpackPlugin({
            title: "index",
            excludeChunks: ["appAdmin"],
            template: "src/index.html",
            chunksSortMode: helpers.orderChunk(['polyfills', 'vendor', 'bootstrap', 'app'])
        }),
        new HtmlWebpackPlugin({
            title: "admin",
            excludeChunks: ["app"],
            filename: "admin.html",
            template: "src/admin.html",
            chunksSortMode: helpers.orderChunk(['polyfills', 'vendor', 'bootstrap', 'appAdmin'])
        }),
        new webpack.ProvidePlugin({jQuery: 'jquery', $: 'jquery', jquery: 'jquery'})
    ]
};
