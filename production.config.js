const path = require("path");
let config = require("./webpack.config");

config.mode = "production";

config.output = {
    path: path.resolve(__dirname, 'build'),
    filename: 'circle-match.bundle.js',
    clean: true
};

module.exports = config;