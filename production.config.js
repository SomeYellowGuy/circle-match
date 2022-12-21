const path = require("path");
let config = require("./webpack.config");

config.mode = "production";

config.output = {
    path: path.resolve(__dirname, 'build'),
    filename: 'puzzle-slide.bundle.js',
    clean: true
};

module.exports = config;