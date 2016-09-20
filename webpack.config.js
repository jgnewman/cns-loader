module.exports = {
  entry: './test/index.cns',
  output: {
    filename: './test/bundle.js'
  },
  module: {
    loaders: [
      { test: /\.cns$/, loader: "cns" }
    ]
  },
  resolve: {
    extensions: ["", ".web.cns", ".web.js", ".cns", ".js"]
  }
}
