const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const htmlPlugin = new HtmlWebPackPlugin({
	template: "./src/index.html",
	filename: "./index.html"
});

const copyPlugin = new CopyWebpackPlugin([{ from: './src/static/', to: ''}]);

module.exports = {
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: path.resolve('node_modules'),
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader",
						options: {
							modules: true,
							importLoaders: 1,
							localIdentName: "[name]_[local]_[hash:base64]",
							sourceMap: true,
							minimize: true
						}
					}
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					"file-loader"
				]
			}
		]
	},
	devServer: {
		historyApiFallback: true
	},
	plugins: [htmlPlugin, copyPlugin]
};
