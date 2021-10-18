const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

const config = {
	mode: "production",
	entry: "./src/index.mjs",
	target: "node14",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "index.js",
		libraryTarget: "commonjs2",
	},
	resolve: {
		extensions: [".js", ".mjs"],
	},
	module: {
		rules: [
			{
				test: /\.(js|mjs)$/i,
				use: "babel-loader",
				exclude: /node_modules/,
			},
		],
	},
	plugins: [new CleanWebpackPlugin()],
}

module.exports = config
