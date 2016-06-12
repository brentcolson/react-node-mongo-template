module.exports = {
  //entry is the root component of the app and will be processed below by the query
  entry: "./client/index.js",
  //
  //the resulting file of what the root and all required components equal after being processed
  //by the query loader
  output: {
    filename: "public/bundle.js"
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};