const resolve = require('path').resolve;
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  mode: 'production', //# enable production env
  entry: resolve(__dirname, 'src/index'), //# entry point for production
	output: {
		path: resolve(__dirname, 'dist'), //# bundle folder
		filename: 'index.js',
		library: 'Prodig',
		libraryTarget: 'umd',
	},
	module: {
		rules: [
			{
				exclude: /node_modules|npm-*/,
				test: /\.(ts|tsx)?$/,
				use: [
					'awesome-typescript-loader',
				]
			},
			// {
			// 	exclude: /node_modules|npm-*/,
			// 	test: /\.(ts|tsx)?$/,
			// 	enforce: 'pre',
			// 	use: [
			// 		{
			// 			loader: 'tslint-loader',
			// 			options: {
			// 				emitErrors: true
			// 			},

			// 		}
			// 	]
			// },
			{
        test: /\.scss$/,
        use: [
          'style-loader', //# extract css to separate file
          {
            loader: 'css-loader', //# generate Typescript typings for CSS modules
            options: {
              url: false, //# disable url() resolving by css-loader
            }
          },
          'postcss-loader', //# run postcss plugins (e.g. autoprefixer)
          'sass-loader', //# parse scss into css
        ]
      },
			// {
			// 	test: /\.(woff|woff2|eot|ttf|otf)$/, //# handle fonts
			// 	use: [
			// 		{
			// 			loader: 'file-loader',
			// 			options: {
			// 				name: '[name].[ext]',
			// 				outputPath: 'fonts/' //# put into fonts folder
			// 			}
			// 		}
			// 	]
			// },
			// {
			// 	test: /\.(png|svg|jpg|gif)$/, //# handle image file
			// 	use: [
			// 		{
			// 			loader: 'file-loader',
			// 			options: {
			// 				name: '[name].[ext]',
			// 				outputPath: 'images/' //# put into images folder
			// 			}
			// 		}
			// 	]
			// },
		]
	},
	resolve: {
		extensions: ['*', '.js', '.ts', '.tsx'], //# automatically resolve certain extensions
	},
	plugins: [
		new CleanWebpackPlugin(['dist']), //# clean output folder
	],
}


