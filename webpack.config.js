module.exports = {
  entry: './app/client.jsx',
  output: {
    filename: 'bundle.js',
    path: 'public'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      }
    ]
  }
};