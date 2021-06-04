const path = require("path");
const HookShellScriptPlugin = require("hook-shell-script-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: {
        main: "./src/index.js",
        generated: "./src/generated.js",
        light: "./src/theme-light.js", 
        dark: "./src/theme-dark.js" },
    resolve: {
        extensions: ["*", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
        new HookShellScriptPlugin({
            beforeRun: ["node compile-themes.js"],
        }),
    ],
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].js",
    },
};
