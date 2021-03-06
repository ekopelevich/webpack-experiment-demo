var webpack = require("webpack"),
    path = require("path"),
    sourcePath = path.join(__dirname, "source"),
    distPath = path.join(__dirname, "dist"),
    vendorPath = path.join(__dirname, "node_modules");

module.exports = {
    entry: {
        app: path.resolve(sourcePath, "script", "app.js")
    },

    output: {
        path: path.resolve(distPath),
        filename: "bundle.js"
    },

    resolve: {
        root: path.resolve(sourcePath)
    },

    module: {
        loaders: [
            { test: /\.js$/, loader: "babel", exclude: new RegExp(vendorPath) },
            { test: /\.html/, loader: "babel!template-string" },
            { test: /\.css$/i, loader: "style!css?modules" },
            { test: /\.(png|jpg|jpeg|gif|woff|svg)$/, loader: "url-loader?limit=8192" }
        ]
    }
};