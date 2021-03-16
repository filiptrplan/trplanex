const path = require("path");

module.exports = {
    mode: "development",
    entry: {
        main: "./src/index.js",
        //generated: "./src/generated.js",
        //light: "./src/theme-light.js", 
        //dark: "./src/theme-dark.js"
    },
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
                    "style-loader",
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
    ],
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].js",
    },
    devServer: {
        contentBase: path.resolve(__dirname, "./dist"),
    },
    watchOptions: {
        poll: true,
        aggregateTimeout: 300,
    },
}
