 const path = require("path")
 
 module.exports = {
	context: path.resolve(__dirname),
  mode: 'development',
	entry: "./src/index.js",
	output: {
		path: path.join(__dirname, "dist"),
		publicPath: 'http://localhost:3000/dist/',
		filename: "bundle.js",
	},
	devtool: 'inline-source-map',
	devServer: {
		port: 3000,
    proxy: {
      '*': {
        target: 'http://localhost:8000',
      }
    }
	},
};
