const path = require('path');

module.exports = {
	mode: 'development',
	entry: './js/index.js',
	output: {
		path: path.resolve(__dirname, './'),
		filename: 'app.js',
	},
	devServer: {
		contentBase: path.join(__dirname, './'),
		compress: false,
		port: 55555,
	},
};
