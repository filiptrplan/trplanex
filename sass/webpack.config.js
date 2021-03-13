const path = require("path");

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "./src/index.js"),
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
        ],
    },
    resolve: {
        extensions: ["*", ".js"],
    },
    module: {
        rules: [
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
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "bundle.js",
    },
    devServer: {
        contentBase: path.resolve(__dirname, "./dist"),
    },
    watchOptions: {
        poll: true,
        aggregateTimeout: 300,
    },
};
