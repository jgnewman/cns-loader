module.exports = {
  entry: './test/index.cns',
  output: {
    filename: './test/bundle.js'
  },
  module: {
    loaders: [
      { test: /\.(cns|cream)$/, loader: "cns" }
    ]
  },
  resolve: {
    extensions: [".web.cns", ".web.cream", ".cns", ".cream"]
  }
}
