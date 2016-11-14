var webpack = require('webpack');
var path = require('path');
module.exports = {
    entry: {
        main: [
            "babel-polyfill",
            "./src/index.js"
        ],
    },
    output: {
        path: __dirname+'/build',
        filename: "flv.js"
    },
    plugins: [
    ],
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['es2015'],
                    plugins: ["transform-object-assign", "array-includes"],
                }
            }
        ]
    },
    resolve: {
        modulesDirectories: [
            'node_modules'
        ]
    }
}
