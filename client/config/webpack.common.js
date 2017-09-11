var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var helpers = require('./helpers');

module.exports = {
    entry: {
        'app': "./src/app/main.ts",
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
                use: ["awesome-typescript-loader", "angular2-template-loader"]
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
            }
        ]
    },
    devServer: {
        compress: true,
        port: 1000,
        open: true,
        stats: "errors-only"
    },
    plugins: [
        new webpack.ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/, 
        helpers.root("./src"), {}),
        new webpack.optimize.CommonsChunkPlugin({
            name: ["app", "vendor", "polyfills"]
        }),
        new HtmlWebpackPlugin({template: './src/index.html'}),
        new webpack.ProvidePlugin({jQuery: 'jquery', $: 'jquery', jquery: 'jquery'})]
};
