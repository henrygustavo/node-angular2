var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");

module.exports = {
    entry: {
        'app': "./src/app/main.ts",
        'polyfills': "./libs/polyfills.ts",
        'vendor': "./libs/vendor.ts",
    },
    resolve: {
        extensions: [".ts", ".js",".css", ".html"]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ["awesome-typescript-loader", "angular2-template-loader"]
            },
            {
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
            },
        ]
    },
    devServer: {
        compress: true,
        port: 1000,
        open: true,
        stats: "errors-only"
    },
    plugins: [
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            "./src",
        {}),
        new webpack.optimize.CommonsChunkPlugin({
            name: ["app","vendor", "polyfills"]
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new ExtractTextPlugin({
            filename: 'app.css',
            disable: false,
            allChunks: true
        })
    ]
};