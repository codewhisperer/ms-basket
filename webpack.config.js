var path = require("path");
module.exports = {
  module: {
    loaders: [
      { test: /\.json$/,   loader: "json-loader" },
      { test: /\.js$/,   loader: "uglify" },
      { test: /\.css$/,    loader: "style-loader!css-loader" },
      { test: /\.html$/,   loader: "raw" },
      { test: /\.(png|gif|jpg|eot)$/, loader: "file?name=[path][name].[ext]" },
      { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
    ]
  },
  bail: true,
  cache: true
};
